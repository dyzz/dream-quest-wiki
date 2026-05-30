---
title: "德鲁伊"
description: "Shapeshifting：每场战斗后，德鲁伊在人形和狼形之间切换。人形牌组没有攻击牌，狼形没有法力和法术牌。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>德鲁伊</h1>
    <span class="dq-original">原名：Druid</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-unlock" title="不删除牌通关后解锁。">成就解锁</span><span>ProfessionDruid</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionDruid__901.png" alt="德鲁伊" loading="lazy">
  </div>
</section>



<section class="dq-stat-row dq-stat-row-wide">
<span class="dq-stat"><strong>15</strong>生命</span>
<span class="dq-stat"><strong>2</strong>法力</span>
<span class="dq-stat"><strong>2</strong>手牌</span>
<span class="dq-stat"><strong>1</strong>行动点</span>
<span class="dq-stat"><strong>0</strong>金币</span>
<span class="dq-stat"><strong>0</strong>装备槽</span>
</section>

<section class="dq-section-block">
  <h2>职业解析数据</h2>
  <table class="dq-data-table">
    <thead><tr><th>字段</th><th>解析值</th></tr></thead>
    <tbody>
      <tr><td>中文名</td><td>德鲁伊</td></tr>
      <tr><td>英文名</td><td>Druid</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionDruid</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-unlock" title="不删除牌通关后解锁。">成就解锁</span></td></tr>
      <tr><td>职业能力</td><td>Shapeshifting：每场战斗后，德鲁伊在人形和狼形之间切换。人形牌组没有攻击牌，狼形没有法力和法术牌。<p class="dq-original">原文：Shapeshifting: After each combat, the druid alternates forms between human and wolf.  In human form, her deck has no attack cards while as a wolf she has neither mana nor spell cards.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 2 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>选择生命奖励时最大生命 +2。</td></tr>
      <tr><td>职业权重 ID</td><td>12、14</td></tr>
    </tbody>
  </table>
</section>



<section class="dq-section-block">
  <h2>升级与固定奖励</h2>
  <p class="dq-note">职业升级会先处理特定等级主奖励；其中 3 级和 6 级常解锁战斗技能、地牢技能或专属强化。只有进入随机卡奖励时，才会从 LowCards / MidCards / HighCards 的职业卡表中抽取。</p>
  <div class="dq-reward-summary">
    <div>
      <strong>升级选项池</strong>
      <div class="dq-tag-row"><span>生命增加 / HP +2</span>
<span>法力增加</span>
<span>行动点增加</span>
<span>卡牌奖励</span>
<span>升级牌</span>
<span>删除牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>选择生命奖励时，最大生命增加 2 点。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>max(法师, 0.75 × 战士)</p>
      <p class="dq-note">偏向法术，同时保留一部分战士权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySummonAllies__43.png" alt="Summon Allies" loading="lazy"><span><strong>召唤盟友</strong><small>Summon Allies</small></span></span></td><td>在本场战斗剩余期间召唤 3 个同伴。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySummonBear__45.png" alt="Summon Bear" loading="lazy"><span><strong>召唤熊</strong><small>Summon Bear</small></span></span></td><td>在本场战斗剩余期间召唤 1 只熊。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>通用</td><td>卡牌</td><td>1 张低阶卡</td><td>固定奖励入口给 1 张 1-4 阶卡，再由职业卡表抽取。</td></tr>
  </tbody>
</table>
</section>

<section class="dq-two-column">
  <div>
    <h2>起始牌组</h2>
    <div class="dq-deck-grid">
      <a class="dq-profession-card-link dq-deck-card-link" href="/cards/attack1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <strong>攻击（1）</strong>
  <span class="dq-profession-card-meta">Attack (1) · x5</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（1）</strong>
      <small>Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/rake">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Rake__56.png" alt="撕抓" loading="eager"></span></span>
  <strong>撕抓</strong>
  <span class="dq-profession-card-meta">Rake · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Rake__56.png" alt="撕抓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>撕抓</strong>
      <small>Rake · 攻击 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>如果对手生命不少于一半，对手获得 &lt;中毒 3&gt;。否则，造成 3 点攻击伤害 并按对手每层中毒额外造成 1 点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/mana1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="eager"></span></span>
  <strong>法力（1）</strong>
  <span class="dq-profession-card-meta">Mana (1) · x3</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（1）</strong>
      <small>Mana (1) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 2 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/summon-companions">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SummonCompanions__452.png" alt="召唤伙伴" loading="eager"></span></span>
  <strong>召唤伙伴</strong>
  <span class="dq-profession-card-meta">Summon Companions · x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SummonCompanions__452.png" alt="召唤伙伴" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>召唤伙伴</strong>
      <small>Summon Companions · 法术 · 1 阶 · 0 行动点 / 2 法力</small>
      <em>抽取 狼、龟 或 鹰 中的 1 张。该牌为&lt;临时&gt;。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Nala, the Wild</span>
<span>Sarah Stormborn</span>
<span>Ferala</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>12、14</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>max(法师, 0.75 × 战士)</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 2 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加 / HP +2、法力增加、行动点增加、卡牌奖励、升级牌、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 12 · 德鲁伊</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 14 · 吟游诗人 / 德鲁伊 / 武士 / 法师 / 游侠 / 龙</a></div>
  </div>
  </div>
</section>

<section class="dq-section-block dq-profession-card-info">
  <h2>职业专属卡牌</h2>
  <p class="dq-note">只列只有该职业能通过初始牌组、固定升级奖励或职业专属机制获得的特色牌；可从普通卡池获得的起手牌不列入。</p>
  <div class="dq-profession-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/summon-companions">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/SummonCompanions__452.png" alt="召唤伙伴" loading="eager"></span></span>
  <strong>召唤伙伴</strong>
  <span class="dq-profession-card-meta">Summon Companions · 法术 · 1 阶 · 0 行动点 / 2 法力 · 初始牌 x2 / 召唤同伴</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/SummonCompanions__452.png" alt="召唤伙伴" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>召唤伙伴</strong>
      <small>Summon Companions · 法术 · 1 阶 · 0 行动点 / 2 法力</small>
      <em>抽取 狼、龟 或 鹰 中的 1 张。该牌为&lt;临时&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/rake">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Rake__56.png" alt="撕抓" loading="eager"></span></span>
  <strong>撕抓</strong>
  <span class="dq-profession-card-meta">Rake · 攻击 · 3 阶 · 0 行动点 / 0 法力 · 初始牌 x1 / 狼形态专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Rake__56.png" alt="撕抓" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>撕抓</strong>
      <small>Rake · 攻击 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>如果对手生命不少于一半，对手获得 &lt;中毒 3&gt;。否则，造成 3 点攻击伤害 并按对手每层中毒额外造成 1 点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/wolf">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Wolf__346.png" alt="狼" loading="eager"></span></span>
  <strong>狼</strong>
  <span class="dq-profession-card-meta">Wolf · 行动牌 · 3 阶 · 0 行动点 / 0 法力 · 召唤同伴</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Wolf__346.png" alt="狼" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>狼</strong>
      <small>Wolf · 行动牌 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>对手获得 &lt;中毒 3&gt;。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/eagle">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Eagle__389.png" alt="鹰" loading="eager"></span></span>
  <strong>鹰</strong>
  <span class="dq-profession-card-meta">Eagle · 行动牌 · 3 阶 · 0 行动点 / 0 法力 · 召唤同伴</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Eagle__389.png" alt="鹰" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>鹰</strong>
      <small>Eagle · 行动牌 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/turtle">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Turtle__135.png" alt="龟" loading="eager"></span></span>
  <strong>龟</strong>
  <span class="dq-profession-card-meta">Turtle · 行动牌 · 3 阶 · 0 行动点 / 0 法力 · 召唤同伴</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Turtle__135.png" alt="龟" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龟</strong>
      <small>Turtle · 行动牌 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>防止你将受到的接下来 6 点伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/bear">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Bear__560.png" alt="熊" loading="eager"></span></span>
  <strong>熊</strong>
  <span class="dq-profession-card-meta">Bear · 装备 · 6 阶 · 0 行动点 / 0 法力 · Summon Bear</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Bear__560.png" alt="熊" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>熊</strong>
      <small>Bear · 装备 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，造成 3 点攻击伤害 对手。每回合防止你受到的前 3 点物理伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/maul">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Maul__393.png" alt="猛击" loading="eager"></span></span>
  <strong>猛击</strong>
  <span class="dq-profession-card-meta">Maul · 攻击 · 6 阶 · 0 行动点 / 0 法力 · 狼形态专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Maul__393.png" alt="猛击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>猛击</strong>
      <small>Maul · 攻击 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>如果对手生命不少于一半，造成 5 点攻击伤害并防止你将受到的接下来 10 点伤害。否则，造成 10 点&lt;穿透&gt;伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/bite">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Bite__565.png" alt="撕咬" loading="eager"></span></span>
  <strong>撕咬</strong>
  <span class="dq-profession-card-meta">Bite · 攻击 · 8 阶 · 0 行动点 / 0 法力 · 狼形态专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Bite__565.png" alt="撕咬" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>撕咬</strong>
      <small>Bite · 攻击 · 8 阶 · 0 行动点 / 0 法力</small>
      <em>如果对手生命不少于一半，造成 5 点攻击伤害并抽 1 张牌。否则，造成 5 点攻击伤害并回复 5 点生命。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/natures-blessing">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/NaturesBlessing__790.png" alt="自然祝福" loading="eager"></span></span>
  <strong>自然祝福</strong>
  <span class="dq-profession-card-meta">Nature's Blessing · 法术 · 8 阶 · 0 行动点 / 10 法力 · Druid 专属</span>
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
</section>

## 战斗技能详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySummonAllies__43.png" alt="Summon Allies" loading="eager"></span>
  <span>
    <strong>召唤盟友</strong>
    <small>Summon Allies · 冷却 3</small>
    <em>在本场战斗剩余期间召唤 3 个同伴。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySummonBear__45.png" alt="Summon Bear" loading="eager"></span>
  <span>
    <strong>召唤熊</strong>
    <small>Summon Bear · 冷却 3</small>
    <em>在本场战斗剩余期间召唤 1 只熊。</em>
  </span>
</div>
</section>



<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
