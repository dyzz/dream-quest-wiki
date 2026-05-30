---
title: "梦境之主：王令、贡品与死亡选择"
description: "LordlyDecrees、Requires gifts、Pick Your Poison 的实际结算和对应惩罚牌。"
---


<section class="dq-wide-panel">
  <p class="dq-kicker">梦境之主 · Lord of the Dream</p>
  <h1>梦境之主：王令、贡品与死亡选择</h1>
  <p class="dq-lede">LordlyDecrees、Requires gifts、Pick Your Poison 的实际结算和对应惩罚牌。</p>
  <div class="dq-action-row">
    <a class="dq-button" href="/mechanics/lord-of-the-dream">梦境之主总览</a>
    <a class="dq-button dq-button-secondary" href="/monsters/lord-of-the-dream">怪物图鉴条目</a>
  </div>
</section>

<section class="dq-section-block">
  <h2>DECREE · LordlyDecrees</h2>
  <table class="dq-data-table">
    <thead><tr><th>环节</th><th>玩家需要知道</th></tr></thead>
    <tbody>
<tr><td>当前王令</td><td>界面会提供 Current Decrees 查看入口，玩家可以确认当前仍在生效的限制。</td></tr>
<tr><td>王令类型</td><td>王令围绕 Attack、Action、Mana、Spell、Equipment 等出牌方向生成。</td></tr>
<tr><td>违规检查</td><td>玩家打出卡牌后会检查是否违反当前王令。</td></tr>
<tr><td>违规惩罚</td><td>违反王令会失去 5 点最大生命；这不是普通当前生命伤害。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>GIFTS · 贡品动作</h2>
  <table class="dq-data-table">
    <thead><tr><th>环节</th><th>玩家需要知道</th></tr></thead>
    <tbody>
<tr><td>触发频率</td><td>只有抽到 GIFTS / Requires gifts 时，每个 Lord 回合都会要求贡品。</td></tr>
<tr><td>数量节奏</td><td>需求数量按 1、1、2、2、3、3 递增；战斗越久，单次要求越重。</td></tr>
<tr><td>可交对象</td><td>实际要求会根据玩家当前可交出的对象截断；没有可交对象时不会强行结算。</td></tr>
<tr><td>界面文本</td><td>1 个目标时显示 Give me a gift!，多个目标时显示 Give me N gifts!。</td></tr>
<tr><td>结算结果</td><td>玩家选择交出的对象会离开玩家侧，改为 Lord / 对手侧所有。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>CHOICES · Pick Your Poison</h2>
  <p class="dq-note">CHOICES 不会把所有 Penalty 类都放进选择池。FinalBoss.EvilChoices 明确构造下面 8 个候选，再随机抽取 5 个展示给玩家；玩家选择后 HearWishChoice 把所选项交给选择窗口结算。</p>
  <table class="dq-data-table">
    <thead><tr><th>惩罚牌</th><th>按钮文本</th><th>结算效果</th></tr></thead>
    <tbody>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-curses-final">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyCursesFinal__978.png" alt="最终诅咒惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>最终诅咒惩罚</strong><small>Penalty Curses Final</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyCursesFinal__978.png" alt="最终诅咒惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>最终诅咒惩罚</strong>
      <small>Penalty Curses Final · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Curses!</td>
  <td>若玩家没有 mindImmune，向玩家牌库加入 5 张 Curse，然后洗牌。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-damage-final">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamageFinal__998.png" alt="最终伤害惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>最终伤害惩罚</strong><small>Penalty Damage Final</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamageFinal__998.png" alt="最终伤害惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>最终伤害惩罚</strong>
      <small>Penalty Damage Final · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Damage!</td>
  <td>对玩家造成 20 点类型 6 伤害；类型 6 在最终战同样用于 Piercing / 穿透语义。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-exile-hand">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyExileHand__208.png" alt="放逐手牌惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>放逐手牌惩罚</strong><small>Penalty Exile Hand</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyExileHand__208.png" alt="放逐手牌惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>放逐手牌惩罚</strong>
      <small>Penalty Exile Hand · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Exile Hand!</td>
  <td>遍历玩家当前手牌，把手牌里的牌逐张放逐。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-poison8">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison8__632.png" alt="中毒惩罚（8）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>中毒惩罚（8）</strong><small>Penalty Poison8</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison8__632.png" alt="中毒惩罚（8）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>中毒惩罚（8）</strong>
      <small>Penalty Poison8 · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Poison!</td>
  <td>对玩家施加 8 层 Poison。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-minus-action">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction__531.png" alt="行动点减少惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>行动点减少惩罚</strong><small>Penalty Minus Action</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction__531.png" alt="行动点减少惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>行动点减少惩罚</strong>
      <small>Penalty Minus Action · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Lose Action!</td>
  <td>调用 LoseMaxAction 一次，玩家最大行动点 -1。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-minus-card">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>手牌减少惩罚</strong><small>Penalty Minus Card</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>手牌减少惩罚</strong>
      <small>Penalty Minus Card · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Lose Card!</td>
  <td>调用 LoseMaxCard 一次，玩家每回合抽牌 / 手牌相关上限 -1。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-puppet">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyPuppet__883.png" alt="傀儡惩罚" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>傀儡惩罚</strong><small>Penalty Puppet</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyPuppet__883.png" alt="傀儡惩罚" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>傀儡惩罚</strong>
      <small>Penalty Puppet · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Puppet!</td>
  <td>生成 MimicAction，并按目标参数 0x3b 绑定到玩家侧，形成 Puppet 选择结果。</td>
</tr>
<tr>
  <td><a class="dq-card-chip" href="/cards/penalty-ward30">
  <span class="dq-card-chip-thumb"><span class="dq-game-card dq-game-card-deck"><img src="/assets/extracted/textures/by_container/resources/PenaltyWard30__543.png" alt="护盾惩罚（30）" loading="eager"></span></span>
  <span class="dq-card-chip-copy"><strong>护盾惩罚（30）</strong><small>Penalty Ward30</small></span>
  <span class="dq-card-hover-preview" aria-hidden="true">
    <span class="dq-card-hover-art"><span class="dq-game-card dq-game-card-hover"><img src="/assets/extracted/textures/by_container/resources/PenaltyWard30__543.png" alt="护盾惩罚（30）" loading="lazy"></span></span>
    <span class="dq-card-hover-copy">
      <strong>护盾惩罚（30）</strong>
      <small>Penalty Ward30 · 其它 · 0 阶 · 0 行动点 / 0 法力</small>
      <em>没有规则文本。</em>
    </span>
  </span>
</a></td>
  <td>Ward!</td>
  <td>找到玩家的对手，也就是 Lord，给 Lord 增加 30 点 Ward / Shield。</td>
</tr>
    </tbody>
  </table>
</section>
