# Monster Level HP and Deck Snapshots

Date: 2026-05-31

This document expands every recovered monster over its recovered `MonsterData.min_level..max_level` range. The complete tabular export is in `docs/mechanics/monster-level-hp-deck-snapshots.tsv`.

## Evidence and Formula

- Monster list, base decks, mana, action/draw bonuses, preferred starting cards, starting equipment, health multipliers, and level-up rules come from `extracted/structured/monster_catalog.json`.
- `Monster.LevelTo` is preserved in `extracted/disassembly/Monster_LevelTo.txt`: it clamps/stores level, calls `ManaGain(levelTo)`, computes HP from `HealthValue() * health_mult`, then runs `LevelUpDeck()` and `DiluteDeck()`.
- `Monster.HealthValue` is preserved in `extracted/disassembly/Monster_HealthValue.txt`.
- `Monster.CardValue` is preserved in `extracted/disassembly/Monster_CardValue.txt`; it feeds the generated attack-card count in `DiluteDeck()`.
- `Monster.DilutionFraction` is preserved in `extracted/disassembly/Monster_DilutionFraction.txt`; it returns the per-level `Attack1`/`Attack2`/`Attack3`/`Attack4` fractions below.
- `Monster.DiluteDeck` is preserved in `extracted/disassembly/Monster_DiluteDeck.txt`; it creates `AttackN` strings from the `Attack` literal plus attack value, fills high values first into a generated array, and appends that array after the current deck.
- Level-up deck edits are applied in recovered operation order: `DeckAdd` appends, `DeckReplace` replaces the first matching card and appends if the outgoing card is absent, matching the current shared runtime fixture.

Recovered `HealthValue` table:

| Level | HealthValue | CardValue used by DiluteDeck |
| ---: | ---: | ---: |
| 1 | 4 | 1 |
| 2 | 7 | 1 |
| 3 | 10 | 2 |
| 4 | 15 | 2 |
| 5 | 20 | 3 |
| 6 | 30 | 3 |
| 7 | 40 | 4 |
| 8 | 55 | 4 |
| 9 | 70 | 4 |
| 10 | 85 | 5 |

Recovered `DilutionFraction` table:

| Level | Attack1 | Attack2 | Attack3 | Attack4 |
| ---: | ---: | ---: | ---: | ---: |
| 1 | 1 | 0 | 0 | 0 |
| 2 | 0.75 | 0.25 | 0 | 0 |
| 3 | 0.5 | 0.5 | 0 | 0 |
| 4 | 0.25 | 0.75 | 0 | 0 |
| 5 | 0 | 1 | 0 | 0 |
| 6 | 0 | 0.75 | 0.25 | 0 |
| 7 | 0 | 0.5 | 0.5 | 0 |
| 8 | 0 | 0 | 0.75 | 0.25 |
| 9 | 0 | 0 | 1 | 0 |
| 10 | 0 | 0 | 0.75 | 0.25 |

## Coverage Summary

- Monsters: 73
- Level snapshot rows: 329
- Monsters with preferred starting cards: 51
- Monsters with starting equipment: 14
- HP column is the post-`LevelUpDeck` HP after exact overrides or threshold deltas.
- Final deck counts are `rule_deck + recovered Attack1/Attack2/Attack3/Attack4 dilution cards`; TSV retains both `rule_deck` and `generated_attack_cards` for exact recovered order.

## Level Snapshots

### Air Elemental (`AirElemental`)

- Type: normal
- Preferred starting cards: LightningStrike
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 20 | 5 | 1 | 2 | 10x Attack2 | LightningStrike, 2x StormSlash2, 3x StormSlash1, 2x Shock, 2x ManaSurge, 10x Attack2 |
| 6 | 30 | 5 | 1 | 2 | 8x Attack2, 2x Attack3 | LightningStrike, 4x StormSlash2, StormSlash1, 2x Shock, 2x ManaSurge, 8x Attack2, 2x Attack3 |
| 7 | 40 | 5 | 1 | 2 | 7x Attack2, 6x Attack3 | LightningStrike, 6x StormSlash2, 2x Shock, 2x ManaSurge, 7x Attack2, 6x Attack3 |
| 8 | 55 | 5 | 1 | 2 | 10x Attack3, 3x Attack4 | 2x LightningStrike, 5x StormSlash2, 2x Shock, 2x ManaSurge, 10x Attack3, 3x Attack4 |
| 9 | 70 | 5 | 1 | 2 | 13x Attack3 | 2x LightningStrike, 2x StormSlash3, 3x StormSlash2, 2x Shock, 2x ManaSurge, 13x Attack3 |
| 10 | 85 | 5 | 1 | 2 | 12x Attack3, 3x Attack4 | 2x LightningStrike, 2x StormSlash3, 3x StormSlash2, 2x Shock, 2x ManaSurge, Zap, 12x Attack3, 3x Attack4 |

### Akami Ascendant (`AkamiAscendent`)

- Type: boss
- Preferred starting cards: -
- Starting equipment: ManaTotem, HasteTotem, ShockTotem
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 30 | 5 | 2 | 1 | 2x Attack1, 3x Attack2 | ManaTotem, HasteTotem, ShockTotem, 2x ThunderStorm, 2x Slow, 3x Mana3, 2x Attack1, 3x Attack2 |
| 5 | 40 | 5 | 2 | 1 | 8x Attack2 | ManaTotem, HasteTotem, ShockTotem, 2x ThunderStorm, 2x Slow, ManaSurge, Overload, Mana3, 8x Attack2 |
| 6 | 60 | 5 | 2 | 1 | 6x Attack2, 2x Attack3 | ManaTotem, HasteTotem, ShockTotem, 2x ThunderStorm, 2x Slow, ManaSurge, Overload, Electrocute, Solidify, Shock, 6x Attack2, 2x Attack3 |
| 7 | 80 | 5 | 2 | 1 | 5x Attack2, 5x Attack3 | ManaTotem, HasteTotem, ShockTotem, 2x ThunderStorm, 2x Slow, ManaSurge, Overload, Electrocute, Solidify, Shock, StormShape, Haste, 5x Attack2, 5x Attack3 |

### Akami Muckcaller (`AkamiMuckcaller`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: ShockTotem
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 6 | 2 | 2 | 2x Attack1, 6x Attack2 | ShockTotem, Slow, 2x ManaSurge, Shock, Blizzard, FrostBolt, 2x Attack1, 6x Attack2 |
| 5 | 20 | 6 | 2 | 2 | 10x Attack2 | ShockTotem, Solidify, 2x ManaSurge, Shock, Blizzard, FrostBolt, 10x Attack2 |
| 6 | 30 | 6 | 2 | 2 | 8x Attack2, 2x Attack3 | ShockTotem, Solidify, 2x ManaSurge, Shock, 2x Blizzard, FrostBolt, FrostCharge, 8x Attack2, 2x Attack3 |
| 7 | 40 | 6 | 2 | 2 | 7x Attack2, 6x Attack3 | 2x ShockTotem, Solidify, 2x ManaSurge, Shock, 2x Blizzard, FrostBolt, FrostCharge, 7x Attack2, 6x Attack3 |

### Akami Shaman (`AkamiShaman`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: ManaTotem
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 2 | 2 | 5x Attack1 | ManaTotem, 2x Fireball, 4x Mana2, 2x Slow, 5x Attack1 |
| 2 | 7 | 0 | 2 | 2 | 4x Attack1, Attack2 | ManaTotem, 2x Fireball, 2x Salve, 2x Mana2, 2x Slow, 4x Attack1, Attack2 |
| 3 | 10 | 0 | 2 | 2 | 4x Attack1, 4x Attack2 | ManaTotem, 2x Fireball, 2x Salve, FlameCharge, Mana2, Solidify, Slow, 4x Attack1, 4x Attack2 |
| 4 | 15 | 0 | 2 | 2 | 2x Attack1, 6x Attack2 | ManaTotem, 2x Fireball, 2x Salve, 2x FlameCharge, Solidify, Slow, 2x Attack1, 6x Attack2 |

### Akami Stormcaller (`AkamiStormcaller`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: HasteTotem
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 0 | 2 | 2 | 3x Attack1, 9x Attack2 | HasteTotem, 2x StormStab, Dice, 3x Attack1, 9x Attack2 |
| 5 | 20 | 0 | 2 | 2 | 14x Attack2 | HasteTotem, 2x StormStab, Dice, 14x Attack2 |
| 6 | 30 | 0 | 2 | 2 | 11x Attack2, 3x Attack3 | HasteTotem, 3x StormStab, Dice, 11x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 2 | 2 | 9x Attack2, 8x Attack3 | HasteTotem, 3x StormStab, Dice, 9x Attack2, 8x Attack3 |

### Banshee (`Banshee`)

- Type: normal
- Preferred starting cards: Scream
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 20 | 0 | 1 | 2 | 13x Attack2 | 3x Scream, 2x DrainLife, 13x Attack2 |
| 6 | 30 | 0 | 1 | 2 | 10x Attack2, 3x Attack3 | 3x Scream, 3x DrainLife, 10x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 1 | 2 | 8x Attack2, 8x Attack3 | 3x Scream, 3x DrainLife, 8x Attack2, 8x Attack3 |

### Shadow Dragon (`BlackDragon`)

- Type: normal
- Preferred starting cards: AcidBreath, DragonScales2, DragonScales
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 8 | 55 | 0 | 1 | 2 | 10x Attack3, 3x Attack4 | 6x Infect3, 3x AcidBreath, 2x DragonScales, 3x DragonsRoar, 10x Attack3, 3x Attack4 |
| 9 | 70 | 0 | 1 | 2 | 13x Attack3 | 6x Infect3, 3x AcidBreath, DragonScales2, 3x DragonsRoar, DragonScales, 13x Attack3 |
| 10 | 85 | 0 | 1 | 2 | 12x Attack3, 3x Attack4 | 6x Infect3, 3x AcidBreath, 2x DragonScales2, 4x DragonsRoar, 12x Attack3, 3x Attack4 |

### Brownie (`Brownie`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 9x Attack2 | 3x SpriteStab, 2x Counterspell, 4x Attack1, 9x Attack2 |
| 5 | 20 | 0 | 1 | 2 | 15x Attack2 | 3x SpriteStab, 2x Counterspell, 15x Attack2 |
| 6 | 30 | 0 | 1 | 2 | 12x Attack2, 3x Attack3 | 3x SpriteStab, 2x Counterspell, 12x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 1 | 2 | 9x Attack2, 9x Attack3 | 3x SpriteStab, 2x Counterspell, 9x Attack2, 9x Attack3 |

### Chromatic Demon (`ChromaticDemon`)

- Type: boss
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 80 | 5 | 2 | 3 | 8x Attack2, 7x Attack3 | FlameCharge, FrostCharge, VileCharge, StaticCharge, Fireball, FrostBolt, Shock, AcidLance, EarthShape, FrostShape, FireShape, StormShape, FlameSlash3, FrostSlash3, StormSlash3, CorrosiveSlash3, 2x ManaSurge, Electrocute, Meteor, Blizzard, AcidRain, 8x Attack2, 7x Attack3 |
| 8 | 110 | 5 | 2 | 3 | 12x Attack3, 3x Attack4 | FlameCharge, FrostCharge, VileCharge, StaticCharge, Fireball, FrostBolt, Shock, AcidLance, EarthShape, FrostShape, FireShape, StormShape, FlameSlash3, FrostSlash3, StormSlash3, CorrosiveSlash3, 2x ManaSurge, Electrocute, Meteor, Blizzard, AcidRain, Inspiration, 12x Attack3, 3x Attack4 |
| 9 | 140 | 5 | 2 | 3 | 15x Attack3 | FlameCharge, FrostCharge, VileCharge, StaticCharge, Fireball, FrostBolt, Shock, AcidLance, EarthShape, FrostShape, FireShape, StormShape, FlameSlash3, FrostSlash3, StormSlash3, CorrosiveSlash3, 2x ManaSurge, Electrocute, Meteor, Blizzard, AcidRain, Inspiration, Freeze, Conflagration, Storm, Blight, 15x Attack3 |
| 10 | 170 | 5 | 2 | 3 | 14x Attack3, 4x Attack4 | FlameCharge, FrostCharge, VileCharge, StaticCharge, Fireball, FrostBolt, Shock, AcidLance, EarthShape, FrostShape, FireShape, StormShape, FlameSlash3, FrostSlash3, StormSlash3, CorrosiveSlash3, 2x ManaSurge, Electrocute, Meteor, Blizzard, AcidRain, Inspiration, Freeze, Conflagration, Storm, Blight, ManaSwell, 14x Attack3, 4x Attack4 |

### Clone (`Clone`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 19 | 15 | 1 | 2 | 2x Attack1, 6x Attack2 | 2x Attack1, 6x Attack2 |
| 5 | 25 | 15 | 1 | 2 | 10x Attack2 | 10x Attack2 |
| 6 | 38 | 15 | 1 | 2 | 8x Attack2, 2x Attack3 | 8x Attack2, 2x Attack3 |
| 7 | 51 | 15 | 1 | 2 | 7x Attack2, 6x Attack3 | 7x Attack2, 6x Attack3 |

### Cumulo Nimbus (`CumuloNimbus`)

- Type: boss
- Preferred starting cards: Zap
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 30 | 0 | 1 | 2 | 3x Attack1, 8x Attack2 | 2x Zap, LightningStrike, 3x Attack1, 8x Attack2 |
| 5 | 40 | 0 | 1 | 2 | 13x Attack2 | 2x Zap, LightningStrike, 13x Attack2 |
| 6 | 60 | 0 | 1 | 2 | 10x Attack2, 3x Attack3 | 2x Zap, 2x LightningStrike, 10x Attack2, 3x Attack3 |
| 7 | 80 | 0 | 1 | 2 | 8x Attack2, 8x Attack3 | 2x Zap, 3x LightningStrike, BalefulGaze, 8x Attack2, 8x Attack3 |

### Demon (`Demon`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 40 | 0 | 1 | 2 | 9x Attack2, 8x Attack3 | 3x Corrupt, 9x Attack2, 8x Attack3 |
| 8 | 55 | 0 | 1 | 2 | 13x Attack3, 4x Attack4 | 4x Corrupt, 13x Attack3, 4x Attack4 |
| 9 | 70 | 0 | 1 | 2 | 17x Attack3 | 4x Corrupt, 17x Attack3 |
| 10 | 85 | 0 | 1 | 2 | 15x Attack3, 4x Attack4 | 4x Corrupt, 15x Attack3, 4x Attack4 |

### Disciple of Chaos (`DiscipleOfChaos`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 5x Attack1 | 3x ChaosPrayer, 7x ChaosStrike, 5x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 4x Attack1, Attack2 | 3x ChaosPrayer, 7x ChaosStrike, 4x Attack1, Attack2 |
| 3 | 10 | 0 | 1 | 2 | 4x Attack1, 4x Attack2 | 3x ChaosPrayer, 7x ChaosStrike, 4x Attack1, 4x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 2x Attack1, 6x Attack2 | 3x ChaosPrayer, 7x ChaosStrike, 2x Attack1, 6x Attack2 |

### Earth Elemental (`EarthElemental`)

- Type: normal
- Preferred starting cards: 2x Infect3, Infect2, 2x Infect1
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 20 | 5 | 1 | 2 | 10x Attack2 | 6x Infect1, 2x EarthShape, 2x ManaSurge, 10x Attack2 |
| 6 | 30 | 5 | 1 | 2 | 8x Attack2, 2x Attack3 | 6x Infect1, 2x EarthShape, 2x ManaSurge, 8x Attack2, 2x Attack3 |
| 7 | 40 | 5 | 1 | 2 | 7x Attack2, 6x Attack3 | 2x Infect3, 3x Infect2, Infect1, 2x EarthShape, 2x ManaSurge, 7x Attack2, 6x Attack3 |
| 8 | 55 | 5 | 1 | 2 | 10x Attack3, 3x Attack4 | 5x Infect3, Infect1, 2x EarthShape, 2x ManaSurge, 10x Attack3, 3x Attack4 |
| 9 | 70 | 5 | 1 | 2 | 13x Attack3 | 5x Infect3, Infect1, 2x EarthShape, 2x ManaSurge, Stoneskin, 13x Attack3 |
| 10 | 85 | 5 | 1 | 2 | 12x Attack3, 3x Attack4 | 5x Infect3, Infect1, 2x EarthShape, 2x ManaSurge, Stoneskin, Solidify, 12x Attack3, 3x Attack4 |

### Efreet (`Efreet`)

- Type: normal
- Preferred starting cards: Burn2
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 90 | 0 | 1 | 2 | 9x Attack2, 9x Attack3 | 2x Scorch, 3x Burn2, 9x Attack2, 9x Attack3 |
| 8 | 123 | 0 | 1 | 2 | 14x Attack3, 4x Attack4 | 2x Scorch, 3x Burn2, 14x Attack3, 4x Attack4 |
| 9 | 157 | 0 | 1 | 2 | 18x Attack3 | 2x Scorch, 4x Burn2, 18x Attack3 |
| 10 | 191 | 0 | 1 | 2 | 15x Attack3, 5x Attack4 | 2x Scorch, 4x Burn2, 15x Attack3, 5x Attack4 |

### Faerie Rogue (`FaerieRogue`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 0 | 1 | 3 | 4x Attack1, 11x Attack2 | 3x Riposte, 2x Disorient, 4x Attack1, 11x Attack2 |
| 5 | 20 | 0 | 1 | 3 | 18x Attack2 | 3x Riposte, 2x Disorient, 18x Attack2 |
| 6 | 30 | 0 | 1 | 3 | 14x Attack2, 4x Attack3 | 3x Riposte, 2x Disorient, 14x Attack2, 4x Attack3 |
| 7 | 40 | 0 | 1 | 3 | 10x Attack2, 10x Attack3 | 3x Riposte, 2x Disorient, 10x Attack2, 10x Attack3 |

### Fire Elemental (`FireElemental`)

- Type: normal
- Preferred starting cards: FlameStrike
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 20 | 5 | 1 | 2 | 10x Attack2 | FlameStrike, 3x FlameSlash1, 2x FireShape, 2x ManaSurge, 10x Attack2 |
| 6 | 30 | 5 | 1 | 2 | 8x Attack2, 2x Attack3 | FlameStrike, 3x FlameSlash1, 2x FireShape, 2x ManaSurge, 8x Attack2, 2x Attack3 |
| 7 | 40 | 5 | 1 | 2 | 7x Attack2, 6x Attack3 | FlameStrike, 6x FlameSlash2, 2x FireShape, 2x ManaSurge, 7x Attack2, 6x Attack3 |
| 8 | 55 | 5 | 1 | 2 | 10x Attack3, 3x Attack4 | 2x FlameStrike, 5x FlameSlash2, 2x FireShape, 2x ManaSurge, 10x Attack3, 3x Attack4 |
| 9 | 70 | 5 | 1 | 2 | 13x Attack3 | 2x FlameStrike, 2x FlameSlash3, 2x FireShape, 2x ManaSurge, 3x FlameSlash2, 13x Attack3 |
| 10 | 85 | 5 | 1 | 2 | 12x Attack3, 3x Attack4 | 2x FlameStrike, 2x FlameSlash3, 2x FireShape, 2x ManaSurge, 2x Meteor, 2x FlameSlash2, 12x Attack3, 3x Attack4 |

### Gelatinous Cube (`GelatinousCube`)

- Type: boss
- Preferred starting cards: Resilience
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 45 | 0 | 1 | 2 | 3x Attack1, 9x Attack2 | 3x Slurp, 3x Attack1, 9x Attack2 |
| 5 | 60 | 0 | 1 | 2 | 14x Attack2 | 3x Slurp, 14x Attack2 |
| 6 | 90 | 0 | 1 | 2 | 11x Attack2, 3x Attack3 | 3x Slurp, Resilience, Engulf, 11x Attack2, 3x Attack3 |
| 7 | 120 | 0 | 1 | 2 | 9x Attack2, 8x Attack3 | 3x Slurp, Resilience, Engulf, 9x Attack2, 8x Attack3 |

### Genie (`Genie`)

- Type: boss
- Preferred starting cards: BadWishes, BadWishes2
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 30 | 5 | 1 | 2 | 2x Attack1, 6x Attack2 | 2x BadWishes, Mana2, ManaSurge, Haste, Ward, Wisdom, 2x Attack1, 6x Attack2 |
| 5 | 40 | 5 | 1 | 2 | 10x Attack2 | 2x BadWishes, 2x ManaSurge, Haste, 2x Ward, Wisdom, 10x Attack2 |
| 6 | 60 | 5 | 1 | 2 | 8x Attack2, 2x Attack3 | 2x BadWishes2, 2x ManaSurge, Haste, 2x Ward, Wisdom, VaporForm, Shock, 8x Attack2, 2x Attack3 |
| 7 | 80 | 5 | 1 | 2 | 7x Attack2, 6x Attack3 | 3x BadWishes2, 2x ManaSurge, Haste, 2x Ward, Wisdom, VaporForm, Shock, Soulfire, 7x Attack2, 6x Attack3 |

### Ghost (`Ghost`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: CloakOfInvisibility
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 20 | 0 | 1 | 2 | 12x Attack2 | 2x Hide, 12x Attack2 |
| 6 | 30 | 0 | 1 | 2 | 9x Attack2, 3x Attack3 | 2x Hide, 9x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 1 | 2 | 8x Attack2, 7x Attack3 | 2x Hide, Exhaustion, 8x Attack2, 7x Attack3 |
| 8 | 55 | 0 | 1 | 2 | 12x Attack3, 3x Attack4 | 2x Hide, Exhaustion, 12x Attack3, 3x Attack4 |
| 9 | 70 | 0 | 1 | 2 | 15x Attack3 | 2x Hide, Exhaustion, CloakOfInvisibility, 15x Attack3 |
| 10 | 85 | 0 | 1 | 2 | 13x Attack3, 4x Attack4 | 2x Hide, Exhaustion, CloakOfInvisibility, Anticipate, 13x Attack3, 4x Attack4 |

### Ghoul (`Ghoul`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 0 | 1 | 4 | 5x Attack1, 13x Attack2 | 2x Ravage, 5x Attack1, 13x Attack2 |
| 5 | 20 | 0 | 1 | 4 | 20x Attack2 | 2x Ravage, 20x Attack2 |
| 6 | 30 | 0 | 1 | 4 | 15x Attack2, 5x Attack3 | 3x Ravage, 15x Attack2, 5x Attack3 |
| 7 | 40 | 0 | 1 | 4 | 12x Attack2, 11x Attack3 | 3x Ravage, 12x Attack2, 11x Attack3 |

### Giant Shark (`GiantShark`)

- Type: boss
- Preferred starting cards: SharkBite, SharkBite2
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 33 | 0 | 1 | 2 | 3x Attack1, 7x Attack2 | 2x SharkBite, 2x Thrash, 3x Attack1, 7x Attack2 |
| 5 | 45 | 0 | 1 | 2 | 12x Attack2 | 2x SharkBite, 3x Thrash, Execute, 12x Attack2 |
| 6 | 67 | 0 | 1 | 2 | 9x Attack2, 3x Attack3 | 2x SharkBite, 4x Thrash, Execute, 9x Attack2, 3x Attack3 |
| 7 | 90 | 0 | 1 | 2 | 8x Attack2, 7x Attack3 | 3x SharkBite, 4x Thrash, Execute, 8x Attack2, 7x Attack3 |
| 8 | 123 | 0 | 1 | 2 | 12x Attack3, 3x Attack4 | 3x SharkBite, 5x Thrash, Execute, 12x Attack3, 3x Attack4 |
| 9 | 157 | 0 | 1 | 2 | 15x Attack3 | 3x SharkBite, 6x Thrash, Execute, 15x Attack3 |
| 10 | 191 | 0 | 1 | 2 | 13x Attack3, 4x Attack4 | 3x SharkBite2, 6x Thrash, Execute, 13x Attack3, 4x Attack4 |

### Giant Spider (`GiantSpider`)

- Type: normal
- Preferred starting cards: Sting, Web
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 8x Attack1 | 3x Sting, 3x Web, 8x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 6x Attack1, 2x Attack2 | 3x Sting, 3x Web, 6x Attack1, 2x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 6x Attack1, 5x Attack2 | 3x Sting, 3x Web, 6x Attack1, 5x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 3x Attack1, 8x Attack2 | 3x Sting, Web2, 2x Web, 3x Attack1, 8x Attack2 |

### Kraken (`GiantSquid`)

- Type: boss
- Preferred starting cards: Entrap
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 80 | 0 | 1 | 2 | 9x Attack2, 8x Attack3 | Entrap, 9x Attack2, 8x Attack3 |
| 8 | 110 | 0 | 1 | 2 | 13x Attack3, 4x Attack4 | Entrap, 13x Attack3, 4x Attack4 |
| 9 | 140 | 0 | 1 | 2 | 17x Attack3 | Entrap, 17x Attack3 |
| 10 | 170 | 0 | 1 | 2 | 15x Attack3, 4x Attack4 | Entrap, 15x Attack3, 4x Attack4 |

### Goblin (`Goblin`)

- Type: normal
- Preferred starting cards: GoblinAlly
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 14x Attack1 | GoblinAlly, 14x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 11x Attack1, 3x Attack2 | 2x GoblinAlly, 11x Attack1, 3x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 9x Attack1, 8x Attack2 | 2x GoblinAlly, 9x Attack1, 8x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 5x Attack1, 12x Attack2 | 3x GoblinAlly, 5x Attack1, 12x Attack2 |

### Goblin Hoarder (`GoblinHoarder`)

- Type: normal
- Preferred starting cards: Hide, Cower
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 3 | 10 | 0 | 2 | 2 | 8x Attack1, 8x Attack2 | 4x Cower, 10x Attack2, 8x Attack1 |
| 4 | 15 | 0 | 2 | 2 | 4x Attack1, 12x Attack2 | 6x Cower, 14x Attack2, 4x Attack1 |
| 5 | 20 | 0 | 2 | 2 | 18x Attack2 | 6x Cower, 20x Attack2, Exhaustion |
| 6 | 30 | 0 | 2 | 2 | 14x Attack2, 4x Attack3 | 6x Cower, 16x Attack2, Exhaustion, Hide, 4x Attack3 |

### Goblin King (`GoblinKing`)

- Type: boss
- Preferred starting cards: 2x GoblinLackey
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 37 | 0 | 1 | 1 | 4x Attack1, 9x Attack2 | 3x GoblinBomb, 4x Attack1, 9x Attack2 |
| 5 | 50 | 0 | 1 | 1 | 16x Attack2 | 3x GoblinBomb, 16x Attack2 |
| 6 | 75 | 0 | 1 | 1 | 12x Attack2, 4x Attack3 | 3x GoblinBomb, Overpower, 12x Attack2, 4x Attack3 |
| 7 | 100 | 0 | 1 | 1 | 9x Attack2, 9x Attack3 | 3x GoblinBomb, Overpower, 9x Attack2, 9x Attack3 |

### Goblin Mechanist (`GoblinMechanist`)

- Type: normal
- Preferred starting cards: GoblinAlly
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 12x Attack2 | GoblinAlly, 4x Attack1, 12x Attack2 |
| 5 | 20 | 0 | 1 | 2 | 18x Attack2 | GoblinAlly, 18x Attack2 |
| 6 | 30 | 0 | 1 | 2 | 14x Attack2, 4x Attack3 | GoblinAlly, 14x Attack2, 4x Attack3 |
| 7 | 40 | 0 | 1 | 2 | 11x Attack2, 10x Attack3 | GoblinAlly, 11x Attack2, 10x Attack3 |

### Griffon (`Griffon`)

- Type: normal
- Preferred starting cards: Fly
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 10x Attack1 | 2x Fly, 10x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 8x Attack1, 2x Attack2 | 2x Fly, 8x Attack1, 2x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 7x Attack1, 6x Attack2 | 2x Fly, 7x Attack1, 6x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 9x Attack2 | 2x Fly, 4x Attack1, 9x Attack2 |

### Hag (`Hag`)

- Type: normal
- Preferred starting cards: CurseOfDoom, CurseOfDoom2, DeadlyCurse
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 60 | 0 | 1 | 2 | 9x Attack2, 9x Attack3 | CurseOfDoom, 3x DeadlyCurse, 9x Attack2, 9x Attack3 |
| 8 | 82 | 0 | 1 | 2 | 14x Attack3, 4x Attack4 | CurseOfDoom, 3x DeadlyCurse, 14x Attack3, 4x Attack4 |
| 9 | 105 | 0 | 1 | 2 | 18x Attack3 | CurseOfDoom2, 3x DeadlyCurse, 18x Attack3 |
| 10 | 127 | 0 | 1 | 2 | 15x Attack3, 5x Attack4 | CurseOfDoom2, 3x DeadlyCurse, 15x Attack3, 5x Attack4 |

### Hand of Glory (`HandOfGlory`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 40 | 0 | 1 | 2 | 9x Attack2, 8x Attack3 | Resilience, 9x Attack2, 8x Attack3 |
| 8 | 55 | 0 | 1 | 2 | 13x Attack3, 4x Attack4 | Resilience, 13x Attack3, 4x Attack4 |
| 9 | 70 | 0 | 1 | 2 | 17x Attack3 | 2x Resilience, 17x Attack3 |
| 10 | 85 | 0 | 1 | 2 | 15x Attack3, 4x Attack4 | 2x Resilience, 15x Attack3, 4x Attack4 |

### Harpy (`Harpy`)

- Type: normal
- Preferred starting cards: Sting
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 0 | 2 | 3 | 3x Attack1, 7x Attack2 | 4x Sting, 2x Screech, 3x Disorient, 3x Infect2, 3x Attack1, 7x Attack2 |
| 5 | 20 | 0 | 2 | 3 | 13x Attack2 | 4x Sting, 2x Screech, 3x Disorient, 3x Infect2, 13x Attack2 |
| 6 | 30 | 0 | 2 | 3 | 10x Attack2, 3x Attack3 | 4x Sting, 2x Screech, 3x Disorient, 3x Infect2, 10x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 2 | 3 | 8x Attack2, 7x Attack3 | 4x Sting, 2x Screech, 3x Disorient, 3x Infect2, 8x Attack2, 7x Attack3 |

### Hydra (`Hydra`)

- Type: boss
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult, then exact LevelUpDeck override

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 90 | 0 | 1 | 2 | 12x Attack2, 11x Attack3 | 12x Attack2, 11x Attack3 |
| 8 | 110 | 0 | 1 | 2 | 18x Attack3, 5x Attack4 | 18x Attack3, 5x Attack4 |
| 9 | 140 | 0 | 1 | 2 | 23x Attack3 | 23x Attack3 |
| 10 | 150 | 0 | 1 | 2 | 19x Attack3, 6x Attack4 | 19x Attack3, 6x Attack4 |

### Ice Queen (`IceQueen`)

- Type: boss
- Preferred starting cards: FrostShape
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 90 | 5 | 1 | 2 | 7x Attack2, 6x Attack3 | 3x FrostShape, 3x Blizzard, Freeze, 7x Attack2, 6x Attack3 |
| 8 | 123 | 5 | 1 | 2 | 10x Attack3, 3x Attack4 | 3x FrostShape, 3x Blizzard, Freeze, 10x Attack3, 3x Attack4 |
| 9 | 157 | 5 | 1 | 2 | 13x Attack3 | 3x FrostShape, 3x Blizzard, Freeze, 13x Attack3 |
| 10 | 191 | 5 | 1 | 2 | 12x Attack3, 3x Attack4 | 3x FrostShape, 3x Blizzard, Freeze, 12x Attack3, 3x Attack4 |

### Kobold (`Kobold`)

- Type: normal
- Preferred starting cards: Cower
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 12x Attack1 | 3x Cower, 12x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 9x Attack1, 3x Attack2 | 3x Cower, 9x Attack1, 3x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 8x Attack1, 7x Attack2 | 3x Cower, 8x Attack1, 7x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 11x Attack2 | 3x Cower, 4x Attack1, 11x Attack2 |

### Lich (`Lich`)

- Type: boss
- Preferred starting cards: Fireball
- Starting equipment: Phylactery
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 80 | 5 | 1 | 2 | 7x Attack2, 6x Attack3 | Phylactery, 2x ManaSurge, Shrink, 3x Fireball, 2x Wisdom, Staff, DarkMending, Soulfire, 7x Attack2, 6x Attack3 |
| 8 | 110 | 5 | 1 | 2 | 10x Attack3, 3x Attack4 | Phylactery, 3x ManaSurge, Shrink, Meteor, 2x Fireball, Wisdom, Staff, DarkMending, Soulfire, 10x Attack3, 3x Attack4 |
| 9 | 140 | 5 | 1 | 2 | 13x Attack3 | Phylactery, 3x ManaSurge, Shrink, Meteor, FireShape, Fireball, Wisdom, Staff, DarkMending, 2x Soulfire, 13x Attack3 |
| 10 | 170 | 5 | 1 | 2 | 12x Attack3, 3x Attack4 | Phylactery, 4x ManaSurge, Shrink, Meteor, FireShape, Conflagration, Wisdom, Staff, DarkMending, 2x Soulfire, Inspiration, 12x Attack3, 3x Attack4 |

### Mage (`Mage`)

- Type: normal
- Preferred starting cards: FrostBolt
- Starting equipment: Staff, JasrasTome
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 3 | 3 | 1 | 2 | 7x Attack1 | 2x FlameCharge, 2x FrostCharge, Fireball, FrostBolt, 7x Attack1 |
| 2 | 5 | 6 | 1 | 2 | 6x Attack1, Attack2 | 2x FlameCharge, 2x FrostCharge, Fireball, FrostBolt, ManaSurge, 6x Attack1, Attack2 |
| 3 | 7 | 9 | 1 | 2 | 5x Attack1, 5x Attack2 | 2x FlameCharge, 2x FrostCharge, Fireball, FrostBolt, ManaSurge, Blur, Staff, 5x Attack1, 5x Attack2 |
| 4 | 11 | 12 | 1 | 2 | 3x Attack1, 7x Attack2 | 2x FlameCharge, 2x FrostCharge, FireShape, 2x FrostBolt, ManaSurge, 2x Blur, Staff, Fireball, 3x Attack1, 7x Attack2 |
| 5 | 15 | 15 | 1 | 2 | 12x Attack2 | 2x FlameCharge, 2x FrostCharge, FireShape, 2x FrostBolt, ManaSurge, 2x Blur, Staff, Meteor, Blizzard, 12x Attack2 |
| 6 | 22 | 18 | 1 | 2 | 9x Attack2, 3x Attack3 | 2x FlameCharge, 2x FrostCharge, FireShape, 2x FrostBolt, 2x ManaSurge, 2x Blur, Staff, Meteor, Blizzard, Inspiration, 9x Attack2, 3x Attack3 |
| 7 | 30 | 21 | 1 | 2 | 8x Attack2, 7x Attack3 | 2x FlameCharge, 2x FrostCharge, FireShape, 2x FrostBolt, 2x ManaSurge, 2x Blur, Staff, Meteor, 2x Blizzard, Inspiration, 8x Attack2, 7x Attack3 |
| 8 | 41 | 24 | 1 | 2 | 12x Attack3, 3x Attack4 | 2x FlameCharge, 2x FrostCharge, FireShape, 2x FrostBolt, 2x ManaSurge, 2x Blur, Staff, Meteor, 2x Blizzard, Inspiration, JasrasTome, Freeze, 12x Attack3, 3x Attack4 |
| 9 | 52 | 27 | 1 | 2 | 15x Attack3 | 2x FlameCharge, 2x FrostCharge, FireShape, 2x FrostBolt, 2x ManaSurge, 2x Blur, Staff, Meteor, 2x Blizzard, Inspiration, JasrasTome, Freeze, ManaSwell, JasrasEmerald, 15x Attack3 |
| 10 | 63 | 30 | 1 | 2 | 13x Attack3, 4x Attack4 | 2x FlameCharge, 2x FrostCharge, FireShape, 2x FrostBolt, 2x ManaSurge, 2x Blur, Staff, Meteor, 2x Blizzard, Inspiration, JasrasTome, Freeze, ManaSwell, JasrasEmerald, Conflagration, 13x Attack3, 4x Attack4 |

### Magmadon (`Magmadon`)

- Type: boss
- Preferred starting cards: Burn, Burn2
- Starting equipment: Armor
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 30 | 0 | 1 | 2 | 3x Attack1, 8x Attack2 | 3x Burn, 3x Attack1, 8x Attack2 |
| 5 | 40 | 0 | 1 | 2 | 13x Attack2 | 3x Burn, 13x Attack2 |
| 6 | 60 | 0 | 1 | 2 | 10x Attack2, 3x Attack3 | 3x Burn, 10x Attack2, 3x Attack3 |
| 7 | 80 | 0 | 1 | 2 | 8x Attack2, 8x Attack3 | 3x Burn, 2x Stoneskin, 8x Attack2, 8x Attack3 |
| 8 | 110 | 0 | 1 | 2 | 12x Attack3, 4x Attack4 | 3x Burn, 2x Stoneskin, 12x Attack3, 4x Attack4 |
| 9 | 140 | 0 | 1 | 2 | 16x Attack3 | 2x Burn2, Burn, 2x Stoneskin, 16x Attack3 |
| 10 | 170 | 0 | 1 | 2 | 14x Attack3, 4x Attack4 | 2x Burn2, Burn, 2x Stoneskin, Armor, 14x Attack3, 4x Attack4 |

### Medusa (`Medusa`)

- Type: normal
- Preferred starting cards: Stone
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 0 | 2 | 2 | 4x Attack1, 9x Attack2 | 4x Stone, 2x Gaze, 4x Attack1, 9x Attack2 |
| 5 | 20 | 0 | 2 | 2 | 15x Attack2 | 4x Stone, 2x Gaze, 15x Attack2 |
| 6 | 30 | 0 | 2 | 2 | 12x Attack2, 3x Attack3 | 4x Stone, 2x Gaze, Stoneskin, 12x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 2 | 2 | 9x Attack2, 9x Attack3 | 4x Stone, 2x Gaze, Stoneskin, 9x Attack2, 9x Attack3 |

### Mime (`Mime`)

- Type: boss
- Preferred starting cards: VampireSword, Reenact
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 37 | 0 | 1 | 2 | 3x Attack1, 9x Attack2 | 5x Reenact, VampireSword, 3x Attack1, 9x Attack2 |
| 5 | 50 | 0 | 1 | 2 | 14x Attack2 | 5x Reenact, VampireSword, 14x Attack2 |
| 6 | 75 | 0 | 1 | 2 | 11x Attack2, 3x Attack3 | 5x Reenact, VampireSword, 11x Attack2, 3x Attack3 |
| 7 | 100 | 0 | 1 | 2 | 9x Attack2, 8x Attack3 | 5x Reenact, VampireSword, 9x Attack2, 8x Attack3 |

### Mimic (`MimicMonster`)

- Type: normal
- Preferred starting cards: CoinToss
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 10 | 0 | 2 | 2 | 22x Attack2 | 5x CoinToss, 2x MimicAction, 22x Attack2 |
| 6 | 15 | 0 | 2 | 2 | 17x Attack2, 5x Attack3 | 6x CoinToss, 2x MimicAction, 17x Attack2, 5x Attack3 |
| 7 | 20 | 0 | 2 | 2 | 13x Attack2, 12x Attack3 | 7x CoinToss, MimicAction2, MimicAction, 13x Attack2, 12x Attack3 |
| 8 | 27 | 0 | 2 | 2 | 19x Attack3, 6x Attack4 | 8x CoinToss, 2x MimicAction2, 19x Attack3, 6x Attack4 |
| 9 | 35 | 0 | 2 | 2 | 25x Attack3 | 9x CoinToss, 3x MimicAction2, 25x Attack3 |
| 10 | 42 | 0 | 2 | 2 | 21x Attack3, 6x Attack4 | 10x CoinToss, 3x MimicAction2, 21x Attack3, 6x Attack4 |

### Ooze (`Ooze`)

- Type: normal
- Preferred starting cards: Digest
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 10x Attack1 | 2x Digest, 10x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 8x Attack1, 2x Attack2 | 2x Digest, 8x Attack1, 2x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 7x Attack1, 6x Attack2 | 2x Digest, 7x Attack1, 6x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 9x Attack2 | 2x Digest, 4x Attack1, 9x Attack2 |

### Orc (`Orc`)

- Type: normal
- Preferred starting cards: Sword
- Starting equipment: Sword
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 13x Attack1 | Sword, 13x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 10x Attack1, 3x Attack2 | Sword, 10x Attack1, 3x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 8x Attack1, 8x Attack2 | 2x Sword, 8x Attack1, 8x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 12x Attack2 | 2x Sword, 4x Attack1, 12x Attack2 |

### Phoenix (`Phoenix`)

- Type: boss
- Preferred starting cards: Burn, Burn2
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 50 | 0 | 1 | 2 | 7x Attack2, 6x Attack3 | 4x FlameSlash2, 2x Burn, 7x Attack2, 6x Attack3 |
| 8 | 68 | 0 | 1 | 2 | 10x Attack3, 3x Attack4 | 2x FlameSlash3, 2x FlameSlash2, 2x Burn, 10x Attack3, 3x Attack4 |
| 9 | 87 | 0 | 1 | 2 | 13x Attack3 | 4x FlameSlash3, 2x Burn, 13x Attack3 |
| 10 | 106 | 0 | 1 | 2 | 12x Attack3, 3x Attack4 | 4x FlameSlash3, 2x Burn2, 12x Attack3, 3x Attack4 |

### Piranha (`Piranha`)

- Type: normal
- Preferred starting cards: SharkBite
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 10x Attack1 | SharkBite, Thrash, 10x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 8x Attack1, 2x Attack2 | SharkBite, Thrash, 8x Attack1, 2x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 7x Attack1, 6x Attack2 | 2x SharkBite, Thrash, 7x Attack1, 6x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 9x Attack2 | 2x SharkBite, Thrash, 4x Attack1, 9x Attack2 |

### Pixie (`Pixie`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 3 | 3 | 1 | 2 | 5x Attack1 | Explosion, 2x Fireball, 5x Attack1 |
| 2 | 5 | 3 | 1 | 2 | 4x Attack1, Attack2 | Explosion, 3x Fireball, 4x Attack1, Attack2 |
| 3 | 7 | 3 | 1 | 2 | 4x Attack1, 4x Attack2 | Explosion, 4x Fireball, Haste, 4x Attack1, 4x Attack2 |
| 4 | 11 | 3 | 1 | 2 | 2x Attack1, 6x Attack2 | Explosion, 4x Fireball, 2x Haste, 2x Attack1, 6x Attack2 |

### Priest (`Priest`)

- Type: normal
- Preferred starting cards: PrayerOfViolence, PrayerOfWrath, CurseOfDoomPlayer, Ward
- Starting equipment: PhoenixFeather, Pendant
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 3 | 1 | 2 | 7x Attack1 | 2x Salve, Heal, PrayerOfViolence, 7x Attack1 |
| 2 | 7 | 3 | 1 | 2 | 6x Attack1, Attack2 | 2x Salve, Heal, PrayerOfViolence, ManaSurge, PrayerOfLife, 6x Attack1, Attack2 |
| 3 | 10 | 3 | 1 | 2 | 5x Attack1, 5x Attack2 | 2x Salve, Heal, PrayerOfViolence, ManaSurge, PrayerOfLife, Haste, Piety, Pendant, 5x Attack1, 5x Attack2 |
| 4 | 15 | 3 | 1 | 2 | 3x Attack1, 7x Attack2 | 2x Salve, Heal, PrayerOfViolence, ManaSurge, PrayerOfLife, Haste, Piety, Pendant, Ward, Penance, 3x Attack1, 7x Attack2 |
| 5 | 20 | 3 | 1 | 2 | 12x Attack2 | 2x Salve, Heal, 2x PrayerOfWrath, ManaSurge, PrayerOfLife, Haste, Piety, Pendant, 2x Ward, Penance, 12x Attack2 |
| 6 | 30 | 3 | 1 | 2 | 9x Attack2, 3x Attack3 | 2x Salve, Heal, 2x PrayerOfWrath, ManaSurge, PrayerOfLife, 2x Haste, 2x Piety, Pendant, 2x Ward, Penance, Bless, 9x Attack2, 3x Attack3 |
| 7 | 40 | 3 | 1 | 2 | 8x Attack2, 7x Attack3 | 2x Salve, Heal, 2x PrayerOfWrath, ManaSurge, PrayerOfLife, 2x Haste, 2x Piety, Pendant, 2x Ward, Penance, Bless, Soulfire, CurseOfWeakness, Focus, 8x Attack2, 7x Attack3 |
| 8 | 55 | 3 | 1 | 2 | 12x Attack3, 3x Attack4 | 2x Salve, Heal, CurseOfDoomPlayer, ManaSurge, PrayerOfLife, 2x Haste, 2x Piety, Pendant, 2x Ward, Penance, PrayerOfWrath, Bless, Soulfire, CurseOfWeakness, Focus, PrayerOfSpeed, Extract, 12x Attack3, 3x Attack4 |
| 9 | 70 | 3 | 1 | 2 | 15x Attack3 | 2x Salve, Heal, CurseOfDoomPlayer, ManaSurge, PrayerOfLife, 2x Haste, 2x Piety, Pendant, 2x Ward, Penance, PrayerOfWrath, Bless, Soulfire, CurseOfWeakness, Focus, PrayerOfSpeed, Extract, PhoenixFeather, Mahamat, Inspiration, 15x Attack3 |
| 10 | 85 | 3 | 1 | 2 | 13x Attack3, 4x Attack4 | 2x Salve, Heal, CurseOfDoomPlayer, ManaSurge, PrayerOfLife, 2x Haste, 2x Piety, Pendant, 2x Ward, Penance, PrayerOfWrath, Bless, Soulfire, CurseOfWeakness, Focus, PrayerOfSpeed, Extract, PhoenixFeather, Mahamat, Inspiration, AbsorbVis, 13x Attack3, 4x Attack4 |

### Red Dragon (`RedDragon`)

- Type: normal
- Preferred starting cards: FlameBreath, DragonScales
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 80 | 0 | 1 | 3 | 8x Attack2, 7x Attack3 | 4x DragonsClaw2, 2x DragonsBite, 2x FlameBreath, 2x DragonScales, DragonsRoar, 8x Attack2, 7x Attack3 |
| 8 | 110 | 0 | 1 | 3 | 12x Attack3, 3x Attack4 | 2x DragonsClaw3, 2x DragonsClaw2, 2x DragonsBite, 2x FlameBreath, 2x DragonScales, DragonsRoar, 12x Attack3, 3x Attack4 |
| 9 | 140 | 0 | 1 | 3 | 15x Attack3 | 4x DragonsClaw3, 2x DragonsBite, 2x FlameBreath, 2x DragonScales, DragonsRoar, 15x Attack3 |
| 10 | 170 | 0 | 1 | 3 | 14x Attack3, 4x Attack4 | 4x DragonsClaw3, 2x DragonsBite, 2x FlameBreath, 2x DragonScales2, DragonsRoar, Meteor, Conflagration, 14x Attack3, 4x Attack4 |

### Revenant (`Revenant`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 40 | 0 | 1 | 2 | 9x Attack2, 8x Attack3 | 2x VampireBite2, 2x DrainLife, 9x Attack2, 8x Attack3 |
| 8 | 55 | 0 | 1 | 2 | 13x Attack3, 4x Attack4 | 2x VampireBite2, 2x DrainLife, 13x Attack3, 4x Attack4 |
| 9 | 70 | 0 | 1 | 2 | 17x Attack3 | 2x VampireBite2, 2x DrainLife, 17x Attack3 |
| 10 | 85 | 0 | 1 | 2 | 15x Attack3, 4x Attack4 | 2x VampireBite2, 2x DrainLife, 15x Attack3, 4x Attack4 |

### Siren (`Siren`)

- Type: normal
- Preferred starting cards: Beckon
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 6 | 1 | 2 | 4x Attack1, 9x Attack2 | 2x Beckon, 2x Salve, Ward, Heal, 4x Attack1, 9x Attack2 |
| 5 | 20 | 6 | 1 | 2 | 15x Attack2 | 2x Beckon, 2x Salve, Ward, Heal, 15x Attack2 |
| 6 | 30 | 6 | 1 | 2 | 12x Attack2, 3x Attack3 | 2x Beckon, 2x Salve, 2x Ward, 12x Attack2, 3x Attack3 |
| 7 | 40 | 6 | 1 | 2 | 9x Attack2, 9x Attack3 | 2x Beckon, 2x Salve, 2x Ward, Bless, 9x Attack2, 9x Attack3 |

### Skeleton (`Skeleton`)

- Type: normal
- Preferred starting cards: BoneShield2, BoneShield
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 13x Attack1 | 2x BoneShield, 13x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 10x Attack1, 3x Attack2 | 2x BoneShield, 10x Attack1, 3x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 8x Attack1, 8x Attack2 | 2x BoneShield, 8x Attack1, 8x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 12x Attack2 | 2x BoneShield2, 4x Attack1, 12x Attack2 |

### Sphinx (`Sphinx`)

- Type: normal
- Preferred starting cards: 2x Teach, Penance
- Starting equipment: -
- HP source: HealthValue * health_mult, then LevelUpDeck threshold delta

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 40 | 10 | 1 | 2 | 9x Attack2, 8x Attack3 | 4x Teach, 2x ManaSurge, 2x Fireball, 2x Penance, 9x Attack2, 8x Attack3 |
| 8 | 65 | 10 | 1 | 2 | 13x Attack3, 4x Attack4 | 4x Teach, 2x ManaSurge, 2x Fireball, 2x Penance, 13x Attack3, 4x Attack4 |
| 9 | 80 | 10 | 1 | 2 | 17x Attack3 | 4x Teach, 2x ManaSurge, 2x Fireball, 2x Penance, 17x Attack3 |
| 10 | 105 | 10 | 1 | 2 | 15x Attack3, 4x Attack4 | 4x Teach, 2x ManaSurge, 2x Fireball, 2x Penance, 15x Attack3, 4x Attack4 |

### Stone Golem (`StoneGolem`)

- Type: normal
- Preferred starting cards: Armor
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 22 | 0 | 1 | 2 | 4x Attack1, 10x Attack2 | Slam, Crush, 4x Attack1, 10x Attack2 |
| 5 | 30 | 0 | 1 | 2 | 16x Attack2 | Slam, Crush, 16x Attack2 |
| 6 | 45 | 0 | 1 | 2 | 12x Attack2, 4x Attack3 | 2x Slam, Crush, 12x Attack2, 4x Attack3 |
| 7 | 60 | 0 | 1 | 2 | 10x Attack2, 9x Attack3 | 2x Slam, Crush, 10x Attack2, 9x Attack3 |

### Storm Giant (`StormGiant`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: StormBlade, CelestialPlate
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 60 | 0 | 1 | 2 | 9x Attack2, 9x Attack3 | Slam, StormBlade, 2x Resilience, CelestialPlate, 9x Attack2, 9x Attack3 |
| 8 | 82 | 0 | 1 | 2 | 14x Attack3, 4x Attack4 | Slam, StormBlade, 2x Resilience, CelestialPlate, LightningStrike, 14x Attack3, 4x Attack4 |
| 9 | 105 | 0 | 1 | 2 | 18x Attack3 | 2x Slam, StormBlade, 2x Resilience, CelestialPlate, 2x LightningStrike, 18x Attack3 |
| 10 | 127 | 0 | 1 | 2 | 15x Attack3, 5x Attack4 | 2x Slam, StormBlade, 2x Resilience, CelestialPlate, 3x LightningStrike, 15x Attack3, 5x Attack4 |

### Thief (`Thief`)

- Type: normal
- Preferred starting cards: Slice, Circle
- Starting equipment: CloakOfInvisibility, BootsOfSpeed
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 2 | 2 | 8x Attack1 | 2x Slice, Dice, Circle, 8x Attack1 |
| 2 | 7 | 0 | 2 | 2 | 6x Attack1, 2x Attack2 | 2x Slice, Dice, Circle, Jab, 6x Attack1, 2x Attack2 |
| 3 | 10 | 0 | 2 | 2 | 6x Attack1, 5x Attack2 | 2x Slice, Dice, Circle, 2x Jab, Backstab, 6x Attack1, 5x Attack2 |
| 4 | 15 | 0 | 2 | 2 | 3x Attack1, 8x Attack2 | 2x Slice, Dice, Circle, 4x Jab, Backstab, 3x Attack1, 8x Attack2 |
| 5 | 20 | 0 | 2 | 2 | 13x Attack2 | 2x Slice, Dice, 2x Circle, 4x Jab, 2x Backstab, 13x Attack2 |
| 6 | 30 | 0 | 2 | 2 | 10x Attack2, 3x Attack3 | 2x Slice, 2x Dice, 2x Circle, 4x Jab, 2x Backstab, CloakOfInvisibility, 10x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 2 | 2 | 8x Attack2, 8x Attack3 | 2x Slice, 2x Dice, 2x Circle, 4x Jab, 3x Backstab, CloakOfInvisibility, Preparation, 8x Attack2, 8x Attack3 |
| 8 | 55 | 0 | 2 | 2 | 12x Attack3, 4x Attack4 | 2x Slice, 2x Dice, 3x Circle, 4x Jab, 3x Backstab, CloakOfInvisibility, Preparation, BootsOfSpeed, Expose, Hide, 12x Attack3, 4x Attack4 |
| 9 | 70 | 0 | 2 | 2 | 16x Attack3 | 2x Slice, 2x Dice, 3x Circle, 4x Jab, 3x Backstab, CloakOfInvisibility, Preparation, BootsOfSpeed, Expose, Hide, 16x Attack3 |
| 10 | 85 | 0 | 2 | 2 | 14x Attack3, 4x Attack4 | 2x Slice, 2x Dice, 3x Circle, 4x Jab, 3x Backstab, CloakOfInvisibility, Preparation, BootsOfSpeed, Expose, Hide, Accelerate, 14x Attack3, 4x Attack4 |

### Titan (`Titan`)

- Type: boss
- Preferred starting cards: -
- Starting equipment: StormBlade, CelestialPlate
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 100 | 0 | 1 | 2 | 9x Attack2, 9x Attack3 | 3x Slam, 2x StormBlade, 2x Resilience, Armor, 2x LightningStrike, CelestialPlate, 9x Attack2, 9x Attack3 |
| 8 | 137 | 0 | 1 | 2 | 14x Attack3, 4x Attack4 | 3x Slam, 2x StormBlade, 2x Resilience, Armor, 2x LightningStrike, CelestialPlate, 14x Attack3, 4x Attack4 |
| 9 | 175 | 0 | 1 | 2 | 18x Attack3 | 4x Slam, 2x StormBlade, 2x Resilience, Armor, 3x LightningStrike, CelestialPlate, 18x Attack3 |
| 10 | 212 | 0 | 1 | 2 | 15x Attack3, 5x Attack4 | 4x Slam, 2x StormBlade, 2x Resilience, Armor, 5x LightningStrike, CelestialPlate, Zap, 15x Attack3, 5x Attack4 |

### Treant (`Treant`)

- Type: normal
- Preferred starting cards: HardeningSap, Entangle
- Starting equipment: -
- HP source: HealthValue * health_mult, then LevelUpDeck threshold delta

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 60 | 0 | 1 | 2 | 9x Attack2, 9x Attack3 | HardeningSap, 2x Entangle, Stoneskin, 9x Attack2, 9x Attack3 |
| 8 | 97 | 0 | 1 | 2 | 14x Attack3, 4x Attack4 | HardeningSap, 2x Entangle, Stoneskin, 14x Attack3, 4x Attack4 |
| 9 | 120 | 0 | 1 | 2 | 18x Attack3 | HardeningSap, 2x Entangle, Stoneskin, 18x Attack3 |
| 10 | 157 | 0 | 1 | 2 | 15x Attack3, 5x Attack4 | HardeningSap, 2x Entangle, Stoneskin, 15x Attack3, 5x Attack4 |

### Troll (`Troll`)

- Type: normal
- Preferred starting cards: Slam
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 18 | 0 | 1 | 2 | 4x Attack1, 10x Attack2 | Slam, 4x Attack1, 10x Attack2 |
| 5 | 25 | 0 | 1 | 2 | 16x Attack2 | 2x Slam, 16x Attack2 |
| 6 | 37 | 0 | 1 | 2 | 12x Attack2, 4x Attack3 | 2x Slam, Resilience, 12x Attack2, 4x Attack3 |
| 7 | 50 | 0 | 1 | 2 | 10x Attack2, 9x Attack3 | 2x Slam, Resilience, 10x Attack2, 9x Attack3 |

### Unicorn (`Unicorn`)

- Type: boss
- Preferred starting cards: Dodge, Gore
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 30 | 0 | 1 | 2 | 2x Attack1, 6x Attack2 | 2x Gore, 2x Attack1, 6x Attack2 |
| 5 | 40 | 0 | 1 | 2 | 10x Attack2 | 4x Gore, Evasion, 10x Attack2 |
| 6 | 60 | 0 | 1 | 2 | 8x Attack2, 2x Attack3 | 4x Gore, Evasion, 8x Attack2, 2x Attack3 |
| 7 | 80 | 0 | 1 | 2 | 7x Attack2, 6x Attack3 | 4x Gore, Evasion, 7x Attack2, 6x Attack3 |

### Ussuri Hunter (`UssuriHunter`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 15 | 0 | 2 | 3 | 4x Attack1, 11x Attack2 | 3x Claw, Shred, Pounce, 4x Attack1, 11x Attack2 |
| 5 | 20 | 0 | 2 | 3 | 18x Attack2 | 3x Claw, Shred, 2x Pounce, 18x Attack2 |
| 6 | 30 | 0 | 2 | 3 | 14x Attack2, 4x Attack3 | 3x Claw, 2x Shred, 2x Pounce, 14x Attack2, 4x Attack3 |
| 7 | 40 | 0 | 2 | 3 | 10x Attack2, 10x Attack3 | 4x Claw, 2x Shred, 2x Pounce, 10x Attack2, 10x Attack3 |

### Ussuri Tracker (`UssuriTracker`)

- Type: normal
- Preferred starting cards: Pounce
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 2 | 2 | 10x Attack1 | 3x Claw, Shred, Pounce, 10x Attack1 |
| 2 | 7 | 0 | 2 | 2 | 8x Attack1, 2x Attack2 | 4x Claw, Shred, Pounce, 8x Attack1, 2x Attack2 |
| 3 | 10 | 0 | 2 | 2 | 7x Attack1, 6x Attack2 | 4x Claw, 2x Shred, Pounce, 7x Attack1, 6x Attack2 |
| 4 | 15 | 0 | 2 | 2 | 4x Attack1, 9x Attack2 | 4x Claw, 2x Shred, 2x Pounce, 4x Attack1, 9x Attack2 |

### Ussuri Ambusher (`UssuriTrickster`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 20 | 0 | 2 | 2 | 15x Attack2 | 4x Claw, Shred, Pounce, 15x Attack2 |
| 6 | 30 | 0 | 2 | 2 | 12x Attack2, 3x Attack3 | 4x Claw, 2x Shred, Pounce, 12x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 2 | 2 | 9x Attack2, 9x Attack3 | 4x Claw, 2x Shred, 2x Pounce, 9x Attack2, 9x Attack3 |

### Ussuri War Queen (`UssuriWarQueen`)

- Type: boss
- Preferred starting cards: Pounce
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 30 | 0 | 2 | 3 | 4x Attack1, 11x Attack2 | 3x Claw, Shred, Pounce, 4x Attack1, 11x Attack2 |
| 5 | 40 | 0 | 2 | 3 | 18x Attack2 | 3x Claw, Shred, Pounce, 18x Attack2 |
| 6 | 60 | 0 | 2 | 3 | 14x Attack2, 4x Attack3 | 5x Claw, Shred, Pounce, 14x Attack2, 4x Attack3 |
| 7 | 80 | 0 | 2 | 3 | 10x Attack2, 10x Attack3 | 5x Claw, 2x Shred, 2x Pounce, 10x Attack2, 10x Attack3 |

### Vampire (`Vampire`)

- Type: boss
- Preferred starting cards: Enthrall
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 4 | 30 | 10 | 2 | 2 | 2x Attack1, 6x Attack2 | 5x VampireBite, 2x Enthrall, 2x Attack1, 6x Attack2 |
| 5 | 40 | 10 | 2 | 2 | 10x Attack2 | 2x VampireBite2, 3x VampireBite, 2x Enthrall, 10x Attack2 |
| 6 | 60 | 10 | 2 | 2 | 8x Attack2, 2x Attack3 | 5x VampireBite2, 2x Enthrall, 8x Attack2, 2x Attack3 |
| 7 | 80 | 10 | 2 | 2 | 7x Attack2, 6x Attack3 | 5x VampireBite2, 3x Enthrall, 7x Attack2, 6x Attack3 |

### Vampire Bat (`VampireBat`)

- Type: normal
- Preferred starting cards: VampireBite
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 1 | 2 | 10x Attack1 | 3x VampireBite, 10x Attack1 |
| 2 | 7 | 0 | 1 | 2 | 8x Attack1, 2x Attack2 | 3x VampireBite, 8x Attack1, 2x Attack2 |
| 3 | 10 | 0 | 1 | 2 | 7x Attack1, 6x Attack2 | 3x VampireBite, 7x Attack1, 6x Attack2 |
| 4 | 15 | 0 | 1 | 2 | 4x Attack1, 9x Attack2 | 3x VampireBite, 4x Attack1, 9x Attack2 |

### Warrior (`Warrior`)

- Type: normal
- Preferred starting cards: Sword, SunderingStrike, Armor
- Starting equipment: Sword, Scimitars, Shield
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 5 | 0 | 1 | 2 | 11x Attack1 | Shield, Hamstring, Gag, 11x Attack1 |
| 2 | 8 | 0 | 1 | 2 | 9x Attack1, 2x Attack2 | Shield, Hamstring, Gag, 9x Attack1, 2x Attack2 |
| 3 | 12 | 0 | 1 | 2 | 7x Attack1, 7x Attack2 | Shield, Hamstring, Gag, Sword, 7x Attack1, 7x Attack2 |
| 4 | 18 | 0 | 1 | 2 | 4x Attack1, 10x Attack2 | Shield, 2x Hamstring, Gag, Sword, Crush, 4x Attack1, 10x Attack2 |
| 5 | 25 | 0 | 1 | 2 | 16x Attack2 | Shield, 2x Hamstring, Gag, Sword, Crush, Disorient, Riposte, 16x Attack2 |
| 6 | 37 | 0 | 1 | 2 | 12x Attack2, 4x Attack3 | Shield, 2x Hamstring, Gag, Sword, Crush, Disorient, Riposte, BattleCry, Armor, 12x Attack2, 4x Attack3 |
| 7 | 50 | 0 | 1 | 2 | 10x Attack2, 9x Attack3 | Shield, 2x Hamstring, Gag, Sword, Crush, Disorient, Riposte, BattleCry, Armor, Overpower, Pierce2, 10x Attack2, 9x Attack3 |
| 8 | 68 | 0 | 1 | 2 | 15x Attack3, 4x Attack4 | Shield, 2x Hamstring, Gag, Sword, Crush, Disorient, Riposte, BattleCry, Armor, Overpower, 2x Pierce2, Scimitars, 15x Attack3, 4x Attack4 |
| 9 | 87 | 0 | 1 | 2 | 19x Attack3 | Shield, 2x Hamstring, Gag, Sword, Crush, Disorient, Riposte, BattleCry, Armor, Overpower, 2x Pierce2, Scimitars, SunderingStrike, ShieldBash, 19x Attack3 |
| 10 | 106 | 0 | 1 | 2 | 16x Attack3, 5x Attack4 | Shield, 2x Hamstring, Gag, Sword, Crush, Disorient, Riposte, BattleCry, Armor, Overpower, 2x Pierce2, Scimitars, SunderingStrike, ShieldBash, Pierce3, 16x Attack3, 5x Attack4 |

### Water Elemental (`WaterElemental`)

- Type: normal
- Preferred starting cards: Suffocate
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 20 | 5 | 1 | 2 | 10x Attack2 | Suffocate, 5x FrostSlash1, 2x FrostBolt, 2x ManaSurge, 10x Attack2 |
| 6 | 30 | 5 | 1 | 2 | 8x Attack2, 2x Attack3 | Suffocate, 4x FrostSlash2, FrostSlash1, 2x FrostBolt, 2x ManaSurge, 8x Attack2, 2x Attack3 |
| 7 | 40 | 5 | 1 | 2 | 7x Attack2, 6x Attack3 | Suffocate, 6x FrostSlash2, 2x FrostBolt, 2x ManaSurge, 7x Attack2, 6x Attack3 |
| 8 | 55 | 5 | 1 | 2 | 10x Attack3, 3x Attack4 | Suffocate, LightningStrike, 5x FrostSlash2, 2x FrostBolt, 2x ManaSurge, 10x Attack3, 3x Attack4 |
| 9 | 70 | 5 | 1 | 2 | 13x Attack3 | Suffocate, LightningStrike, 2x FrostSlash3, 3x FrostSlash2, 2x FrostBolt, 2x ManaSurge, 13x Attack3 |
| 10 | 85 | 5 | 1 | 2 | 12x Attack3, 3x Attack4 | 2x Suffocate, LightningStrike, 2x FrostSlash3, FrostShape, 2x FrostSlash2, 2x FrostBolt, 2x ManaSurge, 12x Attack3, 3x Attack4 |

### White Dragon (`WhiteDragon`)

- Type: normal
- Preferred starting cards: FrostBreath, DragonScales2, DragonScales
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 40 | 20 | 1 | 2 | 7x Attack2, 6x Attack3 | DragonsWisdom, FrostShape, DragonsBite, 2x FrostBreath, 2x DragonScales, 7x Attack2, 6x Attack3 |
| 8 | 55 | 20 | 1 | 2 | 10x Attack3, 3x Attack4 | DragonsWisdom, FrostShape, DragonsBite, 2x FrostBreath, 2x DragonScales, 2x DragonsClaw3, 10x Attack3, 3x Attack4 |
| 9 | 70 | 20 | 1 | 2 | 13x Attack3 | DragonsWisdom, FrostShape, DragonsBite, 2x FrostBreath, 2x DragonScales, 4x DragonsClaw3, 13x Attack3 |
| 10 | 85 | 20 | 1 | 2 | 12x Attack3, 3x Attack4 | DragonsWisdom, FrostShape, DragonsBite, 2x FrostBreath, 2x DragonScales2, 4x DragonsClaw3, Blizzard, 12x Attack3, 3x Attack4 |

### Wisp (`Wisp`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 15 | 6 | 1 | 2 | 10x Attack2 | 3x Mana3, 2x Shock, Discharge, 10x Attack2 |
| 6 | 22 | 6 | 1 | 2 | 8x Attack2, 2x Attack3 | Wisdom, 2x Mana3, 2x Shock, Discharge, 8x Attack2, 2x Attack3 |
| 7 | 30 | 6 | 1 | 2 | 7x Attack2, 6x Attack3 | 2x Wisdom, Mana3, 2x Shock, Discharge, 7x Attack2, 6x Attack3 |

### Wraith (`Wraith`)

- Type: normal
- Preferred starting cards: -
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 5 | 20 | 0 | 1 | 2 | 15x Attack2 | 2x SoulCrush, 15x Attack2 |
| 6 | 30 | 0 | 1 | 2 | 12x Attack2, 3x Attack3 | 3x SoulCrush, 12x Attack2, 3x Attack3 |
| 7 | 40 | 0 | 1 | 2 | 9x Attack2, 9x Attack3 | 3x SoulCrush, 9x Attack2, 9x Attack3 |

### Wyvern (`Wyvern`)

- Type: normal
- Preferred starting cards: Sting
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 4 | 0 | 2 | 2 | 8x Attack1 | 3x Sting, 3x Infect1, 8x Attack1 |
| 2 | 7 | 0 | 2 | 2 | 6x Attack1, 2x Attack2 | 3x Sting, 3x Infect1, 6x Attack1, 2x Attack2 |
| 3 | 10 | 0 | 2 | 2 | 6x Attack1, 5x Attack2 | 3x Sting, Infect2, 2x Infect1, 6x Attack1, 5x Attack2 |
| 4 | 15 | 0 | 2 | 2 | 3x Attack1, 8x Attack2 | 3x Sting, 2x Infect2, Infect1, 3x Attack1, 8x Attack2 |

### Yellow Dragon (`YellowDragon`)

- Type: normal
- Preferred starting cards: LightningBreath, DragonScales2, DragonScales
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 7 | 40 | 20 | 1 | 2 | 7x Attack2, 6x Attack3 | DragonsWisdom, StormShape, DragonsBite, 2x LightningBreath, DragonsTail, DragonScales, 7x Attack2, 6x Attack3 |
| 8 | 55 | 20 | 1 | 2 | 10x Attack3, 3x Attack4 | DragonsWisdom, StormShape, DragonsBite, 2x LightningBreath, DragonsTail, DragonScales, 2x DragonsClaw3, 10x Attack3, 3x Attack4 |
| 9 | 70 | 20 | 1 | 2 | 13x Attack3 | DragonsWisdom, StormShape, DragonsBite, 2x LightningBreath, DragonsTail, DragonScales, 4x DragonsClaw3, 13x Attack3 |
| 10 | 85 | 20 | 1 | 2 | 12x Attack3, 3x Attack4 | DragonsWisdom, StormShape, DragonsBite, 2x LightningBreath, DragonsTail, 2x DragonScales2, 4x DragonsClaw3, Zap, 12x Attack3, 3x Attack4 |

### Zombie (`Zombie`)

- Type: normal
- Preferred starting cards: ZombieBite
- Starting equipment: -
- HP source: HealthValue * health_mult

| Level | HP | Mana | Actions | Draw | Generated attack counts | Final deck counts |
| ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 | 6 | 0 | 1 | 2 | 11x Attack1 | 3x Infect1, ZombieBite, 11x Attack1 |
| 2 | 10 | 0 | 1 | 2 | 9x Attack1, 2x Attack2 | 3x Infect1, ZombieBite, 9x Attack1, 2x Attack2 |
| 3 | 15 | 0 | 1 | 2 | 7x Attack1, 7x Attack2 | Infect2, 2x Infect1, ZombieBite, 7x Attack1, 7x Attack2 |
| 4 | 22 | 0 | 1 | 2 | 4x Attack1, 10x Attack2 | Infect2, 3x Infect1, ZombieBite, 4x Attack1, 10x Attack2 |
