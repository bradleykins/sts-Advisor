# CORS and Loading Issues Fix

**Date**: 2026-05-07

## Problems

1. **CARD_UPGRADES declared twice**
   - Once in `index.html` inline script
   - Once in `combat-simulator.js` loader
   - Error: "Identifier 'CARD_UPGRADES' has already been declared"

2. **CORS blocking JSON fetch**
   - `fetch('card-upgrades.json')` fails with file:// protocol
   - Error: "Cross origin requests are only supported for protocol schemes: http, https..."
   - Browser security prevents loading local JSON files

3. **simulateCombatNew not defined**
   - `combat-simulator.js` not loading before `logic.js`
   - Script order issue caused by async fetch

## Solutions

### 1. Convert JSON to JS File
**Before**: `card-upgrades.json` (requires fetch)
```javascript
// In index.html
fetch('card-upgrades.json')
  .then(r => r.json())
  .then(data => { CARD_UPGRADES = data; })
```

**After**: `card-upgrades.js` (direct script load)
```javascript
const CARD_UPGRADES = {
  "Abrasive": { ... },
  "Strike": { ... },
  // ... 532 cards
};
```

**Command to generate**:
```bash
echo "const CARD_UPGRADES = $(cat card-upgrades.json);" > card-upgrades.js
```

### 2. Remove Duplicate Declarations

**combat-simulator.js**:
```javascript
// REMOVED:
let CARD_UPGRADES = {};
// ... fetch/require logic ...

// REPLACED WITH:
// CARD_UPGRADES is loaded via card-upgrades.js script tag before this file
```

**index.html**:
```html
<!-- REMOVED inline fetch script -->

<!-- ADDED: -->
<script src="card-upgrades.js"></script>
<script src="combat-simulator.js"></script>
<script src="logic.js"></script>
<script>
  // Log after everything loads
  if (typeof CARD_UPGRADES !== 'undefined') {
    console.log('Loaded exact upgrade data for', Object.keys(CARD_UPGRADES).length, 'cards');
  }
</script>
```

### 3. Fixed Script Load Order

**Correct order**:
1. `sts2-cards.js` - Defines STS2_CARDS
2. `sts2-relics.js` - Defines STS2_RELICS, RELIC_EFFECTS
3. `archetypes.js` - Defines ARCHETYPE_PATTERNS
4. `card-upgrades.js` - Defines CARD_UPGRADES ← **NEW**
5. `combat-simulator.js` - Defines simulateCombatNew, uses CARD_UPGRADES
6. `logic.js` - Uses all above, calls simulateCombatNew

## File Size

- `card-upgrades.json`: 127KB (keep for reference)
- `card-upgrades.js`: 127KB (used in app)

Negligible impact on load time (modern browsers parse JS faster than JSON anyway).

## Why JS Over JSON?

**Advantages of .js file**:
✓ No CORS issues with file:// protocol
✓ Synchronous loading (guaranteed before other scripts)
✓ No async/await complexity
✓ Browser caches efficiently
✓ No fetch() error handling needed

**Disadvantages**:
✗ Can't update data without editing code (but we generate it anyway)
✗ Slightly larger (const declaration overhead)

For a single-page app loaded locally, JS file is the correct choice.

## Testing

1. Open `index.html` in browser
2. Check console for: "Loaded exact upgrade data for 532 cards"
3. No CORS errors
4. No "CARD_UPGRADES already declared" errors
5. No "simulateCombatNew is not defined" errors
6. MC simulations work correctly

## Files Changed

- `card-upgrades.js` (NEW) - 127KB, defines CARD_UPGRADES constant
- `index.html` - Removed fetch, added script tag
- `combat-simulator.js` - Removed duplicate CARD_UPGRADES declaration
- `test-upgrades.html` - Use card-upgrades.js instead of fetch
- `UPGRADE_API_INTEGRATION.md` - Updated documentation

---

**Result**: All loading errors resolved. CARD_UPGRADES loads synchronously before all dependent scripts.
