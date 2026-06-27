---
title: "奖励、宝箱与商店"
description: "Dream Quest 宝箱、商店和奖励卡生成规则。"
---


<section class="dq-page-hero dq-rewards-hero">
  <div>
    <p class="dq-kicker">Rewards</p>
    <h1>奖励、宝箱与商店</h1>
    <p class="dq-lede">这页把两类奖励拆开看：地图上生成的奖励建筑，以及战斗胜利后从怪物身上结算的经验、金币和宝箱。</p>
  </div>
  <div class="dq-reward-hero-icons" aria-hidden="true">
    <span class="dq-reward-icon" title="怪物"><img src="/assets/extracted/textures/by_container/resources/FindMonster__860.png" alt="怪物" loading="lazy"></span>
    <span class="dq-reward-icon" title="经验"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="经验" loading="lazy"></span>
    <span class="dq-reward-icon" title="金币"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="金币" loading="lazy"></span>
    <span class="dq-reward-icon" title="宝箱"><img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="宝箱" loading="lazy"></span>
    <span class="dq-reward-icon" title="卡牌"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="卡牌" loading="lazy"></span>
  </div>
</section>

## 每层奖励列表

<p class="dq-note">这里说的是地牢地图上生成的奖励点。它们和“怪物击杀奖励”是两条不同流程：地图奖励先生成、再摆放；击杀奖励在战斗胜利后结算。</p>

<section class="dq-flow-grid dq-reward-flow-grid">
  <div>
    <span class="dq-reward-icon" title="商店"><img src="/assets/extracted/textures/by_container/resources/Shop__966.png" alt="商店" loading="lazy"></span>
    <strong>1. 固定商店</strong>
    <span>每层先放入 3 个 Shop，作为基础经济入口。</span>
  </div>
  <div>
    <span class="dq-reward-icon" title="治疗"><img src="/assets/extracted/textures/by_container/resources/HealthPack__931.png" alt="治疗" loading="lazy"></span>
    <strong>2. 治疗分支</strong>
    <span>再决定是 HealingPool 加少量 HealthPack，还是直接生成更多 HealthPack。</span>
  </div>
  <div>
    <span class="dq-reward-icon" title="服务建筑"><img src="/assets/extracted/textures/by_container/resources/Blacksmith__785.png" alt="服务建筑" loading="lazy"></span>
    <strong>3. 服务建筑</strong>
    <span>Monastery、Blacksmith、SmoothieShack 三选一。</span>
  </div>
  <div>
    <span class="dq-reward-icon" title="普通奖励"><img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="普通奖励" loading="lazy"></span>
    <strong>4. 普通奖励</strong>
    <span>最后追加 RandomRange(2, 4) 个 GenerateRewardName 结果。</span>
  </div>
</section>

<table class="dq-data-table">
  <thead><tr><th>楼层组</th><th>奖励名</th><th>概率</th></tr></thead>
  <tbody>
<tr><td>第 1 层</td><td>宝箱 / Treasure Chest</td><td>40%</td></tr>
<tr><td>第 1 层</td><td>治疗包 / Health Pack</td><td>15%</td></tr>
<tr><td>第 1 层</td><td>商店 / Shop</td><td>15%</td></tr>
<tr><td>第 1 层</td><td>地精囤积者 / Goblin Hoarder</td><td>10%</td></tr>
<tr><td>第 1 层</td><td>铁匠 / Blacksmith</td><td>5%</td></tr>
<tr><td>第 1 层</td><td>治疗池 / Healing Pool</td><td>5%</td></tr>
<tr><td>第 1 层</td><td>修道院 / Monastery</td><td>5%</td></tr>
<tr><td>第 1 层</td><td>果昔小屋 / Smoothie Shack</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>宝箱 / Treasure Chest</td><td>40%</td></tr>
<tr><td>第 2 层以后</td><td>治疗包 / Health Pack</td><td>15%</td></tr>
<tr><td>第 2 层以后</td><td>商店 / Shop</td><td>15%</td></tr>
<tr><td>第 2 层以后</td><td>铁匠 / Blacksmith</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>地精囤积者 / Goblin Hoarder</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>治疗池 / Healing Pool</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>拟态宝箱 / Mimic Chest</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>修道院 / Monastery</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>果昔小屋 / Smoothie Shack</td><td>5%</td></tr>
  </tbody>
</table>

<section class="dq-section-block">
  <h2>怪物击杀奖励</h2>
  <p class="dq-note">这是战斗胜利后从怪物身上结算的奖励，不是地图上的 TreasureChest / Shop / Blacksmith 等地牢奖励建筑。当前恢复代码里，难度不会直接改怪物击杀金币或经验。</p>
  <div class="dq-callout">
    <strong>一句话规则</strong>
    <span>杀怪一定结算经验；然后结算金币，或在满足条件时用怪物身上的宝箱替代金币。宝箱不是额外加一次金币奖励。</span>
  </div>
  <section class="dq-flow-grid dq-reward-flow-grid dq-monster-kill-flow">
    <div>
      <span class="dq-reward-icon" title="怪物等级"><img src="/assets/extracted/textures/by_container/resources/FindMonster__860.png" alt="怪物等级" loading="lazy"></span>
      <strong>1. 等级写入奖励字段</strong>
      <span>Monster.LevelTo 把等级夹到 1-10，并写入基础经验和金币均值。</span>
    </div>
    <div>
      <span class="dq-reward-icon" title="经验"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="经验" loading="lazy"></span>
      <strong>2. 先记录经验</strong>
      <span>Monster.Defeated 调 ProcessKill；普通战斗会延迟到战斗结束后触发升级检查。</span>
    </div>
    <div>
      <span class="dq-reward-icon" title="宝箱"><img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="宝箱" loading="lazy"></span>
      <strong>3. 判断是否出宝箱</strong>
      <span>有 storedChest、goldMult 为 1.0，且 RandomFloat 小于 0.1 时，显示 a treasure chest!。</span>
    </div>
    <div>
      <span class="dq-reward-icon" title="金币"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="金币" loading="lazy"></span>
      <strong>4. 否则掉金币</strong>
      <span>普通金币按 RandomNormal(mean, mean * 0.1) 抽样并取整，低于 1 时按 1 结算。</span>
    </div>
  </section>
  <div class="dq-reward-rule-grid">
  <div>
    <span class="dq-reward-heading">
    <span class="dq-reward-icon" title="经验"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="经验" loading="lazy"></span>
    <span><strong>经验</strong><small>Experience</small></span>
  </span>
    <p>普通怪物的基础经验等于怪物等级。等级会先夹到 1-10，再乘以怪物自己的 expMult。</p>
  </div>
  <div>
    <span class="dq-reward-heading">
    <span class="dq-reward-icon" title="金币"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="金币" loading="lazy"></span>
    <span><strong>金币</strong><small>Gold</small></span>
  </span>
    <p>先按等级得到金币均值，再经过 ModifyGoldDrops。实际掉落按均值上下小幅波动，最低为 1 金币。</p>
  </div>
  <div>
    <span class="dq-reward-heading">
    <span class="dq-reward-icon" title="宝箱替代金币"><img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="宝箱替代金币" loading="lazy"></span>
    <span><strong>宝箱替代金币</strong><small>Chest Roll</small></span>
  </span>
    <p>怪物身上已有 storedChest 且 goldMult 为 1.0 时，击杀有 10% 用宝箱替代普通金币。</p>
  </div>
  <div>
    <span class="dq-reward-heading">
    <span class="dq-reward-icon" title="怪物宝箱内容"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="怪物宝箱内容" loading="lazy"></span>
    <span><strong>怪物宝箱内容</strong><small>Loot</small></span>
  </span>
    <p>怪物宝箱固定 1 件，调用 GenerateLoot(1)。这一件走 CardFinder 抽卡，不使用普通宝箱的 1/2/3 件数量表。</p>
  </div>
</div>
  <table class="dq-data-table">
    <thead><tr><th>项目</th><th>规则</th></tr></thead>
    <tbody>
      <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="经验"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="经验" loading="lazy"></span>
    <span><strong>经验</strong><small>EXP</small></span>
  </span></td><td>Monster.LevelTo 保存 exp = int(ExpValue(level) * expMult)。普通怪物的 ExpValue(level) 就是等级值，所以 1-10 级分别给 1-10 经验。</td></tr>
      <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="金币均值"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="金币均值" loading="lazy"></span>
    <span><strong>金币均值</strong><small>Gold Mean</small></span>
  </span></td><td>先保存 gold = int(GoldValue(level) * goldMult)，击杀时再经过 DungeonPlayer.ModifyGoldDrops 修正。Miserly Minuet 等效果会在这里影响均值。</td></tr>
      <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="金币随机"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="金币随机" loading="lazy"></span>
    <span><strong>金币随机</strong><small>Gold Roll</small></span>
  </span></td><td>实际金币用 Game.RandomNormal(mean, mean * 0.1) 抽样并取整；低于 1 时按 1 金币结算。</td></tr>
      <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="宝箱替代金币"><img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="宝箱替代金币" loading="lazy"></span>
    <span><strong>宝箱替代金币</strong><small>10% Roll</small></span>
  </span></td><td>Monster.Defeated 先掷 RandomFloat；若小于 0.1，且怪物身上已有 storedChest，且 goldMult 为 1.0，则显示“a treasure chest!”并用宝箱替代普通金币。经验仍照常获得。</td></tr>
      <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="怪物宝箱内容"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="怪物宝箱内容" loading="lazy"></span>
    <span><strong>怪物宝箱内容</strong><small>GenerateLoot(1)</small></span>
  </span></td><td>GenerateMonsterChest 调用 TreasureChest.GenerateLoot(1)，因此固定 1 件，第一件走 CardFinder 抽卡；它不是普通宝箱的 1/2/3 件掉落表。</td></tr>
    </tbody>
  </table>

  <h3>金币和经验表</h3>
  <p class="dq-note">表里的金币是均值；最终金币还会走随机波动和 ModifyGoldDrops。宝箱触发时，这次普通金币会被宝箱替代。</p>
  <div class="dq-table-scroll">
  <table class="dq-data-table">
    <thead><tr><th>怪物等级</th><th><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="经验"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="经验" loading="lazy"></span>
    <span><strong>经验</strong><small>EXP</small></span>
  </span></th><th><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="金币均值"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="金币均值" loading="lazy"></span>
    <span><strong>金币均值</strong><small>Gold</small></span>
  </span></th></tr></thead>
    <tbody>
<tr><td>1</td><td>1</td><td>3</td></tr>
<tr><td>2</td><td>2</td><td>6</td></tr>
<tr><td>3</td><td>3</td><td>9</td></tr>
<tr><td>4</td><td>4</td><td>10</td></tr>
<tr><td>5</td><td>5</td><td>11</td></tr>
<tr><td>6</td><td>6</td><td>12</td></tr>
<tr><td>7</td><td>7</td><td>14</td></tr>
<tr><td>8</td><td>8</td><td>17</td></tr>
<tr><td>9</td><td>9</td><td>20</td></tr>
<tr><td>10</td><td>10</td><td>25</td></tr>
    </tbody>
  </table>
  </div>

  <h3>玩家升级经验</h3>
  <p class="dq-note">普通战斗在 Monster.Defeated 中先记录经验；随后 Dungeon.WinFight / SaveDungeon 之后再调用 GainExp(0)，触发延迟升级检查。</p>
  <div class="dq-table-scroll">
  <table class="dq-data-table">
    <thead><tr><th>目标玩家等级</th><th><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="所需经验"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="所需经验" loading="lazy"></span>
    <span><strong>所需经验</strong><small>Required EXP</small></span>
  </span></th></tr></thead>
    <tbody>
<tr><td>1</td><td>0</td></tr>
<tr><td>2</td><td>2</td></tr>
<tr><td>3</td><td>4</td></tr>
<tr><td>4</td><td>7</td></tr>
<tr><td>5</td><td>12</td></tr>
<tr><td>6</td><td>20</td></tr>
<tr><td>7</td><td>25</td></tr>
<tr><td>8</td><td>30</td></tr>
<tr><td>9</td><td>35</td></tr>
<tr><td>10</td><td>45</td></tr>
    </tbody>
  </table>
  </div>
</section>

## 成就和难度后处理

<table class="dq-data-table">
  <thead><tr><th>条件</th><th>额外奖励</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>DRAGON1</td><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="TreasureChest x1"><img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="TreasureChest x1" loading="lazy"></span>
    <span><strong>TreasureChest x1</strong><small>每层额外宝箱</small></span>
  </span></td><td>成就奖励：每层额外发现一个宝箱。</td></tr>
    <tr><td>STEPS1</td><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="HealthPack x1"><img src="/assets/extracted/textures/by_container/resources/HealthPack__931.png" alt="HealthPack x1" loading="lazy"></span>
    <span><strong>HealthPack x1</strong><small>每层额外治疗包</small></span>
  </span></td><td>成就奖励：每层额外发现一个治疗包。</td></tr>
    <tr><td>Grizzly Bear</td><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="HealthPack x1"><img src="/assets/extracted/textures/by_container/resources/HealthPack__931.png" alt="HealthPack x1" loading="lazy"></span>
    <span><strong>HealthPack x1</strong><small>默认难度补充</small></span>
  </span></td><td>默认难度后处理。</td></tr>
    <tr><td>Kitten</td><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="HealingPool x1"><img src="/assets/extracted/textures/by_container/resources/HealthPack__931.png" alt="HealingPool x1" loading="lazy"></span>
    <span><strong>HealingPool x1</strong><small>加 TreasureChest x1</small></span>
  </span></td><td>低难度补偿：额外 HealingPool 和 TreasureChest，但不能获得成就点。</td></tr>
  </tbody>
</table>

## 宝箱

<table class="dq-data-table">
  <thead><tr><th>步骤</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="件数"><img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="件数" loading="lazy"></span>
    <span><strong>件数</strong><small>Item Count</small></span>
  </span></td><td>普通宝箱先决定数量：1 件约 85%，2 件约 13%，3 件约 2%。</td></tr>
    <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="第一件"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="第一件" loading="lazy"></span>
    <span><strong>第一件</strong><small>First Item</small></span>
  </span></td><td>第一件必定调用 CardFinder 抽卡。</td></tr>
    <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="后续件"><img src="/assets/extracted/textures/by_container/resources/Rich__50.png" alt="后续件" loading="lazy"></span>
    <span><strong>后续件</strong><small>Extra Items</small></span>
  </span></td><td>第二、三件各自判断：45% 转金币，55% 再抽卡。</td></tr>
    <tr><td>顺序</td><td>生成完全部 loot 后，用 Utility.Shuffle 洗牌。</td></tr>
  </tbody>
</table>

## 商店

<table class="dq-data-table">
  <thead><tr><th>项目</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="商品档位"><img src="/assets/extracted/textures/by_container/resources/Shop__966.png" alt="商品档位" loading="lazy"></span>
    <span><strong>商品档位</strong><small>Slots</small></span>
  </span></td><td>商店固定构造 1、3、5 三个商品档位。</td></tr>
    <tr><td><span class="dq-reward-heading">
    <span class="dq-reward-icon" title="抽卡入口"><img src="/assets/extracted/textures/by_container/resources/Card1__544.png" alt="抽卡入口" loading="lazy"></span>
    <span><strong>抽卡入口</strong><small>CardFinder</small></span>
  </span></td><td>每个档位调用 CardFinder，minAffinity 为 0。</td></tr>
    <tr><td>重复处理</td><td>重复商品会重抽；商品列表最后洗牌。</td></tr>
    <tr><td>价格特殊</td><td>Master Thief 天赋会让商店物品免费。</td></tr>
  </tbody>
</table>
