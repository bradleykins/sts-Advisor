// Simple card database (subset for demo)
const CARDS = {
  // Ironclad
  'Strike': { cost: 1, type: 'Attack', damage: 6, character: 'ironclad' },
  'Defend': { cost: 1, type: 'Skill', block: 5, character: 'ironclad' },
  'Bash': { cost: 2, type: 'Attack', damage: 8, character: 'ironclad' },
  'Whirlwind': { cost: -1, type: 'Attack', damage: 5, character: 'ironclad', archetype: 'exhaust' },
  'Rampage': { cost: 1, type: 'Attack', damage: 8, character: 'ironclad', archetype: 'strength' },
  'Cleave': { cost: 1, type: 'Attack', damage: 8, character: 'ironclad', archetype: 'aoe' },
  'Immolate': { cost: 2, type: 'Attack', damage: 21, character: 'ironclad', archetype: 'aoe' },
  'Inflame': { cost: 1, type: 'Power', character: 'ironclad', archetype: 'strength' },
  'Headbutt': { cost: 1, type: 'Attack', damage: 9, character: 'ironclad' },
  'Iron Wave': { cost: 1, type: 'Attack', damage: 5, block: 5, character: 'ironclad' },
  'Pommel Strike': { cost: 1, type: 'Attack', damage: 9, character: 'ironclad', archetype: 'draw' },
  'Uppercut': { cost: 2, type: 'Attack', damage: 13, character: 'ironclad' },

  // Silent
  'Neutralize': { cost: 0, type: 'Attack', damage: 3, character: 'silent', archetype: 'poison' },
  'Survivor': { cost: 1, type: 'Skill', block: 8, character: 'silent' },
  'Poisoned Stab': { cost: 1, type: 'Attack', damage: 6, character: 'silent', archetype: 'poison' },
  'Blade Dance': { cost: 1, type: 'Skill', character: 'silent', archetype: 'shiv' },
  'Catalyst': { cost: 1, type: 'Skill', character: 'silent', archetype: 'poison' },
  'Footwork': { cost: 1, type: 'Power', character: 'silent', archetype: 'dexterity' },
};

// Global state
let currentDeck = [];
let currentCharacter = 'ironclad';
let currentFloor = 10;
let detectedArchetypes = [];

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

  // Update stats
  document.getElementById('deck-count').textContent = currentDeck.length;

  const costs = currentDeck
    .map(name => CARDS[name]?.cost || 1)
    .filter(c => c >= 0);
  const avgCost = costs.length > 0 ? (costs.reduce((a,b) => a+b, 0) / costs.length).toFixed(1) : '0';
  document.getElementById('avg-cost').textContent = avgCost;

  // Detect archetypes
  detectedArchetypes = detectArchetypes(currentDeck);

  const pillsHtml = detectedArchetypes.length > 0
    ? detectedArchetypes.map(a => `<span class="pill active">${a}</span>`).join('')
    : '<span class="pill">No archetype detected</span>';

  document.getElementById('archetype-pills').innerHTML = pillsHtml;
}

function detectArchetypes(deck) {
  const archetypes = {};

  deck.forEach(cardName => {
    const card = CARDS[cardName];
    if (card && card.archetype) {
      archetypes[card.archetype] = (archetypes[card.archetype] || 0) + 1;
    }
  });

  // Return archetypes with 2+ cards
  return Object.entries(archetypes)
    .filter(([_, count]) => count >= 2)
    .map(([arch, _]) => arch)
    .map(a => a.charAt(0).toUpperCase() + a.slice(1));
}

function scoreCard(cardName, context = {}) {
  const card = CARDS[cardName];
  if (!card) {
    return { score: 0, reason: 'Card not found in database' };
  }

  let score = 50; // Base score
  let reasons = [];

  // Character match
  if (card.character !== currentCharacter) {
    return { score: 0, reason: 'Wrong character' };
  }

  // Act scaling (early game prefers damage, late game prefers scaling)
  const act = Math.floor(currentFloor / 17) + 1;

  if (card.type === 'Attack') {
    const damage = card.damage || 0;
    if (damage > 12) {
      score += 15;
      reasons.push('High damage');
    } else if (damage < 7 && act > 1) {
      score -= 10;
      reasons.push('Low damage for act ' + act);
    }
  }

  if (card.type === 'Power') {
    score += act * 10;
    reasons.push('Scaling power');
  }

  // Archetype synergy
  if (card.archetype && detectedArchetypes.includes(card.archetype.charAt(0).toUpperCase() + card.archetype.slice(1))) {
    score += 25;
    reasons.push(`Synergy: ${card.archetype}`);
  }

  // Cost efficiency
  if (card.cost === 0) {
    score += 10;
    reasons.push('Zero cost');
  } else if (card.cost >= 3) {
    score -= 5;
    reasons.push('High cost');
  }

  // Deck size penalty
  if (currentDeck.length > 25) {
    score -= 5;
    reasons.push('Large deck');
  }

  // Card draw is valuable
  if (cardName.toLowerCase().includes('draw') || card.archetype === 'draw') {
    score += 15;
    reasons.push('Card draw');
  }

  // Normalize
  score = Math.max(0, Math.min(100, score));

  return {
    score: Math.round(score),
    reason: reasons.join(' • ') || 'Basic evaluation'
  };
}

function scoreRewards() {
  const input = document.getElementById('reward-cards').value;
  const cards = input.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (cards.length === 0) {
    document.getElementById('reward-results').innerHTML = '<div class="empty-state">Enter card names to analyze</div>';
    return;
  }

  const scored = cards.map(name => {
    const result = scoreCard(name);
    return { name, ...result };
  }).sort((a, b) => b.score - a.score);

  const html = scored.map(card => {
    const scoreClass = card.score >= 70 ? 'score-high' : card.score >= 40 ? 'score-medium' : 'score-low';
    const cardData = CARDS[card.name] || {};

    return `
      <div class="card-result">
        <div class="card-header">
          <span class="card-name">${card.name}</span>
          <span class="card-score ${scoreClass}">${card.score}</span>
        </div>
        <div class="card-meta">
          <span>${cardData.type || 'Unknown'}</span>
          ${cardData.cost !== undefined ? `<span>Cost: ${cardData.cost >= 0 ? cardData.cost : 'X'}</span>` : ''}
          ${cardData.archetype ? `<span class="pill">${cardData.archetype}</span>` : ''}
        </div>
        <div class="card-reason">${card.reason}</div>
      </div>
    `;
  }).join('');

  document.getElementById('reward-results').innerHTML = html;
}

function scoreShop() {
  const input = document.getElementById('shop-cards').value;
  const cards = input.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (cards.length === 0) {
    document.getElementById('shop-results').innerHTML = '<div class="empty-state">Enter card names to analyze</div>';
    return;
  }

  const scored = cards.map(name => {
    const result = scoreCard(name);
    // Shop cards get slight penalty (you have to pay for them)
    result.score = Math.max(0, result.score - 5);
    return { name, ...result };
  }).sort((a, b) => b.score - a.score);

  const html = scored.map(card => {
    const scoreClass = card.score >= 70 ? 'score-high' : card.score >= 40 ? 'score-medium' : 'score-low';
    const cardData = CARDS[card.name] || {};

    return `
      <div class="card-result">
        <div class="card-header">
          <span class="card-name">${card.name}</span>
          <span class="card-score ${scoreClass}">${card.score}</span>
        </div>
        <div class="card-meta">
          <span>${cardData.type || 'Unknown'}</span>
          ${cardData.cost !== undefined ? `<span>Cost: ${cardData.cost >= 0 ? cardData.cost : 'X'}</span>` : ''}
        </div>
        <div class="card-reason">${card.reason} • Shop purchase (-5)</div>
      </div>
    `;
  }).join('');

  document.getElementById('shop-results').innerHTML = html;
}

function scoreRemovals() {
  const input = document.getElementById('removal-cards').value;
  const cards = input.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (cards.length === 0) {
    document.getElementById('removal-results').innerHTML = '<div class="empty-state">Enter card names to analyze</div>';
    return;
  }

  const scored = cards.map(name => {
    let score = 50;
    let reasons = [];

    const card = CARDS[name];

    // Strikes and Defends are high priority removals late game
    if (name === 'Strike' || name === 'Defend') {
      const act = Math.floor(currentFloor / 17) + 1;
      score += act * 15;
      reasons.push(`Starter card in Act ${act}`);
    }

    // High cost cards in bloated deck
    if (card && card.cost >= 3 && currentDeck.length > 25) {
      score += 15;
      reasons.push('High cost in large deck');
    }

    // Cards that don't fit archetype
    if (card && card.archetype && !detectedArchetypes.includes(card.archetype.charAt(0).toUpperCase() + card.archetype.slice(1))) {
      score += 10;
      reasons.push('No archetype synergy');
    }

    score = Math.max(0, Math.min(100, score));

    return {
      name,
      score: Math.round(score),
      reason: reasons.join(' • ') || 'Consider removing'
    };
  }).sort((a, b) => b.score - a.score);

  const html = scored.map(card => {
    const scoreClass = card.score >= 70 ? 'score-high' : card.score >= 40 ? 'score-medium' : 'score-low';

    return `
      <div class="card-result">
        <div class="card-header">
          <span class="card-name">${card.name}</span>
          <span class="card-score ${scoreClass}">${card.score}</span>
        </div>
        <div class="card-reason">${card.reason}</div>
      </div>
    `;
  }).join('');

  document.getElementById('removal-results').innerHTML = html;
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  analyzeDeck();
});
