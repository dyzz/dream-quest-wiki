---
title: "Well-Armed"
description: "每场战斗开始时，Sword、Shield 和 Armor 已经在场。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 4 阶</p>
    <h1>Well-Armed</h1>
    <p class="dq-lede">每场战斗开始时，Sword、Shield 和 Armor 已经在场。</p>
    <p class="dq-original">原文：Start each combat with a sword, shield, and armor in play</p>
    <div class="dq-tag-row">
      <span>战斗被动</span>
      <span>不可重复</span>
      <span>需要 WINPALADIN</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/EquipSlot__458.png" alt="Well-Armed" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>Equipped</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Well-Armed</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>4</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>战斗被动</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>WINPALADIN</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>解锁要求</h2>
  <table class="dq-data-table">
    <thead><tr><th>成就</th><th>要求</th><th>奖励</th></tr></thead>
    <tbody>
<tr><td>Sanctimonious Savior<br><code>WINPALADIN</code></td><td>使用 Paladin 通关</td><td>解锁 Well-Armed 天赋</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>登记能力文本：每场战斗开始时创建 Sword、Shield 和 Armor。</p>
    <p>每场战斗开始时创建装备：Sword、Shield、Armor。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>解析效果</h2>
  <table class="dq-data-table">
  <thead><tr><th>入口</th><th>操作</th><th>目标</th><th>参数</th></tr></thead>
  <tbody>
<tr>
  <td>ApplyTo</td>
  <td>添加能力文本</td>
  <td>DungeonPlayer.AddPower</td>
  <td>能力文本：每场战斗开始时创建 Sword、Shield 和 Armor。（Start with sword, shield, and armor）</td>
</tr>
<tr>
  <td>ApplyToPlayer</td>
  <td>创建装备</td>
  <td>Player.CreateEquipment</td>
  <td>装备：Sword、Shield、Armor</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
