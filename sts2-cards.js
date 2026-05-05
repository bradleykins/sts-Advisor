// STS2 Card Database from spire-archive
// Source: https://github.com/nkhoit/spire-archive
// Last updated: 2026-05-05
// Total cards: 568
// With images: 559

const STS2_CARDS = {
  "ABRASIVE": {
    "name": "Abrasive",
    "character": "silent",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [
      "Sly"
    ],
    "description": "Gain 1 Dexterity.\nGain 4 Thorns.",
    "vars": {
      "power_thorns": 4,
      "power_dexterity": 1
    },
    "upgrade": {
      "thorns": 2
    },
    "target": "Self",
    "image": "images/cards/abrasive.png"
  },
  "ACCELERANT": {
    "name": "Accelerant",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Poison is triggered 1 additional time.",
    "vars": {
      "accelerant": 1
    },
    "upgrade": {
      "accelerant": 1,
      "description": "Poison is triggered 2 additional times."
    },
    "target": "Self",
    "image": "images/cards/accelerant.png"
  },
  "ACCURACY": {
    "name": "Accuracy",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Shivs deal 4 additional damage.",
    "vars": {
      "power_accuracy": 4
    },
    "upgrade": {
      "accuracy": 2
    },
    "target": "Self",
    "image": "images/cards/accuracy.png"
  },
  "ACROBATICS": {
    "name": "Acrobatics",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw 3 cards.\nDiscard 1 card.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/acrobatics.png"
  },
  "ADAPTIVE STRIKE": {
    "name": "Adaptive Strike",
    "character": "defect",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 18 damage.\nAdd a 0[E] copy of this card into your Discard Pile.",
    "vars": {
      "damage": 18
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/adaptive_strike.png"
  },
  "ADRENALINE": {
    "name": "Adrenaline",
    "character": "silent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain [E].\nDraw 2 cards.",
    "vars": {
      "cards": 2,
      "energy": 1
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/adrenaline.png"
  },
  "AFTERIMAGE": {
    "name": "Afterimage",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you play a card, gain 1 Block.",
    "vars": {
      "power_afterimage": 1
    },
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/afterimage.png"
  },
  "AFTERLIFE": {
    "name": "Afterlife",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Summon 6.",
    "vars": {
      "summon": 6
    },
    "upgrade": {
      "summon": 3
    },
    "target": "Self",
    "image": "images/cards/afterlife.png"
  },
  "AGGRESSION": {
    "name": "Aggression",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, put a random Attack from your Discard Pile into your Hand and Upgrade it.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/aggression.png"
  },
  "ALCHEMIZE": {
    "name": "Alchemize",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Procure a random potion.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/alchemize.png"
  },
  "ALIGNMENT": {
    "name": "Alignment",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain [E][E].",
    "vars": {
      "energy": 2
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/alignment.png"
  },
  "ALL FOR ONE": {
    "name": "All for One",
    "character": "defect",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 10 damage.\nPut ALL 0[E] cards from your Discard Pile into your Hand.",
    "vars": {
      "damage": 10
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/all_for_one.png"
  },
  "ANGER": {
    "name": "Anger",
    "character": "ironclad",
    "type": "Attack",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 6 damage.\nAdd a copy of this card into your Discard Pile.",
    "vars": {
      "damage": 6
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/anger.png"
  },
  "ANOINTED": {
    "name": "Anointed",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Put every Rare card from your Draw Pile into your Hand.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/anointed.png"
  },
  "ANTICIPATE": {
    "name": "Anticipate",
    "character": "silent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 2 Dexterity this turn.",
    "vars": {
      "power_dexterity": 2
    },
    "upgrade": {
      "dexterity": 1
    },
    "target": "Self",
    "image": "images/cards/anticipate.png"
  },
  "APOTHEOSIS": {
    "name": "Apotheosis",
    "character": "event",
    "type": "Skill",
    "cost": 2,
    "rarity": "Ancient",
    "keywords": [
      "Exhaust",
      "Innate"
    ],
    "description": "Upgrade ALL your cards.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/apotheosis.png"
  },
  "APPARITION": {
    "name": "Apparition",
    "character": "event",
    "type": "Skill",
    "cost": 1,
    "rarity": "Ancient",
    "keywords": [
      "Ethereal",
      "Exhaust"
    ],
    "description": "Gain 1 Intangible.",
    "vars": {
      "power_intangible": 1
    },
    "upgrade": {
      "remove_keywords": [
        "Ethereal"
      ]
    },
    "target": "Self",
    "image": "images/cards/apparition.png"
  },
  "ARMAMENTS": {
    "name": "Armaments",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 5 Block.\nUpgrade a card in your Hand.",
    "vars": {
      "block": 5
    },
    "upgrade": {
      "description": "Gain 5 Block.\nUpgrade ALL cards in your Hand."
    },
    "target": "Self",
    "image": "images/cards/armaments.png"
  },
  "ARSENAL": {
    "name": "Arsenal",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you create a card, gain 1 Strength.",
    "vars": {
      "power_arsenal": 1
    },
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/arsenal.png"
  },
  "ASCENDER'S BANE": {
    "name": "Ascender's Bane",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Eternal",
      "Ethereal",
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None"
  },
  "ASHEN STRIKE": {
    "name": "Ashen Strike",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 6 damage.\nDeals 3 additional damage for each card in your Exhaust Pile.",
    "vars": {
      "extra_damage": 3,
      "calculation_base": 6
    },
    "upgrade": {
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/ashen_strike.png"
  },
  "ASSASSINATE": {
    "name": "Assassinate",
    "character": "silent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust",
      "Innate"
    ],
    "description": "Deal 10 damage.\nApply 1 Vulnerable.",
    "vars": {
      "damage": 10,
      "power_vulnerable": 1
    },
    "upgrade": {
      "damage": 3,
      "vulnerable": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/assassinate.png"
  },
  "ASTRAL PULSE": {
    "name": "Astral Pulse",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 14 damage to ALL enemies.",
    "vars": {
      "damage": 14
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AllEnemies",
    "image": "images/cards/astral_pulse.png"
  },
  "AUTOMATION": {
    "name": "Automation",
    "character": "colorless",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Every 10 cards you draw, gain [E].",
    "vars": {
      "energy": 1
    },
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/automation.png"
  },
  "BACKFLIP": {
    "name": "Backflip",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 5 Block.\nDraw 2 cards.",
    "vars": {
      "block": 5,
      "cards": 2
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/backflip.png"
  },
  "BACKSTAB": {
    "name": "Backstab",
    "character": "silent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust",
      "Innate"
    ],
    "description": "Deal 11 damage.",
    "vars": {
      "damage": 11
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/backstab.png"
  },
  "BAD LUCK": {
    "name": "Bad Luck",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Eternal",
      "Unplayable"
    ],
    "description": "At the end of your turn, if this is in your Hand, lose 13 HP.",
    "vars": {
      "hp_loss": 13
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/bad_luck.png"
  },
  "BALL LIGHTNING": {
    "name": "Ball Lightning",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 7 damage.\nChannel 1 Lightning.",
    "vars": {
      "damage": 7
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/ball_lightning.png"
  },
  "BANSHEE'S CRY": {
    "name": "Banshee's Cry",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 9,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 33 damage to ALL enemies.\nCosts [E][E] less for each Ethereal card played this combat.",
    "vars": {
      "damage": 33,
      "energy": 2
    },
    "upgrade": {
      "cost": 7
    },
    "target": "AllEnemies"
  },
  "BARRAGE": {
    "name": "Barrage",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 5 damage for each Channeled Orb.",
    "vars": {
      "damage": 5,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 2,
      "description": "Deal 7 damage for each Channeled Orb."
    },
    "target": "AnyEnemy",
    "image": "images/cards/barrage.png"
  },
  "BARRICADE": {
    "name": "Barricade",
    "character": "ironclad",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Block is not removed at the start of your turn.",
    "vars": {},
    "upgrade": {
      "cost": 2
    },
    "target": "Self",
    "image": "images/cards/barricade.png"
  },
  "BASH": {
    "name": "Bash",
    "character": "ironclad",
    "type": "Attack",
    "cost": 2,
    "rarity": "Basic",
    "keywords": [],
    "description": "Deal 8 damage.\nApply 2 Vulnerable.",
    "vars": {
      "damage": 8,
      "power_vulnerable": 2
    },
    "upgrade": {
      "damage": 2,
      "vulnerable": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/bash.png"
  },
  "BATTLE TRANCE": {
    "name": "Battle Trance",
    "character": "ironclad",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw 3 cards.\nYou cannot draw additional cards this turn.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/battle_trance.png"
  },
  "BEACON OF HOPE": {
    "name": "Beacon of Hope",
    "character": "colorless",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you gain Block on your turn, other players gain half that much Block.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/beacon_of_hope.png"
  },
  "BEAM CELL": {
    "name": "Beam Cell",
    "character": "defect",
    "type": "Attack",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 3 damage.\nApply 1 Vulnerable.",
    "vars": {
      "damage": 3,
      "power_vulnerable": 1
    },
    "upgrade": {
      "damage": 1,
      "vulnerable": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/beam_cell.png"
  },
  "BEAT DOWN": {
    "name": "Beat Down",
    "character": "colorless",
    "type": "Skill",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Play 3 random Attacks from your Discard Pile.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1
    },
    "target": "RandomEnemy",
    "image": "images/cards/beat_down.png"
  },
  "BEAT INTO SHAPE": {
    "name": "Beat into Shape",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 5 damage.\nForge 5.\nForges an additional 5 for every other time you've hit the enemy this turn.",
    "vars": {
      "damage": 5,
      "calculation_base": 5,
      "calculation_extra": 5
    },
    "upgrade": {
      "damage": 2,
      "calculation_base": 2,
      "calculation_extra": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/beat_into_shape.png"
  },
  "BECKON": {
    "name": "Beckon",
    "character": "status",
    "type": "Status",
    "cost": 1,
    "rarity": "Status",
    "keywords": [],
    "description": "At the end of your turn, if this is in your Hand,\n lose 6 HP.",
    "vars": {
      "hp_loss": 6
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/beckon.png"
  },
  "BEGONE!": {
    "name": "BEGONE!",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Choose a card in your Hand to Transform into Minion Strike.",
    "vars": {},
    "upgrade": {
      "description": "Choose a card in your Hand to Transform into Minion Strike+."
    },
    "target": "Self",
    "image": "images/cards/begone.png"
  },
  "BELIEVE IN YOU": {
    "name": "Believe in You",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Another player gains [E][E].",
    "vars": {
      "energy": 2
    },
    "upgrade": {
      "energy": 1
    },
    "target": "AnyAlly",
    "image": "images/cards/believe_in_you.png"
  },
  "BIASED COGNITION": {
    "name": "Biased Cognition",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Gain 4 Focus.\nAt the start of your turn, lose 1 Focus.",
    "vars": {
      "power_focus": 4,
      "power_biased_cognition": 1
    },
    "upgrade": {
      "focus": 1
    },
    "target": "Self",
    "image": "images/cards/biased_cognition.png"
  },
  "BIG BANG": {
    "name": "Big Bang",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Draw 1 card.\nGain [E].\nGain [S].\nForge 5.",
    "vars": {
      "cards": 1,
      "energy": 1,
      "forge": 5,
      "stars_var": 1
    },
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/big_bang.png"
  },
  "BLACK HOLE": {
    "name": "Black Hole",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you spend or gain [S], deal 3 damage to ALL enemies.",
    "vars": {
      "power_black_hole": 3
    },
    "upgrade": {
      "black_hole": 1
    },
    "target": "Self",
    "image": "images/cards/black_hole.png"
  },
  "BLADE DANCE": {
    "name": "Blade Dance",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Add 3 Shivs into your Hand.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1,
      "description": "Add 4 Shivs into your Hand."
    },
    "target": "Self",
    "image": "images/cards/blade_dance.png"
  },
  "BLADE OF INK": {
    "name": "Blade of Ink",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Add 2 Inky Shivs into your Hand.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1,
      "description": "Add 3 Inky Shivs into your Hand."
    },
    "target": "Self",
    "image": "images/cards/blade_of_ink.png"
  },
  "BLIGHT STRIKE": {
    "name": "Blight Strike",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 8 damage.\nApply Doom equal to damage dealt.",
    "vars": {
      "damage": 8
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/blight_strike.png"
  },
  "BLOOD WALL": {
    "name": "Blood Wall",
    "character": "ironclad",
    "type": "Skill",
    "cost": 2,
    "rarity": "Common",
    "keywords": [],
    "description": "Lose 2 HP.\nGain 16 Block.",
    "vars": {
      "block": 16,
      "hp_loss": 2
    },
    "upgrade": {
      "block": 4
    },
    "target": "Self",
    "image": "images/cards/blood_wall.png"
  },
  "BLOODLETTING": {
    "name": "Bloodletting",
    "character": "ironclad",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Lose 3 HP.\nGain [E][E].",
    "vars": {
      "energy": 2,
      "hp_loss": 3
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/bloodletting.png"
  },
  "BLUDGEON": {
    "name": "Bludgeon",
    "character": "ironclad",
    "type": "Attack",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 32 damage.",
    "vars": {
      "damage": 32
    },
    "upgrade": {
      "damage": 10
    },
    "target": "AnyEnemy",
    "image": "images/cards/bludgeon.png"
  },
  "BLUR": {
    "name": "Blur",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 5 Block.\nBlock is not removed at the start of your next turn.",
    "vars": {
      "block": 5,
      "blur": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/blur.png"
  },
  "BODY SLAM": {
    "name": "Body Slam",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal damage equal to your Block.",
    "vars": {
      "extra_damage": 1,
      "calculation_base": 0
    },
    "upgrade": {
      "cost": 0
    },
    "target": "AnyEnemy",
    "image": "images/cards/body_slam.png"
  },
  "BODYGUARD": {
    "name": "Bodyguard",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Basic",
    "keywords": [],
    "description": "Summon 5.",
    "vars": {
      "summon": 5
    },
    "upgrade": {
      "summon": 2
    },
    "target": "Self",
    "image": "images/cards/bodyguard.png"
  },
  "BOLAS": {
    "name": "Bolas",
    "character": "colorless",
    "type": "Attack",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 3 damage.\nAt the start of your next turn, return this to your Hand.",
    "vars": {
      "damage": 3
    },
    "upgrade": {
      "damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/bolas.png"
  },
  "BOMBARDMENT": {
    "name": "Bombardment",
    "character": "regent",
    "type": "Attack",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 18 damage.\nAt the start of your turn, if this is in your Exhaust Pile, play it.",
    "vars": {
      "damage": 18
    },
    "upgrade": {
      "damage": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/bombardment.png"
  },
  "BONE SHARDS": {
    "name": "Bone Shards",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "If Osty is alive, he deals 9 damage to ALL enemies and you gain 9 Block.\nOsty dies.",
    "vars": {
      "osty_damage": 9,
      "block": 9
    },
    "upgrade": {
      "osty_damage": 3,
      "block": 3
    },
    "target": "AllEnemies",
    "image": "images/cards/bone_shards.png"
  },
  "BOOST AWAY": {
    "name": "Boost Away",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 6 Block.\nAdd a Dazed into your Discard Pile.",
    "vars": {
      "block": 6
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/boost_away.png"
  },
  "BOOT SEQUENCE": {
    "name": "Boot Sequence",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust",
      "Innate"
    ],
    "description": "Gain 10 Block.",
    "vars": {
      "block": 10
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/boot_sequence.png"
  },
  "BORROWED TIME": {
    "name": "Borrowed Time",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain [E][E][E][E].\nCards cost an additional [E] this turn.",
    "vars": {
      "energy": 4,
      "extra_cost": 1
    },
    "upgrade": {
      "energy": 2
    },
    "target": "Self",
    "image": "images/cards/borrowed_time.png"
  },
  "BOUNCING FLASK": {
    "name": "Bouncing Flask",
    "character": "silent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Apply 3 Poison to a random enemy 3 times.",
    "vars": {
      "repeat": 3,
      "power_poison": 3
    },
    "upgrade": {
      "repeat": 1
    },
    "target": "RandomEnemy",
    "image": "images/cards/bouncing_flask.png"
  },
  "BRAND": {
    "name": "Brand",
    "character": "ironclad",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Lose 1 HP.\nExhaust 1 card.\nGain 1 Strength.",
    "vars": {
      "hp_loss": 1,
      "power_strength": 1
    },
    "upgrade": {
      "strength": 1
    },
    "target": "Self",
    "image": "images/cards/brand.png"
  },
  "BREAK": {
    "name": "Break",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Deal 20 damage.\nApply 5 Vulnerable.",
    "vars": {
      "damage": 20,
      "power_vulnerable": 5
    },
    "upgrade": {
      "damage": 10,
      "vulnerable": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/break.png"
  },
  "BREAKTHROUGH": {
    "name": "Breakthrough",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Lose 1 HP.\nDeal 9 damage to ALL enemies.",
    "vars": {
      "damage": 9,
      "hp_loss": 1
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AllEnemies",
    "image": "images/cards/breakthrough.png"
  },
  "BRIGHTEST FLAME": {
    "name": "Brightest Flame",
    "character": "event",
    "type": "Skill",
    "cost": 0,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Gain [E][E].\nDraw 2 cards.\nLose 1 Max HP.",
    "vars": {
      "cards": 2,
      "energy": 2,
      "max_hp": 1
    },
    "upgrade": {
      "energy": 1,
      "cards": 1,
      "description": "Gain [E][E][E].\nDraw 3 cards.\nLose 1 Max HP."
    },
    "target": "Self",
    "image": "images/cards/brightest_flame.png"
  },
  "BUBBLE BUBBLE": {
    "name": "Bubble Bubble",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "If the enemy has Poison, apply 9 Poison.",
    "vars": {
      "power_poison": 9
    },
    "upgrade": {
      "poison": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/bubble_bubble.png"
  },
  "BUFFER": {
    "name": "Buffer",
    "character": "defect",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Prevent the next time you would lose HP.",
    "vars": {
      "power_buffer": 1
    },
    "upgrade": {
      "buffer": 1,
      "description": "Prevent the next 2 times you would lose HP."
    },
    "target": "Self",
    "image": "images/cards/buffer.png"
  },
  "BULK UP": {
    "name": "Bulk Up",
    "character": "defect",
    "type": "Power",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Lose 1 Orb Slot.\nGain 2 Strength.\nGain 2 Dexterity.",
    "vars": {
      "power_strength": 2,
      "power_dexterity": 2,
      "orb_slots": 1
    },
    "upgrade": {
      "strength": 1,
      "dexterity": 1,
      "description": "Lose 1 Orb Slot.\nGain 3 Strength.\nGain 3 Dexterity."
    },
    "target": "Self",
    "image": "images/cards/bulk_up.png"
  },
  "BULLET TIME": {
    "name": "Bullet Time",
    "character": "silent",
    "type": "Skill",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "You cannot draw additional cards this turn. ALL cards in your Hand are free to play this turn.",
    "vars": {},
    "upgrade": {
      "cost": 2
    },
    "target": "Self",
    "image": "images/cards/bullet_time.png"
  },
  "BULLY": {
    "name": "Bully",
    "character": "ironclad",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 4 damage.\nDeals 2 additional damage for each Vulnerable on the enemy.",
    "vars": {
      "extra_damage": 2,
      "calculation_base": 4
    },
    "upgrade": {
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/bully.png"
  },
  "BULWARK": {
    "name": "Bulwark",
    "character": "regent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 13 Block.\nForge 10.",
    "vars": {
      "block": 13,
      "forge": 10
    },
    "upgrade": {
      "block": 3,
      "forge": 3
    },
    "target": "Self",
    "image": "images/cards/bulwark.png"
  },
  "BUNDLE OF JOY": {
    "name": "Bundle of Joy",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Add 3 random Colorless cards into your Hand.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1,
      "description": "Add 4 random Colorless cards into your Hand."
    },
    "target": "Self",
    "image": "images/cards/bundle_of_joy.png"
  },
  "BURN": {
    "name": "Burn",
    "character": "status",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [
      "Unplayable"
    ],
    "description": "At the end of your turn, if this is in your Hand, take 2 damage.",
    "vars": {
      "damage": 2
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/burn.png"
  },
  "BURNING PACT": {
    "name": "Burning Pact",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Exhaust 1 card.\nDraw 2 cards.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/burning_pact.png"
  },
  "BURST": {
    "name": "Burst",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "This turn, your next Skill is played an extra time.",
    "vars": {
      "skills": 1
    },
    "upgrade": {
      "skills": 1,
      "description": "This turn, your next 2 Skills are played an extra time."
    },
    "target": "Self",
    "image": "images/cards/burst.png"
  },
  "BURY": {
    "name": "Bury",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 4,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 52 damage.",
    "vars": {
      "damage": 52
    },
    "upgrade": {
      "damage": 11
    },
    "target": "AnyEnemy",
    "image": "images/cards/bury.png"
  },
  "BYRD SWOOP": {
    "name": "Byrd Swoop",
    "character": "event",
    "type": "Attack",
    "cost": 0,
    "rarity": "Event",
    "keywords": [],
    "description": "Deal 14 damage.",
    "vars": {
      "damage": 14
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/byrd_swoop.png"
  },
  "BYRDONIS EGG": {
    "name": "Byrdonis Egg",
    "character": "quest",
    "type": "Quest",
    "cost": null,
    "rarity": "Quest",
    "keywords": [
      "Unplayable"
    ],
    "description": "Can be hatched at a Rest Site.",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/byrdonis_egg.png"
  },
  "CALAMITY": {
    "name": "Calamity",
    "character": "colorless",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you play an Attack, add a random Attack into your Hand.",
    "vars": {},
    "upgrade": {
      "cost": 2
    },
    "target": "Self",
    "image": "images/cards/calamity.png"
  },
  "CALCIFY": {
    "name": "Calcify",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Osty's attacks deal 4 additional damage.",
    "vars": {
      "power_calcify": 4
    },
    "upgrade": {
      "calcify": 2
    },
    "target": "Self",
    "image": "images/cards/calcify.png"
  },
  "CALCULATED GAMBLE": {
    "name": "Calculated Gamble",
    "character": "silent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Discard your Hand,\nthen draw that many cards.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/calculated_gamble.png"
  },
  "CALL OF THE VOID": {
    "name": "Call of the Void",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, add 1 random card into your Hand. It gains Ethereal.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/call_of_the_void.png"
  },
  "CALTROPS": {
    "name": "Caltrops",
    "character": "event",
    "type": "Power",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Whenever you are attacked, deal 3 damage back.",
    "vars": {
      "power_thorns": 3
    },
    "upgrade": {
      "thorns": 2
    },
    "target": "Self",
    "image": "images/cards/caltrops.png"
  },
  "CAPACITOR": {
    "name": "Capacitor",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 2 Orb Slots.",
    "vars": {
      "repeat": 2
    },
    "upgrade": {
      "repeat": 1
    },
    "target": "Self",
    "image": "images/cards/capacitor.png"
  },
  "CAPTURE SPIRIT": {
    "name": "Capture Spirit",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Enemy loses 3 HP.\nAdd 3 Souls into your Draw Pile.",
    "vars": {
      "damage": 3,
      "cards": 3
    },
    "upgrade": {
      "damage": 1,
      "cards": 1,
      "description": "Enemy loses 4 HP.\nAdd 4 Souls into your Draw Pile."
    },
    "target": "AnyEnemy",
    "image": "images/cards/capture_spirit.png"
  },
  "CASCADE": {
    "name": "Cascade",
    "character": "ironclad",
    "type": "Skill",
    "cost": -1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Play the top X cards of your Draw Pile.",
    "vars": {},
    "upgrade": {
      "description": "Play the top X+1 cards of your Draw Pile."
    },
    "target": "Self",
    "image": "images/cards/cascade.png"
  },
  "CATASTROPHE": {
    "name": "Catastrophe",
    "character": "colorless",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Play 2 random cards from your Draw Pile.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1,
      "description": "Play 3 random cards from your Draw Pile."
    },
    "target": "Self",
    "image": "images/cards/catastrophe.png"
  },
  "CELESTIAL MIGHT": {
    "name": "Celestial Might",
    "character": "regent",
    "type": "Attack",
    "cost": 2,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 6 damage 3 times.",
    "vars": {
      "damage": 6,
      "repeat": 3
    },
    "upgrade": {
      "repeat": 1,
      "description": "Deal 6 damage 4 times."
    },
    "target": "AnyEnemy",
    "image": "images/cards/celestial_might.png"
  },
  "CHAOS": {
    "name": "Chaos",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Channel 1 random Orb.",
    "vars": {
      "repeat": 1
    },
    "upgrade": {
      "repeat": 1,
      "description": "Channel 2 random Orbs."
    },
    "target": "Self",
    "image": "images/cards/chaos.png"
  },
  "CHARGE!!": {
    "name": "CHARGE!!",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Choose 2 cards in your Draw Pile to Transform into\nMinion Dive Bomb}.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "description": "Choose 2 cards in your Draw Pile to Transform into\nMinion Dive Bombs+."
    },
    "target": "Self",
    "image": "images/cards/charge.png"
  },
  "CHARGE BATTERY": {
    "name": "Charge Battery",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 7 Block.\nNext turn, gain [E].",
    "vars": {
      "block": 7,
      "energy": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/charge_battery.png"
  },
  "CHILD OF THE STARS": {
    "name": "Child of the Stars",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you spend [S], gain 2 Block for each [S] spent.",
    "vars": {
      "block_for_stars": 2
    },
    "upgrade": {
      "block_for_stars": 1
    },
    "target": "Self",
    "image": "images/cards/child_of_the_stars.png"
  },
  "CHILL": {
    "name": "Chill",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Channel 1 Frost for each enemy.",
    "vars": {},
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/chill.png"
  },
  "CINDER": {
    "name": "Cinder",
    "character": "ironclad",
    "type": "Attack",
    "cost": 2,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 18 damage.\nExhaust 1 card at random.",
    "vars": {
      "damage": 18
    },
    "upgrade": {
      "damage": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/cinder.png"
  },
  "CLASH": {
    "name": "Clash",
    "character": "event",
    "type": "Attack",
    "cost": 0,
    "rarity": "Event",
    "keywords": [],
    "description": "Can only be played if every card in your Hand is an Attack.\nDeal 14 damage.",
    "vars": {
      "damage": 14
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/clash.png"
  },
  "CLAW": {
    "name": "Claw",
    "character": "defect",
    "type": "Attack",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 3 damage.\nIncrease the damage of ALL Claw cards by 2 this combat.",
    "vars": {
      "damage": 3,
      "increase": 2
    },
    "upgrade": {
      "damage": 1,
      "increase": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/claw.png"
  },
  "CLEANSE": {
    "name": "Cleanse",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Summon 3.\nExhaust 1 card from your Draw Pile.",
    "vars": {
      "summon": 3
    },
    "upgrade": {
      "summon": 2
    },
    "target": "Self",
    "image": "images/cards/cleanse.png"
  },
  "CLOAK AND DAGGER": {
    "name": "Cloak and Dagger",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 6 Block.\nAdd 1 Shiv into your Hand.",
    "vars": {
      "block": 6,
      "cards": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Gain 6 Block.\nAdd 2 Shivs into your Hand."
    },
    "target": "Self",
    "image": "images/cards/cloak_and_dagger.png"
  },
  "CLOAK OF STARS": {
    "name": "Cloak of Stars",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 7 Block.",
    "vars": {
      "block": 7
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/cloak_of_stars.png"
  },
  "CLUMSY": {
    "name": "Clumsy",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Ethereal",
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/clumsy.png"
  },
  "COLD SNAP": {
    "name": "Cold Snap",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 6 damage.\nChannel 1 Frost.",
    "vars": {
      "damage": 6
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/cold_snap.png"
  },
  "COLLISION COURSE": {
    "name": "Collision Course",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 11 damage.\nAdd a Debris into your Hand.",
    "vars": {
      "damage": 11
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/collision_course.png"
  },
  "COLOSSUS": {
    "name": "Colossus",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 5 Block.\nYou receive 50% less damage from Vulnerable enemies this turn.",
    "vars": {
      "block": 5,
      "colossus": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/colossus.png"
  },
  "COMET": {
    "name": "Comet",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 33 damage.\nApply 3 Weak.\nApply 3 Vulnerable.",
    "vars": {
      "damage": 33,
      "power_vulnerable": 3,
      "power_weak": 3
    },
    "upgrade": {
      "damage": 11
    },
    "target": "AnyEnemy",
    "image": "images/cards/comet.png"
  },
  "COMPACT": {
    "name": "Compact",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 6 Block.\nTransform all Status cards in your Hand into Fuel.",
    "vars": {
      "block": 6
    },
    "upgrade": {
      "block": 1,
      "description": "Gain 7 Block.\nTransform all Status cards in your Hand into Fuel+."
    },
    "target": "Self",
    "image": "images/cards/compact.png"
  },
  "COMPILE DRIVER": {
    "name": "Compile Driver",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 7 damage.\nDraw 1 card for each unique Orb you have.",
    "vars": {
      "damage": 7,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 3,
      "description": "Deal 10 damage.\nDraw 1 card for each unique Orb you have."
    },
    "target": "AnyEnemy",
    "image": "images/cards/compile_driver.png"
  },
  "CONFLAGRATION": {
    "name": "Conflagration",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 8 damage to ALL enemies.\nDeals 2 additional damage for each other Attack you've played this turn.",
    "vars": {
      "extra_damage": 2,
      "calculation_base": 8
    },
    "upgrade": {
      "calculation_base": 1,
      "extra_damage": 1
    },
    "target": "AllEnemies",
    "image": "images/cards/conflagration.png"
  },
  "CONQUEROR": {
    "name": "Conqueror",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Forge 3.\nSovereign Blade deals double damage to the enemy this turn.",
    "vars": {
      "forge": 3
    },
    "upgrade": {
      "forge": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/conqueror.png"
  },
  "CONSUMING SHADOW": {
    "name": "Consuming Shadow",
    "character": "defect",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Channel 2 Dark.\nAt the end of your turn, Evoke your leftmost Orb.",
    "vars": {
      "repeat": 2,
      "power_consuming_shadow": 1
    },
    "upgrade": {
      "repeat": 1
    },
    "target": "Self",
    "image": "images/cards/consuming_shadow.png"
  },
  "CONVERGENCE": {
    "name": "Convergence",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Next turn,\ngain [E] and [S].\nRetain your Hand this turn.",
    "vars": {
      "energy": 1,
      "stars_var": 1
    },
    "upgrade": {
      "stars": 1
    },
    "target": "Self",
    "image": "images/cards/convergence.png"
  },
  "COOLANT": {
    "name": "Coolant",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, gain 2 Block for each unique Orb you have.",
    "vars": {
      "power_coolant": 2
    },
    "upgrade": {
      "coolant": 1
    },
    "target": "Self",
    "image": "images/cards/coolant.png"
  },
  "COOLHEADED": {
    "name": "Coolheaded",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Channel 1 Frost.\nDraw 1 card.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Channel 1 Frost.\nDraw 2 cards."
    },
    "target": "Self",
    "image": "images/cards/coolheaded.png"
  },
  "COORDINATE": {
    "name": "Coordinate",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Give another player 5 Strength this turn.",
    "vars": {
      "power_strength": 5
    },
    "upgrade": {
      "strength": 3
    },
    "target": "AnyAlly",
    "image": "images/cards/coordinate.png"
  },
  "CORROSIVE WAVE": {
    "name": "Corrosive Wave",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you draw a card this turn, apply 2 Poison to ALL enemies.",
    "vars": {
      "corrosive_wave": 2
    },
    "upgrade": {
      "corrosive_wave": 1
    },
    "target": "Self",
    "image": "images/cards/corrosive_wave.png"
  },
  "CORRUPTION": {
    "name": "Corruption",
    "character": "ironclad",
    "type": "Power",
    "cost": 3,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Skills cost 0 [E].\nWhenever you play a Skill, Exhaust it.",
    "vars": {
      "power": 1
    },
    "upgrade": {
      "cost": 2
    },
    "target": "Self",
    "image": "images/cards/corruption.png"
  },
  "COSMIC INDIFFERENCE": {
    "name": "Cosmic Indifference",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 6 Block.\nPut a card from your Discard Pile on top of your Draw Pile.",
    "vars": {
      "block": 6
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/cosmic_indifference.png"
  },
  "COUNTDOWN": {
    "name": "Countdown",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the start of your turn, apply 6 Doom to a random enemy.",
    "vars": {
      "power_countdown": 6
    },
    "upgrade": {
      "countdown": 3
    },
    "target": "Self",
    "image": "images/cards/countdown.png"
  },
  "CRASH LANDING": {
    "name": "Crash Landing",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 21 damage to ALL enemies.\nFill your Hand with Debris.",
    "vars": {
      "damage": 21
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AllEnemies",
    "image": "images/cards/crash_landing.png"
  },
  "CREATIVE AI": {
    "name": "Creative AI",
    "character": "defect",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, add a random Power into your Hand.",
    "vars": {
      "creative_ai": 1
    },
    "upgrade": {
      "cost": 2
    },
    "target": "Self",
    "image": "images/cards/creative_ai.png"
  },
  "CRESCENT SPEAR": {
    "name": "Crescent Spear",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 6 damage.\nDeals 2 additional damage for ALL your cards that have a [S] cost.",
    "vars": {
      "extra_damage": 2,
      "calculation_base": 6
    },
    "upgrade": {
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/crescent_spear.png"
  },
  "CRIMSON MANTLE": {
    "name": "Crimson Mantle",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, lose 1 HP and gain 8 Block.",
    "vars": {
      "power_crimson_mantle": 8
    },
    "upgrade": {
      "crimson_mantle": 2
    },
    "target": "Self",
    "image": "images/cards/crimson_mantle.png"
  },
  "CRUELTY": {
    "name": "Cruelty",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Vulnerable enemies take an additional 25% damage.",
    "vars": {
      "power_cruelty": 25
    },
    "upgrade": {
      "cruelty": 25
    },
    "target": "Self",
    "image": "images/cards/cruelty.png"
  },
  "CRUSH UNDER": {
    "name": "Crush Under",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 7 damage to ALL enemies. All enemies lose 1 Strength this turn.",
    "vars": {
      "damage": 7,
      "strength_loss": 1
    },
    "upgrade": {
      "damage": 1,
      "strength_loss": 1
    },
    "target": "AllEnemies",
    "image": "images/cards/crush_under.png"
  },
  "CURSE OF THE BELL": {
    "name": "Curse of the Bell",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Eternal",
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/curse_of_the_bell.png"
  },
  "DAGGER SPRAY": {
    "name": "Dagger Spray",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 4 damage to ALL enemies twice.",
    "vars": {
      "damage": 4
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AllEnemies",
    "image": "images/cards/dagger_spray.png"
  },
  "DAGGER THROW": {
    "name": "Dagger Throw",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 9 damage.\nDraw 1 card.\nDiscard 1 card.",
    "vars": {
      "damage": 9
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/dagger_throw.png"
  },
  "DANSE MACABRE": {
    "name": "Danse Macabre",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you play a card that costs [E][E] or more, gain 4 Block.",
    "vars": {
      "energy": 2,
      "power_danse_macabre": 4
    },
    "upgrade": {
      "danse_macabre": 2
    },
    "target": "Self",
    "image": "images/cards/danse_macabre.png"
  },
  "DARK EMBRACE": {
    "name": "Dark Embrace",
    "character": "ironclad",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever a card is Exhausted,\ndraw 1 card.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/dark_embrace.png"
  },
  "DARK SHACKLES": {
    "name": "Dark Shackles",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Enemy loses 9 Strength this turn.",
    "vars": {
      "strength_loss": 9
    },
    "upgrade": {
      "strength_loss": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/dark_shackles.png"
  },
  "DARKNESS": {
    "name": "Darkness",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Channel 1 Dark.\nTrigger the passive ability of all Dark Orbs.",
    "vars": {},
    "upgrade": {
      "description": "Channel 1 Dark.\nTrigger the passive ability of all Dark Orbs twice."
    },
    "target": "Self",
    "image": "images/cards/darkness.png"
  },
  "DASH": {
    "name": "Dash",
    "character": "silent",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 10 Block.\nDeal 10 damage.",
    "vars": {
      "damage": 10,
      "block": 10
    },
    "upgrade": {
      "damage": 3,
      "block": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/dash.png"
  },
  "DAZED": {
    "name": "Dazed",
    "character": "status",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [
      "Ethereal",
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/dazed.png"
  },
  "DEADLY POISON": {
    "name": "Deadly Poison",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Apply 5 Poison.",
    "vars": {
      "power_poison": 5
    },
    "upgrade": {
      "poison": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/deadly_poison.png"
  },
  "DEATH MARCH": {
    "name": "Death March",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 8 damage.\nDeals 3 additional damage for each card drawn during your turn.",
    "vars": {
      "extra_damage": 3,
      "calculation_base": 8
    },
    "upgrade": {
      "calculation_base": 1,
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/death_march.png"
  },
  "DEATHBRINGER": {
    "name": "Deathbringer",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Apply 21 Doom and 1 Weak to ALL enemies.",
    "vars": {
      "power_doom": 21,
      "power_weak": 1
    },
    "upgrade": {
      "doom": 5
    },
    "target": "AllEnemies",
    "image": "images/cards/deathbringer.png"
  },
  "DEATH'S DOOR": {
    "name": "Death's Door",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 6 Block.\nIf you applied Doom this turn, gain Block 2 additional times.",
    "vars": {
      "block": 6,
      "repeat": 2
    },
    "upgrade": {
      "block": 1,
      "description": "Gain 7 Block.\nIf you applied Doom this turn, gain Block 2 additional times."
    },
    "target": "Self"
  },
  "DEBILITATE": {
    "name": "Debilitate",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 10 damage.\nVulnerable and Weak are twice as effective against the enemy for the next 3 turns.",
    "vars": {
      "damage": 10,
      "power_debilitate": 3
    },
    "upgrade": {
      "damage": 2,
      "debilitate": 1,
      "description": "Deal 12 damage.\nVulnerable and Weak are twice as effective against the enemy for the next 4 turns."
    },
    "target": "AnyEnemy",
    "image": "images/cards/debilitate.png"
  },
  "DEBRIS": {
    "name": "Debris",
    "character": "status",
    "type": "Status",
    "cost": 1,
    "rarity": "Status",
    "keywords": [
      "Exhaust"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/debris.png"
  },
  "DEBT": {
    "name": "Debt",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Unplayable"
    ],
    "description": "At the end of your turn, if this is in your Hand, lose 10 Gold.",
    "vars": {
      "gold": 10
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/debt.png"
  },
  "DECAY": {
    "name": "Decay",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Unplayable"
    ],
    "description": "At the end of your turn, if this is in your Hand, take 2 damage.",
    "vars": {
      "damage": 2
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/decay.png"
  },
  "DECISIONS, DECISIONS": {
    "name": "Decisions, Decisions",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Draw 3 cards.\nChoose a Skill in your Hand and play it 3 times.",
    "vars": {
      "cards": 3,
      "repeat": 3
    },
    "upgrade": {
      "cards": 2
    },
    "target": "Self",
    "image": "images/cards/decisions_decisions.png"
  },
  "DEFEND": {
    "name": "Defend",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Basic",
    "keywords": [],
    "description": "Gain 5 Block.",
    "vars": {
      "block": 5
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self"
  },
  "DEFILE": {
    "name": "Defile",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Ethereal"
    ],
    "description": "Deal 13 damage.",
    "vars": {
      "damage": 13
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/defile.png"
  },
  "DEFLECT": {
    "name": "Deflect",
    "character": "silent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 4 Block.",
    "vars": {
      "block": 4
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/deflect.png"
  },
  "DEFRAGMENT": {
    "name": "Defragment",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain 1 Focus.",
    "vars": {
      "power_focus": 1
    },
    "upgrade": {
      "focus": 1
    },
    "target": "Self",
    "image": "images/cards/defragment.png"
  },
  "DEFY": {
    "name": "Defy",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Ethereal"
    ],
    "description": "Gain 6 Block.\nApply 1 Weak.",
    "vars": {
      "block": 6,
      "power_weak": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/defy.png"
  },
  "DELAY": {
    "name": "Delay",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 11 Block.\nNext turn,\ngain [E].",
    "vars": {
      "block": 11,
      "energy": 1
    },
    "upgrade": {
      "block": 2,
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/delay.png"
  },
  "DEMESNE": {
    "name": "Demesne",
    "character": "necrobinder",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [
      "Ethereal"
    ],
    "description": "At the start of your turn, gain [E] and draw 1 additional card.",
    "vars": {
      "cards": 1,
      "energy": 1
    },
    "upgrade": {
      "cost": 2
    },
    "target": "Self",
    "image": "images/cards/demesne.png"
  },
  "DEMON FORM": {
    "name": "Demon Form",
    "character": "ironclad",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, gain 2 Strength.",
    "vars": {
      "power_strength": 2
    },
    "upgrade": {
      "strength": 1
    },
    "target": "Self",
    "image": "images/cards/demon_form.png"
  },
  "DEMONIC SHIELD": {
    "name": "Demonic Shield",
    "character": "ironclad",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Lose 1 HP.\nGive another player Block equal to your Block.",
    "vars": {
      "hp_loss": 1,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "AnyAlly",
    "image": "images/cards/demonic_shield.png"
  },
  "DEVASTATE": {
    "name": "Devastate",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 30 damage.",
    "vars": {
      "damage": 30
    },
    "upgrade": {
      "damage": 10
    },
    "target": "AnyEnemy",
    "image": "images/cards/devastate.png"
  },
  "DEVOUR LIFE": {
    "name": "Devour Life",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you play a Soul, Summon 1.",
    "vars": {
      "power_devour_life": 1
    },
    "upgrade": {
      "devour_life": 1
    },
    "target": "Self",
    "image": "images/cards/devour_life.png"
  },
  "DIRGE": {
    "name": "Dirge",
    "character": "necrobinder",
    "type": "Skill",
    "cost": -1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Summon 3 X times.\nAdd X Souls into your Draw Pile.",
    "vars": {
      "summon": 3
    },
    "upgrade": {
      "summon": 1,
      "description": "Summon 4 X times.\nAdd X Souls+ into your Draw Pile."
    },
    "target": "Self",
    "image": "images/cards/dirge.png"
  },
  "DISCOVERY": {
    "name": "Discovery",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Choose 1 of 3 random cards to add into your Hand. It's free to play this turn.",
    "vars": {},
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/discovery.png"
  },
  "DISINTEGRATION": {
    "name": "Disintegration",
    "character": "token",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [],
    "description": "At the end of your turn, take 6 damage.",
    "vars": {
      "power_disintegration": 6
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/disintegration.png"
  },
  "DISMANTLE": {
    "name": "Dismantle",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 8 damage.\nIf the enemy is Vulnerable, hits twice.",
    "vars": {
      "damage": 8
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/dismantle.png"
  },
  "DISTRACTION": {
    "name": "Distraction",
    "character": "event",
    "type": "Skill",
    "cost": 1,
    "rarity": "Event",
    "keywords": [
      "Exhaust"
    ],
    "description": "Add a random Skill into your Hand. It's free to play this turn.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/distraction.png"
  },
  "DODGE AND ROLL": {
    "name": "Dodge and Roll",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 4 Block.\nNext turn, gain 4 Block.",
    "vars": {
      "block": 4
    },
    "upgrade": {
      "block": 2
    },
    "target": "Self",
    "image": "images/cards/dodge_and_roll.png"
  },
  "DOMINATE": {
    "name": "Dominate",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Apply 1 Vulnerable.\nGain 1 Strength for each Vulnerable on the enemy.",
    "vars": {
      "power_vulnerable": 1,
      "strength_per_vulnerable": 1
    },
    "upgrade": {
      "vulnerable": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/dominate.png"
  },
  "DOUBLE ENERGY": {
    "name": "Double Energy",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Double your Energy.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/double_energy.png"
  },
  "DOUBT": {
    "name": "Doubt",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Unplayable"
    ],
    "description": "At the end of your turn, if this is in your Hand, gain 1 Weak.",
    "vars": {
      "power_weak": 1
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/doubt.png"
  },
  "DRAIN POWER": {
    "name": "Drain Power",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 10 damage.\nUpgrade 2 random cards in your Discard Pile.",
    "vars": {
      "damage": 10,
      "cards": 2
    },
    "upgrade": {
      "damage": 2,
      "cards": 1,
      "description": "Deal 12 damage.\nUpgrade 3 random cards in your Discard Pile."
    },
    "target": "AnyEnemy",
    "image": "images/cards/drain_power.png"
  },
  "DRAMATIC ENTRANCE": {
    "name": "Dramatic Entrance",
    "character": "colorless",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust",
      "Innate"
    ],
    "description": "Deal 11 damage to ALL enemies.",
    "vars": {
      "damage": 11
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AllEnemies",
    "image": "images/cards/dramatic_entrance.png"
  },
  "DREDGE": {
    "name": "Dredge",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Put 3 cards from your Discard Pile into your Hand.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/dredge.png"
  },
  "DRUM OF BATTLE": {
    "name": "Drum of Battle",
    "character": "ironclad",
    "type": "Power",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw 2 cards.\nAt the start of your turn, Exhaust the top card of your Draw Pile.",
    "vars": {
      "cards": 2,
      "power_drum_of_battle": 1
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/drum_of_battle.png"
  },
  "DUAL WIELD": {
    "name": "Dual Wield",
    "character": "event",
    "type": "Skill",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Choose an Attack or Power card. Add a copy of that card into your Hand.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Choose an Attack or Power card. Add 2 copies of that card into your Hand."
    },
    "target": "Self",
    "image": "images/cards/dual_wield.png"
  },
  "DUALCAST": {
    "name": "Dualcast",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Basic",
    "keywords": [],
    "description": "Evoke your rightmost Orb twice.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/dualcast.png"
  },
  "DYING STAR": {
    "name": "Dying Star",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Ethereal"
    ],
    "description": "Deal 9 damage to ALL enemies. ALL enemies lose 9 Strength this turn.",
    "vars": {
      "damage": 9,
      "strength_loss": 9
    },
    "upgrade": {
      "damage": 2,
      "strength_loss": 2
    },
    "target": "AllEnemies",
    "image": "images/cards/dying_star.png"
  },
  "ECHO FORM": {
    "name": "Echo Form",
    "character": "defect",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [
      "Ethereal"
    ],
    "description": "The first card you play each turn is played an extra time.",
    "vars": {
      "echo_form": 1
    },
    "upgrade": {
      "remove_keywords": [
        "Ethereal"
      ]
    },
    "target": "Self",
    "image": "images/cards/echo_form.png"
  },
  "ECHOING SLASH": {
    "name": "Echoing Slash",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 10 damage to ALL enemies.\nRepeat this effect for each enemy killed.",
    "vars": {
      "damage": 10
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AllEnemies",
    "image": "images/cards/echoing_slash.png"
  },
  "EIDOLON": {
    "name": "Eidolon",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Exhaust your Hand.\nIf 9 cards were Exhausted this way, gain 1 Intangible.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/eidolon.png"
  },
  "END OF DAYS": {
    "name": "End of Days",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Apply 29 Doom to ALL enemies.\nKill enemies with at least as much Doom as HP.",
    "vars": {
      "power_doom": 29
    },
    "upgrade": {
      "doom": 8
    },
    "target": "AllEnemies",
    "image": "images/cards/end_of_days.png"
  },
  "ENERGY SURGE": {
    "name": "Energy Surge",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "ALL players gain [E][E].",
    "vars": {
      "energy": 2
    },
    "upgrade": {
      "energy": 1
    },
    "target": "AllAllies",
    "image": "images/cards/energy_surge.png"
  },
  "ENFEEBLING TOUCH": {
    "name": "Enfeebling Touch",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Ethereal"
    ],
    "description": "Enemy loses 8 Strength this turn.",
    "vars": {
      "strength_loss": 8
    },
    "upgrade": {
      "strength_loss": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/enfeebling_touch.png"
  },
  "ENLIGHTENMENT": {
    "name": "Enlightenment",
    "character": "event",
    "type": "Skill",
    "cost": 0,
    "rarity": "Event",
    "keywords": [
      "Exhaust"
    ],
    "description": "Reduce the cost of ALL cards in your Hand to 1 this turn.",
    "vars": {},
    "upgrade": {
      "description": "Reduce the cost of ALL cards in your Hand to 1 this combat."
    },
    "target": "Self",
    "image": "images/cards/enlightenment.png"
  },
  "ENTHRALLED": {
    "name": "Enthralled",
    "character": "curse",
    "type": "Curse",
    "cost": 2,
    "rarity": "Curse",
    "keywords": [
      "Eternal"
    ],
    "description": "If this is in your Hand, it must be played before other cards.",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/enthralled.png"
  },
  "ENTRENCH": {
    "name": "Entrench",
    "character": "event",
    "type": "Skill",
    "cost": 2,
    "rarity": "Event",
    "keywords": [],
    "description": "Double your Block.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/entrench.png"
  },
  "ENTROPY": {
    "name": "Entropy",
    "character": "colorless",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, Transform 1 card in your Hand.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/entropy.png"
  },
  "ENVENOM": {
    "name": "Envenom",
    "character": "silent",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever an Attack deals unblocked damage, apply 1 Poison.",
    "vars": {
      "power_envenom": 1
    },
    "upgrade": {
      "envenom": 1
    },
    "target": "Self",
    "image": "images/cards/envenom.png"
  },
  "EQUILIBRIUM": {
    "name": "Equilibrium",
    "character": "colorless",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 13 Block.\nRetain your Hand this turn.",
    "vars": {
      "block": 13,
      "equilibrium": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/equilibrium.png"
  },
  "ERADICATE": {
    "name": "Eradicate",
    "character": "necrobinder",
    "type": "Attack",
    "cost": -1,
    "rarity": "Rare",
    "keywords": [
      "Retain"
    ],
    "description": "Deal 11 damage X times.",
    "vars": {
      "damage": 11
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/eradicate.png"
  },
  "ESCAPE PLAN": {
    "name": "Escape Plan",
    "character": "silent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw 1 card.\nIf you draw a Skill, gain 3 Block.",
    "vars": {
      "block": 3
    },
    "upgrade": {
      "block": 2
    },
    "target": "Self",
    "image": "images/cards/escape_plan.png"
  },
  "ETERNAL ARMOR": {
    "name": "Eternal Armor",
    "character": "colorless",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain 9 Plating.",
    "vars": {
      "power_plating": 9
    },
    "upgrade": {
      "plating": 3
    },
    "target": "Self",
    "image": "images/cards/eternal_armor.png"
  },
  "EVIL EYE": {
    "name": "Evil Eye",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 8 Block.\nGain another 8 Block if you have Exhausted a card this turn.",
    "vars": {
      "block": 8
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/evil_eye.png"
  },
  "EXPECT A FIGHT": {
    "name": "Expect a Fight",
    "character": "ironclad",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain [E] for each Attack in your Hand.\nYou cannot gain\nadditional [E] this turn.",
    "vars": {
      "energy": 0,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/expect_a_fight.png"
  },
  "EXPERTISE": {
    "name": "Expertise",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw cards until you have 6 in your Hand.",
    "vars": {
      "cards": 6
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/expertise.png"
  },
  "EXPOSE": {
    "name": "Expose",
    "character": "silent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Remove all Artifact and Block from the enemy.\nApply 2 Vulnerable.",
    "vars": {
      "power": 2
    },
    "upgrade": {
      "power": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/expose.png"
  },
  "EXTERMINATE": {
    "name": "Exterminate",
    "character": "event",
    "type": "Attack",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Deal 3 damage 4 times to ALL enemies.",
    "vars": {
      "damage": 3,
      "repeat": 4
    },
    "upgrade": {
      "damage": 1
    },
    "target": "AllEnemies",
    "image": "images/cards/exterminate.png"
  },
  "FALLING STAR": {
    "name": "Falling Star",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Basic",
    "keywords": [],
    "description": "Deal 8 damage.\nApply 1 Weak.\nApply 1 Vulnerable.",
    "vars": {
      "damage": 8,
      "power_vulnerable": 1,
      "power_weak": 1
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/falling_star.png"
  },
  "FAN OF KNIVES": {
    "name": "Fan of Knives",
    "character": "silent",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Shivs now hit ALL enemies.\nAdd 4 Shivs into your Hand.",
    "vars": {
      "shivs": 4
    },
    "upgrade": {
      "shivs": 1
    },
    "target": "Self",
    "image": "images/cards/fan_of_knives.png"
  },
  "FASTEN": {
    "name": "Fasten",
    "character": "colorless",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain an additional 5 Block from Defend cards.",
    "vars": {
      "extra_block": 5
    },
    "upgrade": {
      "extra_block": 2
    },
    "target": "Self",
    "image": "images/cards/fasten.png"
  },
  "FEAR": {
    "name": "Fear",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Ethereal"
    ],
    "description": "Deal 7 damage.\nApply 1 Vulnerable.",
    "vars": {
      "damage": 7,
      "power_vulnerable": 1
    },
    "upgrade": {
      "damage": 1,
      "vulnerable": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/fear.png"
  },
  "FEED": {
    "name": "Feed",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 10 damage.\nIf Fatal, raise your Max HP by 3.",
    "vars": {
      "damage": 10,
      "max_hp": 3
    },
    "upgrade": {
      "damage": 2,
      "max_hp": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/feed.png"
  },
  "FEEDING FRENZY": {
    "name": "Feeding Frenzy",
    "character": "event",
    "type": "Skill",
    "cost": 0,
    "rarity": "Event",
    "keywords": [],
    "description": "Gain 5 Strength this turn.",
    "vars": {
      "power_strength": 5
    },
    "upgrade": {
      "strength": 2
    },
    "target": "Self",
    "image": "images/cards/feeding_frenzy.png"
  },
  "FEEL NO PAIN": {
    "name": "Feel No Pain",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever a card is Exhausted, gain 3 Block.",
    "vars": {
      "power": 3
    },
    "upgrade": {
      "power": 1
    },
    "target": "Self",
    "image": "images/cards/feel_no_pain.png"
  },
  "FERAL": {
    "name": "Feral",
    "character": "defect",
    "type": "Power",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "The first time you play a\n0[E] Attack each turn,\nreturn it to your Hand.",
    "vars": {
      "power_feral": 1
    },
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/feral.png"
  },
  "FETCH": {
    "name": "Fetch",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Osty deals 3 damage.\nIf this is the first time this card has been played this turn, draw 1 card.",
    "vars": {
      "osty_damage": 3,
      "cards": 1
    },
    "upgrade": {
      "osty_damage": 3,
      "description": "Osty deals 6 damage.\nIf this is the first time this card has been played this turn, draw 1 card."
    },
    "target": "AnyEnemy",
    "image": "images/cards/fetch.png"
  },
  "FIEND FIRE": {
    "name": "Fiend Fire",
    "character": "ironclad",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Exhaust your Hand.\nDeal 7 damage for each card Exhausted.",
    "vars": {
      "damage": 7
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/fiend_fire.png"
  },
  "FIGHT ME!": {
    "name": "Fight Me!",
    "character": "ironclad",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage twice.\nGain 3 Strength.\nThe enemy gains 1 Strength.",
    "vars": {
      "damage": 5,
      "repeat": 2,
      "power_strength": 3,
      "enemy_strength": 1
    },
    "upgrade": {
      "damage": 1,
      "strength": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/fight_me.png"
  },
  "FIGHT THROUGH": {
    "name": "Fight Through",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 13 Block.\nAdd 2 Wounds into your Discard Pile.",
    "vars": {
      "block": 13
    },
    "upgrade": {
      "block": 4
    },
    "target": "Self",
    "image": "images/cards/fight_through.png"
  },
  "FINESSE": {
    "name": "Finesse",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 4 Block.\nDraw 1 card.",
    "vars": {
      "block": 4,
      "cards": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/finesse.png"
  },
  "FINISHER": {
    "name": "Finisher",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 6 damage for each Attack already played this turn.",
    "vars": {
      "damage": 6,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 2,
      "description": "Deal 8 damage for each Attack already played this turn."
    },
    "target": "AnyEnemy",
    "image": "images/cards/finisher.png"
  },
  "FISTICUFFS": {
    "name": "Fisticuffs",
    "character": "colorless",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 7 damage.\nGain Block equal to damage dealt.",
    "vars": {
      "damage": 7
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/fisticuffs.png"
  },
  "FLAK CANNON": {
    "name": "Flak Cannon",
    "character": "defect",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Exhaust ALL your Status cards.\nDeal 8 damage to a random enemy for each card Exhausted.",
    "vars": {
      "damage": 8,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 3,
      "description": "Exhaust ALL your Status cards.\nDeal 11 damage to a random enemy for each card Exhausted."
    },
    "target": "RandomEnemy",
    "image": "images/cards/flak_cannon.png"
  },
  "FLAME BARRIER": {
    "name": "Flame Barrier",
    "character": "ironclad",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 12 Block.\nWhenever you are attacked this turn, deal 4 damage back.",
    "vars": {
      "block": 12,
      "damage_back": 4
    },
    "upgrade": {
      "block": 4,
      "damage_back": 2
    },
    "target": "Self",
    "image": "images/cards/flame_barrier.png"
  },
  "FLANKING": {
    "name": "Flanking",
    "character": "silent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "The enemy takes double attack damage from other players this turn.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/flanking.png"
  },
  "FLASH OF STEEL": {
    "name": "Flash of Steel",
    "character": "colorless",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage.\nDraw 1 card.",
    "vars": {
      "damage": 5,
      "cards": 1
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/flash_of_steel.png"
  },
  "FLATTEN": {
    "name": "Flatten",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 2,
    "rarity": "Common",
    "keywords": [],
    "description": "Osty deals 12 damage.\nThis card costs 0 [E] if Osty has attacked this turn.",
    "vars": {
      "osty_damage": 12
    },
    "upgrade": {
      "osty_damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/flatten.png"
  },
  "FLECHETTES": {
    "name": "Flechettes",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage for each Skill in your Hand.",
    "vars": {
      "damage": 5,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 2,
      "description": "Deal 7 damage for each Skill in your Hand."
    },
    "target": "AnyEnemy",
    "image": "images/cards/flechettes.png"
  },
  "FLICK-FLACK": {
    "name": "Flick-Flack",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Sly"
    ],
    "description": "Deal 6 damage to ALL enemies.",
    "vars": {
      "damage": 6
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AllEnemies",
    "image": "images/cards/flick_flack.png"
  },
  "FOCUSED STRIKE": {
    "name": "Focused Strike",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 9 damage.\nGain 1 Focus this turn.",
    "vars": {
      "damage": 9,
      "power_focus": 1
    },
    "upgrade": {
      "damage": 2,
      "focus": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/focused_strike.png"
  },
  "FOLLOW THROUGH": {
    "name": "Follow Through",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 7 damage.\nIf you have 5 or more other cards in your Hand, hits an additional time.",
    "vars": {
      "damage": 7,
      "card_count": 5
    },
    "upgrade": {
      "damage": 2,
      "description": "Deal 9 damage.\nIf you have 5 or more other cards in your Hand, hits an additional time."
    },
    "target": "AnyEnemy",
    "image": "images/cards/follow_through.png"
  },
  "FOLLY": {
    "name": "Folly",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Eternal",
      "Ethereal",
      "Innate",
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/folly.png"
  },
  "FOOTWORK": {
    "name": "Footwork",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 2 Dexterity.",
    "vars": {
      "power_dexterity": 2
    },
    "upgrade": {
      "dexterity": 1
    },
    "target": "Self",
    "image": "images/cards/footwork.png"
  },
  "FORBIDDEN GRIMOIRE": {
    "name": "Forbidden Grimoire",
    "character": "necrobinder",
    "type": "Power",
    "cost": 2,
    "rarity": "Ancient",
    "keywords": [
      "Eternal"
    ],
    "description": "At the end of combat, you may remove a card from your Deck.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/forbidden_grimoire.png"
  },
  "FOREGONE CONCLUSION": {
    "name": "Foregone Conclusion",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Next turn, put 2 cards from your Draw Pile into your Hand.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/foregone_conclusion.png"
  },
  "FORGOTTEN RITUAL": {
    "name": "Forgotten Ritual",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "If you Exhausted a card this turn, gain [E][E][E].",
    "vars": {
      "energy": 3
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/forgotten_ritual.png"
  },
  "FRANTIC ESCAPE": {
    "name": "Frantic Escape",
    "character": "status",
    "type": "Status",
    "cost": 1,
    "rarity": "Status",
    "keywords": [],
    "description": "Get farther away.\nIncrease Sandpit by 1.\nIncrease the cost of this card by 1.",
    "vars": {},
    "upgrade": {},
    "target": "Self",
    "image": "images/cards/frantic_escape.png"
  },
  "FRIENDSHIP": {
    "name": "Friendship",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Lose 2 Strength.\nGain [E] at the start of each turn.",
    "vars": {
      "energy": 1,
      "power_strength": 2
    },
    "upgrade": {
      "strength": -1
    },
    "target": "Self",
    "image": "images/cards/friendship.png"
  },
  "FTL": {
    "name": "FTL",
    "character": "defect",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage.\nIf you have played fewer than 3 cards this turn, draw 1 card.",
    "vars": {
      "damage": 5,
      "cards": 1,
      "play_max": 3
    },
    "upgrade": {
      "damage": 1,
      "play_max": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/ftl.png"
  },
  "FUEL": {
    "name": "Fuel",
    "character": "token",
    "type": "Skill",
    "cost": 0,
    "rarity": "Token",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain [E].\nDraw 1 card.",
    "vars": {
      "cards": 1,
      "energy": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Gain [E].\nDraw 2 cards."
    },
    "target": "Self",
    "image": "images/cards/fuel.png"
  },
  "FURNACE": {
    "name": "Furnace",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the start of your turn, Forge 4.",
    "vars": {
      "forge": 4
    },
    "upgrade": {
      "forge": 2
    },
    "target": "Self",
    "image": "images/cards/furnace.png"
  },
  "FUSION": {
    "name": "Fusion",
    "character": "defect",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Channel 1 Plasma.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/fusion.png"
  },
  "GAMMA BLAST": {
    "name": "Gamma Blast",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 13 damage.\nApply 2 Weak.\nApply 2 Vulnerable.",
    "vars": {
      "damage": 13,
      "power_vulnerable": 2,
      "power_weak": 2
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/gamma_blast.png"
  },
  "GANG UP": {
    "name": "Gang Up",
    "character": "colorless",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage.\nDeals 5 additional damage for each time another player has attacked the enemy this turn.",
    "vars": {
      "extra_damage": 5,
      "calculation_base": 5
    },
    "upgrade": {
      "extra_damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/gang_up.png"
  },
  "GATHER LIGHT": {
    "name": "Gather Light",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 8 Block.\nGain [S].",
    "vars": {
      "block": 8,
      "stars_var": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/gather_light.png"
  },
  "GENESIS": {
    "name": "Genesis",
    "character": "regent",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, gain [S][S].",
    "vars": {
      "stars_per_turn": 2
    },
    "upgrade": {
      "stars_per_turn": 1
    },
    "target": "Self",
    "image": "images/cards/genesis.png"
  },
  "GENETIC ALGORITHM": {
    "name": "Genetic Algorithm",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 1 Block.\nPermanently increase this card's Block by 3.",
    "vars": {
      "increase": 3
    },
    "upgrade": {
      "increase": 1
    },
    "target": "Self",
    "image": "images/cards/genetic_algorithm.png"
  },
  "GIANT ROCK": {
    "name": "Giant Rock",
    "character": "token",
    "type": "Attack",
    "cost": 1,
    "rarity": "Token",
    "keywords": [],
    "description": "Deal 16 damage.",
    "vars": {
      "damage": 16
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/giant_rock.png"
  },
  "GLACIER": {
    "name": "Glacier",
    "character": "defect",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 6 Block.\nChannel 2 Frost.",
    "vars": {
      "block": 6
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/glacier.png"
  },
  "GLASSWORK": {
    "name": "Glasswork",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 5 Block.\nChannel 1 Glass.",
    "vars": {
      "block": 5
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/glasswork.png"
  },
  "GLIMMER": {
    "name": "Glimmer",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw 3 cards.\nPut 1 card from your Hand on top of your Draw Pile.",
    "vars": {
      "cards": 3,
      "put_back": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Draw 4 cards.\nPut 1 card from your Hand on top of your Draw Pile."
    },
    "target": "Self",
    "image": "images/cards/glimmer.png"
  },
  "GLIMPSE BEYOND": {
    "name": "Glimpse Beyond",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "ALL players add 3 Souls into their Draw Pile.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1,
      "description": "ALL players add 4 Souls into their Draw Pile."
    },
    "target": "AllAllies",
    "image": "images/cards/glimpse_beyond.png"
  },
  "GLITTERSTREAM": {
    "name": "Glitterstream",
    "character": "regent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 11 Block.\nNext turn, gain 5 Block.",
    "vars": {
      "block": 11,
      "block_next_turn": 5
    },
    "upgrade": {
      "block": 2,
      "block_next_turn": 2
    },
    "target": "Self",
    "image": "images/cards/glitterstream.png"
  },
  "GLOW": {
    "name": "Glow",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain [S].\nDraw 1 card.\nNext turn, draw 1 card.",
    "vars": {
      "cards": 1,
      "stars_var": 1
    },
    "upgrade": {
      "stars": 1
    },
    "target": "Self",
    "image": "images/cards/glow.png"
  },
  "GO FOR THE EYES": {
    "name": "Go for the Eyes",
    "character": "defect",
    "type": "Attack",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 3 damage.\nIf the enemy intends to attack, apply 1 Weak.",
    "vars": {
      "damage": 3,
      "power_weak": 1
    },
    "upgrade": {
      "damage": 1,
      "weak": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/go_for_the_eyes.png"
  },
  "GOLD AXE": {
    "name": "Gold Axe",
    "character": "colorless",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal damage equal to the number of cards played this combat.",
    "vars": {
      "extra_damage": 1,
      "calculation_base": 0
    },
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "AnyEnemy",
    "image": "images/cards/gold_axe.png"
  },
  "GRAND FINALE": {
    "name": "Grand Finale",
    "character": "silent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Can only be played if there are no cards in your Draw Pile. Deal 60 damage to ALL enemies.",
    "vars": {
      "damage": 60
    },
    "upgrade": {
      "damage": 15
    },
    "target": "AllEnemies",
    "image": "images/cards/grand_finale.png"
  },
  "GRAVE WARDEN": {
    "name": "Grave Warden",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 8 Block.\nAdd a Soul into your Draw Pile.",
    "vars": {
      "block": 8,
      "cards": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/grave_warden.png"
  },
  "GRAVEBLAST": {
    "name": "Graveblast",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 4 damage.\nPut a card from your Discard Pile into your Hand.",
    "vars": {
      "damage": 4
    },
    "upgrade": {
      "damage": 2,
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "AnyEnemy",
    "image": "images/cards/graveblast.png"
  },
  "GREED": {
    "name": "Greed",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Eternal",
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/greed.png"
  },
  "GUARDS!!!": {
    "name": "GUARDS!!!",
    "character": "regent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Transform any number of cards in your Hand into Minion Sacrifice.",
    "vars": {},
    "upgrade": {
      "description": "Transform any number of cards in your Hand into Minion Sacrifice+."
    },
    "target": "Self",
    "image": "images/cards/guards.png"
  },
  "GUIDING STAR": {
    "name": "Guiding Star",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 12 damage.\nDraw 2 cards.",
    "vars": {
      "damage": 12,
      "cards": 2
    },
    "upgrade": {
      "damage": 1,
      "cards": 1,
      "description": "Deal 13 damage.\nDraw 3 cards."
    },
    "target": "AnyEnemy",
    "image": "images/cards/guiding_star.png"
  },
  "GUILTY": {
    "name": "Guilty",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Unplayable"
    ],
    "description": "Removed from your Deck after 5 combats.",
    "vars": {
      "combats": 5
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/guilty.png"
  },
  "GUNK UP": {
    "name": "Gunk Up",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 4 damage 3 times.\nAdd a Slimed into your Discard Pile.",
    "vars": {
      "damage": 4,
      "repeat": 3
    },
    "upgrade": {
      "damage": 1,
      "description": "Deal 5 damage 3 times.\nAdd a Slimed into your Discard Pile."
    },
    "target": "AnyEnemy",
    "image": "images/cards/gunk_up.png"
  },
  "HAILSTORM": {
    "name": "Hailstorm",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the end of your turn, if you have Frost, deal 6 damage to ALL enemies.",
    "vars": {
      "power_hailstorm": 6
    },
    "upgrade": {
      "hailstorm": 2
    },
    "target": "Self",
    "image": "images/cards/hailstorm.png"
  },
  "HAMMER TIME": {
    "name": "Hammer Time",
    "character": "regent",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you Forge, all allies Forge as well.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/hammer_time.png"
  },
  "HAND OF GREED": {
    "name": "Hand of Greed",
    "character": "colorless",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 20 damage.\nIf Fatal, gain 20 Gold.",
    "vars": {
      "damage": 20,
      "gold": 20
    },
    "upgrade": {
      "damage": 5,
      "gold": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/hand_of_greed.png"
  },
  "HAND TRICK": {
    "name": "Hand Trick",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 7 Block.\nAdd Sly to a Skill in your Hand this turn.",
    "vars": {
      "block": 7
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/hand_trick.png"
  },
  "HANG": {
    "name": "Hang",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 10 damage.\nDouble the damage ALL Hang cards deal to this enemy.",
    "vars": {
      "damage": 10
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/hang.png"
  },
  "HAUNT": {
    "name": "Haunt",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you play a Soul, a random enemy loses 6 HP.",
    "vars": {
      "hp_loss": 6
    },
    "upgrade": {
      "hp_loss": 2
    },
    "target": "Self",
    "image": "images/cards/haunt.png"
  },
  "HAVOC": {
    "name": "Havoc",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Play the top card of your Draw Pile and Exhaust it.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/havoc.png"
  },
  "HAZE": {
    "name": "Haze",
    "character": "silent",
    "type": "Skill",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [
      "Sly"
    ],
    "description": "Apply 4 Poison to ALL enemies.",
    "vars": {
      "power_poison": 4
    },
    "upgrade": {
      "poison": 2
    },
    "target": "AllEnemies",
    "image": "images/cards/haze.png"
  },
  "HEADBUTT": {
    "name": "Headbutt",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 9 damage.\nPut a card from your Discard Pile on top of your Draw Pile.",
    "vars": {
      "damage": 9
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/headbutt.png"
  },
  "HEAVENLY DRILL": {
    "name": "Heavenly Drill",
    "character": "regent",
    "type": "Attack",
    "cost": -1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 8 damage X times.\nDouble X if it's 4 or more.",
    "vars": {
      "damage": 8,
      "energy": 4
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/heavenly_drill.png"
  },
  "HEGEMONY": {
    "name": "Hegemony",
    "character": "regent",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 15 damage.\nNext turn, gain [E][E].",
    "vars": {
      "damage": 15,
      "energy": 2
    },
    "upgrade": {
      "damage": 3,
      "energy": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/hegemony.png"
  },
  "HEIRLOOM HAMMER": {
    "name": "Heirloom Hammer",
    "character": "regent",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 20 damage.\nChoose a Colorless card in your Hand. Add a copy of that card into your Hand.",
    "vars": {
      "damage": 20,
      "repeat": 1
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/heirloom_hammer.png"
  },
  "HELIX DRILL": {
    "name": "Helix Drill",
    "character": "defect",
    "type": "Attack",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 3 damage for each [E] previously spent this turn.",
    "vars": {
      "damage": 3,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 2,
      "description": "Deal 5 damage for each [E] previously spent this turn."
    },
    "target": "AnyEnemy",
    "image": "images/cards/helix_drill.png"
  },
  "HELLO WORLD": {
    "name": "Hello World",
    "character": "event",
    "type": "Power",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "At the start of your turn, add a random Common card into your Hand.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/hello_world.png"
  },
  "HELLRAISER": {
    "name": "Hellraiser",
    "character": "ironclad",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you draw a card containing “Strike”, it is played against a random enemy.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/hellraiser.png"
  },
  "HEMOKINESIS": {
    "name": "Hemokinesis",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Lose 2 HP.\nDeal 15 damage.",
    "vars": {
      "damage": 15,
      "hp_loss": 2
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/hemokinesis.png"
  },
  "HIDDEN CACHE": {
    "name": "Hidden Cache",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain [S].\nNext turn, gain [S][S][S].",
    "vars": {
      "stars_var": 1,
      "power_star_next_turn": 3
    },
    "upgrade": {
      "star_next_turn": 1
    },
    "target": "Self",
    "image": "images/cards/hidden_cache.png"
  },
  "HIDDEN DAGGERS": {
    "name": "Hidden Daggers",
    "character": "silent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Discard 2 cards.\nAdd 2 Shiv} into your Hand.",
    "vars": {
      "cards": 2,
      "shivs": 2
    },
    "upgrade": {
      "description": "Discard 2 cards.\nAdd 2 Shivs+ into your Hand."
    },
    "target": "Self",
    "image": "images/cards/hidden_daggers.png"
  },
  "HIDDEN GEM": {
    "name": "Hidden Gem",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "A random card without Replay in your Draw Pile gains Replay 2.",
    "vars": {
      "replay": 2
    },
    "upgrade": {
      "replay": 1
    },
    "target": "Self",
    "image": "images/cards/hidden_gem.png"
  },
  "HIGH FIVE": {
    "name": "High Five",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Osty deals 11 damage\nand applies 2 Vulnerable\nto ALL enemies.",
    "vars": {
      "osty_damage": 11,
      "power_vulnerable": 2
    },
    "upgrade": {
      "osty_damage": 2,
      "vulnerable": 1
    },
    "target": "AllEnemies",
    "image": "images/cards/high_five.png"
  },
  "HOLOGRAM": {
    "name": "Hologram",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 3 Block.\nPut a card from your Discard Pile into your Hand.",
    "vars": {
      "block": 3
    },
    "upgrade": {
      "block": 2,
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/hologram.png"
  },
  "HOTFIX": {
    "name": "Hotfix",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 2 Focus this turn.",
    "vars": {
      "power_focus": 2
    },
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/hotfix.png"
  },
  "HOWL FROM BEYOND": {
    "name": "Howl from Beyond",
    "character": "ironclad",
    "type": "Attack",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 16 damage to ALL enemies.\nAt the start of your turn, if this is in your Exhaust Pile, play it.",
    "vars": {
      "damage": 16
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AllEnemies",
    "image": "images/cards/howl_from_beyond.png"
  },
  "HUDDLE UP": {
    "name": "Huddle Up",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "ALL players draw 2 cards.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1
    },
    "target": "AllAllies",
    "image": "images/cards/huddle_up.png"
  },
  "HYPERBEAM": {
    "name": "Hyperbeam",
    "character": "defect",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 26 damage to ALL enemies.\nLose 3 Focus.",
    "vars": {
      "damage": 26,
      "power_focus": 3
    },
    "upgrade": {
      "damage": 8
    },
    "target": "AllEnemies",
    "image": "images/cards/hyperbeam.png"
  },
  "I AM INVINCIBLE": {
    "name": "I Am Invincible",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain 10 Block.\nAt the end of your turn, if this is on top of your Draw Pile, play it.",
    "vars": {
      "block": 10
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/i_am_invincible.png"
  },
  "ICE LANCE": {
    "name": "Ice Lance",
    "character": "defect",
    "type": "Attack",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 19 damage.\nChannel 3 Frost.",
    "vars": {
      "damage": 19,
      "repeat": 3
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/ice_lance.png"
  },
  "IGNITION": {
    "name": "Ignition",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Another player Channels Plasma.",
    "vars": {},
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "AnyAlly",
    "image": "images/cards/ignition.png"
  },
  "IMPATIENCE": {
    "name": "Impatience",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "If you have no Attacks in your Hand, draw 2 cards.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/impatience.png"
  },
  "IMPERVIOUS": {
    "name": "Impervious",
    "character": "ironclad",
    "type": "Skill",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 30 Block.",
    "vars": {
      "block": 30
    },
    "upgrade": {
      "block": 10
    },
    "target": "Self",
    "image": "images/cards/impervious.png"
  },
  "INFECTION": {
    "name": "Infection",
    "character": "status",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [
      "Unplayable"
    ],
    "description": "At the end of your turn, if this is in your Hand, take 3 damage.",
    "vars": {
      "damage": 3
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/infection.png"
  },
  "INFERNAL BLADE": {
    "name": "Infernal Blade",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Add a random Attack into your Hand. It's free to play this turn.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/infernal_blade.png"
  },
  "INFERNO": {
    "name": "Inferno",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the start of your turn, lose 1 HP.\nWhenever you lose HP on your turn, deal 6 damage to ALL enemies.",
    "vars": {
      "power_inferno": 6
    },
    "upgrade": {
      "inferno": 3
    },
    "target": "Self",
    "image": "images/cards/inferno.png"
  },
  "INFINITE BLADES": {
    "name": "Infinite Blades",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the start of your turn, add 1 Shiv into your Hand.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/infinite_blades.png"
  },
  "INFLAME": {
    "name": "Inflame",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 2 Strength.",
    "vars": {
      "power_strength": 2
    },
    "upgrade": {
      "strength": 1
    },
    "target": "Self",
    "image": "images/cards/inflame.png"
  },
  "INJURY": {
    "name": "Injury",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/injury.png"
  },
  "INTERCEPT": {
    "name": "Intercept",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 9 Block.\nRedirect all incoming attacks that would be dealt to another player this turn to you.",
    "vars": {
      "block": 9
    },
    "upgrade": {
      "block": 4
    },
    "target": "AnyAlly",
    "image": "images/cards/intercept.png"
  },
  "INVOKE": {
    "name": "Invoke",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Next turn, Summon 2 and gain [E][E].",
    "vars": {
      "energy": 2,
      "summon": 2
    },
    "upgrade": {
      "summon": 1,
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/invoke.png"
  },
  "IRON WAVE": {
    "name": "Iron Wave",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 5 Block.\nDeal 5 damage.",
    "vars": {
      "damage": 5,
      "block": 5
    },
    "upgrade": {
      "damage": 2,
      "block": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/iron_wave.png"
  },
  "ITERATION": {
    "name": "Iteration",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "The first time you draw a Status each turn, draw 2 cards.",
    "vars": {
      "power_iteration": 2
    },
    "upgrade": {
      "iteration": 1,
      "description": "The first time you draw a Status each turn, draw 3 cards."
    },
    "target": "Self",
    "image": "images/cards/iteration.png"
  },
  "JACK OF ALL TRADES": {
    "name": "Jack of All Trades",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Add 1 random Colorless card into your Hand.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Add 2 random Colorless cards into your Hand."
    },
    "target": "Self",
    "image": "images/cards/jack_of_all_trades.png"
  },
  "JACKPOT": {
    "name": "Jackpot",
    "character": "colorless",
    "type": "Attack",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 25 damage.\nAdd 3 random 0[E] cards into your Hand.",
    "vars": {
      "damage": 25,
      "cards": 3
    },
    "upgrade": {
      "damage": 5,
      "description": "Deal 30 damage.\nAdd 3 random Upgraded} 0[E] card into your Hand."
    },
    "target": "AnyEnemy",
    "image": "images/cards/jackpot.png"
  },
  "JUGGERNAUT": {
    "name": "Juggernaut",
    "character": "ironclad",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you gain Block, deal 5 damage to a random enemy.",
    "vars": {
      "power_juggernaut": 5
    },
    "upgrade": {
      "juggernaut": 2
    },
    "target": "Self",
    "image": "images/cards/juggernaut.png"
  },
  "JUGGLING": {
    "name": "Juggling",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Add a copy of the third Attack you play each turn into your Hand.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/juggling.png"
  },
  "KINGLY KICK": {
    "name": "Kingly Kick",
    "character": "regent",
    "type": "Attack",
    "cost": 4,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 27 damage.\nWhenever you draw this card, reduce its cost by 1.",
    "vars": {
      "damage": 27
    },
    "upgrade": {
      "damage": 8
    },
    "target": "AnyEnemy",
    "image": "images/cards/kingly_kick.png"
  },
  "KINGLY PUNCH": {
    "name": "Kingly Punch",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 8 damage.\nWhenever you draw this card, increase its damage by 4 this combat.",
    "vars": {
      "damage": 8,
      "increase": 4
    },
    "upgrade": {
      "damage": 2,
      "increase": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/kingly_punch.png"
  },
  "KNIFE TRAP": {
    "name": "Knife Trap",
    "character": "silent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Play every Shiv in your Exhaust Pile on the enemy.",
    "vars": {
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "description": "Upgrade and play every Shiv in your Exhaust Pile on the enemy."
    },
    "target": "AnyEnemy",
    "image": "images/cards/knife_trap.png"
  },
  "KNOCKDOWN": {
    "name": "Knockdown",
    "character": "colorless",
    "type": "Attack",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 10 damage.\nThe enemy takes double damage from other players this turn.",
    "vars": {
      "damage": 10,
      "power_knockdown": 2
    },
    "upgrade": {
      "damage": 4,
      "knockdown": 1,
      "description": "Deal 14 damage.\nThe enemy takes triple damage from other players this turn."
    },
    "target": "AnyEnemy",
    "image": "images/cards/knockdown.png"
  },
  "KNOCKOUT BLOW": {
    "name": "Knockout Blow",
    "character": "regent",
    "type": "Attack",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 30 damage.\nIf this kills an enemy, gain [S][S][S][S][S].",
    "vars": {
      "damage": 30,
      "stars_var": 5
    },
    "upgrade": {
      "damage": 8
    },
    "target": "AnyEnemy",
    "image": "images/cards/knockout_blow.png"
  },
  "KNOW THY PLACE": {
    "name": "Know Thy Place",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Apply 1 Weak.\nApply 1 Vulnerable.",
    "vars": {
      "power_weak": 1,
      "power_vulnerable": 1
    },
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "AnyEnemy",
    "image": "images/cards/know_thy_place.png"
  },
  "LANTERN KEY": {
    "name": "Lantern Key",
    "character": "quest",
    "type": "Quest",
    "cost": null,
    "rarity": "Quest",
    "keywords": [
      "Unplayable"
    ],
    "description": "Unlocks a special event in the next Act.",
    "vars": {},
    "upgrade": {},
    "target": "Self",
    "image": "images/cards/lantern_key.png"
  },
  "LARGESSE": {
    "name": "Largesse",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Another player adds 1 random Colorless card to their Hand.",
    "vars": {},
    "upgrade": {
      "description": "Another player adds 1 random Upgraded Colorless card to their Hand."
    },
    "target": "AnyAlly",
    "image": "images/cards/largesse.png"
  },
  "LEADING STRIKE": {
    "name": "Leading Strike",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 3 damage.\nAdd 2 Shivs into your Hand.",
    "vars": {
      "damage": 3,
      "shivs": 2
    },
    "upgrade": {
      "damage": 3,
      "description": "Deal 6 damage.\nAdd 2 Shivs into your Hand."
    },
    "target": "AnyEnemy",
    "image": "images/cards/leading_strike.png"
  },
  "LEAP": {
    "name": "Leap",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 9 Block.",
    "vars": {
      "block": 9
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/leap.png"
  },
  "LEG SWEEP": {
    "name": "Leg Sweep",
    "character": "silent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Apply 2 Weak.\nGain 11 Block.",
    "vars": {
      "block": 11,
      "power_weak": 2
    },
    "upgrade": {
      "block": 3,
      "weak": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/leg_sweep.png"
  },
  "LEGION OF BONE": {
    "name": "Legion of Bone",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "ALL players Summon 6.",
    "vars": {
      "summon": 6
    },
    "upgrade": {
      "summon": 2
    },
    "target": "AllAllies",
    "image": "images/cards/legion_of_bone.png"
  },
  "LETHALITY": {
    "name": "Lethality",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Ethereal"
    ],
    "description": "The first Attack each turn deals 50% additional damage.",
    "vars": {
      "power_lethality": 50
    },
    "upgrade": {
      "lethality": 25
    },
    "target": "Self",
    "image": "images/cards/lethality.png"
  },
  "LIFT": {
    "name": "Lift",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Give another player 11 Block.",
    "vars": {
      "block": 11
    },
    "upgrade": {
      "block": 5
    },
    "target": "AnyAlly",
    "image": "images/cards/lift.png"
  },
  "LIGHTNING ROD": {
    "name": "Lightning Rod",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 4 Block.\nAt the start of the next 2 turns, Channel 1 Lightning.",
    "vars": {
      "block": 4,
      "power_lightning_rod": 2
    },
    "upgrade": {
      "block": 3,
      "description": "Gain 7 Block.\nAt the start of the next 2 turns, Channel 1 Lightning."
    },
    "target": "Self",
    "image": "images/cards/lightning_rod.png"
  },
  "LOOP": {
    "name": "Loop",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the start of your turn, trigger the passive ability of your rightmost Orb.",
    "vars": {
      "loop": 1
    },
    "upgrade": {
      "loop": 1,
      "description": "At the start of your turn, trigger the passive ability of your rightmost Orb 2 times."
    },
    "target": "Self",
    "image": "images/cards/loop.png"
  },
  "LUMINESCE": {
    "name": "Luminesce",
    "character": "token",
    "type": "Skill",
    "cost": 0,
    "rarity": "Token",
    "keywords": [
      "Exhaust",
      "Retain"
    ],
    "description": "Gain [E][E].",
    "vars": {
      "energy": 2
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/luminesce.png"
  },
  "LUNAR BLAST": {
    "name": "Lunar Blast",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 4 damage for each Skill already played this turn.",
    "vars": {
      "damage": 4,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 1,
      "description": "Deal 5 damage for each Skill already played this turn."
    },
    "target": "AnyEnemy",
    "image": "images/cards/lunar_blast.png"
  },
  "MACHINE LEARNING": {
    "name": "Machine Learning",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, draw 1 additional card.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/machine_learning.png"
  },
  "MAD SCIENCE": {
    "name": "Mad Science",
    "character": "event",
    "type": "Attack",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "A custom card created during the Tinker Time event. You choose a card type (Attack, Skill, or Power) and a rider effect.",
    "vars": {
      "damage": 12,
      "block": 8,
      "wisdom_cards": 3,
      "violence_hits": 3,
      "curious_reduction": 1,
      "energized_energy": 2
    },
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "AnyEnemy",
    "image": "images/cards/mad_science.png"
  },
  "MAKE IT SO": {
    "name": "Make It So",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 6 damage.\nEvery 3 Skills you play in a turn, put this into your Hand.",
    "vars": {
      "damage": 6,
      "cards": 3
    },
    "upgrade": {
      "damage": 3,
      "description": "Deal 9 damage.\nEvery 3 Skills you play in a turn, put this into your Hand."
    },
    "target": "AnyEnemy",
    "image": "images/cards/make_it_so.png"
  },
  "MALAISE": {
    "name": "Malaise",
    "character": "silent",
    "type": "Skill",
    "cost": -1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Enemy loses X Strength. Apply X Weak.",
    "vars": {},
    "upgrade": {
      "description": "Enemy loses X+1 Strength. Apply X+1 Weak."
    },
    "target": "AnyEnemy",
    "image": "images/cards/malaise.png"
  },
  "MANGLE": {
    "name": "Mangle",
    "character": "ironclad",
    "type": "Attack",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 15 damage.\nEnemy loses 10 Strength this turn.",
    "vars": {
      "damage": 15,
      "strength_loss": 10
    },
    "upgrade": {
      "damage": 5,
      "strength_loss": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/mangle.png"
  },
  "MANIFEST AUTHORITY": {
    "name": "Manifest Authority",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 7 Block.\nAdd 1 random Colorless card into your Hand.",
    "vars": {
      "block": 7
    },
    "upgrade": {
      "block": 1,
      "description": "Gain 8 Block.\nAdd 1 random Upgraded Colorless card into your Hand."
    },
    "target": "Self",
    "image": "images/cards/manifest_authority.png"
  },
  "MASTER OF STRATEGY": {
    "name": "Master of Strategy",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Draw 3 cards.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/master_of_strategy.png"
  },
  "MASTER PLANNER": {
    "name": "Master Planner",
    "character": "silent",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "When you play a Skill, it gains Sly.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/master_planner.png"
  },
  "MAUL": {
    "name": "Maul",
    "character": "event",
    "type": "Attack",
    "cost": 1,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Deal 5 damage twice.\nIncrease the damage of ALL Maul cards by 1 this combat.",
    "vars": {
      "damage": 5,
      "increase": 1
    },
    "upgrade": {
      "damage": 1,
      "increase": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/maul.png"
  },
  "MAYHEM": {
    "name": "Mayhem",
    "character": "colorless",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, play the top card of your Draw Pile.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/mayhem.png"
  },
  "MELANCHOLY": {
    "name": "Melancholy",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 13 Block.\nReduce this card's cost by [E] whenever ANYONE dies.",
    "vars": {
      "block": 13,
      "energy": 1
    },
    "upgrade": {
      "block": 4
    },
    "target": "Self",
    "image": "images/cards/melancholy.png"
  },
  "MEMENTO MORI": {
    "name": "Memento Mori",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 9 damage.\nDeals 4 additional damage for each card discarded this turn.",
    "vars": {
      "extra_damage": 4,
      "calculation_base": 9
    },
    "upgrade": {
      "calculation_base": 2,
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/memento_mori.png"
  },
  "METAMORPHOSIS": {
    "name": "Metamorphosis",
    "character": "event",
    "type": "Skill",
    "cost": 2,
    "rarity": "Event",
    "keywords": [
      "Exhaust"
    ],
    "description": "Add 3 random Attacks into your Draw Pile. They're free to play this combat.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 2
    },
    "target": "Self",
    "image": "images/cards/metamorphosis.png"
  },
  "METEOR SHOWER": {
    "name": "Meteor Shower",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Deal 14 damage to ALL enemies.\nApply 2 Weak and Vulnerable to ALL enemies.",
    "vars": {
      "damage": 14,
      "power_vulnerable": 2,
      "power_weak": 2
    },
    "upgrade": {
      "damage": 7
    },
    "target": "AllEnemies",
    "image": "images/cards/meteor_shower.png"
  },
  "METEOR STRIKE": {
    "name": "Meteor Strike",
    "character": "defect",
    "type": "Attack",
    "cost": 5,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 24 damage.\nChannel 3 Plasma.",
    "vars": {
      "damage": 24
    },
    "upgrade": {
      "damage": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/meteor_strike.png"
  },
  "MIMIC": {
    "name": "Mimic",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain Block equal to the Block on another player.",
    "vars": {
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "AnyAlly",
    "image": "images/cards/mimic.png"
  },
  "MIND BLAST": {
    "name": "Mind Blast",
    "character": "colorless",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Innate"
    ],
    "description": "Deal damage equal to the number of cards in your Draw Pile.",
    "vars": {
      "extra_damage": 1,
      "calculation_base": 0
    },
    "upgrade": {
      "cost": 0
    },
    "target": "AnyEnemy",
    "image": "images/cards/mind_blast.png"
  },
  "MIND ROT": {
    "name": "Mind Rot",
    "character": "token",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [],
    "description": "Draw 1 fewer card each turn.",
    "vars": {
      "power_mind_rot": 1
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/mind_rot.png"
  },
  "MINION DIVE BOMB": {
    "name": "Minion Dive Bomb",
    "character": "token",
    "type": "Attack",
    "cost": 0,
    "rarity": "Token",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 13 damage.",
    "vars": {
      "damage": 13
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/minion_dive_bomb.png"
  },
  "MINION SACRIFICE": {
    "name": "Minion Sacrifice",
    "character": "token",
    "type": "Skill",
    "cost": 0,
    "rarity": "Token",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 9 Block.",
    "vars": {
      "block": 9
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/minion_sacrifice.png"
  },
  "MINION STRIKE": {
    "name": "Minion Strike",
    "character": "token",
    "type": "Attack",
    "cost": 0,
    "rarity": "Token",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 6 damage.\nDraw 1 card.",
    "vars": {
      "damage": 6,
      "cards": 1
    },
    "upgrade": {
      "damage": 3,
      "description": "Deal 9 damage.\nDraw 1 card."
    },
    "target": "AnyEnemy",
    "image": "images/cards/minion_strike.png"
  },
  "MIRAGE": {
    "name": "Mirage",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain Block equal to Poison on ALL enemies.",
    "vars": {
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/mirage.png"
  },
  "MISERY": {
    "name": "Misery",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 7 damage.\nApply any debuffs on the enemy to ALL other enemies.",
    "vars": {
      "damage": 7
    },
    "upgrade": {
      "damage": 2,
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "AnyEnemy",
    "image": "images/cards/misery.png"
  },
  "MODDED": {
    "name": "Modded",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain 1 Orb Slot.\nDraw 1 card. Increase this card's cost by 1.",
    "vars": {
      "cards": 1,
      "repeat": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Gain 1 Orb Slot.\nDraw 2 cards. Increase this card's cost by 1."
    },
    "target": "Self",
    "image": "images/cards/modded.png"
  },
  "MOLTEN FIST": {
    "name": "Molten Fist",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 10 damage.\nDouble the enemy's Vulnerable.",
    "vars": {
      "damage": 10
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/molten_fist.png"
  },
  "MOMENTUM STRIKE": {
    "name": "Momentum Strike",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 10 damage.\nReduce this card's cost to 0 [E].",
    "vars": {
      "damage": 10
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/momentum_strike.png"
  },
  "MONARCH'S GAZE": {
    "name": "Monarch's Gaze",
    "character": "regent",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you attack an enemy, it loses 1 Strength this turn.",
    "vars": {
      "strength_loss": 1
    },
    "upgrade": {
      "cost": 2
    },
    "target": "Self"
  },
  "MONOLOGUE": {
    "name": "Monologue",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you play a card this turn, gain 1 Strength this turn.",
    "vars": {
      "power": 1
    },
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/monologue.png"
  },
  "MULTI-CAST": {
    "name": "Multi-Cast",
    "character": "defect",
    "type": "Skill",
    "cost": -1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Evoke your rightmost Orb X times.",
    "vars": {},
    "upgrade": {
      "description": "Evoke your rightmost Orb X+1 times."
    },
    "target": "Self",
    "image": "images/cards/multi_cast.png"
  },
  "MURDER": {
    "name": "Murder",
    "character": "silent",
    "type": "Attack",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 1 damage.\nDeals 1 additional damage for each card drawn this combat.",
    "vars": {
      "extra_damage": 1,
      "calculation_base": 1
    },
    "upgrade": {
      "cost": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/murder.png"
  },
  "NECRO MASTERY": {
    "name": "Necro Mastery",
    "character": "necrobinder",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Summon 5.\nWhenever Osty loses HP,\nALL enemies lose that much HP as well.",
    "vars": {
      "summon": 5
    },
    "upgrade": {
      "summon": 3
    },
    "target": "Self",
    "image": "images/cards/necro_mastery.png"
  },
  "NEGATIVE PULSE": {
    "name": "Negative Pulse",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 5 Block.\nApply 7 Doom to ALL enemies.",
    "vars": {
      "block": 5,
      "power_doom": 7
    },
    "upgrade": {
      "block": 1,
      "doom": 4
    },
    "target": "AllEnemies",
    "image": "images/cards/negative_pulse.png"
  },
  "NEOW'S FURY": {
    "name": "Neow's Fury",
    "character": "event",
    "type": "Attack",
    "cost": 1,
    "rarity": "Ancient",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 10 damage.\nPut 2 random cards from your Discard Pile into your Hand.",
    "vars": {
      "damage": 10,
      "cards": 2
    },
    "upgrade": {
      "damage": 4,
      "cards": 1,
      "description": "Deal 14 damage.\nPut 3 random cards from your Discard Pile into your Hand."
    },
    "target": "AnyEnemy"
  },
  "NEUROSURGE": {
    "name": "Neurosurge",
    "character": "necrobinder",
    "type": "Power",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain [E][E][E].\nDraw 2 cards.\nAt the start of your turn, apply 3 Doom to yourself.",
    "vars": {
      "cards": 2,
      "energy": 3,
      "power_neurosurge": 3
    },
    "upgrade": {
      "energy": 1,
      "description": "Gain [E][E][E][E].\nDraw 2 cards.\nAt the start of your turn, apply 3 Doom to yourself."
    },
    "target": "Self",
    "image": "images/cards/neurosurge.png"
  },
  "NEUTRALIZE": {
    "name": "Neutralize",
    "character": "silent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Basic",
    "keywords": [],
    "description": "Deal 3 damage.\nApply 1 Weak.",
    "vars": {
      "damage": 3,
      "power_weak": 1
    },
    "upgrade": {
      "damage": 1,
      "weak": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/neutralize.png"
  },
  "NEUTRON AEGIS": {
    "name": "Neutron Aegis",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain 8 Plating.",
    "vars": {
      "power_plating": 8
    },
    "upgrade": {
      "plating": 3
    },
    "target": "Self",
    "image": "images/cards/neutron_aegis.png"
  },
  "NIGHTMARE": {
    "name": "Nightmare",
    "character": "silent",
    "type": "Skill",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Choose a card.\nNext turn, add 3 copies of that card into your Hand.",
    "vars": {},
    "upgrade": {
      "cost": 2
    },
    "target": "Self",
    "image": "images/cards/nightmare.png"
  },
  "NO ESCAPE": {
    "name": "No Escape",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Apply 10 Doom, plus an additional 5 Doom for every 10 Doom already on this enemy.\n(Apply 10 Doom)",
    "vars": {
      "calculation_base": 10,
      "calculation_extra": 5,
      "doom_threshold": 10
    },
    "upgrade": {
      "calculation_base": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/no_escape.png"
  },
  "NORMALITY": {
    "name": "Normality",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Unplayable"
    ],
    "description": "You cannot play more than 3 cards this turn.",
    "vars": {
      "calculation_base": 3
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/normality.png"
  },
  "NOSTALGIA": {
    "name": "Nostalgia",
    "character": "colorless",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "The first Attack or Skill you play each turn is placed on top of your Draw Pile.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/nostalgia.png"
  },
  "NOT YET": {
    "name": "Not Yet",
    "character": "ironclad",
    "type": "Skill",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Heal 10 HP.",
    "vars": {
      "heal": 10
    },
    "upgrade": {
      "heal": 3
    },
    "target": "Self",
    "image": "images/cards/not_yet.png"
  },
  "NOXIOUS FUMES": {
    "name": "Noxious Fumes",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the start of your turn, apply 2 Poison to ALL enemies.",
    "vars": {
      "poison_per_turn": 2
    },
    "upgrade": {
      "poison_per_turn": 1
    },
    "target": "Self",
    "image": "images/cards/noxious_fumes.png"
  },
  "NULL": {
    "name": "Null",
    "character": "defect",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 10 damage.\nApply 2 Weak.\nChannel 1 Dark.",
    "vars": {
      "damage": 10,
      "power_weak": 2
    },
    "upgrade": {
      "damage": 3,
      "weak": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/null.png"
  },
  "OBLIVION": {
    "name": "Oblivion",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you play a card this turn, apply 3 Doom to the enemy.",
    "vars": {
      "power_doom": 3
    },
    "upgrade": {
      "doom": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/oblivion.png"
  },
  "OFFERING": {
    "name": "Offering",
    "character": "ironclad",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Lose 6 HP.\nGain [E][E].\nDraw 3 cards.",
    "vars": {
      "cards": 3,
      "energy": 2,
      "hp_loss": 6
    },
    "upgrade": {
      "cards": 2
    },
    "target": "Self",
    "image": "images/cards/offering.png"
  },
  "OMNISLICE": {
    "name": "Omnislice",
    "character": "colorless",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 8 damage.\nDamage ALL other enemies equal to the damage dealt.",
    "vars": {
      "damage": 8
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/omnislice.png"
  },
  "ONE-TWO PUNCH": {
    "name": "One-Two Punch",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "This turn, your next Attack is played an extra time.",
    "vars": {
      "attacks": 1
    },
    "upgrade": {
      "attacks": 1,
      "description": "This turn, your next 2 Attacks are played an extra time."
    },
    "target": "Self",
    "image": "images/cards/one_two_punch.png"
  },
  "ORBIT": {
    "name": "Orbit",
    "character": "regent",
    "type": "Power",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Every [E][E][E][E] you spend,\ngain [E].",
    "vars": {
      "energy": 1
    },
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/orbit.png"
  },
  "OUTBREAK": {
    "name": "Outbreak",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Every 3 times you apply Poison, deal 11 damage to ALL enemies.",
    "vars": {
      "repeat": 3,
      "power_outbreak": 11
    },
    "upgrade": {
      "outbreak": 4,
      "description": "Every 3 times you apply Poison, deal 15 damage to ALL enemies."
    },
    "target": "Self",
    "image": "images/cards/outbreak.png"
  },
  "OUTMANEUVER": {
    "name": "Outmaneuver",
    "character": "event",
    "type": "Skill",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Next turn, gain [E][E].",
    "vars": {
      "energy": 2
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/outmaneuver.png"
  },
  "OVERCLOCK": {
    "name": "Overclock",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw 2 cards.\nAdd a Burn into your Discard Pile.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/overclock.png"
  },
  "PACT'S END": {
    "name": "Pact's End",
    "character": "ironclad",
    "type": "Attack",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Can only be played if you have 3 or more cards in your Exhaust Pile.\nDeal 17 damage to ALL enemies.",
    "vars": {
      "damage": 17,
      "cards": 3
    },
    "upgrade": {
      "damage": 6,
      "description": "Can only be played if you have 3 or more cards in your Exhaust Pile.\nDeal 23 damage to ALL enemies."
    },
    "target": "AllEnemies"
  },
  "PAGESTORM": {
    "name": "Pagestorm",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you draw an Ethereal card, draw 1 card.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/pagestorm.png"
  },
  "PALE BLUE DOT": {
    "name": "Pale Blue Dot",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "If you play 5 or more cards in a turn, draw 1 card at the start of your next turn.",
    "vars": {
      "cards": 1,
      "card_play": 5
    },
    "upgrade": {
      "cards": 1,
      "description": "If you play 5 or more cards in a turn, draw 2 cards at the start of your next turn."
    },
    "target": "Self",
    "image": "images/cards/pale_blue_dot.png"
  },
  "PANACHE": {
    "name": "Panache",
    "character": "colorless",
    "type": "Power",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Every time you play 5 cards in a single turn, deal 10 damage to ALL enemies.",
    "vars": {
      "panache_damage": 10
    },
    "upgrade": {
      "panache_damage": 4
    },
    "target": "Self",
    "image": "images/cards/panache.png"
  },
  "PANIC BUTTON": {
    "name": "Panic Button",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 30 Block.\nYou cannot gain Block from cards for 2 turns.",
    "vars": {
      "block": 30,
      "turns": 2
    },
    "upgrade": {
      "block": 10,
      "description": "Gain 40 Block.\nYou cannot gain Block from cards for 2 turns."
    },
    "target": "Self",
    "image": "images/cards/panic_button.png"
  },
  "PARRY": {
    "name": "Parry",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you play Sovereign Blade, gain 10 Block.",
    "vars": {
      "power_parry": 10
    },
    "upgrade": {
      "parry": 4
    },
    "target": "Self",
    "image": "images/cards/parry.png"
  },
  "PARSE": {
    "name": "Parse",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Ethereal"
    ],
    "description": "Draw 3 cards.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/parse.png"
  },
  "PARTICLE WALL": {
    "name": "Particle Wall",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 9 Block.\nReturn this card to your Hand.",
    "vars": {
      "block": 9
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/particle_wall.png"
  },
  "PATTER": {
    "name": "Patter",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 9 Block.\nGain 2 Vigor.",
    "vars": {
      "block": 9,
      "power_vigor": 2
    },
    "upgrade": {
      "block": 2,
      "vigor": 1
    },
    "target": "Self",
    "image": "images/cards/patter.png"
  },
  "PECK": {
    "name": "Peck",
    "character": "event",
    "type": "Attack",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Deal 2 damage 3 times.",
    "vars": {
      "damage": 2,
      "repeat": 3
    },
    "upgrade": {
      "repeat": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/peck.png"
  },
  "PERFECTED STRIKE": {
    "name": "Perfected Strike",
    "character": "ironclad",
    "type": "Attack",
    "cost": 2,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 6 damage.\nDeals 2 additional damage for ALL your cards containing “Strike”.",
    "vars": {
      "extra_damage": 2,
      "calculation_base": 6
    },
    "upgrade": {
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/perfected_strike.png"
  },
  "PHANTOM BLADES": {
    "name": "Phantom Blades",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Shivs gain Retain.\nThe first Shiv you play each turn deals 9 additional damage.",
    "vars": {
      "power_phantom_blades": 9
    },
    "upgrade": {
      "phantom_blades": 3
    },
    "target": "Self",
    "image": "images/cards/phantom_blades.png"
  },
  "PHOTON CUT": {
    "name": "Photon Cut",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 10 damage.\nDraw 1 card.\nPut 1 card from your Hand on top of your Draw Pile.",
    "vars": {
      "damage": 10,
      "cards": 1,
      "put_back": 1
    },
    "upgrade": {
      "damage": 3,
      "cards": 1,
      "description": "Deal 13 damage.\nDraw 2 cards.\nPut 1 card from your Hand on top of your Draw Pile."
    },
    "target": "AnyEnemy",
    "image": "images/cards/photon_cut.png"
  },
  "PIERCING WAIL": {
    "name": "Piercing Wail",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "ALL enemies lose 6 Strength this turn.",
    "vars": {
      "strength_loss": 6
    },
    "upgrade": {
      "strength_loss": 2
    },
    "target": "AllEnemies",
    "image": "images/cards/piercing_wail.png"
  },
  "PILLAGE": {
    "name": "Pillage",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 6 damage.\nDraw cards until you draw a non-Attack card.",
    "vars": {
      "damage": 6
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/pillage.png"
  },
  "PILLAR OF CREATION": {
    "name": "Pillar of Creation",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you create a card, gain 3 Block.",
    "vars": {
      "block": 3
    },
    "upgrade": {
      "block": 1
    },
    "target": "Self",
    "image": "images/cards/pillar_of_creation.png"
  },
  "PINPOINT": {
    "name": "Pinpoint",
    "character": "silent",
    "type": "Attack",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 15 damage.\nCosts 1 less [E] for each Skill played this turn.",
    "vars": {
      "damage": 15
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/pinpoint.png"
  },
  "POISONED STAB": {
    "name": "Poisoned Stab",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 6 damage.\nApply 3 Poison.",
    "vars": {
      "damage": 6,
      "power_poison": 3
    },
    "upgrade": {
      "damage": 2,
      "poison": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/poisoned_stab.png"
  },
  "POKE": {
    "name": "Poke",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Osty deals 6 damage.",
    "vars": {
      "osty_damage": 6
    },
    "upgrade": {
      "osty_damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/poke.png"
  },
  "POMMEL STRIKE": {
    "name": "Pommel Strike",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 9 damage.\nDraw 1 card.",
    "vars": {
      "damage": 9,
      "cards": 1
    },
    "upgrade": {
      "damage": 1,
      "cards": 1,
      "description": "Deal 10 damage.\nDraw 2 cards."
    },
    "target": "AnyEnemy",
    "image": "images/cards/pommel_strike.png"
  },
  "POOR SLEEP": {
    "name": "Poor Sleep",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Retain",
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/poor_sleep.png"
  },
  "POUNCE": {
    "name": "Pounce",
    "character": "silent",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 12 damage.\nThe next Skill you play costs 0 [E].",
    "vars": {
      "damage": 12
    },
    "upgrade": {
      "damage": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/pounce.png"
  },
  "PRECISE CUT": {
    "name": "Precise Cut",
    "character": "silent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 13 damage.\nDeals 2 less damage for each other card in your Hand.",
    "vars": {
      "extra_damage": 2,
      "calculation_base": 13
    },
    "upgrade": {
      "calculation_base": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/precise_cut.png"
  },
  "PREDATOR": {
    "name": "Predator",
    "character": "silent",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 15 damage.\nNext turn, draw 2 cards.",
    "vars": {
      "damage": 15
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/predator.png"
  },
  "PREP TIME": {
    "name": "Prep Time",
    "character": "colorless",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the start of your turn, gain 4 Vigor.",
    "vars": {
      "power_prep_time": 4
    },
    "upgrade": {
      "prep_time": 2
    },
    "target": "Self",
    "image": "images/cards/prep_time.png"
  },
  "PREPARED": {
    "name": "Prepared",
    "character": "silent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Draw 1 card.\nDiscard 1 card.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Draw 2 cards.\nDiscard 2 cards."
    },
    "target": "Self",
    "image": "images/cards/prepared.png"
  },
  "PRIMAL FORCE": {
    "name": "Primal Force",
    "character": "ironclad",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Transform all Attacks in your Hand into Giant Rock.",
    "vars": {},
    "upgrade": {
      "description": "Transform all Attacks in your Hand into Giant Rock+."
    },
    "target": "Self",
    "image": "images/cards/primal_force.png"
  },
  "PRODUCTION": {
    "name": "Production",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain [E][E].",
    "vars": {
      "energy": 2
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/production.png"
  },
  "PROLONG": {
    "name": "Prolong",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Next turn, gain Block equal to your current Block.",
    "vars": {},
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/prolong.png"
  },
  "PROPHESIZE": {
    "name": "Prophesize",
    "character": "regent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw 6 cards.",
    "vars": {
      "cards": 6
    },
    "upgrade": {
      "cards": 3,
      "description": "Draw 9 cards."
    },
    "target": "Self",
    "image": "images/cards/prophesize.png"
  },
  "PROTECTOR": {
    "name": "Protector",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Osty deals 10 damage.\nDeals additional damage equal to Osty's Max HP.",
    "vars": {
      "extra_damage": 1,
      "calculation_base": 10
    },
    "upgrade": {
      "calculation_base": 5,
      "cost": 0
    },
    "target": "AnyEnemy",
    "image": "images/cards/protector.png"
  },
  "PROWESS": {
    "name": "Prowess",
    "character": "colorless",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 1 Strength.\nGain 1 Dexterity.",
    "vars": {
      "power_strength": 1,
      "power_dexterity": 1
    },
    "upgrade": {
      "dexterity": 1,
      "strength": 1
    },
    "target": "Self",
    "image": "images/cards/prowess.png"
  },
  "PULL AGGRO": {
    "name": "Pull Aggro",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 2,
    "rarity": "Common",
    "keywords": [],
    "description": "Summon 4.\nGain 7 Block.",
    "vars": {
      "block": 7,
      "summon": 4
    },
    "upgrade": {
      "summon": 1,
      "block": 2
    },
    "target": "Self",
    "image": "images/cards/pull_aggro.png"
  },
  "PULL FROM BELOW": {
    "name": "Pull from Below",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage for each Ethereal card played this combat.",
    "vars": {
      "damage": 5,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 2,
      "description": "Deal 7 damage for each Ethereal card played this combat."
    },
    "target": "AnyEnemy",
    "image": "images/cards/pull_from_below.png"
  },
  "PURITY": {
    "name": "Purity",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust",
      "Retain"
    ],
    "description": "Exhaust up to 3 cards in your Hand.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 2
    },
    "target": "Self",
    "image": "images/cards/purity.png"
  },
  "PUTREFY": {
    "name": "Putrefy",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Apply 2 Weak.\nApply 2 Vulnerable.",
    "vars": {
      "power": 2
    },
    "upgrade": {
      "power": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/putrefy.png"
  },
  "PYRE": {
    "name": "Pyre",
    "character": "ironclad",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain [E] at the start of each turn.",
    "vars": {
      "energy": 1
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/pyre.png"
  },
  "QUADCAST": {
    "name": "Quadcast",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Evoke your rightmost Orb 4 times.",
    "vars": {
      "repeat": 4
    },
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/quadcast.png"
  },
  "QUASAR": {
    "name": "Quasar",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Choose 1 of 3 random Colorless cards to add into your Hand.",
    "vars": {},
    "upgrade": {
      "description": "Choose 1 of 3 random Upgraded Colorless cards to add into your Hand."
    },
    "target": "Self",
    "image": "images/cards/quasar.png"
  },
  "RADIATE": {
    "name": "Radiate",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 3 damage to ALL enemies for each [S] gained this turn.",
    "vars": {
      "damage": 3,
      "stars_var": 1,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 1,
      "description": "Deal 4 damage to ALL enemies for each [S] gained this turn."
    },
    "target": "AllEnemies",
    "image": "images/cards/radiate.png"
  },
  "RAGE": {
    "name": "Rage",
    "character": "ironclad",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you play an Attack this turn, gain 3 Block.",
    "vars": {
      "power": 3
    },
    "upgrade": {
      "power": 2
    },
    "target": "Self",
    "image": "images/cards/rage.png"
  },
  "RAINBOW": {
    "name": "Rainbow",
    "character": "defect",
    "type": "Skill",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Channel 1 Lightning.\nChannel 1 Frost.\nChannel 1 Dark.",
    "vars": {},
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/rainbow.png"
  },
  "RALLY": {
    "name": "Rally",
    "character": "colorless",
    "type": "Skill",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "ALL players gain 12 Block.",
    "vars": {
      "block": 12
    },
    "upgrade": {
      "block": 5
    },
    "target": "AllAllies",
    "image": "images/cards/rally.png"
  },
  "RAMPAGE": {
    "name": "Rampage",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 9 damage.\nIncrease this card's damage by 5 this combat.",
    "vars": {
      "damage": 9,
      "increase": 5
    },
    "upgrade": {
      "increase": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/rampage.png"
  },
  "RATTLE": {
    "name": "Rattle",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Osty deals 7 damage.\nHits an additional time for each other time he has attacked this turn.",
    "vars": {
      "osty_damage": 7,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "osty_damage": 2,
      "description": "Osty deals 9 damage.\nHits an additional time for each other time he has attacked this turn."
    },
    "target": "AnyEnemy",
    "image": "images/cards/rattle.png"
  },
  "REANIMATE": {
    "name": "Reanimate",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Summon 20.",
    "vars": {
      "summon": 20
    },
    "upgrade": {
      "summon": 5
    },
    "target": "Self",
    "image": "images/cards/reanimate.png"
  },
  "REAP": {
    "name": "Reap",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 3,
    "rarity": "Common",
    "keywords": [
      "Retain"
    ],
    "description": "Deal 27 damage.",
    "vars": {
      "damage": 27
    },
    "upgrade": {
      "damage": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/reap.png"
  },
  "REAPER FORM": {
    "name": "Reaper Form",
    "character": "necrobinder",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever Attacks deal damage, they also apply that much Doom.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/reaper_form.png"
  },
  "REAVE": {
    "name": "Reave",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 9 damage.\nAdd a Soul into your Draw Pile.",
    "vars": {
      "damage": 9,
      "cards": 1
    },
    "upgrade": {
      "damage": 2,
      "description": "Deal 11 damage.\nAdd a Soul+ into your Draw Pile."
    },
    "target": "AnyEnemy",
    "image": "images/cards/reave.png"
  },
  "REBOOT": {
    "name": "Reboot",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Shuffle ALL your cards into your Draw Pile.\nDraw 4 cards.",
    "vars": {
      "cards": 4
    },
    "upgrade": {
      "cards": 2,
      "description": "Shuffle ALL your cards into your Draw Pile.\nDraw 6 cards."
    },
    "target": "Self",
    "image": "images/cards/reboot.png"
  },
  "REBOUND": {
    "name": "Rebound",
    "character": "event",
    "type": "Attack",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Deal 9 damage.\nPut the next card you play this turn on top of your Draw Pile.",
    "vars": {
      "damage": 9
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/rebound.png"
  },
  "REFINE BLADE": {
    "name": "Refine Blade",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Forge 9.\nNext turn, gain [E].",
    "vars": {
      "energy": 1,
      "forge": 9
    },
    "upgrade": {
      "forge": 4
    },
    "target": "Self",
    "image": "images/cards/refine_blade.png"
  },
  "REFLECT": {
    "name": "Reflect",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 17 Block.\nBlocked attack damage is reflected to your attacker this turn.",
    "vars": {
      "block": 17
    },
    "upgrade": {
      "block": 4
    },
    "target": "Self",
    "image": "images/cards/reflect.png"
  },
  "REFLEX": {
    "name": "Reflex",
    "character": "silent",
    "type": "Skill",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [
      "Sly"
    ],
    "description": "Draw 2 cards.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/reflex.png"
  },
  "REFRACT": {
    "name": "Refract",
    "character": "defect",
    "type": "Attack",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 9 damage twice.\nChannel 2 Glass.",
    "vars": {
      "damage": 9,
      "repeat": 2
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/refract.png"
  },
  "REGRET": {
    "name": "Regret",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Unplayable"
    ],
    "description": "At the end of your turn, if this is in your Hand, lose 1 HP for each card in your Hand.",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/regret.png"
  },
  "RELAX": {
    "name": "Relax",
    "character": "event",
    "type": "Skill",
    "cost": 3,
    "rarity": "Ancient",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 15 Block.\nNext turn, draw 2 cards and gain [E][E].",
    "vars": {
      "block": 15,
      "cards": 2,
      "energy": 2
    },
    "upgrade": {
      "block": 2,
      "cards": 1,
      "energy": 1,
      "description": "Gain 17 Block.\nNext turn, draw 3 cards and gain [E][E][E]."
    },
    "target": "Self",
    "image": "images/cards/relax.png"
  },
  "REND": {
    "name": "Rend",
    "character": "colorless",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 15 damage.\nDeals 5 additional damage for each unique debuff on the enemy.",
    "vars": {
      "extra_damage": 5,
      "calculation_base": 15
    },
    "upgrade": {
      "extra_damage": 3,
      "calculation_base": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/rend.png"
  },
  "RESONANCE": {
    "name": "Resonance",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 1 Strength. ALL enemies lose 1 Strength.",
    "vars": {
      "power_strength": 1
    },
    "upgrade": {
      "strength": 1
    },
    "target": "AllEnemies",
    "image": "images/cards/resonance.png"
  },
  "RESTLESSNESS": {
    "name": "Restlessness",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Retain"
    ],
    "description": "If your Hand is empty, draw 2 cards and gain [E][E].",
    "vars": {
      "cards": 2,
      "energy": 2
    },
    "upgrade": {
      "cards": 1,
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/restlessness.png"
  },
  "RICOCHET": {
    "name": "Ricochet",
    "character": "silent",
    "type": "Attack",
    "cost": 2,
    "rarity": "Common",
    "keywords": [
      "Sly"
    ],
    "description": "Deal 3 damage to a random enemy 4 times.",
    "vars": {
      "damage": 3,
      "repeat": 4
    },
    "upgrade": {
      "repeat": 1
    },
    "target": "RandomEnemy",
    "image": "images/cards/ricochet.png"
  },
  "RIGHT HAND HAND": {
    "name": "Right Hand Hand",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Osty deals 4 damage.\nWhenever you play a card that costs [E][E] or more, return this to your Hand from the Discard Pile.",
    "vars": {
      "osty_damage": 4,
      "energy": 2
    },
    "upgrade": {
      "osty_damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/right_hand_hand.png"
  },
  "RIP AND TEAR": {
    "name": "Rip and Tear",
    "character": "event",
    "type": "Attack",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Deal 7 damage to a random enemy twice.",
    "vars": {
      "damage": 7
    },
    "upgrade": {
      "damage": 2
    },
    "target": "RandomEnemy",
    "image": "images/cards/rip_and_tear.png"
  },
  "ROCKET PUNCH": {
    "name": "Rocket Punch",
    "character": "defect",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 13 damage.\nDraw 1 card.\nWhenever you create a Status, reduce this card's cost to 0 [E] until played.",
    "vars": {
      "damage": 13,
      "cards": 1
    },
    "upgrade": {
      "damage": 1,
      "cards": 1,
      "description": "Deal 14 damage.\nDraw 2 cards.\nWhenever you create a Status, reduce this card's cost to 0 [E] until played."
    },
    "target": "AnyEnemy",
    "image": "images/cards/rocket_punch.png"
  },
  "ROLLING BOULDER": {
    "name": "Rolling Boulder",
    "character": "colorless",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, deal 5 damage to ALL enemies and increase this damage by 5.",
    "vars": {
      "power_rolling_boulder": 5,
      "increment_amount": 5
    },
    "upgrade": {
      "rolling_boulder": 5
    },
    "target": "Self",
    "image": "images/cards/rolling_boulder.png"
  },
  "ROYAL GAMBLE": {
    "name": "Royal Gamble",
    "character": "regent",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 9 [S].",
    "vars": {
      "stars_var": 9
    },
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/royal_gamble.png"
  },
  "ROYALTIES": {
    "name": "Royalties",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the end of combat, gain 30 Gold.",
    "vars": {
      "gold": 30
    },
    "upgrade": {
      "gold": 5
    },
    "target": "Self",
    "image": "images/cards/royalties.png"
  },
  "RUPTURE": {
    "name": "Rupture",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you lose HP on your turn, gain 1 Strength.",
    "vars": {
      "power_strength": 1
    },
    "upgrade": {
      "strength": 1
    },
    "target": "Self",
    "image": "images/cards/rupture.png"
  },
  "SACRIFICE": {
    "name": "Sacrifice",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Retain"
    ],
    "description": "If Osty is alive, he dies and you gain Block equal to double his Max HP.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/sacrifice.png"
  },
  "SALVO": {
    "name": "Salvo",
    "character": "colorless",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 12 damage.\nRetain your Hand this turn.",
    "vars": {
      "damage": 12
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/salvo.png"
  },
  "SCAVENGE": {
    "name": "Scavenge",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Exhaust a card.\nNext turn, gain [E][E].",
    "vars": {
      "energy": 2
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/scavenge.png"
  },
  "SCOURGE": {
    "name": "Scourge",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Apply 13 Doom.\nDraw 1 card.",
    "vars": {
      "cards": 1,
      "power_doom": 13
    },
    "upgrade": {
      "doom": 3,
      "cards": 1,
      "description": "Apply 16 Doom.\nDraw 2 cards."
    },
    "target": "AnyEnemy",
    "image": "images/cards/scourge.png"
  },
  "SCRAPE": {
    "name": "Scrape",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 7 damage.\nDraw 4 cards.\nDiscard all cards drawn this way that do not cost 0 [E].",
    "vars": {
      "damage": 7,
      "cards": 4
    },
    "upgrade": {
      "damage": 3,
      "cards": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/scrape.png"
  },
  "SCRAWL": {
    "name": "Scrawl",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Draw cards until your Hand is full.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/scrawl.png"
  },
  "SCULPTING STRIKE": {
    "name": "Sculpting Strike",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 9 damage.\nAdd Ethereal to a card in your Hand.",
    "vars": {
      "damage": 9
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/sculpting_strike.png"
  },
  "SEANCE": {
    "name": "Seance",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Ethereal"
    ],
    "description": "Transform a card in your Draw Pile into Soul.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/seance.png"
  },
  "SECOND WIND": {
    "name": "Second Wind",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Exhaust all non-Attack cards in your Hand. Gain 5 Block for each card Exhausted.",
    "vars": {
      "block": 5
    },
    "upgrade": {
      "block": 2
    },
    "target": "Self",
    "image": "images/cards/second_wind.png"
  },
  "SECRET TECHNIQUE": {
    "name": "Secret Technique",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Put a Skill from your Draw Pile into your Hand.",
    "vars": {},
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/secret_technique.png"
  },
  "SECRET WEAPON": {
    "name": "Secret Weapon",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Put an Attack from your Draw Pile into your Hand.",
    "vars": {},
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/secret_weapon.png"
  },
  "SEEKER STRIKE": {
    "name": "Seeker Strike",
    "character": "colorless",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 9 damage.\nChoose 1 of 3 cards in your Draw Pile to add into your Hand.",
    "vars": {
      "damage": 9,
      "cards": 3
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/seeker_strike.png"
  },
  "SEEKING EDGE": {
    "name": "Seeking Edge",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Forge 7.\nSovereign Blade now deals damage to ALL enemies.",
    "vars": {
      "forge": 7
    },
    "upgrade": {
      "forge": 4
    },
    "target": "Self",
    "image": "images/cards/seeking_edge.png"
  },
  "SENTRY MODE": {
    "name": "Sentry Mode",
    "character": "necrobinder",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, add 1 Sweeping Gaze into your Hand.",
    "vars": {
      "power_sentry_mode": 1
    },
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/sentry_mode.png"
  },
  "SERPENT FORM": {
    "name": "Serpent Form",
    "character": "silent",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you play a card, deal 4 damage to a random enemy.",
    "vars": {
      "power_serpent_form": 4
    },
    "upgrade": {
      "serpent_form": 2
    },
    "target": "Self",
    "image": "images/cards/serpent_form.png"
  },
  "SETUP STRIKE": {
    "name": "Setup Strike",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 7 damage.\nGain 2 Strength this turn.",
    "vars": {
      "damage": 7,
      "power_strength": 2
    },
    "upgrade": {
      "damage": 2,
      "strength": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/setup_strike.png"
  },
  "SEVEN STARS": {
    "name": "Seven Stars",
    "character": "regent",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 7 damage to ALL enemies 7 times.",
    "vars": {
      "damage": 7,
      "repeat": 7
    },
    "upgrade": {
      "cost": 1
    },
    "target": "AllEnemies",
    "image": "images/cards/seven_stars.png"
  },
  "SEVERANCE": {
    "name": "Severance",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 13 damage.\nAdd a Soul into your Draw Pile, Hand, and Discard Pile.",
    "vars": {
      "damage": 13
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/severance.png"
  },
  "SHADOW SHIELD": {
    "name": "Shadow Shield",
    "character": "defect",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 11 Block.\nChannel 1 Dark.",
    "vars": {
      "block": 11
    },
    "upgrade": {
      "block": 4
    },
    "target": "Self",
    "image": "images/cards/shadow_shield.png"
  },
  "SHADOW STEP": {
    "name": "Shadow Step",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Discard your Hand.\nNext turn, Attacks deal double damage.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/shadow_step.png"
  },
  "SHADOWMELD": {
    "name": "Shadowmeld",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Double your Block gain this turn.",
    "vars": {
      "power": 1
    },
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/shadowmeld.png"
  },
  "SHAME": {
    "name": "Shame",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Unplayable"
    ],
    "description": "At the end of your turn, if this is in your Hand, gain 1 Frail.",
    "vars": {
      "frail": 1
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/shame.png"
  },
  "SHARED FATE": {
    "name": "Shared Fate",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Lose 2 Strength.\nEnemy loses 2 Strength.",
    "vars": {
      "enemy_strength_loss": 2,
      "player_strength_loss": 2
    },
    "upgrade": {
      "enemy_strength_loss": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/shared_fate.png"
  },
  "SHATTER": {
    "name": "Shatter",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 11 damage to ALL enemies.\nEvoke all of your Orbs.",
    "vars": {
      "damage": 11
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AllEnemies",
    "image": "images/cards/shatter.png"
  },
  "SHINING STRIKE": {
    "name": "Shining Strike",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 8 damage.\nGain [S][S].\nPut this card on top of your Draw Pile.",
    "vars": {
      "damage": 8,
      "stars_var": 2
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/shining_strike.png"
  },
  "SHIV": {
    "name": "Shiv",
    "character": "token",
    "type": "Attack",
    "cost": 0,
    "rarity": "Token",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 4 damage.",
    "vars": {
      "damage": 4
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/shiv.png"
  },
  "SHOCKWAVE": {
    "name": "Shockwave",
    "character": "colorless",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Apply 3 Weak and Vulnerable to ALL enemies.",
    "vars": {
      "power": 3
    },
    "upgrade": {
      "power": 2
    },
    "target": "AllEnemies",
    "image": "images/cards/shockwave.png"
  },
  "SHROUD": {
    "name": "Shroud",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you apply Doom, gain 2 Block.",
    "vars": {
      "block": 2
    },
    "upgrade": {
      "block": 1
    },
    "target": "Self",
    "image": "images/cards/shroud.png"
  },
  "SHRUG IT OFF": {
    "name": "Shrug It Off",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 8 Block.\nDraw 1 card.",
    "vars": {
      "block": 8,
      "cards": 1
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/shrug_it_off.png"
  },
  "SIC 'EM": {
    "name": "Sic 'Em",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Osty deals 5 damage.\nWhenever Osty hits this enemy this turn, Summon 2.",
    "vars": {
      "osty_damage": 5,
      "power_sic_em": 2
    },
    "upgrade": {
      "osty_damage": 1,
      "sic_em": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/sic_em.png"
  },
  "SIGNAL BOOST": {
    "name": "Signal Boost",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "The next Power you play is played an additional time.",
    "vars": {
      "power_signal_boost": 1
    },
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/signal_boost.png"
  },
  "SKEWER": {
    "name": "Skewer",
    "character": "silent",
    "type": "Attack",
    "cost": -1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 8 damage X times.",
    "vars": {
      "damage": 8
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/skewer.png"
  },
  "SKIM": {
    "name": "Skim",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Draw 3 cards.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1
    },
    "target": "Self",
    "image": "images/cards/skim.png"
  },
  "SLEIGHT OF FLESH": {
    "name": "Sleight of Flesh",
    "character": "necrobinder",
    "type": "Power",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you apply a debuff to an enemy, they take 9 damage.",
    "vars": {
      "power_sleight_of_flesh": 9
    },
    "upgrade": {
      "sleight_of_flesh": 4
    },
    "target": "Self",
    "image": "images/cards/sleight_of_flesh.png"
  },
  "SLICE": {
    "name": "Slice",
    "character": "silent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 6 damage.",
    "vars": {
      "damage": 6
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/slice.png"
  },
  "SLIMED": {
    "name": "Slimed",
    "character": "status",
    "type": "Status",
    "cost": 1,
    "rarity": "Status",
    "keywords": [
      "Exhaust"
    ],
    "description": "Draw 1 card.",
    "vars": {
      "cards": 1
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/slimed.png"
  },
  "SLOTH": {
    "name": "Sloth",
    "character": "token",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [],
    "description": "You cannot play more than 3 cards each turn.",
    "vars": {
      "power_sloth": 3
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/sloth.png"
  },
  "SMOKESTACK": {
    "name": "Smokestack",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you create a Status, deal 5 damage to ALL enemies.",
    "vars": {
      "power_smokestack": 5
    },
    "upgrade": {
      "smokestack": 2
    },
    "target": "Self",
    "image": "images/cards/smokestack.png"
  },
  "SNAKEBITE": {
    "name": "Snakebite",
    "character": "silent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Common",
    "keywords": [
      "Retain"
    ],
    "description": "Apply 7 Poison.",
    "vars": {
      "power_poison": 7
    },
    "upgrade": {
      "poison": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/snakebite.png"
  },
  "SNAP": {
    "name": "Snap",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Osty deals 7 damage.\nAdd Retain to a card in your Hand.",
    "vars": {
      "osty_damage": 7
    },
    "upgrade": {
      "osty_damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/snap.png"
  },
  "SNEAKY": {
    "name": "Sneaky",
    "character": "silent",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [
      "Sly"
    ],
    "description": "Whenever another player attacks an enemy, gain 1 Block.",
    "vars": {
      "power_sneaky": 1
    },
    "upgrade": {
      "sneaky": 1
    },
    "target": "Self",
    "image": "images/cards/sneaky.png"
  },
  "SOLAR STRIKE": {
    "name": "Solar Strike",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 9 damage.\nGain [S].",
    "vars": {
      "damage": 9,
      "stars_var": 1
    },
    "upgrade": {
      "damage": 1,
      "stars": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/solar_strike.png"
  },
  "SOOT": {
    "name": "Soot",
    "character": "status",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/soot.png"
  },
  "SOUL": {
    "name": "Soul",
    "character": "token",
    "type": "Skill",
    "cost": 0,
    "rarity": "Token",
    "keywords": [
      "Exhaust"
    ],
    "description": "Draw 2 cards.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "cards": 1,
      "description": "Draw 3 cards."
    },
    "target": "Self",
    "image": "images/cards/soul.png"
  },
  "SOUL STORM": {
    "name": "Soul Storm",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 9 damage.\nDeals 2 additional damage for each Soul in your Exhaust Pile.",
    "vars": {
      "extra_damage": 2,
      "calculation_base": 9
    },
    "upgrade": {
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/soul_storm.png"
  },
  "SOVEREIGN BLADE": {
    "name": "Sovereign Blade",
    "character": "token",
    "type": "Attack",
    "cost": 2,
    "rarity": "Token",
    "keywords": [
      "Retain"
    ],
    "description": "Deal 10 damage.",
    "vars": {
      "damage": 10,
      "repeat": 1,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "cost": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/sovereign_blade.png"
  },
  "SOW": {
    "name": "Sow",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Retain"
    ],
    "description": "Deal 8 damage to ALL enemies.",
    "vars": {
      "damage": 8
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AllEnemies",
    "image": "images/cards/sow.png"
  },
  "SPECTRUM SHIFT": {
    "name": "Spectrum Shift",
    "character": "regent",
    "type": "Power",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the start of your turn, add 1 random Colorless card into your Hand.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/spectrum_shift.png"
  },
  "SPEEDSTER": {
    "name": "Speedster",
    "character": "silent",
    "type": "Power",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you draw a card during your turn, deal 2 damage to ALL enemies.",
    "vars": {
      "power_speedster": 2
    },
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/speedster.png"
  },
  "SPINNER": {
    "name": "Spinner",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, Channel 1 Glass.",
    "vars": {
      "power_spinner": 1
    },
    "upgrade": {
      "description": "Channel 1 Glass.\nAt the start of your turn, Channel 1 Glass."
    },
    "target": "Self",
    "image": "images/cards/spinner.png"
  },
  "SPIRIT OF ASH": {
    "name": "Spirit of Ash",
    "character": "necrobinder",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you play an Ethereal card, gain 4 Block.",
    "vars": {
      "block_on_exhaust": 4
    },
    "upgrade": {
      "block_on_exhaust": 1
    },
    "target": "Self",
    "image": "images/cards/spirit_of_ash.png"
  },
  "SPITE": {
    "name": "Spite",
    "character": "ironclad",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage.\nIf you lost HP this turn,\nhits 2 times.",
    "vars": {
      "damage": 5,
      "repeat": 2
    },
    "upgrade": {
      "repeat": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/spite.png"
  },
  "SPLASH": {
    "name": "Splash",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Choose 1 of 3 random Attacks from another character to add into your Hand. It's free to play this turn.",
    "vars": {},
    "upgrade": {
      "description": "Choose 1 of 3 random Upgraded Attacks from another character to add into your Hand. It's free to play this turn."
    },
    "target": "Self",
    "image": "images/cards/splash.png"
  },
  "SPOILS MAP": {
    "name": "Spoils Map",
    "character": "quest",
    "type": "Quest",
    "cost": null,
    "rarity": "Quest",
    "keywords": [
      "Unplayable"
    ],
    "description": "Marks a site of 600 extra Gold in the next Act.",
    "vars": {
      "gold": 600
    },
    "upgrade": {},
    "target": "Self",
    "image": "images/cards/spoils_map.png"
  },
  "SPOILS OF BATTLE": {
    "name": "Spoils of Battle",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Forge 5.\nDraw 2 cards.",
    "vars": {
      "cards": 2,
      "forge": 5
    },
    "upgrade": {
      "forge": 3,
      "description": "Forge 8.\nDraw 2 cards."
    },
    "target": "Self",
    "image": "images/cards/spoils_of_battle.png"
  },
  "SPORE MIND": {
    "name": "Spore Mind",
    "character": "curse",
    "type": "Curse",
    "cost": 1,
    "rarity": "Curse",
    "keywords": [
      "Exhaust"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/spore_mind.png"
  },
  "SPUR": {
    "name": "Spur",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Retain"
    ],
    "description": "Summon 3.\nOsty heals 5 HP.",
    "vars": {
      "heal": 5,
      "summon": 3
    },
    "upgrade": {
      "summon": 2,
      "heal": 2
    },
    "target": "Self",
    "image": "images/cards/spur.png"
  },
  "SQUASH": {
    "name": "Squash",
    "character": "event",
    "type": "Attack",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Deal 10 damage.\nApply 2 Vulnerable.",
    "vars": {
      "damage": 10,
      "power_vulnerable": 2
    },
    "upgrade": {
      "damage": 2,
      "vulnerable": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/squash.png"
  },
  "SQUEEZE": {
    "name": "Squeeze",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [],
    "description": "Osty deals 25 damage.\nDeals 5 additional damage for ALL your other Osty Attacks.",
    "vars": {
      "extra_damage": 5,
      "calculation_base": 25
    },
    "upgrade": {
      "calculation_base": 5,
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/squeeze.png"
  },
  "STACK": {
    "name": "Stack",
    "character": "event",
    "type": "Skill",
    "cost": 1,
    "rarity": "Event",
    "keywords": [],
    "description": "Gain Block equal to the number of cards in your Discard Pile.",
    "vars": {
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "calculation_base": 3,
      "description": "Gain Block equal to the number of cards in your Discard Pile +3."
    },
    "target": "Self",
    "image": "images/cards/stack.png"
  },
  "STAMPEDE": {
    "name": "Stampede",
    "character": "ironclad",
    "type": "Power",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the end of your turn, 1 random Attack in your Hand is played against a random enemy.",
    "vars": {
      "power": 1
    },
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/stampede.png"
  },
  "STARDUST": {
    "name": "Stardust",
    "character": "regent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage to a random enemy X times.",
    "vars": {
      "damage": 5
    },
    "upgrade": {
      "damage": 2
    },
    "target": "RandomEnemy",
    "image": "images/cards/stardust.png"
  },
  "STOKE": {
    "name": "Stoke",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Exhaust your Hand.\nAdd 1 random card into your Hand for each card Exhausted.",
    "vars": {},
    "upgrade": {
      "description": "Exhaust your Hand.\nAdd 1 random Upgraded card into your Hand for each card Exhausted."
    },
    "target": "Self",
    "image": "images/cards/stoke.png"
  },
  "STOMP": {
    "name": "Stomp",
    "character": "ironclad",
    "type": "Attack",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 12 damage to ALL enemies.\nCosts 1 less [E] for each Attack played this turn.",
    "vars": {
      "damage": 12
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AllEnemies",
    "image": "images/cards/stomp.png"
  },
  "STONE ARMOR": {
    "name": "Stone Armor",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 4 Plating.",
    "vars": {
      "power_plating": 4
    },
    "upgrade": {
      "plating": 2
    },
    "target": "Self",
    "image": "images/cards/stone_armor.png"
  },
  "STORM": {
    "name": "Storm",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you play a Power, Channel 1 Lightning.",
    "vars": {
      "power_storm": 1
    },
    "upgrade": {
      "storm": 1
    },
    "target": "Self",
    "image": "images/cards/storm.png"
  },
  "STORM OF STEEL": {
    "name": "Storm of Steel",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Discard your Hand.\nAdd 1 Shiv into your Hand for each card discarded.",
    "vars": {},
    "upgrade": {
      "description": "Discard your Hand.\nAdd 1 Shiv+ into your Hand for each card discarded."
    },
    "target": "Self",
    "image": "images/cards/storm_of_steel.png"
  },
  "STRANGLE": {
    "name": "Strangle",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 8 damage.\nWhenever you play a card this turn, the enemy loses 2 HP.",
    "vars": {
      "damage": 8,
      "power_strangle": 2
    },
    "upgrade": {
      "damage": 2,
      "strangle": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/strangle.png"
  },
  "STRATAGEM": {
    "name": "Stratagem",
    "character": "colorless",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you shuffle your Draw Pile, choose a card from it to put into your Hand.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/stratagem.png"
  },
  "STRIKE": {
    "name": "Strike",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Basic",
    "keywords": [],
    "description": "Deal 6 damage.",
    "vars": {
      "damage": 6
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy"
  },
  "SUBROUTINE": {
    "name": "Subroutine",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you play a Power, gain [E].",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/subroutine.png"
  },
  "SUCKER PUNCH": {
    "name": "Sucker Punch",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 8 damage.\nApply 1 Weak.",
    "vars": {
      "damage": 8,
      "power_weak": 1
    },
    "upgrade": {
      "damage": 2,
      "weak": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/sucker_punch.png"
  },
  "SUMMON FORTH": {
    "name": "Summon Forth",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Forge 8.\nPut Sovereign Blade into your Hand from anywhere.",
    "vars": {
      "forge": 8
    },
    "upgrade": {
      "forge": 3
    },
    "target": "Self",
    "image": "images/cards/summon_forth.png"
  },
  "SUNDER": {
    "name": "Sunder",
    "character": "defect",
    "type": "Attack",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 24 damage.\nIf this kills an enemy, gain [E][E][E].",
    "vars": {
      "damage": 24,
      "energy": 3
    },
    "upgrade": {
      "damage": 8
    },
    "target": "AnyEnemy",
    "image": "images/cards/sunder.png"
  },
  "SUPERCRITICAL": {
    "name": "Supercritical",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain [E][E][E][E].",
    "vars": {
      "energy": 4
    },
    "upgrade": {
      "energy": 2
    },
    "target": "Self",
    "image": "images/cards/supercritical.png"
  },
  "SUPERMASSIVE": {
    "name": "Supermassive",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage.\nDeals 3 additional damage for each card you created this combat.",
    "vars": {
      "extra_damage": 3,
      "calculation_base": 5
    },
    "upgrade": {
      "extra_damage": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/supermassive.png"
  },
  "SUPPRESS": {
    "name": "Suppress",
    "character": "silent",
    "type": "Attack",
    "cost": 0,
    "rarity": "Ancient",
    "keywords": [
      "Innate"
    ],
    "description": "Deal 11 damage.\nApply 3 Weak.",
    "vars": {
      "damage": 11,
      "power_weak": 3
    },
    "upgrade": {
      "damage": 6,
      "weak": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/suppress.png"
  },
  "SURVIVOR": {
    "name": "Survivor",
    "character": "silent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Basic",
    "keywords": [],
    "description": "Gain 8 Block.\nDiscard 1 card.",
    "vars": {
      "block": 8
    },
    "upgrade": {
      "block": 3
    },
    "target": "Self",
    "image": "images/cards/survivor.png"
  },
  "SWEEPING BEAM": {
    "name": "Sweeping Beam",
    "character": "defect",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 6 damage to ALL enemies.\nDraw 1 card.",
    "vars": {
      "damage": 6,
      "cards": 1
    },
    "upgrade": {
      "damage": 3,
      "description": "Deal 9 damage to ALL enemies.\nDraw 1 card."
    },
    "target": "AllEnemies",
    "image": "images/cards/sweeping_beam.png"
  },
  "SWEEPING GAZE": {
    "name": "Sweeping Gaze",
    "character": "token",
    "type": "Attack",
    "cost": 0,
    "rarity": "Token",
    "keywords": [
      "Ethereal",
      "Exhaust"
    ],
    "description": "Osty deals 10 damage to a random enemy.",
    "vars": {
      "osty_damage": 10
    },
    "upgrade": {
      "osty_damage": 5
    },
    "target": "RandomEnemy",
    "image": "images/cards/sweeping_gaze.png"
  },
  "SWORD BOOMERANG": {
    "name": "Sword Boomerang",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 3 damage to a random enemy 3 times.",
    "vars": {
      "damage": 3,
      "repeat": 3
    },
    "upgrade": {
      "repeat": 1
    },
    "target": "RandomEnemy",
    "image": "images/cards/sword_boomerang.png"
  },
  "SWORD SAGE": {
    "name": "Sword Sage",
    "character": "regent",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Sovereign Blade now hits an additional time.",
    "vars": {
      "power_sword_sage": 1
    },
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/sword_sage.png"
  },
  "SYNCHRONIZE": {
    "name": "Synchronize",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain 2 Focus this turn for each unique Orb you have.",
    "vars": {
      "calculation_base": 0,
      "calculation_extra": 2
    },
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/synchronize.png"
  },
  "SYNTHESIS": {
    "name": "Synthesis",
    "character": "defect",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 12 damage.\nThe next Power you play costs 0 [E].",
    "vars": {
      "damage": 12
    },
    "upgrade": {
      "damage": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/synthesis.png"
  },
  "TACTICIAN": {
    "name": "Tactician",
    "character": "silent",
    "type": "Skill",
    "cost": 3,
    "rarity": "Uncommon",
    "keywords": [
      "Sly"
    ],
    "description": "Gain [E].",
    "vars": {
      "energy": 1
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/tactician.png"
  },
  "TAG TEAM": {
    "name": "Tag Team",
    "character": "colorless",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 11 damage.\nThe next Attack another player plays on the enemy is played an extra time.",
    "vars": {
      "damage": 11
    },
    "upgrade": {
      "damage": 4
    },
    "target": "AnyEnemy",
    "image": "images/cards/tag_team.png"
  },
  "TANK": {
    "name": "Tank",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Take double damage from enemies.\nAllies take half damage from enemies.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/tank.png"
  },
  "TAUNT": {
    "name": "Taunt",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 7 Block.\nApply 1 Vulnerable.",
    "vars": {
      "block": 7,
      "power_vulnerable": 1
    },
    "upgrade": {
      "block": 1,
      "vulnerable": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/taunt.png"
  },
  "TEAR ASUNDER": {
    "name": "Tear Asunder",
    "character": "ironclad",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 5 damage.\nHits an additional time for each time you lost HP this combat.",
    "vars": {
      "damage": 5,
      "repeat": 1,
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "damage": 2,
      "description": "Deal 7 damage.\nHits an additional time for each time you lost HP this combat."
    },
    "target": "AnyEnemy",
    "image": "images/cards/tear_asunder.png"
  },
  "TEMPEST": {
    "name": "Tempest",
    "character": "defect",
    "type": "Skill",
    "cost": -1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Channel X Lightning.",
    "vars": {},
    "upgrade": {
      "description": "Channel X+1 Lightning."
    },
    "target": "Self",
    "image": "images/cards/tempest.png"
  },
  "TERRAFORMING": {
    "name": "Terraforming",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 6 Vigor.",
    "vars": {
      "power_vigor": 6
    },
    "upgrade": {
      "vigor": 2
    },
    "target": "Self",
    "image": "images/cards/terraforming.png"
  },
  "TESLA COIL": {
    "name": "Tesla Coil",
    "character": "defect",
    "type": "Attack",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 3 damage.\nTrigger all Lightning against the enemy.",
    "vars": {
      "damage": 3
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/tesla_coil.png"
  },
  "THE BOMB": {
    "name": "The Bomb",
    "character": "colorless",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the end of 3 turns, deal 40 damage to ALL enemies.",
    "vars": {
      "turns": 3,
      "bomb_damage": 40
    },
    "upgrade": {
      "bomb_damage": 10,
      "description": "At the end of 3 turns, deal 50 damage to ALL enemies."
    },
    "target": "Self",
    "image": "images/cards/the_bomb.png"
  },
  "THE GAMBIT": {
    "name": "The Gambit",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain 50 Block.\nIf you take unblocked attack damage this combat, die.",
    "vars": {
      "block": 50
    },
    "upgrade": {
      "block": 25
    },
    "target": "Self",
    "image": "images/cards/the_gambit.png"
  },
  "THE HUNT": {
    "name": "The Hunt",
    "character": "silent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 10 damage.\nIf Fatal, gain an additional card reward.",
    "vars": {
      "damage": 10
    },
    "upgrade": {
      "damage": 5
    },
    "target": "AnyEnemy",
    "image": "images/cards/the_hunt.png"
  },
  "THE SCYTHE": {
    "name": "The Scythe",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 13 damage.\nPermanently increase this card's damage by 3.",
    "vars": {
      "increase": 3
    },
    "upgrade": {
      "increase": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/the_scythe.png"
  },
  "THE SEALED THRONE": {
    "name": "The Sealed Throne",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Whenever you play a card, gain [S].",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/the_sealed_throne.png"
  },
  "THE SMITH": {
    "name": "The Smith",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Forge 30.",
    "vars": {
      "forge": 30
    },
    "upgrade": {
      "forge": 10
    },
    "target": "Self",
    "image": "images/cards/the_smith.png"
  },
  "THINKING AHEAD": {
    "name": "Thinking Ahead",
    "character": "colorless",
    "type": "Skill",
    "cost": 0,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Draw 2 cards.\nPut 1 card from your Hand on top of your Draw Pile.",
    "vars": {
      "cards": 2
    },
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/thinking_ahead.png"
  },
  "THRASH": {
    "name": "Thrash",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Deal 4 damage twice.\nExhaust a random Attack in your Hand and add its damage to this card.",
    "vars": {
      "damage": 4
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/thrash.png"
  },
  "THRUMMING HATCHET": {
    "name": "Thrumming Hatchet",
    "character": "colorless",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 11 damage.\nAt the start of your next turn, return this to your Hand.",
    "vars": {
      "damage": 11
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/thrumming_hatchet.png"
  },
  "THUNDER": {
    "name": "Thunder",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you Evoke Lightning, deal 6 damage to each enemy hit.",
    "vars": {
      "power_thunder": 6
    },
    "upgrade": {
      "thunder": 2
    },
    "target": "Self",
    "image": "images/cards/thunder.png"
  },
  "THUNDERCLAP": {
    "name": "Thunderclap",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 4 damage and apply 1 Vulnerable to ALL enemies.",
    "vars": {
      "damage": 4,
      "power_vulnerable": 1
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AllEnemies",
    "image": "images/cards/thunderclap.png"
  },
  "TIME'S UP": {
    "name": "Time's Up",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal damage equal to the enemy's Doom.\n(Deals 0 damage)",
    "vars": {
      "extra_damage": 1,
      "calculation_base": 0
    },
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "AnyEnemy"
  },
  "TOOLS OF THE TRADE": {
    "name": "Tools of the Trade",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, draw 1 card and discard 1 card.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/tools_of_the_trade.png"
  },
  "TORIC TOUGHNESS": {
    "name": "Toric Toughness",
    "character": "event",
    "type": "Skill",
    "cost": 2,
    "rarity": "Event",
    "keywords": [],
    "description": "Gain 5 Block.\nGain 5 Block at the start of the next 2 turns.",
    "vars": {
      "block": 5,
      "turns": 2
    },
    "upgrade": {
      "block": 2,
      "description": "Gain 7 Block.\nGain 7 Block at the start of the next 2 turns."
    },
    "target": "Self",
    "image": "images/cards/toric_toughness.png"
  },
  "TOXIC": {
    "name": "Toxic",
    "character": "status",
    "type": "Status",
    "cost": 1,
    "rarity": "Status",
    "keywords": [
      "Exhaust"
    ],
    "description": "At the end of your turn, if this is in your Hand, take 5 damage.",
    "vars": {
      "damage": 5
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/toxic.png"
  },
  "TRACKING": {
    "name": "Tracking",
    "character": "silent",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "Weak enemies take double damage from Attacks.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/tracking.png"
  },
  "TRANSFIGURE": {
    "name": "Transfigure",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Add Replay to a card in your Hand.\nIt costs an extra [E].",
    "vars": {
      "energy": 1
    },
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/transfigure.png"
  },
  "TRASH TO TREASURE": {
    "name": "Trash to Treasure",
    "character": "defect",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "Whenever you create a Status, Channel 1 random Orb.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/trash_to_treasure.png"
  },
  "TREMBLE": {
    "name": "Tremble",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Apply 3 Vulnerable.",
    "vars": {
      "power_vulnerable": 3
    },
    "upgrade": {
      "vulnerable": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/tremble.png"
  },
  "TRUE GRIT": {
    "name": "True Grit",
    "character": "ironclad",
    "type": "Skill",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain 7 Block.\nExhaust 1 card at random.",
    "vars": {
      "block": 7
    },
    "upgrade": {
      "block": 2,
      "description": "Gain 9 Block.\nExhaust 1 card."
    },
    "target": "Self",
    "image": "images/cards/true_grit.png"
  },
  "TURBO": {
    "name": "TURBO",
    "character": "defect",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [],
    "description": "Gain [E][E].\nAdd a Void into your Discard Pile.",
    "vars": {
      "energy": 2
    },
    "upgrade": {
      "energy": 1
    },
    "target": "Self",
    "image": "images/cards/turbo.png"
  },
  "TWIN STRIKE": {
    "name": "Twin Strike",
    "character": "ironclad",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 5 damage twice.",
    "vars": {
      "damage": 5
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/twin_strike.png"
  },
  "TYRANNY": {
    "name": "Tyranny",
    "character": "regent",
    "type": "Power",
    "cost": 1,
    "rarity": "Rare",
    "keywords": [],
    "description": "At the start of your turn, draw 1 card and Exhaust 1 card from your Hand.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Innate"
      ]
    },
    "target": "Self",
    "image": "images/cards/tyranny.png"
  },
  "ULTIMATE DEFEND": {
    "name": "Ultimate Defend",
    "character": "colorless",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Gain 11 Block.",
    "vars": {
      "block": 11
    },
    "upgrade": {
      "block": 4
    },
    "target": "Self",
    "image": "images/cards/ultimate_defend.png"
  },
  "ULTIMATE STRIKE": {
    "name": "Ultimate Strike",
    "character": "colorless",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 14 damage.",
    "vars": {
      "damage": 14
    },
    "upgrade": {
      "damage": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/ultimate_strike.png"
  },
  "UNDEATH": {
    "name": "Undeath",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 0,
    "rarity": "Rare",
    "keywords": [],
    "description": "Gain 7 Block.\nAdd a copy of this card into your Discard Pile.",
    "vars": {
      "block": 7
    },
    "upgrade": {
      "block": 2
    },
    "target": "Self",
    "image": "images/cards/undeath.png"
  },
  "UNLEASH": {
    "name": "Unleash",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Basic",
    "keywords": [],
    "description": "Osty deals 6 damage.\nDeals additional damage equal to Osty's current HP.",
    "vars": {
      "extra_damage": 1,
      "calculation_base": 6
    },
    "upgrade": {
      "calculation_base": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/unleash.png"
  },
  "UNMOVABLE": {
    "name": "Unmovable",
    "character": "ironclad",
    "type": "Power",
    "cost": 2,
    "rarity": "Rare",
    "keywords": [],
    "description": "The first time you gain Block from a card each turn, double the amount gained.",
    "vars": {},
    "upgrade": {
      "cost": 1
    },
    "target": "Self",
    "image": "images/cards/unmovable.png"
  },
  "UNRELENTING": {
    "name": "Unrelenting",
    "character": "ironclad",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 12 damage.\nThe next Attack you play costs 0 [E].",
    "vars": {
      "damage": 12
    },
    "upgrade": {
      "damage": 6
    },
    "target": "AnyEnemy",
    "image": "images/cards/unrelenting.png"
  },
  "UNTOUCHABLE": {
    "name": "Untouchable",
    "character": "silent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Common",
    "keywords": [
      "Sly"
    ],
    "description": "Gain 6 Block.",
    "vars": {
      "block": 6
    },
    "upgrade": {
      "block": 2
    },
    "target": "Self",
    "image": "images/cards/untouchable.png"
  },
  "UP MY SLEEVE": {
    "name": "Up My Sleeve",
    "character": "silent",
    "type": "Skill",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Add 3 Shivs into your Hand.\nReduce this card's cost by 1.",
    "vars": {
      "cards": 3
    },
    "upgrade": {
      "cards": 1,
      "description": "Add 4 Shivs into your Hand.\nReduce this card's cost by 1."
    },
    "target": "Self",
    "image": "images/cards/up_my_sleeve.png"
  },
  "UPPERCUT": {
    "name": "Uppercut",
    "character": "ironclad",
    "type": "Attack",
    "cost": 2,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 13 damage.\nApply 1 Weak.\nApply 1 Vulnerable.",
    "vars": {
      "damage": 13,
      "power": 1
    },
    "upgrade": {
      "power": 1
    },
    "target": "AnyEnemy",
    "image": "images/cards/uppercut.png"
  },
  "UPROAR": {
    "name": "Uproar",
    "character": "defect",
    "type": "Attack",
    "cost": 2,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 5 damage twice.\nPlay a random Attack from your Draw Pile.",
    "vars": {
      "damage": 5
    },
    "upgrade": {
      "damage": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/uproar.png"
  },
  "VEILPIERCER": {
    "name": "Veilpiercer",
    "character": "necrobinder",
    "type": "Attack",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 10 damage.\nThe next Ethereal card you play costs 0 [E].",
    "vars": {
      "damage": 10
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AnyEnemy",
    "image": "images/cards/veilpiercer.png"
  },
  "VENERATE": {
    "name": "Venerate",
    "character": "regent",
    "type": "Skill",
    "cost": 1,
    "rarity": "Basic",
    "keywords": [],
    "description": "Gain [S][S].",
    "vars": {
      "stars_var": 2
    },
    "upgrade": {
      "stars": 1
    },
    "target": "Self",
    "image": "images/cards/venerate.png"
  },
  "VICIOUS": {
    "name": "Vicious",
    "character": "ironclad",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Whenever you apply Vulnerable, draw 1 card.",
    "vars": {
      "cards": 1
    },
    "upgrade": {
      "cards": 1,
      "description": "Whenever you apply Vulnerable, draw 2 cards."
    },
    "target": "Self",
    "image": "images/cards/vicious.png"
  },
  "VOID": {
    "name": "Void",
    "character": "status",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [
      "Ethereal",
      "Unplayable"
    ],
    "description": "Whenever you draw this card, lose [E].",
    "vars": {
      "energy": 1
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/void.png"
  },
  "VOID FORM": {
    "name": "Void Form",
    "character": "regent",
    "type": "Power",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [
      "Ethereal"
    ],
    "description": "End your turn.\nThe first 2 cards you play each turn are free to play.",
    "vars": {
      "power_void_form": 2
    },
    "upgrade": {
      "remove_keywords": [
        "Ethereal"
      ]
    },
    "target": "Self",
    "image": "images/cards/void_form.png"
  },
  "VOLLEY": {
    "name": "Volley",
    "character": "colorless",
    "type": "Attack",
    "cost": -1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 10 damage to a random enemy X times.",
    "vars": {
      "damage": 10
    },
    "upgrade": {
      "damage": 4
    },
    "target": "RandomEnemy",
    "image": "images/cards/volley.png"
  },
  "VOLTAIC": {
    "name": "Voltaic",
    "character": "defect",
    "type": "Skill",
    "cost": 3,
    "rarity": "Rare",
    "keywords": [
      "Exhaust"
    ],
    "description": "Channel Lightning equal to the Lightning already Channeled this combat.",
    "vars": {
      "calculation_base": 0,
      "calculation_extra": 1
    },
    "upgrade": {
      "remove_keywords": [
        "Exhaust"
      ]
    },
    "target": "Self",
    "image": "images/cards/voltaic.png"
  },
  "WASTE AWAY": {
    "name": "Waste Away",
    "character": "token",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [],
    "description": "Gain 1 less [E] per turn.",
    "vars": {
      "power_waste_away": 1
    },
    "upgrade": {},
    "target": "None",
    "image": "images/cards/waste_away.png"
  },
  "WELL-LAID PLANS": {
    "name": "Well-Laid Plans",
    "character": "silent",
    "type": "Power",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "At the end of your turn, Retain up to 1 card.",
    "vars": {
      "retain_amount": 1
    },
    "upgrade": {
      "retain_amount": 1,
      "description": "At the end of your turn, Retain up to 2 cards."
    },
    "target": "Self",
    "image": "images/cards/well_laid_plans.png"
  },
  "WHIRLWIND": {
    "name": "Whirlwind",
    "character": "ironclad",
    "type": "Attack",
    "cost": -1,
    "rarity": "Uncommon",
    "keywords": [],
    "description": "Deal 5 damage to ALL enemies X times.",
    "vars": {
      "damage": 5
    },
    "upgrade": {
      "damage": 3
    },
    "target": "AllEnemies",
    "image": "images/cards/whirlwind.png"
  },
  "WHISTLE": {
    "name": "Whistle",
    "character": "event",
    "type": "Attack",
    "cost": 3,
    "rarity": "Ancient",
    "keywords": [
      "Exhaust"
    ],
    "description": "Deal 33 damage.\nStun the enemy.",
    "vars": {
      "damage": 33
    },
    "upgrade": {
      "damage": 11
    },
    "target": "AnyEnemy",
    "image": "images/cards/whistle.png"
  },
  "WHITE NOISE": {
    "name": "White Noise",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Uncommon",
    "keywords": [
      "Exhaust"
    ],
    "description": "Add a random Power into your Hand. It's free to play this turn.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/white_noise.png"
  },
  "WISH": {
    "name": "Wish",
    "character": "event",
    "type": "Skill",
    "cost": 0,
    "rarity": "Ancient",
    "keywords": [
      "Exhaust"
    ],
    "description": "Put a card from your Draw Pile into your Hand.",
    "vars": {},
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/wish.png"
  },
  "WISP": {
    "name": "Wisp",
    "character": "necrobinder",
    "type": "Skill",
    "cost": 0,
    "rarity": "Common",
    "keywords": [
      "Exhaust"
    ],
    "description": "Gain [E].",
    "vars": {
      "energy": 1
    },
    "upgrade": {
      "add_keywords": [
        "Retain"
      ]
    },
    "target": "Self",
    "image": "images/cards/wisp.png"
  },
  "WOUND": {
    "name": "Wound",
    "character": "status",
    "type": "Status",
    "cost": null,
    "rarity": "Status",
    "keywords": [
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/wound.png"
  },
  "WRAITH FORM": {
    "name": "Wraith Form",
    "character": "silent",
    "type": "Power",
    "cost": 3,
    "rarity": "Ancient",
    "keywords": [],
    "description": "Gain 2 Intangible.\nAt the start of your turn, lose 1 Dexterity.",
    "vars": {
      "power_intangible": 2,
      "power_wraith_form": 1
    },
    "upgrade": {
      "intangible": 1
    },
    "target": "Self",
    "image": "images/cards/wraith_form.png"
  },
  "WRITHE": {
    "name": "Writhe",
    "character": "curse",
    "type": "Curse",
    "cost": null,
    "rarity": "Curse",
    "keywords": [
      "Innate",
      "Unplayable"
    ],
    "description": "",
    "vars": {},
    "upgrade": {},
    "target": "None",
    "image": "images/cards/writhe.png"
  },
  "WROUGHT IN WAR": {
    "name": "Wrought in War",
    "character": "regent",
    "type": "Attack",
    "cost": 1,
    "rarity": "Common",
    "keywords": [],
    "description": "Deal 7 damage.\nForge 7.",
    "vars": {
      "damage": 7,
      "forge": 7
    },
    "upgrade": {
      "damage": 2,
      "forge": 2
    },
    "target": "AnyEnemy",
    "image": "images/cards/wrought_in_war.png"
  },
  "ZAP": {
    "name": "Zap",
    "character": "defect",
    "type": "Skill",
    "cost": 1,
    "rarity": "Basic",
    "keywords": [],
    "description": "Channel 1 Lightning.",
    "vars": {},
    "upgrade": {
      "cost": 0
    },
    "target": "Self",
    "image": "images/cards/zap.png"
  }
};
