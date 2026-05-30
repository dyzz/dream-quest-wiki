---
title: "地精囤积者 / Goblin Hoarder"
description: "奖励生成流程放进地图的携金怪物遭遇。它不是可打开建筑；进入战斗后会用防守牌争取逃走。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Dungeon Feature · 遭遇</p>
    <h1>地精囤积者</h1>
    <p class="dq-lede">奖励生成流程放进地图的携金怪物遭遇。它不是可打开建筑；进入战斗后会用防守牌争取逃走。</p>
    <p class="dq-original">原名：Goblin Hoarder · 类名：GoblinHoarder</p>
    <div class="dq-tag-row"><span>遭遇</span><span>GenerateRewardName 的奖励名分支；第 1 层权重 10%，第 2 层以后权重 5%。</span></div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/GoblinHoarder__73.png" alt="Goblin Hoarder" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的中文名称。"><strong>中文名</strong><em>地精囤积者</em></span>
<span title="游戏原始名称或代码中对应名称。"><strong>英文名</strong><em>Goblin Hoarder</em></span>
<span title="反编译类型或创建 feature 时使用的内部名称。"><strong>类名</strong><em>GoblinHoarder</em></span>
<span title="用于图鉴分组。"><strong>类别</strong><em>遭遇</em></span>
<span title="从地牢生成和奖励分配中恢复出的生成入口。"><strong>生成方式</strong><em>GenerateRewardName 的奖励名分支；第 1 层权重 10%，第 2 层以后权重 5%。</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>机制说明</h2>
  <div class="dq-mechanic-list">
<p>GenerateRewardName 抽到 GoblinHoarder 时，地图上创建的是 Goblin Hoarder 怪物遭遇。</p>
<p>它的 MonsterData 等级范围是 3-6，图鉴地形标记为 Dungeon 和 Mountain，但普通地形权重为 0；自然放怪阶段不会按地形权重抽到它。</p>
<p>它的基础牌组围绕 Cower、Hide、Exhaustion 等防守/逃跑相关牌构成，并携带较多金币。</p>
<p>第二层以后 MimicChest 会占用一部分原本可能给 Goblin Hoarder 的奖励名权重。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>遭遇定位</h2>
  
  <table class="dq-data-table">
    <thead><tr><th>项目</th><th>规则</th></tr></thead>
    <tbody>
<tr><td>来源</td><td>GenerateRewardName 抽到 GoblinHoarder 后创建。</td></tr>
<tr><td>地图对象</td><td>在地图上表现为怪物遭遇，不是可打开的建筑。</td></tr>
<tr><td>战斗倾向</td><td>PreferredStartingCards 包含 Hide、Cower，会偏向防守和逃走。</td></tr>
<tr><td>奖励意义</td><td>携带显著金币；图鉴提示 Don't let him get away。</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>随机奖励权重</h2>
  <table class="dq-data-table">
    <thead><tr><th>楼层组</th><th>概率</th><th>说明</th></tr></thead>
    <tbody>
<tr><td>第 1 层</td><td>10%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
<tr><td>第 2 层以后</td><td>5%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">回到地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
