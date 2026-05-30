---
title: "熔岩巨兽"
description: "Boss，出现在 火山。等级范围 4-10 级。基础牌组 3 张。有独立技能或回合机制。等级提升会改动牌组或属性。"
---


<section class="dq-profession-hero dq-monster-hero">
  <div>
    <p class="dq-kicker">Monster · 4-10 级</p>
    <h1>熔岩巨兽</h1>
    <span class="dq-original">原名：Magmadon</span>
    <p class="dq-lede">Boss，出现在 火山。等级范围 4-10 级。基础牌组 3 张。有独立技能或回合机制。等级提升会改动牌组或属性。</p>
    <div class="dq-tag-row">
      <span>Boss</span>
      <span>机制与等级变化</span>
      <span>火山</span>
    </div>
  </div>
  <div class="dq-profession-portrait dq-monster-portrait">
    <img src="/assets/extracted/textures/by_container/resources/Magmadon__110.png" alt="熔岩巨兽" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>后台信息</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的统一中文名称。"><strong>中文名</strong><em>熔岩巨兽</em></span>
<span title="游戏原始显示名。"><strong>英文名</strong><em>Magmadon</em></span>
<span title="怪物在解析数据中的内部引用名称。"><strong>怪物 ID</strong><em>Magmadon</em></span>
<span title="反编译类名，通常用于和代码中的怪物实现对应。"><strong>类名</strong><em>Magmadon</em></span>
<span title="Boss 通常有更高金币、经验或生命倍率，也会使用更高等级段。"><strong>类型</strong><em>Boss</em></span>
<span title="地牢生成时可能出现的怪物等级范围；某些怪物在不同等级有不同牌组或属性。"><strong>等级范围</strong><em>4-10 级</em></span>
<span title="怪物可在这些地形环境中生成。"><strong>生成地形</strong><em>火山</em></span>
<span title="不同地形中的生成权重；0 表示通常不在该环境自然生成。"><strong>地形权重</strong><em>墓穴: 0、森林: 0、地牢: 0、水域: 0、火山: 10、山脉: 0</em></span>
<span title="龙职业吞噬机制读取的怪物类型；后半段注明吞噬该类怪物时触发的奖励。"><strong>Devour 类型</strong><em>8 · 火焰型；吞噬收益：获得法力 +max(1, floor(怪物等级 / 2))，并获得一张火焰法术。</em></span>
<span title="怪物开局或基础配置中的法力值。"><strong>基础法力</strong><em>0</em></span>
<span title="BuildAttributes 里写入的基础等级，实际生成仍受地牢等级范围影响。"><strong>基础等级</strong><em>4</em></span>
<span title="怪物初始化里的牌组/行动稀释参数，用于控制其节奏表现。"><strong>稀释值</strong><em>3</em></span>
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
<p>免疫火焰伤害；Super Fireshield 让玩家每打出一张牌都会受到伤害，且回合机制会施加燃烧。</p>
<p>起手优先牌：<a class="dq-card-chip" href="/cards/burn">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>燃烧</strong><small>Burn</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>燃烧</strong>
      <small>Burn · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 1 点火焰伤害 直到本场战斗结束。</em>
    </span>
  </span>
</a>、<a class="dq-card-chip" href="/cards/burn2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灼烧（2）</strong><small>Burn (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灼烧（2）</strong>
      <small>Burn (2) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 2 点火焰伤害 直到本场战斗结束。</em>
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
  <td>加入 <a class="dq-card-chip" href="/cards/stoneskin">
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
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>9+</td>
  <td>将 <a class="dq-card-chip" href="/cards/burn">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>燃烧</strong><small>Burn</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>燃烧</strong>
      <small>Burn · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 1 点火焰伤害 直到本场战斗结束。</em>
    </span>
  </span>
</a> 替换为 <a class="dq-card-chip" href="/cards/burn2">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>灼烧（2）</strong><small>Burn (2)</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灼烧（2）</strong>
      <small>Burn (2) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 2 点火焰伤害 直到本场战斗结束。</em>
    </span>
  </span>
</a> <span class="dq-repeat-count">重复 2 次</span></td>
  <td>2</td>
  <td></td>
</tr>
<tr>
  <td>10+</td>
  <td>加入 <a class="dq-card-chip" href="/cards/armor">
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
  <td>1</td>
  <td></td>
</tr>
  </tbody>
</table>
</section>

<section class="dq-section-block">
  <h2>卡牌</h2>
  <div class="dq-monster-card-summary">
  <span>基础牌组 3 张</span>
  <span>唯一卡牌 1 张</span>
</div>
<h3>牌型比例</h3>
<table class="dq-data-table">
  <thead><tr><th>牌型</th><th>数量</th><th>代表牌</th></tr></thead>
  <tbody>
<tr>
  <td>攻击</td>
  <td>3</td>
  <td><a class="dq-card-chip" href="/cards/burn">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>燃烧</strong><small>Burn</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>燃烧</strong>
      <small>Burn · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 1 点火焰伤害 直到本场战斗结束。</em>
    </span>
  </span>
</a></td>
</tr>
  </tbody>
</table>
<h3>关联卡牌</h3>
<div class="dq-profession-card-grid dq-monster-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/burn">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="eager"></span></span>
  <strong>燃烧</strong>
  <span class="dq-profession-card-meta">Burn · 基础牌组 x3 / 优先起手 / 等级移出</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>燃烧</strong>
      <small>Burn · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 1 点火焰伤害 直到本场战斗结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/burn2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="eager"></span></span>
  <strong>灼烧（2）</strong>
  <span class="dq-profession-card-meta">Burn (2) · 优先起手 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灼烧（2）</strong>
      <small>Burn (2) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 2 点火焰伤害 直到本场战斗结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/stoneskin">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="eager"></span></span>
  <strong>石肤</strong>
  <span class="dq-profession-card-meta">Stoneskin · 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>石肤</strong>
      <small>Stoneskin · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>获得&lt;减伤 2&gt; 直到你的下个回合。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/armor">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="eager"></span></span>
  <strong>护甲</strong>
  <span class="dq-profession-card-meta">Armor · 起手装备 / 等级加入</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护甲</strong>
      <small>Armor · 装备 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>每回合防止你受到的前 3 点攻击伤害。</em>
    </span>
  </span>
</a>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/monsters">回到怪物图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
