---
title: "Immortal"
description: "下一次你将死亡时，改为将生命恢复到最大值，并直到你的下个回合前保持无敌。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Talent · 3 阶</p>
    <h1>Immortal</h1>
    <p class="dq-lede">下一次你将死亡时，改为将生命恢复到最大值，并直到你的下个回合前保持无敌。</p>
    <p class="dq-original">原文：The next time you would die, your health is instead set to its maximum and you are invulnerable until your next turn</p>
    <div class="dq-tag-row">
      <span>地牢/立即生效</span>
      <span>不可重复</span>
      <span>无成就要求</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Enlightenment__187.png" alt="Immortal" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="DungeonTalentList 中的内部名称。"><strong>内部名称</strong><em>Enlightenment</em></span>
<span title="游戏内显示名称。"><strong>显示名</strong><em>Immortal</em></span>
<span title="天赋选择时使用的阶级。"><strong>阶级</strong><em>3</em></span>
<span title="是否可以重复选择同一项天赋。"><strong>可重复</strong><em>否</em></span>
<span title="立即/地牢层面生效，或进入战斗后作为玩家被动生效。"><strong>作用域</strong><em>地牢/立即生效</em></span>
<span title="需要先完成的 UserAttribute / 成就。"><strong>需求</strong><em>无</em></span>
</div>
</section>



<section class="dq-section-block">
  <h2>实际效果</h2>
  <div class="dq-mechanic-list">
    <p>登记能力文本：下一次将死亡时改为回满生命，并暂时无敌。</p>
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
  <td>能力文本：下一次将死亡时改为回满生命，并暂时无敌。（Heal instead of dying once）</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/talents">回到天赋图鉴</a>
</section>
