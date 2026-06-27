---
title: "刺客"
description: "Channel：每当刺客打出行动牌时，获得 2 点法力。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>刺客</h1>
    <span class="dq-original">原名：Assassin</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-unlock" title="用所有基础职业通关后解锁。">成就解锁</span><span>ProfessionAssassin</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionAssassin__873.png" alt="刺客" loading="lazy">
  </div>
</section>



<section class="dq-stat-row dq-stat-row-wide">
<span class="dq-stat"><strong>15</strong>生命</span>
<span class="dq-stat"><strong>1</strong>法力</span>
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
      <tr><td>中文名</td><td>刺客</td></tr>
      <tr><td>英文名</td><td>Assassin</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionAssassin</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-unlock" title="用所有基础职业通关后解锁。">成就解锁</span></td></tr>
      <tr><td>职业能力</td><td>Channel：每当刺客打出行动牌时，获得 2 点法力。<p class="dq-original">原文：Channel:  Whenever the assassin plays an action card, she gains 2 mana.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 1 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>自动升级 HP</td><td>职业基础最大生命 +2；实际值还会叠加难度和 FLOOR1 修正。</td></tr>
      <tr><td>职业权重 ID</td><td>8、16</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>开局档案</h2>
  <table class="dq-data-table">
    <thead><tr><th>档案</th><th>资源</th><th>起始牌组</th></tr></thead>
    <tbody>
      <tr><td>基础开局</td><td>HP 15 / 蓝 1 / 手牌 2 / 行动 1 / 金币 0</td><td>7x 攻击（1） / Attack1, 2x 切割 / Slice, 1x 模糊 / Blur</td></tr>
      <tr><td>全成就</td><td>HP 19 / 蓝 3 / 手牌 2 / 行动 1 / 金币 20</td><td>7x 攻击（1） / Attack1, 2x 切割 / Slice, 1x 模糊 / Blur</td></tr>
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
<span>金币</span>
<span>卡牌奖励</span>
<span>升级牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>升级时自动最大生命 +2；实际值还会叠加难度和 FLOOR1 修正。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>max(盗贼, 法师)</p>
      <p class="dq-note">低阶魔力牌（ManaCard 且基础阶级 &lt; 5）权重为 0。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityVanish__570.png" alt="Vanish" loading="lazy"><span><strong>消失</strong><small>Vanish</small></span></span></td><td>逃离战斗；对手保留已受到的伤害和中毒。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>地牢技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Terror__86.png" alt="Murder" loading="lazy"><span><strong>谋杀</strong><small>Murder</small></span></span></td><td>解锁地牢行动：击杀一个非首领怪物，获得经验但不获得金币。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>资源</td><td>行动点增加<br><span class="dq-original">Action</span></td><td>固定奖励；不进入随机卡表。</td></tr>
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
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/blur">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="eager"></span></span>
  <strong>模糊</strong>
  <span class="dq-profession-card-meta">Blur · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>模糊</strong>
      <small>Blur · 法术 · 3 阶 · 0 行动点 / 2 法力</small>
      <em>你获得物理抗性 直到你的下个回合。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Tanya, the Vicious</span>
<span>Rachel, the Subtle</span>
<span>Ona, the Sly</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>8、16</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>max(盗贼, 法师)</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 1 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加（奖励项）、法力增加、行动点增加、金币、卡牌奖励、升级牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 8 · 刺客 / 武僧</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 16 · 刺客 / 武僧 / 死灵法师 / 盗贼</a></div>
  </div>
  </div>
</section>



## 战斗技能详情

<p class="dq-note">这里合并显示职业初始战斗能力和升级主奖励解锁的战斗能力；具体解锁等级以上方“升级主奖励”为准。</p>

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityVanish__570.png" alt="Vanish" loading="eager"></span>
  <span>
    <strong>消失</strong>
    <small>Vanish · 冷却 3</small>
    <em>逃离战斗；对手保留已受到的伤害和中毒。</em>
  </span>
</div>
</section>

## 地牢行动详情

<p class="dq-note">这里合并显示开局自带、职业核心机制和升级主奖励解锁的地牢行动；具体解锁等级以上方“升级主奖励”为准。</p>

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Terror__86.png" alt="Murder" loading="eager"></span>
  <span>
    <strong>谋杀</strong>
    <small>Murder · 冷却 4</small>
    <em>击杀一个非首领怪物，获得经验但不获得金币。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
