# 图片与声音资源

资源解析的主入口是 [../../extracted/structured/texture_export_manifest.json](../../extracted/structured/texture_export_manifest.json)、[../../extracted/structured/remaster_asset_catalog.json](../../extracted/structured/remaster_asset_catalog.json)、[../../extracted/structured/remaster_starter_asset_pack.json](../../extracted/structured/remaster_starter_asset_pack.json)、[../../extracted/structured/audio_export_manifest.json](../../extracted/structured/audio_export_manifest.json) 和 [../../extracted/structured/songs.json](../../extracted/structured/songs.json)。

![Adrenaline Rush](../../extracted/textures/by_container/resources/CombatAbilityAdrenalineRush__731.png)

完整资源、音频和歌曲表见 [resource-catalog.md](resource-catalog.md)。

## 图片导出状态

| 项目 | 数量 |
| --- | ---: |
| Texture2D records | 1117 |
| exported PNG | 1115 |
| export error | 2 |
| resource paths | 1239 |
| matched resource paths | 1093 |
| unmatched resource paths | 146 |
| ambiguous image resource paths | 0 |

2 个导出错误是 0x0 font texture，无图像数据。146 个未匹配路径主要属于 material、prefab 或 other resource，不影响已识别的核心图像类别。

## Remaster asset catalog

[../../extracted/structured/remaster_asset_catalog.json](../../extracted/structured/remaster_asset_catalog.json) 合并了内容目录和 texture manifest，共 606 个 remaster asset entry，5/5 覆盖检查通过。

| 区域 | entry | 有 PNG | 有结构化内容 | 备注 |
| --- | ---: | ---: | ---: | --- |
| card | 401 | 375 | 370 | 26 个 structured card 没有 inventory art；31 个资源只有图像/资源入口 |
| dungeon_actor | 99 | 99 | 73 | 包含怪物和其它地牢 actor 图 |
| profession | 18 | 18 | 16 | 包含 Druid human/wolf 形态和 Random 之类资源入口 |
| combat_ability | 37 | 32 | 37 | 5 个能力目前没有对应 PNG |
| dungeon_talent_icon | 51 | 51 | 43 | 8 个图标资源没有结构化 DungeonTalent 条目 |

## 资源分类

`texture_export_manifest.json` 中已匹配的核心分类包括：

- card_art: 375
- combat_ability_art: 32
- dungeon_actor_big_art: 99
- dungeon_actor_tile_art: 119
- dungeon_talent_art: 51
- profession_art: 32
- achievement_art: 116
- material / prefab / other_resource: 仍需要按重制需求继续筛选

## 声音和歌曲

[../../extracted/structured/songs.json](../../extracted/structured/songs.json) 当前恢复 20 首 gameplay song 条目，字段包括 `id`、`display_name`、`effect` 和文本 literal index。这个目录更接近 Bard/Sing 玩法规则，而不是音频本体。

[../../extracted/structured/audio_export_manifest.json](../../extracted/structured/audio_export_manifest.json) 当前恢复 13 个 Unity `AudioClip`，全部导出为 MP3，输出在 `extracted/audio/by_container/sharedassets0/`。这些是环境音乐、菜单音乐和少量音效素材；Bard/Sing 的 20 首 song 是玩法文本目录，不是 20 个独立音频文件。

## 示例资源路径

| 用途 | 示例 |
| --- | --- |
| 卡图 | `extracted/textures/by_container/resources/AbsorbVis__561.png` |
| 职业图 | `extracted/textures/by_container/resources/ProfessionAssassin__873.png` |
| 怪物图 | `extracted/textures/by_container/resources/AirElemental__821.png` |
| 技能图标 | `extracted/textures/by_container/resources/CombatAbilityAdrenalineRush__731.png` |
| 音频 | `extracted/audio/by_container/sharedassets0/CryptMusic__56.mp3` |

## 主要来源

- [../../extracted/structured/texture_export_manifest.json](../../extracted/structured/texture_export_manifest.json)
- [../../extracted/structured/remaster_asset_catalog.json](../../extracted/structured/remaster_asset_catalog.json)
- [../../extracted/structured/remaster_starter_asset_pack.json](../../extracted/structured/remaster_starter_asset_pack.json)
- [../../extracted/structured/audio_export_manifest.json](../../extracted/structured/audio_export_manifest.json)
- [../../extracted/structured/songs.json](../../extracted/structured/songs.json)
- [../mechanics/asset-resource-manifest.md](../mechanics/asset-resource-manifest.md)
- [../mechanics/assets-prototype.md](../mechanics/assets-prototype.md)
- [../mechanics/songs-audio.md](../mechanics/songs-audio.md)
