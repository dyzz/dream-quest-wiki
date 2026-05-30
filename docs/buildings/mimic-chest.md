---
title: "拟态宝箱 / Mimic Chest"
description: "外观像宝箱，打开时在当前位置生成 Mimic 怪物，并按该格子的怪物等级设置。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Dungeon Feature · 遭遇</p>
    <h1>拟态宝箱</h1>
    <p class="dq-lede">外观像宝箱，打开时在当前位置生成 Mimic 怪物，并按该格子的怪物等级设置。</p>
    <p class="dq-original">原名：Mimic Chest · 类名：MimicChest</p>
    <div class="dq-tag-row"><span>遭遇</span><span>第一层不会从随机奖励名自然替换出来；第二层以后在 0.05 权重分支替代一部分 Goblin Hoarder。</span></div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/MimicMonster__105.png" alt="Mimic Chest" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的中文名称。"><strong>中文名</strong><em>拟态宝箱</em></span>
<span title="游戏原始名称或代码中对应名称。"><strong>英文名</strong><em>Mimic Chest</em></span>
<span title="反编译类型或创建 feature 时使用的内部名称。"><strong>类名</strong><em>MimicChest</em></span>
<span title="用于图鉴分组。"><strong>类别</strong><em>遭遇</em></span>
<span title="从地牢生成和奖励分配中恢复出的生成入口。"><strong>生成方式</strong><em>第一层不会从随机奖励名自然替换出来；第二层以后在 0.05 权重分支替代一部分 Goblin Hoarder。</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>机制说明</h2>
  <div class="dq-mechanic-list">
<p>GenerateRewardByName 遇到 MimicChest 时会先创建地牢 feature，再调用 GetMonsterLevel(tile) 写入内部等级。</p>
<p>Open 时使用 DungeonBoard.CreateNamedMonsterAtLevel(tile, internalLevel, &quot;MimicMonster&quot;) 生成 Mimic。</p>
<p>原 feature 会被 Destroy，然后刷新怪物小地图显示和玩家精灵显示。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>打开结算</h2>
  
  <table class="dq-data-table">
    <thead><tr><th>步骤</th><th>规则</th></tr></thead>
    <tbody>
<tr><td>生成时</td><td>CreateFeature 后调用 GetMonsterLevel(tile)，把当前格子的怪物等级写入 MimicChest。</td></tr>
<tr><td>打开时</td><td>调用 DungeonBoard.CreateNamedMonsterAtLevel(tile, internalLevel, &quot;MimicMonster&quot;)。</td></tr>
<tr><td>后处理</td><td>原 feature 被 Destroy，并刷新怪物小地图和玩家精灵显示。</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>随机奖励权重</h2>
  <table class="dq-data-table">
    <thead><tr><th>楼层组</th><th>概率</th><th>说明</th></tr></thead>
    <tbody>
<tr><td>第 2 层以后</td><td>5%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">回到地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
