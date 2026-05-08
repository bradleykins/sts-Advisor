// Load card database - use real STS2 card data
let CARDS = {};
if (typeof STS2_CARDS !== 'undefined') {
  CARDS = STS2_CARDS;
} else {
  console.error('STS2_CARDS not loaded!');
}

// Load relic database
let RELICS = {};
if (typeof STS2_RELICS !== 'undefined') {
  RELICS = STS2_RELICS;
} else {
  console.error('STS2_RELICS not loaded!');
}

// STS2 Enchantments (prioritized: Nimble, Sharp, Swift first)
const ENCHANTMENTS = {
  'Nimble': { icon: '🏃', effect: 'Increase Block by X' },
  'Sharp': { icon: '🗡️', effect: 'Increase damage by X' },
  'Swift': { icon: '🌪️', effect: 'Draw X cards first play' },
  'Adroit': { icon: '🎯', effect: 'Gain X Block' },
  'Clone': { icon: '👯', effect: 'Can be duplicated at Rest Sites' },
  'Corrupted': { icon: '💀', effect: 'Deal 50% more damage, lose 2 HP' },
  'Favored': { icon: '⭐', effect: 'Attack damage doubled' },
  'Glam': { icon: '✨', effect: 'Replay once per combat' },
  'Goopy': { icon: '💧', effect: 'Exhaust, +1 Block permanently each play' },
  'Imbued': { icon: '🔮', effect: 'Auto-play at start of combat' },
  'Inky': { icon: '🖋️', effect: '+2 damage, apply 1 Weak' },
  'Instinct': { icon: '⚡', effect: 'Attack damage doubled' },
  'Momentum': { icon: '💨', effect: 'Increase damage by X when played' },
  'Perfect Fit': { icon: '🎴', effect: 'Top of draw pile when shuffled' },
  'Royally Approved': { icon: '👑', effect: 'Innate and Retain' },
  'Slither': { icon: '🐍', effect: 'Random cost 0-3 when drawn' },
  'Slumbering Essence': { icon: '😴', effect: 'Cost -1 if held at end of turn' },
  'Soul\'s Power': { icon: '👻', effect: 'Loses Exhaust' },
  'Sown': { icon: '🌱', effect: 'Gain 1 Energy first play' },
  'Spiral': { icon: '🌀', effect: 'Replay 1' },
  'Steady': { icon: '🛡️', effect: 'Retain' },
  'Tezcatara\'s Ember': { icon: '🔥', effect: 'Costs 0, Eternal' },
  'Vigorous': { icon: '💪', effect: 'First play deals X more damage' }
};

// Relic gameplay effects for MC simulation
const RELIC_EFFECTS = {
  // === ENERGY RELICS (Boss/Event) ===
  'LANTERN': { startEnergy: 1 },
  'COFFEE DRIPPER': { startEnergy: 1 },
  'PHILOSOPHERS STONE': { startEnergy: 1 },
  'PHILOSOPHER\'S STONE': { startEnergy: 1 },
  'SOZU': { startEnergy: 1 },
  'BUSTED CROWN': { startEnergy: 1 },
  'CURSED KEY': { startEnergy: 1 },
  'FUSION HAMMER': { startEnergy: 1 },
  'RUNIC DOME': { startEnergy: 1 },
  'VELVET CHOKER': { startEnergy: 1 },
  'ECTOPLASM': { startEnergy: 1 },
  'PRISMATIC GEM': { startEnergy: 1 },
  'WHISPERING EARRING': { startEnergy: 1 },
  'BLESSED ANTLER': { startEnergy: 1 },
  'BLOOD-SOAKED ROSE': { startEnergy: 1 },
  'PUMPKIN CANDLE': { startEnergy: 1 },
  'SPIKED GAUNTLETS': { startEnergy: 1 },
  'MUTAGENIC STRENGTH': { startEnergy: 1, damageMultiplier: 1.05 }, // +2 str, enemies +1 str
  'MARK OF PAIN': { startEnergy: 0.5 }, // +1 energy when taking unblocked damage (50% avg)
  'NUCLEAR BATTERY': { startEnergy: 0.5 }, // Defect focus +1 = ~0.5 energy
  'HAPPY FLOWER': { startEnergy: 0.33 }, // +1 energy every 3 turns
  'HAPPY FLOWER???': { startEnergy: 0.25 }, // +1 energy every 4 turns
  'NUNCHAKU': { startEnergy: 0.1 }, // +1 energy per 10 attacks
  'ART OF WAR': { startEnergy: 0.3 }, // +1 energy next turn if no attacks played
  'MUMMIFIED HAND': { startEnergy: 0.3 }, // Free card when playing power
  'VENERABLE TEA SET': { startEnergy: 0.2 }, // 2+ cost cards = 7 block (indirect energy value)
  'VENERABLE TEA SET???': { startEnergy: 0.1 }, // Weaker version

  // === DRAW RELICS ===
  'BAG OF MARBLES': { startDraw: 1 },
  'SNECKO EYE': { startDraw: 4 }, // Draw 2 additional + confused
  'RING OF THE SNAKE': { startDraw: 2 }, // Silent starter
  'BAG OF PREPARATION': { startDraw: 2 },
  'BOOMING CONCH': { startDraw: 2 },
  'PAEL\'S BLOOD': { startDraw: 1 },
  'POCKETWATCH': { startDraw: 3 },
  'POLLINOUS CORE': { startDraw: 2 },
  'RING OF THE DRAKE': { startDraw: 2 },
  'FIDDLE': { startDraw: 2 },
  'SNECKO EYE???': { startDraw: 2 },
  'VIOLET TOME': { startDraw: 1 }, // +1 card per turn
  'GAMBLING CHIP': { startDraw: 1 }, // Discard any, draw same (net ~+1)
  'CENTENNIAL PUZZLE': { startDraw: 1 }, // First hand +1 card
  'SUNDIAL': { startDraw: 0.66 }, // Draw 2 every 3 turns
  'RUNIC PYRAMID': { startDraw: 1 }, // No discard = effectively +1 draw
  'POCKET JOURNAL': { startDraw: 1 }, // 3 or fewer cards = +3 draw (conditional avg)
  'NINJA SCROLL': { startDraw: 1 }, // 3 shivs at start = ~1 draw value
  'METRONOME': { startDraw: 1 }, // Random attack in hand at start
  'STRIKE DUMMY': { startDraw: 1 }, // 2 0-cost cards at start

  // === BLOCK RELICS ===
  'ANCHOR': { startBlock: 10 },
  'ORICHALCUM': { blockPerTurn: 6 },
  'SAI': { blockPerTurn: 7 },
  'ANCHOR???': { startBlock: 4 },
  'ORNAMENTAL FAN': { blockPerAttack: 3, damageMultiplier: 1.05 },
  'ORNAMENTAL FAN???': { blockPerAttack: 1, damageMultiplier: 1.02 },
  'THREAD AND NEEDLE': { platedArmor: 4 },
  'GORGET': { platedArmor: 4 },
  'CAPTAIN\'S WHEEL': { blockPerTurn: 3 }, // 6 block if ending with 0 (50% avg)
  'HORN CLOAK': { startBlock: 7 }, // 2nd turn = 14 block (avg across turns)
  'STONE CALENDAR': { startBlock: 6 }, // 3rd turn = 18 block (avg)
  'TOUGH BANDAGES': { blockPerTurn: 2 }, // 3 block per discard (avg ~2/turn)
  'SELF FORMING CLAY': { blockPerTurn: 2 }, // Block from HP loss
  'BELLOWS': { damageMultiplier: 1.03 }, // First hand upgraded
  'BOOK OF FIVE RINGS': { blockPerTurn: 2 }, // <10 block = deal 6 (indirect block value)

  // === VIGOR/STRENGTH/DEX RELICS ===
  'AKABEKO': { startVigor: 8 },
  'VAJRA': { damageMultiplier: 1.15 }, // +1 strength permanent
  'GIRYA': { damageMultiplier: 1.10 }, // +strength at rest sites
  'DIVINE RIGHT': { damageMultiplier: 1.08 }, // Start with 3 gold = flexibility

  // === DAMAGE MULTIPLIER RELICS ===
  'PEN NIB': { damageMultiplier: 1.10 }, // Double damage every 10th attack
  'KUNAI': { damageMultiplier: 1.08 }, // +1 dex every 3 attacks
  'SHURIKEN': { damageMultiplier: 1.12 }, // +1 str every 3 attacks
  'WRIST BLADE': { damageMultiplier: 1.05 },
  'MINIATURE CANNON': { damageMultiplier: 1.08 }, // Strike +3 damage
  'PAPER KRANE': { damageMultiplier: 1.08 }, // Upgraded attacks +3 damage
  'LETTER OPENER': { damageMultiplier: 1.04 }, // Every 3 skills = 5 damage
  'THE BOOT': { damageMultiplier: 1.03 }, // Min 5 damage
  'CHAMPION BELT': { damageMultiplier: 1.05 },
  'PRESERVED INSECT': { damageMultiplier: 1.15 }, // Elites +25%
  'SLING OF COURAGE': { damageMultiplier: 1.10 }, // Elites +10%
  'RED SKULL': { damageMultiplier: 1.15 }, // +3 str when <50% HP
  'RUPTURE': { damageMultiplier: 1.08 }, // Strength from HP loss
  'ORANGE PELLETS': { damageMultiplier: 1.04 }, // +1 str/dex when playing all 3 types
  'MERCURY HOURGLASS': { damageMultiplier: 1.02 }, // 3 dmg to all per turn
  'TINGSHA': { damageMultiplier: 1.03 }, // 3 dmg per discard
  'DU-VU DOLL': { damageMultiplier: 1.03 }, // +1 str per curse
  'ODD MUSHROOM': { damageMultiplier: 1.05 }, // Weak = 40% instead of 25%
  'PAPER FROG': { damageMultiplier: 1.05 }, // Weak enemies deal 50% less
  'KUSARIGAMA': { damageMultiplier: 1.04 }, // Shiv +1 dex this turn
  'CROSSBOW': { damageMultiplier: 1.02 }, // Every 3 attacks = 6 damage
  'EMOTION CHIP': { damageMultiplier: 1.03 }, // Trigger orbs when hit
  'DELICATE FROND': { damageMultiplier: 1.02 }, // Channel 7 orbs = 30 damage
  'FENCING MANUAL': { damageMultiplier: 1.05 }, // Play A/S/P = +1 str/dex
  'HISTORY COURSE': { damageMultiplier: 1.02 }, // First time A/S/P = +1 str/dex
  'FUNERARY MASK': { damageMultiplier: 1.02 }, // Exhaust top = +1 str
  'LOST WISP': { damageMultiplier: 1.02 }, // Negative strength = 0
  'PANDORA\'S BOX': { damageMultiplier: 1.03 }, // Transform all strikes/defends
  'CHARON\'S ASHES': { damageMultiplier: 1.02 }, // Start = 9 to all

  // === HP RELICS ===
  'BLOOD VIAL': { startHP: 2 },
  'BURNING BLOOD': { hpPerCombat: 6 },
  'BLACK BLOOD': { hpPerCombat: 12 },
  'RING OF THE SERPENT': { hpPerCombat: 2 },
  'MAGIC FLOWER': { startHP: 5 },
  'STRAWBERRY': { startHP: 7 },
  'PEAR': { startHP: 10 },
  'MANGO': { startHP: 14 },
  'LEE\'S WAFFLE': { startHP: 7 },
  'BIG MUSHROOM': { startHP: 20 },
  'DARKSTONE PERIAPT': { startHP: 6 },
  'DRAGON FRUIT': { startHP: 1 },
  'LOOMING FRUIT': { startHP: 31 },
  'NUTRITIOUS OYSTER': { startHP: 11 },
  'STONE HUMIDIFIER': { startHP: 5 },
  'MANGO???': { startHP: 3 },
  'MEAT ON THE BONE': { hpPerCombat: 12 },
  'BLOOD VIAL???': { startHP: 1 },
  'PANTOGRAPH': { hpPerCombat: 13 }, // Heal 25 at boss (half value avg)
  'LEE\'S WAFFLE???': { startHP: 3 },

  // === DAMAGE REDUCTION / DEFENSE ===
  'BEATING REMNANT': { damageReduction: 10 }, // Can't lose >20 HP/turn
  'TUNGSTEN ROD': { damageReduction: 1 },
  'TORII': { damageReduction: 4 }, // Reduce damage >1 to 1
  'INCENSE BURNER': { damageReduction: 3 }, // Every 6 turns no damage (avg)

  // === PREVENT DEATH RELICS ===
  'LIZARD TAIL': { preventDeath: true },
  'GINGER': { preventDeath: true },
  'FAIRY IN A BOTTLE': { preventDeath: true },

  // === THORNS RELICS ===
  'BRONZE SCALES': { startThorns: 3 },

  // === SPECIAL MECHANICS ===
  'CHEMICAL X': { xCostBonus: 2 },
  'ICE CREAM': { energyCarryover: true },
  'BIRD FACED URN': { healPerPower: 2 },
  'TURNIP': { strengthPerKill: 1 },
  'ORRERY': { skipFirstTurn: true },
  'TOOLBOX': { starterUpgrade: true },

  // === CARD QUALITY / UPGRADE RELICS ===
  'TOXIC EGG': { damageMultiplier: 1.05 }, // Skills upgraded
  'MOLTEN EGG': { damageMultiplier: 1.05 }, // Attacks upgraded
  'FROZEN EGG': { damageMultiplier: 1.05 }, // Powers upgraded
  'ENCHANTING AUBERGINE': { damageMultiplier: 1.03 }, // Block cards enchanted with Nimble

  // === CHARACTER-SPECIFIC STARTERS ===
  'CRACKED CORE': { startEnergy: 0.5 }, // Channel 1 Lightning (simplified)
  'BOUND PHYLACTERY': { damageMultiplier: 1.05 }, // Summon 1 per turn (simplified)
  'INFUSED CORE': { startEnergy: 1 }, // Channel 3 Lightning
  'RUSTED CORE': { startEnergy: 0.3 }, // Channel 1 Lightning (weaker)

  // === ORICHALCUM VARIANT ===
  'ORICHALCUM???': { blockPerTurn: 3 }
};

// Global state
let currentDeck = [];
let upgradedCards = new Set(); // Tracks which cards in deck are upgraded
let cardEnchantments = new Map(); // Maps "index-cardName" -> enchantment name
let currentRelics = [];
let currentCharacter = 'ironclad';
let currentAct = 1;
let currentAscension = 0;
let mcSimulations = 100; // MC rollout simulation count
let useHeuristicScoring = true; // Toggle for heuristic-based scoring vs pure MC
let mcBaselineWinRate = null; // Cached baseline win rate (500 sims)
let mcBaselineHash = null; // Hash of deck state to detect when cache is stale
let mcCardCache = new Map(); // cardName → { baselineHash, winRate } cache
let bestCardsCache = null; // Cached best card suggestions
let bestCardsCacheHash = null; // Hash to detect when cache is stale
let detectedArchetypes = new Map();
let removalScoreCache = new Map(); // Cache removal MC scores: "cardName-upgraded-enchanted" → { impact, winRateAfter, baseline }
let upgradeScoreCache = new Map(); // Cache upgrade MC scores: "cardName-index" → { impact, winRateAfter, baseline }

// Auto-increase simulation quality when idle
let lastInteractionTime = Date.now();
let idleQualityInterval = null;

function resetIdleTimer() {
  lastInteractionTime = Date.now();
}

function startIdleQualityBoost() {
  if (idleQualityInterval) return; // Already running

  idleQualityInterval = setInterval(() => {
    const idleSeconds = (Date.now() - lastInteractionTime) / 1000;

    if (idleSeconds >= 10 && mcSimulations < 1000) {
      // Increase simulation count
      const oldSims = mcSimulations;
      mcSimulations = Math.min(1000, mcSimulations + 100);

      // Recalculate baseline and best cards with higher quality
      if (currentDeck.length > 0) {
        invalidateMCBaseline();
        calculateMCBaseline();
        updateBestCardsSuggestions();
        autoAnalyzeRemovals(); // Always update removal (available from deck section)
        analyzeDeckStats(); // Update deck stats + upgrade priority

        // Re-analyze visible tab content
        const activeTab = document.querySelector('.tab-button.active')?.dataset.tab;
        if (activeTab === 'rewards' && selectedCards.size > 0) {
          analyzeRewardCards();
        } else if (activeTab === 'shop' && Object.keys(shopCards).length > 0) {
          analyzeShopItems();
        }
      }

      // Reset timer after boost
      lastInteractionTime = Date.now();
    }
  }, 10000); // Check every 10 seconds
}

// Start idle quality boost on page load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    startIdleQualityBoost();

    // Reset timer on any user interaction
    document.addEventListener('click', resetIdleTimer);
    document.addEventListener('keydown', resetIdleTimer);
    document.addEventListener('input', resetIdleTimer);
    document.addEventListener('scroll', resetIdleTimer);
  });
}

function invalidateMCBaseline() {
  mcBaselineWinRate = null;
  mcBaselineHash = null;
  mcCardCache.clear(); // All card scores are invalid when baseline changes
  bestCardsCache = null; // Invalidate best cards cache too
  bestCardsCacheHash = null;
  removalScoreCache.clear(); // Invalidate removal scores when deck changes
  upgradeScoreCache.clear(); // Invalidate upgrade scores when deck changes
}

function calculateMCBaseline() {
  // Run full sim baseline for current deck
  const baselineResult = performMCRollout({ name: '__BASELINE__' }, mcSimulations);
  mcBaselineWinRate = baselineResult.winRate;
  mcBaselineHash = currentDeck.join(','); // Simple hash of deck state

  // Cache the baseline result with deck power
  mcCardCache.set(`baseline-${mcBaselineHash}`, {
    baselineHash: mcBaselineHash,
    ...baselineResult
  });

  console.log(`✓ MC Baseline: ${Math.round(mcBaselineWinRate)}% win, ${Math.round(baselineResult.deckPower)} power (${mcSimulations} sims)`);
}

let selectedCards = new Set();
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentFilters = {
  type: 'all',
  rarity: 'all',
  sort: 'score'
};
let shopCards = {}; // slot index -> card name (maintains empty slots)
let shopColorlessCards = {}; // slot index -> card name
let shopRelics = {}; // slot index -> relic name
let shopRemovalSelected = false;
let shopRemovalCount = 0; // Track how many removals purchased this run
let additionalRewardCards = [];

// Card type icons
const TYPE_ICONS = {
  'Attack': '⚔️',
  'Skill': '🛡️',
  'Power': '⚡',
  'Status': '💀',
  'Curse': '👿'
};

// Boss mechanics (STS2) - from mobalytics.gg + in-game stats
const BOSS_MECHANICS = {
  // Act 1a - Overgrowth
  'ceremonial_beast': {
    penalizeCardDraw: false,
    penalizePowers: true,        // Ringing limits to 1 card/turn
    requireMultiHit: false,
    requireFrontLoaded: true,    // Must race to 150 HP threshold
    requireAOE: false,
    rewardBlock: false,
    penalizeCombo: true,         // Ringing kills combo decks
    name: 'Ceremonial Beast',
    emoji: '🐂',
    hp: 252,
    ascensionHP: 262
  },
  'kin_priest': {
    penalizeCardDraw: false,
    penalizePowers: true,        // Multi-enemy scaling fight
    requireMultiHit: false,
    requireFrontLoaded: true,    // Kill followers before they scale
    requireAOE: true,            // 3 enemies (1 priest + 2 followers)
    rewardBlock: true,           // Many small attacks
    penalizeCombo: false,
    name: 'The Kin',
    emoji: '👥',
    hp: 190,                     // Priest HP
    ascensionHP: 199,
    followerHP: 58,              // Each follower: 58-59 HP
    followerCount: 2
  },
  'vantom': {
    penalizeCardDraw: false,
    penalizePowers: true,        // Scaling fight
    requireMultiHit: true,       // CRITICAL - Slippery nullifies big hits
    requireFrontLoaded: true,    // Burn Slippery fast
    requireAOE: false,
    rewardBlock: true,           // Dismember hits hard
    penalizeCombo: false,
    name: 'Vantom',
    emoji: '👻',
    hp: 173,
    ascensionHP: 183
  },

  // Act 1b - Underdocks
  'lagavulin_matriarch': {
    penalizeCardDraw: false,
    penalizePowers: false,       // FREE 3 setup turns
    requireMultiHit: false,
    requireFrontLoaded: false,   // Setup time available
    requireAOE: false,
    rewardBlock: false,
    penalizeCombo: false,
    rewardSetup: true,           // 3 free turns for powers/combo
    rewardScaling: true,         // Kill before Soul Siphon stacks hurt
    name: 'Lagavulin Matriarch',
    emoji: '😴',
    hp: 222,
    ascensionHP: 233
  },
  'soul_fysh': {
    penalizeCardDraw: true,      // Drawing Beckons = 6 HP each!
    penalizePowers: true,        // Setup time = more Beckons
    requireMultiHit: true,       // Intangible negates first hit
    requireFrontLoaded: true,    // Kill before Beckons accumulate
    requireAOE: false,
    rewardBlock: false,
    penalizeCombo: true,         // Card-hungry decks draw Beckons
    rewardSetup: false,
    rewardScaling: false,
    rewardExhaust: true,         // Remove Beckons permanently
    name: 'Soul Fysh',
    emoji: '🐟',
    hp: 211,
    ascensionHP: 221
  },
  'waterfall_giant': {
    penalizeCardDraw: false,
    penalizePowers: true,        // Every turn = +3 explosion damage
    requireMultiHit: false,
    requireFrontLoaded: true,    // MUST burst from high HP to 0
    requireAOE: false,
    rewardBlock: true,           // Need to survive the setup
    penalizeCombo: true,         // Can't afford multi-turn combos
    rewardSetup: false,
    rewardScaling: false,        // Scaling takes too long
    rewardExhaust: false,
    requireBurst: true,          // One-shot or die to explosion
    name: 'Waterfall Giant',
    emoji: '🗿',
    hp: 240,
    ascensionHP: 250
  },

  // Act 2 - Hive
  'kaiser_crab': {
    penalizeCardDraw: false, penalizePowers: true, requireMultiHit: true, requireFrontLoaded: true,
    requireAOE: true, rewardBlock: true, penalizeCombo: false, rewardSetup: false, rewardScaling: false,
    rewardExhaust: false, requireBurst: false, rewardRetain: false, rewardAttacks: false,
    name: 'Kaiser Crab',
    emoji: '🦀',
    hp: 350,
    ascensionHP: 370
  },
  'knowledge_demon': {
    penalizeCardDraw: true, penalizePowers: true, requireMultiHit: false, requireFrontLoaded: true,
    requireAOE: false, rewardBlock: true, penalizeCombo: true, rewardSetup: false, rewardScaling: false,
    rewardExhaust: true, requireBurst: true, rewardRetain: false, rewardAttacks: false,
    name: 'Knowledge Demon',
    emoji: '📚',
    hp: 320,
    ascensionHP: 340
  },
  'the_insatiable': {
    penalizeCardDraw: false, penalizePowers: true, requireMultiHit: false, requireFrontLoaded: true,
    requireAOE: false, rewardBlock: true, penalizeCombo: true, rewardSetup: false, rewardScaling: false,
    rewardExhaust: false, requireBurst: true, rewardRetain: false, rewardAttacks: false,
    name: 'The Insatiable',
    emoji: '🦑',
    hp: 380,
    ascensionHP: 400
  },

  // Act 3 - Glory
  'doormaker': {
    penalizeCardDraw: true, penalizePowers: false, requireMultiHit: true, requireFrontLoaded: false,
    requireAOE: false, rewardBlock: true, penalizeCombo: true, rewardSetup: false, rewardScaling: false,
    rewardExhaust: false, requireBurst: false, rewardRetain: true, rewardAttacks: false,
    name: 'Doormaker',
    emoji: '🚪',
    hp: 450,
    ascensionHP: 480
  },
  'queen': {
    penalizeCardDraw: false, penalizePowers: true, requireMultiHit: true, requireFrontLoaded: true,
    requireAOE: true, rewardBlock: true, penalizeCombo: true, rewardSetup: false, rewardScaling: false,
    rewardExhaust: false, requireBurst: false, rewardRetain: false, rewardAttacks: false,
    name: 'Queen',
    emoji: '👑',
    hp: 500,
    ascensionHP: 530
  },
  'test_subject_c10': {
    penalizeCardDraw: false, penalizePowers: false, requireMultiHit: true, requireFrontLoaded: true,
    requireAOE: false, rewardBlock: true, penalizeCombo: false, rewardSetup: false, rewardScaling: true,
    rewardExhaust: true, requireBurst: true, rewardRetain: false, rewardAttacks: true,
    name: 'Test Subject #C10',
    emoji: '🧪',
    hp: 480,
    ascensionHP: 510
  }
};

let selectedBoss = null; // User can select expected boss for specialized scoring

function handleBossChange() {
  const bossSelect = document.getElementById('boss-select');
  selectedBoss = bossSelect.value || null;

  // Invalidate caches (boss selection changes scoring)
  invalidateMCBaseline();

  // Re-analyze deck with new boss context
  if (currentDeck.length > 0) {
    analyzeDeckStats();
  }

  if (selectedBoss && BOSS_MECHANICS[selectedBoss]) {
    showToast(`Boss set to ${BOSS_MECHANICS[selectedBoss].name}`, 'info', 2000);
  } else {
    showToast('Boss cleared', 'info', 1500);
  }
}

async function analyzeBossReadiness() {
  const resultsContainer = document.getElementById('boss-readiness-results');

  if (currentDeck.length === 0) {
    resultsContainer.innerHTML = '<div style="color: #fca5a5; text-align: center; padding: 20px;">Add cards to your deck first!</div>';
    return;
  }

  // Temporarily store current boss selection
  const originalBoss = selectedBoss;

  // Define act groups in order
  const actGroups = [
    { name: 'Act 1a - Overgrowth', bosses: ['ceremonial_beast', 'kin_priest', 'vantom'], displayNames: ['Ceremonial Beast', 'The Kin', 'Vantom'] },
    { name: 'Act 1b - Underdocks', bosses: ['lagavulin_matriarch', 'soul_fysh', 'waterfall_giant'], displayNames: ['Lagavulin Matriarch', 'Soul Fysh', 'Waterfall Giant'] },
    { name: 'Act 2 - Hive', bosses: ['kaiser_crab', 'knowledge_demon', 'the_insatiable'], displayNames: ['Kaiser Crab', 'Knowledge Demon', 'The Insatiable'] },
    { name: 'Act 3 - Glory', bosses: ['doormaker', 'queen', 'test_subject_c10'], displayNames: ['Doormaker', 'Queen', 'Test Subject #C10'] }
  ];

  // Initialize container with act structure
  let html = '';
  actGroups.forEach(act => {
    html += `<div id="act-${act.bosses[0]}" style="margin-bottom: 24px;">`;
    html += `<h3 style="color: var(--accent); font-size: 1rem; margin-bottom: 12px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">${act.name}</h3>`;
    html += `<div class="skeleton skeleton-card" style="height: 150px;"></div>`;
    html += `</div>`;
  });
  resultsContainer.innerHTML = html;

  // Process each act sequentially
  for (const act of actGroups) {
    const actContainer = document.getElementById(`act-${act.bosses[0]}`);
    let actHtml = `<h3 style="color: var(--accent); font-size: 1rem; margin-bottom: 12px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">${act.name}</h3>`;

    // Process each boss in this act
    for (let i = 0; i < act.bosses.length; i++) {
      const bossKey = act.bosses[i];
      const bossData = BOSS_MECHANICS[bossKey];

      // Temporarily set this boss for scoring
      selectedBoss = bossKey;
      invalidateMCBaseline();

      // Get average card score against this boss (with MC simulation)
      const cardScores = currentDeck.map(cardName => {
        const result = scoreCard(cardName);
        return result.score;
      });

      const avgScore = cardScores.reduce((a, b) => a + b, 0) / cardScores.length;

      // Determine readiness level
      let readiness = 'Poor';
      let color = '#fca5a5';
      if (avgScore >= 70) {
        readiness = 'Excellent';
        color = '#6ee7b7';
      } else if (avgScore >= 60) {
        readiness = 'Good';
        color = '#86efac';
      } else if (avgScore >= 50) {
        readiness = 'Fair';
        color = '#fbbf24';
      } else if (avgScore >= 40) {
        readiness = 'Weak';
        color = '#fdba74';
      }

      // Build mechanic summary
      const mechanicSummary = [];
      if (bossData.penalizeCardDraw) mechanicSummary.push('❌ Card Draw');
      if (bossData.penalizePowers) mechanicSummary.push('❌ Powers');
      if (bossData.penalizeCombo) mechanicSummary.push('❌ Combo');
      if (bossData.requireMultiHit) mechanicSummary.push('✓ Multi-hit');
      if (bossData.requireFrontLoaded) mechanicSummary.push('✓ Front-loaded');
      if (bossData.requireAOE) mechanicSummary.push('✓ AOE');
      if (bossData.requireBurst) mechanicSummary.push('✓ Burst');
      if (bossData.rewardBlock) mechanicSummary.push('✓ Block');
      if (bossData.rewardSetup) mechanicSummary.push('✓ Setup');
      if (bossData.rewardScaling) mechanicSummary.push('✓ Scaling');
      if (bossData.rewardExhaust) mechanicSummary.push('✓ Exhaust');
      if (bossData.rewardRetain) mechanicSummary.push('✓ Retain');
      if (bossData.rewardAttacks) mechanicSummary.push('✓ Attacks');

      // Generate summary text and breakdown
      const deckCtx = getDeckContext();
      const strengths = [];
      const weaknesses = [];
      const breakdown = [];

      // Analyze deck composition against boss mechanics
      if (bossData.penalizePowers && deckCtx.powers > 0) {
        weaknesses.push(`${deckCtx.powers} power cards`);
        breakdown.push({ factor: 'Powers penalized', impact: 'negative', count: deckCtx.powers });
      }
      if (bossData.penalizeCardDraw) {
        const drawCards = currentDeck.filter(c => {
          const card = findCard(c);
          return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
            .some(k => k.toLowerCase().includes('draw'));
        }).length;
        if (drawCards > 0) {
          weaknesses.push(`${drawCards} card draw`);
          breakdown.push({ factor: 'Card draw penalized', impact: 'negative', count: drawCards });
        }
      }
      if (bossData.requireAOE) {
        const aoeCards = currentDeck.filter(c => {
          const card = findCard(c);
          const name = c.toLowerCase();
          return (card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
            .some(k => k.toLowerCase().includes('aoe') || k.toLowerCase().includes('area'))) ||
            name.includes('whirlwind') || name.includes('cleave');
        }).length;
        if (aoeCards > 0) {
          strengths.push(`${aoeCards} AOE cards`);
          breakdown.push({ factor: 'AOE damage', impact: 'positive', count: aoeCards });
        } else {
          weaknesses.push('no AOE');
          breakdown.push({ factor: 'Missing AOE', impact: 'negative', count: 0 });
        }
      }
      if (bossData.rewardBlock && deckCtx.skills > 0) {
        const blockCards = currentDeck.filter(c => findCard(c)?.block).length;
        if (blockCards > 0) {
          strengths.push(`${blockCards} block cards`);
          breakdown.push({ factor: 'Block rewarded', impact: 'positive', count: blockCards });
        }
      }
      if (bossData.requireMultiHit) {
        const multiHitCards = currentDeck.filter(c => {
          const card = findCard(c);
          return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
            .some(k => k.toLowerCase().includes('multihit'));
        }).length;
        if (multiHitCards > 0) {
          strengths.push(`${multiHitCards} multi-hit`);
          breakdown.push({ factor: 'Multi-hit attacks', impact: 'positive', count: multiHitCards });
        } else {
          weaknesses.push('no multi-hit');
          breakdown.push({ factor: 'Missing multi-hit', impact: 'negative', count: 0 });
        }
      }
      if (bossData.requireBurst) {
        const burstCards = currentDeck.filter(c => {
          const card = findCard(c);
          return card?.damage && card.damage >= 20;
        }).length;
        if (burstCards > 0) {
          strengths.push(`${burstCards} burst damage`);
          breakdown.push({ factor: 'Burst damage', impact: 'positive', count: burstCards });
        } else {
          weaknesses.push('low burst');
          breakdown.push({ factor: 'Missing burst', impact: 'negative', count: 0 });
        }
      }
      if (bossData.requireFrontLoaded) {
        const frontLoadedCards = currentDeck.filter(c => {
          const card = findCard(c);
          return card && card.cost <= 1 && card.damage && card.damage >= 10;
        }).length;
        if (frontLoadedCards > 0) {
          strengths.push(`${frontLoadedCards} front-loaded`);
          breakdown.push({ factor: 'Front-loaded damage', impact: 'positive', count: frontLoadedCards });
        } else {
          weaknesses.push('no front-loaded damage');
          breakdown.push({ factor: 'Missing front-loaded', impact: 'negative', count: 0 });
        }
      }
      if (bossData.penalizeCombo && (deckCtx.powers > 2 || deckCtx.avgCost >= 2)) {
        weaknesses.push('slow/combo heavy');
        breakdown.push({ factor: 'Combo/slow cards penalized', impact: 'negative', count: deckCtx.powers });
      }
      if (bossData.rewardScaling && deckCtx.powers > 0) {
        const scalingPowers = currentDeck.filter(c => {
          const card = findCard(c);
          return card?.type === 'Power';
        }).length;
        if (scalingPowers > 0) {
          strengths.push(`${scalingPowers} scaling powers`);
          breakdown.push({ factor: 'Scaling rewarded', impact: 'positive', count: scalingPowers });
        }
      }
      if (bossData.rewardSetup && deckCtx.powers > 0) {
        strengths.push(`${deckCtx.powers} setup cards`);
        breakdown.push({ factor: 'Setup rewarded', impact: 'positive', count: deckCtx.powers });
      }
      if (bossData.rewardExhaust) {
        const exhaustCards = currentDeck.filter(c => {
          const card = findCard(c);
          return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
            .some(k => k.toLowerCase().includes('exhaust'));
        }).length;
        if (exhaustCards > 0) {
          strengths.push(`${exhaustCards} exhaust cards`);
          breakdown.push({ factor: 'Exhaust rewarded', impact: 'positive', count: exhaustCards });
        }
      }
      if (bossData.rewardRetain) {
        const retainCards = currentDeck.filter(c => {
          const card = findCard(c);
          return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
            .some(k => k.toLowerCase().includes('retain'));
        }).length;
        if (retainCards > 0) {
          strengths.push(`${retainCards} retain cards`);
          breakdown.push({ factor: 'Retain rewarded', impact: 'positive', count: retainCards });
        }
      }
      if (bossData.rewardAttacks && deckCtx.attacks > 0) {
        strengths.push(`${deckCtx.attacks} attacks`);
        breakdown.push({ factor: 'Attacks rewarded', impact: 'positive', count: deckCtx.attacks });
      }

      let summaryText = '';
      if (avgScore >= 70) {
        summaryText = strengths.length > 0 ? `Strong matchup: ${strengths.join(', ')}.` : 'Excellent deck composition for this fight.';
      } else if (avgScore >= 60) {
        summaryText = `Good matchup${strengths.length > 0 ? ': ' + strengths.slice(0, 2).join(', ') : ''}${weaknesses.length > 0 ? '. Watch: ' + weaknesses.slice(0, 1).join(', ') : ''}.`;
      } else if (avgScore >= 50) {
        summaryText = weaknesses.length > 0 ? `Fair matchup. Weaknesses: ${weaknesses.slice(0, 2).join(', ')}.` : 'Manageable fight with current deck.';
      } else if (avgScore >= 40) {
        summaryText = `Difficult matchup. Issues: ${weaknesses.slice(0, 2).join(', ')}.`;
      } else {
        summaryText = `Very difficult. Major issues: ${weaknesses.slice(0, 3).join(', ')}.`;
      }

      const breakdownId = `breakdown-${bossKey}`;
      const breakdownHtml = breakdown.length > 0 ? breakdown.map(b => {
        const icon = b.impact === 'positive' ? '✓' : '✗';
        const color = b.impact === 'positive' ? '#6ee7b7' : '#fca5a5';
        return `<div style="color: ${color}; font-size: 0.8rem; margin-bottom: 4px;">${icon} ${b.factor}${b.count > 0 ? ` (${b.count})` : ''}</div>`;
      }).join('') : '<div style="color: var(--text-secondary); font-size: 0.8rem;">No specific factors identified.</div>';

      actHtml += `
        <div style="background: var(--bg-secondary); border-left: 4px solid ${color}; border-radius: 8px; padding: 16px; margin-bottom: 12px; animation: slideIn 0.3s ease; position: relative;">
          <div style="margin-bottom: 8px;">
            <div style="font-weight: bold; font-size: 1.1rem; color: var(--text-primary); margin-bottom: 4px;">${bossData.name}
              <button onclick="selectBossFromReadiness('${bossKey}')" style="margin-left: 8px; padding: 2px 8px !important; background: var(--accent); color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 0.7rem !important; line-height: 1.2; width: auto !important; max-width: fit-content !important; display: inline-block !important;">Set</button>
            </div>
            <div style="color: ${color}; font-weight: 600; font-size: 0.9rem; margin-bottom: 6px;">
              ${readiness} (Score: ${Math.round(avgScore)})
            </div>
            <div style="color: var(--text-secondary); font-size: 0.85rem; font-style: italic; margin-bottom: 8px;">
              ${summaryText}
            </div>
          </div>
          <div style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 8px; line-height: 1.4;">
            ${mechanicSummary.join(' • ')}
          </div>
          <details style="margin-top: 8px;">
            <summary style="cursor: pointer; color: var(--accent); font-size: 0.8rem; user-select: none;">Show breakdown</summary>
            <div style="margin-top: 8px; padding: 8px; background: rgba(0,0,0,0.2); border-radius: 4px;">
              ${breakdownHtml}
            </div>
          </details>
        </div>
      `;

      // Update UI after each boss
      actContainer.innerHTML = actHtml;

      // Small delay to let UI update
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }

  // Restore original boss selection
  selectedBoss = originalBoss;
  invalidateMCBaseline();
}

function selectBossFromReadiness(bossKey) {
  const bossSelect = document.getElementById('boss-select');
  bossSelect.value = bossKey;
  handleBossChange();
  switchTab('rewards'); // Switch back to rewards tab
}

// Starter decks
const STARTER_DECKS = {
  'ironclad': 'Strike, Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Bash',
  'silent': 'Strike, Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Defend, Neutralize, Survivor',
  'defect': 'Strike, Strike, Strike, Strike, Zap, Defend, Defend, Defend, Defend, Dualcast',
  'necrobinder': 'Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Bodyguard, Unleash',
  'regent': 'Strike, Strike, Strike, Strike, Defend, Defend, Defend, Defend, Falling Star', 'Venerate',
};

// Starter relics (character-specific starting relics)
const STARTER_RELICS = {
  'ironclad': 'Burning Blood',
  'silent': 'Ring of the Snake',
  'defect': 'Cracked Core',
  'necrobinder': 'Bound Phylactery',
  'regent': 'Divine Right'
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

let toastsEnabled = false; // Default toasts off

function toggleToasts() {
  toastsEnabled = !toastsEnabled;
  localStorage.setItem('sts2-toasts-enabled', toastsEnabled);
  if (toastsEnabled) {
    showToast('Toast notifications enabled', 'success', 2000);
  }
}

function showToast(message, type = 'info', duration = 3000) {
  if (!toastsEnabled) return; // Skip if disabled
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
  // This function is for the main analyze button, not card result buttons
  // Find the analyze button by ID instead of querySelector
  const analyzeBtn = elementId === 'reward-results' ? document.getElementById('analyze-rewards-btn')
    : elementId === 'shop-results' ? document.getElementById('analyze-shop-btn')
    : elementId === 'removal-results' ? document.getElementById('auto-analyze-removal-btn')
    : null;

  if (analyzeBtn) {
    analyzeBtn.disabled = isLoading;
    if (isLoading) {
      analyzeBtn.innerHTML = '<span class="btn-spinner"></span> Analyzing...';
    } else {
      // Restore original text
      if (elementId === 'reward-results') analyzeBtn.innerHTML = '⚡ Analyze Rewards';
      else if (elementId === 'shop-results') analyzeBtn.innerHTML = '⚡ Analyze Shop';
      else if (elementId === 'removal-results') analyzeBtn.innerHTML = '⚡ Analyze Removals';
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

function resetRun() {
  // Clear deck and all state
  currentDeck = [];
  currentRelics = [];
  upgradedCards.clear();
  cardEnchantments.clear();
  shopRemovalCount = 0;
  invalidateMCBaseline();

  // Clear shop
  shopCards = {};
  shopColorlessCards = {};
  shopRelics = {};
  shopRemovalSelected = false;
  clearShopUpgradeEnchantState();

  // Reset to defaults
  currentAct = 1;
  currentAscension = 0;

  // Update UI
  document.getElementById('act').value = currentAct;
  document.getElementById('ascension').value = currentAscension;
  const removalDisplay = document.getElementById('removal-count-display');
  if (removalDisplay) {
    removalDisplay.textContent = shopRemovalCount;
  }

  renderDeckCardList();
  renderRelicList();
  renderShopGrid(); // Clears shop slots, removal button hidden (deck empty)
  analyzeDeckStats();
  saveDeckState();

  showToast('Run reset', 'info', 1500);
}

function loadStarter(char) {
  // Reset run state first
  resetRun();

  // Set character
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
  renderShopGrid(); // Re-render shop grid now that deck is populated
  analyzeDeckStats();

  // Calculate MC baseline for starter deck (respects user's simulation count setting)
  calculateMCBaseline();

  showToast(`Loaded ${char.charAt(0).toUpperCase() + char.slice(1)} starter deck`, 'success');
}

// ============================================================================
// BOSS SELECTION MODAL
// ============================================================================

let pendingCharacter = null;

function openBossModal(character) {
  pendingCharacter = character;
  const modal = document.getElementById('boss-modal');
  modal.style.display = 'flex';

  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeBossModal() {
  const modal = document.getElementById('boss-modal');
  modal.style.display = 'none';
  pendingCharacter = null;

  // Restore body scroll
  document.body.style.overflow = '';
}

function selectBossAndLoad(bossKey) {
  if (!pendingCharacter) return;

  // Load the starter deck
  loadStarter(pendingCharacter);

  // Set the boss
  selectedBoss = bossKey;
  const bossSelect = document.getElementById('boss-select');
  if (bossSelect) {
    bossSelect.value = bossKey;
  }

  // Set Act to 1
  currentAct = 1;
  document.getElementById('act').value = 1;

  // Re-analyze with boss context
  invalidateMCBaseline();
  analyzeDeckStats();

  // Close modal
  closeBossModal();

  const bossName = BOSS_MECHANICS[bossKey]?.name || bossKey;
  showToast(`${pendingCharacter.charAt(0).toUpperCase() + pendingCharacter.slice(1)} vs ${bossName}`, 'success', 2500);
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('boss-modal');
    if (modal && modal.style.display === 'flex') {
      closeBossModal();
    }
  }
});

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

  // Render shop grid when switching to shop tab (shows removal button even if no cards)
  if (tabName === 'shop') {
    renderShopGrid();
  }

  // Autofocus the input field for the tab
  const inputIds = {
    rewards: 'additional-reward-input',
    shop: 'shop-input',
    removal: null // No input field on removal tab
  };
  const inputId = inputIds[tabName];
  if (inputId) {
    setTimeout(() => {
      const input = document.getElementById(inputId);
      if (input) input.focus();
    }, 100);
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

    // Fuzzy search - deck allows duplicates, no filtering
    const matches = autocompleteData
      .map(card => {
        const match = fuzzyMatch(card.name, query);
        return match ? { card, ...match } : null;
      })
      .filter(result => result !== null)
      .sort((a, b) => {
        // Sort by priority first, then by distance
        if (a.priority !== b.priority) return a.priority - b.priority;
        if (a.distance !== b.distance) return a.distance - b.distance;
        return a.card.name.localeCompare(b.card.name);
      })
      .slice(0, 20)
      .map(result => result.card);

    if (matches.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    dropdown.innerHTML = matches.map((card, idx) => {
      const characterBadge = card.character !== currentCharacter && card.character !== 'Colorless'
        ? `<span style="font-size: 0.7rem; opacity: 0.7;">${card.character}</span>`
        : '';
      const escapedName = card.name.replace(/'/g, "\\'");
      return `
        <div class="autocomplete-item" data-index="${idx}" data-name="${card.name}" onclick="addCardToDeckPill('${escapedName}')">
          <span class="autocomplete-item-icon">${card.icon}</span>
          <span class="autocomplete-item-name">${card.name}</span>
          <span class="autocomplete-item-meta">
            <span>${card.cost >= 0 ? card.cost : 'X'}</span>
            ${card.rarity ? `<span>${card.rarity}</span>` : ''}
            ${characterBadge}
          </span>
        </div>
      `;
    }).join('');

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
  invalidateMCBaseline();

  // Hide preview immediately
  hideCardPreview();

  renderDeckCardList();

  // Clear input
  const input = document.getElementById('deck-card-input');
  if (input) {
    input.value = '';
    document.getElementById('deck-dropdown').classList.remove('show');
  }

  // Re-analyze deck
  analyzeDeckStats();
  analyzeBossReadiness();

  showToast(`Added ${cardName} to deck`, 'success', 1500);
}

function toggleCardUpgrade(index, cardName) {
  const key = `${index}-${cardName}`;

  if (upgradedCards.has(key)) {
    upgradedCards.delete(key);
  } else {
    upgradedCards.add(key);
  }

  renderDeckCardList();
  saveDeckState();
}

function upgradeCardFromPriority(index, cardName) {
  const key = `${index}-${cardName}`;

  // Add to upgraded cards
  upgradedCards.add(key);

  // Re-render everything
  renderDeckCardList();
  analyzeDeckStats();
  saveDeckState();

  showToast(`Upgraded ${cardName}`, 'success', 1500);
}

function toggleEnchantmentMenu(index, cardName, event) {
  const key = `${index}-${cardName}`;
  const currentEnchant = cardEnchantments.get(key);

  // Close any existing menu
  const existing = document.querySelector('.enchant-menu');
  if (existing) existing.remove();

  // Create dropdown menu
  const menu = document.createElement('div');
  menu.className = 'enchant-menu';

  const options = Object.entries(ENCHANTMENTS).map(([name, data]) => `
    <div class="enchant-option ${currentEnchant === name ? 'selected' : ''}"
         onclick="setCardEnchantment(${index}, '${cardName.replace(/'/g, "\\'")}', '${name}')">
      <span class="enchant-icon">${data.icon}</span>
      <div>
        <div class="enchant-name">${name}</div>
        <div class="enchant-effect">${data.effect}</div>
      </div>
    </div>
  `).join('');

  const clearOption = currentEnchant ? `
    <div class="enchant-option clear" onclick="setCardEnchantment(${index}, '${cardName.replace(/'/g, "\\'")}', null)">
      <span class="enchant-icon">🚫</span>
      <div class="enchant-name">Remove enchantment</div>
    </div>
  ` : '';

  menu.innerHTML = options + clearOption;

  // Position menu
  const rect = event.target.getBoundingClientRect();
  menu.style.position = 'fixed';
  menu.style.top = `${rect.bottom + 5}px`;
  menu.style.left = `${rect.left}px`;

  document.body.appendChild(menu);

  // Close on outside click
  setTimeout(() => {
    document.addEventListener('click', function closeMenu(e) {
      if (!menu.contains(e.target)) {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    });
  }, 0);
}

function setCardEnchantment(index, cardName, enchantment) {
  const key = `${index}-${cardName}`;
  const currentEnchant = cardEnchantments.get(key);

  // Toggle: if clicking same enchantment, remove it
  if (enchantment && currentEnchant === enchantment) {
    cardEnchantments.delete(key);
    enchantment = null;
  } else if (enchantment) {
    cardEnchantments.set(key, enchantment);
  } else {
    cardEnchantments.delete(key);
  }

  // Close menu
  const menu = document.querySelector('.enchant-menu');
  if (menu) menu.remove();

  renderDeckCardList();
  saveDeckState();
  showToast(enchantment ? `Applied ${enchantment}` : 'Enchantment removed', 'success', 1500);
}

function removeCardFromDeck(index) {
  const cardName = currentDeck[index];
  const key = `${index}-${cardName}`;

  // Remove card and its metadata
  currentDeck.splice(index, 1);
  invalidateMCBaseline();
  upgradedCards.delete(key);
  cardEnchantments.delete(key);

  // Re-index remaining cards
  const newUpgraded = new Set();
  const newEnchantments = new Map();

  upgradedCards.forEach(oldKey => {
    const [oldIndex, name] = oldKey.split('-', 2);
    const idx = parseInt(oldIndex);
    if (idx > index) {
      newUpgraded.add(`${idx - 1}-${name}`);
    } else if (idx < index) {
      newUpgraded.add(oldKey);
    }
  });

  cardEnchantments.forEach((enchant, oldKey) => {
    const [oldIndex, name] = oldKey.split('-', 2);
    const idx = parseInt(oldIndex);
    if (idx > index) {
      newEnchantments.set(`${idx - 1}-${name}`, enchant);
    } else if (idx < index) {
      newEnchantments.set(oldKey, enchant);
    }
  });

  upgradedCards = newUpgraded;
  cardEnchantments = newEnchantments;

  renderDeckCardList();
  analyzeDeckStats();
  analyzeBossReadiness();
  showToast('Card removed from deck', 'info', 1500);
}

function renderDeckCardList() {
  const container = document.getElementById('deck-pills');
  if (!container) return;

  container.innerHTML = currentDeck.map((cardName, index) => {
    const card = findCard(cardName);
    const icon = card ? (TYPE_ICONS[card.type] || '📄') : '📄';
    const imageAttr = card?.image ? `data-card-image="${card.image}"` : '';
    const key = `${index}-${cardName}`;
    const isUpgraded = upgradedCards.has(key);
    const enchantment = cardEnchantments.get(key);
    const enchantIcon = enchantment ? ENCHANTMENTS[enchantment]?.icon : '';

    return `
      <div class="pill-tag ${isUpgraded ? 'upgraded' : ''} ${enchantment ? 'enchanted' : ''}" ${imageAttr}
           onmouseenter="showCardPreview(event, '${cardName}', ${isUpgraded}, '${enchantment || ''}')"
           onmouseleave="hideCardPreview()">
        <span class="pill-tag-icon">${icon}</span>
        <span>${enchantIcon}${cardName}${isUpgraded ? '+' : ''}</span>
        <button class="pill-upgrade-toggle" onclick="toggleCardUpgrade(${index}, '${cardName.replace(/'/g, "\\'")}'); event.stopPropagation();" aria-label="Toggle upgrade" title="${isUpgraded ? 'Upgraded' : 'Not upgraded'}">
          ${isUpgraded ? '✓' : '+'}
        </button>
        <button class="pill-enchant-toggle" onclick="toggleEnchantmentMenu(${index}, '${cardName.replace(/'/g, "\\'")}', event); event.stopPropagation();" aria-label="Add enchantment" title="${enchantment || 'Add enchantment'}">
          ${enchantIcon || '✨'}
        </button>
        <button class="pill-tag-remove" onclick="removeCardFromDeck(${index})" aria-label="Remove ${cardName}">×</button>
      </div>
    `;
  }).join('');
}

function analyzeDeck() {
  analyzeDeckStats();
  updateBestCardsSuggestions();
}

async function updateBestCardsSuggestions() {
  const container = document.getElementById('best-cards-suggestions');
  const listContainer = document.getElementById('best-cards-list');

  if (!container || !listContainer || currentDeck.length === 0) {
    if (container) container.style.display = 'none';
    return;
  }

  // Check cache validity
  const currentHash = `${currentCharacter}-${currentDeck.join(',')}-${currentAct}-${currentAscension}`;
  if (bestCardsCache && bestCardsCacheHash === currentHash) {
    // Use cached results
    renderBestCardsPills(bestCardsCache, listContainer);
    container.style.display = 'block';
    return;
  }

  // Get all character cards (no sampling)
  // Filter Ancient rarity cards in Act 1 (only obtainable from Act 2+ events)
  const characterCards = Object.values(CARDS).filter(c => {
    if (c.character !== currentCharacter && c.character !== 'colorless') return false;
    if (currentAct === 1 && c.rarity === 'Ancient') return false; // Ancient only in Act 2+
    return true;
  });

  // Score ALL cards with full sim count (uses user's setting)
  const scored = characterCards.map(card => {
    const result = scoreCard(card.name);
    return {
      name: card.name,
      score: result.score,
      reason: result.reason,
      breakdown: result.breakdown,
      type: card.type,
      cost: card.cost
    };
  }).sort((a, b) => b.score - a.score).slice(0, 3);

  // Cache results
  bestCardsCache = scored;
  bestCardsCacheHash = currentHash;

  renderBestCardsPills(scored, listContainer);
  container.style.display = 'block';
}

function renderBestCardsPills(scored, listContainer) {
  listContainer.innerHTML = scored.map(item => {
    const card = findCard(item.name);
    const icon = TYPE_ICONS[item.type] || '📄';
    const costBadge = item.cost !== undefined && item.cost >= 0 ?
      `<span style="font-size: 0.7rem; opacity: 0.7;">${item.cost}E</span>` : '';

    const description = card?.description || '';
    const damage = card?.damage ? `⚔️${card.damage}` : '';
    const block = card?.block ? `🛡️${card.block}` : '';
    const stats = [damage, block].filter(s => s).join(' ');

    // Extract MC impact from breakdown
    let mcDisplay = '';
    if (item.breakdown && item.breakdown.mcImpact !== undefined && item.breakdown.mcBaseline !== undefined) {
      const impact = Math.round(item.breakdown.mcImpact);
      const baseline = Math.round(item.breakdown.mcBaseline);
      const after = Math.round(item.breakdown.mcBaseline + item.breakdown.mcImpact);
      const sign = impact >= 0 ? '+' : '';
      const color = impact >= 3 ? '#10b981' : impact <= -3 ? '#ef4444' : '#64748b';
      mcDisplay = `<span style="color: ${color}; font-size: 0.65rem; margin-left: 4px;">${sign}${impact}%</span>`;
    }

    const tooltipText = `${item.name} (${item.score})\n${stats}\n${description}\n\nClick to add to deck`;

    return `
      <div class="pill-tag"
           style="font-size: 0.75rem; padding: 3px 8px; cursor: pointer; background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); color: #10b981;"
           data-suggestion-name="${item.name}"
           data-suggestion-score="${item.score}"
           data-suggestion-reason="${item.reason.replace(/"/g, '&quot;')}"
           data-suggestion-breakdown="${encodeURIComponent(JSON.stringify(item.breakdown))}"
           onclick="addCardFromSuggestion('${item.name.replace(/'/g, "\\'")}')"
           onmouseenter="showSuggestionPreview(event, '${item.name.replace(/'/g, "\\'")}', ${item.score}, '${item.reason.replace(/'/g, "\\'")}', this)"
           onmouseleave="hideCardPreview()">
        <span class="pill-tag-icon">${icon}</span>
        <span>${item.name}</span>
        ${costBadge}
        ${mcDisplay}
      </div>
    `;
  }).join('');
}

function addCardFromSuggestion(cardName) {
  addCardToDeck(cardName);
  updateBestCardsSuggestions(); // Refresh suggestions
}

function updateMCSimulations() {
  mcSimulations = parseInt(document.getElementById('mc-simulations').value);
  saveDeckState();
  showToast(`MC simulations: ${mcSimulations}`, 'info', 1500);
}

function toggleHeuristicScoring() {
  useHeuristicScoring = document.getElementById('heuristic-scoring-toggle').checked;
  invalidateMCBaseline(); // Recalculate with new scoring mode
  saveDeckState();

  const mode = useHeuristicScoring ? 'Heuristic + MC' : 'Pure MC only';
  showToast(`Scoring mode: ${mode}`, 'info', 2000);

  // Re-analyze if deck exists
  if (currentDeck.length > 0) {
    analyzeDeckStats();
  }
}

// ============================================================================
// DECK PERSISTENCE
// ============================================================================

function saveDeckState() {
  const state = {
    deck: currentDeck,
    upgradedCards: Array.from(upgradedCards),
    cardEnchantments: Array.from(cardEnchantments.entries()),
    relics: currentRelics,
    character: currentCharacter,
    act: currentAct,
    ascension: currentAscension,
    mcSimulations: mcSimulations,
    shopRemovalCount: shopRemovalCount,
    useHeuristicScoring: useHeuristicScoring
  };

  try {
    localStorage.setItem('sts2-deck-state', JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save deck state:', e);
  }
}

function loadDeckState() {
  try {
    const saved = localStorage.getItem('sts2-deck-state');
    if (!saved) return false;

    const state = JSON.parse(saved);
    currentDeck = state.deck || [];
    upgradedCards = new Set(state.upgradedCards || []);
    cardEnchantments = new Map(state.cardEnchantments || []);
    currentRelics = state.relics || [];
    currentCharacter = state.character || 'ironclad';
    currentAct = state.act || 1;
    currentAscension = state.ascension || 0;
    mcSimulations = state.mcSimulations || 500;
    shopRemovalCount = state.shopRemovalCount || 0;
    useHeuristicScoring = state.useHeuristicScoring !== undefined ? state.useHeuristicScoring : true;

    // Update UI
    document.getElementById('character').value = currentCharacter;
    document.getElementById('act').value = currentAct;
    document.getElementById('ascension').value = currentAscension;
    document.getElementById('mc-simulations').value = mcSimulations;
    document.getElementById('heuristic-scoring-toggle').checked = useHeuristicScoring;
    const removalDisplay = document.getElementById('removal-count-display');
    if (removalDisplay) {
      removalDisplay.textContent = shopRemovalCount;
    }

    renderDeckCardList();
    renderRelicList();
    analyzeDeckStats();

    return true;
  } catch (e) {
    console.warn('Failed to load deck state:', e);
    return false;
  }
}

function analyzeDeckStats() {
  const prevCharacter = currentCharacter;
  currentCharacter = document.getElementById('character').value;
  currentAct = parseInt(document.getElementById('act').value);
  currentAscension = parseInt(document.getElementById('ascension').value);

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

  // Win % - respect heuristic toggle
  if (useHeuristicScoring) {
    // Use heuristic deck health score
    const deckHealth = calculateDeckHealth();
    document.getElementById('win-prob').textContent = deckHealth + '%';
  } else {
    // Use MC baseline win rate - calculate if not cached
    if (mcBaselineWinRate === null && currentDeck.length > 0) {
      calculateMCBaseline();
    }
    if (mcBaselineWinRate !== null) {
      document.getElementById('win-prob').textContent = Math.round(mcBaselineWinRate) + '%';
    } else {
      document.getElementById('win-prob').textContent = '--';
    }
  }

  // Detect archetypes
  detectArchetypes(currentDeck);

  // Persist deck state
  saveDeckState();

  // Render visualizations
  renderCostChart();
  renderPieChart();
  renderArchetypeStrength();
  renderMinBlockAnalysis();

  // Update best card suggestions
  updateBestCardsSuggestions();

  // === Populate new analysis panels (#2-6, #8) ===

  // Consistency score (#8)
  const consistency = calculateConsistency();
  document.getElementById('consistency-score').textContent = consistency;

  // Win condition (#5)
  const winCon = analyzeWinCondition();
  const winConPanel = document.getElementById('win-condition-panel');
  const winConContent = document.getElementById('win-condition-content');
  if (winCon.hasWinCon) {
    winConContent.innerHTML = `
      <div style="color: #6ee7b7; font-weight: bold; margin-bottom: 8px;">
        ✓ ${winCon.type}
      </div>
      <div style="color: #94a3b8; font-size: 0.9rem;">
        ${winCon.details || 'Deck has a clear path to victory.'}
      </div>
    `;
    winConPanel.style.display = 'block';
  } else {
    winConContent.innerHTML = `
      <div style="color: #fca5a5; font-weight: bold; margin-bottom: 8px;">
        ✗ No clear win condition
      </div>
      <div style="color: #94a3b8; font-size: 0.9rem;">
        Add scaling (powers), burst damage (big attacks), or infinite combos.
      </div>
    `;
    winConPanel.style.display = 'block';
  }

  // Gap analysis (#3)
  const gaps = analyzeGapsWithSuggestions();
  const gapPanel = document.getElementById('gap-analysis-panel');
  const gapContent = document.getElementById('gap-analysis-content');
  if (gaps.length > 0) {
    const severityColors = {
      critical: '#fca5a5',
      high: '#fdba74',
      medium: '#fbbf24',
      low: '#94a3b8'
    };
    gapContent.innerHTML = gaps.map(gap => {
      let suggestionHtml = '';
      if (gap.suggestion) {
        const impactColor = gap.suggestion.mcImpact >= 3 ? '#10b981' : gap.suggestion.mcImpact <= -3 ? '#ef4444' : '#64748b';
        const impactSign = gap.suggestion.mcImpact >= 0 ? '+' : '';
        suggestionHtml = `
          <div style="margin-top: 4px; padding: 6px 8px; background: rgba(100, 116, 139, 0.05); border-radius: 4px; font-size: 0.85rem;">
            <span style="color: var(--text-secondary);">Suggested:</span>
            <strong style="color: var(--text-primary);">${gap.suggestion.cardName}</strong>
            <span style="color: ${impactColor}; margin-left: 6px;">${impactSign}${Math.round(gap.suggestion.mcImpact)}%</span>
            <span style="color: var(--text-secondary); font-size: 0.75rem; margin-left: 4px;">(${Math.round(gap.suggestion.baseline)}% → ${Math.round(gap.suggestion.afterAdd)}%)</span>
          </div>
        `;
      }
      return `
        <div style="color: ${severityColors[gap.severity]}; margin-bottom: 6px;">
          <strong>${gap.type}:</strong> ${gap.message}
          ${suggestionHtml}
        </div>
      `;
    }).join('');
    gapPanel.style.display = 'block';
  } else {
    gapPanel.style.display = 'none';
  }

  // Upgrade priority (#2)
  const upgrades = getUpgradePriority();
  const upgradePanel = document.getElementById('upgrade-priority-panel');
  const upgradeContent = document.getElementById('upgrade-priority-content');
  if (upgrades.length > 0) {
    upgradeContent.innerHTML = upgrades.map((up, i) => {
      let mcBadgeHtml = '';

      if (up.mcImpact !== undefined) {
        const impactRounded = Math.round(up.mcImpact);
        const baselineRounded = Math.round(up.baseline);
        const afterUpgradeRounded = Math.round(up.winRateAfterUpgrade);

        let badgeColor, badgeBg, badgeIcon, badgeMessage;

        if (impactRounded > 3) {
          badgeColor = '#10b981';
          badgeBg = 'rgba(16, 185, 129, 0.1)';
          badgeIcon = '✓';
          badgeMessage = `Upgrade improves win rate by +${impactRounded}%`;
        } else if (impactRounded < -3) {
          badgeColor = '#ef4444';
          badgeBg = 'rgba(239, 68, 68, 0.1)';
          badgeIcon = '⚠️';
          badgeMessage = `Upgrade hurts win rate by ${impactRounded}%`;
        } else {
          badgeColor = '#64748b';
          badgeBg = 'rgba(100, 116, 139, 0.1)';
          badgeIcon = '〰️';
          badgeMessage = `Neutral impact (${impactRounded >= 0 ? '+' : ''}${impactRounded}%)`;
        }

        mcBadgeHtml = `
          <div style="margin-top: 6px; padding: 8px; background: ${badgeBg}; border-left: 3px solid ${badgeColor}; border-radius: 4px;">
            <div style="font-size: 0.85rem; font-weight: 600; color: ${badgeColor};">
              ${badgeIcon} ${badgeMessage}
            </div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px;">
              MC: <strong>${baselineRounded}%</strong> → <strong style="color: ${badgeColor};">${afterUpgradeRounded}%</strong>
            </div>
          </div>
        `;
      }

      return `
        <div onclick="upgradeCardFromPriority(${up.index}, '${up.cardName.replace(/'/g, "\\'")}')" style="margin-bottom: 8px; padding: 6px; background: rgba(100, 116, 139, 0.1); border-radius: 4px; cursor: pointer; transition: background 0.2s;" onmouseenter="this.style.background='rgba(100, 116, 139, 0.2)'" onmouseleave="this.style.background='rgba(100, 116, 139, 0.1)'">
          <div style="color: #e2e8f0; font-weight: bold;">
            ${i + 1}. ${up.cardName}
          </div>
          <div style="color: #94a3b8; font-size: 0.85rem; margin-top: 2px;">
            Priority: ${up.priority} • Click to upgrade
          </div>
          ${mcBadgeHtml}
        </div>
      `;
    }).join('');
    upgradePanel.style.display = 'block';
  } else {
    upgradeContent.innerHTML = '<div style="color: #94a3b8;">All cards upgraded!</div>';
    upgradePanel.style.display = 'block';
  }

  // Bottlenecks (#6)
  const bottlenecks = detectBottlenecks();
  const bottleneckPanel = document.getElementById('bottleneck-panel');
  const bottleneckContent = document.getElementById('bottleneck-content');
  if (bottlenecks.length > 0) {
    bottleneckContent.innerHTML = bottlenecks.map(bn => `
      <div style="color: #fca5a5; margin-bottom: 6px;">
        <strong>${bn.card}:</strong> ${bn.issue}
      </div>
    `).join('');
    bottleneckPanel.style.display = 'block';
  } else {
    bottleneckPanel.style.display = 'none';
  }

  // Deck Size Optimization (#9)
  analyzeDeckSizeOptimization();

  // Archetype Transition Analysis (#4)
  analyzeArchetypeTransitions();

  showToast('Deck analyzed successfully', 'success');
}

// === NEW ANALYSIS FEATURES (#2-6, #8) ===

// #2: Upgrade Priority System
function getUpgradePriority() {
  if (currentDeck.length === 0) return [];

  const priorities = currentDeck.map((cardName, index) => {
    const card = findCard(cardName);
    if (!card) return null;

    const key = `${index}-${cardName}`;
    const isUpgraded = upgradedCards.has(key);
    if (isUpgraded) return null; // Already upgraded

    let priority = 0;

    // Get actual upgrade data if available
    const normalizedName = cardName.toUpperCase().trim();
    const upgradeData = typeof CARD_UPGRADES !== 'undefined' ? CARD_UPGRADES[normalizedName] : null;

    if (useHeuristicScoring) {
      // HEURISTIC MODE: Score based on actual upgrade changes
      priority = 50; // Base

      if (upgradeData) {
        // Use real upgrade data
        const costReduction = (card.cost || 0) - (upgradeData.cost >= 0 ? upgradeData.cost : card.cost);
        const damageIncrease = (upgradeData.damage || upgradeData.vars?.damage || 0) - (card.damage || card.vars?.damage || 0);
        const blockIncrease = (upgradeData.block || upgradeData.vars?.block || 0) - (card.block || card.vars?.block || 0);

        // Cost reduction is king (only if it actually reduces)
        if (costReduction > 0) {
          priority += costReduction * 40; // -1 cost = +40, -2 cost = +80
        }

        // Damage increase (scaled)
        if (damageIncrease > 0) {
          priority += damageIncrease * 2; // +5 dmg = +10 priority
        }

        // Block increase (scaled)
        if (blockIncrease > 0) {
          priority += blockIncrease * 1.5; // +5 block = +7.5 priority
        }

        // Multi-hit attacks benefit more from damage
        if (card.type === 'Attack' && damageIncrease > 0) {
          const keywords = card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]) : [];
          if (keywords.some(k => k.toLowerCase().includes('multihit'))) {
            priority += damageIncrease; // Extra bonus for multi-hit
          }
        }
      } else {
        // Fallback to heuristics if no upgrade data
        if (card.cost >= 2) priority += 40;
        else if (card.cost === 1) priority += 15;

        if (card.type === 'Power') priority += 35;
        if (card.cost >= 3) priority += 20;

        if (card.type === 'Attack' && card.damage) {
          priority += Math.floor(card.damage / 5);
        }
      }
    }
    // If heuristic OFF, priority stays 0 (will be sorted by MC only)

    return { cardName, index, priority, card };
  }).filter(Boolean);

  // MC validation for ALL candidates (caching makes this fast)
  if (mcBaselineWinRate !== null && currentDeck.length >= 5) {
    for (const candidate of priorities) {
      const upgradeCacheKey = `${candidate.cardName}-${candidate.index}`;

      // Check cache first
      if (upgradeScoreCache.has(upgradeCacheKey)) {
        const cached = upgradeScoreCache.get(upgradeCacheKey);
        if (cached.baseline === mcBaselineWinRate) {
          candidate.mcImpact = cached.impact;
          candidate.winRateAfterUpgrade = cached.winRateAfter;
          candidate.baseline = mcBaselineWinRate;
          continue;
        }
      }

      const key = `${candidate.index}-${candidate.cardName}`;

      // Temporarily mark as upgraded
      upgradedCards.add(key);
      try {
        const withUpgradeResult = performMCRollout({ name: '__BASELINE__' }, Math.min(mcSimulations, 100));
        const impact = withUpgradeResult.winRate - mcBaselineWinRate;
        candidate.mcImpact = impact;
        candidate.winRateAfterUpgrade = withUpgradeResult.winRate;
        candidate.baseline = mcBaselineWinRate;

        // Cache result
        upgradeScoreCache.set(upgradeCacheKey, {
          impact: impact,
          winRateAfter: withUpgradeResult.winRate,
          baseline: mcBaselineWinRate
        });
      } finally {
        // Always remove temporary upgrade marker
        upgradedCards.delete(key);
      }
    }
  }

  // Sort based on mode
  if (useHeuristicScoring) {
    // Heuristic + MC: combine both scores
    priorities.sort((a, b) => {
      const aScore = a.priority + (a.mcImpact !== undefined ? a.mcImpact * 10 : 0); // MC impact weighted 10x
      const bScore = b.priority + (b.mcImpact !== undefined ? b.mcImpact * 10 : 0);
      return bScore - aScore;
    });
  } else {
    // Pure MC mode: sort by MC impact only
    priorities.sort((a, b) => {
      const aImpact = a.mcImpact !== undefined ? a.mcImpact : -999;
      const bImpact = b.mcImpact !== undefined ? b.mcImpact : -999;
      return bImpact - aImpact;
    });
  }

  return priorities.slice(0, 3);
}

// #3: Gap Analysis with MC-validated suggestions
function analyzeGapsWithSuggestions() {
  const gaps = analyzeGaps();

  // Add MC-validated suggestions for each gap (if baseline exists)
  if (mcBaselineWinRate !== null && currentDeck.length >= 5) {
    for (const gap of gaps) {
      const candidates = getGapFillerCandidates(gap.type);
      if (candidates.length > 0) {
        // Test top candidate only (performance)
        const topCard = candidates[0];
        const originalDeck = [...currentDeck];
        currentDeck.push(topCard);
        const withCardResult = performMCRollout({ name: '__BASELINE__' }, Math.min(mcSimulations, 100));
        currentDeck = originalDeck;

        const impact = withCardResult.winRate - mcBaselineWinRate;
        gap.suggestion = {
          cardName: topCard,
          mcImpact: impact,
          baseline: mcBaselineWinRate,
          afterAdd: withCardResult.winRate
        };
      }
    }
  }

  return gaps;
}

function getGapFillerCandidates(gapType) {
  // Return character-appropriate cards that fill this gap
  const allCards = typeof STS2_CARDS !== 'undefined' ? Object.values(STS2_CARDS) : [];
  const characterCards = allCards.filter(c =>
    c.character === currentCharacter || c.character === 'Colorless'
  );

  switch (gapType) {
    case 'AOE':
      return characterCards
        .filter(c => {
          const keywords = c.keywords ? (Array.isArray(c.keywords) ? c.keywords : [c.keywords]) : [];
          return keywords.some(k => k.toLowerCase().includes('aoe') || k.toLowerCase().includes('area')) ||
            c.name.toLowerCase().includes('whirlwind') || c.name.toLowerCase().includes('cleave');
        })
        .map(c => c.name)
        .slice(0, 3);

    case 'Burst':
      return characterCards
        .filter(c => c.type === 'Attack' && c.damage && c.damage >= 20)
        .sort((a, b) => b.damage - a.damage)
        .map(c => c.name)
        .slice(0, 3);

    case 'Multi-hit':
      return characterCards
        .filter(c => {
          const keywords = c.keywords ? (Array.isArray(c.keywords) ? c.keywords : [c.keywords]) : [];
          return keywords.some(k => k.toLowerCase().includes('multihit'));
        })
        .map(c => c.name)
        .slice(0, 3);

    case 'Front-loaded':
      return characterCards
        .filter(c => c.type === 'Attack' && c.cost <= 1 && c.damage && c.damage >= 10)
        .sort((a, b) => b.damage - a.damage)
        .map(c => c.name)
        .slice(0, 3);

    case 'Block':
      return characterCards
        .filter(c => c.type === 'Skill' && c.block && c.block > 0)
        .sort((a, b) => b.block - a.block)
        .map(c => c.name)
        .slice(0, 3);

    case 'Sustain':
      return characterCards
        .filter(c => {
          const name = c.name.toLowerCase();
          return name.includes('heal') || name.includes('reaper') || name.includes('self-repair');
        })
        .map(c => c.name)
        .slice(0, 3);

    default:
      return [];
  }
}

// #3: Gap Analysis (base logic)
function analyzeGaps() {
  const deckCtx = getDeckContext();
  const gaps = [];

  // Check if a specific boss is selected
  const boss = selectedBoss && BOSS_MECHANICS[selectedBoss] ? BOSS_MECHANICS[selectedBoss] : null;

  // Boss-specific gaps (higher priority if boss selected)
  if (boss) {
    if (boss.requireAOE) {
      const hasAOE = currentDeck.some(c => {
        const card = findCard(c);
        const name = c.toLowerCase();
        return (card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
          .some(k => k.toLowerCase().includes('aoe') || k.toLowerCase().includes('area'))) ||
          name.includes('whirlwind') || name.includes('cleave');
      });
      if (!hasAOE) {
        gaps.push({ type: 'AOE', severity: 'critical', message: `No AOE (required for ${boss.name})` });
      }
    }

    if (boss.requireBurst) {
      const hasBurst = currentDeck.some(c => {
        const card = findCard(c);
        return card?.damage && card.damage >= 20;
      });
      if (!hasBurst) {
        gaps.push({ type: 'Burst', severity: 'critical', message: `No burst damage (required for ${boss.name})` });
      }
    }

    if (boss.requireMultiHit) {
      const hasMultiHit = currentDeck.some(c => {
        const card = findCard(c);
        return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
          .some(k => k.toLowerCase().includes('multihit'));
      });
      if (!hasMultiHit) {
        gaps.push({ type: 'Multi-hit', severity: 'high', message: `No multi-hit attacks (needed for ${boss.name})` });
      }
    }

    if (boss.requireFrontLoaded) {
      const hasFrontLoaded = currentDeck.some(c => {
        const card = findCard(c);
        return card && card.cost <= 1 && card.damage && card.damage >= 10;
      });
      if (!hasFrontLoaded) {
        gaps.push({ type: 'Front-loaded', severity: 'high', message: `No front-loaded damage (needed for ${boss.name})` });
      }
    }

    if (boss.rewardBlock) {
      const blockCards = currentDeck.filter(c => findCard(c)?.block).length;
      if (blockCards < 3) {
        gaps.push({ type: 'Block', severity: 'high', message: `Low block cards (${boss.name} rewards block)` });
      }
    }
  }

  // General gaps (always checked, lower severity if boss has different priorities)
  const hasAOE = currentDeck.some(c => {
    const card = findCard(c);
    return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
      .some(k => k.toLowerCase().includes('aoe') || k.toLowerCase().includes('area'));
  });
  if (!hasAOE && (!boss || !boss.requireAOE)) {
    gaps.push({ type: 'AOE', severity: 'medium', message: 'No AOE damage' });
  }

  const hasBurst = currentDeck.some(c => {
    const card = findCard(c);
    return card?.damage && card.damage >= 20;
  });
  if (!hasBurst && (!boss || !boss.requireBurst)) {
    gaps.push({ type: 'Burst', severity: 'high', message: 'No single-target burst' });
  }

  // No sustain
  const hasSustain = currentDeck.some(c => {
    const card = findCard(c);
    const name = c.toLowerCase();
    return name.includes('heal') || name.includes('reaper') || name.includes('self-repair');
  });
  if (!hasSustain && currentAct >= 2) {
    gaps.push({ type: 'Sustain', severity: 'low', message: 'No healing/sustain' });
  }

  // Very few block cards (critical if not boss-rewarded)
  if (deckCtx.skills <= 3 && (!boss || !boss.rewardBlock)) {
    gaps.push({ type: 'Block', severity: 'critical', message: 'Very few block cards' });
  }

  // No front-loaded damage (only if not boss-specific)
  const hasFrontLoaded = currentDeck.some(c => {
    const card = findCard(c);
    return card?.cost <= 1 && card?.damage >= 10;
  });
  if (!hasFrontLoaded && (!boss || !boss.requireFrontLoaded)) {
    gaps.push({ type: 'Front-loaded', severity: 'medium', message: 'No cheap burst' });
  }

  return gaps;
}

// #4: MC-Based Removal Priority (Pure Simulation)
function getRemovalPriorityWithDuplicates() {
  // Skip if deck too small or no baseline
  if (currentDeck.length < 5) {
    return [];
  }

  // Calculate baseline if not cached
  if (mcBaselineWinRate === null) {
    calculateMCBaseline();
  }

  // Test removing each card with MC simulation
  const scored = currentDeck.map((cardName, index) => {
    const card = findCard(cardName);

    // Curses and Status cards: always remove (skip MC simulation)
    if (card?.type === 'Curse' || card?.type === 'Status') {
      return {
        cardName,
        index,
        mcImpact: 100, // Huge positive impact
        afterRemoval: 100,
        heuristic: true
      };
    }

    // MC simulation: test deck without this card
    // Create test deck by filtering out the current index
    const testDeck = currentDeck.filter((_, i) => i !== index);

    // Use fewer simulations for speed (100 sims per card)
    // Pass testDeck as deckOverride to avoid mutating currentDeck
    const withoutCardResult = performMCRollout({ name: '__BASELINE__' }, 100, testDeck);

    const mcImpact = withoutCardResult.winRate - mcBaselineWinRate;

    return {
      cardName,
      index,
      mcImpact: mcImpact, // Positive = removing helps, negative = removing hurts
      baseline: mcBaselineWinRate,
      afterRemoval: withoutCardResult.winRate,
      heuristic: false
    };
  });

  // Sort by MC impact (highest positive impact = best removal)
  scored.sort((a, b) => b.mcImpact - a.mcImpact);

  return scored.slice(0, 5);
}

// #5: Win Condition Detection
function analyzeWinCondition() {
  const deckCtx = getDeckContext();
  const hasScaling = currentDeck.some(c => {
    const card = findCard(c);
    const name = c.toLowerCase();
    return card?.type === 'Power' ||
           name.includes('strength') ||
           name.includes('catalyst') ||
           name.includes('limit break');
  });

  const hasBurst = currentDeck.some(c => {
    const card = findCard(c);
    return card?.damage && card.damage >= 20;
  });

  const hasInfinite = currentDeck.some(c => {
    const name = c.toLowerCase();
    return name.includes('dropkick') ||
           name.includes('flash of steel') ||
           name.includes('grand finale');
  });

  const avgDamage = deckCtx.avgDamagePerCard || 0;
  const hasSufficientDamage = avgDamage >= 12;

  if (hasScaling) {
    return {
      hasWinCon: true,
      type: 'Scaling Win Condition',
      details: 'Deck has power cards or scaling mechanics that grow stronger over time.'
    };
  } else if (hasBurst) {
    return {
      hasWinCon: true,
      type: 'Burst Win Condition',
      details: 'Deck has high-damage cards to quickly eliminate threats.'
    };
  } else if (hasInfinite) {
    return {
      hasWinCon: true,
      type: 'Infinite Potential',
      details: 'Deck contains cards that can generate infinite combos.'
    };
  } else if (hasSufficientDamage) {
    return {
      hasWinCon: true,
      type: 'Consistent Damage',
      details: 'Deck deals sufficient average damage per turn.'
    };
  }

  return { hasWinCon: false, type: null, details: null };
}

// #6: Bottleneck Detection
function detectBottlenecks() {
  const bottlenecks = [];

  currentDeck.forEach((cardName, index) => {
    const card = findCard(cardName);
    const name = cardName.toLowerCase();

    // Clash with non-attacks
    if (name === 'clash') {
      const hasNonAttack = currentDeck.some(c => {
        const other = findCard(c);
        return other && other.type !== 'Attack';
      });
      if (hasNonAttack) {
        bottlenecks.push({ card: cardName, index, issue: 'Clash requires attack-only deck' });
      }
    }

    // Perfected Strike without strikes
    if (name.includes('perfected strike')) {
      const strikeCount = currentDeck.filter(c => c.toLowerCase().includes('strike')).length;
      if (strikeCount < 5) {
        bottlenecks.push({ card: cardName, index, issue: 'Perfected Strike needs more Strikes' });
      }
    }

    // Grand Finale in large deck
    if (name.includes('grand finale') && currentDeck.length > 20) {
      bottlenecks.push({ card: cardName, index, issue: 'Grand Finale unplayable in large deck' });
    }

    // High-cost cards without energy
    if (card && card.cost >= 3) {
      const hasEnergy = currentRelics.some(r => {
        const relic = findRelic(r);
        return relic?.description && relic.description.toLowerCase().includes('energy');
      });
      if (!hasEnergy && currentDeck.filter(c => findCard(c)?.cost >= 3).length > 2) {
        bottlenecks.push({ card: cardName, index, issue: 'High-cost without energy relic' });
      }
    }
  });

  return bottlenecks;
}

// #8: Consistency Scoring
function calculateConsistency() {
  if (currentDeck.length === 0) return 0;

  let consistency = 50;

  const deckCtx = getDeckContext();

  // Small decks are consistent
  if (deckCtx.deckSize <= 15) {
    consistency += 30;
  } else if (deckCtx.deckSize <= 20) {
    consistency += 15;
  } else if (deckCtx.deckSize >= 30) {
    consistency -= 20;
  }

  // Draw engines boost consistency
  if (deckCtx.hasDrawEngine) {
    consistency += 20;
  }

  // Scry/tutoring
  const hasScry = currentDeck.some(c => {
    const card = findCard(c);
    return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
      .some(k => k.toLowerCase().includes('scry'));
  });
  if (hasScry) {
    consistency += 15;
  }

  // Too many high-cost cards hurt consistency
  const highCostCount = currentDeck.filter(c => {
    const card = findCard(c);
    return card && card.cost >= 3;
  }).length;

  if (highCostCount >= 5) {
    consistency -= 20;
  } else if (highCostCount >= 3) {
    consistency -= 10;
  }

  // Powers without energy hurt opening hands
  if (deckCtx.powers >= 3 && !deckCtx.hasEnergyRelic) {
    consistency -= 15;
  }

  // Dead cards (situational/combo pieces)
  const deadCardCount = currentDeck.filter(c => {
    const name = c.toLowerCase();
    return name.includes('catalyst') ||
           name.includes('burst') ||
           name.includes('double tap') ||
           name.includes('grand finale');
  }).length;

  if (deadCardCount >= 3) {
    consistency -= 15;
  }

  return Math.max(0, Math.min(100, consistency));
}

// #9: Deck Size Optimization with MC
function analyzeDeckSizeOptimization() {
  const panel = document.getElementById('deck-size-panel');
  const content = document.getElementById('deck-size-content');

  if (!panel || !content) return; // Panel doesn't exist yet

  if (currentDeck.length < 10 || mcBaselineWinRate === null) {
    panel.style.display = 'none';
    return;
  }

  const currentSize = currentDeck.length;
  const currentWR = mcBaselineWinRate;

  let recommendation = '';
  let color = '#94a3b8';

  // Optimal deck size is usually 15-25 cards
  if (currentSize < 15) {
    recommendation = `📏 Your deck is lean (${currentSize} cards, ${Math.round(currentWR)}% WR). Consider adding 1-2 more high-impact cards.`;
    color = '#fbbf24';
  } else if (currentSize >= 15 && currentSize <= 25) {
    recommendation = `✓ Deck size is optimal (${currentSize} cards, ${Math.round(currentWR)}% WR). Good balance between consistency and power.`;
    color = '#10b981';
  } else if (currentSize > 25 && currentSize <= 30) {
    recommendation = `⚠️ Deck is getting large (${currentSize} cards, ${Math.round(currentWR)}% WR). Consider skipping weak rewards or removing cards.`;
    color = '#fdba74';
  } else {
    recommendation = `❌ Deck is bloated (${currentSize} cards, ${Math.round(currentWR)}% WR). Prioritize removals and skip most rewards.`;
    color = '#fca5a5';
  }

  content.innerHTML = `<div style="color: ${color};">${recommendation}</div>`;
  panel.style.display = 'block';
}

// #4: Archetype Transition Analysis with MC
function analyzeArchetypeTransitions() {
  const panel = document.getElementById('archetype-transition-panel');
  const content = document.getElementById('archetype-transition-content');

  if (!panel || !content) return; // Panel doesn't exist yet

  if (detectedArchetypes.size === 0 || mcBaselineWinRate === null) {
    panel.style.display = 'none';
    return;
  }

  const currentArchetypes = Array.from(detectedArchetypes.entries())
    .filter(([name, strength]) => strength >= 5)
    .sort((a, b) => b[1] - a[1]);

  if (currentArchetypes.length === 0) {
    panel.style.display = 'none';
    return;
  }

  const [primaryName, primaryStrength] = currentArchetypes[0];
  let statusHtml = '';
  let statusColor = '#10b981';

  if (primaryStrength >= 12) {
    statusHtml = `✓ <strong>${primaryName}</strong> archetype is fully committed (${primaryStrength}/15 strength, ${Math.round(mcBaselineWinRate)}% WR)`;
    statusColor = '#10b981';
  } else if (primaryStrength >= 8) {
    statusHtml = `⚡ <strong>${primaryName}</strong> archetype is developing (${primaryStrength}/15 strength, ${Math.round(mcBaselineWinRate)}% WR)`;
    statusColor = '#fbbf24';
  } else {
    statusHtml = `〰️ <strong>${primaryName}</strong> archetype is weak (${primaryStrength}/15 strength, ${Math.round(mcBaselineWinRate)}% WR). Consider pivoting or committing.`;
    statusColor = '#fdba74';
  }

  // Show secondary archetypes if any
  if (currentArchetypes.length > 1) {
    const secondaryList = currentArchetypes.slice(1, 3).map(([name, strength]) =>
      `${name} (${strength})`
    ).join(', ');
    statusHtml += `<div style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 4px;">Also: ${secondaryList}</div>`;
  }

  content.innerHTML = `<div style="color: ${statusColor};">${statusHtml}</div>`;
  panel.style.display = 'block';
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

  // Min-block evaluation: can we efficiently block expected damage?
  const minBlockResult = evaluateMinBlockCoverage();
  if (minBlockResult.canSurvive) {
    score += 15;
  } else if (minBlockResult.blockDeficit > 10) {
    score -= 15; // Severe block gap
  } else if (minBlockResult.blockDeficit > 0) {
    score -= 5; // Moderate block gap
  }

  // Damage output evaluation
  const damageResult = evaluateDamageOutput();
  if (damageResult.canKillInReasonableTime) {
    score += 10;
  } else {
    score -= 10; // Too slow, fights drag on
  }

  return Math.max(0, Math.round(score)); // Allow scores above 100
}

function detectArchetypes(deck) {
  detectedArchetypes.clear();

  if (typeof STS2_ARCHETYPES === 'undefined') {
    // Fallback to keyword detection
    deck.forEach(cardName => {
      const card = findCard(cardName);
      if (!card || !card.keywords) return;

      const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];

      keywords.forEach(kw => {
        const normalized = kw.toLowerCase();
        detectedArchetypes.set(normalized, (detectedArchetypes.get(normalized) || 0) + 1);
      });
    });
    return;
  }

  // Check against known archetypes
  Object.entries(STS2_ARCHETYPES).forEach(([archetypeId, archetype]) => {
    if (archetype.character !== currentCharacter) return;

    let strength = 0;

    // Count core cards
    deck.forEach(cardName => {
      const normalized = cardName.toLowerCase();

      if (archetype.coreCards.some(core => core.toLowerCase() === normalized)) {
        strength += 3; // Core cards worth more
      } else if (archetype.supportCards?.some(support => support.toLowerCase() === normalized)) {
        strength += 1;
      }
    });

    // Bonus for having relics that match archetype
    currentRelics.forEach(relicName => {
      if (archetype.keyRelics?.some(key => key.toLowerCase() === relicName.toLowerCase())) {
        strength += 2;
      }
    });

    if (strength >= 3) { // Minimum threshold
      detectedArchetypes.set(archetype.name, strength);
    }
  });

  // Fallback: also track keywords for cards not in archetypes
  deck.forEach(cardName => {
    const card = findCard(cardName);
    if (!card || !card.keywords) return;

    const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
    keywords.forEach(kw => {
      const normalized = kw.toLowerCase();
      const existing = detectedArchetypes.get(normalized) || 0;
      detectedArchetypes.set(normalized, existing + 1);
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

// ============================================================================
// MIN-BLOCK AND MC ROLLOUT ANALYSIS
// ============================================================================

function getExpectedDamage() {
  // Get base damage profile for current act
  if (typeof ENEMY_DAMAGE_BY_ACT === 'undefined') {
    return { avg: 10, elite: 20, boss: 30 };
  }

  const baseDamage = ENEMY_DAMAGE_BY_ACT[currentAct] || ENEMY_DAMAGE_BY_ACT[2];

  // Apply ascension multiplier
  let multiplier = 1.0;
  if (typeof ASCENSION_DAMAGE_MULTIPLIER !== 'undefined') {
    if (currentAscension >= 20) multiplier = ASCENSION_DAMAGE_MULTIPLIER[20];
    else if (currentAscension >= 18) multiplier = ASCENSION_DAMAGE_MULTIPLIER[18];
    else if (currentAscension >= 15) multiplier = ASCENSION_DAMAGE_MULTIPLIER[15];
    else if (currentAscension >= 10) multiplier = ASCENSION_DAMAGE_MULTIPLIER[10];
    else if (currentAscension >= 5) multiplier = ASCENSION_DAMAGE_MULTIPLIER[5];
  }

  return {
    avg: Math.round(baseDamage.avg * multiplier),
    elite: Math.round(baseDamage.elite * multiplier),
    boss: Math.round(baseDamage.boss * multiplier)
  };
}

function evaluateMinBlockCoverage() {
  // Simulate: can we generate minimum block needed per turn?
  const expectedDamage = getExpectedDamage();
  const targetBlock = expectedDamage.avg; // Aim to block average damage

  let totalBlockPerEnergy = 0;
  let blockCardCount = 0;

  currentDeck.forEach(cardName => {
    const card = findCard(cardName);
    if (!card) return;

    // Count block cards and their efficiency
    if (card.block && card.block > 0) {
      const cost = card.cost >= 0 ? card.cost : 1; // X-cost assumed 1 energy
      const efficiency = cost > 0 ? card.block / cost : card.block;
      totalBlockPerEnergy += efficiency;
      blockCardCount++;
    }

    // Passive block from powers (e.g., Frost Orbs, Barricade effects)
    if (card.type === 'Power' && card.keywords) {
      const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
      if (keywords.some(k => k.toLowerCase().includes('block') || k.toLowerCase().includes('frost'))) {
        totalBlockPerEnergy += 3; // Estimate passive block contribution
      }
    }
  });

  // Assume 3 energy baseline, drawing ~5 cards per turn
  const expectedBlockPerTurn = blockCardCount > 0 ? (totalBlockPerEnergy / blockCardCount) * 3 : 0;

  const blockDeficit = Math.max(0, targetBlock - expectedBlockPerTurn);
  const canSurvive = expectedBlockPerTurn >= (targetBlock * 0.7); // 70% coverage is acceptable (min-block strategy)

  return {
    canSurvive,
    blockDeficit,
    expectedBlockPerTurn,
    targetBlock
  };
}

function evaluateDamageOutput() {
  // Simulate: can we kill enemies before running out of HP?
  let totalDamagePerEnergy = 0;
  let attackCardCount = 0;
  let scalingCount = 0;

  currentDeck.forEach(cardName => {
    const card = findCard(cardName);
    if (!card) return;

    // Direct damage
    if (card.damage && card.damage > 0) {
      const cost = card.cost >= 0 ? card.cost : 2; // X-cost assumed 2 energy avg
      const efficiency = cost > 0 ? card.damage / cost : card.damage;
      totalDamagePerEnergy += efficiency;
      attackCardCount++;
    }

    // Scaling cards (Strength, Poison, Doom, Focus)
    if (card.type === 'Power' || (card.keywords && Array.isArray(card.keywords))) {
      const keywords = card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]) : [];
      if (keywords.some(k => ['strength', 'poison', 'doom', 'focus', 'scaling'].includes(k.toLowerCase()))) {
        scalingCount++;
      }
    }
  });

  // Estimate damage per turn (3 energy, avg 2 attacks played)
  const expectedDamagePerTurn = attackCardCount > 0 ? (totalDamagePerEnergy / attackCardCount) * 3 * 2 : 0;

  // Scaling modifier: more scaling = damage ramps over time
  const scalingBonus = scalingCount * 5;
  const adjustedDamage = expectedDamagePerTurn + scalingBonus;

  // Act-specific kill thresholds (avg elite HP)
  const killThresholds = { 1: 80, 2: 150, 3: 250, 4: 350 };
  const targetHP = killThresholds[currentAct] || 150;

  // Can we kill in ~10 turns? (reasonable fight length)
  const turnsToKill = adjustedDamage > 0 ? targetHP / adjustedDamage : 999;
  const canKillInReasonableTime = turnsToKill <= 10;

  return {
    canKillInReasonableTime,
    turnsToKill,
    expectedDamagePerTurn: adjustedDamage
  };
}

function performMCRollout(card, simulations = 100, deckOverride = null) {
  // MULTI-ACT WEIGHTED SIMULATION
  // Current act has full weight, future acts have reduced weight
  // Act 1: sim Act 1 (100%), Act 2 (50%), Act 3 (25%)
  // Act 2: sim Act 2 (100%), Act 3 (50%)
  // Act 3: sim Act 3 (100%)

  const baseDeck = deckOverride || currentDeck;
  const testDeck = card.name === '__BASELINE__' ? [...baseDeck] : [...baseDeck, card.name];

  const gameState = {
    relics: currentRelics,
    upgradedCards: upgradedCards,
    enchantments: cardEnchantments
  };

  // Define acts to simulate based on current act
  const actsToSimulate = [];
  if (currentAct === 1) {
    actsToSimulate.push({ act: 1, weight: 1.0 });
    actsToSimulate.push({ act: 2, weight: 0.5 });
    actsToSimulate.push({ act: 3, weight: 0.25 });
  } else if (currentAct === 2) {
    actsToSimulate.push({ act: 2, weight: 1.0 });
    actsToSimulate.push({ act: 3, weight: 0.5 });
  } else {
    actsToSimulate.push({ act: 3, weight: 1.0 });
  }

  const totalWeight = actsToSimulate.reduce((sum, a) => sum + a.weight, 0);
  let weightedWinRate = 0;
  let weightedFinalHP = 0;

  // Simulate each act
  for (const { act, weight } of actsToSimulate) {
    const enemyProfile = getEnemyProfileForAct(act);

    let winCount = 0;
    let totalHP = 0;
    let victoryCount = 0;

    for (let i = 0; i < simulations; i++) {
      try {
        const result = simulateCombatNew(testDeck, enemyProfile, i, gameState);
        if (result.victory) {
          winCount++;
          totalHP += result.finalHP;
          victoryCount++;
        }
      } catch (error) {
        console.error(`Combat simulation ${i} failed:`, error);
        throw error;
      }
    }

    const actWinRate = (winCount / simulations) * 100;
    const actAvgHP = victoryCount > 0 ? totalHP / victoryCount : 0;

    // Add weighted contribution
    weightedWinRate += (actWinRate * weight) / totalWeight;
    weightedFinalHP += (actAvgHP * weight) / totalWeight;
  }

  const deckPower = (weightedFinalHP / 80) * 100;

  return {
    winRate: weightedWinRate,
    avgTurnsToWin: 0, // Not meaningful across acts
    avgFinalHP: weightedFinalHP,
    deckPower: deckPower
  };
}

function getEnemyProfileForAct(act) {
  // Return enemy stats for specific act
  const baseProfiles = {
    1: { hp: 50, damage: 8, attackProbability: 0.7 },
    2: { hp: 80, damage: 12, attackProbability: 0.7 },
    3: { hp: 120, damage: 16, attackProbability: 0.75 }
  };

  const profile = baseProfiles[act] || baseProfiles[2];

  // Apply ascension multiplier
  const ascensionMultiplier = ASCENSION_DAMAGE_MULTIPLIER[currentAscension] || 1.0;
  profile.damage = Math.round(profile.damage * ascensionMultiplier);

  return profile;
}

function getEnemyProfile() {
  // If a boss is selected, use actual boss HP
  if (selectedBoss && BOSS_MECHANICS[selectedBoss]) {
    const boss = BOSS_MECHANICS[selectedBoss];
    const bossHP = currentAscension >= 8 ? (boss.ascensionHP || boss.hp) : boss.hp;

    // Special handling for multi-enemy bosses
    let totalHP = bossHP;
    if (boss.followerCount && boss.followerHP) {
      totalHP += boss.followerCount * boss.followerHP;
    }

    const ascensionMultiplier = ASCENSION_DAMAGE_MULTIPLIER[currentAscension] || 1.0;

    return {
      hp: totalHP,
      damage: Math.round(12 * ascensionMultiplier), // Boss attacks vary, use reasonable avg
      attackProbability: 0.75
    };
  }

  // Return enemy stats based on current act and ascension (generic enemies)
  const baseProfiles = {
    1: { hp: 50, damage: 8, attackProbability: 0.7 },
    2: { hp: 80, damage: 12, attackProbability: 0.7 },
    3: { hp: 120, damage: 16, attackProbability: 0.75 },
    4: { hp: 200, damage: 25, attackProbability: 0.8 }
  };

  const profile = baseProfiles[currentAct] || baseProfiles[2];
  const ascensionMultiplier = ASCENSION_DAMAGE_MULTIPLIER[currentAscension] || 1.0;

  return {
    hp: Math.round(profile.hp * (1 + (currentAscension / 20))),
    damage: Math.round(profile.damage * ascensionMultiplier),
    attackProbability: profile.attackProbability
  };
}

function simulateCombat(deck, enemyProfile, seed, gameState) {
  // Seeded random number generator for reproducible variance
  let rngState = seed * 1000 + 12345;
  const seededRandom = () => {
    rngState = (rngState * 1103515245 + 12345) & 0x7fffffff;
    return rngState / 0x7fffffff;
  };

  // Collect relic effects
  const relicEffects = {
    startEnergy: 0,
    startDraw: 0,
    startBlock: 0,
    startVigor: 0,
    blockPerTurn: 0,
    blockPerAttack: 0,
    platedArmor: 0,
    damageMultiplier: 1.0,
    startHP: 0,
    hpPerCombat: 0,
    xCostBonus: 0,
    energyCarryover: false,
    healPerPower: 0,
    strengthPerKill: 0,
    preventDeath: false,
    conditionalRelics: [] // Store conditional relic names for special handling
  };

  // Use relics from game state instead of global
  const relics = gameState?.relics || currentRelics;
  relics.forEach(relicName => {
    const effect = RELIC_EFFECTS[relicName.toUpperCase()];
    if (effect) {
      relicEffects.startEnergy += effect.startEnergy || 0;
      relicEffects.startDraw += effect.startDraw || 0;
      relicEffects.startBlock += effect.startBlock || 0;
      relicEffects.startVigor += effect.startVigor || 0;
      relicEffects.blockPerTurn += effect.blockPerTurn || 0;
      relicEffects.blockPerAttack += effect.blockPerAttack || 0;
      relicEffects.platedArmor += effect.platedArmor || 0;
      relicEffects.damageMultiplier *= effect.damageMultiplier || 1.0;
      relicEffects.startHP += effect.startHP || 0;
      relicEffects.hpPerCombat += effect.hpPerCombat || 0;
      relicEffects.xCostBonus += effect.xCostBonus || 0;
      relicEffects.energyCarryover = relicEffects.energyCarryover || effect.energyCarryover;
      relicEffects.healPerPower += effect.healPerPower || 0;
      relicEffects.strengthPerKill += effect.strengthPerKill || 0;
      relicEffects.preventDeath = relicEffects.preventDeath || effect.preventDeath;

      // Track conditional relics
      if (effect.conditional) {
        relicEffects.conditionalRelics.push({ name: relicName.toUpperCase(), effect });
      }
    }
  });

  // Initialize combat state
  let playerHP = 80 + relicEffects.startHP; // Base HP + relic bonuses
  let enemyHP = enemyProfile.hp;
  let turn = 0;
  const maxTurns = 20;
  let platedArmor = relicEffects.platedArmor; // Persistent block

  // Deck state
  let drawPile = [...deck];
  let hand = [];
  let discardPile = [];

  // Shuffle deck
  for (let i = drawPile.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [drawPile[i], drawPile[j]] = [drawPile[j], drawPile[i]];
  }

  // Helper: draw cards
  const drawCards = (count) => {
    for (let i = 0; i < count; i++) {
      if (drawPile.length === 0) {
        // Reshuffle discard into draw pile
        drawPile = [...discardPile];
        discardPile = [];
        for (let j = drawPile.length - 1; j > 0; j--) {
          const k = Math.floor(seededRandom() * (j + 1));
          [drawPile[j], drawPile[k]] = [drawPile[k], drawPile[j]];
        }
        if (drawPile.length === 0) break;
      }
      hand.push(drawPile.pop());
    }
  };

  // Combat loop
  while (turn < maxTurns && playerHP > 0 && enemyHP > 0) {
    turn++;

    // Draw hand (base 5 + relic bonuses)
    hand = [];
    const cardsPerTurn = 5 + relicEffects.startDraw;
    drawCards(cardsPerTurn);

    // Apply conditional relic effects based on current state
    let conditionalDamageMultiplier = 1.0;
    let conditionalStrength = 0;
    let carriedEnergy = 0;

    const playerHPPercent = playerHP / (80 + relicEffects.startHP);
    const enemyHPPercent = enemyHP / enemyProfile.hp;

    relicEffects.conditionalRelics.forEach(({ name, effect }) => {
      if (effect.conditional === 'lowHP' && playerHPPercent < 0.5) {
        // Red Skull, Ginger
        if (effect.damageMultiplier) conditionalDamageMultiplier *= effect.damageMultiplier;
      }
      if (effect.conditional === 'enemyLowHP' && enemyHPPercent < 0.5) {
        // Champion Belt: enemy takes more damage when <50% HP
        conditionalDamageMultiplier *= 1.15;
      }
      if (effect.strengthPerKill) {
        // Turnip: estimate +1 strength average (already killed enemies before)
        conditionalStrength += 1;
      }
    });

    // Player turn: play cards
    let energy = 3 + relicEffects.startEnergy + carriedEnergy;
    let blockThisTurn = platedArmor + relicEffects.blockPerTurn;
    if (turn === 1) blockThisTurn += relicEffects.startBlock;
    let damageDealt = relicEffects.startVigor; // Vigor = unblocked damage
    let attacksPlayed = 0;
    let powersPlayed = 0;

    // Determine if enemy is attacking this turn
    const enemyAttacking = seededRandom() < enemyProfile.attackProbability;
    const incomingDamage = enemyAttacking ? enemyProfile.damage : 0;

    // Simple AI: prioritize block if taking damage, otherwise attack
    // Map hand cards with their deck indices to apply upgrades/enchantments
    const handCardsWithState = hand.map(cardName => {
      const card = findCard(cardName);
      if (!card) return null;

      // Find this card's index in the deck
      const deckIndex = deck.indexOf(cardName);
      const key = `${deckIndex}-${cardName}`;

      // Check if upgraded
      const isUpgraded = gameState?.upgradedCards?.has(key) || false;

      // Check enchantment
      const enchantment = gameState?.enchantments?.get(key) || null;

      // Apply upgrade bonuses using exact API data
      let damage = card.damage || 0;
      let block = card.block || 0;
      let cost = card.cost;

      if (isUpgraded && typeof CARD_UPGRADES !== 'undefined') {
        const upgradeData = CARD_UPGRADES[cardName];
        if (upgradeData) {
          // Use exact upgraded values from API
          if (upgradeData.upgradedDamage !== null && upgradeData.upgradedDamage !== upgradeData.baseDamage) {
            damage = upgradeData.upgradedDamage;
          }
          if (upgradeData.upgradedBlock !== null && upgradeData.upgradedBlock !== upgradeData.baseBlock) {
            block = upgradeData.upgradedBlock;
          }
          if (upgradeData.upgradedCost !== upgradeData.baseCost) {
            cost = upgradeData.upgradedCost;
          }
        } else {
          // Fallback to approximation if card not in upgrade data
          if (damage > 0) damage = Math.ceil(damage * 1.4);
          if (block > 0) block = Math.ceil(block * 1.4);
          if (cost >= 2) cost = Math.max(0, cost - 1);
        }
      }

      // Apply enchantment bonuses
      if (enchantment) {
        if (enchantment === 'Sharp' && damage > 0) damage += 3;
        if (enchantment === 'Heavy' && block > 0) block += 8;
        if (enchantment === 'Nimble' && cost >= 1) cost = Math.max(0, cost - 1);
        if (enchantment === 'Free') cost = 0;
        // Note: Glam (replay), Doublecast, etc. would need more complex logic
      }

      return { ...card, damage, block, cost, name: cardName };
    }).filter(c => c);

    // Sort cards: blocks first if taking damage, attacks first otherwise
    handCardsWithState.sort((a, b) => {
      if (enemyAttacking) {
        const aBlock = a.block || 0;
        const bBlock = b.block || 0;
        return bBlock - aBlock;
      } else {
        const aDamage = a.damage || 0;
        const bDamage = b.damage || 0;
        return bDamage - aDamage;
      }
    });

    // Play cards
    for (const card of handCardsWithState) {
      let cost = card.cost >= 0 ? card.cost : 0;

      // X-cost bonus (Chemical X)
      if (card.cost === -1 && relicEffects.xCostBonus > 0) {
        cost = 0; // X-cost treated as 0 base, but gets bonus effect
      }

      if (cost > energy) continue;

      energy -= cost;

      // Apply card effects
      if (card.block) {
        blockThisTurn += card.block;
      }
      if (card.damage) {
        let cardDamage = card.damage;

        // X-cost bonus damage
        if (card.cost === -1) {
          cardDamage += relicEffects.xCostBonus;
        }

        // Apply damage multipliers (base + conditional)
        cardDamage *= relicEffects.damageMultiplier * conditionalDamageMultiplier;

        // Add conditional strength bonus
        cardDamage += conditionalStrength;

        damageDealt += cardDamage;
        attacksPlayed++;

        // Ornamental Fan: block per attack
        blockThisTurn += relicEffects.blockPerAttack;
      }

      // Power healing (Bird-Faced Urn)
      if (card.type === 'Power') {
        powersPlayed++;
        playerHP += relicEffects.healPerPower;
      }

      // Move to discard
      discardPile.push(card.name);

      if (energy === 0 && !relicEffects.energyCarryover) break;
    }

    // Ice Cream: carry leftover energy
    if (relicEffects.energyCarryover && energy > 0) {
      carriedEnergy = energy;
    }

    // Apply damage to enemy
    enemyHP -= damageDealt;
    if (enemyHP <= 0) {
      return { victory: true, turnsToWin: turn, finalHP: playerHP };
    }

    // Enemy turn: attack or block
    if (enemyAttacking) {
      let damageToPlayer = Math.max(0, incomingDamage - blockThisTurn);

      // Self Forming Clay: gain block from HP loss
      const clayRelic = relicEffects.conditionalRelics.find(r => r.effect.blockPerHPLost);
      if (clayRelic && damageToPlayer > 0) {
        const clayBlock = Math.floor(damageToPlayer * clayRelic.effect.blockPerHPLost);
        damageToPlayer = Math.max(0, damageToPlayer - clayBlock);
      }

      // Rupture: gain strength from HP loss
      const ruptureRelic = relicEffects.conditionalRelics.find(r => r.effect.strengthPerHPLost);
      if (ruptureRelic && damageToPlayer > 0) {
        conditionalStrength += Math.floor(damageToPlayer * ruptureRelic.effect.strengthPerHPLost);
      }

      // Mark of Pain: gain energy when taking unblocked damage
      const markRelic = relicEffects.conditionalRelics.find(r => r.effect.energyPerUnblocked);
      if (markRelic && damageToPlayer > 0) {
        carriedEnergy += markRelic.effect.energyPerUnblocked;
      }

      playerHP -= damageToPlayer;
    }

    // Ginger: prevent death
    if (playerHP <= 0 && relicEffects.preventDeath) {
      playerHP = 1;
    }

    if (playerHP <= 0) {
      return { victory: false, turnsDied: turn };
    }

    // Heal from relics at end of combat (approximate)
    if (enemyHP <= 0) {
      playerHP += relicEffects.hpPerCombat;
    }
  }

  // Timeout - consider this a loss (took too long)
  return { victory: false, timeout: true };
}

function evaluateMinBlockCoverageForDeck(deck) {
  // Same logic as evaluateMinBlockCoverage but for arbitrary deck
  const expectedDamage = getExpectedDamage();
  const targetBlock = expectedDamage.avg;

  let totalBlockPerEnergy = 0;
  let blockCardCount = 0;

  deck.forEach(cardName => {
    const card = findCard(cardName);
    if (!card) return;

    if (card.block && card.block > 0) {
      const cost = card.cost >= 0 ? card.cost : 1;
      const efficiency = cost > 0 ? card.block / cost : card.block;
      totalBlockPerEnergy += efficiency;
      blockCardCount++;
    }

    if (card.type === 'Power' && card.keywords) {
      const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
      if (keywords.some(k => k.toLowerCase().includes('block') || k.toLowerCase().includes('frost'))) {
        totalBlockPerEnergy += 3;
      }
    }
  });

  const expectedBlockPerTurn = blockCardCount > 0 ? (totalBlockPerEnergy / blockCardCount) * 3 : 0;
  const canSurvive = expectedBlockPerTurn >= (targetBlock * 0.7);

  return { canSurvive, expectedBlockPerTurn };
}

function evaluateDamageOutputForDeck(deck) {
  let totalDamagePerEnergy = 0;
  let attackCardCount = 0;
  let scalingCount = 0;

  deck.forEach(cardName => {
    const card = findCard(cardName);
    if (!card) return;

    if (card.damage && card.damage > 0) {
      const cost = card.cost >= 0 ? card.cost : 2;
      const efficiency = cost > 0 ? card.damage / cost : card.damage;
      totalDamagePerEnergy += efficiency;
      attackCardCount++;
    }

    if (card.type === 'Power' || (card.keywords && Array.isArray(card.keywords))) {
      const keywords = card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]) : [];
      if (keywords.some(k => ['strength', 'poison', 'doom', 'focus', 'scaling'].includes(k.toLowerCase()))) {
        scalingCount++;
      }
    }
  });

  const expectedDamagePerTurn = attackCardCount > 0 ? (totalDamagePerEnergy / attackCardCount) * 3 * 2 : 0;
  const adjustedDamage = expectedDamagePerTurn + (scalingCount * 5);

  const killThresholds = { 1: 80, 2: 150, 3: 250, 4: 350 };
  const targetHP = killThresholds[currentAct] || 150;
  const turnsToKill = adjustedDamage > 0 ? targetHP / adjustedDamage : 999;
  const canKillInReasonableTime = turnsToKill <= 10;

  return { canKillInReasonableTime };
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

function renderMinBlockAnalysis() {
  const expectedDamage = getExpectedDamage();
  const blockCoverage = evaluateMinBlockCoverage();
  const damageOutput = evaluateDamageOutput();

  document.getElementById('expected-damage').textContent = `${expectedDamage.avg} (Elite: ${expectedDamage.elite})`;
  document.getElementById('block-per-turn').textContent = Math.round(blockCoverage.expectedBlockPerTurn);
  document.getElementById('damage-per-turn').textContent = Math.round(damageOutput.expectedDamagePerTurn);
  document.getElementById('turns-to-kill').textContent = damageOutput.turnsToKill < 999 ? Math.round(damageOutput.turnsToKill) : '∞';

  // Color code based on performance
  const blockEl = document.getElementById('block-per-turn');
  if (blockCoverage.canSurvive) {
    blockEl.style.color = '#6ee7b7'; // Green
  } else if (blockCoverage.blockDeficit > 10) {
    blockEl.style.color = '#fca5a5'; // Red
  } else {
    blockEl.style.color = '#fbbf24'; // Yellow
  }

  const damageEl = document.getElementById('damage-per-turn');
  if (damageOutput.canKillInReasonableTime) {
    damageEl.style.color = '#6ee7b7';
  } else {
    damageEl.style.color = '#fca5a5';
  }
}

// ============================================================================
// CARD SCORING
// ============================================================================

// Context-aware helper functions
function getDeckContext() {
  const attacks = currentDeck.filter(name => findCard(name)?.type === 'Attack').length;
  const skills = currentDeck.filter(name => findCard(name)?.type === 'Skill').length;
  const powers = currentDeck.filter(name => findCard(name)?.type === 'Power').length;

  const totalDamage = currentDeck.reduce((sum, name) => {
    const card = findCard(name);
    return sum + (card?.damage || 0);
  }, 0);

  const totalBlock = currentDeck.reduce((sum, name) => {
    const card = findCard(name);
    return sum + (card?.block || 0);
  }, 0);

  const avgDamagePerCard = attacks > 0 ? totalDamage / attacks : 0;
  const avgBlockPerCard = skills > 0 ? totalBlock / skills : 0;

  const costs = currentDeck.map(name => findCard(name)?.cost).filter(c => c !== null && c !== undefined && c >= 0);
  const avgCost = costs.length > 0 ? costs.reduce((a, b) => a + b, 0) / costs.length : 1.5;

  return {
    attacks,
    skills,
    powers,
    totalDamage,
    totalBlock,
    avgDamagePerCard,
    avgBlockPerCard,
    avgCost,
    deckSize: currentDeck.length,
    hasDrawEngine: currentDeck.some(name => {
      const card = findCard(name);
      return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords]).some(k => k.toLowerCase().includes('draw'));
    }),
    hasEnergyGeneration: currentRelics.some(r => {
      const relic = findRelic(r);
      return relic?.description?.toLowerCase().includes('energy');
    })
  };
}

function getEnemyContext() {
  // Expected enemy stats per act/ascension
  const baseHP = {
    1: { normal: 45, elite: 120, boss: 250 },
    2: { normal: 70, elite: 180, boss: 400 },
    3: { normal: 95, elite: 250, boss: 550 }
  };

  const baseDamage = {
    1: { normal: 8, elite: 15, boss: 18 },
    2: { normal: 12, elite: 22, boss: 28 },
    3: { normal: 18, elite: 32, boss: 40 }
  };

  const act = currentAct;
  const ascensionMultiplier = 1 + (currentAscension * 0.02); // +2% per ascension

  return {
    normalHP: Math.round(baseHP[act].normal * ascensionMultiplier),
    eliteHP: Math.round(baseHP[act].elite * ascensionMultiplier),
    bossHP: Math.round(baseHP[act].boss * ascensionMultiplier),
    normalDamage: Math.round(baseDamage[act].normal * ascensionMultiplier),
    eliteDamage: Math.round(baseDamage[act].elite * ascensionMultiplier),
    bossDamage: Math.round(baseDamage[act].boss * ascensionMultiplier),
    avgHP: Math.round((baseHP[act].normal * 0.7 + baseHP[act].elite * 0.25 + baseHP[act].boss * 0.05) * ascensionMultiplier),
    avgDamage: Math.round((baseDamage[act].normal * 0.7 + baseDamage[act].elite * 0.25 + baseDamage[act].boss * 0.05) * ascensionMultiplier)
  };
}

// Dead draw analysis - cards that do nothing in current deck
function checkDeadDraw(card, cardName, deckCtx) {
  const name = cardName.toLowerCase();

  // Whirlwind/Flex/Sword Boomerang with 0 extra energy
  if ((name.includes('whirlwind') || name === 'flex' || name === 'sword boomerang') && !deckCtx.hasEnergyGeneration) {
    return -25; // Usually only plays for X=0
  }

  // Grand Finale requires exactly 1 card in hand
  if (name === 'grand finale' && deckCtx.deckSize > 5) {
    return -30; // Too hard to pull off
  }

  // Pact's End requires 3+ cards in exhaust pile
  if (name === "pact's end") {
    const hasExhaust = currentDeck.some(c => {
      const card = findCard(c);
      return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
        .some(k => k.toLowerCase().includes('exhaust'));
    });
    if (!hasExhaust) {
      return -35; // No way to exhaust cards
    }
  }

  // Dropkick requires enemies to be vulnerable
  if (name === 'dropkick' && !deckCtx.hasVulnerable) {
    return -15; // No way to apply vulnerable
  }

  // Catalyst without poison
  if (name === 'catalyst') {
    const hasPoison = currentDeck.some(c => {
      const card = findCard(c);
      return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
        .some(k => k.toLowerCase().includes('poison'));
    });
    if (!hasPoison) {
      return -40; // Literally does nothing
    }
  }

  // Double Tap / Burst without good targets
  if (name === 'double tap' && deckCtx.attacks < 3) {
    return -15;
  }
  if (name === 'burst' && deckCtx.skills < 3) {
    return -15;
  }

  return 0;
}

// Combo requirements - check if deck supports this card
function checkComboRequirements(card, cardName, deckCtx) {
  const name = cardName.toLowerCase();

  // Poison synergy cards
  const isPoisonScaling = name === 'catalyst' || name === 'corpse explosion';
  const isPoisonSource = name === 'noxious fumes' || name === 'bouncing flask' || name === 'deadly poison';

  if (isPoisonScaling || isPoisonSource) {
    const poisonCount = currentDeck.filter(c => {
      const card = findCard(c);
      return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
        .some(k => k.toLowerCase().includes('poison'));
    }).length;

    if (poisonCount >= 2) {
      return { bonus: 15, reason: 'Strong poison synergy' };
    } else if (poisonCount === 1) {
      return { bonus: 5, reason: 'Some poison synergy' };
    } else if (isPoisonSource) {
      return { bonus: 0, reason: 'Starts poison archetype' }; // First poison card is fine
    } else {
      return { penalty: -25, reason: 'No poison support' }; // Scaling without source is bad
    }
  }

  // Strength scaling cards
  const isStrengthScaling = ['heavy blade', 'sword boomerang', 'twin strike', 'pummel'].some(sc => name.includes(sc.toLowerCase()));
  const isStrengthSource = name === 'inflame' || name === 'spot weakness' || name === 'limit break' || name === 'demon form';

  if (isStrengthScaling || isStrengthSource) {
    const hasStrength = detectedArchetypes.has('strength') || currentDeck.some(c => {
      const card = findCard(c);
      return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
        .some(k => k.toLowerCase().includes('strength'));
    });

    if (hasStrength) {
      return { bonus: 12, reason: 'Strength scaling synergy' };
    } else if (isStrengthSource) {
      return { bonus: 0, reason: 'Starts strength archetype' }; // First strength card
    } else {
      return { penalty: -10, reason: 'No strength support' }; // Scaling without source
    }
  }

  // Block cards need other block cards (but not if this is the first)
  if (card.type === 'Skill' && card.block && card.block > 0 && deckCtx.skills >= 3 && deckCtx.avgBlockPerCard < 3) {
    return { penalty: -8, reason: 'Deck lacks block support' };
  }

  // Discard synergy
  const isDiscardPayoff = name.includes('tactician') || name.includes('reflex') || name === 'sneaky strike';
  const isDiscardSource = name === 'acrobatics' || name === 'calculated gamble' || name === 'prepared';

  if (isDiscardPayoff || isDiscardSource) {
    const hasDiscard = currentDeck.some(c => {
      const card = findCard(c);
      return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
        .some(k => k.toLowerCase().includes('discard'));
    });

    if (hasDiscard) {
      return { bonus: 10, reason: 'Discard synergy' };
    } else if (isDiscardSource) {
      return { bonus: 0, reason: 'Starts discard archetype' };
    } else {
      return { penalty: -12, reason: 'No discard support' };
    }
  }

  return { penalty: 0, bonus: 0, reason: '' };
}

// Deck curve - penalize overloading a cost bracket
function checkDeckCurve(card, deckCtx) {
  const cost = card.cost;
  if (cost === undefined || cost < 0) return 0; // X-cost cards are flexible

  // Count cards at this cost
  const cardsAtCost = currentDeck.filter(c => {
    const deckCard = findCard(c);
    return deckCard && deckCard.cost === cost;
  }).length;

  // Penalize overloading expensive costs
  if (cost >= 3) {
    if (cardsAtCost >= 3 && !deckCtx.hasEnergyGeneration) {
      return -20; // 4th expensive card in no-energy deck
    } else if (cardsAtCost >= 2 && !deckCtx.hasEnergyGeneration) {
      return -10; // 3rd expensive card
    }
  }

  // Penalize too many 2-cost cards
  if (cost === 2) {
    if (cardsAtCost >= 5 && !deckCtx.hasEnergyGeneration) {
      return -15;
    } else if (cardsAtCost >= 7) {
      return -8;
    }
  }

  // Penalize flooding with 0-cost if deck is small
  if (cost === 0 && cardsAtCost >= 4 && deckCtx.deckSize < 20) {
    return -10; // Too many 0-cost dilutes deck
  }

  return 0;
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
  let breakdown = [{ factor: 'Base value', value: 50 }];

  // Get context
  const act = currentAct;
  const deckCtx = getDeckContext();
  const enemyCtx = getEnemyContext();

  // If heuristic scoring is disabled, skip all heuristics and use only MC
  if (!useHeuristicScoring) {
    // Skip to MC simulation section
    if (!context.skipMC) {
      // Calculate baseline if not cached
      if (mcBaselineWinRate === null) {
        calculateMCBaseline();
      }

      // Check if this card has been simulated already
      const cacheKey = cardName;
      const cached = mcCardCache.get(cacheKey);
      let mcResult;

      if (cached && cached.baselineHash === mcBaselineHash) {
        mcResult = cached;
      } else {
        mcResult = performMCRollout(card, mcSimulations);
        mcCardCache.set(cacheKey, {
          baselineHash: mcBaselineHash,
          ...mcResult
        });
      }

      const improvement = mcResult.winRate - mcBaselineWinRate;
      const baselineRounded = Math.round(mcBaselineWinRate);
      const withCardRounded = Math.round(mcResult.winRate);
      const improvementRounded = Math.round(improvement);

      // Calculate Deck Power Score (extends beyond 100% for comparing perfect decks)
      // Base: win rate (0-100)
      // Speed bonus: faster kills = higher score (max +50)
      // HP bonus: more HP remaining = higher score (max +50)
      let powerScore = mcResult.winRate;

      if (mcResult.winRate >= 100) {
        // Perfect win rate - now differentiate by quality
        const speedBonus = Math.max(0, 50 - (mcResult.avgTurnsToWin * 2.5)); // 20 turns = 0, 0 turns = 50
        const hpBonus = (mcResult.avgFinalHP / 80) * 50; // Assuming 80 base HP, max 50 bonus
        powerScore = 100 + speedBonus + hpBonus;
      }

      // Pure MC scoring: convert win rate improvement directly to score
      score = 50 + (improvement * 3); // 10% improvement = 30 point bonus

      breakdown = [
        { factor: 'Base value', value: 50 },
        { factor: `MC: ${improvementRounded >= 0 ? '+' : ''}${improvementRounded}% (${baselineRounded}% → ${withCardRounded}%)`, value: improvement * 3 },
        { factor: `Deck Power: ${Math.round(powerScore)}`, value: 0 } // Informational
      ];

      const reason = `Pure MC: ${withCardRounded}% WR (${improvementRounded >= 0 ? '+' : ''}${improvementRounded}%), Power: ${Math.round(powerScore)}`;

      return {
        score: Math.round(Math.max(0, score)),
        reason: reason,
        breakdown: breakdown,
        powerScore: Math.round(powerScore)
      };
    }

    // If MC is skipped, return base score
    return {
      score: 50,
      reason: 'Base score (MC skipped)',
      breakdown: [{ factor: 'Base value', value: 50 }]
    };
  }

  // === NEW HEURISTICS (only run if useHeuristicScoring is true) ===

  // 1. DEAD DRAW ANALYSIS - Cards that literally do nothing
  const deadDrawPenalty = checkDeadDraw(card, cardName, deckCtx);
  if (deadDrawPenalty < 0) {
    score += deadDrawPenalty;
    breakdown.push({ factor: 'Dead draw', value: deadDrawPenalty });
  }

  // 2. COMBO REQUIREMENTS - Check if deck can use this card
  const comboCheck = checkComboRequirements(card, cardName, deckCtx);
  if (comboCheck.penalty < 0) {
    score += comboCheck.penalty;
    breakdown.push({ factor: comboCheck.reason, value: comboCheck.penalty });
  } else if (comboCheck.bonus > 0) {
    score += comboCheck.bonus;
    breakdown.push({ factor: comboCheck.reason, value: comboCheck.bonus });
  }

  // 3. DECK CURVE - Cost distribution matters
  const curvePenalty = checkDeckCurve(card, deckCtx);
  if (curvePenalty < 0) {
    score += curvePenalty;
    breakdown.push({ factor: 'Curve overload', value: curvePenalty });
  }

  // === END NEW HEURISTICS ===

  // Rarity removed - score the card's actual effects, not arbitrary rarity bonuses

  // Type-specific scoring - Attack cards
  if (card.type === 'Attack') {
    const damage = card.damage || 0;
    const cost = card.cost >= 0 ? card.cost : 2;
    const damagePerEnergy = cost > 0 ? damage / cost : damage;

    // Compare to deck's average damage output
    if (deckCtx.avgDamagePerCard > 0) {
      if (damagePerEnergy > deckCtx.avgDamagePerCard * 1.5) {
        const bonus = 12;
        score += bonus;
        breakdown.push({ factor: 'Above-average damage efficiency', value: bonus });
      } else if (damagePerEnergy < deckCtx.avgDamagePerCard * 0.6) {
        const penalty = -12;
        score += penalty;
        breakdown.push({ factor: 'Below-average damage', value: penalty });
      }
    } else {
      // No damage baseline yet - compare to enemy HP
      const turnsToKillNormal = enemyCtx.normalHP / damage;
      if (turnsToKillNormal <= 3) {
        const bonus = 10;
        score += bonus;
        breakdown.push({ factor: 'Strong damage vs normals', value: bonus });
      } else if (turnsToKillNormal >= 6) {
        const penalty = -8;
        score += penalty;
        breakdown.push({ factor: 'Weak damage for act', value: penalty });
      }
    }

    // Multi-hit scaling with Strength/relics
    const isMultiHit = card.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
      .some(k => k.toLowerCase().includes('multihit') || k.toLowerCase().includes('multi'));

    if (isMultiHit) {
      const hasStrength = detectedArchetypes.has('Strength') || detectedArchetypes.has('strength');
      if (hasStrength) {
        const bonus = 15;
        score += bonus;
        breakdown.push({ factor: 'Multi-hit + Strength synergy', value: bonus });
      } else {
        const bonus = 5;
        score += bonus;
        breakdown.push({ factor: 'Multi-hit potential', value: bonus });
      }
    }
  }

  // Power cards - value increases with act, but diminishes if you already have many
  if (card.type === 'Power') {
    let powerValue = 0;

    // Base value increases with act (more time to scale)
    powerValue = act * 8;
    if (powerValue > 0) {
      breakdown.push({ factor: 'Scaling power (base)', value: powerValue });
    }

    // Diminishing returns if deck has many powers
    if (deckCtx.powers >= 4) {
      powerValue -= 10;
      breakdown.push({ factor: 'Too many powers', value: -10 });
    } else if (deckCtx.powers >= 2) {
      powerValue -= 3;
      breakdown.push({ factor: 'Many powers', value: -3 });
    }

    // Powers are worse in Act 1 if you have no energy generation
    if (act === 1 && !deckCtx.hasEnergyGeneration) {
      powerValue -= 8;
      breakdown.push({ factor: 'No energy for powers', value: -8 });
    }

    // High-cost powers are risky without energy
    if (card.cost && card.cost >= 2 && !deckCtx.hasEnergyGeneration) {
      powerValue -= 10;
      breakdown.push({ factor: 'Expensive power w/o energy', value: -10 });
    }

    score += powerValue;
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

  // Cost efficiency - depends on deck's energy curve
  if (card.cost === 0) {
    // Free cards are always good, but less critical if deck is already fast
    const bonus = deckCtx.avgCost > 1.5 ? 18 : 12;
    score += bonus;
    breakdown.push({ factor: 'Zero cost', value: bonus });
  } else if (card.cost >= 3) {
    // High-cost cards hurt if deck is already slow
    if (deckCtx.avgCost > 1.8) {
      const penalty = -12;
      score += penalty;
      breakdown.push({ factor: 'Too expensive for deck', value: penalty });
    } else if (deckCtx.hasEnergyGeneration) {
      // Okay if we have energy
      const bonus = 3;
      score += bonus;
      breakdown.push({ factor: 'High-cost w/ energy', value: bonus });
    } else {
      const penalty = -6;
      score += penalty;
      breakdown.push({ factor: 'High cost', value: penalty });
    }
  } else if (card.cost === 1 && deckCtx.avgCost < 1.2) {
    // Cheap cards when deck is already cheap
    const bonus = 5;
    score += bonus;
    breakdown.push({ factor: 'Fits fast deck', value: bonus });
  }

  // Deck size impact - bigger decks dilute draw consistency
  if (deckCtx.deckSize > 30) {
    const penalty = -15;
    score += penalty;
    breakdown.push({ factor: 'Bloated deck - dilutes draws', value: penalty });
  } else if (deckCtx.deckSize > 25 && !deckCtx.hasDrawEngine) {
    const penalty = -10;
    score += penalty;
    breakdown.push({ factor: 'Large deck w/o draw', value: penalty });
  } else if (deckCtx.deckSize < 15 && card.cost >= 2) {
    // Small deck prefers cheap cards
    const penalty = -5;
    score += penalty;
    breakdown.push({ factor: 'Slow card for thin deck', value: penalty });
  }

  // Card draw value - depends on deck size and existing draw
  if (card.keywords && card.keywords.includes('draw')) {
    let drawValue = 10; // Base value

    // More valuable in large decks (harder to find key cards)
    if (deckCtx.deckSize > 25) {
      drawValue += 10;
    } else if (deckCtx.deckSize > 20) {
      drawValue += 5;
    }

    // Less valuable if you already have draw engines
    if (deckCtx.hasDrawEngine) {
      drawValue -= 5;
    }

    // More valuable if deck has specific combo pieces that need assembling
    if (detectedArchetypes.size > 0) {
      const maxStrength = Math.max(...detectedArchetypes.values());
      if (maxStrength >= 5) {
        drawValue += 5; // Combo deck needs consistency
      }
    }

    score += drawValue;
    breakdown.push({ factor: 'Card draw', value: drawValue });
  }

  // Relic synergies
  const relicBonus = calculateRelicSynergy(card);
  if (relicBonus > 0) {
    score += relicBonus;
    breakdown.push({ factor: 'Relic synergy', value: relicBonus });
  }

  // Archetype synergies (card-to-card)
  const archetypeBonus = calculateArchetypeSynergy(card);
  if (archetypeBonus.score > 0) {
    score += archetypeBonus.score;
    breakdown.push({ factor: archetypeBonus.reason, value: archetypeBonus.score });
  }

  // Missing piece detection
  const missingPiece = detectMissingPiece(card);
  if (missingPiece.isMissing) {
    score += missingPiece.bonus;
    breakdown.push({ factor: missingPiece.reason, value: missingPiece.bonus });
  }

  // Premium card bonus (tier list meta picks)
  if (typeof PREMIUM_CARDS !== 'undefined' && PREMIUM_CARDS[card.name]) {
    const premiumData = PREMIUM_CARDS[card.name];
    score += premiumData.bonus;
    breakdown.push({ factor: `${premiumData.tier}-tier: ${premiumData.reason}`, value: premiumData.bonus });
  }

  // Block efficiency - compare to enemy damage and deck needs
  if (card.block && card.block > 0) {
    const cost = card.cost >= 0 ? card.cost : 1;
    const blockPerEnergy = cost > 0 ? card.block / cost : card.block;

    // Compare to deck's average block
    if (deckCtx.avgBlockPerCard > 0) {
      if (blockPerEnergy > deckCtx.avgBlockPerCard * 1.5) {
        const bonus = 15;
        score += bonus;
        breakdown.push({ factor: 'Above-average block efficiency', value: bonus });
      } else if (blockPerEnergy < deckCtx.avgBlockPerCard * 0.6) {
        const penalty = -8;
        score += penalty;
        breakdown.push({ factor: 'Weak block', value: penalty });
      }
    } else {
      // No block baseline - compare to enemy damage
      const blocksNormalAttack = card.block >= enemyCtx.normalDamage;
      const blocksEliteAttack = card.block >= enemyCtx.eliteDamage * 0.7;

      if (blocksEliteAttack) {
        const bonus = 12;
        score += bonus;
        breakdown.push({ factor: 'Strong block vs elites', value: bonus });
      } else if (blocksNormalAttack) {
        const bonus = 8;
        score += bonus;
        breakdown.push({ factor: 'Solid block', value: bonus });
      } else {
        const penalty = -5;
        score += penalty;
        breakdown.push({ factor: 'Weak block for act', value: penalty });
      }
    }

    // Block deficit check
    const expectedDamage = getExpectedDamage();
    const currentBlockCoverage = evaluateMinBlockCoverage();
    if (currentBlockCoverage && currentBlockCoverage.blockDeficit > 5) {
      const bonus = 15;
      score += bonus;
      breakdown.push({ factor: 'Critical block need', value: bonus });
    }
  }

  // Damage cards - need to kill enemies before they kill you
  if (card.damage && card.damage > 0 && card.type === 'Attack') {
    // Calculate turns to kill average enemy
    const turnsToKillAvg = Math.ceil(enemyCtx.avgHP / card.damage);

    // Fast kills are critical - less turns = less damage taken
    if (turnsToKillAvg <= 2) {
      const bonus = 18;
      score += bonus;
      breakdown.push({ factor: 'Fast kill potential', value: bonus });
    } else if (turnsToKillAvg <= 4) {
      const bonus = 10;
      score += bonus;
      breakdown.push({ factor: 'Good damage output', value: bonus });
    } else if (turnsToKillAvg >= 7) {
      const penalty = -12;
      score += penalty;
      breakdown.push({ factor: 'Too slow to kill', value: penalty });
    }
  }

  // MC Rollout: compare win rate improvement vs current deck (skip if context.skipMC)
  if (!context.skipMC) {
    // Calculate baseline if not cached (respects user's simulation count)
    if (mcBaselineWinRate === null) {
      calculateMCBaseline();
    }

    // Check if this card has been simulated already for this baseline
    const cacheKey = cardName;
    const cached = mcCardCache.get(cacheKey);
    let mcResult;

    if (cached && cached.baselineHash === mcBaselineHash) {
      // Use cached result
      mcResult = cached;
    } else {
      // Run simulation and cache result (respects user's simulation count)
      mcResult = performMCRollout(card, mcSimulations);
      mcCardCache.set(cacheKey, {
        baselineHash: mcBaselineHash,
        ...mcResult
      });
    }

    const improvement = mcResult.winRate - mcBaselineWinRate;
    const baselineRounded = Math.round(mcBaselineWinRate);
    const withCardRounded = Math.round(mcResult.winRate);
    const improvementRounded = Math.round(improvement);

    // Get baseline deck power for cached baseline
    const baselineResult = mcCardCache.get(`baseline-${mcBaselineHash}`);
    const baselinePower = baselineResult?.deckPower || 0;
    const powerImprovement = mcResult.deckPower - baselinePower;

    // When both are 100% win rate, use deck power as tiebreaker
    if (baselineRounded === 100 && withCardRounded === 100) {
      const powerBonus = Math.round(powerImprovement / 2); // -10 to +10 range typically
      score += powerBonus;
      breakdown.push({
        factor: `MC: 100% (Power: ${Math.round(mcResult.deckPower)} vs ${Math.round(baselinePower)}, ${powerBonus >= 0 ? '+' : ''}${powerBonus})`,
        value: powerBonus
      });
    }
    // Score based on improvement, not absolute win rate
    else if (improvement >= 15) {
      const bonus = 20; // Huge improvement
      score += bonus;
      breakdown.push({ factor: `MC: +${improvementRounded}% (${baselineRounded}% → ${withCardRounded}%)`, value: bonus });
    } else if (improvement >= 8) {
      const bonus = 15; // Strong improvement
      score += bonus;
      breakdown.push({ factor: `MC: +${improvementRounded}% (${baselineRounded}% → ${withCardRounded}%)`, value: bonus });
    } else if (improvement >= 3) {
      const bonus = 10; // Moderate improvement
      score += bonus;
      breakdown.push({ factor: `MC: +${improvementRounded}% (${baselineRounded}% → ${withCardRounded}%)`, value: bonus });
    } else if (improvement >= 0) {
      const bonus = 5; // Slight improvement
      score += bonus;
      breakdown.push({ factor: `MC: +${improvementRounded}% (${baselineRounded}% → ${withCardRounded}%)`, value: bonus });
    } else if (improvement < -5) {
      const penalty = -15; // Makes deck worse
      score += penalty;
      breakdown.push({ factor: `MC: ${improvementRounded}% (${baselineRounded}% → ${withCardRounded}%)`, value: penalty });
    } else {
      const penalty = -8; // Slightly worse
      score += penalty;
      breakdown.push({ factor: `MC: ${improvementRounded}% (${baselineRounded}% → ${withCardRounded}%)`, value: penalty });
    }
  }

  // Ascension scaling - enemies scale exponentially
  if (currentAscension >= 15) {
    // A15+: Enemies hit much harder and have more HP
    // Block becomes critical, weak attacks are liabilities
    if (card.block && card.block >= enemyCtx.normalDamage) {
      const ascBonus = 12;
      score += ascBonus;
      breakdown.push({ factor: 'A15+ critical block', value: ascBonus });
    }

    if (card.type === 'Attack' && card.damage && card.damage < enemyCtx.normalDamage) {
      const ascPenalty = -15;
      score += ascPenalty;
      breakdown.push({ factor: 'A15+ inadequate damage', value: ascPenalty });
    }

    // Powers that scale are essential
    if (card.type === 'Power') {
      const ascBonus = 8;
      score += ascBonus;
      breakdown.push({ factor: 'A15+ scaling power', value: ascBonus });
    }

    // Exhaust/deck-thinning is premium (draw consistency = survival)
    if (card.keywords) {
      const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
      if (keywords.some(k => k.toLowerCase().includes('exhaust'))) {
        const ascBonus = 10;
        score += ascBonus;
        breakdown.push({ factor: 'A15+ deck thinning', value: ascBonus });
      }
    }
  } else if (currentAscension >= 10) {
    // A10-14: Balanced approach
    if (card.type === 'Power') {
      const ascBonus = 5;
      score += ascBonus;
      breakdown.push({ factor: 'A10+ scaling', value: ascBonus });
    }
  }
  // A0-9: Greedy picks work, less punishment for inefficiency

  // === RELIC-CARD SYNERGIES (#1) ===
  currentRelics.forEach(relicName => {
    const rname = relicName.toLowerCase();
    const cardLower = cardName.toLowerCase();
    const keywords = card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]) : [];
    const keywordStr = keywords.join(' ').toLowerCase();

    // Dead Branch + exhaust cards
    if (rname.includes('dead branch') && keywordStr.includes('exhaust')) {
      const bonus = 30;
      score += bonus;
      breakdown.push({ factor: `Dead Branch synergy`, value: bonus });
    }

    // Kunai/Shuriken + 0-cost attacks
    if ((rname.includes('kunai') || rname.includes('shuriken')) && card.type === 'Attack' && card.cost === 0) {
      const bonus = 20;
      score += bonus;
      breakdown.push({ factor: `${relicName} synergy`, value: bonus });
    }

    // Pen Nib + multi-hit attacks
    if (rname.includes('pen nib') && card.type === 'Attack' && keywordStr.includes('multihit')) {
      const bonus = 18;
      score += bonus;
      breakdown.push({ factor: 'Pen Nib synergy', value: bonus });
    }

    // Ornamental Fan + skills
    if (rname.includes('ornamental fan') && card.type === 'Skill') {
      const bonus = 12;
      score += bonus;
      breakdown.push({ factor: 'Ornamental Fan synergy', value: bonus });
    }

    // Mummified Hand + 0-cost cards
    if (rname.includes('mummified hand') && card.cost === 0) {
      const bonus = 15;
      score += bonus;
      breakdown.push({ factor: 'Mummified Hand synergy', value: bonus });
    }

    // Tough Bandages / Tingsha + discard synergy
    if ((rname.includes('tough bandages') || rname.includes('tingsha')) && keywordStr.includes('discard')) {
      const bonus = 20;
      score += bonus;
      breakdown.push({ factor: `${relicName} synergy`, value: bonus });
    }

    // Feel No Pain / Dark Embrace + exhaust
    if ((rname.includes('feel no pain') || rname.includes('dark embrace')) && keywordStr.includes('exhaust')) {
      const bonus = 18;
      score += bonus;
      breakdown.push({ factor: `${relicName} synergy`, value: bonus });
    }

    // Toxic Egg + poison cards
    if (rname.includes('toxic') && keywordStr.includes('poison')) {
      const bonus = 15;
      score += bonus;
      breakdown.push({ factor: 'Toxic Egg synergy', value: bonus });
    }

    // Vajra/Girya + strength scaling attacks
    if ((rname.includes('vajra') || rname.includes('girya')) && card.type === 'Attack' && keywordStr.includes('multihit')) {
      const bonus = 16;
      score += bonus;
      breakdown.push({ factor: `${relicName} synergy`, value: bonus });
    }

    // Calipers + block cards
    if (rname.includes('calipers') && card.type === 'Skill' && card.block) {
      const bonus = 12;
      score += bonus;
      breakdown.push({ factor: 'Calipers synergy', value: bonus });
    }
  });

  // === BOSS-SPECIFIC SCORING (#7) ===
  if (selectedBoss && BOSS_MECHANICS[selectedBoss]) {
    const boss = BOSS_MECHANICS[selectedBoss];
    const bossName = boss.name;
    const cardLower = cardName.toLowerCase();
    const keywords = card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]) : [];
    const keywordStr = keywords.join(' ').toLowerCase();

    // Penalize card draw
    if (boss.penalizeCardDraw && card.keywords && keywordStr.includes('draw')) {
      const penalty = -20;
      score += penalty;
      breakdown.push({ factor: `${bossName} punishes draw`, value: penalty });
    }

    // Penalize powers
    if (boss.penalizePowers && card.type === 'Power') {
      const penalty = -25;
      score += penalty;
      breakdown.push({ factor: `${bossName} punishes powers`, value: penalty });
    }

    // Penalize combo cards
    if (boss.penalizeCombo && (card.type === 'Power' || (card.cost && card.cost >= 2))) {
      const penalty = -15;
      score += penalty;
      breakdown.push({ factor: `${bossName} limits cards/turn`, value: penalty });
    }

    // Require multi-hit
    if (boss.requireMultiHit && card.type === 'Attack') {
      if (keywordStr.includes('multihit')) {
        const bonus = 15;
        score += bonus;
        breakdown.push({ factor: `${bossName} needs multi-hit`, value: bonus });
      } else {
        const penalty = -10;
        score += penalty;
        breakdown.push({ factor: `${bossName} prefers multi-hit`, value: penalty });
      }
    }

    // Require front-loaded damage
    if (boss.requireFrontLoaded && card.type === 'Attack' && card.damage) {
      if (card.damage >= enemyCtx.normalDamage * 2) {
        const bonus = 15;
        score += bonus;
        breakdown.push({ factor: `${bossName} needs burst`, value: bonus });
      }
    }

    // Require AOE
    if (boss.requireAOE && card.type === 'Attack') {
      if (keywordStr.includes('aoe') || keywordStr.includes('area') || cardLower.includes('whirlwind') || cardLower.includes('cleave')) {
        const bonus = 25;
        score += bonus;
        breakdown.push({ factor: `${bossName} needs AOE`, value: bonus });
      } else {
        const penalty = -8;
        score += penalty;
        breakdown.push({ factor: `${bossName} prefers AOE`, value: penalty });
      }
    }

    // Reward block
    if (boss.rewardBlock && card.type === 'Skill' && card.block) {
      const bonus = 12;
      score += bonus;
      breakdown.push({ factor: `${bossName} rewards block`, value: bonus });
    }

    // Reward setup (powers/combo)
    if (boss.rewardSetup) {
      if (card.type === 'Power') {
        const bonus = 20;
        score += bonus;
        breakdown.push({ factor: `${bossName} allows setup`, value: bonus });
      }
      if (card.cost && card.cost >= 2) {
        const bonus = 8;
        score += bonus;
        breakdown.push({ factor: `${bossName} allows slow cards`, value: bonus });
      }
    }

    // Reward scaling
    if (boss.rewardScaling && card.type === 'Power') {
      const bonus = 18;
      score += bonus;
      breakdown.push({ factor: `${bossName} rewards scaling`, value: bonus });
    }

    // Reward exhaust
    if (boss.rewardExhaust && card.keywords && keywordStr.includes('exhaust')) {
      const bonus = 25;
      score += bonus;
      breakdown.push({ factor: `${bossName} rewards exhaust`, value: bonus });
    }

    // Require burst (high single-target damage)
    if (boss.requireBurst && card.type === 'Attack' && card.damage) {
      if (card.damage >= 25) {
        const bonus = 30;
        score += bonus;
        breakdown.push({ factor: `${bossName} needs burst damage`, value: bonus });
      } else if (card.damage >= 15) {
        const bonus = 15;
        score += bonus;
        breakdown.push({ factor: `${bossName} rewards damage`, value: bonus });
      } else {
        const penalty = -10;
        score += penalty;
        breakdown.push({ factor: `${bossName} needs more damage`, value: penalty });
      }
    }

    // Reward Retain
    if (boss.rewardRetain && card.keywords && keywordStr.includes('retain')) {
      const bonus = 20;
      score += bonus;
      breakdown.push({ factor: `${bossName} rewards retain`, value: bonus });
    }

    // Reward Attacks (penalize Skills)
    if (boss.rewardAttacks) {
      if (card.type === 'Attack') {
        const bonus = 15;
        score += bonus;
        breakdown.push({ factor: `${bossName} rewards attacks`, value: bonus });
      } else if (card.type === 'Skill') {
        const penalty = -20;
        score += penalty;
        breakdown.push({ factor: `${bossName} punishes skills`, value: penalty });
      }
    }
  }

  // Normalize
  score = Math.max(0, score); // Allow scores above 100

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

function renderCardResult(card, result, showAddButton = false, rewardKey = null) {
  const scoreClass = result.score >= 70 ? 'score-high' : result.score >= 40 ? 'score-medium' : 'score-low';
  const rarityClass = card.rarity ? `rarity-${card.rarity}` : '';
  const icon = TYPE_ICONS[card.type] || '📄';
  const cardName = card.name || 'Unknown';

  // Check upgrade/enchant state if this is a reward card
  const isUpgraded = rewardKey ? upgradedCards.has(rewardKey) : false;
  const enchantment = rewardKey ? cardEnchantments.get(rewardKey) : null;

  // Check if good for selected boss
  let bossBadge = '';
  const boss = selectedBoss && BOSS_MECHANICS[selectedBoss] ? BOSS_MECHANICS[selectedBoss] : null;
  if (boss) {
    const keywords = card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]) : [];
    const isGoodForBoss = (
      (boss.requireAOE && keywords.some(k => k.toLowerCase().includes('aoe') || k.toLowerCase().includes('area'))) ||
      (boss.requireBurst && card.type === 'Attack' && card.damage >= 20) ||
      (boss.requireMultiHit && keywords.some(k => k.toLowerCase().includes('multihit'))) ||
      (boss.requireFrontLoaded && card.cost <= 1 && card.damage >= 10) ||
      (boss.rewardBlock && card.type === 'Skill' && card.block)
    );
    if (isGoodForBoss) {
      bossBadge = `<span class="pill" style="background: rgba(251, 191, 36, 0.2); color: #fbbf24; border-color: #fbbf24;">👑 ${boss.name}</span>`;
    }
  }

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

  // Upgrade/Enchant action buttons (for reward cards)
  const actionButtonsHtml = rewardKey ? `
    <div style="display: flex; gap: 6px; margin-top: 8px;">
      <button class="shop-slot-action-btn ${isUpgraded ? 'active' : ''}"
              onclick="toggleRewardCardUpgrade('${rewardKey}', '${cardName.replace(/'/g, "\\'")}'); event.stopPropagation();"
              title="Toggle upgrade"
              style="padding: 6px 12px; font-size: 14px;">
        ${isUpgraded ? '✓ Upgraded' : '+ Upgrade'}
      </button>
      <button class="shop-slot-action-btn ${enchantment ? 'active' : ''}"
              onclick="showRewardEnchantMenu('${rewardKey}', '${cardName.replace(/'/g, "\\'")}', event); event.stopPropagation();"
              title="Add enchantment"
              style="padding: 6px 12px; font-size: 14px;">
        ✨ ${enchantment ? ENCHANTMENTS[enchantment].icon + ' ' + enchantment : 'Enchant'}
      </button>
    </div>
  ` : '';

  // CACHE BUSTER v3 - This should show "Add to Deck" button
  const addButtonHtml = showAddButton ? `
    <button class="add-to-deck-btn" onclick="addRewardCardToDeck('${cardName.replace(/'/g, "\\'")}', '${rewardKey || ''}')" aria-label="Add ${cardName} to deck">
      ➕ Add to Deck
    </button>
  ` : '';

  return `
    <div class="card-result ${rarityClass} ${isUpgraded ? 'upgraded' : ''} ${enchantment ? 'enchanted' : ''}"
         data-card-name="${cardName}"
         data-reward-key="${rewardKey || ''}"
         onmouseenter="showCardPreview(event, '${cardName}', ${isUpgraded}, '${enchantment || ''}')"
         onmouseleave="hideCardPreview()">
      <div class="card-header">
        <div class="card-name-section">
          <span class="card-icon">${icon}</span>
          <span class="card-name">${cardName}${isUpgraded ? '+' : ''}${enchantment ? ' ' + ENCHANTMENTS[enchantment].icon : ''}</span>
        </div>
        <span class="card-score ${scoreClass}">${result.score}</span>
      </div>
      <div class="card-meta">
        <span class="pill">${card.type || 'Unknown'}</span>
        ${card.cost !== undefined ? `<span class="pill">Cost: ${card.cost >= 0 ? card.cost : 'X'}</span>` : ''}
        ${card.rarity ? `<span class="pill pill-${card.rarity}">${card.rarity}</span>` : ''}
        ${card.keywords ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords]).map(k => `<span class="pill">${k}</span>`).join('') : ''}
        ${bossBadge}
      </div>
      <div class="card-reason">${result.reason}</div>
      ${actionButtonsHtml}
      ${addButtonHtml}
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

// ============================================================================
// REWARD SCORING
// ============================================================================

async function scoreRewards() {
  // Collect cards from pill input
  const cards = [...additionalRewardCards];

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

  const scored = cards.map((name, index) => {
    const card = findCard(name);
    const rewardKey = `reward-${index}`;

    // Base score
    let result = scoreCard(name);
    let finalScore = result.score;

    // Apply upgrade bonus if upgraded
    const isUpgraded = upgradedCards.has(rewardKey);
    if (isUpgraded) {
      const upgradeBonus = calculateUpgradeValue(card, name);
      finalScore += upgradeBonus;
      result.breakdown.push({ factor: 'Upgrade bonus', value: upgradeBonus });
    }

    // Apply enchantment bonus if enchanted
    const enchantment = cardEnchantments.get(rewardKey);
    if (enchantment) {
      const enchantBonus = calculateEnchantmentValue(card, name, enchantment);
      finalScore += enchantBonus;
      result.breakdown.push({ factor: `${enchantment} enchantment`, value: enchantBonus });
    }

    finalScore = Math.max(0, finalScore); // Allow scores above 100

    return {
      card: card || { name },
      score: Math.round(finalScore),
      reason: result.reason,
      breakdown: result.breakdown,
      rewardKey
    };
  });

  const filtered = filterAndSortCards(scored);

  // Check if SKIP is the best option (all cards below threshold)
  const SKIP_THRESHOLD = 45; // Cards below this are probably not worth taking
  const bestScore = filtered.length > 0 ? filtered[0].score : 0;
  const shouldSkip = bestScore < SKIP_THRESHOLD;

  let html = '';

  if (shouldSkip) {
    // Show SKIP recommendation prominently
    html = `
      <div class="card-result skip-recommendation" style="border: 3px solid #fbbf24; background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05));">
        <div class="card-header">
          <div class="card-name-section">
            <span class="card-icon" style="font-size: 1.8rem;">⏭️</span>
            <span class="card-name" style="font-size: 1.3rem; color: #fbbf24;">SKIP REWARD</span>
          </div>
          <span class="card-score" style="background: linear-gradient(135deg, #ca8a04, #eab308); color: #fef3c7; font-size: 1.5rem;">BEST</span>
        </div>
        <div class="card-reason" style="font-size: 1rem; margin-top: 10px;">
          No card offers significant value. Best option: <strong>${filtered[0]?.card.name || 'None'}</strong> (${bestScore}/100).
          Skip to avoid deck bloat and preserve focus.
        </div>
        <div style="margin-top: 12px; padding: 12px; background: rgba(251, 191, 36, 0.1); border-radius: 6px; font-size: 0.9rem; color: var(--text-secondary);">
          💡 <strong>Why skip?</strong> Adding weak cards dilutes your deck, making it harder to draw your core combo pieces.
          ${currentDeck.length > 20 ? 'Your deck is already focused—protect that.' : 'Better cards will appear later.'}
        </div>
      </div>
      <div style="margin: 20px 0; padding: 12px; background: var(--bg-secondary); border-radius: 6px; border-left: 3px solid #64748b;">
        <strong style="color: var(--text-primary);">Available cards (not recommended):</strong>
      </div>
    `;
  }

  html += filtered.map(item => renderCardResult(item.card, item, true, item.rewardKey)).join('');
  document.getElementById('reward-results').innerHTML = html;
  setLoading('reward-results', false);

  // Trigger confetti for high scores OR skip recommendation
  if (filtered.some(item => item.score >= 90)) {
    triggerConfetti();
  }

  if (shouldSkip) {
    showToast('💡 Recommendation: SKIP this reward', 'info', 3000);
  } else {
    showToast(`Analyzed ${filtered.length} card${filtered.length !== 1 ? 's' : ''}`, 'success', 2000);
  }
}

function addCardToDeck(cardName) {
  // Add card to deck array
  currentDeck.push(cardName);
  invalidateMCBaseline();

  // Hide preview immediately
  hideCardPreview();

  renderDeckCardList();

  // Clear autocomplete fields
  clearAutocompleteFields();

  // Re-analyze deck
  analyzeDeckStats();

  showToast(`Added ${cardName} to deck!`, 'success', 2000);
}

function addRewardCardToDeck(cardName, rewardKey) {
  // Add card to deck
  currentDeck.push(cardName);
  invalidateMCBaseline();

  // Transfer upgrade/enchant state from reward to deck
  const deckIndex = currentDeck.length - 1;
  const deckKey = `${deckIndex}-${cardName}`;

  if (rewardKey && upgradedCards.has(rewardKey)) {
    upgradedCards.add(deckKey);
    upgradedCards.delete(rewardKey); // Clean up reward key
  }

  if (rewardKey && cardEnchantments.has(rewardKey)) {
    cardEnchantments.set(deckKey, cardEnchantments.get(rewardKey));
    cardEnchantments.delete(rewardKey); // Clean up reward key
  }

  // Hide preview immediately
  hideCardPreview();

  renderDeckCardList();
  clearAutocompleteFields();
  analyzeDeckStats();
  analyzeBossReadiness();
  saveDeckState();

  showToast(`Added ${cardName} to deck!`, 'success', 2000);
}

function toggleRewardCardUpgrade(rewardKey, cardName) {
  if (upgradedCards.has(rewardKey)) {
    upgradedCards.delete(rewardKey);
  } else {
    upgradedCards.add(rewardKey);
  }

  // Re-run analysis to update scores
  scoreRewards();
}

function showRewardEnchantMenu(rewardKey, cardName, event) {
  const rect = event.target.getBoundingClientRect();
  const menu = document.getElementById('enchant-menu');

  menu.style.left = rect.left + 'px';
  menu.style.top = (rect.bottom + 5) + 'px';
  menu.classList.add('show');

  const currentEnchant = cardEnchantments.get(rewardKey);

  let html = Object.entries(ENCHANTMENTS).map(([key, enchant]) => {
    const isActive = currentEnchant === key;
    return `
      <div class="enchant-option ${isActive ? 'active' : ''}"
           onclick="setRewardEnchantment('${rewardKey}', '${cardName.replace(/'/g, "\\'")}', '${key}')">
        <span class="enchant-icon">${enchant.icon}</span>
        <div>
          <div class="enchant-name">${key}</div>
          <div class="enchant-desc">${enchant.effect}</div>
        </div>
      </div>
    `;
  }).join('');

  if (currentEnchant) {
    html += `
      <div class="enchant-option remove"
           onclick="setRewardEnchantment('${rewardKey}', '${cardName.replace(/'/g, "\\'")}', null)">
        <span class="enchant-icon">🚫</span>
        <div>
          <div class="enchant-name">Remove enchantment</div>
        </div>
      </div>
    `;
  }

  menu.innerHTML = html;

  setTimeout(() => {
    const closeMenu = (e) => {
      if (!menu.contains(e.target) && e.target !== event.target) {
        menu.classList.remove('show');
        document.removeEventListener('click', closeMenu);
      }
    };
    document.addEventListener('click', closeMenu);
  }, 10);
}

function setRewardEnchantment(rewardKey, cardName, enchantmentKey) {
  if (enchantmentKey) {
    cardEnchantments.set(rewardKey, enchantmentKey);
  } else {
    cardEnchantments.delete(rewardKey);
  }

  document.getElementById('enchant-menu').classList.remove('show');

  // Re-run analysis to update scores
  scoreRewards();
}

// ============================================================================
// SHOP CARD MANAGEMENT
// ============================================================================

function addShopItem(name, type) {
  // Auto-route to correct slot based on type
  if (type === 'relic') {
    const usedSlots = Object.keys(shopRelics).length;
    if (usedSlots >= 3) {
      showToast('Max 3 relics', 'warning', 1500);
      return;
    }
    if (Object.values(shopRelics).includes(name)) {
      showToast(`${name} already in shop`, 'warning', 1500);
      return;
    }
    // Find first empty slot
    for (let i = 0; i < 3; i++) {
      if (!shopRelics[i]) {
        shopRelics[i] = name;
        break;
      }
    }
  } else {
    // It's a card - check if colorless
    const card = findCard(name);
    const isColorless = card && card.character && card.character.toLowerCase() === 'colorless';

    if (isColorless) {
      const usedSlots = Object.keys(shopColorlessCards).length;
      if (usedSlots >= 2) {
        showToast('Max 2 colorless cards', 'warning', 1500);
        return;
      }
      if (Object.values(shopColorlessCards).includes(name)) {
        showToast(`${name} already in shop`, 'warning', 1500);
        return;
      }
      // Find first empty slot
      for (let i = 0; i < 2; i++) {
        if (!shopColorlessCards[i]) {
          shopColorlessCards[i] = name;
          break;
        }
      }
    } else {
      const usedSlots = Object.keys(shopCards).length;
      if (usedSlots >= 5) {
        showToast('Max 5 class cards', 'warning', 1500);
        return;
      }
      if (Object.values(shopCards).includes(name)) {
        showToast(`${name} already in shop`, 'warning', 1500);
        return;
      }
      // Find first empty slot
      for (let i = 0; i < 5; i++) {
        if (!shopCards[i]) {
          shopCards[i] = name;
          break;
        }
      }
    }
  }

  renderShopGrid();

  const input = document.getElementById('shop-input');
  if (input) {
    input.value = '';
    // Don't close dropdown - let user continue adding items
    input.focus();
  }

  showToast(`Added ${name}`, 'success', 1500);
}

function removeShopItem(name, type) {
  if (type === 'class') {
    // Find and delete the slot with this card
    for (let i = 0; i < 5; i++) {
      if (shopCards[i] === name) {
        delete shopCards[i];
        break;
      }
    }
  } else if (type === 'colorless') {
    for (let i = 0; i < 2; i++) {
      if (shopColorlessCards[i] === name) {
        delete shopColorlessCards[i];
        break;
      }
    }
  } else if (type === 'relic') {
    for (let i = 0; i < 3; i++) {
      if (shopRelics[i] === name) {
        delete shopRelics[i];
        break;
      }
    }
  }

  renderShopGrid();
  showToast(`Removed ${name}`, 'info', 1500);
}

function toggleShopRemoval() {
  shopRemovalSelected = !shopRemovalSelected;
  const btn = document.getElementById('shop-removal-btn');
  if (btn) {
    btn.classList.toggle('selected', shopRemovalSelected);
  }
  showToast(shopRemovalSelected ? 'Removal selected' : 'Removal deselected', 'info', 1500);
}

function incrementRemovalCount(delta) {
  shopRemovalCount = Math.max(0, shopRemovalCount + delta);
  const display = document.getElementById('removal-count-display');
  if (display) {
    display.textContent = shopRemovalCount;
  }
  renderShopGrid(); // Update removal button cost
  saveDeckState();
  showToast(`Removal cost: ${75 + (shopRemovalCount * 25)}G`, 'info', 1500);
}

function purchaseShopCard(cardName, shopKey) {
  // Add card to deck
  currentDeck.push(cardName);
  invalidateMCBaseline();

  // Transfer upgrade/enchant state from shop to deck
  const deckIndex = currentDeck.length - 1;
  const deckKey = `${deckIndex}-${cardName}`;

  if (upgradedCards.has(shopKey)) {
    upgradedCards.add(deckKey);
  }

  if (cardEnchantments.has(shopKey)) {
    const enchant = cardEnchantments.get(shopKey);
    cardEnchantments.set(deckKey, enchant);
  }

  // Remove ONLY this card from shop (delete the slot, leaving it empty)
  const card = findCard(cardName);
  const isColorless = card && card.character && card.character.toLowerCase() === 'colorless';

  // Extract slot index from shopKey (e.g., "shop-class-2" -> 2)
  const slotIndex = parseInt(shopKey.split('-').pop());

  if (isColorless) {
    delete shopColorlessCards[slotIndex];
  } else {
    delete shopCards[slotIndex];
  }

  // Clear upgrade/enchant state for THIS card only
  upgradedCards.delete(shopKey);
  cardEnchantments.delete(shopKey);

  // Hide preview immediately
  hideCardPreview();

  // Update UI
  renderShopGrid();
  renderDeckCardList();
  analyzeDeckStats();
  analyzeBossReadiness();
  saveDeckState();

  // Focus back to input
  const input = document.getElementById('shop-input');
  if (input) {
    input.focus();
  }

  showToast(`Purchased ${cardName}`, 'success', 1500);
}

function purchaseShopRelic(relicName, shopSlotIndex) {
  // Add relic to collection (avoid duplicates)
  if (!currentRelics.includes(relicName)) {
    currentRelics.push(relicName);
  }

  // Remove ONLY this relic from shop (delete the slot, leaving it empty)
  // Find which slot has this relic
  for (let i = 0; i < 3; i++) {
    if (shopRelics[i] === relicName) {
      delete shopRelics[i];
      break;
    }
  }

  // Hide preview immediately
  hideCardPreview();

  // Update UI
  renderShopGrid();
  renderRelicList();
  analyzeDeckStats();
  analyzeBossReadiness();
  saveDeckState();

  // Focus back to input
  const input = document.getElementById('shop-input');
  if (input) {
    input.focus();
  }

  showToast(`Purchased ${relicName}`, 'success', 1500);
}

function purchaseShopRemoval() {
  if (currentDeck.length === 0) {
    showToast('No cards in deck to remove', 'warning', 2000);
    return;
  }

  // Use new duplicate-aware removal priority (#4)
  const scored = getRemovalPriorityWithDuplicates();
  if (scored.length === 0) {
    showToast('No cards to remove', 'warning', 2000);
    return;
  }

  const worst = scored[0];
  const indexToRemove = currentDeck.indexOf(worst.cardName);
  const removedName = worst.cardName;
  const removedIndex = indexToRemove;

  // Remove from deck
  currentDeck.splice(removedIndex, 1);
  invalidateMCBaseline();

  // Remove associated upgrade/enchant state
  upgradedCards.delete(`${removedIndex}-${removedName}`);
  cardEnchantments.delete(`${removedIndex}-${removedName}`);

  // Re-index remaining cards
  const newUpgrades = new Set();
  const newEnchants = new Map();

  currentDeck.forEach((name, newIndex) => {
    const oldKey = `${newIndex >= removedIndex ? newIndex + 1 : newIndex}-${name}`;
    const newKey = `${newIndex}-${name}`;

    if (upgradedCards.has(oldKey)) {
      newUpgrades.add(newKey);
    }
    if (cardEnchantments.has(oldKey)) {
      newEnchants.set(newKey, cardEnchantments.get(oldKey));
    }
  });

  upgradedCards = newUpgrades;
  cardEnchantments = newEnchants;

  // Increment removal count
  shopRemovalCount++;

  // Update UI
  renderDeckCardList();
  renderShopGrid();
  analyzeDeckStats();
  analyzeBossReadiness();
  saveDeckState();

  // Focus back to input
  const input = document.getElementById('shop-input');
  if (input) {
    input.value = '';
    input.focus();
  }

  showToast(`Removed ${removedName} from deck`, 'success', 2000);
}

function renderShopGrid() {
  const SHOP_THRESHOLD = 55; // Below this = bad purchase

  // Render class cards
  const classSlots = document.getElementById('shop-class-slots');
  if (classSlots) {
    classSlots.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const cardName = shopCards[i];
      if (cardName) {
        const card = findCard(cardName);
        const icon = card ? (TYPE_ICONS[card.type] || '📄') : '📄';

        const shopKey = `shop-class-${i}`;
        const isUpgraded = upgradedCards.has(shopKey);
        const enchantment = cardEnchantments.get(shopKey);

        // Score the card for shop context
        const baseScore = scoreCard(cardName);
        let shopScore = baseScore.score - 5; // Gold cost penalty

        // Context-aware upgrade scoring
        if (isUpgraded) {
          shopScore += calculateUpgradeValue(card, cardName);
        }

        // Context-aware enchantment scoring
        if (enchantment) {
          shopScore += calculateEnchantmentValue(card, cardName, enchantment);
        }

        const isBad = shopScore < SHOP_THRESHOLD;
        const badOverlay = isBad ? '<div class="shop-bad-overlay">✗</div>' : '';

        classSlots.innerHTML += `
          <div class="shop-slot ${isBad ? 'bad-purchase' : ''} ${isUpgraded ? 'upgraded' : ''} ${enchantment ? 'enchanted' : ''}"
               data-card="${cardName}"
               data-score="${shopScore}"
               data-upgraded="${isUpgraded}"
               data-enchant="${enchantment || ''}"
               onclick="purchaseShopCard('${cardName.replace(/'/g, "\\'")}', '${shopKey}')"
               onmouseenter="showShopItemAnalysisWithMC(event, '${cardName.replace(/'/g, "\\'")}', 'card', ${shopScore}, ${isUpgraded}, '${enchantment || ''}')"
               onmouseleave="hideCardPreview()"
               style="cursor: pointer;"
               title="Click to purchase and add to deck">
            ${badOverlay}
            <div class="shop-slot-content">
              <div class="shop-slot-name">${icon} ${cardName}${isUpgraded ? '+' : ''}${enchantment ? ' ' + ENCHANTMENTS[enchantment].icon : ''}</div>
              <div class="shop-slot-type">${card?.type || 'Card'} • ${shopScore}</div>
            </div>
            <div class="shop-slot-actions">
              <button class="shop-slot-action-btn ${isUpgraded ? 'active' : ''}" onclick="event.stopPropagation(); toggleShopCardUpgrade('${shopKey}', '${cardName.replace(/'/g, "\\'")}', 'class', ${i})" title="Toggle upgrade">
                ${isUpgraded ? '✓' : '+'}
              </button>
              <button class="shop-slot-action-btn ${enchantment ? 'active' : ''}" onclick="event.stopPropagation(); showShopEnchantMenu('${shopKey}', '${cardName.replace(/'/g, "\\'")}', 'class', ${i}, event)" title="Add enchantment">
                ✨
              </button>
            </div>
            <button class="shop-slot-remove" onclick="event.stopPropagation(); removeShopItem('${cardName.replace(/'/g, "\\'")}', 'class')">×</button>
          </div>
        `;
      } else {
        classSlots.innerHTML += `<div class="shop-slot empty">Slot ${i + 1}</div>`;
      }
    }
  }

  // Render colorless cards
  const colorlessSlots = document.getElementById('shop-colorless-slots');
  if (colorlessSlots) {
    colorlessSlots.innerHTML = '';
    for (let i = 0; i < 2; i++) {
      const cardName = shopColorlessCards[i];
      if (cardName) {
        const card = findCard(cardName);
        const icon = card ? (TYPE_ICONS[card.type] || '📄') : '📄';

        const shopKey = `shop-colorless-${i}`;
        const isUpgraded = upgradedCards.has(shopKey);
        const enchantment = cardEnchantments.get(shopKey);

        const baseScore = scoreCard(cardName);
        let shopScore = baseScore.score - 5;

        // Context-aware upgrade scoring
        if (isUpgraded) {
          shopScore += calculateUpgradeValue(card, cardName);
        }

        // Context-aware enchantment scoring
        if (enchantment) {
          shopScore += calculateEnchantmentValue(card, cardName, enchantment);
        }

        const isBad = shopScore < SHOP_THRESHOLD;
        const badOverlay = isBad ? '<div class="shop-bad-overlay">✗</div>' : '';

        colorlessSlots.innerHTML += `
          <div class="shop-slot ${isBad ? 'bad-purchase' : ''} ${isUpgraded ? 'upgraded' : ''} ${enchantment ? 'enchanted' : ''}"
               data-card="${cardName}"
               data-score="${shopScore}"
               data-upgraded="${isUpgraded}"
               data-enchant="${enchantment || ''}"
               onclick="purchaseShopCard('${cardName.replace(/'/g, "\\'")}', '${shopKey}')"
               onmouseenter="showShopItemAnalysisWithMC(event, '${cardName.replace(/'/g, "\\'")}', 'card', ${shopScore}, ${isUpgraded}, '${enchantment || ''}')"
               onmouseleave="hideCardPreview()"
               style="cursor: pointer;"
               title="Click to purchase and add to deck">
            ${badOverlay}
            <div class="shop-slot-content">
              <div class="shop-slot-name">${icon} ${cardName}${isUpgraded ? '+' : ''}${enchantment ? ' ' + ENCHANTMENTS[enchantment].icon : ''}</div>
              <div class="shop-slot-type">Colorless • ${shopScore}</div>
            </div>
            <div class="shop-slot-actions">
              <button class="shop-slot-action-btn ${isUpgraded ? 'active' : ''}" onclick="event.stopPropagation(); toggleShopCardUpgrade('${shopKey}', '${cardName.replace(/'/g, "\\'")}', 'colorless', ${i})" title="Toggle upgrade">
                ${isUpgraded ? '✓' : '+'}
              </button>
              <button class="shop-slot-action-btn ${enchantment ? 'active' : ''}" onclick="event.stopPropagation(); showShopEnchantMenu('${shopKey}', '${cardName.replace(/'/g, "\\'")}', 'colorless', ${i}, event)" title="Add enchantment">
                ✨
              </button>
            </div>
            <button class="shop-slot-remove" onclick="event.stopPropagation(); removeShopItem('${cardName.replace(/'/g, "\\'")}', 'colorless')">×</button>
          </div>
        `;
      } else {
        colorlessSlots.innerHTML += `<div class="shop-slot empty">Slot ${i + 1}</div>`;
      }
    }
  }

  // Render relics
  const relicSlots = document.getElementById('shop-relic-slots');
  if (relicSlots) {
    relicSlots.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const relicName = shopRelics[i];
      if (relicName) {
        // Context-aware relic scoring with MC validation
        const relic = RELICS[relicName];
        const relicResult = scoreRelic(relicName, { validateWithMC: true });
        const relicScore = relicResult.score;
        const analyzed = relicResult.analyzed;
        const mcImpact = relicResult.mcImpact;
        const isBad = relicScore < 55;

        const tooltip = analyzed
          ? "Click to purchase and add to relics"
          : "⚠️ Generic score - relic not context-analyzed. Click to add anyway.";

        const genericWarning = !analyzed ? '<span style="font-size: 0.7rem; color: #fbbf24;">⚠️</span>' : '';

        // Build MC impact display
        let mcImpactHTML = '';
        if (mcImpact) {
          const impactRounded = Math.round(mcImpact.impact);
          const baselineRounded = Math.round(mcImpact.baselineWR);
          const withRelicRounded = Math.round(mcImpact.withRelicWR);

          let impactColor = '#64748b'; // Neutral gray
          let impactIcon = '';
          if (impactRounded >= 5) {
            impactColor = '#10b981'; // Green
            impactIcon = '✓';
          } else if (impactRounded <= -3) {
            impactColor = '#ef4444'; // Red
            impactIcon = '⚠️';
          }

          mcImpactHTML = `
            <div style="margin-top: 4px; padding: 4px 6px; background: rgba(0,0,0,0.2); border-radius: 4px; font-size: 0.75rem; color: ${impactColor};">
              ${impactIcon} MC: ${impactRounded >= 0 ? '+' : ''}${impactRounded}% (${baselineRounded}% → ${withRelicRounded}%)
            </div>
          `;
        }

        relicSlots.innerHTML += `
          <div class="shop-slot ${isBad ? 'bad-purchase' : ''} ${!analyzed ? 'generic-score' : ''}"
               data-relic="${relicName}"
               data-score="${relicScore}"
               data-mc-impact="${mcImpact ? Math.round(mcImpact.impact) : 0}"
               onclick="purchaseShopRelic('${relicName.replace(/'/g, "\\'")}')"
               onmouseenter="showShopItemAnalysis(event, '${relicName.replace(/'/g, "\\'")}', 'relic', ${relicScore}, ${analyzed}, ${mcImpact ? mcImpact.impact : 0})"
               onmouseleave="hideCardPreview()"
               style="cursor: pointer;"
               title="${tooltip}">
            ${isBad ? '<div class="shop-bad-overlay">✗</div>' : ''}
            <div class="shop-slot-content">
              <div class="shop-slot-name">🏺 ${relicName} ${genericWarning}</div>
              <div class="shop-slot-type">Relic • ${relicScore}</div>
              ${mcImpactHTML}
            </div>
            <button class="shop-slot-remove" onclick="event.stopPropagation(); removeShopItem('${relicName.replace(/'/g, "\\'")}', 'relic')">×</button>
          </div>
        `;
      } else {
        relicSlots.innerHTML += `<div class="shop-slot empty">Slot ${i + 1}</div>`;
      }
    }
  }

  // Always add removal button (even if no cards/relics in shop)
  if (relicSlots && currentDeck.length > 0) {
    const removalCost = 75 + (shopRemovalCount * 25);
    relicSlots.innerHTML += `
      <div class="shop-slot"
           onclick="purchaseShopRemoval()"
           onmouseenter="showRemovalPreview(event)"
           onmouseleave="hideCardPreview()"
           style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; cursor: pointer; border: 2px solid var(--border-color); border-radius: 8px; padding: 12px; background: var(--bg-primary); transition: all 0.2s; position: relative;"
           title="Click to remove worst card">
        <span style="font-size: 2rem; pointer-events: none;">🗑️</span>
        <span style="font-size: 0.9rem; font-weight: 600; pointer-events: none;">Card Removal</span>
        <span style="font-size: 0.75rem; color: var(--text-secondary); pointer-events: none;">${removalCost}G</span>
      </div>
    `;
  }
}

// Old render functions removed - now using renderShopGrid()

function toggleShopCardUpgrade(shopKey, cardName, slotType, index) {
  if (upgradedCards.has(shopKey)) {
    upgradedCards.delete(shopKey);
  } else {
    upgradedCards.add(shopKey);
  }
  renderShopGrid();
  // Don't save - shop state is temporary
}

function showShopEnchantMenu(shopKey, cardName, slotType, index, event) {
  event.stopPropagation();

  const currentEnchant = cardEnchantments.get(shopKey);

  const menu = document.createElement('div');
  menu.className = 'enchant-menu';
  menu.style.cssText = `
    position: fixed;
    z-index: 10000;
    background: var(--bg-tertiary);
    border: 2px solid var(--accent);
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;

  menu.innerHTML = Object.entries(ENCHANTMENTS).map(([key, ench]) => `
    <button
      class="enchant-option ${currentEnchant === key ? 'selected' : ''}"
      onclick="setShopCardEnchantment('${shopKey}', '${cardName}', '${key}', '${slotType}', ${index}); this.parentElement.remove();"
      style="display: block; width: 100%; padding: 6px 12px; margin: 2px 0; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer; text-align: left; color: var(--text-primary);"
    >
      ${ench.icon} ${key} <span style="font-size: 0.75rem; color: var(--text-secondary);">${ench.effect}</span>
    </button>
  `).join('') + `
    <button
      class="enchant-option"
      onclick="setShopCardEnchantment('${shopKey}', '${cardName}', null, '${slotType}', ${index}); this.parentElement.remove();"
      style="display: block; width: 100%; padding: 6px 12px; margin: 2px 0; background: var(--bg-secondary); border: 1px solid var(--error); border-radius: 4px; cursor: pointer; text-align: left; color: var(--error);"
    >
      🚫 Remove Enchantment
    </button>
  `;

  const rect = event.target.getBoundingClientRect();
  menu.style.left = rect.right + 'px';
  menu.style.top = rect.top + 'px';

  document.body.appendChild(menu);

  const closeMenu = (e) => {
    if (!menu.contains(e.target)) {
      menu.remove();
      document.removeEventListener('click', closeMenu);
    }
  };
  setTimeout(() => document.addEventListener('click', closeMenu), 10);
}

function setShopCardEnchantment(shopKey, cardName, enchantment, slotType, index) {
  const currentEnchant = cardEnchantments.get(shopKey);

  if (enchantment && currentEnchant === enchantment) {
    cardEnchantments.delete(shopKey);
  } else if (enchantment) {
    cardEnchantments.set(shopKey, enchantment);
  } else {
    cardEnchantments.delete(shopKey);
  }

  renderShopGrid();
  // Don't save - shop state is temporary
}

function clearShopUpgradeEnchantState() {
  // Remove all shop-related upgrade/enchant keys (don't persist to deck)
  const shopUpgradeKeys = [];
  upgradedCards.forEach(key => {
    if (key.startsWith('shop-')) {
      shopUpgradeKeys.push(key);
    }
  });
  shopUpgradeKeys.forEach(key => upgradedCards.delete(key));

  // Clear shop enchantments
  const shopEnchantKeys = [];
  cardEnchantments.forEach((value, key) => {
    if (key.startsWith('shop-')) {
      shopEnchantKeys.push(key);
    }
  });
  shopEnchantKeys.forEach(key => cardEnchantments.delete(key));
}

function clearShopCards() {
  // Clear all shop slots
  shopCards = {};
  shopColorlessCards = {};
  shopRelics = {};
  shopRemovalSelected = false;

  // Clear upgrade/enchant state
  clearShopUpgradeEnchantState();

  // Re-render the shop grid
  renderShopGrid();

  // Clear results
  document.getElementById('shop-results').innerHTML = '';

  showToast('Shop cleared', 'success', 1500);
}

function scoreRelic(relicName, options = {}) {
  const relic = findRelic(relicName);
  if (!relic) return { score: 50, analyzed: false, mcImpact: null };

  let score = 60; // Base relic score
  let analyzed = false;
  let mcImpact = null;

  const deckCtx = getDeckContext();
  const enemyCtx = getEnemyContext();
  const name = relicName.toLowerCase();
  const desc = (relic.description || '').toLowerCase();

  // Monte Carlo validation if requested (for shop context)
  if (options.validateWithMC && currentDeck.length > 0) {
    // Temporarily add relic and check win rate impact
    const hadRelic = currentRelics.includes(relicName);
    if (!hadRelic) {
      // Store original baseline
      const originalBaselineWR = mcBaselineWinRate;
      if (originalBaselineWR === null) {
        // Calculate baseline if not already cached
        const baselineResult = performMCRollout({ name: '__BASELINE__' }, Math.min(mcSimulations, 100));
        mcBaselineWinRate = baselineResult.winRate;
      }

      // Add relic temporarily and test
      currentRelics.push(relicName);
      const withRelicResult = performMCRollout({ name: '__BASELINE__' }, Math.min(mcSimulations, 100));
      currentRelics.pop();

      const impact = withRelicResult.winRate - mcBaselineWinRate;
      mcImpact = {
        impact: impact,
        baselineWR: mcBaselineWinRate,
        withRelicWR: withRelicResult.winRate
      };

      // Adjust score based on MC impact
      if (impact >= 10) {
        score += 25;
        analyzed = true;
      } else if (impact >= 5) {
        score += 15;
        analyzed = true;
      } else if (impact >= 2) {
        score += 8;
        analyzed = true;
      } else if (impact < -5) {
        score -= 20;
        analyzed = true;
      } else if (impact < -2) {
        score -= 10;
        analyzed = true;
      }
    }
  }

  // === ENERGY RELICS (always premium) ===
  if (desc.includes('energy')) {
    score += 30;
    analyzed = true;

    // Energy more valuable with high-cost deck
    if (deckCtx.avgCost >= 1.5) {
      score += 10;
    }

    // Energy critical with powers
    if (deckCtx.powers >= 3) {
      score += 8;
    }

    return { score: Math.max(0, score), analyzed };
  }

  // === ACT-BASED SCORING ===

  // Early game relics (Act 1)
  if (currentAct === 1) {
    if (desc.includes('card draw') || desc.includes('draw card')) {
      score += 20; // Build consistency early
      analyzed = true;
    }
    if (desc.includes('gain') && (desc.includes('strength') || desc.includes('dexterity'))) {
      score += 15; // Snowball early
      analyzed = true;
    }
  }

  // Scaling relics (Act 2+)
  if (currentAct >= 2) {
    if (desc.includes('permanent') || desc.includes('whenever') || desc.includes('each combat')) {
      score += 12; // Scaling matters more later
      analyzed = true;
    }
  }

  // Boss-fight relics (Act 3)
  if (currentAct === 3) {
    if (desc.includes('boss') || desc.includes('elite') || name.includes('champion')) {
      score += 18; // Critical for endgame
      analyzed = true;
    }
  }

  // === DECK SYNERGY ===

  // Attack-heavy deck
  if (deckCtx.attacks > deckCtx.skills * 1.5) {
    if (name.includes('strength') || name.includes('damage') || desc.includes('attack damage')) {
      score += 20;
      analyzed = true;
    }
    if (name.includes('kunai') || name.includes('shuriken') || name.includes('pen nib')) {
      score += 15; // Attack-trigger relics
      analyzed = true;
    }
  }

  // Skill-heavy deck
  if (deckCtx.skills > deckCtx.attacks * 1.5) {
    if (name.includes('dexterity') || name.includes('block') || desc.includes('block')) {
      score += 20;
      analyzed = true;
    }
    if (name.includes('ornamental fan') || name.includes('thread and needle')) {
      score += 15; // Skill-trigger relics
      analyzed = true;
    }
  }

  // Power-heavy deck (needs energy)
  if (deckCtx.powers >= 4) {
    if (desc.includes('retain') || name.includes('runic pyramid')) {
      score -= 15; // Pyramid clogs hand with powers
      analyzed = true;
    }
    if (desc.includes('energy')) {
      score += 25; // Already handled above, but emphasize
      analyzed = true;
    }
  }

  // === ARCHETYPE SYNERGY ===

  // Poison deck
  if (detectedArchetypes.has('Poison') && detectedArchetypes.get('Poison') >= 5) {
    if (name.includes('toxic') || name.includes('poison') || name.includes('catalyst')) {
      score += 25;
      analyzed = true;
    }
  }

  // Shiv deck
  if (detectedArchetypes.has('Shiv') && detectedArchetypes.get('Shiv') >= 5) {
    if (name.includes('kunai') || name.includes('shuriken') || name.includes('after image')) {
      score += 25;
      analyzed = true;
    }
    if (name.includes('tingsha') || name.includes('dead branch')) {
      score += 20;
      analyzed = true;
    }
  }

  // Strength deck
  if (detectedArchetypes.has('Strength') && detectedArchetypes.get('Strength') >= 5) {
    if (name.includes('vajra') || name.includes('girya') || name.includes('limit break')) {
      score += 25;
      analyzed = true;
    }
  }

  // Block deck
  if (detectedArchetypes.has('Block') && detectedArchetypes.get('Block') >= 5) {
    if (name.includes('calipers') || name.includes('barricade') || desc.includes('block is not lost')) {
      score += 25;
      analyzed = true;
    }
  }

  // Discard deck
  if (detectedArchetypes.has('Discard') && detectedArchetypes.get('Discard') >= 5) {
    if (name.includes('tough bandages') || name.includes('tingsha') || name.includes('gambling chip')) {
      score += 25;
      analyzed = true;
    }
  }

  // Exhaust deck
  if (detectedArchetypes.has('Exhaust') && detectedArchetypes.get('Exhaust') >= 5) {
    if (name.includes('dead branch') || name.includes('feel no pain') || name.includes('dark embrace')) {
      score += 25;
      analyzed = true;
    }
  }

  // === DECK SIZE CONSIDERATIONS ===

  // Small deck (<15 cards) - consistency relics less valuable
  if (deckCtx.deckSize < 15) {
    if (desc.includes('draw') || desc.includes('scry')) {
      score -= 8; // Already consistent
      analyzed = true;
    }
    if (desc.includes('whenever') || desc.includes('when you play')) {
      score += 12; // Trigger more often
      analyzed = true;
    }
  }

  // Large deck (>25 cards) - draw/scry critical
  if (deckCtx.deckSize > 25) {
    if (desc.includes('draw') || desc.includes('scry')) {
      score += 18; // Need consistency
      analyzed = true;
    }
    if (name.includes('snecko eye') || name.includes('runic pyramid')) {
      score += 15; // Help with bloat
      analyzed = true;
    }
  }

  // === COST CURVE CONSIDERATIONS ===

  // High-cost deck (avg >= 1.5) needs energy
  if (deckCtx.avgCost >= 1.5) {
    if (desc.includes('energy') || name.includes('mana')) {
      score += 20;
      analyzed = true;
    }
    if (name.includes('snecko eye')) {
      score += 20; // Randomizes costs
      analyzed = true;
    }
  }

  // Low-cost deck (avg < 0.8) - energy less critical
  if (deckCtx.avgCost < 0.8) {
    if (desc.includes('energy')) {
      score -= 5; // Still good but less critical
      analyzed = true;
    }
  }

  // 0-cost heavy deck
  const zeroCostCount = currentDeck.filter(c => {
    const card = findCard(c);
    return card && card.cost === 0;
  }).length;

  if (zeroCostCount >= 5) {
    if (name.includes('mummified hand') || name.includes('strange spoon')) {
      score += 20; // Excellent with 0-cost
      analyzed = true;
    }
  }

  // === DRAW & CARD MANIPULATION ===

  if (desc.includes('draw')) {
    if (!deckCtx.hasDrawEngine) {
      score += 25; // Critical if no draw
      analyzed = true;
    } else {
      score += 10; // Still good
      analyzed = true;
    }
  }

  // === HEALING & SUSTAIN ===

  if (desc.includes('heal') || desc.includes('hp') || desc.includes('rest')) {
    if (currentAscension >= 15) {
      score += 15; // More valuable at high ascension
      analyzed = true;
    } else if (currentAct === 3) {
      score += 12; // Sustain for endgame
      analyzed = true;
    } else {
      score += 8;
      analyzed = true;
    }
  }

  // === COMBAT TRIGGER RELICS ===

  if (desc.includes('whenever') || desc.includes('when you')) {
    if (deckCtx.deckSize < 20) {
      score += 15; // Better in thin decks
      analyzed = true;
    } else {
      score += 5;
      analyzed = true;
    }
  }

  // === RELIC ANTI-SYNERGIES ===

  // Runic Pyramid + high-cost deck = hand clog
  if (name.includes('runic pyramid')) {
    if (deckCtx.avgCost >= 1.8) {
      score -= 20;
      analyzed = true;
    }
    if (deckCtx.powers >= 4) {
      score -= 15; // Powers clog retained hand
      analyzed = true;
    }
  }

  // Snecko Eye + low-cost deck = less valuable
  if (name.includes('snecko')) {
    if (deckCtx.avgCost < 1.0) {
      score -= 15; // Randomizing cheap costs is bad
      analyzed = true;
    }
    if (deckCtx.avgCost >= 2.0) {
      score += 25; // Randomizing expensive costs is great
      analyzed = true;
    }
  }

  // Dead Branch without exhaust
  if (name.includes('dead branch')) {
    const exhaustCount = currentDeck.filter(c => {
      const card = findCard(c);
      return card?.keywords && (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
        .some(k => k.toLowerCase().includes('exhaust'));
    }).length;

    if (exhaustCount >= 5) {
      score += 30; // Insane with exhaust
      analyzed = true;
    } else if (exhaustCount === 0) {
      score -= 10; // Mediocre without exhaust
      analyzed = true;
    }
  }

  // If no specific analysis was done, mark as generic
  if (!analyzed) {
    score = 55; // Slightly above base for "probably useful"
  }

  return { score: Math.max(0, score), analyzed, mcImpact };
}

function calculateUpgradeValue(card, cardName) {
  if (!card) return 5;

  let upgradeBonus = 0;

  // Power cards: upgrades often reduce cost or add significant scaling
  if (card.type === 'Power') {
    upgradeBonus += 20; // Powers benefit heavily from upgrades (cost reduction is huge)
  }
  // Attack cards: usually +3-5 damage
  else if (card.type === 'Attack') {
    const hits = (card.keywords && Array.isArray(card.keywords) && card.keywords.includes('Multihit')) ? 3 : 1;
    upgradeBonus += 8 * hits; // Multi-hit attacks benefit more
  }
  // Skill cards: usually +2-3 block or cost reduction
  else if (card.type === 'Skill') {
    if (card.cost && card.cost >= 2) {
      upgradeBonus += 15; // Expensive skills often get cost reduction
    } else {
      upgradeBonus += 10; // Block/effect increase
    }
  }

  // High-cost cards benefit more from upgrades (often cost reduction)
  if (card.cost && card.cost >= 3) {
    upgradeBonus += 8;
  }

  // Early act: cost reduction upgrades are more valuable
  if (currentAct === 1 && card.cost && card.cost >= 2) {
    upgradeBonus += 5;
  }

  return upgradeBonus;
}

function calculateEnchantmentValue(card, cardName, enchantment) {
  if (!card || !enchantment || !ENCHANTMENTS[enchantment]) return 0;

  let enchantBonus = 0;

  switch(enchantment) {
    case 'Sharp': // +3 damage
      if (card.type === 'Attack') {
        const hits = (card.keywords && Array.isArray(card.keywords) && card.keywords.includes('Multihit')) ? 3 : 1;
        enchantBonus = 8 * hits; // Worth more on multi-hit
      } else {
        enchantBonus = 2; // Wasted on non-attacks
      }
      break;

    case 'Nimble': // -1 cost
      if (card.cost && card.cost >= 2) {
        enchantBonus = 18; // Cost reduction is huge
        if (card.type === 'Power') enchantBonus += 7; // Even better on Powers
      } else {
        enchantBonus = 5; // Less valuable on 0-1 cost cards
      }
      break;

    case 'Heavy': // +5 block
      if (card.type === 'Skill') {
        enchantBonus = 12; // Great on block cards
      } else if (card.type === 'Attack') {
        enchantBonus = 8; // Decent on attacks with incidental block
      } else {
        enchantBonus = 3; // Meh on Powers
      }
      break;

    case 'Doublecast': // Play twice
      if (card.type === 'Attack') {
        enchantBonus = 15; // Excellent on attacks
        if (card.cost === 0 || card.cost === 1) enchantBonus += 5; // Better on cheap attacks
      } else if (card.type === 'Skill') {
        enchantBonus = 12; // Good on block/draw
      } else if (card.type === 'Power') {
        enchantBonus = -10; // Terrible on Powers (stacks don't double or break)
      }
      break;

    case 'Free': // 0 cost
      enchantBonus = 25; // Always good
      if (card.type === 'Power') enchantBonus += 10; // Insane on Powers
      if (card.cost && card.cost >= 3) enchantBonus += 8; // Better on expensive cards
      break;

    case 'Pristine': // Retain
      if (card.type === 'Power') {
        enchantBonus = 18; // Great on Powers
      } else if (card.cost && card.cost >= 2) {
        enchantBonus = 12; // Good on expensive cards
      } else {
        enchantBonus = 6; // Okay on cheap cards
      }
      // Better in late acts when you can afford to hold cards
      if (currentAct >= 2) enchantBonus += 4;
      break;

    default:
      enchantBonus = 5;
  }

  // Synergy with deck archetypes
  // Sharp is better in Strength-based or aggressive decks
  if (enchantment === 'Sharp') {
    if (detectedArchetypes.has('Strength') && detectedArchetypes.get('Strength') >= 5) {
      enchantBonus += 5;
    }
    if (detectedArchetypes.has('Aggression') && detectedArchetypes.get('Aggression') >= 5) {
      enchantBonus += 4;
    }
  }

  // Heavy is better in block-focused or defensive decks
  if (enchantment === 'Heavy') {
    if (detectedArchetypes.has('Block') && detectedArchetypes.get('Block') >= 5) {
      enchantBonus += 6;
    }
    if (detectedArchetypes.has('Barricade') && detectedArchetypes.get('Barricade') >= 5) {
      enchantBonus += 8;
    }
  }

  // Doublecast synergy with status effects
  if (enchantment === 'Doublecast') {
    if (detectedArchetypes.has('Poison') && detectedArchetypes.get('Poison') >= 5) {
      enchantBonus += 5;
    }
    if (detectedArchetypes.has('Bleed') && detectedArchetypes.get('Bleed') >= 5) {
      enchantBonus += 5;
    }
  }

  return enchantBonus;
}

function calculateRemovalValue(cardName) {
  // Calculate if this card is worth removing another card to obtain
  // Uses context-aware scoring: compare card's value against worst current deck card
  const card = findCard(cardName);
  if (!card) return 0;

  const deckCtx = getDeckContext();
  const enemyCtx = getEnemyContext();

  // Score the incoming card
  const incomingScore = scoreCard(cardName).score;

  // If deck is empty, any card has max removal value
  if (currentDeck.length === 0) return incomingScore;

  // Find worst card in current deck using removal scoring logic
  let worstRemovalScore = -Infinity;
  currentDeck.forEach((deckCardName, index) => {
    const deckCard = findCard(deckCardName);
    if (!deckCard) return;

    let removalScore = 0;

    // Status/Curse: always worth removing
    if (deckCard.type === 'Status' || deckCard.type === 'Curse') {
      removalScore = 100;
    } else {
      // Score the deck card
      const deckCardScore = scoreCard(deckCardName).score;

      // Low-scoring cards are removal candidates
      if (deckCardScore < 40) removalScore += 40;
      else if (deckCardScore < 50) removalScore += 25;

      // Starter cards
      const isStarter = ['Strike', 'Defend', 'Bash', 'Neutralize', 'Survivor', 'Zap', 'Dualcast'].includes(deckCardName);
      if (isStarter) {
        if (currentAct >= 2) removalScore += 35;
        else if (currentDeck.length > 20) removalScore += 25;
        else if (deckCtx.attacks >= 5 && deckCardName === 'Strike') removalScore += 20;
        else if (deckCtx.skills >= 5 && deckCardName === 'Defend') removalScore += 20;
        else removalScore += 5;
      }

      // High-cost in fast deck
      if (deckCard.cost >= 3 && deckCtx.avgCost < 1.3) {
        removalScore += 15;
      }

      // Bloated deck penalty
      if (currentDeck.length > 25) {
        removalScore += 8;
      }
    }

    if (removalScore > worstRemovalScore) {
      worstRemovalScore = removalScore;
    }
  });

  // Removal value = how much better the incoming card is than the worst card
  // Base value is the incoming card's score
  let value = incomingScore;

  // If deck is bloated (>20 cards), removing ANY card has inherent value
  if (currentDeck.length > 20) {
    value += 15;
  }
  if (currentDeck.length > 25) {
    value += 10; // +25 total
  }

  // If worst card is very removable (high removal score), boost value
  if (worstRemovalScore >= 80) {
    value += 20; // Status/Curse in deck, definitely worth removing
  } else if (worstRemovalScore >= 60) {
    value += 15; // Very weak card
  } else if (worstRemovalScore >= 40) {
    value += 10; // Mediocre card
  }

  // If incoming card has strong archetype synergy, boost value
  if (card.keywords) {
    const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
    keywords.forEach(kw => {
      if (detectedArchetypes.has(kw.toLowerCase())) {
        value += 8;
      }
    });
  }

  return value; // Allow values above 100
}

// ============================================================================
// SHOP SCORING
// ============================================================================

async function analyzeShopCards() {
  const hasAnyShopItems = Object.keys(shopCards).length > 0 || Object.keys(shopColorlessCards).length > 0 || Object.keys(shopRelics).length > 0 || shopRemovalSelected;

  if (!hasAnyShopItems) {
    document.getElementById('shop-results').innerHTML =
      '<div class="empty-state"><div class="empty-icon">🏪</div><h3>No shop items to analyze</h3><p>Add cards, relics, or select removal</p></div>';
    return;
  }

  const totalCards = Object.keys(shopCards).length + Object.keys(shopColorlessCards).length;
  showSkeleton('shop-results', totalCards + Object.keys(shopRelics).length + (shopRemovalSelected ? 1 : 0));

  await new Promise(resolve => setTimeout(resolve, 500));

  // Score class cards
  const scoredClassCards = Object.values(shopCards).map(name => {
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

    shopScore = Math.max(0, shopScore); // Allow scores above 100

    // Detect if card is only worth buying on sale (50% off)
    // If base score without shop penalties would be 60+ but shop score is 45-55, it's a sale candidate
    const scoreWithoutShopPenalties = baseScore.score;
    const isOnlyGoodOnSale = shopScore >= 40 && shopScore < 55 && scoreWithoutShopPenalties >= 60;

    const reasonText = shopReasons
      .filter(r => Math.abs(r.value) >= 5)
      .map(r => `${r.factor} (${r.value > 0 ? '+' : ''}${r.value})`)
      .join(' • ');

    return {
      card: card || { name },
      score: Math.round(shopScore),
      reason: reasonText || 'Standard evaluation',
      breakdown: shopReasons,
      removalValue: removalValue,
      onlyGoodOnSale: isOnlyGoodOnSale
    };
  });

  // Combine all scored items (class cards, colorless cards would go here if implemented)
  const scored = [...scoredClassCards];

  const filtered = filterAndSortCards(scored);

  // Check if SKIP is the best option (shop gold is expensive)
  const SHOP_SKIP_THRESHOLD = 55; // Higher threshold for shop (gold cost matters)
  const bestScore = filtered.length > 0 ? filtered[0].score : 0;
  const shouldSkip = bestScore < SHOP_SKIP_THRESHOLD;

  let html = '';

  // Add explanation about shop vs reward scoring
  html += `
    <div style="margin-bottom: 16px; padding: 12px; background: rgba(59, 130, 246, 0.1); border-left: 3px solid #3b82f6; border-radius: 6px; font-size: 0.9rem;">
      <strong style="color: #60a5fa;">💰 Shop Scoring:</strong> Shop cards score 5-20 points lower than rewards due to gold cost, opportunity cost, and deck dilution.
      A 60-score shop card = 65-80 score reward card.
    </div>
  `;

  if (shouldSkip) {
    // Show SKIP recommendation for shop
    html = `
      <div class="card-result skip-recommendation" style="border: 3px solid #fbbf24; background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05));">
        <div class="card-header">
          <div class="card-name-section">
            <span class="card-icon" style="font-size: 1.8rem;">💰</span>
            <span class="card-name" style="font-size: 1.3rem; color: #fbbf24;">SAVE YOUR GOLD</span>
          </div>
          <span class="card-score" style="background: linear-gradient(135deg, #ca8a04, #eab308); color: #fef3c7; font-size: 1.5rem;">BEST</span>
        </div>
        <div class="card-reason" style="font-size: 1rem; margin-top: 10px;">
          No card justifies the gold cost. Best option: <strong>${filtered[0]?.card.name || 'None'}</strong> (${bestScore}/100).
          Skip to save gold for relics, card removal, or better cards later.
        </div>
        <div style="margin-top: 12px; padding: 12px; background: rgba(251, 191, 36, 0.1); border-radius: 6px; font-size: 0.9rem; color: var(--text-secondary);">
          💡 <strong>Why skip?</strong> Gold is finite. Spending it on mediocre cards means you can't afford:
          <ul style="margin: 8px 0 0 20px; line-height: 1.6;">
            <li>Card removal at shops (often more valuable than adding cards)</li>
            <li>Game-changing relics</li>
            <li>Better cards in later shops</li>
          </ul>
        </div>
      </div>
      <div style="margin: 20px 0; padding: 12px; background: var(--bg-secondary); border-radius: 6px; border-left: 3px solid #64748b;">
        <strong style="color: var(--text-primary);">Shop inventory (not worth buying):</strong>
      </div>
    `;
  }

  html += filtered.map(item => {
    let cardHtml = renderCardResult(item.card, item, true);

    // Add "only good on sale" indicator
    if (item.onlyGoodOnSale) {
      const saleBadge = `<div style="font-size: 0.85rem; color: #f59e0b; margin-top: 6px; padding: 8px; background: rgba(245, 158, 11, 0.1); border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.3);">🏷️ Only worth buying on sale (50% off)</div>`;
      cardHtml = cardHtml.replace('</div>\n  `;', `${saleBadge}</div>\n  \`;`);
    }

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

  if (shouldSkip) {
    showToast('💰 Recommendation: SAVE YOUR GOLD', 'info', 3000);
  } else {
    showToast(`Analyzed ${filtered.length} shop card${filtered.length !== 1 ? 's' : ''}`, 'success', 2000);
  }
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

  // Use context-aware removal scoring
  const deckCtx = getDeckContext();
  const enemyCtx = getEnemyContext();

  const uniqueCards = [...new Set(currentDeck)];
  const scored = uniqueCards.map(name => {
    const card = findCard(name);
    let removalScore = 0;
    let reasons = [];

    // Status/Curse cards are always top priority
    if (card && (card.type === 'Status' || card.type === 'Curse')) {
      removalScore += 100;
      reasons.push('Status/Curse - always remove');

      const count = currentDeck.filter(c => c === name).length;
      return {
        card: card || { name },
        score: Math.round(removalScore),
        reason: reasons.join(' • '),
        count: count
      };
    }

    if (!useHeuristicScoring) {
      // Pure MC mode: score stays 0, will be sorted by MC only
      const count = currentDeck.filter(c => c === name).length;
      return {
        card: card || { name },
        score: 0,
        reason: 'MC evaluation only',
        count: count
      };
    }

    // HEURISTIC MODE: score based on card properties
    // Get the card's value to the deck
    const cardScore = scoreCard(name).score;

    // Cards that score poorly are removal candidates
    if (cardScore < 30) {
      removalScore += deckCtx.deckSize > 20 ? 40 : 25;
      reasons.push('Very low value');
    } else if (cardScore < 45) {
      removalScore += deckCtx.deckSize > 25 ? 30 : 15;
      reasons.push('Low value');
    } else if (cardScore < 60) {
      removalScore += deckCtx.deckSize > 30 ? 20 : 5;
      reasons.push('Mediocre');
    }

    // Starter card removal priority depends on context
    if (name === 'Strike' || name === 'Defend') {
      if (currentAct >= 2) {
        removalScore += 35;
        reasons.push(`Weak in Act ${currentAct}`);
      } else if (deckCtx.deckSize > 15) {
        removalScore += 25;
        reasons.push('Bloating deck');
      } else if (deckCtx.attacks > 8 || deckCtx.skills > 8) {
        removalScore += 20;
        reasons.push('Have better options');
      } else {
        removalScore += 5;
        reasons.push('Still needed');
      }
    }

    // High-cost cards in fast decks
    if (card && card.cost >= 2) {
      if (deckCtx.avgCost < 1.2 && !deckCtx.hasEnergyGeneration) {
        removalScore += 15;
        reasons.push('Too slow for deck');
      } else if (card.cost >= 3 && !deckCtx.hasEnergyGeneration) {
        removalScore += 10;
        reasons.push('Very expensive');
      }
    }

    // Weak damage in damage-focused decks
    if (card && card.type === 'Attack' && deckCtx.attacks > deckCtx.skills) {
      const damage = card.damage || 0;
      if (damage < enemyCtx.normalDamage && currentAct >= 2) {
        removalScore += 15;
        reasons.push("Can't kill efficiently");
      }
    }

    // Weak block in defense-focused decks
    if (card && card.type === 'Skill' && deckCtx.skills > deckCtx.attacks) {
      const block = card.block || 0;
      if (block > 0 && block < enemyCtx.normalDamage * 0.6) {
        removalScore += 12;
        reasons.push("Doesn't block enough");
      }
    }

    // Cards that don't synergize with deck archetypes
    if (card && card.keywords) {
      const keywords = Array.isArray(card.keywords) ? card.keywords : [card.keywords];
      const hasArchetypeSynergy = keywords.some(kw =>
        detectedArchetypes.has(kw.toLowerCase())
      );
      if (detectedArchetypes.size > 0 && !hasArchetypeSynergy) {
        removalScore += 10;
        reasons.push('Off-archetype');
      }
    }

    // Dilution in focused decks
    if (deckCtx.deckSize > 25 && cardScore < 70) {
      removalScore += 8;
      reasons.push('Dilutes consistency');
    }

    // Count duplicates
    const count = currentDeck.filter(c => c === name).length;
    if (count > 3) {
      removalScore += 8;
      reasons.push(`${count} copies`);
    } else if (count > 2) {
      removalScore += 4;
      reasons.push(`${count} copies`);
    }

    removalScore = Math.max(0, removalScore); // Allow scores above 100

    return {
      card: card || { name },
      score: Math.round(removalScore),
      reason: reasons.join(' • ') || 'Consider removing',
      count: count
    };
  });

  // Calculate baseline if not cached
  if (mcBaselineWinRate === null) {
    calculateMCBaseline();
  }

  // MC Validation: Test ALL candidates (or top 10 in heuristic mode)
  const candidatesToTest = useHeuristicScoring ? scored.slice(0, 10) : scored;

  // Test removal impact for each candidate
  for (const candidate of candidatesToTest) {
    // Simulate deck without this card (remove one copy)
    const indexToRemove = currentDeck.indexOf(candidate.card.name);
    if (indexToRemove !== -1) {
      // Temporarily remove card from deck
      const originalDeck = [...currentDeck];
      currentDeck.splice(indexToRemove, 1);

      // Run MC simulation with reduced deck
      const withoutCardResult = performMCRollout({ name: '__BASELINE__' }, Math.min(mcSimulations, 100));
      const winRateAfterRemoval = withoutCardResult.winRate;
      const impact = winRateAfterRemoval - mcBaselineWinRate;

      // Restore original deck
      currentDeck = originalDeck;

      // Flag if removal hurts win rate
      candidate.mcImpact = impact;
      candidate.winRateAfterRemoval = winRateAfterRemoval;

      if (impact < -3) {
        // Removing this card hurts the deck
        candidate.safeToRemove = false;
        candidate.removalWarning = `⚠️ Removing hurts win rate by ${Math.abs(Math.round(impact))}%`;
      } else if (impact > 3) {
        // Removing this card helps!
        candidate.safeToRemove = true;
        candidate.removalBonus = `✓ Removal improves win rate by +${Math.round(impact)}%`;
      } else {
        // Neutral impact
        candidate.safeToRemove = true;
        candidate.removalNote = `Neutral impact (${impact >= 0 ? '+' : ''}${Math.round(impact)}%)`;
      }
    }
  }

  // Sort based on mode
  if (useHeuristicScoring) {
    // Heuristic + MC: sort by heuristic score, MC warnings shown as badges
    scored.sort((a, b) => b.score - a.score);
  } else {
    // Pure MC mode: sort by MC impact only
    scored.sort((a, b) => {
      const aImpact = a.mcImpact !== undefined ? a.mcImpact : -999;
      const bImpact = b.mcImpact !== undefined ? b.mcImpact : -999;
      return bImpact - aImpact; // Higher positive impact (removal helps) = top of list
    });
  }

  const html = scored.map(item => {
    const cardWithCount = { ...item.card, name: `${item.card.name || item.name}${item.count > 1 ? ` (×${item.count})` : ''}` };

    // Add MC validation warning/bonus if available
    let cardHtml = renderCardResult(cardWithCount, item, false);

    // Build MC impact display
    if (item.mcImpact !== undefined) {
      const impactRounded = Math.round(item.mcImpact);
      const baselineRounded = Math.round(mcBaselineWinRate);
      const afterRemovalRounded = Math.round(item.winRateAfterRemoval);

      let badgeColor, badgeBg, badgeIcon, badgeMessage;

      if (impactRounded < -3) {
        // Hurts win rate - red warning
        badgeColor = '#ef4444';
        badgeBg = 'rgba(239, 68, 68, 0.1)';
        badgeIcon = '⚠️';
        badgeMessage = `Removing hurts win rate by ${Math.abs(impactRounded)}%`;
      } else if (impactRounded > 3) {
        // Helps win rate - green bonus
        badgeColor = '#10b981';
        badgeBg = 'rgba(16, 185, 129, 0.1)';
        badgeIcon = '✓';
        badgeMessage = `Removal improves win rate by +${impactRounded}%`;
      } else {
        // Neutral - gray
        badgeColor = '#64748b';
        badgeBg = 'rgba(100, 116, 139, 0.1)';
        badgeIcon = '〰️';
        badgeMessage = `Neutral impact (${impactRounded >= 0 ? '+' : ''}${impactRounded}%)`;
      }

      const mcBadge = `
        <div style="margin-top: 8px; padding: 10px; background: ${badgeBg}; border-left: 3px solid ${badgeColor}; border-radius: 6px;">
          <div style="font-size: 0.9rem; font-weight: 600; color: ${badgeColor}; margin-bottom: 4px;">
            ${badgeIcon} ${badgeMessage}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            MC: <strong>${baselineRounded}%</strong> → <strong style="color: ${badgeColor};">${afterRemovalRounded}%</strong>
            ${impactRounded < -3 ? '<br><small>Keep this card - deck needs it</small>' : ''}
            ${impactRounded > 3 ? '<br><small>Safe to remove - improves deck</small>' : ''}
          </div>
        </div>
      `;

      // Insert before the last closing div tag
      const lastDivIndex = cardHtml.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        cardHtml = cardHtml.substring(0, lastDivIndex) + mcBadge + cardHtml.substring(lastDivIndex);
      }
    }

    return cardHtml;
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

    score = Math.max(0, score); // Allow scores above 100

    return {
      card: card || { name },
      score: Math.round(score),
      reason: reasons.join(' • ') || 'Consider removing'
    };
  });

  const filtered = filterAndSortCards(scored);

  const html = filtered.map(item => {
    const cardIndex = currentDeck.indexOf(item.card.name);
    const cardResult = renderCardResult(item.card, item);
    // Make removal cards clickable
    if (cardIndex !== -1) {
      return cardResult.replace(
        '<div class="card-result"',
        `<div class="card-result" onclick="removeCardFromDeck(${cardIndex})" style="cursor: pointer;" title="Click to remove from deck"`
      );
    }
    return cardResult;
  }).join('');
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
  else if (e.key === '4') switchTab('bosses');

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

// Levenshtein distance for fuzzy typo matching
function levenshteinDistance(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function fuzzyMatch(cardName, query) {
  const name = cardName.toLowerCase();
  const q = query.toLowerCase();

  // Priority 1: Exact prefix match
  if (name.startsWith(q)) return { priority: 1, distance: 0 };

  // Priority 2: Contains match
  if (name.includes(q)) return { priority: 2, distance: 0 };

  // Priority 3: Character sequence match (all chars in order)
  let j = 0;
  for (let i = 0; i < name.length && j < q.length; i++) {
    if (name[i] === q[j]) j++;
  }
  if (j === q.length) return { priority: 3, distance: 0 };

  // Priority 4: Levenshtein distance for typo tolerance
  // Allow up to 2 character differences for queries 5+ chars, 1 for shorter
  const maxDistance = q.length >= 5 ? 2 : 1;
  const distance = levenshteinDistance(q, name);

  if (distance <= maxDistance) {
    return { priority: 4, distance: distance };
  }

  // Check if query is close to any word in the card name
  const words = name.split(/\s+/);
  for (const word of words) {
    const wordDistance = levenshteinDistance(q, word);
    if (wordDistance <= maxDistance) {
      return { priority: 5, distance: wordDistance };
    }
  }

  return null;
}

function initAutocomplete() {

  // Build searchable card list with priority sorting
  // Priority: 1) Current character, 2) Colorless, 3) Other characters (alphabetical)
  autocompleteData = Object.values(CARDS)
    .filter(card => card.name)
    .map(card => ({
      name: card.name,
      type: card.type || '',
      cost: card.cost,
      rarity: card.rarity || '',
      character: card.character || 'unknown',
      icon: TYPE_ICONS[card.type] || '📄'
    }))
    .sort((a, b) => {
      // Priority 1: Current character cards first
      const aIsCurrentChar = a.character === currentCharacter;
      const bIsCurrentChar = b.character === currentCharacter;
      if (aIsCurrentChar && !bIsCurrentChar) return -1;
      if (!aIsCurrentChar && bIsCurrentChar) return 1;

      // Priority 2: Colorless cards second
      const aIsColorless = a.character === 'colorless';
      const bIsColorless = b.character === 'colorless';
      if (aIsColorless && !bIsColorless) return -1;
      if (!aIsColorless && bIsColorless) return 1;

      // Priority 3: Other characters alphabetically by character name
      if (a.character !== b.character) {
        return a.character.localeCompare(b.character);
      }

      // Same priority level: sort by card name
      return a.name.localeCompare(b.name);
    });


  // Setup autocomplete for shop (unified)
  setupUnifiedShopAutocomplete();

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

    // Fuzzy search - exclude already selected cards
    const matches = autocompleteData
      .filter(card => !additionalRewardCards.includes(card.name))
      .map(card => {
        const match = fuzzyMatch(card.name, query);
        return match ? { card, ...match } : null;
      })
      .filter(result => result !== null)
      .sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        if (a.distance !== b.distance) return a.distance - b.distance;
        return a.card.name.localeCompare(b.card.name);
      })
      .slice(0, 20)
      .map(result => result.card);

    if (matches.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    dropdown.innerHTML = matches.map((card, idx) => {
      const characterBadge = card.character !== currentCharacter
        ? `<span style="font-size: 0.7rem; opacity: 0.7;">${card.character}</span>`
        : '';
      const escapedName = card.name.replace(/'/g, "\\'");
      return `
        <div class="autocomplete-item" data-index="${idx}" data-name="${card.name}" onclick="addAdditionalRewardCard('${escapedName}')">
          <span class="autocomplete-item-icon">${card.icon}</span>
          <span class="autocomplete-item-name">${card.name}</span>
          <span class="autocomplete-item-meta">
            <span>${card.cost >= 0 ? card.cost : 'X'}</span>
            ${card.rarity ? `<span>${card.rarity}</span>` : ''}
            ${characterBadge}
          </span>
        </div>
      `;
    }).join('');

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
    analyzeBossReadiness();

    showToast(`Added relic: ${relicName}`, 'success');
  }
}

function removeRelic(relicName) {
  const index = currentRelics.indexOf(relicName);
  if (index > -1) {
    currentRelics.splice(index, 1);
    renderRelicList();
    analyzeDeck();
    analyzeBossReadiness();
    showToast(`Removed relic: ${relicName}`, 'info');
  }
}

function renderRelicList() {
  const container = document.getElementById('relic-pills');
  if (!container) return;

  container.innerHTML = currentRelics.map(relicName => {
    const relic = findRelic(relicName);
    const imageAttr = relic?.image ? `data-relic-image="${relic.image}"` : '';

    return `
      <div class="pill-tag" ${imageAttr} onmouseenter="showRelicPreview(event, '${relicName}')" onmouseleave="hideCardPreview()">
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

function showSuggestionPreview(event, cardName, score, reason, element) {
  const card = findCard(cardName);
  if (!card) return;

  const preview = document.getElementById('card-hover-preview');
  if (!preview) return;

  // Get breakdown from element
  const breakdownData = element.getAttribute('data-suggestion-breakdown');
  const breakdown = breakdownData ? JSON.parse(decodeURIComponent(breakdownData)) : [];

  // Build basic card info
  let displayCost = card.cost !== undefined && card.cost >= 0 ? `${card.cost} Energy` : 'X Energy';
  let displayDamage = card.damage || '';
  let displayBlock = card.block || '';

  const keywords = card.keywords ? (Array.isArray(card.keywords) ? card.keywords.join(', ') : card.keywords) : '';
  const description = card.description || '';

  preview.innerHTML = `
    <div class="card-hover-info">
      <div class="card-hover-header">
        <strong style="font-size: 1.1rem; color: var(--text-primary);">${cardName}</strong>
        <span class="pill" style="font-size: 0.85rem; padding: 4px 10px; background: rgba(16, 185, 129, 0.2); color: #10b981;">Score: ${score}</span>
      </div>
      <div style="display: flex; gap: 12px; margin: 8px 0; font-size: 0.9rem; color: var(--text-secondary);">
        <span>${TYPE_ICONS[card.type] || '📄'} ${card.type}</span>
        <span>⚡ ${displayCost}</span>
        ${displayDamage ? `<span>⚔️ ${displayDamage}</span>` : ''}
        ${displayBlock ? `<span>🛡️ ${displayBlock}</span>` : ''}
      </div>
      ${keywords ? `<div style="font-size: 0.85rem; color: var(--text-secondary); margin: 6px 0;"><em>${keywords}</em></div>` : ''}
      ${description ? `<div style="font-size: 0.85rem; color: var(--text-secondary); margin: 6px 0; padding: 6px; background: rgba(255,255,255,0.05); border-radius: 4px;">${description}</div>` : ''}
      <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-color);">
        <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 6px; color: var(--success);">💡 Why recommended:</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary);">${reason}</div>
      </div>
      ${breakdown.length > 0 ? `
        <div style="margin-top: 8px; font-size: 0.75rem; color: var(--text-secondary);">
          <details>
            <summary style="cursor: pointer; font-weight: 600;">Score breakdown</summary>
            <div style="margin-top: 6px;">
              ${breakdown.slice(0, 5).map(b => `
                <div style="display: flex; justify-content: space-between; padding: 2px 0;">
                  <span>${b.factor}</span>
                  <span style="color: ${b.value >= 0 ? 'var(--success)' : 'var(--error)'};">${b.value >= 0 ? '+' : ''}${b.value}</span>
                </div>
              `).join('')}
            </div>
          </details>
        </div>
      ` : ''}
    </div>
  `;

  preview.classList.add('show');
  positionPreview(preview, event);
}

function showCardPreview(event, cardName, isUpgraded = false, enchantment = '') {
  const card = findCard(cardName);
  if (!card) return;

  const preview = document.getElementById('card-hover-preview');
  if (!preview) return;

  // Calculate quick score for preview including upgrade/enchant bonuses
  const scoreResult = scoreCard(cardName);
  let finalScore = scoreResult.score;

  if (isUpgraded) {
    const upgradeBonus = calculateUpgradeValue(card, cardName);
    finalScore += upgradeBonus;
  }

  if (enchantment) {
    const enchantBonus = calculateEnchantmentValue(card, cardName, enchantment);
    finalScore += enchantBonus;
  }

  finalScore = Math.max(0, finalScore); // Allow scores above 100
  const scoreClass = finalScore >= 70 ? 'score-high' : finalScore >= 40 ? 'score-medium' : 'score-low';

  // Calculate MC removal impact (if baseline exists and card is in deck)
  let removalImpactHtml = '';
  const cardIndex = currentDeck.indexOf(cardName);
  if (mcBaselineWinRate !== null && cardIndex !== -1) {
    // Build cache key with upgrade/enchant status
    const cacheKey = `${cardName}-${isUpgraded ? 'up' : 'no'}-${enchantment || 'none'}`;

    let impact, winRateAfterRemoval;

    // Check cache first
    if (removalScoreCache.has(cacheKey)) {
      const cached = removalScoreCache.get(cacheKey);
      // Verify baseline hasn't changed
      if (cached.baseline === mcBaselineWinRate) {
        impact = cached.impact;
        winRateAfterRemoval = cached.winRateAfter;
      }
    }

    // If not cached or baseline changed, calculate
    if (impact === undefined) {
      // Simulate deck without this card
      const originalDeck = [...currentDeck];
      currentDeck.splice(cardIndex, 1);

      // Run quick MC simulation (limit to 100 sims for hover speed)
      const withoutCardResult = performMCRollout({ name: '__BASELINE__' }, Math.min(mcSimulations, 100));
      winRateAfterRemoval = withoutCardResult.winRate;
      impact = winRateAfterRemoval - mcBaselineWinRate;

      // Restore original deck
      currentDeck = originalDeck;

      // Cache result
      removalScoreCache.set(cacheKey, {
        impact: impact,
        winRateAfter: winRateAfterRemoval,
        baseline: mcBaselineWinRate
      });
    }

    // Round impact first for consistency
    const impactRounded = Math.round(impact);
    // Then calculate display values based on impact
    const baselineRounded = Math.round(mcBaselineWinRate);
    const afterRemovalRounded = baselineRounded + impactRounded; // Ensures math is consistent

    let badgeColor, badgeBg, badgeIcon, badgeMessage;
    if (impactRounded > 3) {
      badgeColor = '#10b981';
      badgeBg = 'rgba(16, 185, 129, 0.1)';
      badgeIcon = '✓';
      badgeMessage = 'Removing improves win rate';
    } else if (impactRounded < -3) {
      badgeColor = '#ef4444';
      badgeBg = 'rgba(239, 68, 68, 0.1)';
      badgeIcon = '⚠️';
      badgeMessage = 'Removing hurts win rate';
    } else {
      badgeColor = '#64748b';
      badgeBg = 'rgba(100, 116, 139, 0.1)';
      badgeIcon = '~';
      badgeMessage = 'Minimal impact';
    }

    removalImpactHtml = `<div style="margin-top: 8px; padding: 8px; background: ${badgeBg}; border-left: 2px solid ${badgeColor}; border-radius: 4px;">
      <strong style="color: ${badgeColor};">${badgeIcon} Removal Impact:</strong>
      <span style="font-size: 0.85rem; color: var(--text-secondary);"> ${baselineRounded}% → ${afterRemovalRounded}% (${impactRounded >= 0 ? '+' : ''}${impactRounded}%)</span>
      <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">${badgeMessage}</div>
    </div>`;
  }

  // Calculate upgrade impact (if not already upgraded and baseline exists)
  let upgradeImpactHtml = '';
  if (!isUpgraded && mcBaselineWinRate !== null && cardIndex !== -1) {
    const upgradeCacheKey = `${cardName}-${cardIndex}`;

    let upgradeImpact, winRateAfterUpgrade;

    // Check cache
    if (upgradeScoreCache.has(upgradeCacheKey)) {
      const cached = upgradeScoreCache.get(upgradeCacheKey);
      if (cached.baseline === mcBaselineWinRate) {
        upgradeImpact = cached.impact;
        winRateAfterUpgrade = cached.winRateAfter;
      }
    }

    // Calculate if not cached
    if (upgradeImpact === undefined) {
      // Temporarily upgrade the card
      const upgradeKey = `${cardIndex}-${cardName}`;
      const wasUpgraded = upgradedCards.has(upgradeKey);
      if (!wasUpgraded) {
        upgradedCards.add(upgradeKey);
      }

      // Run MC simulation with upgraded card
      const withUpgradeResult = performMCRollout({ name: '__BASELINE__' }, Math.min(mcSimulations, 100));
      winRateAfterUpgrade = withUpgradeResult.winRate;
      upgradeImpact = winRateAfterUpgrade - mcBaselineWinRate;

      // Restore original state
      if (!wasUpgraded) {
        upgradedCards.delete(upgradeKey);
      }

      // Cache result
      upgradeScoreCache.set(upgradeCacheKey, {
        impact: upgradeImpact,
        winRateAfter: winRateAfterUpgrade,
        baseline: mcBaselineWinRate
      });
    }

    // Round impact first for consistency
    const upgradeImpactRounded = Math.round(upgradeImpact);
    // Then calculate display values based on impact
    const baselineRounded = Math.round(mcBaselineWinRate);
    const afterUpgradeRounded = baselineRounded + upgradeImpactRounded; // Ensures math is consistent

    let badgeColor, badgeBg, badgeIcon, badgeMessage;
    if (upgradeImpactRounded > 3) {
      badgeColor = '#10b981';
      badgeBg = 'rgba(16, 185, 129, 0.1)';
      badgeIcon = '✓';
      badgeMessage = 'Upgrade improves win rate';
    } else if (upgradeImpactRounded < -3) {
      badgeColor = '#ef4444';
      badgeBg = 'rgba(239, 68, 68, 0.1)';
      badgeIcon = '⚠️';
      badgeMessage = 'Upgrade hurts win rate';
    } else {
      badgeColor = '#64748b';
      badgeBg = 'rgba(100, 116, 139, 0.1)';
      badgeIcon = '~';
      badgeMessage = 'Minimal impact';
    }

    upgradeImpactHtml = `<div style="margin-top: 8px; padding: 8px; background: ${badgeBg}; border-left: 2px solid ${badgeColor}; border-radius: 4px;">
      <strong style="color: ${badgeColor};">${badgeIcon} Upgrade Impact:</strong>
      <span style="font-size: 0.85rem; color: var(--text-secondary);"> ${baselineRounded}% → ${afterUpgradeRounded}% (${upgradeImpactRounded >= 0 ? '+' : ''}${upgradeImpactRounded}%)</span>
      <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">${badgeMessage}</div>
    </div>`;
  }

  // Calculate upgraded stats
  let displayDamage = card.damage;
  let displayBlock = card.block;
  let displayCost = card.cost;

  if (isUpgraded) {
    // Approximate upgrade bonuses (actual values would need card database with upgrade data)
    if (card.damage) displayDamage = Math.ceil(card.damage * 1.4); // ~40% more damage
    if (card.block) displayBlock = Math.ceil(card.block * 1.4); // ~40% more block
    if (card.cost && card.cost >= 2) displayCost = Math.max(0, card.cost - 1); // Often -1 cost
  }

  // Apply enchantment effects
  let enchantDisplay = '';
  if (enchantment && ENCHANTMENTS[enchantment]) {
    enchantDisplay = `<div style="margin-top: 8px; padding: 8px; background: rgba(168, 85, 247, 0.1); border-left: 2px solid #a855f7; border-radius: 4px;">
      <strong style="color: #a855f7;">${ENCHANTMENTS[enchantment].icon} ${enchantment}:</strong>
      <span style="font-size: 0.85rem; color: var(--text-secondary);"> ${ENCHANTMENTS[enchantment].effect}</span>
    </div>`;

    if (enchantment === 'Sharp' && card.damage) displayDamage += 3;
    if (enchantment === 'Nimble' && card.cost && card.cost >= 1) displayCost = Math.max(0, displayCost - 1);
  }

  // Build keywords/archetypes display
  const keywords = card.keywords
    ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
    : [];

  const keywordsHtml = keywords.length > 0
    ? keywords.map(k => `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">${k}</span>`).join('')
    : '';

  const imageHtml = card.image
    ? `<img src="${card.image}" alt="${card.name}" style="width: 100%; height: auto; border-radius: 4px; margin-bottom: 12px;">`
    : '';

  const upgradeIndicator = isUpgraded ? '<span style="color: #f59e0b; font-weight: bold;">+</span>' : '';

  preview.innerHTML = `
    ${imageHtml}
    <div class="card-hover-info">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <strong style="font-size: 1.1rem; color: var(--text-primary);">${card.name}${upgradeIndicator}</strong>
        <span class="card-score ${scoreClass}" style="font-size: 1rem; padding: 4px 10px;">${finalScore}</span>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
        ${displayCost !== undefined ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">Cost: ${displayCost >= 0 ? displayCost : 'X'}</span>` : ''}
        ${card.type ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">${card.type}</span>` : ''}
        ${card.rarity ? `<span class="pill pill-${card.rarity}" style="font-size: 0.75rem; padding: 3px 8px;">${card.rarity}</span>` : ''}
        ${displayDamage ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">Damage: ${displayDamage}</span>` : ''}
        ${displayBlock ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">Block: ${displayBlock}</span>` : ''}
      </div>
      ${keywordsHtml ? `<div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px;">${keywordsHtml}</div>` : ''}
      ${card.description ? `<div style="margin-top: 8px; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${card.description}</div>` : ''}
      ${enchantDisplay}
      ${upgradeImpactHtml}
      ${removalImpactHtml}
    </div>
  `;

  preview.classList.add('show');
  positionPreview(preview, event);
}

function showRelicPreview(event, relicName) {
  const relic = findRelic(relicName);
  if (!relic) return;

  const preview = document.getElementById('card-hover-preview');
  if (!preview) return;

  const imageHtml = relic.image
    ? `<img src="${relic.image}" alt="${relic.name}" style="width: 100%; height: auto; border-radius: 4px; margin-bottom: 12px;">`
    : '';

  preview.innerHTML = `
    ${imageHtml}
    <div class="card-hover-info">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <strong style="font-size: 1.1rem; color: var(--text-primary);">${relic.name}</strong>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
        ${relic.rarity ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">${relic.rarity}</span>` : ''}
        ${relic.character ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">${relic.character}</span>` : ''}
      </div>
      ${relic.description ? `<div style="margin-top: 8px; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${relic.description}</div>` : ''}
    </div>
  `;

  preview.classList.add('show');
  positionPreview(preview, event);
}

// Lazy MC calculation wrapper for shop items
function showShopItemAnalysisWithMC(event, itemName, itemType, shopScore, isUpgraded = false, enchantment = '') {
  // Calculate MC impact on hover (lazy evaluation)
  let mcImpact = 0;

  if (itemType === 'card' && currentDeck.length >= 5) {
    // Calculate baseline if not cached
    if (mcBaselineWinRate === null) {
      try {
        calculateMCBaseline();
      } catch (e) {
        console.error('Failed to calculate MC baseline:', e);
      }
    }

    // Test deck with this card added (only if baseline exists)
    if (mcBaselineWinRate !== null) {
      const card = findCard(itemName);
      if (card) {
        try {
          const withCardResult = performMCRollout(card, Math.min(mcSimulations, 50));
          mcImpact = withCardResult.winRate - mcBaselineWinRate;
        } catch (e) {
          console.error(`Failed to calculate MC for ${itemName}:`, e);
        }
      }
    }
  } else if (itemType === 'card' && currentDeck.length < 5) {
  }

  showShopItemAnalysis(event, itemName, itemType, shopScore, isUpgraded, enchantment, true, mcImpact);
}

function showShopItemAnalysis(event, itemName, itemType, shopScore, isUpgraded = false, enchantment = '', analyzed = true, mcImpact = 0) {
  const preview = document.getElementById('card-hover-preview');
  if (!preview) return;

  if (itemType === 'relic') {
    const relic = findRelic(itemName);
    if (!relic) return;

    const imageHtml = relic.image
      ? `<img src="${relic.image}" alt="${relic.name}" style="width: 100%; height: auto; border-radius: 4px; margin-bottom: 12px;">`
      : '';

    const recommendation = shopScore >= 55 ? '✅ <strong>RECOMMENDED</strong>' : '⚠️ Situational';

    const genericWarning = !analyzed ? `
      <div style="margin-top: 8px; padding: 8px; background: rgba(251, 191, 36, 0.1); border-left: 2px solid #fbbf24; border-radius: 4px;">
        <strong style="color: #fbbf24;">⚠️ Generic Score</strong>
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">
          This relic hasn't been context-analyzed. Score is a rough estimate based on typical usefulness.
        </div>
      </div>
    ` : '';

    // MC Impact display
    let mcImpactHTML = '';
    if (mcImpact && Math.abs(mcImpact) >= 1) {
      const impactRounded = Math.round(mcImpact);
      let impactColor = '#64748b';
      let impactBg = 'rgba(100, 116, 139, 0.1)';
      let impactIcon = '〰️';
      let impactText = 'Neutral impact';

      if (impactRounded >= 5) {
        impactColor = '#10b981';
        impactBg = 'rgba(16, 185, 129, 0.1)';
        impactIcon = '✓';
        impactText = 'Strong win rate boost';
      } else if (impactRounded >= 2) {
        impactColor = '#6ee7b7';
        impactBg = 'rgba(110, 231, 183, 0.1)';
        impactIcon = '✓';
        impactText = 'Moderate win rate boost';
      } else if (impactRounded <= -5) {
        impactColor = '#ef4444';
        impactBg = 'rgba(239, 68, 68, 0.1)';
        impactIcon = '⚠️';
        impactText = 'Hurts win rate significantly';
      } else if (impactRounded <= -2) {
        impactColor = '#fbbf24';
        impactBg = 'rgba(251, 191, 36, 0.1)';
        impactIcon = '⚠️';
        impactText = 'Slightly hurts win rate';
      }

      mcImpactHTML = `
        <div style="margin-top: 8px; padding: 8px; background: ${impactBg}; border-left: 2px solid ${impactColor}; border-radius: 4px;">
          <strong style="color: ${impactColor};">${impactIcon} ${impactText}</strong>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">
            MC validation: ${impactRounded >= 0 ? '+' : ''}${impactRounded}% win rate change
          </div>
        </div>
      `;
    }

    preview.innerHTML = `
      ${imageHtml}
      <div class="card-hover-info">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="font-size: 1.1rem; color: var(--text-primary);">${relic.name}</strong>
          <span class="card-score score-high" style="font-size: 1rem; padding: 4px 10px;">${shopScore}</span>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
          ${relic.rarity ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">${relic.rarity}</span>` : ''}
          <span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">🏺 Relic</span>
        </div>
        ${relic.description ? `<div style="margin-top: 8px; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${relic.description}</div>` : ''}
        ${genericWarning}
        ${mcImpactHTML}
        <div style="margin-top: 12px; padding: 8px; background: var(--bg-secondary); border-radius: 4px;">
          <div style="font-size: 0.9rem;">${recommendation}</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">Shop Purchase Analysis</div>
        </div>
      </div>
    `;
  } else {
    // Card
    const card = findCard(itemName);
    if (!card) return;

    const baseScore = scoreCard(itemName);
    const scoreClass = shopScore >= 70 ? 'score-high' : shopScore >= 55 ? 'score-medium' : 'score-low';

    const keywords = card.keywords
      ? (Array.isArray(card.keywords) ? card.keywords : [card.keywords])
      : [];

    const keywordsHtml = keywords.length > 0
      ? keywords.map(k => `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">${k}</span>`).join('')
      : '';

    const imageHtml = card.image
      ? `<img src="${card.image}" alt="${card.name}" style="width: 100%; height: auto; border-radius: 4px; margin-bottom: 12px;">`
      : '';

    const recommendation = shopScore >= 55
      ? '✅ <strong>RECOMMENDED</strong> - Good shop purchase'
      : '❌ <strong>SKIP</strong> - Not worth gold';

    const upgradePill = isUpgraded ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px; background: #f59e0b; color: white;">Upgraded</span>` : '';
    const enchantPill = enchantment && ENCHANTMENTS[enchantment] ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px; background: #a855f7; color: white;">${ENCHANTMENTS[enchantment].icon} ${enchantment}</span>` : '';

    preview.innerHTML = `
      ${imageHtml}
      <div class="card-hover-info">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="font-size: 1.1rem; color: var(--text-primary);">${card.name}${isUpgraded ? '+' : ''}</strong>
          <span class="card-score ${scoreClass}" style="font-size: 1rem; padding: 4px 10px;">${shopScore}</span>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
          ${card.cost !== undefined ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">Cost: ${card.cost >= 0 ? card.cost : 'X'}</span>` : ''}
          ${card.type ? `<span class="pill" style="font-size: 0.75rem; padding: 3px 8px;">${card.type}</span>` : ''}
          ${card.rarity ? `<span class="pill pill-${card.rarity}" style="font-size: 0.75rem; padding: 3px 8px;">${card.rarity}</span>` : ''}
          ${upgradePill}
          ${enchantPill}
        </div>
        ${keywordsHtml ? `<div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px;">${keywordsHtml}</div>` : ''}
        ${card.description ? `<div style="margin-top: 8px; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${card.description}</div>` : ''}
        ${enchantment && ENCHANTMENTS[enchantment] ? `<div style="margin-top: 8px; padding: 6px; background: rgba(168, 85, 247, 0.1); border: 1px solid #a855f7; border-radius: 4px; font-size: 0.8rem;">${ENCHANTMENTS[enchantment].icon} <strong>${enchantment}:</strong> ${ENCHANTMENTS[enchantment].effect}</div>` : ''}
        ${mcImpact && Math.abs(mcImpact) >= 1 ? `
          <div style="margin-top: 8px; padding: 8px; background: ${mcImpact >= 3 ? 'rgba(16, 185, 129, 0.1)' : mcImpact >= 0 ? 'rgba(100, 116, 139, 0.1)' : mcImpact >= -3 ? 'rgba(251, 191, 36, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border-left: 2px solid ${mcImpact >= 3 ? '#10b981' : mcImpact >= 0 ? '#64748b' : mcImpact >= -3 ? '#fbbf24' : '#ef4444'}; border-radius: 4px;">
            <strong style="color: ${mcImpact >= 3 ? '#10b981' : mcImpact >= 0 ? '#64748b' : mcImpact >= -3 ? '#fbbf24' : '#ef4444'};">${mcImpact >= 3 ? '✓' : mcImpact >= 0 ? '〰️' : '⚠️'} MC: ${Math.round(mcImpact) >= 0 ? '+' : ''}${Math.round(mcImpact)}%</strong>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">
              Win rate: ${Math.round(mcBaselineWinRate)}% → ${Math.round(mcBaselineWinRate + mcImpact)}%
            </div>
          </div>
        ` : ''}
        <div style="margin-top: 12px; padding: 8px; background: var(--bg-secondary); border-radius: 4px;">
          <div style="font-size: 0.9rem;">${recommendation}</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">Base: ${baseScore.score} | Shop: ${shopScore} (-5 gold cost)</div>
        </div>
      </div>
    `;
  }

  preview.classList.add('show');
  positionPreview(preview, event);
}

function showRemovalPreview(event) {
  const preview = document.getElementById('card-hover-preview');
  if (!preview) return;

  if (currentDeck.length === 0) {
    preview.innerHTML = `
      <div class="card-hover-info">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
          <span style="font-size: 2rem;">🗑️</span>
          <strong style="font-size: 1.1rem; color: var(--text-primary);">Card Removal</strong>
        </div>
        <div style="font-size: 0.9rem; color: var(--text-secondary);">
          No cards in deck to remove.
        </div>
      </div>
    `;
    preview.classList.add('show');
    positionPreview(preview, event);
    return;
  }

  // Use MC-based removal priority
  const scored = getRemovalPriorityWithDuplicates();

  // Take top 3-5 candidates
  const topCandidates = scored.slice(0, 5);

  const removalCost = 75 + (shopRemovalCount * 25);

  // Build MC impact display for top candidate (already calculated in getRemovalPriorityWithDuplicates)
  let mcImpactHTML = '';
  if (topCandidates.length > 0 && !topCandidates[0].heuristic) {
    const topCard = topCandidates[0];
    const impactRounded = Math.round(topCard.mcImpact);
    const baselineRounded = Math.round(topCard.baseline);
    const afterRounded = Math.round(topCard.afterRemoval);

    let impactColor = '#64748b';
    let impactIcon = '〰️';
    let impactText = 'Neutral';

    if (impactRounded < -3) {
      impactColor = '#ef4444';
      impactIcon = '⚠️';
      impactText = 'Hurts deck';
    } else if (impactRounded > 3) {
      impactColor = '#10b981';
      impactIcon = '✓';
      impactText = 'Improves deck';
    }

    mcImpactHTML = `
      <div style="margin-top: 8px; padding: 8px; background: rgba(${impactColor === '#ef4444' ? '239, 68, 68' : impactColor === '#10b981' ? '16, 185, 129' : '100, 116, 139'}, 0.1); border-left: 2px solid ${impactColor}; border-radius: 4px;">
        <div style="font-size: 0.8rem; font-weight: 600; color: ${impactColor}; margin-bottom: 2px;">
          ${impactIcon} Removing ${topCard.cardName}: ${impactText} (${impactRounded >= 0 ? '+' : ''}${impactRounded}%)
        </div>
        <div style="font-size: 0.75rem; color: var(--text-secondary);">
          Win rate: ${baselineRounded}% → <strong style="color: ${impactColor};">${afterRounded}%</strong>
        </div>
      </div>
    `;
  }

  preview.innerHTML = `
    <div class="card-hover-info">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 2rem;">🗑️</span>
          <strong style="font-size: 1.1rem; color: var(--text-primary);">Card Removal</strong>
        </div>
        <span class="pill" style="font-size: 0.85rem; padding: 4px 10px; background: var(--error); color: white;">${removalCost}G</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">
        Recommended removals (worst cards in deck):
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        ${topCandidates.map((item, idx) => {
          const card = findCard(item.cardName);
          const icon = card ? (TYPE_ICONS[card.type] || '📄') : '📄';
          const rankColor = idx === 0 ? '#ef4444' : idx === 1 ? '#f59e0b' : '#6b7280';

          // Show MC impact
          const impact = Math.round(item.mcImpact);
          let impactColor = '#64748b';
          let impactText = '';
          if (item.heuristic) {
            impactText = 'Curse/Status';
            impactColor = '#10b981';
          } else if (impact >= 3) {
            impactText = `+${impact}%`;
            impactColor = '#10b981';
          } else if (impact >= 0) {
            impactText = `+${impact}%`;
            impactColor = '#64748b';
          } else if (impact <= -5) {
            impactText = `${impact}%`;
            impactColor = '#ef4444';
          } else {
            impactText = `${impact}%`;
            impactColor = '#fbbf24';
          }

          return `
            <div style="display: flex; align-items: center; gap: 8px; padding: 6px; background: var(--bg-secondary); border-radius: 4px; border-left: 3px solid ${rankColor};">
              <span style="font-weight: 600; color: ${rankColor}; min-width: 16px;">#${idx + 1}</span>
              <span>${icon}</span>
              <span style="font-weight: 500; flex: 1;">${item.cardName}</span>
              <span style="font-size: 0.75rem; font-weight: 600; color: ${impactColor};">${impactText}</span>
            </div>
          `;
        }).join('')}
      </div>
      ${mcImpactHTML}
      <div style="margin-top: 12px; padding: 8px; background: rgba(239, 68, 68, 0.1); border: 1px solid var(--error); border-radius: 4px; font-size: 0.8rem; color: var(--text-secondary);">
        💡 <strong>Tip:</strong> Remove starter cards (Strike/Defend) and low-impact cards to thin your deck.
      </div>
    </div>
  `;

  preview.classList.add('show');
  positionPreview(preview, event);
}

function hideCardPreview() {
  const preview = document.getElementById('card-hover-preview');
  if (preview) preview.classList.remove('show');
}

function positionPreview(preview, event) {
  const target = event.target.closest('.pill-tag, .card-result, .shop-slot');
  if (!target) {
    console.warn('positionPreview: no target found');
    return;
  }

  const rect = target.getBoundingClientRect();
  const previewWidth = 300;
  const previewHeight = 400; // Estimate

  let left = rect.right + 10;
  let top = rect.top;

  // If too far right, show on left side
  if (left + previewWidth > window.innerWidth) {
    left = rect.left - previewWidth - 10;
  }

  // If too far down, adjust up
  if (top + previewHeight > window.innerHeight) {
    top = window.innerHeight - previewHeight - 10;
  }

  preview.style.left = Math.max(10, left) + 'px';
  preview.style.top = Math.max(10, top) + 'px';
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

function calculateArchetypeSynergy(card) {
  if (typeof CARD_SYNERGIES === 'undefined') {
    return { score: 0, reason: '' };
  }

  let totalBonus = 0;
  let synergyReasons = [];

  // Check if this card synergizes with cards already in deck
  currentDeck.forEach(deckCardName => {
    const synergies = CARD_SYNERGIES[deckCardName];
    if (synergies && synergies[card.name]) {
      const bonus = synergies[card.name];
      totalBonus += Math.floor(bonus / 2); // Scale down to not overpower
      synergyReasons.push(`${deckCardName}`);
    }

    // Check reverse synergy
    const cardSynergies = CARD_SYNERGIES[card.name];
    if (cardSynergies && cardSynergies[deckCardName]) {
      const bonus = cardSynergies[deckCardName];
      totalBonus += Math.floor(bonus / 2);
      if (!synergyReasons.includes(deckCardName)) {
        synergyReasons.push(`${deckCardName}`);
      }
    }
  });

  if (totalBonus > 0) {
    const capped = Math.min(totalBonus, 30);
    return {
      score: capped,
      reason: `Combo: ${synergyReasons.slice(0, 2).join(', ')}`
    };
  }

  return { score: 0, reason: '' };
}

function detectMissingPiece(card) {
  if (typeof STS2_ARCHETYPES === 'undefined') {
    return { isMissing: false, bonus: 0, reason: '' };
  }

  let bestMatch = { isMissing: false, bonus: 0, reason: '' };

  // Check each archetype for this character
  Object.entries(STS2_ARCHETYPES).forEach(([archetypeId, archetype]) => {
    if (archetype.character !== currentCharacter) return;

    // Count how many core cards we have
    let coreCardsInDeck = 0;
    let hasCoreCard = false;

    archetype.coreCards.forEach(coreCardName => {
      const count = currentDeck.filter(name =>
        name.toLowerCase() === coreCardName.toLowerCase()
      ).length;
      coreCardsInDeck += count;
    });

    // Check if the card being evaluated is a core card for this archetype
    const isCorCard = archetype.coreCards.some(core =>
      core.toLowerCase() === card.name.toLowerCase()
    );

    // If we have 2+ cards from an archetype but missing a key piece
    if (coreCardsInDeck >= 2 && isCorCard && coreCardsInDeck < 4) {
      const bonus = 20;
      if (bonus > bestMatch.bonus) {
        bestMatch = {
          isMissing: true,
          bonus: bonus,
          reason: `Missing piece: ${archetype.name}`
        };
      }
    }
  });

  return bestMatch;
}

function addAdditionalRewardCard(cardName) {
  // Prevent duplicates
  if (additionalRewardCards.includes(cardName)) {
    showToast(`${cardName} already added`, 'warning', 1500);
    return;
  }

  additionalRewardCards.push(cardName);
  renderAdditionalRewardList();

  // Clear input and refocus
  const input = document.getElementById('additional-reward-input');
  if (input) {
    input.value = '';
    document.getElementById('additional-reward-dropdown').classList.remove('show');
    input.focus();
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
    const imageAttr = card?.image ? `data-card-image="${card.image}"` : '';

    return `
      <div class="pill-tag" ${imageAttr} onmouseenter="showCardPreview(event, '${cardName}')" onmouseleave="hideCardPreview()">
        <span class="pill-tag-icon">${icon}</span>
        <span>${cardName}</span>
        <button class="pill-tag-remove" onclick="removeAdditionalRewardCard('${cardName}')" aria-label="Remove ${cardName}">×</button>
      </div>
    `;
  }).join('');
}

function setupUnifiedShopAutocomplete() {
  const input = document.getElementById('shop-input');
  const dropdown = document.getElementById('shop-unified-dropdown');

  if (!input || !dropdown) return;

  let shopAutocompleteIndex = 0; // Auto-highlight first result

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length === 0) {
      dropdown.classList.remove('show');
      shopAutocompleteIndex = 0;
      return;
    }

    // Search cards (exclude already selected AND check slot availability)
    const cardMatches = autocompleteData.filter(card => {
      // Skip if already selected
      if (Object.values(shopCards).includes(card.name) || Object.values(shopColorlessCards).includes(card.name)) return false;

      // Check if this card type has available slots
      const cardChar = card.character ? card.character.toLowerCase() : '';
      const isColorless = cardChar === 'colorless';
      const isSharedOrEvent = cardChar === 'shared' || cardChar === 'event';

      if (isColorless) {
        if (Object.keys(shopColorlessCards).length >= 2) return false; // No colorless slots available
      } else if (isSharedOrEvent) {
        // Shared/Event cards go in class card slots
        if (Object.keys(shopCards).length >= 5) return false; // No class card slots available
      } else {
        if (Object.keys(shopCards).length >= 5) return false; // No class card slots available
      }

      return card.name.toLowerCase().includes(query);
    })
    .sort((a, b) => {
      // Deprioritize Shared/Event cards to the bottom
      const aChar = a.character ? a.character.toLowerCase() : '';
      const bChar = b.character ? b.character.toLowerCase() : '';
      const aIsSharedOrEvent = aChar === 'shared' || aChar === 'event';
      const bIsSharedOrEvent = bChar === 'shared' || bChar === 'event';

      if (aIsSharedOrEvent && !bIsSharedOrEvent) return 1; // a after b
      if (!aIsSharedOrEvent && bIsSharedOrEvent) return -1; // b after a
      return 0; // maintain original order
    })
    .slice(0, 8);

    // Search relics (exclude already selected AND check slot availability)
    const relicMatches = Object.values(RELICS).filter(relic => {
      if (Object.values(shopRelics).includes(relic.name)) return false;
      if (Object.keys(shopRelics).length >= 3) return false; // No relic slots available
      return relic.name.toLowerCase().includes(query);
    }).slice(0, 5).map(relic => ({ ...relic, _isRelic: true })); // Tag as relic

    const allMatches = [...cardMatches, ...relicMatches];

    if (allMatches.length === 0) {
      dropdown.classList.remove('show');
      shopAutocompleteIndex = 0;
      return;
    }

    // Reset to first item on new results
    shopAutocompleteIndex = 0;

    dropdown.innerHTML = allMatches.map((item, idx) => {
      const isRelic = item._isRelic === true; // Check our tag
      const selectedClass = idx === 0 ? 'selected' : ''; // Auto-highlight first
      const typeClass = isRelic ? 'relic' : 'card';
      return `
        <div class="autocomplete-item ${typeClass} ${selectedClass}" data-name="${item.name}" data-type="${isRelic ? 'relic' : 'card'}" onclick="addShopItem('${item.name.replace(/'/g, "\\'")}', '${isRelic ? 'relic' : 'card'}')">
          ${isRelic ? '🏺' : item.icon || '📄'} ${item.name}
          ${!isRelic && item.character ? `<span style="font-size: 0.7rem; opacity: 0.7; margin-left: 8px;">${item.character}</span>` : ''}
          ${isRelic ? `<span style="font-size: 0.7rem; opacity: 0.7; margin-left: 8px;">relic</span>` : ''}
        </div>
      `;
    }).join('');

    dropdown.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.autocomplete-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      shopAutocompleteIndex = Math.min(shopAutocompleteIndex + 1, items.length - 1);
      items.forEach((item, idx) => {
        item.classList.toggle('selected', idx === shopAutocompleteIndex);
      });
      items[shopAutocompleteIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      shopAutocompleteIndex = Math.max(shopAutocompleteIndex - 1, 0);
      items.forEach((item, idx) => {
        item.classList.toggle('selected', idx === shopAutocompleteIndex);
      });
      items[shopAutocompleteIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items[shopAutocompleteIndex]) {
        const itemName = items[shopAutocompleteIndex].dataset.name;
        const itemType = items[shopAutocompleteIndex].dataset.type;
        addShopItem(itemName, itemType);
      }
    } else if (e.key === 'Escape') {
      dropdown.classList.remove('show');
      shopAutocompleteIndex = 0;
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      dropdown.classList.remove('show');
      shopAutocompleteIndex = 0;
    }, 200);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim().length > 0) {
      input.dispatchEvent(new Event('input'));
    }
  });
}

// Old separate shop autocomplete functions removed - now using unified setupUnifiedShopAutocomplete()

function setupAutocompleteField(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    currentAutocompleteField = { input, dropdown, inputId };
    currentAutocompleteIndex = -1;


    if (query.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    // Fuzzy search
    const matches = autocompleteData
      .map(card => {
        const match = fuzzyMatch(card.name, query);
        return match ? { card, ...match } : null;
      })
      .filter(result => result !== null)
      .sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        if (a.distance !== b.distance) return a.distance - b.distance;
        return a.card.name.localeCompare(b.card.name);
      })
      .slice(0, 20)
      .map(result => result.card);

    if (matches.length === 0) {
      dropdown.classList.remove('show');
      return;
    }

    dropdown.innerHTML = matches.map((card, idx) => {
      const characterBadge = card.character !== currentCharacter
        ? `<span style="font-size: 0.7rem; opacity: 0.7;">${card.character}</span>`
        : '';
      return `
        <div class="autocomplete-item" data-index="${idx}" data-name="${card.name}" onclick="selectAutocomplete('${inputId}', '${card.name.replace(/'/g, "\\'")}')">
          <span class="autocomplete-item-icon">${card.icon}</span>
          <span class="autocomplete-item-name">${card.name}</span>
          <span class="autocomplete-item-meta">
            <span>${card.cost >= 0 ? card.cost : 'X'}</span>
            ${card.rarity ? `<span>${card.rarity}</span>` : ''}
            ${characterBadge}
          </span>
        </div>
      `;
    }).join('');

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
  // Clear additional reward pills
  additionalRewardCards = [];
  document.getElementById('additional-reward-pills').innerHTML = '';
  document.getElementById('additional-reward-input').value = '';

  // Clear reward upgrade/enchant state
  const rewardKeys = [];
  upgradedCards.forEach(key => {
    if (key.startsWith('reward-')) rewardKeys.push(key);
  });
  rewardKeys.forEach(key => upgradedCards.delete(key));

  const rewardEnchantKeys = [];
  cardEnchantments.forEach((value, key) => {
    if (key.startsWith('reward-')) rewardEnchantKeys.push(key);
  });
  rewardEnchantKeys.forEach(key => cardEnchantments.delete(key));

  // Clear results
  document.getElementById('reward-results').innerHTML = '';

  showToast('Cleared all selections', 'info', 1500);
}

function skipRewards() {
  // Clear all reward inputs and results
  clearAutocompleteFields();

  // Show skip confirmation message
  const resultsDiv = document.getElementById('reward-results');
  resultsDiv.innerHTML = `
    <div class="card-result skip-recommendation" style="border: 3px solid #10b981; background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));">
      <div class="card-header">
        <div class="card-name-section">
          <span class="card-icon" style="font-size: 1.8rem;">⏭️</span>
          <span class="card-name" style="font-size: 1.3rem; color: #10b981;">REWARD SKIPPED</span>
        </div>
        <span class="card-score" style="background: linear-gradient(135deg, #059669, #10b981); color: #d1fae5; font-size: 1.5rem;">✓</span>
      </div>
      <div class="card-reason" style="font-size: 1rem; margin-top: 10px;">
        You chose to skip this reward. No cards were added to your deck.
      </div>
      <div style="margin-top: 12px; padding: 12px; background: rgba(16, 185, 129, 0.1); border-radius: 6px; font-size: 0.9rem; color: var(--text-secondary);">
        💡 <strong>Good decision when:</strong> All offered cards would dilute your deck strategy, or you're keeping your deck tight for consistency.
      </div>
    </div>
  `;

  showToast('⏭️ Reward skipped', 'success', 2000);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAutocomplete();

  // Load toast preference
  const savedToastPref = localStorage.getItem('sts2-toasts-enabled');
  if (savedToastPref !== null) {
    toastsEnabled = savedToastPref === 'true';
    document.getElementById('toasts-toggle').checked = toastsEnabled;
  }

  // Load saved deck or starter
  if (!loadDeckState()) {
    loadStarter('ironclad');
  }

  // Initialize shop grid (shows removal button immediately)
  renderShopGrid();

  setupInputClearButtons();

  // Autofocus reward input immediately
  const rewardInput = document.getElementById('additional-reward-input');
  if (rewardInput) {
    rewardInput.focus();
  }

  // Show welcome toast
  setTimeout(() => {
    showToast('Welcome to STS2 Decision Advisor!', 'success');
  }, 500);

  // Auto-analyze boss readiness after page loads (if deck exists)
  if (currentDeck.length > 0) {
    setTimeout(() => {
      analyzeBossReadiness();
    }, 1000);
  }

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
