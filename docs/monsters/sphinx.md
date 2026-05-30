---
title: "斯芬克斯"
description: "普通怪物，出现在 地牢、水域、山脉。等级范围 7-10 级。基础牌组 10 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 7-10 级</p>
    <h1>斯芬克斯</h1>
    <span class="dq-original">原名：Sphinx</span>
    <p class="dq-lede">普通怪物，出现在 地牢、水域、山脉。等级范围 7-10 级。基础牌组 10 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>有机制</span>
      <span>地牢</span>
<span>水域</span>
<span>山脉</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Sphinx__709.png" alt="斯芬克斯" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>斯芬克斯</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Sphinx</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Sphinx</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Sphinx</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>7-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>地牢、水域、山脉</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 5、地牢: 5、水域: 0、火山: 0、山脉: 10</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>2 · 法术型；吞噬收益：获得法力 +max(1, floor(怪物等级 / 2))，并随机获得一张火焰、冰霜、毒性或电系法术。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>10</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>7</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>4</em></span>
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
<p>每回合禁止打出玩家手牌中数量最多的牌型；数量相同时会切换被禁止的牌型。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/teach">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Teach__245.png" alt="教学" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>教学</strong><small>Teach</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Teach__245.png" alt="教学" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>教学</strong>
      <small>Teach · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>对手选择其手牌中的 1 张牌，并直到本场战斗结束将其放逐。若放逐的是行动牌，则对手将 灼烧 加入手牌；若放逐的是攻击牌，则加入 掌掴；否则加入 攻击 (等级 1)。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/penance">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>忏悔</strong><small>Penance</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>忏悔</strong>
      <small>Penance · 法术 · 5 阶 · 0 行动点 / 2 法力</small>
      <em>对手受到 2 &lt;穿透&gt; 伤害 在每个回合开始时 直到本场战斗结束。</em>
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
  <td>按等级提高生命：8: 10、10: 10</td>
  <td>1</td>
  <td>满足等级门槛时逐条生效；其他等级不改变生命</td>
</tr>
  </tbody>
</table>
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
  <td>法术</td>
  <td>4</td>
  <td><a class="dq-card-chip" href="/cards/fireball">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火球</strong><small>Fireball</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火球</strong>
      <small>Fireball · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 8 点火焰伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/penance">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>忏悔</strong><small>Penance</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>忏悔</strong>
      <small>Penance · 法术 · 5 阶 · 0 行动点 / 2 法力</small>
      <em>对手受到 2 &lt;穿透&gt; 伤害 在每个回合开始时 直到本场战斗结束。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>行动牌</td>
  <td>4</td>
  <td><a class="dq-card-chip" href="/cards/teach">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Teach__245.png" alt="教学" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>教学</strong><small>Teach</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Teach__245.png" alt="教学" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>教学</strong>
      <small>Teach · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>对手选择其手牌中的 1 张牌，并直到本场战斗结束将其放逐。若放逐的是行动牌，则对手将 灼烧 加入手牌；若放逐的是攻击牌，则加入 掌掴；否则加入 攻击 (等级 1)。</em>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/fireball">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="eager"></span></span>
  <strong>火球</strong>
  <span class="dq-profession-card-meta">Fireball · 基础牌组 x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火球</strong>
      <small>Fireball · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 8 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/teach">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Teach__245.png" alt="教学" loading="eager"></span></span>
  <strong>教学</strong>
  <span class="dq-profession-card-meta">Teach · 基础牌组 x4 / 优先起手</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Teach__245.png" alt="教学" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>教学</strong>
      <small>Teach · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>对手选择其手牌中的 1 张牌，并直到本场战斗结束将其放逐。若放逐的是行动牌，则对手将 灼烧 加入手牌；若放逐的是攻击牌，则加入 掌掴；否则加入 攻击 (等级 1)。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/penance">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="eager"></span></span>
  <strong>忏悔</strong>
  <span class="dq-profession-card-meta">Penance · 基础牌组 x2 / 优先起手</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>忏悔</strong>
      <small>Penance · 法术 · 5 阶 · 0 行动点 / 2 法力</small>
      <em>对手受到 2 &lt;穿透&gt; 伤害 在每个回合开始时 直到本场战斗结束。</em>
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
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
