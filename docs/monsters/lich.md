---
title: "巫妖"
description: "Boss，出现在 墓穴。等级范围 7-10 级。基础牌组 11 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 7-10 级</p>
    <h1>巫妖</h1>
    <span class="dq-original">原名：Lich</span>
    <p class="dq-lede">Boss，出现在 墓穴。等级范围 7-10 级。基础牌组 11 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>Boss</span>
      <span>机制与等级变化</span>
      <span>墓穴</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Lich__1030.png" alt="巫妖" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>巫妖</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Lich</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Lich</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Lich</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>Boss</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>7-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>墓穴</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 10、森林: 0、地牢: 3、水域: 0、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>3 · 亡灵型；吞噬收益：75% 受到等同怪物等级的伤害；25% 获得 +1 Card，也就是每回合抽牌/手牌 +1。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>5</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>7</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>0</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>2</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>3</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>4</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>机制与等级变化</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p><a class="dq-card-chip" href="/cards/phylactery">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>命匣</strong><small>Phylactery</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>命匣</strong>
      <small>Phylactery · 装备 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>当 命匣 在场时，如果巫妖将要死亡，改为将其生命设为 1。</em>
    </span>
  </span>
</a> 在场时，Lich 将要死亡会改为生命变为 1；<a class="dq-card-chip" href="/cards/dark-mending">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>黑暗修补</strong><small>Dark Mending</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>黑暗修补</strong>
      <small>Dark Mending · 法术 · 8 阶 · 0 行动点 / 5 法力</small>
      <em>完全回复生命，然后 造成等同于以此回复生命值一半的&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a> 按 Lich 已损失生命造成伤害。</p>
<p>抗性/免疫：免疫毒性伤害。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/fireball">
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
  <td>将 <a class="dq-card-chip" href="/cards/mana2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力（2）</strong><small>Mana (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（2）</strong>
      <small>Mana (2) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 4 点法力。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/mana-surge">
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
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/soulfire">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灵魂火</strong><small>Soulfire</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵魂火</strong>
      <small>Soulfire · 法术 · 7 阶 · 0 行动点 / 5 法力</small>
      <em>对手受到 10 点&lt;穿透&gt;伤害。在你的回合开始时，如果 灵魂火 在你的弃牌堆中，将其返回你的手牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>将 <a class="dq-card-chip" href="/cards/mana2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力（2）</strong><small>Mana (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（2）</strong>
      <small>Mana (2) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 4 点法力。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/shrink">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shrink__243.png" alt="缩小" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>缩小</strong><small>Shrink</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Shrink__243.png" alt="缩小" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>缩小</strong>
      <small>Shrink · 法术 · 9 阶 · 0 行动点 / 12 法力</small>
      <em>对手失去一半生命，向下取整，最多失去 60 点。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>将 <a class="dq-card-chip" href="/cards/wisdom">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>智慧</strong><small>Wisdom</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>智慧</strong>
      <small>Wisdom · 魔力 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。抽 1 张牌。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/mana-surge">
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
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>将 <a class="dq-card-chip" href="/cards/fireball">
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
  <td>9+</td>
  <td>将 <a class="dq-card-chip" href="/cards/fireball">
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
</a> 替换为 <a class="dq-card-chip" href="/cards/fire-shape">
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
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/soulfire">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灵魂火</strong><small>Soulfire</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵魂火</strong>
      <small>Soulfire · 法术 · 7 阶 · 0 行动点 / 5 法力</small>
      <em>对手受到 10 点&lt;穿透&gt;伤害。在你的回合开始时，如果 灵魂火 在你的弃牌堆中，将其返回你的手牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>将 <a class="dq-card-chip" href="/cards/fireball">
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
</a> 替换为 <a class="dq-card-chip" href="/cards/conflagration">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>大火</strong><small>Conflagration</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>大火</strong>
      <small>Conflagration · 法术 · 9 阶 · 0 行动点 / 20 法力</small>
      <em>造成 30 点火焰伤害。在你的下个回合开始时，再次造成 30 点火焰伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/inspiration">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灵感</strong><small>Inspiration</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵感</strong>
      <small>Inspiration · 魔力 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>获得 5 点法力。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/mana-surge">
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
<tr id="snapshot-lich-7">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/lich">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Lich__1030.png" alt="巫妖" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>巫妖</strong><small>Lich</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>7</em></span><span><b>HP</b><em>80</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">最低等级最终卡组</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/phylactery" title="命匣">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>命匣</strong><small>x1 · Phylactery</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>命匣</strong><small>x1 · Phylactery</small><em>当 命匣 在场时，如果巫妖将要死亡，改为将其生命设为 1。</em></span>
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
<a class="dq-card-chip dq-counted-card-chip" href="/cards/shrink" title="缩小">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shrink__243.png" alt="缩小" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>缩小</strong><small>x1 · Shrink</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shrink__243.png" alt="缩小" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>缩小</strong><small>x1 · Shrink</small><em>对手失去一半生命，向下取整，最多失去 60 点。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/fireball" title="火球">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火球</strong><small>x3 · Fireball</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>火球</strong><small>x3 · Fireball</small><em>造成 8 点火焰伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/wisdom" title="智慧">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>智慧</strong><small>x2 · Wisdom</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>智慧</strong><small>x2 · Wisdom</small><em>获得 3 点法力。抽 1 张牌。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/staff" title="法杖">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Staff__550.png" alt="法杖" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法杖</strong><small>x1 · Staff</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Staff__550.png" alt="法杖" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>法杖</strong><small>x1 · Staff</small><em>每当你获得法力时，每获得 2 点法力就造成 1 点攻击伤害，向下取整。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/dark-mending" title="黑暗修补">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>黑暗修补</strong><small>x1 · Dark Mending</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>黑暗修补</strong><small>x1 · Dark Mending</small><em>完全回复生命，然后 造成等同于以此回复生命值一半的&lt;穿透&gt;伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/soulfire" title="灵魂火">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灵魂火</strong><small>x1 · Soulfire</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>灵魂火</strong><small>x1 · Soulfire</small><em>对手受到 10 点&lt;穿透&gt;伤害。在你的回合开始时，如果 灵魂火 在你的弃牌堆中，将其返回你的手牌。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack2" title="攻击（2）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（2）</strong><small>x7 · Attack (2)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（2）</strong><small>x7 · Attack (2)</small><em>造成 2 点攻击伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/attack3" title="攻击（3）">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>攻击（3）</strong><small>x6 · Attack (3)</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>攻击（3）</strong><small>x6 · Attack (3)</small><em>造成 3 点攻击伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-lich-8">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/lich">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Lich__1030.png" alt="巫妖" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>巫妖</strong><small>Lich</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>8</em></span><span><b>HP</b><em>110</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/mana-surge" title="法力激涌">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力激涌</strong><small>x1 · Mana Surge</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>法力激涌</strong><small>x1 · Mana Surge</small><em>获得 10 点法力。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/meteor" title="流星">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>流星</strong><small>x1 · Meteor</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>流星</strong><small>x1 · Meteor</small><em>造成 20 点火焰伤害。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-lich-9">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/lich">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Lich__1030.png" alt="巫妖" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>巫妖</strong><small>Lich</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>9</em></span><span><b>HP</b><em>140</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/fire-shape" title="火焰形态">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰形态</strong><small>x1 · Fire Shape</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>火焰形态</strong><small>x1 · Fire Shape</small><em>直到本场战斗结束，每当对手打出攻击牌时，对手受到 2 点火焰伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/soulfire" title="灵魂火">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灵魂火</strong><small>x1 · Soulfire</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>灵魂火</strong><small>x1 · Soulfire</small><em>对手受到 10 点&lt;穿透&gt;伤害。在你的回合开始时，如果 灵魂火 在你的弃牌堆中，将其返回你的手牌。</em></span>
</span>
</a></span>
</div></td>
</tr>
<tr id="snapshot-lich-10">
  <td class="dq-snapshot-monster-cell"><a class="dq-snapshot-monster" href="/monsters/lich">
  <span class="dq-snapshot-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Lich__1030.png" alt="巫妖" loading="lazy"></span>
  <span class="dq-snapshot-monster-copy"><strong>巫妖</strong><small>Lich</small><span class="dq-snapshot-stat-row"><span><b>等级</b><em>10</em></span><span><b>HP</b><em>170</em></span><span><b>MP</b><em>5</em></span><span><b>行动</b><em>1</em></span><span><b>手牌</b><em>2</em></span></span></span>
</a></td>
  <td class="dq-long-cell dq-snapshot-deck-cell"><div class="dq-snapshot-key-card">
  <span class="dq-snapshot-key-label">本等级新增牌</span>
  <span class="dq-card-chip-row dq-snapshot-card-row dq-snapshot-key-cards"><a class="dq-card-chip dq-counted-card-chip" href="/cards/mana-surge" title="法力激涌">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力激涌</strong><small>x1 · Mana Surge</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>法力激涌</strong><small>x1 · Mana Surge</small><em>获得 10 点法力。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/conflagration" title="大火">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>大火</strong><small>x1 · Conflagration</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>大火</strong><small>x1 · Conflagration</small><em>造成 30 点火焰伤害。在你的下个回合开始时，再次造成 30 点火焰伤害。</em></span>
</span>
</a>
<a class="dq-card-chip dq-counted-card-chip" href="/cards/inspiration" title="灵感">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灵感</strong><small>x1 · Inspiration</small></span>
  <span class="dq-snapshot-card-preview" aria-hidden="true">
  <span class="dq-snapshot-card-preview-art"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="eager"></span></span>
  <span class="dq-snapshot-card-preview-copy"><strong>灵感</strong><small>x1 · Inspiration</small><em>获得 5 点法力。从牌库抽取下一张法术牌。</em></span>
</span>
</a></span>
</div></td>
</tr>
  </tbody>
</table>
</div>
  <p><a href="/assets/data/monster-level-snapshots-incremental.html#snapshot-lich-7">查看全量怪物等级快照</a></p>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 11 张</span>
  <span>唯一卡牌 6 张</span>
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
</a>、<a class="dq-card-chip" href="/cards/dark-mending">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>黑暗修补</strong><small>Dark Mending</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>黑暗修补</strong>
      <small>Dark Mending · 法术 · 8 阶 · 0 行动点 / 5 法力</small>
      <em>完全回复生命，然后 造成等同于以此回复生命值一半的&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>装备</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/phylactery">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>命匣</strong><small>Phylactery</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>命匣</strong>
      <small>Phylactery · 装备 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>当 命匣 在场时，如果巫妖将要死亡，改为将其生命设为 1。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/staff">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Staff__550.png" alt="法杖" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法杖</strong><small>Staff</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Staff__550.png" alt="法杖" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法杖</strong>
      <small>Staff · 装备 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>每当你获得法力时，每获得 2 点法力就造成 1 点攻击伤害，向下取整。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>魔力</td>
  <td>5</td>
  <td><a class="dq-card-chip" href="/cards/mana2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力（2）</strong><small>Mana (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（2）</strong>
      <small>Mana (2) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 4 点法力。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/wisdom">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>智慧</strong><small>Wisdom</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>智慧</strong>
      <small>Wisdom · 魔力 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。抽 1 张牌。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/mana2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="eager"></span></span>
  <strong>法力（2）</strong>
  <span class="dq-profession-card-meta">Mana (2) · 基础牌组 x3 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（2）</strong>
      <small>Mana (2) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 4 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/phylactery">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="eager"></span></span>
  <strong>命匣</strong>
  <span class="dq-profession-card-meta">Phylactery · 基础牌组 x1 / 起手装备</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>命匣</strong>
      <small>Phylactery · 装备 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>当 命匣 在场时，如果巫妖将要死亡，改为将其生命设为 1。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/wisdom">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="eager"></span></span>
  <strong>智慧</strong>
  <span class="dq-profession-card-meta">Wisdom · 基础牌组 x2 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>智慧</strong>
      <small>Wisdom · 魔力 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/fireball">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="eager"></span></span>
  <strong>火球</strong>
  <span class="dq-profession-card-meta">Fireball · 基础牌组 x3 / 优先起手 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火球</strong>
      <small>Fireball · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 8 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/staff">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Staff__550.png" alt="法杖" loading="eager"></span></span>
  <strong>法杖</strong>
  <span class="dq-profession-card-meta">Staff · 基础牌组 x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Staff__550.png" alt="法杖" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法杖</strong>
      <small>Staff · 装备 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>每当你获得法力时，每获得 2 点法力就造成 1 点攻击伤害，向下取整。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/fire-shape">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="eager"></span></span>
  <strong>火焰形态</strong>
  <span class="dq-profession-card-meta">Fire Shape · 等级加入</span>
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
  <span class="dq-profession-card-meta">Mana Surge · 等级加入</span>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/inspiration">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="eager"></span></span>
  <strong>灵感</strong>
  <span class="dq-profession-card-meta">Inspiration · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵感</strong>
      <small>Inspiration · 魔力 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>获得 5 点法力。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/soulfire">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="eager"></span></span>
  <strong>灵魂火</strong>
  <span class="dq-profession-card-meta">Soulfire · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵魂火</strong>
      <small>Soulfire · 法术 · 7 阶 · 0 行动点 / 5 法力</small>
      <em>对手受到 10 点&lt;穿透&gt;伤害。在你的回合开始时，如果 灵魂火 在你的弃牌堆中，将其返回你的手牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dark-mending">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="eager"></span></span>
  <strong>黑暗修补</strong>
  <span class="dq-profession-card-meta">Dark Mending · 基础牌组 x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>黑暗修补</strong>
      <small>Dark Mending · 法术 · 8 阶 · 0 行动点 / 5 法力</small>
      <em>完全回复生命，然后 造成等同于以此回复生命值一半的&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/conflagration">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="eager"></span></span>
  <strong>大火</strong>
  <span class="dq-profession-card-meta">Conflagration · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>大火</strong>
      <small>Conflagration · 法术 · 9 阶 · 0 行动点 / 20 法力</small>
      <em>造成 30 点火焰伤害。在你的下个回合开始时，再次造成 30 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/shrink">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shrink__243.png" alt="缩小" loading="eager"></span></span>
  <strong>缩小</strong>
  <span class="dq-profession-card-meta">Shrink · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Shrink__243.png" alt="缩小" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>缩小</strong>
      <small>Shrink · 法术 · 9 阶 · 0 行动点 / 12 法力</small>
      <em>对手失去一半生命，向下取整，最多失去 60 点。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
