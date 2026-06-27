---
title: "复制体"
description: "普通怪物，出现在 地牢、水域、火山、森林、墓穴、山脉。等级范围 4-7 级。进入战斗时复制玩家牌组。有独立技能或回合机制。等级提升没有解析到额外牌组改动。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 4-7 级</p>
    <h1>复制体</h1>
    <span class="dq-original">原名：Clone</span>
    <p class="dq-lede">普通怪物，出现在 地牢、水域、火山、森林、墓穴、山脉。等级范围 4-7 级。进入战斗时复制玩家牌组。有独立技能或回合机制。等级提升没有解析到额外牌组改动。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>复制牌组</span>
      <span>地牢</span>
<span>水域</span>
<span>火山</span>
<span>森林</span>
<span>墓穴</span>
<span>山脉</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/clone__158.png" alt="复制体" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>复制体</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Clone</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Clone</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Clone</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>4-7 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>地牢、水域、火山、森林、墓穴、山脉</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 5、森林: 0、地牢: 5、水域: 0、火山: 5、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>4 · 装备型；吞噬收益：获得 +1 Equipment Slot，也就是装备槽 +1。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>15</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>4</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>0</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>1.296875</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>1</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>1</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>复制牌组</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p>进入战斗时复制玩家当前牌组；固定基础牌组为空不代表没有出牌能力。</p>
</div>
</section>



<section class="dq-section-block">
  <h2>等级变化</h2>
  <p class="dq-note">没有解析到等级提升后的牌组或属性变化。</p>
</section>

<section class="dq-section-block">
  <h2>HP / 蓝 / 牌组快照</h2>
  <p class="dq-note">这些行来自怪物等级快照 TSV。最低等级显示完整最终卡组；后续等级只显示相比上一等级新增的关键牌。</p>
  <div class="dq-table-scroll">
<table class="dq-data-table dq-snapshot-table">
  <thead><tr><th>怪物 / 等级数据</th><th>卡组增量</th></tr></thead>
  <tbody>
<tr id="snapshot-clone-4">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/clone">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/clone__158.png" alt="复制体" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>复制体</strong><small>Clone</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>4</em></span><span><b>HP</b><em>19</em></span><span><b>MP</b><em>15</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">最低等级最终卡组</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/attack1" title="攻击（1）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（1）</strong><small>x2 · Attack (1)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（1）</strong><small>x2 · Attack (1)</small><em>造成 1 点攻击伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack2" title="攻击（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（2）</strong><small>x6 · Attack (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（2）</strong><small>x6 · Attack (2)</small><em>造成 2 点攻击伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-clone-5">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/clone">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/clone__158.png" alt="复制体" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>复制体</strong><small>Clone</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>5</em></span><span><b>HP</b><em>25</em></span><span><b>MP</b><em>15</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
<tr id="snapshot-clone-6">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/clone">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/clone__158.png" alt="复制体" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>复制体</strong><small>Clone</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>6</em></span><span><b>HP</b><em>38</em></span><span><b>MP</b><em>15</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
<tr id="snapshot-clone-7">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/clone">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/clone__158.png" alt="复制体" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>复制体</strong><small>Clone</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>7</em></span><span><b>HP</b><em>51</em></span><span><b>MP</b><em>15</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
  </tbody>
</table>
</div>
  <p><a href="/assets/data/monster-level-snapshots-incremental.html#snapshot-clone-4">查看全量怪物等级快照</a></p>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <p class="dq-note">没有固定基础牌组；进入战斗时复制玩家当前牌组。</p>
<h3>关联卡牌</h3>
<p class="dq-note">没有解析到可独立列出的怪物卡牌。</p>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
