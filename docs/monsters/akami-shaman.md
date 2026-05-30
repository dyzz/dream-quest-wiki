---
title: "阿卡米萨满"
description: "普通怪物，出现在 森林、水域、山脉。等级范围 1-4 级。基础牌组 9 张。主要依靠牌组行动。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 1-4 级</p>
    <h1>阿卡米萨满</h1>
    <span class="dq-original">原名：Akami Shaman</span>
    <p class="dq-lede">普通怪物，出现在 森林、水域、山脉。等级范围 1-4 级。基础牌组 9 张。主要依靠牌组行动。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>普通怪物</span>
      <span>有等级变化</span>
      <span>森林</span>
<span>水域</span>
<span>山脉</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/AkamiShaman__639.png" alt="阿卡米萨满" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>阿卡米萨满</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Akami Shaman</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>AkamiShaman</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>AkamiShaman</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>1-4 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>森林、水域、山脉</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 5、地牢: 0、水域: 10、火山: 0、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>2 · 法术型；吞噬收益：获得法力 +max(1, floor(怪物等级 / 2))，并随机获得一张火焰、冰霜、毒性或电系法术。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>1</em></span>
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
<p><a class="dq-card-chip" href="/cards/mana-totem">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaTotem__403.png" alt="法力图腾" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力图腾</strong><small>Mana Totem</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaTotem__403.png" alt="法力图腾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力图腾</strong>
      <small>Mana Totem · 装备 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，法力图腾 获得 1 层充能。然后 法力图腾 每有 1 层充能，你获得 1 点法力。</em>
    </span>
  </span>
</a> 每回合累积充能并提供额外法力。</p>
</div>
</section>



<section class="dq-section-block">
  <h2>等级变化</h2>
  <table class="dq-data-table">
  <thead><tr><th>等级</th><th>变化</th><th>次数</th><th>条件说明</th></tr></thead>
  <tbody>
<tr>
  <td>2+</td>
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
</a> 替换为 <a class="dq-card-chip" href="/cards/salve">
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
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>3+</td>
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
</a> 替换为 <a class="dq-card-chip" href="/cards/flame-charge">
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
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>3+</td>
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
  <td>4+</td>
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
</a> 替换为 <a class="dq-card-chip" href="/cards/flame-charge">
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
  <span>基础牌组 9 张</span>
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
</a>、<a class="dq-card-chip" href="/cards/slow">
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
</a></td>
</tr>
<tr>
  <td>装备</td>
  <td>1</td>
  <td><a class="dq-card-chip" href="/cards/mana-totem">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaTotem__403.png" alt="法力图腾" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力图腾</strong><small>Mana Totem</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaTotem__403.png" alt="法力图腾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力图腾</strong>
      <small>Mana Totem · 装备 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，法力图腾 获得 1 层充能。然后 法力图腾 每有 1 层充能，你获得 1 点法力。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>魔力</td>
  <td>4</td>
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
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/mana2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="eager"></span></span>
  <strong>法力（2）</strong>
  <span class="dq-profession-card-meta">Mana (2) · 基础牌组 x4 / 关键行为 / 等级变化 / 机制引用 / 等级移出 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（2）</strong>
      <small>Mana (2) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 4 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/salve">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="eager"></span></span>
  <strong>治疗药膏</strong>
  <span class="dq-profession-card-meta">Salve · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗药膏</strong>
      <small>Salve · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力并3 生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/mana-totem">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaTotem__403.png" alt="法力图腾" loading="eager"></span></span>
  <strong>法力图腾</strong>
  <span class="dq-profession-card-meta">Mana Totem · 基础牌组 x1 / 起手装备 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaTotem__403.png" alt="法力图腾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力图腾</strong>
      <small>Mana Totem · 装备 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，法力图腾 获得 1 层充能。然后 法力图腾 每有 1 层充能，你获得 1 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/flame-charge">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FlameCharge__686.png" alt="火焰充能" loading="eager"></span></span>
  <strong>火焰充能</strong>
  <span class="dq-profession-card-meta">Flame Charge · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FlameCharge__686.png" alt="火焰充能" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火焰充能</strong>
      <small>Flame Charge · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。造成 3 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/slow">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="eager"></span></span>
  <strong>迟缓</strong>
  <span class="dq-profession-card-meta">Slow · 基础牌组 x2 / 关键行为 / 等级变化 / 机制引用 / 等级移出 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>迟缓</strong>
      <small>Slow · 法术 · 2 阶 · 0 行动点 / 3 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/fireball">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="eager"></span></span>
  <strong>火球</strong>
  <span class="dq-profession-card-meta">Fireball · 基础牌组 x2 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>火球</strong>
      <small>Fireball · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 8 点火焰伤害。</em>
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
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
