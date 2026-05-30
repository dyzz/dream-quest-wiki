---
title: "火元素"
description: "普通怪物，出现在 火山、地牢。等级范围 5-10 级。基础牌组 8 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 5-10 级</p>
    <h1>火元素</h1>
    <span class="dq-original">原名：Fire Elemental</span>
    <p class="dq-lede">普通怪物，出现在 火山、地牢。等级范围 5-10 级。基础牌组 8 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>机制与等级变化</span>
      <span>火山</span>
<span>地牢</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/FireElemental__932.png" alt="火元素" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>火元素</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Fire Elemental</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>FireElemental</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>FireElemental</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>5-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>火山、地牢</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 0、地牢: 0、水域: 0、火山: 10、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>8 · 火焰型；吞噬收益：获得法力 +max(1, floor(怪物等级 / 2))，并获得一张火焰法术。</em></span>
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
<p>免疫火焰伤害，弱冰霜伤害；高等级会在回合机制里持续施加燃烧。</p>
<p>回合机制会对玩家施加燃烧。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/flame-strike">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰打击</strong><small>Flame Strike</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰打击</strong>
      <small>Flame Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点火焰伤害。</em>
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
  <td>机制文本变为：Apply a burn 2 每回合</td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>将 <a class="dq-card-chip" href="/cards/flame-slash1">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash1__745.png" alt="火焰斩（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰斩（1）</strong><small>Flame Slash (1)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash1__745.png" alt="火焰斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（1）</strong>
      <small>Flame Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点火焰伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/flame-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰斩（2）</strong><small>Flame Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（2）</strong>
      <small>Flame Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点火焰伤害。</em>
    </span>
  </span>
</a> <span class="dq-repeat-count">重复 6 次</span></td>
  <td>6</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>将 <a class="dq-card-chip" href="/cards/flame-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰斩（2）</strong><small>Flame Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（2）</strong>
      <small>Flame Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点火焰伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/flame-strike">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰打击</strong><small>Flame Strike</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰打击</strong>
      <small>Flame Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点火焰伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>将 <a class="dq-card-chip" href="/cards/flame-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰斩（2）</strong><small>Flame Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（2）</strong>
      <small>Flame Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点火焰伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/flame-slash3">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash3__965.png" alt="火焰斩（3）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰斩（3）</strong><small>Flame Slash (3)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash3__965.png" alt="火焰斩（3）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（3）</strong>
      <small>Flame Slash (3) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点火焰伤害。</em>
    </span>
  </span>
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>将 <a class="dq-card-chip" href="/cards/flame-slash2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰斩（2）</strong><small>Flame Slash (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（2）</strong>
      <small>Flame Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点火焰伤害。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/meteor">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>流星</strong><small>Meteor</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>流星</strong>
      <small>Meteor · 法术 · 6 阶 · 0 行动点 / 10 法力</small>
      <em>造成 20 点火焰伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/meteor">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>流星</strong><small>Meteor</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>流星</strong>
      <small>Meteor · 法术 · 6 阶 · 0 行动点 / 10 法力</small>
      <em>造成 20 点火焰伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>机制文本变为：Apply a burn 1 每回合</td>
  <td>1</td>
  <td></td>
</tr>
  </tbody>
</table>
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
  <td>攻击</td>
  <td>4</td>
  <td><a class="dq-card-chip" href="/cards/flame-strike">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰打击</strong><small>Flame Strike</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰打击</strong>
      <small>Flame Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点火焰伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/flame-slash1">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash1__745.png" alt="火焰斩（1）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰斩（1）</strong><small>Flame Slash (1)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash1__745.png" alt="火焰斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（1）</strong>
      <small>Flame Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点火焰伤害。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>法术</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/fire-shape">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰形态</strong><small>Fire Shape</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰形态</strong>
      <small>Fire Shape · 法术 · 5 阶 · 0 行动点 / 2 法力</small>
      <em>直到本场战斗结束，每当对手打出攻击牌时，对手受到 2 点火焰伤害。</em>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/flame-slash1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash1__745.png" alt="火焰斩（1）" loading="eager"></span></span>
  <strong>火焰斩（1）</strong>
  <span class="dq-profession-card-meta">Flame Slash (1) · 基础牌组 x3 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash1__745.png" alt="火焰斩（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（1）</strong>
      <small>Flame Slash (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/flame-slash2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="eager"></span></span>
  <strong>火焰斩（2）</strong>
  <span class="dq-profession-card-meta">Flame Slash (2) · 等级加入 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（2）</strong>
      <small>Flame Slash (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/flame-strike">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="eager"></span></span>
  <strong>火焰打击</strong>
  <span class="dq-profession-card-meta">Flame Strike · 基础牌组 x1 / 优先起手 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰打击</strong>
      <small>Flame Strike · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/flame-slash3">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameSlash3__965.png" alt="火焰斩（3）" loading="eager"></span></span>
  <strong>火焰斩（3）</strong>
  <span class="dq-profession-card-meta">Flame Slash (3) · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameSlash3__965.png" alt="火焰斩（3）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰斩（3）</strong>
      <small>Flame Slash (3) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/fire-shape">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="eager"></span></span>
  <strong>火焰形态</strong>
  <span class="dq-profession-card-meta">Fire Shape · 基础牌组 x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰形态</strong>
      <small>Fire Shape · 法术 · 5 阶 · 0 行动点 / 2 法力</small>
      <em>直到本场战斗结束，每当对手打出攻击牌时，对手受到 2 点火焰伤害。</em>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/meteor">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="eager"></span></span>
  <strong>流星</strong>
  <span class="dq-profession-card-meta">Meteor · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>流星</strong>
      <small>Meteor · 法术 · 6 阶 · 0 行动点 / 10 法力</small>
      <em>造成 20 点火焰伤害。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
