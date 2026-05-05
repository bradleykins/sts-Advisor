// Load card database - use real STS2 card data
let CARDS = {};
if (typeof STS2_CARDS !== 'undefined') {
  CARDS = STS2_CARDS;
  console.log('Loaded STS2 cards:', Object.keys(CARDS).length);
} else {
  console.error('STS2_CARDS not loaded!');
}

// Load relic database
let RELICS = {};
if (typeof STS2_RELICS !== 'undefined') {
  RELICS = STS2_RELICS;
  console.log('Loaded STS2 relics:', Object.keys(RELICS).length);
} else {
  console.error('STS2_RELICS not loaded!');
}

// Global state
let currentDeck = [];
let currentRelics = [];
let currentCharacter = 'ironclad';
let currentAct = 2;
let detectedArchetypes = new Map();
let selectedCards = new Set();
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentFilters = {
  type: 'all',
  rarity: 'all',
  sort: 'score'
};
let shopCards = [];
let additionalRewardCards = [];

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
  'regent': 'Strike, Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Royal Decree',
  'necrobinder': 'Strike, Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Raise Dead'
};

// Starter relics (character-specific starting relics)
const STARTER_RELICS = {
  'ironclad': 'Burning Blood',
  'silent': 'Ring of the Snake',
  'defect': 'Cracked Core',
  'regent': 'Divine Right',
  'necrobinder': 'Bound Phylactery'
};

// ============================================================================
// THEME MANAGEMENT
// ============================================================================

function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  initTheme();
  showToast(`Switched to ${currentTheme} mode`, 'success');
}

// ============================================================================
// TOAST NOTIFICATIONS
// ============================================================================

function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');

  const icon = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }[type] || 'ℹ';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="closeToast(this)" aria-label="Close notification">✕</button>
  `;

  container.appendChild(toast);

  // Auto-dismiss
  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function closeToast(btn) {
  const toast = btn.closest('.toast');
  if (toast) {
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }
}

// ============================================================================
// MODAL MANAGEMENT
// ============================================================================

let focusBeforeModal = null;

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  focusBeforeModal = document.activeElement;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');

  // Focus first focusable element
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable.length > 0) {
    focusable[0].focus();
  }

  // Trap focus
  modal.addEventListener('keydown', trapFocus);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  modal.removeEventListener('keydown', trapFocus);

  if (focusBeforeModal) {
    focusBeforeModal.focus();
    focusBeforeModal = null;
  }
}

function trapFocus(e) {
  if (e.key !== 'Tab') return;

  const modal = e.currentTarget;
  const focusable = Array.from(modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ));

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

// ============================================================================
// LOADING STATES
// ============================================================================

function setLoading(elementId, isLoading) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const button = element.tagName === 'BUTTON' ? element : element.querySelector('button');
  if (button) {
    button.disabled = isLoading;
    if (isLoading) {
      button.innerHTML = '<span class="btn-spinner"></span> Analyzing...';
    } else {
      // Restore original text based on context
      const tab = element.closest('.tab-content');
      if (tab) {
        if (tab.id === 'tab-rewards') button.textContent = '⚡ Analyze Rewards';
        else if (tab.id === 'tab-shop') button.textContent = '⚡ Analyze Shop';
        else if (tab.id === 'tab-removal') button.textContent = '⚡ Analyze Removals';
      }
    }
  }
}

function showSkeleton(containerId, count = 3) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = Array(count).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton-header">
        <div class="skeleton-text skeleton-title"></div>
        <div class="skeleton-text skeleton-score"></div>
      </div>
      <div class="skeleton-text skeleton-meta"></div>
      <div class="skeleton-text skeleton-reason"></div>
    </div>
  `).join('');
}

// ============================================================================
// CONFETTI ANIMATION
// ============================================================================

function triggerConfetti() {
  const count = 50;
  const container = document.body;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = ['#ef4444', '#3b82f6', '#a855f7', '#fbbf24', '#6ee7b7'][Math.floor(Math.random() * 5)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

// ============================================================================
// STARTER DECKS
// ============================================================================

function loadStarter(char) {
  document.getElementById('character').value = char;
  currentCharacter = char;

  // Parse starter deck and populate currentDeck array
  const starterCards = (STARTER_DECKS[char] || '').split(',').map(s => s.trim()).filter(s => s.length > 0);
  currentDeck = starterCards;

  // Load starter relic
  const starterRelic = STARTER_RELICS[char];
  if (starterRelic) {
    currentRelics = [starterRelic];
    renderRelicList();
  }

  // Reinit autocomplete with new character
  initAutocomplete();

  renderDeckCardList();
  analyzeDeckStats();

  showToast(`Loaded ${char.charAt(0).toUpperCase() + char.slice(1)} starter deck`, 'success');
}

// ============================================================================
// TAB MANAGEMENT
// ============================================================================

function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');

  // Auto-analyze removals when switching to removal tab if deck exists
  if (tabName === 'removal' && currentDeck.length > 0) {
    setTimeout(() => autoAnalyzeRemovals(), 100);
  }

  // Announce to screen readers
  const tabLabels = {
    rewards: 'Card Rewards',
    shop: 'Shop',
    removal: 'Card Removal'
  };
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = `Switched to ${tabLabels[tabName]} tab`;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}

// ============================================================================
// DECK ANALYSIS
// ============================================================================

function setupDeckAutocomplete() {
  const input = document.getElementById('deck-card-input');
  const dropdown = document.getElementById('deck-dropdown');

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    currentAutocompleteIndex = -1;

    if (query.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    // Fuzzy search
    const matches = autocompleteData.filter(card => {
      const name = card.name.toLowerCase();
      if (name.startsWith(query)) return true;
      if (name.includes(query)) return true;
      let j = 0;
      for (let i = 0; i < name.length && j < query.length; i++) {
        if (name[i] === query[j]) j++;
      }
      return j === query.length;
    }).slice(0, 10);

    if (matches.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    dropdown.innerHTML = matches.map((card, idx) => `
      <div class="autocomplete-item" data-index="${idx}" data-name="${card.name}" onclick="addCardToDeckPill('${card.name}')">
        <span class="autocomplete-item-icon">${card.icon}</span>
        <span class="autocomplete-item-name">${card.name}</span>
        <span class="autocomplete-item-meta">
          <span>${card.cost >= 0 ? card.cost : 'X'}</span>
          ${card.rarity ? `<span>${card.rarity}</span>` : ''}
        </span>
      </div>
    `).join('');

    dropdown.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.autocomplete-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentAutocompleteIndex = Math.min(currentAutocompleteIndex + 1, items.length - 1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentAutocompleteIndex = Math.max(currentAutocompleteIndex - 1, -1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items.length > 0) {
        const targetIndex = currentAutocompleteIndex >= 0 ? currentAutocompleteIndex : 0;
        if (items[targetIndex]) {
          const cardName = items[targetIndex].dataset.name;
          addCardToDeckPill(cardName);
        }
      }
    } else if (e.key === 'Escape') {
      dropdown.classList.remove('show');
      currentAutocompleteIndex = -1;
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      dropdown.classList.remove('show');
    }, 200);
  });
}

function addCardToDeckPill(cardName) {
  currentDeck.push(cardName);
  renderDeckCardList();

  // Clear input
  const input = document.getElementById('deck-card-input');
  if (input) {
    input.value = '';
    document.getElementById('deck-dropdown').classList.remove('show');
  }

  // Re-analyze deck
  analyzeDeckStats();

  showToast(`Added ${cardName} to deck`, 'success', 1500);
}

function removeCardFromDeck(index) {
  currentDeck.splice(index, 1);
  renderDeckCardList();
  analyzeDeckStats();
  showToast('Card removed from deck', 'info', 1500);
}

function renderDeckCardList() {
  const container = document.getElementById('deck-pills');
  if (!container) return;

  container.innerHTML = currentDeck.map((cardName, index) => {
    const card = findCard(cardName);
    const icon = card ? (TYPE_ICONS[card.type] || '📄') : '📄';

    return `
      <div class="pill-tag">
        <span class="pill-tag-icon">${icon}</span>
        <span>${cardName}</span>
        <button class="pill-tag-remove" onclick="removeCardFromDeck(${index})" aria-label="Remove ${cardName}">×</button>
      </div>
    `;
  }).join('');
}

function analyzeDeck() {
  analyzeDeckStats();
}

function analyzeDeckStats() {
  const prevCharacter = currentCharacter;
  currentCharacter = document.getElementById('character').value;
  currentAct = parseInt(document.getElementById('act').value);

  // Reinit autocomplete if character changed
  if (prevCharacter !== currentCharacter) {
    initAutocomplete();
  }

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

  // Calculate win probability
  const deckHealth = calculateDeckHealth();
  document.getElementById('win-prob').textContent = deckHealth + '%';

  // Detect archetypes
  detectArchetypes(currentDeck);

  // Render visualizations
  renderCostChart();
  renderPieChart();
  renderArchetypeStrength();

  showToast('Deck analyzed successfully', 'success');
}

function findCard(name) {
  const normalized = name.toUpperCase().trim();

  // Cards are now keyed by uppercase name
  const card = CARDS[normalized];

  if (!card) return null;

  // Ensure damage/block are accessible from vars
  if (card.vars) {
    if (card.vars.damage !== undefined && card.damage === undefined) {
      card.damage = card.vars.damage;
    }
    if (card.vars.block !== undefined && card.block === undefined) {
      card.block = card.vars.block;
    }
  }

  return card;
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
  const act = currentAct;
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

// ============================================================================
// CARD SCORING
// ============================================================================

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
  const act = currentAct;

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

  // Relic synergies
  const relicBonus = calculateRelicSynergy(card);
  if (relicBonus > 0) {
    score += relicBonus;
    breakdown.push({ factor: 'Relic synergy', value: relicBonus });
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

// ============================================================================
// FILTERING AND SORTING
// ============================================================================

function applyFilter(filterType, value) {
  currentFilters[filterType] = value;

  // Update active button states
  document.querySelectorAll(`.filter-btn[data-${filterType}]`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset[filterType] === value);
  });

  // Re-render current tab results
  const activeTab = document.querySelector('.tab.active').getAttribute('onclick').match(/'(.+)'/)[1];
  if (activeTab === 'rewards') scoreRewards();
  else if (activeTab === 'shop') scoreShop();
  else if (activeTab === 'removal') scoreRemovals();
}

function filterAndSortCards(cards) {
  let filtered = cards;

  // Apply type filter
  if (currentFilters.type !== 'all') {
    filtered = filtered.filter(item => item.card.type === currentFilters.type);
  }

  // Apply rarity filter
  if (currentFilters.rarity !== 'all') {
    filtered = filtered.filter(item => item.card.rarity === currentFilters.rarity);
  }

  // Apply sort
  switch (currentFilters.sort) {
    case 'score':
      filtered.sort((a, b) => b.score - a.score);
      break;
    case 'name':
      filtered.sort((a, b) => (a.card.name || '').localeCompare(b.card.name || ''));
      break;
    case 'cost':
      filtered.sort((a, b) => (a.card.cost || 0) - (b.card.cost || 0));
      break;
    case 'type':
      filtered.sort((a, b) => (a.card.type || '').localeCompare(b.card.type || ''));
      break;
  }

  return filtered;
}

// ============================================================================
// BULK ACTIONS
// ============================================================================

function toggleSelectAll(checkbox) {
  const cards = document.querySelectorAll('.card-result');
  selectedCards.clear();

  cards.forEach(card => {
    const cb = card.querySelector('.card-checkbox');
    if (cb) {
      cb.checked = checkbox.checked;
      if (checkbox.checked) {
        selectedCards.add(card.dataset.cardName);
      }
    }
  });

  updateBulkActions();
}

function toggleCardSelect(checkbox, cardName) {
  if (checkbox.checked) {
    selectedCards.add(cardName);
  } else {
    selectedCards.delete(cardName);
    document.getElementById('select-all').checked = false;
  }

  updateBulkActions();
}

function updateBulkActions() {
  const count = selectedCards.size;
  const actions = document.getElementById('bulk-actions');

  if (count > 0) {
    actions.style.display = 'flex';
    actions.querySelector('.selected-count').textContent = `${count} selected`;
  } else {
    actions.style.display = 'none';
  }
}

function compareSelected() {
  if (selectedCards.size === 0) {
    showToast('No cards selected for comparison', 'warning');
    return;
  }

  const cards = Array.from(selectedCards).map(name => {
    const card = findCard(name);
    const result = scoreCard(name);
    return { card: card || { name }, ...result };
  });

  // Build comparison table
  let html = `
    <div class="comparison-header">
      <h3>Card Comparison</h3>
      <button onclick="closeModal('comparison-modal')" class="modal-close" aria-label="Close comparison">✕</button>
    </div>
    <div class="comparison-grid">
  `;

  cards.forEach(item => {
    const scoreClass = item.score >= 70 ? 'score-high' : item.score >= 40 ? 'score-medium' : 'score-low';
    const icon = TYPE_ICONS[item.card.type] || '📄';

    html += `
      <div class="comparison-card">
        <div class="card-icon-large">${icon}</div>
        <h4>${item.card.name || 'Unknown'}</h4>
        <div class="card-score ${scoreClass}" style="margin: 10px 0;">${item.score}</div>
        <div class="comparison-stats">
          <div><strong>Type:</strong> ${item.card.type || 'Unknown'}</div>
          <div><strong>Cost:</strong> ${item.card.cost >= 0 ? item.card.cost : 'X'}</div>
          ${item.card.rarity ? `<div><strong>Rarity:</strong> ${item.card.rarity}</div>` : ''}
          ${item.card.damage ? `<div><strong>Damage:</strong> ${item.card.damage}</div>` : ''}
          ${item.card.block ? `<div><strong>Block:</strong> ${item.card.block}</div>` : ''}
        </div>
        <div class="comparison-reason">${item.reason}</div>
      </div>
    `;
  });

  html += '</div>';

  document.getElementById('comparison-content').innerHTML = html;
  openModal('comparison-modal');
}

function exportSelected() {
  if (selectedCards.size === 0) {
    showToast('No cards selected for export', 'warning');
    return;
  }

  const cards = Array.from(selectedCards).map(name => {
    const card = findCard(name);
    const result = scoreCard(name);
    return {
      name: card?.name || name,
      score: result.score,
      type: card?.type || '',
      cost: card?.cost,
      rarity: card?.rarity || '',
      reason: result.reason
    };
  });

  // Create CSV
  const headers = ['Name', 'Score', 'Type', 'Cost', 'Rarity', 'Reason'];
  const rows = cards.map(c => [
    c.name,
    c.score,
    c.type,
    c.cost >= 0 ? c.cost : 'X',
    c.rarity,
    c.reason
  ]);

  const csv = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  // Copy to clipboard
  navigator.clipboard.writeText(csv).then(() => {
    showToast(`Exported ${cards.length} cards to clipboard`, 'success');
  }).catch(() => {
    showToast('Failed to copy to clipboard', 'error');
  });
}

function clearSelection() {
  selectedCards.clear();
  document.querySelectorAll('.card-checkbox').forEach(cb => cb.checked = false);
  document.getElementById('select-all').checked = false;
  updateBulkActions();
  showToast('Selection cleared', 'info');
}

// ============================================================================
// CARD RESULT RENDERING
// ============================================================================

function renderCardResult(card, result, showAddButton = false) {
  const scoreClass = result.score >= 70 ? 'score-high' : result.score >= 40 ? 'score-medium' : 'score-low';
  const rarityClass = card.rarity ? `rarity-${card.rarity}` : '';
  const icon = TYPE_ICONS[card.type] || '📄';
  const cardName = card.name || 'Unknown';

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

  const addButtonHtml = showAddButton ? `
    <button class="add-to-deck-btn" onclick="addCardToDeck('${cardName}')" aria-label="Add ${cardName} to deck">
      ➕ Add to Deck
    </button>
  ` : '';

  return `
    <div class="card-result ${rarityClass}" data-card-name="${cardName}" onmouseenter="showCardPreview('${cardName}')" onmouseleave="hideCardPreview()">
      <div class="card-header">
        <div class="card-name-section">
          <span class="card-icon">${icon}</span>
          <span class="card-name">${cardName}</span>
        </div>
        <span class="card-score ${scoreClass}">${result.score}</span>
      </div>
      <div class="card-meta">
        <span class="pill">${card.type || 'Unknown'}</span>
        ${card.cost !== undefined ? `<span class="pill">Cost: ${card.cost >= 0 ? card.cost : 'X'}</span>` : ''}
        ${card.rarity ? `<span class="pill pill-${card.rarity}">${card.rarity}</span>` : ''}
        ${card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]).map(k => `<span class="pill">${k}</span>`).join('') : ''}
      </div>
      <div class="card-reason">${result.reason}</div>
      ${addButtonHtml}
      ${breakdownHtml}
    </div>
  `;
}

function showCardPreview(cardName) {
  const card = findCard(cardName);
  if (!card) return;

  const preview = document.getElementById('card-preview');
  const icon = TYPE_ICONS[card.type] || '📄';

  document.getElementById('preview-icon').textContent = icon;
  document.getElementById('preview-name').textContent = card.name || cardName;

  const stats = [
    { label: 'Type', value: card.type || 'Unknown' },
    { label: 'Cost', value: card.cost >= 0 ? card.cost : 'X' },
    { label: 'Rarity', value: card.rarity || 'Common' },
    { label: 'Character', value: card.character || 'Unknown' }
  ];

  document.getElementById('preview-body').innerHTML = stats.map(s => `
    <div class="card-preview-stat">
      <span class="card-preview-label">${s.label}</span>
      <span class="card-preview-value">${s.value}</span>
    </div>
  `).join('');

  const keywords = card.keywords || [];
  document.getElementById('preview-keywords').innerHTML = (Array.isArray(keywords) ? keywords : [keywords])
    .map(k => `<span class="pill">${k}</span>`)
    .join('');

  preview.classList.add('show');
}

function hideCardPreview() {
  document.getElementById('card-preview').classList.remove('show');
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

// ============================================================================
// REWARD SCORING
// ============================================================================

async function scoreRewards() {
  // Collect cards from autocomplete fields
  const card1 = document.getElementById('reward-card-1')?.value.trim();
  const card2 = document.getElementById('reward-card-2')?.value.trim();
  const card3 = document.getElementById('reward-card-3')?.value.trim();

  // Combine all cards, removing duplicates
  const allCards = [...new Set([card1, card2, card3, ...additionalRewardCards].filter(c => c.length > 0))];
  const cards = allCards;

  if (cards.length === 0) {
    document.getElementById('reward-results').innerHTML =
      '<div class="empty-state"><div class="empty-icon">🔍</div><h3>No cards to analyze</h3><p>Enter card names above to see recommendations</p></div>';
    return;
  }

  // Show loading
  showSkeleton('reward-results', cards.length);
  setLoading('reward-results', true);

  // Simulate async processing
  await new Promise(resolve => setTimeout(resolve, 500));

  const scored = cards.map(name => {
    const card = findCard(name);
    const result = scoreCard(name);
    return { card: card || { name }, ...result };
  });

  const filtered = filterAndSortCards(scored);

  const html = filtered.map(item => renderCardResult(item.card, item, true)).join('');
  document.getElementById('reward-results').innerHTML = html;

  setLoading('reward-results', false);

  // Trigger confetti for high scores
  if (filtered.some(item => item.score >= 90)) {
    triggerConfetti();
  }

  showToast(`Analyzed ${filtered.length} card${filtered.length !== 1 ? 's' : ''}`, 'success', 2000);
}

function addCardToDeck(cardName) {
  // Add card to deck array
  currentDeck.push(cardName);
  renderDeckCardList();

  // Clear autocomplete fields
  clearAutocompleteFields();

  // Re-analyze deck
  analyzeDeckStats();

  showToast(`Added ${cardName} to deck!`, 'success', 2000);
}

// ============================================================================
// SHOP CARD MANAGEMENT
// ============================================================================

function addShopCard(cardName) {
  // Prevent duplicates
  if (shopCards.includes(cardName)) {
    showToast(`${cardName} already in shop`, 'warning', 1500);
    return;
  }

  shopCards.push(cardName);
  renderShopCardList();

  // Clear input
  const input = document.getElementById('shop-card-input');
  if (input) {
    input.value = '';
    document.getElementById('shop-dropdown').classList.remove('show');
  }

  showToast(`Added ${cardName}`, 'success', 1500);

  // Auto-analyze after 7 cards
  if (shopCards.length >= 7) {
    setTimeout(() => analyzeShopCards(), 300);
  }
}

function removeShopCard(cardName) {
  shopCards = shopCards.filter(c => c !== cardName);
  renderShopCardList();
  showToast(`Removed ${cardName}`, 'info', 1500);
}

function renderShopCardList() {
  const container = document.getElementById('shop-pills');
  if (!container) return;

  container.innerHTML = shopCards.map(cardName => {
    const card = findCard(cardName);
    const icon = card ? (TYPE_ICONS[card.type] || '📄') : '📄';

    return `
      <div class="pill-tag">
        <span class="pill-tag-icon">${icon}</span>
        <span>${cardName}</span>
        <button class="pill-tag-remove" onclick="removeShopCard('${cardName}')" aria-label="Remove ${cardName}">×</button>
      </div>
    `;
  }).join('');
}

function calculateRemovalValue(cardName) {
  // Calculate if this card is worth removing another card to obtain
  const card = findCard(cardName);
  if (!card) return 0;

  let value = 50;

  // High-impact cards
  if (card.rarity === 'rare') value += 15;
  if (card.type === 'Power') value += 10;

  // Synergy value
  if (card.keywords) {
    const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
    keywords.forEach(kw => {
      if (detectedArchetypes.has(kw.toLowerCase())) {
        value += 15;
      }
    });
  }

  // Act scaling
  const act = currentAct;
  if (act >= 2 && (card.type === 'Power' || card.rarity === 'rare')) {
    value += 10;
  }

  return Math.min(100, value);
}

// ============================================================================
// SHOP SCORING
// ============================================================================

async function analyzeShopCards() {
  if (shopCards.length === 0) {
    document.getElementById('shop-results').innerHTML =
      '<div class="empty-state"><div class="empty-icon">🏪</div><h3>No shop cards to analyze</h3><p>Add cards using the input above</p></div>';
    return;
  }

  showSkeleton('shop-results', shopCards.length);

  await new Promise(resolve => setTimeout(resolve, 500));

  const scored = shopCards.map(name => {
    const card = findCard(name);
    const baseScore = scoreCard(name);

    // Enhanced shop scoring model
    let shopScore = baseScore.score;
    let shopReasons = [...baseScore.breakdown];

    // Gold efficiency penalty (shop costs gold)
    const goldPenalty = -5;
    shopScore += goldPenalty;
    shopReasons.push({ factor: 'Shop purchase cost', value: goldPenalty });

    // Opportunity cost analysis
    const deckSize = currentDeck.length;
    if (deckSize > 20 && shopScore < 60) {
      const opportunityCost = -10;
      shopScore += opportunityCost;
      shopReasons.push({ factor: 'Dilutes focused deck', value: opportunityCost });
    }

    // Immediate impact vs scaling
    const act = currentAct;
    if (card && card.type === 'Power' && act === 1) {
      const earlyPowerPenalty = -5;
      shopScore += earlyPowerPenalty;
      shopReasons.push({ factor: 'Power in early act', value: earlyPowerPenalty });
    }

    // Value rating (would you remove a card to get this?)
    const removalValue = calculateRemovalValue(name);
    if (removalValue > 50) {
      const removalBonus = Math.floor((removalValue - 50) / 5);
      shopScore += removalBonus;
      shopReasons.push({ factor: 'Worth removing a card for', value: removalBonus });
    }

    shopScore = Math.max(0, Math.min(100, shopScore));

    const reasonText = shopReasons
      .filter(r => Math.abs(r.value) >= 5)
      .map(r => `${r.factor} (${r.value > 0 ? '+' : ''}${r.value})`)
      .join(' • ');

    return {
      card: card || { name },
      score: Math.round(shopScore),
      reason: reasonText || 'Standard evaluation',
      breakdown: shopReasons,
      removalValue: removalValue
    };
  });

  const filtered = filterAndSortCards(scored);

  const html = filtered.map(item => {
    let cardHtml = renderCardResult(item.card, item, true);

    // Add removal value indicator
    if (item.removalValue > 60) {
      const removalBadge = `<div style="font-size: 0.85rem; color: #6ee7b7; margin-top: 6px; padding: 8px; background: rgba(110, 231, 183, 0.1); border-radius: 6px;">💎 Worth removing a card (${item.removalValue}/100)</div>`;
      cardHtml = cardHtml.replace('</div>\n  `;', `${removalBadge}</div>\n  \`;`);
    }

    return cardHtml;
  }).join('');

  document.getElementById('shop-results').innerHTML = html;

  if (filtered.some(item => item.score >= 90)) {
    triggerConfetti();
  }

  showToast(`Analyzed ${filtered.length} shop card${filtered.length !== 1 ? 's' : ''}`, 'success', 2000);
}

async function scoreShop() {
  const input = document.getElementById('shop-cards').value;
  const cards = input.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (cards.length === 0) {
    document.getElementById('shop-results').innerHTML =
      '<div class="empty-state"><div class="empty-icon">🏪</div><h3>No shop cards to analyze</h3><p>Enter available shop cards above</p></div>';
    return;
  }

  showSkeleton('shop-results', cards.length);
  setLoading('shop-results', true);

  await new Promise(resolve => setTimeout(resolve, 500));

  const scored = cards.map(name => {
    const card = findCard(name);
    const result = scoreCard(name);
    result.score = Math.max(0, result.score - 5);
    result.reason += ' • Shop purchase (-5)';
    return { card: card || { name }, ...result };
  });

  const filtered = filterAndSortCards(scored);

  const html = filtered.map(item => renderCardResult(item.card, item)).join('');
  document.getElementById('shop-results').innerHTML = html;

  setLoading('shop-results', false);

  if (filtered.some(item => item.score >= 90)) {
    triggerConfetti();
  }

  showToast(`Analyzed ${filtered.length} shop card${filtered.length !== 1 ? 's' : ''}`, 'success', 2000);
}

// ============================================================================
// REMOVAL SCORING
// ============================================================================

async function autoAnalyzeRemovals() {
  if (currentDeck.length === 0) {
    showToast('No cards in deck to analyze', 'warning');
    document.getElementById('removal-results').innerHTML =
      '<div class="empty-state"><div class="empty-icon">📋</div><h3>Deck is empty</h3><p>Add cards to your deck first</p></div>';
    return;
  }

  // Analyze all cards in current deck
  showSkeleton('removal-results', currentDeck.length);

  await new Promise(resolve => setTimeout(resolve, 500));

  const uniqueCards = [...new Set(currentDeck)];
  const scored = uniqueCards.map(name => {
    const card = findCard(name);
    let score = 50;
    let reasons = [];

    if (name === 'Strike' || name === 'Defend') {
      const act = currentAct;
      score += act * 15;
      reasons.push(`Starter card in Act ${act}`);
    }

    if (card && card.cost >= 3 && currentDeck.length > 25) {
      score += 15;
      reasons.push('High cost in large deck');
    }

    if (card && card.keywords) {
      const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
      const hasSynergy = keywords.some(kw => detectedArchetypes.has(kw.toLowerCase()));
      if (!hasSynergy && detectedArchetypes.size > 0) {
        score += 10;
        reasons.push('No archetype synergy');
      }
    }

    // Count duplicates
    const count = currentDeck.filter(c => c === name).length;
    if (count > 2) {
      score += 5;
      reasons.push(`${count} copies in deck`);
    }

    score = Math.max(0, Math.min(100, score));

    return {
      card: card || { name },
      score: Math.round(score),
      reason: reasons.join(' • ') || 'Consider removing',
      count: count
    };
  }).sort((a, b) => b.score - a.score);

  const html = scored.map(item => {
    const cardWithCount = { ...item.card, name: `${item.card.name || item.name}${item.count > 1 ? ` (×${item.count})` : ''}` };
    return renderCardResult(cardWithCount, item, false);
  }).join('');

  document.getElementById('removal-results').innerHTML = html;

  showToast(`Analyzed ${uniqueCards.length} unique card${uniqueCards.length !== 1 ? 's' : ''} from deck`, 'success', 2000);
}

async function scoreRemovals() {
  const input = document.getElementById('removal-cards').value;
  const cards = input.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (cards.length === 0) {
    document.getElementById('removal-results').innerHTML =
      '<div class="empty-state"><div class="empty-icon">🗑️</div><h3>No cards to analyze</h3><p>Enter cards to consider for removal or use "Analyze Deck for Removals"</p></div>';
    return;
  }

  showSkeleton('removal-results', cards.length);
  setLoading('removal-results', true);

  await new Promise(resolve => setTimeout(resolve, 500));

  const scored = cards.map(name => {
    const card = findCard(name);
    let score = 50;
    let reasons = [];

    if (name === 'Strike' || name === 'Defend') {
      const act = currentAct;
      score += act * 15;
      reasons.push(`Starter card in Act ${act}`);
    }

    if (card && card.cost >= 3 && currentDeck.length > 25) {
      score += 15;
      reasons.push('High cost in large deck');
    }

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
  });

  const filtered = filterAndSortCards(scored);

  const html = filtered.map(item => renderCardResult(item.card, item)).join('');
  document.getElementById('removal-results').innerHTML = html;

  setLoading('removal-results', false);

  showToast(`Analyzed ${filtered.length} removal candidate${filtered.length !== 1 ? 's' : ''}`, 'success', 2000);
}

// ============================================================================
// KEYBOARD SHORTCUTS
// ============================================================================

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

  // Tab switching
  if (e.key === '1') switchTab('rewards');
  else if (e.key === '2') switchTab('shop');
  else if (e.key === '3') switchTab('removal');

  // Help modal
  else if (e.key === '?') openModal('help-modal');

  // Close modals with Escape
  else if (e.key === 'Escape') {
    const openModals = document.querySelectorAll('.modal.show');
    openModals.forEach(modal => closeModal(modal.id));
  }
});

// ============================================================================
// AUTOCOMPLETE
// ============================================================================

let autocompleteData = [];
let currentAutocompleteIndex = -1;
let currentAutocompleteField = null;

function initAutocomplete() {
  console.log('Initializing autocomplete, CARDS:', Object.keys(CARDS).length);
  console.log('Current character:', currentCharacter);

  // Build searchable card list
  autocompleteData = Object.values(CARDS)
    .filter(card => card.name && card.character === currentCharacter)
    .map(card => ({
      name: card.name,
      type: card.type || '',
      cost: card.cost,
      rarity: card.rarity || '',
      icon: TYPE_ICONS[card.type] || '📄'
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  console.log('Autocomplete data:', autocompleteData.length, 'cards');

  // Setup autocomplete for reward cards
  setupAutocompleteField('reward-card-1', 'reward-dropdown-1');
  setupAutocompleteField('reward-card-2', 'reward-dropdown-2');
  setupAutocompleteField('reward-card-3', 'reward-dropdown-3');

  // Setup autocomplete for shop
  setupShopAutocomplete();

  // Setup autocomplete for deck
  setupDeckAutocomplete();

  // Setup autocomplete for additional rewards
  setupAdditionalRewardAutocomplete();

  // Setup autocomplete for relics
  setupRelicAutocomplete();
}

function setupAdditionalRewardAutocomplete() {
  const input = document.getElementById('additional-reward-input');
  const dropdown = document.getElementById('additional-reward-dropdown');

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    currentAutocompleteIndex = -1;

    if (query.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    // Fuzzy search
    const matches = autocompleteData.filter(card => {
      const name = card.name.toLowerCase();
      if (name.startsWith(query)) return true;
      if (name.includes(query)) return true;
      let j = 0;
      for (let i = 0; i < name.length && j < query.length; i++) {
        if (name[i] === query[j]) j++;
      }
      return j === query.length;
    }).slice(0, 10);

    if (matches.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    dropdown.innerHTML = matches.map((card, idx) => `
      <div class="autocomplete-item" data-index="${idx}" data-name="${card.name}" onclick="addAdditionalRewardCard('${card.name}')">
        <span class="autocomplete-item-icon">${card.icon}</span>
        <span class="autocomplete-item-name">${card.name}</span>
        <span class="autocomplete-item-meta">
          <span>${card.cost >= 0 ? card.cost : 'X'}</span>
          ${card.rarity ? `<span>${card.rarity}</span>` : ''}
        </span>
      </div>
    `).join('');

    dropdown.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.autocomplete-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentAutocompleteIndex = Math.min(currentAutocompleteIndex + 1, items.length - 1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentAutocompleteIndex = Math.max(currentAutocompleteIndex - 1, -1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items.length > 0) {
        const targetIndex = currentAutocompleteIndex >= 0 ? currentAutocompleteIndex : 0;
        if (items[targetIndex]) {
          const cardName = items[targetIndex].dataset.name;
          addAdditionalRewardCard(cardName);
        }
      }
    } else if (e.key === 'Escape') {
      dropdown.classList.remove('show');
      currentAutocompleteIndex = -1;
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      dropdown.classList.remove('show');
    }, 200);
  });
}

function setupRelicAutocomplete() {
  const input = document.getElementById('relic-input');
  const dropdown = document.getElementById('relic-dropdown');

  if (!input || !dropdown) return;

  // Build searchable relic list
  const relicData = Object.values(RELICS)
    .filter(relic => {
      // Include shared relics and character-specific relics
      return relic.character === 'shared' ||
             relic.character === currentCharacter ||
             relic.character === 'event';
    })
    .map(relic => ({
      name: relic.name,
      rarity: relic.rarity || 'Common',
      character: relic.character,
      description: relic.description
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    currentAutocompleteIndex = -1;

    if (query.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    // Fuzzy search
    const matches = relicData.filter(relic => {
      const name = relic.name.toLowerCase();
      if (name.startsWith(query)) return true;
      if (name.includes(query)) return true;
      let j = 0;
      for (let i = 0; i < name.length && j < query.length; i++) {
        if (name[i] === query[j]) j++;
      }
      return j === query.length;
    }).slice(0, 10);

    if (matches.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    dropdown.innerHTML = matches.map((relic, idx) => `
      <div class="autocomplete-item" data-index="${idx}" data-name="${relic.name}" onclick="addRelic('${relic.name}')">
        <span class="autocomplete-item-icon">🔮</span>
        <span class="autocomplete-item-name">${relic.name}</span>
        <span class="autocomplete-item-meta">
          <span>${relic.rarity}</span>
        </span>
      </div>
    `).join('');

    dropdown.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.autocomplete-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentAutocompleteIndex = Math.min(currentAutocompleteIndex + 1, items.length - 1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentAutocompleteIndex = Math.max(currentAutocompleteIndex - 1, -1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items.length > 0) {
        const targetIndex = currentAutocompleteIndex >= 0 ? currentAutocompleteIndex : 0;
        if (items[targetIndex]) {
          const relicName = items[targetIndex].dataset.name;
          addRelic(relicName);
        }
      }
    } else if (e.key === 'Escape') {
      dropdown.classList.remove('show');
      currentAutocompleteIndex = -1;
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      dropdown.classList.remove('show');
    }, 200);
  });
}

function addRelic(relicName) {
  if (!currentRelics.includes(relicName)) {
    currentRelics.push(relicName);
    renderRelicList();

    // Clear input
    const input = document.getElementById('relic-input');
    if (input) input.value = '';

    // Hide dropdown
    const dropdown = document.getElementById('relic-dropdown');
    if (dropdown) dropdown.classList.remove('show');

    // Re-analyze deck with new relic context
    analyzeDeck();

    showToast(`Added relic: ${relicName}`, 'success');
  }
}

function removeRelic(relicName) {
  const index = currentRelics.indexOf(relicName);
  if (index > -1) {
    currentRelics.splice(index, 1);
    renderRelicList();
    analyzeDeck();
    showToast(`Removed relic: ${relicName}`, 'info');
  }
}

function renderRelicList() {
  const container = document.getElementById('relic-pills');
  if (!container) return;

  container.innerHTML = currentRelics.map(relicName => {
    return `
      <div class="pill-tag">
        <span class="pill-tag-icon">🔮</span>
        <span>${relicName}</span>
        <button class="pill-tag-remove" onclick="removeRelic('${relicName}')" aria-label="Remove ${relicName}">×</button>
      </div>
    `;
  }).join('');
}

function findRelic(name) {
  const normalized = name.toUpperCase().trim();
  return RELICS[normalized];
}

function clearInput(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    input.value = '';
    input.focus();

    // Hide clear button
    const clearBtn = input.parentElement.querySelector('.input-clear-btn');
    if (clearBtn) clearBtn.classList.remove('show');

    // Hide dropdown
    const container = input.closest('.pill-input-container');
    if (container) {
      const dropdown = container.parentElement.querySelector('.autocomplete-dropdown');
      if (dropdown) dropdown.classList.remove('show');
    }
  }
}

function setupInputClearButtons() {
  const inputs = ['relic-input', 'deck-card-input', 'shop-card-input', 'additional-reward-input'];

  inputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (!input) return;

    const clearBtn = input.parentElement.querySelector('.input-clear-btn');
    if (!clearBtn) return;

    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        clearBtn.classList.add('show');
      } else {
        clearBtn.classList.remove('show');
      }
    });
  });
}

function calculateRelicSynergy(card) {
  let bonus = 0;

  currentRelics.forEach(relicName => {
    const relic = findRelic(relicName);
    if (!relic) return;

    const relicDesc = relic.description.toLowerCase();
    const cardDesc = card.description?.toLowerCase() || '';
    const cardKeywords = card.keywords || [];

    // Powers synergy
    if (relicDesc.includes('power') && card.type === 'Power') {
      bonus += 10;
    }

    // Attack synergy
    if (relicDesc.includes('attack') && card.type === 'Attack') {
      bonus += 8;
    }

    // Skill synergy
    if (relicDesc.includes('skill') && card.type === 'Skill') {
      bonus += 8;
    }

    // Zero cost synergy
    if (relicDesc.includes('0-cost') || relicDesc.includes('zero cost')) {
      if (card.cost === 0) bonus += 15;
    }

    // Keyword synergies
    cardKeywords.forEach(kw => {
      const kwLower = kw.toLowerCase();
      if (relicDesc.includes(kwLower)) {
        bonus += 12;
      }
    });

    // Specific synergies
    if (relicDesc.includes('draw') && cardDesc.includes('draw')) {
      bonus += 10;
    }

    if (relicDesc.includes('discard') && cardDesc.includes('discard')) {
      bonus += 10;
    }

    if (relicDesc.includes('exhaust') && cardDesc.includes('exhaust')) {
      bonus += 10;
    }

    if (relicDesc.includes('block') && card.type === 'Skill') {
      bonus += 5;
    }
  });

  return Math.min(bonus, 30); // Cap at +30
}

function addAdditionalRewardCard(cardName) {
  // Prevent duplicates
  if (additionalRewardCards.includes(cardName)) {
    showToast(`${cardName} already added`, 'warning', 1500);
    return;
  }

  additionalRewardCards.push(cardName);
  renderAdditionalRewardList();

  // Clear input
  const input = document.getElementById('additional-reward-input');
  if (input) {
    input.value = '';
    document.getElementById('additional-reward-dropdown').classList.remove('show');
  }

  showToast(`Added ${cardName}`, 'success', 1500);
}

function removeAdditionalRewardCard(cardName) {
  additionalRewardCards = additionalRewardCards.filter(c => c !== cardName);
  renderAdditionalRewardList();
  showToast(`Removed ${cardName}`, 'info', 1500);
}

function renderAdditionalRewardList() {
  const container = document.getElementById('additional-reward-pills');
  if (!container) return;

  container.innerHTML = additionalRewardCards.map(cardName => {
    const card = findCard(cardName);
    const icon = card ? (TYPE_ICONS[card.type] || '📄') : '📄';

    return `
      <div class="pill-tag">
        <span class="pill-tag-icon">${icon}</span>
        <span>${cardName}</span>
        <button class="pill-tag-remove" onclick="removeAdditionalRewardCard('${cardName}')" aria-label="Remove ${cardName}">×</button>
      </div>
    `;
  }).join('');
}

function setupShopAutocomplete() {
  const input = document.getElementById('shop-card-input');
  const dropdown = document.getElementById('shop-dropdown');

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    currentAutocompleteIndex = -1;

    if (query.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    // Fuzzy search
    const matches = autocompleteData.filter(card => {
      const name = card.name.toLowerCase();
      if (name.startsWith(query)) return true;
      if (name.includes(query)) return true;
      let j = 0;
      for (let i = 0; i < name.length && j < query.length; i++) {
        if (name[i] === query[j]) j++;
      }
      return j === query.length;
    }).slice(0, 10);

    if (matches.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    dropdown.innerHTML = matches.map((card, idx) => `
      <div class="autocomplete-item" data-index="${idx}" data-name="${card.name}" onclick="addShopCard('${card.name}')">
        <span class="autocomplete-item-icon">${card.icon}</span>
        <span class="autocomplete-item-name">${card.name}</span>
        <span class="autocomplete-item-meta">
          <span>${card.cost >= 0 ? card.cost : 'X'}</span>
          ${card.rarity ? `<span>${card.rarity}</span>` : ''}
        </span>
      </div>
    `).join('');

    dropdown.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.autocomplete-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentAutocompleteIndex = Math.min(currentAutocompleteIndex + 1, items.length - 1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentAutocompleteIndex = Math.max(currentAutocompleteIndex - 1, -1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items.length > 0) {
        const targetIndex = currentAutocompleteIndex >= 0 ? currentAutocompleteIndex : 0;
        if (items[targetIndex]) {
          const cardName = items[targetIndex].dataset.name;
          addShopCard(cardName);
        }
      }
    } else if (e.key === 'Escape') {
      dropdown.classList.remove('show');
      currentAutocompleteIndex = -1;
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      dropdown.classList.remove('show');
    }, 200);
  });
}

function setupAutocompleteField(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    currentAutocompleteField = { input, dropdown, inputId };
    currentAutocompleteIndex = -1;

    console.log('Input event:', query, 'Data length:', autocompleteData.length);

    if (query.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    // Fuzzy search
    const matches = autocompleteData.filter(card => {
      const name = card.name.toLowerCase();
      // Exact prefix match gets priority
      if (name.startsWith(query)) return true;
      // Contains match
      if (name.includes(query)) return true;
      // Fuzzy match (all chars in order)
      let j = 0;
      for (let i = 0; i < name.length && j < query.length; i++) {
        if (name[i] === query[j]) j++;
      }
      return j === query.length;
    }).slice(0, 10);

    if (matches.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    dropdown.innerHTML = matches.map((card, idx) => `
      <div class="autocomplete-item" data-index="${idx}" data-name="${card.name}" onclick="selectAutocomplete('${inputId}', '${card.name}')">
        <span class="autocomplete-item-icon">${card.icon}</span>
        <span class="autocomplete-item-name">${card.name}</span>
        <span class="autocomplete-item-meta">
          <span>${card.cost >= 0 ? card.cost : 'X'}</span>
          ${card.rarity ? `<span>${card.rarity}</span>` : ''}
        </span>
      </div>
    `).join('');

    dropdown.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    const dropdown = document.getElementById(dropdownId);
    const items = dropdown.querySelectorAll('.autocomplete-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentAutocompleteIndex = Math.min(currentAutocompleteIndex + 1, items.length - 1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentAutocompleteIndex = Math.max(currentAutocompleteIndex - 1, -1);
      highlightAutocompleteItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      // If no item is highlighted but there are items, select the first one
      if (items.length > 0) {
        const targetIndex = currentAutocompleteIndex >= 0 ? currentAutocompleteIndex : 0;
        if (items[targetIndex]) {
          const cardName = items[targetIndex].dataset.name;
          selectAutocomplete(inputId, cardName);
        }
      }
    } else if (e.key === 'Escape') {
      dropdown.classList.remove('show');
      currentAutocompleteIndex = -1;
    }
  });

  input.addEventListener('blur', () => {
    // Delay to allow click on dropdown
    setTimeout(() => {
      dropdown.classList.remove('show');
    }, 200);
  });
}

function highlightAutocompleteItem(items) {
  items.forEach((item, idx) => {
    item.classList.toggle('selected', idx === currentAutocompleteIndex);
  });

  if (currentAutocompleteIndex >= 0 && items[currentAutocompleteIndex]) {
    items[currentAutocompleteIndex].scrollIntoView({ block: 'nearest' });
  }
}

function selectAutocomplete(inputId, cardName) {
  const input = document.getElementById(inputId);
  if (!input) return;

  input.value = cardName;
  const dropdownId = inputId.replace('reward-card', 'reward-dropdown');
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.remove('show');
  }

  currentAutocompleteIndex = -1;
  showToast(`Selected: ${cardName}`, 'success', 1500);

  // Check if all 3 cards are filled and auto-analyze
  checkAutoAnalyze();
}

function checkAutoAnalyze() {
  const card1 = document.getElementById('reward-card-1')?.value.trim();
  const card2 = document.getElementById('reward-card-2')?.value.trim();
  const card3 = document.getElementById('reward-card-3')?.value.trim();

  if (card1 && card2 && card3) {
    // Auto-analyze after a short delay
    setTimeout(() => scoreRewards(), 300);
  }
}

function clearAutocompleteFields() {
  ['reward-card-1', 'reward-card-2', 'reward-card-3'].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.value = '';
  });
  showToast('Cleared all selections', 'info', 1500);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAutocomplete();
  loadStarter('ironclad');
  setupInputClearButtons();

  // Show welcome toast
  setTimeout(() => {
    showToast('Welcome to STS2 Decision Advisor!', 'success');
  }, 500);

  // Setup help modal content
  const helpContent = document.getElementById('help-content');
  if (helpContent) {
    helpContent.innerHTML = `
      <h3>Keyboard Shortcuts</h3>
      <dl class="shortcut-list">
        <dt><kbd>1</kbd></dt><dd>Switch to Card Rewards tab</dd>
        <dt><kbd>2</kbd></dt><dd>Switch to Shop tab</dd>
        <dt><kbd>3</kbd></dt><dd>Switch to Card Removal tab</dd>
        <dt><kbd>?</kbd></dt><dd>Show this help dialog</dd>
        <dt><kbd>Esc</kbd></dt><dd>Close modal dialogs</dd>
      </dl>
      <h3>Features</h3>
      <ul>
        <li><strong>Card Analysis:</strong> Get scored recommendations for card choices</li>
        <li><strong>Archetype Detection:</strong> Automatically identifies deck archetypes</li>
        <li><strong>Bulk Actions:</strong> Select multiple cards to compare or export</li>
        <li><strong>Filters:</strong> Filter by type, rarity, and sort by various criteria</li>
        <li><strong>Dark/Light Mode:</strong> Toggle theme with the sun/moon button</li>
      </ul>
    `;
  }
});
