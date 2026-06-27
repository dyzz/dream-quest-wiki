import { defineConfig } from "vitepress";

const base = process.env.VITEPRESS_BASE || "/";
const normalizedBase = base.endsWith("/") ? base : `${base}/`;
const basePrefix = normalizedBase === "/" ? "" : normalizedBase.slice(0, -1);
const sitePath = (value: string) => `${basePrefix}${value}`;

export default defineConfig({
  base: normalizedBase,
  title: "Dream Quest 中文 Wiki",
  description: "Dream Quest cards, professions, monsters, and mechanics guide.",
  cleanUrls: true,
  ignoreDeadLinks: [/^\/assets\/extracted\//],
  head: [["link", { rel: "icon", href: sitePath("/favicon.svg"), type: "image/svg+xml" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: sitePath("/") },
      { text: "卡牌图鉴", link: sitePath("/cards") },
      { text: "职业图鉴", link: sitePath("/professions") },
      { text: "怪物图鉴", link: sitePath("/monsters") },
      { text: "地牢建筑", link: sitePath("/buildings") },
      { text: "天赋成就", link: sitePath("/talents") },
      { text: "机制参考", link: sitePath("/mechanics/") }
    ],
    sidebar: [
      {
        text: "玩家指南",
        items: [
          { text: "首页", link: sitePath("/") },
          { text: "卡牌图鉴", link: sitePath("/cards") },
          { text: "职业图鉴", link: sitePath("/professions") },
          { text: "怪物图鉴", link: sitePath("/monsters") },
          { text: "地牢建筑", link: sitePath("/buildings") },
          { text: "天赋图鉴", link: sitePath("/talents") },
          { text: "成就图鉴", link: sitePath("/achievements") }
        ]
      },
      {
        text: "职业图鉴",
        collapsed: false,
        items: [
          { text: "职业总览", link: sitePath("/professions") },
          { text: "刺客 Assassin", link: sitePath("/professions/assassin") },
          { text: "吟游诗人 Bard", link: sitePath("/professions/bard") },
          { text: "混沌法师 Chaos Mage", link: sitePath("/professions/chaosmage") },
          { text: "龙 Dragon", link: sitePath("/professions/dragon") },
          { text: "德鲁伊 Druid", link: sitePath("/professions/druid") },
          { text: "武僧 Monk", link: sitePath("/professions/monk") },
          { text: "死灵法师 Necromancer", link: sitePath("/professions/necromancer") },
          { text: "圣骑士 Paladin", link: sitePath("/professions/paladin") },
          { text: "牧师 Priest", link: sitePath("/professions/priest") },
          { text: "教授 Professor", link: sitePath("/professions/professor") },
          { text: "随机职业 Random", link: sitePath("/professions/random") },
          { text: "游侠 Ranger", link: sitePath("/professions/ranger") },
          { text: "武士 Samurai", link: sitePath("/professions/samurai") },
          { text: "盗贼 Thief", link: sitePath("/professions/thief") },
          { text: "战士 Warrior", link: sitePath("/professions/warrior") },
          { text: "法师 Wizard", link: sitePath("/professions/wizard") }
        ]
      },
      {
        text: "机制参考",
        collapsed: true,
        items: [
          { text: "机制文档索引", link: sitePath("/mechanics/") },
          { text: "职业初始与难度", link: sitePath("/mechanics/start-profile-and-difficulty") },
          { text: "怪物等级快照", link: sitePath("/mechanics/monster-level-snapshots") },
          { text: "随机数与 S/L", link: sitePath("/mechanics/rng-save-load") },
          { text: "地牢生成", link: sitePath("/mechanics/dungeon-generation") },
          { text: "地形生物", link: sitePath("/mechanics/terrain-monsters") },
          {
            text: "梦境之主 Lord of the Dream",
            collapsed: false,
            items: [
              { text: "总览", link: sitePath("/mechanics/lord-of-the-dream") },
              { text: "FinalBoss 全流程", link: sitePath("/mechanics/lord/final-boss") },
              { text: "BossAttr 与楼层暗示", link: sitePath("/mechanics/lord/bossattr") },
              { text: "卡牌衰变", link: sitePath("/mechanics/lord/card-decay") },
              { text: "王令、贡品与死亡选择", link: sitePath("/mechanics/lord/decrees-gifts-choices") },
              { text: "牌组与特殊交互", link: sitePath("/mechanics/lord/deck-and-interactions") }
            ]
          },
          { text: "奖励、宝箱与商店", link: sitePath("/mechanics/rewards-and-shops") },
          { text: "卡牌出现权重", link: sitePath("/mechanics/appearance-bias") },
          { text: "负面效果", link: sitePath("/mechanics/negative-effects") },
          { text: "未实装技能", link: sitePath("/mechanics/unimplemented-skills") }
        ]
      },
      {
        text: "系统图鉴",
        collapsed: true,
        items: [
          { text: "地牢建筑", link: sitePath("/buildings") },
          { text: "天赋图鉴", link: sitePath("/talents") },
          { text: "成就图鉴", link: sitePath("/achievements") }
        ]
      }
    ],
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3]
    },
    footer: {
      message: "Dream Quest 中文玩家 Wiki",
      copyright: "Local guide workspace"
    }
  }
});
