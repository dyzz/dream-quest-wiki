---
title: "随机职业"
description: "随机职业会从已解锁、且可获得成就的职业里选择一个。"
---


<section class="dq-profession-hero">
  <div>
    <p class="dq-kicker">Profession</p>
    <h1>随机职业</h1>
    <span class="dq-original">原名：Random</span>
    <div class="dq-tag-row"><span class="dq-status-badge dq-status-special" title="代码里有职业实现，但更像选择入口或特殊职业，而不是普通独立职业路线。">特殊入口</span><span>随机入口</span><span>无独立牌池</span></div>
  </div>
  <div class="dq-profession-portrait">
    <img src="/assets/extracted/textures/by_container/resources/ProfessionRandom__468.png" alt="随机职业" loading="lazy">
  </div>
</section>

<section class="dq-section-block">
  <h2>职业解析数据</h2>
  <table class="dq-data-table">
    <thead><tr><th>字段</th><th>解析值</th></tr></thead>
    <tbody>
      <tr><td>中文名</td><td>随机职业</td></tr>
      <tr><td>英文名</td><td>Random</td></tr>
      <tr><td>脚本类</td><td><code>ProfessionRandom</code></td></tr>
      <tr><td>实装状态</td><td><span class="dq-status-badge dq-status-special" title="代码里有职业实现，但更像选择入口或特殊职业，而不是普通独立职业路线。">特殊入口</span></td></tr>
      <tr><td>职业能力</td><td>随机职业会从已解锁、且可获得成就的职业里选择一个。<p class="dq-original">原文：Your adventurer will be from a class chosen at random from among your unlocked professions that can earn achievements.</p></td></tr>
      <tr><td>起始资源</td><td>生命 15 / 法力 2 / 行动点 1 / 装备槽 0 / 手牌 2 / 金币 0</td></tr>
      <tr><td>升级生命奖励</td><td>由实际抽中的职业决定。</td></tr>
      <tr><td>职业权重 ID</td><td>2、15</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>随机职业机制</h2>
  <div class="dq-mechanic-list">
    <p>Random 不是一条独立职业路线。开局会从已解锁、且可获得成就的职业中随机选择 1 个，然后以该职业开始游戏。</p>
    <p>抽中后，生命、法力、行动点、装备槽、起始牌组、职业技能、升级固定奖励、卡牌出现权重都使用被选中职业的规则。</p>
    <p>因此本页不展示单独的起始牌组、升级奖励或职业专属卡牌；实际内容请查看抽中的职业页面。</p>
  </div>
  <table class="dq-data-table">
    <thead><tr><th>项目</th><th>结论</th></tr></thead>
    <tbody>
      <tr><td>抽选范围</td><td>已解锁，并且该职业自身可以获得成就。</td></tr>
      <tr><td>职业数据</td><td>按抽中的真实职业读取，不使用 Random 页面里的默认统计。</td></tr>
      <tr><td>卡牌出现概率</td><td>按抽中职业的基础权重、职业 ID 修正和升级奖励节点计算。</td></tr>
      <tr><td>页面导航</td><td>需要查看具体机制时，从职业图鉴进入对应职业页。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/professions">回到职业图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/appearance-bias">查看卡牌出现权重机制</a>
</section>
