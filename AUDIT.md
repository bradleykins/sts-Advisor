# STS2 Advisor Feature Audit

## Core Features

### Deck Management
- [ ] **Load starter deck** - Click Ironclad starter button
- [ ] **Add cards via autocomplete** - Type and select cards
- [ ] **Remove cards** - Click X on card pills
- [ ] **Deck persists** - Refresh page, deck should remain
- [ ] **Character selection** - Change character, autocomplete updates
- [ ] **Act/Ascension selection** - Dropdowns work

### Card Upgrades
- [ ] **Toggle upgrade** - Click + button on deck card pill
- [ ] **Upgrade visual** - Card shows ✓, golden border, + suffix on name
- [ ] **Upgrade persists** - Refresh page, upgrades remain

### Enchantments
- [ ] **Open enchant menu** - Click ✨ button on deck card pill
- [ ] **Select enchantment** - Choose from Sharp, Nimble, Heavy, etc.
- [ ] **Enchant visual** - Icon appears on card pill, purple border
- [ ] **Remove enchantment** - Click 🚫 in menu
- [ ] **Enchant persists** - Refresh page, enchantments remain

### Card Rewards Analysis
- [ ] **Add reward cards** - Use autocomplete in "Choose the Rewards" section
- [ ] **Input refocus** - After selecting card, input refocuses automatically
- [ ] **Duplicate prevention** - Cannot select same card twice
- [ ] **Analyze rewards** - Click "⚡ Analyze Rewards"
- [ ] **Card results display** - Shows scored cards with breakdown
- [ ] **Add to deck** - "➕ Add to Deck" button appears (NOT "⚡ Analyze Rewards")
- [ ] **Add to deck works** - Click button, card added to deck pills
- [ ] **Skip recommendation** - If all cards score <45, shows SKIP banner
- [ ] **Hover preview** - Hover over analyzed card shows preview with art/cost/keywords/score

### Shop Analysis
- [ ] **Add shop cards** - Use autocomplete in shop tab
- [ ] **Analyze shop** - Click analyze button
- [ ] **Shop results** - Shows scored cards
- [ ] **Skip recommendation** - If all cards score <55, shows SKIP

### Card Removal
- [ ] **Auto-analyze removals** - Shows worst cards to remove
- [ ] **Removal scoring** - Starter cards + high-cost cards scored higher

### Deck Stats
- [ ] **Card count** - Updates as cards added/removed
- [ ] **Avg cost** - Calculates correctly
- [ ] **Win %** - Shows deck health estimate
- [ ] **Cost distribution chart** - Bar chart shows 0-4+ and X cost counts
- [ ] **Type pie chart** - Shows Attack/Skill/Power split
- [ ] **Archetype strength** - Bars show detected archetypes (Strength, Poison, etc.)

### Min-Block Analysis
- [ ] **Expected damage** - Shows damage per turn for current act/ascension
- [ ] **Block/turn** - Calculates deck's block output
- [ ] **Damage/turn** - Calculates deck's damage output
- [ ] **Turns to kill** - Estimates combat length

### UI/UX
- [ ] **Tab switching** - Keyboard shortcuts 1/2/3 work
- [ ] **Tab switching** - Mouse clicks work
- [ ] **Theme toggle** - Dark/light mode works
- [ ] **Toast notifications** - Success/info/warning toasts appear
- [ ] **Skeleton loading** - Shows during analysis
- [ ] **Button states** - Loading spinner on analyze buttons
- [ ] **Responsive layout** - Sidebar + main content layout

### Autocomplete
- [ ] **Character priority** - Current character cards appear first
- [ ] **Colorless cards** - Appear after character cards
- [ ] **Other characters** - Appear last, alphabetically
- [ ] **Character badges** - Non-current-character cards show badge
- [ ] **Dropdown opens** - On input focus/typing
- [ ] **Dropdown closes** - On selection or outside click
- [ ] **Clear buttons** - X button clears input

## Known Issues to Check

### Critical
1. **"Add to Deck" button text** - MUST show "➕ Add to Deck", NOT "⚡ Analyze Rewards"
   - Fixed: setLoading() now targets specific button by ID
2. **Hover preview on analyzed cards** - MUST show preview on hover
   - Fixed: Added onmouseenter to card-result div, updated positionPreview

### Previously Fixed
- ✅ Clear button sizing (24px × 24px)
- ✅ Clear button hover animation (only bg/color, not transform)
- ✅ Input refocus after card selection
- ✅ Duplicate prevention in autocomplete
- ✅ Deck persistence to localStorage

## Console Checks
- [ ] No JavaScript errors
- [ ] Debug log shows: "showCardPreview called: [cardName]"
- [ ] No "undefined" in rendered HTML

## Browser Storage
- Open DevTools → Application → Local Storage → file://
- [ ] `sts2-deck-state` exists after adding cards
- [ ] Contains: deck, upgradedCards, cardEnchantments, character, act, ascension
