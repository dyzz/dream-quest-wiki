---
title: "树人"
description: "普通怪物，出现在 森林、水域。等级范围 7-10 级。基础牌组 4 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 7-10 级</p>
    <h1>树人</h1>
    <span class="dq-original">原名：Treant</span>
    <p class="dq-lede">普通怪物，出现在 森林、水域。等级范围 7-10 级。基础牌组 4 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>有机制</span>
      <span>森林</span>
<span>水域</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Treant__320.png" alt="树人" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>树人</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Treant</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Treant</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Treant</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>7-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>森林、水域</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 10、地牢: 0、水域: 5、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>6 · 巨型/Boss 型；吞噬收益：获得最大生命 +max(1, 怪物等级)。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>7</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>5</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>1.5</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>1</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>1</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>有机制</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p>永久韧性；牌组以逐步增长的物理伤害为核心。</p>
<p>抗性/免疫：永久坚韧。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/hardening-sap">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/HardeningSap__853.png" alt="橡木之力" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>橡木之力</strong><small>Might of Oak</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/HardeningSap__853.png" alt="橡木之力" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>橡木之力</strong>
      <small>Might of Oak · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>直到本场战斗结束，你的每个物理伤害来源额外造成 1 点伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/entangle">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Entangle__588.png" alt="荆棘缠绕" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>荆棘缠绕</strong><small>Brambles</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Entangle__588.png" alt="荆棘缠绕" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>荆棘缠绕</strong>
      <small>Brambles · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>造成 10 点攻击伤害。</em>
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
  <td>8+</td>
  <td>按等级提高生命：8: 15、10: 15</td>
  <td>1</td>
  <td>满足等级门槛时逐条生效；其他等级不改变生命</td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 4 张</span>
  <span>唯一卡牌 3 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>行动牌</td>
  <td>4</td>
  <td><a class="dq-card-chip" href="/cards/hardening-sap">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/HardeningSap__853.png" alt="橡木之力" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>橡木之力</strong><small>Might of Oak</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/HardeningSap__853.png" alt="橡木之力" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>橡木之力</strong>
      <small>Might of Oak · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>直到本场战斗结束，你的每个物理伤害来源额外造成 1 点伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/entangle">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Entangle__588.png" alt="荆棘缠绕" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>荆棘缠绕</strong><small>Brambles</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Entangle__588.png" alt="荆棘缠绕" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>荆棘缠绕</strong>
      <small>Brambles · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>造成 10 点攻击伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/stoneskin">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>石肤</strong><small>Stoneskin</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>石肤</strong>
      <small>Stoneskin · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>获得&lt;减伤 2&gt; 直到你的下个回合。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/stoneskin">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="eager"></span></span>
  <strong>石肤</strong>
  <span class="dq-profession-card-meta">Stoneskin · 基础牌组 x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>石肤</strong>
      <small>Stoneskin · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>获得&lt;减伤 2&gt; 直到你的下个回合。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/hardening-sap">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/HardeningSap__853.png" alt="橡木之力" loading="eager"></span></span>
  <strong>橡木之力</strong>
  <span class="dq-profession-card-meta">Might of Oak · 基础牌组 x1 / 优先起手</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/HardeningSap__853.png" alt="橡木之力" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>橡木之力</strong>
      <small>Might of Oak · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>直到本场战斗结束，你的每个物理伤害来源额外造成 1 点伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/entangle">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Entangle__588.png" alt="荆棘缠绕" loading="eager"></span></span>
  <strong>荆棘缠绕</strong>
  <span class="dq-profession-card-meta">Brambles · 基础牌组 x2 / 优先起手</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Entangle__588.png" alt="荆棘缠绕" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>荆棘缠绕</strong>
      <small>Brambles · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>造成 10 点攻击伤害。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
