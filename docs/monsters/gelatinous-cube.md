---
title: "凝胶方块"
description: "Boss，出现在 地牢、水域、墓穴。等级范围 4-7 级。基础牌组 3 张。主要依靠牌组行动。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 4-7 级</p>
    <h1>凝胶方块</h1>
    <span class="dq-original">原名：Gelatinous Cube</span>
    <p class="dq-lede">Boss，出现在 地牢、水域、墓穴。等级范围 4-7 级。基础牌组 3 张。主要依靠牌组行动。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>Boss</span>
      <span>有等级变化</span>
      <span>地牢</span>
<span>水域</span>
<span>墓穴</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/GelatinousCube__260.png" alt="凝胶方块" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>凝胶方块</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Gelatinous Cube</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>GelatinousCube</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>GelatinousCube</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>Boss</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>4-7 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>地牢、水域、墓穴</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 3、森林: 0、地牢: 10、水域: 3、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>6 · 巨型/Boss 型；吞噬收益：获得最大生命 +max(1, 怪物等级)。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>4</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>4</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>3</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>3</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>4</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>有等级变化</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p><a class="dq-card-chip" href="/cards/slurp">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slurp__921.png" alt="吮吸" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>吮吸</strong><small>Slurp</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slurp__921.png" alt="吮吸" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吮吸</strong>
      <small>Slurp · 反应 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>触发：对手打出攻击牌、行动牌、魔力牌或法术牌时有 35% 概率。效果：该牌无效果；直到本场战斗结束，放逐该牌；回复 5 点生命。</em>
    </span>
  </span>
</a> 会吃掉玩家打出的部分卡牌并转化为额外生命；6+ 级会加入 <a class="dq-card-chip" href="/cards/resilience">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>韧性</strong><small>Resilience</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>韧性</strong>
      <small>Resilience · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>直到你的下个回合，你单次受到超过 3 点的伤害会被降至 3 点。抽 1 张牌。</em>
    </span>
  </span>
</a> 和 <a class="dq-card-chip" href="/cards/engulf">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Engulf__537.png" alt="吞没" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>吞没</strong><small>Engulf</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Engulf__537.png" alt="吞没" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吞没</strong>
      <small>Engulf · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>放逐目标装备牌或祈祷牌。回复 5 点生命。</em>
    </span>
  </span>
</a>。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/resilience">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>韧性</strong><small>Resilience</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>韧性</strong>
      <small>Resilience · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>直到你的下个回合，你单次受到超过 3 点的伤害会被降至 3 点。抽 1 张牌。</em>
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
  <td>加入 <a class="dq-card-chip" href="/cards/resilience">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>韧性</strong><small>Resilience</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>韧性</strong>
      <small>Resilience · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>直到你的下个回合，你单次受到超过 3 点的伤害会被降至 3 点。抽 1 张牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/engulf">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Engulf__537.png" alt="吞没" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>吞没</strong><small>Engulf</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Engulf__537.png" alt="吞没" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吞没</strong>
      <small>Engulf · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>放逐目标装备牌或祈祷牌。回复 5 点生命。</em>
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
  <span>基础牌组 3 张</span>
  <span>唯一卡牌 1 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>反应</td>
  <td>3</td>
  <td><a class="dq-card-chip" href="/cards/slurp">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slurp__921.png" alt="吮吸" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>吮吸</strong><small>Slurp</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slurp__921.png" alt="吮吸" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吮吸</strong>
      <small>Slurp · 反应 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>触发：对手打出攻击牌、行动牌、魔力牌或法术牌时有 35% 概率。效果：该牌无效果；直到本场战斗结束，放逐该牌；回复 5 点生命。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/engulf">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Engulf__537.png" alt="吞没" loading="eager"></span></span>
  <strong>吞没</strong>
  <span class="dq-profession-card-meta">Engulf · 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Engulf__537.png" alt="吞没" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吞没</strong>
      <small>Engulf · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>放逐目标装备牌或祈祷牌。回复 5 点生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/slurp">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slurp__921.png" alt="吮吸" loading="eager"></span></span>
  <strong>吮吸</strong>
  <span class="dq-profession-card-meta">Slurp · 基础牌组 x3 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slurp__921.png" alt="吮吸" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吮吸</strong>
      <small>Slurp · 反应 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>触发：对手打出攻击牌、行动牌、魔力牌或法术牌时有 35% 概率。效果：该牌无效果；直到本场战斗结束，放逐该牌；回复 5 点生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/resilience">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="eager"></span></span>
  <strong>韧性</strong>
  <span class="dq-profession-card-meta">Resilience · 优先起手 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>韧性</strong>
      <small>Resilience · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>直到你的下个回合，你单次受到超过 3 点的伤害会被降至 3 点。抽 1 张牌。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
