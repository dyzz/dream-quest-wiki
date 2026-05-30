---
title: "女妖"
description: "普通怪物，出现在 地牢、森林、墓穴。等级范围 5-7 级。基础牌组 5 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 5-7 级</p>
    <h1>女妖</h1>
    <span class="dq-original">原名：Banshee</span>
    <p class="dq-lede">普通怪物，出现在 地牢、森林、墓穴。等级范围 5-7 级。基础牌组 5 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>机制与等级变化</span>
      <span>地牢</span>
<span>森林</span>
<span>墓穴</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Banshee__732.png" alt="女妖" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>女妖</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Banshee</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Banshee</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Banshee</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>5-7 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>地牢、森林、墓穴</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 10、森林: 0、地牢: 0、水域: 5、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>3 · 亡灵型；吞噬收益：75% 受到等同怪物等级的伤害；25% 获得 +1 Card，也就是每回合抽牌/手牌 +1。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>5</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>3</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>1</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>1</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>1</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>机制与等级变化</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p>标记为亡灵并带物理抗性；牌组以弃牌和吸血治疗为核心。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/scream">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>尖叫</strong><small>Scream</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>尖叫</strong>
      <small>Scream · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌。</em>
    </span>
  </span>
</a>。</p>
</div>
</section>



<section class="dq-section-block">
  <h2>等级变化</h2>
  <table class="dq-data-table">
  <thead><tr><th>等级</th><th>变化</th><th>次数</th><th>条件说明</th></tr></thead>
  <tbody>
<tr>
  <td>6+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/siphon-life">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>吸取生命</strong><small>Drain Life</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吸取生命</strong>
      <small>Drain Life · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点&lt;穿透&gt;伤害。回复 4 点生命。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 5 张</span>
  <span>唯一卡牌 2 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>法术</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/siphon-life">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>吸取生命</strong><small>Drain Life</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吸取生命</strong>
      <small>Drain Life · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点&lt;穿透&gt;伤害。回复 4 点生命。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>行动牌</td>
  <td>3</td>
  <td><a class="dq-card-chip" href="/cards/scream">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>尖叫</strong><small>Scream</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>尖叫</strong>
      <small>Scream · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/siphon-life">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="eager"></span></span>
  <strong>吸取生命</strong>
  <span class="dq-profession-card-meta">Drain Life · 基础牌组 x2 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吸取生命</strong>
      <small>Drain Life · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点&lt;穿透&gt;伤害。回复 4 点生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/scream">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="eager"></span></span>
  <strong>尖叫</strong>
  <span class="dq-profession-card-meta">Scream · 基础牌组 x3 / 优先起手</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>尖叫</strong>
      <small>Scream · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
