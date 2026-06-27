---
title: "机制参考"
description: "Dream Quest 玩家机制索引。"
---


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
