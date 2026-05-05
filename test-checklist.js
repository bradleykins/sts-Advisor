// Quick verification script - paste into browser console after page loads

console.log('=== STS2 Advisor Verification ===\n');

// 1. Check global state initialized
console.log('✓ Global state:', {
  deck: currentDeck.length + ' cards',
  character: currentCharacter,
  act: currentAct,
  ascension: currentAscension
});

// 2. Check key functions exist
const requiredFunctions = [
  'scoreCard',
  'renderCardResult',
  'showCardPreview',
  'hideCardPreview',
  'analyzeDeckStats',
  'scoreRewards',
  'analyzeShopCards',
  'toggleCardUpgrade',
  'setCardEnchantment',
  'saveDeckState',
  'loadDeckState'
];

const missing = requiredFunctions.filter(fn => typeof window[fn] !== 'function');
if (missing.length > 0) {
  console.error('✗ Missing functions:', missing);
} else {
  console.log('✓ All required functions defined');
}

// 3. Check DOM elements exist
const requiredElements = [
  'analyze-rewards-btn',
  'analyze-shop-btn',
  'auto-analyze-removal-btn',
  'card-hover-preview',
  'deck-pills',
  'reward-results',
  'shop-results',
  'removal-results'
];

const missingElements = requiredElements.filter(id => !document.getElementById(id));
if (missingElements.length > 0) {
  console.error('✗ Missing DOM elements:', missingElements);
} else {
  console.log('✓ All required DOM elements exist');
}

// 4. Check button IDs match setLoading expectations
const analyzeButtons = {
  'reward-results': 'analyze-rewards-btn',
  'shop-results': 'analyze-shop-btn',
  'removal-results': 'auto-analyze-removal-btn'
};

Object.entries(analyzeButtons).forEach(([context, btnId]) => {
  const btn = document.getElementById(btnId);
  if (!btn) {
    console.error(`✗ Button ${btnId} not found for ${context}`);
  } else {
    console.log(`✓ ${context} -> ${btnId}`);
  }
});

// 5. Check localStorage persistence
const saved = localStorage.getItem('sts2-deck-state');
if (saved) {
  const state = JSON.parse(saved);
  console.log('✓ Deck state persisted:', {
    deck: state.deck?.length + ' cards',
    upgrades: state.upgradedCards?.length || 0,
    enchants: state.cardEnchantments?.length || 0
  });
} else {
  console.log('⚠ No saved deck state (expected on first load)');
}

// 6. Test add-to-deck button generation
console.log('\n--- Testing button generation ---');
const testCard = { name: 'Strike', type: 'Attack', rarity: 'Basic', cost: 1 };
const testResult = { score: 50, reason: 'Test', breakdown: [] };
const html = renderCardResult(testCard, testResult, true);

if (html.includes('add-to-deck-btn')) {
  console.log('✓ Add-to-deck button class present');
} else {
  console.error('✗ Add-to-deck button class missing');
}

if (html.includes('➕ Add to Deck')) {
  console.log('✓ Button text correct');
} else {
  console.error('✗ Button text incorrect:', html.match(/button[^>]*>([^<]+)</)?.[1]);
}

if (html.includes('onmouseenter="showCardPreview')) {
  console.log('✓ Hover handler present');
} else {
  console.error('✗ Hover handler missing');
}

console.log('\n=== Verification Complete ===');
console.log('Open AUDIT.md for manual testing checklist');
