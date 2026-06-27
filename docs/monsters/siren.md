---
title: "塞壬"
description: "普通怪物，出现在 森林、山脉。等级范围 4-7 级。基础牌组 6 张。主要依靠牌组行动。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 4-7 级</p>
    <h1>塞壬</h1>
    <span class="dq-original">原名：Siren</span>
    <p class="dq-lede">普通怪物，出现在 森林、山脉。等级范围 4-7 级。基础牌组 6 张。主要依靠牌组行动。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>有等级变化</span>
      <span>森林</span>
<span>山脉</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Siren__598.png" alt="塞壬" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>塞壬</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Siren</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Siren</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Siren</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>4-7 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>森林、山脉</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 5、地牢: 0、水域: 10、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>5 · 净化型；吞噬收益：打开 Delete2 删除牌奖励，可从牌组中删除 2 张牌。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>6</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>4</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>5</em></span>
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
<p><a class="dq-card-chip" href="/cards/beckon">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>召唤</strong><small>Beckon</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>召唤</strong>
      <small>Beckon · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>放逐 2 牌 随机 从 对手手牌。</em>
    </span>
  </span>
</a> 会放逐玩家手牌；牌组还包含治疗和保护法术。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/beckon">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>召唤</strong><small>Beckon</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>召唤</strong>
      <small>Beckon · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>放逐 2 牌 随机 从 对手手牌。</em>
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
  <td>将 <a class="dq-card-chip" href="/cards/heal">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>治疗</strong><small>Heal</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗</strong>
      <small>Heal · 法术 · 2 阶 · 0 行动点 / 1 法力</small>
      <em>回复 5 点生命。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/ward">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>防护</strong><small>Ward</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>防护</strong>
      <small>Ward · 法术 · 4 阶 · 0 行动点 / 3 法力</small>
      <em>防止你将受到的接下来 8 点伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/bless">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Bless__316.png" alt="祝福" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>祝福</strong><small>Bless</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Bless__316.png" alt="祝福" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>祝福</strong>
      <small>Bless · 法术 · 6 阶 · 0 行动点 / 7 法力</small>
      <em>回复 15 点生命。&lt;过量治疗&gt; 变为护盾。</em>
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
<tr id="snapshot-siren-4">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/siren">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Siren__598.png" alt="塞壬" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>塞壬</strong><small>Siren</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>4</em></span><span><b>HP</b><em>15</em></span><span><b>MP</b><em>6</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">最低等级最终卡组</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/beckon" title="召唤">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>召唤</strong><small>x2 · Beckon</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>召唤</strong><small>x2 · Beckon</small><em>放逐 2 牌 随机 从 对手手牌。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/salve" title="治疗药膏">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>治疗药膏</strong><small>x2 · Salve</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>治疗药膏</strong><small>x2 · Salve</small><em>获得 3 点法力并3 生命。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/ward" title="防护">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>防护</strong><small>x1 · Ward</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>防护</strong><small>x1 · Ward</small><em>防止你将受到的接下来 8 点伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/heal" title="治疗">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>治疗</strong><small>x1 · Heal</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>治疗</strong><small>x1 · Heal</small><em>回复 5 点生命。</em></span>
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
<tr id="snapshot-siren-5">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/siren">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Siren__598.png" alt="塞壬" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>塞壬</strong><small>Siren</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>5</em></span><span><b>HP</b><em>20</em></span><span><b>MP</b><em>6</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
<tr id="snapshot-siren-6">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/siren">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Siren__598.png" alt="塞壬" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>塞壬</strong><small>Siren</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>6</em></span><span><b>HP</b><em>30</em></span><span><b>MP</b><em>6</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/ward" title="防护">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>防护</strong><small>x1 · Ward</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>防护</strong><small>x1 · Ward</small><em>防止你将受到的接下来 8 点伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-siren-7">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/siren">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Siren__598.png" alt="塞壬" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>塞壬</strong><small>Siren</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>7</em></span><span><b>HP</b><em>40</em></span><span><b>MP</b><em>6</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/bless" title="祝福">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Bless__316.png" alt="祝福" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>祝福</strong><small>x1 · Bless</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Bless__316.png" alt="祝福" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>祝福</strong><small>x1 · Bless</small><em>回复 15 点生命。&lt;过量治疗&gt; 变为护盾。</em></span>
</span>
</a></span>
</div></td>
</tr>
  </tbody>
</table>
</div>
  <p><a href="/assets/data/monster-level-snapshots-incremental.html#snapshot-siren-4">查看全量怪物等级快照</a></p>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 6 张</span>
  <span>唯一卡牌 4 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>法术</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/ward">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>防护</strong><small>Ward</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>防护</strong>
      <small>Ward · 法术 · 4 阶 · 0 行动点 / 3 法力</small>
      <em>防止你将受到的接下来 8 点伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/heal">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>治疗</strong><small>Heal</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗</strong>
      <small>Heal · 法术 · 2 阶 · 0 行动点 / 1 法力</small>
      <em>回复 5 点生命。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>行动牌</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/beckon">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>召唤</strong><small>Beckon</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>召唤</strong>
      <small>Beckon · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>放逐 2 牌 随机 从 对手手牌。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>魔力</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/salve">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>治疗药膏</strong><small>Salve</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗药膏</strong>
      <small>Salve · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力并3 生命。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/heal">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="eager"></span></span>
  <strong>治疗</strong>
  <span class="dq-profession-card-meta">Heal · 基础牌组 x1 / 关键行为 / 等级变化 / 机制引用 / 等级移出 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗</strong>
      <small>Heal · 法术 · 2 阶 · 0 行动点 / 1 法力</small>
      <em>回复 5 点生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/salve">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="eager"></span></span>
  <strong>治疗药膏</strong>
  <span class="dq-profession-card-meta">Salve · 基础牌组 x2 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗药膏</strong>
      <small>Salve · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力并3 生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/ward">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="eager"></span></span>
  <strong>防护</strong>
  <span class="dq-profession-card-meta">Ward · 基础牌组 x1 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="防护" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>防护</strong>
      <small>Ward · 法术 · 4 阶 · 0 行动点 / 3 法力</small>
      <em>防止你将受到的接下来 8 点伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/beckon">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="eager"></span></span>
  <strong>召唤</strong>
  <span class="dq-profession-card-meta">Beckon · 基础牌组 x2 / 优先起手 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>召唤</strong>
      <small>Beckon · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>放逐 2 牌 随机 从 对手手牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/bless">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Bless__316.png" alt="祝福" loading="eager"></span></span>
  <strong>祝福</strong>
  <span class="dq-profession-card-meta">Bless · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Bless__316.png" alt="祝福" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>祝福</strong>
      <small>Bless · 法术 · 6 阶 · 0 行动点 / 7 法力</small>
      <em>回复 15 点生命。&lt;过量治疗&gt; 变为护盾。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
