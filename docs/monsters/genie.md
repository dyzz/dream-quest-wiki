---
title: "灯神"
description: "Boss，出现在 山脉、水域、火山。等级范围 4-7 级。基础牌组 7 张。主要依靠牌组行动。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 4-7 级</p>
    <h1>灯神</h1>
    <span class="dq-original">原名：Genie</span>
    <p class="dq-lede">Boss，出现在 山脉、水域、火山。等级范围 4-7 级。基础牌组 7 张。主要依靠牌组行动。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>Boss</span>
      <span>有等级变化</span>
      <span>山脉</span>
<span>水域</span>
<span>火山</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Genie__354.png" alt="灯神" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>灯神</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Genie</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Genie</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Genie</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>Boss</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>4-7 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>山脉、水域、火山</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 0、地牢: 0、水域: 3、火山: 5、山脉: 10</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>2 · 法术型；吞噬收益：获得法力 +max(1, floor(怪物等级 / 2))，并随机获得一张火焰、冰霜、毒性或电系法术。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>5</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>4</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>0</em></span>
<span title="怪物初始化里的行动点修正。"><strong>行动点修正</strong><em>0</em></span>
<span title="怪物初始化里的抽牌/手牌修正。"><strong>手牌修正</strong><em>0</em></span>
<span title="怪物生命倍率，Boss 常高于普通怪物。"><strong>生命倍率</strong><em>2</em></span>
<span title="击败后金币奖励倍率。"><strong>金币倍率</strong><em>3</em></span>
<span title="击败后经验奖励倍率。"><strong>经验倍率</strong><em>4</em></span>
<span title="解析出的怪物机制覆盖程度。"><strong>机制状态</strong><em>有等级变化</em></span>
<span title="等级变化解析状态；详情在等级变化表中展示。"><strong>等级规则</strong><em>structured_level_up</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>关键机制</h2>
  <div class="dq-mechanic-list dq-core-mechanics">
<p><a class="dq-card-chip" href="/cards/bad-wishes">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望</strong>
      <small>Three Wishes · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a> / <a class="dq-card-chip" href="/cards/bad-wishes2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望（2）</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望（2）</strong>
      <small>Three Wishes · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a> 会先生成惩罚候选池，再随机展示 3 个互不重复的选项让玩家选择 1 个。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/bad-wishes">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望</strong>
      <small>Three Wishes · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/bad-wishes2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望（2）</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望（2）</strong>
      <small>Three Wishes · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a>。</p>
</div>
</section>

<section class="dq-section-block dq-genie-wish-section">
  <h2>Three Wishes 机制</h2>
  <div class="dq-mechanic-list">
    <p><a class="dq-card-chip" href="/cards/bad-wishes">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望</strong>
      <small>Three Wishes · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a> 是 Genie 基础牌组里的 Three Wishes：1 行动点、0 法力、3 阶。</p>
    <p><a class="dq-card-chip" href="/cards/bad-wishes2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望（2）</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望（2）</strong>
      <small>Three Wishes · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a> 是 6+ 级后使用的强化 Three Wishes：仍是 1 行动点、0 法力，但候选条件和惩罚数值更高。</p>
    <p>这张牌不是固定执行一个效果。它先按当前战斗状态生成候选惩罚池，再从候选池中随机取 3 个互不重复的惩罚，交给玩家选择其中 1 个结算。</p>
  </div>

  <h3>执行流程</h3>
  <table class="dq-data-table dq-wish-flow-table">
    <thead><tr><th>步骤</th><th>解析到的行为</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>先放入两个固定候选：<a class="dq-card-chip" href="/cards/penalty-curses">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyCurses__360.png" alt="诅咒惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>诅咒惩罚</strong><small>Penalty Curses</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyCurses__360.png" alt="诅咒惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>诅咒惩罚</strong>
      <small>Penalty Curses · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a> 和 <a class="dq-card-chip" href="/cards/penalty-plus-card">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPlusCard__1029.png" alt="手牌增加惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>手牌增加惩罚</strong><small>Penalty Plus Card</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPlusCard__1029.png" alt="手牌增加惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>手牌增加惩罚</strong>
      <small>Penalty Plus Card · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>。</td></tr>
      <tr><td>2</td><td>根据玩家生命、玩家法力、玩家最大行动点、玩家最大手牌，以及 Genie 是否已经受伤，追加条件候选。</td></tr>
      <tr><td>3</td><td>若候选项不足 3 个，或玩家生命低于对应阈值，会补入中毒惩罚。</td></tr>
      <tr><td>4</td><td>最终随机抽出 3 个不同候选，生成选择动作；玩家只需要在这 3 个选项里选 1 个。</td></tr>
    </tbody>
  </table>

  <h3>基础 Three Wishes 候选池</h3>
  <table class="dq-data-table dq-wish-penalty-table">
  <thead><tr><th>候选惩罚</th><th>进入候选池条件</th><th>实际效果</th></tr></thead>
  <tbody>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-curses">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyCurses__360.png" alt="诅咒惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>诅咒惩罚</strong><small>Penalty Curses</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyCurses__360.png" alt="诅咒惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>诅咒惩罚</strong>
      <small>Penalty Curses · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>固定候选</td>
  <td>向玩家牌库加入 4 张 <a class="dq-card-chip" href="/cards/curse">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Curse__692.png" alt="诅咒" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>诅咒</strong><small>Curse</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Curse__692.png" alt="诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>诅咒</strong>
      <small>Curse · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a> 并洗牌；玩家有精神免疫时不生效。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-plus-card">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPlusCard__1029.png" alt="手牌增加惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>手牌增加惩罚</strong><small>Penalty Plus Card</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPlusCard__1029.png" alt="手牌增加惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>手牌增加惩罚</strong>
      <small>Penalty Plus Card · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>固定候选</td>
  <td>使 Genie 最大手牌 +1。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-damage">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamage__324.png" alt="伤害惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>伤害惩罚</strong><small>Penalty Damage</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamage__324.png" alt="伤害惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>伤害惩罚</strong>
      <small>Penalty Damage · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>玩家生命 &lt;= 10</td>
  <td>对玩家造成 6 点电系伤害。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-heal">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyHeal__268.png" alt="治疗惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>治疗惩罚</strong><small>Penalty Heal</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyHeal__268.png" alt="治疗惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗惩罚</strong>
      <small>Penalty Heal · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Genie 已损失至少 7 点生命</td>
  <td>Genie 回复 10 点生命。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-mana">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMana__475.png" alt="法力惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>法力惩罚</strong><small>Penalty Mana</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMana__475.png" alt="法力惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力惩罚</strong>
      <small>Penalty Mana · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>玩家当前法力 &gt;= 7</td>
  <td>将玩家当前法力设为 0。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-minus-action">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction__531.png" alt="行动点减少惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>行动点减少惩罚</strong><small>Penalty Minus Action</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction__531.png" alt="行动点减少惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>行动点减少惩罚</strong>
      <small>Penalty Minus Action · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>玩家最大行动点 &gt;= 1</td>
  <td>玩家最大行动点 -1。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-minus-card">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>手牌减少惩罚</strong><small>Penalty Minus Card</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>手牌减少惩罚</strong>
      <small>Penalty Minus Card · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>玩家有可扣减的最大手牌</td>
  <td>玩家最大手牌 -1。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-poison">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison__960.png" alt="中毒惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>中毒惩罚</strong><small>Penalty Poison</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison__960.png" alt="中毒惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>中毒惩罚</strong>
      <small>Penalty Poison · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>候选池少于 3 项，或玩家生命 &lt;= 15</td>
  <td>玩家获得 4 层中毒。</td>
</tr>
  </tbody>
</table>

  <h3>强化 Three Wishes 候选池</h3>
  <table class="dq-data-table dq-wish-penalty-table">
  <thead><tr><th>候选惩罚</th><th>进入候选池条件</th><th>实际效果</th></tr></thead>
  <tbody>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-curses">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyCurses__360.png" alt="诅咒惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>诅咒惩罚</strong><small>Penalty Curses</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyCurses__360.png" alt="诅咒惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>诅咒惩罚</strong>
      <small>Penalty Curses · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>固定候选</td>
  <td>向玩家牌库加入 4 张 <a class="dq-card-chip" href="/cards/curse">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Curse__692.png" alt="诅咒" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>诅咒</strong><small>Curse</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Curse__692.png" alt="诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>诅咒</strong>
      <small>Curse · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a> 并洗牌；玩家有精神免疫时不生效。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-plus-card">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPlusCard__1029.png" alt="手牌增加惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>手牌增加惩罚</strong><small>Penalty Plus Card</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPlusCard__1029.png" alt="手牌增加惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>手牌增加惩罚</strong>
      <small>Penalty Plus Card · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>固定候选</td>
  <td>使 Genie 最大手牌 +1。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-damage2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamage2__369.png" alt="伤害惩罚（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>伤害惩罚（2）</strong><small>Penalty Damage2</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamage2__369.png" alt="伤害惩罚（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>伤害惩罚（2）</strong>
      <small>Penalty Damage2 · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>玩家生命 &lt;= 20</td>
  <td>对玩家造成 12 点电系伤害。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-heal">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyHeal__268.png" alt="治疗惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>治疗惩罚</strong><small>Penalty Heal</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyHeal__268.png" alt="治疗惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗惩罚</strong>
      <small>Penalty Heal · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Genie 已损失至少 7 点生命</td>
  <td>Genie 回复 10 点生命。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-minus-action2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction2__225.png" alt="行动点减少惩罚（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>行动点减少惩罚（2）</strong><small>Penalty Minus Action2</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction2__225.png" alt="行动点减少惩罚（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>行动点减少惩罚（2）</strong>
      <small>Penalty Minus Action2 · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>玩家最大行动点 &gt;= 1</td>
  <td>玩家最大行动点 -2。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-minus-card">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>手牌减少惩罚</strong><small>Penalty Minus Card</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>手牌减少惩罚</strong>
      <small>Penalty Minus Card · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>玩家有可扣减的最大手牌</td>
  <td>玩家最大手牌 -1。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-poison2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison2__501.png" alt="中毒惩罚（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>中毒惩罚（2）</strong><small>Penalty Poison2</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison2__501.png" alt="中毒惩罚（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>中毒惩罚（2）</strong>
      <small>Penalty Poison2 · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>候选池少于 3 项，或玩家生命 &lt;= 30</td>
  <td>玩家获得 6 层中毒。</td>
</tr>
  </tbody>
</table>

  <h3>等级影响</h3>
  <table class="dq-data-table">
    <thead><tr><th>等级</th><th>变化</th></tr></thead>
    <tbody>
      <tr><td>基础</td><td>基础牌组中有 2 张 <a class="dq-card-chip" href="/cards/bad-wishes">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望</strong>
      <small>Three Wishes · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a>，且它们也是优先起手牌。</td></tr>
      <tr><td>6+</td><td>两张 <a class="dq-card-chip" href="/cards/bad-wishes">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望</strong>
      <small>Three Wishes · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a> 都替换为 <a class="dq-card-chip" href="/cards/bad-wishes2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望（2）</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望（2）</strong>
      <small>Three Wishes · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a>。</td></tr>
      <tr><td>7+</td><td>额外加入 1 张 <a class="dq-card-chip" href="/cards/bad-wishes2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望（2）</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望（2）</strong>
      <small>Three Wishes · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a>，强化 Three Wishes 总量增加。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>等级变化</h2>
  <table class="dq-data-table">
  <thead><tr><th>等级</th><th>变化</th><th>次数</th><th>条件说明</th></tr></thead>
  <tbody>
<tr>
  <td>5+</td>
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
  <td>加入 <a class="dq-card-chip" href="/cards/vapor-form">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/VaporForm__92.png" alt="蒸汽形态" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>蒸汽形态</strong><small>Vapor Form</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/VaporForm__92.png" alt="蒸汽形态" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蒸汽形态</strong>
      <small>Vapor Form · 法术 · 8 阶 · 0 行动点 / 5 法力</small>
      <em>获得物理免疫 直到你的下个回合。</em>
    </span>
  </span>
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/shock">
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
</a></td>
  <td>1</td>
  <td></td>
</tr>
<tr>
  <td>6+</td>
  <td>将 <a class="dq-card-chip" href="/cards/bad-wishes">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望</strong>
      <small>Three Wishes · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/bad-wishes2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望（2）</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望（2）</strong>
      <small>Three Wishes · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>7+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/bad-wishes2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望（2）</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望（2）</strong>
      <small>Three Wishes · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
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
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/haste">
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
</a></td>
</tr>
<tr>
  <td>行动牌</td>
  <td>2</td>
  <td><a class="dq-card-chip" href="/cards/bad-wishes">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>三个愿望</strong><small>Three Wishes</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望</strong>
      <small>Three Wishes · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a></td>
</tr>
<tr>
  <td>魔力</td>
  <td>3</td>
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
</a>、<a class="dq-card-chip" href="/cards/mana-surge">
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
  <span class="dq-profession-card-meta">Mana (2) · 基础牌组 x1 / 机制引用 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（2）</strong>
      <small>Mana (2) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 4 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/bad-wishes">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="eager"></span></span>
  <strong>三个愿望</strong>
  <span class="dq-profession-card-meta">Three Wishes · 基础牌组 x2 / 优先起手 / 关键行为 / 机制引用 / 等级移出 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望</strong>
      <small>Three Wishes · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/wisdom">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="eager"></span></span>
  <strong>智慧</strong>
  <span class="dq-profession-card-meta">Wisdom · 基础牌组 x1 / 关键行为 / 机制引用 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>智慧</strong>
      <small>Wisdom · 魔力 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/shock">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="eager"></span></span>
  <strong>震击</strong>
  <span class="dq-profession-card-meta">Shock · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>震击</strong>
      <small>Shock · 法术 · 3 阶 · 0 行动点 / 4 法力</small>
      <em>造成 4 点电系伤害。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/haste">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="eager"></span></span>
  <strong>急速</strong>
  <span class="dq-profession-card-meta">Haste · 基础牌组 x1 / 关键行为 / 机制引用 / 机制参数</span>
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
  <span class="dq-profession-card-meta">Ward · 基础牌组 x1 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护盾守卫</strong>
      <small>Ward · 法术 · 4 阶 · 0 行动点 / 3 法力</small>
      <em>防止你将受到的接下来 8 点伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/bad-wishes2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="eager"></span></span>
  <strong>三个愿望（2）</strong>
  <span class="dq-profession-card-meta">Three Wishes · 优先起手 / 关键行为 / 等级变化 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>三个愿望（2）</strong>
      <small>Three Wishes · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>给对手三个选项，由对手选择其中一个。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/mana-surge">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="eager"></span></span>
  <strong>法力激涌</strong>
  <span class="dq-profession-card-meta">Mana Surge · 基础牌组 x1 / 关键行为 / 机制引用 / 等级加入 / 机制参数</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力激涌</strong>
      <small>Mana Surge · 魔力 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>获得 10 点法力。</em>
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
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/vapor-form">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/VaporForm__92.png" alt="蒸汽形态" loading="eager"></span></span>
  <strong>蒸汽形态</strong>
  <span class="dq-profession-card-meta">Vapor Form · 等级变化 / 机制引用 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/VaporForm__92.png" alt="蒸汽形态" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蒸汽形态</strong>
      <small>Vapor Form · 法术 · 8 阶 · 0 行动点 / 5 法力</small>
      <em>获得物理免疫 直到你的下个回合。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
