---
title: "梦境之主：BossAttr 与楼层暗示"
description: "三组 BossAttr、Portent 提示、楼层入口文本、玩家可见效果和变形后的能力改写。"
---


<section class="dq-wide-panel">
  <p class="dq-kicker">梦境之主 · Lord of the Dream</p>
  <h1>梦境之主：BossAttr 与楼层暗示</h1>
  <p class="dq-lede">三组 BossAttr、Portent 提示、楼层入口文本、玩家可见效果和变形后的能力改写。</p>
  <div class="dq-action-row">
    <a class="dq-button" href="/mechanics/lord-of-the-dream">梦境之主总览</a>
    <a class="dq-button dq-button-secondary" href="/monsters/lord-of-the-dream">怪物图鉴条目</a>
  </div>
</section>

<section class="dq-section-block">
  <h2>BossAttr 三组能力</h2>
  <table class="dq-data-table">
    <thead><tr><th>组别</th><th>候选</th><th>用途</th></tr></thead>
    <tbody>
<tr><td>第一组</td><td>王令 / 死亡选择 / 卡牌衰变 / 贡品</td><td>决定最终战的规则压力。</td></tr>
<tr><td>第二组</td><td>物理抗性 / 元素抗性 / 压缩时间 / 双回合</td><td>决定抗性与战斗节奏。</td></tr>
<tr><td>第三组</td><td>吸血 / 穿透 / 中毒 / 重装</td><td>决定攻击附加或起手装备。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>楼层入口文本暗示</h2>
  <p class="dq-note">普通前三层的进入文本会在末尾追加 “Beware the Lord of the Dream. He has ...” 这段警告。警告中的三句分别来自三组 BossAttr；第四层进入时改为最终王座文本，不再用这段暗示。</p>
  <table class="dq-data-table">
    <thead><tr><th>英文原句</th><th>对应能力</th><th>含义</th></tr></thead>
    <tbody>
<tr><td>When he speaks, those that disobey are punished cruelly.</td><td>王令 / Makes decrees</td><td>战斗中会出现 Current Decrees。玩家打牌违反当前王令时，失去 5 点最大生命。</td></tr>
<tr><td>When he sings, those who listen go slowly mad.</td><td>死亡选择 / Makes you choose your death</td><td>每个 Lord 回合会出现 Pick Your Poison，从若干坏结果里选择一个立即承受。</td></tr>
<tr><td>When he dances, thoughts wither and die.</td><td>卡牌衰变 / Your cards decay</td><td>玩家打牌后会进行衰变检查；基础条件通过后还要过一次 50% 随机判定，成功时才会替换对应牌库实体。</td></tr>
<tr><td>When he beckons, all must give him gifts.</td><td>贡品 / Requires gifts</td><td>每个 Lord 回合要求交出若干对象。需求数量按 1、1、2、2、3、3 这样的节奏增加。</td></tr>
<tr><td>His skin shatters swords.</td><td>物理抗性 / Physical resistant</td><td>Lord 获得物理抗性，物理伤害减半。</td></tr>
<tr><td>His body breaks storms.</td><td>元素抗性 / Elemental resistant</td><td>Lord 获得元素抗性，火焰、电系、冰霜、毒性等元素伤害减半。</td></tr>
<tr><td>His gaze halts arrows in flight.</td><td>压缩时间 / Reduces your time</td><td>玩家回合进入 15 秒限时。这里不是减少行动点，也不改变行动点上限。</td></tr>
<tr><td>His will bends time.</td><td>双回合 / Takes double turns</td><td>Lord 获得双回合节奏，会更频繁地抽牌、行动，并触发自己的回合开始能力。</td></tr>
<tr><td>They say his mother was a vampire.</td><td>吸血 / Vampiric</td><td>Lord 每回合造成的物理伤害每满 3 点，回复 1 点生命。</td></tr>
<tr><td>They say his mother was a harpy.</td><td>穿透 / Piercing</td><td>Lord 的攻击偏向 Piercing / 穿透结算，对只靠护盾或减伤硬扛的角色更危险。</td></tr>
<tr><td>They say his father was a serpent.</td><td>中毒 / Poisonous</td><td>Lord 回合开始时使玩家中毒 3。</td></tr>
<tr><td>They say his father was a titan.</td><td>重装 / Well-armored</td><td>Lord 起手带 4 件固定装备：Boots of Speed、Celestial Plate、Donnerschwert、Jasra's Tome。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>BossAttr 玩家可见效果</h2>
  <table class="dq-data-table">
    <thead><tr><th>能力</th><th>Portent 提示</th><th>入口文本暗示</th><th>玩家可见效果</th></tr></thead>
    <tbody>
<tr>
  <td><strong>王令</strong><br><small><code>0 · DECREE</code> · 第一组</small></td>
  <td>Makes decrees</td>
  <td>When he speaks, those that disobey are punished cruelly.</td>
  <td>战斗中会出现 Current Decrees。玩家打牌违反当前王令时，失去 5 点最大生命。</td>
</tr>
<tr>
  <td><strong>死亡选择</strong><br><small><code>1 · CHOICES</code> · 第一组</small></td>
  <td>Makes you choose your death</td>
  <td>When he sings, those who listen go slowly mad.</td>
  <td>每个 Lord 回合会出现 Pick Your Poison，从若干坏结果里选择一个立即承受。</td>
</tr>
<tr>
  <td><strong>卡牌衰变</strong><br><small><code>2 · CANCELS</code> · 第一组</small></td>
  <td>Your cards decay</td>
  <td>When he dances, thoughts wither and die.</td>
  <td>玩家打牌后会进行衰变检查；基础条件通过后还要过一次 50% 随机判定，成功时才会替换对应牌库实体。</td>
</tr>
<tr>
  <td><strong>贡品</strong><br><small><code>3 · GIFTS</code> · 第一组</small></td>
  <td>Requires gifts</td>
  <td>When he beckons, all must give him gifts.</td>
  <td>每个 Lord 回合要求交出若干对象。需求数量按 1、1、2、2、3、3 这样的节奏增加。</td>
</tr>
<tr>
  <td><strong>物理抗性</strong><br><small><code>4 · PHYS_IMMUNE</code> · 第二组</small></td>
  <td>Physical resistant</td>
  <td>His skin shatters swords.</td>
  <td>Lord 获得物理抗性，物理伤害减半。</td>
</tr>
<tr>
  <td><strong>元素抗性</strong><br><small><code>5 · ELEMENT_IMMUNE</code> · 第二组</small></td>
  <td>Elemental resistant</td>
  <td>His body breaks storms.</td>
  <td>Lord 获得元素抗性，火焰、电系、冰霜、毒性等元素伤害减半。</td>
</tr>
<tr>
  <td><strong>压缩时间</strong><br><small><code>6 · FAST</code> · 第二组</small></td>
  <td>Reduces your time</td>
  <td>His gaze halts arrows in flight.</td>
  <td>玩家回合进入 15 秒限时。这里不是减少行动点，也不改变行动点上限。</td>
</tr>
<tr>
  <td><strong>双回合</strong><br><small><code>7 · DOUBLE_TURN</code> · 第二组</small></td>
  <td>Takes double turns</td>
  <td>His will bends time.</td>
  <td>Lord 获得双回合节奏，会更频繁地抽牌、行动，并触发自己的回合开始能力。</td>
</tr>
<tr>
  <td><strong>吸血</strong><br><small><code>8 · VAMPIRIC</code> · 第三组</small></td>
  <td>Vampiric</td>
  <td>They say his mother was a vampire.</td>
  <td>Lord 每回合造成的物理伤害每满 3 点，回复 1 点生命。</td>
</tr>
<tr>
  <td><strong>穿透</strong><br><small><code>9 · FLAVORED</code> · 第三组</small></td>
  <td>Piercing</td>
  <td>They say his mother was a harpy.</td>
  <td>Lord 的攻击偏向 Piercing / 穿透结算，对只靠护盾或减伤硬扛的角色更危险。</td>
</tr>
<tr>
  <td><strong>中毒</strong><br><small><code>10 · POISONOUS</code> · 第三组</small></td>
  <td>Poisonous</td>
  <td>They say his father was a serpent.</td>
  <td>Lord 回合开始时使玩家中毒 3。</td>
</tr>
<tr>
  <td><strong>重装</strong><br><small><code>11 · SUPER_EQUIPPED</code> · 第三组</small></td>
  <td>Well-armored</td>
  <td>They say his father was a titan.</td>
  <td>Lord 起手带 4 件固定装备：Boots of Speed、Celestial Plate、Donnerschwert、Jasra's Tome。</td>
</tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>BossAttr 具体效果汇总</h2>
  <table class="dq-data-table">
    <thead><tr><th>类型</th><th>具体效果</th></tr></thead>
    <tbody>
<tr><td>回合触发</td><td>死亡选择会在每个 Lord 回合让玩家选择一个坏结果；贡品会在每个 Lord 回合要求交出对象，数量按 1、1、2、2、3、3 递增。</td></tr>
<tr><td>出牌限制</td><td>王令会在战斗中生成当前规则，玩家违反时失去 5 点最大生命。</td></tr>
<tr><td>牌库压力</td><td>卡牌衰变会在玩家打牌后进行条件检查；基础条件通过后还要过一次 50% 随机判定，成功时才把对应牌库实体替换成衰变目标。不是每次出牌都一定变差，但拖得越久越容易压低牌库质量。</td></tr>
<tr><td>抗性与伤害</td><td>物理抗性让物理伤害减半；元素抗性让火焰、电系、冰霜、毒性等元素伤害减半；吸血按每回合物理伤害每 3 点回复 1 点生命；中毒是在 Lord 回合开始时给玩家中毒 3。</td></tr>
<tr><td>节奏与装备</td><td>压缩时间给玩家 15 秒回合限制；双回合让 Lord 更频繁行动；重装让 Lord 起手获得 4 件固定装备。</td></tr>
<tr><td>额外装备惩罚</td><td>Crush Everything 不属于三组 BossAttr，而是最终战固定的回合阈值机制。到第 10、20、30……次全局回合后的 Lord 回合开始，会生成一张 Crush Everything，摧毁玩家所有装备并放逐自身。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>变形后的能力变化规律</h2>
  <p class="dq-note">把 Lord 的能力看成三格：第一格是规则压力，第二格是抗性 / 节奏，第三格是攻击附加。Polymorph 和 Wild Shape 命中 Lord 时，先读第一格，再按下表重新写入三格能力。</p>
  <p class="dq-note">读法：只看左边“当前第一组”。第二组和第三组原本是什么，不参与分支判断；它们会直接按表中的候选重新抽。改写后，后续 Portent、楼层入口文本和最终战都读取新结果。</p>
  <table class="dq-data-table">
    <thead><tr><th>当前第一组</th><th>变形后第一组</th><th>变形后第二组</th><th>变形后第三组</th></tr></thead>
    <tbody>
<tr><td>王令 / Makes decrees</td><td>王令、死亡选择、卡牌衰变、贡品，各 1/4</td><td>物理抗性、元素抗性、压缩时间、双回合，各 1/4</td><td>吸血、穿透、中毒、重装，各 1/4</td></tr>
<tr><td>死亡选择 / Makes you choose your death</td><td>王令 1/3；卡牌衰变 2/3</td><td>物理抗性、元素抗性、压缩时间，各 1/3</td><td>吸血、穿透、中毒，各 1/3</td></tr>
<tr><td>卡牌衰变 / Your cards decay</td><td>王令、死亡选择、贡品，各 1/3</td><td>物理抗性、元素抗性、压缩时间，各 1/3</td><td>吸血、穿透、中毒，各 1/3</td></tr>
<tr><td>贡品 / Requires gifts</td><td>王令、死亡选择、卡牌衰变，各 1/3</td><td>物理抗性、元素抗性、压缩时间，各 1/3</td><td>吸血、穿透、中毒，各 1/3</td></tr>
    </tbody>
  </table>
  <p class="dq-note">例子：如果当前第一组是死亡选择，变形后第一组只会在王令和卡牌衰变之间产生；同时第二组在物理抗性 / 元素抗性 / 压缩时间中重抽，第三组在吸血 / 穿透 / 中毒中重抽。</p>
</section>
