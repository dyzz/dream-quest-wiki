---
title: "Teleport"
description: "获得 Teleport 地城能力，冷却 1。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 1 阶</p>
    <h1>Teleport</h1>
    <p class="dq-lede">获得 Teleport 地城能力，冷却 1。</p>
    <p class="dq-original">原文：Gain the Teleport dungeon ability (cooldown 1)</p>
    <div class="dq-tag-row">
      <span>地牢/立即生效</span>
      <span>不可重复</span>
      <span>需要 WINWIZARD</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Teleport__499.png" alt="Teleport" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>Teleport</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Teleport</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>1</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>地牢/立即生效</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>WINWIZARD</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>解锁要求</h2>
  <table class="dq-data-table">
    <thead><tr><th>成就</th><th>要求</th><th>奖励</th></tr></thead>
    <tbody>
<tr><td>Sorcerous Savior<br><code>WINWIZARD</code></td><td>使用 Wizard 通关</td><td>解锁 Teleport 天赋</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>获得地城能力：Teleport：传送，冷却 1。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>解析效果</h2>
  <table class="dq-data-table">
  <thead><tr><th>入口</th><th>操作</th><th>目标</th><th>参数</th></tr></thead>
  <tbody>
<tr>
  <td>ApplyTo</td>
  <td>添加地城能力</td>
  <td>DungeonPlayer.AddAction</td>
  <td>能力类：DungeonActionTeleport（Teleport：传送，冷却 1。）</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
