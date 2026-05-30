---
title: "法师"
description: "Teleport：每场战斗后，法师可以传送到地图任意位置，包括尚未发现的位置。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>法师</h1>
    <span class="dq-original">原名：Wizard</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-normal" title="不依赖成就解锁，是职业选择入口中的默认职业。">默认可选</span><span>ProfessionWizard</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionWizard__581.png" alt="法师" loading="lazy">
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
      <tr><td>中文名</td><td>法师</td></tr>
      <tr><td>英文名</td><td>Wizard</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionWizard</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-normal" title="不依赖成就解锁，是职业选择入口中的默认职业。">默认可选</span></td></tr>
      <tr><td>职业能力</td><td>Teleport：每场战斗后，法师可以传送到地图任意位置，包括尚未发现的位置。<p class="dq-original">原文：Teleport:  After each combat the wizard can use his magic to teleport himself anywhere on the map, even otherwise undiscovered locations.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 2 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>选择生命奖励时最大生命 +2。</td></tr>
      <tr><td>职业权重 ID</td><td>0、14</td></tr>
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
      <p>法师</p>
      <p class="dq-note">通常读取法师权重；Mana Surge 固定按 20 计算。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityManaFont__1073.png" alt="Mana Font" loading="lazy"><span><strong>法力源泉</strong><small>Mana Font</small></span></span></td><td>获得 10 点法力。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySpellFury__672.png" alt="Devastate" loading="lazy"><span><strong>毁灭</strong><small>Devastate</small></span></span></td><td>直到你的下一回合前，使对手对电系、毒性、火焰和冰霜变得脆弱。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>5 级</td><td>资源</td><td>法力成长<br><span class="dq-original">LevelUpMana</span></td><td>固定等级走法力成长入口。</td></tr>
<tr><td>6 级</td><td>卡牌</td><td><a class="dq-card-chip dq-fixed-reward-card" href="/cards/mana-surge">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力激涌</strong><small>Mana Surge · 固定卡牌</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力激涌</strong>
      <small>Mana Surge · 魔力 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>获得 10 点法力。</em>
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
  <span class="dq-profession-card-meta">Attack (1) · x5</span>
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
  <span class="dq-profession-card-meta">Mana (1) · x3</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（1）</strong>
      <small>Mana (1) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 2 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/jasras-jarring-jolt">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/JasrasJarringJolt__694.png" alt="贾斯拉的震荡电击" loading="eager"></span></span>
  <strong>贾斯拉的震荡电击</strong>
  <span class="dq-profession-card-meta">Jasra's Jarring Jolt · x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/JasrasJarringJolt__694.png" alt="贾斯拉的震荡电击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贾斯拉的震荡电击</strong>
      <small>Jasra's Jarring Jolt · 法术 · 1 阶 · 0 行动点 / 2 法力</small>
      <em>造成 1 电系，1 毒性，1 火焰，并 1 点冰霜伤害。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Thomas Brighteyes</span>
<span>Aaron Firecaller</span>
<span>Uther, the Uncontrolled</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>0、14</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>法师</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 2 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加 / HP +2、法力增加、卡牌奖励、升级牌、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 0 · 法师</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 14 · 吟游诗人 / 德鲁伊 / 武士 / 法师 / 游侠 / 龙</a></div>
  </div>
  </div>
</section>



## 战斗技能详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySpellFury__672.png" alt="Devastate" loading="eager"></span>
  <span>
    <strong>毁灭</strong>
    <small>Devastate · 冷却 4</small>
    <em>直到你的下一回合前，使对手对电系、毒性、火焰和冰霜变得脆弱。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityManaFont__1073.png" alt="Mana Font" loading="eager"></span>
  <span>
    <strong>法力源泉</strong>
    <small>Mana Font · 冷却 2</small>
    <em>获得 10 点法力。</em>
  </span>
</div>
</section>

## 地牢行动详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Teleport__499.png" alt="Teleport" loading="eager"></span>
  <span>
    <strong>传送</strong>
    <small>Teleport · 冷却 1</small>
    <em>传送到地图上的任意格。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
