---
title: "混沌法师"
description: "Wild Shape：每 3 场战斗，混沌法师可以随机替换一个怪物。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>混沌法师</h1>
    <span class="dq-original">原名：Chaos Mage</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-monster" title="有职业类、贴图、文本和初始化数据，但不在玩家可选职业池。">未实装</span><span>ProfessionChaosMage</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionChaosMage__858.png" alt="混沌法师" loading="lazy">
  </div>
</section>

<section class="dq-callout">
  <strong>未实装职业</strong>
  <span>这个职业有类、贴图、文本、起始牌组和部分升级数据，但没有出现在玩家可选职业池中。页面保留为资料参考；它不参与 Random、宝箱、商店或升级出卡概率计算。</span>
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
      <tr><td>中文名</td><td>混沌法师</td></tr>
      <tr><td>英文名</td><td>Chaos Mage</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionChaosMage</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-monster" title="有职业类、贴图、文本和初始化数据，但不在玩家可选职业池。">未实装</span></td></tr>
      <tr><td>职业能力</td><td>Wild Shape：每 3 场战斗，混沌法师可以随机替换一个怪物。<p class="dq-original">原文：Wild Shape:  Every three combats, the Chaos Mage can randomly replace a monster.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 2 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>自动升级 HP</td><td>职业基础最大生命 +2；实际值还会叠加难度和 FLOOR1 修正。</td></tr>
      <tr><td>职业权重 ID</td><td>13、14</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>开局档案</h2>
  <table class="dq-data-table">
    <thead><tr><th>档案</th><th>资源</th><th>起始牌组</th></tr></thead>
    <tbody>
      <tr><td>基础开局</td><td>HP 15 / 蓝 2 / 手牌 2 / 行动 1 / 金币 0</td><td>6x 攻击（1） / Attack1, 2x 法力（1） / Mana1, 1x 贾斯拉的震荡电击 / JasrasJarringJolt, 1x 狂野打击（1） / WildStrike1</td></tr>
      <tr><td>全成就</td><td>HP 19 / 蓝 4 / 手牌 2 / 行动 1 / 金币 20</td><td>6x 攻击（1） / Attack1, 2x 法力（1） / Mana1, 1x 贾斯拉的震荡电击 / JasrasJarringJolt, 1x 狂野打击（1） / WildStrike1</td></tr>
    </tbody>
  </table>
  <p class="dq-note">这两行是职业基础和档案覆盖，实际开局还要套难度：Kitten 起始 HP +5，Grizzly Bear 追加 Attack1 x1，Velociraptor 追加 Attack1 x2；Kitten / Grizzly Bear 升级 HP 还会额外 +1。此职业当前未恢复到职业专属全成就牌组覆盖。</p>
  <p><a href="/mechanics/start-profile-and-difficulty">查看全职业开局与难度表</a></p>
</section>



<section class="dq-section-block">
  <h2>升级与固定奖励</h2>
  <p class="dq-note">职业升级会自动结算 HP、蓝和金币成长，再处理等级奖励面板；其中 3 级和 6 级常解锁战斗技能、地牢技能或专属强化。只有进入随机卡奖励时，才会从 LowCards / MidCards / HighCards 的职业卡表中抽取。</p>
  <div class="dq-reward-summary">
    <div>
      <strong>升级选项池</strong>
      <div class="dq-tag-row"><span>生命增加（奖励项）</span>
<span>法力增加</span>
<span>行动点增加</span>
<span>卡牌奖励</span>
<span>升级牌</span>
<span>删除牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>升级时自动最大生命 +2；实际值还会叠加难度和 FLOOR1 修正。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>max(盗贼, 法师)</p>
      <p class="dq-note">用更高的一侧作为基础权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityWildPower__293.png" alt="Wild Power" loading="lazy"><span><strong>狂野力量</strong><small>Wild Power</small></span></span></td><td>抽 3 张随机牌。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityTotalFocus__717.png" alt="Total Focus" loading="lazy"><span><strong>完全专注</strong><small>Total Focus</small></span></span></td><td>本回合你的法术牌和行动牌免费。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>资源</td><td>行动点增加<br><span class="dq-original">Action</span></td><td>固定奖励；不进入随机卡表。</td></tr>
<tr><td>5 级</td><td>卡牌</td><td><a class="dq-card-chip dq-fixed-reward-card" href="/cards/deck-of-wonder">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DeckOfWonder__1008.png" alt="奇迹牌组" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>奇迹牌组</strong><small>Deck of Wonder · 固定卡牌</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DeckOfWonder__1008.png" alt="奇迹牌组" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>奇迹牌组</strong>
      <small>Deck of Wonder · 装备 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>你的回合开始时，从所有已解锁卡中随机抽 1 张非装备牌。那张牌为&lt;临时&gt;。</em>
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
  <span class="dq-profession-card-meta">Attack (1) · x6</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（1）</strong>
      <small>Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/jasras-jarring-jolt">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/JasrasJarringJolt__694.png" alt="贾斯拉的震荡电击" loading="eager"></span></span>
  <strong>贾斯拉的震荡电击</strong>
  <span class="dq-profession-card-meta">Jasra's Jarring Jolt · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/JasrasJarringJolt__694.png" alt="贾斯拉的震荡电击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贾斯拉的震荡电击</strong>
      <small>Jasra's Jarring Jolt · 法术 · 1 阶 · 0 行动点 / 2 法力</small>
      <em>造成 1 电系，1 毒性，1 火焰，并 1 点冰霜伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/mana1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="eager"></span></span>
  <strong>法力（1）</strong>
  <span class="dq-profession-card-meta">Mana (1) · x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（1）</strong>
      <small>Mana (1) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 2 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/wild-strike1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/WildStrike1__911.png" alt="狂野打击（1）" loading="eager"></span></span>
  <strong>狂野打击（1）</strong>
  <span class="dq-profession-card-meta">Wild Strike (1) · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/WildStrike1__911.png" alt="狂野打击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>狂野打击（1）</strong>
      <small>Wild Strike (1) · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。将 1 张随机&lt;临时&gt;非装备牌加入你的手牌。提示：高等级 狂野打击 打出时需要额外行动点。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Dean, the Dynamic</span>
<span>Malcom, the Mad</span>
<span>Wolfric, the Wild</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>13、14</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>max(盗贼, 法师)</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 2 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加（奖励项）、法力增加、行动点增加、卡牌奖励、升级牌、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 13 · 混沌法师权重（未实装）</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 14 · 吟游诗人 / 德鲁伊 / 武士 / 法师 / 游侠 / 龙</a></div>
  </div>
  </div>
</section>



## 战斗技能详情

<p class="dq-note">这里合并显示职业初始战斗能力和升级主奖励解锁的战斗能力；具体解锁等级以上方“升级主奖励”为准。</p>

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityTotalFocus__717.png" alt="Total Focus" loading="eager"></span>
  <span>
    <strong>完全专注</strong>
    <small>Total Focus · 冷却 2</small>
    <em>本回合你的法术牌和行动牌免费。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityWildPower__293.png" alt="Wild Power" loading="eager"></span>
  <span>
    <strong>狂野力量</strong>
    <small>Wild Power · 冷却 2</small>
    <em>抽 3 张随机牌。</em>
  </span>
</div>
</section>

## 地牢行动详情

<p class="dq-note">这里合并显示开局自带、职业核心机制和升级主奖励解锁的地牢行动；具体解锁等级以上方“升级主奖励”为准。</p>

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Polymorph__784.png" alt="Wild Shape" loading="eager"></span>
  <span>
    <strong>狂野变形</strong>
    <small>Wild Shape · 冷却 3</small>
    <em>随机替换一个可见怪物。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
