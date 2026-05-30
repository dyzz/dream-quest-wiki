# Dream Quest 中文机制 Wiki

这个目录是面向重制工作的中文 Markdown wiki。它把已有的反编译、资源导出、结构化 JSON 和机制文档整理成可导航的知识库：先服务机制分析，再服务后续脱离原代码重置。

当前 wiki 不是“原版已完整复刻”的声明。`remaster_completion_audit.json` 仍判定 `achieved=false`，阻塞项是 cards、monsters、dungeon_generation、professions_and_skills 和 remaster_plan；`remaster_manifest.json` 也保留 `runtime_rules_complete=false`。因此页面里的机制描述分成“已恢复证据”和“仍需原版 replay”的边界。

## 入口

- [卡牌](cards.md)：370 张 recovered cards、费用、类型、运行时规则、AI 价值和牌区生命周期。
- [职业与技能](professions.md)：16 个职业、37 个 combat ability、33 个 dungeon action、43 个 DungeonTalent。
- [怪物](monsters.md)：73 个怪物、18 个 boss、卡组、升级规则、行为 trace 和怪物 AI 队列。
- [游戏机制](mechanics.md)：战斗循环、行动/目标、RNG、地牢生成、经济、存档和原版准确性边界。
- [图片与声音资源](resources.md)：1115 个导出 PNG、606 个 remaster asset entry、13 个 AudioClip MP3 和 20 首 gameplay song 目录。

## 全量目录

- [卡牌全量目录](card-catalog.md)：370 张 recovered cards，含图片、类型、费用、规则状态和规则文本。
- [职业与技能全量目录](profession-catalog.md)：16 个职业详情，外加全部 combat ability、dungeon action 和 DungeonTalent。
- [怪物全量目录](monster-catalog.md)：73 个怪物，含图片、boss/等级/地形、基础卡组、powers 和规则状态。
- [资源、图片、音频与歌曲目录](resource-catalog.md)：606 个 asset entry、13 个 MP3 AudioClip、20 首 gameplay song。

## 证据层级

| 层级 | 主要文件 | 用途 |
| --- | --- | --- |
| 结构化目录 | `cards.json`, `profession_skills.json`, `monster_catalog.json`, `dungeon_generation.json` | 给 wiki 和重制 runtime 提供稳定内容入口 |
| 资源目录 | `texture_export_manifest.json`, `remaster_asset_catalog.json`, `remaster_starter_asset_pack.json`, `audio_export_manifest.json`, `songs.json` | 连接卡图、怪物图、职业图、能力图标、DungeonTalent 图标、MP3 音频和歌曲文本 |
| 机制规格 | `docs/mechanics/*.md` | 详细解释规则、runtime 边界、测试夹具和原版准确性队列 |
| 状态判断 | `remaster_completion_audit.json`, `remaster_manifest.json` | 明确哪些已经可用于分析，哪些仍不能声明原版准确 |

## 读法

优先从本目录的中文页理解整体结构；需要落到证据时，沿每页的“主要来源”跳到 `extracted/structured/` artifact 和 [../mechanics/README.md](../mechanics/README.md)。如果要开发重制版 runtime，仍以 [../mechanics/runtime-implementation-backlog.md](../mechanics/runtime-implementation-backlog.md) 和 [../mechanics/original-accuracy-work-queues.md](../mechanics/original-accuracy-work-queues.md) 为工程队列。
