# MC Win Rate Validation for Relics

## Overview
Added Monte Carlo simulation validation to relic scoring in shop analysis. The system now temporarily adds each relic to your deck, runs MC simulations, and shows the actual win rate impact.

## Implementation Details

### Changes to `scoreRelic()` (lines 4908-4968)

**New Signature:**
```javascript
function scoreRelic(relicName, options = {})
```

**Options Parameter:**
- `validateWithMC`: Boolean flag to enable MC validation (used in shop context)

**Return Value:**
```javascript
{
  score: number,
  analyzed: boolean,
  mcImpact: {
    impact: number,        // Win rate change (-100 to +100)
    baselineWR: number,    // Current deck win rate
    withRelicWR: number    // Deck win rate with relic
  } | null
}
```

**MC Validation Logic:**
1. Calculate baseline win rate if not cached
2. Temporarily add relic to `currentRelics`
3. Run MC simulation with 100 iterations (capped for performance)
4. Remove relic from `currentRelics`
5. Calculate impact: `withRelicWR - baselineWR`
6. Adjust score based on impact:
   - **+10% or more**: +25 score bonus, strong green badge
   - **+5% to +9%**: +15 score bonus, green badge
   - **+2% to +4%**: +8 score bonus, light green badge
   - **-2% to -5%**: -10 score penalty, yellow warning
   - **-5% or worse**: -20 score penalty, red warning

### Changes to Shop Grid Rendering (lines 4704-4774)

**Updated Call:**
```javascript
const relicResult = scoreRelic(relicName, { validateWithMC: true });
```

**Display Changes:**
- MC impact shown inline on shop slots as colored badge
- Format: `MC: ±X% (baseline% → withRelic%)`
- Colors:
  - Green (+5% or more)
  - Red (-3% or worse)
  - Gray (neutral)

### Changes to Hover Preview (lines 6543-6646)

**Updated Signature:**
```javascript
function showShopItemAnalysis(event, itemName, itemType, shopScore, 
  isUpgraded, enchantment, analyzed, mcImpact)
```

**MC Impact Display:**
Shows detailed validation panel with:
- Impact magnitude (Strong/Moderate boost, Hurts significantly/slightly, Neutral)
- Colored badge and icon (✓ for positive, ⚠️ for negative, 〰️ for neutral)
- Exact win rate change: `±X% win rate change`

## Usage

### In Shop Analysis:
1. Add relics to shop slots
2. MC validation runs automatically for each relic
3. Impact shown both on slot and in hover preview

### Performance:
- Uses up to 100 MC simulations per relic (respects `mcSimulations` setting but caps for speed)
- Only validates when `validateWithMC: true` is passed
- Baseline is calculated once and reused across all relics

## How MC Simulation Works

The combat simulator **actually models relic effects** from `RELIC_EFFECTS` object (lines 45-95 in logic.js):

**Simulated Effects (~40-50 relics defined):**
- Energy relics: +1 energy per turn (Lantern, Coffee Dripper, etc.)
- Draw relics: Start with more cards (Snecko Eye +2, Bag of Marbles +1)
- Combat buffs: Start block/vigor, block per turn/attack (Anchor, Orichalcum, Ornamental Fan)
- Damage scaling: Damage multipliers (Vajra = 1.15x, Pen Nib = 1.1x)
- HP effects: Start HP, heal per combat (Burning Blood, Magic Flower)
- Conditional effects: Low HP bonuses, X-cost bonuses, energy carryover (Red Skull, Chemical X, Ice Cream)

**Simplified Approximations:**
- Pen Nib: 1.1x damage (instead of "double every 10th attack")
- Red Skull: 1.3x when <50% HP (simplified threshold)
- Turnip: Flat strength bonus (doesn't track actual kill count)

**Not Simulated (yet):**
- Trigger-based: Dead Branch, Kunai, Shuriken, After Image
- Complex mechanics: Snecko cost randomization, Runic Pyramid hand retention
- Shop/rewards: Courier, Member Card, Question Card
- Event/non-combat: Most event relics

**Result:** MC validation shows **real simulated impact**. When it says "Vajra +5%", that's because the simulation ran your deck with 1.15x damage and actually won 5% more fights.

## Limitations

1. **Coverage**: ~40-50 relics have simulation effects defined. Undefined relics fall back to heuristic scoring only (show ⚠️ generic score badge).

2. **Baseline cached per deck state**: If you modify your deck between relic checks, the baseline might be stale. Reload shop grid to refresh.

3. **Limited to 100 simulations**: To keep shop analysis fast, relic validation uses fewer simulations than card analysis. Results may vary by ±2-3%.

4. **Score stacking**: Energy relics get +30 base bonus from heuristics PLUS MC validation bonus, which can stack to very high scores even when not needed.

## Testing

**Test Scenario:**
1. Load Ironclad starter deck
2. Add Ornamental Fan to shop
3. Check MC impact (should be neutral/slightly negative for attack-heavy deck)
4. Add Vajra to shop
5. Check MC impact (should be positive for strength-scaling deck)

**Expected Results:**
- Ornamental Fan: ~0-2% impact (few skills in starter)
- Vajra: +3-8% impact (permanent strength is strong)
- Energy relics: +8-15% impact (always strong)

## Future Improvements

1. **Full relic simulation**: Model actual relic effects in MC combat (complex, requires major refactor)
2. **Cache relic results**: Cache MC validation per `character-deck-relic` hash to avoid re-running
3. **Negative synergies**: Detect anti-synergies (e.g., Runic Pyramid + high-cost deck)
4. **Comparative analysis**: "Relic X is better than Relic Y for your deck"

---

**Last Updated**: 2026-05-07
**Author**: Claude Code
**Status**: Complete, ready for testing
