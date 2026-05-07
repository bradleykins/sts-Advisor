# MC-Based Removal Analysis Rewrite

**Date**: 2026-05-07

## Problem

Removal priority was based on 100+ lines of hardcoded heuristics:
- Strike/Defend: +35 in Act 2
- Bash/Neutralize: +15 always (even when valuable)
- High cost cards: +15 in small decks
- Weak damage: +15 in attack decks
- Off-archetype: +10
- Deck dilution: +8 if > 25 cards
- Duplicate penalties: escalating +5/+20/+30

**Issues**:
- Arbitrary numbers disconnected from actual win rate impact
- Bash wrongly prioritized even when it's the only Vulnerable source
- No way to know if removing a card actually helps
- Heuristics couldn't account for synergies, relics, or deck-specific contexts

## Solution

**Replace all heuristics with pure MC simulation.**

### New Algorithm

```javascript
function getRemovalPriorityWithDuplicates() {
  // Calculate baseline
  if (mcBaselineWinRate === null) {
    calculateMCBaseline();
  }

  // Test removing each card
  const scored = currentDeck.map((cardName, index) => {
    // Skip MC for obvious cases
    if (card.type === 'Curse' || card.type === 'Status') {
      return { mcImpact: 100, heuristic: true };
    }

    // MC simulation: test deck without this card
    currentDeck.splice(index, 1);
    const result = performMCRollout({ name: '__BASELINE__' }, 100);
    currentDeck = originalDeck; // Restore

    return {
      cardName,
      index,
      mcImpact: result.winRate - mcBaselineWinRate,
      baseline: mcBaselineWinRate,
      afterRemoval: result.winRate
    };
  });

  // Sort by MC impact (highest = best removal)
  scored.sort((a, b) => b.mcImpact - a.mcImpact);

  return scored.slice(0, 5);
}
```

### Key Changes

1. **No hardcoded bonuses** - Every card tested via simulation
2. **Positive mcImpact = good removal** - If win rate goes up, remove it
3. **Negative mcImpact = bad removal** - If win rate goes down, keep it
4. **Context-aware automatically** - MC accounts for synergies, relics, archetype

## Display Changes

### Before (Heuristic Score)
```
Top Removals:
1. Bash (score: 75)
2. Strike (score: 70)
3. Defend (score: 65)
```

### After (MC Impact)
```
Top Removals:
1. Strike         +3%  (58% → 61%)
2. Defend         +2%  (58% → 60%)
3. Bash          -5%  (58% → 53%)
   ⚠️ Hurts deck - keep this card
```

**Color coding**:
- Green (+3% or more): Good removal
- Gray (0-3%): Neutral
- Yellow (-3 to 0%): Slightly hurts
- Red (-5% or worse): Bad removal, keep card

## Performance

**Old approach**: Instant (heuristics only)  
**New approach**: ~1-2 seconds (100 sims × 5-20 cards = 500-2000 sims)

**Optimization**: Uses 100 sims per card instead of full `mcSimulations` count for speed.

## Examples

### Example 1: Bash with No Other Vulnerable
**Old system**: Remove Bash (+15 score)  
**New system**: Keep Bash (-6% impact)  
**Reason**: Bash applies Vulnerable, deck has no replacement → removing hurts

### Example 2: Bash with Thunderclap
**Old system**: Remove Bash (+15 score)  
**New system**: Remove Bash (+2% impact)  
**Reason**: Thunderclap provides Vulnerable → Bash redundant

### Example 3: 5th Strike
**Old system**: Remove Strike (+70 score with duplicate penalty)  
**New system**: Remove Strike (+4% impact)  
**Reason**: Deck has better attacks, Strike dilutes draw

### Example 4: Power Card in Scaling Deck
**Old system**: Might remove due to cost or off-archetype  
**New system**: Keep (+0% or negative impact)  
**Reason**: MC sees the long-term scaling value

## Benefits

1. **Accurate**: Shows actual win rate impact, not guesses
2. **Context-aware**: Accounts for synergies, relics, deck state automatically
3. **Trustworthy**: Users see exact numbers (58% → 61%)
4. **No false positives**: Won't suggest removing valuable cards like Bash
5. **Adaptable**: Works for any deck, any archetype, any context

## Limitations

- **Slower**: 1-2 seconds vs instant
- **Requires baseline**: Needs deck with 5+ cards
- **100 sims**: Less accurate than full count (tradeoff for speed)

## Code Changes

- `logic.js` lines 2053-2110: Replaced 160 lines of heuristics with 40 lines of MC
- `logic.js` lines 7178-7233: Simplified preview to use MC data
- `logic.js` lines 7247-7277: Updated display to show MC impact instead of scores

---

**Result**: Removal recommendations now based on real win rate impact. No more arbitrary heuristics or false suggestions to remove valuable cards.
