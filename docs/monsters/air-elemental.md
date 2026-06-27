---
title: "风元素"
description: "普通怪物，出现在 山脉、地牢。等级范围 5-10 级。基础牌组 10 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 5-10 级</p>
    <h1>风元素</h1>
    <span class="dq-original">原名：Air Elemental</span>
    <p class="dq-lede">普通怪物，出现在 山脉、地牢。等级范围 5-10 级。基础牌组 10 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>机制与等级变化</span>
      <span>山脉</span>
<span>地牢</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/AirElemental__821.png" alt="风元素" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>风元素</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Air Elemental</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>AirElemental</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>AirElemental</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>5-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>山脉、地牢</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 0、地牢: 0、水域: 0、火山: 0、山脉: 10</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>11 · 电系型；吞噬收益：获得法力 +max(1, floor(怪物等级 / 2))，并获得一张电系法术。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>5</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>5</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>0</em></span>
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
<p>免疫电系伤害，弱毒性伤害；每回合额外抽牌，且战斗拖长后抽牌量继续增加。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/lightning-strike">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>闪电打击</strong><small>Lightning Strike</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>闪电打击</strong>
      <small>Lightning Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点电系伤害。</em>
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
  <td>7+</td>
  <td>机制文本变为：抽牌 an extra 卡牌 每回合 (stacking)</td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>特定条件</td>
  <td>机制文本变为：抽牌 an extra 卡牌 每两回合 (stacking)</td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>4+</td>
  <td>将 <a class="dq-card-chip" href="/cards/storm-slash1">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（1）</strong><small>Storm Slash (1)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（1）</strong>
      <small>Storm Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点电系伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/storm-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>Storm Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（2）</strong>
      <small>Storm Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点电系伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>5+</td>
  <td>将 <a class="dq-card-chip" href="/cards/storm-slash1">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（1）</strong><small>Storm Slash (1)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（1）</strong>
      <small>Storm Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点电系伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/storm-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>Storm Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（2）</strong>
      <small>Storm Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点电系伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
  <td>将 <a class="dq-card-chip" href="/cards/storm-slash1">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（1）</strong><small>Storm Slash (1)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（1）</strong>
      <small>Storm Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点电系伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/storm-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>Storm Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（2）</strong>
      <small>Storm Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点电系伤害。</em>
    </span>
  </span>
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>将 <a class="dq-card-chip" href="/cards/storm-slash1">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（1）</strong><small>Storm Slash (1)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（1）</strong>
      <small>Storm Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点电系伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/storm-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>Storm Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（2）</strong>
      <small>Storm Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点电系伤害。</em>
    </span>
  </span>
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>将 <a class="dq-card-chip" href="/cards/storm-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>Storm Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（2）</strong>
      <small>Storm Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点电系伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/lightning-strike">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>闪电打击</strong><small>Lightning Strike</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>闪电打击</strong>
      <small>Lightning Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点电系伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>将 <a class="dq-card-chip" href="/cards/storm-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>Storm Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（2）</strong>
      <small>Storm Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点电系伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/storm-slash3">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash3__285.png" alt="风暴斩（3）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（3）</strong><small>Storm Slash (3)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash3__285.png" alt="风暴斩（3）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（3）</strong>
      <small>Storm Slash (3) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点电系伤害。</em>
    </span>
  </span>
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/zap">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>电弧</strong><small>Zap</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电弧</strong>
      <small>Zap · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>对手 失去 所有 法力并行动点。</em>
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
  <h2>HP / 蓝 / 牌组快照</h2>
  <p class="dq-note">这些行来自怪物等级快照 TSV。最低等级显示完整最终卡组；后续等级只显示相比上一等级新增的关键牌。</p>
  <div class="dq-table-scroll">
<table class="dq-data-table dq-snapshot-table">
  <thead><tr><th>怪物 / 等级数据</th><th>卡组增量</th></tr></thead>
  <tbody>
<tr id="snapshot-air-elemental-5">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/air-elemental">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AirElemental__821.png" alt="风元素" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>风元素</strong><small>AirElemental</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>5</em></span><span><b>HP</b><em>20</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">最低等级最终卡组</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/lightning-strike" title="闪电打击">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>闪电打击</strong><small>x1 · Lightning Strike</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>闪电打击</strong><small>x1 · Lightning Strike</small><em>造成 6 点电系伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/storm-slash2" title="风暴斩（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>x2 · Storm Slash (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>风暴斩（2）</strong><small>x2 · Storm Slash (2)</small><em>造成 4 点电系伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/storm-slash1" title="风暴斩（1）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（1）</strong><small>x3 · Storm Slash (1)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>风暴斩（1）</strong><small>x3 · Storm Slash (1)</small><em>造成 2 点电系伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/shock" title="震击">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>震击</strong><small>x2 · Shock</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>震击</strong><small>x2 · Shock</small><em>造成 4 点电系伤害。从牌库抽取下一张法术牌。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/mana-surge" title="法力激涌">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力激涌</strong><small>x2 · Mana Surge</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>法力激涌</strong><small>x2 · Mana Surge</small><em>获得 10 点法力。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack2" title="攻击（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（2）</strong><small>x10 · Attack (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（2）</strong><small>x10 · Attack (2)</small><em>造成 2 点攻击伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-air-elemental-6">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/air-elemental">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AirElemental__821.png" alt="风元素" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>风元素</strong><small>AirElemental</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>6</em></span><span><b>HP</b><em>30</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/storm-slash2" title="风暴斩（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>x2 · Storm Slash (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>风暴斩（2）</strong><small>x2 · Storm Slash (2)</small><em>造成 4 点电系伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-air-elemental-7">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/air-elemental">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AirElemental__821.png" alt="风元素" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>风元素</strong><small>AirElemental</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>7</em></span><span><b>HP</b><em>40</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/storm-slash2" title="风暴斩（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（2）</strong><small>x2 · Storm Slash (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>风暴斩（2）</strong><small>x2 · Storm Slash (2)</small><em>造成 4 点电系伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-air-elemental-8">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/air-elemental">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AirElemental__821.png" alt="风元素" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>风元素</strong><small>AirElemental</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>8</em></span><span><b>HP</b><em>55</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/lightning-strike" title="闪电打击">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>闪电打击</strong><small>x1 · Lightning Strike</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>闪电打击</strong><small>x1 · Lightning Strike</small><em>造成 6 点电系伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-air-elemental-9">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/air-elemental">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AirElemental__821.png" alt="风元素" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>风元素</strong><small>AirElemental</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>9</em></span><span><b>HP</b><em>70</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/storm-slash3" title="风暴斩（3）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash3__285.png" alt="风暴斩（3）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（3）</strong><small>x2 · Storm Slash (3)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash3__285.png" alt="风暴斩（3）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>风暴斩（3）</strong><small>x2 · Storm Slash (3)</small><em>造成 6 点电系伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-air-elemental-10">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/air-elemental">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AirElemental__821.png" alt="风元素" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>风元素</strong><small>AirElemental</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>10</em></span><span><b>HP</b><em>85</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/zap" title="电弧">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>电弧</strong><small>x1 · Zap</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>电弧</strong><small>x1 · Zap</small><em>对手 失去 所有 法力并行动点。</em></span>
</span>
</a></span>
</div></td>
</tr>
  </tbody>
</table>
</div>
  <p><a href="/assets/data/monster-level-snapshots-incremental.html#snapshot-air-elemental-5">查看全量怪物等级快照</a></p>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 10 张</span>
  <span>唯一卡牌 4 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>攻击</td>
  <td>6</td>
  <td><a class="dq-card-chip" href="/cards/lightning-strike">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>闪电打击</strong><small>Lightning Strike</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>闪电打击</strong>
      <small>Lightning Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点电系伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/storm-slash1">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴斩（1）</strong><small>Storm Slash (1)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（1）</strong>
      <small>Storm Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点电系伤害。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>法术</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/shock">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>震击</strong><small>Shock</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>震击</strong>
      <small>Shock · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 4 点电系伤害。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>魔力</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/mana-surge">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力激涌</strong><small>Mana Surge</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力激涌</strong>
      <small>Mana Surge · 魔力 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>获得 10 点法力。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/storm-slash1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="eager"></span></span>
  <strong>风暴斩（1）</strong>
  <span class="dq-profession-card-meta">Storm Slash (1) · 基础牌组 x5 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（1）</strong>
      <small>Storm Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/storm-slash2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="eager"></span></span>
  <strong>风暴斩（2）</strong>
  <span class="dq-profession-card-meta">Storm Slash (2) · 等级加入 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（2）</strong>
      <small>Storm Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/shock">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="eager"></span></span>
  <strong>震击</strong>
  <span class="dq-profession-card-meta">Shock · 基础牌组 x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>震击</strong>
      <small>Shock · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 4 点电系伤害。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/lightning-strike">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <strong>闪电打击</strong>
  <span class="dq-profession-card-meta">Lightning Strike · 基础牌组 x1 / 优先起手 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>闪电打击</strong>
      <small>Lightning Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/storm-slash3">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormSlash3__285.png" alt="风暴斩（3）" loading="eager"></span></span>
  <strong>风暴斩（3）</strong>
  <span class="dq-profession-card-meta">Storm Slash (3) · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormSlash3__285.png" alt="风暴斩（3）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴斩（3）</strong>
      <small>Storm Slash (3) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/mana-surge">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <strong>法力激涌</strong>
  <span class="dq-profession-card-meta">Mana Surge · 基础牌组 x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力激涌</strong>
      <small>Mana Surge · 魔力 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>获得 10 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/zap">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="eager"></span></span>
  <strong>电弧</strong>
  <span class="dq-profession-card-meta">Zap · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电弧</strong>
      <small>Zap · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>对手 失去 所有 法力并行动点。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
