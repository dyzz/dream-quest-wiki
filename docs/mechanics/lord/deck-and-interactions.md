---
title: "梦境之主：牌组与特殊交互"
description: "基础牌组生成、随机候选池、起手装备、特殊死亡交互和最终战相关卡牌。"
---


<section class="dq-wide-panel">
  <p class="dq-kicker">梦境之主 · Lord of the Dream</p>
  <h1>梦境之主：牌组与特殊交互</h1>
  <p class="dq-lede">基础牌组生成、随机候选池、起手装备、特殊死亡交互和最终战相关卡牌。</p>
  <div class="dq-action-row">
    <a class="dq-button" href="/mechanics/lord-of-the-dream">梦境之主总览</a>
    <a class="dq-button dq-button-secondary" href="/monsters/lord-of-the-dream">怪物图鉴条目</a>
  </div>
</section>

<section class="dq-section-block">
  <h2>特殊交互</h2>
  <p class="dq-note">Assassin 的 Murder 不能选中 Lord。Last Chance 如果作为贡品交给 Lord，之后由 Lord 自己打出，会给 Lord 自己挂上延迟死亡；Zombie Bite 对 Lord 生效，感染到期也会让 Lord 死亡。这两类死亡通常会按赢下最终战处理，但 Lord 的金币和经验仍为 0，也不会增加最终 Boss 伤害统计，因此不能靠它们本身完成 Dream Master / 击杀 Lord 成就。</p>
  <div class="dq-card-chip-row"><a class="dq-card-chip" href="/cards/final-fortune">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FinalFortune__696.png" alt="最后机会" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>最后机会</strong><small>Last Chance</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FinalFortune__696.png" alt="最后机会" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>最后机会</strong>
      <small>Last Chance · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>获得一个额外回合。如果该回合结束时对手仍然存活，你死亡。</em>
    </span>
  </span>
</a><a class="dq-card-chip" href="/cards/zombie-bite">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/ZombieBite__710.png" alt="僵尸撕咬" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>僵尸撕咬</strong><small>Zombie Bite</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/ZombieBite__710.png" alt="僵尸撕咬" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>僵尸撕咬</strong>
      <small>Zombie Bite · 行动牌 · 1 阶 · 1 行动点 / 0 法力</small>
      <em>对手获得 5 层疾病。在对手回合开始时，对手失去 1 层疾病。当 最后一层被移除时，对手 死亡。</em>
    </span>
  </span>
</a></div>
</section>

<section class="dq-section-block">
  <h2>基础牌组生成</h2>
  <p class="dq-note">Lord 的基础牌组不是固定 6 张核心牌加随机牌。那 6 张牌只是从随机候选池里排除。实际生成顺序是：先抽 20 张非奖励随机牌，再补 20 张随机 Attack，合计 40 张。</p>
  <table class="dq-data-table">
    <thead><tr><th>步骤</th><th>规则</th></tr></thead>
    <tbody>
      <tr><td>卡组大小</td><td>Lord 的基础战斗牌组生成 40 张牌。若界面显示的是剩余抽牌堆，开局已有手牌离开牌堆后会看到 38 张。</td></tr>
      <tr><td>1. 排除 6 张牌</td><td>Healing Potion、Phoenix Feather、Rush、Last Chance、Electrocute、Storm 不进入前半段随机池。它们不是 Lord 的固定牌，也不会作为这一步的候选牌被抽到。</td></tr>
      <tr><td>2. 建立前半段随机池</td><td>从全卡表里保留普通可用的非奖励牌：不是 HasNever，金币值不为负，没有动态金币，并且不在上面 6 张排除名单里。</td></tr>
      <tr><td>3. 抽 20 张非奖励牌</td><td>Lord 从这个候选池里抽 20 张，每抽到一张就从候选池移除一次，所以这 20 张是不放回抽取，不会在这一段重复。</td></tr>
      <tr><td>4. 补 20 张 Attack</td><td>后 20 张每张单独随机为 Attack1、Attack2、Attack3 或 Attack4；这一段可以重复。</td></tr>
      <tr><td>最终写入</td><td>40 格列表写回 Lord 的牌组字段，随后 FinalBoss 把法力写成 40。战斗初始化时再按正常牌组流程洗牌、抽起手牌。</td></tr>
      <tr><td>Crush Everything</td><td>达到 10、20、30……全局回合阈值后，Lord 回合开始会对 Lord 侧调用 DrawExNihil 生成 Crush Everything。</td></tr>
      <tr><td>起手流程</td><td>PreferredStartingCards 返回空列表；起手牌来自已构造并洗好的牌组。</td></tr>
      <tr><td>重装装备</td><td>抽到 SUPER_EQUIPPED / Well-armored 属性时，StartingEquipment 返回 Boots of Speed、Celestial Plate、Donnerschwert、Jasra's Tome。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>不会进入前半段随机池的 6 张卡</h2>
  <div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/healing-potion">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/HealingPotion__903.png" alt="治疗药水" loading="eager"></span></span>
  <strong>治疗药水</strong>
  <span class="dq-profession-card-meta">Healing Potion · 行动牌 · 2 阶 · 1 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/HealingPotion__903.png" alt="治疗药水" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>治疗药水</strong>
      <small>Healing Potion · 行动牌 · 2 阶 · 1 行动点 / 0 法力</small>
      <em>完全回复生命。此牌使用后会从游戏和你的牌库中永久移除。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/phoenix-feather">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PhoenixFeather__409.png" alt="凤凰羽毛" loading="eager"></span></span>
  <strong>凤凰羽毛</strong>
  <span class="dq-profession-card-meta">Phoenix Feather · 装备 · 5 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PhoenixFeather__409.png" alt="凤凰羽毛" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>凤凰羽毛</strong>
      <small>Phoenix Feather · 装备 · 5 阶 · 0 行动点 / 0 法力</small>
      <em>如果你将要死亡，放逐 凤凰羽毛 并将其从你的牌库中永久移除。你的生命设为最大值。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/rush">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Rush__792.png" alt="冲刺" loading="eager"></span></span>
  <strong>冲刺</strong>
  <span class="dq-profession-card-meta">Rush · 行动牌 · 6 阶 · 1 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Rush__792.png" alt="冲刺" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>冲刺</strong>
      <small>Rush · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>造成等同于 1/4 的 你的 当前 生命 (向下取整) 的物理伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/final-fortune">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/FinalFortune__696.png" alt="最后机会" loading="eager"></span></span>
  <strong>最后机会</strong>
  <span class="dq-profession-card-meta">Last Chance · 行动牌 · 6 阶 · 1 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/FinalFortune__696.png" alt="最后机会" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>最后机会</strong>
      <small>Last Chance · 行动牌 · 6 阶 · 1 行动点 / 0 法力</small>
      <em>获得一个额外回合。如果该回合结束时对手仍然存活，你死亡。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/electrocute">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Electrocute__1012.png" alt="电刑" loading="eager"></span></span>
  <strong>电刑</strong>
  <span class="dq-profession-card-meta">Electrocute · 法术 · 6 阶 · 0 行动点 / 5 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Electrocute__1012.png" alt="电刑" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>电刑</strong>
      <small>Electrocute · 法术 · 6 阶 · 0 行动点 / 5 法力</small>
      <em>造成 5 点电系伤害；施放 电刑 后，你每剩余 1 点法力就额外造成 1 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/storm">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Storm__769.png" alt="风暴" loading="eager"></span></span>
  <strong>风暴</strong>
  <span class="dq-profession-card-meta">Storm · 法术 · 9 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Storm__769.png" alt="风暴" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>风暴</strong>
      <small>Storm · 法术 · 9 阶 · 0 行动点 / 0 法力</small>
      <em>造成 10 点电系伤害。如果你至少有 30 点法力，失去 30 点法力并获得一个额外回合 在本回合之后。</em>
    </span>
  </span>
</a>
  </div>
</section>

<section class="dq-section-block">
  <h2>Lord 基础牌组：随机攻击候选</h2>
  <div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/attack1">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="eager"></span></span>
  <strong>攻击（1）</strong>
  <span class="dq-profession-card-meta">Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（1）</strong>
      <small>Attack (1) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 1 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/attack2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="eager"></span></span>
  <strong>攻击（2）</strong>
  <span class="dq-profession-card-meta">Attack (2) · 攻击 · 1 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（2）</strong>
      <small>Attack (2) · 攻击 · 1 阶 · 0 行动点 / 0 法力</small>
      <em>造成 2 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/attack3">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="eager"></span></span>
  <strong>攻击（3）</strong>
  <span class="dq-profession-card-meta">Attack (3) · 攻击 · 2 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（3）</strong>
      <small>Attack (3) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 3 点攻击伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/attack4">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack4__47.png" alt="攻击（4）" loading="eager"></span></span>
  <strong>攻击（4）</strong>
  <span class="dq-profession-card-meta">Attack (4) · 攻击 · 2 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack4__47.png" alt="攻击（4）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>攻击（4）</strong>
      <small>Attack (4) · 攻击 · 2 阶 · 0 行动点 / 0 法力</small>
      <em>造成 4 点攻击伤害。</em>
    </span>
  </span>
</a>
  </div>
</section>

<section class="dq-section-block">
  <h2>SUPER_EQUIPPED 起手装备</h2>
  <div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/boots-of-speed">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/BootsOfSpeed__224.png" alt="疾速靴" loading="eager"></span></span>
  <strong>疾速靴</strong>
  <span class="dq-profession-card-meta">Boots of Speed · 装备 · 7 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/BootsOfSpeed__224.png" alt="疾速靴" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>疾速靴</strong>
      <small>Boots of Speed · 装备 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，抽 1 张牌并获得 1 行动点。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/celestial-plate">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="eager"></span></span>
  <strong>天界板甲</strong>
  <span class="dq-profession-card-meta">Celestial Plate · 装备 · 9 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>天界板甲</strong>
      <small>Celestial Plate · 装备 · 9 阶 · 0 行动点 / 0 法力</small>
      <em>获得&lt;减伤 1&gt;。回复 2 点生命 在每个回合开始时。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/donnerschwert">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/Donnerschwert__264.png" alt="雷霆剑" loading="eager"></span></span>
  <strong>雷霆剑</strong>
  <span class="dq-profession-card-meta">Donnerschwert · 装备 · 6 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/Donnerschwert__264.png" alt="雷霆剑" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>雷霆剑</strong>
      <small>Donnerschwert · 装备 · 6 阶 · 0 行动点 / 0 法力</small>
      <em>每当你打出 1 个 攻击牌，造成 1 点电系伤害。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/jasras-tome">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/JasrasTome__235.png" alt="贾斯拉的秘典" loading="eager"></span></span>
  <strong>贾斯拉的秘典</strong>
  <span class="dq-profession-card-meta">Jasra's Tome · 装备 · 7 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/JasrasTome__235.png" alt="贾斯拉的秘典" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>贾斯拉的秘典</strong>
      <small>Jasra's Tome · 装备 · 7 阶 · 0 行动点 / 0 法力</small>
      <em>在你的回合开始时，从牌库抽取下一张法术牌。</em>
    </span>
  </span>
</a>
  </div>
</section>

<section class="dq-section-block">
  <h2>阈值与惩罚机制相关牌</h2>
  <div class="dq-profession-card-grid dq-effect-card-grid">
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/crush-all">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/CrushAll__400.png" alt="碾碎一切" loading="eager"></span></span>
  <strong>碾碎一切</strong>
  <span class="dq-profession-card-meta">Crush Everything · 行动牌 · 5 阶 · 1 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/CrushAll__400.png" alt="碾碎一切" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>碾碎一切</strong>
      <small>Crush Everything · 行动牌 · 5 阶 · 1 行动点 / 0 法力</small>
      <em>摧毁对手所有装备。放逐 此 牌。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-curses-final">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyCursesFinal__978.png" alt="最终诅咒惩罚" loading="eager"></span></span>
  <strong>最终诅咒惩罚</strong>
  <span class="dq-profession-card-meta">Penalty Curses Final · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyCursesFinal__978.png" alt="最终诅咒惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>最终诅咒惩罚</strong>
      <small>Penalty Curses Final · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-damage-final">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamageFinal__998.png" alt="最终伤害惩罚" loading="eager"></span></span>
  <strong>最终伤害惩罚</strong>
  <span class="dq-profession-card-meta">Penalty Damage Final · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamageFinal__998.png" alt="最终伤害惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>最终伤害惩罚</strong>
      <small>Penalty Damage Final · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-exile-hand">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyExileHand__208.png" alt="放逐手牌惩罚" loading="eager"></span></span>
  <strong>放逐手牌惩罚</strong>
  <span class="dq-profession-card-meta">Penalty Exile Hand · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyExileHand__208.png" alt="放逐手牌惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>放逐手牌惩罚</strong>
      <small>Penalty Exile Hand · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-minus-action">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction__531.png" alt="行动点减少惩罚" loading="eager"></span></span>
  <strong>行动点减少惩罚</strong>
  <span class="dq-profession-card-meta">Penalty Minus Action · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction__531.png" alt="行动点减少惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>行动点减少惩罚</strong>
      <small>Penalty Minus Action · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-minus-action2">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction2__225.png" alt="行动点减少惩罚（2）" loading="eager"></span></span>
  <strong>行动点减少惩罚（2）</strong>
  <span class="dq-profession-card-meta">Penalty Minus Action2 · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction2__225.png" alt="行动点减少惩罚（2）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>行动点减少惩罚（2）</strong>
      <small>Penalty Minus Action2 · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-minus-card">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="eager"></span></span>
  <strong>手牌减少惩罚</strong>
  <span class="dq-profession-card-meta">Penalty Minus Card · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>手牌减少惩罚</strong>
      <small>Penalty Minus Card · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-poison8">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison8__632.png" alt="中毒惩罚（8）" loading="eager"></span></span>
  <strong>中毒惩罚（8）</strong>
  <span class="dq-profession-card-meta">Penalty Poison8 · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison8__632.png" alt="中毒惩罚（8）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>中毒惩罚（8）</strong>
      <small>Penalty Poison8 · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-poison-final">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoisonFinal__681.png" alt="最终中毒惩罚" loading="eager"></span></span>
  <strong>最终中毒惩罚</strong>
  <span class="dq-profession-card-meta">Penalty Poison Final · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoisonFinal__681.png" alt="最终中毒惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>最终中毒惩罚</strong>
      <small>Penalty Poison Final · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-puppet">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPuppet__883.png" alt="傀儡惩罚" loading="eager"></span></span>
  <strong>傀儡惩罚</strong>
  <span class="dq-profession-card-meta">Penalty Puppet · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPuppet__883.png" alt="傀儡惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>傀儡惩罚</strong>
      <small>Penalty Puppet · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-ward30">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyWard30__543.png" alt="护盾惩罚（30）" loading="eager"></span></span>
  <strong>护盾惩罚（30）</strong>
  <span class="dq-profession-card-meta">Penalty Ward30 · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyWard30__543.png" alt="护盾惩罚（30）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护盾惩罚（30）</strong>
      <small>Penalty Ward30 · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
<a class="dq-profession-card-link dq-effect-card-entry" href="/cards/penalty-ward-final">
  <span class="dq-deck-card-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyWardFinal__54.png" alt="最终护盾惩罚" loading="eager"></span></span>
  <strong>最终护盾惩罚</strong>
  <span class="dq-profession-card-meta">Penalty Ward Final · 其它 · 0 阶 · 0 行动点 / 0 法力</span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyWardFinal__54.png" alt="最终护盾惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>最终护盾惩罚</strong>
      <small>Penalty Ward Final · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a>
  </div>
</section>
