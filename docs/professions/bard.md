---
title: "吟游诗人"
description: "Sing：吟游诗人会学习歌曲。每首歌都可以作为地牢行动使用，冷却为 3 场战斗，效果通常持续到下一场战斗或立即影响地图。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>吟游诗人</h1>
    <span class="dq-original">原名：Bard</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-unlock" title="将最终首领打到 750 生命以下后解锁。">成就解锁</span><span>ProfessionBard</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionBard__392.png" alt="吟游诗人" loading="lazy">
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
      <tr><td>中文名</td><td>吟游诗人</td></tr>
      <tr><td>英文名</td><td>Bard</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionBard</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-unlock" title="将最终首领打到 750 生命以下后解锁。">成就解锁</span></td></tr>
      <tr><td>职业能力</td><td>Sing：吟游诗人会学习歌曲。每首歌都可以作为地牢行动使用，冷却为 3 场战斗，效果通常持续到下一场战斗或立即影响地图。<p class="dq-original">原文：Sing: The bard learns songs, each of which may be used every three combats and has a temporary effect.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 2 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>自动升级 HP</td><td>职业基础最大生命 +2；实际值还会叠加难度和 FLOOR1 修正。</td></tr>
      <tr><td>职业权重 ID</td><td>9、14</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>开局档案</h2>
  <table class="dq-data-table">
    <thead><tr><th>档案</th><th>资源</th><th>起始牌组</th></tr></thead>
    <tbody>
      <tr><td>基础开局</td><td>HP 15 / 蓝 2 / 手牌 2 / 行动 1 / 金币 0</td><td>5x 攻击（1） / Attack1, 1x 贾斯拉的震荡电击 / JasrasJarringJolt, 1x 法力（1） / Mana1, 1x 暴力祈祷 / PrayerOfViolence, 1x 斩击 / Slash, 1x 切割 / Slice</td></tr>
      <tr><td>全成就</td><td>HP 19 / 蓝 4 / 手牌 2 / 行动 1 / 金币 20</td><td>5x 攻击（1） / Attack1, 1x 贾斯拉的震荡电击 / JasrasJarringJolt, 1x 法力（1） / Mana1, 1x 暴力祈祷 / PrayerOfViolence, 1x 斩击 / Slash, 1x 切割 / Slice</td></tr>
    </tbody>
  </table>
  <p class="dq-note">这两行是职业基础和档案覆盖，实际开局还要套难度：Kitten 起始 HP +5，Grizzly Bear 追加 Attack1 x1，Velociraptor 追加 Attack1 x2；Kitten / Grizzly Bear 升级 HP 还会额外 +1。此职业当前未恢复到职业专属全成就牌组覆盖。</p>
  <p><a href="/mechanics/start-profile-and-difficulty">查看全职业开局与难度表</a></p>
</section>

<section class="dq-section-block">
  <h2>职业机制数据</h2>
  <h3>Song 歌曲表</h3>
<p class="dq-note">Bard 学到的歌曲会通过 Sing 使用。歌曲名按游戏显示名展示，内部 ID 仅保留为检索线索；这里同时给出中文效果。</p>
<table class="dq-data-table dq-song-table">
  <thead><tr><th>歌曲</th><th>效果</th></tr></thead>
  <tbody>
<tr><td><strong>Belicose Ballad</strong><br><span class="dq-original">BellicoseBallad</span></td><td>下一场战斗中，你的攻击牌造成双倍伤害。<p class="dq-original">原文：Your attack cards deal double damage in the next combat</p></td></tr>
<tr><td><strong>Soothing Serenade</strong><br><span class="dq-original">SoothingSerenade</span></td><td>下一场战斗中，你每回合回复 4 点生命。<p class="dq-original">原文：You regenerate four health per turn in the next combat</p></td></tr>
<tr><td><strong>Knavish Nocturne</strong><br><span class="dq-original">KnavishNocturne</span></td><td>你进入隐形，直到与地牢发生互动。<p class="dq-original">原文：You are invisible until you interact with the dungeon</p></td></tr>
<tr><td><strong>Miserly Minuet</strong><br><span class="dq-original">MiserlyMinuet</span></td><td>下一场战斗获得的金币翻倍。<p class="dq-original">原文：You receive double the gold from the next combat</p></td></tr>
<tr><td><strong>Blazing Beat</strong><br><span class="dq-original">BlazingBeat</span></td><td>下一场战斗中，每回合开始时抽 1 张临时 Fireball。<p class="dq-original">原文：In the next combat, draw a temporary fireball card at the start of each turn</p></td></tr>
<tr><td><strong>Cadenza of Celerity</strong><br><span class="dq-original">CadenzaOfCelerity</span></td><td>下一场战斗中获得 +3 行动点。<p class="dq-original">原文：You have +3 actions for the next combat</p></td></tr>
<tr><td><strong>Arming Aria</strong><br><span class="dq-original">AnthemOfAmbush</span></td><td>下一场战斗开始时获得 2 件随机装备。<p class="dq-original">原文：You begin the next combat with two random pieces of equipment</p></td></tr>
<tr><td><strong>Dreadful Dirge</strong><br><span class="dq-original">DreadfulDirge</span></td><td>下一场战斗中，你每回合开始时，对手失去 3 点当前生命和 3 点最大生命。<p class="dq-original">原文：Your opponent loses 3 current and maximum health at the start of each of your turns in the next combat</p></td></tr>
<tr><td><strong>Anthem of Ambush</strong><br><span class="dq-original">ArmingAria</span></td><td>下一场战斗开始时额外抽 3 张牌。<p class="dq-original">原文：Start the next fight with 3 additional cards</p></td></tr>
<tr><td><strong>Heroic Hymn</strong><br><span class="dq-original">HeroicHymn</span></td><td>下一场战斗中，手牌上限 +1。<p class="dq-original">原文：Your maximum hand size is increased by one in the next fight</p></td></tr>
<tr><td><strong>Healing Harmony</strong><br><span class="dq-original">HealingHarmony</span></td><td>在地图上随机生成 3 个治疗包。<p class="dq-original">原文：Generate three health packs at random on the map</p></td></tr>
<tr><td><strong>Piercing Paean</strong><br><span class="dq-original">PiercingPaean</span></td><td>下一场战斗中，你造成的伤害具有穿透。<p class="dq-original">原文：In the next fight, damage you deal is piercing</p></td></tr>
<tr><td><strong>Rollicking Rondo</strong><br><span class="dq-original">RollickingRondo</span></td><td>下一场战斗中，每当你打出行动牌，抽 1 张牌。<p class="dq-original">原文：In the next fight, whenever you play an Action card, draw a card</p></td></tr>
<tr><td><strong>Rhapsody of Recall</strong><br><span class="dq-original">RhapsodyOfRecall</span></td><td>下一场战斗中，每回合开始时，将弃牌堆中所有法术牌返回手牌。<p class="dq-original">原文：In the next fight, at the beginning of each turn, return all Spell cards from your graveyard to your hand</p></td></tr>
<tr><td><strong>Vile Vibrato</strong><br><span class="dq-original">VileVibrato</span></td><td>下一场战斗中，每当你打出行动牌，对手获得 1 层中毒。<p class="dq-original">原文：In the next fight, whenever you play an Action card, your opponent is Poisoned for 1</p></td></tr>
<tr><td><strong>Stout Sonata</strong><br><span class="dq-original">StoutSonata</span></td><td>下一场战斗中，生命 +20。<p class="dq-original">原文：In the next fight, you have 20 additional health</p></td></tr>
<tr><td><strong>Chorale of Chaos</strong><br><span class="dq-original">ChoraleOfChaos</span></td><td>下一场战斗中，你和对手交换牌库。<p class="dq-original">原文：In the next fight, you and your opponent swap decks</p></td></tr>
<tr><td><strong>Enlightened Elegy</strong><br><span class="dq-original">ChantOfClarity</span></td><td>下一场战斗中，你在自己的回合抽牌时，改为从牌库搜索 1 张牌加入手牌。<p class="dq-original">原文：In the next combat, whenever you would draw a card during your turn, instead search your deck for a card and put it into your hand</p></td></tr>
<tr><td><strong>Pugilist's Polka</strong><br><span class="dq-original">EnlightenedElegy</span></td><td>下一场战斗中，你在自己的回合抽牌时，对手受到 3 点物理伤害。<p class="dq-original">原文：In the next combat, whenever you would draw a card during your turn, deal 3 physical damage to your opponent</p></td></tr>
<tr><td><strong>Chant of Clarity</strong><br><span class="dq-original">PugilistsPolka</span></td><td>下一场战斗开始时额外获得 30 点法力。<p class="dq-original">原文：Start the next combat with 30 additional mana</p></td></tr>
  </tbody>
</table>
</section>

<section class="dq-section-block">
  <h2>升级与固定奖励</h2>
  <p class="dq-note">职业升级会自动结算 HP、蓝和金币成长，再处理等级奖励面板；其中 3 级和 6 级常解锁战斗技能、地牢技能或专属强化。只有进入随机卡奖励时，才会从 LowCards / MidCards / HighCards 的职业卡表中抽取。</p>
  <div class="dq-reward-summary">
    <div>
      <strong>升级选项池</strong>
      <div class="dq-tag-row"><span>生命增加（奖励项）</span>
<span>法力增加</span>
<span>行动点增加</span>
<span>金币</span>
<span>卡牌奖励</span>
<span>升级牌</span></div>
    </div>
    <div>
      <strong>HP 成长</strong>
      <p>升级时自动最大生命 +2；实际值还会叠加难度和 FLOOR1 修正。</p>
    </div>
    <div>
      <strong>CardFinder 基础权重</strong>
      <p>10</p>
      <p class="dq-note">所有卡使用固定基础权重。</p>
    </div>
  </div>
  <h3>升级主奖励节点</h3>
  <table class="dq-data-table dq-primary-reward-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityDistract__664.png" alt="Distract" loading="lazy"><span><strong>干扰</strong><small>Distract</small></span></span></td><td>获得一个额外回合。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>地牢强化</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Charismatic__217.png" alt="Boast" loading="lazy"><span><strong>夸耀</strong><small>Boast</small></span></span></td><td>6 级后击败等级高于自己的怪物时，基础冷却至少 3 的冷却中能力会直接准备好。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <p class="dq-note">未解析到额外 FixedBonus 固定奖励节点；升级主要由职业主奖励和随机卡表决定。</p>
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
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/jasras-jarring-jolt">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/JasrasJarringJolt__694.png" alt="贾斯拉的震荡电击" loading="eager"></span></span>
  <strong>贾斯拉的震荡电击</strong>
  <span class="dq-profession-card-meta">Jasra's Jarring Jolt · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/JasrasJarringJolt__694.png" alt="贾斯拉的震荡电击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贾斯拉的震荡电击</strong>
      <small>Jasra's Jarring Jolt · 法术 · 1 阶 · 0 行动点 / 2 法力</small>
      <em>造成 1 电系，1 毒性，1 火焰，并 1 点冰霜伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/slash">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slash__247.png" alt="斩击" loading="eager"></span></span>
  <strong>斩击</strong>
  <span class="dq-profession-card-meta">Slash · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slash__247.png" alt="斩击" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>斩击</strong>
      <small>Slash · 攻击 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/mana1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="eager"></span></span>
  <strong>法力（1）</strong>
  <span class="dq-profession-card-meta">Mana (1) · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>法力（1）</strong>
      <small>Mana (1) · 魔力 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>获得 2 点法力。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/slice">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="eager"></span></span>
  <strong>切割</strong>
  <span class="dq-profession-card-meta">Slice · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>切割</strong>
      <small>Slice · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。抽 1 张牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-deck-card-link" href="/cards/prayer-of-violence">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="eager"></span></span>
  <strong>暴力祈祷</strong>
  <span class="dq-profession-card-meta">Prayer of Violence · x1</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>暴力祈祷</strong>
      <small>Prayer of Violence · 祈祷 · 3 阶 · 0 行动点 / 0 法力</small>
      <em>最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Meredith, the Melodious</span>
<span>Sophia, the Siren</span>
<span>Christine, the Clarion</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>9、14</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>10</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 2 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加（奖励项）、法力增加、行动点增加、金币、卡牌奖励、升级牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 9 · 吟游诗人</a>
<a href="/mechanics/appearance-bias#profession-bias">ID 14 · 吟游诗人 / 德鲁伊 / 武士 / 法师 / 游侠 / 龙</a></div>
  </div>
  </div>
</section>



## 战斗技能详情

<p class="dq-note">这里合并显示职业初始战斗能力和升级主奖励解锁的战斗能力；具体解锁等级以上方“升级主奖励”为准。</p>

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityDistract__664.png" alt="Distract" loading="eager"></span>
  <span>
    <strong>干扰</strong>
    <small>Distract · 冷却 3</small>
    <em>获得一个额外回合。</em>
  </span>
</div>
</section>

## 地牢行动详情

<p class="dq-note">这里合并显示开局自带、职业核心机制和升级主奖励解锁的地牢行动；具体解锁等级以上方“升级主奖励”为准。</p>

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/Charismatic__217.png" alt="Sing" loading="eager"></span>
  <span>
    <strong>演唱</strong>
    <small>Sing · 冷却 3</small>
    <em>演奏已学习歌曲，触发对应 Song 效果。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
