# 卡牌

卡牌目录的主入口是 [../../extracted/structured/cards.json](../../extracted/structured/cards.json)。当前恢复了 370 张 card class，全部有行为 trace；其中 234 张带 `CardData` 条目，97 张归一化为 simple tailcall，273 张归一化为 structured trace。`runtime_rule.unresolved_operation_count=0` 表示当前 trace 内部没有未命名操作，但不等于完整原版 runtime：参数值、对象身份、UI、reaction/SBE、visual stack 和 RNG stream 仍由原版准确性队列跟踪。

![Absorb Vis](../../extracted/textures/by_container/resources/AbsorbVis__561.png)

完整 370 张卡牌表见 [card-catalog.md](card-catalog.md)。

## 目录字段

| 字段 | 含义 |
| --- | --- |
| `class_name` / `internal_name` / `display_name` | 代码类名、内部名和显示名 |
| `card_type` | `AttackCard`, `SpellCard`, `ActionCard`, `Equipment`, `Reaction`, `Prayer`, `ManaCard` 等 |
| `text.rules` | 原始规则文本；部分含 `<piercing>`、`@tim`、`^` 等原版标记 |
| `costs_and_stats` | action/mana/gold 费用、tier、level、AI keep value、元素倾向 |
| `availability` | CardFinder 生成、职业 bias、需求和 `max_spawns` |
| `effect_methods` | IL2CPP 方法、slot、Python wrapper 与 `PlayEffect` / reaction 方法 |
| `behavior_trace` | 从 `card_effect_calls.json` 合并来的调用序列 |
| `runtime_rule` | 保守归一化后的 effect/context/read/state_write/construct steps |

## 类型分布

| 类型 | 数量 |
| --- | ---: |
| Action | 46 |
| ActionCard | 104 |
| AttackCard | 58 |
| Equipment | 42 |
| ManaCard | 22 |
| Prayer | 7 |
| Reaction | 14 |
| SpellCard | 50 |

## 机制重点

- 打牌流程不是单个 `PlayEffect`：已拆成费用检查、`ResourcesOff`、`CanAfford`、`PayFor`、`Card.PlayMe`、`Game.PlayingCard(c)`、normal / copyNext / early-death 分支、zone commit、`Die` / exile / discard 生命周期。
- `ActionPlay` 是卡牌进入行动系统的桥：全 370 张卡已经有 normal candidate bridge、full-hand filtered candidate 和 synthetic action+target pair fixture。
- 装备不是静态加成：42 张 Equipment 有 lifecycle matrix，覆盖 source-method case、effect event 和 recorded event，但 original equipment timing / object identity 仍未完成。
- AI 分析已经覆盖 `Card.AIWeight`、`Card.GetAIValue`、`ActionPlay.AIPriority`、`AIUseValue` 和最高优先级选择；这些是机制重制的重要输入，但不是完整回合级 original AI replay。
- RNG 相关卡牌有静态 helper/list-order 证据，仍缺原版 RNG stream 初始化和 shuffle index stream replay。

## 代表样本

| 卡牌 | 类型 | action | mana | 已恢复规则摘要 |
| --- | --- | ---: | ---: | --- |
| Absorb Vis | SpellCard | 0 | 15 | 先治疗至多 40，再造成等量 piercing 伤害 |
| Accelerate | ActionCard | 1 | 0 | 抽 3 张牌并获得 3 个计时/速度类标记 |
| Acid Breath | Action | 1 | 0 | 让对手获得 Poisoned 4 |
| Acid Lance | SpellCard | 0 | 3 | 让对手获得 Poisoned 4 |
| Acid Rain | SpellCard | 0 | 5 | 让对手获得 Poisoned 6 |

## 主要来源

- [../../extracted/structured/cards.json](../../extracted/structured/cards.json)
- [../../extracted/structured/card_data.json](../../extracted/structured/card_data.json)
- [../../extracted/structured/card_effect_calls.json](../../extracted/structured/card_effect_calls.json)
- [../../extracted/structured/card_runtime_accuracy_gaps.json](../../extracted/structured/card_runtime_accuracy_gaps.json)
- [../../extracted/structured/card_original_accuracy_flag_index.json](../../extracted/structured/card_original_accuracy_flag_index.json)
- [../mechanics/cards-combat.md](../mechanics/cards-combat.md)
- [../mechanics/card-lifecycle-equipment.md](../mechanics/card-lifecycle-equipment.md)
- [../mechanics/card-metadata-access.md](../mechanics/card-metadata-access.md)
- [../mechanics/ai-priority-values.md](../mechanics/ai-priority-values.md)
