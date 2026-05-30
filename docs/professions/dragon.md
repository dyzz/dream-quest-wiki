---
title: "龙"
description: "Devour：每 3 场战斗可吞噬一个可见普通非首领生物，获得经验和吞噬收益。Hoard：花费金币换取龙族成长，费用随已使用次数提高。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>龙</h1>
    <span class="dq-original">原名：Dragon</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-unlock" title="用所有进阶职业通关后解锁。">成就解锁</span><span>ProfessionDragon</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionDragon__827.png" alt="龙" loading="lazy">
  </div>
</section>



<section class="dq-stat-row dq-stat-row-wide">
<span class="dq-stat"><strong>15</strong>生命</span>
<span class="dq-stat"><strong>0</strong>法力</span>
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
      <tr><td>中文名</td><td>龙</td></tr>
      <tr><td>英文名</td><td>Dragon</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionDragon</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-unlock" title="用所有进阶职业通关后解锁。">成就解锁</span></td></tr>
      <tr><td>职业能力</td><td>Devour：每 3 场战斗可吞噬一个可见普通非首领生物，获得经验和吞噬收益。Hoard：花费金币换取龙族成长，费用随已使用次数提高。<p class="dq-original">原文：Devour: Every three combats the dragon may devour a non-boss creature, gaining experience as well as other benefits. 
 Hoard: The dragon may spend gold to increase the size of its hoard, gaining draconic abilities in the process.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 0 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>选择生命奖励时最大生命 +2。</td></tr>
      <tr><td>职业权重 ID</td><td>14</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>职业机制数据</h2>
  <h3>Devour 吞噬奖励</h3>
<p class="dq-note">Devour 和 Dragon's Snack 的“如同吞噬”都会进入同一套奖励表。先获得目标怪物经验，再按怪物的 Devour 类型结算额外收益。</p>
<table class="dq-data-table">
  <thead><tr><th>类型 ID</th><th>类型</th><th>代表生物</th><th>吞噬收益</th></tr></thead>
  <tbody>
<tr><td>1</td><td>Goblin / 野兽型</td><td>Giant Spider、Goblin、Goblin Hoarder、Harpy、Kobold、Orc、Piranha、Wyvern</td><td>完全回复生命；不增加最大生命。</td></tr>
<tr><td>2</td><td>Magic / 法术型</td><td>Akami 系、Chromatic Demon、Genie、Mage、Pixie、Sphinx、Wisp</td><td>获得法力 +max(1, floor(怪物等级 / 2))，并随机获得一张火焰、冰霜、毒性或电系法术。</td></tr>
<tr><td>3</td><td>Undead / 亡灵型</td><td>Banshee、Ghost、Ghoul、Lich、Skeleton、Vampire、Wraith、Zombie</td><td>75% 受到等同怪物等级的伤害；25% 获得 +1 Card，也就是每回合抽牌/手牌 +1。</td></tr>
<tr><td>4</td><td>Human / 装备型</td><td>Clone、Goblin Mechanist、Mime、Mimic、Warrior</td><td>获得 +1 Equipment Slot，也就是装备槽 +1。</td></tr>
<tr><td>5</td><td>Priest / 净化型</td><td>Demon、Disciple of Chaos、Hag、Medusa、Priest、Siren</td><td>打开 Delete2 删除牌奖励，可从牌组中删除 2 张牌。</td></tr>
<tr><td>6</td><td>Giant / 巨型型</td><td>Gelatinous Cube、Giant Shark、Kraken、Goblin King、Griffon、Hydra、Stone Golem、Storm Giant、Titan、Treant、Troll、Unicorn</td><td>获得最大生命 +max(1, 怪物等级)。</td></tr>
<tr><td>7</td><td>Thief / 迅捷型</td><td>Akami Stormcaller、Brownie、Faerie Rogue、Thief、Ussuri 系</td><td>获得 +1 Action，也就是行动点 +1。</td></tr>
<tr><td>8</td><td>Fire / 火焰型</td><td>Fire Elemental、Magmadon、Phoenix、Red Dragon</td><td>获得法力 +max(1, floor(怪物等级 / 2))，并获得一张火焰法术。</td></tr>
<tr><td>9</td><td>Frost / 冰霜型</td><td>Ice Queen、Water Elemental、White Dragon</td><td>获得法力 +max(1, floor(怪物等级 / 2))，并获得一张冰霜法术。</td></tr>
<tr><td>10</td><td>Poison / 毒性型</td><td>Shadow Dragon、Earth Elemental</td><td>获得法力 +max(1, floor(怪物等级 / 2))，并获得一张毒性法术。</td></tr>
<tr><td>11</td><td>Lightning / 电系型</td><td>Air Elemental、Yellow Dragon</td><td>获得法力 +max(1, floor(怪物等级 / 2))，并获得一张电系法术。</td></tr>
  </tbody>
</table>
<h3>法术型吞噬牌表</h3>
<p class="dq-note">Magic 型随机选择一个元素；Fire / Frost / Poison / Lightning 型固定元素。法术强度随楼层深度提升。</p>
<table class="dq-data-table">
  <thead><tr><th>元素</th><th>低层奖励</th><th>中层奖励</th><th>高层奖励</th></tr></thead>
  <tbody>
<tr><td>火焰</td><td><a href="/cards/fireball">Fireball</a></td><td><a href="/cards/meteor">Meteor</a></td><td><a href="/cards/conflagration">Conflagration</a></td></tr>
<tr><td>冰霜</td><td><a href="/cards/frost-bolt">Frost Bolt</a></td><td><a href="/cards/blizzard">Blizzard</a></td><td><a href="/cards/freeze">Freeze</a></td></tr>
<tr><td>毒性</td><td><a href="/cards/acid-lance">Acid Lance</a></td><td><a href="/cards/acid-rain">Acid Rain</a></td><td><a href="/cards/blight">Blight</a></td></tr>
<tr><td>电系</td><td><a href="/cards/shock">Shock</a></td><td><a href="/cards/electrocute">Electrocute</a></td><td><a href="/cards/storm">Storm</a></td></tr>
  </tbody>
</table>
<h3>Hoard 地城行动与成就强化</h3>
<table class="dq-data-table">
  <thead><tr><th>环节</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>按钮与费用</td><td>按钮显示为 Hoard (X Gold)。第 n 次使用前的费用是 10 + 5 × n，n 从 0 开始；前三次分别是 10、15、20 金币。</td></tr>
<tr><td>使用条件</td><td>必须轮到当前角色、当前金币不少于费用，并且 Hoard 的 currentCooldown 为 0。Hoard 自身没有普通职业技能那种固定战斗冷却。</td></tr>
<tr><td>支付与窗口</td><td>使用时先扣除金币，然后打开 New Power! / Choose One: 奖励窗口。</td></tr>
<tr><td>未强化档位</td><td>未完成 WinDragon2 / Unlikely Champion 时，两个候选奖励按当前费用和 2 倍当前费用生成。费用越高，候选成长越强。</td></tr>
<tr><td>成就强化</td><td>完成 WinDragon2 / Unlikely Champion 后，Hoard 自身被强化：候选奖励从“费用 / 2 倍费用”提升为“2 倍费用 / 3 倍费用”。</td></tr>
<tr><td>强化不改变的部分</td><td>WinDragon2 不改变 Hoard 的入口、费用公式、金币支付或已使用次数；它只提高这次 Hoard 生成奖励时使用的奖励档位。</td></tr>
<tr><td>实际例子</td><td>如果当前 Hoard 费用是 20 金币，未强化时按 20 / 40 生成两个候选奖励；完成 WinDragon2 后仍支付 20 金币，但候选奖励按 40 / 60 生成。</td></tr>
<tr><td>完成选择</td><td>选完奖励后，Hoard 的已使用次数 +1，并刷新角色能力显示；下一次 Hoard 费用随之提高。</td></tr>
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
<span>装备槽增加</span>
<span>卡牌奖励</span>
<span>删除牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>选择生命奖励时，最大生命增加 2 点。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>max(战士, 法师)</p>
      <p class="dq-note">用更高的一侧作为基础权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>资源</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="Gold" loading="lazy"><span><strong>金币奖励</strong><small>Gold</small></span></span></td><td>获得金币奖励，不进入随机卡表。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>资源</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="Gold" loading="lazy"><span><strong>金币奖励</strong><small>Gold</small></span></span></td><td>获得金币奖励，不进入随机卡表。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>卡牌</td><td><a class="dq-card-chip dq-fixed-reward-card" href="/cards/dragons-wisdom">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsWisdom__1011.png" alt="龙之智慧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>龙之智慧</strong><small>Dragon's Wisdom · 固定卡牌</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsWisdom__1011.png" alt="龙之智慧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙之智慧</strong>
      <small>Dragon's Wisdom · 魔力 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>获得 10 点法力。</em>
    </span>
  </span>
</a></td><td>固定卡牌奖励，概率 100%。</td></tr>
<tr><td>5 级</td><td>卡牌</td><td><a class="dq-card-chip dq-fixed-reward-card" href="/cards/dragons-snack">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsSnack__994.png" alt="龙之点心" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>龙之点心</strong><small>Dragon's Snack · 固定卡牌</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsSnack__994.png" alt="龙之点心" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙之点心</strong>
      <small>Dragon's Snack · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>如果对手生命不超过 5 点，则其死亡。若以此方式死亡，你获得如同吞噬该对手的收益。</em>
    </span>
  </span>
</a></td><td>固定卡牌奖励；处决生命不超过 5 的对手，并按吞噬结算。</td></tr>
<tr><td>7 级</td><td>卡牌</td><td><a class="dq-card-chip dq-fixed-reward-card" href="/cards/dragons-wisdom">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsWisdom__1011.png" alt="龙之智慧" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>龙之智慧</strong><small>Dragon's Wisdom · 固定卡牌</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsWisdom__1011.png" alt="龙之智慧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙之智慧</strong>
      <small>Dragon's Wisdom · 魔力 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>获得 10 点法力。</em>
    </span>
  </span>
</a></td><td>固定卡牌奖励，概率 100%。</td></tr>
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
  <span class="dq-profession-card-meta">Attack (1) · x7</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（1）</strong>
      <small>Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/dragons-claw1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw1__854.png" alt="龙爪（1）" loading="eager"></span></span>
  <strong>龙爪（1）</strong>
  <span class="dq-profession-card-meta">Dragon's Claw (1) · x2</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw1__854.png" alt="龙爪（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙爪（1）</strong>
      <small>Dragon's Claw (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/dragons-bite">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsBite__351.png" alt="龙咬" loading="eager"></span></span>
  <strong>龙咬</strong>
  <span class="dq-profession-card-meta">Dragon's Bite · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsBite__351.png" alt="龙咬" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙咬</strong>
      <small>Dragon's Bite · 攻击 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害；场上每有 1 张 龙爪，额外造成 2 点攻击伤害。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Archaex</span>
<span>Salazaar</span>
<span>Pygmalion</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>14</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>max(战士, 法师)</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 0 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加 / HP +2、法力增加、行动点增加、装备槽增加、卡牌奖励、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 14 · 吟游诗人 / 德鲁伊 / 武士 / 法师 / 游侠 / 龙</a></div>
  </div>
  </div>
</section>

<section class="dq-section-block dq-profession-card-info">
  <h2>职业专属卡牌</h2>
  <p class="dq-note">只列只有该职业能通过初始牌组、固定升级奖励或职业专属机制获得的特色牌；可从普通卡池获得的起手牌不列入。</p>
  <div class="dq-profession-card-grid">
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-claw1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw1__854.png" alt="龙爪（1）" loading="eager"></span></span>
  <strong>龙爪（1）</strong>
  <span class="dq-profession-card-meta">Dragon's Claw (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力 · 初始牌 x2 / Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw1__854.png" alt="龙爪（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙爪（1）</strong>
      <small>Dragon's Claw (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-claw2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw2__421.png" alt="龙爪（2）" loading="eager"></span></span>
  <strong>龙爪（2）</strong>
  <span class="dq-profession-card-meta">Dragon's Claw (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力 · Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw2__421.png" alt="龙爪（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙爪（2）</strong>
      <small>Dragon's Claw (2) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-snack">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsSnack__994.png" alt="龙之点心" loading="eager"></span></span>
  <strong>龙之点心</strong>
  <span class="dq-profession-card-meta">Dragon's Snack · 行动牌 · 3 阶 · 1 行动点 / 0 法力 · 5 级固定奖励 / Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsSnack__994.png" alt="龙之点心" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙之点心</strong>
      <small>Dragon's Snack · 行动牌 · 3 阶 · 1 行动点 / 0 法力</small>
      <em>如果对手生命不超过 5 点，则其死亡。若以此方式死亡，你获得如同吞噬该对手的收益。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-bite">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsBite__351.png" alt="龙咬" loading="eager"></span></span>
  <strong>龙咬</strong>
  <span class="dq-profession-card-meta">Dragon's Bite · 攻击 · 3 阶 · 0 行动点 / 0 法力 · 初始牌 x1 / Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsBite__351.png" alt="龙咬" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙咬</strong>
      <small>Dragon's Bite · 攻击 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害；场上每有 1 张 龙爪，额外造成 2 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-claw3">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw3__629.png" alt="龙爪（3）" loading="eager"></span></span>
  <strong>龙爪（3）</strong>
  <span class="dq-profession-card-meta">Dragon's Claw (3) · 攻击 · 4 阶 · 0 行动点 / 0 法力 · Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw3__629.png" alt="龙爪（3）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙爪（3）</strong>
      <small>Dragon's Claw (3) · 攻击 · 4 阶 · 0 行动点 / 0 法力</small>
      <em>造成 6 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-wisdom">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsWisdom__1011.png" alt="龙之智慧" loading="eager"></span></span>
  <strong>龙之智慧</strong>
  <span class="dq-profession-card-meta">Dragon's Wisdom · 魔力 · 5 阶 · 0 行动点 / 0 法力 · 3 级固定奖励 / 7 级固定奖励 / Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsWisdom__1011.png" alt="龙之智慧" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙之智慧</strong>
      <small>Dragon's Wisdom · 魔力 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>获得 10 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-tail">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsTail__832.png" alt="龙尾" loading="eager"></span></span>
  <strong>龙尾</strong>
  <span class="dq-profession-card-meta">Dragon's Tail · 行动牌 · 5 阶 · 1 行动点 / 0 法力 · Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsTail__832.png" alt="龙尾" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙尾</strong>
      <small>Dragon's Tail · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>造成 3 点攻击伤害。对手 失去 所有 对手的 行动点并法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-breath">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsBreath__1018.png" alt="龙息" loading="eager"></span></span>
  <strong>龙息</strong>
  <span class="dq-profession-card-meta">Dragon's Breath · 行动牌 · 5 阶 · 1 行动点 / 0 法力 · Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsBreath__1018.png" alt="龙息" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙息</strong>
      <small>Dragon's Breath · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>造成 10 点火焰伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-hide">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsHide__988.png" alt="龙皮" loading="eager"></span></span>
  <strong>龙皮</strong>
  <span class="dq-profession-card-meta">Dragon's Hide · 行动牌 · 6 阶 · 1 行动点 / 0 法力 · Dragon 专属</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/DragonsHide__988.png" alt="龙皮" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>龙皮</strong>
      <small>Dragon's Hide · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>获得&lt;减伤 3&gt; 直到你的下个回合。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-profession-card-entry" href="/cards/dragons-roar">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/DragonsRoar__722.png" alt="龙吼" loading="eager"></span></span>
  <strong>龙吼</strong>
  <span class="dq-profession-card-meta">Dragon's Roar · 行动牌 · 7 阶 · 1 行动点 / 0 法力 · Dragon 专属</span>
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
</section>



## 地牢行动详情

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/ProfessionDragon__827.png" alt="Devour" loading="eager"></span>
  <span>
    <strong>吞噬</strong>
    <small>Devour · 冷却 3</small>
    <em>吞噬可见普通怪物，获得经验并触发吞噬收益。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Hoard__1059.png" alt="Hoard" loading="eager"></span>
  <span>
    <strong>宝藏堆</strong>
    <small>Hoard · 职业能力</small>
    <em>花费金币扩大 Hoard，生成龙族成长奖励。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
