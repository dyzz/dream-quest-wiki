---
title: "未实装技能"
description: "代码中存在但没有恢复到玩家入口的地牢动作和战斗能力。"
---


<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Unimplemented Skills</p>
    <h1>未实装技能</h1>
    <p class="dq-lede">这里集中放置类似“梦境学习”的技能：名称、文案或效果存在，但当前恢复数据里没有职业、天赋或其它玩家可获得入口。</p>
  </div>
  <span class="dq-count">10 个地牢动作 · 13 个战斗能力候选</span>
</section>

<section class="dq-callout">
  <strong>判定口径</strong>
  <span>未实装不是指代码为空，而是没有在职业开局、职业地牢动作、职业升级主奖励或天赋授予这几条玩家入口里找到可达引用。卡牌、怪物和 Boss 专用逻辑可能另有入口，战斗能力候选需要继续交叉核对。</span>
</section>

<section class="dq-section-block">
  <h2>未实装地牢动作</h2>
  <p class="dq-note">这组和“梦境学习”同类：有动作名称和游戏效果，但没有职业或天赋入口。</p>
  <div class="dq-table-scroll">
    <table class="dq-data-table">
      <thead><tr><th>动作</th><th>冷却</th><th>效果</th><th>状态</th><th>说明</th></tr></thead>
      <tbody>
<tr>
  <td><span class="dq-inline-skill" title="炼金 / Alchemy"><img src="/assets/extracted/textures/by_container/resources/Alchemist__789.png" alt="炼金" title="炼金 / Alchemy" loading="lazy"><span><strong>炼金</strong><small>Alchemy</small></span></span></td>
  <td>1</td>
  <td class="dq-long-cell">向玩家牌组加入一张治疗药水。</td>
  <td><span class="dq-status-pill dq-status-monster">未发现入口</span></td>
  <td class="dq-long-cell">有按钮文本和加牌效果，但没有找到职业或天赋入口。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="黑暗契约 / CopySacrifice"><img src="/assets/extracted/textures/by_container/resources/CopyTalent__446.png" alt="黑暗契约" title="黑暗契约 / CopySacrifice" loading="lazy"><span><strong>黑暗契约</strong><small>CopySacrifice</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">选择并复制一张牌，同时失去最大生命。</td>
  <td><span class="dq-status-pill dq-status-monster">未发现入口</span></td>
  <td class="dq-long-cell">效果链完整，但没有找到玩家可获得入口。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="梦境学习 / Dream"><img src="/assets/extracted/textures/by_container/resources/Portent__976.png" alt="梦境学习" title="梦境学习 / Dream" loading="lazy"><span><strong>梦境学习</strong><small>Dream</small></span></span></td>
  <td>5</td>
  <td class="dq-long-cell">从可选牌中学习 1 张并加入牌组。</td>
  <td><span class="dq-status-pill dq-status-monster">未发现入口</span></td>
  <td class="dq-long-cell">存在 Dream / Learn 文案，但没有找到玩家可获得入口。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="直接升级 / LevelUp"><img src="/assets/extracted/textures/by_container/resources/LevelUp__401.png" alt="直接升级" title="直接升级 / LevelUp" loading="lazy"><span><strong>直接升级</strong><small>LevelUp</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">直接触发玩家升级流程。</td>
  <td><span class="dq-status-pill dq-status-monster">系统候选</span></td>
  <td class="dq-long-cell">更像调试或奖励流程动作，不是常规玩家技能。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="旧版神谕 / OracleOld"><img src="/assets/extracted/textures/by_container/resources/Portent__976.png" alt="旧版神谕" title="旧版神谕 / OracleOld" loading="lazy"><span><strong>旧版神谕</strong><small>OracleOld</small></span></span></td>
  <td>3</td>
  <td class="dq-long-cell">揭示目标附近的地图格。</td>
  <td><span class="dq-status-pill dq-status-monster">旧实现</span></td>
  <td class="dq-long-cell">当前 Priest / Random 使用新版 Oracle；这里保留为旧实现。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="献祭 / Sacrifice"><img src="/assets/extracted/textures/by_container/resources/Desperate__1006.png" alt="献祭" title="献祭 / Sacrifice" loading="lazy"><span><strong>献祭</strong><small>Sacrifice</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">失去最大生命并获得法力。</td>
  <td><span class="dq-status-pill dq-status-monster">未发现入口</span></td>
  <td class="dq-long-cell">有完整效果，但没有找到玩家可获得入口。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="保存 / Save"><img src="/assets/extracted/textures/by_container/resources/Preparation__333.png" alt="保存" title="保存 / Save" loading="lazy"><span><strong>保存</strong><small>Save</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">保存当前地牢进度。</td>
  <td><span class="dq-status-pill dq-status-monster">系统候选</span></td>
  <td class="dq-long-cell">系统流程动作，不是常规玩家技能。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="学习 / Study"><img src="/assets/extracted/textures/by_container/resources/Study__609.png" alt="学习" title="学习 / Study" loading="lazy"><span><strong>学习</strong><small>Study</small></span></span></td>
  <td>2</td>
  <td class="dq-long-cell">选择一张牌并加入牌组。</td>
  <td><span class="dq-status-pill dq-status-monster">未发现入口</span></td>
  <td class="dq-long-cell">这是 Study Guide 方向的地图行动，不是 Professor 的 Research。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="交换牌组 / Swap"><img src="/assets/extracted/textures/by_container/resources/Teleport__499.png" alt="交换牌组" title="交换牌组 / Swap" loading="lazy"><span><strong>交换牌组</strong><small>Swap</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">交换玩家当前牌组。</td>
  <td><span class="dq-status-pill dq-status-monster">未发现入口</span></td>
  <td class="dq-long-cell">没有找到玩家可获得入口。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="武士道升级 / Upgrade"><img src="/assets/extracted/textures/by_container/resources/Upgrade1__321.png" alt="武士道升级" title="武士道升级 / Upgrade" loading="lazy"><span><strong>武士道升级</strong><small>Upgrade</small></span></span></td>
  <td>3</td>
  <td class="dq-long-cell">选择一张可升级的牌并升级。</td>
  <td><span class="dq-status-pill dq-status-monster">疑似旧实现</span></td>
  <td class="dq-long-cell">按钮文本含 Bushido；当前 Samurai 是被动满血结算，这里疑似旧实现。</td>
</tr>
      </tbody>
    </table>
  </div>
</section>

<section class="dq-section-block">
  <h2>不计入玩家技能的系统动作</h2>
  <p class="dq-note">这些也没有玩家入口，但更像基类、选择器或内部流程组件，所以不和 Dream 一起统计为未实装技能。</p>
  <div class="dq-table-scroll">
    <table class="dq-data-table">
      <thead><tr><th>动作</th><th>冷却</th><th>用途</th><th>处理方式</th></tr></thead>
      <tbody>
<tr>
  <td><span class="dq-inline-skill" title="牌组选择器 / DeckTargetted"><img src="/assets/extracted/textures/by_container/resources/Upgrade1__321.png" alt="牌组选择器" title="牌组选择器 / DeckTargetted" loading="lazy"><span><strong>牌组选择器</strong><small>DeckTargetted</small></span></span></td>
  <td>5</td>
  <td class="dq-long-cell">打开牌组选择界面，让玩家选择目标牌。</td>
  <td class="dq-long-cell">通用选择器，不是可获得技能。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="动态牌组选择器 / DynamicDeckTargetted"><img src="/assets/extracted/textures/by_container/resources/UpgradeAll__916.png" alt="动态牌组选择器" title="动态牌组选择器 / DynamicDeckTargetted" loading="lazy"><span><strong>动态牌组选择器</strong><small>DynamicDeckTargetted</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">按当前奖励流程选择牌，并执行删除或升级。</td>
  <td class="dq-long-cell">通用选择器，不是可获得技能。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="升级选牌器 / LevelUpDeckTargetted"><img src="/assets/extracted/textures/by_container/resources/Upgrade1__321.png" alt="升级选牌器" title="升级选牌器 / LevelUpDeckTargetted" loading="lazy"><span><strong>升级选牌器</strong><small>LevelUpDeckTargetted</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">升级时选择要升级或删除的牌。</td>
  <td class="dq-long-cell">升级流程组件，不是可获得技能。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="天赋选牌器 / TalentDeckTargetted"><img src="/assets/extracted/textures/by_container/resources/UpgradeAll__916.png" alt="天赋选牌器" title="天赋选牌器 / TalentDeckTargetted" loading="lazy"><span><strong>天赋选牌器</strong><small>TalentDeckTargetted</small></span></span></td>
  <td>5</td>
  <td class="dq-long-cell">按天赋需求选择牌，用于升级、删除、复制或获取。</td>
  <td class="dq-long-cell">天赋流程组件，不是可获得技能。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="地图格选择器 / TileTargetted"><img src="/assets/extracted/textures/by_container/resources/Teleport__499.png" alt="地图格选择器" title="地图格选择器 / TileTargetted" loading="lazy"><span><strong>地图格选择器</strong><small>TileTargetted</small></span></span></td>
  <td>5</td>
  <td class="dq-long-cell">让玩家在地图上选择目标格。</td>
  <td class="dq-long-cell">地图目标选择器，不是可获得技能。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="强制传送 / UberTeleport"><img src="/assets/extracted/textures/by_container/resources/Teleport__499.png" alt="强制传送" title="强制传送 / UberTeleport" loading="lazy"><span><strong>强制传送</strong><small>UberTeleport</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">执行特殊传送初始化。</td>
  <td class="dq-long-cell">内部传送流程，不是常规玩家技能。</td>
</tr>
      </tbody>
    </table>
  </div>
</section>

<section class="dq-section-block">
  <h2>未归属战斗能力候选</h2>
  <p class="dq-note">这些战斗能力当前没有职业引用或天赋授予入口。它们可能来自卡牌、怪物或 Boss 的战斗逻辑，因此先放在候选区。</p>
  <div class="dq-table-scroll">
    <table class="dq-data-table">
      <thead><tr><th>能力</th><th>冷却</th><th>效果</th><th>职业/天赋入口</th><th>说明</th></tr></thead>
      <tbody>
<tr>
  <td><span class="dq-inline-skill" title="引导 / Channel"><img src="/assets/extracted/textures/by_container/resources/Channel__949.png" alt="引导" title="引导 / Channel" loading="lazy"><span><strong>引导</strong><small>Channel</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">消耗行动并获得法力。</td>
  <td>无</td>
  <td class="dq-long-cell">和 Assassin 被动同名主题，但当前没有作为可点击战斗能力入口。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="魅惑 / Charm"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityCharm__367.png" alt="魅惑" title="魅惑 / Charm" loading="lazy"><span><strong>魅惑</strong><small>Charm</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">弃掉对手手牌，并按弃牌数量抽牌。</td>
  <td>无</td>
  <td class="dq-long-cell">没有职业或天赋入口；可能属于未接入能力。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="神恩 / DivineFavor"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityDivineFavor__682.png" alt="神恩" title="神恩 / DivineFavor" loading="lazy"><span><strong>神恩</strong><small>DivineFavor</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">完全回复生命并获得法力，同时让对手弃掉手牌和装备。</td>
  <td>无</td>
  <td class="dq-long-cell">没有职业或天赋入口；可能属于未接入能力。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="复制装备 / DoubleEquip"><img src="/assets/extracted/textures/by_container/resources/EquipSlot__458.png" alt="复制装备" title="复制装备 / DoubleEquip" loading="lazy"><span><strong>复制装备</strong><small>DoubleEquip</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">为场上装备创建临时复制。</td>
  <td>无</td>
  <td class="dq-long-cell">没有职业或天赋入口；可能属于未接入能力。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="连击 / Flurry"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityFlurry__138.png" alt="连击" title="连击 / Flurry" loading="lazy"><span><strong>连击</strong><small>Flurry</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">获得大量行动点。</td>
  <td>无</td>
  <td class="dq-long-cell">没有职业或天赋入口；可能属于未接入能力。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="迅捷 / Quickness"><img src="/assets/extracted/textures/by_container/resources/Action1__765.png" alt="迅捷" title="迅捷 / Quickness" loading="lazy"><span><strong>迅捷</strong><small>Quickness</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">抽牌并获得行动点。</td>
  <td>无</td>
  <td class="dq-long-cell">显示名恢复为 Shadow Step；没有职业或天赋入口。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="回想 / Recall"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityRecall__1076.png" alt="回想" title="回想 / Recall" loading="lazy"><span><strong>回想</strong><small>Recall</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">抽取牌库中的下一张法术牌。</td>
  <td>无</td>
  <td class="dq-long-cell">没有职业或天赋入口；可能属于未接入能力。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="撕裂 / Rend"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityRend__388.png" alt="撕裂" title="撕裂 / Rend" loading="lazy"><span><strong>撕裂</strong><small>Rend</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">本回合物理伤害追加额外伤害。</td>
  <td>无</td>
  <td class="dq-long-cell">没有职业或天赋入口；可能属于未接入能力。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="搜刮 / Scrounge"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityScrounge__735.png" alt="搜刮" title="搜刮 / Scrounge" loading="lazy"><span><strong>搜刮</strong><small>Scrounge</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">把对手牌库置入弃牌堆。</td>
  <td>无</td>
  <td class="dq-long-cell">没有职业或天赋入口；不要和 Professor 的 Research 混用。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="蛇击 / SerpentStrike"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySerpentStrike__383.png" alt="蛇击" title="蛇击 / SerpentStrike" loading="lazy"><span><strong>蛇击</strong><small>SerpentStrike</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">抽牌后弃牌。</td>
  <td>无</td>
  <td class="dq-long-cell">显示名恢复为 Refocus；没有职业或天赋入口。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="灵魂汲取 / SoulLeech"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySoulLeech__924.png" alt="灵魂汲取" title="灵魂汲取 / SoulLeech" loading="lazy"><span><strong>灵魂汲取</strong><small>SoulLeech</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">造成穿透伤害并治疗；击杀时永久增加生命。</td>
  <td>无</td>
  <td class="dq-long-cell">显示文本与 Research 串联，需要保留复核标记。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="法术狂怒 / SpellFury"><img src="/assets/extracted/textures/by_container/resources/CombatAbilitySpellFury__672.png" alt="法术狂怒" title="法术狂怒 / SpellFury" loading="lazy"><span><strong>法术狂怒</strong><small>SpellFury</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">抽取牌库中的全部法术牌。</td>
  <td>无</td>
  <td class="dq-long-cell">显示名恢复为 Devastate，但不同于 Wizard 的 6 级 Devastate。</td>
</tr>
<tr>
  <td><span class="dq-inline-skill" title="毒液 / Venom"><img src="/assets/extracted/textures/by_container/resources/CombatAbilityVenom__1068.png" alt="毒液" title="毒液 / Venom" loading="lazy"><span><strong>毒液</strong><small>Venom</small></span></span></td>
  <td>-</td>
  <td class="dq-long-cell">施加中毒，并让毒伤绕过多数防御。</td>
  <td>无</td>
  <td class="dq-long-cell">没有职业或天赋入口；可能属于未接入能力。</td>
</tr>
      </tbody>
    </table>
  </div>
</section>

<section class="dq-section-block">
  <h2>已确认有入口的相邻技能</h2>
  <p>以下技能虽然曾经出现在“无初始职业引用”扫描结果里，但有其它玩家入口，不能归入未实装：Assassin 6 级获得 Murder，Professor 3 级获得 Make Camp，Bard 通过歌曲使用 Sing；Polymorph、Heal、Preparation、Portent、Teleport、Smash 由天赋授予。Flee 也由 Cowardly 天赋授予为 CombatAbilityFlee。</p>
</section>
