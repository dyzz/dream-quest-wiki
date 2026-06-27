---
title: "泰坦"
description: "Boss，出现在 山脉、火山。等级范围 7-10 级。基础牌组 8 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 7-10 级</p>
    <h1>泰坦</h1>
    <span class="dq-original">原名：Titan</span>
    <p class="dq-lede">Boss，出现在 山脉、火山。等级范围 7-10 级。基础牌组 8 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>Boss</span>
      <span>机制与等级变化</span>
      <span>山脉</span>
<span>火山</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Titan__872.png" alt="泰坦" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>泰坦</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Titan</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Titan</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Titan</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>Boss</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>7-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>山脉、火山</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 0、地牢: 5、水域: 0、火山: 5、山脉: 10</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>6 · 巨型/Boss 型；吞噬收益：获得最大生命 +max(1, 怪物等级)。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>7</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>5</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>2.5</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>3</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>4</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>机制与等级变化</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p>免疫电系伤害；会降低玩家最大行动点，并带高生命、高伤害和强装备。</p>
<p>会降低玩家最大行动点。</p>
</div>
</section>



<section class="dq-section-block">
  <h2>等级变化</h2>
  <table class="dq-data-table">
  <thead><tr><th>等级</th><th>变化</th><th>次数</th><th>条件说明</th></tr></thead>
  <tbody>
<tr>
  <td>6+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/lightning-strike">
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
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/lightning-strike">
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
  <td>7+</td>
  <td>机制文本变为：The titan's static aura 降低你的行动点数量 by one</td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/celestial-plate">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>天界板甲</strong><small>Celestial Plate</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>天界板甲</strong>
      <small>Celestial Plate · 装备 · 9 阶 · 0 行动点 / 0 法力</small>
      <em>获得&lt;减伤 1&gt;。回复 2 点生命 在每个回合开始时。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/lightning-strike">
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
  <td>加入 <a class="dq-card-chip" href="/cards/slam">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>重摔</strong><small>Slam</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>重摔</strong>
      <small>Slam · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>造成等同于 1/5 的 你的 当前 生命，向上取整 (最多 15 伤害) 的伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/lightning-strike">
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
<tr>
  <td>10+</td>
  <td>机制文本变为：The titan's static aura 降低你的行动点数量 by one</td>
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
<tr id="snapshot-titan-7">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/titan">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Titan__872.png" alt="泰坦" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>泰坦</strong><small>Titan</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>7</em></span><span><b>HP</b><em>100</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">最低等级最终卡组</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/slam" title="重摔">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>重摔</strong><small>x3 · Slam</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>重摔</strong><small>x3 · Slam</small><em>造成等同于 1/5 的 你的 当前 生命，向上取整 (最多 15 伤害) 的伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/storm-blade" title="风暴之刃">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormBlade__419.png" alt="风暴之刃" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴之刃</strong><small>x2 · Storm Blade</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormBlade__419.png" alt="风暴之刃" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>风暴之刃</strong><small>x2 · Storm Blade</small><em>每当你打出 1 个 攻击牌，造成 1 点电系伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/resilience" title="韧性">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>韧性</strong><small>x2 · Resilience</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>韧性</strong><small>x2 · Resilience</small><em>直到你的下个回合，你单次受到超过 3 点的伤害会被降至 3 点。抽 1 张牌。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/armor" title="护甲">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>护甲</strong><small>x1 · Armor</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>护甲</strong><small>x1 · Armor</small><em>每回合防止你受到的前 3 点攻击伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/lightning-strike" title="闪电打击">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>闪电打击</strong><small>x2 · Lightning Strike</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>闪电打击</strong><small>x2 · Lightning Strike</small><em>造成 6 点电系伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/celestial-plate" title="天界板甲">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>天界板甲</strong><small>x1 · Celestial Plate</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>天界板甲</strong><small>x1 · Celestial Plate</small><em>获得&lt;减伤 1&gt;。回复 2 点生命 在每个回合开始时。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack2" title="攻击（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（2）</strong><small>x9 · Attack (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（2）</strong><small>x9 · Attack (2)</small><em>造成 2 点攻击伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack3" title="攻击（3）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（3）</strong><small>x9 · Attack (3)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（3）</strong><small>x9 · Attack (3)</small><em>造成 3 点攻击伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-titan-8">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/titan">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Titan__872.png" alt="泰坦" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>泰坦</strong><small>Titan</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>8</em></span><span><b>HP</b><em>137</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-muted-chip">无新增关键牌</span>
</div></td>
</tr>
<tr id="snapshot-titan-9">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/titan">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Titan__872.png" alt="泰坦" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>泰坦</strong><small>Titan</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>9</em></span><span><b>HP</b><em>175</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/slam" title="重摔">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>重摔</strong><small>x1 · Slam</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>重摔</strong><small>x1 · Slam</small><em>造成等同于 1/5 的 你的 当前 生命，向上取整 (最多 15 伤害) 的伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/lightning-strike" title="闪电打击">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>闪电打击</strong><small>x1 · Lightning Strike</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>闪电打击</strong><small>x1 · Lightning Strike</small><em>造成 6 点电系伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-titan-10">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/titan">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Titan__872.png" alt="泰坦" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>泰坦</strong><small>Titan</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>10</em></span><span><b>HP</b><em>212</em></span><span><b>MP</b><em>0</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/lightning-strike" title="闪电打击">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>闪电打击</strong><small>x2 · Lightning Strike</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>闪电打击</strong><small>x2 · Lightning Strike</small><em>造成 6 点电系伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/zap" title="电弧">
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
  <p><a href="/assets/data/monster-level-snapshots-incremental.html#snapshot-titan-7">查看全量怪物等级快照</a></p>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 8 张</span>
  <span>唯一卡牌 4 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>行动牌</td>
  <td>5</td>
  <td><a class="dq-card-chip" href="/cards/slam">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>重摔</strong><small>Slam</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>重摔</strong>
      <small>Slam · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>造成等同于 1/5 的 你的 当前 生命，向上取整 (最多 15 伤害) 的伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/resilience">
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
</tr>
<tr>
  <td>装备</td>
  <td>3</td>
  <td><a class="dq-card-chip" href="/cards/storm-blade">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormBlade__419.png" alt="风暴之刃" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>风暴之刃</strong><small>Storm Blade</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormBlade__419.png" alt="风暴之刃" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴之刃</strong>
      <small>Storm Blade · 装备 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>每当你打出 1 个 攻击牌，造成 1 点电系伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/armor">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>护甲</strong><small>Armor</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护甲</strong>
      <small>Armor · 装备 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>每回合防止你受到的前 3 点攻击伤害。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/lightning-strike">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="eager"></span></span>
  <strong>闪电打击</strong>
  <span class="dq-profession-card-meta">Lightning Strike · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>闪电打击</strong>
      <small>Lightning Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/armor">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="eager"></span></span>
  <strong>护甲</strong>
  <span class="dq-profession-card-meta">Armor · 基础牌组 x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护甲</strong>
      <small>Armor · 装备 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>每回合防止你受到的前 3 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/resilience">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="eager"></span></span>
  <strong>韧性</strong>
  <span class="dq-profession-card-meta">Resilience · 基础牌组 x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>韧性</strong>
      <small>Resilience · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>直到你的下个回合，你单次受到超过 3 点的伤害会被降至 3 点。抽 1 张牌。</em>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/slam">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="eager"></span></span>
  <strong>重摔</strong>
  <span class="dq-profession-card-meta">Slam · 基础牌组 x3 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>重摔</strong>
      <small>Slam · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>造成等同于 1/5 的 你的 当前 生命，向上取整 (最多 15 伤害) 的伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/storm-blade">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/StormBlade__419.png" alt="风暴之刃" loading="eager"></span></span>
  <strong>风暴之刃</strong>
  <span class="dq-profession-card-meta">Storm Blade · 基础牌组 x2 / 起手装备</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/StormBlade__419.png" alt="风暴之刃" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴之刃</strong>
      <small>Storm Blade · 装备 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>每当你打出 1 个 攻击牌，造成 1 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/celestial-plate">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="eager"></span></span>
  <strong>天界板甲</strong>
  <span class="dq-profession-card-meta">Celestial Plate · 起手装备 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>天界板甲</strong>
      <small>Celestial Plate · 装备 · 9 阶 · 0 行动点 / 0 法力</small>
      <em>获得&lt;减伤 1&gt;。回复 2 点生命 在每个回合开始时。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
