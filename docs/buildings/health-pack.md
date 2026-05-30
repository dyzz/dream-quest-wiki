---
title: "治疗包 / Health Pack"
description: "地图上的一次性回复点。进入或打开后给玩家恢复生命。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Dungeon Feature · 回复</p>
    <h1>治疗包</h1>
    <p class="dq-lede">地图上的一次性回复点。进入或打开后给玩家恢复生命。</p>
    <p class="dq-original">原名：Health Pack · 类名：HealthPack</p>
    <div class="dq-tag-row"><span>回复</span><span>GenerateRewards 的治疗分支会批量加入；Grizzly Bear 难度和 STEPS1 成就也会额外加入。</span></div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/HealthPack__931.png" alt="Health Pack" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的中文名称。"><strong>中文名</strong><em>治疗包</em></span>
<span title="游戏原始名称或代码中对应名称。"><strong>英文名</strong><em>Health Pack</em></span>
<span title="反编译类型或创建 feature 时使用的内部名称。"><strong>类名</strong><em>HealthPack</em></span>
<span title="用于图鉴分组。"><strong>类别</strong><em>回复</em></span>
<span title="从地牢生成和奖励分配中恢复出的生成入口。"><strong>生成方式</strong><em>GenerateRewards 的治疗分支会批量加入；Grizzly Bear 难度和 STEPS1 成就也会额外加入。</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>机制说明</h2>
  <div class="dq-mechanic-list">
<p>治疗包数量来自楼层深度和 Game.RandomRange：一个分支是 depth + RandomRange(1, 2)，另一个分支是 depth * 2 + RandomRange(2, 4)。</p>
<p>STEPS1 成就会使每层额外获得 1 个 HealthPack。</p>
<p>Grizzly Bear 难度后处理也会额外加入 1 个 HealthPack。</p>
<p>HealthPack.Initialize 会把治疗量写为当前楼层 depth * 3；Open 时显示 Heal X，调用 DungeonPlayer.Heal(X)，然后移除该 feature。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>治疗量</h2>
  
  <table class="dq-data-table">
    <thead><tr><th>项目</th><th>规则</th></tr></thead>
    <tbody>
<tr><td>公式</td><td>治疗量 = 当前楼层 depth * 3。</td></tr>
<tr><td>触发</td><td>Open 时调用 DungeonPlayer.Heal(治疗量)。</td></tr>
<tr><td>文本</td><td>显示 Heal X，其中 X 是本次治疗量。</td></tr>
<tr><td>生命周期</td><td>治疗完成后移除该 HealthPack。</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>随机奖励权重</h2>
  <table class="dq-data-table">
    <thead><tr><th>楼层组</th><th>概率</th><th>说明</th></tr></thead>
    <tbody>
<tr><td>第 1 层</td><td>15%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
<tr><td>第 2 层以后</td><td>15%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">回到地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
