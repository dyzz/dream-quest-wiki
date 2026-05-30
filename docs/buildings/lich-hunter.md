---
title: "巫妖猎手 / Lich Hunter"
description: "Lich Boss 的伴随遭遇对象。它不来自普通奖励名列表，也不是 MonsterData 里的普通怪物条目。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Dungeon Feature · 遭遇</p>
    <h1>巫妖猎手</h1>
    <p class="dq-lede">Lich Boss 的伴随遭遇对象。它不来自普通奖励名列表，也不是 MonsterData 里的普通怪物条目。</p>
    <p class="dq-original">原名：Lich Hunter · 类名：LichHunter</p>
    <div class="dq-tag-row"><span>遭遇</span><span>普通 Boss 生成结果为 Lich 时，由 CreateBoss 额外放置在玩家连通区域。</span></div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/LichHunter__1071.png" alt="Lich Hunter" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的中文名称。"><strong>中文名</strong><em>巫妖猎手</em></span>
<span title="游戏原始名称或代码中对应名称。"><strong>英文名</strong><em>Lich Hunter</em></span>
<span title="反编译类型或创建 feature 时使用的内部名称。"><strong>类名</strong><em>LichHunter</em></span>
<span title="用于图鉴分组。"><strong>类别</strong><em>遭遇</em></span>
<span title="从地牢生成和奖励分配中恢复出的生成入口。"><strong>生成方式</strong><em>普通 Boss 生成结果为 Lich 时，由 CreateBoss 额外放置在玩家连通区域。</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>机制说明</h2>
  <div class="dq-mechanic-list">
<p>CreateBoss 创建普通 Boss 后，会检查本层 Boss 是否为 Lich。</p>
<p>如果是 Lich，代码会临时把 Boss 格设为阻挡，从玩家位置重新计算连通区域。</p>
<p>随后在玩家连通区域里随机挑选一个未使用格创建 LichHunter，再恢复 Boss 格的阻挡状态。</p>
<p>这意味着 Lich Hunter 是 Lich Boss 的额外地图对象，位置受当前迷宫、玩家位置和 Boss 位置影响。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>生成流程</h2>
  
  <table class="dq-data-table">
    <thead><tr><th>步骤</th><th>规则</th></tr></thead>
    <tbody>
<tr><td>触发条件</td><td>本层普通 Boss 已经创建，并且该 Boss 是 Lich。</td></tr>
<tr><td>临时阻挡</td><td>CreateBoss 临时把 Lich 所在格设为 impassable，避免把 Boss 格当成可走路径的一部分。</td></tr>
<tr><td>选格范围</td><td>从 PlayerTile 所在连通区域中寻找随机未使用格。</td></tr>
<tr><td>生成结果</td><td>在选中的格子创建 LichHunter，然后恢复 Lich 所在格原本的阻挡状态。</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>随机奖励权重</h2>
  <table class="dq-data-table">
    <thead><tr><th>楼层组</th><th>概率</th><th>说明</th></tr></thead>
    <tbody>
<tr><td>Lich Boss</td><td>特殊生成</td><td>普通 Boss 生成结果为 Lich 时由 CreateBoss 额外创建，不来自 GenerateRewardName。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">回到地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
