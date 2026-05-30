---
title: "死灵法师"
description: "Portal：每 3 场战斗，死灵法师可以在怪物位置打开传送门，并与它交换位置。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>死灵法师</h1>
    <span class="dq-original">原名：Necromancer</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-unlock" title="在 6 个祭坛祈祷后解锁。">成就解锁</span><span>ProfessionNecromancer</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionNecromancer__950.png" alt="死灵法师" loading="lazy">
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
      <tr><td>中文名</td><td>死灵法师</td></tr>
      <tr><td>英文名</td><td>Necromancer</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionNecromancer</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-unlock" title="在 6 个祭坛祈祷后解锁。">成就解锁</span></td></tr>
      <tr><td>职业能力</td><td>Portal：每 3 场战斗，死灵法师可以在怪物位置打开传送门，并与它交换位置。<p class="dq-original">原文：Portal: Every three combats, the necromancer may open a gate at a monster's location, swapping places with it.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 2 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>选择生命奖励时最大生命 +1。</td></tr>
      <tr><td>职业权重 ID</td><td>6、16</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>升级与固定奖励</h2>
  <p class="dq-note">职业升级会先处理特定等级主奖励；其中 3 级和 6 级常解锁战斗技能、地牢技能或专属强化。只有进入随机卡奖励时，才会从 LowCards / MidCards / HighCards 的职业卡表中抽取。</p>
  <div class="dq-reward-summary">
    <div>
      <strong>升级选项池</strong>
      <div class="dq-tag-row"><span>生命增加 / HP +1</span>
<span>法力增加</span>
<span>卡牌奖励</span>
<span>删除牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>选择生命奖励时，最大生命增加 1 点。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>max(牧师, 法师)</p>
      <p class="dq-note">用更高的一侧作为基础权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityBoneShield__946.png" alt="Bone Shield" loading="lazy"><span><strong>骨盾</strong><small>Bone Shield</small></span></span></td><td>防止接下来 10 点将对你造成的伤害。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityLifeTap__870.png" alt="Life Tap" loading="lazy"><span><strong>生命分流</strong><small>Life Tap</small></span></span></td><td>支付 5 点生命，抽 1 张牌。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>5 级</td><td>资源</td><td>法力成长<br><span class="dq-original">LevelUpMana</span></td><td>固定等级走法力成长入口。</td></tr>
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
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/siphon-life">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="eager"></span></span>
  <strong>吸取生命</strong>
  <span class="dq-profession-card-meta">Drain Life · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吸取生命</strong>
      <small>Drain Life · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点&lt;穿透&gt;伤害。回复 4 点生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/soul-siphon">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SoulSiphon__430.png" alt="灵魂虹吸" loading="eager"></span></span>
  <strong>灵魂虹吸</strong>
  <span class="dq-profession-card-meta">Soul Siphon · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SoulSiphon__430.png" alt="灵魂虹吸" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵魂虹吸</strong>
      <small>Soul Siphon · 法术 · 1 阶 · 0 行动点 / 1 法力</small>
      <em>只能在对手生命不超过 5 点时打出。赢得这场战斗。永久获得 1 点法力。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Jeremy, Lord of Death</span>
<span>Robert, the Cursed</span>
<span>Daniel, the Dark</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>6、16</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>max(牧师, 法师)</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 2 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加 / HP +1、法力增加、卡牌奖励、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 6 · 死灵法师</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 16 · 刺客 / 武僧 / 死灵法师 / 盗贼</a></div>
  </div>
  </div>
</section>

<section class="dq-section-block dq-profession-card-info">
  <h2>职业专属卡牌</h2>
  <p class="dq-note">只列只有该职业能通过初始牌组、固定升级奖励或职业专属机制获得的特色牌；可从普通卡池获得的起手牌不列入。</p>
  <div class="dq-profession-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/soul-siphon">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SoulSiphon__430.png" alt="灵魂虹吸" loading="eager"></span></span>
  <strong>灵魂虹吸</strong>
  <span class="dq-profession-card-meta">Soul Siphon · 法术 · 1 阶 · 0 行动点 / 1 法力 · 初始牌 x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SoulSiphon__430.png" alt="灵魂虹吸" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵魂虹吸</strong>
      <small>Soul Siphon · 法术 · 1 阶 · 0 行动点 / 1 法力</small>
      <em>只能在对手生命不超过 5 点时打出。赢得这场战斗。永久获得 1 点法力。</em>
    </span>
  </span>
</a>
  </div>
</section>

## 战斗技能详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityBoneShield__946.png" alt="Bone Shield" loading="eager"></span>
  <span>
    <strong>骨盾</strong>
    <small>Bone Shield · 冷却 2</small>
    <em>防止接下来 10 点将对你造成的伤害。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityLifeTap__870.png" alt="Life Tap" loading="eager"></span>
  <span>
    <strong>生命分流</strong>
    <small>Life Tap · 冷却 0</small>
    <em>支付 5 点生命，抽 1 张牌。</em>
  </span>
</div>
</section>

## 地牢行动详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Teleport__499.png" alt="Portal" loading="eager"></span>
  <span>
    <strong>传送门</strong>
    <small>Portal · 冷却 3</small>
    <em>与目标怪物交换位置。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
