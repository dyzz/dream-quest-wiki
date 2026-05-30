# 怪物

怪物基础目录来自 [../../extracted/structured/monsters.json](../../extracted/structured/monsters.json)，重制分析主目录来自 [../../extracted/structured/monster_catalog.json](../../extracted/structured/monster_catalog.json)。当前恢复 73 个怪物，其中 55 个 normal、18 个 boss；73 个都有 `monster_data` 和 `BuildAttributes`，71 个有 base deck，58 个有 level-up trace，47 个有 behavior trace。

![Air Elemental](../../extracted/textures/by_container/resources/AirElemental__821.png)

完整 73 个怪物表见 [monster-catalog.md](monster-catalog.md)。

## 目录字段

| 字段 | 含义 |
| --- | --- |
| `display_name` / `internal_name` | 展示名和内部名 |
| `bestiary_entry` | 图鉴说明和提示 |
| `monster_data.locations` | 地形/环境出现范围 |
| `min_level` / `max_level` / `boss` | 等级范围和 boss 标记 |
| `build_attributes` | mana、level、倍率、devour type、基础卡组、起手偏好、起始装备 |
| `behavior_index` | ApplyToPlayer、StartTurn、Restriction、LevelUpDeck 等方法入口 |
| `behavior_runtime_rule` | 行为 trace 归一化后的 effect/read/state_write steps |
| `level_up_rule` | 升级时的 deck add/replace、monster power 文本和 level gate |

## 机制重点

- 怪物强度主要由卡组、等级、属性、起手偏好、回合 hook 和 level-up deck mutation 共同决定。
- 73/73 的 behavior runtime status 是 structured trace；73/73 的 level-up rule status 是 structured level-up。
- Deck-encoded behavior 已有桥接验证：怪物卡组引用卡牌、ActionPlay bridge 和缺失卡检查都已覆盖。
- 怪物 AI 仍依赖全局行动系统：候选行动、目标合法性、优先级、RNG/list order 和 pass/end-turn 都在 action/AI 文档里跟踪。
- 原版准确性仍缺：完整 monster AI、targeting、turn timing、restriction predicate、RNG stream、Unity visual/UI replay。

## 代表样本

| 怪物 | boss | 等级 | 基础卡组前缀 |
| --- | --- | --- | --- |
| Air Elemental | false | 5-10 | LightningStrike, StormSlash1, StormSlash1, StormSlash1 |
| Akami Ascendant | true | 4-7 | ManaTotem, HasteTotem, ShockTotem, ThunderStorm |
| Akami Shaman | false | 1-4 | ManaTotem, Fireball, Fireball, Mana2 |
| Banshee | false | 5-7 | Scream, Scream, Scream, DrainLife |
| Chromatic Demon | true | 7-10 | FlameCharge, FrostCharge, VileCharge, StaticCharge |

## 主要来源

- [../../extracted/structured/monsters.json](../../extracted/structured/monsters.json)
- [../../extracted/structured/monster_catalog.json](../../extracted/structured/monster_catalog.json)
- [../../extracted/structured/monster_runtime_accuracy_gaps.json](../../extracted/structured/monster_runtime_accuracy_gaps.json)
- [../../extracted/structured/monster_original_accuracy_flag_index.json](../../extracted/structured/monster_original_accuracy_flag_index.json)
- [../../extracted/structured/monster_behavior_calls.json](../../extracted/structured/monster_behavior_calls.json)
- [../../extracted/structured/monster_levelup_calls.json](../../extracted/structured/monster_levelup_calls.json)
- [../mechanics/monsters-ai-actions.md](../mechanics/monsters-ai-actions.md)
- [../mechanics/monster-runtime-leveling.md](../mechanics/monster-runtime-leveling.md)
