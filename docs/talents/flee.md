---
title: "Cowardly"
description: "获得 Flee 战斗能力，可以从战斗中逃跑。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 1 阶</p>
    <h1>Cowardly</h1>
    <p class="dq-lede">获得 Flee 战斗能力，可以从战斗中逃跑。</p>
    <p class="dq-original">原文：Gain the Flee Ability allowing you to run away from combat</p>
    <div class="dq-tag-row">
      <span>地牢/立即生效</span>
      <span>不可重复</span>
      <span>需要 DEATH2</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Flee__791.png" alt="Cowardly" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>Flee</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Cowardly</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>1</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>地牢/立即生效</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>DEATH2</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>解锁要求</h2>
  <table class="dq-data-table">
    <thead><tr><th>成就</th><th>要求</th><th>奖励</th></tr></thead>
    <tbody>
<tr><td>Not Dead Yet<br><code>DEATH2</code></td><td>死亡 10 次</td><td>解锁 Flee 天赋</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>获得 Flee 战斗能力，可以从战斗中逃跑。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>解析效果</h2>
  <table class="dq-data-table">
  <thead><tr><th>入口</th><th>操作</th><th>目标</th><th>参数</th></tr></thead>
  <tbody>
<tr>
  <td>ApplyTo</td>
  <td>添加战斗能力</td>
  <td>DungeonPlayer.AddCombatAbility</td>
  <td>战斗能力：CombatAbilityFlee（Flee：可以从战斗中逃跑）</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
