---
title: "牧师"
description: "Oracle：每 2 场战斗，牧师可以揭示一个格子以及周围 8 个格子。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>牧师</h1>
    <span class="dq-original">原名：Priest</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-normal" title="不依赖成就解锁，是职业选择入口中的默认职业。">默认可选</span><span>ProfessionPriest</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionPriest__153.png" alt="牧师" loading="lazy">
  </div>
</section>



<section class="dq-stat-row dq-stat-row-wide">
<span class="dq-stat"><strong>15</strong>生命</span>
<span class="dq-stat"><strong>2</strong>法力</span>
<span class="dq-stat"><strong>2</strong>手牌</span>
<span class="dq-stat"><strong>1</strong>行动点</span>
<span class="dq-stat"><strong>0</strong>金币</span>
<span class="dq-stat"><strong>0</strong>装备槽</span>
</section>

<section class="dq-section-block">
  <h2>职业解析数据</h2>
  <table class="dq-data-table">
    <thead><tr><th>字段</th><th>解析值</th></tr></thead>
    <tbody>
      <tr><td>中文名</td><td>牧师</td></tr>
      <tr><td>英文名</td><td>Priest</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionPriest</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-normal" title="不依赖成就解锁，是职业选择入口中的默认职业。">默认可选</span></td></tr>
      <tr><td>职业能力</td><td>Oracle：每 2 场战斗，牧师可以揭示一个格子以及周围 8 个格子。<p class="dq-original">原文：Oracle:  Every two combats the priest can use his magic to reveal a tile and the eight squares around it.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 2 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>选择生命奖励时最大生命 +2。</td></tr>
      <tr><td>职业权重 ID</td><td>2、15</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>职业机制数据</h2>
  <h3>Desperate Prayer 分支</h3>
<p class="dq-note">Desperate Prayer 调用 0 到 4 的随机数；5 个分支等概率出现。触发时会显示对应英文提示。</p>
<table class="dq-data-table">
  <thead><tr><th>结果</th><th>提示</th><th>实际效果</th></tr></thead>
  <tbody>
<tr><td>0</td><td>Knowledge!</td><td>抽 5 张牌。</td></tr>
<tr><td>1</td><td>Protection!</td><td>获得 25 点护盾，等同防止接下来 25 点将受到的伤害。</td></tr>
<tr><td>2</td><td>Death!</td><td>对手失去 min(floor(当前生命 / 2), 60) 点生命；这是直接生命变化，不是元素伤害。</td></tr>
<tr><td>3</td><td>Speed!</td><td>获得 1 个额外回合。</td></tr>
<tr><td>4</td><td>Armored!</td><td>创建并装备 Celestial Plate、Deck of Wonder、Pendant。</td></tr>
  </tbody>
</table>
</section>

<section class="dq-section-block">
  <h2>升级与固定奖励</h2>
  <p class="dq-note">职业升级会先处理特定等级主奖励；其中 3 级和 6 级常解锁战斗技能、地牢技能或专属强化。只有进入随机卡奖励时，才会从 LowCards / MidCards / HighCards 的职业卡表中抽取。</p>
  <div class="dq-reward-summary">
    <div>
      <strong>升级选项池</strong>
      <div class="dq-tag-row"><span>生命增加 / HP +2</span>
<span>法力增加</span>
<span>行动点增加</span>
<span>卡牌奖励</span>
<span>升级牌</span>
<span>删除牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>选择生命奖励时，最大生命增加 2 点。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>牧师</p>
      <p class="dq-note">直接读取卡牌的牧师权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityBurningLight__313.png" alt="Burning Light" loading="lazy"><span><strong>燃烧之光</strong><small>Burning Light</small></span></span></td><td>造成 10 点火焰伤害。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityDesperatePrayer__405.png" alt="Desperate Prayer" loading="lazy"><span><strong>绝望祈祷</strong><small>Desperate Prayer</small></span></span></td><td>随机触发 5 个分支之一：抽 5 张牌、获得 25 点护盾、使对手失去最多 60 点当前生命、获得额外回合，或创建 Celestial Plate / Deck of Wonder / Pendant。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>5 级</td><td>卡牌</td><td><a class="dq-card-chip dq-fixed-reward-card" href="/cards/inspiration">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灵感</strong><small>Inspiration · 固定卡牌</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵感</strong>
      <small>Inspiration · 魔力 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>获得 5 点法力。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a></td><td>固定卡牌奖励，概率 100%。</td></tr>
  </tbody>
</table>
</section>

<section class="dq-two-column">
  <div>
    <h2>起始牌组</h2>
    <div class="dq-deck-grid">
      <a class="dq-profession-card-link dq-deck-card-link" href="/cards/attack1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <strong>攻击（1）</strong>
  <span class="dq-profession-card-meta">Attack (1) · x7</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（1）</strong>
      <small>Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/mana1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="eager"></span></span>
  <strong>法力（1）</strong>
  <span class="dq-profession-card-meta">Mana (1) · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（1）</strong>
      <small>Mana (1) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 2 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/orison">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="eager"></span></span>
  <strong>短祷</strong>
  <span class="dq-profession-card-meta">Orison · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>短祷</strong>
      <small>Orison · 法术 · 1 阶 · 0 行动点 / 2 法力</small>
      <em>回复 4 点生命。&lt;过量治疗&gt; 变为护盾。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/prayer-of-violence">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="eager"></span></span>
  <strong>暴力祈祷</strong>
  <span class="dq-profession-card-meta">Prayer of Violence · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴力祈祷</strong>
      <small>Prayer of Violence · 祈祷 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Bennedict, the Cruel</span>
<span>Maximus, the Pious</span>
<span>Anthony, the Annointed</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>2、15</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>牧师</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 2 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加 / HP +2、法力增加、行动点增加、卡牌奖励、升级牌、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 2 · 牧师</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 15 · 圣骑士 / 牧师</a></div>
  </div>
  </div>
</section>

<section class="dq-section-block dq-profession-card-info">
  <h2>职业专属卡牌</h2>
  <p class="dq-note">只列只有该职业能通过初始牌组、固定升级奖励或职业专属机制获得的特色牌；可从普通卡池获得的起手牌不列入。</p>
  <div class="dq-profession-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/orison">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="eager"></span></span>
  <strong>短祷</strong>
  <span class="dq-profession-card-meta">Orison · 法术 · 1 阶 · 0 行动点 / 2 法力 · 初始牌 x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>短祷</strong>
      <small>Orison · 法术 · 1 阶 · 0 行动点 / 2 法力</small>
      <em>回复 4 点生命。&lt;过量治疗&gt; 变为护盾。</em>
    </span>
  </span>
</a>
  </div>
</section>

## 战斗技能详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityDesperatePrayer__405.png" alt="Desperate Prayer" loading="eager"></span>
  <span>
    <strong>绝望祈祷</strong>
    <small>Desperate Prayer · 冷却 3</small>
    <em>随机触发 5 个分支之一：抽 5 张牌、获得 25 点护盾、使对手失去最多 60 点当前生命、获得额外回合，或创建 Celestial Plate / Deck of Wonder / Pendant。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityBurningLight__313.png" alt="Burning Light" loading="eager"></span>
  <span>
    <strong>燃烧之光</strong>
    <small>Burning Light · 冷却 3</small>
    <em>造成 10 点火焰伤害。</em>
  </span>
</div>
</section>

## 地牢行动详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Portent__976.png" alt="Oracle" loading="eager"></span>
  <span>
    <strong>神谕</strong>
    <small>Oracle · 冷却 2</small>
    <em>揭示目标格及周围 8 格。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
