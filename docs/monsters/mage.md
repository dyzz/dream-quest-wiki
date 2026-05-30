---
title: "法师"
description: "普通怪物，出现在 地牢、水域、火山、森林、墓穴、山脉。等级范围 1-10 级。基础牌组 6 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 1-10 级</p>
    <h1>法师</h1>
    <span class="dq-original">原名：Mage</span>
    <p class="dq-lede">普通怪物，出现在 地牢、水域、火山、森林、墓穴、山脉。等级范围 1-10 级。基础牌组 6 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>有等级变化</span>
      <span>地牢</span>
<span>水域</span>
<span>火山</span>
<span>森林</span>
<span>墓穴</span>
<span>山脉</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/mage__1017.png" alt="法师" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>法师</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Mage</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Mage</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Mage</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>1-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>地牢、水域、火山、森林、墓穴、山脉</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 2、森林: 2、地牢: 2、水域: 2、火山: 2、山脉: 2</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>2 · 法术型；吞噬收益：获得法力 +max(1, floor(怪物等级 / 2))，并随机获得一张火焰、冰霜、毒性或电系法术。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>4</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>1</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>2</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>0.75</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>1</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>1</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>有等级变化</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p>按等级设置额外法力收益；牌组主要依赖高法力法术伤害。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/frost-bolt">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>冰霜箭</strong><small>Frost Bolt</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜箭</strong>
      <small>Frost Bolt · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
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
  <td>2+</td>
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
<tr>
  <td>3+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/blur">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>模糊</strong><small>Blur</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>模糊</strong>
      <small>Blur · 法术 · 3 阶 · 0 行动点 / 2 法力</small>
      <em>你获得物理抗性 直到你的下个回合。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>3+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/staff">
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
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>4+</td>
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
  <td>4+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/blur">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>模糊</strong><small>Blur</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>模糊</strong>
      <small>Blur · 法术 · 3 阶 · 0 行动点 / 2 法力</small>
      <em>你获得物理抗性 直到你的下个回合。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>4+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/fireball">
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
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>4+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/frost-bolt">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>冰霜箭</strong><small>Frost Bolt</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜箭</strong>
      <small>Frost Bolt · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>5+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/blizzard">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>暴风雪</strong><small>Blizzard</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴风雪</strong>
      <small>Blizzard · 法术 · 6 阶 · 0 行动点 / 7 法力</small>
      <em>造成 10 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 2&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>5+</td>
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
  <td>6+</td>
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
<tr>
  <td>6+</td>
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
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/blizzard">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>暴风雪</strong><small>Blizzard</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴风雪</strong>
      <small>Blizzard · 法术 · 6 阶 · 0 行动点 / 7 法力</small>
      <em>造成 10 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 2&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/jasras-tome">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/JasrasTome__235.png" alt="贾斯拉的秘典" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>贾斯拉的秘典</strong><small>Jasra's Tome</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/JasrasTome__235.png" alt="贾斯拉的秘典" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贾斯拉的秘典</strong>
      <small>Jasra's Tome · 装备 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/freeze">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Freeze__318.png" alt="冻结" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>冻结</strong><small>Freeze</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Freeze__318.png" alt="冻结" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冻结</strong>
      <small>Freeze · 法术 · 9 阶 · 0 行动点 / 15 法力</small>
      <em>造成 15 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 3&gt; 直到对手下个回合结束并&lt;寒冷 1&gt; 直到本场战斗结束。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/mana-swell">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSwell__625.png" alt="法力膨胀" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力膨胀</strong><small>Mana Swell</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaSwell__625.png" alt="法力膨胀" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力膨胀</strong>
      <small>Mana Swell · 魔力 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>获得 5 点法力。本回合你下一次施放法术时，额外施放该法术的第二份复制。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/jasras-emerald">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/JasrasEmerald__242.png" alt="贾斯拉的翡翠" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>贾斯拉的翡翠</strong><small>Jasra's Emerald</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/JasrasEmerald__242.png" alt="贾斯拉的翡翠" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贾斯拉的翡翠</strong>
      <small>Jasra's Emerald · 装备 · 10 阶 · 0 行动点 / 0 法力</small>
      <em>当你打出一张法术牌，抽 1 张牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/conflagration">
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
  </tbody>
</table>
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
</a>、<a class="dq-card-chip" href="/cards/frost-bolt">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>冰霜箭</strong><small>Frost Bolt</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜箭</strong>
      <small>Frost Bolt · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>魔力</td>
  <td>4</td>
  <td><a class="dq-card-chip" href="/cards/flame-charge">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameCharge__686.png" alt="火焰充能" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>火焰充能</strong><small>Flame Charge</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameCharge__686.png" alt="火焰充能" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰充能</strong>
      <small>Flame Charge · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。造成 3 点火焰伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/frost-charge">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>冰霜充能</strong><small>Frost Charge</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜充能</strong>
      <small>Frost Charge · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/frost-charge">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="eager"></span></span>
  <strong>冰霜充能</strong>
  <span class="dq-profession-card-meta">Frost Charge · 基础牌组 x2 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜充能</strong>
      <small>Frost Charge · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/flame-charge">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameCharge__686.png" alt="火焰充能" loading="eager"></span></span>
  <strong>火焰充能</strong>
  <span class="dq-profession-card-meta">Flame Charge · 基础牌组 x2 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameCharge__686.png" alt="火焰充能" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰充能</strong>
      <small>Flame Charge · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。造成 3 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/frost-bolt">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="eager"></span></span>
  <strong>冰霜箭</strong>
  <span class="dq-profession-card-meta">Frost Bolt · 基础牌组 x1 / 优先起手 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜箭</strong>
      <small>Frost Bolt · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/blur">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="eager"></span></span>
  <strong>模糊</strong>
  <span class="dq-profession-card-meta">Blur · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>模糊</strong>
      <small>Blur · 法术 · 3 阶 · 0 行动点 / 2 法力</small>
      <em>你获得物理抗性 直到你的下个回合。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/fireball">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="eager"></span></span>
  <strong>火球</strong>
  <span class="dq-profession-card-meta">Fireball · 基础牌组 x1 / 关键行为 / 等级变化 / 机制引用 / 等级移出 / 等级加入 / 机制参数</span>
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
  <span class="dq-profession-card-meta">Staff · 起手装备 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
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
  <span class="dq-profession-card-meta">Fire Shape · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰形态</strong>
      <small>Fire Shape · 法术 · 5 阶 · 0 行动点 / 2 法力</small>
      <em>直到本场战斗结束，每当对手打出攻击牌时，对手受到 2 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/blizzard">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="eager"></span></span>
  <strong>暴风雪</strong>
  <span class="dq-profession-card-meta">Blizzard · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴风雪</strong>
      <small>Blizzard · 法术 · 6 阶 · 0 行动点 / 7 法力</small>
      <em>造成 10 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 2&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/mana-surge">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <strong>法力激涌</strong>
  <span class="dq-profession-card-meta">Mana Surge · 等级变化 / 机制引用 / 等级加入</span>
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
  <span class="dq-profession-card-meta">Meteor · 等级变化 / 机制引用 / 等级加入</span>
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
  <span class="dq-profession-card-meta">Inspiration · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵感</strong>
      <small>Inspiration · 魔力 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>获得 5 点法力。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/jasras-tome">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/JasrasTome__235.png" alt="贾斯拉的秘典" loading="eager"></span></span>
  <strong>贾斯拉的秘典</strong>
  <span class="dq-profession-card-meta">Jasra's Tome · 起手装备 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/JasrasTome__235.png" alt="贾斯拉的秘典" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贾斯拉的秘典</strong>
      <small>Jasra's Tome · 装备 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/mana-swell">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSwell__625.png" alt="法力膨胀" loading="eager"></span></span>
  <strong>法力膨胀</strong>
  <span class="dq-profession-card-meta">Mana Swell · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaSwell__625.png" alt="法力膨胀" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力膨胀</strong>
      <small>Mana Swell · 魔力 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>获得 5 点法力。本回合你下一次施放法术时，额外施放该法术的第二份复制。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/freeze">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Freeze__318.png" alt="冻结" loading="eager"></span></span>
  <strong>冻结</strong>
  <span class="dq-profession-card-meta">Freeze · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Freeze__318.png" alt="冻结" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冻结</strong>
      <small>Freeze · 法术 · 9 阶 · 0 行动点 / 15 法力</small>
      <em>造成 15 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 3&gt; 直到对手下个回合结束并&lt;寒冷 1&gt; 直到本场战斗结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/conflagration">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="eager"></span></span>
  <strong>大火</strong>
  <span class="dq-profession-card-meta">Conflagration · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>大火</strong>
      <small>Conflagration · 法术 · 9 阶 · 0 行动点 / 20 法力</small>
      <em>造成 30 点火焰伤害。在你的下个回合开始时，再次造成 30 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/jasras-emerald">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/JasrasEmerald__242.png" alt="贾斯拉的翡翠" loading="eager"></span></span>
  <strong>贾斯拉的翡翠</strong>
  <span class="dq-profession-card-meta">Jasra's Emerald · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/JasrasEmerald__242.png" alt="贾斯拉的翡翠" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贾斯拉的翡翠</strong>
      <small>Jasra's Emerald · 装备 · 10 阶 · 0 行动点 / 0 法力</small>
      <em>当你打出一张法术牌，抽 1 张牌。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
