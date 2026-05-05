# STS2 Advisor

Advanced card analysis tool for Slay the Spire 2 with scoring, synergy detection, Monte Carlo simulation, and visual insights.

## Overview

STS2 Advisor helps players make informed decisions about card rewards, shop purchases, and deck building by providing:
- Context-aware scoring (considers current deck, act, ascension, enemy stats)
- Monte Carlo combat simulation with baseline comparison
- Archetype detection and synergy scoring
- Dead draw analysis and combo requirement checking
- Best card recommendations with full scoring breakdown
- Deck statistics and visualization

## Project Structure

```
sts2-advisor/
├── index-v3.html          # Main UI (sidebar, tabs, deck display, analysis panels)
├── logic-v3.js            # Core application logic (3000+ lines)
├── sts2-cards.js          # Card database (~568 cards)
├── sts2-relics.js         # Relic database (~293 relics)
├── archetypes.js          # Archetype definitions and detection
├── AUDIT.md               # Manual testing checklist
├── AUDIT-SUMMARY.md       # Feature audit summary
├── test-checklist.js      # Automated verification script
└── CLAUDE.md              # This file
```

## Architecture

### Core Systems

**1. Deck Management**
- `currentDeck` array stores card names
- `upgradedCards` Set tracks upgraded cards by `{index}-{name}` key
- `cardEnchantments` Map tracks enchantments by same key pattern
- Persists to localStorage as JSON (`sts2-deck-state`)
- Re-indexes keys when cards are removed to maintain consistency

**2. Monte Carlo Simulation**
- `mcSimulations` variable (default 500, user-configurable)
- `mcBaselineWinRate` caches baseline deck win rate
- `mcBaselineHash` detects when cache is stale (deck changes)
- `mcCardCache` Map caches individual card results
- Invalidates all caches when deck changes via `invalidateMCBaseline()`

**3. Best Card Suggestions**
- Scores ALL character + colorless cards (no sampling)
- Uses full user simulation count (respects `mcSimulations`)
- Caches top 3 results per `character-deck-act-ascension` hash
- Filters Ancient rarity cards in Act 1 (only obtainable Act 2+ events)
- Updates automatically when deck changes

**4. Scoring System**
- Base score: 50 points
- Context-aware modifiers based on:
  - Current deck composition
  - Act and ascension level
  - Enemy HP and damage expectations
  - Existing archetypes and synergies
- NO arbitrary rarity bonuses
- Returns `{score, reason, breakdown}` object

## Scoring Heuristics

### Dead Draw Analysis
Detects cards that are literally unplayable:
- **Whirlwind/Flex/Sword Boomerang** without energy generation (-25)
- **Grand Finale** in large decks (-30)
- **Pact's End** without exhaust cards (-35)
- **Catalyst** without poison sources (-40)
- **Dropkick** without vulnerable sources (-15)
- **Double Tap** without attack targets (-15)
- **Burst** without skill targets (-15)

### Combo Requirements
Checks if deck supports combo cards:
- **Poison synergy**: Sources (Noxious Fumes) allowed, scaling cards (Catalyst) require existing poison
- **Strength synergy**: Sources (Inflame) allowed, scaling cards (Heavy Blade) require existing strength
- **Discard synergy**: Sources (Acrobatics) allowed, payoffs (Tactician) require existing discard
- **Block cards**: Not penalized if deck has < 3 skills total (first block card is fine)

Scoring:
- Strong synergy: +15
- Some synergy: +5
- Missing support: -10 to -25

### Deck Curve
Prevents overloading cost brackets:
- **4th 3-cost card** without energy: -20
- **3rd 3-cost card** without energy: -10
- **6th 2-cost card** without energy: -15
- **8th 2-cost card**: -8
- **5th 0-cost card** in small deck (<20 cards): -10

### Act Scaling
- **Power cards**: Act 1 = +8, Act 2 = +16, Act 3 = +24
- **Power penalty**: Act 1 without energy = -8
- **Enemy scaling**: Act 3 enemies deal 18 dmg vs Act 1's 8 dmg
- **Damage requirements**: Act 3 enemies have 95 HP vs Act 1's 45 HP
- **Weak damage**: Damage < enemyNormalDamage in Act 2+ = -15

### Type-Specific Scoring

**Attack Cards**
- Damage efficiency vs deck average: ±12
- Fast kill potential (<= 3 turns): +10
- Too slow to kill (>= 7 turns): -12
- Multi-hit with Strength synergy: +15
- Multi-hit without Strength: +5

**Skill Cards**
- Block efficiency vs deck average: ±12
- Meets min-block requirements: +15
- Weak block in defense deck: -12
- Card draw (context-aware based on deck size/needs): +8 to +15

**Power Cards**
- Base value scales with act: +8/+16/+24
- Diminishing returns: 2 powers = -3, 4+ powers = -10
- No energy in Act 1: -8
- High-cost (2+) without energy: -10

### MC Rollout Scoring
- Improvement >= 15%: +20
- Improvement >= 8%: +15
- Improvement >= 3%: +10
- Improvement >= 0%: +5
- Improvement < -5%: -15
- Improvement -5 to 0%: -8

Displays as: `MC: +6% (63% → 69%)`

### Removal Priority
Higher score = remove first:
- **Curse/Status cards**: +100
- **Poor scoring cards**: +25 to +40
- **High-cost starters (Bash)**: +15
- **Starter cards (Strike/Defend)**: Act 2+ = +35, Act 1 large deck = +25, Act 1 many cards = +20, Act 1 small deck = +5
- **High-cost in fast deck**: +10 to +15
- **Weak damage in attack deck**: +15
- **Weak block in defense deck**: +12
- **Off-archetype cards**: +10
- **Deck dilution (>25 cards)**: +8

Tiebreaker: Strike > Defend > others

## Character Data

### Starter Decks
- **Ironclad**: 5 Strike, 4 Defend, 1 Bash (10 cards)
- **Silent**: 5 Strike, 5 Defend, 1 Neutralize, 1 Survivor (12 cards)
- **Defect**: 4 Strike, 4 Defend, 1 Zap, 1 Dualcast (10 cards)
- **Regent**: 5 Strike, 4 Defend, 1 Falling Star (10 cards)
- **Necrobinder**: 4 Strike, 4 Defend, 1 Bodyguard, 1 Unleash (10 cards)

### Starter Relics
- **Ironclad**: Burning Blood
- **Silent**: Ring of the Snake
- **Defect**: Cracked Core
- **Necrobinder**: Bound Phylactery
- **Regent**: Divine Right

## Key Features

### 1. Card Rewards Analysis
- Add multiple reward cards via autocomplete
- Toggle upgrade/enchant on reward cards BEFORE adding to deck
- Score each card with full breakdown
- "Add to Deck" button for each card
- Skip recommendation if all cards < 45 score
- Hover preview shows card art, stats, score, reasoning

### 2. Shop Analysis
- Unified autocomplete for cards and relics
- Score character cards (deck threshold -5) and colorless cards
- Score relics (context-aware where implemented)
- Toggle upgrade/enchant on shop cards to see adjusted scores
- Purchase buttons (click card to add, click removal to remove worst)
- Skip recommendation if all items < 55 score
- Removal count tracking (cost increases: 50G, 75G, 100G, etc.)

### 3. Card Removal
- Auto-analyzes worst cards to remove
- Shows top 5 removal candidates with reasoning
- Click removal button in shop to remove top candidate
- Removal scoring synchronized between preview and action

### 4. Best Card Suggestions
- Top 3 recommended cards displayed as pills above Deck Setup
- Scores ALL character + colorless cards (no sampling)
- Cached per `character-deck-act-ascension` hash
- Hover shows full card details + scoring breakdown
- Click to add to deck
- Auto-updates when deck changes

### 5. Deck Statistics
- Card count, average cost, win %
- Cost distribution bar chart (0, 1, 2, 3, 4+, X)
- Type pie chart (Attack/Skill/Power)
- Archetype strength bars (detects Strength, Poison, Block, Shiv, Discard, etc.)
- Min-block analysis (expected damage vs block output)

### 6. Upgrades & Enchantments

**Upgrades**
- Toggle with + button on deck pills
- Visual: golden border, ✓ icon, + suffix
- Persists to localStorage
- Re-indexed when cards removed

**Enchantments**
- 6 types: Sharp (+3 damage), Nimble (-1 cost), Heavy (+8 block), Doublecast (play twice), Free (0 cost), Pristine (upgrade)
- Click ✨ button to open dropdown menu
- Visual: purple border, icon prefix
- Persists to localStorage
- Re-indexed when cards removed

### 7. Autocomplete
- Character priority: current character > colorless > other characters (alphabetical)
- Character badges for non-current cards
- Duplicate prevention
- Auto-focus on input after selection
- Clear button (×) for each input

### 8. UI/UX
- Tab switching (mouse clicks, keyboard shortcuts 1/2/3)
- Theme toggle (dark/light mode)
- Toast notifications (enable/disable via checkbox)
- Skeleton loading during analysis
- Responsive sidebar + main content layout
- Hover previews for all cards (pills, analysis results, suggestions)

## State Management

### Global State
```javascript
let currentDeck = [];                    // Array of card names
let currentRelics = [];                  // Array of relic names
let upgradedCards = new Set();           // Set of "{index}-{name}" keys
let cardEnchantments = new Map();        // Map of "{index}-{name}" → enchantment
let currentCharacter = 'ironclad';       // Selected character
let currentAct = 1;                      // Current act (1-3)
let currentAscension = 0;                // Ascension level (0-20)
let mcSimulations = 500;                 // MC rollout count (user-configurable)
let shopRemovalCount = 0;                // Number of removals purchased
let detectedArchetypes = new Map();      // Map of archetype → strength
```

### Caching
```javascript
let mcBaselineWinRate = null;            // Cached baseline (respects mcSimulations)
let mcBaselineHash = null;               // Deck state hash for invalidation
let mcCardCache = new Map();             // Card → {baselineHash, winRate}
let bestCardsCache = null;               // Top 3 cards cache
let bestCardsCacheHash = null;           // Hash for best cards invalidation
```

### Persistence
Saved to `localStorage['sts2-deck-state']`:
```json
{
  "deck": ["Strike", "Defend", ...],
  "upgradedCards": ["0-Strike", "3-Bash", ...],
  "cardEnchantments": [["1-Defend", "Sharp"], ...],
  "character": "ironclad",
  "act": 2,
  "ascension": 0,
  "mcSimulations": 500,
  "shopRemovalCount": 2
}
```

## Cache Invalidation

**Triggers** (calls `invalidateMCBaseline()`):
1. `resetRun()` - Clears all state
2. `loadStarter()` - Loads new starter deck
3. `addCardToDeck()` - Adds card via autocomplete
4. `addCardToDeckPill()` - Adds card from pill (internal)
5. `addRewardCardToDeck()` - Adds from reward analysis
6. `removeCardFromDeck()` - Removes card from deck
7. `purchaseShopCard()` - Purchases from shop
8. `purchaseShopRemoval()` - Purchases removal

**Effect**:
- Clears `mcBaselineWinRate`, `mcBaselineHash`, `mcCardCache`
- Clears `bestCardsCache`, `bestCardsCacheHash`
- Next analysis recalculates baseline with full sim count
- Next best cards update rescores all cards

## Known Limitations

1. **Card data doesn't include upgraded stats**
   - Upgrades tracked as boolean only
   - Hover preview estimates upgrade values (~40% increase)

2. **Enchantments tracked but not factored into MC simulation**
   - Enchantment bonuses added to score breakdown
   - MC rollout doesn't simulate actual enchantment effects

3. **Hover preview doesn't show exact upgraded damage/block**
   - Uses estimation formula (damage * 1.4, cost - 1 if >= 2)
   - Actual upgrade values may differ

4. **No validation that enchantment makes sense for card type**
   - Can apply Sharp to non-damage cards
   - Can apply Nimble to 0-cost cards

5. **Unanalyzed relics get generic score of 55**
   - Yellow dashed border with ⚠️ icon
   - Tooltip warns: "Generic score - relic not context-analyzed"

6. **Ancient rarity cards (18 cards)**
   - Only obtainable from Act 2+ events
   - Filtered from Act 1 best suggestions
   - NOT filtered from reward/shop analysis (user might have them)

7. **STS2 is Early Access**
   - Card database may be incomplete or outdated
   - Balance changes may affect scoring accuracy

## Development Guidelines

### Code Style
- Use `findCard(name)` to safely look up cards (handles normalization)
- Use `scoreCard(name)` for scoring (returns `{score, reason, breakdown}`)
- Use `invalidateMCBaseline()` after any deck modification
- Use `saveDeckState()` after state changes to persist
- Use inline event handlers (`onclick`, `onmouseenter`) for consistency

### Avoiding Bugs
1. **Always re-index upgrade/enchant keys after card removal**
   ```javascript
   // After splice, re-index remaining cards
   for (let i = removedIndex; i < currentDeck.length; i++) {
     const oldKey = `${i+1}-${currentDeck[i]}`;
     const newKey = `${i}-${currentDeck[i]}`;
     if (upgradedCards.has(oldKey)) {
       upgradedCards.delete(oldKey);
       upgradedCards.add(newKey);
     }
     if (cardEnchantments.has(oldKey)) {
       const enchant = cardEnchantments.get(oldKey);
       cardEnchantments.delete(oldKey);
       cardEnchantments.set(newKey, enchant);
     }
   }
   ```

2. **Sync duplicate logic between functions**
   - `purchaseShopRemoval()` and `showRemovalPreview()` must use identical scoring
   - Keep them in sync or extract to shared function

3. **Check cache validity before using**
   ```javascript
   const currentHash = `${currentCharacter}-${currentDeck.join(',')}-${currentAct}-${currentAscension}`;
   if (bestCardsCache && bestCardsCacheHash === currentHash) {
     // Use cache
   } else {
     // Recalculate
   }
   ```

4. **Never hardcode simulation counts**
   - Always use `mcSimulations` variable (respects user setting)
   - Never override without restoring

### Adding New Heuristics

**Dead Draw Check** (`checkDeadDraw`):
```javascript
function checkDeadDraw(card, cardName, deckCtx) {
  const name = cardName.toLowerCase();
  
  if (name === 'my-card') {
    const hasSupport = currentDeck.some(c => {
      const card = findCard(c);
      return card?.keywords && /* check condition */;
    });
    if (!hasSupport) {
      return -30; // Penalty
    }
  }
  
  return 0;
}
```

**Combo Requirement** (`checkComboRequirements`):
```javascript
function checkComboRequirements(card, cardName, deckCtx) {
  const name = cardName.toLowerCase();
  
  if (name === 'my-scaling-card') {
    const supportCount = currentDeck.filter(c => /* check condition */).length;
    
    if (supportCount >= 2) {
      return { bonus: 15, reason: 'Strong synergy' };
    } else if (supportCount === 1) {
      return { bonus: 5, reason: 'Some synergy' };
    } else {
      return { penalty: -25, reason: 'No support' };
    }
  }
  
  return { penalty: 0, bonus: 0, reason: '' };
}
```

**Archetype Detection** (in `archetypes.js`):
```javascript
ARCHETYPE_PATTERNS.push({
  name: 'My Archetype',
  threshold: 3,
  cards: ['Card A', 'Card B', 'Card C'],
  keywords: ['keyword1', 'keyword2'],
  relics: ['Relic A']
});
```

### Testing Checklist

After making changes:
1. Hard refresh browser (clear cache)
2. Open console (check for errors)
3. Load starter deck
4. Add/remove cards (check persistence)
5. Toggle upgrades/enchants
6. Analyze rewards (verify "Add to Deck" button text)
7. Hover over analyzed cards (verify preview appears)
8. Click shop removal button (verify correct card removed)
9. Refresh page (verify state persists)
10. Check localStorage for valid JSON

### Console Verification
Expected logs:
```
Loaded STS2 cards: 568
Loaded STS2 relics: 293
MC Baseline calculated: 64% win rate (500 sims)
```

Unexpected:
```
STS2_CARDS not loaded!
Card not found: [name]
positionPreview: no target found (should only happen on edge cases)
```

## File Dependencies

### index-v3.html requires:
- `logic-v3.js` (main application)
- `sts2-cards.js` (card database, defines `STS2_CARDS`)
- `sts2-relics.js` (relic database, defines `STS2_RELICS`)
- `archetypes.js` (archetype definitions)

### Load order:
1. Card/relic databases (define globals)
2. Archetypes (uses card data)
3. Logic (uses all above)
4. HTML (last, references all)

## Future Improvements

### High Priority
1. Add exact upgraded stats to card database
2. Factor enchantments into MC simulation
3. Context-analyze all relics (currently ~50% have generic scores)
4. Add boss-specific optimization (Heart, Time Eater, etc.)
5. Duplicate detection in removal (prefer removing 3rd Strike over 1st)

### Medium Priority
6. Exhaust deck support detection
7. Situational card power ratings (Time Eater vs card draw)
8. Gap analysis in removal (don't remove ALL block cards)
9. Negative synergy detection (Dead Branch + cost reduction)
10. Keep high-upgrade-potential cards in removal

### Low Priority
11. Consistency vs power tradeoff scoring
12. Front-loaded vs scaling timing preferences
13. Floor context (?, elite, boss) in scoring
14. More detailed archetype sub-types (Poison Burst vs Poison Noxious)
15. Visual deck builder (drag-and-drop cards)

## Performance Notes

- **First best cards calculation**: ~2-5 seconds (scores 200-300 cards at 500 sims each)
- **Cached best cards**: Instant (< 1ms)
- **MC baseline calculation**: ~500ms (500 sims on 10-card deck)
- **Single card score**: ~50ms (with MC rollout)
- **Cache hit rate**: ~95% after initial calculation (only misses on deck/act/character change)

## Contact & Support

This is a single-player analysis tool. No network features, no multiplayer, no external services.

For bug reports or feature requests, use the GitHub issues if this project is hosted there.

## License

(Add license information if applicable)

---

**Last Updated**: 2026-05-05
**Version**: v3 (major refactor with MC simulation and best cards)
**Compatibility**: Slay the Spire 2 Early Access
