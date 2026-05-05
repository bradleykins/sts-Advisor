// Load card database
let CARDS = {};
if (typeof DB !== 'undefined') {
  CARDS = DB;
}

// Global state
let currentDeck = [];
let currentCharacter = 'ironclad';
let currentFloor = 10;
let detectedArchetypes = new Map();

// Card type icons
const TYPE_ICONS = {
  'Attack': '⚔️',
  'Skill': '🛡️',
  'Power': '⚡',
  'Status': '💀',
  'Curse': '👿'
};

// Starter decks
const STARTER_DECKS = {
  'ironclad': 'Strike, Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Bash',
  'silent': 'Strike, Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Defend, Neutralize, Survivor',
  'defect': 'Strike, Strike, Strike, Strike, Zap, Zap, Zap, Zap, Dualcast, Defend, Defend, Defend, Defend',
  'watcher': 'Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Eruption, Vigilance'
};

function loadStarter(char) {
  document.getElementById('character').value = char;
  document.getElementById('deck-input').value = STARTER_DECKS[char] || '';
  analyzeDeck();
}

function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

function analyzeDeck() {
  const input = document.getElementById('deck-input').value;
  currentCharacter = document.getElementById('character').value;
  currentFloor = parseInt(document.getElementById('floor').value);

  currentDeck = input
    .split(',')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // Update basic stats
  document.getElementById('deck-count').textContent = currentDeck.length;

  const costs = currentDeck
    .map(name => {
      const card = findCard(name);
      return card?.cost >= 0 ? card.cost : null;
    })
    .filter(c => c !== null);

  const avgCost = costs.length > 0 ? (costs.reduce((a,b) => a+b, 0) / costs.length).toFixed(1) : '0';
  document.getElementById('avg-cost').textContent = avgCost;

  // Calculate win probability (simple heuristic)
  const deckHealth = calculateDeckHealth();
  document.getElementById('win-prob').textContent = deckHealth + '%';

  // Detect archetypes
  detectArchetypes(currentDeck);

  // Render visualizations
  renderCostChart();
  renderPieChart();
  renderArchetypeStrength();
}

function findCard(name) {
  // Case-insensitive search
  const normalized = name.toLowerCase().trim();
  return Object.values(CARDS).find(c =>
    c.name?.toLowerCase() === normalized
  );
}

function calculateDeckHealth() {
  if (currentDeck.length === 0) return 0;

  let score = 50;

  // Deck size (20-25 is optimal)
  if (currentDeck.length >= 20 && currentDeck.length <= 25) score += 10;
  else if (currentDeck.length > 30) score -= 15;

  // Average cost (1-1.5 is good)
  const costs = currentDeck
    .map(name => findCard(name)?.cost)
    .filter(c => c !== null && c !== undefined && c >= 0);

  if (costs.length > 0) {
    const avg = costs.reduce((a,b) => a+b, 0) / costs.length;
    if (avg >= 1 && avg <= 1.5) score += 10;
    else if (avg > 2) score -= 10;
  }

  // Archetype consistency
  if (detectedArchetypes.size > 0) {
    const maxStrength = Math.max(...detectedArchetypes.values());
    score += Math.min(maxStrength * 2, 20);
  }

  // Act scaling
  const act = Math.floor(currentFloor / 17) + 1;
  const powerCount = currentDeck.filter(name => {
    const card = findCard(name);
    return card?.type === 'Power';
  }).length;

  if (act >= 2 && powerCount >= 2) score += 10;

  return Math.max(0, Math.min(100, Math.round(score)));
}

function detectArchetypes(deck) {
  detectedArchetypes.clear();

  deck.forEach(cardName => {
    const card = findCard(cardName);
    if (!card || !card.keywords) return;

    // Simple keyword-based archetype detection
    const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];

    keywords.forEach(kw => {
      const normalized = kw.toLowerCase();
      detectedArchetypes.set(normalized, (detectedArchetypes.get(normalized) || 0) + 1);
    });
  });
}

function renderCostChart() {
  const costDist = [0, 0, 0, 0, 0, 0]; // 0, 1, 2, 3, 4+, X

  currentDeck.forEach(name => {
    const card = findCard(name);
    if (!card) return;

    if (card.cost === -1) costDist[5]++;
    else if (card.cost >= 4) costDist[4]++;
    else costDist[card.cost]++;
  });

  const maxCount = Math.max(...costDist, 1);

  const html = costDist.map((count, idx) => {
    const height = (count / maxCount) * 100;
    const label = idx === 5 ? 'X' : idx === 4 ? '4+' : idx;

    return `
      <div class="cost-bar" style="height: ${height}%;">
        <div class="cost-count">${count}</div>
        <div class="cost-label">${label}</div>
      </div>
    `;
  }).join('');

  document.getElementById('cost-chart').innerHTML = html;
}

function renderPieChart() {
  const types = { Attack: 0, Skill: 0, Power: 0 };

  currentDeck.forEach(name => {
    const card = findCard(name);
    if (card && types.hasOwnProperty(card.type)) {
      types[card.type]++;
    }
  });

  const total = Object.values(types).reduce((a, b) => a + b, 0);
  if (total === 0) return;

  const attackPct = Math.round((types.Attack / total) * 100);
  const skillPct = Math.round((types.Skill / total) * 100);
  const powerPct = Math.round((types.Power / total) * 100);

  document.getElementById('attack-pct').textContent = attackPct + '%';
  document.getElementById('skill-pct').textContent = skillPct + '%';
  document.getElementById('power-pct').textContent = powerPct + '%';

  const attackDeg = (types.Attack / total) * 360;
  const skillDeg = (types.Skill / total) * 360;

  const chart = document.getElementById('pie-chart');
  chart.style.setProperty('--attack-deg', attackDeg + 'deg');
  chart.style.setProperty('--skill-deg', skillDeg + 'deg');
}

function renderArchetypeStrength() {
  if (detectedArchetypes.size === 0) {
    document.getElementById('archetype-strength-bars').innerHTML =
      '<div style="color: #64748b; text-align: center; padding: 20px;">No archetypes detected</div>';
    return;
  }

  const sorted = Array.from(detectedArchetypes.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const maxCount = sorted[0][1];

  const html = sorted.map(([archetype, count]) => {
    const percentage = (count / maxCount) * 100;
    const displayName = archetype.charAt(0).toUpperCase() + archetype.slice(1);

    return `
      <div>
        <div class="strength-label">${displayName} (${count} cards)</div>
        <div class="strength-bar">
          <div class="strength-fill" style="width: ${percentage}%;">
            ${Math.round(percentage)}%
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('archetype-strength-bars').innerHTML = html;
}

function scoreCard(cardName, context = {}) {
  const card = findCard(cardName);
  if (!card) {
    return {
      score: 0,
      reason: 'Card not found in database',
      breakdown: []
    };
  }

  let score = 50;
  let breakdown = [];

  // Character match
  if (card.character && card.character !== currentCharacter) {
    return {
      score: 0,
      reason: 'Wrong character',
      breakdown: [{ factor: 'Wrong character', value: -100 }]
    };
  }

  // Act scaling
  const act = Math.floor(currentFloor / 17) + 1;

  // Rarity bonus
  if (card.rarity === 'rare') {
    score += 10;
    breakdown.push({ factor: 'Rare card', value: +10 });
  } else if (card.rarity === 'uncommon') {
    score += 5;
    breakdown.push({ factor: 'Uncommon card', value: +5 });
  }

  // Type-specific scoring
  if (card.type === 'Attack') {
    const damage = card.damage || 0;
    if (damage > 15) {
      score += 15;
      breakdown.push({ factor: 'High damage', value: +15 });
    } else if (damage < 7 && act > 1) {
      score -= 10;
      breakdown.push({ factor: 'Low damage for act', value: -10 });
    }
  }

  if (card.type === 'Power') {
    score += act * 10;
    breakdown.push({ factor: 'Scaling power', value: act * 10 });
  }

  // Keyword synergy
  if (card.keywords) {
    const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
    keywords.forEach(kw => {
      const normalized = kw.toLowerCase();
      if (detectedArchetypes.has(normalized)) {
        const strength = detectedArchetypes.get(normalized);
        const bonus = Math.min(strength * 3, 25);
        score += bonus;
        breakdown.push({ factor: `Synergy: ${kw}`, value: bonus });
      }
    });
  }

  // Cost efficiency
  if (card.cost === 0) {
    score += 15;
    breakdown.push({ factor: 'Zero cost', value: +15 });
  } else if (card.cost >= 3) {
    score -= 5;
    breakdown.push({ factor: 'High cost', value: -5 });
  }

  // Deck size penalty
  if (currentDeck.length > 25) {
    score -= 5;
    breakdown.push({ factor: 'Large deck', value: -5 });
  }

  // Card draw value
  if (card.keywords && card.keywords.includes('draw')) {
    score += 15;
    breakdown.push({ factor: 'Card draw', value: +15 });
  }

  // Normalize
  score = Math.max(0, Math.min(100, score));

  const reasons = breakdown
    .filter(b => Math.abs(b.value) >= 5)
    .map(b => `${b.factor} (${b.value > 0 ? '+' : ''}${b.value})`)
    .join(' • ');

  return {
    score: Math.round(score),
    reason: reasons || 'Standard evaluation',
    breakdown: breakdown
  };
}

function renderCardResult(card, result) {
  const scoreClass = result.score >= 70 ? 'score-high' : result.score >= 40 ? 'score-medium' : 'score-low';
  const rarityClass = card.rarity ? `rarity-${card.rarity}` : '';
  const icon = TYPE_ICONS[card.type] || '📄';

  const breakdownHtml = result.breakdown && result.breakdown.length > 0
    ? `
      <div class="expand-btn" onclick="toggleBreakdown(this)">📊 Show breakdown</div>
      <div class="score-breakdown">
        ${result.breakdown.map(b => `
          <div class="breakdown-item">
            <span>${b.factor}</span>
            <span style="color: ${b.value > 0 ? '#6ee7b7' : '#fca5a5'}">${b.value > 0 ? '+' : ''}${b.value}</span>
          </div>
        `).join('')}
      </div>
    `
    : '';

  return `
    <div class="card-result ${rarityClass}">
      <div class="card-header">
        <div class="card-name-section">
          <span class="card-icon">${icon}</span>
          <span class="card-name">${card.name || 'Unknown'}</span>
        </div>
        <span class="card-score ${scoreClass}">${result.score}</span>
      </div>
      <div class="card-meta">
        <span>${card.type || 'Unknown'}</span>
        ${card.cost !== undefined ? `<span>Cost: ${card.cost >= 0 ? card.cost : 'X'}</span>` : ''}
        ${card.rarity ? `<span class="pill">${card.rarity}</span>` : ''}
        ${card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]).map(k => `<span class="pill">${k}</span>`).join('') : ''}
      </div>
      <div class="card-reason">${result.reason}</div>
      ${breakdownHtml}
    </div>
  `;
}

function toggleBreakdown(btn) {
  const breakdown = btn.nextElementSibling;
  if (breakdown.classList.contains('expanded')) {
    breakdown.classList.remove('expanded');
    btn.textContent = '📊 Show breakdown';
  } else {
    breakdown.classList.add('expanded');
    btn.textContent = '📊 Hide breakdown';
  }
}

function scoreRewards() {
  const input = document.getElementById('reward-cards').value;
  const cards = input.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (cards.length === 0) {
    document.getElementById('reward-results').innerHTML = '<div class="empty-state">🔍 Enter card names to analyze</div>';
    return;
  }

  const scored = cards.map(name => {
    const card = findCard(name);
    const result = scoreCard(name);
    return { card: card || { name }, ...result };
  }).sort((a, b) => b.score - a.score);

  const html = scored.map(item => renderCardResult(item.card, item)).join('');
  document.getElementById('reward-results').innerHTML = html;
}

function scoreShop() {
  const input = document.getElementById('shop-cards').value;
  const cards = input.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (cards.length === 0) {
    document.getElementById('shop-results').innerHTML = '<div class="empty-state">🔍 Enter card names to analyze</div>';
    return;
  }

  const scored = cards.map(name => {
    const card = findCard(name);
    const result = scoreCard(name);
    result.score = Math.max(0, result.score - 5);
    result.reason += ' • Shop purchase (-5)';
    return { card: card || { name }, ...result };
  }).sort((a, b) => b.score - a.score);

  const html = scored.map(item => renderCardResult(item.card, item)).join('');
  document.getElementById('shop-results').innerHTML = html;
}

function scoreRemovals() {
  const input = document.getElementById('removal-cards').value;
  const cards = input.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (cards.length === 0) {
    document.getElementById('removal-results').innerHTML = '<div class="empty-state">🔍 Enter card names to analyze</div>';
    return;
  }

  const scored = cards.map(name => {
    const card = findCard(name);
    let score = 50;
    let reasons = [];

    // Starter cards
    if (name === 'Strike' || name === 'Defend') {
      const act = Math.floor(currentFloor / 17) + 1;
      score += act * 15;
      reasons.push(`Starter card in Act ${act}`);
    }

    // High cost in bloated deck
    if (card && card.cost >= 3 && currentDeck.length > 25) {
      score += 15;
      reasons.push('High cost in large deck');
    }

    // No synergy
    if (card && card.keywords) {
      const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
      const hasSynergy = keywords.some(kw => detectedArchetypes.has(kw.toLowerCase()));
      if (!hasSynergy) {
        score += 10;
        reasons.push('No archetype synergy');
      }
    }

    score = Math.max(0, Math.min(100, score));

    return {
      card: card || { name },
      score: Math.round(score),
      reason: reasons.join(' • ') || 'Consider removing'
    };
  }).sort((a, b) => b.score - a.score);

  const html = scored.map(item => renderCardResult(item.card, item)).join('');
  document.getElementById('removal-results').innerHTML = html;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === '1') switchTab('rewards');
  else if (e.key === '2') switchTab('shop');
  else if (e.key === '3') switchTab('removal');
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  loadStarter('ironclad');
});
