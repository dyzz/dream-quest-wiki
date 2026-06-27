---
title: "家精"
description: "普通怪物，出现在 森林、地牢、山脉。等级范围 4-7 级。基础牌组 5 张。有独立技能或回合机制。等级提升没有解析到额外牌组改动。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 4-7 级</p>
    <h1>家精</h1>
    <span class="dq-original">原名：Brownie</span>
    <p class="dq-lede">普通怪物，出现在 森林、地牢、山脉。等级范围 4-7 级。基础牌组 5 张。有独立技能或回合机制。等级提升没有解析到额外牌组改动。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>有机制</span>
      <span>森林</span>
<span>地牢</span>
<span>山脉</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Brownie__93.png" alt="家精" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>家精</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Brownie</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Brownie</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Brownie</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>4-7 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>森林、地牢、山脉</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 10、地牢: 0、水域: 5、火山: 0、山脉: 5</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>7 · 迅捷型；吞噬收益：获得 +1 Action，也就是行动点 +1。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>4</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>5</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>1</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>1</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>1</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>有机制</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p>带高闪避；<a class="dq-card-chip" href="/cards/counterspell">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>反制法术</strong><small>Counterspell</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>反制法术</strong>
      <small>Counterspell · 反应 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。</em>
    </span>
  </span>
</a> 会让法术无效。</p>
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
<tr id="snapshot-brownie-4">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/brownie">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Brownie__93.png" alt="家精" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>家精</strong><small>Brownie</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>4</em></span><span><b>HP</b><em>15</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">最低等级最终卡组</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/sprite-stab" title="精灵刺击">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SpriteStab__724.png" alt="精灵刺击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>精灵刺击</strong><small>x3 · Sprite Stab</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SpriteStab__724.png" alt="精灵刺击" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>精灵刺击</strong><small>x3 · Sprite Stab</small><em>造成 2 点攻击伤害。抽 1 张牌。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/counterspell" title="反制法术">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>反制法术</strong><small>x2 · Counterspell</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>反制法术</strong><small>x2 · Counterspell</small><em>触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack1" title="攻击（1）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（1）</strong><small>x4 · Attack (1)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（1）</strong><small>x4 · Attack (1)</small><em>造成 1 点攻击伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack2" title="攻击（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（2）</strong><small>x9 · Attack (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（2）</strong><small>x9 · Attack (2)</small><em>造成 2 点攻击伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-brownie-5">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/brownie">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Brownie__93.png" alt="家精" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>家精</strong><small>Brownie</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>5</em></span><span><b>HP</b><em>20</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
<tr id="snapshot-brownie-6">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/brownie">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Brownie__93.png" alt="家精" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>家精</strong><small>Brownie</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>6</em></span><span><b>HP</b><em>30</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
<tr id="snapshot-brownie-7">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/brownie">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Brownie__93.png" alt="家精" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>家精</strong><small>Brownie</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>7</em></span><span><b>HP</b><em>40</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
  </tbody>
</table>
</div>
  <p><a href="/assets/data/monster-level-snapshots-incremental.html#snapshot-brownie-4">查看全量怪物等级快照</a></p>
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
  <td>行动牌</td>
  <td>3</td>
  <td><a class="dq-card-chip" href="/cards/sprite-stab">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SpriteStab__724.png" alt="精灵刺击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>精灵刺击</strong><small>Sprite Stab</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SpriteStab__724.png" alt="精灵刺击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>精灵刺击</strong>
      <small>Sprite Stab · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。抽 1 张牌。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>反应</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/counterspell">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>反制法术</strong><small>Counterspell</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>反制法术</strong>
      <small>Counterspell · 反应 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/sprite-stab">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SpriteStab__724.png" alt="精灵刺击" loading="eager"></span></span>
  <strong>精灵刺击</strong>
  <span class="dq-profession-card-meta">Sprite Stab · 基础牌组 x3</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SpriteStab__724.png" alt="精灵刺击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>精灵刺击</strong>
      <small>Sprite Stab · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/counterspell">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="eager"></span></span>
  <strong>反制法术</strong>
  <span class="dq-profession-card-meta">Counterspell · 基础牌组 x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>反制法术</strong>
      <small>Counterspell · 反应 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
