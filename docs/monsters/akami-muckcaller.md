---
title: "阿卡米污泥召唤者"
description: "普通怪物，出现在 森林、水域、山脉。等级范围 4-7 级。基础牌组 7 张。主要依靠牌组行动。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 4-7 级</p>
    <h1>阿卡米污泥召唤者</h1>
    <span class="dq-original">原名：Akami Muckcaller</span>
    <p class="dq-lede">普通怪物，出现在 森林、水域、山脉。等级范围 4-7 级。基础牌组 7 张。主要依靠牌组行动。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>有等级变化</span>
      <span>森林</span>
<span>水域</span>
<span>山脉</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/AkamiMuckcaller__925.png" alt="阿卡米污泥召唤者" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>阿卡米污泥召唤者</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Akami Muckcaller</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>AkamiMuckcaller</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>AkamiMuckcaller</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>4-7 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>森林、水域、山脉</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 5、地牢: 0、水域: 10、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>2 · 法术型；吞噬收益：获得法力 +max(1, floor(怪物等级 / 2))，并随机获得一张火焰、冰霜、毒性或电系法术。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>6</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>4</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>0</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>1</em></span>
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
<p><a class="dq-card-chip" href="/cards/shock-totem">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>电击图腾</strong><small>Shock Totem</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电击图腾</strong>
      <small>Shock Totem · 装备 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，电击图腾 获得 1 层充能。然后 电击图腾 每有 1 个充能计数器，造成 2 点电系伤害。</em>
    </span>
  </span>
</a> 会造成逐步增长的伤害；该怪物也有让玩家弃牌、减少行动点的法术。</p>
</div>
</section>



<section class="dq-section-block">
  <h2>等级变化</h2>
  <table class="dq-data-table">
  <thead><tr><th>等级</th><th>变化</th><th>次数</th><th>条件说明</th></tr></thead>
  <tbody>
<tr>
  <td>5+</td>
  <td>将 <a class="dq-card-chip" href="/cards/slow">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>迟缓</strong><small>Slow</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>迟缓</strong>
      <small>Slow · 法术 · 2 阶 · 0 行动点 / 3 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/solidify">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>固化</strong><small>Solidify</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>固化</strong>
      <small>Solidify · 法术 · 6 阶 · 0 行动点 / 8 法力</small>
      <em>对手弃掉 3 张牌并失去 3 行动点。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/frost-charge">
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
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
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
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/shock-totem">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>电击图腾</strong><small>Shock Totem</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电击图腾</strong>
      <small>Shock Totem · 装备 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，电击图腾 获得 1 层充能。然后 电击图腾 每有 1 个充能计数器，造成 2 点电系伤害。</em>
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
  <span>基础牌组 7 张</span>
  <span>唯一卡牌 6 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>法术</td>
  <td>4</td>
  <td><a class="dq-card-chip" href="/cards/slow">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>迟缓</strong><small>Slow</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>迟缓</strong>
      <small>Slow · 法术 · 2 阶 · 0 行动点 / 3 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/shock">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>震击</strong><small>Shock</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>震击</strong>
      <small>Shock · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 4 点电系伤害。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/blizzard">
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
  <td>装备</td>
  <td>1</td>
  <td><a class="dq-card-chip" href="/cards/shock-totem">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>电击图腾</strong><small>Shock Totem</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电击图腾</strong>
      <small>Shock Totem · 装备 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，电击图腾 获得 1 层充能。然后 电击图腾 每有 1 个充能计数器，造成 2 点电系伤害。</em>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/frost-charge">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="eager"></span></span>
  <strong>冰霜充能</strong>
  <span class="dq-profession-card-meta">Frost Charge · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜充能</strong>
      <small>Frost Charge · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/slow">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="eager"></span></span>
  <strong>迟缓</strong>
  <span class="dq-profession-card-meta">Slow · 基础牌组 x1 / 关键行为 / 等级变化 / 机制引用 / 等级移出 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>迟缓</strong>
      <small>Slow · 法术 · 2 阶 · 0 行动点 / 3 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/frost-bolt">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="eager"></span></span>
  <strong>冰霜箭</strong>
  <span class="dq-profession-card-meta">Frost Bolt · 基础牌组 x1 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜箭</strong>
      <small>Frost Bolt · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/shock">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="eager"></span></span>
  <strong>震击</strong>
  <span class="dq-profession-card-meta">Shock · 基础牌组 x1 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>震击</strong>
      <small>Shock · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 4 点电系伤害。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/shock-totem">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="eager"></span></span>
  <strong>电击图腾</strong>
  <span class="dq-profession-card-meta">Shock Totem · 基础牌组 x1 / 起手装备 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电击图腾</strong>
      <small>Shock Totem · 装备 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，电击图腾 获得 1 层充能。然后 电击图腾 每有 1 个充能计数器，造成 2 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/solidify">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="eager"></span></span>
  <strong>固化</strong>
  <span class="dq-profession-card-meta">Solidify · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>固化</strong>
      <small>Solidify · 法术 · 6 阶 · 0 行动点 / 8 法力</small>
      <em>对手弃掉 3 张牌并失去 3 行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/blizzard">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="eager"></span></span>
  <strong>暴风雪</strong>
  <span class="dq-profession-card-meta">Blizzard · 基础牌组 x1 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
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
  <span class="dq-profession-card-meta">Mana Surge · 基础牌组 x2 / 关键行为 / 机制引用 / 机制参数</span>
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
