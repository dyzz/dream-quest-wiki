# Start Profile and Monster Level Audit

Date: 2026-06-02

This audit records the starter-slice data currently wired into the web remake. It separates three things that are easy to mix together:

- base profession initializers recovered from `extracted/structured/profession_starting_profile_smoke.json`
- progression profile overlays used by the web remake
- dungeon difficulty, which is confirmed to leave profession starting stats alone but affect level-up HP and reward post-processing

## Source Status

| Area | Source | Status |
| --- | --- | --- |
| Base profession HP/Mana/Actions/Draw/Gold/deck | `extracted/structured/profession_starting_profile_smoke.json`, `profession_skills.json` | 16 professions, 70/70 checks passed |
| Passive achievement rows | `extracted/structured/achievements.json` | Recovered rows include HP +4, Mana +2, several starting-gold passives |
| User-observed all-achievements Thief | Manual target from current product testing | Wired as explicit overlay |
| Dungeon difficulty and level-up HP postprocess | `docs/original-analysis.md`, `combat-rewards-and-leveling.md`, `dungeon_reward_postprocessing_smoke.json`, `DungeonPlayer_ActualLevelUp.txt` | Kitten/Grizzly/Velociraptor reward deltas recovered; Kitten/Grizzly level-up HP bonus recovered |
| Monster base data, level-up deck edits, HP/Mana snapshots | `extracted/structured/monster_catalog.json`, `monster_runtime_smoke.json`, `monster-level-hp-deck-snapshots.md`, `Monster_DiluteDeck.txt`, `Monster_DilutionFraction.txt` | 73 monster source catalog recovered; starter content still ships 4 monsters |

## Difficulty Handling

The recovered starting-profile smoke has one base initializer per profession. It does not show difficulty-specific starting HP/Mana/deck changes. Difficulty does affect the automatic HP gained during level-up.

Current difficulty effects:

| Difficulty | Starting profession stats/deck | Level-up HP adjustment | Recovered dungeon reward postprocess |
| --- | --- | --- | --- |
| Kitten | Same as selected progression profile | +1 HP per level-up | Adds 1 HealingPool and 1 TreasureChest |
| Grizzly Bear | Same as selected progression profile | +1 HP per level-up | Adds 1 HealthPack |
| Velociraptor | Same as selected progression profile | No recovered HP adjustment | No ordinary reward add branch currently seen; original UI says harder and double achievement points |

Difficulty impact scope:

| System | Evidence entry | Conclusion |
| --- | --- | --- |
| Starting HP/Mana/Gold/draw/actions/deck | Profession initializer and starting-profile smoke | No recovered difficulty branch; determined by profession and profile overlay |
| Level-up HP | `DungeonPlayer.ActualLevelUp()` | Kitten and Grizzly Bear add +1; Velociraptor has no recovered HP adjustment |
| Map rewards/buildings | `DungeonBoard.GenerateRewards()` | Kitten adds HealingPool and TreasureChest; Grizzly Bear adds HealthPack; Velociraptor has no ordinary reward add branch currently seen |
| Monster kill gold/experience | `Monster.Defeated()`, `Monster.GoldValue()`, `Monster.ExpValue()` | No recovered difficulty branch; determined by monster level, gold/experience multipliers, and drop modification |
| Achievements/achievement points | difficulty UI text and achievement entry points | Kitten disables achievements/achievement points; Velociraptor doubles achievement points; Grizzly Bear is the default |

## Level-Up HP Handling

`DungeonPlayer.ActualLevelUp()` automatically applies scalar HP/Mana/Gold growth before it opens the level-up reward pane.

Effective HP growth is:

`Profession.LevelUpHealth(targetLevel) + difficulty HP adjustment + FLOOR1 adjustment`

Recovered rules:

| Source | Rule |
| --- | --- |
| Profession base | Most professions +2; Warrior and Ranger +3; Necromancer +1 |
| Difficulty | Kitten +1, Grizzly Bear +1, Velociraptor +0 |
| User attribute | `FLOOR1` / id `71` adds +1 |
| Settlement | `DungeonPlayer.GainMaxHealth(total)` increases max HP and current HP; the level-up tail then sets current HP to max HP |

This explains the observed Grizzly Bear 1->2 HP reward of 4 for a normal +2 profession when the current profile already has `FLOOR1`: `2 + 1 + 1 = 4`.

## Base Profession Initializers

All base rows below are difficulty-independent in the current recovered data.

| Profession | HP | Mana | Draw | Actions | Gold | Deck |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Assassin | 15 | 1 | 2 | 1 | 0 | 7x Attack1, 2x Slice, 1x Blur |
| Bard | 15 | 2 | 2 | 1 | 0 | 5x Attack1, 1x JasrasJarringJolt, 1x Slash, 1x Mana1, 1x Slice, 1x PrayerOfViolence |
| Chaos Mage | 15 | 2 | 2 | 1 | 0 | 6x Attack1, 1x JasrasJarringJolt, 2x Mana1, 1x WildStrike1 |
| Dragon | 15 | 0 | 2 | 1 | 0 | 7x Attack1, 2x DragonsClaw1, 1x DragonsBite |
| Druid | 15 | 2 | 2 | 1 | 0 | 5x Attack1, 1x Rake, 3x Mana1, 2x SummonCompanions |
| Monk | 15 | 0 | 2 | 1 | 0 | 7x Attack1, 1x Slice, 1x Mana1, 1x Heal |
| Necromancer | 15 | 2 | 2 | 1 | 0 | 6x Attack1, 2x Mana1, 1x SiphonLife, 1x SoulSiphon |
| Paladin | 15 | 0 | 2 | 1 | 0 | 8x Attack1, 1x HolyStrike1, 1x PrayerOfLife |
| Priest | 15 | 2 | 2 | 1 | 0 | 7x Attack1, 1x Mana1, 1x Orison, 1x PrayerOfViolence |
| Professor | 15 | 0 | 2 | 1 | 0 | 6x Attack1 |
| Random | 15 | 2 | 2 | 1 | 0 | 7x Attack1, 1x Mana1, 1x Orison, 1x PrayerOfViolence |
| Ranger | 15 | 0 | 2 | 1 | 0 | 7x Attack1, 2x Slice, 1x Circle |
| Samurai | 15 | 0 | 2 | 1 | 0 | 8x Attack1, 2x SorcerousStrike1 |
| Thief | 15 | 0 | 2 | 1 | 0 | 7x Attack1, 2x Slice, 1x Backstab |
| Warrior | 15 | 0 | 2 | 1 | 0 | 9x Attack1, 1x Sword |
| Wizard | 15 | 2 | 2 | 1 | 0 | 5x Attack1, 3x Mana1, 2x JasrasJarringJolt |

## All-Achievements Profile Overlay

The web remake now supports a `fresh` profile and an `all-achievements` profile when starting a run.

Current global all-achievements overlay:

| Field | Rule |
| --- | --- |
| HP | Base HP + 4 |
| Mana | Base Mana + 2 |
| Gold | 20 |
| Draw | Same as base |
| Actions | Same as base |
| Deck | Same as base unless a profession-specific overlay exists |

The directly recovered passive achievement rows account for HP +4 and Mana +2. Starting-gold recovery is not fully replayed from original save/profile state yet; the web remake uses 20 gold for the all-achievements preset to match the current Thief observation and the DungeonPlayer initialization evidence under review.

Thief has an explicit all-achievements overlay:

| Profile | HP | Mana | Draw | Actions | Gold | Deck |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Thief fresh | 15 | 0 | 2 | 1 | 0 | 7x Attack1, 2x Slice, 1x Backstab |
| Thief all-achievements | 19 | 2 | 2 | 1 | 20 | 4x Attack1, 2x Attack2, 2x Slice, 1x Backstab |

For other professions, all-achievements currently applies the global resource overlay and preserves the base deck until a profession-specific original overlay is recovered or verified.

Effective all-achievements profile table across all three difficulties:

| Profession | HP | Mana | Draw | Actions | Gold | Deck |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Assassin | 19 | 3 | 2 | 1 | 20 | 7x Attack1, 2x Slice, 1x Blur |
| Bard | 19 | 4 | 2 | 1 | 20 | 5x Attack1, 1x JasrasJarringJolt, 1x Slash, 1x Mana1, 1x Slice, 1x PrayerOfViolence |
| Chaos Mage | 19 | 4 | 2 | 1 | 20 | 6x Attack1, 1x JasrasJarringJolt, 2x Mana1, 1x WildStrike1 |
| Dragon | 19 | 2 | 2 | 1 | 20 | 7x Attack1, 2x DragonsClaw1, 1x DragonsBite |
| Druid | 19 | 4 | 2 | 1 | 20 | 5x Attack1, 1x Rake, 3x Mana1, 2x SummonCompanions |
| Monk | 19 | 2 | 2 | 1 | 20 | 7x Attack1, 1x Slice, 1x Mana1, 1x Heal |
| Necromancer | 19 | 4 | 2 | 1 | 20 | 6x Attack1, 2x Mana1, 1x SiphonLife, 1x SoulSiphon |
| Paladin | 19 | 2 | 2 | 1 | 20 | 8x Attack1, 1x HolyStrike1, 1x PrayerOfLife |
| Priest | 19 | 4 | 2 | 1 | 20 | 7x Attack1, 1x Mana1, 1x Orison, 1x PrayerOfViolence |
| Professor | 19 | 2 | 2 | 1 | 20 | 6x Attack1 |
| Random | 19 | 4 | 2 | 1 | 20 | 7x Attack1, 1x Mana1, 1x Orison, 1x PrayerOfViolence |
| Ranger | 19 | 2 | 2 | 1 | 20 | 7x Attack1, 2x Slice, 1x Circle |
| Samurai | 19 | 2 | 2 | 1 | 20 | 8x Attack1, 2x SorcerousStrike1 |
| Thief | 19 | 2 | 2 | 1 | 20 | 4x Attack1, 2x Attack2, 2x Slice, 1x Backstab |
| Warrior | 19 | 2 | 2 | 1 | 20 | 9x Attack1, 1x Sword |
| Wizard | 19 | 4 | 2 | 1 | 20 | 5x Attack1, 3x Mana1, 2x JasrasJarringJolt |

## Recovered Dungeon Skill Loadout

The UI now shows serialized dungeon skills from content data. `Find Treasure` is executable in the starter slice; other recovered actions are visible but still need exact target selection and effect replay.

| Profession | Dungeon skill | Cooldown |
| --- | --- | ---: |
| Chaos Mage | Wild Shape | 3 |
| Dragon | Devour | 3 |
| Dragon | Hoard | 0 |
| Monk | Meditate | 4 |
| Necromancer | Portal / SwapLocation | 3 |
| Priest | Oracle | 2 |
| Random | Oracle | 2 |
| Ranger | Invisibility | 4 |
| Thief | Find Treasure | 4 |
| Warrior | Smash | 2 |
| Wizard | Teleport | 1 |

## Floor-One Reference Monster Level Data

This table records the original starter-slice monsters that were first wired into the web remake. The runtime now imports all 73 recovered monsters from [monster-level-hp-deck-snapshots.md](monster-level-hp-deck-snapshots.md) and its TSV export. These four entries remain useful as a quick floor-one regression sample.

| Monster | Level | HP | Mana | Final deck |
| --- | ---: | ---: | ---: | --- |
| Pixie | 1 | 3 | 3 | 1x Explosion, 2x Fireball, 5x Attack1 |
| Pixie | 2 | 5 | 3 | 1x Explosion, 3x Fireball, 4x Attack1, 1x Attack2 |
| Pixie | 3 | 7 | 3 | 1x Explosion, 4x Fireball, 1x Haste, 4x Attack1, 4x Attack2 |
| Pixie | 4 | 11 | 3 | 1x Explosion, 4x Fireball, 2x Haste, 2x Attack1, 6x Attack2 |
| Skeleton | 1 | 4 | 0 | 2x BoneShield, 13x Attack1 |
| Skeleton | 2 | 7 | 0 | 2x BoneShield, 10x Attack1, 3x Attack2 |
| Skeleton | 3 | 10 | 0 | 2x BoneShield, 8x Attack1, 8x Attack2 |
| Skeleton | 4 | 15 | 0 | 2x BoneShield2, 4x Attack1, 12x Attack2 |
| Wyvern | 1 | 4 | 0 | 3x Sting, 3x Infect1, 8x Attack1 |
| Wyvern | 2 | 7 | 0 | 3x Sting, 3x Infect1, 6x Attack1, 2x Attack2 |
| Wyvern | 3 | 10 | 0 | 3x Sting, 2x Infect1, 1x Infect2, 6x Attack1, 5x Attack2 |
| Wyvern | 4 | 15 | 0 | 3x Sting, 1x Infect1, 2x Infect2, 3x Attack1, 8x Attack2 |
| Mime | 4 | 37 | 0 | 5x Reenact, 1x VampireSword, 3x Attack1, 9x Attack2 |
| Mime | 5 | 50 | 0 | 5x Reenact, 1x VampireSword, 14x Attack2 |
| Mime | 6 | 75 | 0 | 5x Reenact, 1x VampireSword, 11x Attack2, 3x Attack3 |
| Mime | 7 | 100 | 0 | 5x Reenact, 1x VampireSword, 9x Attack2, 8x Attack3 |

Mime has additional level 9 Disorient edits in the recovered rule, but the starter first-floor boss range is level 4-7, so those edits do not appear on floor 1.

## Playable Monster Snapshot Sync

`packages/content/tests/floor-one.test.ts` now checks every monster shipped in `packages/content` against `monster-level-hp-deck-snapshots.tsv` for every level in that monster's playable `levelRange`. `packages/content/src/generated/full-monster-content.ts` is generated by `tools/generate_full_monster_content_pack.py` from the extracted card, monster, asset, and snapshot data.

Current playable sync status:

| Scope | Status |
| --- | --- |
| Shipped playable monsters | All 73 recovered monsters |
| Checked rows | 329/329 recovered monster-level rows |
| Checked fields | HP, mana, exact final deck order |
| Result | All shipped monster level stats match the recovered snapshot |

This prevents the previous Skeleton regression where playable content kept only `2x BoneShield` and omitted the recovered `DiluteDeck` attack cards.

## Floor-One Monster Pools

The playable floor-one dungeon now uses the recovered DUNGEON environment frequency weights by generated monster level. Levels 1-3 share the same normal pool:

| Monster | Weight |
| --- | ---: |
| Goblin | 10 |
| Kobold | 10 |
| Orc | 10 |
| Skeleton | 5 |
| VampireBat | 5 |
| Zombie | 5 |
| DiscipleOfChaos | 3 |
| Mage | 2 |
| Priest | 2 |
| Thief | 2 |
| Warrior | 2 |

Level 4 keeps those entries and adds:

| Monster | Weight |
| --- | ---: |
| Clone | 5 |
| Ghoul | 5 |
| GoblinMechanist | 10 |
| Medusa | 5 |
| StoneGolem | 5 |
| Troll | 5 |

Floor-one boss selection uses the recovered DUNGEON boss pool at level 4:

| Boss | Weight | Probability |
| --- | ---: | ---: |
| GelatinousCube | 10 | 40% |
| GoblinKing | 10 | 40% |
| Vampire | 3 | 12% |
| Mime | 2 | 8% |

## Remaining Data Work

- Port later-floor dungeon generation pools and environment selection with the same recovered monster catalog.
- Confirm all-achievements starting gold from original save/profile execution rather than the current user-observed target plus disassembly evidence.
- Implement exact target selection and effects for the remaining dungeon skills.
