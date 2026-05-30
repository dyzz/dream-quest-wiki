---
title: "果昔小屋 / Smoothie Shack"
description: "生成一组可购买或领取的临时增益/奖励对象。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Dungeon Feature · 奖励</p>
    <h1>果昔小屋</h1>
    <p class="dq-lede">生成一组可购买或领取的临时增益/奖励对象。</p>
    <p class="dq-original">原名：Smoothie Shack · 类名：SmoothieShack</p>
    <div class="dq-tag-row"><span>奖励</span><span>服务奖励三选一时约 33.34%；随机奖励名另有 5%。</span></div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/SmoothieShack__181.png" alt="Smoothie Shack" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的中文名称。"><strong>中文名</strong><em>果昔小屋</em></span>
<span title="游戏原始名称或代码中对应名称。"><strong>英文名</strong><em>Smoothie Shack</em></span>
<span title="反编译类型或创建 feature 时使用的内部名称。"><strong>类名</strong><em>SmoothieShack</em></span>
<span title="用于图鉴分组。"><strong>类别</strong><em>奖励</em></span>
<span title="从地牢生成和奖励分配中恢复出的生成入口。"><strong>生成方式</strong><em>服务奖励三选一时约 33.34%；随机奖励名另有 5%。</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>机制说明</h2>
  <div class="dq-mechanic-list">
<p>SmoothieShack.GenerateText 和 BuildLootObjects 决定展示文本和可选项。</p>
<p>AcquireFunction / AcquireCard 处理选择后的获得逻辑。</p>
<p>它在奖励生成中和 Blacksmith、Monastery 同属服务奖励。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>服务结构</h2>
  
  <table class="dq-data-table">
    <thead><tr><th>入口</th><th>规则</th></tr></thead>
    <tbody>
<tr><td>GenerateText</td><td>生成进入小屋时的说明文本。</td></tr>
<tr><td>BuildLootObjects</td><td>构建可选择的奖励对象。</td></tr>
<tr><td>AcquireFunction / AcquireCard</td><td>处理选择后的实际获得逻辑。</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>随机奖励权重</h2>
  <table class="dq-data-table">
    <thead><tr><th>楼层组</th><th>概率</th><th>说明</th></tr></thead>
    <tbody>
<tr><td>第 1 层</td><td>5%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
<tr><td>第 2 层以后</td><td>5%</td><td>来自 DungeonBoard.GenerateRewardName。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">回到地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
