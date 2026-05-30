---
title: "Fluid"
description: "每回合第一次打出行动牌时，抽 1 张牌。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 3 阶</p>
    <h1>Fluid</h1>
    <p class="dq-lede">每回合第一次打出行动牌时，抽 1 张牌。</p>
    <p class="dq-original">原文：The first time you play an action card each turn, draw a card</p>
    <div class="dq-tag-row">
      <span>战斗被动</span>
      <span>不可重复</span>
      <span>需要 WINMONK</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Fluid__540.png" alt="Fluid" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>Fluid</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Fluid</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>3</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>战斗被动</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>WINMONK</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>解锁要求</h2>
  <table class="dq-data-table">
    <thead><tr><th>成就</th><th>要求</th><th>奖励</th></tr></thead>
    <tbody>
<tr><td>Ascetic Savior<br><code>WINMONK</code></td><td>使用 Monk 通关</td><td>解锁 Fluid 天赋</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>登记能力文本：每回合第一次打出行动牌时抽 1 张牌。</p>
    <p>进入战斗后设置玩家属性 fluid：每回合第一次打出行动牌时抽 1 张牌。。</p>
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
  <td>能力文本：每回合第一次打出行动牌时抽 1 张牌。（Draw on your first action）</td>
</tr>
<tr>
  <td>ApplyToPlayer</td>
  <td>设置玩家属性</td>
  <td>Player.SetAttribute</td>
  <td>属性 ID：41；属性名：fluid；赋值：Player.get_fluid()+1</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
