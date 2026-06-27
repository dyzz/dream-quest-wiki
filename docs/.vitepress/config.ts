import { defineConfig } from "vitepress";

const base = process.env.VITEPRESS_BASE || "/";
const normalizedBase = base.endsWith("/") ? base : `${base}/`;
const basePrefix = normalizedBase === "/" ? "" : normalizedBase.slice(0, -1);
const assetPath = (value: string) => `${basePrefix}${value}`;

export default defineConfig({
  base: normalizedBase,
  title: "Dream Quest 中文 Wiki",
  description: "Dream Quest cards, professions, monsters, and mechanics guide.",
  cleanUrls: true,
  ignoreDeadLinks: [/^\/assets\/extracted\//],
  head: [["link", { rel: "icon", href: assetPath("/favicon.svg"), type: "image/svg+xml" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "卡牌图鉴", link: "/cards" },
      { text: "职业图鉴", link: "/professions" },
      { text: "怪物图鉴", link: "/monsters" },
      { text: "地牢建筑", link: "/buildings" },
      { text: "天赋成就", link: "/talents" },
      { text: "机制参考", link: "/mechanics/" }
    ],
    sidebar: [
      {
        text: "玩家指南",
        items: [
          { text: "首页", link: "/" },
          { text: "卡牌图鉴", link: "/cards" },
          { text: "职业图鉴", link: "/professions" },
          { text: "怪物图鉴", link: "/monsters" },
          { text: "地牢建筑", link: "/buildings" },
          { text: "天赋图鉴", link: "/talents" },
          { text: "成就图鉴", link: "/achievements" }
        ]
      },
      {
        text: "职业图鉴",
        collapsed: false,
        items: [
          { text: "职业总览", link: "/professions" },
          { text: "刺客 Assassin", link: "/professions/assassin" },
          { text: "吟游诗人 Bard", link: "/professions/bard" },
          { text: "混沌法师 Chaos Mage", link: "/professions/chaosmage" },
          { text: "龙 Dragon", link: "/professions/dragon" },
          { text: "德鲁伊 Druid", link: "/professions/druid" },
          { text: "武僧 Monk", link: "/professions/monk" },
          { text: "死灵法师 Necromancer", link: "/professions/necromancer" },
          { text: "圣骑士 Paladin", link: "/professions/paladin" },
          { text: "牧师 Priest", link: "/professions/priest" },
          { text: "教授 Professor", link: "/professions/professor" },
          { text: "随机职业 Random", link: "/professions/random" },
          { text: "游侠 Ranger", link: "/professions/ranger" },
          { text: "武士 Samurai", link: "/professions/samurai" },
          { text: "盗贼 Thief", link: "/professions/thief" },
          { text: "战士 Warrior", link: "/professions/warrior" },
          { text: "法师 Wizard", link: "/professions/wizard" }
        ]
      },
      {
        text: "机制参考",
        collapsed: true,
        items: [
          { text: "机制文档索引", link: "/mechanics/" },
          { text: "职业初始与难度", link: "/mechanics/start-profile-and-difficulty" },
          { text: "怪物等级快照", link: "/mechanics/monster-level-snapshots" },
          { text: "随机数与 S/L", link: "/mechanics/rng-save-load" },
          { text: "地牢生成", link: "/mechanics/dungeon-generation" },
          { text: "地形生物", link: "/mechanics/terrain-monsters" },
          {
            text: "梦境之主 Lord of the Dream",
            collapsed: false,
            items: [
              { text: "总览", link: "/mechanics/lord-of-the-dream" },
              { text: "FinalBoss 全流程", link: "/mechanics/lord/final-boss" },
              { text: "BossAttr 与楼层暗示", link: "/mechanics/lord/bossattr" },
              { text: "卡牌衰变", link: "/mechanics/lord/card-decay" },
              { text: "王令、贡品与死亡选择", link: "/mechanics/lord/decrees-gifts-choices" },
              { text: "牌组与特殊交互", link: "/mechanics/lord/deck-and-interactions" }
            ]
          },
          { text: "奖励、宝箱与商店", link: "/mechanics/rewards-and-shops" },
          { text: "卡牌出现权重", link: "/mechanics/appearance-bias" },
          { text: "负面效果", link: "/mechanics/negative-effects" },
          { text: "未实装技能", link: "/mechanics/unimplemented-skills" }
        ]
      },
      {
        text: "系统图鉴",
        collapsed: true,
        items: [
          { text: "地牢建筑", link: "/buildings" },
          { text: "天赋图鉴", link: "/talents" },
          { text: "成就图鉴", link: "/achievements" }
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
