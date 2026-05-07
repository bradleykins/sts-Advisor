// ============================================================================
// COMPREHENSIVE COMBAT SIMULATOR FOR STS2
// ============================================================================
// Simulates:
// - Status effects (Strength, Dex, Weak, Vulnerable, Poison, Block, Vigor)
// - Powers with ongoing effects
// - Card synergies and combos
// - Exhaust, draw, energy manipulation
// - Character-specific mechanics (basic implementation)
// - Relic effects
// - Upgrades (exact values from API) and enchantments

// Load upgrade data
let CARD_UPGRADES = {};
if (typeof window !== 'undefined') {
  // Browser environment - will be loaded via script tag
  fetch('card-upgrades.json')
    .then(r => r.json())
    .then(data => { CARD_UPGRADES = data; })
    .catch(e => console.warn('card-upgrades.json not loaded:', e.message));
} else if (typeof require !== 'undefined') {
  // Node environment
  try {
    CARD_UPGRADES = require('./card-upgrades.json');
  } catch (e) {
    console.warn('card-upgrades.json not loaded:', e.message);
  }
}

// ============================================================================
// COMBAT STATE
// ============================================================================

class CombatState {
  constructor(deck, enemyProfile, relics, upgradedCards, enchantments) {
    // Player state
    this.deck = deck;
    this.drawPile = [...deck];
    this.hand = [];
    this.discardPile = [];
    this.exhaustPile = [];

    // Player resources
    this.maxHP = 80;
    this.hp = 80;
    this.energy = 3;
    this.maxEnergy = 3;
    this.block = 0;

    // Player status effects
    this.strength = 0;
    this.dexterity = 0;
    this.vigor = 0; // Next attack deals bonus damage
    this.platedArmor = 0; // Persistent block
    this.vulnerable = 0; // Takes 50% more damage (turns)
    this.weak = 0; // Deals 25% less damage (turns)
    this.frail = 0; // 25% less block (turns)
    this.ritual = 0; // Gain strength at end of turn
    this.combust = 0; // Lose HP, deal damage to all enemies
    this.poison = 0; // Take damage at turn start

    // Powers active
    this.powers = {}; // { powerName: stacks/value }

    // Enemy state
    this.enemyHP = enemyProfile.hp;
    this.enemyMaxHP = enemyProfile.hp;
    this.enemyDamage = enemyProfile.damage;
    this.enemyAttackProb = enemyProfile.attackProbability;
    this.enemyStrength = 0;
    this.enemyWeak = 0;
    this.enemyVulnerable = 0;
    this.enemyPoison = 0;

    // Combat tracking
    this.turn = 0;
    this.cardsPlayedThisTurn = 0;
    this.attacksPlayedThisTurn = 0;
    this.skillsPlayedThisTurn = 0;
    this.powersPlayedThisTurn = 0;
    this.cardsPlayedThisCombat = 0;

    // Relics and state
    this.relics = relics;
    this.upgradedCards = upgradedCards;
    this.enchantments = enchantments;
    this.relicEffects = this.calculateRelicEffects();

    // Apply relic HP bonuses
    this.maxHP += this.relicEffects.startHP;
    this.hp = this.maxHP;
    this.maxEnergy += Math.floor(this.relicEffects.startEnergy);
    this.energy = this.maxEnergy;
    this.platedArmor = this.relicEffects.platedArmor;
  }

  calculateRelicEffects() {
    const effects = {
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
      damageReduction: 0,
      startThorns: 0
    };

    if (!this.relics) return effects;

    this.relics.forEach(relicName => {
      const effect = typeof RELIC_EFFECTS !== 'undefined'
        ? RELIC_EFFECTS[relicName.toUpperCase()]
        : null;

      if (effect) {
        effects.startEnergy += effect.startEnergy || 0;
        effects.startDraw += effect.startDraw || 0;
        effects.startBlock += effect.startBlock || 0;
        effects.startVigor += effect.startVigor || 0;
        effects.blockPerTurn += effect.blockPerTurn || 0;
        effects.blockPerAttack += effect.blockPerAttack || 0;
        effects.platedArmor += effect.platedArmor || 0;
        effects.damageMultiplier *= effect.damageMultiplier || 1.0;
        effects.startHP += effect.startHP || 0;
        effects.hpPerCombat += effect.hpPerCombat || 0;
        effects.xCostBonus += effect.xCostBonus || 0;
        effects.energyCarryover = effects.energyCarryover || effect.energyCarryover;
        effects.healPerPower += effect.healPerPower || 0;
        effects.strengthPerKill += effect.strengthPerKill || 0;
        effects.preventDeath = effects.preventDeath || effect.preventDeath;
        effects.damageReduction += effect.damageReduction || 0;
        effects.startThorns += effect.startThorns || 0;
      }
    });

    return effects;
  }

  getCardStats(cardName, deckIndex) {
    const card = typeof findCard === 'function' ? findCard(cardName) : null;
    if (!card) return null;

    const key = `${deckIndex}-${cardName}`;
    const isUpgraded = this.upgradedCards?.has(key) || false;
    const enchantment = this.enchantments?.get(key) || null;

    // Copy card stats
    let damage = card.damage || 0;
    let block = card.block || 0;
    let cost = card.cost >= 0 ? card.cost : 0;

    // Apply upgrade bonuses using exact API data
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
    if (enchantment === 'Sharp' && damage > 0) damage += 3;
    if (enchantment === 'Heavy' && block > 0) block += 8;
    if (enchantment === 'Nimble' && cost >= 1) cost = Math.max(0, cost - 1);
    if (enchantment === 'Free') cost = 0;

    return {
      ...card,
      name: cardName,
      damage,
      block,
      cost,
      isUpgraded,
      enchantment
    };
  }

  shuffle(pile, rng) {
    for (let i = pile.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [pile[i], pile[j]] = [pile[j], pile[i]];
    }
  }

  drawCards(count, rng) {
    for (let i = 0; i < count; i++) {
      if (this.drawPile.length === 0) {
        if (this.discardPile.length === 0) break;
        this.drawPile = [...this.discardPile];
        this.discardPile = [];
        this.shuffle(this.drawPile, rng);
      }
      if (this.drawPile.length > 0) {
        this.hand.push(this.drawPile.pop());
      }
    }
  }

  calculateDamage(baseDamage, isAttack = true) {
    let damage = baseDamage;

    // Add strength
    damage += this.strength;

    // Apply weak
    if (isAttack && this.weak > 0) {
      damage *= 0.75;
    }

    // Apply vigor (bonus damage for next attack)
    if (isAttack && this.vigor > 0) {
      damage += this.vigor;
      this.vigor = 0; // Consumed
    }

    // Apply relic damage multipliers
    damage *= this.relicEffects.damageMultiplier;

    // Apply vulnerable on enemy
    if (this.enemyVulnerable > 0) {
      damage *= 1.5;
    }

    return Math.max(0, Math.floor(damage));
  }

  calculateBlock(baseBlock) {
    let block = baseBlock;

    // Add dexterity
    block += this.dexterity;

    // Apply frail
    if (this.frail > 0) {
      block *= 0.75;
    }

    return Math.max(0, Math.floor(block));
  }

  dealDamage(damage) {
    // Enemy takes damage
    this.enemyHP -= damage;
  }

  takeDamage(damage) {
    // Apply damage reduction from relics
    damage = Math.max(0, damage - this.relicEffects.damageReduction);

    // Block reduces damage
    if (this.block > 0) {
      if (damage <= this.block) {
        this.block -= damage;
        return;
      } else {
        damage -= this.block;
        this.block = 0;
      }
    }

    this.hp -= damage;

    // Prevent death relic
    if (this.hp <= 0 && this.relicEffects.preventDeath) {
      this.hp = 1;
      this.relicEffects.preventDeath = false; // One use only
    }
  }

  addBlock(amount) {
    this.block += amount;
  }

  gainStrength(amount) {
    this.strength += amount;
  }

  gainDexterity(amount) {
    this.dexterity += amount;
  }

  applyWeak(turns) {
    this.weak = Math.max(this.weak, turns);
  }

  applyVulnerable(turns) {
    this.vulnerable = Math.max(this.vulnerable, turns);
  }

  applyEnemyWeak(turns) {
    this.enemyWeak = Math.max(this.enemyWeak, turns);
  }

  applyEnemyVulnerable(turns) {
    this.enemyVulnerable = Math.max(this.enemyVulnerable, turns);
  }

  applyEnemyPoison(amount) {
    this.enemyPoison += amount;
  }

  startTurn(rng) {
    this.turn++;
    this.cardsPlayedThisTurn = 0;
    this.attacksPlayedThisTurn = 0;
    this.skillsPlayedThisTurn = 0;
    this.powersPlayedThisTurn = 0;

    // Heal from relic
    if (this.turn === 1 && this.relicEffects.hpPerCombat > 0) {
      this.hp = Math.min(this.maxHP, this.hp + this.relicEffects.hpPerCombat);
    }

    // Start of turn block
    this.block = this.platedArmor + this.relicEffects.blockPerTurn;
    if (this.turn === 1) {
      this.block += this.relicEffects.startBlock;
      this.vigor += this.relicEffects.startVigor;
    }

    // Apply poison to enemy
    if (this.enemyPoison > 0) {
      this.enemyHP -= this.enemyPoison;
      this.enemyPoison = Math.max(0, this.enemyPoison - 1);
    }

    // Reset energy
    this.energy = this.maxEnergy;

    // Draw cards
    const cardsPerTurn = 5 + this.relicEffects.startDraw;
    this.drawCards(cardsPerTurn, rng);

    // Powers trigger at start of turn
    if (this.powers['Combust']) {
      this.hp -= 1;
      this.enemyHP -= this.powers['Combust'];
    }
    if (this.powers['Ritual']) {
      this.gainStrength(this.powers['Ritual']);
    }
  }

  endTurn() {
    // Decay debuffs
    if (this.weak > 0) this.weak--;
    if (this.vulnerable > 0) this.vulnerable--;
    if (this.frail > 0) this.frail--;
    if (this.enemyWeak > 0) this.enemyWeak--;
    if (this.enemyVulnerable > 0) this.enemyVulnerable--;

    // Discard hand
    this.discardPile.push(...this.hand);
    this.hand = [];
  }

  playCard(card, deckIndex) {
    const stats = this.getCardStats(card.name, deckIndex);
    if (!stats) return;

    // Track plays
    this.cardsPlayedThisTurn++;
    this.cardsPlayedThisCombat++;
    if (stats.type === 'Attack') this.attacksPlayedThisTurn++;
    if (stats.type === 'Skill') this.skillsPlayedThisTurn++;
    if (stats.type === 'Power') this.powersPlayedThisTurn++;

    // Apply card effects based on name
    const name = stats.name.toLowerCase();

    // Generic damage/block
    if (stats.damage > 0) {
      const damage = this.calculateDamage(stats.damage, stats.type === 'Attack');
      this.dealDamage(damage);

      // Relic: block per attack
      if (stats.type === 'Attack' && this.relicEffects.blockPerAttack > 0) {
        this.addBlock(this.relicEffects.blockPerAttack);
      }
    }

    if (stats.block > 0) {
      const block = this.calculateBlock(stats.block);
      this.addBlock(block);
    }

    // Power-specific effects
    if (stats.type === 'Power') {
      // Heal from relic
      if (this.relicEffects.healPerPower > 0) {
        this.hp = Math.min(this.maxHP, this.hp + this.relicEffects.healPerPower);
      }

      // Common power effects (simplified)
      if (name.includes('inflame')) {
        this.gainStrength(2);
      }
      if (name.includes('demon form')) {
        this.powers['Demon Form'] = 2; // Gain 2 strength per turn
      }
      if (name.includes('footwork')) {
        this.gainDexterity(2);
      }
      if (name.includes('noxious fumes')) {
        this.powers['Noxious Fumes'] = 2; // Apply 2 poison per turn
      }
      if (name.includes('combust')) {
        this.powers['Combust'] = 5; // Deal 5 damage per turn
      }
      if (name.includes('ritual')) {
        this.powers['Ritual'] = 1; // Gain 1 strength per turn
      }
    }

    // Card-specific effects (simplified implementations)
    if (name === 'bash') {
      this.applyEnemyVulnerable(2);
    }
    if (name === 'iron wave') {
      // Deals damage AND gains block (already handled by stats)
    }
    if (name === 'shrug it off') {
      this.drawCards(1, Math.random); // Draw 1 card
    }
    if (name === 'neutralize') {
      this.applyEnemyWeak(1);
    }
    if (name === 'survivor') {
      this.drawCards(1, Math.random);
    }
    if (name.includes('catalyst')) {
      // Double poison
      this.enemyPoison *= 2;
    }
    if (name.includes('bouncing flask')) {
      this.applyEnemyPoison(3);
    }
    if (name.includes('deadly poison')) {
      this.applyEnemyPoison(5);
    }
    if (name.includes('noxious fumes')) {
      // Handled as power above
    }

    // Move to discard (or exhaust)
    const isExhaust = stats.keywords &&
      (Array.isArray(stats.keywords) ? stats.keywords : [stats.keywords])
      .some(k => k.toLowerCase().includes('exhaust'));

    if (isExhaust) {
      this.exhaustPile.push(stats.name);
    } else {
      this.discardPile.push(stats.name);
    }
  }
}

// ============================================================================
// COMBAT AI
// ============================================================================

class CombatAI {
  constructor(state, rng) {
    this.state = state;
    this.rng = rng;
  }

  shouldPlayForBlock(enemyAttacking) {
    // Play block cards if:
    // 1. Enemy is attacking
    // 2. Current block < incoming damage
    // 3. HP is low

    if (!enemyAttacking) return false;

    const incomingDamage = this.state.enemyDamage;
    const currentBlock = this.state.block;
    const hpPercent = this.state.hp / this.state.maxHP;

    return currentBlock < incomingDamage || hpPercent < 0.5;
  }

  prioritizeCards(hand, deckIndices, enemyAttacking) {
    const cards = hand.map((name, i) => {
      const deckIndex = deckIndices[i];
      const stats = this.state.getCardStats(name, deckIndex);
      if (!stats) return null;

      return {
        name,
        deckIndex,
        stats,
        priority: this.calculatePriority(stats, enemyAttacking)
      };
    }).filter(c => c);

    // Sort by priority (higher = play first)
    cards.sort((a, b) => b.priority - a.priority);

    return cards;
  }

  calculatePriority(card, enemyAttacking) {
    let priority = 0;

    // If enemy attacking, prioritize block
    if (enemyAttacking && this.shouldPlayForBlock(true)) {
      if (card.block > 0) {
        priority += 100 + card.block;
      }
    } else {
      // Otherwise prioritize damage
      if (card.damage > 0) {
        priority += 100 + card.damage;
      }
    }

    // Powers are high priority early
    if (card.type === 'Power' && this.state.turn <= 3) {
      priority += 150;
    }

    // Card draw is valuable
    const name = card.name.toLowerCase();
    if (name.includes('draw') || name === 'shrug it off' || name === 'survivor') {
      priority += 50;
    }

    // Apply status effects is good
    if (name === 'bash' || name.includes('vulnerable')) {
      priority += 40;
    }
    if (name.includes('weak') || name === 'neutralize') {
      priority += 30;
    }
    if (name.includes('poison') || name.includes('catalyst')) {
      priority += 60;
    }

    // Prefer cheaper cards when low on energy
    if (this.state.energy < 3) {
      priority += (3 - card.cost) * 10;
    }

    return priority;
  }

  playTurn(enemyAttacking) {
    // Get hand with deck indices
    const handWithIndices = this.state.hand.map(cardName => {
      return this.state.deck.indexOf(cardName);
    });

    // Prioritize cards
    const prioritized = this.prioritizeCards(this.state.hand, handWithIndices, enemyAttacking);

    // Play cards until out of energy
    for (const cardData of prioritized) {
      if (this.state.energy < cardData.stats.cost) continue;

      this.state.energy -= cardData.stats.cost;
      this.state.playCard(cardData.stats, cardData.deckIndex);

      // Remove from hand
      const handIndex = this.state.hand.indexOf(cardData.name);
      if (handIndex !== -1) {
        this.state.hand.splice(handIndex, 1);
      }

      if (this.state.energy === 0) break;
    }
  }
}

// ============================================================================
// COMBAT SIMULATION
// ============================================================================

function simulateCombatNew(deck, enemyProfile, seed, gameState) {
  // Create RNG
  let rngState = seed * 1000 + 12345;
  const rng = () => {
    rngState = (rngState * 1103515245 + 12345) & 0x7fffffff;
    return rngState / 0x7fffffff;
  };

  // Create combat state
  const state = new CombatState(
    deck,
    enemyProfile,
    gameState?.relics,
    gameState?.upgradedCards,
    gameState?.enchantments
  );

  // Create AI
  const ai = new CombatAI(state, rng);

  // Shuffle deck
  state.shuffle(state.drawPile, rng);

  const maxTurns = 20;

  // Combat loop
  while (state.turn < maxTurns) {
    state.startTurn(rng);

    // Check if enemy is dead
    if (state.enemyHP <= 0) {
      return {
        victory: true,
        turnsToWin: state.turn,
        finalHP: state.hp,
        hpPercent: state.hp / state.maxHP
      };
    }

    // Check if player is dead
    if (state.hp <= 0) {
      return {
        victory: false,
        turnsToWin: maxTurns,
        finalHP: 0,
        hpPercent: 0
      };
    }

    // Determine if enemy is attacking
    const enemyAttacking = rng() < state.enemyAttackProb;

    // Player turn
    ai.playTurn(enemyAttacking);

    // Enemy turn
    if (enemyAttacking) {
      let enemyDamage = state.enemyDamage;

      // Apply enemy weak
      if (state.enemyWeak > 0) {
        enemyDamage *= 0.75;
      }

      // Add enemy strength
      enemyDamage += state.enemyStrength;

      // Apply vulnerable to player
      if (state.vulnerable > 0) {
        enemyDamage *= 1.5;
      }

      state.takeDamage(Math.floor(enemyDamage));
    }

    state.endTurn();
  }

  // Timeout - count as loss
  return {
    victory: false,
    turnsToWin: maxTurns,
    finalHP: state.hp,
    hpPercent: state.hp / state.maxHP
  };
}

// Export for use in main logic
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { simulateCombatNew, CombatState, CombatAI };
}
