# 职业与技能

职业静态目录来自 [../../extracted/structured/professions.json](../../extracted/structured/professions.json)，完整职业/技能目录来自 [../../extracted/structured/profession_skills.json](../../extracted/structured/profession_skills.json)。当前有 16 个职业、37 个 combat ability、33 个 dungeon action 和 43 个 DungeonTalent。所有职业都有 initializer、文本、起始牌组、class bias 和行为 trace；技能侧也已经归一化出 cooldown、handler 和 effect steps。

![Assassin](../../extracted/textures/by_container/resources/ProfessionAssassin__873.png)

完整职业、技能和天赋表见 [profession-catalog.md](profession-catalog.md)。

## 职业列表

Assassin、Bard、Chaos Mage、Dragon、Druid、Monk、Necromancer、Paladin、Priest、Professor、Random、Ranger、Samurai、Thief、Warrior、Wizard。

每个职业页未来可以从同一个目录生成，最低应展示：

| 字段 | 含义 |
| --- | --- |
| `description` / `ability_text` | 职业描述和被动/主动能力说明 |
| `hero_names` | 可选英雄名池 |
| `initializer.stats` | 初始 health、mana、cards、actions、gold、equip slots |
| `initializer.deck` | 起始牌组 |
| `class_biases` | 卡牌奖励倾向 |
| `action_loadout` | 职业带来的 dungeon action / combat ability |
| `runtime_rule` | 职业 hook 的归一化行为步骤 |

## 技能分类

| 分类 | 数量 | 当前状态 |
| --- | ---: | --- |
| CombatAbility | 37 | 有 cooldown / 初始 cooldown、显示文本、`DoMe` 或验证类方法 trace |
| DungeonAction | 33 | 有 cooldown、按钮文本、`Perform` / target / tile / card click 类方法 trace |
| DungeonTalent | 43 | 有 tier、repeatable、requirement、handler method 和 handler effect |

## 机制重点

- 职业不是只给初始牌：`ApplyToPlayer`、`CombatApplyToPlayer`、`AddDungeonActions`、`AddCombatActions`、level reward、RewardWeight 等方法都已索引。
- CombatAbility 和 DungeonAction 共享 cooldown/use/OnClick/WinFight tick/ready-message 调度证据；当前 fixture 已覆盖全部 60 个 cooldown initializer entry。
- DungeonTalent 已恢复 handler effects，并与 TalentBase 学习 UI、CardBack、DungeonPlayer 的静态链路关联；但 live TalentBase 实例来源和原版 UI replay 仍未完成。
- Targeting/UI bridge 已把技能中的 selection、window prompt、target legality 术语接到共享 runtime 事件；这只是确定性桥接，不是原版点击/窗口对象 replay。

## 代表样本

| 条目 | 类型 | 已恢复要点 |
| --- | --- | --- |
| Assassin | Profession | 起始 15 health / 1 mana / 2 cards / 1 action，牌组含 Attack1、Slice、Blur；CombatApplyToPlayer 调用 `Player.ActionMana(2)` |
| Adrenaline Rush | CombatAbility | cooldown 3，效果是 `Player.Draw(3)` |
| Alchemy | DungeonAction | cooldown 1，执行时通过 dungeon player 添加 `HealingPotion` |
| Sixth Sense | DungeonTalent | tier 1，需求 `DEATH3`，handler 调用 `DungeonBoard.RevealMonsters` |

## 主要来源

- [../../extracted/structured/professions.json](../../extracted/structured/professions.json)
- [../../extracted/structured/profession_skills.json](../../extracted/structured/profession_skills.json)
- [../../extracted/structured/profession_skill_runtime_accuracy_gaps.json](../../extracted/structured/profession_skill_runtime_accuracy_gaps.json)
- [../../extracted/structured/profession_skill_original_accuracy_flag_index.json](../../extracted/structured/profession_skill_original_accuracy_flag_index.json)
- [../../extracted/structured/profession_skill_scheduler_recovery.json](../../extracted/structured/profession_skill_scheduler_recovery.json)
- [../mechanics/professions-skills-talents.md](../mechanics/professions-skills-talents.md)
- [../mechanics/profession-scheduler-talents.md](../mechanics/profession-scheduler-talents.md)
