---
title: "幽灵"
description: "普通怪物，出现在 森林、地牢、墓穴。等级范围 5-10 级。基础牌组 2 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 5-10 级</p>
    <h1>幽灵</h1>
    <span class="dq-original">原名：Ghost</span>
    <p class="dq-lede">普通怪物，出现在 森林、地牢、墓穴。等级范围 5-10 级。基础牌组 2 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>机制与等级变化</span>
      <span>森林</span>
<span>地牢</span>
<span>墓穴</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Ghost__382.png" alt="幽灵" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>幽灵</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Ghost</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Ghost</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Ghost</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>5-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>森林、地牢、墓穴</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 10、森林: 0、地牢: 0、水域: 5、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>3 · 亡灵型；吞噬收益：75% 受到等同怪物等级的伤害；25% 获得 +1 Card，也就是每回合抽牌/手牌 +1。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>5</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>2</em></span>
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
<p>隐形、亡灵、物理抗性；回合机制会持续吸取生命，并带有阻止部分出牌的效果。</p>
</div>
</section>



<section class="dq-section-block">
  <h2>等级变化</h2>
  <table class="dq-data-table">
  <thead><tr><th>等级</th><th>变化</th><th>次数</th><th>条件说明</th></tr></thead>
  <tbody>
<tr>
  <td>7+</td>
  <td>机制文本变为：Drains 4 maximum 生命 每回合</td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/exhaustion">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Exhaustion__325.png" alt="疲惫" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>疲惫</strong><small>Exhaustion</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Exhaustion__325.png" alt="疲惫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>疲惫</strong>
      <small>Exhaustion · 反应 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>触发：对手打出一张牌，且场上至少还有 3 张其他牌时。效果：该牌无效果。该回合结束。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/cloak-of-invisibility">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CloakOfInvisibility__311.png" alt="隐形斗篷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>隐形斗篷</strong><small>Cloak of Invisibility</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CloakOfInvisibility__311.png" alt="隐形斗篷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>隐形斗篷</strong>
      <small>Cloak of Invisibility · 装备 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>防止对手每回合打出的第一张牌产生任何效果。此效果可以叠加。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/anticipate">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Anticipate__163.png" alt="预判" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>预判</strong><small>Anticipate</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Anticipate__163.png" alt="预判" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>预判</strong>
      <small>Anticipate · 行动牌 · 9 阶 · 1 行动点 / 0 法力</small>
      <em>查看对手手牌，从中选择 1 张牌加入你的手牌；该牌弃掉时会进入对手弃牌堆。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>机制文本变为：Drains 2 maximum 生命 每回合</td>
  <td>1</td>
  <td></td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 2 张</span>
  <span>唯一卡牌 1 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>行动牌</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/hide">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Hide__619.png" alt="隐藏" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>隐藏</strong><small>Hide</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Hide__619.png" alt="隐藏" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>隐藏</strong>
      <small>Hide · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>抽 1 张牌。直到你的下个回合，防止对手打出的下一张牌产生任何效果。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/hide">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Hide__619.png" alt="隐藏" loading="eager"></span></span>
  <strong>隐藏</strong>
  <span class="dq-profession-card-meta">Hide · 基础牌组 x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Hide__619.png" alt="隐藏" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>隐藏</strong>
      <small>Hide · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>抽 1 张牌。直到你的下个回合，防止对手打出的下一张牌产生任何效果。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/exhaustion">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Exhaustion__325.png" alt="疲惫" loading="eager"></span></span>
  <strong>疲惫</strong>
  <span class="dq-profession-card-meta">Exhaustion · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Exhaustion__325.png" alt="疲惫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>疲惫</strong>
      <small>Exhaustion · 反应 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>触发：对手打出一张牌，且场上至少还有 3 张其他牌时。效果：该牌无效果。该回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/cloak-of-invisibility">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CloakOfInvisibility__311.png" alt="隐形斗篷" loading="eager"></span></span>
  <strong>隐形斗篷</strong>
  <span class="dq-profession-card-meta">Cloak of Invisibility · 起手装备 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CloakOfInvisibility__311.png" alt="隐形斗篷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>隐形斗篷</strong>
      <small>Cloak of Invisibility · 装备 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>防止对手每回合打出的第一张牌产生任何效果。此效果可以叠加。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/anticipate">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Anticipate__163.png" alt="预判" loading="eager"></span></span>
  <strong>预判</strong>
  <span class="dq-profession-card-meta">Anticipate · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Anticipate__163.png" alt="预判" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>预判</strong>
      <small>Anticipate · 行动牌 · 9 阶 · 1 行动点 / 0 法力</small>
      <em>查看对手手牌，从中选择 1 张牌加入你的手牌；该牌弃掉时会进入对手弃牌堆。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
