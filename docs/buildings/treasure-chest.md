---
title: "宝箱 / Treasure Chest"
description: "打开后生成 1 到 3 件战利品。第一件必定是卡牌，后续物品有概率变成金币。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Dungeon Feature · 奖励</p>
    <h1>宝箱</h1>
    <p class="dq-lede">打开后生成 1 到 3 件战利品。第一件必定是卡牌，后续物品有概率变成金币。</p>
    <p class="dq-original">原名：Treasure Chest · 类名：TreasureChest</p>
    <div class="dq-tag-row"><span>奖励</span><span>GenerateRewardName 基础权重 40%；第一层和后续楼层都可出现。</span></div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="Treasure Chest" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的中文名称。"><strong>中文名</strong><em>宝箱</em></span>
<span title="游戏原始名称或代码中对应名称。"><strong>英文名</strong><em>Treasure Chest</em></span>
<span title="反编译类型或创建 feature 时使用的内部名称。"><strong>类名</strong><em>TreasureChest</em></span>
<span title="用于图鉴分组。"><strong>类别</strong><em>奖励</em></span>
<span title="从地牢生成和奖励分配中恢复出的生成入口。"><strong>生成方式</strong><em>GenerateRewardName 基础权重 40%；第一层和后续楼层都可出现。</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>机制说明</h2>
  <div class="dq-mechanic-list">
<p>物品数量由一次 Game.RandomFloat 决定：小于 0.85 为 1 件，小于 0.98 为 2 件，否则 3 件。</p>
<p>第一件固定走 CardFinder.ChooseReward。第二件和第三件各自先掷一次随机数，小于 0.45 时给金币，否则继续抽卡。</p>
<p>抽卡使用当前地牢奖励阶级范围，并把上限下调 1、最低夹到 1；minAffinity 为 1。</p>
<p>生成完成后会对 loot 列表执行 Utility.Shuffle，因此卡牌和金币的展示顺序不一定等于生成顺序。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>战利品分布</h2>
  <p class="dq-note">TreasureChest.Open 生成 loot 后洗牌展示；下表是生成时的原始规则。</p>
  <table class="dq-data-table">
    <thead><tr><th>项目</th><th>规则</th></tr></thead>
    <tbody>
<tr><td>物品数量</td><td>RandomFloat &lt; 0.85 为 1 件；&lt; 0.98 为 2 件；其余为 3 件。</td></tr>
<tr><td>第 1 件</td><td>固定调用 CardFinder.ChooseReward 生成卡牌。</td></tr>
<tr><td>第 2/3 件</td><td>每件各自掷随机数；&lt; 0.45 给金币，否则给卡牌。</td></tr>
<tr><td>展示顺序</td><td>生成完执行 Utility.Shuffle，因此展示顺序不等于生成顺序。</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>随机奖励权重</h2>
  <table class="dq-data-table">
    <thead><tr><th>楼层组</th><th>概率</th><th>说明</th></tr></thead>
    <tbody>
<tr><td>第 1 层</td><td>40%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
<tr><td>第 2 层以后</td><td>40%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">回到地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
