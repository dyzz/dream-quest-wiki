---
title: "Tiltowait"
description: "将行动牌 Tiltowait 加入牌组；它造成 20 点穿透伤害。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 4 阶</p>
    <h1>Tiltowait</h1>
    <p class="dq-lede">将行动牌 Tiltowait 加入牌组；它造成 20 点穿透伤害。</p>
    <p class="dq-original">原文：Add the action card Tiltowait to your deck which deals 20 piercing damage</p>
    <div class="dq-tag-row">
      <span>地牢/立即生效</span>
      <span>不可重复</span>
      <span>需要 RICH</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Tiltowait__233.png" alt="Tiltowait" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>Tiltowait</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Tiltowait</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>4</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>地牢/立即生效</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>RICH</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>解锁要求</h2>
  <table class="dq-data-table">
    <thead><tr><th>成就</th><th>要求</th><th>奖励</th></tr></thead>
    <tbody>
<tr><td>Rich<br><code>RICH</code></td><td>单次持有 300 金币</td><td>解锁 Tiltowait 天赋</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>向牌组加入：Tiltowait。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>解析效果</h2>
  <table class="dq-data-table">
  <thead><tr><th>入口</th><th>操作</th><th>目标</th><th>参数</th></tr></thead>
  <tbody>
<tr>
  <td>ApplyTo</td>
  <td>向牌组加入牌</td>
  <td>DungeonPlayer.AddCard</td>
  <td>卡牌：Tiltowait</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
