---
title: "负面效果"
description: "Dream Quest 卡牌和怪物能施加给玩家的负面效果。"
---


# 负面效果

这里汇总实际卡牌和怪物牌组能施加给玩家的负面效果。系统内部惩罚载体不列入这里；卡牌详情页上出现对应标签时，可以直接跳到这里查看作用、来源卡牌和怪物来源。

<table class="dq-data-table">
  <thead><tr><th>效果</th><th>作用</th></tr></thead>
  <tbody>
<tr><td><a href="#poisoned">中毒 / Poisoned</a></td><td>持续型毒性压力。中毒层数会累积，回合开始时按层数造成毒性伤害。</td></tr>
<tr><td><a href="#chilled">寒冷 / Chilled</a></td><td>冰霜系状态，也会降低该角色造成的攻击伤害。</td></tr>
<tr><td><a href="#weakened">虚弱 / Weakened</a></td><td>提高该角色受到的攻击伤害。解析里分为临时 Weakness 和整场保留的 PermWeakness。</td></tr>
<tr><td><a href="#curses">诅咒 / Curses</a></td><td>牌组污染。Curse 本身通常没有效果，但会占据抽牌、手牌和牌库空间。</td></tr>
<tr><td><a href="#doom-curse">末日诅咒 / Curse of Doom</a></td><td>延迟穿透伤害牌。三张同名显示牌的后台数值不同，不能合并理解。</td></tr>
<tr><td><a href="#burning">燃烧 / Burning</a></td><td>火焰持续伤害。Burn / Burn (2) 会让对手在回合开始时持续受到火焰伤害。</td></tr>
<tr><td><a href="#action-loss">行动点减少 / Action loss</a></td><td>限制当前回合或后续战斗行动点。Web、Slow、Solidify、Zap 等都会让对手失去行动点。</td></tr>
<tr><td><a href="#hand-disruption">弃牌与放逐 / Discard &amp; Exile</a></td><td>直接破坏手牌。弃牌会把牌送走，放逐会让牌离开本场战斗的常规循环。</td></tr>
<tr><td><a href="#hand-limit">最大手牌减少 / Max hand loss</a></td><td>降低最大手牌数。当前解析到的实际卡牌来源是 Entrap。</td></tr>
<tr><td><a href="#mana-drain">法力清空 / Mana drain</a></td><td>清空当前法力或减少法力上限。Choke、Zap、Mana Drain 等会直接破坏法力计划。</td></tr>
<tr><td><a href="#equipment-destruction">装备破坏 / Equipment destruction</a></td><td>移除装备。Crush 破坏单个装备，Crush Everything 破坏全部装备。</td></tr>
<tr><td><a href="#delayed-death">延迟死亡 / Delayed lethal</a></td><td>给玩家一个死亡倒计时。当前按卡牌效果归类的来源是 Zombie Bite。</td></tr>
  </tbody>
</table>

<section class="dq-effect-section" id="poisoned">
<h2>中毒 / Poisoned</h2>
<p>持续型毒性压力。中毒层数会累积，回合开始时按层数造成毒性伤害。</p>
<div class="dq-mechanic-list"><p>中毒角色回合开始时，先受到等于当前中毒层数的毒性伤害，然后中毒层数减少 1；降到 0 后不再结算。</p>
<p>直接施加值包括 Poisoned 1 / 2 / 3 / 4 / 5 / 6；Blight 先给 Poisoned 5，再把已有中毒翻倍，额外增加最多 30 层。</p>
<p>Poison Dagger 是触发型来源：每当一回合内打出第 2 张攻击牌时，让对手获得 Poisoned 1。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家被中毒后需要缩短战斗、清理来源或准备回复；高层数时即使挡住直接伤害，也会继续承担毒性压力。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/hemorrhage">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Hemorrhage__497.png" alt="大出血" loading="eager"></span></span>
  <strong>大出血</strong>
  <span class="dq-profession-card-meta">Hemorrhage · 行动牌 · 7 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Hemorrhage__497.png" alt="大出血" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>大出血</strong>
      <small>Hemorrhage · 行动牌 · 7 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 3&gt;。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/infect">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Infect__364.png" alt="感染" loading="eager"></span></span>
  <strong>感染</strong>
  <span class="dq-profession-card-meta">Infect · 攻击 · 4 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Infect__364.png" alt="感染" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>感染</strong>
      <small>Infect · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 3&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/infect1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Infect1__754.png" alt="感染（1）" loading="eager"></span></span>
  <strong>感染（1）</strong>
  <span class="dq-profession-card-meta">Infect (1) · 攻击 · 2 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Infect1__754.png" alt="感染（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>感染（1）</strong>
      <small>Infect (1) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 1&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/infect2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Infect2__650.png" alt="感染（2）" loading="eager"></span></span>
  <strong>感染（2）</strong>
  <span class="dq-profession-card-meta">Infect (2) · 攻击 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Infect2__650.png" alt="感染（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>感染（2）</strong>
      <small>Infect (2) · 攻击 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 2&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/infect3">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Infect3__612.png" alt="感染（3）" loading="eager"></span></span>
  <strong>感染（3）</strong>
  <span class="dq-profession-card-meta">Infect (3) · 攻击 · 4 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Infect3__612.png" alt="感染（3）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>感染（3）</strong>
      <small>Infect (3) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 3&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/rake">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Rake__56.png" alt="撕抓" loading="eager"></span></span>
  <strong>撕抓</strong>
  <span class="dq-profession-card-meta">Rake · 攻击 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Rake__56.png" alt="撕抓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>撕抓</strong>
      <small>Rake · 攻击 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>如果对手生命不少于一半，对手获得 &lt;中毒 3&gt;。否则，造成 3 点攻击伤害 并按对手每层中毒额外造成 1 点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/blight">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blight__788.png" alt="枯萎" loading="eager"></span></span>
  <strong>枯萎</strong>
  <span class="dq-profession-card-meta">Blight · 法术 · 9 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blight__788.png" alt="枯萎" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>枯萎</strong>
      <small>Blight · 法术 · 9 阶 · 0 行动点 / 12 法力</small>
      <em>对手获得&lt;中毒 5&gt;。使对手身上的中毒层数翻倍，最多额外增加 30 层。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/poison-dagger">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PoisonDagger__912.png" alt="毒匕首" loading="eager"></span></span>
  <strong>毒匕首</strong>
  <span class="dq-profession-card-meta">Poison Dagger · 装备 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PoisonDagger__912.png" alt="毒匕首" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>毒匕首</strong>
      <small>Poison Dagger · 装备 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>每有 2 个攻击牌 你 打出 在一张回合，对手获得 &lt;中毒 1&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/venom">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Venom__796.png" alt="毒液" loading="eager"></span></span>
  <strong>毒液</strong>
  <span class="dq-profession-card-meta">Venom · 行动牌 · 1 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Venom__796.png" alt="毒液" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>毒液</strong>
      <small>Venom · 行动牌 · 1 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 3&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/bleed">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Bleed__414.png" alt="流血" loading="eager"></span></span>
  <strong>流血</strong>
  <span class="dq-profession-card-meta">Bleed · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Bleed__414.png" alt="流血" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>流血</strong>
      <small>Bleed · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>抽 1 张牌。获得 1 行动点。对手获得 &lt;中毒 1&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/wolf">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Wolf__346.png" alt="狼" loading="eager"></span></span>
  <strong>狼</strong>
  <span class="dq-profession-card-meta">Wolf · 行动牌 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Wolf__346.png" alt="狼" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>狼</strong>
      <small>Wolf · 行动牌 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 3&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/natures-blessing">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/NaturesBlessing__790.png" alt="自然祝福" loading="eager"></span></span>
  <strong>自然祝福</strong>
  <span class="dq-profession-card-meta">Nature's Blessing · 法术 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/NaturesBlessing__790.png" alt="自然祝福" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>自然祝福</strong>
      <small>Nature's Blessing · 法术 · 8 阶 · 0 行动点 / 10 法力</small>
      <em>造成 10 点火焰伤害。对手获得 &lt;中毒 5&gt;和&lt;寒冷 2&gt;。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/mimic-action">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/MimicAction__815.png" alt="舌鞭" loading="eager"></span></span>
  <strong>舌鞭</strong>
  <span class="dq-profession-card-meta">Tongue Lash · 行动牌 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/MimicAction__815.png" alt="舌鞭" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>舌鞭</strong>
      <small>Tongue Lash · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 2&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/mimic-action2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/MimicAction2__621.png" alt="舌鞭（2）" loading="eager"></span></span>
  <strong>舌鞭（2）</strong>
  <span class="dq-profession-card-meta">Tongue Lash · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/MimicAction2__621.png" alt="舌鞭（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>舌鞭（2）</strong>
      <small>Tongue Lash · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 4&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/sting">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="eager"></span></span>
  <strong>蛰刺</strong>
  <span class="dq-profession-card-meta">Sting · 行动牌 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛰刺</strong>
      <small>Sting · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 2&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/acid-breath">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/AcidBreath__967.png" alt="酸蚀吐息" loading="eager"></span></span>
  <strong>酸蚀吐息</strong>
  <span class="dq-profession-card-meta">Acid Breath · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/AcidBreath__967.png" alt="酸蚀吐息" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>酸蚀吐息</strong>
      <small>Acid Breath · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 4&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/acid-lance">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/AcidLance__261.png" alt="酸蚀长矛" loading="eager"></span></span>
  <strong>酸蚀长矛</strong>
  <span class="dq-profession-card-meta">Acid Lance · 法术 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/AcidLance__261.png" alt="酸蚀长矛" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>酸蚀长矛</strong>
      <small>Acid Lance · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>对手获得 &lt;中毒 4&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/acid-rain">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/AcidRain__397.png" alt="酸雨" loading="eager"></span></span>
  <strong>酸雨</strong>
  <span class="dq-profession-card-meta">Acid Rain · 法术 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/AcidRain__397.png" alt="酸雨" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>酸雨</strong>
      <small>Acid Rain · 法术 · 6 阶 · 0 行动点 / 5 法力</small>
      <em>对手获得 &lt;中毒 6&gt;。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">僵尸<em>基础牌组 / 关键行为 / 等级变化 / 优先起手</em></a>
</div>
</section>
<section class="dq-effect-section" id="chilled">
<h2>寒冷 / Chilled</h2>
<p>冰霜系状态，也会降低该角色造成的攻击伤害。</p>
<div class="dq-mechanic-list"><p>被 Chilled 的角色造成攻击伤害时，伤害会减去当前 Chilled 数值，最低降到 0；也就是玩家被寒冷时，玩家自己的攻击伤害会变低。</p>
<p>普通 Chilled 通常持续到目标下个回合结束；Blizzard 给 2 层，Frost Bolt / Frost Charge / Suffocate 给 1 层。重复施加时取较高值，不按次数相加。</p>
<p>Freeze 同时给 Chilled 3 和 BaseChilled 1；BaseChilled 是整场保留的基础寒冷，也按较高值写入。</p>
<p>Blizzard、Freeze、Frost Bolt 的伤害文本会检查目标是否 Chilled；目标已寒冷时，冰霜伤害翻倍。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家被寒冷后，自己的攻击伤害会降低，同时后续冰霜伤害会变得更危险；如果怪物牌组里有多张冰霜牌，寒冷本身就是连锁伤害的前置条件。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/frost-charge">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="eager"></span></span>
  <strong>冰霜充能</strong>
  <span class="dq-profession-card-meta">Frost Charge · 魔力 · 2 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜充能</strong>
      <small>Frost Charge · 魔力 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>获得 3 点法力。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/frost-bolt">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="eager"></span></span>
  <strong>冰霜箭</strong>
  <span class="dq-profession-card-meta">Frost Bolt · 法术 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜箭</strong>
      <small>Frost Bolt · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/freeze">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Freeze__318.png" alt="冻结" loading="eager"></span></span>
  <strong>冻结</strong>
  <span class="dq-profession-card-meta">Freeze · 法术 · 9 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Freeze__318.png" alt="冻结" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冻结</strong>
      <small>Freeze · 法术 · 9 阶 · 0 行动点 / 15 法力</small>
      <em>造成 15 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 3&gt; 直到对手下个回合结束并&lt;寒冷 1&gt; 直到本场战斗结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/blizzard">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="eager"></span></span>
  <strong>暴风雪</strong>
  <span class="dq-profession-card-meta">Blizzard · 法术 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴风雪</strong>
      <small>Blizzard · 法术 · 6 阶 · 0 行动点 / 7 法力</small>
      <em>造成 10 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 2&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/suffocate">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Suffocate__770.png" alt="窒息" loading="eager"></span></span>
  <strong>窒息</strong>
  <span class="dq-profession-card-meta">Suffocate · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Suffocate__770.png" alt="窒息" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>窒息</strong>
      <small>Suffocate · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌并获得&lt;寒冷 1&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/natures-blessing">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/NaturesBlessing__790.png" alt="自然祝福" loading="eager"></span></span>
  <strong>自然祝福</strong>
  <span class="dq-profession-card-meta">Nature's Blessing · 法术 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/NaturesBlessing__790.png" alt="自然祝福" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>自然祝福</strong>
      <small>Nature's Blessing · 法术 · 8 阶 · 0 行动点 / 10 法力</small>
      <em>造成 10 点火焰伤害。对手获得 &lt;中毒 5&gt;和&lt;寒冷 2&gt;。从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">法师<em>基础牌组 / 关键行为 / 等级变化 / 优先起手</em></a>
</div>
</section>
<section class="dq-effect-section" id="weakened">
<h2>虚弱 / Weakened</h2>
<p>提高该角色受到的攻击伤害。解析里分为临时 Weakness 和整场保留的 PermWeakness。</p>
<div class="dq-mechanic-list"><p>被 Weakened 的角色受到攻击伤害时，伤害会按 Weakened 数值增加；也就是玩家被虚弱时，玩家受到的攻击伤害会变多。</p>
<p>临时 Weakness 通常持续本回合：Expose 给 Weakened 2，Skewer 给 Weakened 1，Sundering Strike 系列给 1 / 2 / 3。</p>
<p>The Bleeder 是触发型来源：每打出一张攻击牌，让对手获得 Weakened 1。</p>
<p>Shark Bite / Shark Bite (2) 使用 PermWeakness，分别给 1 / 2 层，持续到本场战斗结束。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家被虚弱后，敌人的攻击伤害会更疼；永久虚弱会影响整场战斗，不适合拖回合。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/expose">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Expose__968.png" alt="揭露" loading="eager"></span></span>
  <strong>揭露</strong>
  <span class="dq-profession-card-meta">Expose · 行动牌 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Expose__968.png" alt="揭露" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>揭露</strong>
      <small>Expose · 行动牌 · 8 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 &lt;虚弱 2&gt; 本回合。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/the-bleeder">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/TheBleeder__993.png" alt="放血者" loading="eager"></span></span>
  <strong>放血者</strong>
  <span class="dq-profession-card-meta">The Bleeder · 装备 · 10 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/TheBleeder__993.png" alt="放血者" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>放血者</strong>
      <small>The Bleeder · 装备 · 10 阶 · 0 行动点 / 0 法力</small>
      <em>当你打出 1 个 攻击牌，对手获得 &lt;虚弱 1&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/sundering-strike">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike__899.png" alt="破甲打击" loading="eager"></span></span>
  <strong>破甲打击</strong>
  <span class="dq-profession-card-meta">Sundering Strike · 攻击 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike__899.png" alt="破甲打击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>破甲打击</strong>
      <small>Sundering Strike · 攻击 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害并对手获得 &lt;虚弱 2&gt; 本回合。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/sundering-strike1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike1__328.png" alt="破甲打击（1）" loading="eager"></span></span>
  <strong>破甲打击（1）</strong>
  <span class="dq-profession-card-meta">Sundering Strike (1) · 攻击 · 7 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike1__328.png" alt="破甲打击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>破甲打击（1）</strong>
      <small>Sundering Strike (1) · 攻击 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害并对手获得 &lt;虚弱 1&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/sundering-strike2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike2__492.png" alt="破甲打击（2）" loading="eager"></span></span>
  <strong>破甲打击（2）</strong>
  <span class="dq-profession-card-meta">Sundering Strike (2) · 攻击 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike2__492.png" alt="破甲打击（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>破甲打击（2）</strong>
      <small>Sundering Strike (2) · 攻击 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害并对手获得 &lt;虚弱 2&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/sundering-strike3">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike3__119.png" alt="破甲打击（3）" loading="eager"></span></span>
  <strong>破甲打击（3）</strong>
  <span class="dq-profession-card-meta">Sundering Strike (3) · 攻击 · 9 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike3__119.png" alt="破甲打击（3）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>破甲打击（3）</strong>
      <small>Sundering Strike (3) · 攻击 · 9 阶 · 0 行动点 / 0 法力</small>
      <em>造成 3 点攻击伤害并对手获得 &lt;虚弱 3&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/skewer">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Skewer__60.png" alt="贯刺" loading="eager"></span></span>
  <strong>贯刺</strong>
  <span class="dq-profession-card-meta">Skewer · 行动牌 · 9 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Skewer__60.png" alt="贯刺" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贯刺</strong>
      <small>Skewer · 行动牌 · 9 阶 · 1 行动点 / 0 法力</small>
      <em>抽 1 张牌。获得 1 行动点。对手获得 &lt;虚弱 1&gt; 本回合。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/shark-bite">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SharkBite__649.png" alt="鲨咬" loading="eager"></span></span>
  <strong>鲨咬</strong>
  <span class="dq-profession-card-meta">Shark Bite · 攻击 · 4 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SharkBite__649.png" alt="鲨咬" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>鲨咬</strong>
      <small>Shark Bite · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。对手获得 &lt;虚弱 1&gt; 直到本场战斗结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/shark-bite2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SharkBite2__482.png" alt="鲨咬（2）" loading="eager"></span></span>
  <strong>鲨咬（2）</strong>
  <span class="dq-profession-card-meta">Shark Bite (2) · 攻击 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SharkBite2__482.png" alt="鲨咬（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>鲨咬（2）</strong>
      <small>Shark Bite (2) · 攻击 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。对手获得 &lt;虚弱 2&gt; 直到本场战斗结束。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">盗贼<em>等级变化 / 优先起手 / 关键行为 / 基础牌组</em></a>
</div>
</section>
<section class="dq-effect-section" id="curses">
<h2>诅咒 / Curses</h2>
<p>牌组污染。Curse 本身通常没有效果，但会占据抽牌、手牌和牌库空间。</p>
<div class="dq-mechanic-list"><p>Curse of Weakness 会把 2 张无效果 Curse 洗入对手牌库，并抽 1 张牌。</p>
<p>Stone 会把 2 张 Curse 洗入对手牌库，并让对手弃 1 张牌。</p>
<p>Deadly Curse 会把对手手牌中的 3 张随机非 Curse 牌替换成 Curse；Infernal Contract 会让对手弃掉整手牌，并按弃牌数量获得同等数量的 Curse。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家被塞入诅咒后，关键牌更难抽到；如果敌人还会按手牌中的诅咒数量造成伤害，污染会直接转化成伤害风险。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/infernal-contract">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/InfernalContract__159.png" alt="炼狱契约" loading="eager"></span></span>
  <strong>炼狱契约</strong>
  <span class="dq-profession-card-meta">Infernal Contract · 行动牌 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/InfernalContract__159.png" alt="炼狱契约" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>炼狱契约</strong>
      <small>Infernal Contract · 行动牌 · 8 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉其手牌，并获得等同于以此弃掉牌数的诅咒牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/stone">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Stone__665.png" alt="石块" loading="eager"></span></span>
  <strong>石块</strong>
  <span class="dq-profession-card-meta">Stone · 行动牌 · 4 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Stone__665.png" alt="石块" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>石块</strong>
      <small>Stone · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>将 2 张无效果诅咒牌洗入对手牌库。对手弃掉 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/deadly-curse">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DeadlyCurse__594.png" alt="致命诅咒" loading="eager"></span></span>
  <strong>致命诅咒</strong>
  <span class="dq-profession-card-meta">Deadly Curse · 行动牌 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DeadlyCurse__594.png" alt="致命诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>致命诅咒</strong>
      <small>Deadly Curse · 行动牌 · 8 阶 · 1 行动点 / 0 法力</small>
      <em>将对手手牌中 3 张随机非诅咒牌替换为诅咒牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/curse-of-weakness">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfWeakness__795.png" alt="虚弱诅咒" loading="eager"></span></span>
  <strong>虚弱诅咒</strong>
  <span class="dq-profession-card-meta">Curse of Weakness · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfWeakness__795.png" alt="虚弱诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>虚弱诅咒</strong>
      <small>Curse of Weakness · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>将 2 张无效果诅咒牌洗入对手牌库。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/curse">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Curse__692.png" alt="诅咒" loading="eager"></span></span>
  <strong>诅咒</strong>
  <span class="dq-profession-card-meta">Curse · 其它 · 0 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Curse__692.png" alt="诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>诅咒</strong>
      <small>Curse · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">美杜莎<em>基础牌组 / 优先起手 / 关键行为 / 等级变化</em></a>
</div>
</section>
<section class="dq-effect-section" id="doom-curse">
<h2>末日诅咒 / Curse of Doom</h2>
<p>延迟穿透伤害牌。三张同名显示牌的后台数值不同，不能合并理解。</p>
<div class="dq-mechanic-list"><p>CurseOfDoom：5 回合后造成 30 点穿透伤害。</p>
<p>CurseOfDoom2：5 回合后造成 50 点穿透伤害。</p>
<p>CurseOfDoomPlayer：玩家可见版本，5 回合后造成 50 点穿透伤害。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>它不是 Zombie Bite 那种延迟死亡状态，而是一张带倒计时的伤害牌；处理重点是倒计时结束前结束战斗、移除牌或准备承受穿透伤害。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/curse-of-doom">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoom__778.png" alt="末日诅咒" loading="eager"></span></span>
  <strong>末日诅咒</strong>
  <span class="dq-profession-card-meta">Curse of Doom · 祈祷 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoom__778.png" alt="末日诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>末日诅咒</strong>
      <small>Curse of Doom · 祈祷 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>5 回合后，造成 30 点&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/curse-of-doom2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoom2__512.png" alt="末日诅咒（2）" loading="eager"></span></span>
  <strong>末日诅咒（2）</strong>
  <span class="dq-profession-card-meta">Curse of Doom · 祈祷 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoom2__512.png" alt="末日诅咒（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>末日诅咒（2）</strong>
      <small>Curse of Doom · 祈祷 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>5 回合后，造成 50 点&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/curse-of-doom-player">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="eager"></span></span>
  <strong>末日诅咒（玩家）</strong>
  <span class="dq-profession-card-meta">Curse of Doom · 祈祷 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>末日诅咒（玩家）</strong>
      <small>Curse of Doom · 祈祷 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>5 回合后，造成 50 点&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">老巫婆<em>基础牌组 / 优先起手 / 关键行为 / 等级变化</em></a>
</div>
</section>
<section class="dq-effect-section" id="burning">
<h2>燃烧 / Burning</h2>
<p>火焰持续伤害。Burn / Burn (2) 会让对手在回合开始时持续受到火焰伤害。</p>
<div class="dq-mechanic-list"><p>Burn：目标每个回合开始时受到 1 点火焰伤害，持续到本场战斗结束。</p>
<p>Burn (2)：目标每个回合开始时受到 2 点火焰伤害，持续到本场战斗结束。</p>
<p>燃烧不是一次性火焰伤害；它会按回合反复结算。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家被燃烧后要评估后续回合的持续伤害，尤其是面对火焰牌组或高抽牌怪物时。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/burn2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="eager"></span></span>
  <strong>灼烧（2）</strong>
  <span class="dq-profession-card-meta">Burn (2) · 攻击 · 4 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>灼烧（2）</strong>
      <small>Burn (2) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 2 点火焰伤害 直到本场战斗结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/burn">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="eager"></span></span>
  <strong>燃烧</strong>
  <span class="dq-profession-card-meta">Burn · 攻击 · 2 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>燃烧</strong>
      <small>Burn · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>对手开始燃烧。在其回合开始时，对手 会受到 1 点火焰伤害 直到本场战斗结束。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">熔岩巨兽<em>优先起手 / 基础牌组</em></a>
</div>
</section>
<section class="dq-effect-section" id="action-loss">
<h2>行动点减少 / Action loss</h2>
<p>限制当前回合或后续战斗行动点。Web、Slow、Solidify、Zap 等都会让对手失去行动点。</p>
<div class="dq-mechanic-list"><p>Web / Slow：对手弃 1 张牌，并失去 1 行动点。</p>
<p>Web (2) / Lightning Breath：对手失去 2 行动点；Web (2) 还会弃 2 张牌。</p>
<p>Solidify：对手弃 3 张牌，并失去 3 行动点。Dragon's Tail / Zap 会清空对手当前行动点。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家行动点减少后，可能无法打出关键行动牌、装备或补救牌；这里只列减少行动点的卡，不列获得行动点的正收益牌。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/solidify">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="eager"></span></span>
  <strong>固化</strong>
  <span class="dq-profession-card-meta">Solidify · 法术 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>固化</strong>
      <small>Solidify · 法术 · 6 阶 · 0 行动点 / 8 法力</small>
      <em>对手弃掉 3 张牌并失去 3 行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/zap">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="eager"></span></span>
  <strong>电弧</strong>
  <span class="dq-profession-card-meta">Zap · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电弧</strong>
      <small>Zap · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>对手 失去 所有 法力并行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/web">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <strong>蛛网</strong>
  <span class="dq-profession-card-meta">Web · 行动牌 · 2 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网</strong>
      <small>Web · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/web2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="eager"></span></span>
  <strong>蛛网（2）</strong>
  <span class="dq-profession-card-meta">Web (2) · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网（2）</strong>
      <small>Web (2) · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌并失去 2 行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/slow">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="eager"></span></span>
  <strong>迟缓</strong>
  <span class="dq-profession-card-meta">Slow · 法术 · 2 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>迟缓</strong>
      <small>Slow · 法术 · 2 阶 · 0 行动点 / 3 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/lightning-breath">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/LightningBreath__871.png" alt="闪电吐息" loading="eager"></span></span>
  <strong>闪电吐息</strong>
  <span class="dq-profession-card-meta">Lightning Breath · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/LightningBreath__871.png" alt="闪电吐息" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>闪电吐息</strong>
      <small>Lightning Breath · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>造成 5 点电系伤害。对手失去 2 行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/dragons-tail">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsTail__832.png" alt="龙尾" loading="eager"></span></span>
  <strong>龙尾</strong>
  <span class="dq-profession-card-meta">Dragon's Tail · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsTail__832.png" alt="龙尾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙尾</strong>
      <small>Dragon's Tail · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>造成 3 点攻击伤害。对手 失去 所有 对手的 行动点并法力。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">阿卡米萨满<em>等级变化 / 基础牌组 / 优先起手 / 关键行为</em></a>
</div>
</section>
<section class="dq-effect-section" id="hand-disruption">
<h2>弃牌与放逐 / Discard &amp; Exile</h2>
<p>直接破坏手牌。弃牌会把牌送走，放逐会让牌离开本场战斗的常规循环。</p>
<div class="dq-mechanic-list"><p>Web / Slow / Stone：弃 1 张牌；Web (2) / Frost Breath / Scream / Suffocate：弃 2 张牌；Dragon's Roar / Solidify / Stasis：弃 3 张牌。</p>
<p>Kick 是随机弃 1 张牌；Beckon 随机放逐 2 张对手手牌；Digest 随机放逐 1 张对手手牌。</p>
<p>Deadly Curse 不是普通弃牌：它把 3 张随机非 Curse 手牌替换成 Curse。Infernal Contract 会弃掉整手牌，并按弃牌数量获得 Curse。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家需要避免把关键牌长时间留在手牌里；面对放逐效果时，单张核心牌策略风险更高。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/stasis">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Stasis__380.png" alt="停滞" loading="eager"></span></span>
  <strong>停滞</strong>
  <span class="dq-profession-card-meta">Stasis · 法术 · 9 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Stasis__380.png" alt="停滞" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>停滞</strong>
      <small>Stasis · 法术 · 9 阶 · 0 行动点 / 5 法力</small>
      <em>抽 3 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/frost-breath">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostBreath__424.png" alt="冰霜吐息" loading="eager"></span></span>
  <strong>冰霜吐息</strong>
  <span class="dq-profession-card-meta">Frost Breath · 行动牌 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostBreath__424.png" alt="冰霜吐息" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜吐息</strong>
      <small>Frost Breath · 行动牌 · 8 阶 · 1 行动点 / 0 法力</small>
      <em>造成 5 点冰霜伤害。对手弃掉 2 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/frost-bolt">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="eager"></span></span>
  <strong>冰霜箭</strong>
  <span class="dq-profession-card-meta">Frost Bolt · 法术 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冰霜箭</strong>
      <small>Frost Bolt · 法术 · 3 阶 · 0 行动点 / 3 法力</small>
      <em>造成 4 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/beckon">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="eager"></span></span>
  <strong>召唤</strong>
  <span class="dq-profession-card-meta">Beckon · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>召唤</strong>
      <small>Beckon · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>放逐 2 牌 随机 从 对手手牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/solidify">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="eager"></span></span>
  <strong>固化</strong>
  <span class="dq-profession-card-meta">Solidify · 法术 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>固化</strong>
      <small>Solidify · 法术 · 6 阶 · 0 行动点 / 8 法力</small>
      <em>对手弃掉 3 张牌并失去 3 行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/scream">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="eager"></span></span>
  <strong>尖叫</strong>
  <span class="dq-profession-card-meta">Scream · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>尖叫</strong>
      <small>Scream · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/digest">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Digest__343.png" alt="消化" loading="eager"></span></span>
  <strong>消化</strong>
  <span class="dq-profession-card-meta">Digest · 行动牌 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Digest__343.png" alt="消化" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>消化</strong>
      <small>Digest · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>对手随机从手牌中放逐 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/infernal-contract">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/InfernalContract__159.png" alt="炼狱契约" loading="eager"></span></span>
  <strong>炼狱契约</strong>
  <span class="dq-profession-card-meta">Infernal Contract · 行动牌 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/InfernalContract__159.png" alt="炼狱契约" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>炼狱契约</strong>
      <small>Infernal Contract · 行动牌 · 8 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉其手牌，并获得等同于以此弃掉牌数的诅咒牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/stone">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Stone__665.png" alt="石块" loading="eager"></span></span>
  <strong>石块</strong>
  <span class="dq-profession-card-meta">Stone · 行动牌 · 4 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Stone__665.png" alt="石块" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>石块</strong>
      <small>Stone · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>将 2 张无效果诅咒牌洗入对手牌库。对手弃掉 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/suffocate">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Suffocate__770.png" alt="窒息" loading="eager"></span></span>
  <strong>窒息</strong>
  <span class="dq-profession-card-meta">Suffocate · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Suffocate__770.png" alt="窒息" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>窒息</strong>
      <small>Suffocate · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌并获得&lt;寒冷 1&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/deadly-curse">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DeadlyCurse__594.png" alt="致命诅咒" loading="eager"></span></span>
  <strong>致命诅咒</strong>
  <span class="dq-profession-card-meta">Deadly Curse · 行动牌 · 8 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DeadlyCurse__594.png" alt="致命诅咒" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>致命诅咒</strong>
      <small>Deadly Curse · 行动牌 · 8 阶 · 1 行动点 / 0 法力</small>
      <em>将对手手牌中 3 张随机非诅咒牌替换为诅咒牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/web">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="eager"></span></span>
  <strong>蛛网</strong>
  <span class="dq-profession-card-meta">Web · 行动牌 · 2 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网</strong>
      <small>Web · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/web2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="eager"></span></span>
  <strong>蛛网（2）</strong>
  <span class="dq-profession-card-meta">Web (2) · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>蛛网（2）</strong>
      <small>Web (2) · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 2 张牌并失去 2 行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/kick">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Kick__953.png" alt="踢击" loading="eager"></span></span>
  <strong>踢击</strong>
  <span class="dq-profession-card-meta">Kick · 行动牌 · 3 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Kick__953.png" alt="踢击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>踢击</strong>
      <small>Kick · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。对手随机弃掉 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/slow">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="eager"></span></span>
  <strong>迟缓</strong>
  <span class="dq-profession-card-meta">Slow · 法术 · 2 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>迟缓</strong>
      <small>Slow · 法术 · 2 阶 · 0 行动点 / 3 法力</small>
      <em>对手弃掉 1 张牌并失去 1 点行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/dragons-roar">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsRoar__722.png" alt="龙吼" loading="eager"></span></span>
  <strong>龙吼</strong>
  <span class="dq-profession-card-meta">Dragon's Roar · 行动牌 · 7 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsRoar__722.png" alt="龙吼" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙吼</strong>
      <small>Dragon's Roar · 行动牌 · 7 阶 · 1 行动点 / 0 法力</small>
      <em>对手弃掉 3 张牌。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">白龙<em>基础牌组 / 优先起手 / 关键行为 / 等级变化</em></a>
</div>
</section>
<section class="dq-effect-section" id="hand-limit">
<h2>最大手牌减少 / Max hand loss</h2>
<p>降低最大手牌数。当前解析到的实际卡牌来源是 Entrap。</p>
<div class="dq-mechanic-list"><p>Entrap 的文本明确写着 maximum hand size is reduced by 1，并且会额外弃 1 张牌。</p>
<p>最大手牌减少会让后续回合更容易爆手牌、少拿抽牌收益。</p>
<p>这个分类只收录真正降低最大手牌数的卡牌，不收录按最大手牌数提供收益的卡牌。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家被减最大手牌后，抽牌牌和保留牌的价值下降；如果战斗继续拖长，资源上限会被持续压低。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/entrap">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Entrap__1035.png" alt="诱捕" loading="eager"></span></span>
  <strong>诱捕</strong>
  <span class="dq-profession-card-meta">Entrap · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Entrap__1035.png" alt="诱捕" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>诱捕</strong>
      <small>Entrap · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>对手手牌上限减少 1。对手弃掉 1 张牌。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">海怪<em>基础牌组 / 优先起手</em></a>
</div>
</section>
<section class="dq-effect-section" id="mana-drain">
<h2>法力清空 / Mana drain</h2>
<p>清空当前法力或减少法力上限。Choke、Zap、Mana Drain 等会直接破坏法力计划。</p>
<div class="dq-mechanic-list"><p>Choke：造成 3 点攻击伤害，并让对手失去全部当前法力。</p>
<p>Zap：让对手失去全部当前法力和全部当前行动点。</p>
<p>Mana Drain：让对手失去 5 点法力，并把实际失去的法力转给使用者。Dragon's Tail 也会同时清空对手行动点和法力。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家依赖法术或高费牌时，法力清空会直接打断整回合计划。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/choke">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Choke__500.png" alt="扼喉" loading="eager"></span></span>
  <strong>扼喉</strong>
  <span class="dq-profession-card-meta">Choke · 行动牌 · 4 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Choke__500.png" alt="扼喉" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>扼喉</strong>
      <small>Choke · 行动牌 · 4 阶 · 1 行动点 / 0 法力</small>
      <em>造成 3 点攻击伤害。对手失去所有法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/mana-drain">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ManaDrain__88.png" alt="法力吸取" loading="eager"></span></span>
  <strong>法力吸取</strong>
  <span class="dq-profession-card-meta">Mana Drain · 行动牌 · 2 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ManaDrain__88.png" alt="法力吸取" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力吸取</strong>
      <small>Mana Drain · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>对手失去 5 点法力。你获得等同于其以此失去数量的法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/zap">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="eager"></span></span>
  <strong>电弧</strong>
  <span class="dq-profession-card-meta">Zap · 行动牌 · 6 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电弧</strong>
      <small>Zap · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>对手 失去 所有 法力并行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/dragons-tail">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsTail__832.png" alt="龙尾" loading="eager"></span></span>
  <strong>龙尾</strong>
  <span class="dq-profession-card-meta">Dragon's Tail · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsTail__832.png" alt="龙尾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙尾</strong>
      <small>Dragon's Tail · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>造成 3 点攻击伤害。对手 失去 所有 对手的 行动点并法力。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">积雨云<em>基础牌组 / 优先起手</em></a>
</div>
</section>
<section class="dq-effect-section" id="equipment-destruction">
<h2>装备破坏 / Equipment destruction</h2>
<p>移除装备。Crush 破坏单个装备，Crush Everything 破坏全部装备。</p>
<div class="dq-mechanic-list"><p>Crush：破坏 1 张装备牌；如果成功破坏，额外造成 3 点攻击伤害。</p>
<p>Crush Everything：破坏对手所有装备，并放逐自身。</p>
<p>如果牌组没有备份输出，失去装备可能比一次伤害更致命。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家应避免把全部强度压在单套装备上，尤其面对会使用 Crush 或 Crush Everything 的怪物。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/crush">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Crush__623.png" alt="碾碎" loading="eager"></span></span>
  <strong>碾碎</strong>
  <span class="dq-profession-card-meta">Crush · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Crush__623.png" alt="碾碎" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>碾碎</strong>
      <small>Crush · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>摧毁 1 张装备牌。如果如此，造成 3 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/crush-all">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CrushAll__400.png" alt="碾碎一切" loading="eager"></span></span>
  <strong>碾碎一切</strong>
  <span class="dq-profession-card-meta">Crush Everything · 行动牌 · 5 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CrushAll__400.png" alt="碾碎一切" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>碾碎一切</strong>
      <small>Crush Everything · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>摧毁对手所有装备。放逐 此 牌。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/lord-of-the-dream">Lord of the Dream 最终战机制<em>相关来源</em></a>
<a href="/monsters/">战士<em>等级变化 / 基础牌组</em></a>
</div>
</section>
<section class="dq-effect-section" id="delayed-death">
<h2>延迟死亡 / Delayed lethal</h2>
<p>给玩家一个死亡倒计时。当前按卡牌效果归类的来源是 Zombie Bite。</p>
<div class="dq-mechanic-list"><p>Zombie Bite 会给目标 5 层 diseased。</p>
<p>目标每个回合开始时失去 1 层 diseased；当最后 1 层被移除时，目标死亡。</p>
<p>这个分类只收录敌方施加的死亡倒计时，不收录延迟伤害牌或使用者自担风险牌。</p></div>
<section class="dq-callout"><strong>玩家影响</strong><span>玩家看到倒计时后需要改变目标优先级：要么在计时结束前结束战斗，要么准备免疫、治疗或其他解法。</span></section>
<h3>相关卡牌</h3>
<div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/zombie-bite">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ZombieBite__710.png" alt="僵尸撕咬" loading="eager"></span></span>
  <strong>僵尸撕咬</strong>
  <span class="dq-profession-card-meta">Zombie Bite · 行动牌 · 1 阶</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ZombieBite__710.png" alt="僵尸撕咬" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>僵尸撕咬</strong>
      <small>Zombie Bite · 行动牌 · 1 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 5 层疾病。在对手回合开始时，对手失去 1 层疾病。当 最后一层被移除时，对手 死亡。</em>
    </span>
  </span>
</a>
</div>
<h3>怪物来源</h3>
<div class="dq-mini-tag-row">
<a href="/monsters/">僵尸<em>基础牌组 / 优先起手</em></a>
</div>
</section>
