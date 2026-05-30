---
title: "梦境之主：卡牌衰变"
description: "Your cards decay 的触发条件、50% 随机判定、默认衰变目标和完整卡图衰变链。"
---


<section class="dq-wide-panel">
  <p class="dq-kicker">梦境之主 · Lord of the Dream</p>
  <h1>梦境之主：卡牌衰变</h1>
  <p class="dq-lede">Your cards decay 的触发条件、50% 随机判定、默认衰变目标和完整卡图衰变链。</p>
  <div class="dq-action-row">
    <a class="dq-button" href="/mechanics/lord-of-the-dream">梦境之主总览</a>
    <a class="dq-button dq-button-secondary" href="/monsters/lord-of-the-dream">怪物图鉴条目</a>
  </div>
</section>

<section class="dq-section-block">
  <h2>CARD_DECAY · 卡牌衰变触发检查</h2>
  <table class="dq-data-table">
    <thead><tr><th>检查</th><th>通过条件</th><th>未通过 / 实际结果</th></tr></thead>
    <tbody>
<tr><td>前置状态</td><td>Lord 拥有 Your cards decay，玩家侧衰变标记生效，且本次由玩家打出一张牌。</td><td>不满足时不进入衰变流程。</td></tr>
<tr><td>出牌结算</td><td>当前这张牌先正常结算效果，然后才检查衰变。</td><td>衰变不会取消本次出牌，也不会改变已经结算的效果。</td></tr>
<tr><td>特殊牌过滤</td><td>少数特殊牌类型会直接跳过衰变检查。</td><td>这些牌打出后不会改写牌库。</td></tr>
<tr><td>随机判定</td><td>通过基础检查后调用战斗随机布尔。这个布尔结果袋每 20 次包含 10 次成功、10 次失败，洗乱后逐个消耗；单次看就是 50%。</td><td>判定失败时，本次出牌不会让牌库变化。</td></tr>
<tr><td>定位牌库实体</td><td>游戏能找到这张被打出的牌对应的可替换实体。</td><td>找不到对应实体时，本次出牌不会让牌库变化。</td></tr>
<tr><td>执行替换</td><td>通过检查后，把找到的那张牌库实体替换成衰变目标。</td><td>影响主要体现在之后再抽到它时，而不是当前这次出牌。</td></tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>CARD_DECAY · 默认衰变目标</h2>
  <p class="dq-note">如果一张牌自己的 metadata 里有 DecayTo，就优先使用那个目标；没有明确 DecayTo 时，再按下面的基础类别退化。</p>
  <table class="dq-data-table dq-decay-default-table">
    <thead><tr><th>牌的情况</th><th>默认目标</th><th>说明</th></tr></thead>
    <tbody>
<tr>
  <td>攻击牌没有明确 DecayTo</td>
  <td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td>
  <td>退成最基础的攻击。</td>
</tr>
<tr>
  <td>行动牌没有明确 DecayTo</td>
  <td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td>
  <td>退成基础行动伤害牌。</td>
</tr>
<tr>
  <td>法术牌没有明确 DecayTo</td>
  <td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td>
  <td>退成基础火焰法术。</td>
</tr>
<tr>
  <td>其他牌没有明确 DecayTo</td>
  <td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td>
  <td>通常落到基础法力牌；显式 DecayTo 仍然优先生效。</td>
</tr>
    </tbody>
  </table>
</section>

<section class="dq-section-block">
  <h2>CARD_DECAY · 显式衰变链</h2>
  <p class="dq-note">下表只列出 metadata 里有明确 DecayTo 的卡牌链。读法是从左到右：本次随机判定成功后，牌库里的那张牌会被替换成右侧下一列。</p>
  <table class="dq-data-table dq-decay-chain-table">
    <thead><tr><th>起始牌</th><th>衰变 1</th><th>衰变 2</th><th>衰变 3</th><th>衰变 4</th><th>衰变 5</th><th>衰变 6</th><th>衰变 7</th></tr></thead>
    <tbody>
<tr><td><a class="dq-decay-chain-card" href="/cards/eye-for-an-eye">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/EyeForAnEye__91.png" alt="以眼还眼" loading="lazy"></span></span>
  <strong>以眼还眼</strong>
  <small>法术 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blur">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <strong>模糊</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/stasis">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Stasis__380.png" alt="停滞" loading="lazy"></span></span>
  <strong>停滞</strong>
  <small>法术 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/haste">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="lazy"></span></span>
  <strong>急速</strong>
  <small>法术 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/wisdom">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
  <strong>智慧</strong>
  <small>魔力 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/pilfer">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pilfer__148.png" alt="偷取" loading="lazy"></span></span>
  <strong>偷取</strong>
  <small>行动牌 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/crush">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Crush__623.png" alt="碾碎" loading="lazy"></span></span>
  <strong>碾碎</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/elemental-fortitude">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ElementalFortitude__742.png" alt="元素帷幕" loading="lazy"></span></span>
  <strong>元素帷幕</strong>
  <small>法术 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blur">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <strong>模糊</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/final-fortune">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FinalFortune__696.png" alt="最后机会" loading="lazy"></span></span>
  <strong>最后机会</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/meditation">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Meditation__541.png" alt="冥想" loading="lazy"></span></span>
  <strong>冥想</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/inner-focus">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InnerFocus__290.png" alt="内在专注" loading="lazy"></span></span>
  <strong>内在专注</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sift">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sift__761.png" alt="筛选" loading="lazy"></span></span>
  <strong>筛选</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/frost-charge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="lazy"></span></span>
  <strong>冰霜充能</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/frost-shape">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostShape__80.png" alt="冰霜形态" loading="lazy"></span></span>
  <strong>冰霜形态</strong>
  <small>法术 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blur">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <strong>模糊</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/frost-slash3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostSlash3__641.png" alt="冰霜斩（3）" loading="lazy"></span></span>
  <strong>冰霜斩（3）</strong>
  <small>攻击 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/frost-slash2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostSlash2__800.png" alt="冰霜斩（2）" loading="lazy"></span></span>
  <strong>冰霜斩（2）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/frost-slash1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostSlash1__375.png" alt="冰霜斩（1）" loading="lazy"></span></span>
  <strong>冰霜斩（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/rush">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Rush__792.png" alt="冲刺" loading="lazy"></span></span>
  <strong>冲刺</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/freeze">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Freeze__318.png" alt="冻结" loading="lazy"></span></span>
  <strong>冻结</strong>
  <small>法术 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blizzard">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="lazy"></span></span>
  <strong>暴风雪</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/frost-bolt">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
  <strong>冰霜箭</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/purifying-light">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PurifyingLight__146.png" alt="净化之光" loading="lazy"></span></span>
  <strong>净化之光</strong>
  <small>法术 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/heal">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
  <strong>治疗</strong>
  <small>法术 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/orison">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="lazy"></span></span>
  <strong>短祷</strong>
  <small>法术 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/salve">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
  <strong>治疗药膏</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/blade-flurry">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BladeFlurry__298.png" alt="剑刃乱舞" loading="lazy"></span></span>
  <strong>剑刃乱舞</strong>
  <small>行动牌 · 10 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sidestep">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sidestep__1014.png" alt="侧步" loading="lazy"></span></span>
  <strong>侧步</strong>
  <small>行动牌 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/preparation">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Preparation__456.png" alt="准备" loading="lazy"></span></span>
  <strong>准备</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/wall-of-swords">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WallOfSwords__102.png" alt="剑墙" loading="lazy"></span></span>
  <strong>剑墙</strong>
  <small>行动牌 · 10 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/shield-wall">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ShieldWall__923.png" alt="盾墙" loading="lazy"></span></span>
  <strong>盾墙</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/stoneskin">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="lazy"></span></span>
  <strong>石肤</strong>
  <small>行动牌 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/accelerate">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Accelerate__624.png" alt="加速" loading="lazy"></span></span>
  <strong>加速</strong>
  <small>行动牌 · 10 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/focus">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Focus__690.png" alt="专注" loading="lazy"></span></span>
  <strong>专注</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sift">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sift__761.png" alt="筛选" loading="lazy"></span></span>
  <strong>筛选</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/kinetic-charge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/KineticCharge__546.png" alt="动能充能" loading="lazy"></span></span>
  <strong>动能充能</strong>
  <small>魔力 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/overpower">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Overpower__282.png" alt="压制" loading="lazy"></span></span>
  <strong>压制</strong>
  <small>行动牌 · 10 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/focus">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Focus__690.png" alt="专注" loading="lazy"></span></span>
  <strong>专注</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sift">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sift__761.png" alt="筛选" loading="lazy"></span></span>
  <strong>筛选</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/raw-power">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/RawPower__575.png" alt="原始力量" loading="lazy"></span></span>
  <strong>原始力量</strong>
  <small>魔力 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/absorb-vis">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/AbsorbVis__561.png" alt="吸收魔力" loading="lazy"></span></span>
  <strong>吸收魔力</strong>
  <small>法术 · 10 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/shrink">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Shrink__243.png" alt="缩小" loading="lazy"></span></span>
  <strong>缩小</strong>
  <small>法术 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/meteor">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="lazy"></span></span>
  <strong>流星</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/fireball">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="lazy"></span></span>
  <strong>火球</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/recycle">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Recycle__416.png" alt="回收" loading="lazy"></span></span>
  <strong>回收</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dodge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Dodge__145.png" alt="回避" loading="lazy"></span></span>
  <strong>回避</strong>
  <small>行动牌 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/execute">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Execute__445.png" alt="处决" loading="lazy"></span></span>
  <strong>处决</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/hemorrhage">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Hemorrhage__497.png" alt="大出血" loading="lazy"></span></span>
  <strong>大出血</strong>
  <small>行动牌 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/venom">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Venom__796.png" alt="毒液" loading="lazy"></span></span>
  <strong>毒液</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/infect1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect1__754.png" alt="感染（1）" loading="lazy"></span></span>
  <strong>感染（1）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/conflagration">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="lazy"></span></span>
  <strong>大火</strong>
  <small>法术 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/meteor">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="lazy"></span></span>
  <strong>流星</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/fireball">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="lazy"></span></span>
  <strong>火球</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/study">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Study__609.png" alt="学习" loading="lazy"></span></span>
  <strong>学习</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sift">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sift__761.png" alt="筛选" loading="lazy"></span></span>
  <strong>筛选</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/conduit">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Conduit__1063.png" alt="导流" loading="lazy"></span></span>
  <strong>导流</strong>
  <small>魔力 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/gag">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Gag__608.png" alt="封口" loading="lazy"></span></span>
  <strong>封口</strong>
  <small>行动牌 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/crumble">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Crumble__758.png" alt="崩解" loading="lazy"></span></span>
  <strong>崩解</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/heal">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
  <strong>治疗</strong>
  <small>法术 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/orison">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="lazy"></span></span>
  <strong>短祷</strong>
  <small>法术 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/salve">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
  <strong>治疗药膏</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/collosus-smash">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CollosusSmash__855.png" alt="巨像重击" loading="lazy"></span></span>
  <strong>巨像重击</strong>
  <small>攻击 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/troll-hide">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/TrollHide__332.png" alt="巨魔皮" loading="lazy"></span></span>
  <strong>巨魔皮</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/bandage">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bandage__676.png" alt="绷带" loading="lazy"></span></span>
  <strong>绷带</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/sorcerous-strike3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SorcerousStrike3__571.png" alt="巫术打击（3）" loading="lazy"></span></span>
  <strong>巫术打击（3）</strong>
  <small>攻击 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sorcerous-strike2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SorcerousStrike2__741.png" alt="巫术打击（2）" loading="lazy"></span></span>
  <strong>巫术打击（2）</strong>
  <small>攻击 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sorcerous-strike1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SorcerousStrike1__936.png" alt="巫术打击（1）" loading="lazy"></span></span>
  <strong>巫术打击（1）</strong>
  <small>攻击 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/channel">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Channel__949.png" alt="引导" loading="lazy"></span></span>
  <strong>引导</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/mind-sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/MindSear__711.png" alt="心智灼烧" loading="lazy"></span></span>
  <strong>心智灼烧</strong>
  <small>法术 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/siphon-life">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="lazy"></span></span>
  <strong>吸取生命</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/penance">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="lazy"></span></span>
  <strong>忏悔</strong>
  <small>法术 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/siphon-life">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="lazy"></span></span>
  <strong>吸取生命</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/force-of-will">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ForceOfWill__77.png" alt="意志之力" loading="lazy"></span></span>
  <strong>意志之力</strong>
  <small>法术 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/infect">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect__364.png" alt="感染" loading="lazy"></span></span>
  <strong>感染</strong>
  <small>攻击 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/infect3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect3__612.png" alt="感染（3）" loading="lazy"></span></span>
  <strong>感染（3）</strong>
  <small>攻击 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/infect2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect2__650.png" alt="感染（2）" loading="lazy"></span></span>
  <strong>感染（2）</strong>
  <small>攻击 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/infect1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect1__754.png" alt="感染（1）" loading="lazy"></span></span>
  <strong>感染（1）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/battle-cry">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BattleCry__759.png" alt="战吼" loading="lazy"></span></span>
  <strong>战吼</strong>
  <small>行动牌 · 10 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/focus">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Focus__690.png" alt="专注" loading="lazy"></span></span>
  <strong>专注</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sift">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sift__761.png" alt="筛选" loading="lazy"></span></span>
  <strong>筛选</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/choke">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Choke__500.png" alt="扼喉" loading="lazy"></span></span>
  <strong>扼喉</strong>
  <small>行动牌 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/mimic">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mimic__545.png" alt="拟态" loading="lazy"></span></span>
  <strong>拟态</strong>
  <small>行动牌 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/rallying-stroke">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/RallyingStroke__634.png" alt="振奋一击" loading="lazy"></span></span>
  <strong>振奋一击</strong>
  <small>攻击 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/expose">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Expose__968.png" alt="揭露" loading="lazy"></span></span>
  <strong>揭露</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/discharge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Discharge__734.png" alt="放电" loading="lazy"></span></span>
  <strong>放电</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/shock">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="lazy"></span></span>
  <strong>震击</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/alacrity">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Alacrity__249.png" alt="敏捷" loading="lazy"></span></span>
  <strong>敏捷</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/swiftness">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Swiftness__668.png" alt="迅捷" loading="lazy"></span></span>
  <strong>迅捷</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/slice">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="lazy"></span></span>
  <strong>切割</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/slash">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slash__247.png" alt="斩击" loading="lazy"></span></span>
  <strong>斩击</strong>
  <small>攻击 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/hamstring">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Hamstring__1038.png" alt="断筋" loading="lazy"></span></span>
  <strong>断筋</strong>
  <small>行动牌 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/blight">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blight__788.png" alt="枯萎" loading="lazy"></span></span>
  <strong>枯萎</strong>
  <small>法术 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/acid-rain">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/AcidRain__397.png" alt="酸雨" loading="lazy"></span></span>
  <strong>酸雨</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/acid-lance">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/AcidLance__261.png" alt="酸蚀长矛" loading="lazy"></span></span>
  <strong>酸蚀长矛</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/earth-shape">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/EarthShape__305.png" alt="毒性形态" loading="lazy"></span></span>
  <strong>毒性形态</strong>
  <small>法术 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blur">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <strong>模糊</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/mana-surge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="lazy"></span></span>
  <strong>法力激涌</strong>
  <small>魔力 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/mana-swell">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ManaSwell__625.png" alt="法力膨胀" loading="lazy"></span></span>
  <strong>法力膨胀</strong>
  <small>魔力 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/circle">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Circle__89.png" alt="法阵" loading="lazy"></span></span>
  <strong>法阵</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/swiftness">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Swiftness__668.png" alt="迅捷" loading="lazy"></span></span>
  <strong>迅捷</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/slice">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="lazy"></span></span>
  <strong>切割</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/bleed">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bleed__414.png" alt="流血" loading="lazy"></span></span>
  <strong>流血</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/slice">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="lazy"></span></span>
  <strong>切割</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/clarity">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Clarity__420.png" alt="清明" loading="lazy"></span></span>
  <strong>清明</strong>
  <small>魔力 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/obliterate">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Obliterate__627.png" alt="湮灭" loading="lazy"></span></span>
  <strong>湮灭</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/crush">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Crush__623.png" alt="碾碎" loading="lazy"></span></span>
  <strong>碾碎</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/flame-charge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameCharge__686.png" alt="火焰充能" loading="lazy"></span></span>
  <strong>火焰充能</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/fire-shape">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="lazy"></span></span>
  <strong>火焰形态</strong>
  <small>法术 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blur">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <strong>模糊</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/flame-slash3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameSlash3__965.png" alt="火焰斩（3）" loading="lazy"></span></span>
  <strong>火焰斩（3）</strong>
  <small>攻击 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/flame-slash2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="lazy"></span></span>
  <strong>火焰斩（2）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/flame-slash1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameSlash1__745.png" alt="火焰斩（1）" loading="lazy"></span></span>
  <strong>火焰斩（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/inspiration">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="lazy"></span></span>
  <strong>灵感</strong>
  <small>魔力 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/psionic-blast">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PsionicBlast__592.png" alt="灵能冲击" loading="lazy"></span></span>
  <strong>灵能冲击</strong>
  <small>行动牌 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/soulfire">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="lazy"></span></span>
  <strong>灵魂火</strong>
  <small>法术 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/siphon-life">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="lazy"></span></span>
  <strong>吸取生命</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/soul-siphon">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SoulSiphon__430.png" alt="灵魂虹吸" loading="lazy"></span></span>
  <strong>灵魂虹吸</strong>
  <small>法术 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/vapor-form">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/VaporForm__92.png" alt="蒸汽形态" loading="lazy"></span></span>
  <strong>蒸汽形态</strong>
  <small>法术 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blur">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <strong>模糊</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/berserker-strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BerserkerStrike__75.png" alt="狂战打击" loading="lazy"></span></span>
  <strong>狂战打击</strong>
  <small>攻击 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/wild-strike3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WildStrike3__219.png" alt="狂野打击（3）" loading="lazy"></span></span>
  <strong>狂野打击（3）</strong>
  <small>行动牌 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/wild-strike2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WildStrike2__455.png" alt="狂野打击（2）" loading="lazy"></span></span>
  <strong>狂野打击（2）</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/wild-strike1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WildStrike1__911.png" alt="狂野打击（1）" loading="lazy"></span></span>
  <strong>狂野打击（1）</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/wild-mana">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WildMana__274.png" alt="狂野法力" loading="lazy"></span></span>
  <strong>狂野法力</strong>
  <small>魔力 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/wisdom">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
  <strong>智慧</strong>
  <small>魔力 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/wolf">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Wolf__346.png" alt="狼" loading="lazy"></span></span>
  <strong>狼</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/maul">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Maul__393.png" alt="猛击" loading="lazy"></span></span>
  <strong>猛击</strong>
  <small>攻击 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/bite">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bite__565.png" alt="撕咬" loading="lazy"></span></span>
  <strong>撕咬</strong>
  <small>攻击 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/rake">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Rake__56.png" alt="撕抓" loading="lazy"></span></span>
  <strong>撕抓</strong>
  <small>攻击 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/shield-bash">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ShieldBash__201.png" alt="盾击" loading="lazy"></span></span>
  <strong>盾击</strong>
  <small>攻击 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/vile-charge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/VileCharge__69.png" alt="石化充能" loading="lazy"></span></span>
  <strong>石化充能</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/sundering-strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike__899.png" alt="破甲打击" loading="lazy"></span></span>
  <strong>破甲打击</strong>
  <small>攻击 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/sundering-strike3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike3__119.png" alt="破甲打击（3）" loading="lazy"></span></span>
  <strong>破甲打击（3）</strong>
  <small>攻击 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sundering-strike2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike2__492.png" alt="破甲打击（2）" loading="lazy"></span></span>
  <strong>破甲打击（2）</strong>
  <small>攻击 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sundering-strike1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike1__328.png" alt="破甲打击（1）" loading="lazy"></span></span>
  <strong>破甲打击（1）</strong>
  <small>攻击 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/skullcrack">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SkullCrack__473.png" alt="碎颅" loading="lazy"></span></span>
  <strong>碎颅</strong>
  <small>攻击 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack4">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack4__47.png" alt="攻击（4）" loading="lazy"></span></span>
  <strong>攻击（4）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/bless">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bless__316.png" alt="祝福" loading="lazy"></span></span>
  <strong>祝福</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/ward">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="lazy"></span></span>
  <strong>护盾守卫</strong>
  <small>法术 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/heal">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
  <strong>治疗</strong>
  <small>法术 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/orison">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="lazy"></span></span>
  <strong>短祷</strong>
  <small>法术 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/salve">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
  <strong>治疗药膏</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/divine-inspiration">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DivineInspiration__886.png" alt="神圣启示" loading="lazy"></span></span>
  <strong>神圣启示</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/wisdom">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
  <strong>智慧</strong>
  <small>魔力 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/holy-strike3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HolyStrike3__701.png" alt="神圣打击（3）" loading="lazy"></span></span>
  <strong>神圣打击（3）</strong>
  <small>攻击 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/holy-strike2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HolyStrike2__336.png" alt="神圣打击（2）" loading="lazy"></span></span>
  <strong>神圣打击（2）</strong>
  <small>攻击 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/holy-strike1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HolyStrike1__443.png" alt="神圣打击（1）" loading="lazy"></span></span>
  <strong>神圣打击（1）</strong>
  <small>攻击 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/wrath-of-god">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WrathOfGod__76.png" alt="神怒" loading="lazy"></span></span>
  <strong>神怒</strong>
  <small>法术 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/haste">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="lazy"></span></span>
  <strong>急速</strong>
  <small>法术 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/wisdom">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
  <strong>智慧</strong>
  <small>魔力 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/skewer">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Skewer__60.png" alt="穿刺" loading="lazy"></span></span>
  <strong>穿刺</strong>
  <small>行动牌 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/jab">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Jab__408.png" alt="刺拳" loading="lazy"></span></span>
  <strong>刺拳</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/slice">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="lazy"></span></span>
  <strong>切割</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/piercing-stab">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PiercingStab__246.png" alt="穿透刺击" loading="lazy"></span></span>
  <strong>穿透刺击</strong>
  <small>行动牌 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/slice">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="lazy"></span></span>
  <strong>切割</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/penetrating-palm">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenetratingPalm__488.png" alt="穿透掌" loading="lazy"></span></span>
  <strong>穿透掌</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/second-strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SecondStrike__554.png" alt="第二击" loading="lazy"></span></span>
  <strong>第二击</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/second-wind">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SecondWind__1032.png" alt="复苏之风" loading="lazy"></span></span>
  <strong>复苏之风</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/inner-strength">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InnerStrength__798.png" alt="重新思考" loading="lazy"></span></span>
  <strong>重新思考</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sift">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sift__761.png" alt="筛选" loading="lazy"></span></span>
  <strong>筛选</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/mental-fortress">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/MentalFortress__904.png" alt="精神堡垒" loading="lazy"></span></span>
  <strong>精神堡垒</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/bandage">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bandage__676.png" alt="绷带" loading="lazy"></span></span>
  <strong>绷带</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/pure-thoughts">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PureThoughts__434.png" alt="纯净思绪" loading="lazy"></span></span>
  <strong>纯净思绪</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/inner-peace">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InnerPeace__605.png" alt="内心平静" loading="lazy"></span></span>
  <strong>内心平静</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/inner-focus">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InnerFocus__290.png" alt="内在专注" loading="lazy"></span></span>
  <strong>内在专注</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sift">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sift__761.png" alt="筛选" loading="lazy"></span></span>
  <strong>筛选</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/last-chance">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/LastChance__466.png" alt="绝望打击" loading="lazy"></span></span>
  <strong>绝望打击</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/corrosive-slash3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CorrosiveSlash3__874.png" alt="腐蚀斩（3）" loading="lazy"></span></span>
  <strong>腐蚀斩（3）</strong>
  <small>攻击 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/corrosive-slash2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CorrosiveSlash2__385.png" alt="腐蚀斩（2）" loading="lazy"></span></span>
  <strong>腐蚀斩（2）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/corrosive-slash1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CorrosiveSlash1__253.png" alt="腐蚀斩（1）" loading="lazy"></span></span>
  <strong>腐蚀斩（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/natures-blessing">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/NaturesBlessing__790.png" alt="自然祝福" loading="lazy"></span></span>
  <strong>自然祝福</strong>
  <small>法术 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/elemental-surge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ElementalSurge__121.png" alt="元素激涌" loading="lazy"></span></span>
  <strong>元素激涌</strong>
  <small>魔力 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/summon-companions">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SummonCompanions__452.png" alt="召唤伙伴" loading="lazy"></span></span>
  <strong>召唤伙伴</strong>
  <small>法术 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/coup-de-grace">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CoupDeGrace__142.png" alt="致命一击" loading="lazy"></span></span>
  <strong>致命一击</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike3__295.png" alt="打击（3）" loading="lazy"></span></span>
  <strong>打击（3）</strong>
  <small>行动牌 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike2__693.png" alt="打击（2）" loading="lazy"></span></span>
  <strong>打击（2）</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike1__1021.png" alt="打击（1）" loading="lazy"></span></span>
  <strong>打击（1）</strong>
  <small>行动牌 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/extract">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Extract__241.png" alt="萃取" loading="lazy"></span></span>
  <strong>萃取</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/heal">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
  <strong>治疗</strong>
  <small>法术 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/orison">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="lazy"></span></span>
  <strong>短祷</strong>
  <small>法术 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/salve">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
  <strong>治疗药膏</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/tiltowait">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Tiltowait__679.png" alt="蒂尔托维特" loading="lazy"></span></span>
  <strong>蒂尔托维特</strong>
  <small>行动牌 · 10 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/pierce3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pierce3__877.png" alt="穿刺（3）" loading="lazy"></span></span>
  <strong>穿刺（3）</strong>
  <small>攻击 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/pierce2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pierce2__643.png" alt="穿刺（2）" loading="lazy"></span></span>
  <strong>穿刺（2）</strong>
  <small>攻击 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/pierce1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pierce1__726.png" alt="穿刺（1）" loading="lazy"></span></span>
  <strong>穿刺（1）</strong>
  <small>攻击 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/piety">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Piety__928.png" alt="虔诚" loading="lazy"></span></span>
  <strong>虔诚</strong>
  <small>魔力 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/curse-of-weakness">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CurseOfWeakness__795.png" alt="虚弱诅咒" loading="lazy"></span></span>
  <strong>虚弱诅咒</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/bewitch">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bewitch__206.png" alt="蛊惑" loading="lazy"></span></span>
  <strong>蛊惑</strong>
  <small>行动牌 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/charm">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Charm__184.png" alt="魅惑" loading="lazy"></span></span>
  <strong>魅惑</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/misdirection">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Misdirection__188.png" alt="误导" loading="lazy"></span></span>
  <strong>误导</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/jasras-jarring-jolt">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/JasrasJarringJolt__694.png" alt="贾斯拉的震荡电击" loading="lazy"></span></span>
  <strong>贾斯拉的震荡电击</strong>
  <small>法术 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/kick">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Kick__953.png" alt="踢击" loading="lazy"></span></span>
  <strong>踢击</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/overload">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Overload__166.png" alt="过载" loading="lazy"></span></span>
  <strong>过载</strong>
  <small>魔力 · 8 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/smash">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Smash__1047.png" alt="重击" loading="lazy"></span></span>
  <strong>重击</strong>
  <small>攻击 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack4">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack4__47.png" alt="攻击（4）" loading="lazy"></span></span>
  <strong>攻击（4）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/invisibility">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Invisibility__938.png" alt="隐形" loading="lazy"></span></span>
  <strong>隐形</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blur">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <strong>模糊</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/hide">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Hide__619.png" alt="隐藏" loading="lazy"></span></span>
  <strong>隐藏</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/static-charge">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StaticCharge__1061.png" alt="静电充能" loading="lazy"></span></span>
  <strong>静电充能</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/resilience">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="lazy"></span></span>
  <strong>韧性</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/stoneskin">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="lazy"></span></span>
  <strong>石肤</strong>
  <small>行动牌 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/anticipate">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Anticipate__163.png" alt="预判" loading="lazy"></span></span>
  <strong>预判</strong>
  <small>行动牌 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/charm">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Charm__184.png" alt="魅惑" loading="lazy"></span></span>
  <strong>魅惑</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/storm">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Storm__769.png" alt="风暴" loading="lazy"></span></span>
  <strong>风暴</strong>
  <small>法术 · 9 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/electrocute">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Electrocute__1012.png" alt="电刑" loading="lazy"></span></span>
  <strong>电刑</strong>
  <small>法术 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/shock">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="lazy"></span></span>
  <strong>震击</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/sear">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <strong>灼烙</strong>
  <small>法术 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/storm-shape">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormShape__370.png" alt="风暴形态" loading="lazy"></span></span>
  <strong>风暴形态</strong>
  <small>法术 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/blur">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <strong>模糊</strong>
  <small>法术 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/storm-slash3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormSlash3__285.png" alt="风暴斩（3）" loading="lazy"></span></span>
  <strong>风暴斩（3）</strong>
  <small>攻击 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/storm-slash2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
  <strong>风暴斩（2）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/storm-slash1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="lazy"></span></span>
  <strong>风暴斩（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/elusive-power">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ElusivePower__985.png" alt="飘忽之力" loading="lazy"></span></span>
  <strong>飘忽之力</strong>
  <small>魔力 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/mahamat">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mahamat__568.png" alt="马哈马特" loading="lazy"></span></span>
  <strong>马哈马特</strong>
  <small>法术 · 10 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/ward">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="lazy"></span></span>
  <strong>护盾守卫</strong>
  <small>法术 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/heal">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
  <strong>治疗</strong>
  <small>法术 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/orison">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="lazy"></span></span>
  <strong>短祷</strong>
  <small>法术 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/salve">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
  <strong>治疗药膏</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/harry">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Harry__123.png" alt="骚扰" loading="lazy"></span></span>
  <strong>骚扰</strong>
  <small>攻击 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <strong>攻击（3）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dice">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Dice__637.png" alt="骰子" loading="lazy"></span></span>
  <strong>骰子</strong>
  <small>行动牌 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/backstab">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Backstab__352.png" alt="背刺" loading="lazy"></span></span>
  <strong>背刺</strong>
  <small>攻击 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/eagle">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Eagle__389.png" alt="鹰" loading="lazy"></span></span>
  <strong>鹰</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dragons-wisdom">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsWisdom__1011.png" alt="龙之智慧" loading="lazy"></span></span>
  <strong>龙之智慧</strong>
  <small>魔力 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <strong>法力（3）</strong>
  <small>魔力 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <strong>法力（2）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/mana1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <strong>法力（1）</strong>
  <small>魔力 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dragons-snack">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsSnack__994.png" alt="龙之点心" loading="lazy"></span></span>
  <strong>龙之点心</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dragons-roar">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsRoar__722.png" alt="龙吼" loading="lazy"></span></span>
  <strong>龙吼</strong>
  <small>行动牌 · 7 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dragons-bite">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsBite__351.png" alt="龙咬" loading="lazy"></span></span>
  <strong>龙咬</strong>
  <small>攻击 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <strong>攻击（2）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dragons-tail">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsTail__832.png" alt="龙尾" loading="lazy"></span></span>
  <strong>龙尾</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dragons-breath">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsBreath__1018.png" alt="龙息" loading="lazy"></span></span>
  <strong>龙息</strong>
  <small>行动牌 · 5 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dragons-claw3">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw3__629.png" alt="龙爪（3）" loading="lazy"></span></span>
  <strong>龙爪（3）</strong>
  <small>攻击 · 4 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/dragons-claw2">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw2__421.png" alt="龙爪（2）" loading="lazy"></span></span>
  <strong>龙爪（2）</strong>
  <small>攻击 · 2 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/dragons-claw1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw1__854.png" alt="龙爪（1）" loading="lazy"></span></span>
  <strong>龙爪（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/attack1">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <strong>攻击（1）</strong>
  <small>攻击 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/dragons-hide">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsHide__988.png" alt="龙皮" loading="lazy"></span></span>
  <strong>龙皮</strong>
  <small>行动牌 · 6 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
<tr><td><a class="dq-decay-chain-card" href="/cards/turtle">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Turtle__135.png" alt="龟" loading="lazy"></span></span>
  <strong>龟</strong>
  <small>行动牌 · 3 阶</small>
</a></td><td><a class="dq-decay-chain-card" href="/cards/strike">
  <span class="dq-decay-chain-art"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <strong>拍击</strong>
  <small>行动牌 · 1 阶</small>
</a></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td><td><span class="dq-decay-chain-empty">-</span></td></tr>
    </tbody>
  </table>
</section>
