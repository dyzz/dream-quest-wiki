---
title: "巨蛛"
description: "普通怪物，出现在 森林、墓穴。等级范围 1-4 级。基础牌组 6 张。主要依靠牌组行动。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 1-4 级</p>
    <h1>巨蛛</h1>
    <span class="dq-original">原名：Giant Spider</span>
    <p class="dq-lede">普通怪物，出现在 森林、墓穴。等级范围 1-4 级。基础牌组 6 张。主要依靠牌组行动。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>有等级变化</span>
      <span>森林</span>
<span>墓穴</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/GiantSpider__757.png" alt="巨蛛" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>巨蛛</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Giant Spider</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>GiantSpider</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>GiantSpider</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>1-4 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>森林、墓穴</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 5、森林: 5、地牢: 0、水域: 5、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>1 · 基础生物；吞噬收益：完全回复生命；不增加最大生命。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>1</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>3</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>1</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>1</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>1</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>有等级变化</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p><a class="dq-card-chip" href="/cards/web">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛛网</strong><small>Web</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网</strong>
      <small>Web · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a> 会让玩家同时失去行动点和手牌；牌组还包含毒性和防御牌。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/sting">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛰刺</strong><small>Sting</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛰刺</strong>
      <small>Sting · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 2&gt;。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/web">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛛网</strong><small>Web</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网</strong>
      <small>Web · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
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
  <td>4+</td>
  <td>将 <a class="dq-card-chip" href="/cards/web">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛛网</strong><small>Web</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网</strong>
      <small>Web · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/web2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛛网（2）</strong><small>Web (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网（2）</strong>
      <small>Web (2) · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌并失去 2 行动点。</em>
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
<tr id="snapshot-giant-spider-1">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/giant-spider">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GiantSpider__757.png" alt="巨蛛" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>巨蛛</strong><small>GiantSpider</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>1</em></span><span><b>HP</b><em>4</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">最低等级最终卡组</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/sting" title="蛰刺">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛰刺</strong><small>x3 · Sting</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>蛰刺</strong><small>x3 · Sting</small><em>对手获得 &lt;中毒 2&gt;。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/web" title="蛛网">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛛网</strong><small>x3 · Web</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>蛛网</strong><small>x3 · Web</small><em>对手弃掉 1 张牌并失去 1 点行动点。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack1" title="攻击（1）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（1）</strong><small>x8 · Attack (1)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（1）</strong><small>x8 · Attack (1)</small><em>造成 1 点攻击伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-giant-spider-2">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/giant-spider">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GiantSpider__757.png" alt="巨蛛" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>巨蛛</strong><small>GiantSpider</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>2</em></span><span><b>HP</b><em>7</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
<tr id="snapshot-giant-spider-3">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/giant-spider">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GiantSpider__757.png" alt="巨蛛" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>巨蛛</strong><small>GiantSpider</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>3</em></span><span><b>HP</b><em>10</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
<tr id="snapshot-giant-spider-4">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/giant-spider">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GiantSpider__757.png" alt="巨蛛" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>巨蛛</strong><small>GiantSpider</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>4</em></span><span><b>HP</b><em>15</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/web2" title="蛛网（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛛网（2）</strong><small>x1 · Web (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>蛛网（2）</strong><small>x1 · Web (2)</small><em>对手弃掉 2 张牌并失去 2 行动点。</em></span>
</span>
</a></span>
</div></td>
</tr>
  </tbody>
</table>
</div>
  <p><a href="/assets/data/monster-level-snapshots-incremental.html#snapshot-giant-spider-1">查看全量怪物等级快照</a></p>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 6 张</span>
  <span>唯一卡牌 2 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>行动牌</td>
  <td>6</td>
  <td><a class="dq-card-chip" href="/cards/sting">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛰刺</strong><small>Sting</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛰刺</strong>
      <small>Sting · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 2&gt;。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/web">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蛛网</strong><small>Web</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网</strong>
      <small>Web · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/web">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <strong>蛛网</strong>
  <span class="dq-profession-card-meta">Web · 基础牌组 x3 / 优先起手 / 关键行为 / 等级变化 / 机制引用 / 等级移出 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网</strong>
      <small>Web · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/sting">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="eager"></span></span>
  <strong>蛰刺</strong>
  <span class="dq-profession-card-meta">Sting · 基础牌组 x3 / 优先起手 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛰刺</strong>
      <small>Sting · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 2&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/web2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="eager"></span></span>
  <strong>蛛网（2）</strong>
  <span class="dq-profession-card-meta">Web (2) · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网（2）</strong>
      <small>Web (2) · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌并失去 2 行动点。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
