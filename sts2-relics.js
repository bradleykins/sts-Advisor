// STS2 Relic Database from spire-archive
// Source: https://github.com/nkhoit/spire-archive
// Last updated: 2026-05-05
// Total relics: 293
// With images: 161

const STS2_RELICS = {
  "AKABEKO": {
    "name": "Akabeko",
    "character": "shared",
    "description": "At the start of each combat, gain 8 Vigor.",
    "keywords": [],
    "image": "images/relics/akabeko.png"
  },
  "ALCHEMICAL COFFER": {
    "name": "Alchemical Coffer",
    "character": "event",
    "description": "Upon pickup, gain 4 potion slots filled with random potions.",
    "keywords": [],
    "image": "images/relics/alchemical_coffer.png"
  },
  "AMETHYST AUBERGINE": {
    "name": "Amethyst Aubergine",
    "character": "shared",
    "description": "Enemies drop 15 additional Gold.",
    "keywords": [],
    "image": "images/relics/amethyst_aubergine.png"
  },
  "ANCHOR": {
    "name": "Anchor",
    "character": "shared",
    "description": "Start each combat with 10 Block.",
    "keywords": [],
    "image": "images/relics/anchor.png"
  },
  "ARCANE SCROLL": {
    "name": "Arcane Scroll",
    "character": "event",
    "description": "Upon pickup, obtain a random Rare Card to add to your Deck.",
    "keywords": [],
    "image": "images/relics/arcane_scroll.png"
  },
  "ARCHAIC TOOTH": {
    "name": "Archaic Tooth",
    "character": "event",
    "description": "Upon pickup, Transform a starter card into an ancient version.",
    "keywords": [],
    "image": "images/relics/archaic_tooth.png"
  },
  "ART OF WAR": {
    "name": "Art of War",
    "character": "shared",
    "description": "If you do not play any Attacks during your turn, gain an additional [E] next turn.",
    "keywords": [],
    "image": "images/relics/art_of_war.png"
  },
  "ASTROLABE": {
    "name": "Astrolabe",
    "character": "event",
    "description": "Upon pickup, Transform 3 cards, then Upgrade them.",
    "keywords": [],
    "image": "images/relics/astrolabe.png"
  },
  "BAG OF MARBLES": {
    "name": "Bag of Marbles",
    "character": "shared",
    "description": "At the start of each combat, apply 1 Vulnerable to ALL enemies.",
    "keywords": [],
    "image": "images/relics/bag_of_marbles.png"
  },
  "BAG OF PREPARATION": {
    "name": "Bag of Preparation",
    "character": "shared",
    "description": "At the start of each combat, draw 2 additional cards.",
    "keywords": [],
    "image": "images/relics/bag_of_preparation.png"
  },
  "BEATING REMNANT": {
    "name": "Beating Remnant",
    "character": "shared",
    "description": "You cannot lose more than 20 HP in a single turn.",
    "keywords": [],
    "image": "images/relics/beating_remnant.png"
  },
  "BEAUTIFUL BRACELET": {
    "name": "Beautiful Bracelet",
    "character": "event",
    "description": "Upon pickup, choose 3 cards in your Deck. Enchant them with Swift 3.",
    "keywords": [],
    "image": "images/relics/beautiful_bracelet.png"
  },
  "BELLOWS": {
    "name": "Bellows",
    "character": "shared",
    "description": "The first Hand you draw each combat is Upgraded.",
    "keywords": [],
    "image": "images/relics/bellows.png"
  },
  "BELT BUCKLE": {
    "name": "Belt Buckle",
    "character": "shared",
    "description": "While you have no potions, you have 2 additional Dexterity.",
    "keywords": [],
    "image": "images/relics/belt_buckle.png"
  },
  "BIG HAT": {
    "name": "Big Hat",
    "character": "necrobinder",
    "description": "At the start of each combat, add 2 random Ethereal cards into your Hand.",
    "keywords": [],
    "image": "images/relics/big_hat.png"
  },
  "BIG MUSHROOM": {
    "name": "Big Mushroom",
    "character": "event",
    "description": "Upon pickup, raise your Max HP by 20. At the start of each combat, draw 2 fewer cards.",
    "keywords": [],
    "image": "images/relics/big_mushroom.png"
  },
  "BIIIG HUG": {
    "name": "Biiig Hug",
    "character": "event",
    "description": "Upon pickup, remove 4 cards from your Deck. Whenever you shuffle your Draw Pile, add a Soot into your Draw Pile.",
    "keywords": [],
    "image": "images/relics/biiig_hug.png"
  },
  "BING BONG": {
    "name": "Bing Bong",
    "character": "event",
    "description": "Whenever you add a card to your Deck, add one additional copy.",
    "keywords": [],
    "image": "images/relics/bing_bong.png"
  },
  "BLACK BLOOD": {
    "name": "Black Blood",
    "character": "event",
    "description": "At the end of combat, heal 12 HP.",
    "keywords": [],
    "image": "images/relics/black_blood.png"
  },
  "BLACK STAR": {
    "name": "Black Star",
    "character": "event",
    "description": "Elites drop an additional Relic when defeated.",
    "keywords": [],
    "image": "images/relics/black_star.png"
  },
  "BLESSED ANTLER": {
    "name": "Blessed Antler",
    "character": "event",
    "description": "Gain [E] at the start of each turn. At the start of each combat, shuffle 3 Dazed into your Draw Pile.",
    "keywords": [],
    "image": "images/relics/blessed_antler.png"
  },
  "BLOOD-SOAKED ROSE": {
    "name": "Blood-Soaked Rose",
    "character": "event",
    "description": "Upon pickup, add 1 Enthralled to your Deck. Gain [E] at the start of each turn.",
    "keywords": [],
    "image": "images/relics/blood_soaked_rose.png"
  },
  "BLOOD VIAL": {
    "name": "Blood Vial",
    "character": "shared",
    "description": "At the start of each combat, heal 2 HP.",
    "keywords": [],
    "image": "images/relics/blood_vial.png"
  },
  "BONE FLUTE": {
    "name": "Bone Flute",
    "character": "necrobinder",
    "description": "Whenever Osty attacks, gain 2 Block.",
    "keywords": [],
    "image": "images/relics/bone_flute.png"
  },
  "BONE TEA": {
    "name": "Bone Tea",
    "character": "event",
    "description": "At the start of the next combat, Upgrade your starting hand.",
    "keywords": [],
    "image": "images/relics/bone_tea.png"
  },
  "BOOK OF FIVE RINGS": {
    "name": "Book of Five Rings",
    "character": "shared",
    "description": "Every 5 cards you add to your Deck, heal 20 HP.",
    "keywords": [],
    "image": "images/relics/book_of_five_rings.png"
  },
  "BOOK REPAIR KNIFE": {
    "name": "Book Repair Knife",
    "character": "necrobinder",
    "description": "Whenever a non-Minion enemy dies to Doom, heal 3 HP.",
    "keywords": [],
    "image": "images/relics/book_repair_knife.png"
  },
  "BOOKMARK": {
    "name": "Bookmark",
    "character": "necrobinder",
    "description": "At the end of each turn, lower the cost of a random Retained card by 1 until played.",
    "keywords": [],
    "image": "images/relics/bookmark.png"
  },
  "BOOMING CONCH": {
    "name": "Booming Conch",
    "character": "event",
    "description": "At the start of Elite combats, draw 2 additional cards.",
    "keywords": [],
    "image": "images/relics/booming_conch.png"
  },
  "BOUND PHYLACTERY": {
    "name": "Bound Phylactery",
    "character": "necrobinder",
    "description": "At the start of your turn, Summon 1.",
    "keywords": [],
    "image": "images/relics/bound_phylactery.png"
  },
  "BOWLER HAT": {
    "name": "Bowler Hat",
    "character": "shared",
    "description": "Gain 25% additional Gold.",
    "keywords": [],
    "image": "images/relics/bowler_hat.png"
  },
  "BREAD": {
    "name": "Bread",
    "character": "shared",
    "description": "At the start of your first turn, lose [E][E]. At the start of all other turns, gain [E].",
    "keywords": [],
    "image": "images/relics/bread.png"
  },
  "BRILLIANT SCARF": {
    "name": "Brilliant Scarf",
    "character": "event",
    "description": "The 5th card you play each turn is free.",
    "keywords": [],
    "image": "images/relics/brilliant_scarf.png"
  },
  "BRIMSTONE": {
    "name": "Brimstone",
    "character": "ironclad",
    "description": "At the start of your turn, gain 2 Strength and ALL enemies gain 1 Strength.",
    "keywords": [],
    "image": "images/relics/brimstone.png"
  },
  "BRONZE SCALES": {
    "name": "Bronze Scales",
    "character": "shared",
    "description": "Start each combat with 3 Thorns.",
    "keywords": [],
    "image": "images/relics/bronze_scales.png"
  },
  "BURNING BLOOD": {
    "name": "Burning Blood",
    "character": "ironclad",
    "description": "At the end of combat, heal 6 HP.",
    "keywords": [],
    "image": "images/relics/burning_blood.png"
  },
  "BURNING STICKS": {
    "name": "Burning Sticks",
    "character": "shared",
    "description": "The first time each combat you Exhaust a Skill, add a copy of it into your Hand.",
    "keywords": [],
    "image": "images/relics/burning_sticks.png"
  },
  "BYRDPIP": {
    "name": "Byrdpip",
    "character": "event",
    "description": "Upon pickup, gain the card Byrd Swoop. A Byrdpip will accompany you in battles.",
    "keywords": [],
    "image": "images/relics/byrdpip.png"
  },
  "CALLING BELL": {
    "name": "Calling Bell",
    "character": "event",
    "description": "Upon pickup, obtain a unique Curse and 3 Relics.",
    "keywords": [],
    "image": "images/relics/calling_bell.png"
  },
  "CANDELABRA": {
    "name": "Candelabra",
    "character": "shared",
    "description": "At the start of your 2nd turn, gain [E][E].",
    "keywords": [],
    "image": "images/relics/candelabra.png"
  },
  "CAPTAIN'S WHEEL": {
    "name": "Captain's Wheel",
    "character": "shared",
    "description": "At the start of your 3rd turn, gain 18 Block.",
    "keywords": []
  },
  "CAULDRON": {
    "name": "Cauldron",
    "character": "shared",
    "description": "Upon pickup, brews 5 random potions.",
    "keywords": [],
    "image": "images/relics/cauldron.png"
  },
  "CENTENNIAL PUZZLE": {
    "name": "Centennial Puzzle",
    "character": "shared",
    "description": "The first time you lose HP each combat, draw 3 cards.",
    "keywords": [],
    "image": "images/relics/centennial_puzzle.png"
  },
  "CHANDELIER": {
    "name": "Chandelier",
    "character": "shared",
    "description": "At the start of your 3rd turn, gain [E][E][E].",
    "keywords": [],
    "image": "images/relics/chandelier.png"
  },
  "CHARON'S ASHES": {
    "name": "Charon's Ashes",
    "character": "ironclad",
    "description": "Whenever you Exhaust a card, deal 3 damage to ALL enemies.",
    "keywords": []
  },
  "CHEMICAL X": {
    "name": "Chemical X",
    "character": "shared",
    "description": "The effects of your cost X cards are increased by 2.",
    "keywords": [],
    "image": "images/relics/chemical_x.png"
  },
  "CHOICES PARADOX": {
    "name": "Choices Paradox",
    "character": "event",
    "description": "At the start of each combat, add 1 of 5 random cards into your Hand. Add Retain to the chosen card.",
    "keywords": [],
    "image": "images/relics/choices_paradox.png"
  },
  "THE CHOSEN CHEESE": {
    "name": "The Chosen Cheese",
    "character": "event",
    "description": "At the end of combat, gain 1 Max HP.",
    "keywords": []
  },
  "CIRCLET": {
    "name": "Circlet",
    "character": "shared",
    "description": "It's a circlet.",
    "keywords": [],
    "image": "images/relics/circlet.png"
  },
  "CLAWS": {
    "name": "Claws",
    "character": "event",
    "description": "Upon pickup, Transform up to 6 cards into Maul.",
    "keywords": [],
    "image": "images/relics/claws.png"
  },
  "CLOAK CLASP": {
    "name": "Cloak Clasp",
    "character": "shared",
    "description": "At the end of your turn, gain 1 Block for each card in your Hand.",
    "keywords": [],
    "image": "images/relics/cloak_clasp.png"
  },
  "CRACKED CORE": {
    "name": "Cracked Core",
    "character": "defect",
    "description": "At the start of each combat, Channel 1 Lightning.",
    "keywords": [],
    "image": "images/relics/cracked_core.png"
  },
  "CROSSBOW": {
    "name": "Crossbow",
    "character": "event",
    "description": "At the start of your turn, add a random Attack into your Hand. It's free to play this turn.",
    "keywords": [],
    "image": "images/relics/crossbow.png"
  },
  "CURSED PEARL": {
    "name": "Cursed Pearl",
    "character": "event",
    "description": "Upon pickup, receive Greed. Gain 333 Gold.",
    "keywords": [],
    "image": "images/relics/cursed_pearl.png"
  },
  "DARKSTONE PERIAPT": {
    "name": "Darkstone Periapt",
    "character": "event",
    "description": "Whenever you obtain a Curse, raise your Max HP by 6.",
    "keywords": [],
    "image": "images/relics/darkstone_periapt.png"
  },
  "DATA DISK": {
    "name": "Data Disk",
    "character": "defect",
    "description": "Start each combat with 1 Focus.",
    "keywords": [],
    "image": "images/relics/data_disk.png"
  },
  "DAUGHTER OF THE WIND": {
    "name": "Daughter of the Wind",
    "character": "event",
    "description": "Whenever you play an Attack, gain 1 Block.",
    "keywords": [],
    "image": "images/relics/daughter_of_the_wind.png"
  },
  "DELICATE FROND": {
    "name": "Delicate Frond",
    "character": "event",
    "description": "At the start of each combat, fill all empty potion slots with random potions.",
    "keywords": [],
    "image": "images/relics/delicate_frond.png"
  },
  "DEMON TONGUE": {
    "name": "Demon Tongue",
    "character": "ironclad",
    "description": "The first time you lose HP on your turn, heal HP equal to the amount lost.",
    "keywords": [],
    "image": "images/relics/demon_tongue.png"
  },
  "DIAMOND DIADEM": {
    "name": "Diamond Diadem",
    "character": "event",
    "description": "Whenever you play 2 or fewer cards in a turn, take half damage from enemies.",
    "keywords": [],
    "image": "images/relics/diamond_diadem.png"
  },
  "DINGY RUG": {
    "name": "Dingy Rug",
    "character": "shared",
    "description": "Card rewards can now contain Colorless cards.",
    "keywords": [],
    "image": "images/relics/dingy_rug.png"
  },
  "DISTINGUISHED CAPE": {
    "name": "Distinguished Cape",
    "character": "event",
    "description": "Upon pickup, lose 9 Max HP. Add 3 Apparitions to your Deck.",
    "keywords": [],
    "image": "images/relics/distinguished_cape.png"
  },
  "DIVINE DESTINY": {
    "name": "Divine Destiny",
    "character": "event",
    "description": "At the start of each combat, gain [S][S][S][S][S][S].",
    "keywords": [],
    "image": "images/relics/divine_destiny.png"
  },
  "DIVINE RIGHT": {
    "name": "Divine Right",
    "character": "regent",
    "description": "At the start of each combat, gain [S][S][S].",
    "keywords": [],
    "image": "images/relics/divine_right.png"
  },
  "DOLLY'S MIRROR": {
    "name": "Dolly's Mirror",
    "character": "shared",
    "description": "Upon pickup, obtain an additional copy of a card in your Deck.",
    "keywords": []
  },
  "DRAGON FRUIT": {
    "name": "Dragon Fruit",
    "character": "shared",
    "description": "Whenever you gain Gold, raise your Max HP by 1.",
    "keywords": [],
    "image": "images/relics/dragon_fruit.png"
  },
  "DREAM CATCHER": {
    "name": "Dream Catcher",
    "character": "event",
    "description": "Whenever you Rest, you may add a card to your Deck.",
    "keywords": [],
    "image": "images/relics/dream_catcher.png"
  },
  "DRIFTWOOD": {
    "name": "Driftwood",
    "character": "event",
    "description": "You may reroll each card reward once.",
    "keywords": [],
    "image": "images/relics/driftwood.png"
  },
  "DUSTY TOME": {
    "name": "Dusty Tome",
    "character": "event",
    "description": "Upon pickup, obtain an Ancient Card.",
    "keywords": [],
    "image": "images/relics/dusty_tome.png"
  },
  "ECTOPLASM": {
    "name": "Ectoplasm",
    "character": "event",
    "description": "You can no longer gain Gold. Gain [E] at the start of each turn.",
    "keywords": [],
    "image": "images/relics/ectoplasm.png"
  },
  "ELECTRIC SHRYMP": {
    "name": "Electric Shrymp",
    "character": "event",
    "description": "Upon pickup, Enchant a Skill with Imbued.",
    "keywords": [],
    "image": "images/relics/electric_shrymp.png"
  },
  "EMBER TEA": {
    "name": "Ember Tea",
    "character": "event",
    "description": "At the start of the next combat, gain 2 Strength.",
    "keywords": [],
    "image": "images/relics/ember_tea.png"
  },
  "EMOTION CHIP": {
    "name": "Emotion Chip",
    "character": "defect",
    "description": "If you lost HP during the previous turn, trigger the passive ability of all Orbs at the start of your turn.",
    "keywords": [],
    "image": "images/relics/emotion_chip.png"
  },
  "EMPTY CAGE": {
    "name": "Empty Cage",
    "character": "event",
    "description": "Upon pickup, remove 2 cards from your Deck.",
    "keywords": [],
    "image": "images/relics/empty_cage.png"
  },
  "ETERNAL FEATHER": {
    "name": "Eternal Feather",
    "character": "shared",
    "description": "For every 5 cards in your Deck, heal 3 HP whenever you enter a Rest Site.",
    "keywords": [],
    "image": "images/relics/eternal_feather.png"
  },
  "ANCHOR???": {
    "name": "Anchor???",
    "character": "event",
    "description": "Start each combat with 4 Block.",
    "keywords": [],
    "image": "images/relics/anchor.png"
  },
  "BLOOD VIAL???": {
    "name": "Blood Vial???",
    "character": "event",
    "description": "At the start of each combat, heal 1 HP.",
    "keywords": [],
    "image": "images/relics/blood_vial.png"
  },
  "HAPPY FLOWER???": {
    "name": "Happy Flower???",
    "character": "event",
    "description": "Every 5 turns, gain [E].",
    "keywords": [],
    "image": "images/relics/happy_flower.png"
  },
  "LEE'S WAFFLE???": {
    "name": "Lee's Waffle???",
    "character": "event",
    "description": "Upon pickup, heal 10% of your HP.",
    "keywords": []
  },
  "MANGO???": {
    "name": "Mango???",
    "character": "event",
    "description": "Upon pickup, raise your Max HP by 3.",
    "keywords": [],
    "image": "images/relics/mango.png"
  },
  "THE MERCHANT'S RUG???": {
    "name": "The Merchant's Rug???",
    "character": "event",
    "description": "Poor imitation. Does nothing.",
    "keywords": []
  },
  "ORICHALCUM???": {
    "name": "Orichalcum???",
    "character": "event",
    "description": "If you end your turn without Block, gain 3 Block.",
    "keywords": [],
    "image": "images/relics/orichalcum.png"
  },
  "SNECKO EYE???": {
    "name": "Snecko Eye???",
    "character": "event",
    "description": "Start each combat Confused.",
    "keywords": []
  },
  "STRIKE DUMMY???": {
    "name": "Strike Dummy???",
    "character": "event",
    "description": "Cards containing “Strike” deal 1 additional damage.",
    "keywords": []
  },
  "VENERABLE TEA SET???": {
    "name": "Venerable Tea Set???",
    "character": "event",
    "description": "Whenever you enter a Rest Site, start the next combat with an additional [E].",
    "keywords": []
  },
  "FENCING MANUAL": {
    "name": "Fencing Manual",
    "character": "regent",
    "description": "At the start of each combat, Forge 10.",
    "keywords": [],
    "image": "images/relics/fencing_manual.png"
  },
  "FESTIVE POPPER": {
    "name": "Festive Popper",
    "character": "shared",
    "description": "At the start of each combat, deal 9 damage to ALL enemies.",
    "keywords": [],
    "image": "images/relics/festive_popper.png"
  },
  "FIDDLE": {
    "name": "Fiddle",
    "character": "event",
    "description": "At the start of each turn, draw 2 additional cards. You may not draw cards during your turn.",
    "keywords": [],
    "image": "images/relics/fiddle.png"
  },
  "FORGOTTEN SOUL": {
    "name": "Forgotten Soul",
    "character": "event",
    "description": "Whenever you Exhaust a card, deal 1 damage to a random enemy.",
    "keywords": [],
    "image": "images/relics/forgotten_soul.png"
  },
  "FRAGRANT MUSHROOM": {
    "name": "Fragrant Mushroom",
    "character": "event",
    "description": "Upon pickup, lose 15 HP and Upgrade 2 random cards.",
    "keywords": [],
    "image": "images/relics/fragrant_mushroom.png"
  },
  "FRESNEL LENS": {
    "name": "Fresnel Lens",
    "character": "shared",
    "description": "Whenever you add a card that gains Block to your Deck, Enchant it with Nimble 2.",
    "keywords": [],
    "image": "images/relics/fresnel_lens.png"
  },
  "FROZEN EGG": {
    "name": "Frozen Egg",
    "character": "shared",
    "description": "Whenever you add a Power into your Deck, Upgrade it.",
    "keywords": [],
    "image": "images/relics/frozen_egg.png"
  },
  "FUNERARY MASK": {
    "name": "Funerary Mask",
    "character": "necrobinder",
    "description": "At the start of each combat, add 3 Souls into your Draw Pile.",
    "keywords": [],
    "image": "images/relics/funerary_mask.png"
  },
  "FUR COAT": {
    "name": "Fur Coat",
    "character": "event",
    "description": "Upon pickup, mark 7 random combats. Enemies in those rooms have 1 HP.",
    "keywords": [],
    "image": "images/relics/fur_coat.png"
  },
  "GALACTIC DUST": {
    "name": "Galactic Dust",
    "character": "regent",
    "description": "For every 10 [S] spent, gain 10 Block.",
    "keywords": [],
    "image": "images/relics/galactic_dust.png"
  },
  "GAMBLING CHIP": {
    "name": "Gambling Chip",
    "character": "shared",
    "description": "At the start of each combat, discard any number of cards then draw that many.",
    "keywords": [],
    "image": "images/relics/gambling_chip.png"
  },
  "GAME PIECE": {
    "name": "Game Piece",
    "character": "shared",
    "description": "Whenever you play a Power, draw 1 card.",
    "keywords": [],
    "image": "images/relics/game_piece.png"
  },
  "GHOST SEED": {
    "name": "Ghost Seed",
    "character": "shared",
    "description": "Strikes and Defends gain Ethereal.",
    "keywords": [],
    "image": "images/relics/ghost_seed.png"
  },
  "GIRYA": {
    "name": "Girya",
    "character": "shared",
    "description": "You can now gain Strength at Rest Sites. (3 times max)",
    "keywords": [],
    "image": "images/relics/girya.png"
  },
  "GLASS EYE": {
    "name": "Glass Eye",
    "character": "event",
    "description": "Upon pickup, obtain 2 Common cards, 2 Uncommon cards, and 1 Rare card.",
    "keywords": [],
    "image": "images/relics/glass_eye.png"
  },
  "GLITTER": {
    "name": "Glitter",
    "character": "event",
    "description": "Enchant all card rewards with Glam.",
    "keywords": [],
    "image": "images/relics/glitter.png"
  },
  "GNARLED HAMMER": {
    "name": "Gnarled Hammer",
    "character": "shared",
    "description": "Upon pickup, Enchant up to 3 Attacks with Sharp 3.",
    "keywords": [],
    "image": "images/relics/gnarled_hammer.png"
  },
  "GOLD-PLATED CABLES": {
    "name": "Gold-Plated Cables",
    "character": "defect",
    "description": "Your rightmost Orb triggers its passive an additional time.",
    "keywords": [],
    "image": "images/relics/gold_plated_cables.png"
  },
  "GOLDEN COMPASS": {
    "name": "Golden Compass",
    "character": "event",
    "description": "Upon pickup, replace the Act 2 Map with a single special path.",
    "keywords": [],
    "image": "images/relics/golden_compass.png"
  },
  "GOLDEN PEARL": {
    "name": "Golden Pearl",
    "character": "event",
    "description": "Upon pickup, gain 150 Gold.",
    "keywords": [],
    "image": "images/relics/golden_pearl.png"
  },
  "GORGET": {
    "name": "Gorget",
    "character": "shared",
    "description": "At the start of each combat, gain 4 Plating.",
    "keywords": [],
    "image": "images/relics/gorget.png"
  },
  "GREMLIN HORN": {
    "name": "Gremlin Horn",
    "character": "shared",
    "description": "Whenever an enemy dies, gain [E] and draw 1 card.",
    "keywords": [],
    "image": "images/relics/gremlin_horn.png"
  },
  "HAND DRILL": {
    "name": "Hand Drill",
    "character": "event",
    "description": "Whenever you break an enemy's Block, apply 2 Vulnerable.",
    "keywords": [],
    "image": "images/relics/hand_drill.png"
  },
  "HAPPY FLOWER": {
    "name": "Happy Flower",
    "character": "shared",
    "description": "Every 3 turns, gain [E].",
    "keywords": [],
    "image": "images/relics/happy_flower.png"
  },
  "HEFTY TABLET": {
    "name": "Hefty Tablet",
    "character": "event",
    "description": "Upon pickup, choose 1 of 3 Rare cards to add to your Deck, and add 1 Injury to your Deck.",
    "keywords": [],
    "image": "images/relics/hefty_tablet.png"
  },
  "HELICAL DART": {
    "name": "Helical Dart",
    "character": "silent",
    "description": "Whenever you play a Shiv, gain 1 Dexterity this turn.",
    "keywords": [],
    "image": "images/relics/helical_dart.png"
  },
  "HISTORY COURSE": {
    "name": "History Course",
    "character": "event",
    "description": "At the start of your turn, play a copy of your last played Attack or Skill.",
    "keywords": [],
    "image": "images/relics/history_course.png"
  },
  "HORN CLEAT": {
    "name": "Horn Cleat",
    "character": "shared",
    "description": "At the start of your 2nd turn, gain 14 Block.",
    "keywords": [],
    "image": "images/relics/horn_cleat.png"
  },
  "ICE CREAM": {
    "name": "Ice Cream",
    "character": "shared",
    "description": "Energy is now conserved between turns.",
    "keywords": [],
    "image": "images/relics/ice_cream.png"
  },
  "INFUSED CORE": {
    "name": "Infused Core",
    "character": "event",
    "description": "At the start of each combat, Channel 3 Lightning.",
    "keywords": [],
    "image": "images/relics/infused_core.png"
  },
  "INTIMIDATING HELMET": {
    "name": "Intimidating Helmet",
    "character": "shared",
    "description": "Whenever you play a card that costs [E][E] or more, gain 4 Block.",
    "keywords": [],
    "image": "images/relics/intimidating_helmet.png"
  },
  "IRON CLUB": {
    "name": "Iron Club",
    "character": "event",
    "description": "Every 4 cards you play, draw 1 card.",
    "keywords": [],
    "image": "images/relics/iron_club.png"
  },
  "IVORY TILE": {
    "name": "Ivory Tile",
    "character": "necrobinder",
    "description": "Whenever you play a card that costs [E][E][E] or more, gain [E].",
    "keywords": [],
    "image": "images/relics/ivory_tile.png"
  },
  "JEWELED MASK": {
    "name": "Jeweled Mask",
    "character": "event",
    "description": "At the start of combat put a random Power from your Draw Pile into your Hand, it's free to play.",
    "keywords": [],
    "image": "images/relics/jeweled_mask.png"
  },
  "JEWELRY BOX": {
    "name": "Jewelry Box",
    "character": "event",
    "description": "Upon pickup, add 1 Apotheosis to your Deck.",
    "keywords": [],
    "image": "images/relics/jewelry_box.png"
  },
  "JOSS PAPER": {
    "name": "Joss Paper",
    "character": "shared",
    "description": "Every 5 times you Exhaust a card, draw 1 card.",
    "keywords": [],
    "image": "images/relics/joss_paper.png"
  },
  "JUZU BRACELET": {
    "name": "Juzu Bracelet",
    "character": "shared",
    "description": "Regular enemy combats are no longer encountered in ? rooms.",
    "keywords": [],
    "image": "images/relics/juzu_bracelet.png"
  },
  "KIFUDA": {
    "name": "Kifuda",
    "character": "shared",
    "description": "Upon pickup, Enchant up to 3 cards with Adroit.",
    "keywords": [],
    "image": "images/relics/kifuda.png"
  },
  "KUNAI": {
    "name": "Kunai",
    "character": "shared",
    "description": "Every time you play 3 Attacks in a single turn, gain 1 Dexterity.",
    "keywords": [],
    "image": "images/relics/kunai.png"
  },
  "KUSARIGAMA": {
    "name": "Kusarigama",
    "character": "shared",
    "description": "Every time you play 3 Attacks in a single turn, deal 6 damage to a random enemy.",
    "keywords": [],
    "image": "images/relics/kusarigama.png"
  },
  "LANTERN": {
    "name": "Lantern",
    "character": "shared",
    "description": "Start each combat with an additional [E].",
    "keywords": [],
    "image": "images/relics/lantern.png"
  },
  "LARGE CAPSULE": {
    "name": "Large Capsule",
    "character": "event",
    "description": "Upon pickup, obtain 2 random Relics. Add an additional Strike and Defend to your Deck.",
    "keywords": [],
    "image": "images/relics/large_capsule.png"
  },
  "LASTING CANDY": {
    "name": "Lasting Candy",
    "character": "event",
    "description": "Every other combat, your card rewards gain an additional Power.",
    "keywords": [],
    "image": "images/relics/lasting_candy.png"
  },
  "LAVA LAMP": {
    "name": "Lava Lamp",
    "character": "shared",
    "description": "At the end of combat, Upgrade all card rewards if you took no damage.",
    "keywords": [],
    "image": "images/relics/lava_lamp.png"
  },
  "LAVA ROCK": {
    "name": "Lava Rock",
    "character": "event",
    "description": "The Act 1 Boss drops 2 Relics.",
    "keywords": [],
    "image": "images/relics/lava_rock.png"
  },
  "LEAD PAPERWEIGHT": {
    "name": "Lead Paperweight",
    "character": "event",
    "description": "Upon pickup, choose 1 of 2 Colorless cards to add to your Deck.",
    "keywords": [],
    "image": "images/relics/lead_paperweight.png"
  },
  "LEAFY POULTICE": {
    "name": "Leafy Poultice",
    "character": "event",
    "description": "Upon pickup, Transform 1 of your Strikes and 1 of your Defends and lose 12 Max HP.",
    "keywords": [],
    "image": "images/relics/leafy_poultice.png"
  },
  "LEE'S WAFFLE": {
    "name": "Lee's Waffle",
    "character": "shared",
    "description": "Upon pickup, raise your Max HP by 7 and heal all of your HP.",
    "keywords": []
  },
  "LETTER OPENER": {
    "name": "Letter Opener",
    "character": "shared",
    "description": "Every time you play 3 Skills in a single turn, deal 5 damage to ALL enemies.",
    "keywords": [],
    "image": "images/relics/letter_opener.png"
  },
  "LIZARD TAIL": {
    "name": "Lizard Tail",
    "character": "shared",
    "description": "When your HP would be reduced to 0, heal to 50% of your Max HP instead (works once).",
    "keywords": [],
    "image": "images/relics/lizard_tail.png"
  },
  "LOOMING FRUIT": {
    "name": "Looming Fruit",
    "character": "shared",
    "description": "Upon pickup, raise your Max HP by 31.",
    "keywords": [],
    "image": "images/relics/looming_fruit.png"
  },
  "LORD'S PARASOL": {
    "name": "Lord's Parasol",
    "character": "event",
    "description": "When you encounter the Merchant, immediately obtain EVERYTHING he sells.",
    "keywords": []
  },
  "LOST COFFER": {
    "name": "Lost Coffer",
    "character": "event",
    "description": "Upon pickup, gain 1 card reward and procure 1 random potion.",
    "keywords": [],
    "image": "images/relics/lost_coffer.png"
  },
  "LOST WISP": {
    "name": "Lost Wisp",
    "character": "event",
    "description": "Whenever you play a Power, deal 8 damage to ALL enemies.",
    "keywords": [],
    "image": "images/relics/lost_wisp.png"
  },
  "LUCKY FYSH": {
    "name": "Lucky Fysh",
    "character": "shared",
    "description": "Whenever you add a card to your Deck, gain 15 Gold.",
    "keywords": [],
    "image": "images/relics/lucky_fysh.png"
  },
  "LUNAR PASTRY": {
    "name": "Lunar Pastry",
    "character": "regent",
    "description": "At the end of your turn, gain [S].",
    "keywords": [],
    "image": "images/relics/lunar_pastry.png"
  },
  "MANGO": {
    "name": "Mango",
    "character": "shared",
    "description": "Upon pickup, raise your Max HP by 14.",
    "keywords": [],
    "image": "images/relics/mango.png"
  },
  "MASSIVE SCROLL": {
    "name": "Massive Scroll",
    "character": "event",
    "description": "Upon pickup, choose 1 of 3 Multiplayer Cards to add to your Deck.",
    "keywords": [],
    "image": "images/relics/massive_scroll.png"
  },
  "MAW BANK": {
    "name": "Maw Bank",
    "character": "event",
    "description": "Whenever you climb a floor, gain 12 Gold. No longer works when you spend any Gold at the shop.",
    "keywords": [],
    "image": "images/relics/maw_bank.png"
  },
  "MEAL TICKET": {
    "name": "Meal Ticket",
    "character": "shared",
    "description": "Whenever you enter a shop room, heal 15 HP.",
    "keywords": [],
    "image": "images/relics/meal_ticket.png"
  },
  "MEAT CLEAVER": {
    "name": "Meat Cleaver",
    "character": "event",
    "description": "You may Cook at Rest Sites.",
    "keywords": [],
    "image": "images/relics/meat_cleaver.png"
  },
  "MEAT ON THE BONE": {
    "name": "Meat on the Bone",
    "character": "shared",
    "description": "If your HP is at or below 50% at the end of combat, heal 12 HP.",
    "keywords": [],
    "image": "images/relics/meat_on_the_bone.png"
  },
  "MEMBERSHIP CARD": {
    "name": "Membership Card",
    "character": "shared",
    "description": "50% discount on all products!",
    "keywords": [],
    "image": "images/relics/membership_card.png"
  },
  "MERCURY HOURGLASS": {
    "name": "Mercury Hourglass",
    "character": "shared",
    "description": "At the start of your turn, deal 3 damage to ALL enemies.",
    "keywords": [],
    "image": "images/relics/mercury_hourglass.png"
  },
  "METRONOME": {
    "name": "Metronome",
    "character": "defect",
    "description": "The first time you Channel 7 Orbs each combat, deal 30 damage to ALL enemies.",
    "keywords": [],
    "image": "images/relics/metronome.png"
  },
  "MINI REGENT": {
    "name": "Mini Regent",
    "character": "regent",
    "description": "The first time you spend [S] each turn, gain 1 Strength.",
    "keywords": [],
    "image": "images/relics/mini_regent.png"
  },
  "MINIATURE CANNON": {
    "name": "Miniature Cannon",
    "character": "shared",
    "description": "Upgraded Attacks deal 3 additional damage.",
    "keywords": [],
    "image": "images/relics/miniature_cannon.png"
  },
  "MINIATURE TENT": {
    "name": "Miniature Tent",
    "character": "shared",
    "description": "You may choose any number of options at Rest Sites.",
    "keywords": [],
    "image": "images/relics/miniature_tent.png"
  },
  "MOLTEN EGG": {
    "name": "Molten Egg",
    "character": "shared",
    "description": "Whenever you add an Attack card to your Deck, Upgrade it.",
    "keywords": [],
    "image": "images/relics/molten_egg.png"
  },
  "MR. STRUGGLES": {
    "name": "Mr. Struggles",
    "character": "event",
    "description": "At the start of your turn, deal damage equal to the turn number to ALL enemies.",
    "keywords": [],
    "image": "images/relics/mr_struggles.png"
  },
  "MUMMIFIED HAND": {
    "name": "Mummified Hand",
    "character": "shared",
    "description": "Whenever you play a Power, a random card in your Hand is free to play that turn.",
    "keywords": [],
    "image": "images/relics/mummified_hand.png"
  },
  "MUSIC BOX": {
    "name": "Music Box",
    "character": "event",
    "description": "Create an Ethereal copy of the first Attack you play each turn.",
    "keywords": [],
    "image": "images/relics/music_box.png"
  },
  "MYSTIC LIGHTER": {
    "name": "Mystic Lighter",
    "character": "shared",
    "description": "Enchanted Attacks deal 9 additional damage.",
    "keywords": [],
    "image": "images/relics/mystic_lighter.png"
  },
  "NEOW'S BONES": {
    "name": "Neow's Bones",
    "character": "event",
    "description": "Upon pickup, gain 2 random Neow Relics. Add 1 random Curse to your Deck.",
    "keywords": []
  },
  "NEOW'S TALISMAN": {
    "name": "Neow's Talisman",
    "character": "event",
    "description": "Upon pickup, Upgrade 1 of your Strikes and 1 of your Defends.",
    "keywords": []
  },
  "NEOW'S TORMENT": {
    "name": "Neow's Torment",
    "character": "event",
    "description": "Upon pickup, add 1 Neow's Fury to your Deck.",
    "keywords": []
  },
  "NEW LEAF": {
    "name": "New Leaf",
    "character": "event",
    "description": "Upon pickup, Transform 1 card.",
    "keywords": [],
    "image": "images/relics/new_leaf.png"
  },
  "NINJA SCROLL": {
    "name": "Ninja Scroll",
    "character": "silent",
    "description": "At the start of each combat, add 3 Shivs into your Hand.",
    "keywords": [],
    "image": "images/relics/ninja_scroll.png"
  },
  "NUNCHAKU": {
    "name": "Nunchaku",
    "character": "shared",
    "description": "Every time you play 10 Attacks, gain [E].",
    "keywords": [],
    "image": "images/relics/nunchaku.png"
  },
  "NUTRITIOUS OYSTER": {
    "name": "Nutritious Oyster",
    "character": "event",
    "description": "Upon pickup, raise your Max HP by 11.",
    "keywords": [],
    "image": "images/relics/nutritious_oyster.png"
  },
  "NUTRITIOUS SOUP": {
    "name": "Nutritious Soup",
    "character": "event",
    "description": "Upon pickup, Enchant all Strikes in your Deck with Tezcatara's Ember.",
    "keywords": [],
    "image": "images/relics/nutritious_soup.png"
  },
  "ODDLY SMOOTH STONE": {
    "name": "Oddly Smooth Stone",
    "character": "shared",
    "description": "Start each combat with 1 Dexterity.",
    "keywords": [],
    "image": "images/relics/oddly_smooth_stone.png"
  },
  "OLD COIN": {
    "name": "Old Coin",
    "character": "shared",
    "description": "Upon pickup, gain 300 Gold.",
    "keywords": [],
    "image": "images/relics/old_coin.png"
  },
  "ORANGE DOUGH": {
    "name": "Orange Dough",
    "character": "regent",
    "description": "At the start of each combat, add 2 random Colorless cards into your Hand.",
    "keywords": [],
    "image": "images/relics/orange_dough.png"
  },
  "ORICHALCUM": {
    "name": "Orichalcum",
    "character": "shared",
    "description": "If you end your turn without Block, gain 6 Block.",
    "keywords": [],
    "image": "images/relics/orichalcum.png"
  },
  "ORNAMENTAL FAN": {
    "name": "Ornamental Fan",
    "character": "shared",
    "description": "Every time you play 3 Attacks in a single turn, gain 4 Block.",
    "keywords": [],
    "image": "images/relics/ornamental_fan.png"
  },
  "ORRERY": {
    "name": "Orrery",
    "character": "shared",
    "description": "Upon pickup, gain 5 card rewards.",
    "keywords": [],
    "image": "images/relics/orrery.png"
  },
  "PAEL'S BLOOD": {
    "name": "Pael's Blood",
    "character": "event",
    "description": "At the start of your turn, draw 1 additional card.",
    "keywords": []
  },
  "PAEL'S CLAW": {
    "name": "Pael's Claw",
    "character": "event",
    "description": "Upon pickup, Enchant all Defends with Goopy.",
    "keywords": []
  },
  "PAEL'S EYE": {
    "name": "Pael's Eye",
    "character": "event",
    "description": "The first time each combat you end your turn without playing cards, Exhaust your Hand, and take an extra turn.",
    "keywords": []
  },
  "PAEL'S FLESH": {
    "name": "Pael's Flesh",
    "character": "event",
    "description": "Gain an additional [E] at the start of your 3rd turn, and every turn after that.",
    "keywords": []
  },
  "PAEL'S GROWTH": {
    "name": "Pael's Growth",
    "character": "event",
    "description": "Upon pickup, Enchant a card with Clone.",
    "keywords": []
  },
  "PAEL'S HORN": {
    "name": "Pael's Horn",
    "character": "event",
    "description": "Upon pickup, add 2 Relax to your Deck.",
    "keywords": []
  },
  "PAEL'S LEGION": {
    "name": "Pael's Legion",
    "character": "event",
    "description": "Doubles Block gained from a card, then goes to sleep for 2 turns.",
    "keywords": []
  },
  "PAEL'S TEARS": {
    "name": "Pael's Tears",
    "character": "event",
    "description": "If you end your turn with unspent [E], gain an additional [E][E] next turn.",
    "keywords": []
  },
  "PAEL'S TOOTH": {
    "name": "Pael's Tooth",
    "character": "event",
    "description": "Upon pickup, remove 5 cards from your Deck. After each combat, randomly add 1 back Upgraded.",
    "keywords": []
  },
  "PAEL'S WING": {
    "name": "Pael's Wing",
    "character": "event",
    "description": "You may sacrifice card rewards to Pael. Every 2 sacrifices, obtain a Relic.",
    "keywords": []
  },
  "PANDORA'S BOX": {
    "name": "Pandora's Box",
    "character": "event",
    "description": "Transform ALL Strikes and Defends.",
    "keywords": []
  },
  "PANTOGRAPH": {
    "name": "Pantograph",
    "character": "shared",
    "description": "At the start of each Boss combat, heal 25 HP.",
    "keywords": [],
    "image": "images/relics/pantograph.png"
  },
  "PAPER KRANE": {
    "name": "Paper Krane",
    "character": "silent",
    "description": "Enemies with Weak deal 40% less damage to you rather than 25%.",
    "keywords": [],
    "image": "images/relics/paper_krane.png"
  },
  "PAPER PHROG": {
    "name": "Paper Phrog",
    "character": "ironclad",
    "description": "Enemies with Vulnerable take 75% more damage rather than 50%.",
    "keywords": [],
    "image": "images/relics/paper_phrog.png"
  },
  "PARRYING SHIELD": {
    "name": "Parrying Shield",
    "character": "shared",
    "description": "If you end a turn with at least 10 Block, deal 6 damage to a random enemy.",
    "keywords": []
  },
  "PEAR": {
    "name": "Pear",
    "character": "shared",
    "description": "Upon pickup, raise your Max HP by 10.",
    "keywords": []
  },
  "PEN NIB": {
    "name": "Pen Nib",
    "character": "shared",
    "description": "Every 10th Attack you play deals double damage.",
    "keywords": []
  },
  "PENDULUM": {
    "name": "Pendulum",
    "character": "shared",
    "description": "Every 3 turns, draw 1 card.",
    "keywords": []
  },
  "PERMAFROST": {
    "name": "Permafrost",
    "character": "shared",
    "description": "The first time you play a Power each combat, gain 7 Block.",
    "keywords": []
  },
  "PETRIFIED TOAD": {
    "name": "Petrified Toad",
    "character": "shared",
    "description": "At the start of each combat, procure a Potion-Shaped Rock.",
    "keywords": []
  },
  "PHIAL HOLSTER": {
    "name": "Phial Holster",
    "character": "event",
    "description": "Upon pickup, gain 1 potion slot and procure 2 random potions.",
    "keywords": []
  },
  "PHILOSOPHER'S STONE": {
    "name": "Philosopher's Stone",
    "character": "event",
    "description": "Gain [E] at the start of each turn. ALL enemies start combat with 1 Strength.",
    "keywords": []
  },
  "PHYLACTERY UNBOUND": {
    "name": "Phylactery Unbound",
    "character": "event",
    "description": "At the start of each combat, Summon 5. At the start of your turn, Summon 2.",
    "keywords": []
  },
  "PLANISPHERE": {
    "name": "Planisphere",
    "character": "shared",
    "description": "Whenever you enter a ? room, heal 5 HP.",
    "keywords": []
  },
  "POCKETWATCH": {
    "name": "Pocketwatch",
    "character": "shared",
    "description": "Whenever you play 3 or fewer cards during your turn, draw 3 additional cards at the start of your next turn.",
    "keywords": []
  },
  "POLLINOUS CORE": {
    "name": "Pollinous Core",
    "character": "event",
    "description": "Every 4 turns, draw 2 additional cards.",
    "keywords": []
  },
  "POMANDER": {
    "name": "Pomander",
    "character": "event",
    "description": "Upon pickup, Upgrade a card.",
    "keywords": []
  },
  "POTION BELT": {
    "name": "Potion Belt",
    "character": "shared",
    "description": "Upon pickup, gain 2 potion slots.",
    "keywords": []
  },
  "POWER CELL": {
    "name": "Power Cell",
    "character": "defect",
    "description": "At the start of each combat, add 2 zero-cost cards from your Draw Pile into your Hand.",
    "keywords": []
  },
  "PRAYER WHEEL": {
    "name": "Prayer Wheel",
    "character": "shared",
    "description": "Normal enemies drop an additional card reward.",
    "keywords": []
  },
  "PRECARIOUS SHEARS": {
    "name": "Precarious Shears",
    "character": "event",
    "description": "Upon pickup, remove 2 cards from your Deck and lose 16 HP.",
    "keywords": []
  },
  "PRECISE SCISSORS": {
    "name": "Precise Scissors",
    "character": "event",
    "description": "Upon pickup, remove 1 card from your Deck.",
    "keywords": []
  },
  "PRESERVED FOG": {
    "name": "Preserved Fog",
    "character": "event",
    "description": "Upon pickup, remove 3 cards from your Deck. Add Folly to your Deck.",
    "keywords": []
  },
  "PRISMATIC GEM": {
    "name": "Prismatic Gem",
    "character": "event",
    "description": "Gain [E] at the start of each turn. Card rewards now contain cards from other colors.",
    "keywords": []
  },
  "PUMPKIN CANDLE": {
    "name": "Pumpkin Candle",
    "character": "event",
    "description": "Gain [E] at the start of each turn. Extinguishes at the start of Act 3.",
    "keywords": []
  },
  "PUNCH DAGGER": {
    "name": "Punch Dagger",
    "character": "shared",
    "description": "Upon pickup, Enchant an Attack with Momentum 5.",
    "keywords": []
  },
  "RADIANT PEARL": {
    "name": "Radiant Pearl",
    "character": "event",
    "description": "At the start of each combat, add 1 Luminesce into your Hand.",
    "keywords": []
  },
  "RAINBOW RING": {
    "name": "Rainbow Ring",
    "character": "shared",
    "description": "The first time you play an Attack, Skill, and Power each turn, gain 1 Strength and 1 Dexterity.",
    "keywords": []
  },
  "RAZOR TOOTH": {
    "name": "Razor Tooth",
    "character": "event",
    "description": "Every time you play an Attack or Skill, Upgrade it for the remainder of combat.",
    "keywords": []
  },
  "RED MASK": {
    "name": "Red Mask",
    "character": "shared",
    "description": "At the start of each combat, apply 1 Weak to ALL enemies.",
    "keywords": []
  },
  "RED SKULL": {
    "name": "Red Skull",
    "character": "ironclad",
    "description": "While your HP is at or below 50%, you have 3 additional Strength.",
    "keywords": []
  },
  "REGAL PILLOW": {
    "name": "Regal Pillow",
    "character": "shared",
    "description": "Whenever you Rest, heal an additional 15 HP.",
    "keywords": []
  },
  "REGALITE": {
    "name": "Regalite",
    "character": "regent",
    "description": "Whenever you create a card, gain 2 Block.",
    "keywords": []
  },
  "REPTILE TRINKET": {
    "name": "Reptile Trinket",
    "character": "shared",
    "description": "Whenever you use a potion, gain 3 Strength this turn.",
    "keywords": []
  },
  "RING OF THE DRAKE": {
    "name": "Ring of the Drake",
    "character": "event",
    "description": "At the start of your first 3 turns, draw 2 additional cards.",
    "keywords": []
  },
  "RING OF THE SNAKE": {
    "name": "Ring of the Snake",
    "character": "silent",
    "description": "At the start of each combat, draw 2 additional cards.",
    "keywords": []
  },
  "RINGING TRIANGLE": {
    "name": "Ringing Triangle",
    "character": "shared",
    "description": "Retain your Hand on the first turn of combat.",
    "keywords": []
  },
  "RIPPLE BASIN": {
    "name": "Ripple Basin",
    "character": "shared",
    "description": "If you did not play any Attacks during your turn, gain 4 Block.",
    "keywords": []
  },
  "ROYAL POISON": {
    "name": "Royal Poison",
    "character": "event",
    "description": "At the start of each combat, lose 4 HP.",
    "keywords": []
  },
  "ROYAL STAMP": {
    "name": "Royal Stamp",
    "character": "shared",
    "description": "Upon pickup, choose an Attack or Skill in your Deck to Enchant with Royally Approved.",
    "keywords": []
  },
  "RUINED HELMET": {
    "name": "Ruined Helmet",
    "character": "ironclad",
    "description": "The first time you gain Strength each combat, double the amount gained.",
    "keywords": []
  },
  "RUNIC CAPACITOR": {
    "name": "Runic Capacitor",
    "character": "defect",
    "description": "Start each combat with 3 additional Orb Slots.",
    "keywords": []
  },
  "RUNIC PYRAMID": {
    "name": "Runic Pyramid",
    "character": "event",
    "description": "At the end of your turn, you no longer discard your Hand.",
    "keywords": []
  },
  "SAI": {
    "name": "Sai",
    "character": "event",
    "description": "At the start of your turn, gain 7 Block.",
    "keywords": []
  },
  "SAND CASTLE": {
    "name": "Sand Castle",
    "character": "event",
    "description": "Upon pickup, Upgrade 6 random cards.",
    "keywords": []
  },
  "SCREAMING FLAGON": {
    "name": "Screaming Flagon",
    "character": "shared",
    "description": "If you end your turn with no cards in your Hand, deal 20 damage to ALL enemies.",
    "keywords": []
  },
  "SCROLL BOXES": {
    "name": "Scroll Boxes",
    "character": "event",
    "description": "Upon pickup, lose all Gold and choose 1 of 2 packs of cards to add to your Deck.",
    "keywords": []
  },
  "SEA GLASS": {
    "name": "Sea Glass",
    "character": "event",
    "description": "See 15 cards from another character. Choose any number of them to add to your Deck.",
    "keywords": []
  },
  "SEAL OF GOLD": {
    "name": "Seal of Gold",
    "character": "event",
    "description": "At the start of your turn, spend 5 Gold to gain [E].",
    "keywords": []
  },
  "SELF-FORMING CLAY": {
    "name": "Self-Forming Clay",
    "character": "ironclad",
    "description": "Whenever you lose HP in combat, gain 3 Block next turn.",
    "keywords": []
  },
  "SERE TALON": {
    "name": "Sere Talon",
    "character": "event",
    "description": "Upon pickup, add 2 random Curses and 3 Wishes to your Deck.",
    "keywords": []
  },
  "SHOVEL": {
    "name": "Shovel",
    "character": "shared",
    "description": "You can now dig at Rest Sites to obtain a random Relic.",
    "keywords": []
  },
  "SHURIKEN": {
    "name": "Shuriken",
    "character": "shared",
    "description": "Every time you play 3 Attacks in a single turn, gain 1 Strength.",
    "keywords": []
  },
  "SIGNET RING": {
    "name": "Signet Ring",
    "character": "event",
    "description": "Upon pickup, gain 999 Gold.",
    "keywords": []
  },
  "SILVER CRUCIBLE": {
    "name": "Silver Crucible",
    "character": "event",
    "description": "The first 3 card rewards you see are Upgraded. The first Treasure Chest you open is empty.",
    "keywords": []
  },
  "SLING OF COURAGE": {
    "name": "Sling of Courage",
    "character": "shared",
    "description": "Start each Elite combat with 2 Strength.",
    "keywords": []
  },
  "SMALL CAPSULE": {
    "name": "Small Capsule",
    "character": "event",
    "description": "Upon pickup, obtain a random Relic.",
    "keywords": []
  },
  "SNECKO EYE": {
    "name": "Snecko Eye",
    "character": "event",
    "description": "At the start of your turn, draw 2 additional cards. Start each combat Confused.",
    "keywords": []
  },
  "SNECKO SKULL": {
    "name": "Snecko Skull",
    "character": "silent",
    "description": "Whenever you apply Poison, apply an additional 1 Poison.",
    "keywords": []
  },
  "SOZU": {
    "name": "Sozu",
    "character": "event",
    "description": "Gain [E] at the start of each turn. You can no longer obtain potions.",
    "keywords": []
  },
  "SPARKLING ROUGE": {
    "name": "Sparkling Rouge",
    "character": "event",
    "description": "At the start of your 3rd turn, gain 1 Strength and 1 Dexterity.",
    "keywords": []
  },
  "SPIKED GAUNTLETS": {
    "name": "Spiked Gauntlets",
    "character": "event",
    "description": "Gain [E] at the start of each turn. Powers cost 1 more [E].",
    "keywords": []
  },
  "STONE CALENDAR": {
    "name": "Stone Calendar",
    "character": "shared",
    "description": "At the end of turn 7, deal 52 damage to ALL enemies.",
    "keywords": []
  },
  "STONE CRACKER": {
    "name": "Stone Cracker",
    "character": "shared",
    "description": "At the start of each combat, Upgrade 2 random cards in your Draw Pile for the rest of combat.",
    "keywords": []
  },
  "STONE HUMIDIFIER": {
    "name": "Stone Humidifier",
    "character": "event",
    "description": "Whenever you Rest at a Rest Site, raise your Max HP by 5.",
    "keywords": []
  },
  "STORYBOOK": {
    "name": "Storybook",
    "character": "event",
    "description": "Upon pickup, add 1 Brightest Flame to your Deck.",
    "keywords": []
  },
  "STRAWBERRY": {
    "name": "Strawberry",
    "character": "shared",
    "description": "Upon pickup, raise your Max HP by 7.",
    "keywords": []
  },
  "STRIKE DUMMY": {
    "name": "Strike Dummy",
    "character": "shared",
    "description": "Cards containing “Strike” deal 3 additional damage.",
    "keywords": []
  },
  "STURDY CLAMP": {
    "name": "Sturdy Clamp",
    "character": "shared",
    "description": "Up to 10 Block persists across turns.",
    "keywords": []
  },
  "SWORD OF JADE": {
    "name": "Sword of Jade",
    "character": "event",
    "description": "Start each combat with 3 Strength.",
    "keywords": []
  },
  "SWORD OF STONE": {
    "name": "Sword of Stone",
    "character": "event",
    "description": "Transforms into a powerful Relic after defeating 5 Elites.",
    "keywords": []
  },
  "SYMBIOTIC VIRUS": {
    "name": "Symbiotic Virus",
    "character": "defect",
    "description": "At the start of each combat, Channel 1 Dark.",
    "keywords": []
  },
  "TANX'S WHISTLE": {
    "name": "Tanx's Whistle",
    "character": "event",
    "description": "Upon pickup, add 1 Whistle to your Deck.",
    "keywords": []
  },
  "TEA OF DISCOURTESY": {
    "name": "Tea of Discourtesy",
    "character": "event",
    "description": "At the start of the next combat, shuffle 2 Dazed into your Draw Pile.",
    "keywords": []
  },
  "THE ABACUS": {
    "name": "The Abacus",
    "character": "shared",
    "description": "Whenever you shuffle your Draw Pile, gain 6 Block.",
    "keywords": []
  },
  "THE BOOT": {
    "name": "The Boot",
    "character": "event",
    "description": "Whenever you would deal 4 or less unblocked attack damage, increase it to 5.",
    "keywords": []
  },
  "THE COURIER": {
    "name": "The Courier",
    "character": "shared",
    "description": "The merchant no longer runs out of cards, relics, or potions and his prices are reduced by 20%.",
    "keywords": []
  },
  "THROWING AXE": {
    "name": "Throwing Axe",
    "character": "event",
    "description": "The first card you play each combat is played an extra time.",
    "keywords": []
  },
  "TINGSHA": {
    "name": "Tingsha",
    "character": "silent",
    "description": "Whenever you discard a card during your turn, deal 3 damage to a random enemy for each card discarded.",
    "keywords": []
  },
  "TINY MAILBOX": {
    "name": "Tiny Mailbox",
    "character": "shared",
    "description": "Whenever you Rest, procure 2 random potions.",
    "keywords": []
  },
  "TOASTY MITTENS": {
    "name": "Toasty Mittens",
    "character": "event",
    "description": "At the start of your turn, Exhaust the top card of your Draw Pile and gain 1 Strength.",
    "keywords": []
  },
  "TOOLBOX": {
    "name": "Toolbox",
    "character": "shared",
    "description": "At the start of each combat, choose 1 of 3 random Colorless cards and add the chosen card into your Hand.",
    "keywords": []
  },
  "TOUCH OF OROBAS": {
    "name": "Touch of Orobas",
    "character": "event",
    "description": "Upon pickup, replace your starter Relic with an Ancient version.",
    "keywords": []
  },
  "TOUGH BANDAGES": {
    "name": "Tough Bandages",
    "character": "silent",
    "description": "Whenever you discard a card during your turn, gain 3 Block.",
    "keywords": []
  },
  "TOXIC EGG": {
    "name": "Toxic Egg",
    "character": "shared",
    "description": "Whenever you add a Skill into your Deck, Upgrade it.",
    "keywords": []
  },
  "TOY BOX": {
    "name": "Toy Box",
    "character": "event",
    "description": "Upon pickup, obtain 4 Wax Relics. Every 3 combats, your left-most Wax Relic will melt away.",
    "keywords": []
  },
  "TRI-BOOMERANG": {
    "name": "Tri-Boomerang",
    "character": "event",
    "description": "Choose 3 Attacks in your Deck. Enchant them with Instinct.",
    "keywords": []
  },
  "TUNGSTEN ROD": {
    "name": "Tungsten Rod",
    "character": "shared",
    "description": "Whenever you would lose HP, lose 1 less.",
    "keywords": []
  },
  "TUNING FORK": {
    "name": "Tuning Fork",
    "character": "shared",
    "description": "Every time you play 10 Skills, gain 7 Block.",
    "keywords": []
  },
  "TWISTED FUNNEL": {
    "name": "Twisted Funnel",
    "character": "silent",
    "description": "At the start of each combat, apply 4 Poison to ALL enemies.",
    "keywords": []
  },
  "UNCEASING TOP": {
    "name": "Unceasing Top",
    "character": "shared",
    "description": "Whenever you have no cards in Hand during your turn, draw a card.",
    "keywords": []
  },
  "UNDYING SIGIL": {
    "name": "Undying Sigil",
    "character": "necrobinder",
    "description": "Enemies with at least as much Doom as HP deal 50% less damage.",
    "keywords": []
  },
  "UNSETTLING LAMP": {
    "name": "Unsettling Lamp",
    "character": "shared",
    "description": "Each combat, the first time you play a card that Debuffs an enemy, double its effect.",
    "keywords": []
  },
  "VAJRA": {
    "name": "Vajra",
    "character": "shared",
    "description": "Start each combat with 1 Strength.",
    "keywords": []
  },
  "VAMBRACE": {
    "name": "Vambrace",
    "character": "shared",
    "description": "The first time you gain Block from a card each combat, double the amount gained.",
    "keywords": []
  },
  "VELVET CHOKER": {
    "name": "Velvet Choker",
    "character": "event",
    "description": "Gain [E] at the start of each turn. You cannot play more than 6 cards per turn.",
    "keywords": []
  },
  "VENERABLE TEA SET": {
    "name": "Venerable Tea Set",
    "character": "shared",
    "description": "Whenever you enter a Rest Site, start the next combat with an additional [E][E].",
    "keywords": []
  },
  "VERY HOT COCOA": {
    "name": "Very Hot Cocoa",
    "character": "shared",
    "description": "Start each combat with an additional [E][E][E][E].",
    "keywords": []
  },
  "VEXING PUZZLEBOX": {
    "name": "Vexing Puzzlebox",
    "character": "shared",
    "description": "At the start of each combat, add a random card into your Hand. It's free to play this turn.",
    "keywords": []
  },
  "VITRUVIAN MINION": {
    "name": "Vitruvian Minion",
    "character": "regent",
    "description": "Cards containing “Minion” deal double damage and gain double Block.",
    "keywords": []
  },
  "WAR HAMMER": {
    "name": "War Hammer",
    "character": "event",
    "description": "Whenever you kill an Elite, Upgrade 4 random cards.",
    "keywords": []
  },
  "WAR PAINT": {
    "name": "War Paint",
    "character": "shared",
    "description": "Upon pickup, Upgrade 2 random Skills.",
    "keywords": []
  },
  "WHETSTONE": {
    "name": "Whetstone",
    "character": "shared",
    "description": "Upon pickup, Upgrade 2 random Attacks.",
    "keywords": []
  },
  "WHISPERING EARRING": {
    "name": "Whispering Earring",
    "character": "event",
    "description": "Gain [E] at the start of each turn. Vakuu plays your first turn for you.",
    "keywords": []
  },
  "WHITE BEAST STATUE": {
    "name": "White Beast Statue",
    "character": "shared",
    "description": "Potions always appear in combat rewards.",
    "keywords": []
  },
  "WHITE STAR": {
    "name": "White Star",
    "character": "shared",
    "description": "Elites drop an additional Rare card reward.",
    "keywords": []
  },
  "WING CHARM": {
    "name": "Wing Charm",
    "character": "shared",
    "description": "A random card in each card reward is Enchanted with Swift 1.",
    "keywords": []
  },
  "WINGED BOOTS": {
    "name": "Winged Boots",
    "character": "event",
    "description": "You may ignore paths when choosing the next rooms to travel to 3 times.",
    "keywords": []
  },
  "WONGO CUSTOMER APPRECIATION BADGE": {
    "name": "Wongo Customer Appreciation Badge",
    "character": "event",
    "description": "Does nothing.",
    "keywords": []
  },
  "WONGO'S MYSTERY TICKET": {
    "name": "Wongo's Mystery Ticket",
    "character": "event",
    "description": "Receive 3 random Relics after 5 combats.",
    "keywords": []
  },
  "YUMMY COOKIE": {
    "name": "Yummy Cookie",
    "character": "event",
    "description": "Upon pickup, Upgrade 4 cards.",
    "keywords": []
  }
};
