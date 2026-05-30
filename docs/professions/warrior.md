---
title: "战士"
description: "Smash：每 2 场战斗后，战士可以摧毁地牢中的一面墙。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>战士</h1>
    <span class="dq-original">原名：Warrior</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-normal" title="不依赖成就解锁，是职业选择入口中的默认职业。">默认可选</span><span>ProfessionWarrior</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionWarrior__830.png" alt="战士" loading="lazy">
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
      <tr><td>中文名</td><td>战士</td></tr>
      <tr><td>英文名</td><td>Warrior</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionWarrior</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-normal" title="不依赖成就解锁，是职业选择入口中的默认职业。">默认可选</span></td></tr>
      <tr><td>职业能力</td><td>Smash：每 2 场战斗后，战士可以摧毁地牢中的一面墙。<p class="dq-original">原文：Smash:  After every two combats the warrior can use her rage to destroy a wall in the dungeon.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 0 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>选择生命奖励时最大生命 +3。</td></tr>
      <tr><td>职业权重 ID</td><td>1、17</td></tr>
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
<span>升级牌</span>
<span>删除牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>选择生命奖励时，最大生命增加 3 点。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>战士</p>
      <p class="dq-note">直接读取卡牌的战士权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityDoubleStrike__805.png" alt="Double Strike" loading="lazy"><span><strong>双重打击</strong><small>Double Strike</small></span></span></td><td>抽取你打出的下一张牌的临时复制。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityAdrenalineRush__731.png" alt="Adrenaline Rush" loading="lazy"><span><strong>肾上腺素冲刺</strong><small>Adrenaline Rush</small></span></span></td><td>抽 3 张牌。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
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
  <span class="dq-profession-card-meta">Attack (1) · x9</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（1）</strong>
      <small>Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/sword">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Sword__825.png" alt="长剑" loading="eager"></span></span>
  <strong>长剑</strong>
  <span class="dq-profession-card-meta">Sword · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Sword__825.png" alt="长剑" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>长剑</strong>
      <small>Sword · 装备 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害 每有 2 个攻击牌 你 打出 在一张回合。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Krista, the Bold</span>
<span>Sara, the Violent</span>
<span>Katie, the Mighty</span>
<span>Samantha, the Strong</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>1、17</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>战士</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 0 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加 / HP +3、法力增加、行动点增加、装备槽增加、卡牌奖励、升级牌、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 1 · 战士</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 17 · 战士</a></div>
  </div>
  </div>
</section>



## 战斗技能详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityAdrenalineRush__731.png" alt="Adrenaline Rush" loading="eager"></span>
  <span>
    <strong>肾上腺素冲刺</strong>
    <small>Adrenaline Rush · 冷却 3</small>
    <em>抽 3 张牌。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityDoubleStrike__805.png" alt="Double Strike" loading="eager"></span>
  <span>
    <strong>双重打击</strong>
    <small>Double Strike · 冷却 2</small>
    <em>抽取你打出的下一张牌的临时复制。</em>
  </span>
</div>
</section>

## 地牢行动详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Smash__432.png" alt="Smash" loading="eager"></span>
  <span>
    <strong>粉碎</strong>
    <small>Smash · 冷却 2</small>
    <em>摧毁一面可见墙体。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
