import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { CARD_NAME_CN, MONSTER_NAME_CN, PROFESSION_NAME_CN } from "./name-translations.mjs";

const CARD_TYPE_LABELS = {
  Action: "行动牌",
  ActionCard: "行动牌",
  AttackCard: "攻击",
  Equipment: "装备",
  ManaCard: "魔力",
  Prayer: "祈祷",
  Reaction: "反应",
  SpellCard: "法术"
};
const CARD_TYPE_ORDER = ["攻击", "法术", "行动牌", "装备", "反应", "魔力", "祈祷", "其它"];
const CARD_TYPE_ANCHORS = {
  攻击: "attack",
  法术: "spell",
  行动牌: "action",
  装备: "equipment",
  反应: "reaction",
  魔力: "mana",
  祈祷: "prayer",
  其它: "other"
};
const BUILDING_CATEGORY_ANCHORS = {
  奖励: "reward",
  遭遇: "encounter",
  经济: "economy",
  回复: "healing",
  强化: "upgrade",
  净化: "cleanse",
  "Bard 专属": "bard",
  事件: "event"
};

const STAT_LABELS = {
  health: "生命",
  mana: "法力",
  cards: "手牌",
  actions: "行动点",
  gold: "金币",
  equip_slots: "装备槽"
};
const CORE_BIAS_LABELS = {
  thief: "盗贼",
  priest: "牧师",
  warrior: "战士",
  wizard: "法师"
};
const CLASS_BIAS_NOTES = {
  0: "法师基础权重",
  1: "战士基础权重",
  2: "牧师基础权重",
  3: "盗贼基础权重",
  4: "圣骑士权重",
  5: "武士权重",
  6: "死灵法师权重",
  7: "游侠权重",
  8: "刺客/武僧权重",
  9: "吟游诗人权重",
  10: "教授权重",
  12: "德鲁伊权重",
  13: "混沌法师权重（未实装）",
  14: "元素/斩击权重",
  15: "神圣/冰霜权重",
  16: "腐蚀/暗影权重",
  17: "风暴权重"
};

const TOKEN_LABELS = {
  "@atk": "攻击",
  "@tim": "行动点",
  "@fir": "火焰",
  "@air": "电系",
  "@wat": "冰霜",
  "@ear": "毒性",
  "@card": "卡牌"
};
const ELEMENT_LABELS = {
  air: "电系",
  earth: "毒性",
  fire: "火焰",
  water: "冰霜"
};
const TERM_LABELS = {
  piercing: "穿透",
  "piercing damage": "穿透伤害",
  temporary: "临时",
  Overhealing: "过量治疗",
  Chilled: "寒冷",
  Poisoned: "中毒",
  Weakened: "虚弱",
  "Damage Reduction": "减伤"
};
const METADATA_TIPS = {
  "内部名称": "游戏数据里用于引用这张牌的内部标识。",
  "类名": "反编译数据中的类名，通常也是最稳定的检索名称。",
  "类型": "卡牌类别，会影响费用、奖励池和战斗中的处理方式。",
  "基础阶级": "卡牌原始 tier。奖励生成会用它判断这张牌是否落在当前奖励阶级范围内。",
  "等级": "当前等级 / 最高等级。可升级牌会有更高的最高等级。",
  "行动点费用": "打出这张牌需要消耗的行动点。",
  "法力费用": "打出这张牌需要消耗的法力。",
  "金币价格": "商店或奖励数据中的基础金币价格。",
  "最大出现次数": "同一轮地牢里这张牌允许出现的次数上限。",
  "卡池可出现": "是否在通用卡牌列表里，可供奖励生成逻辑选择。",
  "需求": "解锁、成就或特殊条件要求；无则代表没有额外要求。",
  "衰变为": "某些机制会让牌衰变成另一张牌，这里显示目标牌名。",
  "AI 打出顺序": "AI 评估打牌顺序时使用的排序值。",
  "AI 保留值": "AI 决定是否保留这张牌时使用的权重。",
  "元素亲和": "元素相关修正数据；无则没有显式元素亲和。",
  "动态价格": "是否通过函数动态计算金币价格。",
  "有主动效果": "是否存在主动打出效果逻辑。",
  "有反应效果": "是否存在反应触发逻辑。",
  "卡牌状态": "这张牌在游戏里如何出现：普通、职业专属、成就解锁或怪物限定。",
  "状态说明": "对卡牌状态的具体解释，帮助区分普通玩家牌、职业特色牌、成就牌和怪物专用牌。",
  "中文名": "wiki 中使用的统一中文名称。",
  "英文名": "游戏原始显示名；没有显示名时使用内部类名拆分。"
};
const CARD_STATUS = {
  normal: {
    key: "normal",
    label: "普通",
    className: "dq-status-normal",
    detail: "普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。"
  },
  profession: {
    key: "profession",
    label: "职业专属",
    className: "dq-status-profession",
    detail: "只通过特定职业的初始牌组、固定升级奖励或职业机制获得。"
  },
  unlock: {
    key: "unlock",
    label: "成就解锁",
    className: "dq-status-unlock",
    detail: "在 CardList 中，但需要对应成就或 UserAttribute 解锁后才会进入候选池。"
  },
  monster: {
    key: "monster",
    label: "怪物限定",
    className: "dq-status-monster",
    detail: "不作为普通玩家牌出现；只在怪物牌组、怪物行为或战斗内部流程中使用。"
  }
};
const PROFESSION_UNLOCKS = {
  paladin: "通关 1 次后解锁。",
  assassin: "用所有基础职业通关后解锁。",
  dragon: "用所有进阶职业通关后解锁。",
  professor: "击败全部 18 个首领后解锁。",
  necromancer: "在 6 个祭坛祈祷后解锁。",
  monk: "到达第 3 层后解锁。",
  druid: "不删除牌通关后解锁。",
  samurai: "用所有基础职业完成第 1 层后解锁。",
  bard: "将最终首领打到 750 生命以下后解锁。",
  ranger: "与每种非首领怪物开始过战斗后解锁。"
};
const CLASS_UNLOCK_GUIDE = [
  { id: "paladin", attribute: "WIN1", profession: "Paladin", requirement: "通关 1 次。" },
  { id: "monk", attribute: "FLOOR2", profession: "Monk", requirement: "到达第 3 层。" },
  { id: "necromancer", attribute: "ALTAR2", profession: "Necromancer", requirement: "在全部 6 个祭坛祈祷。" },
  { id: "druid", attribute: "IMPIOUS", profession: "Druid", requirement: "不从牌组删除卡牌并通关。" },
  { id: "samurai", attribute: "BASECLASSESFLOOR1", profession: "Samurai", requirement: "用四个基础职业都完成第 1 层。" },
  { id: "bard", attribute: "FINALBOSS1", profession: "Bard", requirement: "将最终 Boss 生命降低到 750 以下。" },
  { id: "ranger", attribute: "ALLMONSTERS", profession: "Ranger", requirement: "与每种非 Boss 怪物开始过战斗。" },
  { id: "assassin", attribute: "WIN3", profession: "Assassin", requirement: "用所有基础职业通关。" },
  { id: "dragon", attribute: "WIN30", profession: "Dragon", requirement: "用所有进阶职业通关。" },
  { id: "professor", attribute: "BOSSALL", profession: "Professor", requirement: "击败全部 18 个 Boss。" }
];
const UNIMPLEMENTED_PROFESSION_IDS = new Set(["chaosmage"]);
const PROFESSION_STATUS = {
  default: {
    key: "default",
    label: "默认可选",
    className: "dq-status-normal",
    detail: "不依赖成就解锁，是职业选择入口中的默认职业。"
  },
  unlock: {
    key: "unlock",
    label: "成就解锁",
    className: "dq-status-unlock",
    detail: "需要达成对应成就后才会进入职业选择。"
  },
  special: {
    key: "special",
    label: "特殊入口",
    className: "dq-status-special",
    detail: "代码里有职业实现，但更像选择入口或特殊职业，而不是普通独立职业路线。"
  },
  unimplemented: {
    key: "unimplemented",
    label: "未实装",
    className: "dq-status-monster",
    detail: "有职业类、贴图、文本和初始化数据，但不在玩家可选职业池。"
  }
};
const UNIMPLEMENTED_DUNGEON_ACTION_CLASS_NAMES = [
  "DungeonActionAlchemy",
  "DungeonActionCopySacrifice",
  "DungeonActionDream",
  "DungeonActionFindMonster",
  "DungeonActionLevelUp",
  "DungeonActionMurder",
  "DungeonActionOracleOld",
  "DungeonActionSacrifice",
  "DungeonActionSave",
  "DungeonActionSing",
  "DungeonActionStudy",
  "DungeonActionSwap",
  "DungeonActionUpgrade"
];
const UNIMPLEMENTED_DUNGEON_ACTION_NOTES = {
  DungeonActionAlchemy: {
    label: "炼金",
    status: "未发现入口",
    effect: "向玩家牌组加入一张治疗药水。",
    note: "有按钮文本和加牌效果，但没有找到职业或天赋入口。"
  },
  DungeonActionCopySacrifice: {
    label: "黑暗契约",
    status: "未发现入口",
    effect: "选择并复制一张牌，同时失去最大生命。",
    note: "效果链完整，但没有找到玩家可获得入口。"
  },
  DungeonActionDream: {
    label: "梦境学习",
    status: "未发现入口",
    effect: "从可选牌中学习 1 张并加入牌组。",
    note: "存在 Dream / Learn 文案，但没有找到玩家可获得入口。"
  },
  DungeonActionFindMonster: {
    label: "扎营",
    status: "已确认职业入口",
    effect: "在相邻空格生成一个与玩家等级相当的怪物。",
    note: "Professor 3 级升级主奖励会授予；不归入未实装。"
  },
  DungeonActionLevelUp: {
    label: "直接升级",
    status: "系统候选",
    effect: "直接触发玩家升级流程。",
    note: "更像调试或奖励流程动作，不是常规玩家技能。"
  },
  DungeonActionMurder: {
    label: "谋杀",
    status: "已确认职业入口",
    effect: "击杀一个非首领怪物，获得经验但不获得金币。",
    note: "Assassin 6 级升级主奖励会授予；不归入未实装。"
  },
  DungeonActionOracleOld: {
    label: "旧版神谕",
    status: "旧实现",
    effect: "揭示目标附近的地图格。",
    note: "当前 Priest / Random 使用新版 Oracle；这里保留为旧实现。"
  },
  DungeonActionSacrifice: {
    label: "献祭",
    status: "未发现入口",
    effect: "失去最大生命并获得法力。",
    note: "有完整效果，但没有找到玩家可获得入口。"
  },
  DungeonActionSave: {
    label: "保存",
    status: "系统候选",
    effect: "保存当前地牢进度。",
    note: "系统流程动作，不是常规玩家技能。"
  },
  DungeonActionSing: {
    label: "歌曲动作",
    status: "已确认职业入口",
    effect: "演奏已学习歌曲，触发对应 Song 效果。",
    note: "Bard 学到的歌曲通过 Sing 使用；不归入未实装。"
  },
  DungeonActionStudy: {
    label: "学习",
    status: "未发现入口",
    effect: "选择一张牌并加入牌组。",
    note: "这是 Study Guide 方向的地图行动，不是 Professor 的 Research。"
  },
  DungeonActionSwap: {
    label: "交换牌组",
    status: "未发现入口",
    effect: "交换玩家当前牌组。",
    note: "没有找到玩家可获得入口。"
  },
  DungeonActionUpgrade: {
    label: "武士道升级",
    status: "疑似旧实现",
    effect: "选择一张可升级的牌并升级。",
    note: "按钮文本含 Bushido；当前 Samurai 是被动满血结算，这里疑似旧实现。"
  }
};
const SYSTEM_DUNGEON_ACTION_NOTES = {
  DungeonActionDeckTargetted: {
    label: "牌组选择器",
    effect: "打开牌组选择界面，让玩家选择目标牌。",
    note: "通用选择器，不是可获得技能。"
  },
  DungeonActionDynamicDeckTargetted: {
    label: "动态牌组选择器",
    effect: "按当前奖励流程选择牌，并执行删除或升级。",
    note: "通用选择器，不是可获得技能。"
  },
  DungeonActionLevelUpDeckTargetted: {
    label: "升级选牌器",
    effect: "升级时选择要升级或删除的牌。",
    note: "升级流程组件，不是可获得技能。"
  },
  DungeonActionTalentDeckTargetted: {
    label: "天赋选牌器",
    effect: "按天赋需求选择牌，用于升级、删除、复制或获取。",
    note: "天赋流程组件，不是可获得技能。"
  },
  DungeonActionTileTargetted: {
    label: "地图格选择器",
    effect: "让玩家在地图上选择目标格。",
    note: "地图目标选择器，不是可获得技能。"
  },
  DungeonActionUberTeleport: {
    label: "强制传送",
    effect: "执行特殊传送初始化。",
    note: "内部传送流程，不是常规玩家技能。"
  }
};
const SYSTEM_DUNGEON_ACTION_CLASS_NAMES = [
  "DungeonActionDeckTargetted",
  "DungeonActionDynamicDeckTargetted",
  "DungeonActionLevelUpDeckTargetted",
  "DungeonActionTalentDeckTargetted",
  "DungeonActionTileTargetted",
  "DungeonActionUberTeleport"
];
const UNIMPLEMENTED_COMBAT_ABILITY_CLASS_NAMES = [
  "CombatAbilityChannel",
  "CombatAbilityCharm",
  "CombatAbilityDivineFavor",
  "CombatAbilityDoubleEquip",
  "CombatAbilityFlurry",
  "CombatAbilityQuickness",
  "CombatAbilityRecall",
  "CombatAbilityRend",
  "CombatAbilityScrounge",
  "CombatAbilitySerpentStrike",
  "CombatAbilitySoulLeech",
  "CombatAbilitySpellFury",
  "CombatAbilityVenom"
];
const UNIMPLEMENTED_COMBAT_ABILITY_NOTES = {
  CombatAbilityChannel: {
    label: "引导",
    effect: "消耗行动并获得法力。",
    note: "和 Assassin 被动同名主题，但当前没有作为可点击战斗能力入口。"
  },
  CombatAbilityCharm: {
    label: "魅惑",
    effect: "弃掉对手手牌，并按弃牌数量抽牌。",
    note: "没有职业或天赋入口；可能属于未接入能力。"
  },
  CombatAbilityDivineFavor: {
    label: "神恩",
    effect: "完全回复生命并获得法力，同时让对手弃掉手牌和装备。",
    note: "没有职业或天赋入口；可能属于未接入能力。"
  },
  CombatAbilityDoubleEquip: {
    label: "复制装备",
    effect: "为场上装备创建临时复制。",
    note: "没有职业或天赋入口；可能属于未接入能力。"
  },
  CombatAbilityFlurry: {
    label: "连击",
    effect: "获得大量行动点。",
    note: "没有职业或天赋入口；可能属于未接入能力。"
  },
  CombatAbilityQuickness: {
    label: "迅捷",
    effect: "抽牌并获得行动点。",
    note: "显示名恢复为 Shadow Step；没有职业或天赋入口。"
  },
  CombatAbilityRecall: {
    label: "回想",
    effect: "抽取牌库中的下一张法术牌。",
    note: "没有职业或天赋入口；可能属于未接入能力。"
  },
  CombatAbilityRend: {
    label: "撕裂",
    effect: "本回合物理伤害追加额外伤害。",
    note: "没有职业或天赋入口；可能属于未接入能力。"
  },
  CombatAbilityScrounge: {
    label: "搜刮",
    effect: "把对手牌库置入弃牌堆。",
    note: "没有职业或天赋入口；不要和 Professor 的 Research 混用。"
  },
  CombatAbilitySerpentStrike: {
    label: "蛇击",
    effect: "抽牌后弃牌。",
    note: "显示名恢复为 Refocus；没有职业或天赋入口。"
  },
  CombatAbilitySoulLeech: {
    label: "灵魂汲取",
    effect: "造成穿透伤害并治疗；击杀时永久增加生命。",
    note: "显示文本与 Research 串联，需要保留复核标记。"
  },
  CombatAbilitySpellFury: {
    label: "法术狂怒",
    effect: "抽取牌库中的全部法术牌。",
    note: "显示名恢复为 Devastate，但不同于 Wizard 的 6 级 Devastate。"
  },
  CombatAbilityVenom: {
    label: "毒液",
    effect: "施加中毒，并让毒伤绕过多数防御。",
    note: "没有职业或天赋入口；可能属于未接入能力。"
  }
};
const ALL_ACHIEVEMENTS_PROFILE_OVERLAY = {
  health: 4,
  mana: 2,
  gold: 20
};
const PROFESSION_ALL_ACHIEVEMENTS_DECK_OVERRIDES = {
  thief: ["Attack1", "Attack1", "Attack1", "Attack1", "Attack2", "Attack2", "Slice", "Slice", "Backstab"]
};
const START_PROFILE_DIFFICULTY_ORDER = ["kitten", "grizzly", "velociraptor"];
const START_PROFILE_DIFFICULTY_MODIFIERS = {
  kitten: {
    label: "Kitten",
    healthBonus: 5,
    extraAttack1: 0,
    achievement: "不能获得成就点",
    source: "原版实测：全成就 Thief 在 Kitten 为 HP 24。"
  },
  grizzly: {
    label: "Grizzly Bear",
    healthBonus: 0,
    extraAttack1: 1,
    achievement: "默认成就点",
    source: "默认难度；起始牌组追加 Attack1 x1。"
  },
  velociraptor: {
    label: "Velociraptor",
    healthBonus: 0,
    extraAttack1: 2,
    achievement: "双倍成就点",
    source: "高难度；起始牌组追加 Attack1 x2。"
  }
};
const START_PROFILE_DIFFICULTY_ROWS = [
  ["Kitten", "起始 HP +5；起始牌组不额外追加 Attack1", "升级 HP 奖励 +1", "每层额外 HealingPool x1、TreasureChest x1；不能获得成就点。"],
  ["Grizzly Bear", "起始 HP 不加成；起始牌组追加 Attack1 x1", "升级 HP 奖励 +1", "每层额外 HealthPack x1。"],
  ["Velociraptor", "起始 HP 不加成；起始牌组追加 Attack1 x2", "未看到升级 HP 奖励修正", "当前未看到普通奖励补充分支；原版 UI 标注更难，并给双倍成就点。"]
];
const START_PROFILE_LEVEL_UP_HEALTH_ROWS = [
  ["职业基础", "ProfessionBase.LevelUpHealth(targetLevel)", "多数职业 +2；Warrior / Ranger +3；Necromancer +1。"],
  ["难度修正", "Dungeon.difficulty 与难度静态表比较", "Kitten +1，Grizzly Bear +1，Velociraptor +0。"],
  ["档案/成就修正", "用户属性 FLOOR1 / id 71", "若当前档案已有 FLOOR1，则再 +1。"],
  ["结算方式", "DungeonPlayer.GainMaxHealth(total)", "增加最大生命，也增加当前生命；升级收尾还会把当前生命设为最大生命。"]
];
const START_PROFILE_DIFFICULTY_SCOPE_ROWS = [
  ["起始 HP / 牌组", "职业 initializer、档案覆盖、原版难度实测", "职业 initializer 先给基础值；全成就档案再覆盖资源/Thief 牌组；实际开局最后按难度修正 HP，并按难度追加 Attack1。"],
  ["起始蓝 / 金币 / 手牌 / 行动", "职业 initializer 与 starting-profile smoke", "当前按职业和档案覆盖决定；未看到难度额外分支。"],
  ["升级 HP", "DungeonPlayer.ActualLevelUp", "Kitten / Grizzly Bear 各 +1；Velociraptor 当前未看到 HP 修正。"],
  ["地图奖励 / 建筑", "DungeonBoard.GenerateRewards", "Kitten 加 HealingPool 与 TreasureChest；Grizzly Bear 加 HealthPack；Velociraptor 当前未看到普通奖励补充分支。"],
  ["怪物击杀金币 / 经验 / 宝箱", "Monster.Defeated、Monster.GoldValue、Monster.ExpValue", "当前未看到难度分支；按怪物等级、金币/经验倍率和掉落修正结算。有 storedChest 的普通金币怪击杀时 10% 触发宝箱替代金币。"],
  ["成就与成就点", "难度 UI 文本与成就入口", "Kitten 禁用成就/成就点；Velociraptor 给双倍成就点；Grizzly Bear 为默认。"]
];
const MONSTER_KILL_GOLD_ROWS = [
  [1, 3],
  [2, 6],
  [3, 9],
  [4, 10],
  [5, 11],
  [6, 12],
  [7, 14],
  [8, 17],
  [9, 20],
  [10, 25]
];
const PLAYER_EXP_THRESHOLD_ROWS = [
  [1, 0],
  [2, 2],
  [3, 4],
  [4, 7],
  [5, 12],
  [6, 20],
  [7, 25],
  [8, 30],
  [9, 35],
  [10, 45]
];
const CARD_STATUS_OVERRIDES = {
  "wild-strike1": {
    status: "monster",
    detail: "WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。"
  },
  "wild-strike2": {
    status: "monster",
    detail: "WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。"
  },
  "wild-strike3": {
    status: "monster",
    detail: "WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。"
  },
  "wild-mana": {
    status: "monster",
    detail: "WINCHAOS2 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。"
  },
  "deck-of-wonder": {
    status: "normal",
    detail: "不是职业专属卡；不在通用 CardList 中。解析到的固定来源是 Chaos Mage 5 级奖励，但 Chaos Mage 未进入玩家职业选择列表，页面按特殊玩家牌资料展示。"
  }
};
const MONSTER_LOCATION_LABELS = {
  CRYPT: "墓穴",
  DUNGEON: "地牢",
  FOREST: "森林",
  MOUNTAIN: "山脉",
  VOLCANO: "火山",
  WATER: "水域"
};
const MONSTER_WEIGHT_ENVIRONMENTS = [
  ["dungeon", "DUNGEON"],
  ["water", "WATER"],
  ["volcano", "VOLCANO"],
  ["forest", "FOREST"],
  ["crypt", "CRYPT"],
  ["mountain", "MOUNTAIN"]
];
const DUNGEON_TERRAIN_ART_ROWS = [
  {
    value: "0",
    name: "Dungeon",
    location: "DUNGEON",
    floor: [["DungeonTileFloor__584.png", "DungeonTileFloor"]],
    walls: [["DungeonTileWall__1051.png", "DungeonTileWall"]],
    note: "基础地牢地形。"
  },
  {
    value: "1",
    name: "Water",
    location: "WATER",
    floor: [["WaterTileFloor__303.png", "WaterTileFloor"]],
    walls: [
      ["WaterTileWall__961.png", "WaterTileWall"],
      ["WaterTileWall1__661.png", "WaterTileWall1"],
      ["WaterTileWall2__353.png", "WaterTileWall2"],
      ["WaterTileWall3__1019.png", "WaterTileWall3"],
      ["WaterTileWall4__606.png", "WaterTileWall4"]
    ],
    note: "水域有多张墙体变体。"
  },
  {
    value: "2",
    name: "Volcano",
    location: "VOLCANO",
    floor: [["VolcanoTileFloor__379.png", "VolcanoTileFloor"]],
    walls: [["VolcanoTileWall__106.png", "VolcanoTileWall"]],
    note: "火山地形。"
  },
  {
    value: "3",
    name: "Forest",
    location: "FOREST",
    floor: [["ForestTileFloor__548.png", "ForestTileFloor"]],
    walls: [["ForestTileWall__372.png", "ForestTileWall"]],
    note: "森林地形。"
  },
  {
    value: "4",
    name: "Crypt",
    location: "CRYPT",
    floor: [["CryptTileFloor__426.png", "CryptTileFloor"]],
    walls: [["CryptTileWall__617.png", "CryptTileWall"]],
    note: "墓穴地形。"
  },
  {
    value: "5",
    name: "Mountain",
    location: "MOUNTAIN",
    floor: [["MountainTileFloor__169.png", "MountainTileFloor"]],
    walls: [["MountainTileWall__457.png", "MountainTileWall"]],
    note: "山脉地形；LightEnvironment 只识别这个值。"
  },
  {
    value: "6",
    name: "LAST",
    location: "LAST",
    floor: [["FinalTileFloor__845.png", "FinalTileFloor"]],
    walls: [],
    note: "最终层地形。第四层会清掉所有墙，因此没有实际墙图。"
  }
];
const LORD_RANDOM_DECK_EXCLUDED_TOKENS = ["HealingPotion", "PhoenixFeather", "Rush", "FinalFortune", "Electrocute", "Storm"];
const LORD_ATTACK_FILLER_TOKENS = ["Attack1", "Attack2", "Attack3", "Attack4"];
const LORD_EQUIPMENT_TOKENS = ["BootsOfSpeed", "CelestialPlate", "Donnerschwert", "JasrasTome"];
const LORD_PENALTY_TOKENS = [
  "PenaltyCursesFinal",
  "PenaltyDamageFinal",
  "PenaltyExileHand",
  "PenaltyMinusAction",
  "PenaltyMinusAction2",
  "PenaltyMinusCard",
  "PenaltyPoison8",
  "PenaltyPoisonFinal",
  "PenaltyPuppet",
  "PenaltyWard30",
  "PenaltyWardFinal"
];
const LORD_CARD_TOKENS = [
  ...LORD_ATTACK_FILLER_TOKENS,
  "CrushAll",
  ...LORD_EQUIPMENT_TOKENS,
  ...LORD_PENALTY_TOKENS
];
const LORD_NAME_CN = MONSTER_NAME_CN.FinalBoss || "梦境之主";
const LORD_NAME_EN = "Lord of the Dream";
const LORD_ATTRIBUTE_GROUPS = [
  {
    group: "第一组：战斗规则",
    attrs: [
      ["DECREE", "王令", "Makes decrees", "启用 LordlyDecrees。战斗中会生成限制条件，玩家违反王令时触发惩罚。"],
      ["CHOICES", "死亡选择", "Makes you choose your death", "每个 Boss 回合触发 Pick Your Poison，让玩家从最终战惩罚池中选择一个坏结果。"],
      ["CANCELS", "卡牌衰变", "Your cards decay", "玩家打牌后会进行衰变检查；基础条件通过后还要过一次 50% 随机判定，成功时才替换对应牌库实体。"],
      ["GIFTS", "贡品", "Requires gifts", "每个 Boss 回合触发贡品动作；giftCount 越高，本次必须交出的数量越高。"]
    ]
  },
  {
    group: "第二组：抗性与节奏",
    attrs: [
      ["PHYS_IMMUNE", "物理抗性", "Physical resistant", "物理伤害减半。"],
      ["ELEMENT_IMMUNE", "元素抗性", "Elemental resistant", "火焰、电系、冰霜、毒性等元素伤害减半。"],
      ["FAST", "压缩时间", "Reduces your time", "把玩家回合计时器设为 15；这里不是行动点减少。"],
      ["DOUBLE_TURN", "双回合", "Takes double turns", "Boss 进入额外行动节奏，等于更频繁地抽牌、出牌和触发回合开始效果。"]
    ]
  },
  {
    group: "第三组：攻击附加",
    attrs: [
      ["VAMPIRIC", "吸血", "Vampiric", "每回合造成的物理伤害每满 3 点，回复 1 点生命。"],
      ["FLAVORED", "穿透防御", "Piercing", "伤害更容易绕过防御，对依赖护盾 / 减伤的角色更危险。"],
      ["POISONOUS", "中毒", "Poisonous", "Lord 回合开始时使玩家中毒 3。"],
      ["SUPER_EQUIPPED", "重装", "Well-armored", "起手装备 Boots of Speed、Celestial Plate、Donnerschwert、Jasra's Tome。"]
    ]
  }
];
const LORD_BOSS_ATTR_ROWS = [
  {
    enumId: "0",
    id: "DECREE",
    name: "王令",
    group: "第一组",
    prompt: "Makes decrees",
    hint: "When he speaks, those that disobey are punished cruelly.",
    visible: "战斗中会出现 Current Decrees。玩家打牌违反当前王令时，失去 5 点最大生命。"
  },
  {
    enumId: "1",
    id: "CHOICES",
    name: "死亡选择",
    group: "第一组",
    prompt: "Makes you choose your death",
    hint: "When he sings, those who listen go slowly mad.",
    visible: "每个 Lord 回合会出现 Pick Your Poison，从若干坏结果里选择一个立即承受。"
  },
  {
    enumId: "2",
    id: "CANCELS",
    name: "卡牌衰变",
    group: "第一组",
    prompt: "Your cards decay",
    hint: "When he dances, thoughts wither and die.",
    visible: "玩家打牌后会进行衰变检查；基础条件通过后还要过一次 50% 随机判定，成功时才会替换对应牌库实体。"
  },
  {
    enumId: "3",
    id: "GIFTS",
    name: "贡品",
    group: "第一组",
    prompt: "Requires gifts",
    hint: "When he beckons, all must give him gifts.",
    visible: "每个 Lord 回合要求交出若干对象。需求数量按 1、1、2、2、3、3 这样的节奏增加。"
  },
  {
    enumId: "4",
    id: "PHYS_IMMUNE",
    name: "物理抗性",
    group: "第二组",
    prompt: "Physical resistant",
    hint: "His skin shatters swords.",
    visible: "Lord 获得物理抗性，物理伤害减半。"
  },
  {
    enumId: "5",
    id: "ELEMENT_IMMUNE",
    name: "元素抗性",
    group: "第二组",
    prompt: "Elemental resistant",
    hint: "His body breaks storms.",
    visible: "Lord 获得元素抗性，火焰、电系、冰霜、毒性等元素伤害减半。"
  },
  {
    enumId: "6",
    id: "FAST",
    name: "压缩时间",
    group: "第二组",
    prompt: "Reduces your time",
    hint: "His gaze halts arrows in flight.",
    visible: "玩家回合进入 15 秒限时。这里不是减少行动点，也不改变行动点上限。"
  },
  {
    enumId: "7",
    id: "DOUBLE_TURN",
    name: "双回合",
    group: "第二组",
    prompt: "Takes double turns",
    hint: "His will bends time.",
    visible: "Lord 获得双回合节奏，会更频繁地抽牌、行动，并触发自己的回合开始能力。"
  },
  {
    enumId: "8",
    id: "VAMPIRIC",
    name: "吸血",
    group: "第三组",
    prompt: "Vampiric",
    hint: "They say his mother was a vampire.",
    visible: "Lord 每回合造成的物理伤害每满 3 点，回复 1 点生命。"
  },
  {
    enumId: "9",
    id: "FLAVORED",
    name: "穿透",
    group: "第三组",
    prompt: "Piercing",
    hint: "They say his mother was a harpy.",
    visible: "Lord 的攻击偏向 Piercing / 穿透结算，对只靠护盾或减伤硬扛的角色更危险。"
  },
  {
    enumId: "10",
    id: "POISONOUS",
    name: "中毒",
    group: "第三组",
    prompt: "Poisonous",
    hint: "They say his father was a serpent.",
    visible: "Lord 回合开始时使玩家中毒 3。"
  },
  {
    enumId: "11",
    id: "SUPER_EQUIPPED",
    name: "重装",
    group: "第三组",
    prompt: "Well-armored",
    hint: "They say his father was a titan.",
    visible: "Lord 起手带 4 件固定装备：Boots of Speed、Celestial Plate、Donnerschwert、Jasra's Tome。"
  }
];
const LORD_ENTRY_TEXT_ROWS = LORD_BOSS_ATTR_ROWS.map((row) => [
  row.hint,
  `${row.name} / ${row.prompt}`,
  row.visible
]);
const LORD_FINALBOSS_FLOW_ROWS = [
  ["前三层入口", "每层进入文本末尾会追加 Lord 警告，里面的三句暗示对应本局最终战的三组 BossAttr。它不是纯气氛文本，而是在提前告诉玩家最终战会遇到哪三类压力。"],
  ["第四层入口", "第四层不再走普通地牢房间。进入时显示白光、王座和“另一个自己”的文本，然后直接面对 Lord of the Dream。"],
  ["开战数值", "Lord 固定为 1000 生命、5 行动点、每回合抽 5 张、40 法力，并且不能逃跑。基础牌组是 40 张：先从排除 6 张指定牌后的非奖励卡池里不放回抽 20 张，再补 20 张随机 Attack1-4。"],
  ["三组能力生效", "最终战只会从三组里各取一个能力。抗性、限时、双回合、吸血、中毒、穿透、重装、衰变这类效果会直接改变战斗环境；王令、死亡选择、贡品会在战斗过程中持续给玩家压力。"],
  ["Lord 回合开始", "只有死亡选择和贡品是明确每个 Lord 回合主动触发。王令通过出牌监听惩罚违规，其他能力主要作为持续状态影响伤害、节奏或装备。"],
  ["装备破坏压力", "Crush Everything 不是概率事件。战斗有一个全局回合计数，每次进入任意一方的新回合都会 +1；Lord 自己还有一个“下一次清装备档位”，初始为 1。每次 Lord 回合开始时，如果全局回合计数已经达到 档位 × 10，就生成 Crush Everything，并把档位 +1。因此触发点是第 10、20、30……次全局回合之后的 Lord 回合开始；一次 Lord 回合最多推进一档。"],
  ["变形改写", "Polymorph 或 Wild Shape 命中 FinalBoss 时，会让 Lord 重新决定三组能力。先看当前第一组：如果是王令，三组都按普通生成重抽；如果是死亡选择、卡牌衰变或贡品，按下方“变形后的能力变化规律”表改写。"]
];
const LORD_BOSS_ATTR_GENERATION_ROWS = [
  ["第一组", "王令 / 死亡选择 / 卡牌衰变 / 贡品", "决定最终战的规则压力。"],
  ["第二组", "物理抗性 / 元素抗性 / 压缩时间 / 双回合", "决定抗性与战斗节奏。"],
  ["第三组", "吸血 / 穿透 / 中毒 / 重装", "决定攻击附加或起手装备。"]
];
const LORD_BOSS_ATTR_EFFECT_SUMMARY_ROWS = [
  ["回合触发", "死亡选择会在每个 Lord 回合让玩家选择一个坏结果；贡品会在每个 Lord 回合要求交出对象，数量按 1、1、2、2、3、3 递增。"],
  ["出牌限制", "王令会在战斗中生成当前规则，玩家违反时失去 5 点最大生命。"],
  ["牌库压力", "卡牌衰变会在玩家打牌后进行条件检查；基础条件通过后还要过一次 50% 随机判定，成功时才把对应牌库实体替换成衰变目标。不是每次出牌都一定变差，但拖得越久越容易压低牌库质量。"],
  ["抗性与伤害", "物理抗性让物理伤害减半；元素抗性让火焰、电系、冰霜、毒性等元素伤害减半；吸血按每回合物理伤害每 3 点回复 1 点生命；中毒是在 Lord 回合开始时给玩家中毒 3。"],
  ["节奏与装备", "压缩时间给玩家 15 秒回合限制；双回合让 Lord 更频繁行动；重装让 Lord 起手获得 4 件固定装备。"],
  ["额外装备惩罚", "Crush Everything 不属于三组 BossAttr，而是最终战固定的回合阈值机制。到第 10、20、30……次全局回合后的 Lord 回合开始，会生成一张 Crush Everything，摧毁玩家所有装备并放逐自身。"]
];
const LORD_DECAY_RULE_ROWS = [
  ["前置状态", "Lord 拥有 Your cards decay，玩家侧衰变标记生效，且本次由玩家打出一张牌。", "不满足时不进入衰变流程。"],
  ["出牌结算", "当前这张牌先正常结算效果，然后才检查衰变。", "衰变不会取消本次出牌，也不会改变已经结算的效果。"],
  ["特殊牌过滤", "少数特殊牌类型会直接跳过衰变检查。", "这些牌打出后不会改写牌库。"],
  ["随机判定", "通过基础检查后调用战斗随机布尔。这个布尔结果袋每 20 次包含 10 次成功、10 次失败，洗乱后逐个消耗；单次看就是 50%。", "判定失败时，本次出牌不会让牌库变化。"],
  ["定位牌库实体", "游戏能找到这张被打出的牌对应的可替换实体。", "找不到对应实体时，本次出牌不会让牌库变化。"],
  ["执行替换", "通过检查后，把找到的那张牌库实体替换成衰变目标。", "影响主要体现在之后再抽到它时，而不是当前这次出牌。"]
];
const LORD_DECAY_DEFAULT_TARGET_ROWS = [
  ["攻击牌没有明确 DecayTo", "Attack1", "退成最基础的攻击。"],
  ["行动牌没有明确 DecayTo", "Strike", "退成基础行动伤害牌。"],
  ["法术牌没有明确 DecayTo", "Sear", "退成基础火焰法术。"],
  ["其他牌没有明确 DecayTo", "Mana1", "通常落到基础法力牌；显式 DecayTo 仍然优先生效。"]
];
const LORD_SECTION_LINKS = [
  {
    href: "/mechanics/lord/final-boss",
    title: "FinalBoss 全流程",
    summary: "第四层进入、基础属性、开战数值、Crush Everything 阈值和最终战整体顺序。"
  },
  {
    href: "/mechanics/lord/bossattr",
    title: "BossAttr 与楼层暗示",
    summary: "三组能力、Portent 提示、楼层入口文本、玩家可见效果和变形后的能力改写。"
  },
  {
    href: "/mechanics/lord/card-decay",
    title: "卡牌衰变",
    summary: "Your cards decay 的触发条件、50% 随机判定、默认衰变目标和完整卡图衰变链。"
  },
  {
    href: "/mechanics/lord/decrees-gifts-choices",
    title: "王令、贡品与死亡选择",
    summary: "LordlyDecrees、Requires gifts、Pick Your Poison 的实际结算和对应惩罚牌。"
  },
  {
    href: "/mechanics/lord/deck-and-interactions",
    title: "牌组与特殊交互",
    summary: "基础牌组生成、随机候选池、起手装备、特殊死亡交互和最终战相关卡牌。"
  }
];
const LORD_POLYMORPH_CHANGE_ROWS = [
  ["王令 / Makes decrees", "王令、死亡选择、卡牌衰变、贡品，各 1/4", "物理抗性、元素抗性、压缩时间、双回合，各 1/4", "吸血、穿透、中毒、重装，各 1/4"],
  ["死亡选择 / Makes you choose your death", "王令 1/3；卡牌衰变 2/3", "物理抗性、元素抗性、压缩时间，各 1/3", "吸血、穿透、中毒，各 1/3"],
  ["卡牌衰变 / Your cards decay", "王令、死亡选择、贡品，各 1/3", "物理抗性、元素抗性、压缩时间，各 1/3", "吸血、穿透、中毒，各 1/3"],
  ["贡品 / Requires gifts", "王令、死亡选择、卡牌衰变，各 1/3", "物理抗性、元素抗性、压缩时间，各 1/3", "吸血、穿透、中毒，各 1/3"]
];
const LORD_EVIL_CHOICE_ROWS = [
  ["PenaltyCursesFinal", "Curses!", "若玩家没有 mindImmune，向玩家牌库加入 5 张 Curse，然后洗牌。"],
  ["PenaltyDamageFinal", "Damage!", "对玩家造成 20 点类型 6 伤害；类型 6 在最终战同样用于 Piercing / 穿透语义。"],
  ["PenaltyExileHand", "Exile Hand!", "遍历玩家当前手牌，把手牌里的牌逐张放逐。"],
  ["PenaltyPoison8", "Poison!", "对玩家施加 8 层 Poison。"],
  ["PenaltyMinusAction", "Lose Action!", "调用 LoseMaxAction 一次，玩家最大行动点 -1。"],
  ["PenaltyMinusCard", "Lose Card!", "调用 LoseMaxCard 一次，玩家每回合抽牌 / 手牌相关上限 -1。"],
  ["PenaltyPuppet", "Puppet!", "生成 MimicAction，并按目标参数 0x3b 绑定到玩家侧，形成 Puppet 选择结果。"],
  ["PenaltyWard30", "Ward!", "找到玩家的对手，也就是 Lord，给 Lord 增加 30 点 Ward / Shield。"]
];
const LORD_DECREE_RULE_ROWS = [
  ["当前王令", "界面会提供 Current Decrees 查看入口，玩家可以确认当前仍在生效的限制。"],
  ["王令类型", "王令围绕 Attack、Action、Mana、Spell、Equipment 等出牌方向生成。"],
  ["违规检查", "玩家打出卡牌后会检查是否违反当前王令。"],
  ["违规惩罚", "违反王令会失去 5 点最大生命；这不是普通当前生命伤害。"]
];
const LORD_GIFT_FLOW_ROWS = [
  ["触发频率", "只有抽到 GIFTS / Requires gifts 时，每个 Lord 回合都会要求贡品。"],
  ["数量节奏", "需求数量按 1、1、2、2、3、3 递增；战斗越久，单次要求越重。"],
  ["可交对象", "实际要求会根据玩家当前可交出的对象截断；没有可交对象时不会强行结算。"],
  ["界面文本", "1 个目标时显示 Give me a gift!，多个目标时显示 Give me N gifts!。"],
  ["结算结果", "玩家选择交出的对象会离开玩家侧，改为 Lord / 对手侧所有。"]
];
const MONSTER_DEVOUR_LABELS = {
  1: "基础生物",
  2: "法术型",
  3: "亡灵型",
  4: "装备型",
  5: "净化型",
  6: "巨型/Boss 型",
  7: "迅捷型",
  8: "火焰型",
  9: "冰霜型",
  10: "毒性型",
  11: "电系型"
};
const MONSTER_RULE_STATUS = {
  behavior_and_levelup_trace: "机制与等级变化",
  behavior_trace_available: "有机制",
  levelup_trace_available: "有等级变化",
  index_only: "基础资料"
};
const MONSTER_FIELD_LABELS = {
  "Monster.0x108": "怪物状态字段 0x108",
  "Monster.0x114": "怪物状态字段 0x114",
  "Monster.0x118": "禁用牌型字段"
};
const PLAYER_ATTRIBUTE_LABELS = {
  24: "抽牌/手牌相关属性",
  25: "行动点相关属性",
  28: "吸血/亡灵相关属性",
  31: "复生/特殊状态"
};
const NEGATIVE_EFFECTS = [
  {
    id: "poisoned",
    name: "中毒 / Poisoned",
    aliases: ["Poisoned", "poison", "purePoison", "actionPoison", "BePoisoned", "PoisonPlayer", "中毒"],
    operations: ["Card.PoisonPlayer", "Player.BePoisoned", "Player.PurePoison", "Player.ActionPoison"],
    includeCards: ["AcidBreath", "AcidLance", "AcidRain", "Bleed", "Blight", "Hemorrhage", "Infect", "Infect1", "Infect2", "Infect3", "MimicAction", "MimicAction2", "NaturesBlessing", "PoisonDagger", "Rake", "Sting", "Venom", "Wolf"],
    description: "持续型毒性压力。中毒层数会累积，回合开始时按层数造成毒性伤害。",
    details: [
      "中毒角色回合开始时，先受到等于当前中毒层数的毒性伤害，然后中毒层数减少 1；降到 0 后不再结算。",
      "直接施加值包括 Poisoned 1 / 2 / 3 / 4 / 5 / 6；Blight 先给 Poisoned 5，再把已有中毒翻倍，额外增加最多 30 层。",
      "Poison Dagger 是触发型来源：每当一回合内打出第 2 张攻击牌时，让对手获得 Poisoned 1。"
    ],
    impact: "玩家被中毒后需要缩短战斗、清理来源或准备回复；高层数时即使挡住直接伤害，也会继续承担毒性压力。"
  },
  {
    id: "chilled",
    name: "寒冷 / Chilled",
    aliases: ["Chilled", "BaseChilled", "chill", "寒冷"],
    operations: ["Player.Chilled", "Player.BaseChilled"],
    includeCards: ["Blizzard", "Freeze", "FrostBolt", "FrostCharge", "NaturesBlessing", "Suffocate"],
    description: "冰霜系状态，也会降低该角色造成的攻击伤害。",
    details: [
      "被 Chilled 的角色造成攻击伤害时，伤害会减去当前 Chilled 数值，最低降到 0；也就是玩家被寒冷时，玩家自己的攻击伤害会变低。",
      "普通 Chilled 通常持续到目标下个回合结束；Blizzard 给 2 层，Frost Bolt / Frost Charge / Suffocate 给 1 层。重复施加时取较高值，不按次数相加。",
      "Freeze 同时给 Chilled 3 和 BaseChilled 1；BaseChilled 是整场保留的基础寒冷，也按较高值写入。",
      "Blizzard、Freeze、Frost Bolt 的伤害文本会检查目标是否 Chilled；目标已寒冷时，冰霜伤害翻倍。"
    ],
    impact: "玩家被寒冷后，自己的攻击伤害会降低，同时后续冰霜伤害会变得更危险；如果怪物牌组里有多张冰霜牌，寒冷本身就是连锁伤害的前置条件。"
  },
  {
    id: "weakened",
    name: "虚弱 / Weakened",
    aliases: ["Weakened", "Weakness", "PermWeakness", "虚弱"],
    operations: ["Card.Weakness", "Card.PermWeakness"],
    includeCards: ["Expose", "Skewer", "SunderingStrike", "SunderingStrike1", "SunderingStrike2", "SunderingStrike3", "TheBleeder", "SharkBite", "SharkBite2"],
    description: "提高该角色受到的攻击伤害。解析里分为临时 Weakness 和整场保留的 PermWeakness。",
    details: [
      "被 Weakened 的角色受到攻击伤害时，伤害会按 Weakened 数值增加；也就是玩家被虚弱时，玩家受到的攻击伤害会变多。",
      "临时 Weakness 通常持续本回合：Expose 给 Weakened 2，Skewer 给 Weakened 1，Sundering Strike 系列给 1 / 2 / 3。",
      "The Bleeder 是触发型来源：每打出一张攻击牌，让对手获得 Weakened 1。",
      "Shark Bite / Shark Bite (2) 使用 PermWeakness，分别给 1 / 2 层，持续到本场战斗结束。"
    ],
    impact: "玩家被虚弱后，敌人的攻击伤害会更疼；永久虚弱会影响整场战斗，不适合拖回合。"
  },
  {
    id: "curses",
    name: "诅咒 / Curses",
    aliases: ["curse", "curses", "CurseOfWeakness", "DeadlyCurse", "诅咒"],
    operations: [],
    includeCards: ["Curse", "CurseOfWeakness", "DeadlyCurse", "InfernalContract", "Stone"],
    description: "牌组污染。Curse 本身通常没有效果，但会占据抽牌、手牌和牌库空间。",
    details: [
      "Curse of Weakness 会把 2 张无效果 Curse 洗入对手牌库，并抽 1 张牌。",
      "Stone 会把 2 张 Curse 洗入对手牌库，并让对手弃 1 张牌。",
      "Deadly Curse 会把对手手牌中的 3 张随机非 Curse 牌替换成 Curse；Infernal Contract 会让对手弃掉整手牌，并按弃牌数量获得同等数量的 Curse。"
    ],
    impact: "玩家被塞入诅咒后，关键牌更难抽到；如果敌人还会按手牌中的诅咒数量造成伤害，污染会直接转化成伤害风险。"
  },
  {
    id: "doom-curse",
    name: "末日诅咒 / Curse of Doom",
    aliases: ["Curse of Doom", "CurseOfDoom", "after 5 turns", "末日诅咒"],
    operations: [],
    includeCards: ["CurseOfDoom", "CurseOfDoom2", "CurseOfDoomPlayer"],
    description: "延迟穿透伤害牌。三张同名显示牌的后台数值不同，不能合并理解。",
    details: [
      "CurseOfDoom：5 回合后造成 30 点穿透伤害。",
      "CurseOfDoom2：5 回合后造成 50 点穿透伤害。",
      "CurseOfDoomPlayer：玩家可见版本，5 回合后造成 50 点穿透伤害。"
    ],
    impact: "它不是 Zombie Bite 那种延迟死亡状态，而是一张带倒计时的伤害牌；处理重点是倒计时结束前结束战斗、移除牌或准备承受穿透伤害。"
  },
  {
    id: "burning",
    name: "燃烧 / Burning",
    aliases: ["burning", "starts burning", "Burning", "燃烧"],
    operations: ["Card.Burning", "Player.Burning"],
    includeCards: ["Burn", "Burn2"],
    description: "火焰持续伤害。Burn / Burn (2) 会让对手在回合开始时持续受到火焰伤害。",
    details: [
      "Burn：目标每个回合开始时受到 1 点火焰伤害，持续到本场战斗结束。",
      "Burn (2)：目标每个回合开始时受到 2 点火焰伤害，持续到本场战斗结束。",
      "燃烧不是一次性火焰伤害；它会按回合反复结算。"
    ],
    impact: "玩家被燃烧后要评估后续回合的持续伤害，尤其是面对火焰牌组或高抽牌怪物时。"
  },
  {
    id: "action-loss",
    name: "行动点减少 / Action loss",
    aliases: ["loses 1 @tim", "loses 2 @tim", "loses 3 @tim", "loses all their @tim", "LoseActions", "行动点减少"],
    operations: ["Card.LoseActions"],
    includeCards: ["LightningBreath", "Slow", "Solidify", "Web", "Web2", "DragonsTail", "Zap"],
    description: "限制当前回合或后续战斗行动点。Web、Slow、Solidify、Zap 等都会让对手失去行动点。",
    details: [
      "Web / Slow：对手弃 1 张牌，并失去 1 行动点。",
      "Web (2) / Lightning Breath：对手失去 2 行动点；Web (2) 还会弃 2 张牌。",
      "Solidify：对手弃 3 张牌，并失去 3 行动点。Dragon's Tail / Zap 会清空对手当前行动点。"
    ],
    impact: "玩家行动点减少后，可能无法打出关键行动牌、装备或补救牌；这里只列减少行动点的卡，不列获得行动点的正收益牌。"
  },
  {
    id: "hand-disruption",
    name: "弃牌与放逐 / Discard & Exile",
    aliases: ["your opponent discards", "opponent discards", "your opponent exiles", "opponent exiles", "opponent's hand", "ForceDiscard", "ForceRandomDiscard", "RandomExile", "弃牌", "放逐"],
    operations: ["Card.ForceDiscard", "Card.ForceRandomDiscard", "Player.RandomExile"],
    includeCards: ["Beckon", "DeadlyCurse", "Digest", "DragonsRoar", "FrostBolt", "FrostBreath", "InfernalContract", "Kick", "Scream", "Slow", "Solidify", "Stasis", "Stone", "Suffocate", "Web", "Web2"],
    description: "直接破坏手牌。弃牌会把牌送走，放逐会让牌离开本场战斗的常规循环。",
    details: [
      "Web / Slow / Stone：弃 1 张牌；Web (2) / Frost Breath / Scream / Suffocate：弃 2 张牌；Dragon's Roar / Solidify / Stasis：弃 3 张牌。",
      "Kick 是随机弃 1 张牌；Beckon 随机放逐 2 张对手手牌；Digest 随机放逐 1 张对手手牌。",
      "Deadly Curse 不是普通弃牌：它把 3 张随机非 Curse 手牌替换成 Curse。Infernal Contract 会弃掉整手牌，并按弃牌数量获得 Curse。"
    ],
    impact: "玩家需要避免把关键牌长时间留在手牌里；面对放逐效果时，单张核心牌策略风险更高。"
  },
  {
    id: "hand-limit",
    name: "最大手牌减少 / Max hand loss",
    aliases: ["maximum hand size is reduced", "LoseMaxCard", "最大手牌减少"],
    operations: ["Player.LoseMaxCard"],
    includeCards: ["Entrap"],
    description: "降低最大手牌数。当前解析到的实际卡牌来源是 Entrap。",
    details: [
      "Entrap 的文本明确写着 maximum hand size is reduced by 1，并且会额外弃 1 张牌。",
      "最大手牌减少会让后续回合更容易爆手牌、少拿抽牌收益。",
      "这个分类只收录真正降低最大手牌数的卡牌，不收录按最大手牌数提供收益的卡牌。"
    ],
    impact: "玩家被减最大手牌后，抽牌牌和保留牌的价值下降；如果战斗继续拖长，资源上限会被持续压低。"
  },
  {
    id: "mana-drain",
    name: "法力清空 / Mana drain",
    aliases: ["loses all mana", "loses all their mana", "loses all their @tim and mana", "loses 5 mana", "ManaDrain", "Choke", "Zap", "法力清空"],
    operations: [],
    includeCards: ["Choke", "DragonsTail", "ManaDrain", "Zap"],
    description: "清空当前法力或减少法力上限。Choke、Zap、Mana Drain 等会直接破坏法力计划。",
    details: [
      "Choke：造成 3 点攻击伤害，并让对手失去全部当前法力。",
      "Zap：让对手失去全部当前法力和全部当前行动点。",
      "Mana Drain：让对手失去 5 点法力，并把实际失去的法力转给使用者。Dragon's Tail 也会同时清空对手行动点和法力。"
    ],
    impact: "玩家依赖法术或高费牌时，法力清空会直接打断整回合计划。"
  },
  {
    id: "equipment-destruction",
    name: "装备破坏 / Equipment destruction",
    aliases: ["Destroy an equipment card", "Destroy all your opponent's equipment", "LoseAllEquipment", "Crush", "Crush Everything", "装备破坏"],
    operations: ["Player.LoseAllEquipment"],
    includeCards: ["Crush", "CrushAll"],
    description: "移除装备。Crush 破坏单个装备，Crush Everything 破坏全部装备。",
    details: [
      "Crush：破坏 1 张装备牌；如果成功破坏，额外造成 3 点攻击伤害。",
      "Crush Everything：破坏对手所有装备，并放逐自身。",
      "如果牌组没有备份输出，失去装备可能比一次伤害更致命。"
    ],
    impact: "玩家应避免把全部强度压在单套装备上，尤其面对会使用 Crush 或 Crush Everything 的怪物。"
  },
  {
    id: "delayed-death",
    name: "延迟死亡 / Delayed lethal",
    aliases: ["ZombieBite", "diseased", "Zombie Bite", "延迟死亡"],
    operations: ["Player.ZombieBite"],
    includeCards: ["ZombieBite"],
    description: "给玩家一个死亡倒计时。当前按卡牌效果归类的来源是 Zombie Bite。",
    details: [
      "Zombie Bite 会给目标 5 层 diseased。",
      "目标每个回合开始时失去 1 层 diseased；当最后 1 层被移除时，目标死亡。",
      "这个分类只收录敌方施加的死亡倒计时，不收录延迟伤害牌或使用者自担风险牌。"
    ],
    impact: "玩家看到倒计时后需要改变目标优先级：要么在计时结束前结束战斗，要么准备免疫、治疗或其他解法。"
  }
];
const PROFESSION_DESCRIPTIONS_CN = {
  assassin: "刺客适合用低费用行动牌滚动节奏，靠行动触发获得法力，再把法力转成连段或爆发。",
  bard: "吟游诗人用歌曲改变下一场战斗或地图节奏，成长时更像多方向的辅助与节奏职业。",
  chaosmage: "混沌法师围绕随机、变形和高波动奖励展开，强度来自把不可控收益转成优势。",
  dragon: "龙没有常规法力起手，依靠 Devour、Dragon's Snack 和 Hoard 把怪物、金币和固定奖励转成长线优势。",
  druid: "德鲁伊在人形和狼形之间切换：人形偏法术，狼形偏攻击，牌组会随形态改变。",
  monk: "武僧用冥想精简牌库，起手偏物理与稳定牌，成长重点是保留高质量牌。",
  necromancer: "死灵法师用生命、法力和墓地收益滚动资源，适合围绕吸血与亡灵牌建立续航。",
  paladin: "圣骑士用神圣牌、治疗和自动升级攻击牌稳定成长，适合稳扎稳打的牌组。",
  priest: "牧师起手有法力与祈祷牌，擅长揭示地图、治疗和控制奖励质量。",
  professor: "教授通过研究敌方牌组获得新牌，职业强度来自把对手资源转成自己的长期牌库。",
  random: "随机职业会从已解锁且可获得成就的职业里抽选一个，实际机制取决于被选中的职业。",
  ranger: "游侠用隐形绕开地图风险，牌组倾向敏捷、攻击和装备槽成长。",
  samurai: "武士靠击败同级或更高等级敌人完全回复，适合追求高风险连战节奏。",
  thief: "盗贼擅长金币、宝箱和行动节奏，能更频繁接触经济与盗贼向卡牌。",
  warrior: "战士是最直接的物理成长职业，起手攻击稳定，并用 Smash 打开地图路线。",
  wizard: "法师用法力与传送控制地图和战斗节奏，奖励更偏法术、法力和元素牌。"
};
const PROFESSION_ABILITY_CN = {
  assassin: "Channel：每当刺客打出行动牌时，获得 2 点法力。",
  bard: "Sing：吟游诗人会学习歌曲。每首歌都可以作为地牢行动使用，冷却为 3 场战斗，效果通常持续到下一场战斗或立即影响地图。",
  chaosmage: "Wild Shape：每 3 场战斗，混沌法师可以随机替换一个怪物。",
  dragon: "Devour：每 3 场战斗可吞噬一个可见普通非首领生物，获得经验和吞噬收益。Hoard：花费金币换取龙族成长，费用随已使用次数提高。",
  druid: "Shapeshifting：每场战斗后，德鲁伊在人形和狼形之间切换。人形牌组没有攻击牌，狼形没有法力和法术牌。",
  monk: "Meditate：每 4 场战斗，武僧可以进入冥想并遗忘自己牌库中的 1 张牌。",
  necromancer: "Portal：每 3 场战斗，死灵法师可以在怪物位置打开传送门，并与它交换位置。",
  paladin: "Holy War：每 2 场战斗，圣骑士会自动升级牌库中的 1 张攻击牌。",
  priest: "Oracle：每 2 场战斗，牧师可以揭示一个格子以及周围 8 个格子。",
  professor: "Research：战斗中，教授可以从对手牌库搜索 1 张牌加入手牌，并永久加入自己的牌库。",
  random: "随机职业会从已解锁、且可获得成就的职业里选择一个。",
  ranger: "Invisibility：每 4 场战斗，游侠可以进入隐形；在与地牢互动前，可以不被怪物发现地穿过它们。",
  samurai: "Bushido：每当武士击败等级不低于自己的对手时，完全回复生命。",
  thief: "Find Treasure：每 4 场战斗，盗贼可以发现其他职业找不到的宝藏。",
  warrior: "Smash：每 2 场战斗后，战士可以摧毁地牢中的一面墙。",
  wizard: "Teleport：每场战斗后，法师可以传送到地图任意位置，包括尚未发现的位置。"
};
const PROFESSION_MECHANIC_NOTES = {
  assassin: [
    "Channel 只看是否打出行动牌，不要求行动牌造成伤害；因此低费行动和抽牌行动都能把行动点转换成法力。",
    "起手 1 点法力，成长奖励里有行动点、金币、升级、生命和法力选项，适合把行动牌密度维持得较高。"
  ],
  bard: [
    "Bard 的核心是 Song。学到的歌会变成可使用的 Sing 地牢行动；Sing 的冷却是 3 场战斗，使用时调用该歌曲的效果。",
    "歌曲多数影响下一场战斗，也有少量直接影响地图，例如生成治疗包或进入隐形。"
  ],
  chaosmage: [
    "Wild Shape 选择一个可见怪物并替换为随机生成的怪物，同时刷新该格子和首领相关属性。",
    "固定奖励包含 Deck of Wonder，成长路线偏随机牌、删除牌和高波动能力。"
  ],
  dragon: [
    "Devour 是地城行动：每 3 场战斗冷却，目标必须是可见的普通非首领怪物格。成功后获得该怪物经验，并按怪物的 Devour 类型结算额外奖励。",
    "Dragon's Snack 是 5 级固定卡牌奖励。它只在对手生命不超过 5 时可打出；若击杀成立，也会按下方同一套吞噬奖励结算。",
    "Hoard 是龙自带的地城行动，核心是把金币换成龙族成长奖励；它从龙职业开始就存在，成就强化只影响奖励档位，不是解锁这个行动。"
  ],
  druid: [
    "德鲁伊战斗后切换形态。人形牌组移除攻击牌，更偏法术；狼形没有法力和法术牌，更偏攻击。",
    "职业页里的起始牌组是基础资料；实际进入战斗时，会根据当前形态生成对应战斗牌组。"
  ],
  monk: [
    "Meditate 是牌库精简能力：选择自己的牌并永久移除，冷却 4 场战斗。",
    "武僧固定在早期获得行动点奖励，后续更适合把低质量起手牌删掉。"
  ],
  necromancer: [
    "Portal 选中怪物位置并与其交换位置，主要用于重新规划路线和避开危险。",
    "死灵法师有额外法力成长入口，升级奖励更容易支持吸血、亡灵和法术牌。"
  ],
  paladin: [
    "Holy War 在战斗胜利后计数，每 2 场自动寻找最低阶攻击牌并升级。",
    "圣骑士的奖励同时覆盖法力、装备槽、升级和神圣牌，适合长期提高基础牌质量。"
  ],
  priest: [
    "Oracle 直接揭示目标格和它周围 8 格，并清除这些格子的隐形状态。",
    "Desperate Prayer 是 3 场战斗冷却的战斗技能，会在 5 个固定分支中等概率随机触发 1 个。",
    "牧师有额外法力成长入口，固定奖励包含 Inspiration。"
  ],
  professor: [
    "Research 是战斗能力：从敌方牌库搜索牌加入手牌，并永久加入自己的牌库。",
    "教授基础权重固定为 10，更少受四基础职业方向限制，成长重点是通过 Research 扩牌。"
  ],
  random: [
    "Random 本身只是职业选择入口；进入游戏后会换成被抽中的真实职业。",
    "实际卡牌出现权重、技能冷却和升级奖励都以被选中的职业为准。"
  ],
  ranger: [
    "Invisibility 让游侠在与地牢互动前穿过怪物而不触发战斗。",
    "游侠有行动点和装备槽固定奖励节点，牌池更偏攻击、敏捷和装备。"
  ],
  samurai: [
    "Bushido 在胜利后检查怪物等级；击败等级不低于自己的敌人时完全回复。",
    "这使武士适合主动挑战高等级敌人，但若击杀低等级敌人，则不会触发完全回复。"
  ],
  thief: [
    "Find Treasure 会在玩家附近生成额外宝箱，并刷新玩家显示。",
    "盗贼有金币成长入口，奖励池也偏盗贼、行动和经济牌。"
  ],
  warrior: [
    "Smash 选择可见墙体，把墙改为可通过格并刷新该格。",
    "战士在 5 级固定获得装备槽奖励，出卡权重直接读取卡牌 metadata 的战士权重。"
  ],
  wizard: [
    "Teleport 可以把玩家传送到地图任意格，包括未探索区域；这让法师可以绕开路线限制。",
    "法师有额外法力成长入口，并在固定奖励中获得 Mana Surge。"
  ]
};

const DRAGON_DEVOUR_REWARD_ROWS = [
  {
    id: "1",
    type: "Goblin / 野兽型",
    examples: "Giant Spider、Goblin、Goblin Hoarder、Harpy、Kobold、Orc、Piranha、Wyvern",
    reward: "完全回复生命；不增加最大生命。"
  },
  {
    id: "2",
    type: "Magic / 法术型",
    examples: "Akami 系、Chromatic Demon、Genie、Mage、Pixie、Sphinx、Wisp",
    reward: "获得法力 +max(1, floor(怪物等级 / 2))，并随机获得一张火焰、冰霜、毒性或电系法术。"
  },
  {
    id: "3",
    type: "Undead / 亡灵型",
    examples: "Banshee、Ghost、Ghoul、Lich、Skeleton、Vampire、Wraith、Zombie",
    reward: "75% 受到等同怪物等级的伤害；25% 获得 +1 Card，也就是每回合抽牌/手牌 +1。"
  },
  {
    id: "4",
    type: "Human / 装备型",
    examples: "Clone、Goblin Mechanist、Mime、Mimic、Warrior",
    reward: "获得 +1 Equipment Slot，也就是装备槽 +1。"
  },
  {
    id: "5",
    type: "Priest / 净化型",
    examples: "Demon、Disciple of Chaos、Hag、Medusa、Priest、Siren",
    reward: "打开 Delete2 删除牌奖励，可从牌组中删除 2 张牌。"
  },
  {
    id: "6",
    type: "Giant / 巨型型",
    examples: "Gelatinous Cube、Giant Shark、Kraken、Goblin King、Griffon、Hydra、Stone Golem、Storm Giant、Titan、Treant、Troll、Unicorn",
    reward: "获得最大生命 +max(1, 怪物等级)。"
  },
  {
    id: "7",
    type: "Thief / 迅捷型",
    examples: "Akami Stormcaller、Brownie、Faerie Rogue、Thief、Ussuri 系",
    reward: "获得 +1 Action，也就是行动点 +1。"
  },
  {
    id: "8",
    type: "Fire / 火焰型",
    examples: "Fire Elemental、Magmadon、Phoenix、Red Dragon",
    reward: "获得法力 +max(1, floor(怪物等级 / 2))，并获得一张火焰法术。"
  },
  {
    id: "9",
    type: "Frost / 冰霜型",
    examples: "Ice Queen、Water Elemental、White Dragon",
    reward: "获得法力 +max(1, floor(怪物等级 / 2))，并获得一张冰霜法术。"
  },
  {
    id: "10",
    type: "Poison / 毒性型",
    examples: "Shadow Dragon、Earth Elemental",
    reward: "获得法力 +max(1, floor(怪物等级 / 2))，并获得一张毒性法术。"
  },
  {
    id: "11",
    type: "Lightning / 电系型",
    examples: "Air Elemental、Yellow Dragon",
    reward: "获得法力 +max(1, floor(怪物等级 / 2))，并获得一张电系法术。"
  }
];

const PRIEST_DESPERATE_PRAYER_ROWS = [
  {
    roll: "0",
    label: "Knowledge!",
    effect: "抽 5 张牌。"
  },
  {
    roll: "1",
    label: "Protection!",
    effect: "获得 25 点护盾，等同防止接下来 25 点将受到的伤害。"
  },
  {
    roll: "2",
    label: "Death!",
    effect: "对手失去 min(floor(当前生命 / 2), 60) 点生命；这是直接生命变化，不是元素伤害。"
  },
  {
    roll: "3",
    label: "Speed!",
    effect: "获得 1 个额外回合。"
  },
  {
    roll: "4",
    label: "Armored!",
    effect: "创建并装备 Celestial Plate、Deck of Wonder、Pendant。"
  }
];

const DRAGON_MAGIC_SPELL_ROWS = [
  { element: "火焰", low: ["Fireball", "Fireball"], mid: ["Meteor", "Meteor"], high: ["Conflagration", "Conflagration"] },
  { element: "冰霜", low: ["FrostBolt", "Frost Bolt"], mid: ["Blizzard", "Blizzard"], high: ["Freeze", "Freeze"] },
  { element: "毒性", low: ["AcidLance", "Acid Lance"], mid: ["AcidRain", "Acid Rain"], high: ["Blight", "Blight"] },
  { element: "电系", low: ["Shock", "Shock"], mid: ["Electrocute", "Electrocute"], high: ["Storm", "Storm"] }
];

const DRAGON_HOARD_DETAIL_ROWS = [
  {
    step: "按钮与费用",
    detail: "按钮显示为 Hoard (X Gold)。第 n 次使用前的费用是 10 + 5 × n，n 从 0 开始；前三次分别是 10、15、20 金币。"
  },
  {
    step: "使用条件",
    detail: "必须轮到当前角色、当前金币不少于费用，并且 Hoard 的 currentCooldown 为 0。Hoard 自身没有普通职业技能那种固定战斗冷却。"
  },
  {
    step: "支付与窗口",
    detail: "使用时先扣除金币，然后打开 New Power! / Choose One: 奖励窗口。"
  },
  {
    step: "未强化档位",
    detail: "未完成 WinDragon2 / Unlikely Champion 时，两个候选奖励按当前费用和 2 倍当前费用生成。费用越高，候选成长越强。"
  },
  {
    step: "成就强化",
    detail: "完成 WinDragon2 / Unlikely Champion 后，Hoard 自身被强化：候选奖励从“费用 / 2 倍费用”提升为“2 倍费用 / 3 倍费用”。"
  },
  {
    step: "强化不改变的部分",
    detail: "WinDragon2 不改变 Hoard 的入口、费用公式、金币支付或已使用次数；它只提高这次 Hoard 生成奖励时使用的奖励档位。"
  },
  {
    step: "实际例子",
    detail: "如果当前 Hoard 费用是 20 金币，未强化时按 20 / 40 生成两个候选奖励；完成 WinDragon2 后仍支付 20 金币，但候选奖励按 40 / 60 生成。"
  },
  {
    step: "完成选择",
    detail: "选完奖励后，Hoard 的已使用次数 +1，并刷新角色能力显示；下一次 Hoard 费用随之提高。"
  }
];
const ACHIEVEMENT_FLAVOR_LABELS = {
  PASSIVE: "被动解锁",
  TALENT: "天赋解锁",
  CARD: "卡牌解锁",
  CLASS: "职业解锁"
};
const ACHIEVEMENT_FLAVOR_ORDER = ["CARD", "CLASS", "TALENT", "PASSIVE"];
const TALENT_SCOPE_LABELS = {
  dungeon_or_immediate: "地牢/立即生效",
  player_combat_or_passive: "战斗被动"
};
const TALENT_EFFECT_TRANSLATIONS = new Map([
  ["Gain 20 health, 5 mana, and an action", "获得 20 点生命上限、5 点法力和 1 点行动点。"],
  ["Your opponents' hand sizes are reduced by 1", "对手手牌上限减少 1。"],
  ["Draw one additional card each turn", "每回合额外抽 1 张牌。"],
  ["Start each combat with a sword, shield, and armor in play", "每场战斗开始时，Sword、Shield 和 Armor 已经在场。"],
  ["Items in shops are free", "商店物品免费。"],
  ["Add the action card Tiltowait to your deck which deals 20 piercing damage", "将行动牌 Tiltowait 加入牌组；它造成 20 点穿透伤害。"],
  ["For every three points of physical damage you deal each turn, gain 1 life", "每回合你每造成 3 点物理伤害，回复 1 点生命。"],
  ["At the beginning of your turn, poison your opponent 3", "你的回合开始时，使对手中毒 3。"],
  ["Your spells no longer cost mana", "你的法术不再消耗法力。"],
  ["You take half damage (rounded down) from all elements", "你受到的所有元素伤害减半，向下取整。"],
  [
    "The next time you would die, your health is instead set to its maximum and you are invulnerable until your next turn",
    "下一次你将死亡时，改为将生命恢复到最大值，并直到你的下个回合前保持无敌。"
  ],
  ["Choose up to three cards from your deck and delete them", "从牌组中选择最多 3 张牌并删除。"],
  ["Your opponents take an additional point of damage from each of your physical sources", "你的每个物理伤害来源对对手额外造成 1 点伤害。"],
  ["5 additional beneficial objects appear on this dungeon floor", "当前地牢楼层额外出现 5 个有益对象。"],
  ["The first time you play an action card each turn, draw a card", "每回合第一次打出行动牌时，抽 1 张牌。"],
  ["When you have 15 or less life, draw three additional cards each turn", "当你的生命不高于 15 时，每回合额外抽 3 张牌。"],
  ["At the start of each turn, draw a temporary Fireball", "每回合开始时，抽 1 张临时 Fireball。"],
  ["You have a 30% chance to prevent opponent's action or spell cards from having an effect", "你有 30% 概率阻止对手的行动牌或法术牌生效。"],
  ["Upgrade each card in your deck that can be upgraded to its maximum level", "将牌组中所有可升级牌升到最高等级。"],
  ["All your damage is piercing", "你造成的所有伤害都具有穿透。"],
  ["Start each fight with a random equipment", "每场战斗开始时获得 1 件随机装备。"],
  ["Gain 30 gold", "获得 30 金币。"],
  ["Gain 1 action", "获得 1 点行动点。"],
  ["Gain one equipment slot", "获得 1 个装备槽。"],
  ["Learn the Polymorph dungeon ability which replaces a monster (cooldown 5)", "获得 Polymorph 地城能力：替换 1 个怪物，冷却 5。"],
  ["Add the Wisdom, Ward, and Prayer of Wrath cards to your deck", "将 Wisdom、Ward 和 Prayer of Wrath 加入牌组。"],
  ["Add the Backstab, Jab, and Alacrity cards to your deck", "将 Backstab、Jab 和 Alacrity 加入牌组。"],
  ["Add the Mana Surge, Fireball, and Charm cards to your deck", "将 Mana Surge、Fireball 和 Charm 加入牌组。"],
  ["Add the Slash, Shield, and Crush cards to your deck", "将 Slash、Shield 和 Crush 加入牌组。"],
  ["Choose a card from your deck and gain another copy of it", "从牌组中选择 1 张牌，并获得它的另一张复制。"],
  ["Level up (max level 10)", "立即升级 1 级，最高到 10 级。"],
  ["Reduce the cooldown of your dungeon abilities by 1", "你的地城能力冷却减少 1。"],
  ["Gain 5 health", "获得 5 点生命上限。"],
  ["Gain 2 mana", "获得 2 点法力。"],
  ["Choose a card from your deck that can be leveled up and level it", "从牌组中选择 1 张可升级牌并升级。"],
  ["Gain the Flee Ability allowing you to run away from combat", "获得 Flee 战斗能力，可以从战斗中逃跑。"],
  ["All the walls on this dungeon floor are removed", "移除当前地牢楼层的所有墙。"],
  ["All monsters are revealed on all floors", "揭示所有楼层的怪物。"],
  ["Gain the Teleport dungeon ability (cooldown 1)", "获得 Teleport 地城能力，冷却 1。"],
  ["Gain the Smash dungeon ability (cooldown 2)", "获得 Smash 地城能力，冷却 2。"],
  ["Gain the Heal dungeon ability (cooldown 5)", "获得 Heal 地城能力，冷却 5。"],
  ["Gain the ability to reset the cooldown on your other dungeon abilities (cooldown 5)", "获得 Preparation 地城能力：重置其他地城能力的冷却，冷却 5。"],
  ["Gain the Portent dungeon ability (no cooldown)", "获得 Portent 地城能力，无冷却。"]
]);
const TALENT_POWER_TEXT_TRANSLATIONS = new Map([
  ["Opponents have one fewer card", "对手手牌上限减少 1。"],
  ["Start with sword, shield, and armor", "每场战斗开始时创建 Sword、Shield 和 Armor。"],
  ["Items in shops are free", "商店物品免费。"],
  ["Gain 1 health every 3 physical damage", "每回合你每造成 3 点物理伤害，回复 1 点生命。"],
  ["Poison 3 each turn", "你的回合开始时，使对手中毒 3。"],
  ["Spells are free", "法术不再消耗法力。"],
  ["Half elemental damage", "受到的元素伤害减半，向下取整。"],
  ["Heal instead of dying once", "下一次将死亡时改为回满生命，并暂时无敌。"],
  ["Deal 1 extra physical damage", "每个物理伤害来源额外造成 1 点伤害。"],
  ["Draw on your first action", "每回合第一次打出行动牌时抽 1 张牌。"],
  ["Draw 3 extra cards when at 15 or less health", "生命不高于 15 时，每回合额外抽 3 张牌。"],
  ["Draw an extra fireball", "每回合开始时抽 1 张临时 Fireball。"],
  ["Negate the first enemy card each turn", "有概率阻止对手的行动牌或法术牌生效。"],
  ["Your damage is piercing", "造成的所有伤害都具有穿透。"],
  ["Start with a random equipment", "每场战斗开始时获得 1 件随机装备。"],
  ["Your dungeon cooldowns are shorter", "地城能力冷却减少 1。"]
]);
const TALENT_DUNGEON_ACTION_DETAILS = {
  DungeonActionPolymorph: "Polymorph：替换 1 个怪物，冷却 5。",
  DungeonActionTeleport: "Teleport：传送，冷却 1。",
  DungeonActionSmash: "Smash：打碎墙或障碍，冷却 2。",
  DungeonActionHeal: "Heal：治疗，冷却 5。",
  DungeonActionPreparation: "Preparation：重置其他地城能力冷却，冷却 5。",
  DungeonActionPortent: "Portent：预知/查看信息，无冷却。"
};
const TALENT_ATTRIBUTE_DETAILS = {
  vampiric: "vampiric：每回合你每造成 3 点物理伤害，回复 1 点生命。",
  poisonous: "poisonous：回合开始时使对手中毒 3。",
  archmage: "archmage：法术不再消耗法力。",
  cruel: "cruel：每个物理伤害来源额外造成 1 点伤害。",
  fluid: "fluid：每回合第一次打出行动牌时抽 1 张牌。",
  desperate: "desperate：生命不高于 15 时每回合额外抽 3 张牌。"
};
const BUILDING_DEFINITIONS = [
  {
    id: "treasure-chest",
    className: "TreasureChest",
    cn: "宝箱",
    en: "Treasure Chest",
    category: "奖励",
    spawn: "GenerateRewardName 基础权重 40%；第一层和后续楼层都可出现。",
    summary: "打开后生成 1 到 3 件战利品。第一件必定是卡牌，后续物品有概率变成金币。",
    details: [
      "物品数量由一次 Game.RandomFloat 决定：小于 0.85 为 1 件，小于 0.98 为 2 件，否则 3 件。",
      "第一件固定走 CardFinder.ChooseReward。第二件和第三件各自先掷一次随机数，小于 0.45 时给金币，否则继续抽卡。",
      "抽卡使用当前地牢奖励阶级范围，并把上限下调 1、最低夹到 1；minAffinity 为 1。",
      "生成完成后会对 loot 列表执行 Utility.Shuffle，因此卡牌和金币的展示顺序不一定等于生成顺序。"
    ]
  },
  {
    id: "mimic-chest",
    className: "MimicChest",
    assetId: "mimicmonster",
    cn: "拟态宝箱",
    en: "Mimic Chest",
    category: "遭遇",
    spawn: "第一层不会从随机奖励名自然替换出来；第二层以后在 0.05 权重分支替代一部分 Goblin Hoarder。",
    summary: "外观像宝箱，打开时在当前位置生成 Mimic 怪物，并按该格子的怪物等级设置。",
    details: [
      "GenerateRewardByName 遇到 MimicChest 时会先创建地牢 feature，再调用 GetMonsterLevel(tile) 写入内部等级。",
      "Open 时使用 DungeonBoard.CreateNamedMonsterAtLevel(tile, internalLevel, \"MimicMonster\") 生成 Mimic。",
      "原 feature 会被 Destroy，然后刷新怪物小地图显示和玩家精灵显示。"
    ]
  },
  {
    id: "goblin-hoarder",
    className: "GoblinHoarder",
    assetId: "goblinhoarder",
    cn: "地精囤积者",
    en: "Goblin Hoarder",
    category: "遭遇",
    spawn: "GenerateRewardName 的奖励名分支；第 1 层权重 10%，第 2 层以后权重 5%。",
    summary: "奖励生成流程放进地图的携金怪物遭遇。它不是可打开建筑；进入战斗后会用防守牌争取逃走。",
    details: [
      "GenerateRewardName 抽到 GoblinHoarder 时，地图上创建的是 Goblin Hoarder 怪物遭遇。",
      "它的 MonsterData 等级范围是 3-6，图鉴地形标记为 Dungeon 和 Mountain，但普通地形权重为 0；自然放怪阶段不会按地形权重抽到它。",
      "它的基础牌组围绕 Cower、Hide、Exhaustion 等防守/逃跑相关牌构成，并携带较多金币。",
      "第二层以后 MimicChest 会占用一部分原本可能给 Goblin Hoarder 的奖励名权重。"
    ]
  },
  {
    id: "lich-hunter",
    className: "LichHunter",
    assetId: "lichhunter",
    cn: "巫妖猎手",
    en: "Lich Hunter",
    category: "遭遇",
    spawn: "普通 Boss 生成结果为 Lich 时，由 CreateBoss 额外放置在玩家连通区域。",
    summary: "Lich Boss 的伴随遭遇对象。它不来自普通奖励名列表，也不是 MonsterData 里的普通怪物条目。",
    details: [
      "CreateBoss 创建普通 Boss 后，会检查本层 Boss 是否为 Lich。",
      "如果是 Lich，代码会临时把 Boss 格设为阻挡，从玩家位置重新计算连通区域。",
      "随后在玩家连通区域里随机挑选一个未使用格创建 LichHunter，再恢复 Boss 格的阻挡状态。",
      "这意味着 Lich Hunter 是 Lich Boss 的额外地图对象，位置受当前迷宫、玩家位置和 Boss 位置影响。"
    ]
  },
  {
    id: "shop",
    className: "Shop",
    cn: "商店",
    en: "Shop",
    category: "经济",
    spawn: "每层奖励列表固定先加入 3 个 Shop；随机奖励名也有 15% 概率额外生成 Shop。",
    summary: "商店固定生成 3 个商品档位，分别按 1、3、5 阶入口调用 CardFinder，并避免重复商品。",
    details: [
      "GenerateShop 会围绕当前楼层 goldTarget 做 Game.RandomNormal(goldTarget, goldTarget * 0.1)，负数样本会导致商店不创建。",
      "Shop.GenerateItems 会创建 1、3、5 三个商品档位，每个档位调用一次 CardFinder。",
      "商品重复时会重抽，最后对商品列表洗牌。",
      "Master Thief 天赋会让商店物品免费。"
    ]
  },
  {
    id: "health-pack",
    className: "HealthPack",
    cn: "治疗包",
    en: "Health Pack",
    category: "回复",
    spawn: "GenerateRewards 的治疗分支会批量加入；Grizzly Bear 难度和 STEPS1 成就也会额外加入。",
    summary: "地图上的一次性回复点。进入或打开后给玩家恢复生命。",
    details: [
      "治疗包数量来自楼层深度和 Game.RandomRange：一个分支是 depth + RandomRange(1, 2)，另一个分支是 depth * 2 + RandomRange(2, 4)。",
      "STEPS1 成就会使每层额外获得 1 个 HealthPack。",
      "Grizzly Bear 难度后处理也会额外加入 1 个 HealthPack。",
      "HealthPack.Initialize 会把治疗量写为当前楼层 depth * 3；Open 时显示 Heal X，调用 DungeonPlayer.Heal(X)，然后移除该 feature。"
    ]
  },
  {
    id: "healing-pool",
    className: "HealingPool",
    cn: "治疗池",
    en: "Healing Pool",
    category: "回复",
    spawn: "随机奖励名 5%；治疗分支可能加入 1 个；Kitten 难度后处理也会加入 1 个。",
    summary: "提供付费或条件式治疗，比单次治疗包更像一个可交互恢复建筑。",
    details: [
      "HealingPool 有 FirstText、Heal、FullHeal、HealCost、FullHealCost 等入口。",
      "Kitten 难度会在每层额外加入 HealingPool 和 TreasureChest。",
      "首次全治疗免费；之后每恢复 1 点生命花费 1 金币。",
      "单点治疗固定为 1 金币回复 1 HP；全治疗会按缺失生命和当前金币取可支付上限。"
    ]
  },
  {
    id: "blacksmith",
    className: "Blacksmith",
    cn: "铁匠",
    en: "Blacksmith",
    category: "强化",
    spawn: "服务奖励三选一时约 33.36%；随机奖励名另有 5%。",
    summary: "打开牌组选择界面，选择可升级牌并支付费用升级。",
    details: [
      "Blacksmith.Enter 会进入牌组选择流程，AllowOnlyUpgradable 过滤只允许可升级牌。",
      "第一次升级免费；之后费用来自 DungeonPlayer.UpgradeCost。",
      "UpgradeCost = 5 + 5 * 已升级次数；确认后执行升级并增加升级费用计数。"
    ]
  },
  {
    id: "monastery",
    className: "Monastery",
    cn: "修道院",
    en: "Monastery",
    category: "净化",
    spawn: "服务奖励三选一时约 33.3%；随机奖励名另有 5%。",
    summary: "打开牌组选择界面，选择牌并支付费用删除或净化牌组。",
    details: [
      "Monastery.Enter 会进入牌组选择流程，ResolveMonastery 在确认后执行。",
      "第一次删牌免费；之后费用来自 DungeonPlayer.DeleteCost。",
      "DeleteCost = 10 + 15 * 已删牌次数；确认后删除选择的牌并增加删牌费用计数。",
      "成就 ALTAR2 解锁 Necromancer，但 Monastery 自身主要是牌组处理服务。"
    ]
  },
  {
    id: "smoothie-shack",
    className: "SmoothieShack",
    cn: "果昔小屋",
    en: "Smoothie Shack",
    category: "奖励",
    spawn: "服务奖励三选一时约 33.34%；随机奖励名另有 5%。",
    summary: "生成一组可购买或领取的临时增益/奖励对象。",
    details: [
      "SmoothieShack.GenerateText 和 BuildLootObjects 决定展示文本和可选项。",
      "AcquireFunction / AcquireCard 处理选择后的获得逻辑。",
      "它在奖励生成中和 Blacksmith、Monastery 同属服务奖励。"
    ]
  },
  {
    id: "tavern",
    className: "Tavern",
    cn: "酒馆",
    en: "Tavern",
    category: "Bard 专属",
    spawn: "AddTaverns 只在玩家职业为 Bard 时运行；第一层放在玩家邻近未使用格，否则放到随机未使用格。",
    summary: "Bard 用于学习 Song 的专属建筑。学到的歌会通过 Sing 地牢行动使用，每首歌影响下一场战斗或当前地图。",
    details: [
      "DungeonBoard.AddTaverns 先检查 Dungeon.player.profession 是否为 ProfessionBard。",
      "第一层会在玩家旁边生成 Tavern；其他楼层使用 RandomUnusedTile。",
      "完成 WINBARD2 / Musical Champion 后，第一层会额外生成第二个 Tavern。",
      "Tavern.GenerateSongs / BuildTempSongs / ChooseSong 负责歌曲候选和选择；选中的 Song 会进入 Bard 已学习歌曲列表。",
      "DungeonActionSing 会调用 SongBase.PlaySong。歌的实际效果多数是“下一场战斗”临时加成，也有 Healing Harmony 这种直接在地图生成治疗包的效果。"
    ]
  },
  {
    id: "altar",
    className: "Altar",
    assetId: "altartoaston",
    cn: "祭坛",
    en: "Altar",
    category: "事件",
    spawn: "AddWeirdFeature 中占 70%；命中祭坛后再从 6 种神祇祭坛里均匀选择。",
    summary: "与不同神祇交互并获得对应 boon。第一次祈祷和集齐 6 个祭坛都绑定成就。",
    details: [
      "特殊建筑不是按页面上的 3 类均分。AddWeirdFeature 的随机数小于 0.70 时进入祭坛分支，再从 AltarToJeremiad、AltarToAlcoran、AltarToCairn、AltarToGauss、AltarToLiara、AltarToAston 中均匀选择。",
      "ALTAR 成就来自首次在祭坛祈祷；ALTAR2 来自祈祷全部 6 个祭坛并解锁 Necromancer。",
      "每个祭坛类覆盖 SigilDescription、CarvedMessage、AcceptMessage、GodName 和 MyBoon；接受后把对应 boon 写入 DungeonPlayer。"
    ]
  },
  {
    id: "mushroom-patch",
    className: "MushroomPatch",
    cn: "蘑菇丛",
    en: "Mushroom Patch",
    category: "事件",
    spawn: "AddWeirdFeature 中占 15%。",
    summary: "带任务流程的特殊事件；代码名和页面名都按 Mushroom Patch 保留，完成任务后可从自己的牌组中选择 1 张并获得复制，同时解锁 Impervious 天赋。",
    details: [
      "MushroomPatch 有 StartQuest、SpawnMushrooms、CompleteQuestQuery、CompleteQuest 等完整任务入口：先接任务，再在地图上生成绿色 Mushroom，吃够要求数量后回来结算。",
      "完成任务后的牌组处理不是随机奖励池，而是打开牌组选择窗口：从自己牌组中选 1 张牌，并获得一张同名复制。",
      "Mushroom 单体效果由 MushroomEffect 决定，并使用 strength 字段作为数值；效果文本里的 X 就是该 Mushroom 的 strength。",
      "默认绿色蘑菇随机池来自 Mushroom.ACTUAL_MUSHROOM_EFFECTS；Curse 有完整处理分支和文本，但不在默认随机池里。",
      "成就 MUSHROOM / A Little Trip 要求完成 mushroom patch quest，奖励是解锁 Impervious 天赋。"
    ]
  },
  {
    id: "brainsucker",
    className: "Brainsucker",
    cn: "吸脑者事件",
    en: "Brainsucker",
    category: "事件",
    spawn: "AddWeirdFeature 中占 15%。",
    summary: "特殊牌组事件。它会生成喜欢/讨厌的卡牌条件，引导你从牌组里交出符合偏好的牌。",
    details: [
      "AddWeirdFeature 的随机数大于等于 0.85 时生成 Brainsucker。",
      "Brainsucker 字段包含 usesLeft、internalName、like1、like2、dislike1；Initialize 把 usesLeft 设为 3，然后 GeneratePreferences。",
      "偏好类型来自 BrainsuckerCardProperty：牌名开头、牌名包含、卡牌类型、是否可升级。",
      "交互会进入 ConstructDeckViewer / DeckButtons，玩家选择牌并确认后 usesLeft 减 1，由 BrainsuckResolve(c) 结算。"
    ]
  }
];
const BUILDING_MECHANIC_SECTIONS = {
  TreasureChest: [
    {
      title: "战利品分布",
      note: "TreasureChest.Open 生成 loot 后洗牌展示；下表是生成时的原始规则。",
      headers: ["项目", "规则"],
      rows: [
        ["物品数量", "RandomFloat < 0.85 为 1 件；< 0.98 为 2 件；其余为 3 件。"],
        ["第 1 件", "固定调用 CardFinder.ChooseReward 生成卡牌。"],
        ["第 2/3 件", "每件各自掷随机数；< 0.45 给金币，否则给卡牌。"],
        ["展示顺序", "生成完执行 Utility.Shuffle，因此展示顺序不等于生成顺序。"]
      ]
    }
  ],
  MimicChest: [
    {
      title: "打开结算",
      headers: ["步骤", "规则"],
      rows: [
        ["生成时", "CreateFeature 后调用 GetMonsterLevel(tile)，把当前格子的怪物等级写入 MimicChest。"],
        ["打开时", "调用 DungeonBoard.CreateNamedMonsterAtLevel(tile, internalLevel, \"MimicMonster\")。"],
        ["后处理", "原 feature 被 Destroy，并刷新怪物小地图和玩家精灵显示。"]
      ]
    }
  ],
  GoblinHoarder: [
    {
      title: "遭遇定位",
      headers: ["项目", "规则"],
      rows: [
        ["来源", "GenerateRewardName 抽到 GoblinHoarder 后创建。"],
        ["地图对象", "在地图上表现为怪物遭遇，不是可打开的建筑。"],
        ["战斗倾向", "PreferredStartingCards 包含 Hide、Cower，会偏向防守和逃走。"],
        ["奖励意义", "携带显著金币；图鉴提示 Don't let him get away。"]
      ]
    }
  ],
  LichHunter: [
    {
      title: "生成流程",
      headers: ["步骤", "规则"],
      rows: [
        ["触发条件", "本层普通 Boss 已经创建，并且该 Boss 是 Lich。"],
        ["临时阻挡", "CreateBoss 临时把 Lich 所在格设为 impassable，避免把 Boss 格当成可走路径的一部分。"],
        ["选格范围", "从 PlayerTile 所在连通区域中寻找随机未使用格。"],
        ["生成结果", "在选中的格子创建 LichHunter，然后恢复 Lich 所在格原本的阻挡状态。"]
      ]
    }
  ],
  Shop: [
    {
      title: "商品与购买",
      headers: ["项目", "规则"],
      rows: [
        ["商品数量", "固定 3 个。"],
        ["抽取档位", "依次用 1、3、5 阶入口调用 CardFinder.ChooseReward。"],
        ["重复处理", "如果候选商品已在商店列表里，会重新抽取。"],
        ["价格", "使用卡牌自身 goldCost。CanAfford 判断 player.gold >= goldCost。"],
        ["购买", "普通职业扣除金币、加入牌组、从商店移除；Master Thief 购买不扣金币。"]
      ]
    }
  ],
  HealthPack: [
    {
      title: "治疗量",
      headers: ["项目", "规则"],
      rows: [
        ["公式", "治疗量 = 当前楼层 depth * 3。"],
        ["触发", "Open 时调用 DungeonPlayer.Heal(治疗量)。"],
        ["文本", "显示 Heal X，其中 X 是本次治疗量。"],
        ["生命周期", "治疗完成后移除该 HealthPack。"]
      ]
    }
  ],
  HealingPool: [
    {
      title: "费用与回血",
      headers: ["入口", "费用", "治疗量"],
      rows: [
        ["Heal", "1 金币", "1 HP。"],
        ["FullHeal，首次", "0 金币", "恢复全部缺失生命。"],
        ["FullHeal，之后", "每点生命 1 金币", "min(缺失生命, 当前金币)。"],
        ["FullHeal 按钮", "首次显示 Free!；之后显示 FullHealCost() Gold。", "FullHealCost = FullHealAmount * HealCost。"]
      ]
    }
  ],
  Blacksmith: [
    {
      title: "升级费用",
      headers: ["情况", "费用", "后处理"],
      rows: [
        ["第一次使用", "0 金币", "选择可升级牌并升级。"],
        ["之后使用", "5 + 5 * 已升级次数", "SpendGold 后升级选择的牌，并调用 IncreaseUpgradeCost。"],
        ["可选牌", "只允许 AllowOnlyUpgradable 通过的牌", "不可升级牌不会进入确认流程。"]
      ]
    }
  ],
  Monastery: [
    {
      title: "删牌费用",
      headers: ["情况", "费用", "后处理"],
      rows: [
        ["第一次使用", "0 金币", "选择牌并删除。"],
        ["之后使用", "10 + 15 * 已删牌次数", "SpendGold 后删除选择的牌，并调用 IncreaseDeleteCost。"],
        ["费用来源", "DungeonPlayer.DeleteCost()", "计数存在 DungeonPlayer.stats 中。"]
      ]
    }
  ],
  SmoothieShack: [
    {
      title: "服务结构",
      headers: ["入口", "规则"],
      rows: [
        ["GenerateText", "生成进入小屋时的说明文本。"],
        ["BuildLootObjects", "构建可选择的奖励对象。"],
        ["AcquireFunction / AcquireCard", "处理选择后的实际获得逻辑。"]
      ]
    }
  ],
  Tavern: [
    {
      title: "Bard Song 获取",
      headers: ["项目", "规则"],
      rows: [
        ["职业限制", "DungeonBoard.AddTaverns 只在 ProfessionBard 时运行。"],
        ["第一层位置", "放在玩家邻近的未使用格。"],
        ["后续楼层位置", "使用 RandomUnusedTile。"],
        ["额外酒馆", "完成 WINBARD2 / Musical Champion 后，第一层额外生成第二个 Tavern。"],
        ["学习结果", "ChooseSong 把选中 Song 加入 Bard 已学习歌曲列表。"]
      ]
    }
  ],
  Altar: [
    {
      title: "祭坛事件",
      note: "接受祭坛会获得对应 boon，同时附带代价。英文为原游戏文本中的效果句。",
      headers: ["神祇", "获得", "代价"],
      rows: [
        ["Alcoran", "Your upgradable cards have been upgraded. 可升级卡牌全部升级。", "All monsters have leveled up. 所有怪物升级。"],
        ["Aston", "You have gained an additional equipment slot. 装备槽 +1。", "All monsters begin with a sword in play. 所有怪物开局带 Sword。"],
        ["Cairn", "You gain 30 health and are fully healed. 最大生命 +30 并完全治疗。", "All monsters have damage reduction 1. 所有怪物获得 1 点伤害减免。"],
        ["Gauss", "You draw one additional card each turn. 每回合额外抽 1 张牌。", "4 curses have been added to your deck. 牌组加入 4 张 Curse。"],
        ["Jeremiad", "You heal one health for every three damage you deal. 每造成 3 点伤害回复 1 HP。", "You no longer heal any other way other than leveling up. 除升级外，其他治疗方式失效。"],
        ["Liara", "Your enemies have 15% lower health. 敌人生命降低 15%。", "You start every fight poisoned 3. 每场战斗开局中毒 3。"]
      ]
    }
  ],
  MushroomPatch: [
    {
      title: "任务流程",
      headers: ["阶段", "规则"],
      rows: [
        ["StartQuest", "接受任务后在地牢中生成绿色蘑菇目标。"],
        ["SpawnMushrooms", "生成需要寻找/食用的 Mushroom 对象。"],
        ["CompleteQuestQuery", "吃够要求数量后回到 MushroomPatch 触发完成查询。"],
        ["GetCardReward", "打开牌组选择窗口，提示从自己的牌组中选择 1 张并获得复制。"],
        ["ResolveCopy", "把选中的牌复制 1 张加入牌组；这里不调用随机奖励池。"],
        ["CompleteQuest", "完成 mushroom patch quest；成就 MUSHROOM / A Little Trip 解锁 Impervious 天赋。"]
      ]
    }
  ],
  Brainsucker: [
    {
      title: "偏好生成",
      headers: ["位置", "规则"],
      rows: [
        ["like1", "先生成 1 个喜欢条件。25% 概率固定为 LEVELABLE；否则从牌名开头、牌名包含、卡牌类型里生成。"],
        ["like2", "再生成 1 个喜欢条件；在牌名开头和牌名包含之间随机。"],
        ["dislike1", "生成 1 个讨厌条件；在牌名开头和牌名包含之间随机，并标记为负向条件。"],
        ["顺序", "三个条件生成后会洗牌，再写回 like1、like2、dislike1；最后强制最后一个条件为 dislike。"]
      ]
    },
    {
      title: "结算",
      headers: ["步骤", "实际含义"],
      rows: [
        ["选牌", "Dr. Hillditi 会打开你的牌组，提示 Choose a card to give Dr. Hillditi。你确认后，这张牌会从 DungeonPlayer.deck 中移除。"],
        ["先看牌本身", "被交出的牌先使用自己的 metadata tier 作为基础。比如 Fireball 是 3 阶，Accelerate 是 10 阶，Slap（内部名 Strike）是 1 阶。"],
        ["再看偏好", "它把这张牌拿去对照招牌上的 2 个 Likes 和 1 个 Dislikes。命中喜欢条件会把结果往上推；命中讨厌条件会把结果往下压；完全不合口味时也会吃一个基础惩罚。"],
        ["决定奖励阶级", "调整后的结果大于 0 时，才会用这个阶级调用 CardFinder.ChooseReward 抽一张新牌；超过 10 阶会按 10 阶处理。"],
        ["坏结果", "如果调整后掉到 0 或更低，就不会抽奖励牌，而是按 Curse 处理。"],
        ["卡牌出现权重门槛", "偏好结果达到 2 或更高时，奖励抽卡会使用更高的职业权重门槛（内部 minAffinity 5）；否则使用较低门槛（minAffinity 1）。"],
        ["次数", "每个 Brainsucker 初始可处理 3 张牌。usesLeft 仍大于 0 时显示 Again! (N Left)，可以继续交牌；用完后事件结束。"]
      ]
    },
    {
      title: "结算例子",
      note: "下面的偏好组合是示例，用来说明同一张牌为什么会换到不同质量的奖励。",
      headers: ["交出的牌", "当次招牌", "结果"],
      rows: [
        ["Fireball（3 阶 SpellCard）", "Likes: Spell cards；Cards whose names contain 'ball'。Dislikes: Cards whose names start with 'F'。", "Fireball 同时命中 2 个喜欢条件和 1 个讨厌条件。奖励会围绕 3 阶向上或向下调整，而不是固定返还 3 阶牌。"],
        ["Accelerate（10 阶 ActionCard）", "Likes: Action cards；Cards whose names start with 'A'。没有命中讨厌条件。", "基础已经是 10 阶，再命中喜欢条件也不会超过上限；奖励仍按最高的 10 阶抽取。"],
        ["Slap（内部名 Strike，1 阶 ActionCard）", "没有命中喜欢条件，并且命中 Dislikes。", "低阶牌再吃到负向修正时，结果会掉到 0 或更低；这条分支不会抽奖励牌，会变成 Curse。"]
      ]
    }
  ]
};
const PROFESSION_LEVEL_OPTIONS = {
  assassin: ["生命增加", "法力增加", "行动点增加", "金币", "卡牌奖励", "升级牌"],
  bard: ["生命增加", "法力增加", "行动点增加", "金币", "卡牌奖励", "升级牌"],
  chaosmage: ["生命增加", "法力增加", "行动点增加", "卡牌奖励", "升级牌", "删除牌"],
  dragon: ["生命增加", "法力增加", "行动点增加", "装备槽增加", "卡牌奖励", "删除牌"],
  druid: ["生命增加", "法力增加", "行动点增加", "卡牌奖励", "升级牌", "删除牌"],
  monk: ["生命增加", "法力增加", "行动点增加", "卡牌奖励", "删除牌"],
  necromancer: ["生命增加", "法力增加", "卡牌奖励", "删除牌"],
  paladin: ["生命增加", "法力增加", "行动点增加", "装备槽增加", "卡牌奖励", "升级牌", "删除牌"],
  priest: ["生命增加", "法力增加", "行动点增加", "卡牌奖励", "升级牌", "删除牌"],
  professor: ["生命增加", "法力增加", "行动点增加", "装备槽增加", "删除牌"],
  random: ["取决于实际抽中的职业"],
  ranger: ["生命增加", "法力增加", "行动点增加", "装备槽增加", "卡牌奖励", "升级牌"],
  samurai: ["生命增加", "法力增加", "行动点增加", "装备槽增加", "卡牌奖励", "升级牌", "删除牌"],
  thief: ["生命增加", "法力增加", "行动点增加", "金币", "卡牌奖励", "升级牌", "删除牌"],
  warrior: ["生命增加", "法力增加", "行动点增加", "装备槽增加", "卡牌奖励", "升级牌", "删除牌"],
  wizard: ["生命增加", "法力增加", "卡牌奖励", "升级牌", "删除牌"]
};
const PROFESSION_LEVEL_HEALTH_GAIN = {
  assassin: 2,
  bard: 2,
  chaosmage: 2,
  dragon: 2,
  druid: 2,
  monk: 2,
  necromancer: 1,
  paladin: 2,
  priest: 2,
  professor: 2,
  ranger: 3,
  samurai: 2,
  thief: 2,
  warrior: 3,
  wizard: 2
};
const PROFESSION_FIXED_REWARDS = {
  assassin: [{ level: 3, type: "资源", label: "Action", cn: "行动点增加", detail: "固定奖励；不进入随机卡表。" }],
  chaosmage: [
    { level: 3, type: "资源", label: "Action", cn: "行动点增加", detail: "固定奖励；不进入随机卡表。" },
    { level: 5, type: "卡牌", label: "DeckOfWonder", cn: "奇迹牌组", cardId: "DeckOfWonder", detail: "固定卡牌奖励，概率 100%。" }
  ],
  dragon: [
    { level: 3, type: "卡牌", label: "DragonsWisdom", cn: "龙之智慧", cardId: "DragonsWisdom", detail: "固定卡牌奖励，概率 100%。" },
    { level: 5, type: "卡牌", label: "DragonsSnack", cn: "龙之点心", cardId: "DragonsSnack", detail: "固定卡牌奖励；处决生命不超过 5 的对手，并按吞噬结算。" },
    { level: 7, type: "卡牌", label: "DragonsWisdom", cn: "龙之智慧", cardId: "DragonsWisdom", detail: "固定卡牌奖励，概率 100%。" }
  ],
  druid: [{ level: "通用", type: "卡牌", label: "Card1", cn: "1 张低阶卡", detail: "固定奖励入口给 1 张 1-4 阶卡，再由职业卡表抽取。" }],
  monk: [{ level: 3, type: "资源", label: "Action", cn: "行动点增加", detail: "固定奖励；不进入随机卡表。" }],
  necromancer: [{ level: 5, type: "资源", label: "LevelUpMana", cn: "法力成长", detail: "固定等级走法力成长入口。" }],
  paladin: [{ level: 3, type: "资源", label: "Mana", cn: "法力增加", detail: "固定奖励；不进入随机卡表。" }],
  priest: [{ level: 5, type: "卡牌", label: "Inspiration", cn: "灵感", cardId: "Inspiration", detail: "固定卡牌奖励，概率 100%。" }],
  professor: [{ level: 3, type: "资源", label: "Action", cn: "行动点增加", detail: "固定奖励；不进入随机卡表。" }],
  ranger: [
    { level: 3, type: "资源", label: "Action", cn: "行动点增加", detail: "固定奖励；不进入随机卡表。" },
    { level: 5, type: "资源", label: "EquipmentSlot", cn: "装备槽增加", detail: "固定奖励；不进入随机卡表。" }
  ],
  thief: [{ level: 3, type: "资源", label: "Action", cn: "行动点增加", detail: "固定奖励；不进入随机卡表。" }],
  warrior: [{ level: 5, type: "资源", label: "EquipmentSlot", cn: "装备槽增加", detail: "固定奖励；不进入随机卡表。" }],
  wizard: [
    { level: 5, type: "资源", label: "LevelUpMana", cn: "法力成长", detail: "固定等级走法力成长入口。" },
    { level: 6, type: "卡牌", label: "ManaSurge", cn: "法力激涌", cardId: "ManaSurge", detail: "固定卡牌奖励，概率 100%。" }
  ]
};
const COMMON_STARTER_CARD_IDS = new Set(["attack1", "mana1"]);
const PROFESSION_EXCLUSIVE_CARD_IDS = {};
const PROFESSION_GENERATED_CARD_IDS = {
  druid: [
    { id: "Rake", tag: "狼形态专属" },
    { id: "Maul", tag: "狼形态专属" },
    { id: "Bite", tag: "狼形态专属" },
    { id: "SummonCompanions", tag: "召唤同伴" },
    { id: "Wolf", tag: "召唤同伴" },
    { id: "Turtle", tag: "召唤同伴" },
    { id: "Eagle", tag: "召唤同伴" },
    { id: "Bear", tag: "Summon Bear" },
    { id: "NaturesBlessing", tag: "Druid 专属" }
  ]
};
const PROFESSION_CARD_FAMILIES = {
  dragon: [{ prefix: "Dragons", tag: "Dragon 专属" }]
};
const PROFESSION_PRIMARY_REWARDS = {
  assassin: [
    { level: 3, reward: "CombatAbilityVanish" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "DungeonAbilityMurder" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  bard: [
    { level: 3, reward: "CombatAbilityDistract" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "BoastAbility" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  chaosmage: [
    { level: 3, reward: "CombatAbilityWildPower" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilityTotalFocus" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  dragon: [
    { level: 3, reward: "Gold" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "Gold" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  druid: [
    { level: 3, reward: "CombatAbilitySummonAllies" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilitySummonBear" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  monk: [
    { level: 3, reward: "DiamondFist" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "RegenAbility" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  necromancer: [
    { level: 3, reward: "CombatAbilityBoneShield" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilityLifeTap" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  paladin: [
    { level: 3, reward: "CombatAbilityClingingLight" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilityWholeBody" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  priest: [
    { level: 3, reward: "CombatAbilityBurningLight" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilityDesperatePrayer" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  professor: [
    { level: 3, reward: "DungeonAbilityFindMonster" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilityTutor" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  ranger: [
    { level: 3, reward: "CombatAbilityForesight" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilityCriticalShot" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  samurai: [
    { level: 3, reward: "CombatAbilityKaiStrike" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "KaiUpgrade" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  thief: [
    { level: 3, reward: "CombatAbilityAvoidance" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilitySurge" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  warrior: [
    { level: 3, reward: "CombatAbilityDoubleStrike" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilityAdrenalineRush" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ],
  wizard: [
    { level: 3, reward: "CombatAbilityManaFont" },
    { level: 4, reward: "Card" },
    { level: 6, reward: "CombatAbilityDevastate" },
    { level: 7, reward: "Card" },
    { level: 10, reward: "Talent" }
  ]
};
const GENERIC_PRIMARY_REWARDS = {
  Card: {
    type: "卡牌奖励",
    cn: "随机卡牌",
    en: "Card",
    detail: "进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。",
    imageArea: "dungeon_talent_icon",
    imageId: "card1"
  },
  Talent: {
    type: "天赋",
    cn: "天赋选择",
    en: "Talent",
    detail: "选择 1 个额外天赋。",
    imageArea: "dungeon_talent_icon",
    imageId: "levelup"
  },
  Gold: {
    type: "资源",
    cn: "金币奖励",
    en: "Gold",
    detail: "获得金币奖励，不进入随机卡表。",
    imageArea: "dungeon_talent_icon",
    imageId: "rich"
  }
};
const SPECIAL_PRIMARY_REWARDS = {
  DungeonAbilityMurder: {
    type: "地牢技能",
    kind: "dungeon",
    className: "DungeonActionMurder",
    cn: "谋杀",
    en: "Murder",
    detail: "解锁地牢行动：击杀一个非首领怪物，获得经验但不获得金币。"
  },
  DungeonAbilityFindMonster: {
    type: "地牢技能",
    kind: "dungeon",
    className: "DungeonActionFindMonster",
    cn: "扎营",
    en: "Make Camp",
    detail: "解锁地牢行动：在玩家相邻的可用空格中随机选择 1 格，生成一个与玩家等级相当的怪物，并显示 Interrupted!。"
  },
  BoastAbility: {
    type: "地牢强化",
    kind: "special",
    cn: "夸耀",
    en: "Boast",
    detail: "6 级后击败等级高于自己的怪物时，基础冷却至少 3 的冷却中能力会直接准备好。",
    imageArea: "dungeon_talent_icon",
    imageId: "charismatic"
  },
  DiamondFist: {
    type: "战斗强化",
    kind: "special",
    cn: "钻石拳",
    en: "Diamond Fist",
    detail: "3 级后进入战斗时，把武僧当前和基础伤害形态设为穿透。",
    imageArea: "profession",
    imageId: "monk"
  },
  RegenAbility: {
    type: "战斗被动",
    kind: "special",
    cn: "完美身体",
    en: "Perfect Body",
    detail: "每回合回复 2 点生命。",
    imageArea: "dungeon_talent_icon",
    imageId: "health1"
  },
  KaiUpgrade: {
    type: "战斗强化",
    kind: "combat",
    className: "CombatAbilityKaiStrike",
    cn: "气爆",
    en: "Kai Blast",
    detail: "把 Kai Strike 的基础冷却缩短为 2，并重置当前冷却。"
  }
};
const REWARD_WEIGHT_RULES = new Map([
  ["assassin", { formula: "max(盗贼, 法师)", note: "低阶魔力牌（ManaCard 且基础阶级 < 5）权重为 0。" }],
  ["bard", { formula: "10", note: "所有卡使用固定基础权重。" }],
  ["chaosmage", { formula: "max(盗贼, 法师)", note: "用更高的一侧作为基础权重。" }],
  ["dragon", { formula: "max(战士, 法师)", note: "用更高的一侧作为基础权重。" }],
  ["druid", { formula: "max(法师, 0.75 × 战士)", note: "偏向法术，同时保留一部分战士权重。" }],
  ["monk", { formula: "max(盗贼, 牧师)", note: "用更高的一侧作为基础权重。" }],
  ["necromancer", { formula: "max(牧师, 法师)", note: "用更高的一侧作为基础权重。" }],
  ["paladin", { formula: "max(牧师, 战士)", note: "用更高的一侧作为基础权重。" }],
  ["priest", { formula: "牧师", note: "直接读取卡牌的牧师权重。" }],
  ["professor", { formula: "10", note: "所有卡使用固定基础权重。" }],
  ["ranger", { formula: "max(盗贼, 战士)", note: "用更高的一侧作为基础权重。" }],
  ["samurai", { formula: "max(战士, 法师)", note: "用更高的一侧作为基础权重。" }],
  ["thief", { formula: "盗贼", note: "直接读取卡牌的盗贼权重。" }],
  ["warrior", { formula: "战士", note: "直接读取卡牌的战士权重。" }],
  ["wizard", { formula: "法师", note: "通常读取法师权重；Mana Surge 固定按 20 计算。" }]
]);
const SONG_EFFECT_CN = {
  BellicoseBallad: "下一场战斗中，你的攻击牌造成双倍伤害。",
  SoothingSerenade: "下一场战斗中，你每回合回复 4 点生命。",
  KnavishNocturne: "你进入隐形，直到与地牢发生互动。",
  MiserlyMinuet: "下一场战斗获得的金币翻倍。",
  BlazingBeat: "下一场战斗中，每回合开始时抽 1 张临时 Fireball。",
  CadenzaOfCelerity: "下一场战斗中获得 +3 行动点。",
  AnthemOfAmbush: "下一场战斗开始时获得 2 件随机装备。",
  DreadfulDirge: "下一场战斗中，你每回合开始时，对手失去 3 点当前生命和 3 点最大生命。",
  ArmingAria: "下一场战斗开始时额外抽 3 张牌。",
  HeroicHymn: "下一场战斗中，手牌上限 +1。",
  HealingHarmony: "在地图上随机生成 3 个治疗包。",
  PiercingPaean: "下一场战斗中，你造成的伤害具有穿透。",
  RollickingRondo: "下一场战斗中，每当你打出行动牌，抽 1 张牌。",
  RhapsodyOfRecall: "下一场战斗中，每回合开始时，将弃牌堆中所有法术牌返回手牌。",
  VileVibrato: "下一场战斗中，每当你打出行动牌，对手获得 1 层中毒。",
  StoutSonata: "下一场战斗中，生命 +20。",
  ChoraleOfChaos: "下一场战斗中，你和对手交换牌库。",
  ChantOfClarity: "下一场战斗中，你在自己的回合抽牌时，改为从牌库搜索 1 张牌加入手牌。",
  EnlightenedElegy: "下一场战斗中，你在自己的回合抽牌时，对手受到 3 点物理伤害。",
  PugilistsPolka: "下一场战斗开始时额外获得 30 点法力。"
};
const SKILL_EFFECT_CN = {
  CombatAbilityAdrenalineRush: "抽 3 张牌。",
  CombatAbilityAvoidance: "直到你的下一回合前，防止所有伤害。",
  CombatAbilityBoneShield: "防止接下来 10 点将对你造成的伤害。",
  CombatAbilityBurningLight: "造成 10 点火焰伤害。",
  CombatAbilityChannel: "打出行动牌时获得 2 点法力。",
  CombatAbilityClingingLight: "本回合对手受到的物理攻击伤害额外 +2。",
  CombatAbilityCriticalShot: "本回合你的下一次伤害翻倍并具有穿透。",
  CombatAbilityDesperatePrayer:
    "随机触发 5 个分支之一：抽 5 张牌、获得 25 点护盾、使对手失去最多 60 点当前生命、获得额外回合，或创建 Celestial Plate / Deck of Wonder / Pendant。",
  CombatAbilityDevastate: "直到你的下一回合前，使对手对电系、毒性、火焰和冰霜变得脆弱。",
  CombatAbilityDistract: "获得一个额外回合。",
  CombatAbilityDoubleStrike: "抽取你打出的下一张牌的临时复制。",
  CombatAbilityForesight: "将 Sword 和 Greatbow 放入场上。",
  CombatAbilityKaiStrike: "消耗所有法力，造成等量穿透伤害。",
  CombatAbilityLifeTap: "支付 5 点生命，抽 1 张牌。",
  CombatAbilityManaFont: "获得 10 点法力。",
  CombatAbilityStudy: "搜索对手牌库，将 1 张牌加入手牌，并永久加入自己的牌组。",
  CombatAbilitySummonAllies: "在本场战斗剩余期间召唤 3 个同伴。",
  CombatAbilitySummonBear: "在本场战斗剩余期间召唤 1 只熊。",
  CombatAbilitySurge: "抽 2 张牌并获得 2 行动点。",
  CombatAbilityTotalFocus: "本回合你的法术牌和行动牌免费。",
  CombatAbilityTutor: "从牌库中搜索 1 张牌加入手牌。",
  CombatAbilityVanish: "逃离战斗；对手保留已受到的伤害和中毒。",
  CombatAbilityWholeBody: "完全回复生命。",
  CombatAbilityWildPower: "抽 3 张随机牌。",
  DungeonActionDevour: "吞噬可见普通怪物，获得经验并触发吞噬收益。",
  DungeonActionFindMonster:
    "在玩家相邻的可用空格中随机选择 1 格，生成一个与玩家等级相当的怪物，并显示 Interrupted!。",
  DungeonActionHoard: "花费金币扩大 Hoard，生成龙族成长奖励。",
  DungeonActionMurder: "击杀一个非首领怪物，获得经验但不获得金币。",
  DungeonActionSing: "演奏已学习歌曲，触发对应 Song 效果。",
  DungeonActionSwapLocation: "与目标怪物交换位置。",
  DungeonActionWildShape: "随机替换一个可见怪物。",
  DungeonActionMeditate: "从牌库中遗忘 1 张牌。",
  DungeonActionOracle: "揭示目标格及周围 8 格。",
  DungeonActionFindTreasure: "在地图上发现额外宝藏。",
  DungeonActionInvisibility: "进入隐形，直到与地牢互动。",
  DungeonActionPortal: "与目标怪物交换位置。",
  DungeonActionSmash: "摧毁一面可见墙体。",
  DungeonActionTeleport: "传送到地图上的任意格。",
  BoastAbility: "6 级后击败等级高于自己的怪物时，基础冷却至少 3 的冷却中能力会直接准备好。",
  DiamondFist: "3 级后进入战斗时，把武僧当前和基础伤害形态设为穿透。",
  RegenAbility: "每回合回复 2 点生命。",
  KaiUpgrade: "把 Kai Strike 的基础冷却缩短为 2，并重置当前冷却。"
};
const SKILL_NAME_CN = {
  CombatAbilityAdrenalineRush: { cn: "肾上腺素冲刺", en: "Adrenaline Rush" },
  CombatAbilityAvoidance: { cn: "回避", en: "Avoidance" },
  CombatAbilityBoneShield: { cn: "骨盾", en: "Bone Shield" },
  CombatAbilityBurningLight: { cn: "燃烧之光", en: "Burning Light" },
  CombatAbilityChannel: { cn: "引导", en: "Channel" },
  CombatAbilityClingingLight: { cn: "附着之光", en: "Clinging Light" },
  CombatAbilityCriticalShot: { cn: "致命一击", en: "Critical Strike" },
  CombatAbilityDesperatePrayer: { cn: "绝望祈祷", en: "Desperate Prayer" },
  CombatAbilityDevastate: { cn: "毁灭", en: "Devastate" },
  CombatAbilityDistract: { cn: "干扰", en: "Distract" },
  CombatAbilityDoubleStrike: { cn: "双重打击", en: "Double Strike" },
  CombatAbilityForesight: { cn: "武装", en: "Arm" },
  CombatAbilityKaiStrike: { cn: "气击", en: "Kai Strike" },
  CombatAbilityLifeTap: { cn: "生命分流", en: "Life Tap" },
  CombatAbilityManaFont: { cn: "法力源泉", en: "Mana Font" },
  CombatAbilityStudy: { cn: "研究", en: "Research" },
  CombatAbilitySummonAllies: { cn: "召唤盟友", en: "Summon Allies" },
  CombatAbilitySummonBear: { cn: "召唤熊", en: "Summon Bear" },
  CombatAbilitySurge: { cn: "激涌", en: "Surge" },
  CombatAbilityTotalFocus: { cn: "完全专注", en: "Total Focus" },
  CombatAbilityTutor: { cn: "发展", en: "Development" },
  CombatAbilityVanish: { cn: "消失", en: "Vanish" },
  CombatAbilityWholeBody: { cn: "神圣涌动", en: "Holy Surge" },
  CombatAbilityWildPower: { cn: "狂野力量", en: "Wild Power" },
  DungeonActionDevour: { cn: "吞噬", en: "Devour" },
  DungeonActionFindMonster: { cn: "扎营", en: "Make Camp" },
  DungeonActionFindTreasure: { cn: "发现宝藏", en: "Find Treasure" },
  DungeonActionHoard: { cn: "宝藏堆", en: "Hoard" },
  DungeonActionInvisibility: { cn: "隐形", en: "Invisibility" },
  DungeonActionMeditate: { cn: "冥想", en: "Meditate" },
  DungeonActionMurder: { cn: "谋杀", en: "Murder" },
  DungeonActionOracle: { cn: "神谕", en: "Oracle" },
  DungeonActionSing: { cn: "演唱", en: "Sing" },
  DungeonActionSmash: { cn: "粉碎", en: "Smash" },
  DungeonActionSwapLocation: { cn: "传送门", en: "Portal" },
  DungeonActionTeleport: { cn: "传送", en: "Teleport" },
  DungeonActionWildShape: { cn: "狂野变形", en: "Wild Shape" }
};
const RULE_CARD_NAME_LABELS = [
  ["Desperate Strike", "绝望打击"],
  ["Dragon's Claw", "龙爪"],
  ["Phoenix Feather", "凤凰羽毛"],
  ["Goblin Lackey", "地精跟班"],
  ["Second Thoughts", "二次思考"],
  ["Second Strike", "二次打击"],
  ["Second Wind", "二次恢复"],
  ["Wild Strike", "狂野打击"],
  ["Haste Totem", "急速图腾"],
  ["Mana Totem", "法力图腾"],
  ["Shock Totem", "电击图腾"],
  ["Acid Lance", "酸液长枪"],
  ["Frost Bolt", "冰霜箭"],
  ["Coin Toss", "抛硬币"],
  ["Ink Spray", "喷墨"],
  ["Pickpocket", "扒窃"],
  ["Phylactery", "命匣"],
  ["Phylacteries", "命匣"],
  ["Discharge", "放电"],
  ["Electrocute", "电刑"],
  ["Fireball", "火球"],
  ["Soulfire", "灵魂火"],
  ["Evasion", "闪避"],
  ["Recycle", "回收"],
  ["Pounce", "扑击"],
  ["Shock", "电击"],
  ["Strike", "打击"],
  ["Attack", "攻击"],
  ["Sear", "灼烧"],
  ["Slap", "掌掴"],
  ["Wolf", "狼"],
  ["Turtle", "龟"],
  ["Eagle", "鹰"],
  ["Fly", "飞行"]
];
const EXACT_RULE_TRANSLATION_ENTRIES = [
  [
    "Gain up to 40 health, then deal <piercing> damage equal to the health gained this way.",
    "回复至多 40 点生命，然后造成等同于以此回复生命值的<穿透>伤害。"
  ],
  [
    "Choose 2 at random: Draw 3 cards, deal 10 <piercing> damage to your opponent, gain 15 health, or prevent the next 15 damage that would be dealt to you.",
    "随机选择 2 项：抽 3 张牌、对手受到 10 点<穿透>伤害、回复 15 点生命，或防止你将受到的接下来 15 点伤害。"
  ],
  [
    "Look at your opponent's hand. Choose a card from it and add it to your hand. It goes to their discard pile when discarded.",
    "查看对手手牌，从中选择 1 张牌加入你的手牌；该牌弃掉时会进入对手弃牌堆。"
  ],
  [
    "Look at your opponent's hand. Choose a card from it. They exile that card.",
    "查看对手手牌。从中选择 1 张牌；对手放逐那张牌。"
  ],
  [
    "Exile up to 2 cards from your deck for the rest of the fight. Draw a card.",
    "从牌组中放逐最多 2 张牌，持续到本场战斗结束。抽 1 张牌。"
  ],
  [
    "Draw 3 cards. Exile 2 cards from your hand for the rest of the fight.",
    "抽 3 张牌。从手牌中放逐 2 张牌，持续到本场战斗结束。"
  ],
  [
    "For the rest of the fight, gain 2 health at the start of your turn.",
    "本场战斗剩余期间，每个你的回合开始时回复 2 点生命。"
  ],
  [
    "At the start of your turn, draw a random non-equipment card (from among all unlocked cards). That card is <temporary> ^.",
    "你的回合开始时，从所有已解锁卡中随机抽 1 张非装备牌。那张牌为<临时>。"
  ],
  [
    "Whenever you play a non-temporary card named 'Attack' (any level), draw a temporary copy of that card.",
    "每当你打出 1 张名为“Attack”的非临时牌（任意等级），抽取该牌的临时复制。"
  ],
  [
    "Your opponent becomes <Poisoned 5> ^. Double the amount of poison on your opponent (maximum 30 additional poison).",
    "对手获得<中毒 5>。使对手身上的中毒层数翻倍，最多额外增加 30 层。"
  ],
  [
    "Play this only if your opponent has at most 12 health. Win the fight.",
    "只能在对手生命不超过 12 时打出。赢得这场战斗。"
  ],
  [
    "Play this only if your opponent has at most 5 health. Win the fight. Gain 1 mana permanently.",
    "只能在对手生命不超过 5 时打出。赢得这场战斗。永久获得 1 点法力。"
  ],
  [
    "Completely heal. This card is removed from the game and your deck permanently after use.",
    "完全回复生命。此牌使用后会从游戏和你的牌库中永久移除。"
  ],
  [
    "Deal 2 @atk damage. Add a random <temporary> non-equipment card to your hand.\\n\\nWarning: Higher levels of Wild Strike cost additional @tim to play.",
    "造成 2 点攻击伤害。将 1 张随机<临时>非装备牌加入你的手牌。提示：高等级 Wild Strike 打出时需要额外行动点。"
  ],
  [
    "Deal 4 @atk damage. Add 2 random <temporary> non-equipment cards to your hand.\\n\\nWarning: Higher levels of Wild Strike cost additional @tim to play.",
    "造成 4 点攻击伤害。将 2 张随机<临时>非装备牌加入你的手牌。提示：高等级 Wild Strike 打出时需要额外行动点。"
  ],
  [
    "Deal 6 @atk damage. Add 3 random <temporary> non-equipment cards to your hand.\\n\\nWarning: Higher levels of Wild Strike cost additional @tim to play.",
    "造成 6 点攻击伤害。将 3 张随机<临时>非装备牌加入你的手牌。提示：高等级 Wild Strike 打出时需要额外行动点。"
  ],
  [
    "Deal 10 @atk damage to your opponent and 4 @atk damage to yourself.",
    "对手受到 10 点攻击伤害，你受到 4 点攻击伤害。"
  ],
  [
    "Trigger: An opponent plays a card (10% chance per card in play) Effect: That card has no effect. The opponent takes 2 @air damage for each card in play. The turn ends.",
    "触发：对手打出一张牌时，场上每张牌提供 10% 概率。效果：该牌无效果；对手每有 1 张场上的牌受到 2 点电系伤害；该回合结束。"
  ],
  [
    "Prevent the first card your opponent plays in each turn from having any effect. This effect stacks.",
    "防止对手每回合打出的第一张牌产生任何效果。此效果可以叠加。"
  ],
  [
    "Deal 5 <piercing damage>. Your opponent gains 5 gold. Exile Coin Toss.",
    "造成 5 点<穿透伤害>。对手获得 5 金币。放逐此牌。"
  ],
  [
    "Trigger: An opponent plays a spell. Effect: That spell has no effect. Draw a card.",
    "触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。"
  ],
  [
    "Discard your hand and lose all @tim. Deal 6 @atk damage plus 3 for each card and @tim lost this way.",
    "弃掉你的手牌并失去所有行动点。造成 6 点攻击伤害；以此每失去 1 张牌或 1 点行动点，额外造成 3 点攻击伤害。"
  ],
  [
    "Shuffle 2 curse cards (which do nothing) into your opponent's deck. Draw a card.",
    "将 2 张无效果诅咒牌洗入对手牌库。抽 1 张牌。"
  ],
  [
    "Your opponent becomes a puppet until your next turn. While a puppet, they may not end their turn early or discard cards freely and cards they play hit themselves instead of you.",
    "对手直到你的下个回合变为傀儡。傀儡不能提前结束回合或自由弃牌，且其打出的牌会命中自己而不是你。"
  ],
  [
    "Replace 3 random non-curse cards in your opponent's hand with curses.",
    "将对手手牌中 3 张随机非诅咒牌替换为诅咒牌。"
  ],
  [
    "Your opponent exiles a card at random from their hand.",
    "对手随机从手牌中放逐 1 张牌。"
  ],
  [
    "Deal 1 @air damage for each mana you have left after casting Discharge. Lose physical immunity until your next turn.",
    "施放 Discharge 后，你每剩余 1 点法力就造成 1 点电系伤害。失去物理免疫直到你的下个回合。"
  ],
  [
    "Trigger: An opponent plays an action card. Effect: That card behaves as if you had played it instead.",
    "触发：对手打出行动牌时。效果：该牌视为由你打出。"
  ],
  [
    "Search your deck for any card and put it into your hand.",
    "从你的牌库中搜索任意 1 张牌并加入手牌。"
  ],
  [
    "Deal 2 @atk damage plus 2 for each Dragon's Claw in play.",
    "造成 2 点攻击伤害；场上每有 1 张 Dragon's Claw，额外造成 2 点攻击伤害。"
  ],
  [
    "If your opponent has at most 5 health, it dies. If it dies this way, gain benefits as if you had devoured it.",
    "如果对手生命不超过 5 点，则其死亡。若以此方式死亡，你获得如同吞噬该对手的收益。"
  ],
  [
    "Deal 5 @air damage plus 1 @air damage for each mana you have left after casting Electrocute.",
    "造成 5 点电系伤害；施放 Electrocute 后，你每剩余 1 点法力就额外造成 1 点电系伤害。"
  ],
  [
    "You take half damage from elemental sources until your next turn.",
    "直到你的下个回合，来自元素来源的伤害减半。"
  ],
  [
    "Gain 4 mana. Draw one of Fireball, Frost Bolt, Shock, or Acid Lance. That card is <temporary>.",
    "获得 4 点法力。抽取 Fireball、Frost Bolt、Shock 或 Acid Lance 中的 1 张。该牌为<临时>。"
  ],
  [
    "Gain 5 mana. Until your next turn, prevent the next card your opponent plays from having any effect.",
    "获得 5 点法力。直到你的下个回合，防止对手打出的下一张牌产生任何效果。"
  ],
  [
    "Exile target equipment or prayer card. Gain 5 health.",
    "放逐目标装备牌或祈祷牌。回复 5 点生命。"
  ],
  [
    "Your opponent's maximum hand size is reduced by 1. They discard a card.",
    "对手手牌上限减少 1。对手弃掉 1 张牌。"
  ],
  [
    "Exile Evasion from your deck for the remainder of the fight. You take no damage until your next turn.",
    "本场战斗剩余期间，从你的牌库中放逐 Evasion。直到你的下个回合，你不会受到伤害。"
  ],
  [
    "Play this card only if your opponent has at most 12 health. Win the fight.",
    "只能在对手生命不超过 12 点时打出。赢得这场战斗。"
  ],
  [
    "Trigger: An opponent plays a card with at least 3 others in play. Effect: That card has no effect. The turn ends.",
    "触发：对手打出一张牌，且场上至少还有 3 张其他牌时。效果：该牌无效果。该回合结束。"
  ],
  [
    "Look at the top 10 cards of your opponent's deck. Exile up to 2.",
    "查看对手牌库顶的 10 张牌。最多放逐其中 2 张。"
  ],
  [
    "Until your next turn, whenever your opponent deals damage to you, you deal that much damage to them (before reductions or immunities).",
    "直到你的下个回合，每当对手对你造成伤害时，你对其造成等量伤害；此伤害在减伤或免疫结算前计算。"
  ],
  [
    "Trigger: An opponent heals. Effect: Instead, the opponent takes that much @ear damage.",
    "触发：对手回复生命时。效果：改为让对手受到等量毒性伤害。"
  ],
  [
    "Take an extra turn. If your opponent is alive at the end of that turn, die.",
    "获得一个额外回合。如果该回合结束时对手仍然存活，你死亡。"
  ],
  [
    "For the rest of the fight, whenever the opponent plays an attack card, they take 2 @fir damage.",
    "直到本场战斗结束，每当对手打出攻击牌时，对手受到 2 点火焰伤害。"
  ],
  [
    "Run away from the current fight.",
    "从当前战斗中逃跑。"
  ],
  [
    "Take no damage until your next turn. Exile Fly.",
    "直到你的下个回合，你不会受到伤害。放逐 Fly。"
  ],
  [
    "Prevent the next 5 damage that would be dealt to you. For each point of damage prevented, deal 1 @wat damage to your opponent.",
    "防止你将受到的接下来 5 点伤害。每防止 1 点伤害，就对手造成 1 点冰霜伤害。"
  ],
  [
    "Your opponent discards all spell cards from their hand. Deal 3 @atk damage.",
    "对手弃掉手牌中的所有法术牌。造成 3 点攻击伤害。"
  ],
  [
    "If you have no cards in play at the end of your turn, draw cards equal to your maximum hand size after you refill your hand.",
    "如果你的回合结束时场上没有牌，则在补满手牌后，抽等同于手牌上限数量的牌。"
  ],
  [
    "Your opponent takes 5 damage for each curse card in their hand. Draw a card.",
    "对手手牌中每有 1 张诅咒牌，就受到 5 点伤害。抽 1 张牌。"
  ],
  [
    "If you have a goblin lackey in play, it is destroyed and your opponent takes 5 @fir damage.",
    "如果你场上有 Goblin Lackey，则摧毁它，并让对手受到 5 点火焰伤害。"
  ],
  [
    "When you play Goblin Lackey, draw a card and gain 1 @tim. At the beginning of your turn, deal 1 @atk damage.",
    "当你打出 Goblin Lackey 时，抽 1 张牌并获得 1 行动点。在你的回合开始时，造成 1 点攻击伤害。"
  ],
  [
    "For the remainder of the fight, at the beginning of your turns, gain 1 level of protection. This protection stops the first 3 @atk damage dealt to you that turn.",
    "直到本场战斗结束，在你的每个回合开始时，获得 1 层保护。该保护会阻止本回合对你造成的前 3 点攻击伤害。"
  ],
  [
    "Your opponent discards all action cards from their hand. Deal 3 @atk damage.",
    "对手弃掉手牌中的所有行动牌。造成 3 点攻击伤害。"
  ],
  [
    "For the remainder of the fight, you deal 1 additional damage from each physical source.",
    "直到本场战斗结束，你的每个物理伤害来源额外造成 1 点伤害。"
  ],
  [
    "At the beginning of your turn, Haste Totem gains 1 charge. Then draw a card and gain 1 @tim for each charge on Haste Totem.",
    "在你的回合开始时，Haste Totem 获得 1 层充能。然后 Haste Totem 每有 1 层充能，你抽 1 张牌并获得 1 行动点。"
  ],
  [
    "Draw 2 cards. In addition, you have a 10% chance to gain an extra turn.",
    "抽 2 张牌。此外，你有 10% 概率获得一个额外回合。"
  ],
  [
    "Draw a card. Until your next turn, prevent the next card your opponent plays from having any effect.",
    "抽 1 张牌。直到你的下个回合，防止对手打出的下一张牌产生任何效果。"
  ],
  [
    "Your opponent discards their hand and gains curses equal to the number of cards discarded this way.",
    "对手弃掉其手牌，并获得等同于以此弃掉牌数的诅咒牌。"
  ],
  [
    "Trigger: An opponent plays a card with at least 3 others in play. Effect: That card has no effect. The turn ends. Exile Ink Spray.",
    "触发：对手打出一张牌，且场上至少还有 3 张其他牌时。效果：该牌无效果。该回合结束。放逐 Ink Spray。"
  ],
  [
    "Draw a card. If you discard Second Thoughts to an effect, draw 2 cards.",
    "抽 1 张牌。如果你因效果弃掉 Second Thoughts，抽 2 张牌。"
  ],
  [
    "Gain 20% dodge for the rest of the fight.",
    "直到本场战斗结束，获得 20% 闪避。"
  ],
  [
    "You have a 10% chance of dodging your opponent's attack cards. Whenever you dodge, draw a card.",
    "你有 10% 概率闪避对手的攻击牌。每当你闪避时，抽 1 张牌。"
  ],
  [
    "Until your next turn, gain 1 mana for each point of damage you take. Draw a card.",
    "直到你的下个回合，你每受到 1 点伤害就获得 1 点法力。抽 1 张牌。"
  ],
  [
    "This card has the effect of a random non-\"Desperate Strike\" action card from your deck.",
    "此牌获得你牌库中 1 张随机非 Desperate Strike 行动牌的效果。"
  ],
  [
    "Destroy all Phylacteries in play.",
    "摧毁场上所有 Phylactery。"
  ],
  [
    "Your opponent loses 5 mana. Gain mana equal to the amount lost this way.",
    "对手失去 5 点法力。你获得等同于其以此失去数量的法力。"
  ],
  [
    "Your mana is set to its maximum value. This card is removed from the game and your deck permanently after use.",
    "你的法力设为最大值。此牌使用后会从游戏和你的牌库中永久移除。"
  ],
  [
    "Gain 5 mana. The next time you cast a spell this turn, cast a second copy of that spell.",
    "获得 5 点法力。本回合你下一次施放法术时，额外施放该法术的第二份复制。"
  ],
  [
    "At the beginning of your turn, Mana Totem gains 1 charge. Then gain 1 mana for each charge on Mana Totem.",
    "在你的回合开始时，Mana Totem 获得 1 层充能。然后 Mana Totem 每有 1 层充能，你获得 1 点法力。"
  ],
  [
    "Discard your hand. Gain a shield of strength 5 + 5 for each card discarded this way.",
    "弃掉你的手牌。获得一个强度为 5 的护盾；以此每弃掉 1 张牌，护盾强度额外增加 5。"
  ],
  [
    "Your opponent discards all attack cards in their hand.",
    "对手弃掉手牌中的所有攻击牌。"
  ],
  [
    "Destroy all equipment (yours and your opponent's). Deal 5 @atk damage for each equipment destroyed.",
    "摧毁所有装备，包括你的和对手的。每摧毁 1 件装备，造成 5 点攻击伤害。"
  ],
  [
    "You are immune to damage on your turn.",
    "在你的回合内，你免疫伤害。"
  ],
  [
    "If you would die, exile Phoenix Feather and remove it from your deck permanently. Your health is set to its maximum.",
    "如果你将要死亡，放逐 Phoenix Feather 并将其从你的牌库中永久移除。你的生命设为最大值。"
  ],
  [
    "While phylactery is in play, if the lich would die, instead its health is set to 1.",
    "当 Phylactery 在场时，如果巫妖将要死亡，改为将其生命设为 1。"
  ],
  [
    "Gain 3 gold. Exile Pickpocket for the rest of the fight.",
    "获得 3 金币。直到本场战斗结束，放逐 Pickpocket。"
  ],
  [
    "Steal an equipment card your opponent controls until it is destroyed or the fight ends.",
    "偷取对手控制的 1 张装备牌，直到该装备被摧毁或本场战斗结束。"
  ],
  [
    "Draw 3 cards, then remove Pounce from your deck for the remainder of the fight.",
    "抽 3 张牌，然后直到本场战斗结束，从你的牌库中移除 Pounce。"
  ],
  [
    "When the last counter is removed, heal based on the number of counters it started with: 1: 3 2: 6 3: 9 4: 12 5: 15",
    "最后一个计数器被移除时，根据初始计数器数量回复生命：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。"
  ],
  [
    "When the last counter is removed, draw cards based on the number of counters it started with: 1: 2 2: 4 3: 6 4: 8 5: 10",
    "最后一个计数器被移除时，根据初始计数器数量抽牌：1 层 2 张，2 层 4 张，3 层 6 张，4 层 8 张，5 层 10 张。"
  ],
  [
    "When the last counter is removed, deal @atk damage based on the number of counters this started with: 1: 3 2: 6 3: 9 4: 12 5: 15",
    "最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。"
  ],
  [
    "When the last counter is removed, deal @fir damage based on the number of counters this started with: 1: 5 2: 10 3: 15 4: 20 5: 25",
    "最后一个计数器被移除时，根据初始计数器数量造成火焰伤害：1 层 5 点，2 层 10 点，3 层 15 点，4 层 20 点，5 层 25 点。"
  ],
  [
    "The next time you deal damage this turn, double it.",
    "本回合你下一次造成伤害时，使该伤害翻倍。"
  ],
  [
    "Draw a card. The next time you deal damage this turn, double it.",
    "抽 1 张牌。本回合你下一次造成伤害时，使该伤害翻倍。"
  ],
  [
    "Trigger: Your turn starts and all the cards in your hand have different names. Effect: Draw 3 cards. Note: Attack (1) and Attack (2) have different names.",
    "触发：你的回合开始，且你手牌中的所有牌名称都不同时。效果：抽 3 张牌。注意：Attack (1) 和 Attack (2) 视为不同名称。"
  ],
  [
    "Gain 5 mana. The next time your opponent would take elemental damage, it is instead <piercing>.",
    "获得 5 点法力。对手下一次将受到元素伤害时，改为受到<穿透>伤害。"
  ],
  [
    "Discard all other cards in play. Draw a card. Exile Recycle for the rest of the fight.",
    "弃掉场上所有其他牌。抽 1 张牌。直到本场战斗结束，放逐 Recycle。"
  ],
  [
    "Trigger: 75% chance when an opponent plays an attack, action, or spell card (once per card). Effect: Copy the effects of that card. Draw a card.",
    "触发：对手打出攻击牌、行动牌或法术牌时有 75% 概率，每张牌只触发一次。效果：复制该牌的效果。抽 1 张牌。"
  ],
  [
    "Trigger: An opponent ends their turn. Effect: Deal 1 @atk damage for each attack card in play.",
    "触发：对手结束回合时。效果：场上每有 1 张攻击牌，造成 1 点攻击伤害。"
  ],
  [
    "Trigger: An opponent ends their turn. Effect: Deal 1 @atk damage for each action card in play.",
    "触发：对手结束回合时。效果：场上每有 1 张行动牌，造成 1 点攻击伤害。"
  ],
  [
    "Trigger: An opponent plays an attack card. Effect: That attack card has no effect. Deal 2 @atk damage. Draw a card.",
    "触发：对手打出攻击牌时。效果：该攻击牌无效果。造成 2 点攻击伤害。抽 1 张牌。"
  ],
  [
    "Deal 3 @fir damage. Deal 3 @fir damage for each level of burning on your opponent.",
    "造成 3 点火焰伤害。对手每有 1 层燃烧，额外造成 3 点火焰伤害。"
  ],
  [
    "Deal 2 <piercing> damage. Draw a card. If you discard Second Strike to an effect, deal 10 <piercing> damage.",
    "造成 2 点<穿透>伤害。抽 1 张牌。如果你因效果弃掉 Second Strike，造成 10 点<穿透>伤害。"
  ],
  [
    "Gain 2 health. Draw a card. If you discard Second Wind to an effect, gain 10 health.",
    "回复 2 点生命。抽 1 张牌。如果你因效果弃掉 Second Wind，回复 10 点生命。"
  ],
  [
    "You have a 20% chance of dodging your opponent's attack cards.",
    "你有 20% 概率闪避对手的攻击牌。"
  ],
  [
    "At the beginning of your turn, Shock Totem gains 1 charge. Then deal 2 @air damage for each charge counter on Shock Totem.",
    "在你的回合开始时，Shock Totem 获得 1 层充能。然后 Shock Totem 每有 1 个充能计数器，造成 2 点电系伤害。"
  ],
  [
    "Your opponent discards a card and loses 1 @tim.",
    "对手弃掉 1 张牌并失去 1 点行动点。"
  ],
  [
    "Trigger: 35% chance when an opponent plays an attack, action, mana, or spell card. Effect: That card has no effect. Exile it for the remainder of the fight. Heal for 5 health.",
    "触发：对手打出攻击牌、行动牌、魔力牌或法术牌时有 35% 概率。效果：该牌无效果；直到本场战斗结束，放逐该牌；回复 5 点生命。"
  ],
  [
    "Deal 10 damage. Your opponent discards 2 cards. This has no effect on players with damage reduction, physical resistance, dodge, or a ward.",
    "造成 10 点伤害。对手弃掉 2 张牌。若目标拥有减伤、物理抗性、闪避或防护，则此牌无效果。"
  ],
  [
    "Play this card only if your opponent has at most 5 health. Win the fight. Gain 1 mana permanently.",
    "只能在对手生命不超过 5 点时打出。赢得这场战斗。永久获得 1 点法力。"
  ],
  [
    "Deal 10 <piercing> damage to your opponent. At the beginning of your turn, if Soulfire is in your discard pile, return it to your hand",
    "对手受到 10 点<穿透>伤害。在你的回合开始时，如果 Soulfire 在你的弃牌堆中，将其返回你的手牌。"
  ],
  [
    "When you defeat an opponent with a levelable card, it levels up.",
    "当你用可升级牌击败对手时，该牌升级。"
  ],
  [
    "When you gain mana, deal 1 @atk damage for every 2 mana you gained (rounded down).",
    "每当你获得法力时，每获得 2 点法力就造成 1 点攻击伤害，向下取整。"
  ],
  [
    "Shuffle 2 curse cards (which do nothing) into your opponent's deck. Your opponent discards a card.",
    "将 2 张无效果诅咒牌洗入对手牌库。对手弃掉 1 张牌。"
  ],
  [
    "Until your next turn, damage taken first reduces your mana instead of your health and, so long as you have mana, is reduced by half.",
    "直到你的下个回合，受到的伤害会先减少法力而不是生命；只要你还有法力，该伤害减半。"
  ],
  [
    "Deal 5 @atk damage. Warning: Higher levels of Strike cost additional @tim to play.",
    "造成 5 点攻击伤害。提示：高等级 Strike 打出时需要额外行动点。"
  ],
  [
    "Deal 10 @atk damage. Warning: Higher levels of Strike cost additional @tim to play.",
    "造成 10 点攻击伤害。提示：高等级 Strike 打出时需要额外行动点。"
  ],
  [
    "Deal 15 @atk damage. Warning: Higher levels of Strike cost additional @tim to play.",
    "造成 15 点攻击伤害。提示：高等级 Strike 打出时需要额外行动点。"
  ],
  [
    "Your opponent discards 2 cards and becomes <Chilled 1>.",
    "对手弃掉 2 张牌并获得<寒冷 1>。"
  ],
  [
    "Draw one of Wolf, Turtle, or Eagle. That card is <temporary>.",
    "抽取 Wolf、Turtle 或 Eagle 中的 1 张。该牌为<临时>。"
  ],
  [
    "Your opponent chooses a card in their hand and exiles it for the remainder of the fight. They then add a Sear to their hand if they exiled an Action, a Slap if they exiled an Attack, or an Attack (level 1) otherwise.",
    "对手选择其手牌中的 1 张牌，并直到本场战斗结束将其放逐。若放逐的是行动牌，则对手将 Sear 加入手牌；若放逐的是攻击牌，则加入 Slap；否则加入 Attack (level 1)。"
  ],
  [
    "When you win a combat, heal half your missing health (rounded up).",
    "当你赢得一场战斗时，回复已损失生命的一半，向上取整。"
  ],
  [
    "This turn, whenever you deal damage, gain a shield that prevents that much damage.",
    "本回合每当你造成伤害时，获得一个可防止等量伤害的护盾。"
  ],
  [
    "Gain 5 mana. Draw a random <temporary> non-equipment card.",
    "获得 5 点法力。抽 1 张随机<临时>非装备牌。"
  ],
  [
    "Draw 5 cards. Discard all non-attack cards from your hand.",
    "抽 5 张牌。弃掉你手牌中的所有非攻击牌。"
  ],
  [
    "For the remainder of the fight, when an opponent plays an attack card, deal 3 @fir damage to them.",
    "直到本场战斗结束，每当对手打出攻击牌时，对其造成 3 点火焰伤害。"
  ]
];
const EXACT_RULE_TRANSLATIONS = new Map(
  EXACT_RULE_TRANSLATION_ENTRIES.map(([source, translation]) => [normalizeRuleText(source), translation])
);

function normalizeRuleText(value) {
  return String(value)
    .replaceAll("\\\\n", "\n")
    .replaceAll("\\n", "\n")
    .replace(/\s*\^\s*/g, "")
    .replace(/\s+([.,:;!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function localizeRuleCardNames(value) {
  let text = String(value || "");
  for (const [source, label] of RULE_CARD_NAME_LABELS) {
    text = text.replaceAll(source, label);
  }
  return text
    .replaceAll("level", "等级")
    .replaceAll("Level", "等级")
    .replaceAll("电系伤害", "电系伤害")
    .replaceAll("冰霜伤害", "冰霜伤害")
    .replaceAll("poison damage", "毒性伤害")
    .replaceAll("Poison damage", "毒性伤害");
}

function slugify(value) {
  return String(value || "item")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function publicAssetPath(asset) {
  if (!asset?.png) {
    return "";
  }
  return `/assets/${asset.png.replace(/^extracted\//, "extracted/")}`;
}

function assetKeyVariants(value) {
  const raw = String(value || "").trim();
  const slug = slugify(raw);
  return [...new Set([raw, slug, slug.replaceAll("-", "")].filter(Boolean))];
}

function readJson(file) {
  return readFile(file, "utf8").then((raw) => JSON.parse(raw));
}

async function readTextIfExists(file) {
  try {
    return await readFile(file, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      return "";
    }
    throw error;
  }
}

function parseTsv(raw) {
  const lines = String(raw || "").trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) {
    return [];
  }
  const headers = lines[0].split("\t");
  return lines.slice(1).map((line) => {
    const cells = line.split("\t");
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]));
  });
}

function compactText(value, max = 140) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= max) {
    return text;
  }
  return `${text.slice(0, max - 1).trim()}…`;
}

function percent(value) {
  if (value === null || value === undefined || value === "") {
    return "特殊生成";
  }
  return `${(Number(value) * 100).toFixed(1).replace(/\.0$/, "")}%`;
}

function renderRewardNameProbabilityTable(dungeonGeneration) {
  const probs = dungeonGeneration.generate_reward_name?.probabilities || {};
  const rows = [];
  for (const [group, entries] of Object.entries(probs)) {
    for (const entry of entries || []) {
      rows.push({
        group: group === "depth_1" ? "第 1 层" : "第 2 层以后",
        reward: entry.reward,
        probability: entry.probability
      });
    }
  }
  if (!rows.length) {
    return `<p class="dq-note">没有解析到 GenerateRewardName 概率表。</p>`;
  }
  return `<table class="dq-data-table">
  <thead><tr><th>楼层组</th><th>奖励名</th><th>概率</th></tr></thead>
  <tbody>
${rows.map((row) => `<tr><td>${escapeHtml(row.group)}</td><td>${escapeHtml(buildingDisplayName(row.reward))}</td><td>${escapeHtml(percent(row.probability))}</td></tr>`).join("\n")}
  </tbody>
</table>`;
}

function buildingDisplayName(value) {
  const found = BUILDING_DEFINITIONS.find((building) => building.className === value || building.assetId === slugify(value));
  return found ? `${found.cn} / ${found.en}` : value;
}

function translateTalentEffect(value) {
  const text = String(value || "").trim();
  if (TALENT_EFFECT_TRANSLATIONS.has(text)) {
    return TALENT_EFFECT_TRANSLATIONS.get(text);
  }
  return translateRuleText(text)
    .replaceAll("health", "生命")
    .replaceAll("mana", "法力")
    .replaceAll("action", "行动点")
    .replaceAll("gold", "金币")
    .replaceAll("equipment", "装备")
    .replaceAll("cards", "卡牌")
    .replaceAll("card", "卡牌")
    .replaceAll("turn", "回合");
}

function translateTalentPowerText(value) {
  const text = String(value || "").trim();
  return TALENT_POWER_TEXT_TRANSLATIONS.get(text) || translateTalentEffect(text) || text;
}

function translateAchievementText(value) {
  const text = String(value || "");
  const exact = new Map([
    ["Gain access to a talent on the first floor", "解锁第一层可选天赋"],
    ["Your characters have 1 additional starting mana", "所有角色起始法力 +1"],
    ["Your characters start with 3 additional gold", "所有角色起始金币 +3"],
    ["Your characters will find one additional health pack on each floor", "每层额外发现 1 个治疗包"],
    ["Your characters have 1 additional health", "所有角色起始生命 +1"],
    ["Your characters find an additional Treasure Chest on each floor", "每层额外发现 1 个宝箱"],
    ["Defeat each of the eighteen bosses", "击败全部 18 个 Boss"],
    ["Clear the dungeon once", "通关 1 次"],
    ["Clear the dungeon as each of the base classes", "用所有基础职业通关"],
    ["Clear the dungeon as each of the advanced classes", "用所有进阶职业通关"],
    ["Pray at all 6 altars", "在全部 6 个祭坛祈祷"],
    ["Reach the second floor", "到达第 2 层"],
    ["Reach the third floor", "到达第 3 层"],
    ["Your characters gain one additional health on level up", "所有角色升级时额外获得 1 点生命"],
    ["Reach level 10", "达到 10 级"],
    ["End a turn with 10 cards in play", "回合结束时场上有 10 张已打出的卡牌"],
    ["Begin a combat with no cards in your deck", "战斗开始时牌库中没有卡牌"],
    ["Defeat a boss without killing any monsters on that floor", "不击杀当前楼层任何普通怪物并击败 Boss"],
    ["Have 300 gold at once", "单次持有 300 金币"],
    ["Have 50 base mana", "拥有 50 基础法力"],
    ["Clear the dungeon without deleting cards from your deck", "不从牌组删除卡牌并通关"],
    ["Complete the first floor with all four base classes", "用四个基础职业都完成第 1 层"],
    ["Reduce the final boss to under 750 health", "将最终 Boss 生命降低到 750 以下"],
    ["Defeat the final boss by reducing its health to 0", "将最终 Boss 生命降到 0 并击败它"],
    ["See all 6 environments", "见过全部 6 种环境"],
    ["Start combat with each of the different types of non-boss monsters", "与每种非 Boss 怪物开始过战斗"],
    ["Find an additional tavern as the bard", "Bard 额外发现 1 个 Tavern"],
    ["Your Hoard ability is more effective", "Hoard 能力强化"],
    ["Reduce the cooldown on your Research ability", "降低 Research 能力冷却"]
  ]);
  if (exact.has(text)) {
    return exact.get(text);
  }
  const professionNameText = {
    wizard: "Wizard",
    paladin: "Paladin",
    thief: "Thief",
    warrior: "Warrior",
    priest: "Priest",
    assassin: "Assassin",
    monk: "Monk",
    necromancer: "Necromancer",
    samurai: "Samurai",
    ranger: "Ranger",
    druid: "Druid",
    bard: "Bard",
    dragon: "Dragon",
    professor: "Professor"
  };
  const translated = text
    .replace(/^Die once$/i, "死亡 1 次")
    .replace(/^Die ten times$/i, "死亡 10 次")
    .replace(/^Die fifty times$/i, "死亡 50 次")
    .replace(/^Die one hundred times$/i, "死亡 100 次")
    .replace(/^Gain ([\d,]+) mana$/i, "获得 $1 法力")
    .replace(/^Deal ([\d,]+) damage$/i, "造成 $1 点伤害")
    .replace(/^Walk ([\d,]+) steps$/i, "行走 $1 步")
    .replace(/^Kill ([\d,]+) (.+)$/i, "击杀 $1 个 $2")
    .replace(/^Add ([\d,]+) cards to your deck$/i, "向牌组加入 $1 张卡牌")
    .replace(/^Defeat the (.+)$/i, "击败 $1")
    .replace(/^Defeat (.+)$/i, "击败 $1")
    .replace(/^Gain access to the card (.+)$/i, "解锁 $1 卡牌")
    .replace(/^Gain access to the (.+?) card$/i, "解锁 $1 卡牌")
    .replace(/^Gain access to the (.+?) talent$/i, "解锁 $1 天赋")
    .replace(/^Gain access to an? (.+?) talent$/i, "解锁 $1 天赋")
    .replace(/^Unlock the (.+?) class$/i, "解锁 $1 职业")
    .replace(/^Clear the dungeon as an? (.+)$/i, "使用 $1 通关")
    .replace(/^Clear the dungeon as (.+)$/i, "使用 $1 通关")
    .replace(/^Reduce the final boss to under ([\d,]+) health as (?:an? )?(.+)$/i, "使用 $2 将最终 Boss 生命降低到 $1 以下")
    .replace(/^Reduce the final boss to under /i, "将最终 Boss 生命降低到 ")
    .replace(/^Delete a card from your deck$/i, "从牌组删除 1 张卡牌")
    .replace(/ health$/i, " 以下")
    .replace(/^Buy all the items in a shop$/i, "买空一个商店")
    .replace(/^Pray at an altar$/i, "在祭坛祈祷")
    .replace(/^Complete the mushroom patch quest$/i, "完成蘑菇丛任务")
    .replaceAll("creatures", "生物")
    .replaceAll("adventurers", "冒险者")
    .replaceAll("Goblins", "哥布林")
    .replaceAll("faeries", "精灵")
    .replaceAll("elementals", "元素")
    .replaceAll("dragons", "龙")
    .replaceAll("Undead", "不死族")
    .replaceAll("additional", "额外")
    .replaceAll("Treasure Chest", "宝箱")
    .replaceAll("health pack", "治疗包")
    .replaceAll("health", "生命")
    .replaceAll("mana", "法力")
    .replaceAll("gold", "金币")
    .replaceAll("damage", "伤害");
  return translated
    .replaceAll("个 生物", "个生物")
    .replaceAll("个 冒险者", "个冒险者")
    .replaceAll("个 哥布林", "个哥布林")
    .replaceAll("个 精灵", "个精灵")
    .replaceAll("个 元素", "个元素")
    .replaceAll("个 龙", "条龙")
    .replaceAll("个 不死族", "个不死族")
    .replace(/\b(wizard|paladin|thief|warrior|priest|assassin|monk|necromancer|samurai|ranger|druid|bard|dragon|professor)\b/g, (match) => professionNameText[match] || match);
}

function translateHandlerOperation(value) {
  return {
    call: "调用",
    add_power: "添加能力文本",
    reduce_opponent_hand_size: "降低对手手牌",
    create_equipment: "创建装备",
    create_random_equipment: "创建随机装备",
    add_cards_to_deck: "向牌组加入牌",
    add_dungeon_action: "添加地城能力",
    add_combat_ability: "添加战斗能力",
    deck_targeted_talent_action: "牌组选择动作",
    set_player_attribute: "设置玩家属性",
    refresh_mana_costs: "刷新法力费用",
    random_equipment: "随机装备",
    add_random_reward: "添加随机奖励"
  }[value] || String(value || "-").replaceAll("_", " ");
}

function handlerArgumentsText(args = {}) {
  const entries = Object.entries(args || {}).filter(([, value]) => value !== null && value !== undefined);
  if (!entries.length) {
    return "-";
  }
  return entries
    .map(([key, value]) => `${handlerArgumentKeyLabel(key)}：${handlerArgumentValueText(key, value)}`)
    .join("；");
}

function handlerArgumentKeyLabel(key) {
  return {
    x: "数值",
    cards: "卡牌",
    equipment: "装备",
    power_text: "能力文本",
    action_class: "能力类",
    ability: "战斗能力",
    attribute_id: "属性 ID",
    attribute_name: "属性名",
    value_expression: "赋值",
    equipment_source: "装备来源",
    selection: "选择规则",
    perform_operations: "执行动作",
    mode: "模式",
    title: "窗口标题",
    confirm_name: "确认按钮",
    config_method: "配置方法",
    perform_method: "执行方法"
  }[key] || key;
}

function handlerArgumentValueText(key, value) {
  if (key === "power_text") {
    return `${translateTalentPowerText(value)}（${String(value || "")}）`;
  }
  if (key === "action_class") {
    return `${String(value || "")}（${TALENT_DUNGEON_ACTION_DETAILS[value] || "地城能力"}）`;
  }
  if (key === "ability" && value === "CombatAbilityFlee") {
    return "CombatAbilityFlee（Flee：可以从战斗中逃跑）";
  }
  if (key === "selection" && typeof value === "object") {
    return selectionArgumentText(value);
  }
  if (key === "perform_operations" && Array.isArray(value)) {
    return value.map(performOperationText).join("、");
  }
  if (Array.isArray(value)) {
    return value.join("、");
  }
  if (typeof value === "object") {
    return Object.entries(value || "")
      .map(([entryKey, entryValue]) => `${entryKey}=${Array.isArray(entryValue) ? entryValue.join("、") : String(entryValue)}`)
      .join("，");
  }
  return String(value);
}

function selectionArgumentText(selection = {}) {
  const source = selection.source === "deck" ? "牌组" : selection.source || "未知来源";
  const min = selection.min_cards ?? 0;
  const max = selection.max_cards ?? min;
  const range = Number(min) === Number(max) ? `${max} 张` : `${min}-${max} 张`;
  const details = [`从${source}选择 ${range}`];
  if (selection.multi_cards) {
    details.push("可多选");
  }
  if (selection.should_cull) {
    details.push("选择前剔除不可用目标");
  }
  if (selection.all_cards) {
    details.push("允许全部牌");
  }
  if (selection.filter) {
    details.push(`过滤：${selection.filter === "Card.Upgradable" ? "可升级牌" : selection.filter}`);
  }
  return details.join("，");
}

function performOperationText(operation = {}) {
  const method = {
    "DungeonStats.DeleteCard": "从统计记录删除",
    "DungeonPlayer.RemoveCardFromDeck": "从牌组移除",
    "DungeonPlayer.AddCard": "加入同名卡",
    "DungeonPlayer.LevelUp": "升级所选牌"
  }[operation.method] || operation.method || "执行";
  const card = {
    "each_selected_card.internalName": "每张所选牌",
    "selected_card.internalName": "所选牌",
    selected_card: "所选牌"
  }[operation.card] || operation.card;
  return card ? `${method}（${card}）` : method;
}

function boolRecovered(value) {
  return value ? "已恢复。" : "未完整恢复。";
}

function summaryRecovered(summary = {}) {
  const recovered = Object.entries(summary)
    .filter(([key, value]) => value === true && (key.endsWith("_recovered") || key.endsWith("_shape_recovered")))
    .map(([key]) => key.replaceAll("_", " "));
  return recovered.slice(0, 3).join("；") || "已有结构化摘要";
}

function negativeEffectForTerm(term) {
  const normalized = String(term || "").trim().toLowerCase();
  if (!normalized) {
    return null;
  }
  return (
    NEGATIVE_EFFECTS.find((effect) => {
      const names = [effect.name, ...effect.aliases].map((item) => String(item).toLowerCase());
      return names.some((name) => normalized === name || normalized.startsWith(`${name} `));
    }) || null
  );
}

function renderRuleTerm(term, linkNegativeEffects = false) {
  const label = escapeHtml(term);
  const effect = linkNegativeEffects ? negativeEffectForTerm(term) : null;
  if (effect) {
    return `<a class="dq-term" href="/mechanics/negative-effects#${effect.id}">${label}</a>`;
  }
  return `<span class="dq-term">${label}</span>`;
}

function formatRuleHtml(value, alreadyTranslated = false, linkNegativeEffects = false) {
  let html = escapeHtml(alreadyTranslated ? value : translateRuleText(value)).replace(/\s*\^\s*/g, " ");
  html = html.replace(/&lt;([^&]+?)&gt;/g, (_, term) => renderRuleTerm(term, linkNegativeEffects));
  return html.replace(/\s+/g, " ").trim();
}

function translateRuleText(value) {
  if (!String(value || "").trim()) {
    return "没有规则文本。";
  }

  let text = normalizeRuleText(value);

  const exact = EXACT_RULE_TRANSLATIONS.get(text);
  if (exact) {
    return localizeRuleCardNames(exact);
  }

  text = text.replace(/<([^>]+)>/g, (_, term) => `<${translateTerm(term)}>`);
  for (const [token, label] of Object.entries(TOKEN_LABELS)) {
    text = text.replaceAll(token, label);
  }

  const replacements = [
    [/Trigger:/gi, "触发："],
    [/Effect:/gi, "效果："],
    [/Warning:/gi, "提示："],
    [/Choose 2 at random:/gi, "随机选择 2 项："],
    [/Choose one at random:/gi, "随机选择 1 项："],
    [/Choose one:/gi, "选择 1 项："],
    [/At the beginning of your turn,/gi, "在你的回合开始时，"],
    [/At the beginning of your turn/gi, "在你的回合开始时"],
    [/At the beginning of your next turn,/gi, "在你的下个回合开始时，"],
    [/At the beginning of your next turn/gi, "在你的下个回合开始时"],
    [/At the beginning of their turn,/gi, "在对手回合开始时，"],
    [/At the beginning of their turn/gi, "在对手回合开始时"],
    [/At the start of your turn,/gi, "在你的回合开始时，"],
    [/At the start of your turn/gi, "在你的回合开始时"],
    [/At the start of your next turn,/gi, "在你的下个回合开始时，"],
    [/At the start of your next turn/gi, "在你的下个回合开始时"],
    [/At the end of your turn,/gi, "在你的回合结束时，"],
    [/At the end of your turn/gi, "在你的回合结束时"],
    [/At the start of their turn,/gi, "在其回合开始时，"],
    [/At the start of each turn/gi, "在每个回合开始时"],
    [/at the start of each turn/gi, "在每个回合开始时"],
    [/until your next turn/gi, "直到你的下个回合"],
    [/until the end of their next turn/gi, "直到对手下个回合结束"],
    [/for the remainder of the fight/gi, "直到本场战斗结束"],
    [/this turn/gi, "本回合"],
    [/after this one/gi, "在本回合之后"],
    [/After (\d+) turns?,/gi, "$1 回合后，"],
    [/If your opponent has at least half their health,/gi, "如果对手生命不少于一半，"],
    [/if your opponent is <([^>]+)>/gi, "如果对手拥有 <$1>"],
    [/if your opponent has at most half their health,/gi, "如果对手生命至多一半，"],
    [/if you have at most half your health,/gi, "如果你的生命至多一半，"],
    [/If you have at least (\d+) mana,/gi, "如果你至少有 $1 点法力，"],
    [/If this kills your opponent,/gi, "如果这击杀了对手，"],
    [/If you do,/gi, "如果如此，"],
    [/Otherwise,/gi, "否则，"],
    [/Then,/gi, "然后，"],
    [/then/gi, "然后"],
    [/Whenever your opponent plays an attack card,/gi, "每当对手打出攻击牌时，"],
    [/Whenever the assassin plays an action card,/gi, "每当刺客打出行动牌时，"],
    [/whenever you play an Action card,/gi, "每当你打出行动牌时，"],
    [/When you play an action card,/gi, "当你打出行动牌时，"],
    [/An opponent plays a card/gi, "对手打出一张牌"],
    [/An opponent plays a spell/gi, "对手打出一张法术"],
    [/Draw the next spell card in your deck/gi, "从牌库抽取下一张法术牌"],
    [/draw the next spell card in your deck/gi, "从牌库抽取下一张法术牌"],
    [/Draw a random non-equipment card \(from among all unlocked cards\)/gi, "从所有已解锁卡中随机抽 1 张非装备牌"],
    [/Add a random <临时> non-equipment card to your hand/gi, "将 1 张随机<临时>非装备牌加入你的手牌"],
    [/Add (\d+) random <临时> non-equipment cards to your hand/gi, "将 $1 张随机<临时>非装备牌加入你的手牌"],
    [/抽一张随机 <临时> non-装备牌/gi, "抽 1 张随机<临时>非装备牌"],
    [/Add the action card ([^.]+?) to your deck/gi, "将行动牌 $1 加入你的牌库"],
    [/add it to your hand/gi, "加入你的手牌"],
    [/add it to your deck permanently/gi, "永久加入你的牌库"],
    [/Draw (\d+) cards?/gi, "抽 $1 张牌"],
    [/draw (\d+) cards?/gi, "抽 $1 张牌"],
    [/Draw a card/gi, "抽 1 张牌"],
    [/draw a card/gi, "抽 1 张牌"],
    [/Gain up to (\d+) health/gi, "回复至多 $1 点生命"],
    [/Gain (\d+) health permanently/gi, "永久获得 $1 点生命"],
    [/gain (\d+) health permanently/gi, "永久获得 $1 点生命"],
    [/Gain (\d+) health/gi, "回复 $1 点生命"],
    [/gain (\d+) health/gi, "回复 $1 点生命"],
    [/Completely heal/gi, "完全回复生命"],
    [/Heal (\d+) health/gi, "回复 $1 点生命"],
    [/Gain (\d+) mana/gi, "获得 $1 点法力"],
    [/gain (\d+) mana/gi, "获得 $1 点法力"],
    [/Gain (\d+) 行动点/gi, "获得 $1 行动点"],
    [/gain (\d+) 行动点/gi, "获得 $1 行动点"],
    [/Gain <减伤 (\d+)>/gi, "获得<减伤 $1>"],
    [/Gain 50% dodge/gi, "获得 50% 闪避"],
    [/Higher levels of Wild Strike cost additional 行动点 给 打出/gi, "高等级 Wild Strike 打出时需要额外行动点"],
    [/Lose all 行动点/gi, "失去所有行动点"],
    [/lose all 行动点/gi, "失去所有行动点"],
    [/Lose (\d+) mana/gi, "失去 $1 点法力"],
    [/lose (\d+) mana/gi, "失去 $1 点法力"],
    [/Your opponent loses all their 行动点 and mana/gi, "对手失去所有行动点和法力"],
    [/Your opponent loses all their mana/gi, "对手失去所有法力"],
    [/Your opponent loses (\d+) maximum and current health/gi, "对手失去 $1 点最大生命和当前生命"],
    [/对手 loses (\d+) 最多 生命/gi, "对手失去 $1 点最大生命"],
    [/Your opponent loses half their health, rounded down \(maximum loss of (\d+)\)/gi, "对手失去一半生命，向下取整，最多失去 $1 点"],
    [/maximum loss of (\d+)/gi, "最多失去 $1 点"],
    [/Your opponent loses half their health, rounded down/gi, "对手失去一半生命，向下取整"],
    [/your opponent loses (\d+) 行动点/gi, "对手失去 $1 行动点"],
    [/Your opponent becomes <([^>]+)>/gi, "对手获得 <$1>"],
    [/Your opponent is <([^>]+)>/gi, "对手获得 <$1>"],
    [/they become <([^>]+)>/gi, "对手获得 <$1>"],
    [/Your opponent starts burning/gi, "对手开始燃烧"],
    [/Your opponent takes ([^.]+?) damage/gi, "对手受到 $1 伤害"],
    [/The opponent takes ([^.]+?) damage/gi, "对手受到 $1 伤害"],
    [/Your opponent gains (\d+) gold/gi, "对手获得 $1 金币"],
    [/Your opponent discards (\d+) cards?/gi, "对手弃掉 $1 张牌"],
    [/your opponent discards (\d+) cards?/gi, "对手弃掉 $1 张牌"],
    [/Your opponent discards a card at random/gi, "对手随机弃掉 1 张牌"],
    [/your opponent discards a card at random/gi, "对手随机弃掉 1 张牌"],
    [/your opponent's discard pile/gi, "对手弃牌堆"],
    [/your opponent's hand/gi, "对手手牌"],
    [/your opponent's deck/gi, "对手牌库"],
    [/your opponent/gi, "对手"],
    [/opponent/gi, "对手"],
    [/Prevent the first (\d+) physical damage you would take each turn/gi, "每回合防止你受到的前 $1 点物理伤害"],
    [/Prevent the first (\d+) 攻击 damage you would take each turn/gi, "每回合防止你受到的前 $1 点攻击伤害"],
    [/Prevent the next (\d+) damage that would be dealt to you/gi, "防止你将受到的接下来 $1 点伤害"],
    [/prevent the next (\d+) damage that would be dealt to you/gi, "防止你将受到的接下来 $1 点伤害"],
    [/Prevent that damage/gi, "防止该伤害"],
    [/prevent that damage/gi, "防止该伤害"],
    [/Damage dealt to you in excess of (\d+) is reduced to \1/gi, "你单次受到超过 $1 点的伤害会被降至 $1 点"],
    [/deal <穿透> damage equal to the health gained this way/gi, "造成等同于以此回复生命值的<穿透>伤害"],
    [/deal <穿透> damage equal to half the health gained this way/gi, "造成等同于以此回复生命值一半的<穿透>伤害"],
    [/Deal (\d+) <穿透 damage> damage/gi, "造成 $1 点<穿透>伤害"],
    [/Deal (\d+) <穿透伤害> damage/gi, "造成 $1 点<穿透>伤害"],
    [/Deal (\d+) <穿透> damage to your opponent/gi, "对手受到 $1 点<穿透>伤害"],
    [/deal (\d+) <穿透> damage to your opponent/gi, "对手受到 $1 点<穿透>伤害"],
    [/Deal (\d+) <穿透> damage to 对手/gi, "对手受到 $1 点<穿透>伤害"],
    [/Deal (\d+) <穿透> damage/gi, "造成 $1 点<穿透>伤害"],
    [/deal (\d+) <穿透> damage/gi, "造成 $1 点<穿透>伤害"],
    [/Deal ([0-9, or]+) (攻击|火焰|电系|冰霜|大地|毒性) damage/gi, "造成 $1 点$2伤害"],
    [/Deal (\d+) (攻击|火焰|电系|冰霜|大地|毒性) damage to 对手/gi, "对手受到 $1 点$2伤害"],
    [/Deal (\d+) (攻击|火焰|电系|冰霜|大地|毒性) damage/gi, "造成 $1 点$2伤害"],
    [/deal (\d+) (攻击|火焰|电系|冰霜|大地|毒性) damage/gi, "造成 $1 点$2伤害"],
    [/deal another (\d+) (攻击|火焰|电系|冰霜|大地|毒性) damage/gi, "再次造成 $1 点$2伤害"],
    [/Deal (\d+) damage/gi, "造成 $1 点伤害"],
    [/deal (\d+) damage/gi, "造成 $1 点伤害"],
    [/Deal damage equal to ([^.]+)/gi, "造成等同于 $1 的伤害"],
    [/Deal physical damage equal to ([^.]+)/gi, "造成等同于 $1 的物理伤害"],
    [/Damage you deal is <穿透>/gi, "你造成的伤害变为<穿透>"],
    [/damage you deal is <穿透>/gi, "你造成的伤害变为<穿透>"],
    [/damage you do is (攻击|火焰|电系|冰霜|大地|毒性) damage/gi, "你造成的伤害变为$1伤害"],
    [/Your next source of damage 本回合 is doubled and piercing/gi, "你本回合的下一次伤害翻倍并变为穿透"],
    [/Your next source of damage 本回合 is <穿透>/gi, "你本回合的下一次伤害变为<穿透>"],
    [/Your next attack 本回合 will be piercing/gi, "你本回合的下一次攻击变为穿透"],
    [/You deal double damage 本回合/gi, "你本回合造成双倍伤害"],
    [/Your spells are free 本回合/gi, "你的法术本回合免费"],
    [/Your next spell cast 本回合 has its effect doubled/gi, "你本回合施放的下一个法术效果翻倍"],
    [/Your spells cost (\d+) less 本回合/gi, "你的法术本回合少花 $1 点费用"],
    [/You are physical resistant/gi, "你获得物理抗性"],
    [/Become physical resistant/gi, "获得物理抗性"],
    [/Become physical immune/gi, "获得物理免疫"],
    [/Lose physical immunity/gi, "失去物理免疫"],
    [/Take an extra turn/gi, "获得一个额外回合"],
    [/take an extra turn/gi, "获得一个额外回合"],
    [/Exile ([^.]+)/gi, "放逐 $1"],
    [/They exile that card/gi, "对手放逐那张牌"],
    [/They discard that card/gi, "对手弃掉那张牌"],
    [/Discard your hand/gi, "弃掉你的手牌"],
    [/discard ([^.]+?) to an effect/gi, "因效果弃掉 $1"],
    [/Discard ([^.]+)/gi, "弃掉 $1"],
    [/Shuffle (\d+) curse cards? \(which do nothing\) into 对手's deck/gi, "将 $1 张无效果诅咒牌洗入对手牌库"],
    [/Shuffle (\d+) curse 牌 \(which do nothing\) into 对手牌库/gi, "将 $1 张无效果诅咒牌洗入对手牌库"],
    [/Replace (\d+) random non-curse cards in 对手's hand with curses/gi, "将对手手牌中 $1 张随机非诅咒牌替换为诅咒"],
    [/Destroy all 对手's equipment/gi, "摧毁对手所有装备"],
    [/Destroy an equipment card/gi, "摧毁 1 张装备牌"],
    [/Destroy ([^.]+)/gi, "摧毁 $1"],
    [/Crumble/gi, "粉碎"],
    [/Copy its effects/gi, "复制其效果"],
    [/copy its effects/gi, "复制其效果"],
    [/Choose a card in ([^.]+?)\. Take it and add it to your deck permanently/gi, "选择$1中的 1 张牌，将其永久加入你的牌库"],
    [/Choose a card from it and add it to your hand/gi, "从中选择 1 张牌加入你的手牌"],
    [/Choose a card from it/gi, "从中选择 1 张牌"],
    [/add it to your hand/gi, "将其加入你的手牌"],
    [/It goes to their discard pile when discarded/gi, "弃掉时会进入对手弃牌堆"],
    [/when discarded/gi, "弃掉时"],
    [/Choose a card from it/gi, "从中选择 1 张牌"],
    [/Look at 对手's hand/gi, "查看对手手牌"],
    [/Look at 对手手牌/gi, "查看对手手牌"],
    [/Play this only if you have no action cards in play/gi, "只能在你场上没有行动牌时打出"],
    [/an action card in play/gi, "场上的 1 张行动牌"],
    [/attack cards?/gi, "攻击牌"],
    [/Attack cards?/gi, "攻击牌"],
    [/action cards?/gi, "行动牌"],
    [/Action cards?/gi, "行动牌"],
    [/spell cards?/gi, "法术牌"],
    [/Spell cards?/gi, "法术牌"],
    [/equipment cards?/gi, "装备牌"],
    [/Equipment cards?/gi, "装备牌"],
    [/cards in play/gi, "场上的牌"],
    [/card in play/gi, "场上的牌"],
    [/in play/gi, "在场"],
    [/equipment you control/gi, "你控制的装备"],
    [/cards in your deck/gi, "你牌库中的牌"],
    [/card in your deck/gi, "你牌库中的牌"],
    [/card in your discard pile/gi, "你弃牌堆中的牌"],
    [/your discard pile/gi, "你的弃牌堆"],
    [/your deck/gi, "你的牌库"],
    [/your hand/gi, "你的手牌"],
    [/your turn/gi, "你的回合"],
    [/their turn/gi, "对手回合"],
    [/each turn/gi, "每回合"],
    [/current combat/gi, "当前战斗"],
    [/removed from the game and your deck permanently after use/gi, "使用后会从游戏和你的牌库中永久移除"],
    [/removed from the game/gi, "从游戏中移除"],
    [/permanently/gi, "永久"],
    [/maximum/gi, "最多"],
    [/rounded down/gi, "向下取整"],
    [/rounded up/gi, "向上取整"],
    [/doubled/gi, "翻倍"],
    [/double the amount of poison on 对手 \(maximum (\d+) additional poison\)/gi, "使对手身上的中毒层数翻倍，最多额外增加 $1 层"],
    [/Double the amount of poison on 对手 \(最多额外增加 (\d+) 层中毒\)/gi, "使对手身上的中毒层数翻倍，最多额外增加 $1 层"],
    [/double the amount of poison on 对手/gi, "使对手身上的中毒层数翻倍"],
    [/maximum (\d+) additional poison/gi, "最多额外增加 $1 层中毒"],
    [/plus (\d+) for each/gi, "并且每有 1 个再加 $1 点"],
    [/plus (\d+) per level of poison on 对手/gi, "并按对手每层中毒额外造成 $1 点"],
    [/for each ([^.]+)/gi, "每有$1"],
    [/for every (\d+) ([^.]+)/gi, "每有 $1 个$2"],
    [/equal to twice the number of 行动点 you have left/gi, "等同于你剩余行动点数量的 2 倍"],
    [/equal to the health gained this way/gi, "等同于以此回复的生命值"],
    [/equal to half the health gained this way/gi, "等同于以此回复生命值的一半"],
    [/chosen randomly/gi, "随机决定"],
    [/at random/gi, "随机"],
    [/random/gi, "随机"],
    [/non-temporary/gi, "非临时"],
    [/non-equipment/gi, "非装备"],
    [/additional poison/gi, "层中毒"],
    [/additional 行动点/gi, "额外行动点"],
    [/temporary copy/gi, "临时复制"],
    [/named 'Attack' \(any level\)/gi, "名为“Attack”的牌（任意等级）"],
    [/ranks of diseased/gi, "层疾病"],
    [/rank of diseased/gi, "层疾病"],
    [/the last is removed/gi, "最后一层被移除时"],
    [/last is removed/gi, "最后一层被移除时"],
    [/die/gi, "死亡"],
    [/no effect/gi, "无效果"],
    [/has no effect/gi, "无效果"],
    [/The turn ends/gi, "该回合结束"],
    [/Win 该 fight/gi, "赢得这场战斗"],
    [/win一张combat/gi, "赢得一场战斗"],
    [/Begin to run away/gi, "开始逃跑"],
    [/The third time you do this, lose the 当前战斗, but provide no reward/gi, "第三次这样做时，失去当前战斗，但不给予奖励"],
    [/Present 对手 with three options\. They choose one/gi, "给对手三个选项，由对手选择其中一个"],
    [/start burning/gi, "开始燃烧"],
    [/will take/gi, "会受到"],
    [/would take/gi, "将受到"],
    [/would be dealt to you/gi, "将对你造成"],
    [/is instead <穿透>/gi, "改为<穿透>"],
    [/is converted into <穿透> damage to 对手/gi, "会转化为对手受到的<穿透>伤害"],
    [/becomes a shield/gi, "变为护盾"],
    [/it is instead <穿透>/gi, "改为<穿透>"],
    [/it to your hand/gi, "它加入你的手牌"],
    [/return it to your hand/gi, "将其返回你的手牌"],
    [/Search 对手's deck for a card and add it to your hand/gi, "从对手牌库中搜索 1 张牌加入你的手牌"],
    [/Spend all your mana to/gi, "花费你所有法力以"],
    [/All your damage is piercing/gi, "你的所有伤害都是穿透"],
    [/Your damage is piercing/gi, "你的伤害是穿透"],
    [/physical damage/gi, "物理伤害"],
    [/elemental damage/gi, "元素伤害"],
    [/\bDeal\b/gi, "造成"],
    [/\bdeal\b/gi, "造成"],
    [/\bDraw\b/gi, "抽"],
    [/\bdraw\b/gi, "抽"],
    [/\bGain\b/gi, "获得"],
    [/\bgain\b/gi, "获得"],
    [/\bGains\b/gi, "获得"],
    [/\bgains\b/gi, "获得"],
    [/\bPrevent\b/gi, "防止"],
    [/\bprevent\b/gi, "防止"],
    [/\bChoose\b/gi, "选择"],
    [/\bchoose\b/gi, "选择"],
    [/\bLook\b/gi, "查看"],
    [/\blook\b/gi, "查看"],
    [/\bIf\b/gi, "如果"],
    [/\bif\b/gi, "如果"],
    [/\bWhen\b/gi, "当"],
    [/\bwhen\b/gi, "当"],
    [/\bWhenever\b/gi, "每当"],
    [/\bwhenever\b/gi, "每当"],
    [/\bAfter\b/gi, "在之后"],
    [/\bafter\b/gi, "在之后"],
    [/\bReturn\b/gi, "返回"],
    [/\breturn\b/gi, "返回"],
    [/\bSearch\b/gi, "搜索"],
    [/\bsearch\b/gi, "搜索"],
    [/\bCopy\b/gi, "复制"],
    [/\bcopy\b/gi, "复制"],
    [/\bAdd\b/gi, "加入"],
    [/\badd\b/gi, "加入"],
    [/\bRemove\b/gi, "移除"],
    [/\bremove\b/gi, "移除"],
    [/\bShuffle\b/gi, "洗入"],
    [/\bshuffle\b/gi, "洗入"],
    [/\bSteal\b/gi, "偷取"],
    [/\bsteal\b/gi, "偷取"],
    [/\bTake\b/gi, "拿取"],
    [/\btake\b/gi, "拿取"],
    [/\bLose\b/gi, "失去"],
    [/\blose\b/gi, "失去"],
    [/\bSpend\b/gi, "花费"],
    [/\bspend\b/gi, "花费"],
    [/\bExile\b/gi, "放逐"],
    [/\bexile\b/gi, "放逐"],
    [/\bDiscard\b/gi, "弃掉"],
    [/\bdiscard\b/gi, "弃掉"],
    [/\bDiscarded\b/gi, "弃掉"],
    [/\bdiscarded\b/gi, "弃掉"],
    [/\bDestroy\b/gi, "摧毁"],
    [/\bdestroy\b/gi, "摧毁"],
    [/\bPlay\b/gi, "打出"],
    [/\bplay\b/gi, "打出"],
    [/\bthat\b/gi, "该"],
    [/\bThat\b/gi, "该"],
    [/\bthis\b/gi, "此"],
    [/\bThis\b/gi, "此"],
    [/\btheir\b/gi, "对手的"],
    [/\bTheir\b/gi, "对手的"],
    [/\bthey\b/gi, "对手"],
    [/\bThey\b/gi, "对手"],
    [/\byou\b/gi, "你"],
    [/\bYou\b/gi, "你"],
    [/\byour\b/gi, "你的"],
    [/\bYour\b/gi, "你的"],
    [/\bit\b/gi, "它"],
    [/\bIt\b/gi, "它"],
    [/\bthem\b/gi, "对手"],
    [/\bThem\b/gi, "对手"],
    [/\band\b/gi, "并"],
    [/\bAnd\b/gi, "并"],
    [/\bor\b/gi, "或"],
    [/\bOr\b/gi, "或"],
    [/\bgoes\b/gi, "会进入"],
    [/\bgo\b/gi, "进入"],
    [/\bpile\b/gi, "堆"],
    [/\bthe\b/gi, "该"],
    [/\bThe\b/gi, "该"],
    [/\ba\b/gi, "1 张"],
    [/\bA\b/gi, "1 张"],
    [/\ban\b/gi, "1 个"],
    [/\bAn\b/gi, "1 个"],
    [/\bto\b/gi, "给"],
    [/\bfrom\b/gi, "从"],
    [/\bfor\b/gi, "为"],
    [/\bwith\b/gi, "带有"],
    [/\bof\b/gi, "的"],
    [/\bin\b/gi, "在"],
    [/\bwhile\b/gi, "当"],
    [/\bWhile\b/gi, "当"],
    [/\binstead\b/gi, "改为"],
    [/\bInstead\b/gi, "改为"],
    [/\bset\b/gi, "设为"],
    [/\bSet\b/gi, "设为"],
    [/\balive\b/gi, "存活"],
    [/\bAlive\b/gi, "存活"],
    [/\bhas\b/gi, "有"],
    [/\bHas\b/gi, "有"],
    [/\bis\b/gi, "是"],
    [/\bIs\b/gi, "是"],
    [/\bare\b/gi, "是"],
    [/\bAre\b/gi, "是"],
    [/\bcurrent\b/gi, "当前"],
    [/\bCurrent\b/gi, "当前"],
    [/\bmissing\b/gi, "已损失"],
    [/\bMissing\b/gi, "已损失"],
    [/\bcontrols\b/gi, "控制"],
    [/\bControls\b/gi, "控制"],
    [/\bcontrolled\b/gi, "控制"],
    [/\bchance\b/gi, "概率"],
    [/\bChance\b/gi, "概率"],
    [/\bextra\b/gi, "额外"],
    [/\bExtra\b/gi, "额外"],
    [/\badditional\b/gi, "额外"],
    [/\bAdditional\b/gi, "额外"],
    [/\bup\b/gi, "至多"],
    [/\bUp\b/gi, "至多"],
    [/\brest\b/gi, "剩余部分"],
    [/\bRest\b/gi, "剩余部分"],
    [/\buse\b/gi, "使用"],
    [/\bUse\b/gi, "使用"],
    [/\ball\b/gi, "所有"],
    [/\bAll\b/gi, "所有"],
    [/\bno\b/gi, "没有"],
    [/\bNo\b/gi, "没有"],
    [/\bany\b/gi, "任何"],
    [/\bAny\b/gi, "任何"],
    [/\beach\b/gi, "每个"],
    [/\bEach\b/gi, "每个"],
    [/\bcounter\b/gi, "计数器"],
    [/\bCounter\b/gi, "计数器"],
    [/\bcharge\b/gi, "充能"],
    [/\bCharge\b/gi, "充能"],
    [/\bcharges\b/gi, "充能"],
    [/\bshield\b/gi, "护盾"],
    [/\bShield\b/gi, "护盾"],
    [/\bstrength\b/gi, "强度"],
    [/\bStrength\b/gi, "强度"],
    [/\bprayer\b/gi, "祈祷"],
    [/\bPrayer\b/gi, "祈祷"],
    [/\bcurse\b/gi, "诅咒"],
    [/\bCurse\b/gi, "诅咒"],
    [/\bequipment\b/gi, "装备"],
    [/\bEquipment\b/gi, "装备"],
    [/\bgoblin\b/gi, "地精"],
    [/\bGoblin\b/gi, "地精"],
    [/\bClaw\b/gi, "爪击"],
    [/\bclaw\b/gi, "爪击"],
    [/\bFireball\b/gi, "火球"],
    [/\bTotem\b/gi, "图腾"],
    [/\btotem\b/gi, "图腾"],
    [/\bShock\b/gi, "电击"],
    [/\bshock\b/gi, "电击"],
    [/\bHaste\b/gi, "急速"],
    [/\bhaste\b/gi, "急速"],
    [/\bMana\b/gi, "法力"],
    [/\bPhysical\b/gi, "物理"],
    [/\bphysical\b/gi, "物理"],
    [/\bequal\b/gi, "等同"],
    [/\bleft\b/gi, "剩余"],
    [/\bnext\b/gi, "下一个"],
    [/\bstart\b/gi, "开始"],
    [/\bend\b/gi, "结束"],
    [/\bturn\b/gi, "回合"],
    [/\bturns\b/gi, "回合"],
    [/\bdamage\b/gi, "伤害"],
    [/health/gi, "生命"],
    [/mana/gi, "法力"],
    [/gold/gi, "金币"],
    [/\bcards\b/gi, "牌"],
    [/\bcard\b/gi, "牌"]
  ];

  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }

  return localizeRuleCardNames(text
    .replace(/, /g, "，")
    .replace(/\./g, "。")
    .replace(/<([^>]+)> 并 <([^>]+)>/g, "<$1>和<$2>")
    .replace(/对手获得 <([^>]+)> 并 <([^>]+)>/g, "对手获得<$1>和<$2>")
    .replace(/临时复制 的 该 牌/g, "该牌的临时复制")
    .replace(/copy 的 该 牌/g, "该牌的复制")
    .replace(/它 会进入 给 对手的 弃掉 堆 弃掉时/g, "弃掉时会进入对手弃牌堆")
    .replace(/每当 你 /g, "每当你")
    .replace(/当 你 /g, "当你")
    .replace(/你 拿取/g, "你受到")
    .replace(/对手 失去/g, "对手失去")
    .replace(/对手 获得/g, "对手获得")
    .replace(/对手 discards一张牌/g, "对手弃掉一张牌")
    .replace(/discards一张牌/g, "弃掉一张牌")
    .replace(/loses/g, "失去")
    .replace(/Double /g, "翻倍")
    .replace(/heal half/g, "回复一半")
    .replace(/打出 此 牌 only 如果 对手 有 at most ([0-9]+) 生命/g, "只能在对手生命不超过 $1 时打出")
    .replace(/at most ([0-9]+)/g, "不超过 $1")
    .replace(/该 fight/g, "这场战斗")
    .replace(/该 rest 的 该 fight/g, "本场战斗剩余期间")
    .replace(/给 对手/g, "对手")
    .replace(/给 them/g, "对手")
    .replace(/该 下一个/g, "下一次")
    .replace(/会受到 ([0-9]+) (攻击|火焰|电系|冰霜|大地|毒性) 伤害/g, "会受到 $1 点$2伤害")
    .replace(/([0-9]+) (攻击|火焰|电系|冰霜|大地|毒性) 伤害/g, "$1 点$2伤害")
    .replace(/大地/g, "毒性")
    .replace(/最多 ([0-9]+) 额外 poison/g, "最多额外增加 $1 层中毒")
    .replace(/最多 ([0-9]+) 层中毒/g, "最多额外增加 $1 层中毒")
    .replace(/ 1 张 /g, "一张")
    .replace(/ 或 /g, "或")
    .replace(/ 并 /g, "并")
    .replace(/\s+([，。：；])/g, "$1")
    .replace(/([，。；：])\s+/g, "$1")
    .replace(/\s+/g, " ")
    .trim());
}

function translateTerm(term) {
  return String(term)
    .trim()
    .replace(/^(Poisoned|Chilled|Weakened|Damage Reduction)\s+(\d+)$/i, (_, name, value) => {
      const key = Object.keys(TERM_LABELS).find((candidate) => candidate.toLowerCase() === name.toLowerCase());
      return `${TERM_LABELS[key] || name} ${value}`;
    })
    .replace(/^(piercing damage|piercing|temporary|Overhealing|Chilled)$/i, (match) => {
      const key = Object.keys(TERM_LABELS).find((candidate) => candidate.toLowerCase() === match.toLowerCase());
      return TERM_LABELS[key] || match;
    });
}

function typeLabel(card) {
  return CARD_TYPE_LABELS[card.card_type] || "其它";
}

function cardCost(card) {
  const stats = card.costs_and_stats || {};
  return [
    { label: "行动点", value: stats.action_cost ?? 0 },
    { label: "法力", value: stats.mana_cost ?? 0 },
    { label: "金币", value: stats.gold_cost ?? 0 },
    { label: "阶级", value: stats.tier ?? "-" }
  ];
}

function cardRequirementParts(card) {
  const availability = card.availability || {};
  const requirements = availability.requirements || [];
  const requirementNames = availability.requirement_names || [];
  const hasNever =
    requirementNames.some((name) => String(name).toLowerCase() === "never") ||
    requirements.some((item) => Number(item) === 103);
  const unlockNames = requirementNames.filter((name) => String(name).toLowerCase() !== "never");
  const unlockRequirements = requirements.filter((item) => Number(item) !== 103);
  return { requirements, requirementNames, hasNever, unlockNames, unlockRequirements };
}

function compactSourceList(items, limit = 4) {
  const unique = [...new Set((items || []).filter(Boolean))];
  if (unique.length <= limit) {
    return unique.join("、");
  }
  return `${unique.slice(0, limit).join("、")} 等 ${unique.length} 项`;
}

function normalPlayerCard(card, sources = {}) {
  const availability = card.availability || {};
  const stats = card.costs_and_stats || {};
  const { hasNever, unlockNames, unlockRequirements } = cardRequirementParts(card);
  if (availability.present_in_card_list === true && !hasNever && !unlockNames.length && !unlockRequirements.length) {
    return true;
  }
  if ((sources.player || []).length) {
    return true;
  }
  return Boolean(card.display_name && Number(stats.gold_cost ?? -1) > 0);
}

function cardStatusOverride(card) {
  for (const key of [card.class_name, card.internal_name, card.display_name]) {
    const override = CARD_STATUS_OVERRIDES[slugify(key)];
    if (override) {
      const base = CARD_STATUS[override.status] || CARD_STATUS.normal;
      return { ...base, detail: override.detail || base.detail };
    }
  }
  return null;
}

function cardImplementationStatus(card) {
  const override = cardStatusOverride(card);
  if (override) {
    return override;
  }
  const sources = card.wiki_status_sources || {};
  const { unlockNames, unlockRequirements } = cardRequirementParts(card);
  if (unlockNames.length || unlockRequirements.length) {
    const detail = unlockNames.length
      ? `需要解锁：${unlockNames.join("、")}。解锁后可进入奖励和商店的 CardFinder 候选池。`
      : CARD_STATUS.unlock.detail;
    return { ...CARD_STATUS.unlock, detail };
  }
  if ((sources.profession || []).length) {
    return {
      ...CARD_STATUS.profession,
      detail: `职业专属来源：${compactSourceList(sources.profession)}。`
    };
  }
  if (normalPlayerCard(card, sources)) {
    return CARD_STATUS.normal;
  }
  if ((sources.monster || []).length) {
    return {
      ...CARD_STATUS.monster,
      detail: `怪物限定来源：${compactSourceList(sources.monster)}。`
    };
  }
  return {
    ...CARD_STATUS.monster,
    detail: "未解析到普通玩家来源；按怪物或战斗内部限定牌展示。"
  };
}

function professionImplementationStatus(profession) {
  if (UNIMPLEMENTED_PROFESSION_IDS.has(profession.id)) {
    return PROFESSION_STATUS.unimplemented;
  }
  if (profession.id === "random") {
    return PROFESSION_STATUS.special;
  }
  if (PROFESSION_UNLOCKS[profession.id]) {
    return {
      ...PROFESSION_STATUS.unlock,
      detail: PROFESSION_UNLOCKS[profession.id]
    };
  }
  return PROFESSION_STATUS.default;
}

function renderStatusBadge(status) {
  return `<span class="dq-status-badge ${escapeHtml(status.className)}" title="${escapeHtml(status.detail)}">${escapeHtml(status.label)}</span>`;
}

function renderCardStatusBadge(card) {
  return renderStatusBadge(cardImplementationStatus(card));
}

function renderProfessionStatusBadge(profession) {
  return renderStatusBadge(professionImplementationStatus(profession));
}

function isUnimplementedProfessionRecord(record) {
  return UNIMPLEMENTED_PROFESSION_IDS.has(record.profession.id);
}

function isSpecialProfessionRecord(record) {
  return record.profession.id === "random";
}

function cardSearchText(card, status = cardImplementationStatus(card)) {
  const availability = card.availability || {};
  const stats = card.costs_and_stats || {};
  const biases = Object.entries(availability.biases || {}).map(([name, value]) => `${biasNameLabel(name)} ${value}`);
  const biasEntries = (availability.bias_entries || []).map((entry) => `ID ${entry.id} ${entry.value}`);
  return [
    card.display_name,
    card.original_display_name,
    card.display_name_cn,
    card.internal_name,
    card.class_name,
    typeLabel(card),
    status.label,
    status.detail,
    stats.tier == null ? "" : `${stats.tier} 阶`,
    card.text?.rules,
    translateRuleText(card.text?.rules),
    availability.requirement_names || [],
    biases,
    biasEntries
  ]
    .flat()
    .filter((value) => value != null && String(value).trim())
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function cardAdvice(card) {
  const rules = String(card.text?.rules || "").toLowerCase();
  const stats = card.costs_and_stats || {};
  const tips = [];

  if (card.card_type === "Equipment") {
    tips.push("装备适合在战斗早段打出，让后续回合持续受益。");
  } else if (stats.action_cost === 0 && stats.mana_cost > 0) {
    tips.push("不消耗行动，适合穿插在攻击或抽牌回合里提高爆发。");
  } else if (stats.action_cost > 0 && stats.mana_cost === 0) {
    tips.push("主要消耗行动，适合在法力不足时保持回合节奏。");
  }

  if (rules.includes("draw")) {
    tips.push("带抽牌效果，手牌紧张或准备连段时优先考虑。");
  }
  if (rules.includes("poison")) {
    tips.push("中毒会拖长收益，面对高生命敌人时更有价值。");
  }
  if (rules.includes("piercing")) {
    tips.push("穿透伤害可以绕过常规防御，是处理减伤目标的好工具。");
  }
  if (rules.includes("temporary")) {
    tips.push("临时牌通常服务于当回合计划，别把它当长期资源。");
  }
  if (tips.length === 0) {
    tips.push("先看费用和规则文本，再决定它是起手牌、连段牌还是收尾牌。");
  }
  return tips.slice(0, 3);
}

function professionTone(profession) {
  const ability = `${profession.ability_text || ""} ${profession.description || ""}`.toLowerCase();
  const stats = profession.initializer?.stats || {};
  const deck = profession.initializer?.deck || [];
  const tones = [];

  if ((stats.mana ?? 0) >= 2 || ability.includes("mana")) {
    tones.push("法力节奏");
  }
  if (ability.includes("draw") || (stats.cards ?? 0) >= 3) {
    tones.push("手牌周转");
  }
  if (ability.includes("heal") || ability.includes("health")) {
    tones.push("续航");
  }
  if (deck.filter((id) => id === "Attack1").length >= 7) {
    tones.push("稳定攻击");
  }
  if (profession.action_loadout?.dungeon_actions?.length) {
    tones.push("地图互动");
  }
  return tones.length ? tones.slice(0, 3) : ["均衡成长"];
}

function groupCounts(items) {
  const counts = new Map();
  for (const item of items || []) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }
  return [...counts.entries()];
}

function splitCsvList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseMonsterSnapshotRows(raw) {
  return parseTsv(raw).map((row) => ({
    ...row,
    level: Number(row.level),
    health: Number(row.health),
    mana: Number(row.mana),
    actions: Number(row.actions),
    draw: Number(row.draw),
    boss: String(row.boss).toLowerCase() === "true"
  }));
}

function monsterSnapshotRecordKey(monster) {
  return slugify(monster?.internal_name || monster?.class_name || monster?.display_name);
}

function monsterSnapshotRowKey(row) {
  return slugify(row?.monster || row?.display_name);
}

function buildMonsterSnapshotMap(rows = []) {
  const map = new Map();
  for (const row of rows) {
    const key = monsterSnapshotRowKey(row);
    if (!key) {
      continue;
    }
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(row);
  }
  for (const list of map.values()) {
    list.sort((a, b) => Number(a.level) - Number(b.level));
  }
  return map;
}

function monsterSnapshotAnchor(row) {
  return `snapshot-${monsterSnapshotRowKey(row)}-${escapeHtml(row.level)}`;
}

function monsterSnapshotRowId(row) {
  return `${monsterSnapshotRowKey(row)}:${Number(row.level)}`;
}

function buildPreviousMonsterSnapshotMap(rows = []) {
  const previousById = new Map();
  for (const list of buildMonsterSnapshotMap(rows).values()) {
    for (let index = 0; index < list.length; index += 1) {
      previousById.set(monsterSnapshotRowId(list[index]), list[index - 1] || null);
    }
  }
  return previousById;
}

function isGeneratedAttackCard(token) {
  return /^attack[1-4]$/i.test(normalizeCardToken(token));
}

function monsterSnapshotKeyDeckTokens(row) {
  return splitCsvList(row.final_deck).filter((token) => !isGeneratedAttackCard(token));
}

function monsterSnapshotDeckDelta(row, previousRow) {
  if (!previousRow) {
    return {
      label: "最低等级最终卡组",
      tokens: splitCsvList(row.final_deck),
      empty: "无"
    };
  }
  const currentTokens = monsterSnapshotKeyDeckTokens(row);
  const previousCounts = new Map(groupCounts(monsterSnapshotKeyDeckTokens(previousRow)));
  const tokens = [];
  for (const [token, count] of groupCounts(currentTokens)) {
    const delta = count - (previousCounts.get(token) || 0);
    for (let index = 0; index < delta; index += 1) {
      tokens.push(token);
    }
  }
  return {
    label: "本等级新增牌",
    tokens,
    empty: "无新增关键牌"
  };
}

function formatCardCountText(tokens, options = {}) {
  const { limit = Infinity, empty = "无" } = options;
  const counts = groupCounts(tokens).sort((a, b) => Number(b[1]) - Number(a[1]) || String(a[0]).localeCompare(String(b[0])));
  if (!counts.length) {
    return empty;
  }
  const shown = counts.slice(0, limit).map(([token, count]) => `${count}x ${translatedCardTokenText(token)}`);
  if (counts.length > limit) {
    shown.push(`另 ${counts.length - limit} 种`);
  }
  return shown.join(", ");
}

function profileDeckForProfession(profession, profile = "fresh") {
  if (profile === "all-achievements") {
    const override = PROFESSION_ALL_ACHIEVEMENTS_DECK_OVERRIDES[profession.id];
    if (override) {
      return override;
    }
  }
  return profession.initializer?.deck || [];
}

function professionStartProfile(profession, profile = "fresh") {
  const base = profession.initializer?.stats || {};
  if (profile !== "all-achievements") {
    return { ...base, deck: profileDeckForProfession(profession, profile) };
  }
  return {
    ...base,
    health: Number(base.health ?? 0) + ALL_ACHIEVEMENTS_PROFILE_OVERLAY.health,
    mana: Number(base.mana ?? 0) + ALL_ACHIEVEMENTS_PROFILE_OVERLAY.mana,
    gold: ALL_ACHIEVEMENTS_PROFILE_OVERLAY.gold,
    deck: profileDeckForProfession(profession, profile)
  };
}

function startProfileWithDifficulty(profession, profile = "fresh", difficultyKey = "grizzly") {
  const base = professionStartProfile(profession, profile);
  const modifier = START_PROFILE_DIFFICULTY_MODIFIERS[difficultyKey] || START_PROFILE_DIFFICULTY_MODIFIERS.grizzly;
  return {
    ...base,
    health: Number(base.health ?? 0) + modifier.healthBonus,
    deck: [...(base.deck || []), ...Array.from({ length: modifier.extraAttack1 }, () => "Attack1")]
  };
}

function startProfileDifficultyDeltaText(difficultyKey) {
  const modifier = START_PROFILE_DIFFICULTY_MODIFIERS[difficultyKey] || START_PROFILE_DIFFICULTY_MODIFIERS.grizzly;
  const hp = modifier.healthBonus ? `HP +${modifier.healthBonus}` : "HP +0";
  const deck = modifier.extraAttack1 ? `Attack1 x${modifier.extraAttack1}` : "不追加 Attack1";
  return `${hp}；${deck}`;
}

function profileResourceText(profile) {
  return `HP ${profile.health ?? 0} / 蓝 ${profile.mana ?? 0} / 手牌 ${profile.cards ?? 0} / 行动 ${profile.actions ?? 0} / 金币 ${profile.gold ?? 0}`;
}

function makeAssetLookup(assetCatalog) {
  const entries = assetCatalog.entries || [];
  const byKey = new Map();
  for (const entry of entries) {
    const keys = [entry.id, entry.class_name, entry.display_name]
      .flatMap(assetKeyVariants)
      .map((key) => `${entry.area}:${key}`);
    for (const key of keys) {
      const current = byKey.get(key);
      if (!current || (!current.assets?.length && entry.assets?.length)) {
        byKey.set(key, entry);
      }
    }
  }
  return {
    entry(area, id) {
      for (const key of assetKeyVariants(id)) {
        const entry = byKey.get(`${area}:${key}`);
        if (entry) {
          return entry;
        }
      }
      return undefined;
    },
    image(area, id, preferred) {
      const entry = this.entry(area, id);
      if (!entry?.assets?.length) {
        return "";
      }
      const asset =
        entry.assets.find((candidate) => preferred && candidate.resource_path?.includes(preferred)) ||
        entry.assets[0];
      return publicAssetPath(asset);
    }
  };
}

async function buildAchievementImageLookup(repoRoot, assetCatalog) {
  const catalogPngs = new Set(
    (assetCatalog.entries || [])
      .flatMap((entry) => entry.assets || [])
      .map((asset) => asset.png)
      .filter(Boolean)
  );
  const resourcesDir = path.join(repoRoot, "extracted", "textures", "by_container", "resources");
  let files = [];
  try {
    files = await readdir(resourcesDir);
  } catch {
    return new Map();
  }
  const found = new Map();
  for (const file of files) {
    const match = file.match(/^(.+)__\d+\.png$/i);
    if (!match) {
      continue;
    }
    const key = slugify(match[1]);
    if (!key) {
      continue;
    }
    const png = `extracted/textures/by_container/resources/${file}`;
    const score = catalogPngs.has(png) ? 0 : 1;
    const current = found.get(key);
    if (!current || score > current.score) {
      found.set(key, {
        score,
        image: `/assets/${png}`
      });
    }
  }
  return new Map([...found.entries()].map(([key, value]) => [key, value.image]));
}

function renderStatPills(stats) {
  return Object.entries(STAT_LABELS)
    .map(([key, label]) => {
      const value = stats?.[key] ?? 0;
      return `<span class="dq-stat"><strong>${escapeHtml(value)}</strong>${label}</span>`;
    })
    .join("\n");
}

function yesNo(value) {
  return value ? "是" : "否";
}

function displayValue(value, fallback = "无") {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }
  if (Array.isArray(value)) {
    return value.length ? value.join("、") : fallback;
  }
  if (typeof value === "boolean") {
    return yesNo(value);
  }
  if (typeof value === "object") {
    const entries = Object.entries(value).filter(([, item]) => item !== null && item !== undefined);
    return entries.length ? entries.map(([key, item]) => `${key}: ${item}`).join("、") : fallback;
  }
  return String(value);
}

function elementalAffinityText(value) {
  if (!value || typeof value !== "object") {
    return displayValue(value);
  }
  const entries = Object.entries(value).filter(([, item]) => item !== null && item !== undefined);
  return entries.length ? entries.map(([key, item]) => `${ELEMENT_LABELS[key] || key}: ${item}`).join("、") : "无";
}

function renderMetaGrid(items) {
  return `<div class="dq-meta-grid">
${items
  .filter((item) => item.value !== null && item.value !== undefined && item.value !== "")
  .map((item) => {
    const tip = item.tip || METADATA_TIPS[item.label] || "";
    return `<span title="${escapeHtml(tip)}"><strong>${escapeHtml(item.label)}</strong><em>${escapeHtml(displayValue(item.value))}</em></span>`;
  })
  .join("\n")}
</div>`;
}

function renderOriginalText(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }
  return `<p class="dq-original">原文：${escapeHtml(text)}</p>`;
}

function translatedProfessionDescription(profession) {
  return PROFESSION_DESCRIPTIONS_CN[profession.id] || profession.description || "职业介绍暂无。";
}

function translatedProfessionAbility(profession) {
  return PROFESSION_ABILITY_CN[profession.id] || translateRuleText(profession.ability_text || "没有专属能力文本。");
}

function rewardWeightRule(profession) {
  return REWARD_WEIGHT_RULES.get(profession.id) || { formula: "取决于实际职业", note: "Random 会使用被抽中的职业规则。" };
}

function levelRewardOptions(profession) {
  const options = PROFESSION_LEVEL_OPTIONS[profession.id] || ["生命增加", "卡牌奖励"];
  return options.map((item) => (item === "生命增加" ? "生命增加（奖励项）" : item));
}

function renderLevelOptionTags(profession) {
  return `<div class="dq-tag-row">${levelRewardOptions(profession)
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("\n")}</div>`;
}

function resourceSummary(stats) {
  return `生命 ${stats.health ?? 0} / 法力 ${stats.mana ?? 0} / 行动点 ${stats.actions ?? 0} / 装备槽 ${stats.equip_slots ?? 0}`;
}

function renderProfessionParsedData(profession, abilityCn) {
  const stats = profession.initializer?.stats || {};
  const status = professionImplementationStatus(profession);
  const healthGain = PROFESSION_LEVEL_HEALTH_GAIN[profession.id];
  const scriptName = profession.class_name || profession.initializer?.class_name || profession.script || profession.id;
  return `<section class="dq-section-block">
  <h2>职业解析数据</h2>
  <table class="dq-data-table">
    <thead><tr><th>字段</th><th>解析值</th></tr></thead>
    <tbody>
      <tr><td>中文名</td><td>${escapeHtml(profession.display_name_cn || profession.display_name)}</td></tr>
      <tr><td>英文名</td><td>${escapeHtml(originalDisplayName(profession))}</td></tr>
      <tr><td>脚本类</td><td><code>${escapeHtml(scriptName)}</code></td></tr>
      <tr><td>实装状态</td><td>${renderProfessionStatusBadge(profession)}</td></tr>
      <tr><td>职业能力</td><td>${formatRuleHtml(abilityCn, true, true)}${profession.ability_text ? `<p class="dq-original">原文：${escapeHtml(profession.ability_text)}</p>` : ""}</td></tr>
      <tr><td>起始资源</td><td>${escapeHtml(resourceSummary(stats))} / 手牌 ${escapeHtml(stats.cards ?? 0)} / 金币 ${escapeHtml(stats.gold ?? 0)}</td></tr>
      <tr><td>自动升级 HP</td><td>${healthGain == null ? "由实际抽中的职业决定；实际值还会叠加难度和 FLOOR1 修正。" : `职业基础最大生命 +${healthGain}；实际值还会叠加难度和 FLOOR1 修正。`}</td></tr>
      <tr><td>职业权重 ID</td><td>${escapeHtml((profession.initializer?.class_biases || []).join("、") || "无")}</td></tr>
    </tbody>
  </table>
</section>`;
}

function rewardLevelText(level) {
  return typeof level === "number" ? `${level} 级` : String(level);
}

function cardLinkById(cardById, id, label) {
  const record = cardById.get(slugify(id || label));
  const text = label || id;
  return record ? `<a href="${record.href}">${escapeHtml(text)}</a>` : escapeHtml(text);
}

function renderInlineCardChip(record, className = "", metaText = "") {
  const card = record.card || {};
  const meta = [originalDisplayName(card), metaText].filter(Boolean).join(" · ");
  return `<a class="dq-card-chip ${className}" href="${record.href}">
  <span class="dq-card-chip-thumb">${renderCardFrame(record, "deck")}</span>
  <span class="dq-card-chip-copy"><strong>${escapeHtml(card.display_name || card.class_name || record.id)}</strong>${meta ? `<small>${escapeHtml(meta)}</small>` : ""}</span>
  ${renderCardHoverPreview(record)}
</a>`;
}

function renderFixedRewardName(reward, cardById) {
  if (reward.type === "卡牌") {
    const record = cardById.get(slugify(reward.cardId || reward.label));
    if (record) {
      return renderInlineCardChip(record, "dq-fixed-reward-card", "固定卡牌");
    }
    return cardLinkById(cardById, reward.cardId || reward.label, reward.cn || reward.label);
  }
  return `${escapeHtml(reward.cn || reward.label)}<br><span class="dq-original">${escapeHtml(reward.label)}</span>`;
}

function humanizeIdentifier(value) {
  return String(value || "")
    .replace(/^CombatAbility/, "")
    .replace(/^DungeonAction/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .trim();
}

function translationFromKeys(map, keys = []) {
  for (const key of keys || []) {
    if (key && map[key]) {
      return map[key];
    }
  }
  for (const key of keys || []) {
    const normalized = slugify(key);
    if (!normalized) {
      continue;
    }
    const found = Object.entries(map).find(([candidate]) => slugify(candidate) === normalized);
    if (found) {
      return found[1];
    }
  }
  return "";
}

function applyTranslatedName(entity, map, keys = []) {
  const original = entity.display_name || humanizeIdentifier(entity.class_name || entity.internal_name || entity.id || entity.script);
  const translated = translationFromKeys(map, keys) || original;
  return {
    ...entity,
    original_display_name: original,
    display_name_cn: translated,
    display_name: translated
  };
}

function assertTranslatedNames(kind, items, map, keyGetter) {
  const missing = [];
  for (const item of items || []) {
    const keys = keyGetter(item);
    if (!translationFromKeys(map, keys)) {
      missing.push(keys.filter(Boolean).join(" / "));
    }
  }
  if (missing.length) {
    throw new Error(`${kind} 缺少中文名：${missing.slice(0, 20).join("；")}${missing.length > 20 ? ` 等 ${missing.length} 项` : ""}`);
  }
}

function originalDisplayName(entity) {
  return entity?.original_display_name || entity?.display_name_en || entity?.display_name || entity?.internal_name || entity?.class_name || entity?.id || "";
}

function translatedCardTokenText(token) {
  const value = String(token || "").trim();
  if (!value) {
    return "";
  }
  const translated = translationFromKeys(CARD_NAME_CN, [value]);
  return translated && translated !== value ? `${translated} / ${value}` : value;
}

function bilingualOriginalLine(entity, label = "原名") {
  const original = originalDisplayName(entity);
  const translated = entity?.display_name_cn || entity?.display_name || "";
  if (!original || original === translated) {
    return "";
  }
  return `<span class="dq-original">${escapeHtml(label)}：${escapeHtml(original)}</span>`;
}

function makeSkillLookup(skills) {
  const lookup = new Map();
  for (const skill of skills || []) {
    for (const key of [skill.class_name, skill.id, skill.display_name, slugify(skill.class_name || skill.id)]) {
      if (key) {
        lookup.set(slugify(key), skill);
      }
    }
  }
  return lookup;
}

function lookupSkill(lookup, key) {
  return lookup.get(slugify(key));
}

function skillNameParts(skill, fallback = {}) {
  const key = skill?.class_name || skill?.id || fallback.className || fallback.reward || fallback.en;
  const override = SKILL_NAME_CN[key] || SKILL_NAME_CN[skill?.id] || {};
  const en = fallback.en || override.en || skill?.display_name || humanizeIdentifier(skill?.id || skill?.class_name || key);
  const cn = fallback.cn || override.cn || "";
  return { cn, en, label: cn ? `${cn} / ${en}` : en };
}

function skillEffectText(skill, fallback = {}) {
  const key = skill?.class_name || skill?.id || fallback.reward;
  return (
    fallback.detail ||
    SKILL_EFFECT_CN[key] ||
    SKILL_EFFECT_CN[skill?.id] ||
    (skill?.effect_text ? translateRuleText(skill.effect_text) : "") ||
    skill?.button_text ||
    "职业专属能力。"
  );
}

function skillImage(assetLookup, skill, preferredClassName) {
  const aliases = {
    CombatAbilityDevastate: ["Devastate", "CombatAbilitySpellFury"],
    CombatAbilityDoubleEquip: ["EquipSlot", "Equipped"],
    CombatAbilityQuickness: ["Action1", "Quicken", "Swiftness"],
    CombatAbilityStudy: ["CombatAbilityScrounge", "Scrounge"],
    DungeonActionAlchemy: ["Alchemist", "HealingPotion", "Heal"],
    DungeonActionCopySacrifice: ["CopyTalent", "Copy", "Desperate"],
    DungeonActionInvisibility: ["Invisible", "Invisibility"],
    DungeonActionSwapLocation: ["Teleport"],
    DungeonActionDeckTargetted: ["Upgrade1", "ClearMind"],
    DungeonActionDynamicDeckTargetted: ["UpgradeAll"],
    DungeonActionLevelUpDeckTargetted: ["Upgrade1"],
    DungeonActionMeditate: ["ClearMind"],
    DungeonActionMurder: ["Terror"],
    DungeonActionOracle: ["Portent"],
    DungeonActionOracleOld: ["Portent"],
    DungeonActionSacrifice: ["Desperate", "Vampiric", "Curse"],
    DungeonActionSave: ["Preparation", "Portent"],
    DungeonActionSing: ["Charismatic"],
    DungeonActionSwap: ["Teleport"],
    DungeonActionTalentDeckTargetted: ["UpgradeAll", "CopyTalent", "Upgrade1"],
    DungeonActionTileTargetted: ["Teleport"],
    DungeonActionUberTeleport: ["Teleport"],
    DungeonActionUpgrade: ["Upgrade1", "UpgradeAll"],
    DungeonActionDevour: ["Dragon", "Bite"],
    DungeonActionWildShape: ["Polymorph"],
    DungeonActionDream: ["Portent"]
  };
  const aliasKeys = [...(aliases[skill?.class_name] || []), ...(aliases[skill?.id] || [])];
  const keys = [
    preferredClassName,
    ...aliasKeys,
    skill?.class_name,
    skill?.id,
    skill?.display_name,
    String(skill?.class_name || "").replace(/^CombatAbility|^DungeonAction/, "")
  ].filter(Boolean);
  for (const key of keys) {
    for (const area of ["combat_ability", "dungeon_talent_icon", "card", "profession"]) {
      const image = assetLookup.image(area, key);
      if (image) {
        return image;
      }
    }
  }
  return "";
}

function resolvePrimaryReward(row, combatLookup, dungeonLookup, assetLookup) {
  const reward = row.reward;
  const generic = GENERIC_PRIMARY_REWARDS[reward];
  if (generic) {
    return {
      ...generic,
      reward,
      kind: "generic",
      detail: generic.detail,
      image: generic.imageArea ? assetLookup.image(generic.imageArea, generic.imageId || reward) : ""
    };
  }

  const special = SPECIAL_PRIMARY_REWARDS[reward];
  if (special) {
    const lookup = special.kind === "dungeon" ? dungeonLookup : combatLookup;
    const skill = special.className ? lookupSkill(lookup, special.className) : null;
    return {
      ...special,
      reward,
      skill,
      image: skill
        ? skillImage(assetLookup, skill, special.className)
        : special.imageArea
          ? assetLookup.image(special.imageArea, special.imageId || special.className || reward)
          : "",
      detail: skillEffectText(skill, { ...special, reward })
    };
  }

  if (reward.startsWith("CombatAbility")) {
    const skill = lookupSkill(combatLookup, reward);
    const name = skillNameParts(skill, { reward });
    return {
      reward,
      type: "战斗技能",
      kind: "combat",
      className: reward,
      cn: name.cn,
      en: name.en,
      skill,
      image: skillImage(assetLookup, skill, reward),
      detail: skillEffectText(skill, { reward })
    };
  }

  return {
    reward,
    type: "特殊奖励",
    kind: "special",
    cn: humanizeIdentifier(reward),
    en: reward,
    detail: "职业专属奖励。"
  };
}

function renderPrimaryRewardName(item) {
  const imageHtml = item.image ? `<img src="${item.image}" alt="${escapeHtml(item.en || item.reward)}" loading="lazy">` : "";
  const textClass = imageHtml ? "dq-inline-skill" : "dq-inline-skill dq-inline-skill-text";
  return `<span class="${textClass}">${imageHtml}<span><strong>${escapeHtml(item.cn || item.en || item.reward)}</strong><small>${escapeHtml(item.en || item.reward)}</small></span></span>`;
}

function renderPrimaryRewardTable(profession, combatAbilities, dungeonActions, assetLookup) {
  const rows = PROFESSION_PRIMARY_REWARDS[profession.id] || [];
  if (!rows.length) {
    return `<p class="dq-note">该职业没有单独的升级主奖励节点。</p>`;
  }
  const combatLookup = makeSkillLookup(combatAbilities);
  const dungeonLookup = makeSkillLookup(dungeonActions);
  return `<table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
${rows
  .map((row) => {
    const item = resolvePrimaryReward(row, combatLookup, dungeonLookup, assetLookup);
    return `<tr><td>${escapeHtml(rewardLevelText(row.level))}</td><td>${escapeHtml(item.type)}</td><td>${renderPrimaryRewardName(item)}</td><td>${formatRuleHtml(item.detail, true, true)}</td></tr>`;
  })
  .join("\n")}
  </tbody>
</table>`;
}

function collectPrimaryRewardSkills(profession, combatAbilities, dungeonActions, assetLookup) {
  const rows = PROFESSION_PRIMARY_REWARDS[profession.id] || [];
  const combatLookup = makeSkillLookup(combatAbilities);
  const dungeonLookup = makeSkillLookup(dungeonActions);
  const combat = [];
  const dungeon = [];
  for (const row of rows) {
    const item = resolvePrimaryReward(row, combatLookup, dungeonLookup, assetLookup);
    if (!item.skill) {
      continue;
    }
    if (item.kind === "dungeon") {
      dungeon.push(item.skill);
    } else if (item.kind === "combat" && row.reward.startsWith("CombatAbility")) {
      combat.push(item.skill);
    }
  }
  return { combat, dungeon };
}

function dedupeSkills(skills) {
  const seen = new Set();
  return (skills || []).filter((skill) => {
    const key = slugify(skill.class_name || skill.id || skill.display_name);
    if (!key || seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function renderFixedRewardTable(profession, cardById) {
  const rows = PROFESSION_FIXED_REWARDS[profession.id] || [];
  if (!rows.length) {
    return `<p class="dq-note">未解析到额外 FixedBonus 固定奖励节点；升级主要由职业主奖励和随机卡表决定。</p>`;
  }
  return `<table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
${rows
  .map((reward) => {
    const label = renderFixedRewardName(reward, cardById);
    return `<tr><td>${escapeHtml(rewardLevelText(reward.level))}</td><td>${escapeHtml(reward.type)}</td><td>${label}</td><td>${escapeHtml(reward.detail)}</td></tr>`;
  })
  .join("\n")}
  </tbody>
</table>`;
}

function renderStartProfileUpgradeTable(records, cardById, context = {}) {
  const combatAbilities = context.combatAbilities || [];
  const dungeonActions = context.dungeonActions || [];
  const assetLookup = context.assetLookup || { image: () => "" };
  return `<div class="dq-table-scroll">
<table class="dq-data-table dq-upgrade-summary-table">
  <thead><tr><th>职业</th><th>自动 HP 成长</th><th>升级选项池</th><th>升级主奖励节点</th><th>固定奖励节点</th></tr></thead>
  <tbody>
${records
  .map((record) => {
    const profession = record.profession;
    const healthGain = PROFESSION_LEVEL_HEALTH_GAIN[profession.id];
    return `<tr>
  <td><a href="${record.href}">${escapeHtml(profession.display_name || profession.id)}</a><br><small>${escapeHtml(originalDisplayName(profession))}</small></td>
  <td>${healthGain == null ? "取决于实际抽中的职业" : `职业基础 +${escapeHtml(healthGain)}`}</td>
  <td>${renderLevelOptionTags(profession)}</td>
  <td class="dq-long-cell">${renderUpgradePrimarySummary(profession, combatAbilities, dungeonActions, assetLookup)}</td>
  <td class="dq-long-cell">${renderUpgradeFixedSummary(profession, cardById)}</td>
</tr>`;
  })
  .join("\n")}
  </tbody>
</table>
</div>`;
}

function renderDifficultyStartProfileExamples(records, cardById) {
  const thiefRecord = records.find((record) => record.profession?.id === "thief");
  if (!thiefRecord) {
    return `<p class="dq-note">未找到 Thief 记录，无法生成难度开局校验示例。</p>`;
  }
  const profiles = [
    ["fresh", "基础开局"],
    ["all-achievements", "全成就档案"]
  ];
  const rows = [];
  for (const [profileKey, profileLabel] of profiles) {
    for (const difficultyKey of START_PROFILE_DIFFICULTY_ORDER) {
      const modifier = START_PROFILE_DIFFICULTY_MODIFIERS[difficultyKey];
      const start = startProfileWithDifficulty(thiefRecord.profession, profileKey, difficultyKey);
      rows.push(`<tr>
  <td>${escapeHtml(profileLabel)}</td>
  <td>${escapeHtml(modifier.label)}</td>
  <td>${escapeHtml(startProfileDifficultyDeltaText(difficultyKey))}</td>
  <td>${escapeHtml(start.health ?? 0)}</td>
  <td class="dq-long-cell">${renderCountedMonsterCardRow(start.deck, cardById, { className: "dq-start-profile-card-row" })}</td>
</tr>`);
    }
  }
  return `<div class="dq-table-scroll">
<table class="dq-data-table dq-start-difficulty-table">
  <thead><tr><th>档案</th><th>难度</th><th>难度追加</th><th>Thief HP</th><th>Thief 起始牌组</th></tr></thead>
  <tbody>
${rows.join("\n")}
  </tbody>
</table>
</div>`;
}

function renderUpgradePrimarySummary(profession, combatAbilities, dungeonActions, assetLookup) {
  const rows = PROFESSION_PRIMARY_REWARDS[profession.id] || [];
  if (!rows.length) {
    return `<span class="dq-muted-chip">${profession.id === "random" ? "取决于实际抽中的职业" : "无单独主奖励节点"}</span>`;
  }
  const combatLookup = makeSkillLookup(combatAbilities);
  const dungeonLookup = makeSkillLookup(dungeonActions);
  return `<div class="dq-upgrade-chip-list">${rows
    .map((row) => {
      const item = resolvePrimaryReward(row, combatLookup, dungeonLookup, assetLookup);
      return `<span class="dq-upgrade-reward-line"><em>${escapeHtml(rewardLevelText(row.level))}</em>${renderPrimaryRewardName(item)}</span>`;
    })
    .join("\n")}</div>`;
}

function renderUpgradeFixedSummary(profession, cardById) {
  const rows = PROFESSION_FIXED_REWARDS[profession.id] || [];
  if (!rows.length) {
    return `<span class="dq-muted-chip">无额外固定奖励</span>`;
  }
  return `<div class="dq-upgrade-chip-list">${rows
    .map(
      (reward) =>
        `<span class="dq-upgrade-reward-line"><em>${escapeHtml(rewardLevelText(reward.level))}</em>${renderFixedRewardName(reward, cardById)}</span>`
    )
    .join("\n")}</div>`;
}

function dragonSpellLink([id, label]) {
  return `<a href="/cards/${slugify(id)}">${escapeHtml(label)}</a>`;
}

function renderDragonDevourRewardTable() {
  return `<h3>Devour 吞噬奖励</h3>
<p class="dq-note">Devour 和 Dragon's Snack 的“如同吞噬”都会进入同一套奖励表。先获得目标怪物经验，再按怪物的 Devour 类型结算额外收益。</p>
<table class="dq-data-table">
  <thead><tr><th>类型 ID</th><th>类型</th><th>代表生物</th><th>吞噬收益</th></tr></thead>
  <tbody>
${DRAGON_DEVOUR_REWARD_ROWS.map(
  (row) =>
    `<tr><td>${escapeHtml(row.id)}</td><td>${escapeHtml(row.type)}</td><td>${escapeHtml(row.examples)}</td><td>${escapeHtml(row.reward)}</td></tr>`
).join("\n")}
  </tbody>
</table>`;
}

function renderDragonMagicSpellTable() {
  return `<h3>法术型吞噬牌表</h3>
<p class="dq-note">Magic 型随机选择一个元素；Fire / Frost / Poison / Lightning 型固定元素。法术强度随楼层深度提升。</p>
<table class="dq-data-table">
  <thead><tr><th>元素</th><th>低层奖励</th><th>中层奖励</th><th>高层奖励</th></tr></thead>
  <tbody>
${DRAGON_MAGIC_SPELL_ROWS.map(
  (row) =>
    `<tr><td>${escapeHtml(row.element)}</td><td>${dragonSpellLink(row.low)}</td><td>${dragonSpellLink(row.mid)}</td><td>${dragonSpellLink(row.high)}</td></tr>`
).join("\n")}
  </tbody>
</table>`;
}

function renderDragonHoardDetails() {
  return `<h3>Hoard 地城行动与成就强化</h3>
<table class="dq-data-table">
  <thead><tr><th>环节</th><th>说明</th></tr></thead>
  <tbody>
${DRAGON_HOARD_DETAIL_ROWS.map(
  (row) => `<tr><td>${escapeHtml(row.step)}</td><td>${escapeHtml(row.detail)}</td></tr>`
).join("\n")}
  </tbody>
</table>`;
}

function renderDragonMechanicDetails() {
  return `${renderDragonDevourRewardTable()}
${renderDragonMagicSpellTable()}
${renderDragonHoardDetails()}`;
}

function renderPriestMechanicDetails() {
  return `<h3>Desperate Prayer 分支</h3>
<p class="dq-note">Desperate Prayer 调用 0 到 4 的随机数；5 个分支等概率出现。触发时会显示对应英文提示。</p>
<table class="dq-data-table">
  <thead><tr><th>结果</th><th>提示</th><th>实际效果</th></tr></thead>
  <tbody>
${PRIEST_DESPERATE_PRAYER_ROWS.map(
  (row) => `<tr><td>${escapeHtml(row.roll)}</td><td>${escapeHtml(row.label)}</td><td>${formatRuleHtml(row.effect, true, true)}</td></tr>`
).join("\n")}
  </tbody>
</table>`;
}

function renderProfessorMechanicDetails() {
  const rows = [
    [
      "玩家界面",
      "Professor 开局自带的战斗技能显示为 Research / 研究；代码里的 CombatAbilityStudy 是这个技能的内部名。"
    ],
    [
      "冷却",
      "Research 是战斗技能，冷却 1 场战斗。使用后进入冷却，完成下一场战斗后重新可用。"
    ],
    [
      "选牌范围",
      "发动后打开选牌窗口，从当前对手的牌库中选择 1 张牌；界面提示是 Select a card，确认按钮是 Choose this。"
    ],
    [
      "结算",
      "选中的牌会立刻加入本场战斗的手牌；同名牌也会永久加入 Professor 自己的牌组。"
    ],
    [
      "一次性结算",
      "技能发动时会创建一次临时选牌行动，并用一次性触发包住；也就是这次 Research 只选择并结算 1 张牌。"
    ],
    [
      "和 Development 区分",
      "6 级解锁的 Development 搜索的是自己的牌库，只把牌加入当前手牌；Research 搜索的是对手牌库，并会永久扩充自己的牌组。"
    ],
    [
      "和 Study 卡区分",
      "Study 是普通卡牌，效果是抽 3 张牌再弃 1 张；Study Guide / DungeonActionStudy 是地图行动来源，不是 Professor 的 Research。"
    ]
  ];
  return `<h3>Research / 研究</h3>
<p class="dq-note">Professor 的核心成长来自把敌人的牌学进自己的牌组。这里保留 Research 的英文名，同时说明内部 Study 名称对应的实际机制。</p>
<table class="dq-data-table">
  <thead><tr><th>环节</th><th>机制</th></tr></thead>
  <tbody>
${rows.map((row) => `<tr><td>${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td></tr>`).join("\n")}
  </tbody>
</table>`;
}

function renderProfessionMechanics(profession, songs) {
  const sections = [];
  if (profession.id === "bard") {
    sections.push(renderSongTable(songs));
  }
  if (profession.id === "dragon") {
    sections.push(renderDragonMechanicDetails());
  }
  if (profession.id === "priest") {
    sections.push(renderPriestMechanicDetails());
  }
  if (profession.id === "professor") {
    sections.push(renderProfessorMechanicDetails());
  }
  if (!sections.length) {
    return "";
  }
  return `<section class="dq-section-block">
  <h2>职业机制数据</h2>
  ${sections.join("\n")}
</section>`;
}

function renderSongTable(songs) {
  const rows = (songs || [])
    .map((song) => {
      const cn = SONG_EFFECT_CN[song.id] || translateRuleText(song.effect);
      return `<tr><td><strong>${escapeHtml(song.display_name || song.id)}</strong><br><span class="dq-original">${escapeHtml(song.id)}</span></td><td>${formatRuleHtml(cn, true, true)}${renderOriginalText(song.effect)}</td></tr>`;
    })
    .join("\n");
  return `<h3>Song 歌曲表</h3>
<p class="dq-note">Bard 学到的歌曲会通过 Sing 使用。歌曲名按游戏显示名展示，内部 ID 仅保留为检索线索；这里同时给出中文效果。</p>
<table class="dq-data-table dq-song-table">
  <thead><tr><th>歌曲</th><th>效果</th></tr></thead>
  <tbody>
${rows}
  </tbody>
</table>`;
}

function renderProfessionLevelRewards(profession, cardById, combatAbilities, dungeonActions, assetLookup) {
  const rule = rewardWeightRule(profession);
  const healthGain = PROFESSION_LEVEL_HEALTH_GAIN[profession.id];
  return `<section class="dq-section-block">
  <h2>升级与固定奖励</h2>
  <p class="dq-note">职业升级会自动结算 HP、蓝和金币成长，再处理等级奖励面板；其中 3 级和 6 级常解锁战斗技能、地牢技能或专属强化。只有进入随机卡奖励时，才会从 LowCards / MidCards / HighCards 的职业卡表中抽取。</p>
  <div class="dq-reward-summary">
    <div>
      <strong>升级选项池</strong>
      ${renderLevelOptionTags(profession)}
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>${healthGain == null ? "Random 职业取决于实际抽中的职业；实际值还会叠加难度和 FLOOR1 修正。" : `升级时自动最大生命 +${healthGain}；实际值还会叠加难度和 FLOOR1 修正。`}</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>${escapeHtml(rule.formula)}</p>
      <p class="dq-note">${escapeHtml(rule.note)}</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  ${renderPrimaryRewardTable(profession, combatAbilities, dungeonActions, assetLookup)}
  <h3>固定奖励节点</h3>
  ${renderFixedRewardTable(profession, cardById)}
</section>`;
}

function renderProfessionBiasSummary(profession, biasIdToProfessions) {
  const stats = profession.initializer?.stats || {};
  const rule = rewardWeightRule(profession);
  return `<div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>${escapeHtml((profession.initializer?.class_biases || []).join("、") || "无")}</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>${escapeHtml(rule.formula)}</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>${escapeHtml(resourceSummary(stats))}</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>${escapeHtml(levelRewardOptions(profession).join("、"))}</dd></div>
    </dl>
    ${renderClassBiasTags(profession.initializer?.class_biases || [], biasIdToProfessions)}
  </div>`;
}

function cardMetadataItems(card) {
  const stats = card.costs_and_stats || {};
  const availability = card.availability || {};
  const effect = card.effect_methods || {};
  const status = cardImplementationStatus(card);
  return [
    { label: "中文名", value: card.display_name_cn || card.display_name },
    { label: "英文名", value: originalDisplayName(card) },
    { label: "卡牌状态", value: status.label, tip: status.detail },
    { label: "状态说明", value: status.detail },
    { label: "内部名称", value: card.internal_name || card.class_name },
    { label: "类名", value: card.class_name },
    { label: "类型", value: typeLabel(card) },
    { label: "基础阶级", value: stats.tier ?? availability.tier },
    { label: "等级", value: `${stats.level ?? 0} / ${stats.max_level ?? 0}` },
    { label: "行动点费用", value: stats.action_cost ?? 0 },
    { label: "法力费用", value: stats.mana_cost ?? 0 },
    { label: "金币价格", value: availability.gold ?? stats.gold_cost },
    { label: "最大出现次数", value: availability.max_spawns },
    { label: "卡池可出现", value: availability.present_in_card_list },
    { label: "需求", value: availability.requirement_names || [] },
    { label: "衰变为", value: translatedCardTokenText(card.text?.decay_to) },
    { label: "AI 打出顺序", value: stats.ai_play_sequence },
    { label: "AI 保留值", value: stats.ai_keep_value },
    { label: "元素亲和", value: elementalAffinityText(stats.elemental_affinity || availability.elemental_affinity) },
    { label: "动态价格", value: availability.has_dynamic_gold },
    { label: "有主动效果", value: effect.has_python_play_effect },
    { label: "有反应效果", value: effect.has_reaction_effect },
  ];
}

function biasNameLabel(name) {
  return CORE_BIAS_LABELS[name] || name;
}

function renderCoreBiasTags(biases) {
  const entries = Object.entries(biases || {}).sort((a, b) => b[1] - a[1]);
  if (!entries.length) {
    return `<span class="dq-muted-chip">无基础权重</span>`;
  }
  return entries
    .map(
      ([name, value]) =>
        `<a href="/mechanics/appearance-bias#card-bias">${escapeHtml(biasNameLabel(name))} ${escapeHtml(value)}</a>`
    )
    .join("\n");
}

function classBiasLabel(id, biasIdToProfessions) {
  const professions = biasIdToProfessions.get(Number(id)) || [];
  if (professions.length) {
    return professions.map((record) => record.profession.display_name || record.profession.id).join(" / ");
  }
  return CLASS_BIAS_NOTES[id] || `倾向 ${id}`;
}

function renderClassBiasTags(ids, biasIdToProfessions) {
  const values = [...new Set((ids || []).map(Number))].sort((a, b) => a - b);
  if (!values.length) {
    return `<p>这个职业没有额外职业权重 ID。</p>`;
  }
  return `<div class="dq-tag-row">${values
    .map(
      (id) =>
        `<a href="/mechanics/appearance-bias#profession-bias">ID ${escapeHtml(id)} · ${escapeHtml(classBiasLabel(id, biasIdToProfessions))}</a>`
    )
    .join("\n")}</div>`;
}

function renderCardBiasEntries(card, biasIdToProfessions) {
  const entries = card.availability?.bias_entries || [];
  if (!entries.length) {
    return `<span class="dq-muted-chip">无 ID 修正</span>`;
  }
  return entries
    .map((entry) => {
      const kind = entry.applies_to_tier ? "阶级" : "频率";
      const sign = Number(entry.value) > 0 ? "+" : "";
      return `<a href="/mechanics/appearance-bias#profession-bias">ID ${escapeHtml(entry.id)} ${kind} ${sign}${escapeHtml(entry.value)}</a>`;
    })
    .join("\n");
}

function renderHeroBiasTags(card, biasIdToProfessions) {
  return `<div class="dq-mini-tag-row">
${renderCoreBiasTags(card.availability?.biases || {})}
${renderCardBiasEntries(card, biasIdToProfessions)}
</div>`;
}

function buildCardOperationMap(cardEffectCalls = {}) {
  const map = new Map();
  for (const method of cardEffectCalls.methods || []) {
    const key = slugify(method.class_name || method.display_name || "");
    if (!key) {
      continue;
    }
    if (!map.has(key)) {
      map.set(key, new Set());
    }
    const operations = map.get(key);
    for (const operation of method.operations || []) {
      if (operation.operation) {
        operations.add(operation.operation);
      }
      if (operation.resolved_operation?.declaring_type && operation.resolved_operation?.name) {
        operations.add(`${operation.resolved_operation.declaring_type}.${operation.resolved_operation.name}`);
      }
    }
  }
  return map;
}

function cardOperations(card, cardOperationMap = new Map()) {
  const keys = [
    card.class_name,
    card.internal_name,
    card.display_name,
    card.original_display_name,
    card.display_name_cn
  ].map(slugify);
  const operations = new Set();
  for (const key of keys) {
    for (const operation of cardOperationMap.get(key) || []) {
      operations.add(operation);
    }
  }
  return operations;
}

function negativeEffectCardKeys(card) {
  return [
    card.class_name,
    card.internal_name,
    card.display_name,
    card.original_display_name,
    card.display_name_cn
  ].map(slugify).filter(Boolean);
}

function negativeEffectHasCard(effect, card, field) {
  const wanted = new Set((effect[field] || []).map(slugify).filter(Boolean));
  if (!wanted.size) {
    return false;
  }
  return negativeEffectCardKeys(card).some((key) => wanted.has(key));
}

function detectNegativeEffects(card, cardOperationMap = new Map()) {
  if (String(card.class_name || "").startsWith("Penalty")) {
    return [];
  }
  const raw = `${card.class_name || ""} ${card.internal_name || ""} ${card.display_name || ""} ${card.original_display_name || ""} ${card.text?.rules || ""}`.toLowerCase();
  const operations = cardOperations(card, cardOperationMap);
  return NEGATIVE_EFFECTS.filter((effect) => {
    if (negativeEffectHasCard(effect, card, "excludeCards")) {
      return false;
    }
    if (negativeEffectHasCard(effect, card, "includeCards")) {
      return true;
    }
    if ((effect.includeCards || []).length) {
      return false;
    }
    return (
      effect.aliases.some((alias) => raw.includes(alias.toLowerCase())) ||
      (effect.operations || []).some((operation) => operations.has(operation))
    );
  });
}

function buildBiasIdToProfessions(professionRecords) {
  const map = new Map();
  for (const record of professionRecords) {
    if (record.profession.id === "random" || UNIMPLEMENTED_PROFESSION_IDS.has(record.profession.id)) {
      continue;
    }
    for (const id of record.profession.initializer?.class_biases || []) {
      const key = Number(id);
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(record);
    }
  }
  return map;
}

function renderCardTile(record, size = "normal") {
  const card = record.card;
  const status = cardImplementationStatus(card);
  const tier = card.costs_and_stats?.tier ?? "";
  return `<a class="dq-card-tile dq-card-tile-${size}" href="${record.href}" data-card-tile data-card-type="${escapeHtml(typeLabel(card))}" data-card-status="${escapeHtml(status.key)}" data-card-tier="${escapeHtml(tier)}" data-card-search="${escapeHtml(cardSearchText(card, status))}">
  <span class="dq-card-thumb">${renderCardFrame(record, "thumb")}</span>
  <span class="dq-card-copy">
    <strong>${escapeHtml(card.display_name || card.class_name)}</strong>
    <small>${escapeHtml(originalDisplayName(card))} · ${escapeHtml(typeLabel(card))} · ${escapeHtml(card.costs_and_stats?.tier ?? "-")} 阶</small>
    <span class="dq-status-row">${renderCardStatusBadge(card)}</span>
    <span>${formatRuleHtml(compactText(translateRuleText(card.text?.rules), size === "small" ? 70 : 110), true)}</span>
  </span>
</a>`;
}

function renderCardFrame(record, variant = "normal") {
  const card = record.card;
  const loading = variant === "deck" ? "eager" : "lazy";
  const label = card.display_name || card.class_name || card.internal_name || "卡牌";
  const image = record.image
    ? `<img src="${record.image}" alt="${escapeHtml(label)}" loading="${loading}">`
    : renderCardNoArt(label || "无原始卡图");
  return `<span class="dq-game-card dq-game-card-${variant}">${image}</span>`;
}

function renderCardNoArt(label) {
  return `<span class="dq-card-no-art" aria-label="${escapeHtml(label || "无原始卡图")}">
  <span>无原始卡图</span>
</span>`;
}

function cardAliasSlugs(record) {
  const card = record.card || {};
  return [card.class_name, card.internal_name, card.display_name, card.original_display_name, card.display_name_cn, record.slug]
    .filter(Boolean)
    .map((item) => slugify(item));
}

function cardRecordsForToken(cardRecords, token) {
  const key = slugify(token);
  if (!key) {
    return [];
  }
  const exact = cardRecords.filter((record) => cardAliasSlugs(record).some((alias) => alias === key));
  if (exact.length || /\d$/.test(String(token))) {
    return exact;
  }
  return cardRecords.filter((record) => cardAliasSlugs(record).some((alias) => alias.startsWith(key)));
}

function addProfessionCardEntry(entries, record, tag) {
  if (!record) {
    return;
  }
  const key = record.slug;
  if (!entries.has(key)) {
    entries.set(key, { record, tags: [] });
  }
  const entry = entries.get(key);
  if (tag && !entry.tags.includes(tag)) {
    entry.tags.push(tag);
  }
}

function hasNeverRequirement(card) {
  return cardRequirementParts(card).hasNever;
}

function forcedExclusiveSlugs(profession) {
  return new Set((PROFESSION_EXCLUSIVE_CARD_IDS[profession.id] || []).map((id) => slugify(id)));
}

function isForcedExclusiveCard(record, forcedSlugs) {
  return cardAliasSlugs(record).some((alias) => forcedSlugs.has(alias));
}

function isExclusiveProfessionSourceCard(profession, record, forcedSlugs) {
  if (isForcedExclusiveCard(record, forcedSlugs)) {
    return true;
  }
  const card = record.card;
  const classKey = slugify(card.class_name || card.internal_name || record.slug);
  return !COMMON_STARTER_CARD_IDS.has(classKey) && hasNeverRequirement(card);
}

function professionCardEntries(profession, cardRecords) {
  const entries = new Map();
  const forcedSlugs = forcedExclusiveSlugs(profession);
  const deckCounts = groupCounts(profession.initializer?.deck || []);
  for (const [cardId, count] of deckCounts) {
    for (const record of cardRecordsForToken(cardRecords, cardId)) {
      if (isExclusiveProfessionSourceCard(profession, record, forcedSlugs)) {
        addProfessionCardEntry(entries, record, `初始牌 x${count}`);
      }
    }
  }

  for (const reward of PROFESSION_FIXED_REWARDS[profession.id] || []) {
    if (reward.type !== "卡牌") {
      continue;
    }
    const cardId = reward.cardId || reward.label;
    for (const record of cardRecordsForToken(cardRecords, cardId)) {
      if (isExclusiveProfessionSourceCard(profession, record, forcedSlugs)) {
        addProfessionCardEntry(entries, record, `${rewardLevelText(reward.level)}固定奖励`);
      }
    }
  }

  for (const item of PROFESSION_GENERATED_CARD_IDS[profession.id] || []) {
    for (const record of cardRecordsForToken(cardRecords, item.id)) {
      addProfessionCardEntry(entries, record, item.tag);
    }
  }

  for (const family of PROFESSION_CARD_FAMILIES[profession.id] || []) {
    const key = slugify(family.prefix);
    for (const record of cardRecords) {
      const classKey = slugify(record.card.class_name || record.card.internal_name || record.slug);
      if (classKey.startsWith(key)) {
        addProfessionCardEntry(entries, record, family.tag);
      }
    }
  }

  return [...entries.values()].sort((a, b) => {
    const tierA = Number(a.record.card.costs_and_stats?.tier ?? 999);
    const tierB = Number(b.record.card.costs_and_stats?.tier ?? 999);
    return tierA - tierB || (a.record.card.display_name || "").localeCompare(b.record.card.display_name || "");
  });
}

function ensureCardStatusSources(card) {
  if (!card.wiki_status_sources) {
    card.wiki_status_sources = { player: [], profession: [], monster: [] };
  }
  return card.wiki_status_sources;
}

function addCardStatusSource(record, kind, label) {
  if (!record?.card || !kind || !label) {
    return;
  }
  const sources = ensureCardStatusSources(record.card);
  if (!sources[kind]) {
    sources[kind] = [];
  }
  if (!sources[kind].includes(label)) {
    sources[kind].push(label);
  }
}

function addCardTokenStatusSource(cardRecords, token, kind, label) {
  for (const record of cardRecordsForToken(cardRecords, token)) {
    addCardStatusSource(record, kind, label);
  }
}

function annotateCardStatusSources(cardRecords, professionRecords, monsterRecords, monsterBridgeById) {
  for (const record of cardRecords) {
    record.card.wiki_status_sources = { player: [], profession: [], monster: [] };
  }

  for (const { profession } of professionRecords) {
    if (!profession || profession.id === "random" || UNIMPLEMENTED_PROFESSION_IDS.has(profession.id)) {
      continue;
    }
    const professionName = profession.display_name || profession.id;
    for (const token of profession.initializer?.deck || []) {
      addCardTokenStatusSource(cardRecords, token, "player", `${professionName} 初始牌`);
    }
    for (const reward of PROFESSION_FIXED_REWARDS[profession.id] || []) {
      if (reward.type === "卡牌") {
        addCardTokenStatusSource(cardRecords, reward.cardId || reward.label, "player", `${professionName} 固定升级奖励`);
      }
    }
    for (const { record, tags } of professionCardEntries(profession, cardRecords)) {
      addCardStatusSource(record, "profession", `${professionName}${tags.length ? `：${tags.join(" / ")}` : ""}`);
    }
  }

  for (const record of monsterRecords) {
    const monster = record.monster;
    const attrs = monster.build_attributes || {};
    const bridge = monsterBridgeForRecord(record, monsterBridgeById);
    const monsterName = monster.display_name || monster.class_name || record.slug;
    const groups = [
      { tokens: attrs.base_deck || [], label: "基础牌组" },
      { tokens: attrs.starting_equipment || [], label: "起手装备" },
      { tokens: attrs.preferred_starting_cards || [], label: "优先起手" },
      { tokens: bridge?.key_behavior_cards || [], label: "关键行为" },
      { tokens: bridge?.level_up_behavior_cards || [], label: "等级变化" }
    ];
    for (const group of groups) {
      for (const token of group.tokens) {
        addCardTokenStatusSource(cardRecords, token, "monster", `${monsterName} ${group.label}`);
      }
    }
  }

  for (const token of LORD_CARD_TOKENS) {
    addCardTokenStatusSource(cardRecords, token, "monster", "Lord of the Dream 最终战机制");
  }
}

function cardMetaLine(card) {
  const stats = card.costs_and_stats || {};
  return `${typeLabel(card)} · ${stats.tier ?? "-"} 阶 · ${stats.action_cost ?? 0} 行动点 / ${stats.mana_cost ?? 0} 法力`;
}

function renderCardHoverPreview(record) {
  const card = record.card;
  const rule = compactText(translateRuleText(card.text?.rules), 128);
  return `<span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art">${renderCardFrame(record, "hover")}</span>
    <span class="dq-card-hover-copy">
      <strong>${escapeHtml(card.display_name || card.class_name)}</strong>
      <small>${escapeHtml(`${originalDisplayName(card)} · ${cardMetaLine(card)}`)}</small>
      <em>${escapeHtml(rule)}</em>
    </span>
  </span>`;
}

function renderProfessionCardLink(record, metaText, className = "") {
  const card = record.card;
  return `<a class="dq-profession-card-link ${className}" href="${record.href}">
  <span class="dq-deck-card-thumb">${renderCardFrame(record, "deck")}</span>
  <strong>${escapeHtml(card.display_name || card.class_name)}</strong>
  <span class="dq-profession-card-meta">${escapeHtml([originalDisplayName(card), metaText].filter(Boolean).join(" · "))}</span>
  ${renderCardHoverPreview(record)}
</a>`;
}

function renderProfessionCardInfoSection(profession, cardRecords) {
  if (profession.id === "random") {
    return "";
  }
  const entries = professionCardEntries(profession, cardRecords);
  if (!entries.length) {
    return "";
  }
  return `<section class="dq-section-block dq-profession-card-info">
  <h2>职业专属卡牌</h2>
  <p class="dq-note">只列只有该职业能通过初始牌组、固定升级奖励或职业专属机制获得的特色牌；可从普通卡池获得的起手牌不列入。</p>
  <div class="dq-profession-card-grid">
${entries
  .map(({ record, tags }) => {
    const card = record.card;
    const meta = `${cardMetaLine(card)} · ${tags.join(" / ")}`;
    return renderProfessionCardLink(record, meta, "dq-profession-card-entry");
  })
  .join("\n")}
  </div>
</section>`;
}

function renderSkillTile(skill, image) {
  const name = skillNameParts(skill);
  const cooldown = skill.cooldown ?? skill.initializer?.cooldown;
  const cooldownText = cooldown == null ? "职业能力" : `冷却 ${cooldown}`;
  const text = skillEffectText(skill);
  const fallback = (name.cn || name.en || "?").slice(0, 2);
  const imageHtml = image
    ? `<img src="${image}" alt="${escapeHtml(name.en)}" loading="eager">`
    : `<span class="dq-skill-placeholder">${escapeHtml(fallback)}</span>`;
  return `<div class="dq-skill-tile">
  <span class="dq-skill-icon">${imageHtml}</span>
  <span>
    <strong>${escapeHtml(name.cn || name.en)}</strong>
    <small>${escapeHtml(name.cn ? `${name.en} · ${cooldownText}` : cooldownText)}</small>
    <em>${formatRuleHtml(text, true, true)}</em>
  </span>
</div>`;
}

function renderFrontmatter(title, description) {
  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---\n\n`;
}

export async function buildGuidePages({ repoRoot, docsRoot }) {
  const structuredRoot = path.join(repoRoot, "extracted", "structured");
  const [
    cardsData,
    professionsData,
    songsData,
    assetCatalog,
    monsterCatalog,
    monsterDeckBridge,
    achievementsData,
    talentsData,
    dungeonGeneration,
    dungeonRng,
    currentUserLoading,
    cardAccessRules,
    saveCodecSmoke,
    currentUserCardfinderSmoke,
    cardRng,
    monsterRng,
    professionSkillRng,
    cardEffectCalls
  ] = await Promise.all([
    readJson(path.join(structuredRoot, "cards.json")),
    readJson(path.join(structuredRoot, "profession_skills.json")),
    readJson(path.join(structuredRoot, "songs.json")),
    readJson(path.join(structuredRoot, "remaster_asset_catalog.json")),
    readJson(path.join(structuredRoot, "monster_catalog.json")),
    readJson(path.join(structuredRoot, "monster_deck_behavior_bridge.json")),
    readJson(path.join(structuredRoot, "achievements.json")),
    readJson(path.join(structuredRoot, "dungeon_talents.json")),
    readJson(path.join(structuredRoot, "dungeon_generation.json")),
    readJson(path.join(structuredRoot, "dungeon_rng_replay_gaps.json")),
    readJson(path.join(structuredRoot, "current_user_loading.json")),
    readJson(path.join(structuredRoot, "card_access_rules.json")),
    readJson(path.join(structuredRoot, "dungeon_user_save_codec_smoke.json")),
    readJson(path.join(structuredRoot, "current_user_save_cardfinder_smoke.json")),
    readJson(path.join(structuredRoot, "card_rng_recovery.json")),
    readJson(path.join(structuredRoot, "monster_rng_recovery.json")),
    readJson(path.join(structuredRoot, "profession_skill_rng_recovery.json")),
    readJson(path.join(structuredRoot, "card_effect_calls.json"))
  ]);

  const assetLookup = makeAssetLookup(assetCatalog);
  const resourceImageById = await buildAchievementImageLookup(repoRoot, assetCatalog);
  const achievementImageById = resourceImageById;
  assertTranslatedNames("卡牌", cardsData.cards || [], CARD_NAME_CN, (card) => [card.class_name, card.internal_name, card.display_name]);
  assertTranslatedNames("职业", professionsData.professions || [], PROFESSION_NAME_CN, (profession) => [
    profession.id,
    profession.class_name,
    profession.script,
    profession.display_name
  ]);
  assertTranslatedNames("怪物", monsterCatalog.monsters || [], MONSTER_NAME_CN, (monster) => [
    monster.class_name,
    monster.internal_name,
    monster.display_name
  ]);
  const cardRecords = (cardsData.cards || [])
    .map((card) => {
      const translatedCard = applyTranslatedName(card, CARD_NAME_CN, [card.class_name, card.internal_name, card.display_name]);
      const slug = slugify(card.class_name || card.internal_name || card.display_name);
      const imageKey = slugify(card.class_name || card.internal_name || card.display_name);
      return {
        card: translatedCard,
        slug,
        href: `/cards/${slug}`,
        image: assetLookup.image("card", card.class_name || card.internal_name || card.display_name) || resourceImageById.get(imageKey) || ""
      };
    })
    .sort((a, b) => (a.card.display_name || "").localeCompare(b.card.display_name || ""));
  const catalogCardRecords = filterCatalogCardRecords(cardRecords);
  const catalogSlugs = new Set(catalogCardRecords.map((record) => record.slug));

  const cardById = new Map();
  for (const record of catalogCardRecords) {
    for (const key of [
      record.card.class_name,
      record.card.internal_name,
      record.card.display_name,
      record.card.original_display_name,
      record.slug
    ]) {
      if (key) {
        cardById.set(slugify(key), record);
      }
    }
  }

  const translatedProfessions = (professionsData.professions || []).map((profession) =>
    applyTranslatedName(profession, PROFESSION_NAME_CN, [profession.id, profession.class_name, profession.script, profession.display_name])
  );
  const professions = translatedProfessions
    .filter((profession) => profession.id !== "random")
    .sort((a, b) => (a.display_name || "").localeCompare(b.display_name || ""));
  const allProfessions = translatedProfessions.sort((a, b) =>
    (a.display_name || "").localeCompare(b.display_name || "")
  );
  const combatAbilities = professionsData.combat_abilities || [];
  const dungeonActions = professionsData.dungeon_actions || [];
  const buildingRecords = BUILDING_DEFINITIONS.map((building) => ({
    building,
    slug: building.id,
    href: `/buildings/${building.id}`,
    image: buildingImage(assetLookup, building)
  }));
  const achievementRecords = (achievementsData.achievements || []).sort((a, b) =>
    (a.flavor_name || "").localeCompare(b.flavor_name || "") ||
    Number(a.attribute ?? 0) - Number(b.attribute ?? 0)
  ).map((achievement) => ({
    ...achievement,
    image:
      achievementImageById.get(slugify(achievement.internal_name)) ||
      achievementImageById.get(slugify(achievement.attribute_name)) ||
      ""
  }));
  const achievementsByAttribute = new Map(achievementRecords.map((achievement) => [achievement.attribute_name, achievement]));
  const talentRecords = (talentsData.talents || [])
    .map((talent) => ({
      talent,
      slug: slugify(talent.internal_name || talent.display_name),
      href: `/talents/${slugify(talent.internal_name || talent.display_name)}`,
      image: assetLookup.image("dungeon_talent_icon", talent.internal_name || talent.display_name)
    }))
    .sort((a, b) => Number(a.talent.tier ?? 99) - Number(b.talent.tier ?? 99) || (a.talent.display_name || "").localeCompare(b.talent.display_name || ""));

  const professionRecords = allProfessions.map((profession) => {
    const slug = slugify(profession.id || profession.display_name);
    const iconKey = profession.id === "druid" ? "druidhuman" : profession.id || profession.class_name;
    return {
      profession,
      slug,
      href: `/professions/${slug}`,
      heroImage: assetLookup.image("profession", profession.id || profession.class_name, "/big/"),
      iconImage: assetLookup.image("profession", iconKey, "/little/")
    };
  });
  const biasIdToProfessions = buildBiasIdToProfessions(professionRecords);
  const monsterRecords = (monsterCatalog.monsters || [])
    .map((monster) => {
      const translatedMonster = applyTranslatedName(monster, MONSTER_NAME_CN, [
        monster.class_name,
        monster.internal_name,
        monster.display_name
      ]);
      const slug = slugify(monster.internal_name || monster.class_name || monster.display_name);
      return {
        monster: translatedMonster,
        slug,
        href: `/monsters/${slug}`,
        image: assetLookup.image("dungeon_actor", monster.class_name || monster.internal_name || monster.display_name)
      };
    })
    .sort((a, b) => {
      const levelA = Number(a.monster.monster_data?.min_level ?? 999);
      const levelB = Number(b.monster.monster_data?.min_level ?? 999);
      return levelA - levelB || (a.monster.display_name || "").localeCompare(b.monster.display_name || "");
  });
  const monsterBridgeById = buildMonsterBridgeMap(monsterDeckBridge);
  annotateCardStatusSources(catalogCardRecords, professionRecords, monsterRecords, monsterBridgeById);
  const cardOperationMap = buildCardOperationMap(cardEffectCalls);
  const mechanicsSourceRoot = path.join(repoRoot, "docs", "mechanics");
  const [startProfileAuditRaw, monsterSnapshotTsvRaw] = await Promise.all([
    readTextIfExists(path.join(mechanicsSourceRoot, "start-profile-and-monster-level-audit.md")),
    readTextIfExists(path.join(mechanicsSourceRoot, "monster-level-hp-deck-snapshots.tsv"))
  ]);
  const monsterSnapshotRows = parseMonsterSnapshotRows(monsterSnapshotTsvRaw);
  const monsterSnapshotsById = buildMonsterSnapshotMap(monsterSnapshotRows);

  await mkdir(path.join(docsRoot, "cards"), { recursive: true });
  await mkdir(path.join(docsRoot, "professions"), { recursive: true });
  await mkdir(path.join(docsRoot, "monsters"), { recursive: true });
  await mkdir(path.join(docsRoot, "mechanics"), { recursive: true });
  await mkdir(path.join(docsRoot, "mechanics", "lord"), { recursive: true });
  await mkdir(path.join(docsRoot, "buildings"), { recursive: true });
  await mkdir(path.join(docsRoot, "talents"), { recursive: true });
  await mkdir(path.join(docsRoot, "public", "assets", "data"), { recursive: true });
  if (monsterSnapshotTsvRaw) {
    await writeFile(
      path.join(docsRoot, "public", "assets", "data", "monster-level-hp-deck-snapshots.tsv"),
      monsterSnapshotTsvRaw,
      "utf8"
    );
    await writeFile(
      path.join(docsRoot, "public", "assets", "data", "monster-level-snapshots-incremental.html"),
      renderMonsterSnapshotStandaloneTable(monsterRecords, monsterSnapshotRows, cardById),
      "utf8"
    );
    await rm(path.join(docsRoot, "public", "assets", "data", "monster-level-snapshots-table.html"), { force: true });
  } else {
    await rm(path.join(docsRoot, "public", "assets", "data", "monster-level-hp-deck-snapshots.tsv"), { force: true });
    await rm(path.join(docsRoot, "public", "assets", "data", "monster-level-snapshots-table.html"), { force: true });
    await rm(path.join(docsRoot, "public", "assets", "data", "monster-level-snapshots-incremental.html"), { force: true });
  }
  for (const record of cardRecords) {
    if (!catalogSlugs.has(record.slug)) {
      await rm(path.join(docsRoot, "cards", `${record.slug}.md`), { force: true });
    }
  }

  await writeFile(
    path.join(docsRoot, "index.md"),
    renderHome(catalogCardRecords, professionRecords, monsterRecords, buildingRecords, talentRecords, achievementRecords),
    "utf8"
  );
  await writeFile(path.join(docsRoot, "cards.md"), renderCardsOverview(catalogCardRecords), "utf8");
  await writeFile(path.join(docsRoot, "card-catalog.md"), renderCardCatalog(catalogCardRecords), "utf8");
  await writeFile(
    path.join(docsRoot, "professions.md"),
    renderProfessionsOverview(professionRecords),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "profession-catalog.md"),
    renderProfessionCatalog(professionRecords),
    "utf8"
  );
  await writeFile(path.join(docsRoot, "mechanics", "index.md"), renderMechanicsIndex(), "utf8");
  await writeFile(
    path.join(docsRoot, "mechanics", "start-profile-and-difficulty.md"),
    renderStartProfileAuditGuide(professionRecords, cardById, startProfileAuditRaw, {
      combatAbilities,
      dungeonActions,
      assetLookup
    }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "monster-level-snapshots.md"),
    renderMonsterLevelSnapshotGuide(monsterRecords, monsterSnapshotRows, cardById),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "unimplemented-skills.md"),
    renderUnimplementedSkillsGuide({
      combatAbilities,
      dungeonActions,
      talents: talentsData.talents || [],
      assetLookup
    }),
    "utf8"
  );
  await writeFile(path.join(docsRoot, "monsters.md"), renderMonstersOverview(monsterRecords, monsterCatalog.summary, monsterBridgeById, assetLookup, monsterSnapshotRows), "utf8");
  await writeFile(path.join(docsRoot, "buildings.md"), renderBuildingsOverview(buildingRecords), "utf8");
  await writeFile(path.join(docsRoot, "talents.md"), renderTalentsOverview(talentRecords), "utf8");
  await writeFile(
    path.join(docsRoot, "achievements.md"),
    renderAchievementsOverview(
      achievementRecords,
      buildAchievementLinkIndex(
        catalogCardRecords,
        talentRecords,
        professionRecords,
        buildAchievementFallbackCardRecords(assetCatalog)
      )
    ),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "appearance-bias.md"),
    renderAppearanceBiasGuide(cardRecords, professionRecords, biasIdToProfessions),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "negative-effects.md"),
    renderNegativeEffectsGuide(cardRecords, cardOperationMap),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "rng-save-load.md"),
    renderRngSaveLoadGuide({ dungeonRng, currentUserLoading, cardRng, monsterRng, professionSkillRng }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "dungeon-generation.md"),
    renderDungeonGenerationGuide(dungeonGeneration, monsterCatalog, cardById, { assetLookup, buildingRecords, monsterRecords }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "terrain-monsters.md"),
    renderTerrainMonsterGuide(monsterRecords, assetLookup),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "lord-of-the-dream.md"),
    renderLordMechanicsPage({ cardById, assetLookup }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "lord", "final-boss.md"),
    renderLordFinalBossPage({ cardById }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "lord", "bossattr.md"),
    renderLordBossAttrPage({ cardById }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "lord", "card-decay.md"),
    renderLordCardDecayPage({ cardById }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "lord", "decrees-gifts-choices.md"),
    renderLordRulesPage({ cardById }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "lord", "deck-and-interactions.md"),
    renderLordDeckAndInteractionsPage({ cardById }),
    "utf8"
  );
  await writeFile(
    path.join(docsRoot, "mechanics", "rewards-and-shops.md"),
    renderRewardsAndShopsGuide(dungeonGeneration, assetLookup),
    "utf8"
  );

  for (const record of catalogCardRecords) {
    await writeFile(
      path.join(docsRoot, "cards", `${record.slug}.md`),
      renderCardPage(record, catalogCardRecords, biasIdToProfessions, cardById),
      "utf8"
    );
  }

  for (const record of professionRecords) {
    await writeFile(
      path.join(docsRoot, "professions", `${record.slug}.md`),
      renderProfessionPage({
        record,
        cardRecords: catalogCardRecords,
        cardById,
        combatAbilities,
        dungeonActions,
        songs: songsData,
        assetLookup,
        biasIdToProfessions
      }),
      "utf8"
    );
  }

  for (const record of buildingRecords) {
    await writeFile(
      path.join(docsRoot, "buildings", `${record.slug}.md`),
      renderBuildingPage(record, dungeonGeneration, songsData),
      "utf8"
    );
  }

  for (const record of talentRecords) {
    await writeFile(
      path.join(docsRoot, "talents", `${record.slug}.md`),
      renderTalentPage(record, achievementsByAttribute),
      "utf8"
    );
  }

  for (const record of monsterRecords) {
    await writeFile(
      path.join(docsRoot, "monsters", `${record.slug}.md`),
      renderMonsterPage({
        record,
        cardById,
        bridge: monsterBridgeForRecord(record, monsterBridgeById),
        snapshots: monsterSnapshotsById.get(monsterSnapshotRecordKey(record.monster)) || []
      }),
      "utf8"
    );
  }
  await writeFile(
    path.join(docsRoot, "monsters", "lord-of-the-dream.md"),
    renderLordMonsterEntryPage({ assetLookup }),
    "utf8"
  );

  return {
    cardPages: catalogCardRecords.length,
    professionPages: professionRecords.length,
    monsterPages: monsterRecords.length + 1,
    buildingPages: buildingRecords.length,
    talentPages: talentRecords.length,
    achievements: achievementRecords.length
  };
}

function filterCatalogCardRecords(cardRecords) {
  return cardRecords;
}

function renderHome(cardRecords, professionRecords, monsterRecords = [], buildingRecords = [], talentRecords = [], achievementRecords = []) {
  const featuredCards = ["AbsorbVis", "Accelerate", "AcidRain", "Sword", "Fireball", "PrayerOfViolence"]
    .map((id) => cardRecords.find((record) => slugify(record.card.class_name) === slugify(id)))
    .filter(Boolean)
    .slice(0, 6);
  const featuredProfessions = ["assassin", "bard", "ranger", "warrior", "wizard"]
    .map((id) => professionRecords.find((record) => record.slug === id))
    .filter(Boolean);

  return `${renderFrontmatter("Dream Quest 中文 Wiki", "面向玩家的 Dream Quest 卡牌、职业和机制指南。")}
<section class="dq-home-hero">
  <div>
    <p class="dq-kicker">中文玩家指南</p>
    <h1>Dream Quest Wiki</h1>
    <p class="dq-lede">按卡牌、职业和战斗节奏组织信息，帮助你更快判断一张牌值不值得拿、一个职业应该怎么开局。</p>
    <div class="dq-action-row">
      <a class="dq-button" href="/cards">浏览卡牌</a>
      <a class="dq-button dq-button-secondary" href="/professions">职业图鉴</a>
    </div>
  </div>
  <div class="dq-hero-strip">
    ${featuredCards.map((record) => renderCardFrame(record, "showcase")).join("\n")}
  </div>
</section>

<section class="dq-link-grid dq-link-grid-four">
  <a href="/cards"><strong>卡牌图鉴</strong><span>${cardRecords.length} 张卡牌，按类型和费用快速浏览。</span></a>
  <a href="/professions"><strong>职业图鉴</strong><span>查看每个职业的技能、升级奖励和卡牌出现权重。</span></a>
  <a href="/monsters"><strong>怪物图鉴</strong><span>${monsterRecords.length + 1} 个敌人，按地形、等级、Boss 和机制检索。</span></a>
  <a href="/buildings"><strong>地牢建筑</strong><span>${buildingRecords.length} 个建筑和地牢事件，覆盖宝箱、商店、酒馆和特殊事件。</span></a>
  <a href="/talents"><strong>天赋图鉴</strong><span>${talentRecords.length} 个地牢天赋，按阶级、要求和效果查询。</span></a>
  <a href="/achievements"><strong>成就图鉴</strong><span>${achievementRecords.length} 条成就，按解锁类型查看奖励。</span></a>
  <a href="/mechanics/"><strong>机制参考</strong><span>查看职业开局、怪物等级快照、随机数、地牢生成、卡牌出现权重和负面效果。</span></a>
</section>

## 推荐入口

<section class="dq-profession-ribbon">
${featuredProfessions
  .map((record) => {
    const p = record.profession;
    return `<a href="${record.href}">
  <img src="${record.iconImage || record.heroImage}" alt="${escapeHtml(p.display_name)}" loading="lazy">
  <strong>${escapeHtml(p.display_name)}</strong>
  <span>${escapeHtml(originalDisplayName(p))} · ${professionTone(p).join(" · ")}</span>
</a>`;
  })
  .join("\n")}
</section>
`;
}

function renderCardsOverview(cardRecords) {
  const typeGroups = groupCardsByLabel(cardRecords);
  const statusOptions = Object.values(CARD_STATUS).map((status) => ({
    ...status,
    count: cardRecords.filter((record) => cardImplementationStatus(record.card).key === status.key).length
  }));
  const tierOptions = [
    ...new Set(cardRecords.map((record) => record.card.costs_and_stats?.tier).filter((value) => value != null))
  ].sort((a, b) => Number(a) - Number(b));

  return `${renderFrontmatter("卡牌图鉴", "按类型浏览 Dream Quest 全量卡牌。")}
${renderCardFilterScript()}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Cards</p>
    <h1>卡牌图鉴</h1>
    <p class="dq-lede">按卡牌类型整理全量卡表。点击任意卡牌进入详情页，查看规则文本、费用、阶级、metadata 和卡牌出现权重。</p>
  </div>
  <span class="dq-count">${cardRecords.length} 张卡牌</span>
</section>

<section class="dq-type-grid">
${typeGroups
  .filter((group) => group.records.length)
  .map(
    (group) => `<a href="/cards#${group.anchor}">
  <strong>${escapeHtml(group.label)}</strong>
  <span>${group.records.length} 张</span>
</a>`
  )
  .join("\n")}
</section>

<section class="dq-card-filter" data-card-filter>
  <div class="dq-filter-bar">
    <label class="dq-filter-field dq-filter-field-search">
      <span>检索</span>
      <input id="dq-card-search" type="search" autocomplete="off" placeholder="卡名、效果、类型、metadata" data-card-search-input>
    </label>
    <label class="dq-filter-field">
      <span>类型</span>
      <select data-card-type-filter>
        <option value="">全部类型</option>
        ${typeGroups
          .filter((group) => group.records.length)
          .map((group) => `<option value="${escapeHtml(group.label)}">${escapeHtml(group.label)} · ${group.records.length}</option>`)
          .join("\n")}
      </select>
    </label>
    <label class="dq-filter-field">
      <span>状态</span>
      <select data-card-status-filter>
        <option value="">全部状态</option>
        ${statusOptions
          .filter((status) => status.count)
          .map((status) => `<option value="${escapeHtml(status.key)}">${escapeHtml(status.label)} · ${status.count}</option>`)
          .join("\n")}
      </select>
    </label>
    <label class="dq-filter-field">
      <span>阶级</span>
      <select data-card-tier-filter>
        <option value="">全部阶级</option>
        ${tierOptions.map((tier) => `<option value="${escapeHtml(tier)}">${escapeHtml(tier)} 阶</option>`).join("\n")}
      </select>
    </label>
  </div>
  <div class="dq-filter-summary">
    <span><strong data-card-result-count>${cardRecords.length}</strong> 张匹配</span>
    <button type="button" data-card-filter-reset>重置</button>
  </div>
</section>

<div data-card-catalog>
${typeGroups
  .map(
    (group) => `<section class="dq-card-group" data-card-group data-card-group-type="${escapeHtml(group.label)}">
<h2 id="${group.anchor}" class="dq-card-group-title"><span>${escapeHtml(group.label)}</span><em data-card-group-count>${group.records.length} 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
${group.records.map((record) => renderCardTile(record, "small")).join("\n")}
</section>
</section>`
  )
  .join("\n\n")}
<p class="dq-card-empty" data-card-empty hidden>没有符合条件的卡牌。</p>
</div>
`;
}

function renderCardFilterScript() {
  return `<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const catalog = document.querySelector('[data-card-catalog]');
  const filter = document.querySelector('[data-card-filter]');
  if (!catalog || !filter) {
    return;
  }

  const searchInput = filter.querySelector('[data-card-search-input]');
  const typeFilter = filter.querySelector('[data-card-type-filter]');
  const statusFilter = filter.querySelector('[data-card-status-filter]');
  const tierFilter = filter.querySelector('[data-card-tier-filter]');
  const resetButton = filter.querySelector('[data-card-filter-reset]');
  const resultCount = filter.querySelector('[data-card-result-count]');
  const emptyState = catalog.querySelector('[data-card-empty]');
  const tiles = Array.from(catalog.querySelectorAll('[data-card-tile]'));
  const groups = Array.from(catalog.querySelectorAll('[data-card-group]'));

  const normalize = (value) => String(value || '').trim().toLowerCase();
  const update = () => {
    const query = normalize(searchInput?.value);
    const typeValue = typeFilter?.value || '';
    const statusValue = statusFilter?.value || '';
    const tierValue = tierFilter?.value || '';
    let visibleTotal = 0;

    for (const tile of tiles) {
      const matchesQuery = !query || normalize(tile.dataset.cardSearch).includes(query);
      const matchesType = !typeValue || tile.dataset.cardType === typeValue;
      const matchesStatus = !statusValue || tile.dataset.cardStatus === statusValue;
      const matchesTier = !tierValue || tile.dataset.cardTier === tierValue;
      const visible = matchesQuery && matchesType && matchesStatus && matchesTier;
      tile.hidden = !visible;
      visibleTotal += visible ? 1 : 0;
    }

    for (const group of groups) {
      const visibleTiles = Array.from(group.querySelectorAll('[data-card-tile]')).filter((tile) => !tile.hidden);
      group.hidden = visibleTiles.length === 0;
      const count = group.querySelector('[data-card-group-count]');
      if (count) {
        count.textContent = visibleTiles.length + ' 张';
      }
    }

    if (resultCount) {
      resultCount.textContent = String(visibleTotal);
    }
    if (emptyState) {
      emptyState.hidden = visibleTotal !== 0;
    }
  };

  for (const control of [searchInput, typeFilter, statusFilter, tierFilter]) {
    control?.addEventListener('input', update);
    control?.addEventListener('change', update);
  }
  resetButton?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (typeFilter) typeFilter.value = '';
    if (statusFilter) statusFilter.value = '';
    if (tierFilter) tierFilter.value = '';
    update();
    searchInput?.focus();
  });

  update();
});
</script>`;
}

function renderCardCatalog(cardRecords) {
  return `${renderFrontmatter("卡牌全量目录", "卡牌全量目录已合并到卡牌图鉴。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Cards</p>
    <h1>卡牌目录已合并</h1>
    <p class="dq-lede">卡牌图鉴现在就是全量卡表，并按攻击、法术、行动牌、装备、反应、魔力、祈祷和其它分类整理。</p>
  </div>
  <a class="dq-button" href="/cards">打开卡牌图鉴</a>
</section>
`;
}

function buildingImage(assetLookup, building) {
  return (
    assetLookup.image("dungeon_actor", building.assetId || building.className || building.id, "/big/") ||
    assetLookup.image("dungeon_actor", building.assetId || building.className || building.id, "/little/")
  );
}

function renderBuildingsOverview(buildingRecords) {
  const categories = [...new Set(buildingRecords.map((record) => record.building.category))];
  return `${renderFrontmatter("地牢建筑图鉴", "Dream Quest 地牢建筑、事件和特殊奖励索引。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Dungeon Features</p>
    <h1>地牢建筑图鉴</h1>
    <p class="dq-lede">按奖励、回复、经济、强化和特殊事件整理地牢里的可交互对象。点击建筑进入详情页，查看生成方式和实际效果。</p>
  </div>
  <span class="dq-count">${buildingRecords.length} 个条目</span>
</section>

<section class="dq-type-grid">
${categories
  .map((category) => {
    const count = buildingRecords.filter((record) => record.building.category === category).length;
    return `<a href="#${buildingCategoryAnchor(category)}"><strong>${escapeHtml(category)}</strong><span>${count} 个条目</span></a>`;
  })
  .join("\n")}
</section>

${categories
  .map((category) => {
    const records = buildingRecords.filter((record) => record.building.category === category);
    return `<section class="dq-card-group">
<h2 id="${buildingCategoryAnchor(category)}" class="dq-card-group-title"><span>${escapeHtml(category)}</span><em>${records.length} 个</em></h2>
<section class="dq-feature-grid">
${records.map(renderBuildingTile).join("\n")}
</section>
</section>`;
  })
  .join("\n\n")}
`;
}

function buildingCategoryAnchor(category) {
  return BUILDING_CATEGORY_ANCHORS[category] || slugify(category) || "other";
}

function renderBuildingTile(record) {
  const b = record.building;
  return `<a class="dq-feature-tile" href="${record.href}">
  <span class="dq-feature-art">${record.image ? `<img src="${record.image}" alt="${escapeHtml(b.en)}" loading="lazy">` : ""}</span>
  <span>
    <strong>${escapeHtml(b.cn)}</strong>
    <small>${escapeHtml(b.en)} · ${escapeHtml(b.category)}</small>
    <em>${escapeHtml(compactText(b.summary, 108))}</em>
  </span>
</a>`;
}

function renderBuildingPage(record, dungeonGeneration, songsData = {}) {
  const b = record.building;
  const rewardProbRows = rewardProbabilityRowsForBuilding(dungeonGeneration, b);
  return `${renderFrontmatter(`${b.cn} / ${b.en}`, compactText(b.summary, 150))}
<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Dungeon Feature · ${escapeHtml(b.category)}</p>
    <h1>${escapeHtml(b.cn)}</h1>
    <p class="dq-lede">${escapeHtml(b.summary)}</p>
    <p class="dq-original">原名：${escapeHtml(b.en)} · 类名：${escapeHtml(b.className)}</p>
    <div class="dq-tag-row"><span>${escapeHtml(b.category)}</span><span>${escapeHtml(b.spawn)}</span></div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    ${record.image ? `<img src="${record.image}" alt="${escapeHtml(b.en)}" loading="lazy">` : ""}
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  ${renderMetaGrid([
    { label: "中文名", value: b.cn, tip: "wiki 中使用的中文名称。" },
    { label: "英文名", value: b.en, tip: "游戏原始名称或代码中对应名称。" },
    { label: "类名", value: b.className, tip: "反编译类型或创建 feature 时使用的内部名称。" },
    { label: "类别", value: b.category, tip: "用于图鉴分组。" },
    { label: "生成方式", value: b.spawn, tip: "从地牢生成和奖励分配中恢复出的生成入口。" }
  ])}
</section>

<section class="dq-section-block">
  <h2>机制说明</h2>
  <div class="dq-mechanic-list">
${b.details.map((detail) => `<p>${escapeHtml(detail)}</p>`).join("\n")}
  </div>
</section>

${renderBuildingMechanicSections(b)}

${renderBuildingSpecificGuide(b, songsData)}

${rewardProbRows.length ? `<section class="dq-section-block">
  <h2>随机奖励权重</h2>
  <table class="dq-data-table">
    <thead><tr><th>楼层组</th><th>概率</th><th>说明</th></tr></thead>
    <tbody>
${rewardProbRows.map((row) => `<tr><td>${escapeHtml(row.group)}</td><td>${escapeHtml(percent(row.probability))}</td><td>${escapeHtml(row.note)}</td></tr>`).join("\n")}
    </tbody>
  </table>
</section>` : ""}

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">回到地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
`;
}

function renderBuildingMechanicSections(building) {
  const sections = BUILDING_MECHANIC_SECTIONS[building.className] || [];
  if (!sections.length) return "";
  return sections
    .map((section) => {
      const headers = section.headers || [];
      return `<section class="dq-section-block">
  <h2>${escapeHtml(section.title)}</h2>
  ${section.note ? `<p class="dq-note">${escapeHtml(section.note)}</p>` : ""}
  <table class="dq-data-table">
    <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
    <tbody>
${section.rows
  .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
  .join("\n")}
    </tbody>
  </table>
</section>`;
    })
    .join("\n\n");
}

function renderBuildingSpecificGuide(building, songsData = {}) {
  if (building.className === "Tavern") {
    const songs = songRecords(songsData);
    return `<section class="dq-section-block">
  <h2>可学习歌曲</h2>
  <p class="dq-note">Tavern 提供 Bard 可学习的 Song。下表按解析出的歌曲目录展示；英文名保留原文，效果文本已整理为中文。</p>
  <table class="dq-data-table">
    <thead><tr><th>Song</th><th>效果</th></tr></thead>
    <tbody>
${songs.map((song) => `<tr><td><strong>${escapeHtml(song.display_name || song.id)}</strong></td><td>${escapeHtml(translateSongEffect(song.effect))}</td></tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
  }
  if (building.className === "MushroomPatch") {
    const rows = [
      ["GAIN_HEALTH", "2/16", "获得 X 点最大生命；调用 GainMaxHealth(X)。", "You gain X maximum health!"],
      ["LOSE_HEALTH", "1/16", "失去 X 点最大生命；调用 LoseMaxHealth(X)。", "You lose X maximum health!"],
      ["TELEPORT", "2/16", "传送到地图上的其他位置。", "You find yourself somewhere else..."],
      ["GAIN_MANA", "2/16", "获得 X 点最大法力；调用 GainMana(X)。", "You gain X maximum mana!"],
      ["LOSE_MANA", "1/16", "失去 X 点最大法力；调用 LoseMana(X)。", "You lose X maximum mana!"],
      ["CURSE", "0/16", "向牌组加入 Curse；TakeEffect 支持这个分支，但默认绿色蘑菇随机池不会抽到。", "You feel dangerously sick and add a curse card to your deck"],
      ["GAIN_EXP", "2/16", "获得 X 点经验。", "You gain X experience!"],
      ["LOSE_EXP", "1/16", "失去 X 点经验。", "You lose X experience!"],
      ["DAMAGE", "2/16", "受到 X 点伤害。", "You take X damage!"],
      ["HEAL", "3/16", "回复 X 点生命。", "You heal X health!"]
    ];
    return `<section class="dq-section-block">
  <h2>完成奖励</h2>
  <p class="dq-note">Mushroom Patch 完成后的牌组处理是复制玩家自己选择的牌，不是从全局奖励卡池随机抽牌。</p>
  <table class="dq-data-table">
    <thead><tr><th>环节</th><th>规则</th></tr></thead>
    <tbody>
      <tr><td>选牌</td><td>打开自己的牌组，只从已有牌里选择 1 张。</td></tr>
      <tr><td>获得</td><td>向牌组加入该牌的 1 张同名复制。</td></tr>
      <tr><td>随机性</td><td>完成奖励本身不随机；随机部分在任务期间吃绿色蘑菇时结算。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>蘑菇效果</h2>
  <p class="dq-note">MushroomPatch 任务会生成绿色 Mushroom。每个 Mushroom 从默认 16 个权重槽里抽一个效果，X 是该蘑菇初始化时写入的 strength。</p>
  <table class="dq-data-table">
    <thead><tr><th>效果 ID</th><th>默认池</th><th>具体效果</th><th>原文提示</th></tr></thead>
    <tbody>
${rows.map(([id, pool, text, original]) => `<tr><td><code>${escapeHtml(id)}</code></td><td>${escapeHtml(pool)}</td><td>${escapeHtml(text)}</td><td>${escapeHtml(original)}</td></tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
  }
  if (building.className === "Brainsucker") {
    const rows = [
      ["NAME_STARTS_WITH", "喜欢或讨厌牌名以某段文本开头的牌。"],
      ["NAME_CONTAINS", "喜欢或讨厌牌名包含某段文本的牌。"],
      ["CARD_TYPE", "喜欢或讨厌某种卡牌类型。"],
      ["LEVELABLE", "喜欢或讨厌可升级牌。"]
    ];
    return `<section class="dq-section-block">
  <h2>偏好规则</h2>
  <p class="dq-note">Brainsucker 会生成两个喜欢条件和一个讨厌条件。你从牌组里选择卡牌交给它，结算会读取这些偏好。</p>
  <table class="dq-data-table">
    <thead><tr><th>偏好类型</th><th>含义</th></tr></thead>
    <tbody>
${rows.map(([id, text]) => `<tr><td><code>${escapeHtml(id)}</code></td><td>${escapeHtml(text)}</td></tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
  }
  if (building.className === "Altar") {
    const rows = [
      ["AltarToJeremiad", "Jeremiad 祭坛"],
      ["AltarToAlcoran", "Alcoran 祭坛"],
      ["AltarToCairn", "Cairn 祭坛"],
      ["AltarToGauss", "Gauss 祭坛"],
      ["AltarToLiara", "Liara 祭坛"],
      ["AltarToAston", "Aston 祭坛"]
    ];
    return `<section class="dq-section-block">
  <h2>祭坛类型</h2>
  <p class="dq-note">特殊建筑随机数命中祭坛分支后，从这 6 种祭坛里均匀选择；每种约占特殊建筑的 11.67%。首次祈祷和集齐全部 6 种祭坛分别对应成就。</p>
  <table class="dq-data-table">
    <thead><tr><th>内部类型</th><th>说明</th></tr></thead>
    <tbody>
${rows.map(([id, text]) => `<tr><td><code>${escapeHtml(id)}</code></td><td>${escapeHtml(text)}</td></tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
  }
  return "";
}

function songRecords(songsData = {}) {
  return Object.entries(songsData || {})
    .filter(([, value]) => value && typeof value === "object" && value.id)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([, value]) => value);
}

function translateSongEffect(effect) {
  let text = String(effect || "").trim();
  const replacements = [
    [/Your attack cards deal double damage in the next combat/i, "下一场战斗中，你的攻击牌造成双倍伤害"],
    [/You regenerate four health per turn in the next combat/i, "下一场战斗中，你每回合回复 4 点生命"],
    [/You are invisible until you interact with the dungeon/i, "你保持隐形，直到与地牢对象互动"],
    [/You receive double the gold from the next combat/i, "下一场战斗获得双倍金币"],
    [/In the next combat, draw a temporary fireball card at the start of each turn/i, "下一场战斗中，每回合开始时抽 1 张临时 Fireball"],
    [/You have \+3 actions for the next combat/i, "下一场战斗获得 +3 行动点"],
    [/You begin the next combat with two random pieces of equipment/i, "下一场战斗开始时获得 2 件随机装备"],
    [/Your opponent loses 3 current and maximum health at the start of each of your turns in the next combat/i, "下一场战斗中，你每回合开始时，对手失去 3 点当前生命和生命上限"],
    [/Start the next fight with 3 additional cards/i, "下一场战斗起手额外抽 3 张牌"],
    [/Your maximum hand size is increased by one in the next fight/i, "下一场战斗最大手牌数 +1"],
    [/Generate three health packs at random on the map/i, "在地图上随机生成 3 个 Health Pack"],
    [/In the next fight, damage you deal is piercing/i, "下一场战斗中，你造成的伤害为穿透伤害"],
    [/In the next fight, whenever you play an Action card, draw a card/i, "下一场战斗中，每当你打出行动牌，抽 1 张牌"],
    [/In the next fight, at the beginning of each turn, return all Spell cards from your graveyard to your hand/i, "下一场战斗中，每回合开始时，将弃牌堆里的所有法术牌返回手牌"],
    [/In the next fight, whenever you play an Action card, your opponent is Poisoned for 1/i, "下一场战斗中，每当你打出行动牌，对手获得 1 层中毒"],
    [/In the next fight, you have 20 additional health/i, "下一场战斗中，你获得 20 点额外生命"],
    [/In the next fight, you and your opponent swap decks/i, "下一场战斗中，你和对手交换牌组"],
    [/In the next combat, whenever you would draw a card during your turn, instead search your deck for a card and put it into your hand/i, "下一场战斗中，你在自己回合抽牌时，改为从牌组搜索 1 张牌加入手牌"],
    [/In the next combat, whenever you would draw a card during your turn, deal 3 physical damage to your opponent/i, "下一场战斗中，你在自己回合每次将要抽牌时，对手受到 3 点物理伤害"],
    [/Start the next combat with 30 additional mana/i, "下一场战斗开始时获得 30 点额外法力"]
  ];
  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }
  return text || "未解析效果。";
}

function rewardProbabilityRowsForBuilding(dungeonGeneration, building) {
  const probs = dungeonGeneration.generate_reward_name?.probabilities || {};
  const names = building.className === "MimicChest" ? ["MimicChest"] : [building.className];
  if (building.className === "Altar") {
    return [{ group: "特殊建筑", probability: 0.7, note: "AddWeirdFeature 的祭坛分支；命中后 6 种祭坛均匀选择，每种约 11.67%。" }];
  }
  if (building.className === "MushroomPatch") {
    return [{ group: "特殊建筑", probability: 0.15, note: "AddWeirdFeature 中随机数落在 0.70 到 0.85 区间。" }];
  }
  if (building.className === "Brainsucker") {
    return [{ group: "特殊建筑", probability: 0.15, note: "AddWeirdFeature 中随机数大于等于 0.85。" }];
  }
  if (building.className === "LichHunter") {
    return [{ group: "Lich Boss", probability: null, note: "普通 Boss 生成结果为 Lich 时由 CreateBoss 额外创建，不来自 GenerateRewardName。" }];
  }
  const rows = [];
  for (const [group, entries] of Object.entries(probs)) {
    for (const name of names) {
      const found = (entries || []).find((entry) => entry.reward === name);
      if (found) {
        rows.push({ group: group === "depth_1" ? "第 1 层" : "第 2 层以后", probability: found.probability, note: "来自 DungeonBoard.GenerateRewardName。" });
      }
    }
  }
  return rows;
}

function renderTalentsOverview(talentRecords) {
  const tiers = [...new Set(talentRecords.map((record) => record.talent.tier))].sort((a, b) => Number(a) - Number(b));
  const repeatableCount = talentRecords.filter((record) => record.talent.repeatable).length;
  return `${renderFrontmatter("天赋图鉴", "Dream Quest 地牢天赋目录和效果详解。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Talents</p>
    <h1>天赋图鉴</h1>
    <p class="dq-lede">按阶级整理地牢天赋。详情页展示中文效果、原英文、解锁要求和解析出的实际处理入口。</p>
  </div>
  <span class="dq-count">${talentRecords.length} 个天赋</span>
</section>

<section class="dq-type-grid dq-monster-stat-grid">
  <span><strong>${talentRecords.length}</strong><em>全部天赋</em></span>
  <span><strong>${repeatableCount}</strong><em>可重复</em></span>
  <span><strong>${talentRecords.filter((record) => record.talent.requirement_names?.length).length}</strong><em>有成就要求</em></span>
  <span><strong>${talentRecords.filter((record) => record.talent.runtime_scope === "player_combat_or_passive").length}</strong><em>战斗被动</em></span>
</section>

${tiers
  .map((tier) => {
    const records = talentRecords.filter((record) => Number(record.talent.tier) === Number(tier));
    return `<section class="dq-card-group">
<h2 id="tier-${escapeHtml(tier)}" class="dq-card-group-title"><span>${escapeHtml(tier)} 阶天赋</span><em>${records.length} 个</em></h2>
<section class="dq-feature-grid">
${records.map(renderTalentTile).join("\n")}
</section>
</section>`;
  })
  .join("\n\n")}
`;
}

function renderTalentTile(record) {
  const t = record.talent;
  return `<a class="dq-feature-tile" href="${record.href}">
  <span class="dq-feature-art dq-talent-art">${record.image ? `<img src="${record.image}" alt="${escapeHtml(t.display_name)}" loading="lazy">` : ""}</span>
  <span>
    <strong>${escapeHtml(t.display_name || t.internal_name)}</strong>
    <small>${escapeHtml(t.internal_name)} · ${escapeHtml(t.tier)} 阶${t.repeatable ? " · 可重复" : ""}</small>
    <em>${escapeHtml(compactText(translateTalentEffect(t.effect), 116))}</em>
  </span>
</a>`;
}

function renderTalentPage(record, achievementsByAttribute) {
  const t = record.talent;
  const reqs = t.requirement_names || [];
  const reqRows = reqs.map((name) => achievementsByAttribute.get(name)).filter(Boolean);
  return `${renderFrontmatter(t.display_name || t.internal_name, compactText(translateTalentEffect(t.effect), 150))}
<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · ${escapeHtml(t.tier)} 阶</p>
    <h1>${escapeHtml(t.display_name || t.internal_name)}</h1>
    <p class="dq-lede">${escapeHtml(translateTalentEffect(t.effect))}</p>
    <p class="dq-original">原文：${escapeHtml(t.effect || "")}</p>
    <div class="dq-tag-row">
      <span>${escapeHtml(TALENT_SCOPE_LABELS[t.runtime_scope] || t.runtime_scope || "未知作用域")}</span>
      <span>${t.repeatable ? "可重复选择" : "不可重复"}</span>
      <span>${reqs.length ? `需要 ${reqs.join("、")}` : "无成就要求"}</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    ${record.image ? `<img src="${record.image}" alt="${escapeHtml(t.display_name)}" loading="lazy">` : ""}
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  ${renderMetaGrid([
    { label: "内部名称", value: t.internal_name, tip: "DungeonTalentList 中的内部名称。" },
    { label: "显示名", value: t.display_name, tip: "游戏内显示名称。" },
    { label: "阶级", value: t.tier, tip: "天赋选择时使用的阶级。" },
    { label: "可重复", value: t.repeatable, tip: "是否可以重复选择同一项天赋。" },
    { label: "作用域", value: TALENT_SCOPE_LABELS[t.runtime_scope] || t.runtime_scope, tip: "立即/地牢层面生效，或进入战斗后作为玩家被动生效。" },
    { label: "需求", value: reqs.join("、") || "无", tip: "需要先完成的 UserAttribute / 成就。" }
  ])}
</section>

${reqRows.length ? `<section class="dq-section-block">
  <h2>解锁要求</h2>
  <table class="dq-data-table">
    <thead><tr><th>成就</th><th>要求</th><th>奖励</th></tr></thead>
    <tbody>
${reqRows.map((achievement) => `<tr><td>${escapeHtml(achievement.display_name)}<br><code>${escapeHtml(achievement.attribute_name)}</code></td><td>${escapeHtml(translateAchievementText(achievement.requirements_text))}</td><td>${escapeHtml(translateAchievementText(achievement.reward_text))}</td></tr>`).join("\n")}
    </tbody>
  </table>
</section>` : ""}

${renderTalentActualGuide(t)}

<section class="dq-section-block">
  <h2>解析效果</h2>
  ${renderTalentEffectTable(t)}
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
`;
}

function renderTalentActualGuide(talent) {
  const lines = [...new Set((talent.handler_effects || []).map((effect) => talentEffectReadableLine(effect)).filter(Boolean))];
  if (!lines.length) {
    return "";
  }
  return `<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
${lines.map((line) => `    <p>${escapeHtml(line)}</p>`).join("\n")}
  </div>
</section>`;
}

function talentEffectReadableLine(effect = {}) {
  const args = effect.arguments || {};
  const target = effect.target || "";
  if (effect.operation === "call") {
    const x = args.x ?? 1;
    return {
      "DungeonPlayer.GainMaxHealth": `生命上限 +${x}。`,
      "DungeonPlayer.GainMana": `法力 +${x}。`,
      "DungeonPlayer.GainActions": `行动点 +${x}。`,
      "DungeonPlayer.GainCards": `每回合抽牌数 +${x}。`,
      "DungeonPlayer.GainGold": `金币 +${x}。`,
      "DungeonPlayer.GainEquipSlot": "装备槽 +1。",
      "DungeonPlayer.LevelUp": "立即升级 1 级，最高到 10 级。",
      "DungeonPlayer.UpgradeAllMax": "把牌组内所有可升级牌升到最高等级。",
      "DungeonBoard.DestroyAllWalls": "移除当前楼层所有墙。",
      "DungeonBoard.RevealMonsters": "揭示所有楼层的怪物。",
      "DungeonBoard.GenerateRandomReward": `当前楼层额外生成 ${x} 个有益对象。`,
      "Player.ElementalResist": "进入战斗后启用元素减伤：所有元素伤害减半并向下取整。",
      "Player.Fireballer": `进入战斗后获得 Fireballer +${x}：每回合开始时抽临时 Fireball。`,
      "Player.GainElusive": `进入战斗后获得 ${x}% Elusive：有概率阻止对手的行动牌或法术牌生效。`,
      "Player.ElementalForm": "进入战斗后把当前伤害形态设为穿透。",
      "Player.ElementalFormBase": "进入战斗后把基础伤害形态设为穿透。"
    }[target] || `调用 ${target}${Object.keys(args).length ? `（${handlerArgumentsText(args)}）` : ""}。`;
  }
  if (effect.operation === "add_power") {
    return `登记能力文本：${translateTalentPowerText(args.power_text)}`;
  }
  if (effect.operation === "reduce_opponent_hand_size") {
    return `进入战斗后对手手牌上限 ${args.delta ?? -1}。`;
  }
  if (effect.operation === "create_equipment") {
    return `每场战斗开始时创建装备：${(args.equipment || []).join("、")}。`;
  }
  if (effect.operation === "create_random_equipment") {
    return "每场战斗开始时从 CardFinder.RandomEquipment 创建 1 件随机装备。";
  }
  if (effect.operation === "add_cards_to_deck") {
    return `向牌组加入：${(args.cards || []).join("、")}。`;
  }
  if (effect.operation === "add_dungeon_action") {
    return `获得地城能力：${TALENT_DUNGEON_ACTION_DETAILS[args.action_class] || args.action_class || "未知能力"}`;
  }
  if (effect.operation === "add_combat_ability" && args.ability === "CombatAbilityFlee") {
    return "获得 Flee 战斗能力，可以从战斗中逃跑。";
  }
  if (effect.operation === "deck_targeted_talent_action") {
    return deckTargetedTalentLine(args);
  }
  if (effect.operation === "set_player_attribute") {
    return `进入战斗后设置玩家属性 ${TALENT_ATTRIBUTE_DETAILS[args.attribute_name] || `${args.attribute_name || "-"}：${args.value_expression || "-"}`}。`;
  }
  if (effect.operation === "refresh_mana_costs") {
    return "立即刷新法力费用显示和当前费用。";
  }
  return "";
}

function deckTargetedTalentLine(args = {}) {
  if (args.mode === "delete_cards") {
    return "打开牌组选择窗口，选择 1 到 3 张牌，从统计记录和牌组中删除。";
  }
  if (args.mode === "copy_talent_card") {
    return "打开牌组选择窗口，选择 1 张牌，并向牌组加入一张同名复制。";
  }
  if (args.mode === "upgrade_card") {
    return "打开牌组选择窗口，只显示可升级牌，选择 1 张并升级。";
  }
  return `打开牌组选择窗口：${handlerArgumentsText(args)}。`;
}

function renderTalentEffectTable(talent) {
  const effects = talent.handler_effects || [];
  if (!effects.length) {
    return `<p class="dq-note">没有解析到独立 handler 效果。</p>`;
  }
  const rows = effects.map((effect) => `<tr>
  <td>${escapeHtml(effect.method || "-")}</td>
  <td>${escapeHtml(translateHandlerOperation(effect.operation))}</td>
  <td>${escapeHtml(effect.target || "-")}</td>
  <td>${escapeHtml(handlerArgumentsText(effect.arguments))}</td>
</tr>`).join("\n");
  return `<table class="dq-data-table">
  <thead><tr><th>入口</th><th>操作</th><th>目标</th><th>参数</th></tr></thead>
  <tbody>
${rows}
  </tbody>
</table>`;
}

function buildAchievementLinkIndex(cardRecords = [], talentRecords = [], professionRecords = [], fallbackCardRecords = []) {
  const cards = new Map();
  const talents = new Map();
  const professions = new Map();
  for (const record of cardRecords) {
    const card = record.card || {};
    addAchievementLinkName(cards, card.display_name, record);
    addAchievementLinkName(cards, card.display_name_cn, record);
    addAchievementLinkName(cards, card.original_display_name, record);
    addAchievementLinkName(cards, card.name, record);
    addAchievementLinkName(cards, card.internal_name, record);
    addAchievementLinkName(cards, card.class_name, record);
  }
  for (const record of fallbackCardRecords) {
    const card = record.card || {};
    addAchievementLinkName(cards, card.display_name, record, false);
    addAchievementLinkName(cards, card.display_name_cn, record, false);
    addAchievementLinkName(cards, card.original_display_name, record, false);
    addAchievementLinkName(cards, card.name, record, false);
    addAchievementLinkName(cards, card.internal_name, record, false);
    addAchievementLinkName(cards, card.class_name, record, false);
  }
  for (const record of talentRecords) {
    const talent = record.talent || {};
    addAchievementLinkName(talents, talent.display_name, record);
    addAchievementLinkName(talents, talent.internal_name, record);
  }
  for (const record of professionRecords) {
    const profession = record.profession || {};
    addAchievementLinkName(professions, profession.display_name, record.href);
    addAchievementLinkName(professions, profession.display_name_cn, record.href);
    addAchievementLinkName(professions, profession.original_display_name, record.href);
    addAchievementLinkName(professions, profession.id, record.href);
    addAchievementLinkName(professions, profession.class_name, record.href);
  }
  const invisibleRecord = talents.get(normalizeAchievementName("Invisible"));
  if (invisibleRecord) {
    addAchievementLinkName(talents, "Invisibility", invisibleRecord);
  }
  return { cards, talents, professions };
}

function buildAchievementFallbackCardRecords(assetCatalog) {
  return (assetCatalog.entries || [])
    .filter((entry) => entry.area === "card" && entry.has_png && entry.has_structured_content === false)
    .map((entry) => {
      const name = entry.display_name || humanizeIdentifier(entry.class_name || entry.id);
      const image = publicAssetPath((entry.assets || []).find((asset) => asset.png));
      return {
        card: {
          class_name: entry.class_name || entry.id,
          internal_name: entry.class_name || entry.id,
          display_name: name,
          card_type: "other",
          costs_and_stats: {
            action_cost: 0,
            mana_cost: 0,
            gold_cost: 0,
            tier: "-"
          },
          text: {
            rules: "有原始卡图，但当前没有解析到结构化卡牌规则。"
          }
        },
        slug: slugify(entry.class_name || entry.id),
        href: "",
        image
      };
    });
}

function addAchievementLinkName(map, value, href, overwrite = true) {
  if (!value || !href) {
    return;
  }
  const key = normalizeAchievementName(value);
  if (!overwrite && map.has(key)) {
    return;
  }
  map.set(key, href);
}

function normalizeAchievementName(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function findAchievementLink(map, value) {
  const normalized = normalizeAchievementName(value);
  if (map.has(normalized)) {
    return map.get(normalized);
  }
  if (normalized.endsWith("s") && map.has(normalized.slice(0, -1))) {
    return map.get(normalized.slice(0, -1));
  }
  return "";
}

function renderAchievementsOverview(achievementRecords, linkIndex = { cards: new Map(), talents: new Map(), professions: new Map() }) {
  const groups = new Map();
  for (const achievement of achievementRecords) {
    const key = achievement.flavor_name || "OTHER";
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(achievement);
  }
  return `${renderFrontmatter("成就图鉴", "Dream Quest 成就、要求和解锁奖励目录。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Achievements</p>
    <h1>成就图鉴</h1>
    <p class="dq-lede">只保留目录级信息：成就名、达成要求、奖励、点数和解锁类型。需要看卡牌或天赋实际效果时，从奖励文本跳转到对应图鉴。</p>
  </div>
  <span class="dq-count">${achievementRecords.length} 条成就</span>
</section>

<section class="dq-type-grid">
${[...groups.entries()].map(([key, items]) => `<a href="#${slugify(key)}"><strong>${escapeHtml(ACHIEVEMENT_FLAVOR_LABELS[key] || key)}</strong><span>${items.length} 条</span></a>`).join("\n")}
</section>

${[...groups.entries()]
  .map(([key, items]) => `<section class="dq-card-group">
<h2 id="${slugify(key)}" class="dq-card-group-title"><span>${escapeHtml(ACHIEVEMENT_FLAVOR_LABELS[key] || key)}</span><em>${items.length} 条</em></h2>
<table class="dq-data-table">
  <thead><tr><th>图标</th><th>成就</th><th>要求</th><th>奖励</th><th>点数</th><th>属性</th></tr></thead>
  <tbody>
${items
  .map(
    (achievement) => `<tr>
  <td>${renderAchievementIcon(achievement)}</td>
  <td><strong>${escapeHtml(achievement.display_name)}</strong><br><span>${escapeHtml(achievement.internal_name)}</span></td>
  <td>${escapeHtml(translateAchievementText(achievement.requirements_text))}<br><span class="dq-original">原文：${escapeHtml(achievement.requirements_text)}</span></td>
  <td>${renderAchievementRewardHtml(achievement, linkIndex)}<br><span class="dq-original">原文：${escapeHtml(achievement.reward_text)}</span></td>
  <td>${escapeHtml(achievement.cost)}</td>
  <td><code>${escapeHtml(achievement.attribute_name)}</code></td>
</tr>`
  )
  .join("\n")}
  </tbody>
</table>
</section>`)
  .join("\n\n")}
`;
}

function renderAchievementIcon(achievement) {
  if (achievement.image) {
    return `<span class="dq-achievement-icon"><img src="${escapeHtml(achievement.image)}" alt="${escapeHtml(achievement.display_name)}" loading="lazy"></span>`;
  }
  return `<span class="dq-achievement-icon dq-achievement-icon-empty"><span>无原始图标</span></span>`;
}

function renderAchievementRewardHtml(achievement, linkIndex) {
  const raw = String(achievement.reward_text || "");
  const translated = translateAchievementText(raw);
  let match = raw.match(/^Gain access to the card (.+)$/i) || raw.match(/^Gain access to the (.+?) card$/i);
  if (match) {
    const name = match[1].trim();
    return `解锁 ${renderAchievementRewardCard(name, findAchievementLink(linkIndex.cards, name))} 卡牌`;
  }
  match = raw.match(/^Gain access to the (.+?) talent$/i) || raw.match(/^Gain access to an? (.+?) talent$/i);
  if (match) {
    const name = match[1].trim();
    return `解锁 ${renderAchievementRewardTalent(name, findAchievementLink(linkIndex.talents, name))} 天赋`;
  }
  match = raw.match(/^Unlock the (.+?) class$/i);
  if (match) {
    const name = match[1].trim();
    return `解锁 ${achievementLinkedName(name, findAchievementLink(linkIndex.professions, name))} 职业`;
  }
  return escapeHtml(translated);
}

function achievementLinkedName(name, href) {
  const text = escapeHtml(name);
  return href ? `<a href="${escapeHtml(href)}">${text}</a>` : text;
}

function renderAchievementRewardCard(name, record) {
  if (!record) {
    return achievementLinkedName(name, "");
  }
  const card = record.card || {};
  const content = `<span class="dq-card-chip-thumb">${renderCardFrame(record, "deck")}</span>
  <span class="dq-card-chip-copy"><strong>${escapeHtml(card.display_name || name)}</strong></span>
  ${renderCardHoverPreview(record)}`;
  if (!record.href) {
    return `<span class="dq-card-chip dq-achievement-card-chip dq-card-chip-static" tabindex="0">
  ${content}
</span>`;
  }
  return `<a class="dq-card-chip dq-achievement-card-chip" href="${escapeHtml(record.href)}">
  ${content}
</a>`;
}

function talentMetaLine(talent) {
  const scope = TALENT_SCOPE_LABELS[talent.runtime_scope] || talent.runtime_scope || "未知作用域";
  return `${talent.tier ?? "-"} 阶 · ${scope}${talent.repeatable ? " · 可重复" : ""}`;
}

function renderTalentFrame(record, variant = "deck") {
  const talent = record.talent || {};
  const loading = variant === "deck" ? "eager" : "lazy";
  const label = talent.display_name || talent.internal_name || "无原始图标";
  const image = record.image
    ? `<img src="${record.image}" alt="${escapeHtml(label)}" loading="${loading}">`
    : `<span class="dq-talent-no-art" aria-label="${escapeHtml(label)}">无原始图标</span>`;
  return `<span class="dq-talent-frame dq-talent-frame-${variant}">${image}</span>`;
}

function renderTalentHoverPreview(record) {
  const talent = record.talent || {};
  const effect = compactText(translateTalentEffect(talent.effect), 128);
  return `<span class="dq-card-hover-preview dq-talent-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art dq-talent-hover-art">${renderTalentFrame(record, "hover")}</span>
    <span class="dq-card-hover-copy">
      <strong>${escapeHtml(talent.display_name || talent.internal_name)}</strong>
      <small>${escapeHtml(talentMetaLine(talent))}</small>
      <em>${escapeHtml(effect)}</em>
    </span>
  </span>`;
}

function renderAchievementRewardTalent(name, record) {
  if (!record) {
    return achievementLinkedName(name, "");
  }
  const talent = record.talent || {};
  return `<a class="dq-card-chip dq-achievement-talent-chip" href="${escapeHtml(record.href)}">
  <span class="dq-card-chip-thumb dq-talent-chip-thumb">${renderTalentFrame(record, "deck")}</span>
  <span class="dq-card-chip-copy"><strong>${escapeHtml(talent.display_name || name)}</strong></span>
  ${renderTalentHoverPreview(record)}
</a>`;
}

function rngReplayStatusLabel(value) {
  return {
    fixture_not_original: "已定位消费点；当前是夹具顺序，不是原版随机流",
    python_random_not_original: "已恢复分支形态；当前样本不是原版随机流",
    python_shuffle_not_original: "已恢复洗牌形态；当前样本不是原版洗牌序列",
    python_gauss_not_original: "已恢复正态采样入口；当前样本不是原版随机流",
    fixture_components_not_original: "已定位权重选择；组件夹具不是原版完整流",
    not_integrated_into_seed: "已恢复局部随机；还未并入完整楼层种子",
    fixture_not_full_floor: "已恢复局部抽取；不是完整楼层流程"
  }[value] || value || "已记录";
}

function renderRngScenarioTable() {
  const rows = [
    [
      "进入新楼层前",
      "下一层还没生成时，楼层布局、墙、怪物、奖励、Boss 等随机还没有落地。",
      "如果强退回到进入楼层前的状态，再进入可能重新生成。"
    ],
    [
      "进入楼层以后",
      "楼层对象已经带有生成结果：墙、怪物位置、奖励点、Boss、环境等都属于当前楼层状态。",
      "读回同一个楼层状态通常不会重新抽这些结果。"
    ],
    [
      "打开宝箱或领取随机奖励前",
      "宝箱/奖励位置已经固定，但具体抽牌、金币、宝箱件数等会在对应交互里继续消耗随机数。",
      "如果回到交互前，可能重新抽；如果结果已写入，读档不会让同一个结果再抽一次。"
    ],
    [
      "商店",
      "商店是否出现和位置随楼层生成固定；商品生成会走 Shop.GenerateItems 和 CardFinder。",
      "能否刷新商品，取决于读档点是在商品列表生成前还是生成后。"
    ],
    [
      "战斗开始和战斗中",
      "牌库洗牌、随机放逐、随机弃牌、随机非装备牌、怪物随机分支都会消耗战斗随机。",
      "回到战斗前并重复相同流程才有机会改变；回到已结算后的状态不会倒退结果。"
    ],
    [
      "成就和解锁状态",
      "CardFinder 会读取当前用户成就属性；解锁状态会改变候选卡池和总权重。",
      "同一个随机数，在不同解锁状态下也可能抽到不同候选。"
    ]
  ];
  return `<table class="dq-data-table">
  <thead><tr><th>场景</th><th>随机何时发生</th><th>S/L 读法</th></tr></thead>
  <tbody>
${rows.map(([scene, timing, meaning]) => `<tr><td>${escapeHtml(scene)}</td><td>${escapeHtml(timing)}</td><td>${escapeHtml(meaning)}</td></tr>`).join("\n")}
  </tbody>
</table>`;
}

function cardRngCaseText(cardCase = {}) {
  const ops = (cardCase.rng_steps || []).map((step) => step.operation || step.effect || step.classification).filter(Boolean);
  if (ops.some((op) => String(op).includes("RandomExile"))) {
    return "从指定牌区随机放逐牌。";
  }
  if (ops.some((op) => String(op).includes("ForceRandomDiscard"))) {
    return "强制随机弃牌。";
  }
  if (ops.some((op) => String(op).includes("Deck.Shuffle"))) {
    return "按剩余牌库区间执行洗牌。";
  }
  if (ops.some((op) => String(op).includes("RandomAvailableNonEquipmentCard"))) {
    return "从已解锁非装备牌里随机选牌。";
  }
  if (ops.some((op) => String(op).includes("RandomCardName"))) {
    return "从候选牌名里随机选取。";
  }
  if (ops.some((op) => String(op).includes("RandomRange"))) {
    return "按整数区间随机选择分支或目标。";
  }
  if (ops.some((op) => String(op).includes("RandomFloat"))) {
    return "按 0 到 1 的随机阈值选择分支。";
  }
  return "存在随机分支。";
}

function renderCardRngExamples(cardRng) {
  const cases = (cardRng.card_rng_cases || []).slice(0, 12);
  if (!cases.length) {
    return "";
  }
  return `<section class="dq-section-block">
  <h2>卡牌随机示例</h2>
  <p class="dq-note">这里只列代表性随机卡牌；完整统计显示 ${escapeHtml(cardRng.summary?.card_rng_candidate_count ?? cases.length)} 个卡牌随机候选。</p>
  <table class="dq-data-table">
    <thead><tr><th>卡牌</th><th>随机内容</th><th>随机步数</th></tr></thead>
    <tbody>
${cases.map((item) => `<tr><td>${escapeHtml(item.display_name || item.card)}</td><td>${escapeHtml(cardRngCaseText(item))}</td><td>${escapeHtml(item.rng_step_count ?? (item.rng_steps || []).length)}</td></tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
}

function renderMonsterSkillRngExamples(monsterRng, professionSkillRng) {
  const monsterRows = (monsterRng.monster_rng_cases || []).map((item) => {
    if (item.monster === "GoblinMechanist") {
      return ["Goblin Mechanist", "0-4 随机整数；掷到 0 时爆炸，否则随机创建 1 件装备。"];
    }
    if (item.monster === "Revenant") {
      return ["Revenant", "加入 Scream 后，对剩余牌库执行 Fisher-Yates 洗牌。"];
    }
    return [item.monster || "未知怪物", "存在怪物随机分支。"];
  });
  const skillRows = (professionSkillRng.profession_skill_rng_cases || []).map((item) => {
    if (item.name === "CombatAbilityDesperatePrayer") {
      return ["Priest / Desperate Prayer", "0-4 随机整数，对应 Knowledge、Protection、Death、Speed、Armored 五种结果。"];
    }
    if (item.name === "DungeonActionFindMonster") {
      return ["Find Monster", "从动态怪物候选列表中随机选择 1 个。"];
    }
    if (item.name === "DungeonActionFindTreasure") {
      return ["Find Treasure", "先随机金币目标，再进入奖励生成流程。"];
    }
    if (item.name === "Charismatic") {
      return ["Charismatic 天赋", "当前楼层额外生成 5 个随机有益对象。"];
    }
    if (item.name === "Hoard") {
      return ["Hoard 天赋", "从 CardFinder.RandomEquipment 随机创建 1 件装备。"];
    }
    return [item.name || "未知技能", "存在职业/天赋随机分支。"];
  });
  const rows = [...monsterRows, ...skillRows];
  if (!rows.length) {
    return "";
  }
  return `<section class="dq-section-block">
  <h2>怪物与技能随机</h2>
  <table class="dq-data-table">
    <thead><tr><th>对象</th><th>随机内容</th></tr></thead>
    <tbody>
${rows.map(([name, detail]) => `<tr><td>${escapeHtml(name)}</td><td>${escapeHtml(detail)}</td></tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
}

function renderRngSaveLoadGuide() {
  return `${renderFrontmatter("随机数机制", "Dream Quest 随机数、种子串、全局随机和起手手牌机制。")}
# 随机数机制

这一页解释三个问题：种子串如何决定一局游戏，哪些内容会消耗地牢全局随机序列，以及每场战斗的起手手牌怎么抽出来。

<section class="dq-callout">
  <strong>先看结论</strong>
  <span>游戏里同时存在地牢全局随机和战斗内随机。读档后尚未保存、并且依赖地牢全局随机序列的技能或事件会重新抽；如果战斗被重新创建，战斗内随机也会重新初始化，所以起手手牌可能变化。</span>
</section>

## 1. 种子串和创建游戏

种子串是用来复现开局的可读文本。它不是单纯的一个随机数字，而是把这局游戏的关键初始条件打包在一起：职业、难度、账号解锁状态快照、初始随机种子，以及后续用来生成楼层和升级奖励的种子状态。

显示给玩家时，种子串会按 5 个字符一组加短横；输入时短横和空格只是排版，会被去掉。真正参与解码的是清理后的固定长度字符。

<table class="dq-data-table">
  <thead><tr><th>随机序列</th><th>什么时候生成</th><th>影响什么</th></tr></thead>
  <tbody>
    <tr><td>初始随机种子</td><td>创建新局时先生成；用种子串开局时则从种子串还原。</td><td>决定这局游戏后续可复现的起点。</td></tr>
    <tr><td>第 1 / 2 / 3 层楼层种子</td><td>创建新局时从初始随机流程继续取出；用种子串开局时按同一规则还原。</td><td>每层地图、墙、怪物、Boss、奖励建筑和地牢对象的位置。</td></tr>
    <tr><td>升级奖励种子</td><td>创建新局时单独保存；它和楼层生成分开。</td><td>升级奖励这类流程不会被楼层生成完全吞掉随机进度。</td></tr>
    <tr><td>地牢全局随机序列</td><td>会被楼层生成临时设到指定种子，也会被部分地牢行动继续消耗；存档保存种子字段，但不保存这条序列的完整当前位置。</td><td>地图生成、奖励放置、怪物选择、变形术的新怪物等。</td></tr>
    <tr><td>战斗内随机序列</td><td>当前战斗对象自己持有，用于战斗过程中的随机；如果没有显式设置战斗种子，首次使用时会创建新的运行时随机状态。</td><td>战斗洗牌、起手手牌、随机弃牌、怪物随机行动等。</td></tr>
  </tbody>
</table>

楼层生成是最容易误解的部分：进入某一层时，游戏会临时切到这一层自己的楼层种子，把地图和该层内容生成出来；生成完成后，再切到另一个继续用的随机状态。这样同一个种子串可以稳定复现楼层结构，但之后某些地牢行动仍然取决于这条全局随机序列后来被消耗到了哪里。

<section class="dq-section-block">
  <h2>哪些行为互不影响</h2>
  <p class="dq-note">判断原则很简单：同一条随机序列会互相推进；不同种子或不同随机对象之间不会互相推进。结果如果已经生成并写进地牢状态，后面的随机也不会再改它。</p>
  <table class="dq-data-table">
    <thead><tr><th>行为</th><th>不会影响什么</th><th>原因</th></tr></thead>
    <tbody>
      <tr><td>当前楼层的移动、战斗、开宝箱路线</td><td>不会改变第 1 / 2 / 3 层已经由楼层种子决定的地图结构、墙、基础怪物和 Boss 生成。</td><td>每层生成时会切到该层自己的楼层种子；楼层种子在创建游戏时已经确定。</td></tr>
      <tr><td>楼层生成消耗了大量随机</td><td>不会把升级奖励的随机进度吞掉。</td><td>升级奖励有单独保存的种子，和楼层生成分开。</td></tr>
      <tr><td>战斗内洗牌、起手手牌、随机弃牌、随机放逐</td><td>不会推进地牢全局随机序列，也不会直接改变宝箱、商店、变形术、寻宝等地牢随机结果。</td><td>这些通常使用当前战斗对象或牌组自己的随机状态；但如果强退后重新创建战斗，这条战斗内随机本身可能重新初始化。</td></tr>
      <tr><td>已经打开并保存的宝箱、商店、建筑候选或事件偏好</td><td>不会被后续 Polymorph、Find Treasure、战斗随机或其他行动重新改写。</td><td>结果已经成为地牢状态；之后只是在读取已有结果。</td></tr>
      <tr><td>玩家手动选择的结果</td><td>不会消耗随机序列。例如 Mushroom Patch 完成后复制自己选定的牌、删除牌、升级指定牌。</td><td>这些是玩家选择，不是随机抽取。</td></tr>
    </tbody>
  </table>
</section>

互不影响只表示“不会推进同一条随机流”，不表示每个结果都会在强退重开后固定。起手手牌就是典型例子：它不消耗地牢全局随机，但战斗对象重新创建后，自己的战斗内随机状态可能不是原来的状态。

反过来，只要两个行为都还没有保存结果，并且都依赖地牢全局随机序列，它们就会互相影响先后顺序。例如先用 Polymorph、先触发 Find Treasure、先生成商店商品、先结算 Brain Sucker 奖励或绿色 Mushroom 效果，都会把同一条全局随机序列往后推进，导致后面的全局随机结果变化。

## 2. 哪些会消耗地牢全局随机序列

不是所有“随机”都会动到这条全局序列。卡牌战斗内的随机弃牌、随机伤害、部分职业技能随机，通常走当前战斗对象自己的随机状态；但下面这些会直接或间接消耗全局随机序列。

<section class="dq-callout">
  <strong>读档时怎么判断</strong>
  <span>先看结果是否已经写进存档或当前地牢状态；已经保存就直接沿用结果。没有保存时，再看它是否依赖地牢全局随机序列。依赖全局随机的技能或事件，会在读档后按重建出的固定位置重新抽；反复读取同一个档并重复同样操作，结果也会固定。</span>
</section>

<table class="dq-data-table">
  <thead><tr><th>范围</th><th>会消耗什么</th><th>读档时怎么看</th></tr></thead>
  <tbody>
    <tr><td>楼层生成</td><td>地图造墙遍历顺序、每格是否变墙、怪物等级表、怪物是否出现、怪物类型、怪物环境、Boss 属性、建筑和奖励位置。</td><td>创建楼层时会临时切到该层楼层种子；同一种子楼层稳定，但会大量推进全局序列。</td></tr>
    <tr><td>奖励与卡池</td><td>奖励层级、随机奖励名、卡牌奖励加权选择、生成奖励后对可出现次数的扣减。</td><td>宝箱、升级、商店、地牢奖励、Find Treasure、Brain Sucker 奖励只要重新计算，就会受当前全局位置影响。</td></tr>
    <tr><td>金币与商店</td><td>金币目标值的上下浮动、商店预算、商店商品选择、商店商品最终顺序。</td><td>进入商店或生成商品前强退，读档后可能重新走固定但不同的位置。</td></tr>
    <tr><td>宝箱</td><td>物品数量、后续奖励是金币还是卡牌、卡牌奖励选择、金币数值、最终展示顺序。</td><td>如果宝箱结果已经保存就固定；如果只是看过但没保存，读档后会重算。</td></tr>
    <tr><td>怪物创建</td><td>普通怪物选择、Boss 选择、变形术的新怪物、德鲁伊 Wild Shape 变怪、Find Monster 创建怪物时的实际怪物选择。</td><td>这是变形术读档变化的主要来源。</td></tr>
    <tr><td>地牢建筑与事件</td><td>Brain Sucker 的偏好生成和奖励换牌、Tavern 的歌曲候选、Mushroom Patch 任务期间绿色蘑菇的效果。</td><td>建筑本身已经保存时，已生成的偏好、候选或蘑菇效果不会重抽；但尚未结算的随机分支会按读档后的固定位置继续抽。</td></tr>
    <tr><td>卡牌生成类效果</td><td>从全卡池随机拿非装备卡或装备卡，例如 Wild Mana、Wild Strike，以及龙的 Hoard 这类随机装备来源。</td><td>这些效果虽然发生在卡牌、天赋或职业机制里，但会推进全局随机序列。</td></tr>
    <tr><td>AI 随机选择</td><td>AI 的随机行动、同优先级动作打平、随机目标、随机目标组顺序。</td><td>代码静态上确认走全局序列；具体战斗读档边界还要看当时战斗状态是否已经保存。</td></tr>
    <tr><td>通用洗牌工具</td><td>地图候选格、奖励列表、商店商品、部分候选列表的洗牌。</td><td>它本身也会反复调用全局整数随机，所以列表长度越长，推进越多。</td></tr>
  </tbody>
</table>

下面这些是玩家最容易主动触发、也最容易误判为“只和当前操作有关”的入口。

<table class="dq-data-table">
  <thead><tr><th>入口</th><th>会消耗的随机</th><th>读档时怎么看</th></tr></thead>
  <tbody>
    <tr><td>Polymorph / 变形术</td><td>按目标怪物等级、环境和排除列表重新加权选择怪物。</td><td>如果变形结果没保存，强退后会从读档重建的位置重新抽。</td></tr>
    <tr><td>Find Treasure</td><td>先抽金币目标的正态波动，再进入奖励生成；后续可能继续抽奖励类型、卡牌、金币和展示顺序。</td><td>它不是只生成一个固定宝箱，而是接到完整奖励链。</td></tr>
    <tr><td>Find Monster</td><td>先用当前游戏对象的随机状态选一个可用邻格；真正创建怪物时再走地牢怪物选择链。</td><td>选格和选怪物不是同一条随机来源，改变前置操作可能影响后续怪物。</td></tr>
    <tr><td>Brain Sucker / Brainsucker</td><td>生成建筑偏好时会抽喜欢/讨厌条件；交牌结算为正奖励时会进入卡牌奖励选择。</td><td>已经保存的偏好固定；尚未领取的奖励卡仍可能受全局序列位置影响。</td></tr>
    <tr><td>Tavern</td><td>从可用歌曲列表里随机挑 3 首候选歌。</td><td>如果酒馆候选已保存就固定；如果入口状态重建后才生成，会按读档后的序列抽。</td></tr>
    <tr><td>Mushroom Patch</td><td>任务期间的绿色蘑菇会从默认效果池中随机效果；完成任务后的牌组处理是从自己牌组选择 1 张并复制。</td><td>完成奖励不是随机抽卡；读档判断主要看绿色蘑菇效果是否已经生成或结算。</td></tr>
    <tr><td>Treasure Chest / Shop</td><td>宝箱物品数、卡牌/金币分支、商店 1/3/5 阶商品、去重重抽和最终洗牌。</td><td>打开或进入前是否已保存，决定读档后是沿用结果还是重算。</td></tr>
    <tr><td>Wild Mana / Wild Strike / 龙的 Hoard</td><td>分别从非装备牌池或装备牌池随机取牌。</td><td>这些虽然看起来像战斗、天赋或职业效果，但底层接到全局卡牌奖励选择。</td></tr>
  </tbody>
</table>

反过来，Three Wishes、Chaos Strike、Chaos Prayer、Desperate Prayer、Elemental Surge、Summon Companions、随机弃牌、随机放逐、普通战斗洗牌这类战斗内效果，当前解析结果显示主要走战斗内随机序列或牌组自己的战斗随机，不应简单归到地牢全局随机序列里。它们不会推进宝箱、商店、变形术这些地牢全局随机，但如果战斗本身被重新创建，战斗内随机的初始状态仍可能变化。

## 3. 每场战斗的起手手牌

这里说的起手手牌，指每场战斗开始后玩家拿到的第一批手牌。它不是从牌组里直接随机挑几张，而是先建立战斗牌库，再按洗牌后的牌库顺序抽牌。

<table class="dq-data-table">
  <thead><tr><th>步骤</th><th>规则</th><th>随机来源</th></tr></thead>
  <tbody>
    <tr><td>建立战斗牌库</td><td>职业初始牌组、当前牌组、装备、天赋、状态和怪物/职业特殊机制先决定这场战斗可抽的牌。</td><td>这一步主要是按当前角色状态组装牌库。</td></tr>
    <tr><td>洗牌</td><td>牌库从当前抽牌位置到牌库末尾逐位随机交换：每一步都在“当前位置到末尾”之间挑一张牌，和当前位置交换。</td><td>使用当前战斗对象持有的 InGame 随机状态；如果没有显式战斗种子，会首次创建新的运行时随机状态。</td></tr>
    <tr><td>决定抽牌数</td><td>基础目标是最大手牌数减去当前手牌数；再叠加手牌上限、天赋、装备、状态或职业机制带来的额外抽牌修正。</td><td>抽几张主要由当前角色属性和效果决定。</td></tr>
    <tr><td>抽到手牌</td><td>按洗好的牌库顺序抽牌进入手牌。后续普通抽牌继续沿用这副牌库的顺序。</td><td>只有需要重洗剩余牌库时，才继续消耗战斗内随机。</td></tr>
  </tbody>
</table>

所以，起手手牌属于战斗内随机结果，不会推进地牢全局随机序列。这里要特别区分两件事：它不会改变宝箱、商店、变形术、寻宝这类地牢随机；但强退重开后如果这场战斗重新创建，战斗内随机状态也会重新创建，起手手牌就可能和强退前不同。

<section class="dq-callout">
  <strong>为什么强退后起手会变</strong>
  <span>牌库洗牌调用的是 Game.InGameRandomRange。代码里这个随机源存放在当前战斗 Game 对象上；如果还没有被 SetRandom(seed) 明确设置，首次使用时会创建一个新的 MyRandom 默认随机源。这个默认源不是从种子串还原，所以重新打开游戏并重新进入同一场战斗时，起手手牌可能变化。</span>
</section>

如果讨论的是整局游戏刚开始的牌组，职业本身有固定起始牌组；随机性主要发生在进入战斗后把这副牌库洗成抽牌顺序，而不是创建角色时随机发起手牌。

## 4. 具体 RNG 算法

游戏里的随机是伪随机：给定同一个种子或同一个已保存的随机状态，就会按固定顺序产出同一串数字。这里不是标准库的复杂随机表，而是游戏自己的 31 位线性同余算法。

<section class="dq-callout">
  <strong>核心公式</strong>
  <span>每次抽取都会先更新：新状态 = (旧状态 × 1103515245 + 12345) 只保留低 31 位。小数结果 = 新状态 / 2147483648。</span>
</section>

种子写入时也只保留低 31 位，所以两个只在最高位不同的种子，会进入同一个随机状态。每次调用小数、整数、正态分布或洗牌，都会先推进这一个状态。

游戏层面的随机不是“每个系统各自随便抽”，而是围绕几个基础抽取方式组合出来。

<section class="dq-flow-grid">
  <div><strong>整数抽取</strong><span>基础整数函数本来是上限不包含；游戏包装后会把上限加 1，所以玩家看到的 A 到 B 是首尾都包含。例如 1 到 3 会得到 1、2 或 3。</span></div>
  <div><strong>小数阈值</strong><span>先用核心公式得到 0 到 1 之间的小数，再和概率阈值比较。宝箱分支、怪物放置、墙体生成等经常用这种方式。</span></div>
  <div><strong>加权选择</strong><span>先把候选项权重相加，再按总权重投点。权重越高，被选中的区间越大；权重为 0 的候选不会出现。</span></div>
  <div><strong>洗牌</strong><span>从列表前面开始，每一步在当前位置到列表末尾之间随机挑一个位置交换。每一步都会消耗一次整数随机。</span></div>
  <div><strong>随机取整</strong><span>先取整数部分，再用小数部分当概率决定是否进一。比如 2.25 有 25% 机会取 3。</span></div>
  <div><strong>正态波动</strong><span>抽两个小数，用 Box-Muller 公式转成围绕 0 波动的正态随机数；金币和商店预算会再乘标准差并加上目标值。</span></div>
  <div><strong>随机字母</strong><span>先抽 0 到 25，再加到大写 A 上，所以只会得到 A 到 Z。</span></div>
</section>

这些基础方式会叠加在一起。例如宝箱可能先用小数决定奖励分支，再用加权选择挑候选卡，最后用洗牌决定展示顺序。只要中间多消耗一次随机，后面所有依赖同一条随机状态的结果都可能改变。
`;
}

function renderTileMonsterPercentTable(dungeonGeneration) {
  const probs = dungeonGeneration.pathing_and_cut_vertices?.tile_monster_percent?.probabilities || {};
  const rows = [
    ["直线双向通道", "左右都可走且上下不可走，或上下都可走且左右不可走。也就是总开口数 = 2，且两个开口在同一轴线上。", probs.straight_two_way?.value ?? 0.3],
    ["四向交叉", "上下左右 4 个邻格都存在且都不是 impassable。", probs.four_way_cross?.value ?? 0.15],
    ["拐角 / T 字路口", "总开口数 = 2 或 3，但不满足直线双向通道。2 个开口且互相垂直时是拐角；3 个开口时是 T 字路口。", probs.corner_or_t_junction?.value ?? 0.1],
    ["死路 / 边缘 / 孤立格", "总开口数不是 2、3、4 的其他情况，主要是 0 或 1 个可走邻格。", probs.dead_end_or_isolated?.value ?? 0.05]
  ];
  return `<section class="dq-callout">
  <strong>格子形状的判定</strong>
  <span>Tile.MonsterPercent 只看当前格上下左右四个邻格是否可走：邻格不存在或 impassable=true 都算不开口。记左右开口数为 H、上下开口数为 V，总开口数为 H+V；下表就是代码里的分类。AddMonsters 临时封住已选怪物格和相邻格时，也会改变后续格子的形状判定。</span>
</section>

<table class="dq-data-table">
  <thead><tr><th>格子形状</th><th>判定</th><th>怪物尝试放置概率</th></tr></thead>
  <tbody>
${rows.map(([name, detail, value]) => `<tr><td>${escapeHtml(name)}</td><td>${escapeHtml(detail)}</td><td>${escapeHtml(percent(value))}</td></tr>`).join("\n")}
  </tbody>
</table>`;
}

function renderMonsterAppearanceWeightTable(monsterCatalog, bossOnly = false) {
  const monsters = (monsterCatalog.monsters || [])
    .filter((monster) => Boolean(monster.monster_data?.boss) === bossOnly)
    .sort((a, b) => {
      const minA = Number(a.monster_data?.min_level ?? 99);
      const minB = Number(b.monster_data?.min_level ?? 99);
      return minA - minB || (a.display_name || a.internal_name || "").localeCompare(b.display_name || b.internal_name || "");
    });
  if (!monsters.length) {
    return `<p class="dq-note">没有解析到${bossOnly ? " Boss" : "普通怪物"}权重。</p>`;
  }
  const rows = monsters.map((monster) => {
    const data = monster.monster_data || {};
    const weights = data.environment_weights || {};
    const slug = slugify(monster.internal_name || monster.class_name || monster.display_name);
    return `<tr>
  <td><a href="/monsters/${slug}">${escapeHtml(monster.display_name || monster.internal_name || monster.class_name)}</a></td>
  <td>${escapeHtml(data.min_level === data.max_level ? `${data.min_level}` : `${data.min_level}-${data.max_level}`)}</td>
  ${MONSTER_WEIGHT_ENVIRONMENTS.map(([field]) => `<td>${escapeHtml(weights[field] ?? 0)}</td>`).join("")}
</tr>`;
  });
  return `<table class="dq-data-table">
  <thead><tr><th>怪物</th><th>等级</th>${MONSTER_WEIGHT_ENVIRONMENTS.map(([, location]) => `<th>${escapeHtml(locationLabel(location))}</th>`).join("")}</tr></thead>
  <tbody>
${rows.join("\n")}
  </tbody>
</table>`;
}

function renderDungeonRewardAllocationSummary(dungeonGeneration) {
  const rewards = dungeonGeneration.generate_rewards || {};
  const health = rewards.health_branch || {};
  const service = rewards.service_reward_roll || [];
  return `<table class="dq-data-table">
  <thead><tr><th>阶段</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td>基础奖励</td><td>每层先加入 3 个 Shop。</td></tr>
    <tr><td>治疗分支</td><td>先投 1 次 RandomFloat。若大于 0.5：加入 1 个 HealingPool，再加入 depth + RandomRange(1, 2) 个 HealthPack；否则加入 depth * 2 + RandomRange(2, 4) 个 HealthPack。</td></tr>
    <tr><td>服务建筑</td><td>${escapeHtml(service.map((item) => `${buildingDisplayName(item.reward)} ${percent(item.probability)}`).join("；") || "Monastery、Blacksmith、SmoothieShack 三选一。")}</td></tr>
    <tr><td>额外随机奖励</td><td>${escapeHtml(rewards.additional_random_rewards?.count || "RandomRange(2, 4)")} 次 GenerateRewardName。</td></tr>
    <tr><td>成就 / 难度补充</td><td>DRAGON1 每层加 TreasureChest；STEPS1 每层加 HealthPack；Kitten 加 HealingPool 和 TreasureChest；Grizzly Bear 加 HealthPack。</td></tr>
    <tr><td>摆放逻辑</td><td>奖励名列表会先洗牌，再按“威胁组件”分配。威胁高的连通区域排在前面，但每次被选中后权重会衰减，所以奖励不会全部堆在同一片区域。</td></tr>
  </tbody>
</table>`;
}

function rewardGuideImage(assetLookup, area, id, preferred = "") {
  return assetLookup?.image(area, id, preferred) || "";
}

function rewardGuideImages(assetLookup) {
  return {
    monster: rewardGuideImage(assetLookup, "dungeon_talent_icon", "findmonster"),
    exp: rewardGuideImage(assetLookup, "dungeon_talent_icon", "levelup"),
    gold: rewardGuideImage(assetLookup, "dungeon_talent_icon", "rich"),
    chest: rewardGuideImage(assetLookup, "dungeon_actor", "treasurechest", "/big/"),
    card: rewardGuideImage(assetLookup, "dungeon_talent_icon", "card1"),
    shop: rewardGuideImage(assetLookup, "dungeon_actor", "shop", "/big/"),
    health: rewardGuideImage(assetLookup, "dungeon_actor", "healthpack", "/big/"),
    service: rewardGuideImage(assetLookup, "dungeon_actor", "blacksmith", "/big/"),
    randomReward: rewardGuideImage(assetLookup, "dungeon_actor", "treasurechest", "/big/")
  };
}

function rewardIcon(image, label, className = "") {
  const img = image ? `<img src="${image}" alt="${escapeHtml(label)}" loading="lazy">` : "";
  const classes = ["dq-reward-icon", className].filter(Boolean).join(" ");
  return `<span class="${classes}" title="${escapeHtml(label)}">${img}</span>`;
}

function rewardIconHeading(image, title, subtitle) {
  return `<span class="dq-reward-heading">
    ${rewardIcon(image, title)}
    <span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(subtitle)}</small></span>
  </span>`;
}

function renderRewardsPageHero(images) {
  return `<section class="dq-page-hero dq-rewards-hero">
  <div>
    <p class="dq-kicker">Rewards</p>
    <h1>奖励、宝箱与商店</h1>
    <p class="dq-lede">这页把两类奖励拆开看：地图上生成的奖励建筑，以及战斗胜利后从怪物身上结算的经验、金币和宝箱。</p>
  </div>
  <div class="dq-reward-hero-icons" aria-hidden="true">
    ${rewardIcon(images.monster, "怪物")}
    ${rewardIcon(images.exp, "经验")}
    ${rewardIcon(images.gold, "金币")}
    ${rewardIcon(images.chest, "宝箱")}
    ${rewardIcon(images.card, "卡牌")}
  </div>
</section>`;
}

function renderDungeonRewardFlow(images) {
  return `<section class="dq-flow-grid dq-reward-flow-grid">
  <div>
    ${rewardIcon(images.shop, "商店")}
    <strong>1. 固定商店</strong>
    <span>每层先放入 3 个 Shop，作为基础经济入口。</span>
  </div>
  <div>
    ${rewardIcon(images.health, "治疗")}
    <strong>2. 治疗分支</strong>
    <span>再决定是 HealingPool 加少量 HealthPack，还是直接生成更多 HealthPack。</span>
  </div>
  <div>
    ${rewardIcon(images.service, "服务建筑")}
    <strong>3. 服务建筑</strong>
    <span>Monastery、Blacksmith、SmoothieShack 三选一。</span>
  </div>
  <div>
    ${rewardIcon(images.randomReward, "普通奖励")}
    <strong>4. 普通奖励</strong>
    <span>最后追加 RandomRange(2, 4) 个 GenerateRewardName 结果。</span>
  </div>
</section>`;
}

function renderMonsterKillRuleCards(images) {
  return `<div class="dq-reward-rule-grid">
  <div>
    ${rewardIconHeading(images.exp, "经验", "Experience")}
    <p>普通怪物的基础经验等于怪物等级。等级会先夹到 1-10，再乘以怪物自己的 expMult。</p>
  </div>
  <div>
    ${rewardIconHeading(images.gold, "金币", "Gold")}
    <p>先按等级得到金币均值，再经过 ModifyGoldDrops。实际掉落按均值上下小幅波动，最低为 1 金币。</p>
  </div>
  <div>
    ${rewardIconHeading(images.chest, "宝箱替代金币", "Chest Roll")}
    <p>怪物身上已有 storedChest 且 goldMult 为 1.0 时，击杀有 10% 用宝箱替代普通金币。</p>
  </div>
  <div>
    ${rewardIconHeading(images.card, "怪物宝箱内容", "Loot")}
    <p>怪物宝箱固定 1 件，调用 GenerateLoot(1)。这一件走 CardFinder 抽卡，不使用普通宝箱的 1/2/3 件数量表。</p>
  </div>
</div>`;
}

function renderMonsterKillRewardGuide(assetLookup) {
  const images = rewardGuideImages(assetLookup);
  return `<section class="dq-section-block">
  <h2>怪物击杀奖励</h2>
  <p class="dq-note">这是战斗胜利后从怪物身上结算的奖励，不是地图上的 TreasureChest / Shop / Blacksmith 等地牢奖励建筑。当前恢复代码里，难度不会直接改怪物击杀金币或经验。</p>
  <div class="dq-callout">
    <strong>一句话规则</strong>
    <span>杀怪一定结算经验；然后结算金币，或在满足条件时用怪物身上的宝箱替代金币。宝箱不是额外加一次金币奖励。</span>
  </div>
  <section class="dq-flow-grid dq-reward-flow-grid dq-monster-kill-flow">
    <div>
      ${rewardIcon(images.monster, "怪物等级")}
      <strong>1. 等级写入奖励字段</strong>
      <span>Monster.LevelTo 把等级夹到 1-10，并写入基础经验和金币均值。</span>
    </div>
    <div>
      ${rewardIcon(images.exp, "经验")}
      <strong>2. 先记录经验</strong>
      <span>Monster.Defeated 调 ProcessKill；普通战斗会延迟到战斗结束后触发升级检查。</span>
    </div>
    <div>
      ${rewardIcon(images.chest, "宝箱")}
      <strong>3. 判断是否出宝箱</strong>
      <span>有 storedChest、goldMult 为 1.0，且 RandomFloat 小于 0.1 时，显示 a treasure chest!。</span>
    </div>
    <div>
      ${rewardIcon(images.gold, "金币")}
      <strong>4. 否则掉金币</strong>
      <span>普通金币按 RandomNormal(mean, mean * 0.1) 抽样并取整，低于 1 时按 1 结算。</span>
    </div>
  </section>
  ${renderMonsterKillRuleCards(images)}
  <table class="dq-data-table">
    <thead><tr><th>项目</th><th>规则</th></tr></thead>
    <tbody>
      <tr><td>${rewardIconHeading(images.exp, "经验", "EXP")}</td><td>Monster.LevelTo 保存 exp = int(ExpValue(level) * expMult)。普通怪物的 ExpValue(level) 就是等级值，所以 1-10 级分别给 1-10 经验。</td></tr>
      <tr><td>${rewardIconHeading(images.gold, "金币均值", "Gold Mean")}</td><td>先保存 gold = int(GoldValue(level) * goldMult)，击杀时再经过 DungeonPlayer.ModifyGoldDrops 修正。Miserly Minuet 等效果会在这里影响均值。</td></tr>
      <tr><td>${rewardIconHeading(images.gold, "金币随机", "Gold Roll")}</td><td>实际金币用 Game.RandomNormal(mean, mean * 0.1) 抽样并取整；低于 1 时按 1 金币结算。</td></tr>
      <tr><td>${rewardIconHeading(images.chest, "宝箱替代金币", "10% Roll")}</td><td>Monster.Defeated 先掷 RandomFloat；若小于 0.1，且怪物身上已有 storedChest，且 goldMult 为 1.0，则显示“a treasure chest!”并用宝箱替代普通金币。经验仍照常获得。</td></tr>
      <tr><td>${rewardIconHeading(images.card, "怪物宝箱内容", "GenerateLoot(1)")}</td><td>GenerateMonsterChest 调用 TreasureChest.GenerateLoot(1)，因此固定 1 件，第一件走 CardFinder 抽卡；它不是普通宝箱的 1/2/3 件掉落表。</td></tr>
    </tbody>
  </table>

  <h3>金币和经验表</h3>
  <p class="dq-note">表里的金币是均值；最终金币还会走随机波动和 ModifyGoldDrops。宝箱触发时，这次普通金币会被宝箱替代。</p>
  <div class="dq-table-scroll">
  <table class="dq-data-table">
    <thead><tr><th>怪物等级</th><th>${rewardIconHeading(images.exp, "经验", "EXP")}</th><th>${rewardIconHeading(images.gold, "金币均值", "Gold")}</th></tr></thead>
    <tbody>
${MONSTER_KILL_GOLD_ROWS.map(([level, gold]) => `<tr><td>${level}</td><td>${level}</td><td>${gold}</td></tr>`).join("\n")}
    </tbody>
  </table>
  </div>

  <h3>玩家升级经验</h3>
  <p class="dq-note">普通战斗在 Monster.Defeated 中先记录经验；随后 Dungeon.WinFight / SaveDungeon 之后再调用 GainExp(0)，触发延迟升级检查。</p>
  <div class="dq-table-scroll">
  <table class="dq-data-table">
    <thead><tr><th>目标玩家等级</th><th>${rewardIconHeading(images.exp, "所需经验", "Required EXP")}</th></tr></thead>
    <tbody>
${PLAYER_EXP_THRESHOLD_ROWS.map(([level, exp]) => `<tr><td>${level}</td><td>${exp}</td></tr>`).join("\n")}
    </tbody>
  </table>
  </div>
</section>`;
}

function dungeonTerrainImagePath(file) {
  return `/assets/extracted/textures/by_container/resources/${file}`;
}

function terrainArtSample(file, label) {
  return `<span class="dq-terrain-swatch">
    <img src="${dungeonTerrainImagePath(file)}" alt="${escapeHtml(label)}" loading="lazy">
    <em>${escapeHtml(label)}</em>
  </span>`;
}

function recordMatchesKey(keys, key) {
  const target = slugify(key);
  return keys.filter(Boolean).some((value) => slugify(value) === target);
}

function findBuildingRecord(buildingRecords, key) {
  return buildingRecords.find((record) =>
    recordMatchesKey(
      [
        record.slug,
        record.building.id,
        record.building.className,
        record.building.assetId,
        record.building.en,
        record.building.cn
      ],
      key
    )
  );
}

function findMonsterRecord(monsterRecords, key) {
  return monsterRecords.find((record) =>
    recordMatchesKey(
      [
        record.slug,
        record.monster.internal_name,
        record.monster.class_name,
        record.monster.display_name,
        record.monster.display_name_cn,
        record.monster.original_display_name
      ],
      key
    )
  );
}

function dungeonBuildingTile(buildingRecords, key, detail) {
  const record = findBuildingRecord(buildingRecords, key);
  if (!record) return null;
  const building = record.building;
  return {
    href: record.href,
    image: record.image,
    title: building.cn,
    subtitle: `${building.en} · ${building.category}`,
    detail: detail || compactText(building.summary, 96)
  };
}

function dungeonMonsterTile(monsterRecords, key, detail) {
  const record = findMonsterRecord(monsterRecords, key);
  if (!record) return null;
  const monster = record.monster;
  const data = monster.monster_data || {};
  return {
    href: record.href,
    image: record.image,
    title: monster.display_name || monster.class_name || monster.internal_name,
    subtitle: `${monsterLevelRange(monster)} · ${data.boss ? "Boss" : "怪物"}`,
    detail: detail || compactText(monsterGeneratedSummary(monster), 96)
  };
}

function dungeonActorTile(assetLookup, key, title, subtitle, href, detail) {
  const image =
    assetLookup?.image("dungeon_actor", key, "/big/") ||
    assetLookup?.image("dungeon_actor", key, "/little/") ||
    "";
  return { href, image, title, subtitle, detail };
}

function renderDungeonEntityGallery(items) {
  const tiles = items.filter(Boolean);
  if (!tiles.length) {
    return "";
  }
  return `<section class="dq-feature-grid dq-dungeon-entity-grid">
${tiles.map(renderDungeonEntityTile).join("\n")}
</section>`;
}

function renderDungeonEntityTile(item) {
  const tag = item.href ? "a" : "span";
  const href = item.href ? ` href="${escapeHtml(item.href)}"` : "";
  return `<${tag} class="dq-feature-tile"${href}>
  <span class="dq-feature-art">${item.image ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">` : ""}</span>
  <span>
    <strong>${escapeHtml(item.title)}</strong>
    <small>${escapeHtml(item.subtitle || "")}</small>
    <em>${escapeHtml(item.detail || "")}</em>
  </span>
</${tag}>`;
}

function renderDungeonGenerationGuide(dungeonGeneration, monsterCatalog = {}, cardById = new Map(), context = {}) {
  const { assetLookup = null, buildingRecords = [], monsterRecords = [] } = context;
  const board = dungeonGeneration.board_layout || {};
  const monster = dungeonGeneration.monster_generation || {};
  const depth1 = board.grid_size?.depth_1 || { width: 8, height: 8 };
  const otherDepths = board.grid_size?.other_depths || { width: 10, height: 10 };
  const wallRows = [
    ["第 1 层", `${depth1.width} x ${depth1.height}`, "64", "约 24-27", "20-30", "25.1", "34-44"],
    ["第 2 层", `${otherDepths.width} x ${otherDepths.height}`, "100", "约 38-42", "34-47", "39.9", "53-66"],
    ["第 3 层", `${otherDepths.width} x ${otherDepths.height}`, "100", "约 38-42", "34-47", "39.9", "53-66"],
  ];
  return `${renderFrontmatter("地牢生成", "Dream Quest 地牢棋盘、怪物、Boss 和奖励生成规则。")}
# 地牢生成

这页按实际楼层生成顺序阅读。普通层是第 1-3 层：先切到本层随机流，建棋盘、决定地形、造墙、放玩家，再放职业建筑、普通怪物、奖励、Boss、特殊建筑和起点文本。第 4 层会提前分流到 BuildLastFloor，是另一套最终层逻辑。

<section class="dq-flow-grid">
  <div><strong>普通层</strong><span>第 1 层 ${escapeHtml(depth1.width)} x ${escapeHtml(depth1.height)}；第 2、3 层 ${escapeHtml(otherDepths.width)} x ${escapeHtml(otherDepths.height)}。地形、墙、怪物、奖励和 Boss 都在同一层生成过程中确定。</span></div>
  <div><strong>最终层</strong><span>第 4 层直接清墙、全图可见，并在中心放 Throne 和 FinalBoss，不生成普通怪物、商店、奖励和普通 Boss。</span></div>
  <div><strong>地形</strong><span>普通层从尚未出现的普通地形中均匀抽取；地形会保存到 floorEnvironments，并影响怪物与 Boss 的候选权重。</span></div>
  <div><strong>墙</strong><span>每个格子按洗牌顺序尝试变墙；只有变墙后地图仍连通，才再投 50% 成为墙。</span></div>
  <div><strong>放置</strong><span>普通层的放置顺序会影响后续判断：玩家和酒馆占格后，怪物、奖励、Boss 都只能在未占用格上继续生成。</span></div>
</section>

## 0. 随机入口

<table class="dq-data-table">
  <thead><tr><th>种子 / 状态</th><th>在地牢生成里的用途</th><th>互相影响</th></tr></thead>
  <tbody>
    <tr><td>初始种子</td><td>创建游戏或解析种子串时得到的起点，用来派生每层楼层种子和升级奖励种子。</td><td>改变它会改变整局可复现内容。</td></tr>
    <tr><td>第 1 / 2 / 3 层楼层种子</td><td>BuildBoard(depth) 会按当前层切到对应楼层种子，生成棋盘、墙、地形、怪物、奖励、Boss 和位置。</td><td>每层是独立入口；第 1 层生成不会推进第 2 层楼层种子。</td></tr>
    <tr><td>地牢全局随机</td><td>楼层生成期间大量使用 RandomFloat、RandomRange、RandomNormal 和洗牌；生成后部分地牢行动也继续使用它。</td><td>同一条流上的后续操作会互相推进，例如变形术、寻宝、宝箱、商店重算。</td></tr>
    <tr><td>升级奖励种子</td><td>升级奖励单独保存，不被楼层造墙、怪物和奖励建筑消耗。</td><td>楼层生成消耗再多随机，也不会直接吃掉升级奖励序列。</td></tr>
    <tr><td>floorBoss / floorEnvironments</td><td>保存第 1-3 层已经生成或从存档恢复的 Boss 与地形。</td><td>它们是生成结果状态。若 floorBoss 非空，CreateBoss 直接使用固定 Boss；若 floorEnvironments 不是 NONE，同层直接复用该地形。</td></tr>
    <tr><td>战斗内随机</td><td>起手洗牌、战斗内随机弃牌和部分战斗效果。</td><td>不参与地牢地图生成；详见 <a href="/mechanics/rng-save-load">随机数机制</a>。</td></tr>
  </tbody>
</table>

同一层内部是一条连续流水线：造墙洗牌、50% 造墙判定、怪物等级、怪物放置、奖励名、奖励位置、Boss 选择和 Boss 位置，都会按顺序消耗本层随机流。不同层种子、升级奖励种子和战斗内随机则是分开的入口。

## 1. 普通层总流程

普通层指第 1-3 层。第 4 层在 PopulateDungeon 开头直接进入 BuildLastFloor，跳过下表的普通层流程。

<table class="dq-data-table">
  <thead><tr><th>顺序</th><th>阶段</th><th>生成结果</th><th>后续影响</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Initialize</td><td>创建 Tile[,]、allTiles、每个 Tile 的坐标和棋盘引用。</td><td>之后所有随机选格、连通检查、地形贴图和对象放置都基于这张棋盘。</td></tr>
    <tr><td>2</td><td>地形</td><td>读取或抽取 floorEnvironment。</td><td>决定地板 / 墙体贴图，并作为普通怪物和 Boss 出现权重的环境字段。</td></tr>
    <tr><td>3</td><td>BuildMaze</td><td>逐格尝试变墙，保证剩余可走格始终连通。</td><td>墙会影响后续 RandomUnusedTile、怪物割点、奖励区域和 Boss 位置。</td></tr>
    <tr><td>4</td><td>玩家位置</td><td>RandomUnusedTile 放 PlayerSprite。</td><td>PlayerTile 成为距离、威胁距离、Bard 第 1 层酒馆和起点文本的参考点。</td></tr>
    <tr><td>5</td><td>AddTaverns</td><td>Bard 职业可能放 Tavern。</td><td>酒馆占用格子，后续怪物、奖励和 Boss 不能直接占同一个未移动格。</td></tr>
    <tr><td>6</td><td>AddMonsters</td><td>选择普通怪物位置、生成怪物等级、按地形权重选择怪物种类。</td><td>怪物格会产生威胁，后续 AddRewards 会用这些威胁切分奖励区域。</td></tr>
    <tr><td>7</td><td>AddRewards</td><td>生成奖励名列表，按威胁区域摆放奖励建筑，并在末尾创建普通 Boss。</td><td>奖励和 Boss 都会占格；Boss 死亡后才会产生普通楼梯。</td></tr>
    <tr><td>8</td><td>AddTraps / AddWeirdFeature</td><td>当前 build 的 AddTraps 为空；第 2 层以后可能添加特殊建筑。</td><td>特殊建筑是普通奖励流程之外的额外地图对象。</td></tr>
    <tr><td>9</td><td>LevelStart</td><td>在 PlayerTile 创建楼层起点文本。</td><td>只提供进入楼层的文本提示，不参与墙、怪物或奖励权重。</td></tr>
  </tbody>
</table>

## 2. Initialize：棋盘与 Tile

<table class="dq-data-table">
  <thead><tr><th>项目</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td>第 1 层</td><td>${escapeHtml(depth1.width)} x ${escapeHtml(depth1.height)}，共 ${escapeHtml(depth1.width * depth1.height)} 个 Tile。</td></tr>
    <tr><td>第 2 / 3 层</td><td>${escapeHtml(otherDepths.width)} x ${escapeHtml(otherDepths.height)}，共 ${escapeHtml(otherDepths.width * otherDepths.height)} 个 Tile。</td></tr>
    <tr><td>第 4 层</td><td>同样按后续层尺寸建盘，但随后 BuildLastFloor 会清墙、全图可见，并改用最终层对象。</td></tr>
    <tr><td>TileAt</td><td>先检查坐标是否在棋盘内；越界返回空，合法坐标返回 board[x, y]。</td></tr>
    <tr><td>allTiles</td><td>Initialize 会把每个 Tile 追加到 allTiles。BuildMaze、AddMonsters 和随机选格都会反复使用这个列表。</td></tr>
  </tbody>
</table>

## 3. 地形：floorEnvironment

普通层使用 Dungeon、Water、Volcano、Forest、Crypt、Mountain 六种真实地形。地形不参与墙数量计算，但会决定地板 / 墙体贴图，并影响普通怪物与普通 Boss 的环境权重。

<section class="dq-callout">
  <strong>地形不是每层都从六种里重新 1/6 抽</strong>
  <p>新生成普通层时，代码会排除 LAST、NONE，以及之前普通层已经抽到的地形，再从剩余地形里均匀抽一个。因此第 1 层是 6 选 1，第 2 层是剩余 5 选 1，第 3 层是剩余 4 选 1。</p>
</section>

<table class="dq-data-table">
  <thead><tr><th>楼层</th><th>抽取规则</th><th>概率</th><th>种子关系</th></tr></thead>
  <tbody>
    <tr><td>第 1 层</td><td>排除 LAST 和 NONE 后，在 6 种普通地形里抽。</td><td>每种普通地形 1/6。</td><td>由第 1 层楼层种子的当前随机流决定。</td></tr>
    <tr><td>第 2 层</td><td>继续排除第 1 层已出现的地形。</td><td>剩余 5 种普通地形各 1/5。</td><td>由第 2 层楼层种子决定，但候选列表会读取第 1 层保存的地形。</td></tr>
    <tr><td>第 3 层</td><td>继续排除第 1、2 层已出现的地形。</td><td>剩余 4 种普通地形各 1/4。</td><td>由第 3 层楼层种子决定，但候选列表会读取前两层保存的地形。</td></tr>
    <tr><td>第 4 层</td><td>不抽普通地形，直接设置为 LAST。</td><td>固定。</td><td>最终层逻辑直接写入，不走普通怪物 / Boss 地形权重。</td></tr>
  </tbody>
</table>

<table class="dq-data-table">
  <thead><tr><th>后台值</th><th>地形</th><th>用途</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>Dungeon</td><td>普通地形；参与普通怪物和普通 Boss 的 Dungeon 权重。</td></tr>
    <tr><td>1</td><td>Water</td><td>普通地形；参与 Water 权重。</td></tr>
    <tr><td>2</td><td>Volcano</td><td>普通地形；参与 Volcano 权重。</td></tr>
    <tr><td>3</td><td>Forest</td><td>普通地形；参与 Forest 权重。</td></tr>
    <tr><td>4</td><td>Crypt</td><td>普通地形；参与 Crypt 权重。</td></tr>
    <tr><td>5</td><td>Mountain</td><td>普通地形；参与 Mountain 权重，也会被 LightEnvironment 识别为明亮环境。</td></tr>
    <tr><td>6</td><td>LAST</td><td>最终层地形。普通层抽地形时会主动排除它。</td></tr>
    <tr><td>7</td><td>NONE</td><td>未指定 / 初始占位。floorEnvironments 初始为 NONE；普通层首次生成时看到 NONE 才会抽真实地形。</td></tr>
  </tbody>
</table>

<table class="dq-data-table dq-terrain-art-table">
  <thead><tr><th>后台值</th><th>地形</th><th>地板 Tile</th><th>墙 Tile</th><th>说明</th></tr></thead>
  <tbody>
${DUNGEON_TERRAIN_ART_ROWS
  .map(
    (row) => `<tr>
      <td>${escapeHtml(row.value)}</td>
      <td>${escapeHtml(row.name)}</td>
      <td><span class="dq-terrain-swatch-row">${row.floor.map(([file, label]) => terrainArtSample(file, label)).join("")}</span></td>
      <td><span class="dq-terrain-swatch-row">${row.walls.length ? row.walls.map(([file, label]) => terrainArtSample(file, label)).join("") : '<span class="dq-muted-chip">无墙图</span>'}</span></td>
      <td>${escapeHtml(row.note)}</td>
    </tr>`
  )
  .join("\n")}
  </tbody>
</table>

<section class="dq-action-row">
  <a class="dq-button dq-button-secondary" href="/mechanics/terrain-monsters">查看各地形可能出现的生物</a>
</section>

## 4. BuildMaze：墙与连通

BuildMaze 先把 allTiles 洗牌，然后按洗牌后的顺序逐格尝试变墙。每个格子最多尝试一次，成功条件有两层：CanDelete 必须允许这个格子变墙，随后 RandomFloat &lt; 0.5 才真正把 Tile.impassable 设为 true。

<table class="dq-data-table">
  <thead><tr><th>环节</th><th>具体规则</th><th>结果</th></tr></thead>
  <tbody>
    <tr><td>洗牌</td><td>Utility.Shuffle(allTiles) 决定检查顺序。</td><td>越早检查的格子越容易成为墙；越晚检查时，连通约束通常更严格。</td></tr>
    <tr><td>CanDelete</td><td>如果目标格已经是墙，直接拒绝；否则临时把它设为 impassable。</td><td>临时状态只用于测试，不代表最终变墙。</td></tr>
    <tr><td>IsConnected</td><td>统计所有非墙格，从第一个非墙格开始做四向连通搜索，搜索时排除 BlocksMovement 的格子。</td><td>如果搜索到的格子数等于全图非墙格数量，说明删掉这个格子后地图仍是一整块。</td></tr>
    <tr><td>50% 判定</td><td>通过连通检查后，再投 RandomFloat &lt; 0.5。</td><td>只有这一步也通过，格子才永久变成墙。</td></tr>
  </tbody>
</table>

这一步不是寻找一条固定入口到出口路线，而是维护全图可走区连通。斜角接触不算连通；只要某个格子变墙会把地图切成两块，它就不会被删掉。

<table class="dq-data-table">
  <thead><tr><th>楼层</th><th>棋盘</th><th>总格子</th><th>常见墙数</th><th>样本范围</th><th>样本均值</th><th>剩余可走格</th></tr></thead>
  <tbody>
${wallRows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("\n")}
  </tbody>
</table>

这里的墙数是样本体感范围，不是硬上限。真正墙数由楼层种子、洗牌顺序、连通检查和每次 50% 判定共同决定。

## 5. PlayerSprite 与 Bard 酒馆

造墙结束后，普通层会用 RandomUnusedTile 选择一个未占用格创建 PlayerSprite。此后 PlayerTile 会成为本层的关键参考点：怪物距离排序、威胁距离、Bard 第 1 层酒馆位置和 LevelStart 都会围绕它计算。

<table class="dq-data-table">
  <thead><tr><th>对象</th><th>生成规则</th><th>后续影响</th></tr></thead>
  <tbody>
    <tr><td>PlayerSprite</td><td>从可删除且未占用的空格中随机选一个。</td><td>该格不再是 unused；后续对象不会直接占用玩家所在格。</td></tr>
    <tr><td>Bard Tavern</td><td>只有职业是 Bard 时 AddTaverns 才继续。第 1 层放在 PlayerTile 的随机未使用邻格；第 2、3 层放在随机未使用格。</td><td>Tavern 是 DungeonFeature，会占用格子，并参与后续 Tile.IsUnused 判断。</td></tr>
    <tr><td>Musical Champion</td><td>若第 1 层且 WINBARD2 属性存在，会额外在随机未使用格创建第二个 Tavern。</td><td>Bard 开局可能拥有更多酒馆入口。</td></tr>
  </tbody>
</table>

## 6. AddMonsters：普通怪物

AddMonsters 分两件事：先选怪物格，再生成怪物等级和怪物种类。位置选择不是平均撒点，而是先尽量占关键通道，再按格子形状概率补怪，最后不足时回填。

<table class="dq-data-table">
  <thead><tr><th>阶段</th><th>具体规则</th><th>结果</th></tr></thead>
  <tbody>
    <tr><td>数量</td><td>第 1 层固定 6 只；第 2、3 层为 RandomRange(9, 11)。</td><td>决定 selected_tiles 的目标数量。</td></tr>
    <tr><td>割点预选</td><td>FindBestCutVertex 最多成功 5 次。每次成功后，把该格加入 selected_tiles 并临时设为 impassable。</td><td>优先把怪物放在封住后会切开 0 威胁通路的关键位置。</td></tr>
    <tr><td>邻格临时阻挡</td><td>对已选位置的未阻挡邻格临时设为 impassable。</td><td>降低怪物直接贴在一起的概率。</td></tr>
    <tr><td>随机放怪</td><td>洗牌 allTiles，依次检查 Tile.IsUnused 且 RandomFloat &lt; Tile.MonsterPercent。</td><td>格子形状会影响被接受概率。</td></tr>
    <tr><td>回填</td><td>如果随机阶段没放够，从同一批洗牌 allTiles 里继续找 unused 且未选中的格子补足。</td><td>尽量达到本层目标怪物数量。</td></tr>
    <tr><td>释放临时墙</td><td>清除邻格和已选怪物格上的临时 impassable。</td><td>这些格子只是选点时临时阻挡，最终怪物格仍然可作为战斗入口。</td></tr>
    <tr><td>距离排序</td><td>对 selected_tiles 计算 GetStartDistances，并按距离从近到远排序。</td><td>等级列表按排序后顺序落位，所以远处通常更容易对应高等级。</td></tr>
  </tbody>
</table>

<table class="dq-data-table">
  <thead><tr><th>楼层</th><th>怪物数量</th><th>基础等级</th><th>等级总和目标</th></tr></thead>
  <tbody>
${Object.entries(monster.base_levels_by_depth || { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9] })
  .map(([depth, levels]) => `<tr><td>${escapeHtml(depth)}</td><td>${depth === "1" ? "6" : "RandomRange(9, 11)"}</td><td>${escapeHtml(levels.join("、"))}</td><td>${escapeHtml((monster.level_sum_target_by_depth || {})[depth] ?? "-")}</td></tr>`)
  .join("\n")}
  </tbody>
</table>

<section class="dq-mechanic-list">
  <p>等级列表先按基础等级生成权重：每个基础等级得到 RandomFloat + 0.5，归一化后乘以怪物数量，再截断为各等级数量。</p>
  <p>每只怪物随后有等级波动：10% 概率 -1，15% 概率 +1，5% 概率 +2；前三个波动额外偏低，分别带 -0.15、-0.10、-0.05 修正。</p>
  <p>等级会被限制在当前层基础范围内，并且最高不超过 10。如果总等级低于目标值，会随机挑还能提升的怪物继续 +1，直到达到目标。</p>
</section>

<table class="dq-data-table">
  <thead><tr><th>方法</th><th>具体作用</th><th>影响到的结果</th></tr></thead>
  <tbody>
    <tr><td>FindDeletableSquares</td><td>从全图格子里找“临时变墙后地图仍保持连通”的格子。它内部会用 CanDelete / IsConnected 检查。</td><td>给割点检测提供候选；这里不是直接生成新墙。</td></tr>
    <tr><td>Tile.IsUnused</td><td>过滤已经是墙、或已经放了 DungeonFeature 的格子。怪物、建筑、玩家等都会让格子不再是 unused。</td><td>放怪和放奖励只会在真正空格上继续尝试。</td></tr>
    <tr><td>Tile.CanBeACut</td><td>局部形状预筛。它看上下左右四个正交邻格，以及四个转角连接缺口；至少 2 个正交邻格、且缺口数大于 1，才可能成为切点。</td><td>快速排除不可能切开通路的格子，后续仍要经过 IsUnused 和区域数量检查。</td></tr>
    <tr><td>FindCutVertexInfos</td><td>先记录当前 GetThreatComponents 的区域数量；再临时把候选格设为 impassable，重新计算区域数量；如果数量增加，就记录这个候选格和切开后的区域列表。</td><td>确认“封住这个格会把 0 威胁通路切成更多块”。</td></tr>
    <tr><td>GetThreatComponents</td><td>把 impassable 格、以及 Tile.GetThreat 不为 0 的格子都当作屏障，只对剩下的 0 威胁可走格做四向 flood fill。</td><td>得到“被墙和怪物隔开的安全空地区域”，不是普通全图连通块。</td></tr>
    <tr><td>GetStartDistances / TileDistanceSort</td><td>从玩家起点算普通距离，并按距离给已经选中的怪物格排序。</td><td>影响怪物等级和位置的配对。</td></tr>
  </tbody>
</table>

${renderTileMonsterPercentTable(dungeonGeneration)}

### 普通怪物类型权重

怪物类型选择使用 MonsterData 的地形权重。候选必须同时满足：普通怪物类型、当前等级落在 min/max 区间内、当前地形权重大于 0。最终概率不是表中权重本身，而是该怪物权重除以当前候选池总权重。普通怪物还会受 seen 计数影响：本层已经生成过的内部名会被临时降权。

<details open>
  <summary>普通怪物权重</summary>
  ${renderMonsterAppearanceWeightTable(monsterCatalog, false)}
</details>

## 7. AddRewards：奖励、建筑与普通 Boss

AddRewards 发生在普通怪物之后。此时怪物已经占格并产生威胁，因此奖励摆放不是只看空格，而是先把地图切成威胁区域，再把奖励分配到这些区域里。

${renderDungeonRewardAllocationSummary(dungeonGeneration)}

### 本阶段可能创建的对象

${renderDungeonEntityGallery([
  dungeonBuildingTile(buildingRecords, "Shop", "每层奖励列表固定先加入 3 个；随机奖励名也可额外生成。"),
  dungeonBuildingTile(buildingRecords, "TreasureChest", "随机奖励名最高权重，打开后生成卡牌和可能的金币。"),
  dungeonBuildingTile(buildingRecords, "HealthPack", "治疗分支和随机奖励名都可能生成，治疗量随楼层增加。"),
  dungeonBuildingTile(buildingRecords, "HealingPool", "治疗分支、随机奖励名和低难度补偿都可能生成。"),
  dungeonBuildingTile(buildingRecords, "Blacksmith", "服务奖励三选一或随机奖励名生成，用于升级牌。"),
  dungeonBuildingTile(buildingRecords, "Monastery", "服务奖励三选一或随机奖励名生成，用于删牌。"),
  dungeonBuildingTile(buildingRecords, "SmoothieShack", "服务奖励三选一或随机奖励名生成。"),
  dungeonBuildingTile(buildingRecords, "MimicChest", "第 2 层以后随机奖励名可生成，打开后变为 Mimic。"),
  dungeonBuildingTile(buildingRecords, "GoblinHoarder", "奖励名抽中后直接创建的携金怪物遭遇，会用防守牌争取逃走。")
])}

<table class="dq-data-table">
  <thead><tr><th>区域方法</th><th>具体作用</th><th>结果</th></tr></thead>
  <tbody>
    <tr><td>GetToPlayerThreats</td><td>从玩家位置出发生成威胁距离表；移动到相邻格时会加上该格 Tile.GetThreat。</td><td>越需要跨过高等级怪物才能到达的区域，威胁距离越高。</td></tr>
    <tr><td>Tile.GetThreat</td><td>汇总格子上 DungeonFeature 的 Threat；普通 DungeonFeature 默认 0，Monster.Threat 返回怪物等级。</td><td>怪物格既会阻断 0 威胁区域，也会提高威胁距离。</td></tr>
    <tr><td>GetThreatComponents</td><td>排除墙和非 0 威胁格，只把剩余 0 威胁空地做四向 flood fill。</td><td>得到 AddRewards 使用的安全空地区域列表。</td></tr>
    <tr><td>ThreatComponent</td><td>保存区域格子列表、区域威胁距离、可用空格 openSquares 和权重。</td><td>奖励会按这些组件分配，而不是直接全图随机撒点。</td></tr>
    <tr><td>ThreatComponent.Pick</td><td>区域被选中后 openSquares 减 1，权重从 1 递减到 0.5、0.15、0.05，之后再被选中会基本耗尽；可用空格不足时也会直接耗尽。</td><td>避免奖励全部堆在同一个区域。</td></tr>
  </tbody>
</table>

### 奖励名列表

GenerateRewards 先生成奖励名列表，AddRewards 再洗牌这个列表并逐个放置。每个奖励实际创建时会调用 GenerateRewardByName；其中 TreasureChest、MimicChest、Shop、Monastery、Blacksmith、SmoothieShack 等会进入各自建筑逻辑。

<section class="dq-callout">
  <strong>GoblinHoarder 是奖励名里的怪物遭遇</strong>
  <p>GenerateRewardName 抽到 GoblinHoarder 时，地图上创建的是 Goblin Hoarder 怪物；它不是可打开建筑，而是怪物遭遇。它携带较多金币，并会用 Cower、Hide 等防守牌争取逃走。</p>
</section>

${renderRewardNameProbabilityTable(dungeonGeneration)}

### 金币预算

<section class="dq-mechanic-list">
  <p>AddRewards 会先用 TotalGoldTarget 计算本层总金币目标，再除以洗牌后的奖励数量得到平均值。</p>
  <p>奖励放置时使用 multiplier 调整金币预算：初始为 1 + 奖励数量 x 0.025，每放一个奖励后减少 0.05。</p>
  <p>每个奖励传入的 goldTarget 是 int(平均值 x 当前 multiplier)。这会让前面的奖励预算略高，后面的奖励预算逐步下降。</p>
</section>

### 普通 Boss

Boss 是 AddRewards 的末尾步骤，不是单独在怪物阶段生成。

<section class="dq-mechanic-list">
  <p>Boss 基础等级：第 1 层 4 级，第 2 层 7 级，第 3 层 10 级。</p>
  <p>如果 floorBoss 指定了固定内部名，就直接使用；否则 MonsterFinder.ChooseBoss 会按环境权重选择，并排除之前楼层已经出现过的 Boss。</p>
  <p>Boss 位置优先从已排序 ThreatComponent 里找 CanDelete 候选格；如果选中的 Boss 格已有建筑，会先把原建筑移动到随机未使用格，再创建 Boss。</p>
  <p>如果没有合适的组件候选，会扫描全图非墙且 CanDelete 的格子，最后才退回 RandomUnusedTile。</p>
  <p>如果生成的是 Lich，会临时阻塞 Boss 格，在玩家连通区域额外放置 Lich Hunter。</p>
</section>

${renderDungeonEntityGallery([
  dungeonMonsterTile(monsterRecords, "Lich", "普通 Boss 选择到 Lich 时，会触发伴随的 Lich Hunter 放置逻辑。"),
  dungeonBuildingTile(buildingRecords, "LichHunter", "Lich Boss 生成后额外创建在玩家连通区域，不来自普通奖励名列表。")
])}

<details>
  <summary>Boss 权重</summary>
  ${renderMonsterAppearanceWeightTable(monsterCatalog, true)}
</details>

## 8. AddTraps、特殊建筑和出口

<table class="dq-data-table">
  <thead><tr><th>环节</th><th>规则</th><th>玩家实际看到的结果</th></tr></thead>
  <tbody>
    <tr><td>AddTraps</td><td>当前 build 中是空方法。</td><td>普通层不会在这里额外生成陷阱。</td></tr>
    <tr><td>AddWeirdFeature</td><td>第 2 层以后才进入特殊建筑逻辑；不是页面上 3 类均分。随机数小于 0.70 时生成祭坛，再从 6 种祭坛均匀选 1 个；0.70 到 0.85 是 MushroomPatch；0.85 以上是 Brainsucker。</td><td>这些建筑独立于普通奖励名列表，放在随机未使用格。</td></tr>
    <tr><td>LevelStart</td><td>最后在 PlayerTile 创建 LevelStart。</td><td>提供楼层开场文本，不参与地图连通、怪物、奖励或 Boss 选择。</td></tr>
    <tr><td>普通楼梯</td><td>普通层初始生成时不预放 Stair。普通 Boss 被摧毁时，Monster.Destroy 会在 Boss 所在 Tile 创建 Stair。</td><td>楼梯位置等于普通 Boss 格。</td></tr>
  </tbody>
</table>

### 特殊建筑图

${renderDungeonEntityGallery([
  dungeonBuildingTile(buildingRecords, "Altar", "特殊建筑分支合计 70%；命中后 6 种祭坛均匀选择，每种约 11.67%。"),
  dungeonBuildingTile(buildingRecords, "MushroomPatch", "特殊建筑分支 15%；完成后复制自己选择的牌。"),
  dungeonBuildingTile(buildingRecords, "Brainsucker", "特殊建筑分支 15%；按偏好结算交出的牌。")
])}

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">查看地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/rewards-and-shops">查看奖励与商店</a>
</section>

## 9. BuildLastFloor：第四层

第四层不是“第 3 层再加难度”。PopulateDungeon 发现 depth == 4 时会直接调用 BuildLastFloor，不再执行 BuildMaze、AddTaverns、AddMonsters、AddRewards、普通 Boss、AddTraps 和 AddWeirdFeature。

<table class="dq-data-table">
  <thead><tr><th>阶段</th><th>规则</th><th>结果</th></tr></thead>
  <tbody>
    <tr><td>地形</td><td>environment 固定为 LAST，贴图使用 FinalTileFloor。</td><td>不使用普通地形权重。</td></tr>
    <tr><td>墙和可见性</td><td>遍历全部 Tile，把 impassable 清为 false，并把 visible 设为 true。</td><td>第四层没有迷宫墙，也不需要探索迷雾。</td></tr>
    <tr><td>中心点</td><td>TileAt(5, 5) 是固定中心。</td><td>BuildLastFloor 在这里创建 Throne 和 FinalBoss。</td></tr>
    <tr><td>玩家位置</td><td>PlayerSprite 放到随机未使用格。</td><td>LevelStart 仍创建在玩家当前格。</td></tr>
    <tr><td>最终结算</td><td>第四层用 Throne / Claim the Throne 作为最终交互。</td><td>不生成普通向下楼梯。</td></tr>
  </tbody>
</table>

${renderDungeonEntityGallery([
  dungeonActorTile(assetLookup, "Throne", "Throne", "最终层交互对象", "", "BuildLastFloor 在中心格创建；用于最终结算入口。"),
  dungeonActorTile(assetLookup, "FinalBoss", LORD_NAME_CN, LORD_NAME_EN, "/mechanics/lord-of-the-dream", "BuildLastFloor 在中心格创建的最终 Boss。")
])}

<section class="dq-mechanic-list">
  <p><a href="/mechanics/lord-of-the-dream">Lord of the Dream</a> 使用 FinalBoss 类，不在普通 MonsterData 怪物权重表里。</p>
  <p>最终战会生成三组 BossAttr。它们控制最终 Boss 的核心规则，例如法令、贡品、选择、额外回合、抗性、毒、装备和卡组补强。</p>
  <p>Portent 的 FinalBossText 会把当前 BossAttr 转成玩家可见提示；Polymorph / Wild Shape 命中 FinalBoss 特殊分支时，会重新生成这些属性。</p>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/mechanics/lord-of-the-dream">查看 Lord 机制详解</a>
  <a class="dq-button dq-button-secondary" href="/monsters/lord-of-the-dream">查看怪物图鉴条目</a>
</section>
`;
}

function renderTerrainMonsterGuide(monsterRecords = [], assetLookup = null) {
  const sections = MONSTER_WEIGHT_ENVIRONMENTS.map(([field, location]) => {
    const terrain = DUNGEON_TERRAIN_ART_ROWS.find((row) => row.location === location);
    const normalRecords = terrainMonsterRecords(monsterRecords, field, false);
    const bossRecords = terrainMonsterRecords(monsterRecords, field, true);
    return `<section class="dq-section-block" id="${slugify(location)}">
  <h2>${escapeHtml(locationLabel(location))} / ${escapeHtml(terrain?.name || location)}</h2>
  ${renderTerrainTileWallStrip(terrain)}
  ${renderTerrainMonsterGrid(normalRecords, field, "普通怪物")}
  ${renderTerrainMonsterGrid(bossRecords, field, "Boss")}
</section>`;
  }).join("\n\n");

  return `${renderFrontmatter("地形生物", "Dream Quest 各地形可能出现的普通怪物和 Boss。")}
# 地形生物

按地形分组展示可能出现的生物。概率按同一地形、同一分组的权重归一化；点击图片进入怪物或事件详情。

<section class="dq-type-grid">
${MONSTER_WEIGHT_ENVIRONMENTS.map(([, location]) => `<a href="#${slugify(location)}"><strong>${escapeHtml(locationLabel(location))}</strong><span>${escapeHtml(DUNGEON_TERRAIN_ART_ROWS.find((row) => row.location === location)?.name || location)}</span></a>`).join("\n")}
</section>

${sections}

<section class="dq-section-block">
  <h2>额外遭遇</h2>
  ${renderTerrainCreatureGrid([
    terrainCreatureFromMonster(monsterRecords, "GoblinHoarder"),
    terrainCreatureFromMonster(monsterRecords, "MimicMonster"),
    terrainCreatureFromActor(assetLookup, "LichHunter", "Lich Hunter", "/buildings/lich-hunter"),
    terrainCreatureFromActor(assetLookup, "FinalBoss", LORD_NAME_CN, "/mechanics/lord-of-the-dream")
  ])}
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/mechanics/dungeon-generation">回到地牢生成</a>
  <a class="dq-button dq-button-secondary" href="/monsters">查看怪物图鉴</a>
</section>
`;
}

function terrainMonsterRecords(monsterRecords, field, bossOnly) {
  return monsterRecords
    .filter((record) => Boolean(record.monster.monster_data?.boss) === bossOnly)
    .filter((record) => Number(record.monster.monster_data?.environment_weights?.[field] || 0) > 0)
    .sort((a, b) => {
      const minA = Number(a.monster.monster_data?.min_level ?? 99);
      const minB = Number(b.monster.monster_data?.min_level ?? 99);
      const weightB = Number(b.monster.monster_data?.environment_weights?.[field] || 0);
      const weightA = Number(a.monster.monster_data?.environment_weights?.[field] || 0);
      return weightB - weightA || minA - minB || (a.monster.display_name || "").localeCompare(b.monster.display_name || "");
    });
}

function renderTerrainTileWallStrip(terrain) {
  if (!terrain) {
    return "";
  }
  return `<section class="dq-terrain-visual-grid">
  <div>
    <strong>Tile</strong>
    <span class="dq-terrain-swatch-row">${terrain.floor.map(([file, label]) => terrainArtSample(file, label)).join("")}</span>
  </div>
  <div>
    <strong>墙</strong>
    <span class="dq-terrain-swatch-row">${terrain.walls.length ? terrain.walls.map(([file, label]) => terrainArtSample(file, label)).join("") : '<span class="dq-muted-chip">无墙图</span>'}</span>
  </div>
</section>`;
}

function renderTerrainMonsterGrid(records, field, title) {
  if (!records.length) {
    return "";
  }
  const totalWeight = records.reduce((sum, record) => sum + Number(record.monster.monster_data?.environment_weights?.[field] || 0), 0);
  return `<h3>${escapeHtml(title)}</h3>
${renderTerrainCreatureGrid(records.map((record) => terrainCreatureFromRecord(record, field, totalWeight)))}`;
}

function terrainCreatureFromRecord(record, field, totalWeight = 0) {
  const monster = record.monster;
  const weight = Number(monster.monster_data?.environment_weights?.[field] || 0);
  return {
    href: record.href,
    image: record.image,
    title: monster.display_name || monster.class_name || monster.internal_name,
    probability: totalWeight > 0 ? percent(weight / totalWeight) : ""
  };
}

function terrainCreatureFromMonster(monsterRecords, key) {
  const record = findMonsterRecord(monsterRecords, key);
  return record ? terrainCreatureFromRecord(record) : null;
}

function terrainCreatureFromActor(assetLookup, key, title, href) {
  const image =
    assetLookup?.image("dungeon_actor", key, "/big/") ||
    assetLookup?.image("dungeon_actor", key, "/little/") ||
    "";
  return { href, image, title };
}

function renderTerrainCreatureGrid(items) {
  const entries = items.filter(Boolean);
  if (!entries.length) {
    return "";
  }
  return `<section class="dq-creature-grid">
${entries.map(renderTerrainCreatureTile).join("\n")}
</section>`;
}

function renderTerrainCreatureTile(item) {
  const tag = item.href ? "a" : "span";
  const href = item.href ? ` href="${escapeHtml(item.href)}"` : "";
  return `<${tag} class="dq-creature-tile"${href}>
  <span class="dq-creature-art">${item.image ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">` : ""}</span>
  <strong>${escapeHtml(item.title)}</strong>
  ${item.probability ? `<small>${escapeHtml(item.probability)}</small>` : ""}
</${tag}>`;
}

function renderRewardsAndShopsGuide(dungeonGeneration, assetLookup) {
  const images = rewardGuideImages(assetLookup);
  return `${renderFrontmatter("奖励、宝箱与商店", "Dream Quest 宝箱、商店和奖励卡生成规则。")}
${renderRewardsPageHero(images)}

## 每层奖励列表

<p class="dq-note">这里说的是地牢地图上生成的奖励点。它们和“怪物击杀奖励”是两条不同流程：地图奖励先生成、再摆放；击杀奖励在战斗胜利后结算。</p>

${renderDungeonRewardFlow(images)}

${renderRewardNameProbabilityTable(dungeonGeneration)}

${renderMonsterKillRewardGuide(assetLookup)}

## 成就和难度后处理

<table class="dq-data-table">
  <thead><tr><th>条件</th><th>额外奖励</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>DRAGON1</td><td>${rewardIconHeading(images.chest, "TreasureChest x1", "每层额外宝箱")}</td><td>成就奖励：每层额外发现一个宝箱。</td></tr>
    <tr><td>STEPS1</td><td>${rewardIconHeading(images.health, "HealthPack x1", "每层额外治疗包")}</td><td>成就奖励：每层额外发现一个治疗包。</td></tr>
    <tr><td>Grizzly Bear</td><td>${rewardIconHeading(images.health, "HealthPack x1", "默认难度补充")}</td><td>默认难度后处理。</td></tr>
    <tr><td>Kitten</td><td>${rewardIconHeading(images.health, "HealingPool x1", "加 TreasureChest x1")}</td><td>低难度补偿：额外 HealingPool 和 TreasureChest，但不能获得成就点。</td></tr>
  </tbody>
</table>

## 宝箱

<table class="dq-data-table">
  <thead><tr><th>步骤</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td>${rewardIconHeading(images.chest, "件数", "Item Count")}</td><td>普通宝箱先决定数量：1 件约 85%，2 件约 13%，3 件约 2%。</td></tr>
    <tr><td>${rewardIconHeading(images.card, "第一件", "First Item")}</td><td>第一件必定调用 CardFinder 抽卡。</td></tr>
    <tr><td>${rewardIconHeading(images.gold, "后续件", "Extra Items")}</td><td>第二、三件各自判断：45% 转金币，55% 再抽卡。</td></tr>
    <tr><td>顺序</td><td>生成完全部 loot 后，用 Utility.Shuffle 洗牌。</td></tr>
  </tbody>
</table>

## 商店

<table class="dq-data-table">
  <thead><tr><th>项目</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td>${rewardIconHeading(images.shop, "商品档位", "Slots")}</td><td>商店固定构造 1、3、5 三个商品档位。</td></tr>
    <tr><td>${rewardIconHeading(images.card, "抽卡入口", "CardFinder")}</td><td>每个档位调用 CardFinder，minAffinity 为 0。</td></tr>
    <tr><td>重复处理</td><td>重复商品会重抽；商品列表最后洗牌。</td></tr>
    <tr><td>价格特殊</td><td>Master Thief 天赋会让商店物品免费。</td></tr>
  </tbody>
</table>
`;
}

function renderMonstersOverview(monsterRecords, summary = {}, monsterBridgeById = new Map(), assetLookup, snapshotRows = []) {
  const locations = [...new Set(monsterRecords.flatMap((record) => monsterLocations(record.monster)))].sort();
  const tagOptions = [
    { value: "behavior", label: "有特殊机制", extra: 1 },
    { value: "levelup", label: "有等级变化" },
    { value: "equipment", label: "有起手装备" },
    { value: "special-cards", label: "有关联卡牌", extra: 1 },
    { value: "clone", label: "复制牌组" },
    { value: "final-boss", label: "最终 Boss", extra: 1 }
  ].map((option) => ({
    ...option,
    count: monsterRecords.filter((record) => monsterTags(record.monster, monsterBridgeForRecord(record, monsterBridgeById)).includes(option.value)).length + (option.extra || 0)
  }));
  const bossCount = summary.monster_type_counts?.boss ?? monsterRecords.filter((record) => record.monster.monster_data?.boss).length;
  const normalCount = summary.monster_type_counts?.normal ?? monsterRecords.length - bossCount;
  const levelUpCount = monsterRecords.filter((record) => hasMeaningfulLevelUp(record.monster)).length;
  const behaviorCount = monsterRecords.filter((record) => hasMonsterBehavior(record.monster)).length;
  const deckCount = summary.monsters_with_base_deck ?? monsterRecords.filter((record) => record.monster.build_attributes?.base_deck?.length).length;
  const finalBossImage = assetLookup?.image("dungeon_actor", "FinalBoss", "/big/") || "";
  const finalBossTile = renderFinalBossMonsterTile(finalBossImage);

  return `${renderFrontmatter("怪物图鉴", "按标签、地形、等级和机制检索 Dream Quest 怪物。")}
${renderMonsterFilterScript()}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Monsters</p>
    <h1>怪物图鉴</h1>
    <p class="dq-lede">按地形、等级、Boss、机制和牌组信息检索敌人。点击怪物进入详情页，查看 metadata、技能机制、特殊卡牌、卡组和等级变化。</p>
  </div>
  <span class="dq-count">${monsterRecords.length + 1} 个怪物</span>
</section>

<section class="dq-type-grid dq-monster-stat-grid">
  <span><strong>${monsterRecords.length + 1}</strong><em>全部怪物</em></span>
  <span><strong>${normalCount}</strong><em>普通怪物</em></span>
  <span><strong>${bossCount + 1}</strong><em>Boss</em></span>
  <span><strong>${deckCount + 1}</strong><em>有基础牌组</em></span>
  <span><strong>${levelUpCount}</strong><em>有等级变化</em></span>
  <span><strong>${behaviorCount + 1}</strong><em>有特殊机制</em></span>
</section>

<section class="dq-callout">
  <strong>等级快照已接入</strong>
  <span>每个怪物页会显示该怪物各等级的 HP、蓝、最低等级卡组和后续增量关键牌；完整 ${escapeHtml(snapshotRows.length)} 行快照和 TSV 下载在 <a href="/mechanics/monster-level-snapshots">怪物等级快照</a>。</span>
</section>

<section class="dq-card-filter dq-monster-filter" data-monster-filter>
  <div class="dq-filter-bar">
    <label class="dq-filter-field dq-filter-field-search">
      <span>检索</span>
      <input id="dq-monster-search" type="search" autocomplete="off" placeholder="怪物名、地形、卡牌、机制" data-monster-search-input>
    </label>
    <label class="dq-filter-field">
      <span>类型</span>
      <select data-monster-kind-filter>
        <option value="">全部类型</option>
        <option value="normal">普通 · ${normalCount}</option>
        <option value="boss">Boss · ${bossCount + 1}</option>
      </select>
    </label>
    <label class="dq-filter-field">
      <span>地形</span>
      <select data-monster-location-filter>
        <option value="">全部地形</option>
        ${locations
          .map((location) => {
            const count = monsterRecords.filter((record) => monsterLocations(record.monster).includes(location)).length;
            return `<option value="${escapeHtml(location)}">${escapeHtml(locationLabel(location))} · ${count}</option>`;
          })
          .join("\n")}
      </select>
    </label>
    <label class="dq-filter-field">
      <span>等级</span>
      <select data-monster-level-filter>
        <option value="">全部等级</option>
        <option value="low">低阶 1-3</option>
        <option value="mid">中阶 4-6</option>
        <option value="high">高阶 7-10</option>
      </select>
    </label>
    <label class="dq-filter-field">
      <span>标签</span>
      <select data-monster-tag-filter>
        <option value="">全部标签</option>
        ${tagOptions
          .filter((option) => option.count)
          .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)} · ${option.count}</option>`)
          .join("\n")}
      </select>
    </label>
  </div>
  <div class="dq-filter-summary">
    <span><strong data-monster-result-count>${monsterRecords.length + 1}</strong> 个匹配</span>
    <button type="button" data-monster-filter-reset>重置</button>
  </div>
</section>

<section class="dq-card-grid dq-card-grid-compact dq-monster-grid" data-monster-catalog>
${finalBossTile}
${monsterRecords.map((record) => renderMonsterTile(record, monsterBridgeForRecord(record, monsterBridgeById))).join("\n")}
<p class="dq-card-empty" data-monster-empty hidden>没有符合条件的怪物。</p>
</section>
`;
}

function renderMonsterFilterScript() {
  return `<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const catalog = document.querySelector('[data-monster-catalog]');
  const filter = document.querySelector('[data-monster-filter]');
  if (!catalog || !filter) {
    return;
  }

  const searchInput = filter.querySelector('[data-monster-search-input]');
  const kindFilter = filter.querySelector('[data-monster-kind-filter]');
  const locationFilter = filter.querySelector('[data-monster-location-filter]');
  const levelFilter = filter.querySelector('[data-monster-level-filter]');
  const tagFilter = filter.querySelector('[data-monster-tag-filter]');
  const resetButton = filter.querySelector('[data-monster-filter-reset]');
  const resultCount = filter.querySelector('[data-monster-result-count]');
  const emptyState = catalog.querySelector('[data-monster-empty]');
  const tiles = Array.from(catalog.querySelectorAll('[data-monster-tile]'));

  const normalize = (value) => String(value || '').trim().toLowerCase();
  const splitValues = (value) => String(value || '').split(' ').filter(Boolean);
  const update = () => {
    const query = normalize(searchInput?.value);
    const kindValue = kindFilter?.value || '';
    const locationValue = locationFilter?.value || '';
    const levelValue = levelFilter?.value || '';
    const tagValue = tagFilter?.value || '';
    let visibleTotal = 0;

    for (const tile of tiles) {
      const matchesQuery = !query || normalize(tile.dataset.monsterSearch).includes(query);
      const matchesKind = !kindValue || tile.dataset.monsterKind === kindValue;
      const matchesLocation = !locationValue || splitValues(tile.dataset.monsterLocations).includes(locationValue);
      const matchesLevel = !levelValue || splitValues(tile.dataset.monsterLevels).includes(levelValue);
      const matchesTag = !tagValue || splitValues(tile.dataset.monsterTags).includes(tagValue);
      const visible = matchesQuery && matchesKind && matchesLocation && matchesLevel && matchesTag;
      tile.hidden = !visible;
      visibleTotal += visible ? 1 : 0;
    }

    if (resultCount) {
      resultCount.textContent = String(visibleTotal);
    }
    if (emptyState) {
      emptyState.hidden = visibleTotal !== 0;
    }
  };

  for (const control of [searchInput, kindFilter, locationFilter, levelFilter, tagFilter]) {
    control?.addEventListener('input', update);
    control?.addEventListener('change', update);
  }
  resetButton?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (kindFilter) kindFilter.value = '';
    if (locationFilter) locationFilter.value = '';
    if (levelFilter) levelFilter.value = '';
    if (tagFilter) tagFilter.value = '';
    update();
    searchInput?.focus();
  });

  update();
});
</script>`;
}

function renderFinalBossMonsterTile(finalBossImage) {
  const cn = MONSTER_NAME_CN.FinalBoss || "梦境之主";
  const en = "Lord of the Dream";
  return `<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/lord-of-the-dream" data-monster-tile data-monster-kind="boss" data-monster-locations="" data-monster-levels="high" data-monster-tags="behavior special-cards final-boss" data-monster-search="${escapeHtml(`${cn} ${en} finalboss 最终 boss bossattr decree gifts choices lordlydecrees`)}">
  <span class="dq-monster-thumb">${finalBossImage ? `<img src="${finalBossImage}" alt="${escapeHtml(cn)}" loading="lazy">` : ""}</span>
  <span class="dq-card-copy">
    <strong>${escapeHtml(cn)}</strong>
    <small>${escapeHtml(en)} · 10 级 · Boss · 最终战</small>
    <span class="dq-mini-tag-row"><em>最终 Boss</em><em>特殊机制</em><em>关联卡牌</em></span>
    <span>FinalBoss 类；详细 BossAttr、王令、贡品和惩罚机制见机制专题。</span>
  </span>
</a>`;
}

function renderMonsterTile(record, bridge) {
  const monster = record.monster;
  const attrs = monster.build_attributes || {};
  const data = monster.monster_data || {};
  const kind = data.boss || attrs.boss ? "boss" : "normal";
  const tags = monsterTags(monster, bridge);
  const locations = monsterLocations(monster);
  const status = monsterStatusLabel(monster);
  const powers = compactText(monsterPowerText(monster), 82);
  return `<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="${record.href}" data-monster-tile data-monster-kind="${kind}" data-monster-locations="${escapeHtml(locations.join(" "))}" data-monster-levels="${escapeHtml(monsterLevelBands(monster).join(" "))}" data-monster-tags="${escapeHtml(tags.join(" "))}" data-monster-search="${escapeHtml(monsterSearchText(record, bridge))}">
  <span class="dq-monster-thumb">${record.image ? `<img src="${record.image}" alt="${escapeHtml(monster.display_name)}" loading="lazy">` : ""}</span>
  <span class="dq-card-copy">
    <strong>${escapeHtml(monster.display_name || monster.class_name)}</strong>
    <small>${escapeHtml(originalDisplayName(monster))} · ${escapeHtml(monsterLevelRange(monster))} · ${kind === "boss" ? "Boss" : "普通"} · ${escapeHtml(status)}</small>
    <span class="dq-mini-tag-row">${locations.slice(0, 3).map((location) => `<em>${escapeHtml(locationLabel(location))}</em>`).join("\n")}${tags.slice(0, 2).map((tag) => `<em>${escapeHtml(monsterTagLabel(tag))}</em>`).join("\n")}</span>
    <span>${escapeHtml(powers)}</span>
  </span>
</a>`;
}

function renderMonsterPage({ record, cardById, bridge, snapshots = [] }) {
  const monster = record.monster;
  const title = monster.display_name || monster.class_name || monster.internal_name;
  const data = monster.monster_data || {};
  const attrs = monster.build_attributes || {};
  const locations = monsterLocations(monster);

  return `${renderFrontmatter(title, compactText(monsterGeneratedSummary(monster), 150))}
<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · ${escapeHtml(monsterLevelRange(monster))}</p>
    <h1>${escapeHtml(title)}</h1>
    ${bilingualOriginalLine(monster)}
    <p class="dq-lede">${escapeHtml(monsterGeneratedSummary(monster))}</p>
    <div class="dq-tag-row">
      <span>${data.boss || attrs.boss ? "Boss" : "普通怪物"}</span>
      <span>${escapeHtml(monsterStatusLabel(monster))}</span>
      ${locations.map((location) => `<span>${escapeHtml(locationLabel(location))}</span>`).join("\n")}
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    ${record.image ? `<img src="${record.image}" alt="${escapeHtml(title)}" loading="lazy">` : ""}
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  ${renderMetaGrid(monsterMetadataItems(monster))}
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  ${renderMonsterMechanicNotes(monster, bridge, cardById)}
</section>

${renderGenieWishSection(monster, cardById)}

<section class="dq-section-block">
  <h2>等级变化</h2>
  ${renderMonsterLevelRules(monster, cardById)}
</section>

${renderMonsterSnapshotSection(record, snapshots, cardById)}

<section class="dq-section-block">
  <h2>卡牌</h2>
  ${renderMonsterCardSection(monster, bridge, cardById)}
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
`;
}

function renderLordSimpleTable(title, headers, rows) {
  return `<section class="dq-section-block">
  <h2>${escapeHtml(title)}</h2>
  <table class="dq-data-table">
    <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
    <tbody>
${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
}

function renderLordFinalBossFlow(cardById) {
  return `<section class="dq-section-block">
  <h2>FinalBoss 全流程</h2>
  <table class="dq-data-table">
    <thead><tr><th>阶段</th><th>玩家需要知道</th></tr></thead>
    <tbody>
${LORD_FINALBOSS_FLOW_ROWS.map(([stage, detail]) => {
  const suffix = stage === "装备破坏压力" ? ` ${renderMonsterInlineCard("CrushAll", cardById)}` : "";
  return `<tr><td>${escapeHtml(stage)}</td><td>${escapeHtml(detail)}${suffix}</td></tr>`;
}).join("\n")}
    </tbody>
  </table>
</section>`;
}

function renderLordPolymorphSection() {
  return `<section class="dq-section-block">
  <h2>变形后的能力变化规律</h2>
  <p class="dq-note">把 Lord 的能力看成三格：第一格是规则压力，第二格是抗性 / 节奏，第三格是攻击附加。Polymorph 和 Wild Shape 命中 Lord 时，先读第一格，再按下表重新写入三格能力。</p>
  <p class="dq-note">读法：只看左边“当前第一组”。第二组和第三组原本是什么，不参与分支判断；它们会直接按表中的候选重新抽。改写后，后续 Portent、楼层入口文本和最终战都读取新结果。</p>
  <table class="dq-data-table">
    <thead><tr><th>当前第一组</th><th>变形后第一组</th><th>变形后第二组</th><th>变形后第三组</th></tr></thead>
    <tbody>
${LORD_POLYMORPH_CHANGE_ROWS.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
  <p class="dq-note">例子：如果当前第一组是死亡选择，变形后第一组只会在王令和卡牌衰变之间产生；同时第二组在物理抗性 / 元素抗性 / 压缩时间中重抽，第三组在吸血 / 穿透 / 中毒中重抽。</p>
</section>`;
}

function renderLordSpecialInteractions(cardById) {
  const cards = ["FinalFortune", "ZombieBite"].map((token) => renderMonsterInlineCard(token, cardById)).join("");
  return `<section class="dq-section-block">
  <h2>特殊交互</h2>
  <p class="dq-note">Assassin 的 Murder 不能选中 Lord。Last Chance 如果作为贡品交给 Lord，之后由 Lord 自己打出，会给 Lord 自己挂上延迟死亡；Zombie Bite 对 Lord 生效，感染到期也会让 Lord 死亡。这两类死亡通常会按赢下最终战处理，但 Lord 的金币和经验仍为 0，也不会增加最终 Boss 伤害统计，因此不能靠它们本身完成 Dream Master / 击杀 Lord 成就。</p>
  <div class="dq-card-chip-row">${cards}</div>
</section>`;
}

function renderLordEntryTextSection() {
  return `<section class="dq-section-block">
  <h2>楼层入口文本暗示</h2>
  <p class="dq-note">普通前三层的进入文本会在末尾追加 “Beware the Lord of the Dream. He has ...” 这段警告。警告中的三句分别来自三组 BossAttr；第四层进入时改为最终王座文本，不再用这段暗示。</p>
  <table class="dq-data-table">
    <thead><tr><th>英文原句</th><th>对应能力</th><th>含义</th></tr></thead>
    <tbody>
${LORD_ENTRY_TEXT_ROWS.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
}

function renderLordAttributeTable() {
  return `<section class="dq-section-block">
  <h2>BossAttr 玩家可见效果</h2>
  <table class="dq-data-table">
    <thead><tr><th>能力</th><th>Portent 提示</th><th>入口文本暗示</th><th>玩家可见效果</th></tr></thead>
    <tbody>
${LORD_BOSS_ATTR_ROWS.map((row) => `<tr>
  <td><strong>${escapeHtml(row.name)}</strong><br><small><code>${escapeHtml(row.enumId)} · ${escapeHtml(row.id)}</code> · ${escapeHtml(row.group)}</small></td>
  <td>${escapeHtml(row.prompt)}</td>
  <td>${escapeHtml(row.hint)}</td>
  <td>${escapeHtml(row.visible)}</td>
</tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
}

function renderLordChoicePenaltyTable(cardById) {
  return `<section class="dq-section-block">
  <h2>CHOICES · Pick Your Poison</h2>
  <p class="dq-note">CHOICES 不会把所有 Penalty 类都放进选择池。FinalBoss.EvilChoices 明确构造下面 8 个候选，再随机抽取 5 个展示给玩家；玩家选择后 HearWishChoice 把所选项交给选择窗口结算。</p>
  <table class="dq-data-table">
    <thead><tr><th>惩罚牌</th><th>按钮文本</th><th>结算效果</th></tr></thead>
    <tbody>
${LORD_EVIL_CHOICE_ROWS.map(([token, label, effect]) => `<tr>
  <td>${renderMonsterInlineCard(token, cardById)}</td>
  <td>${escapeHtml(label)}</td>
  <td>${escapeHtml(effect)}</td>
</tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
}

function uniqueCardRecords(cardById) {
  return [...new Map([...cardById.values()].map((record) => [record.slug, record])).values()];
}

function renderLordDecayChainCard(record) {
  if (!record) {
    return `<span class="dq-decay-chain-empty">-</span>`;
  }
  const card = record.card;
  return `<a class="dq-decay-chain-card" href="${escapeHtml(record.href)}">
  <span class="dq-decay-chain-art">${renderCardFrame(record, "thumb")}</span>
  <strong>${escapeHtml(card.display_name || card.class_name || record.slug)}</strong>
  <small>${escapeHtml(typeLabel(card))} · ${escapeHtml(card.costs_and_stats?.tier ?? "-")} 阶</small>
</a>`;
}

function buildLordDecayChains(cardById) {
  const records = uniqueCardRecords(cardById);
  const explicitRecords = records.filter((record) => Boolean(record.card?.text?.decay_to));
  const targetSlugs = new Set(
    explicitRecords
      .map((record) => cardRecordFromToken(cardById, record.card.text.decay_to))
      .filter(Boolean)
      .map((record) => record.slug)
  );
  const roots = explicitRecords
    .filter((record) => !targetSlugs.has(record.slug))
    .sort((a, b) => {
      const nameA = a.card.display_name || a.card.class_name || a.slug;
      const nameB = b.card.display_name || b.card.class_name || b.slug;
      return nameA.localeCompare(nameB);
    });
  const chains = [];
  const covered = new Set();
  for (const root of roots) {
    const chain = [];
    const seen = new Set();
    let current = root;
    while (current && !seen.has(current.slug)) {
      seen.add(current.slug);
      covered.add(current.slug);
      chain.push(current);
      const target = current.card?.text?.decay_to;
      if (!target) {
        break;
      }
      current = cardRecordFromToken(cardById, target);
    }
    if (chain.length > 1) {
      chains.push(chain);
    }
  }
  for (const record of explicitRecords) {
    if (covered.has(record.slug)) {
      continue;
    }
    const chain = [];
    const seen = new Set();
    let current = record;
    while (current && !seen.has(current.slug)) {
      seen.add(current.slug);
      chain.push(current);
      const target = current.card?.text?.decay_to;
      if (!target) {
        break;
      }
      current = cardRecordFromToken(cardById, target);
    }
    if (chain.length > 1) {
      chains.push(chain);
    }
  }
  return chains;
}

function renderLordDecayDefaultTargetTable(cardById) {
  return `<section class="dq-section-block">
  <h2>CARD_DECAY · 默认衰变目标</h2>
  <p class="dq-note">如果一张牌自己的 metadata 里有 DecayTo，就优先使用那个目标；没有明确 DecayTo 时，再按下面的基础类别退化。</p>
  <table class="dq-data-table dq-decay-default-table">
    <thead><tr><th>牌的情况</th><th>默认目标</th><th>说明</th></tr></thead>
    <tbody>
${LORD_DECAY_DEFAULT_TARGET_ROWS.map(([label, token, note]) => `<tr>
  <td>${escapeHtml(label)}</td>
  <td>${renderLordDecayChainCard(cardRecordFromToken(cardById, token))}</td>
  <td>${escapeHtml(note)}</td>
</tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
}

function renderLordDecayChainTable(cardById) {
  const chains = buildLordDecayChains(cardById);
  if (!chains.length) {
    return "";
  }
  const maxLength = Math.max(...chains.map((chain) => chain.length));
  const headers = ["起始牌", ...Array.from({ length: maxLength - 1 }, (_, index) => `衰变 ${index + 1}`)];
  return `<section class="dq-section-block">
  <h2>CARD_DECAY · 显式衰变链</h2>
  <p class="dq-note">下表只列出 metadata 里有明确 DecayTo 的卡牌链。读法是从左到右：本次随机判定成功后，牌库里的那张牌会被替换成右侧下一列。</p>
  <table class="dq-data-table dq-decay-chain-table">
    <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
    <tbody>
${chains.map((chain) => `<tr>${headers.map((_, index) => `<td>${renderLordDecayChainCard(chain[index])}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
</section>`;
}

function renderLordCardGroup(title, tokens, cardById) {
  return `<section class="dq-section-block">
  <h2>${escapeHtml(title)}</h2>
  <div class="dq-profession-card-grid dq-effect-card-grid">
${tokens
  .map((token) => {
    const record = cardRecordFromToken(cardById, token);
    if (record) {
      return renderProfessionCardLink(record, cardMetaLine(record.card), "dq-effect-card-entry");
    }
    return renderMonsterInlineCard(token, cardById);
  })
  .join("\n")}
  </div>
</section>`;
}

function renderLordDeckGenerationSection(cardById) {
  return `<section class="dq-section-block">
  <h2>基础牌组生成</h2>
  <p class="dq-note">Lord 的基础牌组不是固定 6 张核心牌加随机牌。那 6 张牌只是从随机候选池里排除。实际生成顺序是：先抽 20 张非奖励随机牌，再补 20 张随机 Attack，合计 40 张。</p>
  <table class="dq-data-table">
    <thead><tr><th>步骤</th><th>规则</th></tr></thead>
    <tbody>
      <tr><td>卡组大小</td><td>Lord 的基础战斗牌组生成 40 张牌。若界面显示的是剩余抽牌堆，开局已有手牌离开牌堆后会看到 38 张。</td></tr>
      <tr><td>1. 排除 6 张牌</td><td>Healing Potion、Phoenix Feather、Rush、Last Chance、Electrocute、Storm 不进入前半段随机池。它们不是 Lord 的固定牌，也不会作为这一步的候选牌被抽到。</td></tr>
      <tr><td>2. 建立前半段随机池</td><td>从全卡表里保留普通可用的非奖励牌：不是 HasNever，金币值不为负，没有动态金币，并且不在上面 6 张排除名单里。</td></tr>
      <tr><td>3. 抽 20 张非奖励牌</td><td>Lord 从这个候选池里抽 20 张，每抽到一张就从候选池移除一次，所以这 20 张是不放回抽取，不会在这一段重复。</td></tr>
      <tr><td>4. 补 20 张 Attack</td><td>后 20 张每张单独随机为 Attack1、Attack2、Attack3 或 Attack4；这一段可以重复。</td></tr>
      <tr><td>最终写入</td><td>40 格列表写回 Lord 的牌组字段，随后 FinalBoss 把法力写成 40。战斗初始化时再按正常牌组流程洗牌、抽起手牌。</td></tr>
      <tr><td>Crush Everything</td><td>达到 10、20、30……全局回合阈值后，Lord 回合开始会对 Lord 侧调用 DrawExNihil 生成 Crush Everything。</td></tr>
      <tr><td>起手流程</td><td>PreferredStartingCards 返回空列表；起手牌来自已构造并洗好的牌组。</td></tr>
      <tr><td>重装装备</td><td>抽到 SUPER_EQUIPPED / Well-armored 属性时，StartingEquipment 返回 Boots of Speed、Celestial Plate、Donnerschwert、Jasra's Tome。</td></tr>
    </tbody>
  </table>
</section>

${renderLordCardGroup("不会进入前半段随机池的 6 张卡", LORD_RANDOM_DECK_EXCLUDED_TOKENS, cardById)}

${renderLordCardGroup("Lord 基础牌组：随机攻击候选", LORD_ATTACK_FILLER_TOKENS, cardById)}

${renderLordCardGroup("SUPER_EQUIPPED 起手装备", LORD_EQUIPMENT_TOKENS, cardById)}

${renderLordCardGroup("阈值与惩罚机制相关牌", [
  "CrushAll",
  ...LORD_PENALTY_TOKENS
], cardById)}`;
}

function renderLordBaseInfoSection() {
  return `<section class="dq-wide-panel">
  <h2>Lord 基础属性</h2>
  ${renderMetaGrid([
    { label: "内部类", value: "FinalBoss", tip: "最终 Boss 的运行时类名，不走普通 MonsterData 怪物表。" },
    { label: "中文名", value: LORD_NAME_CN, tip: "wiki 中使用的统一中文名称。" },
    { label: "英文名", value: LORD_NAME_EN, tip: "最终 Boss 的战斗显示名。" },
    { label: "内部名称", value: "FinalBoss", tip: "地牢第四层创建最终 Boss 时使用的内部名称。" },
    { label: "等级", value: "10", tip: "FinalBoss.BuildAttributes 固定写入的 level。" },
    { label: "生命", value: "1000", tip: "FinalBoss.BuildAttributes 固定写入的 health。" },
    { label: "行动点", value: "5", tip: "FinalBoss.BuildAttributes 固定写入的 actions。" },
    { label: "每回合抽牌", value: "5", tip: "FinalBoss.BuildAttributes 固定写入的 cards。" },
    { label: "法力", value: "40", tip: "基础牌组构造结束后固定写入的 mana。" },
    { label: "基础牌组", value: "40 张", tip: "先从排除 6 张指定牌后的非奖励卡池里不放回抽 20 张，再追加 20 张随机 Attack1-4。" },
    { label: "金币 / 经验", value: "0 / 0", tip: "最终 Boss 的奖励字段固定为 0；即使特殊死亡进入击杀结算，传给玩家的经验仍是 0。" },
    { label: "玩家逃跑", value: "可以逃离", tip: "Flee 卡和 Flee 能力会调用 Game.Escape；这个流程没有检查 FinalBoss.CanFleeFrom。" }
  ])}
  </section>`;
}

function renderLordSectionLinks() {
  return `<section class="dq-section-block">
  <h2>专题入口</h2>
  <div class="dq-link-grid dq-link-grid-four">
${LORD_SECTION_LINKS.map((item) => `<a href="${escapeHtml(item.href)}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.summary)}</span></a>`).join("\n")}
  </div>
</section>`;
}

function renderLordSubpageHeader(title, description) {
  return `<section class="dq-wide-panel">
  <p class="dq-kicker">${escapeHtml(LORD_NAME_CN)} · ${escapeHtml(LORD_NAME_EN)}</p>
  <h1>${escapeHtml(title)}</h1>
  <p class="dq-lede">${escapeHtml(description)}</p>
  <div class="dq-action-row">
    <a class="dq-button" href="/mechanics/lord-of-the-dream">${escapeHtml(LORD_NAME_CN)}总览</a>
    <a class="dq-button dq-button-secondary" href="/monsters/lord-of-the-dream">怪物图鉴条目</a>
  </div>
</section>`;
}

function renderLordSubpage(title, description, body) {
  return `${renderFrontmatter(title, description)}
${renderLordSubpageHeader(title, description)}

${body}
`;
}

function renderLordFinalBossPage({ cardById }) {
  return renderLordSubpage(
    `${LORD_NAME_CN}：FinalBoss 全流程`,
    "第四层进入、基础属性、开战数值、Crush Everything 阈值和最终战整体顺序。",
    `${renderLordBaseInfoSection()}

${renderLordFinalBossFlow(cardById)}`
  );
}

function renderLordBossAttrPage() {
  return renderLordSubpage(
    `${LORD_NAME_CN}：BossAttr 与楼层暗示`,
    "三组 BossAttr、Portent 提示、楼层入口文本、玩家可见效果和变形后的能力改写。",
    `${renderLordSimpleTable("BossAttr 三组能力", ["组别", "候选", "用途"], LORD_BOSS_ATTR_GENERATION_ROWS)}

${renderLordEntryTextSection()}

${renderLordAttributeTable()}

${renderLordSimpleTable("BossAttr 具体效果汇总", ["类型", "具体效果"], LORD_BOSS_ATTR_EFFECT_SUMMARY_ROWS)}

${renderLordPolymorphSection()}`
  );
}

function renderLordCardDecayPage({ cardById }) {
  return renderLordSubpage(
    `${LORD_NAME_CN}：卡牌衰变`,
    "Your cards decay 的触发条件、50% 随机判定、默认衰变目标和完整卡图衰变链。",
    `${renderLordSimpleTable("CARD_DECAY · 卡牌衰变触发检查", ["检查", "通过条件", "未通过 / 实际结果"], LORD_DECAY_RULE_ROWS)}

${renderLordDecayDefaultTargetTable(cardById)}

${renderLordDecayChainTable(cardById)}`
  );
}

function renderLordRulesPage({ cardById }) {
  return renderLordSubpage(
    `${LORD_NAME_CN}：王令、贡品与死亡选择`,
    "LordlyDecrees、Requires gifts、Pick Your Poison 的实际结算和对应惩罚牌。",
    `${renderLordSimpleTable("DECREE · LordlyDecrees", ["环节", "玩家需要知道"], LORD_DECREE_RULE_ROWS)}

${renderLordSimpleTable("GIFTS · 贡品动作", ["环节", "玩家需要知道"], LORD_GIFT_FLOW_ROWS)}

${renderLordChoicePenaltyTable(cardById)}`
  );
}

function renderLordDeckAndInteractionsPage({ cardById }) {
  return renderLordSubpage(
    `${LORD_NAME_CN}：牌组与特殊交互`,
    "基础牌组生成、随机候选池、起手装备、特殊死亡交互和最终战相关卡牌。",
    `${renderLordSpecialInteractions(cardById)}

${renderLordDeckGenerationSection(cardById)}`
  );
}

function renderLordMechanicsPage({ cardById, assetLookup }) {
  const image = assetLookup?.image("dungeon_actor", "FinalBoss", "/big/") || "";
  return `${renderFrontmatter(LORD_NAME_CN, "Dream Quest 最终 Boss 机制、BossAttr、贡品、王令和特殊卡牌。")}
<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Final Boss · FinalBoss</p>
    <h1>${escapeHtml(LORD_NAME_CN)}</h1>
    <span class="dq-original">原名：${escapeHtml(LORD_NAME_EN)}</span>
    <p class="dq-lede">最终 Boss 不走普通怪物目录里的 MonsterData 条目，而是使用 FinalBoss 类和 Dungeon.BossAttributes 生成三组特殊能力。Portent 能提前读出这些能力。</p>
    <div class="dq-tag-row">
      <span>最终战</span>
      <span>独立 BossAttr</span>
      <span>非普通 MonsterData</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    ${image ? `<img src="${image}" alt="${escapeHtml(LORD_NAME_CN)}" loading="lazy">` : ""}
  </div>
</section>

${renderLordBaseInfoSection()}

${renderLordSectionLinks()}

<section class="dq-action-row">
  <a class="dq-button" href="/monsters/lord-of-the-dream">查看怪物图鉴条目</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
`;
}

function renderLordMonsterEntryPage({ assetLookup }) {
  const image = assetLookup?.image("dungeon_actor", "FinalBoss", "/big/") || "";
  return `${renderFrontmatter(LORD_NAME_CN, "Dream Quest 最终 Boss 怪物图鉴入口。")}
<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · Final Boss</p>
    <h1>${escapeHtml(LORD_NAME_CN)}</h1>
    <span class="dq-original">原名：${escapeHtml(LORD_NAME_EN)}</span>
    <p class="dq-lede">最终 Boss 不在普通 MonsterData 怪物权重表里。完整三组能力、楼层文本暗示、王令、贡品和最终战惩罚解析放在机制专题页。</p>
    <div class="dq-tag-row">
      <span>10 级</span>
      <span>最终战</span>
      <span>特殊机制</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    ${image ? `<img src="${image}" alt="${escapeHtml(LORD_NAME_CN)}" loading="lazy">` : ""}
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  ${renderMetaGrid([
    { label: "内部类", value: "FinalBoss", tip: "最终 Boss 的运行时类名。" },
    { label: "中文名", value: LORD_NAME_CN, tip: "wiki 中使用的统一中文名称。" },
    { label: "英文名", value: LORD_NAME_EN, tip: "最终 Boss 的战斗显示名。" },
    { label: "等级", value: "10", tip: "FinalBoss.BuildAttributes 固定写入。" },
    { label: "生命", value: "1000", tip: "FinalBoss.BuildAttributes 固定写入。" },
    { label: "行动点", value: "5", tip: "FinalBoss.BuildAttributes 固定写入。" },
    { label: "每回合抽牌", value: "5", tip: "FinalBoss.BuildAttributes 固定写入。" },
    { label: "法力", value: "40", tip: "FinalBoss.BuildAttributes 固定写入。" },
    { label: "普通权重表", value: "不参与", tip: "Lord 不走普通 MonsterData 选择权重。" }
  ])}
</section>

<section class="dq-section-block">
  <h2>机制入口</h2>
  <p>Lord 的关键内容不是普通怪物 metadata，而是第四层最终战、三组随机能力、楼层入口文本暗示、王令、贡品、Pick Your Poison 和装备破坏压力。</p>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/mechanics/lord-of-the-dream">查看 Lord 机制详解</a>
  <a class="dq-button dq-button-secondary" href="/monsters">回到怪物图鉴</a>
</section>
`;
}

function buildMonsterBridgeMap(monsterDeckBridge) {
  const map = new Map();
  for (const item of monsterDeckBridge.monster_cases || []) {
    for (const key of [item.monster, item.display_name]) {
      if (key) {
        map.set(slugify(key), item);
      }
    }
  }
  return map;
}

function monsterBridgeForRecord(record, monsterBridgeById) {
  for (const key of [record.monster.internal_name, record.monster.class_name, record.monster.display_name, record.slug]) {
    const bridge = monsterBridgeById.get(slugify(key));
    if (bridge) {
      return bridge;
    }
  }
  return null;
}

function monsterLocations(monster) {
  return [...new Set(monster.monster_data?.locations || [])].filter(Boolean);
}

function locationLabel(location) {
  return MONSTER_LOCATION_LABELS[location] || location;
}

function monsterLevelRange(monster) {
  const data = monster.monster_data || {};
  const min = data.min_level ?? monster.build_attributes?.level;
  const max = data.max_level ?? min;
  if (min == null && max == null) {
    return "等级未知";
  }
  return Number(min) === Number(max) ? `${min} 级` : `${min}-${max} 级`;
}

function monsterLevelBands(monster) {
  const data = monster.monster_data || {};
  const min = Number(data.min_level ?? monster.build_attributes?.level ?? 1);
  const max = Number(data.max_level ?? min);
  const bands = [];
  if (min <= 3 && max >= 1) {
    bands.push("low");
  }
  if (min <= 6 && max >= 4) {
    bands.push("mid");
  }
  if (max >= 7) {
    bands.push("high");
  }
  return bands;
}

function hasMeaningfulLevelUp(monster) {
  return (monster.level_up_rule?.steps || []).some(
    (step) =>
      step.effect &&
      step.effect !== "no_level_up_deck_changes" &&
      ["replace_card", "add_card", "set_monster_powers", "set_monster_health", "increase_monster_health_by_level_thresholds", "mark_invisible"].includes(step.effect)
  );
}

function hasMonsterBehavior(monster) {
  const coverage = monster.rule_coverage?.status || "";
  const rule = monster.behavior_runtime_rule || {};
  return coverage.includes("behavior") || (rule.steps || []).some(
    (step) =>
      step.predicate ||
      step.effect === "clone_player_deck" ||
      (step.effect && step.effect !== "behavior_encoded_in_deck" && step.source_method !== "PythonBuildAttributes") ||
      step.category === "state_write"
  );
}

function hasCloneDeck(monster) {
  return (monster.behavior_runtime_rule?.steps || []).some((step) => step.effect === "clone_player_deck" || step.args?.clone_deck);
}

function monsterTags(monster, bridge) {
  const attrs = monster.build_attributes || {};
  const tags = [];
  if (hasMonsterBehavior(monster)) {
    tags.push("behavior");
  }
  if (hasMeaningfulLevelUp(monster)) {
    tags.push("levelup");
  }
  if ((attrs.starting_equipment || []).length) {
    tags.push("equipment");
  }
  if (hasCloneDeck(monster)) {
    tags.push("clone");
  }
  if (
    (bridge?.referenced_cards || []).length ||
    (bridge?.key_behavior_cards || []).length ||
    (bridge?.level_up_behavior_cards || []).length ||
    (attrs.preferred_starting_cards || []).length
  ) {
    tags.push("special-cards");
  }
  return [...new Set(tags)];
}

function monsterTagLabel(tag) {
  return {
    behavior: "特殊机制",
    levelup: "等级变化",
    equipment: "起手装备",
    "special-cards": "关联卡牌",
    clone: "复制牌组",
    "final-boss": "最终 Boss"
  }[tag] || tag;
}

function monsterStatusLabel(monster) {
  if (hasCloneDeck(monster)) {
    return "复制牌组";
  }
  if (hasMeaningfulLevelUp(monster) && monster.rule_coverage?.status === "index_only") {
    return "有等级变化";
  }
  if (hasMonsterBehavior(monster) && monster.rule_coverage?.status === "index_only") {
    return "有机制";
  }
  return MONSTER_RULE_STATUS[monster.rule_coverage?.status] || monster.rule_coverage?.status || "基础资料";
}

function monsterPowerText(monster) {
  return (
    monster.build_attributes?.monster_powers ||
    monster.build_attributes?.powers ||
    monster.bestiary_entry ||
    "暂无机制文本"
  );
}

function monsterSearchText(record, bridge) {
  const monster = record.monster;
  const attrs = monster.build_attributes || {};
  const cards = [
    ...(attrs.base_deck || []),
    ...(attrs.starting_equipment || []),
    ...(attrs.preferred_starting_cards || []),
    ...(bridge?.referenced_cards || [])
  ];
  const mechanics = (monster.behavior_runtime_rule?.steps || [])
    .map((step) => [step.operation, step.effect, step.predicate, step.source_method].filter(Boolean).join(" "))
    .join(" ");
  return [
    monster.display_name,
    monster.display_name_cn,
    monster.original_display_name,
    monster.class_name,
    monster.internal_name,
    monster.bestiary_entry,
    monsterPowerText(monster),
    monsterLevelRange(monster),
    monsterStatusLabel(monster),
    ...monsterLocations(monster),
    ...monsterLocations(monster).map(locationLabel),
    ...monsterTags(monster, bridge).map(monsterTagLabel),
    ...cards,
    mechanics
  ]
    .filter(Boolean)
    .join(" ")
    .replace(/\\n/g, " ");
}

function monsterGeneratedSummary(monster) {
  const data = monster.monster_data || {};
  const attrs = monster.build_attributes || {};
  const parts = [
    `${data.boss || attrs.boss ? "Boss" : "普通怪物"}，出现在 ${monsterLocations(monster).map(locationLabel).join("、") || "未知地形"}。`,
    `等级范围 ${monsterLevelRange(monster)}。`,
    attrs.base_deck?.length ? `基础牌组 ${attrs.base_deck.length} 张。` : hasCloneDeck(monster) ? "进入战斗时复制玩家牌组。" : "没有固定基础牌组。",
    hasMonsterBehavior(monster) ? "有独立技能或回合机制。" : "主要依靠牌组行动。",
    hasMeaningfulLevelUp(monster) ? "等级提升会改动牌组或属性。" : "等级提升没有解析到额外牌组改动。"
  ];
  return parts.join("");
}

const MONSTER_BESTIARY_TRANSLATIONS = {
  "air-elemental": "进攻型怪物，免疫电系伤害，弱点是毒性伤害。战斗拖得越久，它每回合额外抽牌越多。应对：尽快击杀，或先降低它的伤害。",
  "akami-ascendant": "法术型 Boss，依靠图腾获得法力、抽牌并造成伤害。如果放任图腾存在，会同时形成干扰和高伤害。应对：优先清理或快速击杀，避免图腾滚起优势。",
  "akami-muckcaller": "法术型怪物，Shock Totem 会逐步提高伤害，并用法术让你弃牌、失去行动点。应对：快速击杀，或先移除图腾。",
  "akami-shaman": "法术型怪物，特殊牌 Mana Totem 会每回合为它生成额外法力。应对：趁图腾还没形成法力优势前快速击杀。",
  "akami-stormcaller": "进攻型怪物，Haste Totem 会让它每回合抽越来越多的牌。应对：它的伤害来源分散，冰冷和伤害减免尤其有效。",
  "banshee": "防御型怪物，具有物理伤害抗性，会迫使你弃牌，并吸取生命来治疗自己。应对：准备非物理伤害，或使用单次高于 1 点的物理伤害。",
  "shadow-dragon": "隐形怪物，免疫毒性伤害，会在你准备不足时袭击，并造成巨量中毒伤害。应对：除非必要或已经准备好，不要贸然探索；如果无法抵消中毒，就尽快击杀。",
  "brownie": "干扰型怪物，闪避率很高，并用 Counterspell 抵消法术。应对：使用强力行动牌；如果必须用法术，先用低价值法术试探，再打关键法术。",
  "chromatic-demon": "防御型 Boss，具有元素伤害抗性，会使用大量不同元素牌。应对：注意它的法力，避免被 Electrocute 击杀；优先准备元素防护并主要使用物理伤害。",
  "clone": "你的镜像复制体。它使用与你完全相同的牌组，同时有较高生命和不错的起始法力。应对：用已装备装备或职业战斗能力打破镜像。",
  "cumulo-nimbus": "防御型 Boss，具有物理伤害抗性，并免疫电系伤害。它经常吸走你的法力和行动点，但伤害偏低。应对：准备非物理伤害，并尽快花掉法力。",
  "demon": "干扰型怪物，战斗开始时会把大量诅咒塞进你的牌组。应对：依赖连段和协同的牌组会被明显削弱，单卡强度高的牌组更好处理。",
  "disciple-of-chaos": "随机型怪物，伤害和特殊牌都带随机性，也经常伤到自己。应对：偏防守即可，让它的随机效果自己消耗自己。",
  "earth-elemental": "毒性怪物，免疫毒性伤害，弱点是电系伤害。它每回合会施加可观中毒。应对：它防御有限，可以减轻中毒后处理，也可以在中毒失控前击杀。",
  "efreet": "进攻型怪物，让双方每回合额外抽 3 张牌。应对：利用额外手牌尽快击杀，避免它的燃烧伤害拖到后期。",
  "faerie-rogue": "干扰型怪物，非常克制行动牌和攻击牌，会用 Disorient 让你的行动反打自己，也会用 Riposte 抵消攻击。应对：先用弱攻击和弱行动牌骗反应，再用关键牌收尾。",
  "fire-elemental": "进攻型怪物，免疫火焰伤害，弱点是冰霜伤害。它会造成大量火焰伤害，高等级还会每回合施加燃烧。应对：在燃烧叠起来前击杀。",
  "gelatinous-cube": "干扰型 Boss，会吃掉你打出的部分卡牌，并转化为额外生命。应对：只打关键强牌；它基础伤害不高，防御牌和装备等持续伤害很有效。",
  "genie": "法术型 Boss，拥有护盾效果，并会让你在不同厄运中选择。应对：选伤害最小的 Wishes；涉及卡牌和诅咒的选项尤其危险，尽量留到没有退路时再选。",
  "ghost": "隐形怪物，具有物理伤害抗性，每回合吸取生命，并会阻挡你的部分出牌。应对：探索时保持警惕，准备非物理伤害，并在生命吸取失控前击杀。",
  "ghoul": "进攻型怪物，完全无敌，但每回合会失去一张手牌，直到牌耗尽死亡。应对：完全转入防守，尤其前几回合；保留不叠加的防御牌，不要急着换成伤害牌。",
  "giant-shark": "进攻型 Boss，伤害会随时间叠高。应对：它没有干扰能力，尽快打出最高伤害。",
  "giant-spider": "毒性怪物，兼具中毒和防御。Web 会让你同时失去 1 点行动点和 1 张牌。应对：注意行动点数量，尽量在中毒过高前击杀。",
  "kraken": "干扰型 Boss，会降低你的最大手牌数，并用 Ink Spray 限制每回合可打出的卡牌数量。应对：只打真正需要的牌；抽牌效果会变差，但它自身伤害不高。",
  "goblin": "弱小怪物，特殊牌 Goblin Ally 是会每回合伤害你的装备。应对：整体很弱，适合在需要升级或刷新冷却时击杀。",
  "goblin-hoarder": "逃跑型怪物，会用 Cower 和其他防御牌尝试逃跑，并携带大量金币。应对：不要让它逃走。",
  "goblin-king": "强壮 Boss，每回合召唤 Goblin 仆从造成伤害，高等级还能从仆从中额外抽牌。应对：在仆从过多前击杀，或降低它的物理伤害。",
  "goblin-mechanist": "随机型怪物，会复制你的全部装备，并每回合打造强力装备，但也可能把自己炸掉。应对：卸下你承受不了的装备，谨慎出牌，并尽早造成伤害。",
  "griffon": "防御型怪物，特殊牌 Fly 会让它无敌一回合。应对：利用无法伤害它的回合整理手牌，等它落地后爆发击杀。",
  "hag": "干扰型怪物，会把你手牌中的多张牌替换成诅咒，并用 Curse of Doom 慢慢击杀你。应对：它防御有限，尽快击杀，避免牌组被严重污染。",
  "hand-of-glory": "干扰型怪物，具有物理和元素伤害抗性，会每隔一回合让你伤害自己。应对：中了 Dance Puppets 时尽量降低自伤，保留弱牌有时能救命。",
  "harpy": "毒性怪物，拥有能抵消法术的 Screech，并有高额中毒伤害。应对：用弱法术骗 Screech，然后在中毒过高前击杀。",
  "hydra": "进攻型 Boss，每回合造成大量伤害，并会完全回复非毒性或火焰伤害。应对：造成伤害会迫使它弃牌；改用火焰或毒性伤害，或攒出一个大回合直接击杀。",
  "ice-queen": "干扰型 Boss，免疫冰霜伤害，会降低你的手牌上限，并有防御法术和中等伤害。应对：前期尽快结束战斗；第三层可以考虑 10 级选择 Smart 来抵消光环。",
  "kobold": "弱小怪物，特殊牌 Cower 可以避免一次伤害来源。应对：击杀前先用弱牌试探 Cower。",
  "lich": "法术型 Boss，免疫毒性伤害。Phylactery 在场时无法击杀，Dark Mending 会按 Lich 已损失生命造成伤害。应对：先处理 Phylactery；不要让它长时间处于低生命，最好等 Dark Mending 打出后再压血，或准备一回合爆发击杀。",
  "mage": "法术型怪物，伤害极高但生命较低。应对：尽快击杀；只要让它行动一回合，高等级时就可能造成大量伤害。",
  "magmadon": "进攻型 Boss，免疫火焰伤害。你每打出一张牌都会受到伤害，它还会施加燃烧。应对：只打最强的牌，仔细计算需要投入多少资源。",
  "medusa": "干扰型怪物，会向你的牌组加入诅咒，再按你手牌中的诅咒数量造成伤害。应对：要么快速击杀，要么用 Inner Peace 等筛牌能力处理诅咒。",
  "mime": "模仿型 Boss，会随机复制你打出的许多卡牌。应对：Reenact 触发率较高，先用弱牌诱导；尽量布置装备等持续伤害。",
  "mimic": "进攻型怪物，非常脆，但会投掷金币造成可观伤害。你撑得越久，获得的金币越多。应对：不要贪金币。",
  "ooze": "干扰型怪物，会吃掉你手牌中的卡牌，并每回合回复生命。应对：不要只依赖单张核心牌，确保伤害能压过回复。",
  "orc": "强壮怪物，防御很少，但用剑能造成中等伤害。应对：尽量干扰它；如果无法使用剑，伤害会大幅下降。",
  "phoenix": "进攻型 Boss，免疫火焰伤害。死亡后会变成蛋，必须在同一回合击败蛋。应对：把伤害留到击杀 Phoenix 的回合，同时处理蛋。",
  "piranha": "进攻型怪物，造成会叠加的高额伤害。应对：在伤害失控前非常快速地击杀。",
  "pixie": "法术型怪物，伤害极高但生命较低。应对：必须非常快速地击杀，否则会造成爆发伤害。",
  "priest": "防御型怪物，拥有大量治疗和护盾，会拖时间让祈祷牌击杀你。应对：伤害必须压过防御；高等级时注意 Phoenix Feather 带来的第二条命。",
  "red-dragon": "强壮怪物，免疫火焰伤害，生命高、伤害稳定，并带有一定干扰。应对：在它没有伤害减免时打物理伤害；整体是直接但强力的数值战。",
  "revenant": "防御型怪物，死亡后会以更强形态返回。应对：利用弱小的第一形态布置和整理手牌；转换第一回合它无敌，之后用最强牌爆发。",
  "siren": "干扰型怪物，特殊牌 Beckon 会放逐你的手牌，同时有治疗和保护法术。应对：确保策略不依赖某一张牌；它伤害低，可以用中毒或装备慢慢建立优势。",
  "skeleton": "弱小怪物，特殊牌 Bone Shield 会格挡少量伤害。应对：持续施压，等护盾空窗时击杀。",
  "sphinx": "干扰型怪物，每回合禁止你手牌中数量最多的牌型，数量相同时会切换禁止牌型。应对：手里保留不同类型的牌，避免核心牌型被完全锁住；Teach 可补充牌组中稀少的牌型。",
  "stone-golem": "防御型怪物，具有元素伤害抗性。Slam 会按当前生命造成伤害。应对：前期用大量物理伤害压低生命，削弱 Slam。",
  "storm-giant": "强壮怪物，护甲、生命和伤害都很高，几乎不干扰但整体强。应对：这是牌组强度测试；拆掉装备会弱很多，也可以早期打伤害削弱 Slam。",
  "thief": "进攻型怪物，高伤害但多为小段数。应对：快速击杀，或用弃牌和反应牌打断连段。",
  "titan": "强壮 Boss，免疫电系伤害。生命高、伤害高、装备强，并会降低你的行动点数量。应对：确保行动点足够；穿透伤害和装备破坏尤其有效。",
  "treant": "防御型怪物，永久坚韧，并造成中等但可叠加的物理伤害。应对：准备穿透伤害或大量小段伤害；它伤害偏低，防守策略通常有效。",
  "troll": "防御型怪物，每回合回复生命，并按当前生命造成伤害。应对：越早造成大量伤害越好，可以降低 Slam 的威胁。",
  "unicorn": "防御型 Boss，每回合回复生命。应对：中毒等持续伤害很好用，因为它进攻较弱；也可以用高爆发绕过回复问题。",
  "ussuri-hunter": "闪避型怪物，限制每回合操作时间，并阻挡你第一次出牌。应对：10 秒比看起来更充裕，仍然要稳定出牌。",
  "ussuri-tracker": "闪避型怪物，伤害高，并且每回合阻挡你第一次出牌。应对：每回合先用弱牌触发阻挡，再打强攻击。",
  "ussuri-ambusher": "隐形怪物，会在你最没准备时突袭并取得先手，每回合阻挡你的第一张牌。应对：低生命时尽量不要探索；进入战斗后降低她的物理伤害，并先打弱牌。",
  "ussuri-war-queen": "闪避型 Boss，每回合阻挡你打出的部分卡牌。应对：用弱牌喂掉阻挡；她第二轮牌组会弱很多，因为 Pounce 消耗后不再反复出现。",
  "vampire": "干扰型 Boss，免疫毒性伤害，会偷走你的卡牌反过来使用，并带有少量治疗。应对：压过治疗，并用祈祷、装备等持续伤害绕开 Enthrall。",
  "vampire-bat": "弱小怪物，特殊牌 Vampire Bite 能让它少量治疗。应对：注意治疗即可，除此之外威胁不高。",
  "warrior": "强壮怪物，生命高，并会造成中等伤害，高等级时尤其明显。应对：准备处理物理伤害，并稳定消耗它。",
  "water-elemental": "干扰型怪物，免疫冰霜伤害，弱点是火焰伤害。它会逐步降低你的手牌上限并迫使弃牌。应对：持续伤害很好用；否则开局高爆发是最好机会。",
  "white-dragon": "干扰型怪物，免疫冰霜伤害。它会让你的手牌数量减少 1，并频繁迫使弃牌。应对：注意 Frost Shield 反射伤害，确保牌组在小手牌下仍能运转。",
  "wisp": "法术型怪物，物理免疫。Discharge 会按它的法力造成伤害，因此开局伤害可能很高。应对：准备非物理伤害，或等待 Discharge 消耗它自己。",
  "wraith": "干扰型怪物，具有物理伤害抗性。特殊牌 Soul Crush 会被大多数防御能力阻挡。应对：Soul Crush 总是先打，尽量维持防御；护甲尤其有效。",
  "wyvern": "毒性怪物，拥有大量中毒但没有防御。应对：打出足够伤害快速击杀，或准备中毒防护。",
  "yellow-dragon": "干扰型怪物，免疫电系伤害，会降低你的行动点数量并周期性吸走法力。应对：确保能生成法力且行动点足够；有法力就尽快花掉，或者不用法力和行动点，直接用攻击牌击杀。",
  "zombie": "毒性怪物，特殊牌 Zombie Bite 会在数回合后击杀你。应对：准备在 5 回合内打出足够伤害。"
};

function monsterBestiaryTranslation(entry, monsterName) {
  const mapped = MONSTER_BESTIARY_TRANSLATIONS[slugify(monsterName)];
  if (mapped) {
    return mapped;
  }
  return translateMonsterEntry(entry);
}

function translateMonsterBestiaryTerm(term) {
  const raw = String(term || "").trim();
  const suffix = raw.match(/[,.，。]$/)?.[0] || "";
  let text = raw.replace(/[,.，。]+$/, "").trim();
  const replacements = [
    [/^Immune to Air damage$/i, "免疫电系伤害"],
    [/^Immune to Earth damage$/i, "免疫毒性伤害"],
    [/^Immune to Fire damage$/i, "免疫火焰伤害"],
    [/^Immune to Water damage$/i, "免疫冰霜伤害"],
    [/^Physical immune$/i, "物理免疫"],
    [/^Resists physical damage$/i, "物理伤害抗性"],
    [/^Resistant to physical damage$/i, "物理伤害抗性"],
    [/^Resists elemental damage$/i, "元素伤害抗性"],
    [/^Resistant to elemental damage$/i, "元素伤害抗性"],
    [/^Physical and Elemental Resistant$/i, "物理和元素伤害抗性"],
    [/^Permanently resilient$/i, "永久坚韧"]
  ];
  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }
  return `${text}${suffix}`;
}

function translateMonsterEntry(value) {
  let text = String(value || "").replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
  if (!text) {
    return "暂无怪物图鉴文本。";
  }
  text = text.replace(/<([^>]+)>/g, (_, term) => `<${translateMonsterBestiaryTerm(term)}>`);

  const replacements = [
    [/Tips:/gi, "应对："],
    [/Aggressive boss/gi, "进攻型 Boss"],
    [/Magical boss/gi, "法术型 Boss"],
    [/Defensive boss/gi, "防御型 Boss"],
    [/Disruptive boss/gi, "干扰型 Boss"],
    [/Brawny boss/gi, "强壮 Boss"],
    [/Mimicking boss/gi, "模仿型 Boss"],
    [/Aggressive monster/gi, "进攻型怪物"],
    [/Magical monster/gi, "法术型怪物"],
    [/Defensive monster/gi, "防御型怪物"],
    [/Weak monster/gi, "弱小怪物"],
    [/Disruptive monster/gi, "干扰型怪物"],
    [/Poisonous monster/gi, "毒性怪物"],
    [/Random monster/gi, "随机型怪物"],
    [/Brawny monster/gi, "强壮怪物"],
    [/Invisible monster/gi, "隐形怪物"],
    [/Evasive monster/gi, "闪避型怪物"],
    [/Cowardly monster/gi, "逃跑型怪物"],
    [/You\. In disguise\./gi, "伪装成你的复制体。"],
    [/Plays exactly the same deck as you with high health and good starting mana/gi, "使用与你完全相同的牌组，同时有较高生命和不错的起始法力"],
    [/Break the symmetry with equipped equipment or your special combat abilities/gi, "用已装备装备或职业战斗能力打破镜像优势"],
    [/Relies on totems to give him mana, draw him cards, and deal damage/gi, "依靠图腾获得法力、抽牌并造成伤害"],
    [/Has some disruptive cards and excellent damage if left unchecked/gi, "如果不尽快处理，会同时打出干扰牌和高伤害"],
    [/Has a Shock Totem which deals increasing amounts of damage/gi, "拥有 Shock Totem，伤害会逐步提高"],
    [/Has a Haste Totem which lets him draw increasing numbers of cards each turn/gi, "拥有 Haste Totem，每回合抽牌数会逐步提高"],
    [/Special card is ([^,.]+),? which (.*?)(?=\.|$)/gi, "特殊牌是 $1，它$2"],
    [/Special card is ([^,.]+?)(?=\.|,|$)/gi, "特殊牌是 $1"],
    [/special card, ([^,]+),/gi, "特殊牌 $1"],
    [/special card which has random effects/gi, "带随机效果的特殊牌"],
    [/Has a mix of poison and defense/gi, "兼具中毒和防御"],
    [/Has minimal defenses/gi, "几乎没有防御"],
    [/Has large amounts of healing and shielding/gi, "拥有大量治疗和护盾"],
    [/Has shielding effects and allows you to choose various dooms/gi, "拥有护盾效果，并会让你在不同厄运中选择"],
    [/Has high health, good damage, and some disruption/gi, "生命高、伤害稳定，并带有一定干扰"],
    [/Has significant armor, health, and solid damage/gi, "拥有显著护甲、生命和稳定伤害"],
    [/Not at all disruptive, but all-around powerful/gi, "几乎不干扰，但整体数值很强"],
    [/Very high dodge chance and has Counterspell which negates your spells/gi, "闪避率很高，并有 Counterspell 来抵消你的法术"],
    [/Very strong against action and attack cards/gi, "很克制行动牌和攻击牌"],
    [/using Disorient to hit you with your own actions and Riposte to negate your attacks/gi, "会用 Disorient 让你的行动反打自己，也会用 Riposte 抵消攻击"],
    [/Fills your deck with curses at the start of the fight/gi, "战斗开始时把大量诅咒塞进你的牌组"],
    [/Adds curses to your deck and then deals damage to you based on the number of curses in your hand/gi, "先向你的牌组加入诅咒，再按你手牌中的诅咒数量造成伤害"],
    [/replaces several cards in your hand with curses/gi, "会把你手牌中的多张牌替换成诅咒"],
    [/uses Curse of Doom to kill you slowly/gi, "并用 Curse of Doom 慢慢击杀你"],
    [/Makes you discard cards and drains your life to heal her/gi, "会迫使你弃牌，并吸取生命来治疗自己"],
    [/Makes you discard cards and lose actions/gi, "迫使你弃牌并失去行动点"],
    [/Makes both players draw 3 additional cards each turn/gi, "让双方每回合额外抽 3 张牌"],
    [/Draws extra cards each turn, more as the fight goes on/gi, "每回合额外抽牌，战斗拖得越久抽得越多"],
    [/draw extra cards from his minions/gi, "从仆从身上额外抽牌"],
    [/Deals enormous poison damage and attacks when you are unprepared/gi, "会在你准备不足时袭击，并造成巨量中毒伤害"],
    [/Deals enormous amounts of damage, but has low health/gi, "伤害很高，但生命较低"],
    [/Deals massive, stacking damage/gi, "造成会叠加的高额伤害"],
    [/Deals large amounts of damage each turn/gi, "每回合造成大量伤害"],
    [/Does enormous damage but has low health/gi, "伤害极高但生命较低"],
    [/Does high damage and blocks your first play each turn/gi, "伤害高，并且每回合阻挡你第一次出牌"],
    [/Deals high damage, mostly in small pieces/gi, "高伤害但多为小段数"],
    [/Deals damage based on his current health/gi, "按当前生命造成伤害"],
    [/Deals damage to you for each card you play/gi, "你每打出一张牌都会受到伤害"],
    [/Does reasonable, stacking physical damage/gi, "造成中等但可叠加的物理伤害"],
    [/Does reasonable damage/gi, "造成中等伤害"],
    [/Deals damage equal to his mana with Discharge/gi, "用 Discharge 按自身法力造成伤害"],
    [/deals increasing amounts of damage/gi, "造成逐渐提高的伤害"],
    [/deals significant damage/gi, "造成可观伤害"],
    [/deal significant damage/gi, "造成可观伤害"],
    [/deals damage/gi, "造成伤害"],
    [/deal damage/gi, "造成伤害"],
    [/heals any non-Earth or Fire damage completely each turn/gi, "每回合完全回复非毒性或火焰伤害"],
    [/Dealing damage forces it to discard cards which buys you time to either deal fire or earth damage or to set up a single big turn to finish it/gi, "造成伤害会迫使它弃牌，从而争取时间；你可以改用火焰或毒性伤害，也可以攒一个大回合直接击杀"],
    [/Eats some of the cards you play to give him additional health/gi, "会吃掉你打出的部分卡牌，并转化为额外生命"],
    [/Eats cards from your hand and regenerates health each turn/gi, "会吃掉你手牌中的卡牌，并且每回合回复生命"],
    [/Copies all your equipment and builds very powerful equipment each turn/gi, "复制你的全部装备，并且每回合打造强力装备"],
    [/Except when he blows himself up/gi, "但也可能把自己炸掉"],
    [/Copies many of the cards you play at random/gi, "会随机复制你打出的许多卡牌"],
    [/Steals your cards to use against you and has a small amount of healing/gi, "偷走你的卡牌反过来使用，并带有少量治疗"],
    [/When it dies, it transforms into an egg which must be defeated the same turn/gi, "死亡后会变成蛋，必须在同一回合击败蛋"],
    [/When he dies, he returns much more powerful/gi, "死亡后会以更强形态返回"],
    [/Completely invincible, but loses a card in hand each turn until he dies/gi, "完全无敌，但每回合会失去一张手牌，直到牌耗尽死亡"],
    [/Is unkillable while his Phylactery is in play/gi, "Phylactery 在场时无法被击杀"],
    [/Uses Dark Mending to deal damage based on his missing health/gi, "会用 Dark Mending 按已损失生命造成伤害"],
    [/Forbids the card type that is most common in your hand each turn/gi, "每回合禁止你手牌中数量最多的牌型"],
    [/Ties are broken by changing type/gi, "数量相同时会切换禁止的牌型"],
    [/Restricts the amount of time you have for each turn and blocks your first play/gi, "限制每回合操作时间，并阻挡你第一次出牌"],
    [/Blocks your first card each turn/gi, "每回合阻挡你的第一张牌"],
    [/Blocks some of the cards you play each turn/gi, "每回合阻挡你打出的部分卡牌"],
    [/Reduces your hand size over time and makes you discard/gi, "逐步降低你的手牌上限，并迫使你弃牌"],
    [/Reduces your hand size and has defensive spells and reasonable damage/gi, "降低你的手牌上限，同时有防御法术和中等伤害"],
    [/Reduces your maximum hand size and also uses Ink Spray to limit your number of cards per turn/gi, "降低你的最大手牌数，并用 Ink Spray 限制你每回合可打出的卡牌数量"],
    [/Reduces your number of cards in hand by one and makes you discard frequently/gi, "使你的手牌数量减少 1，并频繁迫使你弃牌"],
    [/Reduces your number of actions and drains your starting mana/gi, "降低你的行动点数量，并吸走起始法力"],
    [/reduces your number of actions/gi, "降低你的行动点数量"],
    [/Immune to Air damage/gi, "免疫电系伤害"],
    [/Immune to Earth damage/gi, "免疫毒性伤害"],
    [/Immune to Fire damage/gi, "免疫火焰伤害"],
    [/Immune to Water damage/gi, "免疫冰霜伤害"],
    [/weak to Air damage/gi, "弱点是电系伤害"],
    [/weak to Earth damage/gi, "弱点是毒性伤害"],
    [/weak to Fire damage/gi, "弱点是火焰伤害"],
    [/weak to Water damage/gi, "弱点是冰霜伤害"],
    [/Resists physical damage/gi, "具有物理伤害抗性"],
    [/Resistant to physical damage/gi, "具有物理伤害抗性"],
    [/Resists elemental damage/gi, "具有元素伤害抗性"],
    [/Resistant to elemental damage/gi, "具有元素伤害抗性"],
    [/Physical and Elemental Resistant/gi, "物理和元素伤害抗性"],
    [/Physical immune/gi, "物理免疫"],
    [/Permanently resilient/gi, "永久坚韧"],
    [/Play defense/gi, "转入防守"],
    [/Kill (him|her|them|it) as fast as possible/gi, "尽快击杀"],
    [/Kill (him|her|them|it) very quickly/gi, "必须非常快速地击杀"],
    [/Kill (him|her|them|it) quickly/gi, "尽快击杀"],
    [/Take out/gi, "优先处理"],
    [/Don't explore/gi, "不要探索"],
    [/Don't be greedy/gi, "不要贪金币"],
    [/Be prepared/gi, "提前准备"],
    [/be prepared/gi, "提前准备"],
    [/Watch out for/gi, "注意"],
    [/watch his mana/gi, "观察他的法力"],
    [/spend your mana as quickly as you can/gi, "尽快花掉法力"],
    [/make sure you have enough actions/gi, "确保行动点足够"],
    [/make sure your deck is consistent enough/gi, "确保牌组稳定性足够"],
    [/use non-physical damage/gi, "使用非物理伤害"],
    [/non-physical damage/gi, "非物理伤害"],
    [/physical damage/gi, "物理伤害"],
    [/elemental damage/gi, "元素伤害"],
    [/piercing damage/gi, "穿透伤害"],
    [/fire damage/gi, "火焰伤害"],
    [/earth damage/gi, "毒性伤害"],
    [/air damage/gi, "电系伤害"],
    [/water damage/gi, "冰霜伤害"],
    [/\bactions\b/gi, "行动点"],
    [/\baction cards\b/gi, "行动牌"],
    [/\baction card\b/gi, "行动牌"],
    [/\battack cards\b/gi, "攻击牌"],
    [/\battack card\b/gi, "攻击牌"],
    [/\bspell cards\b/gi, "法术牌"],
    [/\bspells\b/gi, "法术"],
    [/\bspell\b/gi, "法术"],
    [/\bcards\b/gi, "卡牌"],
    [/\bcard\b/gi, "卡牌"],
    [/\bdeck\b/gi, "牌组"],
    [/\bhand\b/gi, "手牌"],
    [/\bhealth\b/gi, "生命"],
    [/\blife\b/gi, "生命"],
    [/\bmana\b/gi, "法力"],
    [/\bequipment\b/gi, "装备"],
    [/\barmor\b/gi, "护甲"],
    [/\bshielding\b/gi, "护盾"],
    [/\bhealing\b/gi, "治疗"],
    [/\bheal\b/gi, "治疗"],
    [/\bpoison\b/gi, "中毒"],
    [/\bburning\b/gi, "燃烧"],
    [/\bburns\b/gi, "施加燃烧"],
    [/\bcurses\b/gi, "诅咒"],
    [/\bcurse\b/gi, "诅咒"],
    [/\bdiscard\b/gi, "弃牌"],
    [/\bdisruption\b/gi, "干扰"],
    [/\bdefense\b/gi, "防御"],
    [/\bdefensive\b/gi, "防御"],
    [/\bdamage\b/gi, "伤害"],
    [/\bdraw\b/gi, "抽牌"],
    [/\bturns\b/gi, "回合"],
    [/\bturn\b/gi, "回合"],
    [/each 回合/gi, "每回合"],
    [/every other 回合/gi, "每隔一回合"],
    [/every two 回合s?/gi, "每两回合"],
    [/at high levels/gi, "高等级时"],
    [/high levels/gi, "高等级"],
    [/low 生命/gi, "低生命"],
    [/high 生命/gi, "高生命"],
    [/large amounts of/gi, "大量"],
    [/significant/gi, "可观"],
    [/reasonable/gi, "中等"],
    [/minimal/gi, "很低"],
    [/mostly/gi, "主要"],
    [/particularly/gi, "尤其"],
    [/quickly/gi, "快速"],
    [/very quickly/gi, "非常快速"],
    [/before/gi, "在此之前"],
    [/otherwise/gi, "否则"],
    [/If /g, "如果 "],
    [/ if /g, " 如果 "],
    [/ and /gi, "，并"],
    [/ or /gi, "，或"],
    [/ but /gi, "，但"],
    [/ with /gi, "，并带有 "],
    [/ to /gi, " 来 "]
  ];

  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }

  return text
    .replace(/\s+([，。；：])/g, "$1")
    .replace(/([，。；：])\s+/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function renderMonsterBestiary(entry, monsterName) {
  const raw = String(entry || "").trim();
  if (!raw) {
    return "";
  }
  const translated = monsterBestiaryTranslation(raw, monsterName);
  return `<div class="dq-monster-bestiary">
    <strong>图鉴提示</strong>
    <p>${formatRuleHtml(translated, true, true)}</p>
  </div>`;
}

function monsterMetadataItems(monster) {
  const data = monster.monster_data || {};
  const attrs = monster.build_attributes || {};
  const multipliers = attrs.multipliers || {};
  return [
    { label: "中文名", value: monster.display_name_cn || monster.display_name, tip: "wiki 中使用的统一中文名称。" },
    { label: "英文名", value: originalDisplayName(monster), tip: "游戏原始显示名。" },
    { label: "怪物 ID", value: monster.internal_name || monster.class_name, tip: "怪物在解析数据中的内部引用名称。" },
    { label: "类名", value: monster.class_name, tip: "反编译类名，通常用于和代码中的怪物实现对应。" },
    { label: "类型", value: data.boss || attrs.boss ? "Boss" : "普通怪物", tip: "Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。" },
    { label: "等级范围", value: monsterLevelRange(monster), tip: "地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。" },
    { label: "生成地形", value: monsterLocations(monster).map(locationLabel).join("、"), tip: "怪物可在这些地形环境中生成。" },
    { label: "地形权重", value: environmentWeightText(data.environment_weights), tip: "不同地形中的生成权重；0 表示通常不在该环境自然生成。" },
    { label: "Devour 类型", value: devourMetadataText(attrs.devour_type), tip: "龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。" },
    { label: "基础法力", value: attrs.mana, tip: "怪物开局或基础配置中的法力值。" },
    { label: "基础等级", value: attrs.level, tip: "BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。" },
    { label: "稀释值", value: attrs.dilution, tip: "怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。" },
    { label: "行动点修正", value: attrs.action_bonus, tip: "怪物初始化里的行动点修正。" },
    { label: "手牌修正", value: attrs.card_bonus, tip: "怪物初始化里的抽牌/手牌修正。" },
    { label: "隐形", value: attrs.invisible, tip: "是否带有隐形标记；空值代表没有显式标记。" },
    { label: "生命倍率", value: multipliers.health_mult, tip: "怪物生命倍率，Boss 常高于普通怪物。" },
    { label: "金币倍率", value: multipliers.gold_mult, tip: "击败后金币奖励倍率。" },
    { label: "经验倍率", value: multipliers.exp_mult, tip: "击败后经验奖励倍率。" },
    { label: "机制状态", value: monsterStatusLabel(monster), tip: "解析出的怪物机制覆盖程度。" },
    { label: "等级规则", value: monster.level_up_rule?.status, tip: "等级变化解析状态；详情在等级变化表中展示。" }
  ];
}

function environmentWeightText(weights = {}) {
  return Object.entries(weights)
    .map(([key, value]) => `${locationLabel(key.toUpperCase())}: ${value}`)
    .join("、");
}

function devourLabel(value) {
  if (value === null || value === undefined || value === "") {
    return "无";
  }
  return `${value} · ${MONSTER_DEVOUR_LABELS[value] || "未知类型"}`;
}

function devourMetadataText(value) {
  if (value === null || value === undefined || value === "") {
    return "无";
  }
  const row = DRAGON_DEVOUR_REWARD_ROWS.find((item) => Number(item.id) === Number(value));
  return `${devourLabel(value)}${row ? `；吞噬收益：${row.reward}` : ""}`;
}

const MONSTER_CORE_MECHANICS = {
  "air-elemental": [
    "免疫电系伤害，弱毒性伤害；每回合额外抽牌，且战斗拖长后抽牌量继续增加。"
  ],
  "akami-ascendent": [
    "核心机制由图腾牌承载：[[ManaTotem]] 提供法力，[[HasteTotem]] 增加抽牌，[[ShockTotem]] 造成逐步增长的伤害。"
  ],
  "akami-ascendant": [
    "核心机制由图腾牌承载：[[ManaTotem]] 提供法力，[[HasteTotem]] 增加抽牌，[[ShockTotem]] 造成逐步增长的伤害。"
  ],
  "akami-muckcaller": [
    "[[ShockTotem]] 会造成逐步增长的伤害；该怪物也有让玩家弃牌、减少行动点的法术。"
  ],
  "akami-shaman": [
    "[[ManaTotem]] 每回合累积充能并提供额外法力。"
  ],
  "akami-stormcaller": [
    "[[HasteTotem]] 每回合累积充能并提供额外抽牌。"
  ],
  banshee: [
    "标记为亡灵并带物理抗性；牌组以弃牌和吸血治疗为核心。"
  ],
  "black-dragon": [
    "隐形入场，免疫毒性伤害；牌组集中在高额毒性伤害和突袭。"
  ],
  brownie: [
    "带高闪避；[[Counterspell]] 会让法术无效。"
  ],
  "chromatic-demon": [
    "带元素抗性；牌组覆盖多种元素伤害。"
  ],
  clone: [
    "进入战斗时复制玩家当前牌组；固定基础牌组为空不代表没有出牌能力。"
  ],
  "cumulo-nimbus": [
    "带物理抗性并免疫电系伤害；核心干扰是吸走玩家法力和行动点。"
  ],
  demon: [
    "入场向玩家牌库顶放入诅咒牌；有心智免疫时该入场诅咒不会生效。"
  ],
  "disciple-of-chaos": [
    "核心行为来自随机效果牌，伤害和自伤都由牌面随机分支决定。"
  ],
  "earth-elemental": [
    "免疫毒性伤害，弱电系伤害；入场/回合机制会持续给玩家叠毒。"
  ],
  efreet: [
    "双方在回合开始额外抽 3 张牌。"
  ],
  "faerie-rogue": [
    "[[Disorient]] 会借用玩家行动牌反打；[[Riposte]] 会让攻击牌无效。"
  ],
  "fire-elemental": [
    "免疫火焰伤害，弱冰霜伤害；高等级会在回合机制里持续施加燃烧。"
  ],
  "gelatinous-cube": [
    "[[Slurp]] 会吃掉玩家打出的部分卡牌并转化为额外生命；6+ 级会加入 [[Resilience]] 和 [[Engulf]]。"
  ],
  genie: [
    "[[BadWishes]] / [[BadWishes2]] 会先生成惩罚候选池，再随机展示 3 个互不重复的选项让玩家选择 1 个。"
  ],
  ghost: [
    "隐形、亡灵、物理抗性；回合机制会持续吸取生命，并带有阻止部分出牌的效果。"
  ],
  ghoul: [
    "入场获得完全无敌，并同时挂上 [[ZombieBite]] 衰败机制；其图鉴机制是每回合失去手牌，直到倒计时结束死亡。"
  ],
  "giant-shark": [
    "心智免疫；伤害会随战斗进程叠高。"
  ],
  "giant-spider": [
    "[[Web]] 会让玩家同时失去行动点和手牌；牌组还包含毒性和防御牌。"
  ],
  "giant-squid": [
    "降低玩家最大手牌；[[InkSpray]] 会限制玩家本回合可打出的牌数。"
  ],
  kraken: [
    "降低玩家最大手牌；[[InkSpray]] 会限制玩家本回合可打出的牌数。"
  ],
  goblin: [
    "[[GoblinAlly]] 是持续伤害装备，进入场上后会在每回合造成伤害。"
  ],
  "goblin-hoarder": [
    "存在逃跑机制；若逃跑成功，战斗胜者会被改为怪物。"
  ],
  "goblin-king": [
    "每回合从虚空生成 Goblin 随从牌；高等级会通过随从获得额外抽牌。"
  ],
  "goblin-mechanist": [
    "会复制玩家装备，并在回合中制造随机装备；部分分支会对自身造成伤害。"
  ],
  griffon: [
    "[[Fly]] 会让 Griffon 获得一回合无敌。"
  ],
  hag: [
    "心智免疫；会把玩家手牌替换为诅咒，并用 [[CurseOfDoom]] 形成延迟威胁。"
  ],
  "hand-of-glory": [
    "带物理和元素抗性；[[DancePuppets]] 使玩家隔回合对自己造成伤害。"
  ],
  harpy: [
    "[[Screech]] 会让法术无效；牌组同时包含高毒性伤害。"
  ],
  hydra: [
    "Hydra 机制会在每回合完全回复非毒性、非火焰伤害；受到伤害会迫使它弃牌。"
  ],
  "ice-queen": [
    "免疫冰霜伤害；降低玩家手牌上限，并使用防御法术和冰霜伤害牌。"
  ],
  kobold: [
    "[[Cower]] 会抵消一次伤害来源。"
  ],
  lich: [
    "[[Phylactery]] 在场时，Lich 将要死亡会改为生命变为 1；[[DarkMending]] 按 Lich 已损失生命造成伤害。"
  ],
  mage: [
    "按等级设置额外法力收益；牌组主要依赖高法力法术伤害。"
  ],
  magmadon: [
    "免疫火焰伤害；Super Fireshield 让玩家每打出一张牌都会受到伤害，且回合机制会施加燃烧。"
  ],
  medusa: [
    "向玩家牌库加入诅咒，并按玩家手牌中的诅咒数量造成伤害。"
  ],
  mime: [
    "[[Reenact]] 会随机复制玩家打出的部分卡牌。"
  ],
  "mimic-monster": [
    "以金币投掷造成伤害；战斗越久，金币相关奖励和威胁都会增长。"
  ],
  mimic: [
    "以金币投掷造成伤害；战斗越久，金币相关奖励和威胁都会增长。"
  ],
  ooze: [
    "会吃掉玩家手牌，并在回合机制中持续回复生命。"
  ],
  phoenix: [
    "免疫火焰伤害；死亡后变为 Phoenix Egg，若同回合未击败蛋，会回到 Phoenix 形态。"
  ],
  piranha: [
    "伤害牌会叠加增长，战斗拖长后单回合伤害显著提高。"
  ],
  pixie: [
    "每回合获得 3 点法力；牌组主要依赖高法力伤害法术。"
  ],
  priest: [
    "核心牌组包含大量治疗和护盾；祈祷牌会形成延迟伤害。"
  ],
  "red-dragon": [
    "免疫火焰伤害；入场获得额外行动点，牌组由高生命、爪击、龙鳞减伤和火焰法术构成。"
  ],
  revenant: [
    "第一次死亡后会清理诅咒、洗牌、抽牌并以更强形态返回；第一形态有无敌标记。"
  ],
  siren: [
    "[[Beckon]] 会放逐玩家手牌；牌组还包含治疗和保护法术。"
  ],
  skeleton: [
    "[[BoneShield]] / [[BoneShield2]] 提供可消耗的伤害阻挡。"
  ],
  sphinx: [
    "每回合禁止打出玩家手牌中数量最多的牌型；数量相同时会切换被禁止的牌型。"
  ],
  "stone-golem": [
    "带元素抗性；[[Slam]] 按当前生命造成伤害。"
  ],
  titan: [
    "免疫电系伤害；会降低玩家最大行动点，并带高生命、高伤害和强装备。"
  ],
  treant: [
    "永久韧性；牌组以逐步增长的物理伤害为核心。"
  ],
  troll: [
    "每回合回复生命；[[Slam]] 按当前生命造成伤害。"
  ],
  unicorn: [
    "每回合回复生命；本体进攻较低，机制重点在持续回复。"
  ],
  "ussuri-hunter": [
    "限制玩家每回合操作时间为 10 秒，并阻挡玩家每回合第一张牌。"
  ],
  "ussuri-tracker": [
    "阻挡玩家每回合第一张牌；牌组以高伤害攻击为主。"
  ],
  "ussuri-trickster": [
    "隐形并抢先行动；同时阻挡玩家每回合第一张牌。"
  ],
  "ussuri-ambusher": [
    "隐形并抢先行动；同时阻挡玩家每回合第一张牌。"
  ],
  "ussuri-war-queen": [
    "每回合阻挡玩家部分出牌；第二轮牌组强度会在 [[Pounce]] 消耗后下降。"
  ],
  vampire: [
    "[[Enthrall]] 会偷走玩家手牌并反过来使用；Vampire 还会通过 [[VampireBite]] / [[VampireBite2]] 治疗。"
  ],
  "vampire-bat": [
    "[[VampireBite]] / [[VampireBite2]] 会造成伤害并治疗自身。"
  ],
  "water-elemental": [
    "免疫冰霜伤害，弱火焰伤害；会逐步降低玩家最大手牌并迫使玩家弃牌。"
  ],
  "white-dragon": [
    "免疫冰霜伤害；玩家手牌上限 -1，并频繁触发弃牌。"
  ],
  wisp: [
    "物理免疫；[[Discharge]] 按当前法力造成伤害。"
  ],
  wraith: [
    "如果手牌中有 [[SoulCrush]]，AI 会优先打出它；该牌造成 10 点伤害并弃 2 张牌，但目标有减伤、物理抗性、闪避或防护时无效。"
  ],
  wyvern: [
    "牌组集中在高毒性叠层，缺少额外防御机制。"
  ],
  "yellow-dragon": [
    "免疫电系伤害；玩家行动点上限 -1，并将玩家起始法力设为 0。"
  ],
  zombie: [
    "[[ZombieBite]] 会施加 5 层疾病；目标每个回合开始失去 1 层，最后一层移除时死亡。"
  ]
};

const GENIE_WISH_BASE_ROWS = [
  {
    card: "PenaltyCurses",
    condition: "固定候选",
    effect: "向玩家牌库加入 4 张 [[Curse]] 并洗牌；玩家有精神免疫时不生效。"
  },
  {
    card: "PenaltyPlusCard",
    condition: "固定候选",
    effect: "使灯神最大手牌 +1。"
  },
  {
    card: "PenaltyDamage",
    condition: "玩家生命 <= 10",
    effect: "对玩家造成 6 点电系伤害。"
  },
  {
    card: "PenaltyHeal",
    condition: "灯神已损失至少 7 点生命",
    effect: "灯神回复 10 点生命。"
  },
  {
    card: "PenaltyMana",
    condition: "玩家当前法力 >= 7",
    effect: "将玩家当前法力设为 0。"
  },
  {
    card: "PenaltyMinusAction",
    condition: "玩家最大行动点 >= 1",
    effect: "玩家最大行动点 -1。"
  },
  {
    card: "PenaltyMinusCard",
    condition: "玩家有可扣减的最大手牌",
    effect: "玩家最大手牌 -1。"
  },
  {
    card: "PenaltyPoison",
    condition: "候选池少于 3 项，或玩家生命 <= 15",
    effect: "玩家获得 4 层中毒。"
  }
];

const GENIE_WISH_UPGRADED_ROWS = [
  {
    card: "PenaltyCurses",
    condition: "固定候选",
    effect: "向玩家牌库加入 4 张 [[Curse]] 并洗牌；玩家有精神免疫时不生效。"
  },
  {
    card: "PenaltyPlusCard",
    condition: "固定候选",
    effect: "使灯神最大手牌 +1。"
  },
  {
    card: "PenaltyDamage2",
    condition: "玩家生命 <= 20",
    effect: "对玩家造成 12 点电系伤害。"
  },
  {
    card: "PenaltyHeal",
    condition: "灯神已损失至少 7 点生命",
    effect: "灯神回复 10 点生命。"
  },
  {
    card: "PenaltyMinusAction2",
    condition: "玩家最大行动点 >= 1",
    effect: "玩家最大行动点 -2。"
  },
  {
    card: "PenaltyMinusCard",
    condition: "玩家有可扣减的最大手牌",
    effect: "玩家最大手牌 -1。"
  },
  {
    card: "PenaltyPoison2",
    condition: "候选池少于 3 项，或玩家生命 <= 30",
    effect: "玩家获得 6 层中毒。"
  }
];

function renderGenieWishSection(monster, cardById) {
  if (!monsterLookupKeys(monster).includes("genie")) {
    return "";
  }
  return `<section class="dq-section-block dq-genie-wish-section">
  <h2>Three Wishes 机制</h2>
  <div class="dq-mechanic-list">
    <p>${renderMonsterInlineCard("BadWishes", cardById)} 是灯神基础牌组里的 Three Wishes：1 行动点、0 法力、3 阶。</p>
    <p>${renderMonsterInlineCard("BadWishes2", cardById)} 是 6+ 级后使用的强化 Three Wishes：仍是 1 行动点、0 法力，但候选条件和惩罚数值更高。</p>
    <p>这张牌不是固定执行一个效果。它先按当前战斗状态生成候选惩罚池，再从候选池中随机取 3 个互不重复的惩罚，交给玩家选择其中 1 个结算。</p>
  </div>

  <h3>执行流程</h3>
  <table class="dq-data-table dq-wish-flow-table">
    <thead><tr><th>步骤</th><th>解析到的行为</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>先放入两个固定候选：${renderMonsterInlineCard("PenaltyCurses", cardById)} 和 ${renderMonsterInlineCard("PenaltyPlusCard", cardById)}。</td></tr>
      <tr><td>2</td><td>根据玩家生命、玩家法力、玩家最大行动点、玩家最大手牌，以及灯神是否已经受伤，追加条件候选。</td></tr>
      <tr><td>3</td><td>若候选项不足 3 个，或玩家生命低于对应阈值，会补入中毒惩罚。</td></tr>
      <tr><td>4</td><td>最终随机抽出 3 个不同候选，生成选择动作；玩家只需要在这 3 个选项里选 1 个。</td></tr>
    </tbody>
  </table>

  <h3>基础 Three Wishes 候选池</h3>
  ${renderGenieWishPenaltyTable(GENIE_WISH_BASE_ROWS, cardById)}

  <h3>强化 Three Wishes 候选池</h3>
  ${renderGenieWishPenaltyTable(GENIE_WISH_UPGRADED_ROWS, cardById)}

  <h3>等级影响</h3>
  <table class="dq-data-table">
    <thead><tr><th>等级</th><th>变化</th></tr></thead>
    <tbody>
      <tr><td>基础</td><td>基础牌组中有 2 张 ${renderMonsterInlineCard("BadWishes", cardById)}，且它们也是优先起手牌。</td></tr>
      <tr><td>6+</td><td>两张 ${renderMonsterInlineCard("BadWishes", cardById)} 都替换为 ${renderMonsterInlineCard("BadWishes2", cardById)}。</td></tr>
      <tr><td>7+</td><td>额外加入 1 张 ${renderMonsterInlineCard("BadWishes2", cardById)}，强化 Three Wishes 总量增加。</td></tr>
    </tbody>
  </table>
</section>`;
}

function renderGenieWishPenaltyTable(rows, cardById) {
  return `<table class="dq-data-table dq-wish-penalty-table">
  <thead><tr><th>候选惩罚</th><th>进入候选池条件</th><th>实际效果</th></tr></thead>
  <tbody>
${rows
  .map(
    (row) => `<tr>
  <td>${renderMonsterInlineCard(row.card, cardById)}</td>
  <td>${escapeHtml(row.condition)}</td>
  <td>${renderMechanicTemplate(row.effect, cardById)}</td>
</tr>`
  )
  .join("\n")}
  </tbody>
</table>`;
}

function renderMonsterMechanicNotes(monster, bridge, cardById) {
  const notes = monsterCoreMechanicNotes(monster, bridge);
  if (!notes.length) {
    return `<p class="dq-note">没有解析到需要单独说明的特殊机制；主要查看卡牌和等级变化。</p>`;
  }
  return `<div class="dq-mechanic-list dq-core-mechanics">
${notes.slice(0, 4).map((note) => `<p>${renderMechanicTemplate(note, cardById)}</p>`).join("\n")}
</div>`;
}

function monsterCoreMechanicNotes(monster, bridge) {
  const attrs = monster.build_attributes || {};
  const steps = monster.behavior_runtime_rule?.steps || [];
  const effects = new Set(steps.map((step) => step.effect || step.predicate || step.context || step.operation).filter(Boolean));
  const notes = [];
  const seen = new Set();

  for (const key of monsterLookupKeys(monster)) {
    for (const note of MONSTER_CORE_MECHANICS[key] || []) {
      addMechanicNote(notes, seen, note);
    }
  }

  const resistance = monsterResistanceMechanic(monster, notes);
  if (resistance) {
    addMechanicNote(notes, seen, resistance);
  }

  if (hasCloneDeck(monster)) {
    addMechanicNote(notes, seen, "进入战斗时复制玩家当前牌组；固定基础牌组为空不代表没有出牌能力。");
  }

  if (effects.has("complete_invulnerable") && effects.has("zombie_bite") && !mechanicTextHas(notes.join(" "), "ZombieBite")) {
    addMechanicNote(notes, seen, "入场获得完全无敌，并同时挂上 [[ZombieBite]] 衰败机制；倒计时结束后死亡。");
  }
  if (effects.has("forbid_play_card_type")) {
    addMechanicNote(notes, seen, "每回合禁止打出玩家手牌中数量最多的牌型；数量相同时会切换被禁止的牌型。");
  }
  if (effects.has("phoenix_to_egg")) {
    addMechanicNote(notes, seen, "死亡后变为 Phoenix Egg，若同回合未击败蛋，会回到 Phoenix 形态。");
  }
  if (effects.has("hydra")) {
    addMechanicNote(notes, seen, "Hydra 机制会回复非毒性、非火焰伤害；受到伤害会迫使它弃牌。");
  }
  if (effects.has("lose_max_actions")) {
    addMechanicNote(notes, seen, "会降低玩家最大行动点。");
  }
  if (effects.has("lose_max_cards")) {
    addMechanicNote(notes, seen, "会降低玩家最大手牌。");
  }
  if (effects.has("burning")) {
    addMechanicNote(notes, seen, "回合机制会对玩家施加燃烧。");
  }
  if (effects.has("poison")) {
    addMechanicNote(notes, seen, "回合机制会对玩家施加毒性效果。");
  }
  if (effects.has("escape")) {
    addMechanicNote(notes, seen, "存在逃跑机制；若逃跑成功，战斗胜者会被改为怪物。");
  }
  if (effects.has("gain_counter_first")) {
    addMechanicNote(notes, seen, "会阻挡玩家每回合前几张牌；具体数量由怪物计数器决定。");
  }
  if (effects.has("put_card_on_top_of_deck")) {
    addMechanicNote(notes, seen, "入场会把干扰牌放到玩家牌库顶。");
  }
  if ((bridge?.key_behavior_cards || []).length && !notes.length) {
    addMechanicNote(notes, seen, `核心行为主要由 ${mechanicCardListTemplate(bridge.key_behavior_cards)} 承载。`);
  }
  if ((attrs.preferred_starting_cards || []).length && notes.length < 3) {
    addMechanicNote(notes, seen, `起手优先牌：${mechanicCardListTemplate(attrs.preferred_starting_cards)}。`);
  }
  return notes;
}

function monsterLookupKeys(monster) {
  return uniqueTokens([monster.internal_name, monster.class_name, monster.display_name]).map(slugify);
}

function addMechanicNote(notes, seen, note) {
  const key = mechanicComparableText(note);
  if (!key || seen.has(key)) {
    return;
  }
  seen.add(key);
  notes.push(note);
}

function monsterResistanceMechanic(monster, existingNotes = []) {
  const entry = monster.bestiary_entry || "";
  const existing = mechanicComparableText(existingNotes.join(" "));
  const values = [...String(entry).matchAll(/<([^>]+)>/g)]
    .map((match) => translateMonsterBestiaryTerm(match[1]))
    .map((value) => value.replace(/[，。,.\s]+$/g, ""))
    .filter(Boolean)
    .filter((value) => !existing.includes(mechanicComparableText(value)));
  if (!values.length) {
    return "";
  }
  return `抗性/免疫：${values.join("、")}。`;
}

function mechanicTextHas(text, needle) {
  return mechanicComparableText(text).includes(mechanicComparableText(needle));
}

function mechanicComparableText(text) {
  return String(text || "")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/伤害/g, "")
    .replace(/\s+/g, "")
    .replace(/[，。；：、,.!！?？()（）<>"'`/\\-]/g, "")
    .toLowerCase();
}

function mechanicCardListTemplate(tokens = []) {
  return uniqueTokens(tokens)
    .map((token) => `[[${token}]]`)
    .join("、");
}

function renderMechanicTemplate(text, cardById) {
  const source = String(text || "");
  const pattern = /\[\[([^\]]+)\]\]/g;
  let html = "";
  let cursor = 0;
  let match;
  while ((match = pattern.exec(source))) {
    html += escapeHtml(source.slice(cursor, match.index));
    html += renderMonsterInlineCard(match[1], cardById);
    cursor = match.index + match[0].length;
  }
  html += escapeHtml(source.slice(cursor));
  return html;
}

function renderMonsterPlayPattern(monster, bridge, cardById) {
  const bullets = monsterPatternBullets(monster, bridge, cardById);
  const deckTable = renderMonsterDeckTypeTable(monster, cardById);
  const effectTable = renderMonsterEffectHighlights(monster, bridge, cardById);
  const bulletHtml = bullets.length
    ? `<div class="dq-mechanic-list">
${bullets.map((note) => `<p>${note}</p>`).join("\n")}
</div>`
    : `<p class="dq-note">没有解析到额外出牌模式；主要按基础牌组行动。</p>`;
  return `${bulletHtml}
${deckTable}
${effectTable}`;
}

function monsterPatternBullets(monster, bridge, cardById) {
  const attrs = monster.build_attributes || {};
  const deck = groupCounts(attrs.base_deck || []);
  const notes = [];
  if (hasCloneDeck(monster)) {
    notes.push("进入战斗时复制玩家当前牌组；固定牌组为空时也不代表没有出牌能力。");
  } else if (deck.length) {
    const typeSummary = monsterDeckTypeSummary(deck, cardById);
    const mainCards = deck
      .sort((a, b) => Number(b[1]) - Number(a[1]))
      .slice(0, 3)
      .map(([token, count]) => `${renderMonsterInlineCard(token, cardById)} x${escapeHtml(count)}`)
      .join("、");
    notes.push(`基础牌组 ${attrs.base_deck.length} 张${typeSummary ? `，以 ${escapeHtml(typeSummary)} 为主` : ""}；高频牌：${mainCards}。`);
  } else {
    notes.push("没有固定基础牌组；战斗表现主要来自运行时机制、起手装备或特殊状态。");
  }
  if ((attrs.preferred_starting_cards || []).length) {
    notes.push(`优先起手牌：${renderInlineCardList(attrs.preferred_starting_cards, cardById)}。`);
  }
  if ((attrs.starting_equipment || []).length) {
    notes.push(`起手装备：${renderInlineCardList(attrs.starting_equipment, cardById)}，需要优先判断装备带来的持续收益。`);
  }
  if ((bridge?.key_behavior_cards || []).length) {
    notes.push(`关键行为牌：${renderInlineCardList(bridge.key_behavior_cards, cardById)}。`);
  }
  if (hasMonsterBehavior(monster)) {
    const behavior = monsterBehaviorSummary(monster);
    notes.push(`额外机制：${escapeHtml(behavior)}。`);
  }
  if (hasMeaningfulLevelUp(monster)) {
    const level = monsterLevelSummary(monster, cardById);
    notes.push(`等级变化：${level}。`);
  }
  return notes;
}

function renderInlineCardList(tokens, cardById, limit = 6) {
  const all = uniqueTokens(tokens);
  const unique = all.slice(0, limit);
  const suffix = all.length > limit ? `<span class="dq-card-chip-more">等 ${escapeHtml(all.length)} 张</span>` : "";
  return `<span class="dq-card-chip-row">${unique.map((token) => renderMonsterInlineCard(token, cardById)).join("")}${suffix}</span>`;
}

function uniqueTokens(tokens = []) {
  const seen = new Set();
  const unique = [];
  for (const token of tokens || []) {
    const normalized = normalizeCardToken(token);
    if (!normalized) {
      continue;
    }
    const key = slugify(normalized);
    if (!key || seen.has(key)) {
      continue;
    }
    seen.add(key);
    unique.push(normalized);
  }
  return unique;
}

function normalizeCardToken(token) {
  if (token === null || token === undefined) {
    return "";
  }
  return String(token).trim();
}

function monsterDeckTypeSummary(deck, cardById) {
  return monsterDeckTypeRows(deck, cardById)
    .slice(0, 2)
    .map((row) => `${row.label} ${row.count}`)
    .join("、");
}

function renderMonsterDeckTypeTable(monster, cardById) {
  const deck = groupCounts(monster.build_attributes?.base_deck || []);
  if (!deck.length) {
    return "";
  }
  const rows = monsterDeckTypeRows(deck, cardById)
    .map(
      (row) => `<tr>
  <td>${escapeHtml(row.label)}</td>
  <td>${escapeHtml(row.count)}</td>
  <td>${row.cards.map((token) => renderMonsterInlineCard(token, cardById)).join("、")}</td>
</tr>`
    )
    .join("\n");
  return `<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
${rows}
  </tbody>
</table>`;
}

function monsterDeckTypeRows(deck, cardById) {
  const byType = new Map();
  for (const [token, count] of deck) {
    const record = cardRecordFromToken(cardById, token);
    const label = record ? typeLabel(record.card) : "未收录";
    if (!byType.has(label)) {
      byType.set(label, { label, count: 0, cards: [] });
    }
    const row = byType.get(label);
    row.count += Number(count) || 0;
    if (!row.cards.some((card) => slugify(card) === slugify(token))) {
      row.cards.push(token);
    }
  }
  return [...byType.values()]
    .map((row) => ({ ...row, cards: row.cards.slice(0, 5) }))
    .sort((a, b) => {
      const orderA = CARD_TYPE_ORDER.includes(a.label) ? CARD_TYPE_ORDER.indexOf(a.label) : CARD_TYPE_ORDER.length;
      const orderB = CARD_TYPE_ORDER.includes(b.label) ? CARD_TYPE_ORDER.indexOf(b.label) : CARD_TYPE_ORDER.length;
      return orderA - orderB || b.count - a.count || a.label.localeCompare(b.label);
    });
}

function monsterBehaviorSummary(monster) {
  const effects = (monster.behavior_runtime_rule?.steps || [])
    .filter((step) => step.effect || step.predicate || step.category === "state_write")
    .map((step) => monsterBehaviorStepText(step));
  const unique = [...new Set(effects)].slice(0, 4);
  return unique.length ? unique.join("、") : "有额外运行时规则";
}

function meaningfulMonsterLevelSteps(monster) {
  return (monster.level_up_rule?.steps || []).filter((step) => step.effect !== "no_level_up_deck_changes");
}

function monsterLevelStepKey(step) {
  const args = step.args || {};
  return JSON.stringify({
    level: step.level_min ?? null,
    effect: step.effect || step.operation || "",
    conditions: step.conditions || [],
    outCard: args.outCard || "",
    inCard: args.inCard || "",
    value: args.value ?? "",
    monsterPowers: args.monster_powers || args.powers || "",
    health: args.health ?? "",
    healthExact: args.health_by_exact_level || null,
    healthDelta: args.health_delta_by_min_level || null
  });
}

function groupMonsterLevelSteps(steps = []) {
  const groups = new Map();
  for (const step of steps) {
    const key = monsterLevelStepKey(step);
    if (!groups.has(key)) {
      groups.set(key, { step, count: 0 });
    }
    groups.get(key).count += 1;
  }
  return [...groups.values()];
}

function renderMonsterLevelChange(group, cardById) {
  return `${monsterLevelStepHtml(group.step, cardById)}${
    group.count > 1 ? ` <span class="dq-repeat-count">重复 ${escapeHtml(group.count)} 次</span>` : ""
  }`;
}

function monsterLevelSummary(monster, cardById) {
  const groups = groupMonsterLevelSteps(meaningfulMonsterLevelSteps(monster));
  if (!groups.length) {
    return "没有解析到牌组或属性变化";
  }
  const summary = groups
    .slice(0, 3)
    .map((group) => `${group.step.level_min == null ? "特定条件" : `${group.step.level_min}+`}：${renderMonsterLevelChange(group, cardById)}`)
    .join("；");
  return groups.length > 3 ? `${summary}；另有 ${groups.length - 3} 条变化` : summary;
}

function renderMonsterEffectHighlights(monster, bridge, cardById) {
  const rows = monsterEffectHighlightRows(monster, bridge, cardById).slice(0, 14);
  if (!rows.length) {
    return "";
  }
  return `<h3>状态与节奏点</h3>
<table class="dq-data-table">
  <thead><tr><th>类别</th><th>来源</th><th>说明</th></tr></thead>
  <tbody>
${rows
  .map(
    (row) => `<tr>
  <td>${row.category}</td>
  <td>${row.source}</td>
  <td>${row.description}</td>
</tr>`
  )
  .join("\n")}
  </tbody>
</table>`;
}

function monsterEffectHighlightRows(monster, bridge, cardById) {
  const rows = [];
  const seen = new Set();
  const add = (category, source, description, key = `${category}|${source}|${description}`) => {
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    rows.push({ category, source, description });
  };

  for (const step of monster.behavior_runtime_rule?.steps || []) {
    const item = monsterBehaviorHighlight(step);
    if (item) {
      add(
        escapeHtml(item.category),
        escapeHtml(sourceMethodLabel(step.source_method)),
        escapeHtml(item.description),
        `behavior|${item.category}|${item.description}|${step.source_method || ""}`
      );
    }
  }

  for (const token of monsterRelevantCardTokens(monster, bridge)) {
    const record = cardRecordFromToken(cardById, token);
    const text = record
      ? [record.card.display_name, record.card.class_name, record.card.internal_name, record.card.text?.rules].filter(Boolean).join(" ")
      : token;
    for (const item of cardTextHighlights(text)) {
      const source = record ? renderMonsterInlineCard(token, cardById) : `<code>${escapeHtml(token)}</code>`;
      add(item.category, source, item.description, `card|${slugify(token)}|${item.category}|${item.description}`);
    }
  }

  return rows;
}

function monsterBehaviorHighlight(step) {
  const effect = step.effect || step.predicate;
  const description = monsterBehaviorStepText(step);
  if (!effect && !step.operation?.startsWith("field_write:")) {
    return null;
  }
  const defensive = new Set([
    "elemental_resist",
    "super_fireshield",
    "mind_immune",
    "gain_counter_first",
    "gain_dodge",
    "invulnerable",
    "complete_invulnerable",
    "cleanse_curses"
  ]);
  const disruptive = new Set(["poison", "burning", "zombie_bite", "lose_max_actions", "lose_max_cards", "forbid_play_card_type", "destroy_top_message"]);
  const resource = new Set(["draw_cards", "draw_from_void", "create_equipment", "build_random_equipment", "set_mana", "set_mana_gain_by_level"]);
  const special = new Set(["mark_undead", "hydra", "phoenix_attributes", "phoenix_to_egg", "escape", "delayed_end_turn", "clone_player_deck"]);
  if (defensive.has(effect)) {
    return { category: "防御/增益", description };
  }
  if (disruptive.has(effect)) {
    return { category: "负面/干扰", description };
  }
  if (resource.has(effect)) {
    return { category: "资源/节奏", description };
  }
  if (special.has(effect)) {
    return { category: "特殊机制", description };
  }
  if (effect === "add_player_attribute" || effect === "set_player_attribute") {
    return { category: "属性修正", description: `${description}：${monsterStepArgsText(step)}` };
  }
  if (effect === "take_damage") {
    return { category: "伤害", description };
  }
  if (step.operation?.startsWith("field_write:")) {
    return { category: "内部状态", description };
  }
  return null;
}

function monsterRelevantCardTokens(monster, bridge) {
  const attrs = monster.build_attributes || {};
  return uniqueTokens([
    ...(attrs.base_deck || []),
    ...(attrs.starting_equipment || []),
    ...(attrs.preferred_starting_cards || []),
    ...(bridge?.key_behavior_cards || []),
    ...(bridge?.level_up_behavior_cards || []),
    ...(bridge?.referenced_cards || [])
  ]);
}

function cardTextHighlights(text) {
  const raw = String(text || "");
  const checks = [
    { category: "火焰", description: "火焰伤害或燃烧相关。", pattern: /@fir|fire|flame|burn|sear|ignite/i },
    { category: "电系", description: "电系伤害、震击或行动节奏相关。", pattern: /@air|lightning|shock|storm|thunder|electrocute|haste|slow/i },
    { category: "冰霜", description: "冰霜伤害、寒冷或冻结相关。", pattern: /@wat|frost|ice|chill|blizzard|freeze/i },
    { category: "毒性", description: "毒性伤害、中毒或酸蚀相关。", pattern: /@ear|poison|acid|toxic|venom|vile|infect/i },
    { category: "回复/吸血", description: "回复生命、吸血或生命差结算。", pattern: /heal|health|life|vampire|drain|mending/i },
    { category: "牌组干扰", description: "弃牌、移除、偷牌或改变手牌/牌库质量。", pattern: /discard|exile|destroy|steal|enthrall|void|curse|penalty/i },
    { category: "资源/节奏", description: "抽牌、生成牌、获得法力或行动点。", pattern: /\bdraw\b|\bcreate\b|\bgain\b[^.]*\b(mana|action|card)|mana|action/i },
    { category: "防御/免疫", description: "护盾、闪避、反击、抗性或无敌。", pattern: /dodge|block|shield|armor|counter|invulnerable|immune|resist|protect|reduction/i },
    { category: "装备/召唤", description: "装备、图腾、召唤物或持续场面来源。", pattern: /equipment|weapon|armor|totem|summon|companion|phylactery/i }
  ];
  return checks
    .filter((check) => check.pattern.test(raw))
    .map((check) => ({
      category: escapeHtml(check.category),
      description: linkNegativeEffectText(check.description)
    }));
}

function linkNegativeEffectText(text) {
  let html = escapeHtml(text);
  for (const effect of NEGATIVE_EFFECTS) {
    const names = [...new Set([effect.name, ...effect.aliases].filter((name) => /[\u4e00-\u9fa5]/.test(name)))];
    for (const name of names) {
      html = html.replaceAll(escapeHtml(name), `<a class="dq-term" href="/mechanics/negative-effects#${effect.id}">${escapeHtml(name)}</a>`);
    }
  }
  return html;
}

function renderMonsterSkillTable(monster) {
  const index = monster.behavior_index || {};
  const rows = [
    ["入场效果", index.player_effect_methods],
    ["回合触发", index.turn_methods],
    ["出牌限制", index.restriction_methods],
    ["牌组/升级", index.deck_methods],
    ["特殊方法", index.special_methods]
  ]
    .filter(([, methods]) => methods?.length)
    .map(
      ([label, methods]) =>
        `<tr><td>${escapeHtml(label)}</td><td>${methods.map((method) => `<code>${escapeHtml(method.name)}</code>`).join(" ")}</td></tr>`
    )
    .join("\n");
  if (!rows) {
    return `<p class="dq-note">没有解析到独立技能入口。</p>`;
  }
  return `<h3>技能入口</h3>
<table class="dq-data-table">
  <thead><tr><th>类别</th><th>方法</th></tr></thead>
  <tbody>
${rows}
  </tbody>
</table>`;
}

function renderMonsterBehaviorTable(monster, cardById) {
  const meaningful = (monster.behavior_runtime_rule?.steps || []).filter(
    (step) => step.effect || step.predicate || step.category === "state_write"
  );
  if (!meaningful.length) {
    return `<p class="dq-note">没有解析到额外运行时机制；战斗表现主要来自基础牌组。</p>`;
  }
  const rows = meaningful
    .map(
      (step) => `<tr>
  <td>${escapeHtml(sourceMethodLabel(step.source_method))}</td>
  <td>${escapeHtml(monsterBehaviorStepText(step))}</td>
  <td>${monsterStepArgsHtml(step, cardById)}</td>
</tr>`
    )
    .join("\n");
  return `<h3>运行机制</h3>
<table class="dq-data-table">
  <thead><tr><th>触发</th><th>效果</th><th>参数</th></tr></thead>
  <tbody>
${rows}
  </tbody>
</table>`;
}

function monsterStepArgsHtml(step, cardById) {
  const args = step.args || {};
  if (step.effect === "behavior_encoded_in_deck") {
    const cards = [...arrayTokens(args.key_behavior_cards), ...arrayTokens(args.starting_equipment)];
    return cards.length ? renderInlineCardList(cards, cardById, 10) : "见卡牌";
  }
  if (step.effect === "put_card_on_top_of_deck") {
    const count = args.count_expression === "floor(opposing_player.deck.num_cards_left / 2)" ? "对手剩余牌库数量的一半" : args.count_expression;
    return [`卡牌：${renderMonsterInlineCard(args.card, cardById)}`, count ? `数量：${escapeHtml(count)}` : ""].filter(Boolean).join("；");
  }
  if (args.card || args.inCard || args.outCard) {
    const parts = [];
    if (args.outCard) {
      parts.push(`移出：${renderMonsterInlineCard(args.outCard, cardById)}`);
    }
    if (args.inCard) {
      parts.push(`加入：${renderMonsterInlineCard(args.inCard, cardById)}`);
    }
    if (args.card) {
      parts.push(`卡牌：${renderMonsterInlineCard(args.card, cardById)}`);
    }
    const text = monsterStepArgsText(step);
    const filtered = text
      .split("；")
      .filter((part) => !/^(card|inCard|outCard|卡牌)/i.test(part.trim()))
      .map((part) => escapeHtml(part));
    return [...parts, ...filtered].filter(Boolean).join("；");
  }
  return escapeHtml(monsterStepArgsText(step));
}

function sourceMethodLabel(method) {
  return {
    ApplyToPlayer: "入场/套用到玩家",
    StartTurn: "回合开始",
    EndTurn: "回合结束",
    StartTurnAfterPoison: "中毒后回合开始",
    ForbidPlay: "出牌限制",
    CloneDeck: "复制牌组",
    PythonBuildAttributes: "初始牌组"
  }[method] || method || "未知";
}

function monsterBehaviorStepText(step) {
  const key = step.effect || step.predicate || step.operation;
  const labels = {
    add_player_attribute: "调整玩家/怪物战斗属性",
    set_player_attribute: "设置玩家/怪物战斗属性",
    mark_undead: "标记为亡灵",
    hydra: "启用 Hydra 多头回复机制",
    elemental_resist: "获得元素抗性",
    super_fireshield: "获得强化火焰护盾",
    mind_immune: "获得精神免疫",
    gain_counter_first: "获得先制计数或防御计数",
    gain_dodge: "获得闪避",
    lose_max_actions: "降低最大行动点",
    lose_max_cards: "降低最大手牌/抽牌",
    draw_cards: "抽牌",
    draw_from_void: "凭空抽取/生成卡牌",
    create_equipment: "创建装备",
    build_random_equipment: "生成随机装备",
    take_damage: "触发伤害结算",
    poison: "施加中毒",
    burning: "施加燃烧",
    zombie_bite: "触发延迟致死咬击机制",
    phoenix_attributes: "启用 Phoenix 属性",
    phoenix_to_egg: "Phoenix 死亡后转为蛋",
    invulnerable: "获得无敌",
    complete_invulnerable: "获得完全无敌",
    cleanse_curses: "清理诅咒",
    escape: "逃离战斗",
    delayed_end_turn: "延迟结束回合",
    set_mana: "设置法力",
    set_mana_gain_by_level: "按等级调整法力收益",
    clone_player_deck: "复制玩家牌组",
    behavior_encoded_in_deck: "机制由起始牌组和装备承载",
    destroy_top_message: "刷新/清除提示信息",
    forbid_play_card_type: "禁止打出手牌中最常见的牌型",
    put_card_on_top_of_deck: "向牌库顶加入卡牌",
    add_card_to_deck: "向牌组加入卡牌",
    shuffle_deck: "洗牌",
    tick_effect_end_turn: "回合结束推进持续效果",
    visual_stack: "触发视觉/延迟动作",
    random_range: "进行随机分支判定",
    set_active_player: "取得战斗先手"
  };
  if (labels[key]) {
    return labels[key];
  }
  if (step.operation?.startsWith("field_write:")) {
    return MONSTER_FIELD_LABELS[step.operation.replace("field_write:", "")] || "写入怪物内部状态";
  }
  return String(key || "未知机制").replaceAll("_", " ");
}

function monsterStepArgsText(step) {
  const args = step.args || {};
  if (step.effect === "add_player_attribute" || step.effect === "set_player_attribute") {
    const att = args.att ?? args.attribute;
    const label = PLAYER_ATTRIBUTE_LABELS[att] || (att == null ? "属性" : `属性 ${att}`);
    const value = args.x ?? args.value ?? "";
    return value === "" ? label : `${label} ${Number(value) > 0 ? "+" : ""}${value}`;
  }
  if (step.predicate === "forbid_play_card_type") {
    return `牌型：${(args.card_type_strings || []).join("、") || "Action/Spell/Attack"}`;
  }
  if (step.effect === "behavior_encoded_in_deck") {
    const cards = [...(args.key_behavior_cards || []), ...(args.starting_equipment || [])];
    return cards.length ? cards.join("、") : "见卡组信息";
  }
  if (step.effect === "put_card_on_top_of_deck") {
    const count = args.count_expression === "floor(opposing_player.deck.num_cards_left / 2)" ? "对手剩余牌库数量的一半" : args.count_expression;
    return [`卡牌：${args.card || "-"}`, count ? `数量：${count}` : ""].filter(Boolean).join("；");
  }
  if (step.effect === "take_damage") {
    return [`伤害：${args.n ?? args.value ?? "-"}`, args.dtype == null ? "" : `伤害类型：${args.dtype}`].filter(Boolean).join("；");
  }
  if (step.effect === "random_range") {
    return `随机范围：${args.a ?? "-"} 到 ${args.b ?? "-"}`;
  }
  const entries = Object.entries(args)
    .filter(([, value]) => value !== null && value !== undefined && value !== false)
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join("、") : typeof value === "object" ? JSON.stringify(value) : value}`);
  return compactText(entries.join("；") || (step.conditions || []).join("；"), 180);
}

function translateMonsterConditionText(value) {
  let text = String(value || "").trim();
  if (!text) {
    return "";
  }
  const replacements = [
    [/if monster\.level == (\d+) set health to (\d+)/gi, "怪物等级为 $1 时，生命设为 $2"],
    [/apply each threshold whose minimum level is met/gi, "满足等级门槛时逐条生效"],
    [/otherwise leave health unchanged/gi, "其他等级不改变生命"]
  ];
  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }
  return text;
}

function renderMonsterLevelRules(monster, cardById) {
  const groups = groupMonsterLevelSteps(meaningfulMonsterLevelSteps(monster));
  if (!groups.length) {
    return `<p class="dq-note">没有解析到等级提升后的牌组或属性变化。</p>`;
  }
  const rows = groups
    .map(
      (group) => `<tr>
  <td>${escapeHtml(group.step.level_min == null ? "特定条件" : `${group.step.level_min}+`)}</td>
  <td>${renderMonsterLevelChange(group, cardById)}</td>
  <td>${escapeHtml(group.count)}</td>
  <td>${escapeHtml(compactText(translateMonsterConditionText((group.step.conditions || []).join("；")), 160))}</td>
</tr>`
    )
    .join("\n");
  return `<table class="dq-data-table">
  <thead><tr><th>等级</th><th>变化</th><th>次数</th><th>条件说明</th></tr></thead>
  <tbody>
${rows}
  </tbody>
</table>`;
}

function monsterLevelStepHtml(step, cardById) {
  const args = step.args || {};
  if (step.effect === "replace_card") {
    return `将 ${renderMonsterInlineCard(args.outCard, cardById)} 替换为 ${renderMonsterInlineCard(args.inCard, cardById)}`;
  }
  if (step.effect === "add_card") {
    return `加入 ${renderMonsterInlineCard(args.inCard, cardById)}`;
  }
  if (step.effect === "set_monster_powers") {
    return `机制文本变为：${escapeHtml(translateMonsterEntry(args.value || args.monster_powers || ""))}`;
  }
  if (step.effect === "set_monster_health") {
    return `设置生命：${escapeHtml(displayValue(args.health_by_exact_level || args))}`;
  }
  if (step.effect === "increase_monster_health_by_level_thresholds") {
    return `按等级提高生命：${escapeHtml(displayValue(args.health_delta_by_min_level || args))}`;
  }
  if (step.effect === "mark_invisible") {
    return "标记为隐形";
  }
  return escapeHtml(monsterBehaviorStepText(step));
}

function renderMonsterCardSection(monster, bridge, cardById) {
  const attrs = monster.build_attributes || {};
  const deck = groupCounts(attrs.base_deck || []);
  const entries = monsterCardUsageEntries(monster, bridge, cardById);
  const deckSummary = deck.length
    ? `<div class="dq-monster-card-summary">
  <span>基础牌组 ${escapeHtml(attrs.base_deck.length)} 张</span>
  <span>唯一卡牌 ${escapeHtml(deck.length)} 张</span>
</div>
${renderMonsterDeckTypeTable(monster, cardById)}`
    : `<p class="dq-note">${hasCloneDeck(monster) ? "没有固定基础牌组；进入战斗时复制玩家当前牌组。" : "没有固定基础牌组。"}</p>`;

  const grid = entries.length
    ? `<div class="dq-profession-card-grid dq-monster-card-grid">
${entries.map((entry) => renderMonsterCardUsageEntry(entry)).join("\n")}
</div>`
    : `<p class="dq-note">没有解析到可独立列出的怪物卡牌。</p>`;

  return `${deckSummary}
<h3>关联卡牌</h3>
${grid}`;
}

function monsterCardUsageEntries(monster, bridge, cardById) {
  const attrs = monster.build_attributes || {};
  const entries = new Map();
  const add = (token, tag) => {
    const normalized = normalizeCardToken(token);
    if (!normalized) {
      return;
    }
    const key = slugify(normalized);
    if (!key) {
      return;
    }
    if (!entries.has(key)) {
      entries.set(key, {
        token: normalized,
        record: cardRecordFromToken(cardById, normalized),
        tags: []
      });
    }
    const entry = entries.get(key);
    if (tag && !entry.tags.includes(tag)) {
      entry.tags.push(tag);
    }
  };

  for (const [cardId, count] of groupCounts(attrs.base_deck || [])) {
    add(cardId, `基础牌组 x${count}`);
  }
  for (const token of attrs.starting_equipment || []) {
    add(token, "起手装备");
  }
  for (const token of attrs.preferred_starting_cards || []) {
    add(token, "优先起手");
  }
  for (const token of bridge?.key_behavior_cards || []) {
    add(token, "关键行为");
  }
  for (const token of bridge?.level_up_behavior_cards || []) {
    add(token, "等级变化");
  }
  for (const token of bridge?.referenced_cards || []) {
    add(token, "机制引用");
  }
  for (const step of meaningfulMonsterLevelSteps(monster)) {
    const args = step.args || {};
    if (step.effect === "replace_card") {
      add(args.outCard, "等级移出");
      add(args.inCard, "等级加入");
    }
    if (step.effect === "add_card") {
      add(args.inCard, "等级加入");
    }
  }
  for (const step of monster.behavior_runtime_rule?.steps || []) {
    for (const token of monsterCardTokensFromStep(step)) {
      add(token, "机制参数");
    }
  }

  return [...entries.values()].sort((a, b) => {
    const tierA = Number(a.record?.card?.costs_and_stats?.tier ?? 999);
    const tierB = Number(b.record?.card?.costs_and_stats?.tier ?? 999);
    return tierA - tierB || (a.record?.card?.display_name || a.token).localeCompare(b.record?.card?.display_name || b.token);
  });
}

function monsterCardTokensFromStep(step) {
  const args = step.args || {};
  return uniqueTokens([
    args.card,
    args.inCard,
    args.outCard,
    ...arrayTokens(args.key_behavior_cards),
    ...arrayTokens(args.starting_equipment),
    ...arrayTokens(args.cards)
  ]);
}

function arrayTokens(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value ? [value] : [];
}

function cardRecordFromToken(cardById, token) {
  const normalized = normalizeCardToken(token);
  return normalized ? cardById.get(slugify(normalized)) : null;
}

function renderMonsterInlineCard(token, cardById) {
  const record = cardRecordFromToken(cardById, token);
  if (record) {
    return `<a class="dq-card-chip" href="${record.href}">
  <span class="dq-card-chip-thumb">${renderCardFrame(record, "deck")}</span>
  <span class="dq-card-chip-copy"><strong>${escapeHtml(record.card.display_name || token)}</strong><small>${escapeHtml(originalDisplayName(record.card))}</small></span>
  ${renderCardHoverPreview(record)}
</a>`;
  }
  return `<span class="dq-card-chip dq-card-chip-missing">
  <span class="dq-card-chip-thumb">${renderMissingCardFrame(token)}</span>
  <span class="dq-card-chip-copy"><strong>${escapeHtml(token || "-")}</strong></span>
</span>`;
}

function renderCountedMonsterCardChip(token, count, cardById) {
  const record = cardRecordFromToken(cardById, token);
  if (record) {
    const card = record.card || {};
    const meta = [`x${count}`, originalDisplayName(card)].filter(Boolean).join(" · ");
    return `<a class="dq-card-chip dq-counted-card-chip" href="${record.href}" title="${escapeHtml(card.display_name || token)}">
  <span class="dq-card-chip-thumb">${renderCardFrame(record, "deck")}</span>
  <span class="dq-card-chip-copy"><strong>${escapeHtml(card.display_name || token)}</strong><small>${escapeHtml(meta)}</small></span>
  ${renderSnapshotCardHoverPreview(record, count)}
</a>`;
  }
  const label = translatedCardTokenText(token) || token || "-";
  return `<span class="dq-card-chip dq-counted-card-chip dq-card-chip-missing">
  <span class="dq-card-chip-thumb">${renderMissingCardFrame(token)}</span>
  <span class="dq-card-chip-copy"><strong>${escapeHtml(label)}</strong><small>x${escapeHtml(count)}</small></span>
</span>`;
}

function renderSnapshotCardHoverPreview(record, count) {
  const card = record.card || {};
  const rule = compactText(translateRuleText(card.text?.rules), 80);
  return `<span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art">${renderCardFrame(record, "deck")}</span>
  <span class="dq-snapshot-card-preview-copy"><strong>${escapeHtml(card.display_name || card.class_name || record.slug)}</strong><small>${escapeHtml(`x${count} · ${originalDisplayName(card)}`)}</small>${rule ? `<em>${escapeHtml(rule)}</em>` : ""}</span>
</span>`;
}

function renderCountedMonsterCardRow(tokens, cardById, options = {}) {
  const { empty = "无", className = "" } = options;
  const counts = groupCounts(tokens);
  if (!counts.length) {
    return `<span class="dq-muted-chip">${escapeHtml(empty)}</span>`;
  }
  return `<span class="dq-card-chip-row dq-snapshot-card-row ${escapeHtml(className)}">${counts
    .map(([token, count]) => renderCountedMonsterCardChip(token, count, cardById))
    .join("\n")}</span>`;
}

function renderMonsterCardUsageEntry(entry) {
  const meta = entry.tags.join(" / ");
  if (entry.record) {
    return renderProfessionCardLink(entry.record, meta, "dq-profession-card-entry");
  }
  return `<span class="dq-profession-card-link dq-profession-card-entry dq-muted-card dq-muted-card-with-art">
  <span class="dq-deck-card-thumb">${renderMissingCardFrame(entry.token)}</span>
  <strong>${escapeHtml(entry.token)}</strong>
  <span class="dq-profession-card-meta">${escapeHtml(meta)}</span>
</span>`;
}

function renderMissingCardFrame(token) {
  return `<span class="dq-game-card dq-game-card-deck dq-game-card-missing-art">
  ${renderCardNoArt(token || "未收录卡牌")}
</span>`;
}

function groupCardsByLabel(cardRecords) {
  const groups = new Map();
  for (const record of cardRecords) {
    const label = typeLabel(record.card);
    if (!groups.has(label)) {
      groups.set(label, []);
    }
    groups.get(label).push(record);
  }

  return [...groups.entries()]
    .map(([label, records]) => ({ label, anchor: CARD_TYPE_ANCHORS[label] || slugify(label) || "other", records }))
    .sort((a, b) => CARD_TYPE_ORDER.indexOf(a.label) - CARD_TYPE_ORDER.indexOf(b.label));
}

function renderCardPage(record, allRecords, biasIdToProfessions, cardById = new Map()) {
  const card = record.card;
  const stats = card.costs_and_stats || {};
  const index = allRecords.findIndex((candidate) => candidate.slug === record.slug);
  const previous = index > 0 ? allRecords[index - 1] : null;
  const next = index >= 0 && index < allRecords.length - 1 ? allRecords[index + 1] : null;
  const navLinks = [
    previous ? `<a class="dq-button dq-button-secondary" href="${previous.href}">上一张</a>` : "",
    next ? `<a class="dq-button dq-button-secondary" href="${next.href}">下一张</a>` : "",
    `<a class="dq-button" href="/cards">回到卡牌图鉴</a>`
  ]
    .filter(Boolean)
    .join("\n");

  return `${renderFrontmatter(card.display_name || card.class_name, cardPageDescription(record))}
<section class="dq-card-hero">
<div class="dq-card-art-panel">
${renderCardFrame(record, "hero")}
</div>
  <div class="dq-card-info-panel">
    <p class="dq-kicker">${escapeHtml(typeLabel(card))} · ${escapeHtml(stats.tier ?? "-")} 阶</p>
    <h1>${escapeHtml(card.display_name || card.class_name)}</h1>
    ${bilingualOriginalLine(card)}
    <div class="dq-status-row">${renderCardStatusBadge(card)}</div>
    <p class="dq-rules dq-card-rules-fixed">${formatRuleHtml(card.text?.rules, false, true)}</p>
    <div class="dq-stat-row">
      ${cardCost(card).map((item) => `<span class="dq-stat"><strong>${escapeHtml(item.value)}</strong>${escapeHtml(item.label)}</span>`).join("\n")}
    </div>
    <div class="dq-card-inline-block">
      <strong>卡牌出现权重</strong>
      ${renderHeroBiasTags(card, biasIdToProfessions)}
    </div>
    <div class="dq-action-row">
${navLinks}
    </div>
  </div>
</section>

${renderCardSpecificMechanics(record, cardById)}

<section class="dq-wide-panel">
    <h2>卡牌元数据</h2>
    ${renderMetaGrid(cardMetadataItems(card))}
</section>
`;
}

function cardPageDescription(record) {
  const id = record.card?.class_name || record.card?.internal_name || "";
  if (id === "BadWishes") {
    return "基础 Three Wishes：随机展示 3 个惩罚候选，由玩家选择 1 个结算；候选包括加诅咒、灯神加手牌、伤害、治疗、清空法力、扣行动点、扣手牌和中毒。";
  }
  if (id === "BadWishes2") {
    return "强化 Three Wishes：随机展示 3 个更强惩罚候选，由玩家选择 1 个结算；伤害、中毒和扣行动点惩罚更高。";
  }
  if (id === "DeckOfWonder") {
    return "回合开始时从已解锁的非装备卡候选池等概率生成 1 张临时牌；候选池不按楼层或奖励阶级筛选。";
  }
  return compactText(translateRuleText(record.card?.text?.rules), 150);
}

function renderCardSpecificMechanics(record, cardById) {
  const id = record.card?.class_name || record.card?.internal_name || "";
  if (id === "DeckOfWonder") {
    return renderDeckOfWonderMechanics();
  }
  if (id !== "BadWishes" && id !== "BadWishes2") {
    return "";
  }
  const upgraded = id === "BadWishes2";
  const rows = upgraded ? GENIE_WISH_UPGRADED_ROWS : GENIE_WISH_BASE_ROWS;
  return `<section class="dq-wide-panel dq-card-mechanic-panel">
  <h2>${upgraded ? "强化 Three Wishes 具体效果" : "基础 Three Wishes 具体效果"}</h2>
  <p class="dq-note">这张牌打出时不会直接执行固定效果，而是先按当前战斗状态生成候选池，再随机展示 3 个互不重复的选项；玩家只选择其中 1 个结算。</p>
  <p class="dq-note">${upgraded ? "6+ 级灯神会把基础版替换为强化版，7+ 级还会额外加入 1 张强化版。" : "基础灯神牌组中有 2 张基础版 Three Wishes，且它们也是优先起手牌。"}</p>
  ${renderGenieWishPenaltyTable(rows, cardById)}
</section>`;
}

function renderDeckOfWonderMechanics() {
  return `<section class="dq-wide-panel dq-card-mechanic-panel">
  <h2>Deck of Wonder 实际抽牌流程</h2>
  <p class="dq-note">这张装备不是从你现有牌库里抽牌。它在你的回合开始时生成一张新牌放入手牌，然后把那张牌标记为临时牌。</p>
  <table>
    <thead><tr><th>步骤</th><th>实际规则</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>先执行装备卡通用的回合开始流程；如果战斗已经有胜者，就不再生成卡。</td></tr>
      <tr><td>2</td><td>调用随机非装备卡入口，从已解锁、非奖励、非装备、非动态金币价格的候选卡中选 1 张。</td></tr>
      <tr><td>3</td><td>候选池内使用等概率随机下标，不套用宝箱、商店或地图奖励的职业权重。</td></tr>
      <tr><td>4</td><td>用生成牌接口把选中的卡直接放入手牌，再标记为临时；临时牌离开本场战斗后不会长期保留。</td></tr>
    </tbody>
  </table>
  <p class="dq-note">关键边界：它不走奖励生成的 <a href="/mechanics/rewards-and-shops">阶级、亲和度和职业权重</a> 路线。候选池和等概率抽样本身不读取楼层或 tier；但不同楼层此前发生的随机事件可能已经推进 RNG 状态，所以实战中最终抽到哪张仍可能间接不同。</p>
</section>`;
}

function renderProfessionsOverview(professionRecords) {
  const playableRecords = professionRecords.filter(
    (record) => !isSpecialProfessionRecord(record) && !isUnimplementedProfessionRecord(record)
  );
  const specialRecords = professionRecords.filter(isSpecialProfessionRecord);
  const unimplementedRecords = professionRecords.filter(isUnimplementedProfessionRecord);
  return `${renderFrontmatter("职业图鉴", "Dream Quest 职业机制、起始牌组、升级奖励和卡牌出现权重。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Professions</p>
    <h1>职业图鉴</h1>
    <p class="dq-lede">玩家可选职业由技能机制、起始资源、升级奖励和卡牌出现权重共同决定。先看职业节奏，再进入单独页面查看细节。</p>
  </div>
  <span class="dq-count">${playableRecords.length} 个可选职业 · ${specialRecords.length} 个特殊入口</span>
</section>

<section class="dq-callout">
  <strong>开局数据已单列</strong>
  <span>职业页会显示基础开局和全成就档案；全职业 HP、蓝、金币、手牌数、行动点、起始牌组和难度差异集中在 <a href="/mechanics/start-profile-and-difficulty">职业初始与难度</a>。</span>
</section>

<h2>玩家可选职业</h2>
<section class="dq-profession-grid">
${playableRecords.map((record) => renderProfessionTile(record)).join("\n")}
</section>

${specialRecords.length ? `<section class="dq-section-block">
  <h2>特殊入口</h2>
  <p class="dq-note">Random 本身不是独立职业路线，会从已解锁、且可获得成就的职业中随机选择一个。</p>
  <section class="dq-profession-grid dq-profession-grid-narrow">
${specialRecords.map((record) => renderProfessionTile(record)).join("\n")}
  </section>
</section>` : ""}

${unimplementedRecords.length ? `<section class="dq-section-block">
  <h2>未实装资料</h2>
  <p class="dq-note">这些条目有类、贴图、文本和初始化数据，但没有进入玩家职业选择列表；不参与 Random、宝箱、商店或升级出卡概率。</p>
  <section class="dq-profession-grid dq-profession-grid-narrow">
${unimplementedRecords.map((record) => renderProfessionTile(record)).join("\n")}
  </section>
</section>` : ""}
`;
}

function renderProfessionCatalog(professionRecords) {
  const playableRecords = professionRecords.filter(
    (record) => !isSpecialProfessionRecord(record) && !isUnimplementedProfessionRecord(record)
  );
  const specialRecords = professionRecords.filter(isSpecialProfessionRecord);
  const unimplementedRecords = professionRecords.filter(isUnimplementedProfessionRecord);
  return `${renderFrontmatter("职业速览", "Dream Quest 全职业起始资源和能力比较。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Profession Catalog</p>
    <h1>职业速览</h1>
    <p class="dq-lede">职业图鉴已经合并了全职业列表。这里保留为旧入口，点击职业名进入详细页面。</p>
  </div>
  <a class="dq-button" href="/professions">进入职业图鉴</a>
</section>

<h2>玩家可选职业</h2>
<section class="dq-profession-table">
${playableRecords.map((record) => renderProfessionRow(record)).join("\n")}
</section>

${specialRecords.length ? `<section class="dq-section-block">
  <h2>特殊入口</h2>
  <section class="dq-profession-table">
${specialRecords.map((record) => renderProfessionRow(record)).join("\n")}
  </section>
</section>` : ""}

${unimplementedRecords.length ? `<section class="dq-section-block">
  <h2>未实装资料</h2>
  <p class="dq-note">仅保留为资料参考，不作为玩家可选职业计算。</p>
  <section class="dq-profession-table">
${unimplementedRecords.map((record) => renderProfessionRow(record)).join("\n")}
  </section>
</section>` : ""}
`;
}

function renderProfessionTile(record) {
  const p = record.profession;
  const image = record.heroImage || record.iconImage;
  return `<a class="dq-profession-tile" href="${record.href}">
  <span class="dq-profession-art">${image ? `<img src="${image}" alt="${escapeHtml(p.display_name)}" loading="eager">` : ""}</span>
  <span class="dq-profession-copy">
    <strong>${escapeHtml(p.display_name)}</strong>
    ${bilingualOriginalLine(p)}
    <span class="dq-status-row">${renderProfessionStatusBadge(p)}</span>
    <em>${professionTone(p).join(" · ")}</em>
    <span>${escapeHtml(compactText(translatedProfessionAbility(p), 120))}</span>
  </span>
</a>`;
}

function renderProfessionRow(record) {
  const p = record.profession;
  const stats = p.initializer?.stats || {};
  return `<a class="dq-profession-row" href="${record.href}">
  <span>${record.iconImage || record.heroImage ? `<img src="${record.iconImage || record.heroImage}" alt="${escapeHtml(p.display_name)}" loading="eager">` : ""}</span>
  <strong>${escapeHtml(p.display_name)}</strong>
  <em>${escapeHtml(originalDisplayName(p))} · ${escapeHtml(compactText(translatedProfessionAbility(p), 120))}</em>
  <span class="dq-stat-row">${renderStatPills(stats)}</span>
</a>`;
}

function renderRandomProfessionPage(record) {
  const p = record.profession;
  const abilityCn = translatedProfessionAbility(p);
  const portraitImage = record.heroImage || record.iconImage;
  return `${renderFrontmatter(p.display_name || p.id, compactText(abilityCn, 150))}
<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>${escapeHtml(p.display_name || p.id)}</h1>
    ${bilingualOriginalLine(p)}
    <div class="dq-tag-row">${renderProfessionStatusBadge(p)}<span>随机入口</span><span>无独立牌池</span></div>
  </div>
  <div class="dq-profession-portrait">
    ${portraitImage ? `<img src="${portraitImage}" alt="${escapeHtml(p.display_name)}" loading="lazy">` : ""}
  </div>
</section>

${renderProfessionParsedData(p, abilityCn)}

<section class="dq-section-block">
  <h2>随机职业机制</h2>
  <div class="dq-mechanic-list">
    <p>Random 不是一条独立职业路线。开局会从已解锁、且可获得成就的职业中随机选择 1 个，然后以该职业开始游戏。</p>
    <p>抽中后，生命、法力、行动点、装备槽、起始牌组、职业技能、升级固定奖励、卡牌出现权重都使用被选中职业的规则。</p>
    <p>因此本页不展示单独的起始牌组、升级奖励或职业专属卡牌；实际内容请查看抽中的职业页面。</p>
  </div>
  <table class="dq-data-table">
    <thead><tr><th>项目</th><th>结论</th></tr></thead>
    <tbody>
      <tr><td>抽选范围</td><td>已解锁，并且该职业自身可以获得成就。</td></tr>
      <tr><td>职业数据</td><td>按抽中的真实职业读取，不使用 Random 页面里的默认统计。</td></tr>
      <tr><td>卡牌出现概率</td><td>按抽中职业的基础权重、职业 ID 修正和升级奖励节点计算。</td></tr>
      <tr><td>页面导航</td><td>需要查看具体机制时，从职业图鉴进入对应职业页。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/appearance-bias">查看卡牌出现权重机制</a>
</section>
`;
}

function renderProfessionPage({ record, cardRecords, cardById, combatAbilities, dungeonActions, songs, assetLookup, biasIdToProfessions }) {
  const p = record.profession;
  if (p.id === "random") {
    return renderRandomProfessionPage(record);
  }
  const stats = p.initializer?.stats || {};
  const deck = groupCounts(p.initializer?.deck || []);
  const primaryRewardSkills = collectPrimaryRewardSkills(p, combatAbilities, dungeonActions, assetLookup);
  const combat = dedupeSkills([...collectSkillsForProfession(p, combatAbilities, "CombatAbility"), ...primaryRewardSkills.combat]).sort(
    (a, b) => (a.display_name || a.id || "").localeCompare(b.display_name || b.id || "")
  );
  let dungeon = dedupeSkills([...collectSkillsForProfession(p, dungeonActions, "DungeonAction"), ...primaryRewardSkills.dungeon]).sort(
    (a, b) => (a.display_name || a.id || "").localeCompare(b.display_name || b.id || "")
  );
  if (p.id === "bard") {
    const sing = dungeonActions.find((action) => action.class_name === "DungeonActionSing" || action.id === "Sing");
    if (sing && !dungeon.some((action) => action.class_name === sing.class_name || action.id === sing.id)) {
      dungeon = [...dungeon, sing];
    }
  }
  const abilityCn = translatedProfessionAbility(p);
  const portraitImage = record.heroImage || record.iconImage;
  const scriptName = p.class_name || p.initializer?.class_name || p.script || p.id;
  const unimplementedNotice = UNIMPLEMENTED_PROFESSION_IDS.has(p.id)
    ? `<section class="dq-callout">
  <strong>未实装职业</strong>
  <span>这个职业有类、贴图、文本、起始牌组和部分升级数据，但没有出现在玩家可选职业池中。页面保留为资料参考；它不参与 Random、宝箱、商店或升级出卡概率计算。</span>
</section>`
    : "";

  return `${renderFrontmatter(p.display_name || p.id, compactText(abilityCn, 150))}
<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>${escapeHtml(p.display_name || p.id)}</h1>
    ${bilingualOriginalLine(p)}
    <div class="dq-tag-row">${renderProfessionStatusBadge(p)}<span>${escapeHtml(scriptName)}</span></div>
  </div>
  <div class="dq-profession-portrait">
    ${portraitImage ? `<img src="${portraitImage}" alt="${escapeHtml(p.display_name)}" loading="lazy">` : ""}
  </div>
</section>

${unimplementedNotice}

<section class="dq-stat-row dq-stat-row-wide">
${renderStatPills(stats)}
</section>

${renderProfessionParsedData(p, abilityCn)}

${renderProfessionStartProfileSummary(p)}

${renderProfessionMechanics(p, songs)}

${renderProfessionLevelRewards(p, cardById, combatAbilities, dungeonActions, assetLookup)}

<section class="dq-two-column">
  <div>
    <h2>起始牌组</h2>
    <div class="dq-deck-grid">
      ${deck
        .map(([cardId, count]) => {
          const card = cardById.get(slugify(cardId));
          const label = card?.card.display_name || cardId;
          const href = card?.href || "/cards";
          if (card) {
            return renderProfessionCardLink(card, `x${count}`, "dq-deck-card-link");
          }
          return `<a href="${href}"><strong>${escapeHtml(label)}</strong><span>x${count}</span></a>`;
        })
        .join("\n")}
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      ${(p.hero_names || []).map((name) => `<span>${escapeHtml(name)}</span>`).join("\n") || "<span>随机英雄</span>"}
    </div>
    ${renderProfessionBiasSummary(p, biasIdToProfessions)}
  </div>
</section>

${renderProfessionCardInfoSection(p, cardRecords || [])}

${combat.length ? `## 战斗技能详情\n\n<p class="dq-note">这里合并显示职业初始战斗能力和升级主奖励解锁的战斗能力；具体解锁等级以上方“升级主奖励”为准。</p>\n\n<section class="dq-skill-grid">\n${combat.map((skill) => renderSkillTile(skill, skillImage(assetLookup, skill))).join("\n")}\n</section>` : ""}

${dungeon.length ? `## 地牢行动详情\n\n<p class="dq-note">这里合并显示开局自带、职业核心机制和升级主奖励解锁的地牢行动；具体解锁等级以上方“升级主奖励”为准。</p>\n\n<section class="dq-skill-grid">\n${dungeon.map((skill) => renderSkillTile(skill, skillImage(assetLookup, skill))).join("\n")}\n</section>` : ""}

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
`;
}

function collectSkillsForProfession(profession, skills, prefix) {
  const wanted = new Set();
  for (const item of profession.action_loadout?.dungeon_actions || []) {
    wanted.add(slugify(item.class_name));
    wanted.add(slugify(String(item.class_name || "").replace("DungeonAction", "")));
  }

  return skills
    .filter((skill) => {
      const byReference = (skill.profession_references || []).some(
        (reference) =>
          reference.profession_class === profession.class_name &&
          reference.source !== "static_starting_or_related_ids"
      );
      const byId =
        wanted.has(slugify(skill.id)) ||
        wanted.has(slugify(skill.class_name)) ||
        wanted.has(slugify(String(skill.class_name || "").replace(prefix, "")));
      return byReference || byId;
    })
    .sort((a, b) => (a.display_name || a.id || "").localeCompare(b.display_name || b.id || ""));
}

function renderStartProfileAuditGuide(professionRecords, cardById, auditRaw = "", context = {}) {
  const rows = professionRecords
    .slice()
    .sort((a, b) => (a.profession.display_name || "").localeCompare(b.profession.display_name || ""));
  const auditDate = auditRaw.match(/^Date:\s*(.+)$/m)?.[1] || "2026-05-31";
  return `${renderFrontmatter("职业初始与难度", "职业初始 HP、蓝、金币、手牌数、起始牌组，升级加成，以及难度和全成就差异。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Start Profiles</p>
    <h1>职业初始与难度</h1>
    <p class="dq-lede">这里把开局最容易混在一起的四件事拆开：职业基础初始化、升级时自动成长、全成就档案叠加，以及难度对升级 HP 和地牢奖励的后处理。</p>
  </div>
  <span class="dq-count">${rows.length} 个职业 · ${escapeHtml(auditDate)}</span>
</section>

<section class="dq-callout">
  <strong>先看结论</strong>
  <span>职业 initializer 只给基础开局；全成就档案再叠加 HP +4、蓝 +2、金币 20，并对 Thief 使用已验证牌组覆盖。实际进入游戏时还要套难度：Kitten 起始 HP +5，Grizzly Bear 追加 Attack1 x1，Velociraptor 追加 Attack1 x2。用全成就 Thief 校验就是 Kitten HP 24，Grizzly Bear / Velociraptor HP 19。升级 HP 会自动增加最大生命和当前生命，并继续叠加难度与 FLOOR1 修正。</span>
</section>

<section class="dq-section-block">
  <h2>难度差异</h2>
  <table class="dq-data-table">
    <thead><tr><th>难度</th><th>起始职业数据</th><th>升级 HP 修正</th><th>地牢奖励后处理</th></tr></thead>
    <tbody>
${START_PROFILE_DIFFICULTY_ROWS.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>难度开局校验</h2>
  <p class="dq-note">下面先用 Thief 展示实际开局怎么套难度。其它职业同样先取职业基础或全成就档案，再按同一难度规则修正 HP 和追加 Attack1。</p>
  ${renderDifficultyStartProfileExamples(rows, cardById)}
</section>

<section class="dq-section-block">
  <h2>难度影响范围</h2>
  <table class="dq-data-table">
    <thead><tr><th>系统</th><th>核对入口</th><th>结论</th></tr></thead>
    <tbody>
${START_PROFILE_DIFFICULTY_SCOPE_ROWS.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>升级 HP 结算</h2>
  <p class="dq-note">升级 HP 不是单纯的职业表数值。原版流程会先算职业基础 HP，再叠加难度和用户属性修正，最后调用 GainMaxHealth，因此最大生命和当前生命都会增加；升级收尾还会满血。</p>
  <table class="dq-data-table">
    <thead><tr><th>来源</th><th>代码入口</th><th>规则</th></tr></thead>
    <tbody>
${START_PROFILE_LEVEL_UP_HEALTH_ROWS.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>升级加成</h2>
  <p class="dq-note">这张表不是开局属性，而是玩家升级时自动结算的职业基础 HP、可进入的奖励选项池、职业主奖励节点和 FixedBonus 固定节点。Random 仍取决于实际抽中的职业。</p>
  ${renderStartProfileUpgradeTable(rows, cardById, context)}
</section>

<section class="dq-section-block">
  <h2>基础开局</h2>
  <p class="dq-note">这张表是职业 initializer 的基础开局，尚未套用 Kitten / Grizzly Bear / Velociraptor 的开局修正。</p>
  ${renderStartProfileTable(rows, "fresh", cardById)}
</section>

<section class="dq-section-block">
  <h2>全成就档案</h2>
  <p class="dq-note">除已验证的 Thief 牌组覆盖外，其它职业当前保留基础起始牌组，只叠加全局资源：HP +4、蓝 +2、金币设为 20；这张表也尚未套用难度修正。</p>
  ${renderStartProfileTable(rows, "all-achievements", cardById)}
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">查看职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/rewards-and-shops">查看奖励和难度后处理</a>
</section>
`;
}

function renderStartProfileTable(records, profile, cardById) {
  return `<div class="dq-table-scroll">
<table class="dq-data-table dq-profile-table">
  <thead><tr><th>职业</th><th>HP</th><th>蓝</th><th>手牌</th><th>行动</th><th>金币</th><th>起始牌组</th></tr></thead>
  <tbody>
${records
  .map((record) => {
    const profession = record.profession;
    const start = professionStartProfile(profession, profile);
    const deck = formatCardCountText(start.deck, { empty: "无" });
    return `<tr>
  <td><a href="${record.href}">${escapeHtml(profession.display_name || profession.id)}</a><br><small>${escapeHtml(originalDisplayName(profession))}</small></td>
  <td>${escapeHtml(start.health ?? 0)}</td>
  <td>${escapeHtml(start.mana ?? 0)}</td>
  <td>${escapeHtml(start.cards ?? 0)}</td>
  <td>${escapeHtml(start.actions ?? 0)}</td>
  <td>${escapeHtml(start.gold ?? 0)}</td>
  <td class="dq-long-cell">${escapeHtml(deck)}</td>
</tr>`;
  })
  .join("\n")}
  </tbody>
</table>
</div>`;
}

function renderProfessionStartProfileSummary(profession) {
  const fresh = professionStartProfile(profession, "fresh");
  const achieved = professionStartProfile(profession, "all-achievements");
  const deckChanged = formatCardCountText(fresh.deck) !== formatCardCountText(achieved.deck);
  return `<section class="dq-section-block">
  <h2>开局档案</h2>
  <table class="dq-data-table">
    <thead><tr><th>档案</th><th>资源</th><th>起始牌组</th></tr></thead>
    <tbody>
      <tr><td>基础开局</td><td>${escapeHtml(profileResourceText(fresh))}</td><td>${escapeHtml(formatCardCountText(fresh.deck))}</td></tr>
      <tr><td>全成就</td><td>${escapeHtml(profileResourceText(achieved))}</td><td>${escapeHtml(formatCardCountText(achieved.deck))}</td></tr>
    </tbody>
  </table>
  <p class="dq-note">这两行是职业基础和档案覆盖，实际开局还要套难度：Kitten 起始 HP +5，Grizzly Bear 追加 Attack1 x1，Velociraptor 追加 Attack1 x2；Kitten / Grizzly Bear 升级 HP 还会额外 +1。${deckChanged ? "此职业存在已验证的全成就牌组覆盖。" : "此职业当前未恢复到职业专属全成就牌组覆盖。"}</p>
  <p><a href="/mechanics/start-profile-and-difficulty">查看全职业开局与难度表</a></p>
</section>`;
}

function renderMonsterLevelSnapshotGuide(monsterRecords, snapshotRows, cardById) {
  const monsterCount = new Set(snapshotRows.map((row) => monsterSnapshotRowKey(row))).size;
  const levels = snapshotRows.map((row) => Number(row.level)).filter(Number.isFinite);
  const minLevel = levels.length ? Math.min(...levels) : "-";
  const maxLevel = levels.length ? Math.max(...levels) : "-";
  return `${renderFrontmatter("怪物等级快照", "各怪物不同等级的 HP、MP、行动、手牌，以及最低等级最终卡组和后续增量卡牌。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Monster Snapshots</p>
    <h1>怪物等级快照</h1>
    <p class="dq-lede">按恢复出的 MonsterData 等级范围展开每个怪物。最低等级行显示最终卡组；后续等级行只显示相比上一等级新增的关键牌。所有卡牌条目都带图片和悬浮提示。</p>
  </div>
  <span class="dq-count">${monsterCount} 个怪物 · ${snapshotRows.length} 行</span>
</section>

<section class="dq-type-grid">
  <span><strong>${monsterCount}</strong><em>覆盖怪物</em></span>
  <span><strong>${snapshotRows.length}</strong><em>等级行</em></span>
  <span><strong>${escapeHtml(minLevel)}-${escapeHtml(maxLevel)}</strong><em>等级范围</em></span>
  <span><strong>TSV</strong><em><a href="/assets/data/monster-level-hp-deck-snapshots.tsv">下载原表</a></em></span>
</section>

<section class="dq-callout">
  <strong>读表方式</strong>
  <span>怪物列内压缩展示等级、HP、MP、行动和手牌。卡组列使用增量方式：最低等级保留完整最终卡组；后续等级只显示新增关键牌，并排除 DiluteDeck 生成的 Attack1-4。</span>
</section>

${renderMonsterSnapshotIndex(monsterRecords, snapshotRows)}

<section class="dq-section-block">
  <h2>全量快照</h2>
  ${renderMonsterSnapshotFrame()}
</section>
`;
}

function renderMonsterSnapshotFrame() {
  return `<div id="monster-snapshot-frame" class="dq-snapshot-frame-shell">
  <iframe class="dq-snapshot-frame" name="monster-snapshot-frame" src="/assets/data/monster-level-snapshots-incremental.html" title="全量怪物等级快照" data-monster-snapshot-frame></iframe>
</div>
<p class="dq-note"><a href="/assets/data/monster-level-snapshots-incremental.html" target="_blank" rel="noopener" data-monster-snapshot-open>打开独立全量表</a>。表内按增量展示：最低等级显示最终卡组，后续等级只显示新增关键牌。</p>`;
}

function renderMonsterSnapshotIndex(monsterRecords, snapshotRows) {
  const byMonster = buildMonsterSnapshotMap(snapshotRows);
  const recordByKey = new Map(monsterRecords.map((record) => [monsterSnapshotRecordKey(record.monster), record]));
  const links = [...byMonster.entries()].map(([key, rows]) => {
    const record = recordByKey.get(key);
    const first = rows[0];
    const title = record?.monster.display_name || first.display_name || first.monster;
    const levelText = `${rows[0].level}-${rows[rows.length - 1].level}`;
    const anchor = monsterSnapshotAnchor(first);
    const image = record?.image
      ? `<span class="dq-snapshot-index-thumb"><img src="${record.image}" alt="${escapeHtml(title)}" loading="lazy"></span>`
      : `<span class="dq-snapshot-index-thumb dq-snapshot-index-thumb-empty"></span>`;
    return `<a class="dq-snapshot-index-card" href="/assets/data/monster-level-snapshots-incremental.html#${anchor}" target="monster-snapshot-frame" data-monster-snapshot-target="${escapeHtml(anchor)}">
  ${image}
  <span class="dq-snapshot-index-copy"><strong>${escapeHtml(title)}</strong><small>${escapeHtml(first.monster)} · ${escapeHtml(levelText)} 级 · ${rows.length} 行</small></span>
</a>`;
  });
  return `<section class="dq-link-grid dq-link-grid-four dq-snapshot-index-grid">
${links.join("\n")}
</section>`;
}

function renderMonsterSnapshotStandaloneTable(monsterRecords, snapshotRows, cardById) {
  const tableHtml = renderMonsterSnapshotTable(snapshotRows, monsterRecords, cardById, { includeMonster: true }).replaceAll(
    "<a ",
    '<a target="_parent" '
  );
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>怪物等级快照全量表</title>
  <style>
    :root {
      color-scheme: light;
      --dq-paper: #f7f2e8;
      --dq-panel: #fffaf1;
      --dq-ink: #3f322b;
      --dq-muted: #77685f;
      --dq-line: rgba(70, 42, 26, 0.18);
      --dq-accent: #883e23;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--dq-paper);
      color: var(--dq-ink);
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px;
    }
    a { color: var(--dq-accent); }
    .dq-table-scroll {
      width: 100%;
      overflow: auto;
      padding: 0 0 12px;
    }
    .dq-data-table {
      width: 100%;
      min-width: 860px;
      border-collapse: collapse;
      background: var(--dq-panel);
    }
    .dq-data-table th,
    .dq-data-table td {
      padding: 10px 12px;
      border: 1px solid var(--dq-line);
      text-align: left;
      vertical-align: top;
    }
    .dq-data-table th {
      position: sticky;
      top: 0;
      z-index: 20;
      background: #efe0c6;
      color: var(--dq-accent);
      font-size: 13px;
    }
    .dq-long-cell { min-width: 520px; }
    .dq-snapshot-monster-cell { min-width: 280px; }
    .dq-snapshot-monster {
      display: grid;
      grid-template-columns: 58px minmax(0, 1fr);
      gap: 10px;
      align-items: center;
      color: var(--dq-ink);
      text-decoration: none;
    }
    .dq-snapshot-monster-thumb {
      display: grid;
      width: 58px;
      height: 58px;
      place-items: center;
      overflow: hidden;
      border: 1px solid var(--dq-line);
      border-radius: 8px;
      background: var(--dq-paper);
    }
    .dq-snapshot-monster-thumb img {
      width: 100%;
      height: 100%;
      padding: 4px;
      object-fit: contain;
    }
    .dq-snapshot-monster-copy strong,
    .dq-snapshot-monster-copy small {
      display: block;
      overflow-wrap: anywhere;
    }
    .dq-snapshot-monster-copy small {
      margin-top: 3px;
      color: var(--dq-muted);
      font-size: 12px;
      font-weight: 800;
    }
    .dq-snapshot-stat-row {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 8px;
    }
    .dq-snapshot-stat-row span {
      display: inline-flex;
      min-height: 23px;
      align-items: center;
      overflow: hidden;
      border: 1px solid var(--dq-line);
      border-radius: 6px;
      background: var(--dq-paper);
    }
    .dq-snapshot-stat-row b,
    .dq-snapshot-stat-row em {
      padding: 2px 6px;
      font-size: 11px;
      line-height: 1.2;
    }
    .dq-snapshot-stat-row b {
      color: var(--dq-muted);
    }
    .dq-snapshot-stat-row em {
      background: var(--dq-panel);
      color: var(--dq-ink);
      font-style: normal;
      font-weight: 900;
    }
    .dq-card-chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
    }
    .dq-card-chip {
      position: relative;
      z-index: 1;
      display: inline-grid;
      grid-template-columns: 48px minmax(0, 1fr);
      gap: 8px;
      align-items: center;
      min-height: 48px;
      max-width: 190px;
      padding: 4px 8px 4px 4px;
      border: 1px solid var(--dq-line);
      border-radius: 8px;
      background: var(--dq-panel);
      color: var(--dq-ink);
      text-decoration: none;
    }
    .dq-card-chip:hover,
    .dq-card-chip:focus-visible {
      border-color: rgba(136, 62, 35, 0.48);
      box-shadow: 0 10px 24px rgba(54, 32, 20, 0.12);
      z-index: 10002;
    }
    .dq-card-chip-thumb {
      display: block;
      width: 48px;
    }
    .dq-game-card {
      display: block;
      width: 100%;
      aspect-ratio: 8 / 5.7;
      overflow: hidden;
      border: 1px solid rgba(70, 42, 26, 0.16);
      border-radius: 8px;
      background: #fff;
    }
    .dq-game-card img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    .dq-card-no-art {
      display: grid;
      width: 100%;
      height: 100%;
      place-items: center;
      padding: 4px;
      color: var(--dq-muted);
      font-size: 10px;
      font-weight: 800;
      text-align: center;
    }
    .dq-card-chip-copy {
      min-width: 0;
    }
    .dq-card-chip-copy strong,
    .dq-card-chip-copy small {
      display: block;
      overflow-wrap: anywhere;
    }
    .dq-card-chip-copy strong {
      color: var(--dq-ink);
      font-size: 12px;
      line-height: 1.2;
    }
    .dq-card-chip-copy small {
      margin-top: 3px;
      color: var(--dq-muted);
      font-size: 11px;
      font-weight: 800;
      line-height: 1.2;
    }
    .dq-card-chip-missing { border-style: dashed; }
    .dq-snapshot-card-preview {
      position: absolute;
      left: 0;
      bottom: calc(100% + 8px);
      display: grid;
      grid-template-columns: 96px minmax(0, 1fr);
      gap: 10px;
      width: min(300px, 78vw);
      padding: 10px;
      border: 1px solid rgba(70, 42, 26, 0.22);
      border-radius: 8px;
      background: rgba(255, 251, 243, 0.98);
      box-shadow: 0 18px 40px rgba(54, 32, 20, 0.22);
      color: var(--dq-ink);
      opacity: 0;
      pointer-events: none;
      text-align: left;
      transform: translateY(6px);
      transition:
        opacity 0.14s ease,
        transform 0.14s ease,
        visibility 0.14s ease;
      visibility: hidden;
    }
    .dq-card-chip:hover .dq-snapshot-card-preview,
    .dq-card-chip:focus-visible .dq-snapshot-card-preview {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
    .dq-snapshot-card-preview-art .dq-game-card {
      box-shadow: none;
    }
    .dq-snapshot-card-preview-copy {
      display: grid;
      gap: 4px;
      align-content: start;
      min-width: 0;
    }
    .dq-snapshot-card-preview-copy strong,
    .dq-snapshot-card-preview-copy small,
    .dq-snapshot-card-preview-copy em {
      display: block;
      overflow-wrap: anywhere;
    }
    .dq-snapshot-card-preview-copy strong {
      color: var(--dq-ink);
      font-size: 14px;
      line-height: 1.2;
    }
    .dq-snapshot-card-preview-copy small {
      color: var(--dq-muted);
      font-size: 12px;
      font-weight: 800;
      line-height: 1.25;
    }
    .dq-snapshot-card-preview-copy em {
      color: var(--dq-muted);
      font-size: 12px;
      font-style: normal;
      line-height: 1.35;
    }
    .dq-snapshot-key-card {
      display: grid;
      gap: 7px;
    }
    .dq-snapshot-key-label,
    .dq-muted-chip {
      width: max-content;
      max-width: 100%;
      padding: 3px 7px;
      border: 1px solid var(--dq-line);
      border-radius: 6px;
      background: var(--dq-paper);
      color: var(--dq-muted);
      font-size: 11px;
      font-weight: 900;
    }
  </style>
</head>
<body>
${tableHtml}
</body>
</html>`;
}

function renderMonsterSnapshotMonsterCell(record, row) {
  const title = record?.monster.display_name || row.display_name || row.monster;
  const href = record?.href || `/monsters/${monsterSnapshotRowKey(row)}`;
  const image = record?.image
    ? `<span class="dq-snapshot-monster-thumb"><img src="${record.image}" alt="${escapeHtml(title)}" loading="lazy"></span>`
    : `<span class="dq-snapshot-monster-thumb dq-snapshot-monster-thumb-empty"></span>`;
  return `<td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="${href}">
  ${image}
  <span class="dq-snapshot-monster-copy"><strong>${escapeHtml(title)}</strong><small>${escapeHtml(row.monster)}</small>${renderMonsterSnapshotStatBadges(row)}</span>
</a></td>`;
}

function renderMonsterSnapshotStatBadges(row) {
  const items = [
    ["等级", row.level],
    ["HP", row.health],
    ["MP", row.mana],
    ["行动", row.actions],
    ["手牌", row.draw]
  ];
  return `<span class="dq-snapshot-stat-row">${items
    .map(([label, value]) => `<span><b>${escapeHtml(label)}</b><em>${escapeHtml(value)}</em></span>`)
    .join("")}</span>`;
}

function renderMonsterSnapshotDeckCell(row, previousRow, cardById) {
  const delta = monsterSnapshotDeckDelta(row, previousRow);
  return `<div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">${escapeHtml(delta.label)}</span>
  ${renderCountedMonsterCardRow(delta.tokens, cardById, { empty: delta.empty, className: "dq-snapshot-key-cards" })}
</div>`;
}

function renderMonsterSnapshotTable(snapshotRows, monsterRecords, cardById, options = {}) {
  if (!snapshotRows.length) {
    return `<p class="dq-note">没有找到怪物等级快照 TSV 数据。</p>`;
  }
  const { includeMonster = false } = options;
  const recordByKey = new Map(monsterRecords.map((record) => [monsterSnapshotRecordKey(record.monster), record]));
  const previousById = buildPreviousMonsterSnapshotMap(snapshotRows);
  return `<div class="dq-table-scroll">
<table class="dq-data-table dq-snapshot-table">
  <thead><tr>${includeMonster ? "<th>怪物 / 等级数据</th>" : "<th>等级数据</th>"}<th>卡组增量</th></tr></thead>
  <tbody>
${snapshotRows
  .map((row) => {
    const record = recordByKey.get(monsterSnapshotRowKey(row));
    const previousRow = previousById.get(monsterSnapshotRowId(row));
    const monsterCell = includeMonster
      ? renderMonsterSnapshotMonsterCell(record, row)
      : `<td class="dq-snapshot-monster-cell">${renderMonsterSnapshotStatBadges(row)}</td>`;
    return `<tr id="${monsterSnapshotAnchor(row)}">
  ${monsterCell}
  <td class="dq-long-cell dq-snapshot-deck-cell">${renderMonsterSnapshotDeckCell(row, previousRow, cardById)}</td>
</tr>`;
  })
  .join("\n")}
  </tbody>
</table>
</div>`;
}

function renderMonsterSnapshotSection(record, snapshots, cardById) {
  if (!snapshots?.length) {
    return `<section class="dq-section-block">
  <h2>HP / 蓝 / 牌组快照</h2>
  <p class="dq-note">这个怪物没有进入当前等级快照表。</p>
</section>`;
  }
  return `<section class="dq-section-block">
  <h2>HP / 蓝 / 牌组快照</h2>
  <p class="dq-note">这些行来自怪物等级快照 TSV。最低等级显示完整最终卡组；后续等级只显示相比上一等级新增的关键牌。</p>
  ${renderMonsterSnapshotTable(snapshots, [record], cardById, { includeMonster: true })}
  <p><a href="/assets/data/monster-level-snapshots-incremental.html#${monsterSnapshotAnchor(snapshots[0])}">查看全量怪物等级快照</a></p>
</section>`;
}

function skillLiteralText(skill) {
  const display = (skill.display_literals || []).map((entry) => entry.text).filter(Boolean);
  const refs = (skill.literal_refs || []).map((entry) => entry.text).filter(Boolean);
  const unique = [...new Set([...display, ...refs])];
  return unique.length ? unique.join(" / ") : (skill.id || skill.class_name || "-");
}

function skillEffectOperations(skill) {
  return [
    ...new Set(
      (skill.runtime_rule?.steps || [])
        .filter((step) => step.category === "effect")
        .map((step) => step.operation || step.effect)
        .filter(Boolean)
    )
  ];
}

function actionTalentEntries(talents = []) {
  const entries = new Map();
  for (const talent of talents) {
    for (const effect of talent.handler_effects || []) {
      const actionClass = effect.arguments?.action_class;
      if (effect.target === "DungeonPlayer.AddAction" && actionClass) {
        if (!entries.has(actionClass)) {
          entries.set(actionClass, []);
        }
        entries.get(actionClass).push(talent.display_name || talent.internal_name || actionClass);
      }
    }
  }
  return entries;
}

function combatAbilityTalentEntries(talents = []) {
  const entries = new Map();
  for (const talent of talents) {
    for (const effect of talent.handler_effects || []) {
      const abilityClass = effect.arguments?.ability || effect.arguments?.ability_class || effect.arguments?.combat_ability_class;
      if (effect.target === "DungeonPlayer.AddCombatAbility" && abilityClass) {
        if (!entries.has(abilityClass)) {
          entries.set(abilityClass, []);
        }
        entries.get(abilityClass).push(talent.display_name || talent.internal_name || abilityClass);
      }
    }
  }
  return entries;
}

function primaryRewardActionEntries() {
  const entries = new Map();
  for (const [professionId, rows] of Object.entries(PROFESSION_PRIMARY_REWARDS)) {
    for (const row of rows || []) {
      const reward = SPECIAL_PRIMARY_REWARDS[row.reward];
      if (reward?.kind === "dungeon" && reward.className) {
        if (!entries.has(reward.className)) {
          entries.set(reward.className, []);
        }
        entries.get(reward.className).push(`${PROFESSION_NAME_CN[professionId] || professionId} ${row.level} 级主奖励`);
      }
    }
  }
  entries.set("DungeonActionSing", ["吟游诗人职业歌曲动作"]);
  return entries;
}

function formatSkillEntryLinks(entries = []) {
  return entries.length ? entries.map((entry) => escapeHtml(entry)).join("、") : "无";
}

function renderUnimplementedSkillCell(assetLookup, skill, className, label) {
  const image = assetLookup ? skillImage(assetLookup, skill, className) : "";
  const small = skill?.id || String(className || "").replace(/^CombatAbility|^DungeonAction/, "") || className;
  const tooltip = `${label || small || className}${small && small !== label ? ` / ${small}` : ""}`;
  const imageHtml = image ? `<img src="${image}" alt="${escapeHtml(label || small || className)}" title="${escapeHtml(tooltip)}" loading="lazy">` : "";
  const classNameText = imageHtml ? "dq-inline-skill" : "dq-inline-skill dq-inline-skill-text";
  return `<span class="${classNameText}" title="${escapeHtml(tooltip)}">${imageHtml}<span><strong>${escapeHtml(label || small || className)}</strong><small>${escapeHtml(small || className)}</small></span></span>`;
}

function renderUnimplementedDungeonActionRows(dungeonActions = [], talents = [], assetLookup = null) {
  const actionByClass = new Map(dungeonActions.map((action) => [action.class_name, action]));
  const talentEntries = actionTalentEntries(talents);
  const primaryEntries = primaryRewardActionEntries();
  return UNIMPLEMENTED_DUNGEON_ACTION_CLASS_NAMES.map((className) => {
    const action = actionByClass.get(className) || { class_name: className };
    const note = UNIMPLEMENTED_DUNGEON_ACTION_NOTES[className] || {};
    const professionRefs = (action.profession_references || []).map((ref) => ref.profession_class).filter(Boolean);
    const talentRefs = talentEntries.get(className) || [];
    const primaryRefs = primaryEntries.get(className) || [];
    const entryRefs = [...professionRefs, ...talentRefs, ...primaryRefs];
    if (entryRefs.length) {
      return "";
    }
    return `<tr>
  <td>${renderUnimplementedSkillCell(assetLookup, action, className, note.label || action.id || className)}</td>
  <td>${escapeHtml(action.cooldown ?? "-")}</td>
  <td class="dq-long-cell">${escapeHtml(note.effect || "已有执行效果，但当前未整理出玩家向中文描述。")}</td>
  <td><span class="dq-status-pill dq-status-monster">${escapeHtml(note.status || "未发现入口")}</span></td>
  <td class="dq-long-cell">${escapeHtml(note.note || "")}</td>
</tr>`;
  }).filter(Boolean).join("\n");
}

function renderSystemDungeonActionRows(dungeonActions = [], assetLookup = null) {
  const actionByClass = new Map(dungeonActions.map((action) => [action.class_name, action]));
  return SYSTEM_DUNGEON_ACTION_CLASS_NAMES.map((className) => {
    const action = actionByClass.get(className) || { class_name: className };
    const note = SYSTEM_DUNGEON_ACTION_NOTES[className] || {};
    return `<tr>
  <td>${renderUnimplementedSkillCell(assetLookup, action, className, note.label || action.id || className)}</td>
  <td>${escapeHtml(action.cooldown ?? "-")}</td>
  <td class="dq-long-cell">${escapeHtml(note.effect || "内部流程组件。")}</td>
  <td class="dq-long-cell">${escapeHtml(note.note || "通用流程组件；保留在审计页，但不作为玩家可获得技能统计。")}</td>
</tr>`;
  }).join("\n");
}

function renderUnimplementedCombatAbilityRows(combatAbilities = [], talents = [], assetLookup = null) {
  const abilityByClass = new Map(combatAbilities.map((ability) => [ability.class_name, ability]));
  const talentEntries = combatAbilityTalentEntries(talents);
  return UNIMPLEMENTED_COMBAT_ABILITY_CLASS_NAMES.map((className) => {
    const ability = abilityByClass.get(className) || { class_name: className };
    const professionRefs = (ability.profession_references || []).map((ref) => ref.profession_class).filter(Boolean);
    const talentRefs = talentEntries.get(className) || [];
    const note = UNIMPLEMENTED_COMBAT_ABILITY_NOTES[className] || {};
    return `<tr>
  <td>${renderUnimplementedSkillCell(assetLookup, ability, className, note.label || ability.id || className)}</td>
  <td>${escapeHtml(ability.cooldown ?? "-")}</td>
  <td class="dq-long-cell">${escapeHtml(note.effect || "已有执行效果，但当前未整理出玩家向中文描述。")}</td>
  <td>${formatSkillEntryLinks([...professionRefs, ...talentRefs])}</td>
  <td class="dq-long-cell">${escapeHtml(note.note || "没有职业或天赋入口；仍需和卡牌、怪物、Boss 逻辑交叉核对。")}</td>
</tr>`;
  }).join("\n");
}

function renderUnimplementedSkillsGuide({ combatAbilities = [], dungeonActions = [], talents = [], assetLookup = null } = {}) {
  const dungeonActionRows = renderUnimplementedDungeonActionRows(dungeonActions, talents, assetLookup);
  const dungeonActionCount = (dungeonActionRows.match(/<tr>/g) || []).length;
  return `${renderFrontmatter("未实装技能", "代码中存在但没有恢复到玩家入口的地牢动作和战斗能力。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Unimplemented Skills</p>
    <h1>未实装技能</h1>
    <p class="dq-lede">这里集中放置类似“梦境学习”的技能：名称、文案或效果存在，但当前恢复数据里没有职业、天赋或其它玩家可获得入口。</p>
  </div>
  <span class="dq-count">${dungeonActionCount} 个地牢动作 · ${UNIMPLEMENTED_COMBAT_ABILITY_CLASS_NAMES.length} 个战斗能力候选</span>
</section>

<section class="dq-callout">
  <strong>判定口径</strong>
  <span>未实装不是指代码为空，而是没有在职业开局、职业地牢动作、职业升级主奖励或天赋授予这几条玩家入口里找到可达引用。卡牌、怪物和 Boss 专用逻辑可能另有入口，战斗能力候选需要继续交叉核对。</span>
</section>

<section class="dq-section-block">
  <h2>未实装地牢动作</h2>
  <p class="dq-note">这组和“梦境学习”同类：有动作名称和游戏效果，但没有职业或天赋入口。</p>
  <div class="dq-table-scroll">
    <table class="dq-data-table">
      <thead><tr><th>动作</th><th>冷却</th><th>效果</th><th>状态</th><th>说明</th></tr></thead>
      <tbody>
${dungeonActionRows}
      </tbody>
    </table>
  </div>
</section>

<section class="dq-section-block">
  <h2>不计入玩家技能的系统动作</h2>
  <p class="dq-note">这些也没有玩家入口，但更像基类、选择器或内部流程组件，所以不和 Dream 一起统计为未实装技能。</p>
  <div class="dq-table-scroll">
    <table class="dq-data-table">
      <thead><tr><th>动作</th><th>冷却</th><th>用途</th><th>处理方式</th></tr></thead>
      <tbody>
${renderSystemDungeonActionRows(dungeonActions, assetLookup)}
      </tbody>
    </table>
  </div>
</section>

<section class="dq-section-block">
  <h2>未归属战斗能力候选</h2>
  <p class="dq-note">这些战斗能力当前没有职业引用或天赋授予入口。它们可能来自卡牌、怪物或 Boss 的战斗逻辑，因此先放在候选区。</p>
  <div class="dq-table-scroll">
    <table class="dq-data-table">
      <thead><tr><th>能力</th><th>冷却</th><th>效果</th><th>职业/天赋入口</th><th>说明</th></tr></thead>
      <tbody>
${renderUnimplementedCombatAbilityRows(combatAbilities, talents, assetLookup)}
      </tbody>
    </table>
  </div>
</section>

<section class="dq-section-block">
  <h2>已确认有入口的相邻技能</h2>
  <p>以下技能虽然曾经出现在“无初始职业引用”扫描结果里，但有其它玩家入口，不能归入未实装：Assassin 6 级获得 Murder，Professor 3 级获得 Make Camp，Bard 通过歌曲使用 Sing；Polymorph、Heal、Preparation、Portent、Teleport、Smash 由天赋授予。Flee 也由 Cowardly 天赋授予为 CombatAbilityFlee。</p>
</section>
`;
}

function renderMechanicsIndex() {
  return `${renderFrontmatter("机制参考", "Dream Quest 玩家机制索引。")}
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Mechanics</p>
    <h1>机制参考</h1>
    <p class="dq-lede">按玩家实际查询路径整理核心规则：开局档案、怪物等级快照、随机数、地牢生成、地形生物、Lord 最终战、奖励、卡牌出现权重、负面效果和未实装技能。</p>
  </div>
  <span class="dq-count">10 个机制专题</span>
</section>

<section class="dq-section-block">
  <h2>阅读路径</h2>
  <div class="dq-flow-grid">
    <div><strong>想核对开局状态</strong><span>先看职业初始与难度。那里列出 HP、蓝、金币、手牌数、行动点、起始牌组，以及全成就档案差异。</span></div>
    <div><strong>想查怪物等级强度</strong><span>先看怪物等级快照，再进入具体怪物页。快照会列出每个等级的 HP、蓝、行动、手牌、最低等级卡组和后续增量关键牌。</span></div>
    <div><strong>想判断读档后的随机</strong><span>先看随机数机制，再看地牢生成和奖励流程。重点是全局随机、战斗内随机和结果是否已经保存。</span></div>
    <div><strong>想算卡牌出现概率</strong><span>先看卡牌出现权重，再看奖励、宝箱与商店。职业基础权重、职业 ID 和卡牌 metadata 会一起进入权重计算。</span></div>
    <div><strong>想查职业玩法</strong><span>进入具体职业页面。Bard Song、Dragon Devour / Hoard、Priest Desperate Prayer 等职业机制集中放在职业单页。</span></div>
    <div><strong>想查怪物和地牢事件</strong><span>怪物细节在怪物单页；建筑、宝箱、商店、Bard 酒馆和 Mushroom Patch 在地牢建筑图鉴。</span></div>
  </div>
</section>

<section class="dq-link-grid">
  <a href="/mechanics/start-profile-and-difficulty"><strong>职业初始与难度</strong><span>核对各职业初始 HP、蓝、金币、手牌数、行动点、起始牌组和全成就差异。</span></a>
  <a href="/mechanics/monster-level-snapshots"><strong>怪物等级快照</strong><span>按怪物和等级查看 HP、蓝、行动、手牌、最低等级卡组和后续增量关键牌。</span></a>
  <a href="/mechanics/rng-save-load"><strong>随机数机制</strong><span>解释种子串、地牢全局随机、战斗起手手牌和基础随机算法。</span></a>
  <a href="/mechanics/dungeon-generation"><strong>地牢生成</strong><span>棋盘、墙、怪物、Boss、奖励建筑和 Bard 酒馆生成。</span></a>
  <a href="/mechanics/terrain-monsters"><strong>地形生物</strong><span>按 Dungeon、Water、Volcano、Forest、Crypt、Mountain 展示普通怪物和 Boss 权重。</span></a>
  <a href="/mechanics/lord-of-the-dream"><strong>Lord of the Dream</strong><span>最终 Boss 机制入口，拆分查看 FinalBoss、BossAttr、衰变、王令贡品和牌组。</span></a>
  <a href="/mechanics/rewards-and-shops"><strong>奖励、宝箱与商店</strong><span>每层奖励列表、宝箱件数、商店商品和卡牌奖励选择入口。</span></a>
  <a href="/mechanics/appearance-bias"><strong>卡牌出现权重</strong><span>解释职业基础权重、职业 ID、卡牌权重数据和奖励生成概率。</span></a>
  <a href="/mechanics/negative-effects"><strong>负面效果</strong><span>查看中毒、寒冷、虚弱、诅咒、行动点减少、弃牌、放逐等效果。</span></a>
  <a href="/mechanics/unimplemented-skills"><strong>未实装技能</strong><span>集中列出 Dream、Alchemy、Study 等有代码痕迹但没有玩家入口的技能。</span></a>
</section>

<section class="dq-section-block">
  <h2>适合继续单列的机制</h2>
  <table class="dq-data-table">
    <thead><tr><th>专题</th><th>为什么值得单列</th><th>当前入口</th></tr></thead>
    <tbody>
      <tr><td>职业开局档案</td><td>难度、全成就、职业 initializer 和起始牌组很容易混在一起；需要单独列出基础开局和全成就开局。</td><td><a href="/mechanics/start-profile-and-difficulty">职业初始与难度</a>、<a href="/professions">职业图鉴</a></td></tr>
      <tr><td>怪物等级快照</td><td>怪物页面的 level-up 规则不足以直接读出每个等级的最终 HP、蓝和牌组；需要 LevelTo 后的展开表。</td><td><a href="/mechanics/monster-level-snapshots">怪物等级快照</a>、<a href="/monsters">怪物图鉴</a></td></tr>
      <tr><td>最终 Boss / Lord of the Dream</td><td>涉及最终战、BossAttr、王令、贡品、特殊提示和边界卡牌归属；和普通怪物、普通奖励不同。</td><td><a href="/mechanics/lord-of-the-dream">Lord 机制专题</a>、<a href="/monsters/lord-of-the-dream">怪物条目</a></td></tr>
      <tr><td>伤害与防御结算</td><td>攻击、火焰、电系、冰霜、毒性、穿透、护盾、免疫、抗性和减伤经常混在卡牌文本与怪物能力里。</td><td><a href="/mechanics/negative-effects">负面效果</a>、<a href="/cards">卡牌图鉴</a></td></tr>
      <tr><td>卡牌生命周期</td><td>升级、衰变、临时牌、放逐、复制、最大出现次数和 CardList 状态会影响玩家能否长期获得一张牌。</td><td><a href="/cards">卡牌图鉴</a>、<a href="/mechanics/rewards-and-shops">奖励、宝箱与商店</a></td></tr>
      <tr><td>地图视野与移动</td><td>可见格、墙体、隐形、传送、交换位置、绕路和建筑触发会影响 S/L 与职业地城行动的实际价值。</td><td><a href="/mechanics/dungeon-generation">地牢生成</a>、<a href="/buildings">地牢建筑</a></td></tr>
      <tr><td>未实装技能</td><td>部分 DungeonAction / CombatAbility 有文本和执行效果，但没有职业或天赋入口，需要和可玩内容分开。</td><td><a href="/mechanics/unimplemented-skills">未实装技能</a></td></tr>
      <tr><td>AI 出牌决策</td><td>怪物牌组之外还存在 AI 打出顺序、保留值、禁用牌型和特殊行为。</td><td><a href="/monsters">怪物图鉴</a></td></tr>
    </tbody>
  </table>
</section>
`;
}

function renderAppearanceBiasGuide(cardRecords, professionRecords, biasIdToProfessions) {
  const coreBiasText = (card) => {
    const entries = Object.entries(card.availability?.biases || {}).sort((a, b) => b[1] - a[1]);
    return entries.length
      ? entries.map(([name, value]) => `${biasNameLabel(name)} ${value}`).join("、")
      : "无基础职业权重";
  };
  const cardBiasEntryText = (card) => {
    const entries = card.availability?.bias_entries || [];
    return entries.length
      ? entries
          .map((entry) => {
            const kind = entry.applies_to_tier ? "有效阶级" : "出现频率";
            const sign = Number(entry.value) > 0 ? "+" : "";
            return `ID ${entry.id}：${kind} ${sign}${entry.value}`;
          })
          .join("、")
      : "无 ID 修正";
  };

  const sampleCardRows = ["BerserkerStrike", "StormSlash1", "FlameSlash1", "AbsorbVis", "Accelerate", "Venom"]
    .map((id) => cardRecords.find((record) => record.card.class_name === id))
    .filter(Boolean)
    .map((record) => {
      const card = record.card;
      return `<tr><td><a href="${record.href}">${escapeHtml(card.display_name || card.class_name)}</a></td><td>${escapeHtml(card.costs_and_stats?.tier ?? "-")} 阶</td><td>${escapeHtml(coreBiasText(card))}</td><td>${escapeHtml(cardBiasEntryText(card))}</td></tr>`;
    })
    .join("\n");
  const warriorRecord = professionRecords.find((record) => record.profession.id === "warrior");
  const berserkerRecord = cardRecords.find((record) => record.card.class_name === "BerserkerStrike");
  const warrior = warriorRecord?.profession;
  const berserker = berserkerRecord?.card;
  const berserkerEntry = berserker?.availability?.bias_entries?.find((entry) => Number(entry.id) === 1);
  const berserkerTier = berserker?.costs_and_stats?.tier ?? berserker?.availability?.tier;
  const berserkerEffectiveTier =
    berserkerEntry?.applies_to_tier && berserkerTier != null
      ? Number(berserkerTier) + Number(berserkerEntry.value)
      : berserkerTier;
  const professionRows = professionRecords
    .filter((record) => record.profession.id !== "random" && !UNIMPLEMENTED_PROFESSION_IDS.has(record.profession.id))
    .map((record) => {
      const p = record.profession;
      const ids = p.initializer?.class_biases || [];
      const rule = rewardWeightRule(p);
      return `<tr><td><a href="${record.href}">${escapeHtml(p.display_name || p.id)}</a></td><td>${escapeHtml(ids.join("、") || "无")}</td><td>${escapeHtml(rule.formula)}</td><td>${escapeHtml(rule.note)}</td></tr>`;
    })
    .join("\n");
  const professionResourceRows = professionRecords
    .filter((record) => record.profession.id !== "random" && !UNIMPLEMENTED_PROFESSION_IDS.has(record.profession.id))
    .map((record) => {
      const p = record.profession;
      const stats = p.initializer?.stats || {};
      const fixed = (PROFESSION_FIXED_REWARDS[p.id] || [])
        .map((reward) => `${rewardLevelText(reward.level)} ${reward.cn || reward.label}`)
        .join("、");
      return `<tr><td><a href="${record.href}">${escapeHtml(p.display_name || p.id)}</a></td><td>${escapeHtml(resourceSummary(stats))}</td><td>${escapeHtml(levelRewardOptions(p).join("、"))}</td><td>${escapeHtml(fixed || "无额外固定节点")}</td></tr>`;
    })
    .join("\n");
  const professionLinksForBias = (id) => {
    const professions = (biasIdToProfessions.get(Number(id)) || []).filter(
      (record) => record.profession.id !== "random" && !UNIMPLEMENTED_PROFESSION_IDS.has(record.profession.id)
    );
    return professions.length
      ? professions
          .map((record) => `<a href="${record.href}">${escapeHtml(record.profession.display_name || record.profession.id)}</a>`)
          .join("、")
      : "暂无职业";
  };
  const biasModificationRows = cardRecords
    .flatMap((record) =>
      (record.card.availability?.bias_entries || []).map((entry) => ({
        record,
        entry
      }))
    )
    .sort((a, b) => Number(a.entry.id) - Number(b.entry.id) || (a.record.card.display_name || "").localeCompare(b.record.card.display_name || ""))
    .map(({ record, entry }) => {
      const isTier = Boolean(entry.applies_to_tier);
      const value = Number(entry.value);
      const sign = value > 0 ? "+" : "";
      const effect = isTier ? `有效阶级 ${sign}${value}` : `最终权重 ${sign}${value}`;
      const plainMeaning = isTier
        ? value < 0
          ? "更早进入低阶奖励范围"
          : "推迟到更高阶奖励范围"
        : value > 0
          ? "提高被抽中的权重"
          : "降低被抽中的权重";
      return `<tr><td>ID ${escapeHtml(entry.id)}<br><span>${escapeHtml(CLASS_BIAS_NOTES[entry.id] || "职业权重")}</span></td><td>${professionLinksForBias(entry.id)}</td><td><a href="${record.href}">${escapeHtml(record.card.display_name || record.card.class_name)}</a></td><td>${escapeHtml(isTier ? "阶级修正" : "频率修正")}</td><td>${escapeHtml(effect)}</td><td>${escapeHtml(plainMeaning)}</td></tr>`;
    })
    .join("\n");
  const cardFinderEntryRows = [
    ["宝箱", "先决定掉落 1/2/3 件：约 85% / 13% / 2%。第一件必定抽卡；后续每件 45% 是金币、55% 再抽一张卡。", "使用当前地牢奖励阶级范围，把上限下调 1、最低夹到 1；minAffinity 为 1。每次抽到卡后，同名基础牌出现计数会影响后续抽卡。"],
    ["商店", "Shop.GenerateItems 固定构造 1、3、5 三个商品档位，每个档位调用一次 CardFinder。", "每个商品档位按对应阶级抽取，minAffinity 为 0；重复商品会重抽，最后对商品列表洗牌。"],
    ["地图随机卡奖励", "直接调用 CardFinder 的奖励入口。", "入口传入的阶级参数不同，但候选过滤和权重公式相同。"]
  ]
    .map(
      ([entry, trigger, params]) =>
        `<tr><td>${escapeHtml(entry)}</td><td>${escapeHtml(trigger)}</td><td>${escapeHtml(params)}</td></tr>`
    )
    .join("\n");
  const levelUpRows = [
    ["1-4 级", "LowCards", "职业的低阶升级卡表"],
    ["5-7 级", "MidCards", "职业的中阶升级卡表"],
    ["8 级及以上", "HighCards", "职业的高阶升级卡表"]
  ]
    .map(([level, bucket, meaning]) => `<tr><td>${level}</td><td>${bucket}</td><td>${meaning}</td></tr>`)
    .join("\n");

  return `${renderFrontmatter("卡牌出现权重", "解释 Dream Quest 卡牌权重和职业权重 ID 的关系。")}
# 卡牌出现权重

卡牌出现权重是宝箱、商店和地图随机奖励用来决定“哪些牌进入候选池、哪些牌更容易被抽中”的系统。职业升级的随机卡也会受职业影响，但它不是同一套加权池，而是职业自己的升级卡表里等概率抽取。

## 1. 职业 ID 与基础权重算法 {#profession-bias}

计算宝箱、商店和地图随机卡奖励时，职业侧主要看两件事：职业权重 ID 和职业基础权重算法。职业权重 ID 决定哪些卡牌 ID 修正会命中；基础权重算法决定这个职业如何读取卡牌 metadata 里的盗贼、牧师、战士、法师四个基础权重。

<table class="dq-data-table">
  <thead><tr><th>职业</th><th>职业权重 ID</th><th>基础权重算法</th><th>说明</th></tr></thead>
  <tbody>
${professionRows}
  </tbody>
</table>

<section class="dq-callout">
  <strong>读法</strong>
  <span>如果职业拥有 ID 17，而某张牌写着“ID 17：出现频率 +1”，这张牌只会在拥有 ID 17 的职业上获得这个额外修正。职业没有这个 ID，就不会吃到这条修正。</span>
</section>

## 2. 职业基础数据与升级成长 {#profession-growth}

生命、法力、行动点和装备槽会影响职业实际选牌方向，但它们不是宝箱和商店里单张卡的直接权重。它们属于职业基础数据和升级奖励结构：升级时如果出现生命、法力、行动点或装备槽奖励，玩家选择后会改变后续战斗节奏；宝箱和商店的卡牌概率仍按 CardFinder 的候选池与总权重计算。

<table class="dq-data-table">
  <thead><tr><th>职业</th><th>开局资源</th><th>升级成长选项</th><th>固定奖励节点</th></tr></thead>
  <tbody>
${professionResourceRows}
  </tbody>
</table>

## 3. 卡牌权重数据 {#card-bias}

卡牌自己有两类权重数据。

<section class="dq-two-column">
  <div>
    <h3>基础职业权重</h3>
    <p>卡牌直接写着盗贼、牧师、战士、法师这些基础权重。数值越高，代表这张牌对该基础职业方向越容易被奖励选中。</p>
  </div>
  <div>
    <h3>ID 修正</h3>
    <p>卡牌还可以写“某个职业权重 ID 命中时，改变有效阶级或出现频率”。这一步只在职业 ID 与卡牌 ID 对上时生效。</p>
  </div>
</section>

<table class="dq-data-table">
  <thead><tr><th>卡牌</th><th>基础阶级</th><th>基础职业权重</th><th>ID 修正</th></tr></thead>
  <tbody>
${sampleCardRows}
  </tbody>
</table>

## 4. 所有职业 ID 修正卡

下面这张表列出所有会对职业 ID 生效的卡牌修正。没有出现在这里的职业 ID，目前没有卡牌写针对它的阶级或频率修正。

<table class="dq-data-table">
  <thead><tr><th>ID</th><th>命中职业</th><th>卡牌</th><th>类型</th><th>具体修正</th><th>直观含义</th></tr></thead>
  <tbody>
${biasModificationRows}
  </tbody>
</table>

## 5. 总权重与概率公式

宝箱、商店和地图随机卡奖励都会进入同一个核心流程：先过滤候选池，再给每张候选牌算权重，最后按权重抽取。

<section class="dq-callout">
  <strong>核心公式</strong>
  <span>总权重 = 所有通过筛选的候选牌权重相加；卡牌概率 = 这张牌的抽取权重 / 总权重。</span>
</section>

候选牌需要同时通过这些条件：

1. 卡牌已经解锁，且不是永不出现的卡。
2. 同名基础牌没有超过本轮地牢的最大出现次数，例如 StormSlash1 和 StormSlash2 会共享 StormSlash 计数。
3. 卡牌的有效阶级落在当前入口允许的阶级参数里。
4. 若入口设置了最低亲和度，最终权重必须达到最低值且不能为负数。
5. 只抽卡牌的入口会排除动态金币类候选。

有效阶级先从卡牌基础阶级开始，再叠加命中的 ID 阶级修正：

<section class="dq-formula-card">
  <code>有效阶级 = 基础阶级 + 命中职业 ID 的阶级修正之和</code>
</section>

最终权重这样计算：

<section class="dq-formula-card">
  <code>单卡原始权重 = 职业基础权重 + 命中职业 ID 的频率修正 + 当前牌组元素修正</code>
</section>

入口会用最低亲和度过滤这个原始权重。常见宝箱要求至少 1，商店要求至少 0；如果入口传入 -1，则所有候选牌按 1 点权重处理。

<section class="dq-formula-card">
  <code>抽取权重 = 原始权重；如果 minAffinity = -1，则抽取权重 = 1</code>
</section>

<section class="dq-formula-card">
  <code>总权重 = Σ 每张通过筛选的抽取权重</code>
</section>

<section class="dq-formula-card">
  <code>单卡概率 = 这张牌的抽取权重 / 总权重</code>
</section>

元素修正只影响带元素亲和的牌。它会看当前牌组里同元素牌有多少，再和全部元素牌数量比较；没有元素亲和的牌，这一项就是 0。

<table class="dq-data-table">
  <thead><tr><th>入口</th><th>什么时候抽卡</th><th>阶级和额外规则</th></tr></thead>
  <tbody>
${cardFinderEntryRows}
  </tbody>
</table>

抽取时，游戏会把所有候选牌按原卡牌列表顺序排好，用权重累加成连续区间，然后掷一个 1 到总权重的随机数。随机数落在哪个区间，就得到哪张牌。

## 6. 职业升级里的卡片概率

职业升级不是直接调用 CardFinder 全局候选池。升级奖励先由职业自己的方法决定奖励结构：主奖励、固定奖励、随机卡奖励。固定给牌就是 100% 给那张牌，没有给牌就是 0%；只有当这次升级需要“随机卡”时，才会进入该职业自己的升级卡表。

<table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>使用卡表</th><th>含义</th></tr></thead>
  <tbody>
${levelUpRows}
  </tbody>
</table>

升级卡表内部是职业硬编码的卡牌清单或卡牌系列，例如战士会围绕攻击、斩击、武器和战斗行动构建自己的卡表。这里不再按卡牌 metadata 的盗贼/牧师/战士/法师权重加权；抽取规则是等概率：

<section class="dq-formula-card">
  <code>单张随机升级卡概率 = 1 / 当前职业卡表数量</code>
</section>

如果一次升级要给“两张不同随机卡”，则先等概率抽第一张，再从剩余卡里等概率抽第二张。某张牌出现在这两张里的概率可以按 <code>2 / 当前职业卡表数量</code> 理解。

所以升级、宝箱、商店的区别是：

1. 职业升级：职业卡表决定候选，候选内等概率抽。
2. 宝箱/商店/地图随机卡：CardFinder 决定候选，候选内按最终权重抽。
3. 卡牌 metadata 的四基础职业权重主要影响 CardFinder，不直接给升级卡表排序。

## 7. 三者怎么一起工作

职业基础数据、职业 ID 和卡牌权重数据会按入口不同组合起来：

1. 如果入口是职业升级，先看这个职业在目标等级有没有固定主奖励或 FixedBonus。命中固定卡牌、行动点、法力或装备槽时，该奖励直接出现。
2. 如果升级入口需要随机卡，再进入该职业自己的 LowCards / MidCards / HighCards 卡表，卡表内等概率抽取。
3. 如果入口是宝箱、商店或地图随机卡奖励，先从全量卡牌列表开始，排除未解锁、不可出现、超过最大出现次数，或不满足需求的卡牌。
4. 读取当前职业的 RewardWeight 规则和职业权重 ID。RewardWeight 决定四种基础权重怎么合成，职业 ID 决定哪些卡牌修正会命中。
5. 读取每张卡的基础阶级。如果卡牌有“阶级修正”，并且 ID 命中当前职业，就用修正后的有效阶级参与筛选。
6. 读取每张卡的基础职业权重。如果卡牌有“频率修正”，并且 ID 命中当前职业，就把这个修正加入权重计算。
7. 加上当前牌组的元素修正，得到最终权重。
8. 通过阶级筛选和权重计算后的牌进入候选池，再按权重占比随机给出奖励。

所以职业不是只有一套固定奖励卡池。更准确地说：升级有职业自己的固定节点和升级卡表；宝箱、商店、地图奖励则用职业基础权重算法和职业权重 ID 去“改写”全量卡牌列表，让合适的牌更早、更常或更稳定地出现。

## 8. 实际例子：战士与 Storm Slash

<section class="dq-example-panel">
  <div>
    <h3><a href="${warriorRecord?.href || "/professions/warrior"}">Warrior</a></h3>
    <p>职业权重 ID：${escapeHtml((warrior?.initializer?.class_biases || [1, 17]).join("、"))}</p>
    <p>基础权重算法：战士，直接读取卡牌 metadata 的战士权重。</p>
  </div>
  <div>
    <h3><a href="/cards/storm-slash1">Storm Slash (1)</a></h3>
    <p>在战士 1 层宝箱卡牌分支中，它的有效阶级是 1，战士基础权重是 6。</p>
    <p>战士拥有 ID 17，Storm Slash (1) 命中“ID 17：出现频率 +1”。</p>
    <p>当前牌组没有元素修正时，最终权重就是 6 + 1 + 0 = 7。</p>
  </div>
</section>

这个具体池子里共有 31 张基础解锁候选牌，总权重 75。Storm Slash (1) 的概率是 <code>7 / 75 = 9.33%</code>。如果玩家已经解锁更多卡，或同名基础牌已经达到最大出现次数，候选池和总权重会改变，概率也会随之改变。

再看阶级修正：Berserker Strike 原本是 ${escapeHtml(berserkerTier ?? 5)} 阶牌，但在战士身上因为 ID 1 命中，实际进入奖励筛选时会更接近 ${escapeHtml(berserkerEffectiveTier ?? 4)} 阶。它的战士基础权重是 ${escapeHtml(berserker?.availability?.biases?.warrior ?? 10)}，明显高于法师权重 ${escapeHtml(berserker?.availability?.biases?.wizard ?? 1)}；所以战士更早、更容易看到这张牌，而法师不是完全不能看到，只是没有这套职业 ID 与权重优势。
`;
}

function renderNegativeEffectCards(cards, effect) {
  if (!cards.length) {
    return `<span class="dq-muted-chip">暂无解析到相关卡牌</span>`;
  }
  const sortedCards = [...cards].sort((a, b) => {
    const imageA = a.image ? 0 : 1;
    const imageB = b.image ? 0 : 1;
    const penaltyA = String(a.card.class_name || "").startsWith("Penalty") ? 1 : 0;
    const penaltyB = String(b.card.class_name || "").startsWith("Penalty") ? 1 : 0;
    return imageA - imageB || penaltyA - penaltyB || (a.card.display_name || a.card.class_name || "").localeCompare(b.card.display_name || b.card.class_name || "");
  });
  return `<div class="dq-profession-card-grid dq-effect-card-grid">
${sortedCards
  .map((record) => renderProfessionCardLink(record, `${typeLabel(record.card)} · ${record.card.costs_and_stats?.tier ?? "-"} 阶`, "dq-effect-card-entry"))
  .join("\n")}
</div>`;
}

function negativeEffectMonsterSources(cards) {
  const sources = new Map();
  for (const record of cards) {
    for (const source of record.card.wiki_status_sources?.monster || []) {
      const match = String(source).match(/^(.*) (基础牌组|起手装备|优先起手|关键行为|等级变化)$/);
      const monsterName = match?.[1] || source;
      const tag = match?.[2] || "相关来源";
      const key = slugify(monsterName);
      if (!sources.has(key)) {
        sources.set(key, { name: monsterName, tags: new Set() });
      }
      sources.get(key).tags.add(tag);
    }
  }
  return [...sources.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function renderNegativeEffectMonsterSources(cards) {
  const sources = negativeEffectMonsterSources(cards);
  if (!sources.length) {
    return `<span class="dq-muted-chip">暂无解析到怪物来源</span>`;
  }
  return `<div class="dq-mini-tag-row">
${sources
  .slice(0, 40)
  .map((source) => `<a href="/monsters/${slugify(source.name)}">${escapeHtml(source.name)}<em>${escapeHtml([...source.tags].join(" / "))}</em></a>`)
  .join("\n")}
</div>`;
}

function renderNegativeEffectsGuide(cardRecords, cardOperationMap = new Map()) {
  const sections = NEGATIVE_EFFECTS.map((effect) => {
    const cards = cardRecords.filter((record) => detectNegativeEffects(record.card, cardOperationMap).some((item) => item.id === effect.id));
    const details = (effect.details || []).map((item) => `<p>${escapeHtml(item)}</p>`).join("\n");
    return `<section class="dq-effect-section" id="${effect.id}">
<h2>${escapeHtml(effect.name)}</h2>
<p>${escapeHtml(effect.description)}</p>
${details ? `<div class="dq-mechanic-list">${details}</div>` : ""}
${effect.impact ? `<section class="dq-callout"><strong>玩家影响</strong><span>${escapeHtml(effect.impact)}</span></section>` : ""}
<h3>相关卡牌</h3>
${renderNegativeEffectCards(cards, effect)}
<h3>怪物来源</h3>
${renderNegativeEffectMonsterSources(cards)}
</section>`;
  }).join("\n");

  const overviewRows = NEGATIVE_EFFECTS.map((effect) => `<tr><td><a href="#${effect.id}">${escapeHtml(effect.name)}</a></td><td>${escapeHtml(effect.description)}</td></tr>`).join("\n");

  return `${renderFrontmatter("负面效果", "Dream Quest 卡牌和怪物能施加给玩家的负面效果。")}
# 负面效果

这里汇总实际卡牌和怪物牌组能施加给玩家的负面效果。系统内部惩罚载体不列入这里；卡牌详情页上出现对应标签时，可以直接跳到这里查看作用、来源卡牌和怪物来源。

<table class="dq-data-table">
  <thead><tr><th>效果</th><th>作用</th></tr></thead>
  <tbody>
${overviewRows}
  </tbody>
</table>

${sections}
`;
}
