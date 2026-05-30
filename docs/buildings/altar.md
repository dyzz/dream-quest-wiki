---
title: "祭坛 / Altar"
description: "与不同神祇交互并获得对应 boon。第一次祈祷和集齐 6 个祭坛都绑定成就。"
---


<section class="dq-profession-hero dq-feature-hero">
  <div>
    <p class="dq-kicker">Dungeon Feature · 事件</p>
    <h1>祭坛</h1>
    <p class="dq-lede">与不同神祇交互并获得对应 boon。第一次祈祷和集齐 6 个祭坛都绑定成就。</p>
    <p class="dq-original">原名：Altar · 类名：Altar</p>
    <div class="dq-tag-row"><span>事件</span><span>AddWeirdFeature 中占 70%；命中祭坛后再从 6 种神祇祭坛里均匀选择。</span></div>
  </div>
  <div class="dq-profession-portrait dq-feature-portrait">
    <img src="/assets/extracted/textures/by_container/resources/AltarToAston__291.png" alt="Altar" loading="lazy">
  </div>
</section>

<section class="dq-wide-panel">
  <h2>Metadata</h2>
  <div class="dq-meta-grid">
<span title="wiki 中使用的中文名称。"><strong>中文名</strong><em>祭坛</em></span>
<span title="游戏原始名称或代码中对应名称。"><strong>英文名</strong><em>Altar</em></span>
<span title="反编译类型或创建 feature 时使用的内部名称。"><strong>类名</strong><em>Altar</em></span>
<span title="用于图鉴分组。"><strong>类别</strong><em>事件</em></span>
<span title="从地牢生成和奖励分配中恢复出的生成入口。"><strong>生成方式</strong><em>AddWeirdFeature 中占 70%；命中祭坛后再从 6 种神祇祭坛里均匀选择。</em></span>
</div>
</section>

<section class="dq-section-block">
  <h2>机制说明</h2>
  <div class="dq-mechanic-list">
<p>特殊建筑不是按页面上的 3 类均分。AddWeirdFeature 的随机数小于 0.70 时进入祭坛分支，再从 AltarToJeremiad、AltarToAlcoran、AltarToCairn、AltarToGauss、AltarToLiara、AltarToAston 中均匀选择。</p>
<p>ALTAR 成就来自首次在祭坛祈祷；ALTAR2 来自祈祷全部 6 个祭坛并解锁 Necromancer。</p>
<p>每个祭坛类覆盖 SigilDescription、CarvedMessage、AcceptMessage、GodName 和 MyBoon；接受后把对应 boon 写入 DungeonPlayer。</p>
  </div>
</section>

<section class="dq-section-block">
  <h2>祭坛事件</h2>
  <p class="dq-note">接受祭坛会获得对应 boon，同时附带代价。英文为原游戏文本中的效果句。</p>
  <table class="dq-data-table">
    <thead><tr><th>神祇</th><th>获得</th><th>代价</th></tr></thead>
    <tbody>
<tr><td>Alcoran</td><td>Your upgradable cards have been upgraded. 可升级卡牌全部升级。</td><td>All monsters have leveled up. 所有怪物升级。</td></tr>
<tr><td>Aston</td><td>You have gained an additional equipment slot. 装备槽 +1。</td><td>All monsters begin with a sword in play. 所有怪物开局带 Sword。</td></tr>
<tr><td>Cairn</td><td>You gain 30 health and are fully healed. 最大生命 +30 并完全治疗。</td><td>All monsters have damage reduction 1. 所有怪物获得 1 点伤害减免。</td></tr>
<tr><td>Gauss</td><td>You draw one additional card each turn. 每回合额外抽 1 张牌。</td><td>4 curses have been added to your deck. 牌组加入 4 张 Curse。</td></tr>
<tr><td>Jeremiad</td><td>You heal one health for every three damage you deal. 每造成 3 点伤害回复 1 HP。</td><td>You no longer heal any other way other than leveling up. 除升级外，其他治疗方式失效。</td></tr>
<tr><td>Liara</td><td>Your enemies have 15% lower health. 敌人生命降低 15%。</td><td>You start every fight poisoned 3. 每场战斗开局中毒 3。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>祭坛类型</h2>
  <p class="dq-note">特殊建筑随机数命中祭坛分支后，从这 6 种祭坛里均匀选择；每种约占特殊建筑的 11.67%。首次祈祷和集齐全部 6 种祭坛分别对应成就。</p>
  <table class="dq-data-table">
    <thead><tr><th>内部类型</th><th>说明</th></tr></thead>
    <tbody>
<tr><td><code>AltarToJeremiad</code></td><td>Jeremiad 祭坛</td></tr>
<tr><td><code>AltarToAlcoran</code></td><td>Alcoran 祭坛</td></tr>
<tr><td><code>AltarToCairn</code></td><td>Cairn 祭坛</td></tr>
<tr><td><code>AltarToGauss</code></td><td>Gauss 祭坛</td></tr>
<tr><td><code>AltarToLiara</code></td><td>Liara 祭坛</td></tr>
<tr><td><code>AltarToAston</code></td><td>Aston 祭坛</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>随机奖励权重</h2>
  <table class="dq-data-table">
    <thead><tr><th>楼层组</th><th>概率</th><th>说明</th></tr></thead>
    <tbody>
<tr><td>特殊建筑</td><td>70%</td><td>AddWeirdFeature 的祭坛分支；命中后 6 种祭坛均匀选择，每种约 11.67%。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">回到地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/dungeon-generation">查看地牢生成</a>
</section>
