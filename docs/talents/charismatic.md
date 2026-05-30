---
title: "Charismatic"
description: "当前地牢楼层额外出现 5 个有益对象。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 3 阶</p>
    <h1>Charismatic</h1>
    <p class="dq-lede">当前地牢楼层额外出现 5 个有益对象。</p>
    <p class="dq-original">原文：5 additional beneficial objects appear on this dungeon floor</p>
    <div class="dq-tag-row">
      <span>地牢/立即生效</span>
      <span>不可重复</span>
      <span>需要 MERCY</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Charismatic__217.png" alt="Charismatic" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>Charismatic</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Charismatic</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>3</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>地牢/立即生效</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>MERCY</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>解锁要求</h2>
  <table class="dq-data-table">
    <thead><tr><th>成就</th><th>要求</th><th>奖励</th></tr></thead>
    <tbody>
<tr><td>Merciful<br><code>MERCY</code></td><td>不击杀当前楼层任何普通怪物并击败 Boss</td><td>解锁 Charismatic 天赋</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>当前楼层额外生成 5 个有益对象。</p>
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
  <td>DungeonBoard.GenerateRandomReward</td>
  <td>数值：5</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
