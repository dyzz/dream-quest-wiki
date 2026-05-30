---
title: "卡牌图鉴"
description: "按类型浏览 Dream Quest 全量卡牌。"
---


<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const catalog = document.querySelector('[data-card-catalog]');
  const filter = document.querySelector('[data-card-filter]');
  if (!catalog || !filter) {
    return;
  }

  const searchInput = filter.querySelector('[data-card-search-input]');
  const typeFilter = filter.querySelector('[data-card-type-filter]');
  const statusFilter = filter.querySelector('[data-card-status-filter]');
  const tierFilter = filter.querySelector('[data-card-tier-filter]');
  const resetButton = filter.querySelector('[data-card-filter-reset]');
  const resultCount = filter.querySelector('[data-card-result-count]');
  const emptyState = catalog.querySelector('[data-card-empty]');
  const tiles = Array.from(catalog.querySelectorAll('[data-card-tile]'));
  const groups = Array.from(catalog.querySelectorAll('[data-card-group]'));

  const normalize = (value) => String(value || '').trim().toLowerCase();
  const update = () => {
    const query = normalize(searchInput?.value);
    const typeValue = typeFilter?.value || '';
    const statusValue = statusFilter?.value || '';
    const tierValue = tierFilter?.value || '';
    let visibleTotal = 0;

    for (const tile of tiles) {
      const matchesQuery = !query || normalize(tile.dataset.cardSearch).includes(query);
      const matchesType = !typeValue || tile.dataset.cardType === typeValue;
      const matchesStatus = !statusValue || tile.dataset.cardStatus === statusValue;
      const matchesTier = !tierValue || tile.dataset.cardTier === tierValue;
      const visible = matchesQuery && matchesType && matchesStatus && matchesTier;
      tile.hidden = !visible;
      visibleTotal += visible ? 1 : 0;
    }

    for (const group of groups) {
      const visibleTiles = Array.from(group.querySelectorAll('[data-card-tile]')).filter((tile) => !tile.hidden);
      group.hidden = visibleTiles.length === 0;
      const count = group.querySelector('[data-card-group-count]');
      if (count) {
        count.textContent = visibleTiles.length + ' 张';
      }
    }

    if (resultCount) {
      resultCount.textContent = String(visibleTotal);
    }
    if (emptyState) {
      emptyState.hidden = visibleTotal !== 0;
    }
  };

  for (const control of [searchInput, typeFilter, statusFilter, tierFilter]) {
    control?.addEventListener('input', update);
    control?.addEventListener('change', update);
  }
  resetButton?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (typeFilter) typeFilter.value = '';
    if (statusFilter) statusFilter.value = '';
    if (tierFilter) tierFilter.value = '';
    update();
    searchInput?.focus();
  });

  update();
});
</script>
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Cards</p>
    <h1>卡牌图鉴</h1>
    <p class="dq-lede">按卡牌类型整理全量卡表。点击任意卡牌进入详情页，查看规则文本、费用、阶级、metadata 和卡牌出现权重。</p>
  </div>
  <span class="dq-count">370 张卡牌</span>
</section>

<section class="dq-type-grid">
<a href="/cards#attack">
  <strong>攻击</strong>
  <span>58 张</span>
</a>
<a href="/cards#spell">
  <strong>法术</strong>
  <span>50 张</span>
</a>
<a href="/cards#action">
  <strong>行动牌</strong>
  <span>150 张</span>
</a>
<a href="/cards#equipment">
  <strong>装备</strong>
  <span>42 张</span>
</a>
<a href="/cards#reaction">
  <strong>反应</strong>
  <span>14 张</span>
</a>
<a href="/cards#mana">
  <strong>魔力</strong>
  <span>22 张</span>
</a>
<a href="/cards#prayer">
  <strong>祈祷</strong>
  <span>7 张</span>
</a>
<a href="/cards#other">
  <strong>其它</strong>
  <span>27 张</span>
</a>
</section>

<section class="dq-card-filter" data-card-filter>
  <div class="dq-filter-bar">
    <label class="dq-filter-field dq-filter-field-search">
      <span>检索</span>
      <input id="dq-card-search" type="search" autocomplete="off" placeholder="卡名、效果、类型、metadata" data-card-search-input>
    </label>
    <label class="dq-filter-field">
      <span>类型</span>
      <select data-card-type-filter>
        <option value="">全部类型</option>
        <option value="攻击">攻击 · 58</option>
<option value="法术">法术 · 50</option>
<option value="行动牌">行动牌 · 150</option>
<option value="装备">装备 · 42</option>
<option value="反应">反应 · 14</option>
<option value="魔力">魔力 · 22</option>
<option value="祈祷">祈祷 · 7</option>
<option value="其它">其它 · 27</option>
      </select>
    </label>
    <label class="dq-filter-field">
      <span>状态</span>
      <select data-card-status-filter>
        <option value="">全部状态</option>
        <option value="normal">普通 · 193</option>
<option value="profession">职业专属 · 21</option>
<option value="unlock">成就解锁 · 35</option>
<option value="monster">怪物限定 · 121</option>
      </select>
    </label>
    <label class="dq-filter-field">
      <span>阶级</span>
      <select data-card-tier-filter>
        <option value="">全部阶级</option>
        <option value="0">0 阶</option>
<option value="1">1 阶</option>
<option value="2">2 阶</option>
<option value="3">3 阶</option>
<option value="4">4 阶</option>
<option value="5">5 阶</option>
<option value="6">6 阶</option>
<option value="7">7 阶</option>
<option value="8">8 阶</option>
<option value="9">9 阶</option>
<option value="10">10 阶</option>
      </select>
    </label>
  </div>
  <div class="dq-filter-summary">
    <span><strong data-card-result-count>370</strong> 张匹配</span>
    <button type="button" data-card-filter-reset>重置</button>
  </div>
</section>

<div data-card-catalog>
<section class="dq-card-group" data-card-group data-card-group-type="攻击">
<h2 id="attack" class="dq-card-group-title"><span>攻击</span><em data-card-group-count>58 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
<a class="dq-card-tile dq-card-tile-small" href="/cards/frost-slash1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="1" data-card-search="冰霜斩（1） Frost Slash (1) 冰霜斩（1） FrostSlash1 FrostSlash1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 2 @wat damage. 造成 2 点冰霜伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 15 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostSlash1__375.png" alt="冰霜斩（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冰霜斩（1）</strong>
    <small>Frost Slash (1) · 攻击 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点冰霜伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/frost-slash2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="2" data-card-search="冰霜斩（2） Frost Slash (2) 冰霜斩（2） FrostSlash2 FrostSlash2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Deal 4 @wat damage. 造成 4 点冰霜伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 15 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostSlash2__800.png" alt="冰霜斩（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冰霜斩（2）</strong>
    <small>Frost Slash (2) · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点冰霜伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/frost-slash3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="4" data-card-search="冰霜斩（3） Frost Slash (3) 冰霜斩（3） FrostSlash3 FrostSlash3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Deal 6 @wat damage. 造成 6 点冰霜伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 15 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostSlash3__641.png" alt="冰霜斩（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冰霜斩（3）</strong>
    <small>Frost Slash (3) · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 6 点冰霜伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/collosus-smash" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="3" data-card-search="巨像重击 Colossus Smash 巨像重击 CollosusSmash CollosusSmash 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Play this only if you have no action cards in play. Deal 8 @atk damage. Lose all @tim ^. 只能在你场上没有行动牌时打出。造成 8 点攻击伤害。失去所有行动点。 盗贼 1 牧师 1 战士 10 法师 1 ID 1 -1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CollosusSmash__855.png" alt="巨像重击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>巨像重击</strong>
    <small>Colossus Smash · 攻击 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>只能在你场上没有行动牌时打出。造成 8 点攻击伤害。失去所有行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sorcerous-strike1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="5" data-card-search="巫术打击（1） Sorcerous Strike (1) 巫术打击（1） SorcerousStrike1 SorcerousStrike1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Deal 2 @atk damage. Gain 2 mana. 造成 2 点攻击伤害。获得 2 点法力。 盗贼 1 牧师 6 战士 6 法师 2 ID 5 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SorcerousStrike1__936.png" alt="巫术打击（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>巫术打击（1）</strong>
    <small>Sorcerous Strike (1) · 攻击 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点攻击伤害。获得 2 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sorcerous-strike2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="6" data-card-search="巫术打击（2） Sorcerous Strike (2) 巫术打击（2） SorcerousStrike2 SorcerousStrike2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Deal 4 @atk damage. Gain 4 mana. 造成 4 点攻击伤害。获得 4 点法力。 盗贼 1 牧师 6 战士 1 法师 6 ID 5 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SorcerousStrike2__741.png" alt="巫术打击（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>巫术打击（2）</strong>
    <small>Sorcerous Strike (2) · 攻击 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点攻击伤害。获得 4 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sorcerous-strike3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="7" data-card-search="巫术打击（3） Sorcerous Strike (3) 巫术打击（3） SorcerousStrike3 SorcerousStrike3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Deal 6 @atk damage. Gain 6 mana. 造成 6 点攻击伤害。获得 6 点法力。 盗贼 1 牧师 6 战士 1 法师 6 ID 5 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SorcerousStrike3__571.png" alt="巫术打击（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>巫术打击（3）</strong>
    <small>Sorcerous Strike (3) · 攻击 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 6 点攻击伤害。获得 6 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/infect" data-card-tile data-card-type="攻击" data-card-status="unlock" data-card-tier="4" data-card-search="感染 Infect 感染 Infect Infect 攻击 成就解锁 需要解锁：UNDEAD2。解锁后可进入奖励和商店的 CardFinder 候选池。 4 阶 Your opponent becomes &lt;Poisoned 3&gt; ^. 对手获得 &lt;中毒 3&gt;。 UNDEAD2 盗贼 4 牧师 3 战士 2 法师 4">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect__364.png" alt="感染" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>感染</strong>
    <small>Infect · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：UNDEAD2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>对手获得 <span class="dq-term">中毒 3</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/infect1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="2" data-card-search="感染（1） Infect (1) 感染（1） Infect1 Infect1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Your opponent becomes &lt;Poisoned 1&gt; ^. 对手获得 &lt;中毒 1&gt;。 never 盗贼 3 牧师 4 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect1__754.png" alt="感染（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>感染（1）</strong>
    <small>Infect (1) · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得 <span class="dq-term">中毒 1</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/infect2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="3" data-card-search="感染（2） Infect (2) 感染（2） Infect2 Infect2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Your opponent becomes &lt;Poisoned 2&gt; ^. 对手获得 &lt;中毒 2&gt;。 never 盗贼 3 牧师 4 战士 3 法师 4">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect2__650.png" alt="感染（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>感染（2）</strong>
    <small>Infect (2) · 攻击 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得 <span class="dq-term">中毒 2</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/infect3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="4" data-card-search="感染（3） Infect (3) 感染（3） Infect3 Infect3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Your opponent becomes &lt;Poisoned 3&gt; ^. 对手获得 &lt;中毒 3&gt;。 never 盗贼 3 牧师 4 战士 3 法师 4">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Infect3__612.png" alt="感染（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>感染（3）</strong>
    <small>Infect (3) · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得 <span class="dq-term">中毒 3</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/rallying-stroke" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="7" data-card-search="振奋一击 Rallying Stroke 振奋一击 RallyingStroke RallyingStroke 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Deal 2 @atk damage. Draw 2 cards. 造成 2 点攻击伤害。抽 2 张牌。 盗贼 2 牧师 2 战士 2 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/RallyingStroke__634.png" alt="振奋一击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>振奋一击</strong>
    <small>Rallying Stroke · 攻击 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点攻击伤害。抽 2 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bite" data-card-tile data-card-type="攻击" data-card-status="profession" data-card-tier="8" data-card-search="撕咬 Bite 撕咬 Bite Bite 攻击 职业专属 职业专属来源：德鲁伊：狼形态专属。 8 阶 If your opponent has at least half their health, deal 5 @atk damage and draw a card. \\n Otherwise, deal 5 @atk damage and gain 5 health. 如果对手生命不少于一半，造成 5 点攻击伤害并抽 1 张牌。否则，造成 5 点攻击伤害并回复 5 点生命。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bite__565.png" alt="撕咬" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>撕咬</strong>
    <small>Bite · 攻击 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：狼形态专属。">职业专属</span></span>
    <span>如果对手生命不少于一半，造成 5 点攻击伤害并抽 1 张牌。否则，造成 5 点攻击伤害并回复 5 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/rake" data-card-tile data-card-type="攻击" data-card-status="profession" data-card-tier="3" data-card-search="撕抓 Rake 撕抓 Rake Rake 攻击 职业专属 职业专属来源：德鲁伊：初始牌 x1 / 狼形态专属。 3 阶 If your opponent has at least half their health, they become &lt;Poisoned 3&gt; ^. \\n Otherwise, deal 3 @atk damage plus 1 per level of poison on your opponent. 如果对手生命不少于一半，对手获得 &lt;中毒 3&gt;。否则，造成 3 点攻击伤害 并按对手每层中毒额外造成 1 点。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Rake__56.png" alt="撕抓" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>撕抓</strong>
    <small>Rake · 攻击 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：初始牌 x1 / 狼形态专属。">职业专属</span></span>
    <span>如果对手生命不少于一半，对手获得 <span class="dq-term">中毒 3</span>。否则，造成 3 点攻击伤害 并按对手每层中毒额外造成 1 点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/attack1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="1" data-card-search="攻击（1） Attack (1) 攻击（1） Attack1 Attack1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 1 @atk damage. 造成 1 点攻击伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack1__826.png" alt="攻击（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>攻击（1）</strong>
    <small>Attack (1) · 攻击 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/attack2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="1" data-card-search="攻击（2） Attack (2) 攻击（2） Attack2 Attack2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 2 @atk damage. 造成 2 点攻击伤害。 never 盗贼 3 牧师 2 战士 10 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Attack2__526.png" alt="攻击（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>攻击（2）</strong>
    <small>Attack (2) · 攻击 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/attack3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="2" data-card-search="攻击（3） Attack (3) 攻击（3） Attack3 Attack3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Deal 3 @atk damage. 造成 3 点攻击伤害。 never 盗贼 3 牧师 2 战士 3 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack3__36.png" alt="攻击（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>攻击（3）</strong>
    <small>Attack (3) · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 3 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/attack4" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="2" data-card-search="攻击（4） Attack (4) 攻击（4） Attack4 Attack4 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Deal 4 @atk damage. 造成 4 点攻击伤害。 never 盗贼 3 牧师 2 战士 3 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/sharedassets0/Attack4__47.png" alt="攻击（4）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>攻击（4）</strong>
    <small>Attack (4) · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/slash" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="6" data-card-search="斩击 Slash 斩击 Slash Slash 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Deal 2 @atk damage. Draw a card. 造成 2 点攻击伤害。抽 1 张牌。 盗贼 1 牧师 1 战士 9 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slash__247.png" alt="斩击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>斩击</strong>
    <small>Slash · 攻击 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点攻击伤害。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/chaos-strike" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="1" data-card-search="混沌打击 Chaos Strike 混沌打击 ChaosStrike ChaosStrike 攻击 怪物限定 怪物限定来源：混沌门徒 基础牌组、混沌门徒 关键行为。 1 阶 Deal 1, 2, or 3 @atk damage, chosen randomly. 造成 1，2，或 3 点攻击伤害，随机决定。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ChaosStrike__283.png" alt="混沌打击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>混沌打击</strong>
    <small>Chaos Strike · 攻击 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：混沌门徒 基础牌组、混沌门徒 关键行为。">怪物限定</span></span>
    <span>造成 1，2，或 3 点攻击伤害，随机决定。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/chaos-strike2" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="2" data-card-search="混沌打击（2） Chaos Strike 混沌打击（2） ChaosStrike2 ChaosStrike2 攻击 怪物限定 怪物限定来源：混沌门徒 基础牌组、混沌门徒 关键行为。 2 阶 Deal 2, 3, or 4 @atk damage, chosen randomly. 造成 2，3，或 4 点攻击伤害，随机决定。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ChaosStrike2__983.png" alt="混沌打击（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>混沌打击（2）</strong>
    <small>Chaos Strike · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：混沌门徒 基础牌组、混沌门徒 关键行为。">怪物限定</span></span>
    <span>造成 2，3，或 4 点攻击伤害，随机决定。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flame-strike" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="4" data-card-search="火焰打击 Flame Strike 火焰打击 FlameStrike FlameStrike 攻击 怪物限定 怪物限定来源：火元素 基础牌组、火元素 优先起手。 4 阶 Deal 6 @fir damage. 造成 6 点火焰伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameStrike__47.png" alt="火焰打击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰打击</strong>
    <small>Flame Strike · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：火元素 基础牌组、火元素 优先起手。">怪物限定</span></span>
    <span>造成 6 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flame-slash1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="1" data-card-search="火焰斩（1） Flame Slash (1) 火焰斩（1） FlameSlash1 FlameSlash1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 2 @fir damage. 造成 2 点火焰伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 14 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameSlash1__745.png" alt="火焰斩（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰斩（1）</strong>
    <small>Flame Slash (1) · 攻击 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flame-slash2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="2" data-card-search="火焰斩（2） Flame Slash (2) 火焰斩（2） FlameSlash2 FlameSlash2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Deal 4 @fir damage. 造成 4 点火焰伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 14 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameSlash2__635.png" alt="火焰斩（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰斩（2）</strong>
    <small>Flame Slash (2) · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flame-slash3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="4" data-card-search="火焰斩（3） Flame Slash (3) 火焰斩（3） FlameSlash3 FlameSlash3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Deal 6 @fir damage. 造成 6 点火焰伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 14 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameSlash3__965.png" alt="火焰斩（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰斩（3）</strong>
    <small>Flame Slash (3) · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 6 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/burn2" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="4" data-card-search="灼烧（2） Burn (2) 灼烧（2） Burn2 Burn2 攻击 怪物限定 怪物限定来源：熔岩巨兽 优先起手、伊弗利特 基础牌组、伊弗利特 优先起手、凤凰 优先起手。 4 阶 Your opponent starts burning. At the start of their turn, they will take 2 @fir damage for the remainder of the fight. 对手开始燃烧。在其回合开始时，对手 会受到 2 点火焰伤害 直到本场战斗结束。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Burn2__150.png" alt="灼烧（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>灼烧（2）</strong>
    <small>Burn (2) · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：熔岩巨兽 优先起手、伊弗利特 基础牌组、伊弗利特 优先起手、凤凰 优先起手。">怪物限定</span></span>
    <span>对手开始燃烧。在其回合开始时，对手 会受到 2 点火焰伤害 直到本场战斗结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/burn" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="2" data-card-search="燃烧 Burn 燃烧 Burn Burn 攻击 怪物限定 怪物限定来源：熔岩巨兽 基础牌组、熔岩巨兽 优先起手、凤凰 基础牌组、凤凰 优先起手。 2 阶 Your opponent starts burning. At the start of their turn, they will take 1 @fir damage for the remainder of the fight. 对手开始燃烧。在其回合开始时，对手 会受到 1 点火焰伤害 直到本场战斗结束。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Burn__423.png" alt="燃烧" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>燃烧</strong>
    <small>Burn · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：熔岩巨兽 基础牌组、熔岩巨兽 优先起手、凤凰 基础牌组、凤凰 优先起手。">怪物限定</span></span>
    <span>对手开始燃烧。在其回合开始时，对手 会受到 1 点火焰伤害 直到本场战斗结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/berserker-strike" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="5" data-card-search="狂战打击 Berserker Strike 狂战打击 BerserkerStrike BerserkerStrike 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Deal 10 @atk damage to your opponent and 4 @atk damage to yourself. 对手受到 10 点攻击伤害，你受到 4 点攻击伤害。 盗贼 1 牧师 2 战士 10 法师 1 ID 1 -1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BerserkerStrike__75.png" alt="狂战打击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>狂战打击</strong>
    <small>Berserker Strike · 攻击 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手受到 10 点攻击伤害，你受到 4 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/maul" data-card-tile data-card-type="攻击" data-card-status="profession" data-card-tier="6" data-card-search="猛击 Maul 猛击 Maul Maul 攻击 职业专属 职业专属来源：德鲁伊：狼形态专属。 6 阶 If your opponent has at least half their health, deal 5 @atk damage and prevent the next 10 damage that would be dealt to you. \\n Otherwise, deal 10 &lt;piercing&gt; damage. 如果对手生命不少于一半，造成 5 点攻击伤害并防止你将受到的接下来 10 点伤害。否则，造成 10 点&lt;穿透&gt;伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Maul__393.png" alt="猛击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>猛击</strong>
    <small>Maul · 攻击 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：狼形态专属。">职业专属</span></span>
    <span>如果对手生命不少于一半，造成 5 点攻击伤害并防止你将受到的接下来 10 点伤害。否则，造成 10 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/thrash" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="4" data-card-search="痛击 Thrash 痛击 Thrash Thrash 攻击 怪物限定 怪物限定来源：食人鱼 基础牌组、食人鱼 关键行为、巨鲨 基础牌组。 4 阶 Deal 1 @atk damage. Draw a card. 造成 1 点攻击伤害。抽 1 张牌。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Thrash__1023.png" alt="痛击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>痛击</strong>
    <small>Thrash · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：食人鱼 基础牌组、食人鱼 关键行为、巨鲨 基础牌组。">怪物限定</span></span>
    <span>造成 1 点攻击伤害。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shield-bash" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="8" data-card-search="盾击 Shield Bash 盾击 ShieldBash ShieldBash 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Deal 5 @atk damage. Gain &lt;Damage Reduction 2&gt; until your next turn. 造成 5 点攻击伤害。获得&lt;减伤 2&gt; 直到你的下个回合。 盗贼 3 牧师 3 战士 3 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ShieldBash__201.png" alt="盾击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>盾击</strong>
    <small>Shield Bash · 攻击 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 5 点攻击伤害。获得<span class="dq-term">减伤 2</span> 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sundering-strike" data-card-tile data-card-type="攻击" data-card-status="unlock" data-card-tier="8" data-card-search="破甲打击 Sundering Strike 破甲打击 SunderingStrike SunderingStrike 攻击 成就解锁 需要解锁：BOSSGIANTSHARK。解锁后可进入奖励和商店的 CardFinder 候选池。 8 阶 Deal 2 @atk damage and your opponent is &lt;Weakened 2&gt; this turn. 造成 2 点攻击伤害并对手获得 &lt;虚弱 2&gt; 本回合。 BOSSGIANTSHARK 盗贼 2 牧师 2 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike__899.png" alt="破甲打击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>破甲打击</strong>
    <small>Sundering Strike · 攻击 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSGIANTSHARK。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>造成 2 点攻击伤害并对手获得 <span class="dq-term">虚弱 2</span> 本回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sundering-strike1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="7" data-card-search="破甲打击（1） Sundering Strike (1) 破甲打击（1） SunderingStrike1 SunderingStrike1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Deal 1 @atk damage and your opponent is &lt;Weakened 1&gt; ^. 造成 1 点攻击伤害并对手获得 &lt;虚弱 1&gt;。 never 盗贼 2 牧师 2 战士 2 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike1__328.png" alt="破甲打击（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>破甲打击（1）</strong>
    <small>Sundering Strike (1) · 攻击 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害并对手获得 <span class="dq-term">虚弱 1</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sundering-strike2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="8" data-card-search="破甲打击（2） Sundering Strike (2) 破甲打击（2） SunderingStrike2 SunderingStrike2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Deal 2 @atk damage and your opponent is &lt;Weakened 2&gt; ^. 造成 2 点攻击伤害并对手获得 &lt;虚弱 2&gt;。 never 盗贼 2 牧师 2 战士 2 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike2__492.png" alt="破甲打击（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>破甲打击（2）</strong>
    <small>Sundering Strike (2) · 攻击 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点攻击伤害并对手获得 <span class="dq-term">虚弱 2</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sundering-strike3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="9" data-card-search="破甲打击（3） Sundering Strike (3) 破甲打击（3） SunderingStrike3 SunderingStrike3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Deal 3 @atk damage and your opponent is &lt;Weakened 3&gt; ^. 造成 3 点攻击伤害并对手获得 &lt;虚弱 3&gt;。 never 盗贼 2 牧师 2 战士 2 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SunderingStrike3__119.png" alt="破甲打击（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>破甲打击（3）</strong>
    <small>Sundering Strike (3) · 攻击 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 3 点攻击伤害并对手获得 <span class="dq-term">虚弱 3</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/skullcrack" data-card-tile data-card-type="攻击" data-card-status="unlock" data-card-tier="5" data-card-search="碎颅 Skull Crack 碎颅 Skullcrack Skullcrack 攻击 成就解锁 需要解锁：DAMAGE3。解锁后可进入奖励和商店的 CardFinder 候选池。 5 阶 Exile a card from your hand. If you do, deal 10 @atk damage. 放逐一张牌 从 你的手牌。如果如此，造成 10 点攻击伤害。 DAMAGE3 盗贼 9 牧师 1 战士 9 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SkullCrack__473.png" alt="碎颅" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>碎颅</strong>
    <small>Skull Crack · 攻击 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：DAMAGE3。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>放逐一张牌 从 你的手牌。如果如此，造成 10 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/holy-strike1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="5" data-card-search="神圣打击（1） Holy Strike (1) 神圣打击（1） HolyStrike1 HolyStrike1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Deal 2 @atk damage. Gain 2 health. 造成 2 点攻击伤害。回复 2 点生命。 盗贼 1 牧师 8 战士 5 法师 1 ID 4 -1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HolyStrike1__443.png" alt="神圣打击（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>神圣打击（1）</strong>
    <small>Holy Strike (1) · 攻击 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点攻击伤害。回复 2 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/holy-strike2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="6" data-card-search="神圣打击（2） Holy Strike (2) 神圣打击（2） HolyStrike2 HolyStrike2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Deal 4 @atk damage. Gain 4 health. 造成 4 点攻击伤害。回复 4 点生命。 盗贼 5 牧师 1 战士 5 法师 1 ID 4 -1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HolyStrike2__336.png" alt="神圣打击（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>神圣打击（2）</strong>
    <small>Holy Strike (2) · 攻击 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点攻击伤害。回复 4 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/holy-strike3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="7" data-card-search="神圣打击（3） Holy Strike (3) 神圣打击（3） HolyStrike3 HolyStrike3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Deal 6 @atk damage. Gain 6 health. 造成 6 点攻击伤害。回复 6 点生命。 盗贼 5 牧师 1 战士 5 法师 1 ID 4 -1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HolyStrike3__701.png" alt="神圣打击（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>神圣打击（3）</strong>
    <small>Holy Strike (3) · 攻击 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 6 点攻击伤害。回复 6 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/pierce1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="5" data-card-search="穿刺（1） Pierce (1) 穿刺（1） Pierce1 Pierce1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Deal 6 &lt;piercing&gt; damage. 造成 6 点&lt;穿透&gt;伤害。 盗贼 4 牧师 2 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pierce1__726.png" alt="穿刺（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>穿刺（1）</strong>
    <small>Pierce (1) · 攻击 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 6 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/pierce2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="6" data-card-search="穿刺（2） Pierce (2) 穿刺（2） Pierce2 Pierce2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Deal 8 &lt;piercing&gt; damage. 造成 8 点&lt;穿透&gt;伤害。 盗贼 4 牧师 2 战士 4 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pierce2__643.png" alt="穿刺（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>穿刺（2）</strong>
    <small>Pierce (2) · 攻击 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 8 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/pierce3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="7" data-card-search="穿刺（3） Pierce (3) 穿刺（3） Pierce3 Pierce3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Deal 10 &lt;piercing&gt; damage. 造成 10 点&lt;穿透&gt;伤害。 盗贼 4 牧师 2 战士 4 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pierce3__877.png" alt="穿刺（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>穿刺（3）</strong>
    <small>Pierce (3) · 攻击 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 10 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/backstab" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="3" data-card-search="背刺 Backstab 背刺 Backstab Backstab 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Deal 1 @atk damage plus 1 for each action card in play. 造成 1 点攻击伤害 并且每有 1 个再加 1 点 行动牌 在场。 盗贼 10 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Backstab__352.png" alt="背刺" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>背刺</strong>
    <small>Backstab · 攻击 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害 并且每有 1 个再加 1 点 行动牌 在场。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/corrosive-slash1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="1" data-card-search="腐蚀斩（1） Corrosive Slash (1) 腐蚀斩（1） CorrosiveSlash1 CorrosiveSlash1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 2 @ear damage. 造成 2 点毒性伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 16 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CorrosiveSlash1__253.png" alt="腐蚀斩（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>腐蚀斩（1）</strong>
    <small>Corrosive Slash (1) · 攻击 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点毒性伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/corrosive-slash2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="2" data-card-search="腐蚀斩（2） Corrosive Slash (2) 腐蚀斩（2） CorrosiveSlash2 CorrosiveSlash2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Deal 4 @ear damage. 造成 4 点毒性伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 16 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CorrosiveSlash2__385.png" alt="腐蚀斩（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>腐蚀斩（2）</strong>
    <small>Corrosive Slash (2) · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点毒性伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/corrosive-slash3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="4" data-card-search="腐蚀斩（3） Corrosive Slash (3) 腐蚀斩（3） CorrosiveSlash3 CorrosiveSlash3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Deal 6 @ear damage. 造成 6 点毒性伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 16 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CorrosiveSlash3__874.png" alt="腐蚀斩（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>腐蚀斩（3）</strong>
    <small>Corrosive Slash (3) · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 6 点毒性伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/smash" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="9" data-card-search="重击 Smash 重击 Smash Smash 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Deal 15 @atk damage. 造成 15 点攻击伤害。 盗贼 9 牧师 1 战士 9 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Smash__1047.png" alt="重击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>重击</strong>
    <small>Smash · 攻击 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 15 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/lightning-strike" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="4" data-card-search="闪电打击 Lightning Strike 闪电打击 LightningStrike LightningStrike 攻击 怪物限定 怪物限定来源：积雨云 基础牌组、风元素 基础牌组、风元素 优先起手。 4 阶 Deal 6 @air damage. 造成 6 点电系伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/LightningStrike__185.png" alt="闪电打击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>闪电打击</strong>
    <small>Lightning Strike · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：积雨云 基础牌组、风元素 基础牌组、风元素 优先起手。">怪物限定</span></span>
    <span>造成 6 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/storm-slash1" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="1" data-card-search="风暴斩（1） Storm Slash (1) 风暴斩（1） StormSlash1 StormSlash1 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 2 @air damage. 造成 2 点电系伤害。 盗贼 3 牧师 2 战士 6 法师 1 ID 17 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormSlash1__451.png" alt="风暴斩（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>风暴斩（1）</strong>
    <small>Storm Slash (1) · 攻击 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/storm-slash2" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="2" data-card-search="风暴斩（2） Storm Slash (2) 风暴斩（2） StormSlash2 StormSlash2 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Deal 4 @air damage. 造成 4 点电系伤害。 盗贼 3 牧师 1 战士 6 法师 1 ID 17 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormSlash2__322.png" alt="风暴斩（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>风暴斩（2）</strong>
    <small>Storm Slash (2) · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/storm-slash3" data-card-tile data-card-type="攻击" data-card-status="normal" data-card-tier="4" data-card-search="风暴斩（3） Storm Slash (3) 风暴斩（3） StormSlash3 StormSlash3 攻击 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Deal 6 @air damage. 造成 6 点电系伤害。 盗贼 3 牧师 1 战士 3 法师 1 ID 17 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormSlash3__285.png" alt="风暴斩（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>风暴斩（3）</strong>
    <small>Storm Slash (3) · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 6 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/harry" data-card-tile data-card-type="攻击" data-card-status="unlock" data-card-tier="5" data-card-search="骚扰 Harry 骚扰 Harry Harry 攻击 成就解锁 需要解锁：WINDRUID。解锁后可进入奖励和商店的 CardFinder 候选池。 5 阶 Deal 3 @atk damage. Gain 50% dodge until your next turn. 造成 3 点攻击伤害。获得 50% 闪避 直到你的下个回合。 WINDRUID 盗贼 6 牧师 1 战士 6 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Harry__123.png" alt="骚扰" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>骚扰</strong>
    <small>Harry · 攻击 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：WINDRUID。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>造成 3 点攻击伤害。获得 50% 闪避 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shark-bite" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="4" data-card-search="鲨咬 Shark Bite 鲨咬 SharkBite SharkBite 攻击 怪物限定 怪物限定来源：食人鱼 基础牌组、食人鱼 优先起手、食人鱼 关键行为、食人鱼 等级变化 等 6 项。 4 阶 Deal 2 @atk damage. Your opponent becomes &lt;Weakened 1&gt; for the remainder of the fight. 造成 2 点攻击伤害。对手获得 &lt;虚弱 1&gt; 直到本场战斗结束。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SharkBite__649.png" alt="鲨咬" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>鲨咬</strong>
    <small>Shark Bite · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：食人鱼 基础牌组、食人鱼 优先起手、食人鱼 关键行为、食人鱼 等级变化 等 6 项。">怪物限定</span></span>
    <span>造成 2 点攻击伤害。对手获得 <span class="dq-term">虚弱 1</span> 直到本场战斗结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shark-bite2" data-card-tile data-card-type="攻击" data-card-status="monster" data-card-tier="6" data-card-search="鲨咬（2） Shark Bite (2) 鲨咬（2） SharkBite2 SharkBite2 攻击 怪物限定 怪物限定来源：巨鲨 优先起手。 6 阶 Deal 2 @atk damage. Your opponent becomes &lt;Weakened 2&gt; for the remainder of the fight. 造成 2 点攻击伤害。对手获得 &lt;虚弱 2&gt; 直到本场战斗结束。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SharkBite2__482.png" alt="鲨咬（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>鲨咬（2）</strong>
    <small>Shark Bite (2) · 攻击 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：巨鲨 优先起手。">怪物限定</span></span>
    <span>造成 2 点攻击伤害。对手获得 <span class="dq-term">虚弱 2</span> 直到本场战斗结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-bite" data-card-tile data-card-type="攻击" data-card-status="profession" data-card-tier="3" data-card-search="龙咬 Dragon's Bite 龙咬 DragonsBite DragonsBite 攻击 职业专属 职业专属来源：龙：初始牌 x1 / Dragon 专属。 3 阶 Deal 2 @atk damage plus 2 for each Dragon's Claw in play. 造成 2 点攻击伤害；场上每有 1 张 龙爪，额外造成 2 点攻击伤害。 never 盗贼 3 牧师 3 战士 3 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsBite__351.png" alt="龙咬" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙咬</strong>
    <small>Dragon's Bite · 攻击 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：初始牌 x1 / Dragon 专属。">职业专属</span></span>
    <span>造成 2 点攻击伤害；场上每有 1 张 龙爪，额外造成 2 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-claw1" data-card-tile data-card-type="攻击" data-card-status="profession" data-card-tier="1" data-card-search="龙爪（1） Dragon's Claw (1) 龙爪（1） DragonsClaw1 DragonsClaw1 攻击 职业专属 职业专属来源：龙：初始牌 x2 / Dragon 专属。 1 阶 Deal 2 @atk damage. 造成 2 点攻击伤害。 never 盗贼 3 牧师 3 战士 3 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw1__854.png" alt="龙爪（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙爪（1）</strong>
    <small>Dragon's Claw (1) · 攻击 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：初始牌 x2 / Dragon 专属。">职业专属</span></span>
    <span>造成 2 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-claw2" data-card-tile data-card-type="攻击" data-card-status="profession" data-card-tier="2" data-card-search="龙爪（2） Dragon's Claw (2) 龙爪（2） DragonsClaw2 DragonsClaw2 攻击 职业专属 职业专属来源：龙：Dragon 专属。 2 阶 Deal 4 @atk damage. 造成 4 点攻击伤害。 never 盗贼 3 牧师 3 战士 3 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw2__421.png" alt="龙爪（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙爪（2）</strong>
    <small>Dragon's Claw (2) · 攻击 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：Dragon 专属。">职业专属</span></span>
    <span>造成 4 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-claw3" data-card-tile data-card-type="攻击" data-card-status="profession" data-card-tier="4" data-card-search="龙爪（3） Dragon's Claw (3) 龙爪（3） DragonsClaw3 DragonsClaw3 攻击 职业专属 职业专属来源：龙：Dragon 专属。 4 阶 Deal 6 @atk damage. 造成 6 点攻击伤害。 never 盗贼 3 牧师 3 战士 3 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsClaw3__629.png" alt="龙爪（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙爪（3）</strong>
    <small>Dragon's Claw (3) · 攻击 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：Dragon 专属。">职业专属</span></span>
    <span>造成 6 点攻击伤害。</span>
  </span>
</a>
</section>
</section>

<section class="dq-card-group" data-card-group data-card-group-type="法术">
<h2 id="spell" class="dq-card-group-title"><span>法术</span><em data-card-group-count>50 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
<a class="dq-card-tile dq-card-tile-small" href="/cards/eye-for-an-eye" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="8" data-card-search="以眼还眼 Eye for an Eye 以眼还眼 EyeForAnEye EyeForAnEye 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Until your next turn, whenever your opponent deals damage to you, you deal that much damage to them (before reductions or immunities). 直到你的下个回合，每当对手对你造成伤害时，你对其造成等量伤害；此伤害在减伤或免疫结算前计算。 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/EyeForAnEye__91.png" alt="以眼还眼" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>以眼还眼</strong>
    <small>Eye for an Eye · 法术 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>直到你的下个回合，每当对手对你造成伤害时，你对其造成等量伤害；此伤害在减伤或免疫结算前计算。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/stasis" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="9" data-card-search="停滞 Stasis 停滞 Stasis Stasis 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Draw 3 cards. 抽 3 张牌。 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Stasis__380.png" alt="停滞" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>停滞</strong>
    <small>Stasis · 法术 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 3 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/elemental-fortitude" data-card-tile data-card-type="法术" data-card-status="unlock" data-card-tier="8" data-card-search="元素帷幕 Elemental Shroud 元素帷幕 ElementalFortitude ElementalFortitude 法术 成就解锁 需要解锁：BOSSCHROMATICDEMON。解锁后可进入奖励和商店的 CardFinder 候选池。 8 阶 You take half damage from elemental sources until your next turn. 直到你的下个回合，来自元素来源的伤害减半。 BOSSCHROMATICDEMON 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ElementalFortitude__742.png" alt="元素帷幕" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>元素帷幕</strong>
    <small>Elemental Shroud · 法术 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSCHROMATICDEMON。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>直到你的下个回合，来自元素来源的伤害减半。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/frost-shape" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="5" data-card-search="冰霜形态 Frost Shape 冰霜形态 FrostShape FrostShape 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Prevent the next 5 damage that would be dealt to you. For each point of damage prevented, deal 1 @wat damage to your opponent. 防止你将受到的接下来 5 点伤害。每防止 1 点伤害，就对手造成 1 点冰霜伤害。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostShape__80.png" alt="冰霜形态" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冰霜形态</strong>
    <small>Frost Shape · 法术 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>防止你将受到的接下来 5 点伤害。每防止 1 点伤害，就对手造成 1 点冰霜伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/frost-bolt" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="3" data-card-search="冰霜箭 Frost Bolt 冰霜箭 FrostBolt FrostBolt 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Deal 4 @wat damage, doubled if your opponent is &lt;Chilled&gt; ^. Your opponent becomes &lt;Chilled 1&gt; until the end of their next turn. 造成 4 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostBolt__326.png" alt="冰霜箭" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冰霜箭</strong>
    <small>Frost Bolt · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点冰霜伤害，翻倍 如果对手拥有 <span class="dq-term">寒冷</span>。对手获得 <span class="dq-term">寒冷 1</span> 直到对手下个回合结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/freeze" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="9" data-card-search="冻结 Freeze 冻结 Freeze Freeze 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Deal 15 @wat damage, doubled if your opponent is &lt;Chilled&gt; ^. Your opponent becomes &lt;Chilled 3&gt; until the end of their next turn and &lt;Chilled 1&gt; for the remainder of the fight. 造成 15 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 3&gt; 直到对手下个回合结束并&lt;寒冷 1&gt; 直到本场战斗结束。 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Freeze__318.png" alt="冻结" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冻结</strong>
    <small>Freeze · 法术 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 15 点冰霜伤害，翻倍 如果对手拥有 <span class="dq-term">寒冷</span>。对手获得 <span class="dq-term">寒冷 3</span> 直到对手下个回合结束并<span class="dq-term">寒冷 1</span> 直到本场战斗结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/purifying-light" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="8" data-card-search="净化之光 Purifying Light 净化之光 PurifyingLight PurifyingLight 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Gain 10 health. &lt;Overhealing&gt; is converted into &lt;piercing&gt; damage to your opponent. 回复 10 点生命。&lt;过量治疗&gt; 会转化为对手受到的&lt;穿透&gt;伤害。 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PurifyingLight__146.png" alt="净化之光" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>净化之光</strong>
    <small>Purifying Light · 法术 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>回复 10 点生命。<span class="dq-term">过量治疗</span> 会转化为对手受到的<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/summon-companions" data-card-tile data-card-type="法术" data-card-status="profession" data-card-tier="1" data-card-search="召唤伙伴 Summon Companions 召唤伙伴 SummonCompanions SummonCompanions 法术 职业专属 职业专属来源：德鲁伊：初始牌 x2 / 召唤同伴。 1 阶 Draw one of Wolf, Turtle, or Eagle. That card is &lt;temporary&gt; ^. 抽取 狼、龟 或 鹰 中的 1 张。该牌为&lt;临时&gt;。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SummonCompanions__452.png" alt="召唤伙伴" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>召唤伙伴</strong>
    <small>Summon Companions · 法术 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：初始牌 x2 / 召唤同伴。">职业专属</span></span>
    <span>抽取 狼、龟 或 鹰 中的 1 张。该牌为<span class="dq-term">临时</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/siphon-life" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="3" data-card-search="吸取生命 Drain Life 吸取生命 SiphonLife SiphonLife 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Deal 4 &lt;piercing&gt; damage. Gain 4 health. 造成 4 点&lt;穿透&gt;伤害。回复 4 点生命。 盗贼 1 牧师 4 战士 1 法师 4">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SiphonLife__95.png" alt="吸取生命" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吸取生命</strong>
    <small>Drain Life · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点<span class="dq-term">穿透</span>伤害。回复 4 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/absorb-vis" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="10" data-card-search="吸收魔力 Absorb Vis 吸收魔力 AbsorbVis AbsorbVis 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 10 阶 Gain up to 40 health, then deal &lt;piercing&gt; damage equal to the health gained this way. 回复至多 40 点生命，然后造成等同于以此回复生命值的&lt;穿透&gt;伤害。 盗贼 1 牧师 3 战士 1 法师 3 ID 6 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/AbsorbVis__561.png" alt="吸收魔力" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吸收魔力</strong>
    <small>Absorb Vis · 法术 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>回复至多 40 点生命，然后造成等同于以此回复生命值的<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/solidify" data-card-tile data-card-type="法术" data-card-status="monster" data-card-tier="6" data-card-search="固化 Solidify 固化 Solidify Solidify 法术 怪物限定 怪物限定来源：阿卡米萨满 等级变化、阿卡米升华者 等级变化、阿卡米污泥召唤者 等级变化。 6 阶 Your opponent discards 3 cards and loses 3 @tim ^. 对手弃掉 3 张牌并失去 3 行动点。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Solidify__301.png" alt="固化" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>固化</strong>
    <small>Solidify · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：阿卡米萨满 等级变化、阿卡米升华者 等级变化、阿卡米污泥召唤者 等级变化。">怪物限定</span></span>
    <span>对手弃掉 3 张牌并失去 3 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/conflagration" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="9" data-card-search="大火 Conflagration 大火 Conflagration Conflagration 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Deal 30 @fir damage. At the start of your next turn, deal another 30 @fir damage. 造成 30 点火焰伤害。在你的下个回合开始时，再次造成 30 点火焰伤害。 盗贼 1 牧师 1 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Conflagration__930.png" alt="大火" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>大火</strong>
    <small>Conflagration · 法术 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 30 点火焰伤害。在你的下个回合开始时，再次造成 30 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/crumble" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="6" data-card-search="崩解 Crumble 崩解 Crumble Crumble 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Exile an equipment or prayer card. 放逐 1 个 装备或祈祷 牌。 盗贼 1 牧师 8 战士 1 法师 5">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Crumble__758.png" alt="崩解" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>崩解</strong>
    <small>Crumble · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>放逐 1 个 装备或祈祷 牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mind-sear" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="5" data-card-search="心智灼烧 Mind Sear 心智灼烧 MindSear MindSear 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Choose one: @atk ^: Deal 5 &lt;piercing&gt; damage or @card ^: draw 2 cards 选择 1 项：攻击: 造成 5 点&lt;穿透&gt;伤害或卡牌: 抽 2 张牌 盗贼 2 牧师 8 战士 2 法师 8">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/MindSear__711.png" alt="心智灼烧" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>心智灼烧</strong>
    <small>Mind Sear · 法术 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>选择 1 项：攻击: 造成 5 点<span class="dq-term">穿透</span>伤害或卡牌: 抽 2 张牌</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penance" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="5" data-card-search="忏悔 Penance 忏悔 Penance Penance 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Your opponent takes 2 &lt;piercing&gt; damage at the start of each turn for the remainder of the fight. 对手受到 2 &lt;穿透&gt; 伤害 在每个回合开始时 直到本场战斗结束。 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Penance__161.png" alt="忏悔" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>忏悔</strong>
    <small>Penance · 法术 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手受到 2 <span class="dq-term">穿透</span> 伤害 在每个回合开始时 直到本场战斗结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/haste" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="4" data-card-search="急速 Haste 急速 Haste Haste 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Draw 2 cards. In addition, you have a 10% chance to gain an extra turn. 抽 2 张牌。此外，你有 10% 概率获得一个额外回合。 盗贼 2 牧师 8 战士 1 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Haste__597.png" alt="急速" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>急速</strong>
    <small>Haste · 法术 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 2 张牌。此外，你有 10% 概率获得一个额外回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/force-of-will" data-card-tile data-card-type="法术" data-card-status="unlock" data-card-tier="5" data-card-search="意志之力 Force of Will 意志之力 ForceOfWill ForceOfWill 法术 成就解锁 需要解锁：MANA2。解锁后可进入奖励和商店的 CardFinder 候选池。 5 阶 Deal 1 &lt;piercing&gt; damage to your opponent for each card in your deck. 对手受到 1 点&lt;穿透&gt;伤害 每有你牌库中的牌。 MANA2 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ForceOfWill__77.png" alt="意志之力" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>意志之力</strong>
    <small>Force of Will · 法术 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：MANA2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>对手受到 1 点<span class="dq-term">穿透</span>伤害 每有你牌库中的牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/ward" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="4" data-card-search="护盾守卫 Ward 护盾守卫 Ward Ward 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Prevent the next 8 damage that would be dealt to you. 防止你将受到的接下来 8 点伤害。 盗贼 1 牧师 10 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Ward__297.png" alt="护盾守卫" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>护盾守卫</strong>
    <small>Ward · 法术 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>防止你将受到的接下来 8 点伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/discharge" data-card-tile data-card-type="法术" data-card-status="monster" data-card-tier="6" data-card-search="放电 Discharge 放电 Discharge Discharge 法术 怪物限定 怪物限定来源：鬼火 基础牌组。 6 阶 Deal 1 @air damage for each mana you have left after casting Discharge. Lose physical immunity until your next turn. 施放 放电 后，你每剩余 1 点法力就造成 1 点电系伤害。失去物理免疫直到你的下个回合。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Discharge__734.png" alt="放电" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>放电</strong>
    <small>Discharge · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：鬼火 基础牌组。">怪物限定</span></span>
    <span>施放 放电 后，你每剩余 1 点法力就造成 1 点电系伤害。失去物理免疫直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/blizzard" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="6" data-card-search="暴风雪 Blizzard 暴风雪 Blizzard Blizzard 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Deal 10 @wat damage, doubled if your opponent is &lt;Chilled&gt; ^. Your opponent becomes &lt;Chilled 2&gt; until the end of their next turn. 造成 10 点冰霜伤害，翻倍 如果对手拥有 &lt;寒冷&gt;。对手获得 &lt;寒冷 2&gt; 直到对手下个回合结束。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blizzard__718.png" alt="暴风雪" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>暴风雪</strong>
    <small>Blizzard · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 10 点冰霜伤害，翻倍 如果对手拥有 <span class="dq-term">寒冷</span>。对手获得 <span class="dq-term">寒冷 2</span> 直到对手下个回合结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/blight" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="9" data-card-search="枯萎 Blight 枯萎 Blight Blight 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Your opponent becomes &lt;Poisoned 5&gt; ^. Double the amount of poison on your opponent (maximum 30 additional poison). 对手获得&lt;中毒 5&gt;。使对手身上的中毒层数翻倍，最多额外增加 30 层。 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blight__788.png" alt="枯萎" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>枯萎</strong>
    <small>Blight · 法术 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得<span class="dq-term">中毒 5</span>。使对手身上的中毒层数翻倍，最多额外增加 30 层。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/blur" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="3" data-card-search="模糊 Blur 模糊 Blur Blur 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 You are physical resistant until your next turn. 你获得物理抗性 直到你的下个回合。 盗贼 1 牧师 6 战士 1 法师 6">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Blur__528.png" alt="模糊" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>模糊</strong>
    <small>Blur · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>你获得物理抗性 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/earth-shape" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="5" data-card-search="毒性形态 Earth Shape 毒性形态 EarthShape EarthShape 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Gain &lt;Damage Reduction 2&gt; until your next turn. 获得&lt;减伤 2&gt; 直到你的下个回合。 盗贼 1 牧师 4 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/EarthShape__305.png" alt="毒性形态" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>毒性形态</strong>
    <small>Earth Shape · 法术 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得<span class="dq-term">减伤 2</span> 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/heal" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="2" data-card-search="治疗 Heal 治疗 Heal Heal 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 5 health. 回复 5 点生命。 盗贼 1 牧师 10 战士 1 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Heal__1048.png" alt="治疗" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>治疗</strong>
    <small>Heal · 法术 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>回复 5 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/meteor" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="6" data-card-search="流星 Meteor 流星 Meteor Meteor 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Deal 20 @fir damage. 造成 20 点火焰伤害。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Meteor__884.png" alt="流星" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>流星</strong>
    <small>Meteor · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 20 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/fire-shape" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="5" data-card-search="火焰形态 Fire Shape 火焰形态 FireShape FireShape 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 For the rest of the fight, whenever the opponent plays an attack card, they take 2 @fir damage. 直到本场战斗结束，每当对手打出攻击牌时，对手受到 2 点火焰伤害。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FireShape__103.png" alt="火焰形态" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰形态</strong>
    <small>Fire Shape · 法术 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>直到本场战斗结束，每当对手打出攻击牌时，对手受到 2 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/fireball" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="3" data-card-search="火球 Fireball 火球 Fireball Fireball 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Deal 8 @fir damage. 造成 8 点火焰伤害。 盗贼 1 牧师 2 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Fireball__167.png" alt="火球" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火球</strong>
    <small>Fireball · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 8 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/soulfire" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="7" data-card-search="灵魂火 Soulfire 灵魂火 Soulfire Soulfire 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Deal 10 &lt;piercing&gt; damage to your opponent. \\n\\nAt the beginning of your turn, if Soulfire is in your discard pile, return it to your hand 对手受到 10 点&lt;穿透&gt;伤害。在你的回合开始时，如果 灵魂火 在你的弃牌堆中，将其返回你的手牌。 盗贼 1 牧师 9 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Soulfire__1024.png" alt="灵魂火" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>灵魂火</strong>
    <small>Soulfire · 法术 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手受到 10 点<span class="dq-term">穿透</span>伤害。在你的回合开始时，如果 灵魂火 在你的弃牌堆中，将其返回你的手牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/soul-siphon" data-card-tile data-card-type="法术" data-card-status="profession" data-card-tier="1" data-card-search="灵魂虹吸 Soul Siphon 灵魂虹吸 SoulSiphon SoulSiphon 法术 职业专属 职业专属来源：死灵法师：初始牌 x1。 1 阶 Play this card only if your opponent has at most 5 health. Win the fight. Gain 1 mana permanently. 只能在对手生命不超过 5 点时打出。赢得这场战斗。永久获得 1 点法力。 never 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SoulSiphon__430.png" alt="灵魂虹吸" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>灵魂虹吸</strong>
    <small>Soul Siphon · 法术 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：死灵法师：初始牌 x1。">职业专属</span></span>
    <span>只能在对手生命不超过 5 点时打出。赢得这场战斗。永久获得 1 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sear" data-card-tile data-card-type="法术" data-card-status="monster" data-card-tier="1" data-card-search="灼烙 Sear 灼烙 Sear Sear 法术 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 1 阶 Deal 2 @fir damage. 造成 2 点火焰伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sear__438.png" alt="灼烙" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>灼烙</strong>
    <small>Sear · 法术 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>造成 2 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/vapor-form" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="8" data-card-search="蒸汽形态 Vapor Form 蒸汽形态 VaporForm VaporForm 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Become physical immune until your next turn. 获得物理免疫 直到你的下个回合。 never 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/VaporForm__92.png" alt="蒸汽形态" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>蒸汽形态</strong>
    <small>Vapor Form · 法术 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得物理免疫 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/explosion" data-card-tile data-card-type="法术" data-card-status="monster" data-card-tier="3" data-card-search="爆炸 Explosion 爆炸 Explosion Explosion 法术 怪物限定 怪物限定来源：小妖精 基础牌组。 3 阶 Deal 10 @fir damage. 造成 10 点火焰伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Explosion__982.png" alt="爆炸" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>爆炸</strong>
    <small>Explosion · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：小妖精 基础牌组。">怪物限定</span></span>
    <span>造成 10 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/electrocute" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="6" data-card-search="电刑 Electrocute 电刑 Electrocute Electrocute 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Deal 5 @air damage plus 1 @air damage for each mana you have left after casting Electrocute. 造成 5 点电系伤害；施放 电刑 后，你每剩余 1 点法力就额外造成 1 点电系伤害。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Electrocute__1012.png" alt="电刑" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>电刑</strong>
    <small>Electrocute · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 5 点电系伤害；施放 电刑 后，你每剩余 1 点法力就额外造成 1 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/orison" data-card-tile data-card-type="法术" data-card-status="profession" data-card-tier="1" data-card-search="短祷 Orison 短祷 Orison Orison 法术 职业专属 职业专属来源：牧师：初始牌 x1。 1 阶 Gain 4 health. &lt;Overhealing&gt; becomes a shield. 回复 4 点生命。&lt;过量治疗&gt; 变为护盾。 never 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Orison__794.png" alt="短祷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>短祷</strong>
    <small>Orison · 法术 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：牧师：初始牌 x1。">职业专属</span></span>
    <span>回复 4 点生命。<span class="dq-term">过量治疗</span> 变为护盾。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bless" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="6" data-card-search="祝福 Bless 祝福 Bless Bless 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Gain 15 health. &lt;Overhealing&gt; becomes a shield. 回复 15 点生命。&lt;过量治疗&gt; 变为护盾。 盗贼 1 牧师 5 战士 1 法师 5">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bless__316.png" alt="祝福" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>祝福</strong>
    <small>Bless · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>回复 15 点生命。<span class="dq-term">过量治疗</span> 变为护盾。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/divine-inspiration" data-card-tile data-card-type="法术" data-card-status="unlock" data-card-tier="3" data-card-search="神圣启示 Divine Inspiration 神圣启示 DivineInspiration DivineInspiration 法术 成就解锁 需要解锁：BOSSLICH。解锁后可进入奖励和商店的 CardFinder 候选池。 3 阶 Search your deck for any card and put it into your hand. 从你的牌库中搜索任意 1 张牌并加入手牌。 BOSSLICH 盗贼 1 牧师 10 战士 1 法师 4">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DivineInspiration__886.png" alt="神圣启示" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>神圣启示</strong>
    <small>Divine Inspiration · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSLICH。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>从你的牌库中搜索任意 1 张牌并加入手牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wrath-of-god" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="7" data-card-search="神怒 Wrath of God 神怒 WrathOfGod WrathOfGod 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Draw 5 cards. Discard all non-attack cards from your hand. 抽 5 张牌。弃掉你手牌中的所有非攻击牌。 盗贼 1 牧师 3 战士 8 法师 1 ID 4 5">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WrathOfGod__76.png" alt="神怒" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>神怒</strong>
    <small>Wrath of God · 法术 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 5 张牌。弃掉你手牌中的所有非攻击牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shrink" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="9" data-card-search="缩小 Shrink 缩小 Shrink Shrink 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Your opponent loses half their health, rounded down (maximum loss of 60). 对手失去一半生命，向下取整，最多失去 60 点。 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Shrink__243.png" alt="缩小" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>缩小</strong>
    <small>Shrink · 法术 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手失去一半生命，向下取整，最多失去 60 点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/natures-blessing" data-card-tile data-card-type="法术" data-card-status="profession" data-card-tier="8" data-card-search="自然祝福 Nature's Blessing 自然祝福 NaturesBlessing NaturesBlessing 法术 职业专属 职业专属来源：德鲁伊：Druid 专属。 8 阶 Deal 10 @fir damage. Your opponent becomes &lt;Poisoned 5&gt; and &lt;Chilled 2&gt; ^. Draw the next spell card in your deck. 造成 10 点火焰伤害。对手获得 &lt;中毒 5&gt;和&lt;寒冷 2&gt;。从牌库抽取下一张法术牌。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/NaturesBlessing__790.png" alt="自然祝福" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>自然祝福</strong>
    <small>Nature's Blessing · 法术 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：Druid 专属。">职业专属</span></span>
    <span>造成 10 点火焰伤害。对手获得 <span class="dq-term">中毒 5</span>和<span class="dq-term">寒冷 2</span>。从牌库抽取下一张法术牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/jasras-jarring-jolt" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="1" data-card-search="贾斯拉的震荡电击 Jasra's Jarring Jolt 贾斯拉的震荡电击 JasrasJarringJolt JasrasJarringJolt 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 1 @air ^, 1 @ear ^, 1 @fir ^, and 1 @wat damage. 造成 1 电系，1 毒性，1 火焰，并 1 点冰霜伤害。 盗贼 1 牧师 2 战士 1 法师 6">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/JasrasJarringJolt__694.png" alt="贾斯拉的震荡电击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>贾斯拉的震荡电击</strong>
    <small>Jasra's Jarring Jolt · 法术 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 电系，1 毒性，1 火焰，并 1 点冰霜伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/slow" data-card-tile data-card-type="法术" data-card-status="monster" data-card-tier="2" data-card-search="迟缓 Slow 迟缓 Slow Slow 法术 怪物限定 怪物限定来源：阿卡米萨满 基础牌组、阿卡米萨满 关键行为、阿卡米萨满 等级变化、阿卡米升华者 基础牌组 等 8 项。 2 阶 Your opponent discards a card and loses 1 @tim ^. 对手弃掉 1 张牌并失去 1 点行动点。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slow__898.png" alt="迟缓" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>迟缓</strong>
    <small>Slow · 法术 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：阿卡米萨满 基础牌组、阿卡米萨满 关键行为、阿卡米萨满 等级变化、阿卡米升华者 基础牌组 等 8 项。">怪物限定</span></span>
    <span>对手弃掉 1 张牌并失去 1 点行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/acid-lance" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="3" data-card-search="酸蚀长矛 Acid Lance 酸蚀长矛 AcidLance AcidLance 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Your opponent becomes &lt;Poisoned 4&gt; ^. 对手获得 &lt;中毒 4&gt;。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/AcidLance__261.png" alt="酸蚀长矛" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>酸蚀长矛</strong>
    <small>Acid Lance · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得 <span class="dq-term">中毒 4</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/acid-rain" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="6" data-card-search="酸雨 Acid Rain 酸雨 AcidRain AcidRain 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Your opponent becomes &lt;Poisoned 6&gt; ^. 对手获得 &lt;中毒 6&gt;。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/AcidRain__397.png" alt="酸雨" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>酸雨</strong>
    <small>Acid Rain · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得 <span class="dq-term">中毒 6</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/invisibility" data-card-tile data-card-type="法术" data-card-status="unlock" data-card-tier="6" data-card-search="隐形 Invisibility 隐形 Invisibility Invisibility 法术 成就解锁 需要解锁：CATS2。解锁后可进入奖励和商店的 CardFinder 候选池。 6 阶 Gain 20% dodge for the rest of the fight. 直到本场战斗结束，获得 20% 闪避。 CATS2 盗贼 2 牧师 8 战士 1 法师 5">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Invisibility__938.png" alt="隐形" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>隐形</strong>
    <small>Invisibility · 法术 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：CATS2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>直到本场战斗结束，获得 20% 闪避。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/thunder-storm" data-card-tile data-card-type="法术" data-card-status="monster" data-card-tier="3" data-card-search="雷暴 Thunder Storm 雷暴 ThunderStorm ThunderStorm 法术 怪物限定 怪物限定来源：阿卡米升华者 基础牌组、阿卡米升华者 关键行为。 3 阶 Deal 10 @air damage. 造成 10 点电系伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ThunderStorm__885.png" alt="雷暴" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>雷暴</strong>
    <small>Thunder Storm · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：阿卡米升华者 基础牌组、阿卡米升华者 关键行为。">怪物限定</span></span>
    <span>造成 10 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shock" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="3" data-card-search="震击 Shock 震击 Shock Shock 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Deal 4 @air damage. Draw the next spell card in your deck. 造成 4 点电系伤害。从牌库抽取下一张法术牌。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Shock__987.png" alt="震击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>震击</strong>
    <small>Shock · 法术 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 4 点电系伤害。从牌库抽取下一张法术牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/storm" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="9" data-card-search="风暴 Storm 风暴 Storm Storm 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Deal 10 @air damage. If you have at least 30 mana, lose 30 mana and take an extra turn after this one. 造成 10 点电系伤害。如果你至少有 30 点法力，失去 30 点法力并获得一个额外回合 在本回合之后。 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Storm__769.png" alt="风暴" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>风暴</strong>
    <small>Storm · 法术 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 10 点电系伤害。如果你至少有 30 点法力，失去 30 点法力并获得一个额外回合 在本回合之后。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/storm-shape" data-card-tile data-card-type="法术" data-card-status="normal" data-card-tier="5" data-card-search="风暴形态 Storm Shape 风暴形态 StormShape StormShape 法术 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Until your next turn, damage taken first reduces your mana instead of your health and, so long as you have mana, is reduced by half. 直到你的下个回合，受到的伤害会先减少法力而不是生命；只要你还有法力，该伤害减半。 盗贼 1 牧师 7 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormShape__370.png" alt="风暴形态" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>风暴形态</strong>
    <small>Storm Shape · 法术 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>直到你的下个回合，受到的伤害会先减少法力而不是生命；只要你还有法力，该伤害减半。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mahamat" data-card-tile data-card-type="法术" data-card-status="unlock" data-card-tier="10" data-card-search="马哈马特 Mahamat 马哈马特 Mahamat Mahamat 法术 成就解锁 需要解锁：BOSSGENIE。解锁后可进入奖励和商店的 CardFinder 候选池。 10 阶 Choose 2 at random: Draw 3 cards, deal 10 &lt;piercing&gt; damage to your opponent, gain 15 health, or prevent the next 15 damage that would be dealt to you. 随机选择 2 项：抽 3 张牌、对手受到 10 点&lt;穿透&gt;伤害、回复 15 点生命，或防止你将受到的接下来 15 点伤害。 BOSSGENIE 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mahamat__568.png" alt="马哈马特" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>马哈马特</strong>
    <small>Mahamat · 法术 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSGENIE。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>随机选择 2 项：抽 3 张牌、对手受到 10 点<span class="dq-term">穿透</span>伤害、回复 15 点生命，或防止你将受到的接下来 15 点伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dark-mending" data-card-tile data-card-type="法术" data-card-status="monster" data-card-tier="8" data-card-search="黑暗修补 Dark Mending 黑暗修补 DarkMending DarkMending 法术 怪物限定 怪物限定来源：巫妖 基础牌组。 8 阶 Completely heal, then deal &lt;piercing&gt; damage equal to half the health gained this way. 完全回复生命，然后 造成等同于以此回复生命值一半的&lt;穿透&gt;伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DarkMending__362.png" alt="黑暗修补" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>黑暗修补</strong>
    <small>Dark Mending · 法术 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：巫妖 基础牌组。">怪物限定</span></span>
    <span>完全回复生命，然后 造成等同于以此回复生命值一半的<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
</section>
</section>

<section class="dq-card-group" data-card-group data-card-group-type="行动牌">
<h2 id="action" class="dq-card-group-title"><span>行动牌</span><em data-card-group-count>150 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
<a class="dq-card-tile dq-card-tile-small" href="/cards/bad-wishes" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="三个愿望 Three Wishes 三个愿望 BadWishes BadWishes 行动牌 怪物限定 怪物限定来源：灯神 基础牌组、灯神 优先起手、灯神 关键行为。 3 阶 Present your opponent with three options. They choose one. 给对手三个选项，由对手选择其中一个。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BadWishes__1004.png" alt="三个愿望" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>三个愿望</strong>
    <small>Three Wishes · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：灯神 基础牌组、灯神 优先起手、灯神 关键行为。">怪物限定</span></span>
    <span>给对手三个选项，由对手选择其中一个。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bad-wishes2" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="三个愿望（2） Three Wishes 三个愿望（2） BadWishes2 BadWishes2 行动牌 怪物限定 怪物限定来源：灯神 优先起手、灯神 关键行为、灯神 等级变化。 6 阶 Present your opponent with three options. They choose one. 给对手三个选项，由对手选择其中一个。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BadWishes2__1020.png" alt="三个愿望（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>三个愿望（2）</strong>
    <small>Three Wishes · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：灯神 优先起手、灯神 关键行为、灯神 等级变化。">怪物限定</span></span>
    <span>给对手三个选项，由对手选择其中一个。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/focus" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="6" data-card-search="专注 Focus 专注 Focus Focus 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Draw 2 cards. 抽 2 张牌。 盗贼 6 牧师 8 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Focus__690.png" alt="专注" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>专注</strong>
    <small>Focus · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 2 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sidestep" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="9" data-card-search="侧步 Sidestep 侧步 Sidestep Sidestep 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Draw a card. The next time you deal damage this turn, double it. 抽 1 张牌。本回合你下一次造成伤害时，使该伤害翻倍。 盗贼 10 牧师 1 战士 6 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sidestep__1014.png" alt="侧步" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>侧步</strong>
    <small>Sidestep · 行动牌 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 1 张牌。本回合你下一次造成伤害时，使该伤害翻倍。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/pilfer" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="7" data-card-search="偷取 Pilfer 偷取 Pilfer Pilfer 行动牌 成就解锁 需要解锁：CARDS3。解锁后可进入奖励和商店的 CardFinder 候选池。 7 阶 Steal an equipment card your opponent controls until it is destroyed or the fight ends. 偷取对手控制的 1 张装备牌，直到该装备被摧毁或本场战斗结束。 CARDS3 盗贼 6 牧师 1 战士 2 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pilfer__148.png" alt="偷取" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>偷取</strong>
    <small>Pilfer · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：CARDS3。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>偷取对手控制的 1 张装备牌，直到该装备被摧毁或本场战斗结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/zombie-bite" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="1" data-card-search="僵尸撕咬 Zombie Bite 僵尸撕咬 ZombieBite ZombieBite 行动牌 怪物限定 怪物限定来源：僵尸 基础牌组、僵尸 优先起手。 1 阶 Your opponent gains 5 ranks of diseased. At the beginning of their turn, they lose 1 rank of diseased. When the last is removed, they die. 对手获得 5 层疾病。在对手回合开始时，对手失去 1 层疾病。当 最后一层被移除时，对手 死亡。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ZombieBite__710.png" alt="僵尸撕咬" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>僵尸撕咬</strong>
    <small>Zombie Bite · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：僵尸 基础牌组、僵尸 优先起手。">怪物限定</span></span>
    <span>对手获得 5 层疾病。在对手回合开始时，对手失去 1 层疾病。当 最后一层被移除时，对手 死亡。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/inner-focus" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="3" data-card-search="内在专注 Inner Focus 内在专注 InnerFocus InnerFocus 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Draw 2 cards. Discard a card. 抽 2 张牌。弃掉一张牌。 盗贼 3 牧师 8 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InnerFocus__290.png" alt="内在专注" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>内在专注</strong>
    <small>Inner Focus · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 2 张牌。弃掉一张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/inner-peace" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="内心平静 Inner Peace 内心平静 InnerPeace InnerPeace 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Draw 3 cards. Discard 2 cards. 抽 3 张牌。弃掉 2 牌。 盗贼 3 牧师 6 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InnerPeace__605.png" alt="内心平静" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>内心平静</strong>
    <small>Inner Peace · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 3 张牌。弃掉 2 牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/final-fortune" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="6" data-card-search="最后机会 Last Chance 最后机会 FinalFortune FinalFortune 行动牌 成就解锁 需要解锁：KILL4。解锁后可进入奖励和商店的 CardFinder 候选池。 6 阶 Take an extra turn. If your opponent is alive at the end of that turn, die. 获得一个额外回合。如果该回合结束时对手仍然存活，你死亡。 KILL4 盗贼 6 牧师 8 战士 3 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FinalFortune__696.png" alt="最后机会" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>最后机会</strong>
    <small>Last Chance · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：KILL4。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>获得一个额外回合。如果该回合结束时对手仍然存活，你死亡。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/meditation" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="6" data-card-search="冥想 Meditation 冥想 Meditation Meditation 行动牌 成就解锁 需要解锁：BOSSCUMULONIMBUS。解锁后可进入奖励和商店的 CardFinder 候选池。 6 阶 Exile up to 2 cards from your deck for the rest of the fight. Draw a card. 从牌组中放逐最多 2 张牌，持续到本场战斗结束。抽 1 张牌。 BOSSCUMULONIMBUS 盗贼 3 牧师 6 战士 3 法师 6">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Meditation__541.png" alt="冥想" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冥想</strong>
    <small>Meditation · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSCUMULONIMBUS。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>从牌组中放逐最多 2 张牌，持续到本场战斗结束。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/frost-breath" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="8" data-card-search="冰霜吐息 Frost Breath 冰霜吐息 FrostBreath FrostBreath 行动牌 怪物限定 怪物限定来源：白龙 基础牌组、白龙 优先起手。 8 阶 Deal 5 @wat damage. Your opponent discards 2 cards. 造成 5 点冰霜伤害。对手弃掉 2 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostBreath__424.png" alt="冰霜吐息" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冰霜吐息</strong>
    <small>Frost Breath · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：白龙 基础牌组、白龙 优先起手。">怪物限定</span></span>
    <span>造成 5 点冰霜伤害。对手弃掉 2 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/frost-palm" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="4" data-card-search="冰霜掌 Frost Palm 冰霜掌 FrostPalm FrostPalm 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 This turn, damage you do is @wat damage. 本回合，你造成的伤害变为冰霜伤害。 never 盗贼 3 牧师 2 战士 3 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostPalm__255.png" alt="冰霜掌" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冰霜掌</strong>
    <small>Frost Palm · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>本回合，你造成的伤害变为冰霜伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/rush" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="6" data-card-search="冲刺 Rush 冲刺 Rush Rush 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Deal physical damage equal to 1/4 of your current health (rounded down). 造成等同于 1/4 的 你的 当前 生命 (向下取整) 的物理伤害。 盗贼 1 牧师 3 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Rush__792.png" alt="冲刺" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冲刺</strong>
    <small>Rush · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成等同于 1/4 的 你的 当前 生命 (向下取整) 的物理伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/preparation" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="6" data-card-search="准备 Preparation 准备 Preparation Preparation 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 The next time you deal damage this turn, double it. 本回合你下一次造成伤害时，使该伤害翻倍。 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Preparation__456.png" alt="准备" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>准备</strong>
    <small>Preparation · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>本回合你下一次造成伤害时，使该伤害翻倍。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/gaze" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="凝视 Gaze 凝视 Gaze Gaze 行动牌 怪物限定 怪物限定来源：美杜莎 基础牌组、美杜莎 关键行为。 2 阶 Your opponent takes 5 damage for each curse card in their hand. Draw a card. 对手手牌中每有 1 张诅咒牌，就受到 5 点伤害。抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Gaze__534.png" alt="凝视" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>凝视</strong>
    <small>Gaze · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：美杜莎 基础牌组、美杜莎 关键行为。">怪物限定</span></span>
    <span>对手手牌中每有 1 张诅咒牌，就受到 5 点伤害。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/baleful-gaze" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="7" data-card-search="凶兆凝视 Baleful Gaze 凶兆凝视 BalefulGaze BalefulGaze 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 7 阶 Your opponent loses half their health, rounded down (maximum loss of 60). 对手失去一半生命，向下取整，最多失去 60 点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BalefulGaze__1046.png" alt="凶兆凝视" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>凶兆凝视</strong>
    <small>Baleful Gaze · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>对手失去一半生命，向下取整，最多失去 60 点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/slice" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="2" data-card-search="切割 Slice 切割 Slice Slice 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Deal 1 @atk damage. Draw a card. 造成 1 点攻击伤害。抽 1 张牌。 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slice__280.png" alt="切割" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>切割</strong>
    <small>Slice · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/jab" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="刺拳 Jab 刺拳 Jab Jab 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Deal 1 @atk damage. Draw a card. Gain 1 @tim ^. 造成 1 点攻击伤害。抽 1 张牌。获得 1 行动点。 盗贼 10 牧师 2 战士 10 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Jab__408.png" alt="刺拳" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>刺拳</strong>
    <small>Jab · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害。抽 1 张牌。获得 1 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/gore" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="刺穿 Gore 刺穿 Gore Gore 行动牌 怪物限定 怪物限定来源：独角兽 基础牌组、独角兽 优先起手。 2 阶 Deal 5 @atk damage. 造成 5 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Gore__748.png" alt="刺穿" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>刺穿</strong>
    <small>Gore · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：独角兽 基础牌组、独角兽 优先起手。">怪物限定</span></span>
    <span>造成 5 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/blade-flurry" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="10" data-card-search="剑刃乱舞 Blade Flurry 剑刃乱舞 BladeFlurry BladeFlurry 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 10 阶 You deal double damage this turn. 你本回合造成双倍伤害。 盗贼 10 牧师 1 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BladeFlurry__298.png" alt="剑刃乱舞" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>剑刃乱舞</strong>
    <small>Blade Flurry · 行动牌 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>你本回合造成双倍伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wall-of-swords" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="10" data-card-search="剑墙 Wall of Swords 剑墙 WallOfSwords WallOfSwords 行动牌 成就解锁 需要解锁：BOSSPHOENIX。解锁后可进入奖励和商店的 CardFinder 候选池。 10 阶 This turn, whenever you deal damage, gain a shield that prevents that much damage. 本回合每当你造成伤害时，获得一个可防止等量伤害的护盾。 BOSSPHOENIX 盗贼 3 牧师 3 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WallOfSwords__102.png" alt="剑墙" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>剑墙</strong>
    <small>Wall of Swords · 行动牌 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSPHOENIX。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>本回合每当你造成伤害时，获得一个可防止等量伤害的护盾。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/accelerate" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="10" data-card-search="加速 Accelerate 加速 Accelerate Accelerate 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 10 阶 Draw 3 cards. Gain 3 @tim ^. 抽 3 张牌。获得 3 行动点。 盗贼 10 牧师 1 战士 4 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Accelerate__624.png" alt="加速" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>加速</strong>
    <small>Accelerate · 行动牌 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 3 张牌。获得 3 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/overpower" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="10" data-card-search="压制 Overpower 压制 Overpower Overpower 行动牌 成就解锁 需要解锁：CARDS4。解锁后可进入奖励和商店的 CardFinder 候选池。 10 阶 Draw a card for each equipment you control. 抽 1 张牌 每有你控制的装备。 CARDS4 盗贼 3 牧师 1 战士 9 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Overpower__282.png" alt="压制" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>压制</strong>
    <small>Overpower · 行动牌 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：CARDS4。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>抽 1 张牌 每有你控制的装备。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/beckon" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="召唤 Beckon 召唤 Beckon Beckon 行动牌 怪物限定 怪物限定来源：塞壬 基础牌组、塞壬 优先起手、塞壬 关键行为。 6 阶 Exile 2 cards at random from your opponent's hand. 放逐 2 牌 随机 从 对手手牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Beckon__63.png" alt="召唤" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>召唤</strong>
    <small>Beckon · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：塞壬 基础牌组、塞壬 优先起手、塞壬 关键行为。">怪物限定</span></span>
    <span>放逐 2 牌 随机 从 对手手牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/engulf" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="吞没 Engulf 吞没 Engulf Engulf 行动牌 怪物限定 怪物限定来源：凝胶方块 关键行为、凝胶方块 等级变化。 3 阶 Exile target equipment or prayer card. Gain 5 health. 放逐目标装备牌或祈祷牌。回复 5 点生命。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Engulf__537.png" alt="吞没" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吞没</strong>
    <small>Engulf · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：凝胶方块 关键行为、凝胶方块 等级变化。">怪物限定</span></span>
    <span>放逐目标装备牌或祈祷牌。回复 5 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/drain-life" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="吸取生命 Drain Life 吸取生命 DrainLife DrainLife 行动牌 怪物限定 怪物限定来源：女妖 基础牌组、亡魂 基础牌组。 5 阶 Your opponent loses 5 maximum health. Heal 5 health. 对手 失去 5 最多 生命。回复 5 点生命。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DrainLife__687.png" alt="吸取生命" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吸取生命</strong>
    <small>Drain Life · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：女妖 基础牌组、亡魂 基础牌组。">怪物限定</span></span>
    <span>对手 失去 5 最多 生命。回复 5 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/vampire-bite" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="吸血鬼之咬 Vampire Bite 吸血鬼之咬 VampireBite VampireBite 行动牌 怪物限定 怪物限定来源：吸血蝙蝠 基础牌组、吸血蝙蝠 优先起手、吸血蝙蝠 关键行为、吸血鬼 基础牌组。 2 阶 Deal 2 @atk damage. Gain 2 health. 造成 2 点攻击伤害。回复 2 点生命。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/VampireBite__1027.png" alt="吸血鬼之咬" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吸血鬼之咬</strong>
    <small>Vampire Bite · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：吸血蝙蝠 基础牌组、吸血蝙蝠 优先起手、吸血蝙蝠 关键行为、吸血鬼 基础牌组。">怪物限定</span></span>
    <span>造成 2 点攻击伤害。回复 2 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/vampire-bite2" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="吸血鬼之咬（2） Vampire Bite (2) 吸血鬼之咬（2） VampireBite2 VampireBite2 行动牌 怪物限定 怪物限定来源：亡魂 基础牌组。 3 阶 Deal 3 @atk damage. Gain 3 health. 造成 3 点攻击伤害。回复 3 点生命。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/VampireBite2__373.png" alt="吸血鬼之咬（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吸血鬼之咬（2）</strong>
    <small>Vampire Bite (2) · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：亡魂 基础牌组。">怪物限定</span></span>
    <span>造成 3 点攻击伤害。回复 3 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/recycle" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="6" data-card-search="回收 Recycle 回收 Recycle Recycle 行动牌 成就解锁 需要解锁：CARDS2。解锁后可进入奖励和商店的 CardFinder 候选池。 6 阶 Discard all other cards in play. Draw a card. Exile Recycle for the rest of the fight. 弃掉场上所有其他牌。抽 1 张牌。直到本场战斗结束，放逐 回收。 CARDS2 盗贼 10 牧师 2 战士 10 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Recycle__416.png" alt="回收" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>回收</strong>
    <small>Recycle · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：CARDS2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>弃掉场上所有其他牌。抽 1 张牌。直到本场战斗结束，放逐 回收。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dodge" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="7" data-card-search="回避 Avoid 回避 Dodge Dodge 行动牌 成就解锁 需要解锁：BOSSUSSURIWARQUEEN。解锁后可进入奖励和商店的 CardFinder 候选池。 7 阶 Gain 50% dodge until your next turn. Draw a card. 获得 50% 闪避 直到你的下个回合。抽 1 张牌。 BOSSUSSURIWARQUEEN 盗贼 10 牧师 2 战士 10 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Dodge__145.png" alt="回避" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>回避</strong>
    <small>Avoid · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSUSSURIWARQUEEN。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>获得 50% 闪避 直到你的下个回合。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/goblin-bomb" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="地精炸弹 Goblin Bomb 地精炸弹 GoblinBomb GoblinBomb 行动牌 怪物限定 怪物限定来源：地精王 基础牌组。 2 阶 If you have a goblin lackey in play, it is destroyed and your opponent takes 5 @fir damage. 如果你场上有 地精跟班，则摧毁它，并让对手受到 5 点火焰伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/GoblinBomb__480.png" alt="地精炸弹" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>地精炸弹</strong>
    <small>Goblin Bomb · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：地精王 基础牌组。">怪物限定</span></span>
    <span>如果你场上有 地精跟班，则摧毁它，并让对手受到 5 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/execute" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="3" data-card-search="处决 Execute 处决 Execute Execute 行动牌 成就解锁 需要解锁：DAMAGE2。解锁后可进入奖励和商店的 CardFinder 候选池。 3 阶 Play this card only if your opponent has at most 12 health. Win the fight. 只能在对手生命不超过 12 点时打出。赢得这场战斗。 DAMAGE2 盗贼 6 牧师 1 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Execute__445.png" alt="处决" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>处决</strong>
    <small>Execute · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：DAMAGE2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>只能在对手生命不超过 12 点时打出。赢得这场战斗。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/second-wind" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="6" data-card-search="复苏之风 Second Wind 复苏之风 SecondWind SecondWind 行动牌 成就解锁 需要解锁：BOSSUNICORN。解锁后可进入奖励和商店的 CardFinder 候选池。 6 阶 Gain 2 health. Draw a card. \\n \\n If you discard Second Wind to an effect, gain 10 health. 回复 2 点生命。抽 1 张牌。如果你因效果弃掉 二次恢复，回复 10 点生命。 BOSSUNICORN 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SecondWind__1032.png" alt="复苏之风" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>复苏之风</strong>
    <small>Second Wind · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSUNICORN。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>回复 2 点生命。抽 1 张牌。如果你因效果弃掉 二次恢复，回复 10 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/hemorrhage" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="7" data-card-search="大出血 Hemorrhage 大出血 Hemorrhage Hemorrhage 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Your opponent becomes &lt;Poisoned 3&gt; ^. Draw a card. 对手获得 &lt;中毒 3&gt;。抽 1 张牌。 盗贼 8 牧师 5 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Hemorrhage__497.png" alt="大出血" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>大出血</strong>
    <small>Hemorrhage · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得 <span class="dq-term">中毒 3</span>。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/study" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="8" data-card-search="学习 Study 学习 Study Study 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Draw 3 cards. Discard 1 card. 抽 3 张牌。弃掉 1 牌。 盗贼 2 牧师 10 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Study__609.png" alt="学习" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>学习</strong>
    <small>Study · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 3 张牌。弃掉 1 牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/study-guide" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="1" data-card-search="学习指南 Study Guide 学习指南 StudyGuide StudyGuide 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Choose a card in your opponent's discard pile. Take it and add it to your deck permanently. This card is removed from the game and your deck permanently after use. 选择一张牌 在 对手弃牌堆。拿取 它并永久加入你的牌库。此 牌 是 从游戏中移除并你的牌库 永久 在之后 使用。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StudyGuide__943.png" alt="学习指南" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>学习指南</strong>
    <small>Study Guide · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>选择一张牌 在 对手弃牌堆。拿取 它并永久加入你的牌库。此 牌 是 从游戏中移除并你的牌库 永久 在之后 使用。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/gag" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="4" data-card-search="封口 Gag 封口 Gag Gag 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Your opponent discards all spell cards from their hand. Deal 3 @atk damage. 对手弃掉手牌中的所有法术牌。造成 3 点攻击伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Gag__608.png" alt="封口" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>封口</strong>
    <small>Gag · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手弃掉手牌中的所有法术牌。造成 3 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/scream" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="尖叫 Scream 尖叫 Scream Scream 行动牌 怪物限定 怪物限定来源：女妖 基础牌组、女妖 优先起手。 5 阶 Your opponent discards 2 cards. 对手弃掉 2 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Scream__750.png" alt="尖叫" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>尖叫</strong>
    <small>Scream · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：女妖 基础牌组、女妖 优先起手。">怪物限定</span></span>
    <span>对手弃掉 2 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/troll-hide" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="巨魔皮 Troll Hide 巨魔皮 TrollHide TrollHide 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 For the rest of the fight, gain 2 health at the start of your turn. 本场战斗剩余期间，每个你的回合开始时回复 2 点生命。 盗贼 1 牧师 6 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/TrollHide__332.png" alt="巨魔皮" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>巨魔皮</strong>
    <small>Troll Hide · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>本场战斗剩余期间，每个你的回合开始时回复 2 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/lich-kick" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="1" data-card-search="巫妖踢击 Lich Kick 巫妖踢击 LichKick LichKick 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Destroy all Phylacteries in play. 摧毁场上所有 命匣。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/LichKick__801.png" alt="巫妖踢击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>巫妖踢击</strong>
    <small>Lich Kick · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>摧毁场上所有 命匣。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/channel" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="5" data-card-search="引导 Channel 引导 Channel Channel 行动牌 成就解锁 需要解锁：ELEMENTALS2。解锁后可进入奖励和商店的 CardFinder 候选池。 5 阶 Your next spell cast this turn has its effect doubled. 你本回合施放的下一个法术效果翻倍。 ELEMENTALS2 盗贼 1 牧师 3 战士 1 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Channel__949.png" alt="引导" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>引导</strong>
    <small>Channel · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：ELEMENTALS2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>你本回合施放的下一个法术效果翻倍。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mind-drain" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="心智吸取 Mind Drain 心智吸取 MindDrain MindDrain 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 5 阶 Gain 1 @tim ^. Look at your opponent's hand and choose an action card. Add it to your hand. 获得 1 行动点。查看对手手牌并选择 1 个 行动牌。加入你的手牌。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/MindDrain__433.png" alt="心智吸取" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>心智吸取</strong>
    <small>Mind Drain · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>获得 1 行动点。查看对手手牌并选择 1 个 行动牌。加入你的手牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/battle-cry" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="10" data-card-search="战吼 Battle Cry 战吼 BattleCry BattleCry 行动牌 成就解锁 需要解锁：DAMAGE4。解锁后可进入奖励和商店的 CardFinder 候选池。 10 阶 Draw a card for each Attack card in play. 抽 1 张牌 每有攻击牌 在场。 DAMAGE4 盗贼 3 牧师 1 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BattleCry__759.png" alt="战吼" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>战吼</strong>
    <small>Battle Cry · 行动牌 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：DAMAGE4。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>抽 1 张牌 每有攻击牌 在场。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/pounce" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="扑击 Pounce 扑击 Pounce Pounce 行动牌 怪物限定 怪物限定来源：乌苏里追踪者 基础牌组、乌苏里追踪者 优先起手、乌苏里战争女王 基础牌组、乌苏里战争女王 优先起手 等 6 项。 6 阶 Draw 3 cards, then remove Pounce from your deck for the remainder of the fight. 抽 3 张牌，然后直到本场战斗结束，从你的牌库中移除 扑击。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pounce__890.png" alt="扑击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>扑击</strong>
    <small>Pounce · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：乌苏里追踪者 基础牌组、乌苏里追踪者 优先起手、乌苏里战争女王 基础牌组、乌苏里战争女王 优先起手 等 6 项。">怪物限定</span></span>
    <span>抽 3 张牌，然后直到本场战斗结束，从你的牌库中移除 扑击。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/pickpocket" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="2" data-card-search="扒窃 Pickpocket 扒窃 Pickpocket Pickpocket 行动牌 成就解锁 需要解锁：GOBLIN2。解锁后可进入奖励和商店的 CardFinder 候选池。 2 阶 Gain 3 gold. Exile Pickpocket for the rest of the fight. 获得 3 金币。直到本场战斗结束，放逐 扒窃。 GOBLIN2 盗贼 3 牧师 1 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pickpocket__470.png" alt="扒窃" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>扒窃</strong>
    <small>Pickpocket · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：GOBLIN2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>获得 3 金币。直到本场战斗结束，放逐 扒窃。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/strike1" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="2" data-card-search="打击（1） Strike (1) 打击（1） Strike1 Strike1 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Deal 5 @atk damage. \\n Warning: Higher levels of Strike cost additional @tim to play. 造成 5 点攻击伤害。提示：高等级 打击 打出时需要额外行动点。 盗贼 8 牧师 2 战士 8 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike1__1021.png" alt="打击（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>打击（1）</strong>
    <small>Strike (1) · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 5 点攻击伤害。提示：高等级 打击 打出时需要额外行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/strike2" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="打击（2） Strike (2) 打击（2） Strike2 Strike2 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Deal 10 @atk damage. \\n Warning: Higher levels of Strike cost additional @tim to play. 造成 10 点攻击伤害。提示：高等级 打击 打出时需要额外行动点。 盗贼 8 牧师 2 战士 8 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike2__693.png" alt="打击（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>打击（2）</strong>
    <small>Strike (2) · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 10 点攻击伤害。提示：高等级 打击 打出时需要额外行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/strike3" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="7" data-card-search="打击（3） Strike (3) 打击（3） Strike3 Strike3 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Deal 15 @atk damage. \\n Warning: Higher levels of Strike cost additional @tim to play. 造成 15 点攻击伤害。提示：高等级 打击 打出时需要额外行动点。 盗贼 8 牧师 2 战士 8 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike3__295.png" alt="打击（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>打击（3）</strong>
    <small>Strike (3) · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 15 点攻击伤害。提示：高等级 打击 打出时需要额外行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/choke" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="4" data-card-search="扼喉 Choke 扼喉 Choke Choke 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Deal 3 @atk damage. Your opponent loses all their mana. 造成 3 点攻击伤害。对手失去所有法力。 盗贼 10 牧师 1 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Choke__500.png" alt="扼喉" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>扼喉</strong>
    <small>Choke · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 3 点攻击伤害。对手失去所有法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/coin-toss" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="1" data-card-search="抛硬币 Coin Toss 抛硬币 CoinToss CoinToss 行动牌 怪物限定 怪物限定来源：拟态怪 基础牌组、拟态怪 优先起手、拟态怪 关键行为、拟态怪 等级变化。 1 阶 Deal 5 &lt;piercing damage&gt; ^. Your opponent gains 5 gold. Exile Coin Toss. 造成 5 点&lt;穿透伤害&gt;。对手获得 5 金币。放逐此牌。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CoinToss__111.png" alt="抛硬币" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>抛硬币</strong>
    <small>Coin Toss · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：拟态怪 基础牌组、拟态怪 优先起手、拟态怪 关键行为、拟态怪 等级变化。">怪物限定</span></span>
    <span>造成 5 点<span class="dq-term">穿透伤害</span>。对手获得 5 金币。放逐此牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/strike" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="1" data-card-search="拍击 Slap 拍击 Strike Strike 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 1 @atk damage. 造成 1 点攻击伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Strike__300.png" alt="拍击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>拍击</strong>
    <small>Slap · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mimic" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="4" data-card-search="拟态 Mimic 拟态 Mimic Mimic 行动牌 成就解锁 需要解锁：BOSSMIME。解锁后可进入奖励和商店的 CardFinder 候选池。 4 阶 Choose an action card in play and copy its effects. 选择 场上的 1 张行动牌并复制其效果。 BOSSMIME 盗贼 6 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mimic__545.png" alt="拟态" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>拟态</strong>
    <small>Mimic · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSMIME。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>选择 场上的 1 张行动牌并复制其效果。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/expose" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="8" data-card-search="揭露 Expose 揭露 Expose Expose 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Your opponent is &lt;Weakened 2&gt; this turn. 对手获得 &lt;虚弱 2&gt; 本回合。 盗贼 6 牧师 1 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Expose__968.png" alt="揭露" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>揭露</strong>
    <small>Expose · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得 <span class="dq-term">虚弱 2</span> 本回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shred" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="撕碎 Shred 撕碎 Shred Shred 行动牌 怪物限定 怪物限定来源：乌苏里追踪者 基础牌组、乌苏里战争女王 基础牌组、乌苏里猎手 基础牌组、乌苏里伏击者 基础牌组。 3 阶 Deal 2 @atk damage. Deal 2 @atk damage for each Claw card in play. 造成 2 点攻击伤害。造成 2 点攻击伤害 每有爪击 场上的牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Shred__87.png" alt="撕碎" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>撕碎</strong>
    <small>Shred · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：乌苏里追踪者 基础牌组、乌苏里战争女王 基础牌组、乌苏里猎手 基础牌组、乌苏里伏击者 基础牌组。">怪物限定</span></span>
    <span>造成 2 点攻击伤害。造成 2 点攻击伤害 每有爪击 场上的牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/alacrity" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="敏捷 Alacrity 敏捷 Alacrity Alacrity 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Gain 3 @tim ^. Draw a card. 获得 3 行动点。抽 1 张牌。 盗贼 10 牧师 2 战士 10 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Alacrity__249.png" alt="敏捷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>敏捷</strong>
    <small>Alacrity · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 行动点。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/teach" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="4" data-card-search="教学 Teach 教学 Teach Teach 行动牌 怪物限定 怪物限定来源：斯芬克斯 基础牌组、斯芬克斯 优先起手。 4 阶 Your opponent chooses a card in their hand and exiles it for the remainder of the fight. They then add a Sear to their hand if they exiled an Action, a Slap if they exiled an Attack, or an Attack (level 1) otherwise. 对手选择其手牌中的 1 张牌，并直到本场战斗结束将其放逐。若放逐的是行动牌，则对手将 灼烧 加入手牌；若放逐的是攻击牌，则加入 掌掴；否则加入 攻击 (等级 1)。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Teach__245.png" alt="教学" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>教学</strong>
    <small>Teach · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：斯芬克斯 基础牌组、斯芬克斯 优先起手。">怪物限定</span></span>
    <span>对手选择其手牌中的 1 张牌，并直到本场战斗结束将其放逐。若放逐的是行动牌，则对手将 灼烧 加入手牌；若放逐的是攻击牌，则加入 掌掴；否则…</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/hamstring" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="4" data-card-search="断筋 Hamstring 断筋 Hamstring Hamstring 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Your opponent discards all action cards from their hand. Deal 3 @atk damage. 对手弃掉手牌中的所有行动牌。造成 3 点攻击伤害。 盗贼 6 牧师 1 战士 6 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Hamstring__1038.png" alt="断筋" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>断筋</strong>
    <small>Hamstring · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手弃掉手牌中的所有行动牌。造成 3 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/incorporeal" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="无形 Incorporeal 无形 Incorporeal Incorporeal 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 3 阶 Become physical resistant until your next turn. 获得物理抗性 直到你的下个回合。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Incorporeal__417.png" alt="无形" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>无形</strong>
    <small>Incorporeal · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>获得物理抗性 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/swipe" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="横扫 Swipe 横扫 Swipe Swipe 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 2 阶 Gain 2 @tim and deal 1 @atk damage. 获得 2 行动点并造成 1 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Swipe__1002.png" alt="横扫" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>横扫</strong>
    <small>Swipe · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>获得 2 行动点并造成 1 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/hardening-sap" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="橡木之力 Might of Oak 橡木之力 HardeningSap HardeningSap 行动牌 怪物限定 怪物限定来源：树人 基础牌组、树人 优先起手。 6 阶 For the remainder of the fight, you deal 1 additional damage from each physical source. 直到本场战斗结束，你的每个物理伤害来源额外造成 1 点伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HardeningSap__853.png" alt="橡木之力" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>橡木之力</strong>
    <small>Might of Oak · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：树人 基础牌组、树人 优先起手。">怪物限定</span></span>
    <span>直到本场战斗结束，你的每个物理伤害来源额外造成 1 点伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/venom" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="1" data-card-search="毒液 Venom 毒液 Venom Venom 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Your opponent becomes &lt;Poisoned 3&gt; ^. 对手获得 &lt;中毒 3&gt;。 盗贼 6 牧师 6 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Venom__796.png" alt="毒液" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>毒液</strong>
    <small>Venom · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手获得 <span class="dq-term">中毒 3</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/healing-potion" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="2" data-card-search="治疗药水 Healing Potion 治疗药水 HealingPotion HealingPotion 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Completely heal. This card is removed from the game and your deck permanently after use. 完全回复生命。此牌使用后会从游戏和你的牌库中永久移除。 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HealingPotion__903.png" alt="治疗药水" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>治疗药水</strong>
    <small>Healing Potion · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>完全回复生命。此牌使用后会从游戏和你的牌库中永久移除。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mana-drain" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="法力吸取 Mana Drain 法力吸取 ManaDrain ManaDrain 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 2 阶 Your opponent loses 5 mana. Gain mana equal to the amount lost this way. 对手失去 5 点法力。你获得等同于其以此失去数量的法力。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ManaDrain__88.png" alt="法力吸取" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力吸取</strong>
    <small>Mana Drain · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>对手失去 5 点法力。你获得等同于其以此失去数量的法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mana-potion" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="法力药水 Mana Potion 法力药水 ManaPotion ManaPotion 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 2 阶 Your mana is set to its maximum value. This card is removed from the game and your deck permanently after use. 你的法力设为最大值。此牌使用后会从游戏和你的牌库中永久移除。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ManaPotion__835.png" alt="法力药水" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力药水</strong>
    <small>Mana Potion · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>你的法力设为最大值。此牌使用后会从游戏和你的牌库中永久移除。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/circle" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="3" data-card-search="法阵 Circle 法阵 Circle Circle 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Draw a card and gain 1 @tim ^. At the end of your turn, draw a card and gain 1 @tim ^. 抽 1 张牌并获得 1 行动点。在你的回合结束时，抽 1 张牌并获得 1 行动点。 盗贼 3 牧师 1 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Circle__89.png" alt="法阵" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法阵</strong>
    <small>Circle · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 1 张牌并获得 1 行动点。在你的回合结束时，抽 1 张牌并获得 1 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bleed" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="6" data-card-search="流血 Bleed 流血 Bleed Bleed 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Draw a card. Gain 1 @tim ^. Your opponent becomes &lt;Poisoned 1&gt; ^. 抽 1 张牌。获得 1 行动点。对手获得 &lt;中毒 1&gt;。 盗贼 6 牧师 2 战士 6 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bleed__414.png" alt="流血" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>流血</strong>
    <small>Bleed · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 1 张牌。获得 1 行动点。对手获得 <span class="dq-term">中毒 1</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/digest" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="消化 Digest 消化 Digest Digest 行动牌 怪物限定 怪物限定来源：软泥怪 基础牌组、软泥怪 优先起手。 3 阶 Your opponent exiles a card at random from their hand. 对手随机从手牌中放逐 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Digest__343.png" alt="消化" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>消化</strong>
    <small>Digest · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：软泥怪 基础牌组、软泥怪 优先起手。">怪物限定</span></span>
    <span>对手随机从手牌中放逐 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/chaos-prayer" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="混沌祈祷 Chaos Prayer 混沌祈祷 ChaosPrayer ChaosPrayer 行动牌 怪物限定 怪物限定来源：混沌门徒 基础牌组、混沌门徒 关键行为。 3 阶 Choose one at random: Heal 5 health, or your opponent loses 2 @tim ^, or your opponent discards 2 cards, or you take 3 @fir damage. 随机选择 1 项：回复 5 点生命，或 对手失去 2 行动点，或 对手弃掉 2 张牌，或 你受到 3 点火焰伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ChaosPrayer__239.png" alt="混沌祈祷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>混沌祈祷</strong>
    <small>Chaos Prayer · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：混沌门徒 基础牌组、混沌门徒 关键行为。">怪物限定</span></span>
    <span>随机选择 1 项：回复 5 点生命，或 对手失去 2 行动点，或 对手弃掉 2 张牌，或 你受到 3 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/obliterate" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="8" data-card-search="湮灭 Obliterate 湮灭 Obliterate Obliterate 行动牌 成就解锁 需要解锁：DRAGON2。解锁后可进入奖励和商店的 CardFinder 候选池。 8 阶 Destroy all equipment (yours and your opponent's). Deal 5 @atk damage for each equipment destroyed. 摧毁所有装备，包括你的和对手的。每摧毁 1 件装备，造成 5 点攻击伤害。 DRAGON2 盗贼 1 牧师 6 战士 1 法师 6">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Obliterate__627.png" alt="湮灭" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>湮灭</strong>
    <small>Obliterate · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：DRAGON2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>摧毁所有装备，包括你的和对手的。每摧毁 1 件装备，造成 5 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flame-breath" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="火焰吐息 Flame Breath 火焰吐息 FlameBreath FlameBreath 行动牌 怪物限定 怪物限定来源：红龙 基础牌组、红龙 优先起手。 5 阶 Deal 10 @fir damage. 造成 10 点火焰伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameBreath__862.png" alt="火焰吐息" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰吐息</strong>
    <small>Flame Breath · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：红龙 基础牌组、红龙 优先起手。">怪物限定</span></span>
    <span>造成 10 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flame-palm" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="火焰掌 Flame Palm 火焰掌 FlamePalm FlamePalm 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 This turn, damage you do is @fir damage. 本回合，你造成的伤害变为火焰伤害。 never 盗贼 3 牧师 2 战士 3 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlamePalm__1042.png" alt="火焰掌" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰掌</strong>
    <small>Flame Palm · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>本回合，你造成的伤害变为火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/fire-bomb" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="1" data-card-search="火焰炸弹 Fire Bomb 火焰炸弹 FireBomb FireBomb 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Deal 5 @fir damage. This card is removed from the game and your deck permanently after use. 造成 5 点火焰伤害。此 牌 是 从游戏中移除并你的牌库 永久 在之后 使用。 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FireBomb__700.png" alt="火焰炸弹" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰炸弹</strong>
    <small>Fire Bomb · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 5 点火焰伤害。此 牌 是 从游戏中移除并你的牌库 永久 在之后 使用。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wreath-of-fire" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="火焰环 Wreath of Fire 火焰环 WreathOfFire WreathOfFire 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 5 阶 For the remainder of the fight, when an opponent plays an attack card, deal 3 @fir damage to them. 直到本场战斗结束，每当对手打出攻击牌时，对其造成 3 点火焰伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WreathOfFire__747.png" alt="火焰环" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰环</strong>
    <small>Wreath of Fire · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>直到本场战斗结束，每当对手打出攻击牌时，对其造成 3 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/psionic-blast" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="4" data-card-search="灵能冲击 Psionic Blast 灵能冲击 PsionicBlast PsionicBlast 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Discard a card from your hand. If you do, deal 10 @atk damage. 弃掉一张牌 从 你的手牌。如果如此，造成 10 点攻击伤害。 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PsionicBlast__592.png" alt="灵能冲击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>灵能冲击</strong>
    <small>Psionic Blast · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>弃掉一张牌 从 你的手牌。如果如此，造成 10 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/soul-crush" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="灵魂碾压 Soul Crush 灵魂碾压 SoulCrush SoulCrush 行动牌 怪物限定 怪物限定来源：怨魂 基础牌组。 6 阶 Deal 10 damage. Your opponent discards 2 cards. This has no effect on players with damage reduction, physical resistance, dodge, or a ward. 造成 10 点伤害。对手弃掉 2 张牌。若目标拥有减伤、物理抗性、闪避或护盾守卫，则此牌无效果。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SoulCrush__844.png" alt="灵魂碾压" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>灵魂碾压</strong>
    <small>Soul Crush · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：怨魂 基础牌组。">怪物限定</span></span>
    <span>造成 10 点伤害。对手弃掉 2 张牌。若目标拥有减伤、物理抗性、闪避或护盾守卫，则此牌无效果。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/infernal-contract" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="8" data-card-search="炼狱契约 Infernal Contract 炼狱契约 InfernalContract InfernalContract 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 8 阶 Your opponent discards their hand and gains curses equal to the number of cards discarded this way. 对手弃掉其手牌，并获得等同于以此弃掉牌数的诅咒牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InfernalContract__159.png" alt="炼狱契约" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>炼狱契约</strong>
    <small>Infernal Contract · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>对手弃掉其手牌，并获得等同于以此弃掉牌数的诅咒牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/scorch" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="焦灼 Scorch 焦灼 Scorch Scorch 行动牌 怪物限定 怪物限定来源：伊弗利特 基础牌组。 6 阶 Deal 3 @fir damage. Deal 3 @fir damage for each level of burning on your opponent. 造成 3 点火焰伤害。对手每有 1 层燃烧，额外造成 3 点火焰伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Scorch__675.png" alt="焦灼" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>焦灼</strong>
    <small>Scorch · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：伊弗利特 基础牌组。">怪物限定</span></span>
    <span>造成 3 点火焰伤害。对手每有 1 层燃烧，额外造成 3 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/claw" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="1" data-card-search="爪击 Claw 爪击 Claw Claw 行动牌 怪物限定 怪物限定来源：乌苏里追踪者 基础牌组、乌苏里战争女王 基础牌组、乌苏里猎手 基础牌组、乌苏里伏击者 基础牌组。 1 阶 Deal 2 @atk damage. 造成 2 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Claw__1028.png" alt="爪击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>爪击</strong>
    <small>Claw · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：乌苏里追踪者 基础牌组、乌苏里战争女王 基础牌组、乌苏里猎手 基础牌组、乌苏里伏击者 基础牌组。">怪物限定</span></span>
    <span>造成 2 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wild-strike1" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="狂野打击（1） Wild Strike (1) 狂野打击（1） WildStrike1 WildStrike1 行动牌 怪物限定 WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。 2 阶 Deal 2 @atk damage. Add a random &lt;temporary&gt; non-equipment card to your hand.\\n\\nWarning: Higher levels of Wild Strike cost additional @tim to play. 造成 2 点攻击伤害。将 1 张随机&lt;临时&gt;非装备牌加入你的手牌。提示：高等级 狂野打击 打出时需要额外行动点。 WINCHAOS 盗贼 7 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WildStrike1__911.png" alt="狂野打击（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>狂野打击（1）</strong>
    <small>Wild Strike (1) · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。">怪物限定</span></span>
    <span>造成 2 点攻击伤害。将 1 张随机<span class="dq-term">临时</span>非装备牌加入你的手牌。提示：高等级 狂野打击 打出时需要额外行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wild-strike2" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="狂野打击（2） Wild Strike (2) 狂野打击（2） WildStrike2 WildStrike2 行动牌 怪物限定 WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。 5 阶 Deal 4 @atk damage. Add 2 random &lt;temporary&gt; non-equipment cards to your hand.\\n\\nWarning: Higher levels of Wild Strike cost additional @tim to play. 造成 4 点攻击伤害。将 2 张随机&lt;临时&gt;非装备牌加入你的手牌。提示：高等级 狂野打击 打出时需要额外行动点。 WINCHAOS 盗贼 7 牧师 1 战士 7 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WildStrike2__455.png" alt="狂野打击（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>狂野打击（2）</strong>
    <small>Wild Strike (2) · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。">怪物限定</span></span>
    <span>造成 4 点攻击伤害。将 2 张随机<span class="dq-term">临时</span>非装备牌加入你的手牌。提示：高等级 狂野打击 打出时需要额外行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wild-strike3" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="7" data-card-search="狂野打击（3） Wild Strike (3) 狂野打击（3） WildStrike3 WildStrike3 行动牌 怪物限定 WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。 7 阶 Deal 6 @atk damage. Add 3 random &lt;temporary&gt; non-equipment cards to your hand.\\n\\nWarning: Higher levels of Wild Strike cost additional @tim to play. 造成 6 点攻击伤害。将 3 张随机&lt;临时&gt;非装备牌加入你的手牌。提示：高等级 狂野打击 打出时需要额外行动点。 WINCHAOS 盗贼 7 牧师 1 战士 7 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WildStrike3__219.png" alt="狂野打击（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>狂野打击（3）</strong>
    <small>Wild Strike (3) · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="WINCHAOS 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。">怪物限定</span></span>
    <span>造成 6 点攻击伤害。将 3 张随机<span class="dq-term">临时</span>非装备牌加入你的手牌。提示：高等级 狂野打击 打出时需要额外行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wolf" data-card-tile data-card-type="行动牌" data-card-status="profession" data-card-tier="3" data-card-search="狼 Wolf 狼 Wolf Wolf 行动牌 职业专属 职业专属来源：德鲁伊：召唤同伴。 3 阶 Your opponent becomes &lt;Poisoned 3&gt; ^. 对手获得 &lt;中毒 3&gt;。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Wolf__346.png" alt="狼" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>狼</strong>
    <small>Wolf · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：召唤同伴。">职业专属</span></span>
    <span>对手获得 <span class="dq-term">中毒 3</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/zap" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="电弧 Zap 电弧 Zap Zap 行动牌 怪物限定 怪物限定来源：积雨云 基础牌组、积雨云 优先起手。 6 阶 Your opponent loses all mana and @tim ^. 对手 失去 所有 法力并行动点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Zap__695.png" alt="电弧" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>电弧</strong>
    <small>Zap · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：积雨云 基础牌组、积雨云 优先起手。">怪物限定</span></span>
    <span>对手 失去 所有 法力并行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shield-wall" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="盾墙 Shield Wall 盾墙 ShieldWall ShieldWall 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Prevent the next 8 damage that would be dealt to you 防止你将受到的接下来 8 点伤害 盗贼 10 牧师 1 战士 10 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ShieldWall__923.png" alt="盾墙" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>盾墙</strong>
    <small>Shield Wall · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>防止你将受到的接下来 8 点伤害</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/stone" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="4" data-card-search="石化 Stone 石化 Stone Stone 行动牌 怪物限定 怪物限定来源：美杜莎 基础牌组、美杜莎 优先起手、美杜莎 关键行为。 4 阶 Shuffle 2 curse cards (which do nothing) into your opponent's deck. Your opponent discards a card. 将 2 张无效果诅咒牌洗入对手牌库。对手弃掉 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Stone__665.png" alt="石化" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>石化</strong>
    <small>Stone · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：美杜莎 基础牌组、美杜莎 优先起手、美杜莎 关键行为。">怪物限定</span></span>
    <span>将 2 张无效果诅咒牌洗入对手牌库。对手弃掉 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/stoneskin" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="4" data-card-search="石肤 Stoneskin 石肤 Stoneskin Stoneskin 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Gain &lt;Damage Reduction 2&gt; until your next turn. 获得&lt;减伤 2&gt; 直到你的下个回合。 盗贼 1 牧师 1 战士 8 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Stoneskin__294.png" alt="石肤" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>石肤</strong>
    <small>Stoneskin · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得<span class="dq-term">减伤 2</span> 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/crush" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="碾碎 Crush 碾碎 Crush Crush 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Destroy an equipment card. If you do, deal 3 @atk damage. 摧毁 1 张装备牌。如果如此，造成 3 点攻击伤害。 盗贼 5 牧师 1 战士 6 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Crush__623.png" alt="碾碎" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>碾碎</strong>
    <small>Crush · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>摧毁 1 张装备牌。如果如此，造成 3 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/crush-all" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="碾碎一切 Crush Everything 碾碎一切 CrushAll CrushAll 行动牌 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 5 阶 Destroy all your opponent's equipment. Exile this card. 摧毁对手所有装备。放逐 此 牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CrushAll__400.png" alt="碾碎一切" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>碾碎一切</strong>
    <small>Crush Everything · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>摧毁对手所有装备。放逐 此 牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/skewer" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="9" data-card-search="穿刺 Skewer 穿刺 Skewer Skewer 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Draw a card. Gain 1 @tim ^. Your opponent is &lt;Weakened 1&gt; this turn. 抽 1 张牌。获得 1 行动点。对手获得 &lt;虚弱 1&gt; 本回合。 盗贼 3 牧师 1 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Skewer__60.png" alt="穿刺" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>穿刺</strong>
    <small>Skewer · 行动牌 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 1 张牌。获得 1 行动点。对手获得 <span class="dq-term">虚弱 1</span> 本回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/piercing-stab" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="7" data-card-search="穿透刺击 Piercing Stab 穿透刺击 PiercingStab PiercingStab 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Your next source of damage this turn is &lt;piercing&gt; ^. Draw a card. 你本回合的下一次伤害变为&lt;穿透&gt;。抽 1 张牌。 盗贼 8 牧师 1 战士 5 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PiercingStab__246.png" alt="穿透刺击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>穿透刺击</strong>
    <small>Piercing Stab · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>你本回合的下一次伤害变为<span class="dq-term">穿透</span>。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penetrating-palm" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="8" data-card-search="穿透掌 Penetrating Palm 穿透掌 PenetratingPalm PenetratingPalm 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 This turn, damage you deal is &lt;piercing&gt; ^. 本回合，你造成的伤害变为&lt;穿透&gt;。 盗贼 8 牧师 2 战士 8 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenetratingPalm__488.png" alt="穿透掌" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>穿透掌</strong>
    <small>Penetrating Palm · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>本回合，你造成的伤害变为<span class="dq-term">穿透</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/suffocate" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="窒息 Suffocate 窒息 Suffocate Suffocate 行动牌 怪物限定 怪物限定来源：冰霜元素 基础牌组、冰霜元素 优先起手。 6 阶 Your opponent discards 2 cards and becomes &lt;Chilled 1&gt; ^. 对手弃掉 2 张牌并获得&lt;寒冷 1&gt;。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Suffocate__770.png" alt="窒息" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>窒息</strong>
    <small>Suffocate · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：冰霜元素 基础牌组、冰霜元素 优先起手。">怪物限定</span></span>
    <span>对手弃掉 2 张牌并获得<span class="dq-term">寒冷 1</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/second-strike" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="8" data-card-search="第二击 Second Strike 第二击 SecondStrike SecondStrike 行动牌 成就解锁 需要解锁：KILL3。解锁后可进入奖励和商店的 CardFinder 候选池。 8 阶 Deal 2 &lt;piercing&gt; damage. Draw a card. \\n \\n If you discard Second Strike to an effect, deal 10 &lt;piercing&gt; damage. 造成 2 点&lt;穿透&gt;伤害。抽 1 张牌。如果你因效果弃掉 二次打击，造成 10 点&lt;穿透&gt;伤害。 KILL3 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SecondStrike__554.png" alt="第二击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>第二击</strong>
    <small>Second Strike · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：KILL3。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>造成 2 点<span class="dq-term">穿透</span>伤害。抽 1 张牌。如果你因效果弃掉 二次打击，造成 10 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sift" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="1" data-card-search="筛选 Sift 筛选 Sift Sift 行动牌 成就解锁 需要解锁：BOSSGELATINOUSCUBE。解锁后可进入奖励和商店的 CardFinder 候选池。 1 阶 Draw 3 cards, then discard 3 cards. 抽 3 张牌，然后 弃掉 3 牌。 BOSSGELATINOUSCUBE 盗贼 3 牧师 6 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sift__761.png" alt="筛选" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>筛选</strong>
    <small>Sift · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSGELATINOUSCUBE。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>抽 3 张牌，然后 弃掉 3 牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sprite-stab" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="精灵刺击 Sprite Stab 精灵刺击 SpriteStab SpriteStab 行动牌 怪物限定 怪物限定来源：家精 基础牌组。 3 阶 Deal 2 @atk damage. Draw a card. 造成 2 点攻击伤害。抽 1 张牌。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/SpriteStab__724.png" alt="精灵刺击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>精灵刺击</strong>
    <small>Sprite Stab · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：家精 基础牌组。">怪物限定</span></span>
    <span>造成 2 点攻击伤害。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mental-fortress" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="8" data-card-search="精神堡垒 Mental Fortress 精神堡垒 MentalFortress MentalFortress 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Discard your hand. Gain a shield of strength 5 + 5 for each card discarded this way. 弃掉你的手牌。获得一个强度为 5 的护盾；以此每弃掉 1 张牌，护盾强度额外增加 5。 盗贼 2 牧师 8 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/MentalFortress__904.png" alt="精神堡垒" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>精神堡垒</strong>
    <small>Mental Fortress · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>弃掉你的手牌。获得一个强度为 5 的护盾；以此每弃掉 1 张牌，护盾强度额外增加 5。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/pure-thoughts" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="纯净思绪 Pure Thoughts 纯净思绪 PureThoughts PureThoughts 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Draw 3 cards. Exile 2 cards from your hand for the rest of the fight. 抽 3 张牌。从手牌中放逐 2 张牌，持续到本场战斗结束。 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PureThoughts__434.png" alt="纯净思绪" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>纯净思绪</strong>
    <small>Pure Thoughts · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 3 张牌。从手牌中放逐 2 张牌，持续到本场战斗结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/last-chance" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="2" data-card-search="绝望打击 Desperate Strike 绝望打击 LastChance LastChance 行动牌 成就解锁 需要解锁：BOSSAKAMIASCENDENT。解锁后可进入奖励和商店的 CardFinder 候选池。 2 阶 This card has the effect of a random non-&quot;Desperate Strike&quot; action card from your deck. 此牌获得你牌库中 1 张随机非 绝望打击 行动牌的效果。 BOSSAKAMIASCENDENT 盗贼 6 牧师 2 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/LastChance__466.png" alt="绝望打击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>绝望打击</strong>
    <small>Desperate Strike · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSAKAMIASCENDENT。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>此牌获得你牌库中 1 张随机非 绝望打击 行动牌的效果。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bandage" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="2" data-card-search="绷带 Bandage 绷带 Bandage Bandage 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 3 health. 回复 3 点生命。 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bandage__676.png" alt="绷带" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>绷带</strong>
    <small>Bandage · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>回复 3 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/corrupt" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="8" data-card-search="腐化 Corrupt 腐化 Corrupt Corrupt 行动牌 怪物限定 怪物限定来源：恶魔 基础牌组。 8 阶 Your opponent loses 10 maximum and current health. 对手失去 10 点最大生命和当前生命。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Corrupt__348.png" alt="腐化" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>腐化</strong>
    <small>Corrupt · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：恶魔 基础牌组。">怪物限定</span></span>
    <span>对手失去 10 点最大生命和当前生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/coup-de-grace" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="8" data-card-search="致命一击 Coup de Grace 致命一击 CoupDeGrace CoupDeGrace 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Discard your hand and lose all @tim ^. Deal 6 @atk damage plus 3 for each card and @tim lost this way. 弃掉你的手牌并失去所有行动点。造成 6 点攻击伤害；以此每失去 1 张牌或 1 点行动点，额外造成 3 点攻击伤害。 盗贼 6 牧师 2 战士 6 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CoupDeGrace__142.png" alt="致命一击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>致命一击</strong>
    <small>Coup de Grace · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>弃掉你的手牌并失去所有行动点。造成 6 点攻击伤害；以此每失去 1 张牌或 1 点行动点，额外造成 3 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/deadly-curse" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="8" data-card-search="致命诅咒 Deadly Curse 致命诅咒 DeadlyCurse DeadlyCurse 行动牌 怪物限定 怪物限定来源：老巫婆 基础牌组、老巫婆 优先起手。 8 阶 Replace 3 random non-curse cards in your opponent's hand with curses. 将对手手牌中 3 张随机非诅咒牌替换为诅咒牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DeadlyCurse__594.png" alt="致命诅咒" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>致命诅咒</strong>
    <small>Deadly Curse · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：老巫婆 基础牌组、老巫婆 优先起手。">怪物限定</span></span>
    <span>将对手手牌中 3 张随机非诅咒牌替换为诅咒牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mimic-action" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="舌鞭 Tongue Lash 舌鞭 MimicAction MimicAction 行动牌 怪物限定 怪物限定来源：拟态怪 基础牌组、拟态怪 关键行为、拟态怪 等级变化。 3 阶 Your opponent becomes &lt;Poisoned 2&gt; ^. 对手获得 &lt;中毒 2&gt;。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/MimicAction__815.png" alt="舌鞭" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>舌鞭</strong>
    <small>Tongue Lash · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：拟态怪 基础牌组、拟态怪 关键行为、拟态怪 等级变化。">怪物限定</span></span>
    <span>对手获得 <span class="dq-term">中毒 2</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mimic-action2" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="舌鞭（2） Tongue Lash 舌鞭（2） MimicAction2 MimicAction2 行动牌 怪物限定 怪物限定来源：拟态怪 等级变化。 5 阶 Your opponent becomes &lt;Poisoned 4&gt; ^. 对手获得 &lt;中毒 4&gt;。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/MimicAction2__621.png" alt="舌鞭（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>舌鞭（2）</strong>
    <small>Tongue Lash · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：拟态怪 等级变化。">怪物限定</span></span>
    <span>对手获得 <span class="dq-term">中毒 4</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/entangle" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="荆棘缠绕 Brambles 荆棘缠绕 Entangle Entangle 行动牌 怪物限定 怪物限定来源：树人 基础牌组、树人 优先起手。 6 阶 Deal 10 @atk damage. 造成 10 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Entangle__588.png" alt="荆棘缠绕" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>荆棘缠绕</strong>
    <small>Brambles · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：树人 基础牌组、树人 优先起手。">怪物限定</span></span>
    <span>造成 10 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/extract" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="8" data-card-search="萃取 Extract 萃取 Extract Extract 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Look at the top 10 cards of your opponent's deck. Exile up to 2. 查看对手牌库顶的 10 张牌。最多放逐其中 2 张。 盗贼 2 牧师 8 战士 2 法师 8">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Extract__241.png" alt="萃取" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>萃取</strong>
    <small>Extract · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>查看对手牌库顶的 10 张牌。最多放逐其中 2 张。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/tiltowait" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="10" data-card-search="蒂尔托维特 Tiltowait 蒂尔托维特 Tiltowait Tiltowait 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 10 阶 Deal 20 &lt;piercing&gt; damage. 造成 20 点&lt;穿透&gt;伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Tiltowait__679.png" alt="蒂尔托维特" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>蒂尔托维特</strong>
    <small>Tiltowait · 行动牌 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 20 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/curse-of-weakness" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="虚弱诅咒 Curse of Weakness 虚弱诅咒 CurseOfWeakness CurseOfWeakness 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Shuffle 2 curse cards (which do nothing) into your opponent's deck. Draw a card. 将 2 张无效果诅咒牌洗入对手牌库。抽 1 张牌。 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CurseOfWeakness__795.png" alt="虚弱诅咒" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>虚弱诅咒</strong>
    <small>Curse of Weakness · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>将 2 张无效果诅咒牌洗入对手牌库。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/swarm" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="虫群 Swarm 虫群 Swarm Swarm 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 2 阶 Deal 1 @atk damage for each goblin in play. 造成 1 点攻击伤害 每有地精 在场。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Swarm__270.png" alt="虫群" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>虫群</strong>
    <small>Swarm · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>造成 1 点攻击伤害 每有地精 在场。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/swarm2" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="虫群（2） Swarm 虫群（2） Swarm2 Swarm2 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 3 阶 Deal 2 @atk damage for each goblin in play. 造成 2 点攻击伤害 每有地精 在场。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Swarm2__957.png" alt="虫群（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>虫群（2）</strong>
    <small>Swarm · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>造成 2 点攻击伤害 每有地精 在场。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bewitch" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="8" data-card-search="蛊惑 Bewitch 蛊惑 Bewitch Bewitch 行动牌 成就解锁 需要解锁：LIZARDS2。解锁后可进入奖励和商店的 CardFinder 候选池。 8 阶 Look at your opponent's hand. Choose a card from it. They exile that card. 查看对手手牌。从中选择 1 张牌；对手放逐那张牌。 LIZARDS2 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bewitch__206.png" alt="蛊惑" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>蛊惑</strong>
    <small>Bewitch · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：LIZARDS2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>查看对手手牌。从中选择 1 张牌；对手放逐那张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/web" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="蛛网 Web 蛛网 Web Web 行动牌 怪物限定 怪物限定来源：巨蛛 基础牌组、巨蛛 优先起手、巨蛛 关键行为、巨蛛 等级变化。 2 阶 Your opponent discards a card and loses 1 @tim ^. 对手弃掉 1 张牌并失去 1 点行动点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Web__258.png" alt="蛛网" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>蛛网</strong>
    <small>Web · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：巨蛛 基础牌组、巨蛛 优先起手、巨蛛 关键行为、巨蛛 等级变化。">怪物限定</span></span>
    <span>对手弃掉 1 张牌并失去 1 点行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/web2" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="蛛网（2） Web (2) 蛛网（2） Web2 Web2 行动牌 怪物限定 怪物限定来源：巨蛛 等级变化。 5 阶 Your opponent discards 2 cards and loses 2 @tim ^. 对手弃掉 2 张牌并失去 2 行动点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Web2__203.png" alt="蛛网（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>蛛网（2）</strong>
    <small>Web (2) · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：巨蛛 等级变化。">怪物限定</span></span>
    <span>对手弃掉 2 张牌并失去 2 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sting" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="蛰刺 Sting 蛰刺 Sting Sting 行动牌 怪物限定 怪物限定来源：双足飞龙 基础牌组、双足飞龙 优先起手、双足飞龙 关键行为、巨蛛 基础牌组 等 9 项。 3 阶 Your opponent becomes &lt;Poisoned 2&gt; ^. 对手获得 &lt;中毒 2&gt;。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sting__174.png" alt="蛰刺" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>蛰刺</strong>
    <small>Sting · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：双足飞龙 基础牌组、双足飞龙 优先起手、双足飞龙 关键行为、巨蛛 基础牌组 等 9 项。">怪物限定</span></span>
    <span>对手获得 <span class="dq-term">中毒 2</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/misdirection" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="误导 Misdirection 误导 Misdirection Misdirection 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Your opponent discards all attack cards in their hand. 对手弃掉手牌中的所有攻击牌。 never 盗贼 1 牧师 3 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Misdirection__188.png" alt="误导" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>误导</strong>
    <small>Misdirection · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>对手弃掉手牌中的所有攻击牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/entrap" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="诱捕 Entrap 诱捕 Entrap Entrap 行动牌 怪物限定 怪物限定来源：海怪 基础牌组、海怪 优先起手。 6 阶 Your opponent's maximum hand size is reduced by 1. They discard a card. 对手手牌上限减少 1。对手弃掉 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Entrap__1035.png" alt="诱捕" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>诱捕</strong>
    <small>Entrap · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：海怪 基础牌组、海怪 优先起手。">怪物限定</span></span>
    <span>对手手牌上限减少 1。对手弃掉 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dance-puppets" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="8" data-card-search="跳舞吧，傀儡！ Dance, Puppets! 跳舞吧，傀儡！ DancePuppets DancePuppets 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 8 阶 Your opponent becomes a puppet until your next turn. While a puppet, they may not end their turn early or discard cards freely and cards they play hit themselves instead of you. 对手直到你的下个回合变为傀儡。傀儡不能提前结束回合或自由弃牌，且其打出的牌会命中自己而不是你。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DancePuppets__65.png" alt="跳舞吧，傀儡！" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>跳舞吧，傀儡！</strong>
    <small>Dance, Puppets! · 行动牌 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>对手直到你的下个回合变为傀儡。傀儡不能提前结束回合或自由弃牌，且其打出的牌会命中自己而不是你。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/kick" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="3" data-card-search="踢击 Kick 踢击 Kick Kick 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Deal 1 @atk damage. Your opponent discards a card at random. 造成 1 点攻击伤害。对手随机弃掉 1 张牌。 盗贼 10 牧师 1 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Kick__953.png" alt="踢击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>踢击</strong>
    <small>Kick · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害。对手随机弃掉 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/ravage" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="蹂躏 Ravage 蹂躏 Ravage Ravage 行动牌 怪物限定 怪物限定来源：食尸鬼 基础牌组。 6 阶 Deal 2 damage for each attack card in play. 造成 2 点伤害 每有攻击牌 在场。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Ravage__1070.png" alt="蹂躏" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>蹂躏</strong>
    <small>Ravage · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：食尸鬼 基础牌组。">怪物限定</span></span>
    <span>造成 2 点伤害 每有攻击牌 在场。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/swiftness" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="2" data-card-search="迅捷 Swiftness 迅捷 Swiftness Swiftness 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 2 @tim ^. Draw a card. 获得 2 行动点。抽 1 张牌。 盗贼 10 牧师 2 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Swiftness__668.png" alt="迅捷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>迅捷</strong>
    <small>Swiftness · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 2 行动点。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/enthrall" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="4" data-card-search="迷魂 Enthrall 迷魂 Enthrall Enthrall 行动牌 怪物限定 怪物限定来源：吸血鬼 基础牌组、吸血鬼 优先起手。 4 阶 Look at your opponent's hand. Choose a card from it and add it to your hand. It goes to their discard pile when discarded. 查看对手手牌，从中选择 1 张牌加入你的手牌；该牌弃掉时会进入对手弃牌堆。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Enthrall__843.png" alt="迷魂" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>迷魂</strong>
    <small>Enthrall · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：吸血鬼 基础牌组、吸血鬼 优先起手。">怪物限定</span></span>
    <span>查看对手手牌，从中选择 1 张牌加入你的手牌；该牌弃掉时会进入对手弃牌堆。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/escape" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="1" data-card-search="逃脱 Escape 逃脱 Escape Escape 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 1 阶 Begin to run away. The third time you do this, lose the current combat, but provide no reward. 开始逃跑。第三次这样做时，失去当前战斗，但不给予奖励。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Escape__358.png" alt="逃脱" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>逃脱</strong>
    <small>Escape · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>开始逃跑。第三次这样做时，失去当前战斗，但不给予奖励。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flee" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="1" data-card-search="逃跑 Flee 逃跑 Flee Flee 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Run away from the current fight. 从当前战斗中逃跑。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Flee__513.png" alt="逃跑" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>逃跑</strong>
    <small>Flee · 行动牌 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>从当前战斗中逃跑。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/acid-breath" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="酸蚀吐息 Acid Breath 酸蚀吐息 AcidBreath AcidBreath 行动牌 怪物限定 怪物限定来源：影龙 基础牌组、影龙 优先起手。 6 阶 Your opponent becomes &lt;Poisoned 4&gt; ^. 对手获得 &lt;中毒 4&gt;。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/AcidBreath__967.png" alt="酸蚀吐息" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>酸蚀吐息</strong>
    <small>Acid Breath · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：影龙 基础牌组、影龙 优先起手。">怪物限定</span></span>
    <span>对手获得 <span class="dq-term">中毒 4</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/acid-palm" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="4" data-card-search="酸蚀掌 Acid Palm 酸蚀掌 AcidPalm AcidPalm 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 This turn, damage you do is @ear damage. 本回合，你造成的伤害变为毒性伤害。 never 盗贼 3 牧师 2 战士 3 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/AcidPalm__191.png" alt="酸蚀掌" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>酸蚀掌</strong>
    <small>Acid Palm · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>本回合，你造成的伤害变为毒性伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/slam" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="重摔 Slam 重摔 Slam Slam 行动牌 怪物限定 怪物限定来源：巨魔 基础牌组、巨魔 优先起手、石魔像 基础牌组、泰坦 基础牌组 等 5 项。 6 阶 Deal damage equal to 1/5 of your current health, rounded up (maximum 15 damage). 造成等同于 1/5 的 你的 当前 生命，向上取整 (最多 15 伤害) 的伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slam__363.png" alt="重摔" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>重摔</strong>
    <small>Slam · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：巨魔 基础牌组、巨魔 优先起手、石魔像 基础牌组、泰坦 基础牌组 等 5 项。">怪物限定</span></span>
    <span>造成等同于 1/5 的 你的 当前 生命，向上取整 (最多 15 伤害) 的伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/inner-strength" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="3" data-card-search="重新思考 Second Thoughts 重新思考 InnerStrength InnerStrength 行动牌 成就解锁 需要解锁：KILL2。解锁后可进入奖励和商店的 CardFinder 候选池。 3 阶 Draw a card. \\n \\n If you discard Second Thoughts to an effect, draw 2 cards. 抽 1 张牌。如果你因效果弃掉 二次思考，抽 2 张牌。 KILL2 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InnerStrength__798.png" alt="重新思考" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>重新思考</strong>
    <small>Second Thoughts · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：KILL2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>抽 1 张牌。如果你因效果弃掉 二次思考，抽 2 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/lightning-breath" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="闪电吐息 Lightning Breath 闪电吐息 LightningBreath LightningBreath 行动牌 怪物限定 怪物限定来源：黄龙 基础牌组、黄龙 优先起手。 6 阶 Deal 5 @air damage. Your opponent loses 2 @tim ^. 造成 5 点电系伤害。对手失去 2 行动点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/LightningBreath__871.png" alt="闪电吐息" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>闪电吐息</strong>
    <small>Lightning Breath · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：黄龙 基础牌组、黄龙 优先起手。">怪物限定</span></span>
    <span>造成 5 点电系伤害。对手失去 2 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/elude" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="4" data-card-search="闪避 Dodge 闪避 Elude Elude 行动牌 成就解锁 需要解锁：STEPS2。解锁后可进入奖励和商店的 CardFinder 候选池。 4 阶 Gain 50% dodge until your next turn. 获得 50% 闪避 直到你的下个回合。 STEPS2 盗贼 10 牧师 2 战士 6 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Elude__495.png" alt="闪避" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>闪避</strong>
    <small>Dodge · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：STEPS2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>获得 50% 闪避 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/evasion" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="9" data-card-search="闪避术 Evasion 闪避术 Evasion Evasion 行动牌 成就解锁 需要解锁：STEPS3。解锁后可进入奖励和商店的 CardFinder 候选池。 9 阶 Exile Evasion from your deck for the remainder of the fight. You take no damage until your next turn. 本场战斗剩余期间，从你的牌库中放逐 闪避。直到你的下个回合，你不会受到伤害。 STEPS3 盗贼 6 牧师 3 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Evasion__879.png" alt="闪避术" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>闪避术</strong>
    <small>Evasion · 行动牌 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：STEPS3。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>本场战斗剩余期间，从你的牌库中放逐 闪避。直到你的下个回合，你不会受到伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/hide" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="隐藏 Hide 隐藏 Hide Hide 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Draw a card. Until your next turn, prevent the next card your opponent plays from having any effect. 抽 1 张牌。直到你的下个回合，防止对手打出的下一张牌产生任何效果。 never 盗贼 6 牧师 3 战士 5 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Hide__619.png" alt="隐藏" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>隐藏</strong>
    <small>Hide · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>抽 1 张牌。直到你的下个回合，防止对手打出的下一张牌产生任何效果。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/resilience" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="5" data-card-search="韧性 Resilience 韧性 Resilience Resilience 行动牌 成就解锁 需要解锁：ADVENTURERS2。解锁后可进入奖励和商店的 CardFinder 候选池。 5 阶 Until your next turn, damage dealt to you in excess of 3 is reduced to 3. Draw a card. 直到你的下个回合，你单次受到超过 3 点的伤害会被降至 3 点。抽 1 张牌。 ADVENTURERS2 盗贼 3 牧师 3 战士 6 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Resilience__620.png" alt="韧性" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>韧性</strong>
    <small>Resilience · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：ADVENTURERS2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>直到你的下个回合，你单次受到超过 3 点的伤害会被降至 3 点。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/anticipate" data-card-tile data-card-type="行动牌" data-card-status="unlock" data-card-tier="9" data-card-search="预判 Anticipate 预判 Anticipate Anticipate 行动牌 成就解锁 需要解锁：BOSSVAMPIRE。解锁后可进入奖励和商店的 CardFinder 候选池。 9 阶 Look at your opponent's hand. Choose a card from it and add it to your hand. It goes to their discard pile when discarded. 查看对手手牌，从中选择 1 张牌加入你的手牌；该牌弃掉时会进入对手弃牌堆。 BOSSVAMPIRE 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Anticipate__163.png" alt="预判" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>预判</strong>
    <small>Anticipate · 行动牌 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：BOSSVAMPIRE。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>查看对手手牌，从中选择 1 张牌加入你的手牌；该牌弃掉时会进入对手弃牌堆。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/storm-stab" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="风暴刺击 Storm Stab 风暴刺击 StormStab StormStab 行动牌 怪物限定 怪物限定来源：阿卡米唤雷者 基础牌组、阿卡米唤雷者 关键行为、阿卡米唤雷者 等级变化。 6 阶 Deal 2 @air damage. Draw a card. Gain 1 @tim ^. 造成 2 点电系伤害。抽 1 张牌。获得 1 行动点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormStab__590.png" alt="风暴刺击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>风暴刺击</strong>
    <small>Storm Stab · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：阿卡米唤雷者 基础牌组、阿卡米唤雷者 关键行为、阿卡米唤雷者 等级变化。">怪物限定</span></span>
    <span>造成 2 点电系伤害。抽 1 张牌。获得 1 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/storm-palm" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="4" data-card-search="风暴掌 Storm Palm 风暴掌 StormPalm StormPalm 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 This turn, damage you do is @air damage. 本回合，你造成的伤害变为电系伤害。 never 盗贼 3 牧师 2 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormPalm__176.png" alt="风暴掌" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>风暴掌</strong>
    <small>Storm Palm · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>本回合，你造成的伤害变为电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/fly" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="4" data-card-search="飞行 Fly 飞行 Fly Fly 行动牌 怪物限定 怪物限定来源：狮鹫 基础牌组、狮鹫 优先起手、狮鹫 关键行为。 4 阶 Take no damage until your next turn. Exile Fly. 直到你的下个回合，你不会受到伤害。放逐 飞行。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Fly__342.png" alt="飞行" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>飞行</strong>
    <small>Fly · 行动牌 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：狮鹫 基础牌组、狮鹫 优先起手、狮鹫 关键行为。">怪物限定</span></span>
    <span>直到你的下个回合，你不会受到伤害。放逐 飞行。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bone-shield" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="2" data-card-search="骨盾 Bone Shield 骨盾 BoneShield BoneShield 行动牌 怪物限定 怪物限定来源：骷髅 基础牌组、骷髅 优先起手。 2 阶 Prevent the next 4 damage that would be dealt to you. 防止你将受到的接下来 4 点伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BoneShield__484.png" alt="骨盾" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>骨盾</strong>
    <small>Bone Shield · 行动牌 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：骷髅 基础牌组、骷髅 优先起手。">怪物限定</span></span>
    <span>防止你将受到的接下来 4 点伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bone-shield2" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="3" data-card-search="骨盾（2） Bone Shield (2) 骨盾（2） BoneShield2 BoneShield2 行动牌 怪物限定 怪物限定来源：骷髅 优先起手。 3 阶 Prevent the next 6 damage that would be dealt to you. 防止你将受到的接下来 6 点伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BoneShield2__876.png" alt="骨盾（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>骨盾（2）</strong>
    <small>Bone Shield (2) · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：骷髅 优先起手。">怪物限定</span></span>
    <span>防止你将受到的接下来 6 点伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dice" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="7" data-card-search="骰子 Dice 骰子 Dice Dice 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Deal 2 @atk damage for each action card in play. 造成 2 点攻击伤害 每有行动牌 在场。 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Dice__637.png" alt="骰子" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>骰子</strong>
    <small>Dice · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 2 点攻击伤害 每有行动牌 在场。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/charm" data-card-tile data-card-type="行动牌" data-card-status="normal" data-card-tier="5" data-card-search="魅惑 Charm 魅惑 Charm Charm 行动牌 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Look at your opponent's hand. Choose a card from it. They discard that card. 查看对手手牌。从中选择 1 张牌。对手弃掉那张牌。 盗贼 2 牧师 10 战士 2 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Charm__184.png" alt="魅惑" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>魅惑</strong>
    <small>Charm · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>查看对手手牌。从中选择 1 张牌。对手弃掉那张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/golem-armor" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="魔像护甲 Golem Armor 魔像护甲 GolemArmor GolemArmor 行动牌 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 6 阶 For the remainder of the fight, at the beginning of your turns, gain 1 level of protection. This protection stops the first 3 @atk damage dealt to you that turn. 直到本场战斗结束，在你的每个回合开始时，获得 1 层保护。该保护会阻止本回合对你造成的前 3 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/GolemArmor__58.png" alt="魔像护甲" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>魔像护甲</strong>
    <small>Golem Armor · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>直到本场战斗结束，在你的每个回合开始时，获得 1 层保护。该保护会阻止本回合对你造成的前 3 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/eagle" data-card-tile data-card-type="行动牌" data-card-status="profession" data-card-tier="3" data-card-search="鹰 Eagle 鹰 Eagle Eagle 行动牌 职业专属 职业专属来源：德鲁伊：召唤同伴。 3 阶 Deal 2 @atk damage. Draw a card. 造成 2 点攻击伤害。抽 1 张牌。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Eagle__389.png" alt="鹰" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>鹰</strong>
    <small>Eagle · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：召唤同伴。">职业专属</span></span>
    <span>造成 2 点攻击伤害。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-snack" data-card-tile data-card-type="行动牌" data-card-status="profession" data-card-tier="3" data-card-search="龙之点心 Dragon's Snack 龙之点心 DragonsSnack DragonsSnack 行动牌 职业专属 职业专属来源：龙：5 级固定奖励 / Dragon 专属。 3 阶 If your opponent has at most 5 health, it dies. If it dies this way, gain benefits as if you had devoured it. 如果对手生命不超过 5 点，则其死亡。若以此方式死亡，你获得如同吞噬该对手的收益。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsSnack__994.png" alt="龙之点心" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙之点心</strong>
    <small>Dragon's Snack · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：5 级固定奖励 / Dragon 专属。">职业专属</span></span>
    <span>如果对手生命不超过 5 点，则其死亡。若以此方式死亡，你获得如同吞噬该对手的收益。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-roar" data-card-tile data-card-type="行动牌" data-card-status="profession" data-card-tier="7" data-card-search="龙吼 Dragon's Roar 龙吼 DragonsRoar DragonsRoar 行动牌 职业专属 职业专属来源：龙：Dragon 专属。 7 阶 Your opponent discards 3 cards. 对手弃掉 3 张牌。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsRoar__722.png" alt="龙吼" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙吼</strong>
    <small>Dragon's Roar · 行动牌 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：Dragon 专属。">职业专属</span></span>
    <span>对手弃掉 3 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-tail" data-card-tile data-card-type="行动牌" data-card-status="profession" data-card-tier="5" data-card-search="龙尾 Dragon's Tail 龙尾 DragonsTail DragonsTail 行动牌 职业专属 职业专属来源：龙：Dragon 专属。 5 阶 Deal 3 @atk damage. Opponent loses all their @tim and mana. 造成 3 点攻击伤害。对手 失去 所有 对手的 行动点并法力。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsTail__832.png" alt="龙尾" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙尾</strong>
    <small>Dragon's Tail · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：Dragon 专属。">职业专属</span></span>
    <span>造成 3 点攻击伤害。对手 失去 所有 对手的 行动点并法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-breath" data-card-tile data-card-type="行动牌" data-card-status="profession" data-card-tier="5" data-card-search="龙息 Dragon's Breath 龙息 DragonsBreath DragonsBreath 行动牌 职业专属 职业专属来源：龙：Dragon 专属。 5 阶 Deal 10 @fir damage. 造成 10 点火焰伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsBreath__1018.png" alt="龙息" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙息</strong>
    <small>Dragon's Breath · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：Dragon 专属。">职业专属</span></span>
    <span>造成 10 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-hide" data-card-tile data-card-type="行动牌" data-card-status="profession" data-card-tier="6" data-card-search="龙皮 Dragon's Hide 龙皮 DragonsHide DragonsHide 行动牌 职业专属 职业专属来源：龙：Dragon 专属。 6 阶 Gain &lt;Damage Reduction 3&gt; until your next turn. 获得&lt;减伤 3&gt; 直到你的下个回合。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsHide__988.png" alt="龙皮" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙皮</strong>
    <small>Dragon's Hide · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：Dragon 专属。">职业专属</span></span>
    <span>获得<span class="dq-term">减伤 3</span> 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragon-scales" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="5" data-card-search="龙鳞 Dragon Scales 龙鳞 DragonScales DragonScales 行动牌 怪物限定 怪物限定来源：白龙 基础牌组、白龙 优先起手、红龙 基础牌组、红龙 优先起手 等 8 项。 5 阶 Gain &lt;Damage Reduction 2&gt; until your next turn. 获得&lt;减伤 2&gt; 直到你的下个回合。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonScales__867.png" alt="龙鳞" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙鳞</strong>
    <small>Dragon Scales · 行动牌 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：白龙 基础牌组、白龙 优先起手、红龙 基础牌组、红龙 优先起手 等 8 项。">怪物限定</span></span>
    <span>获得<span class="dq-term">减伤 2</span> 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragon-scales2" data-card-tile data-card-type="行动牌" data-card-status="monster" data-card-tier="6" data-card-search="龙鳞（2） Dragon Scales (2) 龙鳞（2） DragonScales2 DragonScales2 行动牌 怪物限定 怪物限定来源：白龙 优先起手、黄龙 优先起手、影龙 优先起手。 6 阶 Gain &lt;Damage Reduction 3&gt; until your next turn. 获得&lt;减伤 3&gt; 直到你的下个回合。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonScales2__170.png" alt="龙鳞（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙鳞（2）</strong>
    <small>Dragon Scales (2) · 行动牌 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：白龙 优先起手、黄龙 优先起手、影龙 优先起手。">怪物限定</span></span>
    <span>获得<span class="dq-term">减伤 3</span> 直到你的下个回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/turtle" data-card-tile data-card-type="行动牌" data-card-status="profession" data-card-tier="3" data-card-search="龟 Turtle 龟 Turtle Turtle 行动牌 职业专属 职业专属来源：德鲁伊：召唤同伴。 3 阶 Prevent the next 6 damage that would be dealt to you. 防止你将受到的接下来 6 点伤害。 never 盗贼 0 牧师 0 战士 0 法师 0">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Turtle__135.png" alt="龟" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龟</strong>
    <small>Turtle · 行动牌 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：召唤同伴。">职业专属</span></span>
    <span>防止你将受到的接下来 6 点伤害。</span>
  </span>
</a>
</section>
</section>

<section class="dq-card-group" data-card-group data-card-group-type="装备">
<h2 id="equipment" class="dq-card-group-title"><span>装备</span><em data-card-group-count>42 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
<a class="dq-card-tile dq-card-tile-small" href="/cards/phoenix-feather" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="5" data-card-search="凤凰羽毛 Phoenix Feather 凤凰羽毛 PhoenixFeather PhoenixFeather 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 If you would die, exile Phoenix Feather and remove it from your deck permanently. Your health is set to its maximum. 如果你将要死亡，放逐 凤凰羽毛 并将其从你的牌库中永久移除。你的生命设为最大值。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PhoenixFeather__409.png" alt="凤凰羽毛" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>凤凰羽毛</strong>
    <small>Phoenix Feather · 装备 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>如果你将要死亡，放逐 凤凰羽毛 并将其从你的牌库中永久移除。你的生命设为最大值。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/forcefield" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="7" data-card-search="力场 Forcefield 力场 Forcefield Forcefield 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Damage dealt to you in excess of 3 is reduced to 3. 你单次受到超过 3 点的伤害会被降至 3 点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Forcefield__558.png" alt="力场" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>力场</strong>
    <small>Forcefield · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>你单次受到超过 3 点的伤害会被降至 3 点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/pendant" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="2" data-card-search="吊坠 Pendant 吊坠 Pendant Pendant 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 2 mana at the start of each turn. 获得 2 点法力 在每个回合开始时。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Pendant__344.png" alt="吊坠" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吊坠</strong>
    <small>Pendant · 装备 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 2 点法力 在每个回合开始时。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/vampire-sword" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="8" data-card-search="吸血鬼之剑 Vampire Sword 吸血鬼之剑 VampireSword VampireSword 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 For each 3 @atk damage you deal each turn, gain 1 health. 每有3 点攻击伤害 你 造成 每回合，回复 1 点生命。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/VampireSword__793.png" alt="吸血鬼之剑" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吸血鬼之剑</strong>
    <small>Vampire Sword · 装备 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>每有3 点攻击伤害 你 造成 每回合，回复 1 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/phylactery" data-card-tile data-card-type="装备" data-card-status="monster" data-card-tier="2" data-card-search="命匣 Phylactery 命匣 Phylactery Phylactery 装备 怪物限定 怪物限定来源：巫妖 基础牌组、巫妖 起手装备。 2 阶 While phylactery is in play, if the lich would die, instead its health is set to 1. 当 命匣 在场时，如果巫妖将要死亡，改为将其生命设为 1。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Phylactery__330.png" alt="命匣" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>命匣</strong>
    <small>Phylactery · 装备 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：巫妖 基础牌组、巫妖 起手装备。">怪物限定</span></span>
    <span>当 命匣 在场时，如果巫妖将要死亡，改为将其生命设为 1。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/goblin-ally" data-card-tile data-card-type="装备" data-card-status="monster" data-card-tier="2" data-card-search="地精盟友 Goblin Ally 地精盟友 GoblinAlly GoblinAlly 装备 怪物限定 怪物限定来源：地精 基础牌组、地精 优先起手、地精 关键行为、地精 等级变化 等 6 项。 2 阶 At the beginning of your turn, deal 1 @atk damage. 在你的回合开始时，造成 1 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/GoblinAlly__677.png" alt="地精盟友" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>地精盟友</strong>
    <small>Goblin Ally · 装备 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：地精 基础牌组、地精 优先起手、地精 关键行为、地精 等级变化 等 6 项。">怪物限定</span></span>
    <span>在你的回合开始时，造成 1 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/goblin-lackey" data-card-tile data-card-type="装备" data-card-status="monster" data-card-tier="4" data-card-search="地精随从 Goblin Lackey 地精随从 GoblinLackey GoblinLackey 装备 怪物限定 怪物限定来源：地精王 优先起手。 4 阶 When you play Goblin Lackey, draw a card and gain 1 @tim ^. At the beginning of your turn, deal 1 @atk damage. 当你打出 地精跟班 时，抽 1 张牌并获得 1 行动点。在你的回合开始时，造成 1 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/GoblinLackey__350.png" alt="地精随从" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>地精随从</strong>
    <small>Goblin Lackey · 装备 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：地精王 优先起手。">怪物限定</span></span>
    <span>当你打出 地精跟班 时，抽 1 张牌并获得 1 行动点。在你的回合开始时，造成 1 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/celestial-plate" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="9" data-card-search="天界板甲 Celestial Plate 天界板甲 CelestialPlate CelestialPlate 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 9 阶 Gain &lt;Damage Reduction 1&gt; ^. Gain 2 health at the start of each turn. 获得&lt;减伤 1&gt;。回复 2 点生命 在每个回合开始时。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CelestialPlate__74.png" alt="天界板甲" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>天界板甲</strong>
    <small>Celestial Plate · 装备 · 9 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得<span class="dq-term">减伤 1</span>。回复 2 点生命 在每个回合开始时。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/deck-of-wonder" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="7" data-card-search="奇迹牌组 Deck of Wonder 奇迹牌组 DeckOfWonder DeckOfWonder 装备 普通 不是职业专属卡；不在通用 CardList 中。解析到的固定来源是 Chaos Mage 5 级奖励，但 Chaos Mage 未进入玩家职业选择列表，页面按特殊玩家牌资料展示。 7 阶 At the start of your turn, draw a random non-equipment card (from among all unlocked cards). That card is &lt;temporary&gt; ^. 你的回合开始时，从所有已解锁卡中随机抽 1 张非装备牌。那张牌为&lt;临时&gt;。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DeckOfWonder__1008.png" alt="奇迹牌组" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>奇迹牌组</strong>
    <small>Deck of Wonder · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="不是职业专属卡；不在通用 CardList 中。解析到的固定来源是 Chaos Mage 5 级奖励，但 Chaos Mage 未进入玩家职业选择列表，页面按特殊玩家牌资料展示。">普通</span></span>
    <span>你的回合开始时，从所有已解锁卡中随机抽 1 张非装备牌。那张牌为<span class="dq-term">临时</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/periapt-of-protection" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="5" data-card-search="守护护符 Periapt of Protection 守护护符 PeriaptOfProtection PeriaptOfProtection 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 You are immune to damage on your turn. 在你的回合内，你免疫伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PeriaptOfProtection__415.png" alt="守护护符" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>守护护符</strong>
    <small>Periapt of Protection · 装备 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合内，你免疫伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/greatbow" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="4" data-card-search="巨弓 Greatbow 巨弓 Greatbow Greatbow 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Deal 1 @atk damage for each action card you play. 造成 1 点攻击伤害 每有行动牌 你 打出。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Greatbow__462.png" alt="巨弓" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>巨弓</strong>
    <small>Greatbow · 装备 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害 每有行动牌 你 打出。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/troll-blood-charm" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="2" data-card-search="巨魔血护符 Troll Blood Charm 巨魔血护符 TrollBloodCharm TrollBloodCharm 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 When you win a combat, heal half your missing health (rounded up). 当你赢得一场战斗时，回复已损失生命的一半，向上取整。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/TrollBloodCharm__134.png" alt="巨魔血护符" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>巨魔血护符</strong>
    <small>Troll Blood Charm · 装备 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>当你赢得一场战斗时，回复已损失生命的一半，向上取整。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/scimitars" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="6" data-card-search="弯刀 Scimitars 弯刀 Scimitars Scimitars 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Whenever you play a non-temporary card named 'Attack' (any level), draw a temporary copy of that card. 每当你打出 1 张名为“攻击”的非临时牌（任意等级），抽取该牌的临时复制。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Scimitars__684.png" alt="弯刀" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>弯刀</strong>
    <small>Scimitars · 装备 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>每当你打出 1 张名为“攻击”的非临时牌（任意等级），抽取该牌的临时复制。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/haste-totem" data-card-tile data-card-type="装备" data-card-status="monster" data-card-tier="6" data-card-search="急速图腾 Haste Totem 急速图腾 HasteTotem HasteTotem 装备 怪物限定 怪物限定来源：阿卡米升华者 基础牌组、阿卡米升华者 起手装备、阿卡米升华者 关键行为、阿卡米唤雷者 基础牌组 等 6 项。 6 阶 At the beginning of your turn, Haste Totem gains 1 charge. Then draw a card and gain 1 @tim for each charge on Haste Totem. 在你的回合开始时，急速图腾 获得 1 层充能。然后 急速图腾 每有 1 层充能，你抽 1 张牌并获得 1 行动点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/HasteTotem__505.png" alt="急速图腾" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>急速图腾</strong>
    <small>Haste Totem · 装备 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：阿卡米升华者 基础牌组、阿卡米升华者 起手装备、阿卡米升华者 关键行为、阿卡米唤雷者 基础牌组 等 6 项。">怪物限定</span></span>
    <span>在你的回合开始时，急速图腾 获得 1 层充能。然后 急速图腾 每有 1 层充能，你抽 1 张牌并获得 1 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/armor" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="5" data-card-search="护甲 Armor 护甲 Armor Armor 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Prevent the first 3 @atk damage you would take each turn. 每回合防止你受到的前 3 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Armor__991.png" alt="护甲" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>护甲</strong>
    <small>Armor · 装备 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>每回合防止你受到的前 3 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/the-bleeder" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="10" data-card-search="放血者 The Bleeder 放血者 TheBleeder TheBleeder 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 10 阶 When you play an attack card, your opponent is &lt;Weakened 1&gt; ^. 当你打出 1 个 攻击牌，对手获得 &lt;虚弱 1&gt;。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/TheBleeder__993.png" alt="放血者" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>放血者</strong>
    <small>The Bleeder · 装备 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>当你打出 1 个 攻击牌，对手获得 <span class="dq-term">虚弱 1</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/poison-dagger" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="3" data-card-search="毒匕首 Poison Dagger 毒匕首 PoisonDagger PoisonDagger 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 For every 2 attack cards you play in a turn, your opponent becomes &lt;Poisoned 1&gt; ^. 每有 2 个攻击牌 你 打出 在一张回合，对手获得 &lt;中毒 1&gt;。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PoisonDagger__912.png" alt="毒匕首" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>毒匕首</strong>
    <small>Poison Dagger · 装备 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>每有 2 个攻击牌 你 打出 在一张回合，对手获得 <span class="dq-term">中毒 1</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mana-totem" data-card-tile data-card-type="装备" data-card-status="monster" data-card-tier="2" data-card-search="法力图腾 Mana Totem 法力图腾 ManaTotem ManaTotem 装备 怪物限定 怪物限定来源：阿卡米萨满 基础牌组、阿卡米萨满 起手装备、阿卡米萨满 关键行为、阿卡米升华者 基础牌组 等 6 项。 2 阶 At the beginning of your turn, Mana Totem gains 1 charge. Then gain 1 mana for each charge on Mana Totem. 在你的回合开始时，法力图腾 获得 1 层充能。然后 法力图腾 每有 1 层充能，你获得 1 点法力。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ManaTotem__403.png" alt="法力图腾" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力图腾</strong>
    <small>Mana Totem · 装备 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：阿卡米萨满 基础牌组、阿卡米萨满 起手装备、阿卡米萨满 关键行为、阿卡米升华者 基础牌组 等 6 项。">怪物限定</span></span>
    <span>在你的回合开始时，法力图腾 获得 1 层充能。然后 法力图腾 每有 1 层充能，你获得 1 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/staff" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="4" data-card-search="法杖 Staff 法杖 Staff Staff 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 When you gain mana, deal 1 @atk damage for every 2 mana you gained (rounded down). 每当你获得法力时，每获得 2 点法力就造成 1 点攻击伤害，向下取整。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Staff__550.png" alt="法杖" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法杖</strong>
    <small>Staff · 装备 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>每当你获得法力时，每获得 2 点法力就造成 1 点攻击伤害，向下取整。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/cloak-of-flame" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="7" data-card-search="火焰斗篷 Cloak of Flame 火焰斗篷 CloakOfFlame CloakOfFlame 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Whenever your opponent plays an attack card, they take 2 @fir damage. 每当对手打出攻击牌时，对手 拿取 2 点火焰伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CloakOfFlame__813.png" alt="火焰斗篷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰斗篷</strong>
    <small>Cloak of Flame · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>每当对手打出攻击牌时，对手 拿取 2 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/soulforge" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="2" data-card-search="灵魂熔炉 Soulforge 灵魂熔炉 Soulforge Soulforge 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 When you defeat an opponent with a levelable card, it levels up. 当你用可升级牌击败对手时，该牌升级。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Soulforge__636.png" alt="灵魂熔炉" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>灵魂熔炉</strong>
    <small>Soulforge · 装备 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>当你用可升级牌击败对手时，该牌升级。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flamebrand" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="7" data-card-search="焰刃 Flamebrand 焰刃 Flamebrand Flamebrand 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 At the start of your turn, draw a &lt;temporary&gt; Fireball card. 在你的回合开始时，抽一张&lt;临时&gt; 火球 牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Flamebrand__549.png" alt="焰刃" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>焰刃</strong>
    <small>Flamebrand · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，抽一张<span class="dq-term">临时</span> 火球 牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bear" data-card-tile data-card-type="装备" data-card-status="profession" data-card-tier="6" data-card-search="熊 Bear 熊 Bear Bear 装备 职业专属 职业专属来源：德鲁伊：Summon Bear。 6 阶 At the beginning of your turn, deal 3 @atk damage to your opponent. \\n Prevent the first 3 physical damage you would take each turn. 在你的回合开始时，造成 3 点攻击伤害 对手。每回合防止你受到的前 3 点物理伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Bear__560.png" alt="熊" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>熊</strong>
    <small>Bear · 装备 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：德鲁伊：Summon Bear。">职业专属</span></span>
    <span>在你的回合开始时，造成 3 点攻击伤害 对手。每回合防止你受到的前 3 点物理伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shock-totem" data-card-tile data-card-type="装备" data-card-status="monster" data-card-tier="4" data-card-search="电击图腾 Shock Totem 电击图腾 ShockTotem ShockTotem 装备 怪物限定 怪物限定来源：阿卡米升华者 基础牌组、阿卡米升华者 起手装备、阿卡米升华者 关键行为、阿卡米污泥召唤者 基础牌组 等 7 项。 4 阶 At the beginning of your turn, Shock Totem gains 1 charge. Then deal 2 @air damage for each charge counter on Shock Totem. 在你的回合开始时，电击图腾 获得 1 层充能。然后 电击图腾 每有 1 个充能计数器，造成 2 点电系伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ShockTotem__662.png" alt="电击图腾" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>电击图腾</strong>
    <small>Shock Totem · 装备 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：阿卡米升华者 基础牌组、阿卡米升华者 起手装备、阿卡米升华者 关键行为、阿卡米污泥召唤者 基础牌组 等 7 项。">怪物限定</span></span>
    <span>在你的回合开始时，电击图腾 获得 1 层充能。然后 电击图腾 每有 1 个充能计数器，造成 2 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/boots-of-speed" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="7" data-card-search="疾速靴 Boots of Speed 疾速靴 BootsOfSpeed BootsOfSpeed 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 At the beginning of your turn, draw a card and gain 1 @tim ^. 在你的回合开始时，抽 1 张牌并获得 1 行动点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BootsOfSpeed__224.png" alt="疾速靴" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>疾速靴</strong>
    <small>Boots of Speed · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，抽 1 张牌并获得 1 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/shield" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="1" data-card-search="盾牌 Shield 盾牌 Shield Shield 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 You have a 20% chance of dodging your opponent's attack cards. 你有 20% 概率闪避对手的攻击牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Shield__704.png" alt="盾牌" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>盾牌</strong>
    <small>Shield · 装备 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>你有 20% 概率闪避对手的攻击牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/jeremiads-bracer" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="5" data-card-search="耶利米的护腕 Jeremiad's Bracer 耶利米的护腕 JeremiadsBracer JeremiadsBracer 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 You have a 10% chance of dodging your opponent's attack cards. \\n Whenever you dodge, draw a card. 你有 10% 概率闪避对手的攻击牌。每当你闪避时，抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/JeremiadsBracer__180.png" alt="耶利米的护腕" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>耶利米的护腕</strong>
    <small>Jeremiad's Bracer · 装备 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>你有 10% 概率闪避对手的攻击牌。每当你闪避时，抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/jeremiads-kris" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="7" data-card-search="耶利米的波刃匕首 Jeremiad's Kris 耶利米的波刃匕首 JeremiadsKris JeremiadsKris 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 When you play an attack card, deal 1 @atk damage for every 2 action cards in play (rounded up). 当你打出 1 个 攻击牌，造成 1 点攻击伤害 每有 2 个行动牌 在场 (向上取整)。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/JeremiadsKris__698.png" alt="耶利米的波刃匕首" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>耶利米的波刃匕首</strong>
    <small>Jeremiad's Kris · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>当你打出 1 个 攻击牌，造成 1 点攻击伤害 每有 2 个行动牌 在场 (向上取整)。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dancing-scimitar" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="4" data-card-search="舞动弯刀 Dancing Scimitar 舞动弯刀 DancingScimitar DancingScimitar 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 At the beginning of your turn, deal 3 @atk damage to your opponent. 在你的回合开始时，造成 3 点攻击伤害 对手。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DancingScimitar__248.png" alt="舞动弯刀" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>舞动弯刀</strong>
    <small>Dancing Scimitar · 装备 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，造成 3 点攻击伤害 对手。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/bloody-knuckles" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="7" data-card-search="血拳套 Bloody Knuckles 血拳套 BloodyKnuckles BloodyKnuckles 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 At the start of your turn, if you have at most half your health, draw a card. Then, if your opponent has at most half their health, draw a card. 在你的回合开始时，如果你的生命至多一半，抽 1 张牌。然后，如果对手生命至多一半，抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/BloodyKnuckles__593.png" alt="血拳套" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>血拳套</strong>
    <small>Bloody Knuckles · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，如果你的生命至多一半，抽 1 张牌。然后，如果对手生命至多一半，抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/jasras-tome" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="7" data-card-search="贾斯拉的秘典 Jasra's Tome 贾斯拉的秘典 JasrasTome JasrasTome 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 At the beginning of your turn, draw the next spell card in your deck. 在你的回合开始时，从牌库抽取下一张法术牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/JasrasTome__235.png" alt="贾斯拉的秘典" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>贾斯拉的秘典</strong>
    <small>Jasra's Tome · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，从牌库抽取下一张法术牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/jasras-emerald" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="10" data-card-search="贾斯拉的翡翠 Jasra's Emerald 贾斯拉的翡翠 JasrasEmerald JasrasEmerald 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 10 阶 When you play a spell card, draw a card. 当你打出一张法术牌，抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/JasrasEmerald__242.png" alt="贾斯拉的翡翠" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>贾斯拉的翡翠</strong>
    <small>Jasra's Emerald · 装备 · 10 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>当你打出一张法术牌，抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sword" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="3" data-card-search="长剑 Sword 长剑 Sword Sword 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Deal 1 @atk damage for every 2 attack cards you play in a turn. 造成 1 点攻击伤害 每有 2 个攻击牌 你 打出 在一张回合。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sword__825.png" alt="长剑" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>长剑</strong>
    <small>Sword · 装备 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>造成 1 点攻击伤害 每有 2 个攻击牌 你 打出 在一张回合。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sword1" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="3" data-card-search="长剑（等级 1） Sword (Level 1) 长剑（等级 1） Sword1 Sword1 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 At the start of your turn, deal 1 @atk damage. 在你的回合开始时，造成 1 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sword1__515.png" alt="长剑（等级 1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>长剑（等级 1）</strong>
    <small>Sword (Level 1) · 装备 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，造成 1 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sword2" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="4" data-card-search="长剑（等级 2） Sword (Level 2) 长剑（等级 2） Sword2 Sword2 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 At the start of your turn, deal 2 @atk damage. 在你的回合开始时，造成 2 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sword2__1040.png" alt="长剑（等级 2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>长剑（等级 2）</strong>
    <small>Sword (Level 2) · 装备 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，造成 2 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sword3" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="5" data-card-search="长剑（等级 3） Sword (Level 3) 长剑（等级 3） Sword3 Sword3 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 At the start of your turn, deal 3 @atk damage. 在你的回合开始时，造成 3 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sword3__614.png" alt="长剑（等级 3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>长剑（等级 3）</strong>
    <small>Sword (Level 3) · 装备 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，造成 3 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/sword4" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="6" data-card-search="长剑（等级 4） Sword (Level 4) 长剑（等级 4） Sword4 Sword4 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 At the start of your turn, deal 4 @atk damage. 在你的回合开始时，造成 4 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Sword4__616.png" alt="长剑（等级 4）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>长剑（等级 4）</strong>
    <small>Sword (Level 4) · 装备 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合开始时，造成 4 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/cloak-of-invisibility" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="8" data-card-search="隐形斗篷 Cloak of Invisibility 隐形斗篷 CloakOfInvisibility CloakOfInvisibility 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Prevent the first card your opponent plays in each turn from having any effect. This effect stacks. 防止对手每回合打出的第一张牌产生任何效果。此效果可以叠加。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CloakOfInvisibility__311.png" alt="隐形斗篷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>隐形斗篷</strong>
    <small>Cloak of Invisibility · 装备 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>防止对手每回合打出的第一张牌产生任何效果。此效果可以叠加。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/donnerschwert" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="6" data-card-search="雷霆剑 Donnerschwert 雷霆剑 Donnerschwert Donnerschwert 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Whenever you play an attack card, deal 1 @air damage. 每当你打出 1 个 攻击牌，造成 1 点电系伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Donnerschwert__264.png" alt="雷霆剑" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>雷霆剑</strong>
    <small>Donnerschwert · 装备 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>每当你打出 1 个 攻击牌，造成 1 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/storm-blade" data-card-tile data-card-type="装备" data-card-status="monster" data-card-tier="7" data-card-search="风暴之刃 Storm Blade 风暴之刃 StormBlade StormBlade 装备 怪物限定 怪物限定来源：泰坦 基础牌组、泰坦 起手装备、风暴巨人 基础牌组、风暴巨人 起手装备。 7 阶 Whenever you play an attack card, deal 1 @air damage. 每当你打出 1 个 攻击牌，造成 1 点电系伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StormBlade__419.png" alt="风暴之刃" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>风暴之刃</strong>
    <small>Storm Blade · 装备 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：泰坦 基础牌组、泰坦 起手装备、风暴巨人 基础牌组、风暴巨人 起手装备。">怪物限定</span></span>
    <span>每当你打出 1 个 攻击牌，造成 1 点电系伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/darting-daggers" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="5" data-card-search="飞掷匕首 Darting Daggers 飞掷匕首 DartingDaggers DartingDaggers 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 At the end of your turn, deal @atk damage to your opponent equal to twice the number of @tim you have left, then lose all your @tim ^. 在你的回合结束时，造成 攻击 伤害 对手 等同于你剩余行动点数量的 2 倍，然后 失去 所有 你的 行动点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DartingDaggers__212.png" alt="飞掷匕首" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>飞掷匕首</strong>
    <small>Darting Daggers · 装备 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>在你的回合结束时，造成 攻击 伤害 对手 等同于你剩余行动点数量的 2 倍，然后 失去 所有 你的 行动点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/gauss-hourglass" data-card-tile data-card-type="装备" data-card-status="normal" data-card-tier="3" data-card-search="高斯的沙漏 Gauss' Hourglass 高斯的沙漏 GaussHourglass GaussHourglass 装备 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 If you have no cards in play at the end of your turn, draw cards equal to your maximum hand size after you refill your hand. 如果你的回合结束时场上没有牌，则在补满手牌后，抽等同于手牌上限数量的牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/GaussHourglass__440.png" alt="高斯的沙漏" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>高斯的沙漏</strong>
    <small>Gauss' Hourglass · 装备 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>如果你的回合结束时场上没有牌，则在补满手牌后，抽等同于手牌上限数量的牌。</span>
  </span>
</a>
</section>
</section>

<section class="dq-card-group" data-card-group data-card-group-type="反应">
<h2 id="reaction" class="dq-card-group-title"><span>反应</span><em data-card-group-count>14 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
<a class="dq-card-tile dq-card-tile-small" href="/cards/retaliate" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="4" data-card-search="反击 Retaliate 反击 Retaliate Retaliate 反应 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 4 阶 Trigger: An opponent ends their turn. \\n Effect: Deal 1 @atk damage for each attack card in play. 触发：对手结束回合时。效果：场上每有 1 张攻击牌，造成 1 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Retaliate__908.png" alt="反击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>反击</strong>
    <small>Retaliate · 反应 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>触发：对手结束回合时。效果：场上每有 1 张攻击牌，造成 1 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/counterspell" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="4" data-card-search="反制法术 Counterspell 反制法术 Counterspell Counterspell 反应 怪物限定 怪物限定来源：家精 基础牌组。 4 阶 Trigger: An opponent plays a spell. \\n Effect: That spell has no effect. Draw a card. 触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Counterspell__323.png" alt="反制法术" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>反制法术</strong>
    <small>Counterspell · 反应 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：家精 基础牌组。">怪物限定</span></span>
    <span>触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/protean" data-card-tile data-card-type="反应" data-card-status="normal" data-card-tier="4" data-card-search="变幻 Protean 变幻 Protean Protean 反应 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Trigger: Your turn starts and all the cards in your hand have different names. \\n Effect: Draw 3 cards. \\n Note: Attack (1) and Attack (2) have different names. 触发：你的回合开始，且你手牌中的所有牌名称都不同时。效果：抽 3 张牌。注意：攻击 (1) 和 攻击 (2) 视为不同名称。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Protean__493.png" alt="变幻" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>变幻</strong>
    <small>Protean · 反应 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>触发：你的回合开始，且你手牌中的所有牌名称都不同时。效果：抽 3 张牌。注意：攻击 (1) 和 攻击 (2) 视为不同名称。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/slurp" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="4" data-card-search="吮吸 Slurp 吮吸 Slurp Slurp 反应 怪物限定 怪物限定来源：凝胶方块 基础牌组、凝胶方块 关键行为。 4 阶 Trigger: 35% chance when an opponent plays an attack, action, mana, or spell card. \\n Effect: That card has no effect. Exile it for the remainder of the fight. Heal for 5 health. 触发：对手打出攻击牌、行动牌、魔力牌或法术牌时有 35% 概率。效果：该牌无效果；直到本场战斗结束，放逐该牌；回复 5 点生命。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Slurp__921.png" alt="吮吸" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>吮吸</strong>
    <small>Slurp · 反应 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：凝胶方块 基础牌组、凝胶方块 关键行为。">怪物限定</span></span>
    <span>触发：对手打出攻击牌、行动牌、魔力牌或法术牌时有 35% 概率。效果：该牌无效果；直到本场战斗结束，放逐该牌；回复 5 点生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/ink-spray" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="6" data-card-search="喷墨 Ink Spray 喷墨 InkSpray InkSpray 反应 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 6 阶 Trigger: An opponent plays a card with at least 3 others in play. \\n Effect: That card has no effect. The turn ends. Exile Ink Spray. 触发：对手打出一张牌，且场上至少还有 3 张其他牌时。效果：该牌无效果。该回合结束。放逐 喷墨。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/InkSpray__683.png" alt="喷墨" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>喷墨</strong>
    <small>Ink Spray · 反应 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>触发：对手打出一张牌，且场上至少还有 3 张其他牌时。效果：该牌无效果。该回合结束。放逐 喷墨。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/screech" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="2" data-card-search="尖啸 Screech 尖啸 Screech Screech 反应 怪物限定 怪物限定来源：鹰身女妖 基础牌组、鹰身女妖 关键行为。 2 阶 Trigger: An opponent plays a spell. \\n Effect: That spell has no effect. Draw a card. 触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Screech__439.png" alt="尖啸" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>尖啸</strong>
    <small>Screech · 反应 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：鹰身女妖 基础牌组、鹰身女妖 关键行为。">怪物限定</span></span>
    <span>触发：对手打出法术牌时。效果：该法术无效果。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/retribution" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="4" data-card-search="报应 Retribution 报应 Retribution Retribution 反应 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 4 阶 Trigger: An opponent ends their turn. \\n Effect: Deal 1 @atk damage for each action card in play. 触发：对手结束回合时。效果：场上每有 1 张行动牌，造成 1 点攻击伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Retribution__279.png" alt="报应" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>报应</strong>
    <small>Retribution · 反应 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>触发：对手结束回合时。效果：场上每有 1 张行动牌，造成 1 点攻击伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/fester" data-card-tile data-card-type="反应" data-card-status="normal" data-card-tier="4" data-card-search="溃烂 Fester 溃烂 Fester Fester 反应 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Trigger: An opponent heals. \\n Effect: Instead, the opponent takes that much @ear damage. 触发：对手回复生命时。效果：改为让对手受到等量毒性伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Fester__193.png" alt="溃烂" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>溃烂</strong>
    <small>Fester · 反应 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>触发：对手回复生命时。效果：改为让对手受到等量毒性伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/cower" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="1" data-card-search="畏缩 Cower 畏缩 Cower Cower 反应 怪物限定 怪物限定来源：狗头人 基础牌组、狗头人 优先起手、狗头人 关键行为、地精囤积者 基础牌组 等 5 项。 1 阶 Trigger: You take damage. \\n Effect: Prevent that damage. Draw a card. 触发：你受到 伤害。效果：防止该伤害。抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Cower__910.png" alt="畏缩" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>畏缩</strong>
    <small>Cower · 反应 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：狗头人 基础牌组、狗头人 优先起手、狗头人 关键行为、地精囤积者 基础牌组 等 5 项。">怪物限定</span></span>
    <span>触发：你受到 伤害。效果：防止该伤害。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/exhaustion" data-card-tile data-card-type="反应" data-card-status="normal" data-card-tier="7" data-card-search="疲惫 Exhaustion 疲惫 Exhaustion Exhaustion 反应 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Trigger: An opponent plays a card with at least 3 others in play. \\n Effect: That card has no effect. The turn ends. 触发：对手打出一张牌，且场上至少还有 3 张其他牌时。效果：该牌无效果。该回合结束。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Exhaustion__325.png" alt="疲惫" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>疲惫</strong>
    <small>Exhaustion · 反应 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>触发：对手打出一张牌，且场上至少还有 3 张其他牌时。效果：该牌无效果。该回合结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/riposte" data-card-tile data-card-type="反应" data-card-status="normal" data-card-tier="5" data-card-search="还击 Riposte 还击 Riposte Riposte 反应 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 5 阶 Trigger: An opponent plays an attack card. \\n Effect: That attack card has no effect. Deal 2 @atk damage. Draw a card. 触发：对手打出攻击牌时。效果：该攻击牌无效果。造成 2 点攻击伤害。抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Riposte__309.png" alt="还击" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>还击</strong>
    <small>Riposte · 反应 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>触发：对手打出攻击牌时。效果：该攻击牌无效果。造成 2 点攻击伤害。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/chain-lightning" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="6" data-card-search="连锁闪电 Chain Lightning 连锁闪电 ChainLightning ChainLightning 反应 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 6 阶 Trigger: An opponent plays a card (10% chance per card in play) \\n Effect: That card has no effect. The opponent takes 2 @air damage for each card in play. The turn ends. 触发：对手打出一张牌时，场上每张牌提供 10% 概率。效果：该牌无效果；对手每有 1 张场上的牌受到 2 点电系伤害；该回合结束。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ChainLightning__70.png" alt="连锁闪电" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>连锁闪电</strong>
    <small>Chain Lightning · 反应 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>触发：对手打出一张牌时，场上每张牌提供 10% 概率。效果：该牌无效果；对手每有 1 张场上的牌受到 2 点电系伤害；该回合结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/disorient" data-card-tile data-card-type="反应" data-card-status="normal" data-card-tier="6" data-card-search="迷失方向 Disorient 迷失方向 Disorient Disorient 反应 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Trigger: An opponent plays an action card. \\n Effect: That card behaves as if you had played it instead. 触发：对手打出行动牌时。效果：该牌视为由你打出。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Disorient__390.png" alt="迷失方向" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>迷失方向</strong>
    <small>Disorient · 反应 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>触发：对手打出行动牌时。效果：该牌视为由你打出。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/reenact" data-card-tile data-card-type="反应" data-card-status="monster" data-card-tier="4" data-card-search="重演 Reenact 重演 Reenact Reenact 反应 怪物限定 怪物限定来源：默剧演员 基础牌组、默剧演员 优先起手、默剧演员 关键行为。 4 阶 Trigger: 75% chance when an opponent plays an attack, action, or spell card (once per card). \\n Effect: Copy the effects of that card. Draw a card. 触发：对手打出攻击牌、行动牌或法术牌时有 75% 概率，每张牌只触发一次。效果：复制该牌的效果。抽 1 张牌。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Reenact__651.png" alt="重演" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>重演</strong>
    <small>Reenact · 反应 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：默剧演员 基础牌组、默剧演员 优先起手、默剧演员 关键行为。">怪物限定</span></span>
    <span>触发：对手打出攻击牌、行动牌或法术牌时有 75% 概率，每张牌只触发一次。效果：复制该牌的效果。抽 1 张牌。</span>
  </span>
</a>
</section>
</section>

<section class="dq-card-group" data-card-group data-card-group-type="魔力">
<h2 id="mana" class="dq-card-group-title"><span>魔力</span><em data-card-group-count>22 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
<a class="dq-card-tile dq-card-tile-small" href="/cards/elemental-surge" data-card-tile data-card-type="魔力" data-card-status="unlock" data-card-tier="5" data-card-search="元素激涌 Elemental Surge 元素激涌 ElementalSurge ElementalSurge 魔力 成就解锁 需要解锁：WINDRUID2。解锁后可进入奖励和商店的 CardFinder 候选池。 5 阶 Gain 4 mana. Draw one of Fireball, Frost Bolt, Shock, or Acid Lance. That card is &lt;temporary&gt; ^. 获得 4 点法力。抽取 火球、冰霜箭、电击 或 酸液长枪 中的 1 张。该牌为&lt;临时&gt;。 WINDRUID2 盗贼 1 牧师 3 战士 1 法师 7">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ElementalSurge__121.png" alt="元素激涌" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>元素激涌</strong>
    <small>Elemental Surge · 魔力 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：WINDRUID2。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>获得 4 点法力。抽取 火球、冰霜箭、电击 或 酸液长枪 中的 1 张。该牌为<span class="dq-term">临时</span>。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/frost-charge" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="2" data-card-search="冰霜充能 Frost Charge 冰霜充能 FrostCharge FrostCharge 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 3 mana. Your opponent becomes &lt;Chilled 1&gt; until the end of their next turn. 获得 3 点法力。对手获得 &lt;寒冷 1&gt; 直到对手下个回合结束。 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FrostCharge__202.png" alt="冰霜充能" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>冰霜充能</strong>
    <small>Frost Charge · 魔力 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 点法力。对手获得 <span class="dq-term">寒冷 1</span> 直到对手下个回合结束。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/kinetic-charge" data-card-tile data-card-type="魔力" data-card-status="unlock" data-card-tier="7" data-card-search="动能充能 Kinetic Charge 动能充能 KineticCharge KineticCharge 魔力 成就解锁 需要解锁：MANA4。解锁后可进入奖励和商店的 CardFinder 候选池。 7 阶 Until your next turn, gain 1 mana for each point of damage you take. Draw a card. 直到你的下个回合，你每受到 1 点伤害就获得 1 点法力。抽 1 张牌。 MANA4 盗贼 3 牧师 1 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/KineticCharge__546.png" alt="动能充能" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>动能充能</strong>
    <small>Kinetic Charge · 魔力 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：MANA4。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>直到你的下个回合，你每受到 1 点伤害就获得 1 点法力。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/raw-power" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="6" data-card-search="原始力量 Raw Power 原始力量 RawPower RawPower 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Gain 5 mana. The next time your opponent would take elemental damage, it is instead &lt;piercing&gt; ^. 获得 5 点法力。对手下一次将受到元素伤害时，改为受到&lt;穿透&gt;伤害。 盗贼 1 牧师 10 战士 1 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/RawPower__575.png" alt="原始力量" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>原始力量</strong>
    <small>Raw Power · 魔力 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 5 点法力。对手下一次将受到元素伤害时，改为受到<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/conduit" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="8" data-card-search="导流 Conduit 导流 Conduit Conduit 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Your spells are free this turn. 你的法术本回合免费。 盗贼 1 牧师 6 战士 1 法师 8">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Conduit__1063.png" alt="导流" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>导流</strong>
    <small>Conduit · 魔力 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>你的法术本回合免费。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wisdom" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="3" data-card-search="智慧 Wisdom 智慧 Wisdom Wisdom 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 Gain 3 mana. Draw a card. 获得 3 点法力。抽 1 张牌。 盗贼 1 牧师 8 战士 1 法师 1 ID 4 -1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Wisdom__574.png" alt="智慧" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>智慧</strong>
    <small>Wisdom · 魔力 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 点法力。抽 1 张牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/salve" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="2" data-card-search="治疗药膏 Salve 治疗药膏 Salve Salve 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 3 mana and 3 health. 获得 3 点法力并3 生命。 盗贼 1 牧师 8 战士 1 法师 2">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Salve__399.png" alt="治疗药膏" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>治疗药膏</strong>
    <small>Salve · 魔力 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 点法力并3 生命。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mana1" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="1" data-card-search="法力（1） Mana (1) 法力（1） Mana1 Mana1 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Gain 2 mana. 获得 2 点法力。 never 盗贼 1 牧师 3 战士 1 法师 6">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana1__975.png" alt="法力（1）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力（1）</strong>
    <small>Mana (1) · 魔力 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 2 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mana2" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="1" data-card-search="法力（2） Mana (2) 法力（2） Mana2 Mana2 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 Gain 4 mana. 获得 4 点法力。 never 盗贼 1 牧师 6 战士 1 法师 6">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana2__263.png" alt="法力（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力（2）</strong>
    <small>Mana (2) · 魔力 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 4 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mana3" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="2" data-card-search="法力（3） Mana (3) 法力（3） Mana3 Mana3 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 6 mana. 获得 6 点法力。 盗贼 1 牧师 6 战士 1 法师 6">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Mana3__658.png" alt="法力（3）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力（3）</strong>
    <small>Mana (3) · 魔力 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 6 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mana-surge" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="6" data-card-search="法力激涌 Mana Surge 法力激涌 ManaSurge ManaSurge 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 Gain 10 mana. 获得 10 点法力。 盗贼 1 牧师 10 战士 1 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ManaSurge__756.png" alt="法力激涌" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力激涌</strong>
    <small>Mana Surge · 魔力 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 10 点法力。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/mana-swell" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="8" data-card-search="法力膨胀 Mana Swell 法力膨胀 ManaSwell ManaSwell 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Gain 5 mana. The next time you cast a spell this turn, cast a second copy of that spell. 获得 5 点法力。本回合你下一次施放法术时，额外施放该法术的第二份复制。 盗贼 1 牧师 8 战士 1 法师 10">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ManaSwell__625.png" alt="法力膨胀" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力膨胀</strong>
    <small>Mana Swell · 魔力 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 5 点法力。本回合你下一次施放法术时，额外施放该法术的第二份复制。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/clarity" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="4" data-card-search="清明 Clarity 清明 Clarity Clarity 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Gain 3 mana. Your spells cost 3 less this turn. 获得 3 点法力。你的法术本回合少花 3 点费用。 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Clarity__420.png" alt="清明" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>清明</strong>
    <small>Clarity · 魔力 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 点法力。你的法术本回合少花 3 点费用。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/flame-charge" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="2" data-card-search="火焰充能 Flame Charge 火焰充能 FlameCharge FlameCharge 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 3 mana. Deal 3 @fir damage. 获得 3 点法力。造成 3 点火焰伤害。 盗贼 1 牧师 1 战士 1 法师 8">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/FlameCharge__686.png" alt="火焰充能" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>火焰充能</strong>
    <small>Flame Charge · 魔力 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 点法力。造成 3 点火焰伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/inspiration" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="7" data-card-search="灵感 Inspiration 灵感 Inspiration Inspiration 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 7 阶 Gain 5 mana. Draw the next spell card in your deck. 获得 5 点法力。从牌库抽取下一张法术牌。 盗贼 3 牧师 1 战士 3 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Inspiration__980.png" alt="灵感" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>灵感</strong>
    <small>Inspiration · 魔力 · 7 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 5 点法力。从牌库抽取下一张法术牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/wild-mana" data-card-tile data-card-type="魔力" data-card-status="monster" data-card-tier="4" data-card-search="狂野法力 Wild Mana 狂野法力 WildMana WildMana 魔力 怪物限定 WINCHAOS2 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。 4 阶 Gain 5 mana. Draw a random &lt;temporary&gt; non-equipment card. 获得 5 点法力。抽 1 张随机&lt;临时&gt;非装备牌。 WINCHAOS2 盗贼 1 牧师 8 战士 1 法师 3">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/WildMana__274.png" alt="狂野法力" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>狂野法力</strong>
    <small>Wild Mana · 魔力 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="WINCHAOS2 是内部 UserAttribute，不在 AchievementList 中；Chaos Mage 未进入玩家职业选择列表，未解析到玩家成就解锁路径，按非玩家来源展示。">怪物限定</span></span>
    <span>获得 5 点法力。抽 1 张随机<span class="dq-term">临时</span>非装备牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/vile-charge" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="2" data-card-search="石化充能 Stone Charge 石化充能 VileCharge VileCharge 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 3 mana. Prevent the next 3 damage that would be dealt to you. 获得 3 点法力。防止你将受到的接下来 3 点伤害。 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/VileCharge__69.png" alt="石化充能" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>石化充能</strong>
    <small>Stone Charge · 魔力 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 点法力。防止你将受到的接下来 3 点伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/piety" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="4" data-card-search="虔诚 Piety 虔诚 Piety Piety 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 4 阶 Gain 3 mana. Remove a counter from each of your prayer cards. 获得 3 点法力。移除一张计数器 从 每个 的 你的 祈祷 牌。 盗贼 1 牧师 10 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Piety__928.png" alt="虔诚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>虔诚</strong>
    <small>Piety · 魔力 · 4 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 点法力。移除一张计数器 从 每个 的 你的 祈祷 牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/overload" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="8" data-card-search="过载 Overload 过载 Overload Overload 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 Double your current mana (maximum gain of 30). 翻倍你的 当前 法力 (最多 获得 的 30)。 盗贼 1 牧师 8 战士 1 法师 8">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Overload__166.png" alt="过载" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>过载</strong>
    <small>Overload · 魔力 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>翻倍你的 当前 法力 (最多 获得 的 30)。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/static-charge" data-card-tile data-card-type="魔力" data-card-status="normal" data-card-tier="2" data-card-search="静电充能 Static Charge 静电充能 StaticCharge StaticCharge 魔力 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 2 阶 Gain 3 mana. Draw the next mana card in your deck. 获得 3 点法力。抽 下一次 法力 你牌库中的牌。 盗贼 1 牧师 1 战士 1 法师 1">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/StaticCharge__1061.png" alt="静电充能" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>静电充能</strong>
    <small>Static Charge · 魔力 · 2 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>获得 3 点法力。抽 下一次 法力 你牌库中的牌。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/elusive-power" data-card-tile data-card-type="魔力" data-card-status="unlock" data-card-tier="5" data-card-search="飘忽之力 Elusive Power 飘忽之力 ElusivePower ElusivePower 魔力 成就解锁 需要解锁：MANA3。解锁后可进入奖励和商店的 CardFinder 候选池。 5 阶 Gain 5 mana. Until your next turn, prevent the next card your opponent plays from having any effect. 获得 5 点法力。直到你的下个回合，防止对手打出的下一张牌产生任何效果。 MANA3 盗贼 3 牧师 1 战士 1 法师 8">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/ElusivePower__985.png" alt="飘忽之力" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>飘忽之力</strong>
    <small>Elusive Power · 魔力 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-unlock" title="需要解锁：MANA3。解锁后可进入奖励和商店的 CardFinder 候选池。">成就解锁</span></span>
    <span>获得 5 点法力。直到你的下个回合，防止对手打出的下一张牌产生任何效果。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/dragons-wisdom" data-card-tile data-card-type="魔力" data-card-status="profession" data-card-tier="5" data-card-search="龙之智慧 Dragon's Wisdom 龙之智慧 DragonsWisdom DragonsWisdom 魔力 职业专属 职业专属来源：龙：3 级固定奖励 / 7 级固定奖励 / Dragon 专属。 5 阶 Gain 10 mana. 获得 10 点法力。 never 盗贼 1 牧师 6 战士 1 法师 6">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/DragonsWisdom__1011.png" alt="龙之智慧" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>龙之智慧</strong>
    <small>Dragon's Wisdom · 魔力 · 5 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-profession" title="职业专属来源：龙：3 级固定奖励 / 7 级固定奖励 / Dragon 专属。">职业专属</span></span>
    <span>获得 10 点法力。</span>
  </span>
</a>
</section>
</section>

<section class="dq-card-group" data-card-group data-card-group-type="祈祷">
<h2 id="prayer" class="dq-card-group-title"><span>祈祷</span><em data-card-group-count>7 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
<a class="dq-card-tile dq-card-tile-small" href="/cards/prayer-of-wrath" data-card-tile data-card-type="祈祷" data-card-status="normal" data-card-tier="6" data-card-search="怒火祈祷 Prayer of Wrath 怒火祈祷 PrayerOfWrath PrayerOfWrath 祈祷 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 6 阶 When the last counter is removed, deal @fir damage based on the number of counters this started with: \\n 1: 5 \\n 2: 10 \\n 3: 15 \\n 4: 20 \\n 5: 25 最后一个计数器被移除时，根据初始计数器数量造成火焰伤害：1 层 5 点，2 层 10 点，3 层 15 点，4 层 20 点，5 层 25 点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PrayerOfWrath__204.png" alt="怒火祈祷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>怒火祈祷</strong>
    <small>Prayer of Wrath · 祈祷 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>最后一个计数器被移除时，根据初始计数器数量造成火焰伤害：1 层 5 点，2 层 10 点，3 层 15 点，4 层 20 点，5 层 25…</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/prayer-of-violence" data-card-tile data-card-type="祈祷" data-card-status="normal" data-card-tier="3" data-card-search="暴力祈祷 Prayer of Violence 暴力祈祷 PrayerOfViolence PrayerOfViolence 祈祷 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 3 阶 When the last counter is removed, deal @atk damage based on the number of counters this started with: \\n 1: 3 \\n 2: 6 \\n 3: 9 \\n 4: 12 \\n 5: 15 最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PrayerOfViolence__1025.png" alt="暴力祈祷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>暴力祈祷</strong>
    <small>Prayer of Violence · 祈祷 · 3 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>最后一个计数器被移除时，根据初始计数器数量造成攻击伤害：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/curse-of-doom" data-card-tile data-card-type="祈祷" data-card-status="monster" data-card-tier="6" data-card-search="末日诅咒 Curse of Doom 末日诅咒 CurseOfDoom CurseOfDoom 祈祷 怪物限定 怪物限定来源：老巫婆 基础牌组、老巫婆 优先起手。 6 阶 After 5 turns, deal 30 &lt;piercing&gt; damage. 5 回合后，造成 30 点&lt;穿透&gt;伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoom__778.png" alt="末日诅咒" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>末日诅咒</strong>
    <small>Curse of Doom · 祈祷 · 6 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：老巫婆 基础牌组、老巫婆 优先起手。">怪物限定</span></span>
    <span>5 回合后，造成 30 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/curse-of-doom2" data-card-tile data-card-type="祈祷" data-card-status="monster" data-card-tier="8" data-card-search="末日诅咒（2） Curse of Doom 末日诅咒（2） CurseOfDoom2 CurseOfDoom2 祈祷 怪物限定 怪物限定来源：老巫婆 基础牌组、老巫婆 优先起手。 8 阶 After 5 turns, deal 50 &lt;piercing&gt; damage. 5 回合后，造成 50 点&lt;穿透&gt;伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoom2__512.png" alt="末日诅咒（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>末日诅咒（2）</strong>
    <small>Curse of Doom · 祈祷 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：老巫婆 基础牌组、老巫婆 优先起手。">怪物限定</span></span>
    <span>5 回合后，造成 50 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/curse-of-doom-player" data-card-tile data-card-type="祈祷" data-card-status="normal" data-card-tier="8" data-card-search="末日诅咒（玩家） Curse of Doom 末日诅咒（玩家） CurseOfDoomPlayer CurseOfDoomPlayer 祈祷 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 After 5 turns, deal 50 &lt;piercing&gt; damage. 5 回合后，造成 50 点&lt;穿透&gt;伤害。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/CurseOfDoomPlayer__760.png" alt="末日诅咒（玩家）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>末日诅咒（玩家）</strong>
    <small>Curse of Doom · 祈祷 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>5 回合后，造成 50 点<span class="dq-term">穿透</span>伤害。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/prayer-of-life" data-card-tile data-card-type="祈祷" data-card-status="normal" data-card-tier="1" data-card-search="生命祈祷 Prayer of Life 生命祈祷 PrayerOfLife PrayerOfLife 祈祷 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 When the last counter is removed, heal based on the number of counters it started with: \\n 1: 3 \\n 2: 6 \\n 3: 9 \\n 4: 12 \\n 5: 15 最后一个计数器被移除时，根据初始计数器数量回复生命：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PrayerOfLife__733.png" alt="生命祈祷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>生命祈祷</strong>
    <small>Prayer of Life · 祈祷 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>最后一个计数器被移除时，根据初始计数器数量回复生命：1 层 3 点，2 层 6 点，3 层 9 点，4 层 12 点，5 层 15 点。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/prayer-of-speed" data-card-tile data-card-type="祈祷" data-card-status="normal" data-card-tier="8" data-card-search="速度祈祷 Prayer of Speed 速度祈祷 PrayerOfSpeed PrayerOfSpeed 祈祷 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 8 阶 When the last counter is removed, draw cards based on the number of counters it started with: \\n 1: 2 \\n 2: 4 \\n 3: 6 \\n 4: 8 \\n 5: 10 最后一个计数器被移除时，根据初始计数器数量抽牌：1 层 2 张，2 层 4 张，3 层 6 张，4 层 8 张，5 层 10 张。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PrayerOfSpeed__753.png" alt="速度祈祷" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>速度祈祷</strong>
    <small>Prayer of Speed · 祈祷 · 8 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>最后一个计数器被移除时，根据初始计数器数量抽牌：1 层 2 张，2 层 4 张，3 层 6 张，4 层 8 张，5 层 10 张。</span>
  </span>
</a>
</section>
</section>

<section class="dq-card-group" data-card-group data-card-group-type="其它">
<h2 id="other" class="dq-card-group-title"><span>其它</span><em data-card-group-count>27 张</em></h2>

<section class="dq-card-grid dq-card-grid-compact">
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-poison" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="中毒惩罚 Penalty Poison 中毒惩罚 PenaltyPoison PenaltyPoison 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison__960.png" alt="中毒惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>中毒惩罚</strong>
    <small>Penalty Poison · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-poison2" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="中毒惩罚（2） Penalty Poison2 中毒惩罚（2） PenaltyPoison2 PenaltyPoison2 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison2__501.png" alt="中毒惩罚（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>中毒惩罚（2）</strong>
    <small>Penalty Poison2 · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-poison8" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="中毒惩罚（8） Penalty Poison8 中毒惩罚（8） PenaltyPoison8 PenaltyPoison8 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoison8__632.png" alt="中毒惩罚（8）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>中毒惩罚（8）</strong>
    <small>Penalty Poison8 · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-damage" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="伤害惩罚 Penalty Damage 伤害惩罚 PenaltyDamage PenaltyDamage 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamage__324.png" alt="伤害惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>伤害惩罚</strong>
    <small>Penalty Damage · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-damage2" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="伤害惩罚（2） Penalty Damage2 伤害惩罚（2） PenaltyDamage2 PenaltyDamage2 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamage2__369.png" alt="伤害惩罚（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>伤害惩罚（2）</strong>
    <small>Penalty Damage2 · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-puppet" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="傀儡惩罚 Penalty Puppet 傀儡惩罚 PenaltyPuppet PenaltyPuppet 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyPuppet__883.png" alt="傀儡惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>傀儡惩罚</strong>
    <small>Penalty Puppet · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-poison-final" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="最终中毒惩罚 Penalty Poison Final 最终中毒惩罚 PenaltyPoisonFinal PenaltyPoisonFinal 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyPoisonFinal__681.png" alt="最终中毒惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>最终中毒惩罚</strong>
    <small>Penalty Poison Final · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-damage-final" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="最终伤害惩罚 Penalty Damage Final 最终伤害惩罚 PenaltyDamageFinal PenaltyDamageFinal 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyDamageFinal__998.png" alt="最终伤害惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>最终伤害惩罚</strong>
    <small>Penalty Damage Final · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-ward-final" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="最终护盾惩罚 Penalty Ward Final 最终护盾惩罚 PenaltyWardFinal PenaltyWardFinal 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyWardFinal__54.png" alt="最终护盾惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>最终护盾惩罚</strong>
    <small>Penalty Ward Final · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-curses-final" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="最终诅咒惩罚 Penalty Curses Final 最终诅咒惩罚 PenaltyCursesFinal PenaltyCursesFinal 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyCursesFinal__978.png" alt="最终诅咒惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>最终诅咒惩罚</strong>
    <small>Penalty Curses Final · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-minus-card" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="手牌减少惩罚 Penalty Minus Card 手牌减少惩罚 PenaltyMinusCard PenaltyMinusCard 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusCard__703.png" alt="手牌减少惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>手牌减少惩罚</strong>
    <small>Penalty Minus Card · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/additional-card" data-card-tile data-card-type="其它" data-card-status="normal" data-card-tier="1" data-card-search="手牌增加 1 Card 手牌增加 AdditionalCard AdditionalCard 其它 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><span class="dq-card-no-art" aria-label="手牌增加">
  <span>无原始卡图</span>
</span></span></span>
  <span class="dq-card-copy">
    <strong>手牌增加</strong>
    <small>1 Card · 其它 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-plus-card" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="手牌增加惩罚 Penalty Plus Card 手牌增加惩罚 PenaltyPlusCard PenaltyPlusCard 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyPlusCard__1029.png" alt="手牌增加惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>手牌增加惩罚</strong>
    <small>Penalty Plus Card · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-ward30" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="护盾惩罚（30） Penalty Ward30 护盾惩罚（30） PenaltyWard30 PenaltyWard30 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyWard30__543.png" alt="护盾惩罚（30）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>护盾惩罚（30）</strong>
    <small>Penalty Ward30 · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-exile-hand" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="放逐手牌惩罚 Penalty Exile Hand 放逐手牌惩罚 PenaltyExileHand PenaltyExileHand 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyExileHand__208.png" alt="放逐手牌惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>放逐手牌惩罚</strong>
    <small>Penalty Exile Hand · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-heal" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="治疗惩罚 Penalty Heal 治疗惩罚 PenaltyHeal PenaltyHeal 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyHeal__268.png" alt="治疗惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>治疗惩罚</strong>
    <small>Penalty Heal · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/additional-mana" data-card-tile data-card-type="其它" data-card-status="normal" data-card-tier="1" data-card-search="法力增加 2 Mana 法力增加 AdditionalMana AdditionalMana 其它 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><span class="dq-card-no-art" aria-label="法力增加">
  <span>无原始卡图</span>
</span></span></span>
  <span class="dq-card-copy">
    <strong>法力增加</strong>
    <small>2 Mana · 其它 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-mana" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="法力惩罚 Penalty Mana 法力惩罚 PenaltyMana PenaltyMana 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyMana__475.png" alt="法力惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>法力惩罚</strong>
    <small>Penalty Mana · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/additional-health" data-card-tile data-card-type="其它" data-card-status="normal" data-card-tier="1" data-card-search="生命增加 3 Health 生命增加 AdditionalHealth AdditionalHealth 其它 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><span class="dq-card-no-art" aria-label="生命增加">
  <span>无原始卡图</span>
</span></span></span>
  <span class="dq-card-copy">
    <strong>生命增加</strong>
    <small>3 Health · 其它 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/additional-exp" data-card-tile data-card-type="其它" data-card-status="normal" data-card-tier="1" data-card-search="经验增加 1 Exp 经验增加 AdditionalExp AdditionalExp 其它 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><span class="dq-card-no-art" aria-label="经验增加">
  <span>无原始卡图</span>
</span></span></span>
  <span class="dq-card-copy">
    <strong>经验增加</strong>
    <small>1 Exp · 其它 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-minus-action" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="行动点减少惩罚 Penalty Minus Action 行动点减少惩罚 PenaltyMinusAction PenaltyMinusAction 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction__531.png" alt="行动点减少惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>行动点减少惩罚</strong>
    <small>Penalty Minus Action · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-minus-action2" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="行动点减少惩罚（2） Penalty Minus Action2 行动点减少惩罚（2） PenaltyMinusAction2 PenaltyMinusAction2 其它 怪物限定 怪物限定来源：Lord of the Dream 最终战机制。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyMinusAction2__225.png" alt="行动点减少惩罚（2）" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>行动点减少惩罚（2）</strong>
    <small>Penalty Minus Action2 · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="怪物限定来源：Lord of the Dream 最终战机制。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/additional-action" data-card-tile data-card-type="其它" data-card-status="normal" data-card-tier="1" data-card-search="行动点增加 1 Action 行动点增加 AdditionalAction AdditionalAction 其它 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><span class="dq-card-no-art" aria-label="行动点增加">
  <span>无原始卡图</span>
</span></span></span>
  <span class="dq-card-copy">
    <strong>行动点增加</strong>
    <small>1 Action · 其它 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/additional-equip-slot" data-card-tile data-card-type="其它" data-card-status="normal" data-card-tier="1" data-card-search="装备槽增加 Equipment Slot 装备槽增加 AdditionalEquipSlot AdditionalEquipSlot 其它 普通 普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。 1 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><span class="dq-card-no-art" aria-label="装备槽增加">
  <span>无原始卡图</span>
</span></span></span>
  <span class="dq-card-copy">
    <strong>装备槽增加</strong>
    <small>Equipment Slot · 其它 · 1 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-normal" title="普通玩家牌；可通过无额外成就条件的卡池、商店/装备、起始牌或常规奖励流程获得。">普通</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/curse" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="诅咒 Curse 诅咒 Curse Curse 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/Curse__692.png" alt="诅咒" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>诅咒</strong>
    <small>Curse · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-curses" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="诅咒惩罚 Penalty Curses 诅咒惩罚 PenaltyCurses PenaltyCurses 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyCurses__360.png" alt="诅咒惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>诅咒惩罚</strong>
    <small>Penalty Curses · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small" href="/cards/penalty-extra-turn" data-card-tile data-card-type="其它" data-card-status="monster" data-card-tier="0" data-card-search="额外回合惩罚 Penalty Extra Turn 额外回合惩罚 PenaltyExtraTurn PenaltyExtraTurn 其它 怪物限定 未解析到普通玩家来源；按怪物或战斗内部限定牌展示。 0 阶 没有规则文本。">
  <span class="dq-card-thumb"><span class="dq-game-card dq-game-card-thumb"><img src="/assets/extracted/textures/by_container/resources/PenaltyExtraTurn__851.png" alt="额外回合惩罚" loading="lazy"></span></span>
  <span class="dq-card-copy">
    <strong>额外回合惩罚</strong>
    <small>Penalty Extra Turn · 其它 · 0 阶</small>
    <span class="dq-status-row"><span class="dq-status-badge dq-status-monster" title="未解析到普通玩家来源；按怪物或战斗内部限定牌展示。">怪物限定</span></span>
    <span>没有规则文本。</span>
  </span>
</a>
</section>
</section>
<p class="dq-card-empty" data-card-empty hidden>没有符合条件的卡牌。</p>
</div>
