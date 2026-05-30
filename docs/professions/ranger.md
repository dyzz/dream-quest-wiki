---
title: "游侠"
description: "Invisibility：每 4 场战斗，游侠可以进入隐形；在与地牢互动前，可以不被怪物发现地穿过它们。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>游侠</h1>
    <span class="dq-original">原名：Ranger</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-unlock" title="与每种非首领怪物开始过战斗后解锁。">成就解锁</span><span>ProfessionRanger</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionRanger__101.png" alt="游侠" loading="lazy">
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
      <tr><td>中文名</td><td>游侠</td></tr>
      <tr><td>英文名</td><td>Ranger</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionRanger</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-unlock" title="与每种非首领怪物开始过战斗后解锁。">成就解锁</span></td></tr>
      <tr><td>职业能力</td><td>Invisibility：每 4 场战斗，游侠可以进入隐形；在与地牢互动前，可以不被怪物发现地穿过它们。<p class="dq-original">原文：Invisibility: Every four combats, the ranger may turn invisible, passing unnoticed through monsters until he interacts with the dungeon.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 0 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>选择生命奖励时最大生命 +3。</td></tr>
      <tr><td>职业权重 ID</td><td>7、14</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>升级与固定奖励</h2>
  <p class="dq-note">职业升级会先处理特定等级主奖励；其中 3 级和 6 级常解锁战斗技能、地牢技能或专属强化。只有进入随机卡奖励时，才会从 LowCards / MidCards / HighCards 的职业卡表中抽取。</p>
  <div class="dq-reward-summary">
    <div>
      <strong>升级选项池</strong>
      <div class="dq-tag-row"><span>生命增加 / HP +3</span>
<span>法力增加</span>
<span>行动点增加</span>
<span>装备槽增加</span>
<span>卡牌奖励</span>
<span>升级牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>选择生命奖励时，最大生命增加 3 点。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>max(盗贼, 战士)</p>
      <p class="dq-note">用更高的一侧作为基础权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityForesight__410.png" alt="Arm" loading="lazy"><span><strong>武装</strong><small>Arm</small></span></span></td><td>将 Sword 和 Greatbow 放入场上。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityCriticalShot__839.png" alt="Critical Strike" loading="lazy"><span><strong>致命射击</strong><small>Critical Strike</small></span></span></td><td>本回合你的下一次伤害翻倍并具有穿透。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>资源</td><td>行动点增加<br><span class="dq-original">Action</span></td><td>固定奖励；不进入随机卡表。</td></tr>
<tr><td>5 级</td><td>资源</td><td>装备槽增加<br><span class="dq-original">EquipmentSlot</span></td><td>固定奖励；不进入随机卡表。</td></tr>
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
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/slice">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="eager"></span></span>
  <strong>切割</strong>
  <span class="dq-profession-card-meta">Slice · x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>切割</strong>
      <small>Slice · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/circle">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Circle__89.png" alt="法阵" loading="eager"></span></span>
  <strong>法阵</strong>
  <span class="dq-profession-card-meta">Circle · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Circle__89.png" alt="法阵" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法阵</strong>
      <small>Circle · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>抽 1 张牌并获得 1 行动点。在你的回合结束时，抽 1 张牌并获得 1 行动点。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Matthew, the Merciful</span>
<span>Jack, Beastslayer</span>
<span>Albert, the Adventurous</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>7、14</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>max(盗贼, 战士)</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 0 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加 / HP +3、法力增加、行动点增加、装备槽增加、卡牌奖励、升级牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 7 · 游侠</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 14 · 吟游诗人 / 德鲁伊 / 武士 / 法师 / 游侠 / 龙</a></div>
  </div>
  </div>
</section>



## 战斗技能详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityForesight__410.png" alt="Arm" loading="eager"></span>
  <span>
    <strong>武装</strong>
    <small>Arm · 冷却 2</small>
    <em>将 Sword 和 Greatbow 放入场上。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityCriticalShot__839.png" alt="Critical Strike" loading="eager"></span>
  <span>
    <strong>致命射击</strong>
    <small>Critical Strike · 冷却 2</small>
    <em>本回合你的下一次伤害翻倍并具有穿透。</em>
  </span>
</div>
</section>

## 地牢行动详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Invisible__413.png" alt="Invisibility" loading="eager"></span>
  <span>
    <strong>隐形</strong>
    <small>Invisibility · 冷却 3</small>
    <em>进入隐形，直到与地牢互动。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
