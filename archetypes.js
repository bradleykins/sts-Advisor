// STS2 Archetype definitions and synergies
// Source: https://www.slashskill.com/slay-the-spire-2-best-builds-deck-archetypes-for-every-character/

const STS2_ARCHETYPES = {
  // IRONCLAD
  'strength-scaling': {
    character: 'ironclad',
    name: 'Strength Scaling',
    description: 'Stack Strength through powers, cash in with multi-hit attacks',
    coreCards: ['Demon Form', 'Limit Break', 'Inflame', 'Spot Weakness', 'Sword Boomerang', 'Twin Strike', 'Whirlwind', 'Heavy Blade'],
    supportCards: ['Reaper', 'Battle Trance', 'Offering'],
    keyRelics: ['Vajra', 'Girya', 'Orichalcum', 'Horn Cleat', 'Captain\'s Wheel'],
    keywords: ['strength'],
    winCondition: 'Survive 2-3 turns while Demon Form stacks, then one-shot with multi-hit attacks',
    pivotSignals: ['No Demon Form or Limit Break by mid-Act 2']
  },

  'exhaust-cycle': {
    character: 'ironclad',
    name: 'Exhaust Cycling',
    description: 'Burn through deck with Corruption, gain Block and draw from exhausting',
    coreCards: ['Corruption', 'Dark Embrace', 'Feel No Pain', 'Fiend Fire', 'Burning Pact'],
    supportCards: ['Power Through', 'Second Wind', 'True Grit'],
    keyRelics: ['Dead Branch', 'Strange Spoon', 'Blue Candle'],
    keywords: ['exhaust'],
    winCondition: 'Play all Skills for free via Corruption, gain Block from Feel No Pain, draw from Dark Embrace',
    pivotSignals: ['No Corruption by Act 3']
  },

  // SILENT
  'poison-catalyst': {
    character: 'silent',
    name: 'Poison Catalyst',
    description: 'Apply Poison, multiply with Catalyst, let enemies melt',
    coreCards: ['Catalyst', 'Deadly Poison', 'Noxious Fumes', 'Corpse Explosion', 'Burst'],
    supportCards: ['Bouncing Flask', 'Envenom', 'Bane'],
    keyRelics: ['Snecko Skull', 'The Specimen', 'Envenom'],
    keywords: ['poison'],
    winCondition: 'Stack Poison via Noxious Fumes, double/triple with Catalyst, focus on blocking',
    pivotSignals: ['Multiple Artifact enemies on map', 'No Catalyst by Act 2']
  },

  'shiv-discard': {
    character: 'silent',
    name: 'Shiv Discard (Sly)',
    description: 'New Sly keyword: play cards for free when discarded',
    coreCards: ['Blade Dance', 'Cloak and Dagger', 'Storm of Steel', 'Calculated Gamble', 'Accuracy'],
    supportCards: ['Prepared', 'Eviscerate', 'Finisher'],
    keyRelics: ['Ninja Scroll', 'Shuriken', 'Ornamental Fan', 'Tough Bandages'],
    keywords: ['shiv', 'sly', 'discard'],
    winCondition: 'Generate Shivs, discard them for free plays via Sly, spam attacks',
    pivotSignals: ['Not finding Sly cards or Shiv generation']
  },

  // DEFECT
  'claw-spam': {
    character: 'defect',
    name: 'Claw Spam (0-cost)',
    description: 'Zero-cost attack spam with All for One',
    coreCards: ['Claw', 'All for One', 'Scrape', 'FTL', 'Go for the Eyes'],
    supportCards: ['Hologram', 'Rebound', 'Recycle'],
    keyRelics: ['Nuclear Battery', 'Shuriken', 'Kunai', 'Ornamental Fan'],
    keywords: [],
    winCondition: 'Play Claws to ramp damage, use All for One to pull 0-cost cards from discard, repeat',
    pivotSignals: ['Only 1 Claw by Act 2', 'Not enough 0-cost density']
  },

  'orb-focus': {
    character: 'defect',
    name: 'Orb/Focus Scaling',
    description: 'Passive damage through Orbs, scale with Focus',
    coreCards: ['Defragment', 'Loop', 'Electrodynamics', 'Frost', 'Darkness'],
    supportCards: ['Coolheaded', 'Glacier', 'Capacitor'],
    keyRelics: ['Data Disk', 'Gold-Plated Cables', 'Runic Capacitor', 'Cracked Core'],
    keywords: ['orb', 'focus'],
    winCondition: 'Stack Focus, channel Lightning/Frost/Dark, let passive effects accumulate',
    pivotSignals: ['Not finding Focus or Orb synergy cards']
  },

  // REGENT
  'stars-scaling': {
    character: 'regent',
    name: 'Stars Scaling',
    description: 'Accumulate Stars over turns, spend on powerful abilities',
    coreCards: ['Radiant Light', 'Enlightenment', 'Star Shower', 'Gravity Well'],
    supportCards: ['Regal Command', 'Conjure', 'Astral Step'],
    keyRelics: ['Divine Right', 'Lunar Pastry', 'Mini Regent'],
    keywords: ['stars'],
    winCondition: 'Accumulate Stars passively, spend on high-impact abilities',
    pivotSignals: ['Getting pressured too hard in Act 2 for slow setup']
  },

  'sovereign-blade': {
    character: 'regent',
    name: 'Sovereign Blade (Forge)',
    description: 'Scale permanent weapon damage via Forging',
    coreCards: ['Sovereign Blade', 'Summon Forth', 'Royal Forge', 'Tempered Steel'],
    supportCards: ['Guards transformation', 'Minion Sacrifice'],
    keyRelics: ['Fencing Manual', 'Galactic Dust', 'Regalite'],
    keywords: ['forge'],
    winCondition: 'Keep deck lean, Forge repeatedly to scale Sovereign Blade to 40-50 damage',
    pivotSignals: ['Not finding Forge cards']
  },

  // NECROBINDER
  'doom-stacking': {
    character: 'necrobinder',
    name: 'Doom Stacking',
    description: 'Stack Doom debuff, enemies die when HP ≤ Doom',
    coreCards: ['Blight Strike', 'Negative Pulse', 'No Escape', 'Reaper Form', 'Fear', 'Putrefy'],
    supportCards: ['Mark of Death', 'Weakness'],
    keyRelics: ['Bound Phylactery', 'Bone Flute', 'Undying Sigil'],
    keywords: ['doom'],
    winCondition: 'Deal damage + stack Doom, enemies die instantly when HP ≤ Doom threshold',
    pivotSignals: ['Osty dying too quickly', 'Not enough survivability']
  },

  'soul-exhaust': {
    character: 'necrobinder',
    name: 'Soul Exhaust Loop',
    description: 'Cycle Souls and exhaust cards for infinite engine',
    coreCards: ['Soul Generation cards', 'Exhaust synergies', 'Funerary Rites'],
    supportCards: ['Grave Digger', 'Bone Pile'],
    keyRelics: ['Funerary Mask', 'Ivory Tile', 'Big Hat'],
    keywords: ['soul', 'exhaust'],
    winCondition: 'Generate Souls, exhaust to draw/gain energy, loop indefinitely',
    pivotSignals: ['Not finding Soul generation or exhaust payoffs']
  }
};

// Card-to-card synergy weights
const CARD_SYNERGIES = {
  // Strength scaling
  'Demon Form': { 'Sword Boomerang': 30, 'Whirlwind': 30, 'Heavy Blade': 25, 'Twin Strike': 20, 'Reaper': 20 },
  'Limit Break': { 'Demon Form': 35, 'Inflame': 20, 'Spot Weakness': 15 },
  'Inflame': { 'Sword Boomerang': 15, 'Whirlwind': 15, 'Heavy Blade': 15 },

  // Exhaust
  'Corruption': { 'Dark Embrace': 40, 'Feel No Pain': 40, 'Fiend Fire': 25, 'Dead Branch': 50 },
  'Dark Embrace': { 'Corruption': 40, 'Burning Pact': 20, 'True Grit': 15 },
  'Feel No Pain': { 'Corruption': 40, 'Power Through': 15, 'Second Wind': 15 },

  // Poison
  'Catalyst': { 'Deadly Poison': 35, 'Noxious Fumes': 40, 'Bouncing Flask': 25, 'Burst': 50 },
  'Noxious Fumes': { 'Catalyst': 40, 'Corpse Explosion': 20 },
  'Burst': { 'Catalyst': 50 },

  // Shiv
  'Blade Dance': { 'Accuracy': 30, 'Shuriken': 40, 'Ornamental Fan': 30, 'Ninja Scroll': 35 },
  'Accuracy': { 'Blade Dance': 30, 'Cloak and Dagger': 25 },

  // Claw
  'Claw': { 'All for One': 50, 'Scrape': 30, 'FTL': 20 },
  'All for One': { 'Claw': 50, 'FTL': 30, 'Go for the Eyes': 25 },

  // Orb/Focus
  'Defragment': { 'Loop': 30, 'Electrodynamics': 25, 'Capacitor': 20 },
  'Loop': { 'Defragment': 30, 'Frost': 20, 'Lightning': 20 },

  // Forge
  'Sovereign Blade': { 'Summon Forth': 50, 'Royal Forge': 35, 'Tempered Steel': 30 },
  'Summon Forth': { 'Sovereign Blade': 50 },

  // Doom
  'Blight Strike': { 'Reaper Form': 40, 'Fear': 25, 'Putrefy': 25 },
  'Reaper Form': { 'Blight Strike': 40, 'Negative Pulse': 30 }
};

// Anti-synergies (cards that don't work well together or indicate unfocused deck)
const ANTI_SYNERGIES = {
  'Corruption': { 'Runic Pyramid': -50 }, // Corruption exhausts Skills, Pyramid prevents discard
  'Noxious Fumes': { 'Artifact enemies': -40 }, // Poison doesn't work vs Artifact
  'Claw': { 'high-cost cards': -20 } // Claw needs deck cycling, high costs slow it down
};

// High-priority cards from Pocket Tactics tier lists
// These cards get bonus scoring as proven meta picks
const PREMIUM_CARDS = {
  // IRONCLAD
  'Demon Form': { tier: 'S', bonus: 15, reason: 'Strength scaling king' },
  'Hellraiser': { tier: 'S', bonus: 15, reason: 'Auto-play Strikes' },
  'Fiend Fire': { tier: 'A', bonus: 10, reason: 'Big burst damage' },
  'Offering': { tier: 'A', bonus: 10, reason: 'Energy + draw spike' },
  'Expect a Fight': { tier: 'A', bonus: 10, reason: 'Energy for Attacks' },

  // SILENT
  'Accelerant': { tier: 'S', bonus: 15, reason: 'Poison multiplier' },
  'Shadow Step': { tier: 'S', bonus: 15, reason: 'Sly + double damage' },
  'Accuracy': { tier: 'A', bonus: 12, reason: 'Shiv scaling' },
  'Adrenaline': { tier: 'A', bonus: 10, reason: 'Energy + draw burst' },
  'Calculated Gamble': { tier: 'A', bonus: 10, reason: 'Deck cycle power' },

  // DEFECT
  'Defragment': { tier: 'S', bonus: 15, reason: 'Focus scaling core' },
  'Voltaic': { tier: 'S', bonus: 15, reason: 'Lightning scaling finisher' },
  'Modded': { tier: 'A', bonus: 10, reason: 'Orb slot expansion' },
  'Multi-Cast': { tier: 'A', bonus: 10, reason: 'Evoke spam' },
  'All for One': { tier: 'A', bonus: 12, reason: '0-cost recursion' },

  // REGENT
  'CHARGE!!': { tier: 'S', bonus: 15, reason: 'Deck transform power' },
  'Void Form': { tier: 'S', bonus: 15, reason: 'Free cards scaling' },
  'Child of the Stars': { tier: 'A', bonus: 10, reason: 'Star-to-Block engine' },
  'GUARDS!!': { tier: 'A', bonus: 10, reason: 'Transform + thin deck' },
  'Heavenly Drill': { tier: 'A', bonus: 10, reason: 'Scaling multi-hit' },

  // NECROBINDER
  'Dirge': { tier: 'S', bonus: 15, reason: 'Osty setup + Souls' },
  'Eradicate': { tier: 'S', bonus: 15, reason: 'X-cost finisher' },
  'No Escape': { tier: 'S', bonus: 15, reason: 'Doom scaling' },
  'End of Days': { tier: 'S', bonus: 15, reason: 'Doom execute' },
  'Neurosurge': { tier: 'A', bonus: 10, reason: 'Energy burst' }
};

// Enemy damage profiles per Act (used for min-block calculations)
// Average incoming damage per turn from common/elite encounters
const ENEMY_DAMAGE_BY_ACT = {
  1: { avg: 8, elite: 15, boss: 20 },
  2: { avg: 12, elite: 22, boss: 32 },
  3: { avg: 16, elite: 30, boss: 45 },
  4: { avg: 25, elite: 40, boss: 60 }
};

// Ascension modifiers to enemy damage
const ASCENSION_DAMAGE_MULTIPLIER = {
  0: 1.0,   // Base game
  5: 1.1,   // +10% enemy damage
  10: 1.2,  // +20%
  15: 1.35, // +35%
  18: 1.45, // +45%
  20: 1.5   // +50%
};
