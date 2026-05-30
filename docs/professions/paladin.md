---
title: "圣骑士"
description: "Holy War：每 2 场战斗，圣骑士会自动升级牌库中的 1 张攻击牌。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>圣骑士</h1>
    <span class="dq-original">原名：Paladin</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-unlock" title="通关 1 次后解锁。">成就解锁</span><span>ProfessionPaladin</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionPaladin__149.png" alt="圣骑士" loading="lazy">
  </div>
</section>



<section class="dq-stat-row dq-stat-row-wide">
<span class="dq-stat"><strong>15</strong>生命</span>
<span class="dq-stat"><strong>0</strong>法力</span>
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
      <tr><td>中文名</td><td>圣骑士</td></tr>
      <tr><td>英文名</td><td>Paladin</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionPaladin</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-unlock" title="通关 1 次后解锁。">成就解锁</span></td></tr>
      <tr><td>职业能力</td><td>Holy War：每 2 场战斗，圣骑士会自动升级牌库中的 1 张攻击牌。<p class="dq-original">原文：Holy War: Every two combats, the paladin automatically upgrades an attack card in her deck.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 0 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>选择生命奖励时最大生命 +2。</td></tr>
      <tr><td>职业权重 ID</td><td>4、15</td></tr>
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
<span>装备槽增加</span>
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
      <p>max(牧师, 战士)</p>
      <p class="dq-note">用更高的一侧作为基础权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityClingingLight__952.png" alt="Clinging Light" loading="lazy"><span><strong>附着之光</strong><small>Clinging Light</small></span></span></td><td>本回合对手受到的物理攻击伤害额外 +2。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityWholeBody__1037.png" alt="Holy Surge" loading="lazy"><span><strong>圣涌</strong><small>Holy Surge</small></span></span></td><td>完全回复生命。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>资源</td><td>法力增加<br><span class="dq-original">Mana</span></td><td>固定奖励；不进入随机卡表。</td></tr>
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
  <span class="dq-profession-card-meta">Attack (1) · x8</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（1）</strong>
      <small>Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/holy-strike1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/HolyStrike1__443.png" alt="神圣打击（1）" loading="eager"></span></span>
  <strong>神圣打击（1）</strong>
  <span class="dq-profession-card-meta">Holy Strike (1) · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/HolyStrike1__443.png" alt="神圣打击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>神圣打击（1）</strong>
      <small>Holy Strike (1) · 攻击 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。回复 2 点生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/prayer-of-life">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfLife__733.png" alt="生命祈祷" loading="eager"></span></span>
  <strong>生命祈祷</strong>
  <span class="dq-profession-card-meta">Prayer of Life · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfLife__733.png" alt="生命祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>生命祈祷</strong>
      <small>Prayer of Life · 祈祷 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量回复生命：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Lily, the Righteous</span>
<span>Sabina, the Defiant</span>
<span>Avril, the Triumphant</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>4、15</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>max(牧师, 战士)</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 0 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加 / HP +2、法力增加、行动点增加、装备槽增加、卡牌奖励、升级牌、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 4 · 圣骑士</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 15 · 圣骑士 / 牧师</a></div>
  </div>
  </div>
</section>



## 战斗技能详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityClingingLight__952.png" alt="Clinging Light" loading="eager"></span>
  <span>
    <strong>附着之光</strong>
    <small>Clinging Light · 冷却 3</small>
    <em>本回合对手受到的物理攻击伤害额外 +2。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityWholeBody__1037.png" alt="Holy Surge" loading="eager"></span>
  <span>
    <strong>圣涌</strong>
    <small>Holy Surge · 冷却 4</small>
    <em>完全回复生命。</em>
  </span>
</div>
</section>



<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
