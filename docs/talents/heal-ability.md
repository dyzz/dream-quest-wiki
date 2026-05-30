---
title: "Heal"
description: "获得 Heal 地城能力，冷却 5。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 1 阶</p>
    <h1>Heal</h1>
    <p class="dq-lede">获得 Heal 地城能力，冷却 5。</p>
    <p class="dq-original">原文：Gain the Heal dungeon ability (cooldown 5)</p>
    <div class="dq-tag-row">
      <span>地牢/立即生效</span>
      <span>不可重复</span>
      <span>需要 WINPRIEST</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/HealAbility__539.png" alt="Heal" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>HealAbility</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Heal</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>1</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>地牢/立即生效</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>WINPRIEST</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>解锁要求</h2>
  <table class="dq-data-table">
    <thead><tr><th>成就</th><th>要求</th><th>奖励</th></tr></thead>
    <tbody>
<tr><td>Holy Savior<br><code>WINPRIEST</code></td><td>使用 Priest 通关</td><td>解锁 Heal 天赋</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>获得地城能力：Heal：治疗，冷却 5。</p>
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
  <td>能力类：DungeonActionHeal（Heal：治疗，冷却 5。）</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
