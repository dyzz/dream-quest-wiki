---
title: "牧师"
description: "普通怪物，出现在 地牢、水域、火山、森林、墓穴、山脉。等级范围 1-10 级。基础牌组 4 张。主要依靠牌组行动。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 1-10 级</p>
    <h1>牧师</h1>
    <span class="dq-original">原名：Priest</span>
    <p class="dq-lede">普通怪物，出现在 地牢、水域、火山、森林、墓穴、山脉。等级范围 1-10 级。基础牌组 4 张。主要依靠牌组行动。等级提升会改动牌组或属性。</p>
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
    <img src="/assets/extracted/textures/by_container/resources/Priest__471.png" alt="牧师" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>牧师</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Priest</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Priest</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Priest</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>普通怪物</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>1-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>地牢、水域、火山、森林、墓穴、山脉</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 2、森林: 2、地牢: 2、水域: 2、火山: 2、山脉: 2</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>5 · 净化型；吞噬收益：打开 Delete2 删除牌奖励，可从牌组中删除 2 张牌。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>3</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>1</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>2</em></span>
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
<p>核心牌组包含大量治疗和护盾；祈祷牌会形成延迟伤害。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/prayer-of-violence">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>暴力祈祷</strong><small>Prayer of Violence</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴力祈祷</strong>
      <small>Prayer of Violence · 祈祷 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/prayer-of-wrath">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>怒火祈祷</strong><small>Prayer of Wrath</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>怒火祈祷</strong>
      <small>Prayer of Wrath · 祈祷 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成火焰伤害：1 层 5 点，2 层 10 点，3 层 15 点，4 层 20 点，5 层 25 点。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/curse-of-doom-player">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>末日诅咒（玩家）</strong><small>Curse of Doom</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>末日诅咒（玩家）</strong>
      <small>Curse of Doom · 祈祷 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>5 回合后，造成 50 点&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/ward">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>护盾守卫</strong><small>Ward</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护盾守卫</strong>
      <small>Ward · 法术 · 4 阶 · 0 行动点 / 3 法力</small>
      <em>防止你将受到的接下来 8 点伤害。</em>
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
  <td>2+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/prayer-of-life">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfLife__733.png" alt="生命祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>生命祈祷</strong><small>Prayer of Life</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfLife__733.png" alt="生命祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>生命祈祷</strong>
      <small>Prayer of Life · 祈祷 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量回复生命：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>3+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/haste">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>急速</strong><small>Haste</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>急速</strong>
      <small>Haste · 法术 · 4 阶 · 0 行动点 / 4 法力</small>
      <em>抽 2 张牌。此外，你有 10% 概率获得一个额外回合。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>3+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/piety">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Piety__928.png" alt="虔诚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>虔诚</strong><small>Piety</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Piety__928.png" alt="虔诚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>虔诚</strong>
      <small>Piety · 魔力 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。移除一张计数器 从 每个 的 你的 祈祷 牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>3+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/pendant">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Pendant__344.png" alt="吊坠" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>吊坠</strong><small>Pendant</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Pendant__344.png" alt="吊坠" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吊坠</strong>
      <small>Pendant · 装备 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 2 点法力 在每个回合开始时。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>4+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/ward">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>护盾守卫</strong><small>Ward</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护盾守卫</strong>
      <small>Ward · 法术 · 4 阶 · 0 行动点 / 3 法力</small>
      <em>防止你将受到的接下来 8 点伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>4+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/penance">
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
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>5+</td>
  <td>将 <a class="dq-card-chip" href="/cards/prayer-of-violence">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>暴力祈祷</strong><small>Prayer of Violence</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴力祈祷</strong>
      <small>Prayer of Violence · 祈祷 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/prayer-of-wrath">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>怒火祈祷</strong><small>Prayer of Wrath</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>怒火祈祷</strong>
      <small>Prayer of Wrath · 祈祷 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成火焰伤害：1 层 5 点，2 层 10 点，3 层 15 点，4 层 20 点，5 层 25 点。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>5+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/prayer-of-wrath">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>怒火祈祷</strong><small>Prayer of Wrath</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>怒火祈祷</strong>
      <small>Prayer of Wrath · 祈祷 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成火焰伤害：1 层 5 点，2 层 10 点，3 层 15 点，4 层 20 点，5 层 25 点。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>5+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/ward">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>护盾守卫</strong><small>Ward</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护盾守卫</strong>
      <small>Ward · 法术 · 4 阶 · 0 行动点 / 3 法力</small>
      <em>防止你将受到的接下来 8 点伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/piety">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Piety__928.png" alt="虔诚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>虔诚</strong><small>Piety</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Piety__928.png" alt="虔诚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>虔诚</strong>
      <small>Piety · 魔力 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。移除一张计数器 从 每个 的 你的 祈祷 牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/haste">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>急速</strong><small>Haste</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>急速</strong>
      <small>Haste · 法术 · 4 阶 · 0 行动点 / 4 法力</small>
      <em>抽 2 张牌。此外，你有 10% 概率获得一个额外回合。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
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
  <td>加入 <a class="dq-card-chip" href="/cards/curse-of-weakness">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfWeakness__795.png" alt="虚弱诅咒" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>虚弱诅咒</strong><small>Curse of Weakness</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfWeakness__795.png" alt="虚弱诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>虚弱诅咒</strong>
      <small>Curse of Weakness · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>将 2 张无效果诅咒牌洗入对手牌库。抽 1 张牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/focus">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Focus__690.png" alt="专注" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>专注</strong><small>Focus</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Focus__690.png" alt="专注" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>专注</strong>
      <small>Focus · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>抽 2 张牌。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/prayer-of-speed">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfSpeed__753.png" alt="速度祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>速度祈祷</strong><small>Prayer of Speed</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfSpeed__753.png" alt="速度祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>速度祈祷</strong>
      <small>Prayer of Speed · 祈祷 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量抽牌：1 层 2 张，2 层 4 张，3 层 6 张，4 层 8 张，5 层 10 张。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/extract">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Extract__241.png" alt="萃取" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>萃取</strong><small>Extract</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Extract__241.png" alt="萃取" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>萃取</strong>
      <small>Extract · 行动牌 · 8 阶 · 1 行动点 / 0 法力</small>
      <em>查看对手牌库顶的 10 张牌。最多放逐其中 2 张。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>8+</td>
  <td>将 <a class="dq-card-chip" href="/cards/prayer-of-wrath">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>怒火祈祷</strong><small>Prayer of Wrath</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>怒火祈祷</strong>
      <small>Prayer of Wrath · 祈祷 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成火焰伤害：1 层 5 点，2 层 10 点，3 层 15 点，4 层 20 点，5 层 25 点。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/curse-of-doom-player">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>末日诅咒（玩家）</strong><small>Curse of Doom</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>末日诅咒（玩家）</strong>
      <small>Curse of Doom · 祈祷 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>5 回合后，造成 50 点&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/phoenix-feather">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PhoenixFeather__409.png" alt="凤凰羽毛" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>凤凰羽毛</strong><small>Phoenix Feather</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PhoenixFeather__409.png" alt="凤凰羽毛" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>凤凰羽毛</strong>
      <small>Phoenix Feather · 装备 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>如果你将要死亡，放逐 凤凰羽毛 并将其从你的牌库中永久移除。你的生命设为最大值。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/mahamat">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mahamat__568.png" alt="马哈马特" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>马哈马特</strong><small>Mahamat</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mahamat__568.png" alt="马哈马特" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>马哈马特</strong>
      <small>Mahamat · 法术 · 10 阶 · 0 行动点 / 8 法力</small>
      <em>随机选择 2 项：抽 3 张牌、对手受到 10 点&lt;穿透&gt;伤害、回复 15 点生命，或防止你将受到的接下来 15 点伤害。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
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
  <td>加入 <a class="dq-card-chip" href="/cards/absorb-vis">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/AbsorbVis__561.png" alt="吸收魔力" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>吸收魔力</strong><small>Absorb Vis</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/AbsorbVis__561.png" alt="吸收魔力" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吸收魔力</strong>
      <small>Absorb Vis · 法术 · 10 阶 · 0 行动点 / 15 法力</small>
      <em>回复至多 40 点生命，然后造成等同于以此回复生命值的&lt;穿透&gt;伤害。</em>
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
  <span>基础牌组 4 张</span>
  <span>唯一卡牌 3 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>法术</td>
  <td>1</td>
  <td><a class="dq-card-chip" href="/cards/heal">
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
<tr>
  <td>祈祷</td>
  <td>1</td>
  <td><a class="dq-card-chip" href="/cards/prayer-of-violence">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>暴力祈祷</strong><small>Prayer of Violence</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴力祈祷</strong>
      <small>Prayer of Violence · 祈祷 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/prayer-of-life">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfLife__733.png" alt="生命祈祷" loading="eager"></span></span>
  <strong>生命祈祷</strong>
  <span class="dq-profession-card-meta">Prayer of Life · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfLife__733.png" alt="生命祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>生命祈祷</strong>
      <small>Prayer of Life · 祈祷 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量回复生命：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/pendant">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Pendant__344.png" alt="吊坠" loading="eager"></span></span>
  <strong>吊坠</strong>
  <span class="dq-profession-card-meta">Pendant · 起手装备 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Pendant__344.png" alt="吊坠" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吊坠</strong>
      <small>Pendant · 装备 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 2 点法力 在每个回合开始时。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/heal">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="eager"></span></span>
  <strong>治疗</strong>
  <span class="dq-profession-card-meta">Heal · 基础牌组 x1 / 关键行为 / 机制引用 / 机制参数</span>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/prayer-of-violence">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="eager"></span></span>
  <strong>暴力祈祷</strong>
  <span class="dq-profession-card-meta">Prayer of Violence · 基础牌组 x1 / 优先起手 / 关键行为 / 等级变化 / 机制引用 / 等级移出 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴力祈祷</strong>
      <small>Prayer of Violence · 祈祷 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/haste">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="eager"></span></span>
  <strong>急速</strong>
  <span class="dq-profession-card-meta">Haste · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>急速</strong>
      <small>Haste · 法术 · 4 阶 · 0 行动点 / 4 法力</small>
      <em>抽 2 张牌。此外，你有 10% 概率获得一个额外回合。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/ward">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="eager"></span></span>
  <strong>护盾守卫</strong>
  <span class="dq-profession-card-meta">Ward · 优先起手 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护盾守卫</strong>
      <small>Ward · 法术 · 4 阶 · 0 行动点 / 3 法力</small>
      <em>防止你将受到的接下来 8 点伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/piety">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Piety__928.png" alt="虔诚" loading="eager"></span></span>
  <strong>虔诚</strong>
  <span class="dq-profession-card-meta">Piety · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Piety__928.png" alt="虔诚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>虔诚</strong>
      <small>Piety · 魔力 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。移除一张计数器 从 每个 的 你的 祈祷 牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/phoenix-feather">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PhoenixFeather__409.png" alt="凤凰羽毛" loading="eager"></span></span>
  <strong>凤凰羽毛</strong>
  <span class="dq-profession-card-meta">Phoenix Feather · 起手装备 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PhoenixFeather__409.png" alt="凤凰羽毛" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>凤凰羽毛</strong>
      <small>Phoenix Feather · 装备 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>如果你将要死亡，放逐 凤凰羽毛 并将其从你的牌库中永久移除。你的生命设为最大值。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/penance">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="eager"></span></span>
  <strong>忏悔</strong>
  <span class="dq-profession-card-meta">Penance · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>忏悔</strong>
      <small>Penance · 法术 · 5 阶 · 0 行动点 / 2 法力</small>
      <em>对手受到 2 &lt;穿透&gt; 伤害 在每个回合开始时 直到本场战斗结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/curse-of-weakness">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfWeakness__795.png" alt="虚弱诅咒" loading="eager"></span></span>
  <strong>虚弱诅咒</strong>
  <span class="dq-profession-card-meta">Curse of Weakness · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfWeakness__795.png" alt="虚弱诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>虚弱诅咒</strong>
      <small>Curse of Weakness · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>将 2 张无效果诅咒牌洗入对手牌库。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/focus">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Focus__690.png" alt="专注" loading="eager"></span></span>
  <strong>专注</strong>
  <span class="dq-profession-card-meta">Focus · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Focus__690.png" alt="专注" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>专注</strong>
      <small>Focus · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>抽 2 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/prayer-of-wrath">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="eager"></span></span>
  <strong>怒火祈祷</strong>
  <span class="dq-profession-card-meta">Prayer of Wrath · 优先起手 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 等级移出 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>怒火祈祷</strong>
      <small>Prayer of Wrath · 祈祷 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成火焰伤害：1 层 5 点，2 层 10 点，3 层 15 点，4 层 20 点，5 层 25 点。</em>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/soulfire">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="eager"></span></span>
  <strong>灵魂火</strong>
  <span class="dq-profession-card-meta">Soulfire · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灵魂火</strong>
      <small>Soulfire · 法术 · 7 阶 · 0 行动点 / 5 法力</small>
      <em>对手受到 10 点&lt;穿透&gt;伤害。在你的回合开始时，如果 灵魂火 在你的弃牌堆中，将其返回你的手牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/curse-of-doom-player">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="eager"></span></span>
  <strong>末日诅咒（玩家）</strong>
  <span class="dq-profession-card-meta">Curse of Doom · 优先起手 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>末日诅咒（玩家）</strong>
      <small>Curse of Doom · 祈祷 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>5 回合后，造成 50 点&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/extract">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Extract__241.png" alt="萃取" loading="eager"></span></span>
  <strong>萃取</strong>
  <span class="dq-profession-card-meta">Extract · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Extract__241.png" alt="萃取" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>萃取</strong>
      <small>Extract · 行动牌 · 8 阶 · 1 行动点 / 0 法力</small>
      <em>查看对手牌库顶的 10 张牌。最多放逐其中 2 张。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/prayer-of-speed">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfSpeed__753.png" alt="速度祈祷" loading="eager"></span></span>
  <strong>速度祈祷</strong>
  <span class="dq-profession-card-meta">Prayer of Speed · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfSpeed__753.png" alt="速度祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>速度祈祷</strong>
      <small>Prayer of Speed · 祈祷 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量抽牌：1 层 2 张，2 层 4 张，3 层 6 张，4 层 8 张，5 层 10 张。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/absorb-vis">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/AbsorbVis__561.png" alt="吸收魔力" loading="eager"></span></span>
  <strong>吸收魔力</strong>
  <span class="dq-profession-card-meta">Absorb Vis · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/AbsorbVis__561.png" alt="吸收魔力" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>吸收魔力</strong>
      <small>Absorb Vis · 法术 · 10 阶 · 0 行动点 / 15 法力</small>
      <em>回复至多 40 点生命，然后造成等同于以此回复生命值的&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/mahamat">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mahamat__568.png" alt="马哈马特" loading="eager"></span></span>
  <strong>马哈马特</strong>
  <span class="dq-profession-card-meta">Mahamat · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mahamat__568.png" alt="马哈马特" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>马哈马特</strong>
      <small>Mahamat · 法术 · 10 阶 · 0 行动点 / 8 法力</small>
      <em>随机选择 2 项：抽 3 张牌、对手受到 10 点&lt;穿透&gt;伤害、回复 15 点生命，或防止你将受到的接下来 15 点伤害。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
