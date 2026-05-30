# 游戏机制

机制 wiki 的详细证据在 [../mechanics/README.md](../mechanics/README.md)。本页是中文导读，把重制需要优先理解的系统放在一张图里：卡牌和行动驱动战斗，职业/技能扩展玩家能力，怪物使用卡组和 AI 行动，地牢负责生成路线、奖励和遭遇，RNG 和存档影响长期进度。

## 战斗循环

核心链路：

1. 职业起始 profile 投影玩家初始 health、mana、cards、actions、gold、equip slots 和 deck。
2. 怪物从 `monster_catalog.json` 投影 level、mana、base deck、起手偏好和行为 hook。
3. 回合开始处理抽牌、状态、装备、职业/怪物 hook 和 visual stack boundary。
4. 玩家或 AI 通过 action candidate、target legality、priority/value 选择行动。
5. `ActionPlay` 桥接卡牌，执行费用、支付、`Card.PlayMe`、规则 effect、牌区 commit 和 lifecycle。
6. pass/end-turn、WinFight、奖励、cooldown tick 和 profile/save 后处理收尾。

详见 [../mechanics/combat-runtime-loop.md](../mechanics/combat-runtime-loop.md)、[../mechanics/action-runtime-targeting.md](../mechanics/action-runtime-targeting.md) 和 [../mechanics/turn-action-ai-flow.md](../mechanics/turn-action-ai-flow.md)。

## 行动、目标和 AI

行动系统已经恢复出：

- `GetAllActions` / `GetAllActionsPlusTargets` 候选形态。
- `AIIsValidPlusTargets` / `AIGetTargets` target legality 与 target-set construction。
- `ActionPlay.AIPriority`、`AIUseValue`、`Card.AIWeight`、`Creature.AIWeight` 和最高优先级选择。
- tie RNG、候选 list tail-swap、target sampling、perform random action 等静态 RNG/list-order 形态。

未完成的是原版 Unity 对象身份、候选列表所有权、真实目标 UI、完整 RNG stream 和回合级 replay。

## 地牢生成

[../../extracted/structured/dungeon_generation.json](../../extracted/structured/dungeon_generation.json) 汇总 DungeonBoard 规则：

| 子系统 | 已恢复要点 |
| --- | --- |
| board layout | depth 1 为 8x8，其它 depth 为 10x10；TileAt/InDungeon/AllTiles/ScaleFactor/BaseTileSize 已结构化 |
| monster generation | depth 1 固定 6 个怪物，其它层 `Game.RandomRange(9, 11)`；base level bucket、jitter、sum adjustment 已记录 |
| rewards | shop、health branch、service reward、additional random rewards、用户属性后处理 |
| pathing | maze/path-between、neighbor shuffle boundary、cut vertex、start distance |
| economy | CardFinder、TreasureChest、MimicChest、Shop.GenerateItems、purchase UI 和 spawn tracking |

详见 [../mechanics/dungeon-generation-rewards.md](../mechanics/dungeon-generation-rewards.md)、[../mechanics/dungeon-board-runtime.md](../mechanics/dungeon-board-runtime.md) 和 [../mechanics/economy-rewards-shops.md](../mechanics/economy-rewards-shops.md)。

## RNG 和可复现性

RNG 目前按子系统拆分，而不是用一个模糊全局随机源：

- 卡牌 RNG / shuffle: [../../extracted/structured/card_rng_recovery.json](../../extracted/structured/card_rng_recovery.json)
- 怪物 RNG: [../../extracted/structured/monster_rng_recovery.json](../../extracted/structured/monster_rng_recovery.json)
- 职业/技能 RNG: [../../extracted/structured/profession_skill_rng_recovery.json](../../extracted/structured/profession_skill_rng_recovery.json)
- 地牢 RNG / shuffle gap: [../../extracted/structured/dungeon_rng_replay_gaps.json](../../extracted/structured/dungeon_rng_replay_gaps.json)
- AI list order: [../../extracted/structured/ai_rng_list_order_recovery.json](../../extracted/structured/ai_rng_list_order_recovery.json)

当前已经有很多 deterministic fixture，但原版 stream 初始化、draw order、shuffle index stream 和 list ownership replay 仍未完成。详见 [../mechanics/rng-determinism.md](../mechanics/rng-determinism.md)。

## 存档、解锁和奖励

解锁系统覆盖 achievements、`UserAttribute`、`player.hpl` codec、current user loading、CardFinder access gate 和 reward post-processing。它影响卡牌候选池、特殊 floor 奖励、难度后处理和重制版 profile contract。详见 [../mechanics/progression-save-unlocks.md](../mechanics/progression-save-unlocks.md) 和 [../mechanics/profile-save-runtime.md](../mechanics/profile-save-runtime.md)。

## 原版准确性边界

当前可以用于机制分析和重制设计，但不能声明“完整原版复刻”。关键状态文件：

- [../../extracted/structured/remaster_completion_audit.json](../../extracted/structured/remaster_completion_audit.json)：当前 `achieved=false`。
- [../../extracted/structured/remaster_manifest.json](../../extracted/structured/remaster_manifest.json)：`prototype_built=true`，但 `runtime_rules_complete=false`。
- [../mechanics/original-accuracy-work-queues.md](../mechanics/original-accuracy-work-queues.md)：卡牌、怪物、地牢、职业/技能的 false-flag 队列。
- [../mechanics/runtime-implementation-backlog.md](../mechanics/runtime-implementation-backlog.md)：下一步 TypeScript runtime port 和验收 gate。
