---
title: "教授"
description: "Research：战斗中，教授可以从对手牌库搜索 1 张牌加入手牌，并永久加入自己的牌库。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>教授</h1>
    <span class="dq-original">原名：Professor</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-unlock" title="击败全部 18 个首领后解锁。">成就解锁</span><span>ProfessionProfessor</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionProfessor__195.png" alt="教授" loading="lazy">
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
      <tr><td>中文名</td><td>教授</td></tr>
      <tr><td>英文名</td><td>Professor</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionProfessor</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-unlock" title="击败全部 18 个首领后解锁。">成就解锁</span></td></tr>
      <tr><td>职业能力</td><td>Research：战斗中，教授可以从对手牌库搜索 1 张牌加入手牌，并永久加入自己的牌库。<p class="dq-original">原文：Research:  In combat the professor may search his opponent's deck for a card to place in his hand and permanently add to his deck.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 0 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>自动升级 HP</td><td>职业基础最大生命 +2；实际值还会叠加难度和 FLOOR1 修正。</td></tr>
      <tr><td>职业权重 ID</td><td>10</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>开局档案</h2>
  <table class="dq-data-table">
    <thead><tr><th>档案</th><th>资源</th><th>起始牌组</th></tr></thead>
    <tbody>
      <tr><td>基础开局</td><td>HP 15 / 蓝 0 / 手牌 2 / 行动 1 / 金币 0</td><td>6x 攻击（1） / Attack1</td></tr>
      <tr><td>全成就</td><td>HP 19 / 蓝 2 / 手牌 2 / 行动 1 / 金币 20</td><td>6x 攻击（1） / Attack1</td></tr>
    </tbody>
  </table>
  <p class="dq-note">这两行是职业基础和档案覆盖，实际开局还要套难度：Kitten 起始 HP +5，Grizzly Bear 追加 Attack1 x1，Velociraptor 追加 Attack1 x2；Kitten / Grizzly Bear 升级 HP 还会额外 +1。此职业当前未恢复到职业专属全成就牌组覆盖。</p>
  <p><a href="/mechanics/start-profile-and-difficulty">查看全职业开局与难度表</a></p>
</section>

<section class="dq-section-block">
  <h2>职业机制数据</h2>
  <h3>Research / 研究</h3>
<p class="dq-note">Professor 的核心成长来自把敌人的牌学进自己的牌组。这里保留 Research 的英文名，同时说明内部 Study 名称对应的实际机制。</p>
<table class="dq-data-table">
  <thead><tr><th>环节</th><th>机制</th></tr></thead>
  <tbody>
<tr><td>玩家界面</td><td>Professor 开局自带的战斗技能显示为 Research / 研究；代码里的 CombatAbilityStudy 是这个技能的内部名。</td></tr>
<tr><td>冷却</td><td>Research 是战斗技能，冷却 1 场战斗。使用后进入冷却，完成下一场战斗后重新可用。</td></tr>
<tr><td>选牌范围</td><td>发动后打开选牌窗口，从当前对手的牌库中选择 1 张牌；界面提示是 Select a card，确认按钮是 Choose this。</td></tr>
<tr><td>结算</td><td>选中的牌会立刻加入本场战斗的手牌；同名牌也会永久加入 Professor 自己的牌组。</td></tr>
<tr><td>一次性结算</td><td>技能发动时会创建一次临时选牌行动，并用一次性触发包住；也就是这次 Research 只选择并结算 1 张牌。</td></tr>
<tr><td>和 Development 区分</td><td>6 级解锁的 Development 搜索的是自己的牌库，只把牌加入当前手牌；Research 搜索的是对手牌库，并会永久扩充自己的牌组。</td></tr>
<tr><td>和 Study 卡区分</td><td>Study 是普通卡牌，效果是抽 3 张牌再弃 1 张；Study Guide / DungeonActionStudy 是地图行动来源，不是 Professor 的 Research。</td></tr>
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
<span>装备槽增加</span>
<span>删除牌</span></div>
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
<tr><td>3 级</td><td>地牢技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/FindMonster__860.png" alt="Make Camp" loading="lazy"><span><strong>扎营</strong><small>Make Camp</small></span></span></td><td>解锁地牢行动：在玩家相邻的可用空格中随机选择 1 格，生成一个与玩家等级相当的怪物，并显示 Interrupted!。</td></tr>
<tr><td>4 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>6 级</td><td>战斗技能</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityTutor__729.png" alt="Development" loading="lazy"><span><strong>发展</strong><small>Development</small></span></span></td><td>从牌库中搜索 1 张牌加入手牌。</td></tr>
<tr><td>7 级</td><td>卡牌奖励</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="Card" loading="lazy"><span><strong>随机卡牌</strong><small>Card</small></span></span></td><td>进入本职业随机卡牌奖励，使用本页的 CardFinder 基础权重和职业权重 ID。</td></tr>
<tr><td>10 级</td><td>天赋</td><td><span class="dq-inline-skill"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="Talent" loading="lazy"><span><strong>天赋选择</strong><small>Talent</small></span></span></td><td>选择 1 个额外天赋。</td></tr>
  </tbody>
</table>
  <h3>固定奖励节点</h3>
  <table class="dq-data-table">
  <thead><tr><th>目标等级</th><th>类型</th><th>奖励</th><th>说明</th></tr></thead>
  <tbody>
<tr><td>3 级</td><td>资源</td><td>行动点增加<br><span class="dq-original">Action</span></td><td>固定奖励；不进入随机卡表。</td></tr>
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
  <span class="dq-profession-card-meta">Attack (1) · x6</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（1）</strong>
      <small>Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。</em>
    </span>
  </span>
</a>
    </div>
  </div>
  <div>
    <h2>英雄名</h2>
    <div class="dq-name-list">
      <span>Christopher, the Curious</span>
<span>Patrick, the Profound</span>
<span>Kevin, the Clever</span>
    </div>
    <div class="dq-profession-bias-box">
    <h2>卡牌出现权重</h2>
    <p class="dq-note">卡牌 metadata 只有盗贼、牧师、战士、法师四种基础权重；其他职业通过下面的基础权重算法读取这四项，再叠加职业权重 ID 修正。</p>
    <dl class="dq-key-value-list">
      <div title="职业用哪些 ID 去命中卡牌上的阶级或频率修正。"><dt>职业权重 ID</dt><dd>10</dd></div>
      <div title="这个职业如何读取卡牌 metadata 的四种基础权重。"><dt>基础权重算法</dt><dd>10</dd></div>
      <div title="开局资源，不直接改变宝箱和商店的权重，但会影响实际选牌方向。"><dt>开局资源</dt><dd>生命 15 / 法力 0 / 行动点 1 / 装备槽 0</dd></div>
      <div title="升级时可能出现的成长选项；这些是升级奖励结构，不是 CardFinder 的单卡权重。"><dt>升级成长</dt><dd>生命增加（奖励项）、法力增加、行动点增加、装备槽增加、删除牌</dd></div>
    </dl>
    <div class="dq-tag-row"><a href="/mechanics/appearance-bias#profession-bias">ID 10 · 教授</a></div>
  </div>
  </div>
</section>



## 战斗技能详情

<p class="dq-note">这里合并显示职业初始战斗能力和升级主奖励解锁的战斗能力；具体解锁等级以上方“升级主奖励”为准。</p>

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityTutor__729.png" alt="Development" loading="eager"></span>
  <span>
    <strong>发展</strong>
    <small>Development · 冷却 2</small>
    <em>从牌库中搜索 1 张牌加入手牌。</em>
  </span>
</div>
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityScrounge__735.png" alt="Research" loading="eager"></span>
  <span>
    <strong>研究</strong>
    <small>Research · 冷却 1</small>
    <em>搜索对手牌库，将 1 张牌加入手牌，并永久加入自己的牌组。</em>
  </span>
</div>
</section>

## 地牢行动详情

<p class="dq-note">这里合并显示开局自带、职业核心机制和升级主奖励解锁的地牢行动；具体解锁等级以上方“升级主奖励”为准。</p>

<section class="dq-skill-grid">
<div class="dq-skill-tile">
  <span class="dq-skill-icon"><img src="/assets/extracted/textures/by_container/resources/FindMonster__860.png" alt="Make Camp" loading="eager"></span>
  <span>
    <strong>扎营</strong>
    <small>Make Camp · 冷却 4</small>
    <em>在玩家相邻的可用空格中随机选择 1 格，生成一个与玩家等级相当的怪物，并显示 Interrupted!。</em>
  </span>
</div>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/cards">查看卡牌图鉴</a>
</section>
