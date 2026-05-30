---
title: "奖励、宝箱与商店"
description: "Dream Quest 宝箱、商店和奖励卡生成规则。"
---


# 奖励、宝箱与商店

## 每层奖励列表

<section class="dq-mechanic-list">
  <p>GenerateRewards 固定先加入 3 个 Shop。</p>
  <p>随后走治疗分支：要么加入 1 个 HealingPool 和 depth + RandomRange(1, 2) 个 HealthPack；要么加入 depth * 2 + RandomRange(2, 4) 个 HealthPack。</p>
  <p>然后从 Monastery、Blacksmith、SmoothieShack 中随机加入 1 个服务奖励。</p>
  <p>最后再加入 RandomRange(2, 4) 个 GenerateRewardName 生成的普通奖励名。</p>
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

## 成就和难度后处理

<table class="dq-data-table">
  <thead><tr><th>条件</th><th>额外奖励</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>DRAGON1</td><td>TreasureChest x1</td><td>成就奖励：每层额外发现一个宝箱。</td></tr>
    <tr><td>STEPS1</td><td>HealthPack x1</td><td>成就奖励：每层额外发现一个治疗包。</td></tr>
    <tr><td>Grizzly Bear</td><td>HealthPack x1</td><td>默认难度后处理。</td></tr>
    <tr><td>Kitten</td><td>HealingPool x1、TreasureChest x1</td><td>低难度补偿，但不能获得成就点。</td></tr>
  </tbody>
</table>

## 宝箱

<table class="dq-data-table">
  <thead><tr><th>步骤</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td>件数</td><td>1 件约 85%，2 件约 13%，3 件约 2%。</td></tr>
    <tr><td>第一件</td><td>必定调用 CardFinder 抽卡。</td></tr>
    <tr><td>后续件</td><td>45% 转金币，55% 再抽卡。</td></tr>
    <tr><td>顺序</td><td>最终 loot 会被 Utility.Shuffle 洗牌。</td></tr>
  </tbody>
</table>

## 商店

<table class="dq-data-table">
  <thead><tr><th>项目</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td>商品档位</td><td>固定构造 1、3、5 三个商品档位。</td></tr>
    <tr><td>抽卡入口</td><td>每个档位调用 CardFinder，minAffinity 为 0。</td></tr>
    <tr><td>重复处理</td><td>重复商品会重抽；商品列表最后洗牌。</td></tr>
    <tr><td>价格特殊</td><td>Master Thief 天赋会让商店物品免费。</td></tr>
  </tbody>
</table>
