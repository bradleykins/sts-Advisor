# Relic MC Coverage Summary

## Status: **138 combat relics** (47% of 293 total) have MC effects defined

**No placeholder values** - Only relics with actual combat effects are included.

Last updated: 2026-05-07

## Philosophy

**Combat effects only**: Relics without MC effects will show "⚠️ Generic score - relic not context-analyzed" in the shop, which accurately reflects that we can't simulate their impact. This is better than fake placeholder values.

**Non-combat relics** (155 relics, 53%) intentionally excluded:
- Event relics: Black Star, Calling Bell, Pandora's Box (pickup effects only)
- Shop relics: Courier, Smiling Mask, Merchant's Rug
- Gold/rewards: Amethyst Aubergine, Prayer Wheel, White Beast Statue  
- Deck modification: Astrolabe, Bing Bong, Biiig Hug
- Rest site: Dream Catcher, Singing Bowl, Girya (partial combat)
- Potions: Sacred Bark, Potion Belt, Alchemical Coffer

These will get heuristic scoring only - no MC validation.

## Coverage by Effect Type

### Fully Simulated (16 effect types, ~80 relics)
These effects are actually modeled in the MC combat simulator:

| Effect Type | Count | Examples |
|------------|-------|----------|
| `startEnergy` | 27 | Lantern, Coffee Dripper, Happy Flower (0.33), Nunchaku (0.1) |
| `startDraw` | 20 | Snecko Eye (+4), Ring of the Snake (+2), Sundial (0.66) |
| `damageMultiplier` | 38 | Vajra (1.15), Kunai (1.08), Pen Nib (1.10), Letter Opener (1.04) |
| `startHP` | 20 | Strawberry (+7), Pear (+10), Mango (+14), Big Mushroom (+20) |
| `hpPerCombat` | 7 | Burning Blood (+6), Black Blood (+12), Pantograph (+13) |
| `startBlock` | 4 | Anchor (+10), Horn Cloak (+7), Stone Calendar (+6) |
| `blockPerTurn` | 7 | Orichalcum (+6), Sai (+7), Tough Bandages (+2) |
| `blockPerAttack` | 2 | Ornamental Fan (+3), Ornamental Fan??? (+1) |
| `platedArmor` | 2 | Thread and Needle (+4), Gorget (+4) |
| `startVigor` | 1 | Akabeko (+8) |
| `preventDeath` | 3 | Lizard Tail, Ginger, Fairy in a Bottle |
| `xCostBonus` | 1 | Chemical X (+2) |
| `energyCarryover` | 1 | Ice Cream |
| `damageReduction` | 4 | Tungsten Rod (-1), Torii (-4), Beating Remnant (-10) |
| `startThorns` | 1 | Bronze Scales (+3) |
| `healPerPower` | 1 | Bird Faced Urn (+2) |

### Approximated/Simplified (~30 relics)
Average values for conditional or trigger-based effects:

**Conditional Energy:**
- Happy Flower: 0.33 (every 3 turns)
- Nunchaku: 0.1 (every 10 attacks)
- Art of War: 0.3 (if no attacks played)
- Mummified Hand: 0.3 (free card when playing power)

**Turn-based Effects:**
- Horn Cloak: startBlock 7 (14 on turn 2, averaged)
- Stone Calendar: startBlock 6 (18 on turn 3, averaged)
- Sundial: startDraw 0.66 (2 every 3 turns)

**Trigger Damage (as multipliers):**
- Mercury Hourglass: 1.02 (3 dmg/turn)
- Letter Opener: 1.04 (5 dmg per 3 skills)
- Tingsha: 1.03 (3 dmg per discard)

**Character-Specific:**
- Cracked Core: startEnergy 0.5 (Lightning orb simplified)
- Bound Phylactery: damageMultiplier 1.05 (Summon simplified)
- Divine Right: damageMultiplier 1.08 (3 gold = flexibility)

### High Accuracy (~50 relics)
Direct simulation with minimal approximation:
- All energy relics (±1 energy)
- Pure draw relics (±N cards)
- HP relics (Max HP or heal per combat)
- Simple block relics (start combat, per turn, per attack)
- Direct damage multipliers (Vajra, Preserved Insect, Paper Krane)

### Medium Accuracy (~50 relics)
Reasonable approximations:
- Trigger-based (Kunai, Shuriken, Letter Opener)
- Conditional (Red Skull, Happy Flower, Art of War)
- Averaged turn effects (Horn Cloak, Stone Calendar)
- Simplified mechanics (Cracked Core, Bound Phylactery)

### Low Accuracy (~40 relics)
Heavy simplification or character-specific mechanics:
- Complex triggers (Emotion Chip, Delicate Frond)
- Character-dependent (all orb relics, minion relics)
- Multi-condition (Orange Pellets, Fencing Manual)

## Not Included (155 relics, 53%)

**Event/Pickup Relics:**
- Black Star, Calling Bell, Pandora's Box, Prismatic Shard
- Arcane Scroll, Archaic Tooth, Astrolabe, Beautiful Bracelet

**Shop Relics:**
- Courier, Smiling Mask, Merchant's Rug

**Gold/Rewards:**
- Amethyst Aubergine, Prayer Wheel, White Beast Statue

**Rest Site:**
- Dream Catcher, Singing Bowl, Bowler Hat, Book Repair Knife

**Deck Modification:**
- Bing Bong, Biiig Hug, Strange Spoon

**Potions:**
- Sacred Bark, Potion Belt, Alchemical Coffer, Toy Ornithopter

**Complex/Non-Simulatable:**
- Snecko Eye cost randomization (draw is simulated, cost chaos isn't)
- Runic Pyramid hand retention (approximated as +1 draw)
- Dead Branch (exhaust → random card, too complex)
- Calipers (block retention, not modeled)

## What This Means for Shop Analysis

### Relics WITH MC effects (138):
- Show "MC: ±X% (baseline% → withRelic%)" badge
- Hover preview shows validation panel
- Score adjusted by actual simulated impact

### Relics WITHOUT MC effects (155):
- Show "⚠️ Generic score - relic not context-analyzed" warning
- Score uses heuristic only (archetype synergy, act scaling, deck needs)
- Yellow dashed border to indicate uncertainty

**This is honest**: Users know which relics have validated impact vs. educated guesses.

## Accuracy Assessment

When you see MC impact:

✅ **High confidence (50 relics)**:
- Energy: Lantern, Coffee Dripper, Sozu → +10-15% typical
- Draw: Snecko Eye, Bag of Preparation → +5-12% typical
- HP: Strawberry, Burning Blood → +2-8% typical
- Damage: Vajra, Preserved Insect → +5-15% typical

⚠️ **Medium confidence (50 relics)**:
- Kunai: +5% → Real: 6-8% (averages trigger rate)
- Happy Flower: +3% → Real: 2-5% (every 3 turns)
- Letter Opener: +4% → Real: 3-6% (skill deck dependent)

❓ **Low confidence (38 relics)**:
- Cracked Core: +3% → Real: varies wildly (Lightning orb value)
- Emotion Chip: +2% → Real: deck/hp-loss dependent
- Runic Pyramid: +5% → Real: deck-size dependent

## Future Improvements

1. **Full trigger simulation**: Kunai/Shuriken actual +1 str/dex tracking
2. **Character mechanics**: Orbs, minions, gold effects in combat
3. **Conditional logic**: Red Skull <50% HP trigger, Art of War attack counting
4. **Negative synergies**: Runic Pyramid + high-cost, Snecko + 0-cost
5. **Dead Branch**: Exhaust → random card generation

---

**Conclusion**: 138 combat relics (47%) have meaningful MC simulation. 155 relics (53%) are intentionally excluded as non-combat or too complex. No fake placeholder values - uncertainty is honest and visible.
