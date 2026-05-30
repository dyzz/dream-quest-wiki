---
title: "Ascendance"
description: "获得 20 点生命上限、5 点法力和 1 点行动点。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 4 阶</p>
    <h1>Ascendance</h1>
    <p class="dq-lede">获得 20 点生命上限、5 点法力和 1 点行动点。</p>
    <p class="dq-original">原文：Gain 20 health, 5 mana, and an action</p>
    <div class="dq-tag-row">
      <span>地牢/立即生效</span>
      <span>不可重复</span>
      <span>无成就要求</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Ascendance__190.png" alt="Ascendance" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>Ascendance</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Ascendance</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>4</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>地牢/立即生效</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>无</em></span>
</div>
</section>



<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>生命上限 +20。</p>
    <p>法力 +5。</p>
    <p>行动点 +1。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>解析效果</h2>
  <table class="dq-data-table">
  <thead><tr><th>入口</th><th>操作</th><th>目标</th><th>参数</th></tr></thead>
  <tbody>
<tr>
  <td>ApplyTo</td>
  <td>调用</td>
  <td>DungeonPlayer.GainMaxHealth</td>
  <td>数值：20</td>
</tr>
<tr>
  <td>ApplyTo</td>
  <td>调用</td>
  <td>DungeonPlayer.GainMana</td>
  <td>数值：5</td>
</tr>
<tr>
  <td>ApplyTo</td>
  <td>调用</td>
  <td>DungeonPlayer.GainActions</td>
  <td>数值：1</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
