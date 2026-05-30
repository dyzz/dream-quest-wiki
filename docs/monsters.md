---
title: "怪物图鉴"
description: "按标签、地形、等级和机制检索 Dream Quest 怪物。"
---


<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const catalog = document.querySelector('[data-monster-catalog]');
  const filter = document.querySelector('[data-monster-filter]');
  if (!catalog || !filter) {
    return;
  }

  const searchInput = filter.querySelector('[data-monster-search-input]');
  const kindFilter = filter.querySelector('[data-monster-kind-filter]');
  const locationFilter = filter.querySelector('[data-monster-location-filter]');
  const levelFilter = filter.querySelector('[data-monster-level-filter]');
  const tagFilter = filter.querySelector('[data-monster-tag-filter]');
  const resetButton = filter.querySelector('[data-monster-filter-reset]');
  const resultCount = filter.querySelector('[data-monster-result-count]');
  const emptyState = catalog.querySelector('[data-monster-empty]');
  const tiles = Array.from(catalog.querySelectorAll('[data-monster-tile]'));

  const normalize = (value) => String(value || '').trim().toLowerCase();
  const splitValues = (value) => String(value || '').split(' ').filter(Boolean);
  const update = () => {
    const query = normalize(searchInput?.value);
    const kindValue = kindFilter?.value || '';
    const locationValue = locationFilter?.value || '';
    const levelValue = levelFilter?.value || '';
    const tagValue = tagFilter?.value || '';
    let visibleTotal = 0;

    for (const tile of tiles) {
      const matchesQuery = !query || normalize(tile.dataset.monsterSearch).includes(query);
      const matchesKind = !kindValue || tile.dataset.monsterKind === kindValue;
      const matchesLocation = !locationValue || splitValues(tile.dataset.monsterLocations).includes(locationValue);
      const matchesLevel = !levelValue || splitValues(tile.dataset.monsterLevels).includes(levelValue);
      const matchesTag = !tagValue || splitValues(tile.dataset.monsterTags).includes(tagValue);
      const visible = matchesQuery && matchesKind && matchesLocation && matchesLevel && matchesTag;
      tile.hidden = !visible;
      visibleTotal += visible ? 1 : 0;
    }

    if (resultCount) {
      resultCount.textContent = String(visibleTotal);
    }
    if (emptyState) {
      emptyState.hidden = visibleTotal !== 0;
    }
  };

  for (const control of [searchInput, kindFilter, locationFilter, levelFilter, tagFilter]) {
    control?.addEventListener('input', update);
    control?.addEventListener('change', update);
  }
  resetButton?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (kindFilter) kindFilter.value = '';
    if (locationFilter) locationFilter.value = '';
    if (levelFilter) levelFilter.value = '';
    if (tagFilter) tagFilter.value = '';
    update();
    searchInput?.focus();
  });

  update();
});
</script>
<section class="dq-page-hero">
  <div>
    <p class="dq-kicker">Monsters</p>
    <h1>怪物图鉴</h1>
    <p class="dq-lede">按地形、等级、Boss、机制和牌组信息检索敌人。点击怪物进入详情页，查看 metadata、技能机制、特殊卡牌、卡组和等级变化。</p>
  </div>
  <span class="dq-count">74 个怪物</span>
</section>

<section class="dq-type-grid dq-monster-stat-grid">
  <span><strong>74</strong><em>全部怪物</em></span>
  <span><strong>55</strong><em>普通怪物</em></span>
  <span><strong>19</strong><em>Boss</em></span>
  <span><strong>72</strong><em>有基础牌组</em></span>
  <span><strong>61</strong><em>有等级变化</em></span>
  <span><strong>50</strong><em>有特殊机制</em></span>
</section>

<section class="dq-card-filter dq-monster-filter" data-monster-filter>
  <div class="dq-filter-bar">
    <label class="dq-filter-field dq-filter-field-search">
      <span>检索</span>
      <input id="dq-monster-search" type="search" autocomplete="off" placeholder="怪物名、地形、卡牌、机制" data-monster-search-input>
    </label>
    <label class="dq-filter-field">
      <span>类型</span>
      <select data-monster-kind-filter>
        <option value="">全部类型</option>
        <option value="normal">普通 · 55</option>
        <option value="boss">Boss · 19</option>
      </select>
    </label>
    <label class="dq-filter-field">
      <span>地形</span>
      <select data-monster-location-filter>
        <option value="">全部地形</option>
        <option value="CRYPT">墓穴 · 25</option>
<option value="DUNGEON">地牢 · 41</option>
<option value="FOREST">森林 · 43</option>
<option value="MOUNTAIN">山脉 · 46</option>
<option value="VOLCANO">火山 · 20</option>
<option value="WATER">水域 · 24</option>
      </select>
    </label>
    <label class="dq-filter-field">
      <span>等级</span>
      <select data-monster-level-filter>
        <option value="">全部等级</option>
        <option value="low">低阶 1-3</option>
        <option value="mid">中阶 4-6</option>
        <option value="high">高阶 7-10</option>
      </select>
    </label>
    <label class="dq-filter-field">
      <span>标签</span>
      <select data-monster-tag-filter>
        <option value="">全部标签</option>
        <option value="behavior">有特殊机制 · 50</option>
<option value="levelup">有等级变化 · 61</option>
<option value="equipment">有起手装备 · 14</option>
<option value="special-cards">有关联卡牌 · 58</option>
<option value="clone">复制牌组 · 1</option>
<option value="final-boss">最终 Boss · 1</option>
      </select>
    </label>
  </div>
  <div class="dq-filter-summary">
    <span><strong data-monster-result-count>74</strong> 个匹配</span>
    <button type="button" data-monster-filter-reset>重置</button>
  </div>
</section>

<section class="dq-card-grid dq-card-grid-compact dq-monster-grid" data-monster-catalog>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/lord-of-the-dream" data-monster-tile data-monster-kind="boss" data-monster-locations="" data-monster-levels="high" data-monster-tags="behavior special-cards final-boss" data-monster-search="梦境之主 Lord of the Dream finalboss 最终 boss bossattr decree gifts choices lordlydecrees">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/FinalBoss__1052.png" alt="梦境之主" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>梦境之主</strong>
    <small>Lord of the Dream · 10 级 · Boss · 最终战</small>
    <span class="dq-mini-tag-row"><em>最终 Boss</em><em>特殊机制</em><em>关联卡牌</em></span>
    <span>FinalBoss 类；详细 BossAttr、王令、贡品和惩罚机制见机制专题。</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/ussuri-tracker" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST MOUNTAIN" data-monster-levels="low mid" data-monster-tags="behavior levelup special-cards" data-monster-search="乌苏里追踪者 乌苏里追踪者 Ussuri Tracker UssuriTracker UssuriTracker Evasive monster.  Does high damage and blocks your first play each turn.     Tips: Play a weak card into her avoid each turn so that you can then play your stronger attacks. The fastest draw in the dream 1-4 级 机制与等级变化 FOREST MOUNTAIN 森林 山脉 特殊机制 等级变化 关联卡牌 Claw Claw Claw Shred Pounce Pounce Player.AddToAttribute add_player_attribute ApplyToPlayer Player.GainCounterFirst gain_counter_first ApplyToPlayer field_write:Monster.0x108 ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/UssuriTracker__935.png" alt="乌苏里追踪者" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>乌苏里追踪者</strong>
    <small>Ussuri Tracker · 1-4 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>The fastest draw in the dream</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/zombie" data-monster-tile data-monster-kind="normal" data-monster-locations="CRYPT DUNGEON FOREST" data-monster-levels="low mid" data-monster-tags="behavior levelup special-cards" data-monster-search="僵尸 僵尸 Zombie Zombie Zombie Poisonous monster.  Special card is Zombie Bite which kills you in a few turns.     Tips: Be prepared to deal enough damage to kill him in 5 turns. Like a toddler: tries to make friends by biting 1-4 级 机制与等级变化 CRYPT DUNGEON FOREST 墓穴 地牢 森林 特殊机制 等级变化 关联卡牌 Infect1 Infect1 Infect1 ZombieBite ZombieBite Monster.Undead mark_undead ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Zombie__906.png" alt="僵尸" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>僵尸</strong>
    <small>Zombie · 1-4 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>墓穴</em>
<em>地牢</em>
<em>森林</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Like a toddler: tries to make friends by biting</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/orc" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON MOUNTAIN VOLCANO" data-monster-levels="low mid" data-monster-tags="levelup equipment special-cards" data-monster-search="兽人 兽人 Orc Orc Orc Brawny monster.  Has minimal defenses, but does reasonable damage with swords.     Tips: Disrupt him if possible.  If he can't use his sword, his damage is minimal. Like goblins.  But with steroids 1-4 级 有等级变化 DUNGEON MOUNTAIN VOLCANO 地牢 山脉 火山 等级变化 起手装备 关联卡牌 Sword Sword Sword Sword Orc.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/orc__948.png" alt="兽人" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>兽人</strong>
    <small>Orc · 1-4 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>山脉</em>
<em>火山</em><em>等级变化</em>
<em>起手装备</em></span>
    <span>Like goblins. But with steroids</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/wyvern" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON FOREST MOUNTAIN" data-monster-levels="low mid" data-monster-tags="levelup special-cards" data-monster-search="双足飞龙 双足飞龙 Wyvern Wyvern Wyvern Poisonous monster.  Has large amounts of poison but no defenses, so take it down quickly.     Tips: Deal lots of damage or use protection against poison. Flies around and stings.  Much like a very large bee 1-4 级 有等级变化 DUNGEON FOREST MOUNTAIN 地牢 森林 山脉 等级变化 关联卡牌 Sting Sting Sting Infect1 Infect1 Infect1 Sting Infect1 Infect2 Sting Wyvern.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Wyvern__669.png" alt="双足飞龙" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>双足飞龙</strong>
    <small>Wyvern · 1-4 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>森林</em>
<em>山脉</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Flies around and stings. Much like a very large bee</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/vampire-bat" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON MOUNTAIN FOREST" data-monster-levels="low mid" data-monster-tags="special-cards" data-monster-search="吸血蝙蝠 吸血蝙蝠 Vampire Bat VampireBat VampireBat Weak monster.  Special card is Vampire Bite which allows him to heal a small amount.     Tips: Be ready for the heal, but otherwise not particularly dangerous. Wishes it could be a real vampire 1-4 级 基础资料 DUNGEON MOUNTAIN FOREST 地牢 山脉 森林 关联卡牌 VampireBite VampireBite VampireBite VampireBite VampireBite VampireBat.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/VampireBat__787.png" alt="吸血蝙蝠" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>吸血蝙蝠</strong>
    <small>Vampire Bat · 1-4 级 · 普通 · 基础资料</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>山脉</em>
<em>森林</em><em>关联卡牌</em></span>
    <span>Wishes it could be a real vampire</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/goblin" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON MOUNTAIN" data-monster-levels="low mid" data-monster-tags="levelup special-cards" data-monster-search="地精 地精 Goblin Goblin Goblin Weak monster.  Special card is a Goblin Ally, an equipment that will hurt you each turn.     Tips: Very weak, so kill them when you need a level up or to reset cooldowns. Goblins never travel alone 1-4 级 有等级变化 DUNGEON MOUNTAIN 地牢 山脉 等级变化 关联卡牌 GoblinAlly GoblinAlly GoblinAlly Goblin.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Goblin__562.png" alt="地精" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>地精</strong>
    <small>Goblin · 1-4 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>山脉</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Goblins never travel alone</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/pixie" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST DUNGEON MOUNTAIN" data-monster-levels="low mid" data-monster-tags="behavior levelup" data-monster-search="小妖精 小妖精 Pixie Pixie Pixie Magical monster.  Does enormous damage but has low health.     Tips: Kill her very quickly or she can deal massive damage. Generates 3 mana each turn 1-4 级 机制与等级变化 FOREST DUNGEON MOUNTAIN 森林 地牢 山脉 特殊机制 等级变化 Explosion Fireball Fireball Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Pixie__602.png" alt="小妖精" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>小妖精</strong>
    <small>Pixie · 1-4 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>地牢</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Generates 3 mana each turn</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/giant-spider" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST CRYPT" data-monster-levels="low mid" data-monster-tags="levelup special-cards" data-monster-search="巨蛛 巨蛛 Giant Spider GiantSpider GiantSpider Poisonous monster.  Has a mix of poison and defense.  His web makes you lose an action as well as a card, so be careful what you discard.     Tips: Be aware of your number of actions, but kill him before the poison is too much. Traps flies.  Spins webs.  Some spider 1-4 级 有等级变化 FOREST CRYPT 森林 墓穴 等级变化 关联卡牌 Sting Sting Sting Web Web Web Sting Web Sting Web Web2 GiantSpider.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GiantSpider__757.png" alt="巨蛛" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>巨蛛</strong>
    <small>Giant Spider · 1-4 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>墓穴</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Traps flies. Spins webs. Some spider</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/warrior" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN" data-monster-levels="low mid high" data-monster-tags="levelup equipment special-cards" data-monster-search="战士 战士 Warrior Warrior Warrior Brawny monster.  Has high health and does reasonable damage, especially at high levels.     Tips: Be prepared to handle physical damage and wear him down. Always a bully.  And you can't stand bullies 1-10 级 有等级变化 DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN 地牢 水域 火山 森林 墓穴 山脉 等级变化 起手装备 关联卡牌 Shield Hamstring Gag Sword Scimitars Shield Sword SunderingStrike Armor Armor BattleCry Crush Disorient Gag Hamstring Overpower Pierce2 Pierce3 Riposte Scimitars Shield ShieldBash SunderingStrike Sword Warrior.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Warrior__308.png" alt="战士" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>战士</strong>
    <small>Warrior · 1-10 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>火山</em><em>等级变化</em>
<em>起手装备</em></span>
    <span>Always a bully. And you can't stand bullies</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/mage" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN" data-monster-levels="low mid high" data-monster-tags="behavior levelup equipment special-cards" data-monster-search="法师 法师 Mage Mage Mage Magical monster.  Deals enormous amounts of damage, but has low health.     Tips: Kill him as fast as possible.  If he gets even one turn, he can do a ton of damage, particularly at high levels. A conjuror of cheap tricks.  And fireballs 1-10 级 有等级变化 DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN 地牢 水域 火山 森林 墓穴 山脉 特殊机制 等级变化 起手装备 关联卡牌 FlameCharge FlameCharge FrostCharge FrostCharge Fireball FrostBolt Staff JasrasTome FrostBolt Blizzard Blur Conflagration FireShape Fireball FlameCharge Freeze FrostBolt FrostCharge Inspiration JasrasEmerald JasrasTome ManaSurge ManaSwell Meteor Staff Mage.ManaGain set_mana_gain_by_level ManaGain Mage.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/mage__1017.png" alt="法师" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>法师</strong>
    <small>Mage · 1-10 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>A conjuror of cheap tricks. And fireballs</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/disciple-of-chaos" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON VOLCANO MOUNTAIN" data-monster-levels="low mid" data-monster-tags="special-cards" data-monster-search="混沌门徒 混沌门徒 Disciple of Chaos DiscipleOfChaos DiscipleOfChaos Random monster.  Damage is random and has a special card which has random effects.  Tends to damage himself.     Tips: Play defense and let him take care of himself. Insane devotee of a dark god 1-4 级 基础资料 DUNGEON VOLCANO MOUNTAIN 地牢 火山 山脉 关联卡牌 ChaosPrayer ChaosPrayer ChaosPrayer ChaosStrike ChaosStrike ChaosStrike ChaosStrike ChaosStrike ChaosStrike ChaosStrike ChaosPrayer ChaosStrike DiscipleOfChaos.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/DiscipleOfChaos__719.png" alt="混沌门徒" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>混沌门徒</strong>
    <small>Disciple of Chaos · 1-4 级 · 普通 · 基础资料</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>火山</em>
<em>山脉</em><em>关联卡牌</em></span>
    <span>Insane devotee of a dark god</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/priest" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN" data-monster-levels="low mid high" data-monster-tags="levelup equipment special-cards" data-monster-search="牧师 牧师 Priest Priest Priest Defensive monster.  Has large amounts of healing and shielding, biding time for his prayers to kill you     Tips: Outdamage his defenses.  At high levels, be aware of the second life from his Phoenix Feather and plan accordingly. Hears voices.  They tell him to kill.  To kill you. 1-10 级 有等级变化 DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN 地牢 水域 火山 森林 墓穴 山脉 等级变化 起手装备 关联卡牌 Salve Salve Heal PrayerOfViolence PhoenixFeather Pendant PrayerOfViolence PrayerOfWrath CurseOfDoomPlayer Ward AbsorbVis Bless CurseOfDoomPlayer CurseOfWeakness Extract Focus Haste Heal Inspiration Mahamat ManaSurge Penance Pendant PhoenixFeather Piety PrayerOfLife PrayerOfSpeed PrayerOfViolence PrayerOfWrath Salve Soulfire Ward Priest.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Priest__471.png" alt="牧师" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>牧师</strong>
    <small>Priest · 1-10 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>火山</em><em>等级变化</em>
<em>起手装备</em></span>
    <span>Hears voices. They tell him to kill. To kill you.</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/kobold" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON MOUNTAIN" data-monster-levels="low mid" data-monster-tags="special-cards" data-monster-search="狗头人 狗头人 Kobold Kobold Kobold Weak monster.  Special card is Cower which lets him avoid damage from a single source.     Tips: Play something weak to check for Cower before you go for the kill. Goblins use them like miners use canaries: if the kobolds start dropping, there must be adventurers about 1-4 级 基础资料 DUNGEON MOUNTAIN 地牢 山脉 关联卡牌 Cower Cower Cower Cower Cower Kobold.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Kobold__878.png" alt="狗头人" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>狗头人</strong>
    <small>Kobold · 1-4 级 · 普通 · 基础资料</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>山脉</em><em>关联卡牌</em></span>
    <span>Goblins use them like miners use canaries: if the kobolds start dropping, there m…</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/griffon" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST CRYPT" data-monster-levels="low mid" data-monster-tags="special-cards" data-monster-search="狮鹫 狮鹫 Griffon Griffon Griffon Defensive monster.  Special card is Fly which makes him invulnerable for a turn.     Tips: Take advantage of the turn you can't damage him to sculpt a strong hand to finish him off once he lands. Not a mount 1-4 级 基础资料 FOREST CRYPT 森林 墓穴 关联卡牌 Fly Fly Fly Fly Griffon.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Griffon__850.png" alt="狮鹫" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>狮鹫</strong>
    <small>Griffon · 1-4 级 · 普通 · 基础资料</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>墓穴</em><em>关联卡牌</em></span>
    <span>Not a mount</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/thief" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN" data-monster-levels="low mid high" data-monster-tags="levelup equipment special-cards" data-monster-search="盗贼 盗贼 Thief Thief Thief Aggressive monster.  Deals high damage, mostly in small pieces.     Tips: Kill him quickly or disrupt his combo, either with discard or reaction cards. A fellow adventurer who really, really doesn't like to share 1-10 级 有等级变化 DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN 地牢 水域 火山 森林 墓穴 山脉 等级变化 起手装备 关联卡牌 Slice Slice Dice Circle CloakOfInvisibility BootsOfSpeed Slice Circle Accelerate Backstab BootsOfSpeed Circle CloakOfInvisibility Dice Expose Hide Jab Preparation Slice Thief.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/thief__265.png" alt="盗贼" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>盗贼</strong>
    <small>Thief · 1-10 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>火山</em><em>等级变化</em>
<em>起手装备</em></span>
    <span>A fellow adventurer who really, really doesn't like to share</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/ooze" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST CRYPT" data-monster-levels="low mid" data-monster-tags="behavior special-cards" data-monster-search="软泥怪 软泥怪 Ooze Ooze Ooze Disruptive monster.  Eats cards from your hand and regenerates health each turn.     Tips: Don't rely on just a single card and make sure you can outdamage his healing. Hungry for new friends 1-4 级 有机制 FOREST CRYPT 森林 墓穴 特殊机制 关联卡牌 Digest Digest Digest Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Ooze__143.png" alt="软泥怪" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>软泥怪</strong>
    <small>Ooze · 1-4 级 · 普通 · 有机制</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>墓穴</em><em>特殊机制</em>
<em>关联卡牌</em></span>
    <span>Hungry for new friends</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/akami-shaman" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST WATER MOUNTAIN" data-monster-levels="low mid" data-monster-tags="levelup equipment special-cards" data-monster-search="阿卡米萨满 阿卡米萨满 Akami Shaman AkamiShaman AkamiShaman Magical monster.  Special card is Mana Totem which generates additional mana for him each turn.     Tips: Kill him quickly before the mana totem gets out of hand. The lizard wizard 1-4 级 有等级变化 FOREST WATER MOUNTAIN 森林 水域 山脉 等级变化 起手装备 关联卡牌 ManaTotem Fireball Fireball Mana2 Mana2 Mana2 Mana2 Slow Slow ManaTotem Fireball FlameCharge Mana2 ManaTotem Salve Slow Solidify AkamiShaman.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AkamiShaman__639.png" alt="阿卡米萨满" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>阿卡米萨满</strong>
    <small>Akami Shaman · 1-4 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>水域</em>
<em>山脉</em><em>等级变化</em>
<em>起手装备</em></span>
    <span>The lizard wizard</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/piranha" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST CRYPT" data-monster-levels="low mid" data-monster-tags="levelup special-cards" data-monster-search="食人鱼 食人鱼 Piranha Piranha Piranha Aggressive monster.  Deals massive, stacking damage.     Tips: Kill him very quickly before his damage scales out of control. Never, never lets you go 1-4 级 有等级变化 FOREST CRYPT 森林 墓穴 等级变化 关联卡牌 SharkBite Thrash SharkBite SharkBite Thrash Piranha.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Piranha__454.png" alt="食人鱼" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>食人鱼</strong>
    <small>Piranha · 1-4 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>墓穴</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Never, never lets you go</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/skeleton" data-monster-tile data-monster-kind="normal" data-monster-locations="CRYPT DUNGEON" data-monster-levels="low mid" data-monster-tags="behavior levelup special-cards" data-monster-search="骷髅 骷髅 Skeleton Skeleton Skeleton Weak monster.  Special card is Bone Shield which blocks a small amount of damage.     Tips: Deal steady damage and then take him out when the shield is down. Bony and proud of it 1-4 级 机制与等级变化 CRYPT DUNGEON 墓穴 地牢 特殊机制 等级变化 关联卡牌 BoneShield BoneShield BoneShield2 BoneShield Monster.Undead mark_undead ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Skeleton__339.png" alt="骷髅" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>骷髅</strong>
    <small>Skeleton · 1-4 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>墓穴</em>
<em>地牢</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Bony and proud of it</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/goblin-hoarder" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON MOUNTAIN" data-monster-levels="low mid" data-monster-tags="behavior levelup special-cards" data-monster-search="地精囤积者 地精囤积者 Goblin Hoarder GoblinHoarder GoblinHoarder Cowardly monster.  Uses Cower and other defensive cards to try to run away.  Carries significant gold.     Tips: Don't let him get away! A goblin and his treasure are rarely parted 3-6 级 机制与等级变化 DUNGEON MOUNTAIN 地牢 山脉 特殊机制 等级变化 关联卡牌 Cower Cower Cower Cower Hide Cower Game.get_them StartTurnAfterPoison Game.get_winner StartTurnAfterPoison Game.get_them StartTurnAfterPoison Player.Escape escape StartTurnAfterPoison">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GoblinHoarder__73.png" alt="地精囤积者" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>地精囤积者</strong>
    <small>Goblin Hoarder · 3-6 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>A goblin and his treasure are rarely parted</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/ussuri-war-queen" data-monster-tile data-monster-kind="boss" data-monster-locations="FOREST MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="乌苏里战争女王 乌苏里战争女王 Ussuri War Queen UssuriWarQueen UssuriWarQueen Evasive boss.  Blocks some of the cards you play each turn.     Tips: Play weak cards into her blocks.  Her deck is much weaker the second time through once she spends her Pounces, so take advantage of that. She rules the leap, the pride, and the streak 4-7 级 机制与等级变化 FOREST MOUNTAIN 森林 山脉 特殊机制 等级变化 关联卡牌 Claw Claw Claw Shred Pounce Pounce Player.AddToAttribute add_player_attribute ApplyToPlayer Player.GainCounterFirst gain_counter_first ApplyToPlayer field_write:Monster.0x108 ApplyToPlayer field_write:Monster.0x108 ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Player.GainCounterFirst gain_counter_first ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/UssuriWarQueen__585.png" alt="乌苏里战争女王" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>乌苏里战争女王</strong>
    <small>Ussuri War Queen · 4-7 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>She rules the leap, the pride, and the streak</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/ussuri-hunter" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior levelup" data-monster-search="乌苏里猎手 乌苏里猎手 Ussuri Hunter UssuriHunter UssuriHunter Evasive monster.  Restricts the amount of time you have for each turn and blocks your first play.     Tips: Ten seconds is more time than it seems, so play smart even if it takes a little longer. Limits your turns to 10 seconds 4-7 级 机制与等级变化 FOREST MOUNTAIN 森林 山脉 特殊机制 等级变化 Claw Claw Claw Shred Pounce Player.AddToAttribute add_player_attribute ApplyToPlayer Player.GainCounterFirst gain_counter_first ApplyToPlayer field_write:Monster.0x108 ApplyToPlayer Game.OtherPlayer ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/UssuriHunter__189.png" alt="乌苏里猎手" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>乌苏里猎手</strong>
    <small>Ussuri Hunter · 4-7 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Limits your turns to 10 seconds</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/gelatinous-cube" data-monster-tile data-monster-kind="boss" data-monster-locations="DUNGEON WATER CRYPT" data-monster-levels="mid high" data-monster-tags="levelup special-cards" data-monster-search="凝胶方块 凝胶方块 Gelatinous Cube GelatinousCube GelatinousCube Disruptive boss.  Eats some of the cards you play to give him additional health.     Tips:  Restrict yourself to your strongest cards.  His damage is generally not very high, so defensive cards are fairly effective.  Recurring sources of damage like equipment are also very powerful. Eats everything.  Including you. 4-7 级 有等级变化 DUNGEON WATER CRYPT 地牢 水域 墓穴 等级变化 关联卡牌 Slurp Slurp Slurp Resilience Engulf Resilience Slurp GelatinousCube.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GelatinousCube__260.png" alt="凝胶方块" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>凝胶方块</strong>
    <small>Gelatinous Cube · 4-7 级 · Boss · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>墓穴</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Eats everything. Including you.</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/vampire" data-monster-tile data-monster-kind="boss" data-monster-locations="DUNGEON CRYPT" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="吸血鬼 吸血鬼 Vampire Vampire Vampire Disruptive boss.  &lt;Immune to Earth damage.&gt;  Steals your cards to use against you and has a small amount of healing.     Tips: Fight through the healing and use recurring damage like prayers or equipment to get around his Enthrall cards. Not at all sparkly 4-7 级 机制与等级变化 DUNGEON CRYPT 地牢 墓穴 特殊机制 等级变化 关联卡牌 VampireBite VampireBite VampireBite VampireBite VampireBite Enthrall Enthrall Enthrall Monster.Undead mark_undead ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Vampire__442.png" alt="吸血鬼" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>吸血鬼</strong>
    <small>Vampire · 4-7 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>墓穴</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Not at all sparkly</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/goblin-mechanist" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior special-cards" data-monster-search="地精机械师 地精机械师 Goblin Mechanist GoblinMechanist GoblinMechanist Random monster.  Copies all your equipment and builds very powerful equipment each turn.  Except when he blows himself up.     Tips: Unequip any equipment that you can't handle and be careful about what you play.  Get damage in early. Copies equipment you play 4-7 级 有机制 DUNGEON MOUNTAIN 地牢 山脉 特殊机制 关联卡牌 GoblinAlly GoblinAlly Player.AddToAttribute add_player_attribute ApplyToPlayer Game.OtherPlayer ApplyToPlayer Player.get_globals ApplyToPlayer VirtualObject.Children ApplyToPlayer Player.CreateEquipment create_equipment ApplyToPlayer Game.get_them StartTurn Card.IsPhysical StartTurn GamePhysical.AddToVisualStackNoYield visual_stack StartTurn Game.InGameRandomRange random_range StartTurn GoblinMechanist.BuildRandomEquipment build_random_equipment StartTurn Card.IsPhysical StartTurn GamePhysical.AddToVisualStackNoYield visual_stack StartTurn GamePhysical.DelayedEndTurn delayed_end_turn StartTurn GamePhysical.AddToVisualStackNoYield visual_stack StartTurn Player.TakeDamage take_damage StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GoblinMechanist__137.png" alt="地精机械师" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>地精机械师</strong>
    <small>Goblin Mechanist · 4-7 级 · 普通 · 有机制</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>山脉</em><em>特殊机制</em>
<em>关联卡牌</em></span>
    <span>Copies equipment you play</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/goblin-king" data-monster-tile data-monster-kind="boss" data-monster-locations="DUNGEON MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="地精王 地精王 Goblin King GoblinKing GoblinKing Brawny boss.  Summons Goblin minions each turn that deal damage.  At higher levels can draw extra cards from his minions.     Tips: Kill him before he has too many minions or reduce his physical damage. Goblins and explosives: a dangerous combination 4-7 级 机制与等级变化 DUNGEON MOUNTAIN 地牢 山脉 特殊机制 等级变化 关联卡牌 GoblinBomb GoblinBomb GoblinBomb GoblinLackey GoblinLackey Game.get_them StartTurn Game.get_them StartTurn Player.DrawExNihil draw_from_void StartTurn Game.get_them StartTurn Player.DrawExNihil draw_from_void StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GoblinKing__969.png" alt="地精王" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>地精王</strong>
    <small>Goblin King · 4-7 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Goblins and explosives: a dangerous combination</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/siren" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST MOUNTAIN" data-monster-levels="mid high" data-monster-tags="levelup special-cards" data-monster-search="塞壬 塞壬 Siren Siren Siren Disruptive monster.  Her special card, Beckon, exiles cards from your hand.  Also has healing and protective spells.     Tips: Make sure your strategy works even without particular cards.  She has low damage, so you have time to set up with things like poison or equipment. Thinks you'd make a wonderful special friend 4-7 级 有等级变化 FOREST MOUNTAIN 森林 山脉 等级变化 关联卡牌 Beckon Beckon Salve Salve Ward Heal Beckon Beckon Bless Heal Salve Ward Siren.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Siren__598.png" alt="塞壬" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>塞壬</strong>
    <small>Siren · 4-7 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>山脉</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Thinks you'd make a wonderful special friend</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/clone" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior clone" data-monster-search="复制体 复制体 Clone Clone Clone You.  In disguise.  Plays exactly the same deck as you with high health and good starting mana.     Tips: Break the symmetry with equipped equipment or your special combat abilities. Clone 4-7 级 复制牌组 DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN 地牢 水域 火山 森林 墓穴 山脉 特殊机制 复制牌组 Clone.CloneDeck clone_player_deck CloneDeck">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/clone__158.png" alt="复制体" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>复制体</strong>
    <small>Clone · 4-7 级 · 普通 · 复制牌组</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>火山</em><em>特殊机制</em>
<em>复制牌组</em></span>
    <span>Clone</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/faerie-rogue" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST DUNGEON MOUNTAIN" data-monster-levels="mid high" data-monster-tags="special-cards" data-monster-search="妖精游荡者 妖精游荡者 Faerie Rogue FaerieRogue FaerieRogue Disruptive monster.  Very strong against action and attack cards, using Disorient to hit you with your own actions and Riposte to negate your attacks.     Tips: Bait the reaction cards using your weaker attacks and actions first, then finish him with your more powerful cards. Has a tiny sword, but really knows how to use it 4-7 级 基础资料 FOREST DUNGEON MOUNTAIN 森林 地牢 山脉 关联卡牌 Riposte Riposte Riposte Disorient Disorient Disorient Riposte FaerieRogue.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/FaerieRogue__913.png" alt="妖精游荡者" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>妖精游荡者</strong>
    <small>Faerie Rogue · 4-7 级 · 普通 · 基础资料</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>地牢</em>
<em>山脉</em><em>关联卡牌</em></span>
    <span>Has a tiny sword, but really knows how to use it</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/brownie" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST DUNGEON MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior" data-monster-search="家精 家精 Brownie Brownie Brownie Disruptive monster.  Very high dodge chance and has Counterspell which negates your spells     Tips: Use powerful action cards.  If you use spells, use your least powerful and cheaper ones first, then your stronger ones. Normally peaceful, but you're in the way of her cleaning 4-7 级 有机制 FOREST DUNGEON MOUNTAIN 森林 地牢 山脉 特殊机制 SpriteStab SpriteStab SpriteStab Counterspell Counterspell Player.GainDodge gain_dodge ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Brownie__93.png" alt="家精" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>家精</strong>
    <small>Brownie · 4-7 级 · 普通 · 有机制</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>地牢</em>
<em>山脉</em><em>特殊机制</em></span>
    <span>Normally peaceful, but you're in the way of her cleaning</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/troll" data-monster-tile data-monster-kind="normal" data-monster-locations="MOUNTAIN FOREST VOLCANO" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="巨魔 巨魔 Troll Troll Troll Defensive monster.  Regenerates health each turn.  Deals damage based on his current health.     Tips: Deal as much damage as early as possible to reduce the impact of Slam. Doesn't like you tromping around 4-7 级 机制与等级变化 MOUNTAIN FOREST VOLCANO 山脉 森林 火山 特殊机制 等级变化 关联卡牌 Slam Slam Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Troll__64.png" alt="巨魔" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>巨魔</strong>
    <small>Troll · 4-7 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em>
<em>森林</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Doesn't like you tromping around</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/giant-shark" data-monster-tile data-monster-kind="boss" data-monster-locations="WATER" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="巨鲨 巨鲨 Giant Shark GiantShark GiantShark Aggressive boss.  Does enormous damage which stacks over time.     Tips: He has no disruption, so deal as much damage as you can, as quickly as you can. Immune to nose punching 4-10 级 机制与等级变化 WATER 水域 特殊机制 等级变化 关联卡牌 SharkBite SharkBite Thrash Thrash SharkBite SharkBite2 Player.MindImmune mind_immune ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GiantShark__781.png" alt="巨鲨" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>巨鲨</strong>
    <small>Giant Shark · 4-10 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>水域</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Immune to nose punching</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/genie" data-monster-tile data-monster-kind="boss" data-monster-locations="MOUNTAIN WATER VOLCANO" data-monster-levels="mid high" data-monster-tags="levelup special-cards" data-monster-search="灯神 灯神 Genie Genie Genie Magical boss.  Has shielding effects and allows you to choose various dooms.     Tips: Try to pick the least damaging Wishes you can.  Things involving cards and curses are particularly dangerous, so choose them only as a last resort. Will give you three wishes.  And you'll like it. 4-7 级 有等级变化 MOUNTAIN WATER VOLCANO 山脉 水域 火山 等级变化 关联卡牌 BadWishes BadWishes Mana2 ManaSurge Haste Ward Wisdom BadWishes BadWishes2 BadWishes BadWishes2 Haste Mana2 ManaSurge Shock Soulfire VaporForm Ward Wisdom Genie.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Genie__354.png" alt="灯神" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>灯神</strong>
    <small>Genie · 4-7 级 · Boss · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em>
<em>水域</em>
<em>火山</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Will give you three wishes. And you'll like it.</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/magmadon" data-monster-tile data-monster-kind="boss" data-monster-locations="VOLCANO" data-monster-levels="mid high" data-monster-tags="behavior levelup equipment special-cards" data-monster-search="熔岩巨兽 熔岩巨兽 Magmadon Magmadon Magmadon Aggressive boss.  &lt;Immune to Fire damage.&gt;  Deals damage to you for each card you play.  Burns you, dealing damage each turn.     Tips: Use only your strongest cards and carefully judge how many resources you need. Evolved to overcome a meteor 4-10 级 机制与等级变化 VOLCANO 火山 特殊机制 等级变化 起手装备 关联卡牌 Burn Burn Burn Armor Burn Burn2 Player.SuperFireShield super_fireshield ApplyToPlayer Player.SuperFireShield super_fireshield ApplyToPlayer Player.SuperFireShield super_fireshield ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Magmadon__110.png" alt="熔岩巨兽" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>熔岩巨兽</strong>
    <small>Magmadon · 4-10 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Evolved to overcome a meteor</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/unicorn" data-monster-tile data-monster-kind="boss" data-monster-locations="FOREST" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="独角兽 独角兽 Unicorn Unicorn Unicorn Defensive boss.  Regenerates life each turn.     Tips: Recurring damage, particularly poison is good since her offense is weak.  Alternatively, high burst damage gets around the problem of her regeneration. You're not really her type 4-7 级 机制与等级变化 FOREST 森林 特殊机制 等级变化 关联卡牌 Gore Gore Dodge Gore Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Unicorn__302.png" alt="独角兽" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>独角兽</strong>
    <small>Unicorn · 4-7 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>You're not really her type</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/stone-golem" data-monster-tile data-monster-kind="normal" data-monster-locations="MOUNTAIN FOREST VOLCANO" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="石魔像 石魔像 Stone Golem StoneGolem StoneGolem Defensive monster.  &lt;Resists elemental damage.&gt;  Has slam which deal damage based on his current health.     Tips: Deal large amounts of physical damage early to reduce the effect of his Slams. Common weapon in mage's duels.  Often the only survivor. 4-7 级 机制与等级变化 MOUNTAIN FOREST VOLCANO 山脉 森林 火山 特殊机制 等级变化 关联卡牌 Slam Crush Armor Player.ElementalResist elemental_resist ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/StoneGolem__806.png" alt="石魔像" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>石魔像</strong>
    <small>Stone Golem · 4-7 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em>
<em>森林</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Common weapon in mage's duels. Often the only survivor.</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/cumulo-nimbus" data-monster-tile data-monster-kind="boss" data-monster-locations="MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="积雨云 积雨云 Cumulo Nimbus CumuloNimbus CumuloNimbus Defensive boss.  &lt;Resistant to physical damage.&gt;  Immune to Air damage.  Frequently drains your mana and actions, but otherwise has low damage.     Tips: Have non-physical damage sources and spend your mana as quickly as you can. Full of hot air 4-7 级 机制与等级变化 MOUNTAIN 山脉 特殊机制 等级变化 关联卡牌 Zap Zap LightningStrike Zap Player.AddToAttribute add_player_attribute ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/CumuloNimbus__278.png" alt="积雨云" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>积雨云</strong>
    <small>Cumulo Nimbus · 4-7 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Full of hot air</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/medusa" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST DUNGEON MOUNTAIN" data-monster-levels="mid high" data-monster-tags="levelup special-cards" data-monster-search="美杜莎 美杜莎 Medusa Medusa Medusa Disruptive monster.  Adds curses to your deck and then deals damage to you based on the number of curses in your hand.     Tips: Either be prepared to kill her quickly or use card filtering abilities like Inner Peace to handle the curses. Tends a stone garden in her spare time 4-7 级 有等级变化 FOREST DUNGEON MOUNTAIN 森林 地牢 山脉 等级变化 关联卡牌 Stone Stone Stone Stone Gaze Gaze Stone Gaze Stone Stoneskin Medusa.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Medusa__837.png" alt="美杜莎" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>美杜莎</strong>
    <small>Medusa · 4-7 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>地牢</em>
<em>山脉</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Tends a stone garden in her spare time</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/akami-ascendent" data-monster-tile data-monster-kind="boss" data-monster-locations="FOREST WATER MOUNTAIN" data-monster-levels="mid high" data-monster-tags="levelup equipment special-cards" data-monster-search="阿卡米升华者 阿卡米升华者 Akami Ascendant AkamiAscendent AkamiAscendent Magical boss.  Relies on totems to give him mana, draw him cards, and deal damage.  Has some disruptive cards and excellent damage if left unchecked.     Tips: Kill him quickly before the totems become a problem. It's not easy being green 4-7 级 有等级变化 FOREST WATER MOUNTAIN 森林 水域 山脉 等级变化 起手装备 关联卡牌 ManaTotem HasteTotem ShockTotem ThunderStorm ThunderStorm Slow Slow Mana3 Mana3 Mana3 ManaTotem HasteTotem ShockTotem Electrocute Haste HasteTotem Mana3 ManaSurge ManaTotem Overload Shock ShockTotem Slow Solidify StormShape ThunderStorm AkamiAscendent.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AkamiAscendent__678.png" alt="阿卡米升华者" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>阿卡米升华者</strong>
    <small>Akami Ascendant · 4-7 级 · Boss · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>水域</em>
<em>山脉</em><em>等级变化</em>
<em>起手装备</em></span>
    <span>It's not easy being green</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/akami-stormcaller" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST WATER MOUNTAIN" data-monster-levels="mid high" data-monster-tags="levelup equipment special-cards" data-monster-search="阿卡米唤雷者 阿卡米唤雷者 Akami Stormcaller AkamiStormcaller AkamiStormcaller Aggressive monster.  Has a Haste Totem which lets him draw increasing numbers of cards each turn.     Tips: Much of his damage comes from different sources, so chill and damage reduction are particularly effective. Master of green lightning. 4-7 级 有等级变化 FOREST WATER MOUNTAIN 森林 水域 山脉 等级变化 起手装备 关联卡牌 HasteTotem StormStab StormStab Dice HasteTotem Dice HasteTotem StormStab AkamiStormcaller.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AkamiStormcaller__964.png" alt="阿卡米唤雷者" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>阿卡米唤雷者</strong>
    <small>Akami Stormcaller · 4-7 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>水域</em>
<em>山脉</em><em>等级变化</em>
<em>起手装备</em></span>
    <span>Master of green lightning.</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/akami-muckcaller" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST WATER MOUNTAIN" data-monster-levels="mid high" data-monster-tags="levelup equipment special-cards" data-monster-search="阿卡米污泥召唤者 阿卡米污泥召唤者 Akami Muckcaller AkamiMuckcaller AkamiMuckcaller Magical monster.  Has a Shock Totem which deals increasing amounts of damage.  Uses spells to make you discard cards and lose actions.     Tips: Kill him quickly or remove the totem. Not very quick.  Uses magic to bring everyone else to his level 4-7 级 有等级变化 FOREST WATER MOUNTAIN 森林 水域 山脉 等级变化 起手装备 关联卡牌 ShockTotem Slow ManaSurge ManaSurge Shock Blizzard FrostBolt ShockTotem Blizzard FrostBolt FrostCharge ManaSurge Shock ShockTotem Slow Solidify AkamiMuckcaller.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AkamiMuckcaller__925.png" alt="阿卡米污泥召唤者" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>阿卡米污泥召唤者</strong>
    <small>Akami Muckcaller · 4-7 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>水域</em>
<em>山脉</em><em>等级变化</em>
<em>起手装备</em></span>
    <span>Not very quick. Uses magic to bring everyone else to his level</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/ghoul" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior levelup" data-monster-search="食尸鬼 食尸鬼 Ghoul Ghoul Ghoul Aggressive monster.  Completely invincible, but loses a card in hand each turn until he dies.     Tips: Focus entirely on defense, particularly in the first couple of turns.  Consider holding your non-stacking defensive cards rather than replacing them with damaging cards. Invulnerable but decaying 4-7 级 机制与等级变化 FOREST MOUNTAIN 森林 山脉 特殊机制 等级变化 Ravage Ravage Player.CompleteInvulnerable complete_invulnerable ApplyToPlayer Player.ZombieBite zombie_bite ApplyToPlayer Monster.Undead mark_undead ApplyToPlayer Game.get_them EndTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Ghoul__847.png" alt="食尸鬼" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>食尸鬼</strong>
    <small>Ghoul · 4-7 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Invulnerable but decaying</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/harpy" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON FOREST MOUNTAIN" data-monster-levels="mid high" data-monster-tags="special-cards" data-monster-search="鹰身女妖 鹰身女妖 Harpy Harpy Harpy Poisonous monster.  Has Screech which negates spells and high poison damage.     Tips: Bait the Screech with a weak spell and kill her before the poison becomes too much. Vile in manner and odor 4-7 级 基础资料 DUNGEON FOREST MOUNTAIN 地牢 森林 山脉 关联卡牌 Sting Sting Sting Sting Screech Screech Disorient Disorient Disorient Infect2 Infect2 Infect2 Sting Disorient Infect2 Screech Sting Harpy.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/harpy__986.png" alt="鹰身女妖" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>鹰身女妖</strong>
    <small>Harpy · 4-7 级 · 普通 · 基础资料</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>森林</em>
<em>山脉</em><em>关联卡牌</em></span>
    <span>Vile in manner and odor</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/mime" data-monster-tile data-monster-kind="boss" data-monster-locations="DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN" data-monster-levels="mid high" data-monster-tags="levelup special-cards" data-monster-search="默剧演员 默剧演员 Mime Mime Mime Mimicking boss.  Copies many of the cards you play at random.     Tips: Reenact has a fairly high chance to occur, so try to bait it with your weaker cards.  Try to set up strong recurring damage, particularly from equipment. Silent but deadly 4-7 级 有等级变化 DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN 地牢 水域 火山 森林 墓穴 山脉 等级变化 关联卡牌 Reenact Reenact Reenact Reenact Reenact VampireSword Reenact Disorient Reenact VampireSword Mime.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/mime__57.png" alt="默剧演员" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>默剧演员</strong>
    <small>Mime · 4-7 级 · Boss · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>火山</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>Silent but deadly</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/ussuri-trickster" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior levelup" data-monster-search="乌苏里伏击者 乌苏里伏击者 Ussuri Ambusher UssuriTrickster UssuriTrickster Invisible monster.  Jumps on you when you least expect it and then takes the first turn.  Blocks your first card each turn.     Tips: Don't explore at low health if possible.  In combat, reduce her physical damage and play weaker cards first. Always takes the first turn 5-7 级 机制与等级变化 FOREST MOUNTAIN 森林 山脉 特殊机制 等级变化 Claw Claw Claw Shred Pounce Player.AddToAttribute add_player_attribute ApplyToPlayer Player.GainCounterFirst gain_counter_first ApplyToPlayer field_write:Monster.0x108 ApplyToPlayer Game.set_activePlayer set_active_player ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/UssuriTrickster__199.png" alt="乌苏里伏击者" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>乌苏里伏击者</strong>
    <small>Ussuri Ambusher · 5-7 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Always takes the first turn</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/water-elemental" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON WATER" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="冰霜元素 冰霜元素 Water Elemental WaterElemental WaterElemental Disruptive monster.  &lt;Immune to Water damage,&gt; weak to Fire damage.  Reduces your hand size over time and makes you discard.     Tips: Recurring damage sources work well since his damage is low.  Otherwise, high burst at the start is your best chance. Tried to drown the whole world 5-10 级 机制与等级变化 DUNGEON WATER 地牢 水域 特殊机制 等级变化 关联卡牌 Suffocate FrostSlash1 FrostSlash1 FrostSlash1 FrostSlash1 FrostSlash1 FrostBolt FrostBolt ManaSurge ManaSurge Suffocate Player.AddToAttribute add_player_attribute ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Game.OtherPlayer ApplyToPlayer Game.OtherPlayer ApplyToPlayer Game.get_them StartTurn Player.AddToAttribute add_player_attribute StartTurn Player.get_monsterCounter StartTurn Player.SetAttribute set_player_attribute StartTurn Game.OtherPlayer StartTurn Player.LoseMaxCard lose_max_cards StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/WaterElemental__648.png" alt="冰霜元素" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>冰霜元素</strong>
    <small>Water Elemental · 5-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Tried to drown the whole world</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/banshee" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON FOREST CRYPT" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="女妖 女妖 Banshee Banshee Banshee Defensive monster.  Resists physical damage.  Makes you discard cards and drains your life to heal her.     Tips: Be prepared for her physical resistance and use elemental damage cards or cards that do more than 1 physical damage. Her talent feeds her darker side 5-7 级 机制与等级变化 DUNGEON FOREST CRYPT 地牢 森林 墓穴 特殊机制 等级变化 关联卡牌 Scream Scream Scream DrainLife DrainLife Scream Monster.Undead mark_undead ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Banshee__732.png" alt="女妖" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>女妖</strong>
    <small>Banshee · 5-7 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>森林</em>
<em>墓穴</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Her talent feeds her darker side</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/ghost" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST DUNGEON CRYPT" data-monster-levels="mid high" data-monster-tags="behavior levelup equipment" data-monster-search="幽灵 幽灵 Ghost Ghost Ghost Invisible monster. &lt;Resists physical damage,&gt;  Drains your health each turn and blocks some of your card plays.     Tips: Be careful when you are exploring and make sure you have non-physical damage.  Kill him quickly before the health drain becomes overwhelming. Spooky soul-sucking sheet 5-10 级 机制与等级变化 FOREST DUNGEON CRYPT 森林 地牢 墓穴 特殊机制 等级变化 起手装备 Hide Hide CloakOfInvisibility Monster.Undead mark_undead ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Game.get_them StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Ghost__382.png" alt="幽灵" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>幽灵</strong>
    <small>Ghost · 5-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>地牢</em>
<em>墓穴</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Spooky soul-sucking sheet</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/wraith" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST MOUNTAIN" data-monster-levels="mid high" data-monster-tags="behavior levelup" data-monster-search="怨魂 怨魂 Wraith Wraith Wraith Disruptive monster.  &lt;Resists physical damage.&gt;  His special card, Soul Crush, is blocked by most defensive abilities, so try to maintain a defense as much as possible.     Tips: Soul Crush is always played first, so use whatever you can to block it.  Armor is particularly effective. Disembodied soul 
 Feels angry, lost, and alone 
 Wants to eat your face 5-7 级 机制与等级变化 FOREST MOUNTAIN 森林 山脉 特殊机制 等级变化 SoulCrush SoulCrush Player.AddToAttribute add_player_attribute ApplyToPlayer Monster.Undead mark_undead ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Wraith__773.png" alt="怨魂" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>怨魂</strong>
    <small>Wraith · 5-7 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Disembodied soul Feels angry, lost, and alone Wants to eat your face</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/mimic-monster" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN" data-monster-levels="mid high" data-monster-tags="levelup special-cards" data-monster-search="拟态怪 拟态怪 Mimic MimicMonster MimicMonster Aggressive monster.  Very frail, but throws coins to deal significant damage.  The longer you can hold out, though, the more gold you get!      Tips: Don't be greedy! The chest bites you 5-10 级 有等级变化 DUNGEON WATER VOLCANO FOREST CRYPT MOUNTAIN 地牢 水域 火山 森林 墓穴 山脉 等级变化 关联卡牌 CoinToss CoinToss CoinToss CoinToss CoinToss MimicAction MimicAction CoinToss CoinToss MimicAction MimicAction2 MimicMonster.PythonBuildAttributes behavior_encoded_in_deck PythonBuildAttributes">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/MimicMonster__105.png" alt="拟态怪" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>拟态怪</strong>
    <small>Mimic · 5-10 级 · 普通 · 有等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>火山</em><em>等级变化</em>
<em>关联卡牌</em></span>
    <span>The chest bites you</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/earth-elemental" data-monster-tile data-monster-kind="normal" data-monster-locations="CRYPT FOREST" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="毒性元素 毒性元素 Earth Elemental EarthElemental EarthElemental Poisonous monster.  &lt;Immune to Earth damage,&gt; weak to Air damage.  Poisons you each turn for a significant amount.     Tips: He has limited defense, so try to mitigate the poison damage or just kill him before it's too much of a problem. Was a rock, back before the accident 5-10 级 机制与等级变化 CRYPT FOREST 墓穴 森林 特殊机制 等级变化 关联卡牌 Infect1 Infect1 Infect1 Infect1 Infect1 Infect1 EarthShape EarthShape ManaSurge ManaSurge Infect3 Infect3 Infect2 Infect1 Infect1 Player.AddToAttribute add_player_attribute ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Game.get_them StartTurn Game.OtherPlayer StartTurn Player.BePoisoned poison StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/EarthElemental__974.png" alt="毒性元素" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>毒性元素</strong>
    <small>Earth Elemental · 5-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>墓穴</em>
<em>森林</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Was a rock, back before the accident</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/fire-elemental" data-monster-tile data-monster-kind="normal" data-monster-locations="VOLCANO DUNGEON" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="火元素 火元素 Fire Elemental FireElemental FireElemental Aggressive monster.  &lt;Immune to Fire damage,&gt; weak to Water damage.  Deals large amounts of fire damage and, at later levels, burns you each turn     Tips: Kill him before his burning can overwhelm you. Helpful at barbeques 5-10 级 机制与等级变化 VOLCANO DUNGEON 火山 地牢 特殊机制 等级变化 关联卡牌 FlameStrike FlameSlash1 FlameSlash1 FlameSlash1 FireShape FireShape ManaSurge ManaSurge FlameStrike Player.AddToAttribute add_player_attribute ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Game.get_them StartTurn Game.OtherPlayer StartTurn Player.Burning burning StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/FireElemental__932.png" alt="火元素" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>火元素</strong>
    <small>Fire Elemental · 5-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>火山</em>
<em>地牢</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Helpful at barbeques</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/air-elemental" data-monster-tile data-monster-kind="normal" data-monster-locations="MOUNTAIN DUNGEON" data-monster-levels="mid high" data-monster-tags="behavior levelup special-cards" data-monster-search="风元素 风元素 Air Elemental AirElemental AirElemental Aggressive monster.  &lt;Immune to Air damage,&gt; weak to Earth damage.  Draws extra cards each turn, more as the fight goes on.     Tips: Kill him or reduce his damage before his extra cards overwhelm you. A tempest that is never shaken 5-10 级 机制与等级变化 MOUNTAIN DUNGEON 山脉 地牢 特殊机制 等级变化 关联卡牌 LightningStrike StormSlash1 StormSlash1 StormSlash1 StormSlash1 StormSlash1 Shock Shock ManaSurge ManaSurge LightningStrike Player.AddToAttribute add_player_attribute ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer field_write:Monster.0x114 ApplyToPlayer Game.get_them StartTurn field_write:Monster.0x114 StartTurn Player.AddToAttribute add_player_attribute StartTurn field_write:Monster.0x114 StartTurn Player.get_monsterCounter StartTurn Player.Draw draw_cards StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/AirElemental__821.png" alt="风元素" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>风元素</strong>
    <small>Air Elemental · 5-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em>
<em>地牢</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>A tempest that is never shaken</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/wisp" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST CRYPT WATER" data-monster-levels="mid high" data-monster-tags="behavior levelup" data-monster-search="鬼火 鬼火 Wisp Wisp Wisp Magical monster.  &lt;Physical immune.&gt;  Deals damage equal to his mana with Discharge, so be prepared for large damage early in the fight.     Tips: Have non-physical damage or wait for his discharge to take him down. Light in the wild 
 Flickering radiantly 
 Follow to your doom 5-7 级 机制与等级变化 FOREST CRYPT WATER 森林 墓穴 水域 特殊机制 等级变化 Mana3 Mana3 Mana3 Shock Shock Discharge Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Wisp__474.png" alt="鬼火" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>鬼火</strong>
    <small>Wisp · 5-7 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>墓穴</em>
<em>水域</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Light in the wild Flickering radiantly Follow to your doom</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/hydra" data-monster-tile data-monster-kind="boss" data-monster-locations="DUNGEON FOREST WATER" data-monster-levels="high" data-monster-tags="behavior levelup" data-monster-search="九头蛇 九头蛇 Hydra Hydra Hydra Aggressive boss.  Deals large amounts of damage each turn and heals any non-Earth or Fire damage completely each turn.     Tips: Dealing damage forces it to discard cards which buys you time to either deal fire or earth damage or to set up a single big turn to finish it. Hydra 7-10 级 有机制 DUNGEON FOREST WATER 地牢 森林 水域 特殊机制 等级变化 Player.Hydra hydra ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Hydra__589.png" alt="九头蛇" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>九头蛇</strong>
    <small>Hydra · 7-10 级 · Boss · 有机制</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>森林</em>
<em>水域</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Hydra</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/revenant" data-monster-tile data-monster-kind="normal" data-monster-locations="CRYPT DUNGEON" data-monster-levels="high" data-monster-tags="behavior" data-monster-search="亡魂 亡魂 Revenant Revenant Revenant Defensive monster.  When he dies, he returns much more powerful.     Tips: Take advantage of his weak first form to set up and sculpt a perfect hand.  He is invincible the first turn he transitions, but afterwards unload with your best cards. Returns after his first death 7-10 级 有机制 CRYPT DUNGEON 墓穴 地牢 特殊机制 VampireBite2 VampireBite2 DrainLife DrainLife Monster.Undead mark_undead ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Player.SetAttribute set_player_attribute RevenantEffect Player.SetAttribute set_player_attribute RevenantEffect Player.SetAttribute set_player_attribute RevenantEffect Player.SetAttribute set_player_attribute RevenantEffect Player.get_deck RevenantEffect Deck.AddCardToDeck add_card_to_deck RevenantEffect Player.get_deck RevenantEffect Deck.AddCardToDeck add_card_to_deck RevenantEffect Player.get_deck RevenantEffect Deck.AddCardToDeck add_card_to_deck RevenantEffect Player.CleanseCurses cleanse_curses RevenantEffect Player.get_deck RevenantEffect Deck.Shuffle shuffle_deck RevenantEffect Player.Draw draw_cards RevenantEffect Player.Invulnerable invulnerable RevenantEffect Player.MindImmune mind_immune RevenantEffect">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Revenant__776.png" alt="亡魂" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>亡魂</strong>
    <small>Revenant · 7-10 级 · 普通 · 有机制</small>
    <span class="dq-mini-tag-row"><em>墓穴</em>
<em>地牢</em><em>特殊机制</em></span>
    <span>Returns after his first death</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/efreet" data-monster-tile data-monster-kind="normal" data-monster-locations="CRYPT DUNGEON" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="伊弗利特 伊弗利特 Efreet Efreet Efreet Aggressive monster.  Makes both players draw 3 additional cards each turn.     Tips: Use the extra cards to kill him as fast as possible before his burning damage is able to kill you. Both players draw 3 cards at the start of their turn 7-10 级 机制与等级变化 CRYPT DUNGEON 墓穴 地牢 特殊机制 等级变化 关联卡牌 Scorch Scorch Burn2 Burn2 Burn2 Burn2 Player.Draw draw_cards StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Efreet__114.png" alt="伊弗利特" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>伊弗利特</strong>
    <small>Efreet · 7-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>墓穴</em>
<em>地牢</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Both players draw 3 cards at the start of their turn</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/ice-queen" data-monster-tile data-monster-kind="boss" data-monster-locations="FOREST WATER MOUNTAIN" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="冰雪女王 冰雪女王 Ice Queen IceQueen IceQueen Disruptive boss.  &lt;Immune to Water damage.&gt; Reduces your hand size and has defensive spells and reasonable damage.     Tips: Early on, try to end the fight as quickly as possible.  On the third floor, consider taking the Smart talent at level 10 to counteract her aura. For destruction ice is also great 7-10 级 机制与等级变化 FOREST WATER MOUNTAIN 森林 水域 山脉 特殊机制 等级变化 关联卡牌 FrostShape FrostShape FrostShape Player.AddToAttribute add_player_attribute ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Game.OtherPlayer ApplyToPlayer Game.OtherPlayer ApplyToPlayer Game.OtherPlayer ApplyToPlayer Game.OtherPlayer ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/IceQueen__115.png" alt="冰雪女王" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>冰雪女王</strong>
    <small>Ice Queen · 7-10 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>水域</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>For destruction ice is also great</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/phoenix" data-monster-tile data-monster-kind="boss" data-monster-locations="MOUNTAIN VOLCANO" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="凤凰 凤凰 Phoenix Phoenix Phoenix Aggressive boss.  &lt;Immune to Fire damage.&gt;  When it dies, it transforms into an egg which must be defeated the same turn.     Tips: Save your damage for the turn you defeat the phoenix so that you can take out the egg before the bird returns. Unending firebird 7-10 级 机制与等级变化 MOUNTAIN VOLCANO 山脉 火山 特殊机制 等级变化 关联卡牌 FlameSlash2 FlameSlash2 FlameSlash2 FlameSlash2 Burn Burn Burn Burn2 Phoenix.PhoenixAttributes phoenix_attributes ApplyToPlayer field_write:Monster.0x114 ApplyToPlayer Phoenix.ToEgg phoenix_to_egg RevenantEffect Game.get_them StartTurn Player.get_revenant StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Phoenix__444.png" alt="凤凰" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>凤凰</strong>
    <small>Phoenix · 7-10 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Unending firebird</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/lich" data-monster-tile data-monster-kind="boss" data-monster-locations="CRYPT" data-monster-levels="high" data-monster-tags="behavior levelup equipment special-cards" data-monster-search="巫妖 巫妖 Lich Lich Lich Magical boss.  &lt;Immune to Earth damage.&gt;  Is unkillable while his Phylactery is in play.  Uses Dark Mending to deal damage based on his missing health.     Tips: Take out his Phylactery.  Don't leave him at low health or else Dark Mending will kill you; either wait for it to be played, or sculpt a strong hand to kill him in a single turn. Heart was two sizes too small.  Made it easy to fit in a jar. 7-10 级 机制与等级变化 CRYPT 墓穴 特殊机制 等级变化 起手装备 关联卡牌 Phylactery Mana2 Mana2 Mana2 Fireball Fireball Fireball Wisdom Wisdom Staff DarkMending Phylactery Fireball Monster.Undead mark_undead ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Lich__1030.png" alt="巫妖" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>巫妖</strong>
    <small>Lich · 7-10 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>墓穴</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Heart was two sizes too small. Made it easy to fit in a jar.</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/demon" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON CRYPT VOLCANO" data-monster-levels="high" data-monster-tags="behavior levelup" data-monster-search="恶魔 恶魔 Demon Demon Demon Disruptive monster.  Fills your deck with curses at the start of the fight.     Tips: Synergistic strategies are weak to the demon.  Decks with very powerful individual cards tend to do much better. Stuck at 665 victims 7-10 级 机制与等级变化 DUNGEON CRYPT VOLCANO 地牢 墓穴 火山 特殊机制 等级变化 Corrupt Corrupt Corrupt Game.OtherPlayer ApplyToPlayer Player.get_mindImmune ApplyToPlayer Deck.PutOnTop put_card_on_top_of_deck ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Demon__527.png" alt="恶魔" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>恶魔</strong>
    <small>Demon · 7-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>墓穴</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Stuck at 665 victims</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/sphinx" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON WATER MOUNTAIN" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="斯芬克斯 斯芬克斯 Sphinx Sphinx Sphinx Disruptive monster.  Forbids the card type that is most common in your hand each turn.  Ties are broken by changing type.     Tips: Hold cards in hand that are not your most common type so that you can function.  Use Teach to get card types that are uncommon in your deck. Forbids most common card type in your hand 7-10 级 有机制 DUNGEON WATER MOUNTAIN 地牢 水域 山脉 特殊机制 等级变化 关联卡牌 Teach Teach Teach Teach ManaSurge ManaSurge Fireball Fireball Penance Penance Teach Teach Penance field_write:Monster.0x118 ApplyToPlayer Game.get_me StartTurn Game.get_me StartTurn Player.get_hand StartTurn VirtualObject.Children StartTurn Game.DestroyTopMessage destroy_top_message StartTurn Card.get_player ForbidPlay Game.get_them ForbidPlay Sphinx.ForbidPlay forbid_play_card_type ForbidPlay">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Sphinx__709.png" alt="斯芬克斯" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>斯芬克斯</strong>
    <small>Sphinx · 7-10 级 · 普通 · 有机制</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>山脉</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Forbids most common card type in your hand</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/treant" data-monster-tile data-monster-kind="normal" data-monster-locations="FOREST WATER" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="树人 树人 Treant Treant Treant Defensive monster.  &lt;Permanently resilient.&gt;  Does reasonable, stacking physical damage.     Tips: Make sure you can either deal piercing damage or lots of small damage pieces.  His damage is fairly low, so defensive strategies are most effective. You snap twigs, he breaks bones 7-10 级 有机制 FOREST WATER 森林 水域 特殊机制 等级变化 关联卡牌 HardeningSap Entangle Entangle Stoneskin HardeningSap Entangle Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Treant__320.png" alt="树人" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>树人</strong>
    <small>Treant · 7-10 级 · 普通 · 有机制</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>水域</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>You snap twigs, he breaks bones</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/titan" data-monster-tile data-monster-kind="boss" data-monster-locations="MOUNTAIN VOLCANO" data-monster-levels="high" data-monster-tags="behavior levelup equipment" data-monster-search="泰坦 泰坦 Titan Titan Titan Brawny boss.  &lt;Immune to Air damage.&gt;  Has high health, damage, strong equipment, and reduces your number of actions.     Tips: Make sure you have enough actions.  Piercing damage and equipment destruction are particularly effective. God of storms.  Not chained to a rock. 7-10 级 机制与等级变化 MOUNTAIN VOLCANO 山脉 火山 特殊机制 等级变化 起手装备 Slam Slam Slam StormBlade StormBlade Resilience Resilience Armor StormBlade CelestialPlate Player.AddToAttribute add_player_attribute ApplyToPlayer Game.OtherPlayer ApplyToPlayer Player.LoseMaxAction lose_max_actions ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Titan__872.png" alt="泰坦" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>泰坦</strong>
    <small>Titan · 7-10 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>God of storms. Not chained to a rock.</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/giant-squid" data-monster-tile data-monster-kind="boss" data-monster-locations="FOREST WATER MOUNTAIN" data-monster-levels="high" data-monster-tags="behavior special-cards" data-monster-search="海怪 海怪 Kraken GiantSquid GiantSquid Disruptive boss.  Reduces your maximum hand size and also uses Ink Spray to limit your number of cards per turn.     Tips: Only play cards you need to.  Card drawing effects are particularly bad, but the Kraken's damage is fairly low. Devourer of ships, oceanfront property, and adventurers 7-10 级 有机制 FOREST WATER MOUNTAIN 森林 水域 山脉 特殊机制 关联卡牌 Entrap Entrap Game.get_me StartTurn Game.get_them StartTurn Player.DrawExNihil draw_from_void StartTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/GiantSquid__893.png" alt="海怪" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>海怪</strong>
    <small>Kraken · 7-10 级 · Boss · 有机制</small>
    <span class="dq-mini-tag-row"><em>森林</em>
<em>水域</em>
<em>山脉</em><em>特殊机制</em>
<em>关联卡牌</em></span>
    <span>Devourer of ships, oceanfront property, and adventurers</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/white-dragon" data-monster-tile data-monster-kind="normal" data-monster-locations="WATER DUNGEON" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="白龙 白龙 White Dragon WhiteDragon WhiteDragon Disruptive monster.  &lt;Immune to Water damage.&gt;  Reduces your number of cards in hand by one and makes you discard frequently.      Tips: Watch out for his Frost Shield which reflects some damage and make sure your deck is consistent enough to survive a smaller hand. You have -1 card in hand 7-10 级 机制与等级变化 WATER DUNGEON 水域 地牢 特殊机制 等级变化 关联卡牌 DragonsWisdom FrostShape DragonsBite FrostBreath FrostBreath DragonScales DragonScales FrostBreath DragonScales2 DragonScales Player.AddToAttribute add_player_attribute ApplyToPlayer Game.OtherPlayer ApplyToPlayer Game.OtherPlayer ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/WhiteDragon__490.png" alt="白龙" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>白龙</strong>
    <small>White Dragon · 7-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>水域</em>
<em>地牢</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>You have -1 card in hand</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/red-dragon" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON VOLCANO" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="红龙 红龙 Red Dragon RedDragon RedDragon Brawny monster. &lt;Immune to Fire damage.&gt;  Has high health, good damage, and some disruption.      Tips: Save your physical damage for when he doesn't have damage reduction.  Otherwise, straightforward but powerful. Enforcer of the ancient law: no two people are not on fire 7-10 级 机制与等级变化 DUNGEON VOLCANO 地牢 火山 特殊机制 等级变化 关联卡牌 DragonsClaw2 DragonsClaw2 DragonsClaw2 DragonsClaw2 DragonsBite DragonsBite FlameBreath FlameBreath DragonScales DragonScales DragonsRoar FlameBreath DragonScales Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/RedDragon__271.png" alt="红龙" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>红龙</strong>
    <small>Red Dragon · 7-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Enforcer of the ancient law: no two people are not on fire</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/hag" data-monster-tile data-monster-kind="normal" data-monster-locations="CRYPT DUNGEON" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="老巫婆 老巫婆 Hag Hag Hag Disruptive monster.  She replaces several cards in your hand with curses and uses Curse of Doom to kill you slowly.     Tips: She has limited defenses, so kill her as quickly as possible before your deck becomes badly diluted. Her house has chicken feet 7-10 级 机制与等级变化 CRYPT DUNGEON 墓穴 地牢 特殊机制 等级变化 关联卡牌 CurseOfDoom DeadlyCurse DeadlyCurse DeadlyCurse CurseOfDoom CurseOfDoom2 DeadlyCurse Player.MindImmune mind_immune ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/Hag__799.png" alt="老巫婆" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>老巫婆</strong>
    <small>Hag · 7-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>墓穴</em>
<em>地牢</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Her house has chicken feet</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/hand-of-glory" data-monster-tile data-monster-kind="normal" data-monster-locations="CRYPT MOUNTAIN WATER" data-monster-levels="high" data-monster-tags="behavior levelup" data-monster-search="荣耀之手 荣耀之手 Hand of Glory HandOfGlory HandOfGlory Disruptive monster.  &lt;Physical and Elemental Resistant.&gt;  Makes you damage yourself every other turn.     Tips: Minimize the damage you deal to yourself while under Dance Puppets.  Saving some of your weakest cards, for example, can save your life. Every other turn causes you to dance, damaging yourself 7-10 级 机制与等级变化 CRYPT MOUNTAIN WATER 墓穴 山脉 水域 特殊机制 等级变化 Resilience Monster.Undead mark_undead ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Player.ElementalResist elemental_resist ApplyToPlayer Player.AddToAttribute add_player_attribute ApplyToPlayer Game.get_them EndTurn Player.AddToAttribute add_player_attribute EndTurn Player.get_monsterCounter EndTurn Player.SetAttribute set_player_attribute EndTurn Player.Enemy EndTurn EffectPlayerAttribute.TickEndTurn tick_effect_end_turn EndTurn">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/HandOfGlory__226.png" alt="荣耀之手" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>荣耀之手</strong>
    <small>Hand of Glory · 7-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>墓穴</em>
<em>山脉</em>
<em>水域</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Every other turn causes you to dance, damaging yourself</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/chromatic-demon" data-monster-tile data-monster-kind="boss" data-monster-locations="DUNGEON WATER VOLCANO FOREST MOUNTAIN" data-monster-levels="high" data-monster-tags="behavior levelup" data-monster-search="虹彩恶魔 虹彩恶魔 Chromatic Demon ChromaticDemon ChromaticDemon Defensive boss.  &lt;Resistant to elemental damage.&gt;  Plays a large variety of elemental cards     Tips: Watch his mana and be careful not to die to Electrocute.  Otherwise, protect yourself from elemental damage and try to deal mostly physical. Elemental, my dear adventurer 7-10 级 机制与等级变化 DUNGEON WATER VOLCANO FOREST MOUNTAIN 地牢 水域 火山 森林 山脉 特殊机制 等级变化 FlameCharge FrostCharge VileCharge StaticCharge Fireball FrostBolt Shock AcidLance EarthShape FrostShape FireShape StormShape FlameSlash1 FrostSlash1 StormSlash1 CorrosiveSlash1 Player.ElementalResist elemental_resist ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/ChromaticDemon__891.png" alt="虹彩恶魔" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>虹彩恶魔</strong>
    <small>Chromatic Demon · 7-10 级 · Boss · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>水域</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Elemental, my dear adventurer</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/storm-giant" data-monster-tile data-monster-kind="normal" data-monster-locations="MOUNTAIN VOLCANO" data-monster-levels="high" data-monster-tags="behavior levelup equipment" data-monster-search="风暴巨人 风暴巨人 Storm Giant StormGiant StormGiant Brawny monster.  Has significant armor, health, and solid damage.  Not at all disruptive, but all-around powerful.     Tips: Tests the strength of your deck.  If you can take out his equipment, he is much weaker.  Alternatively, deal damage early to weaken his Slams. Walks loudly and carries a big stick 7-10 级 机制与等级变化 MOUNTAIN VOLCANO 山脉 火山 特殊机制 等级变化 起手装备 Slam StormBlade Resilience Resilience CelestialPlate StormBlade CelestialPlate Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/StormGiant__211.png" alt="风暴巨人" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>风暴巨人</strong>
    <small>Storm Giant · 7-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em>
<em>火山</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Walks loudly and carries a big stick</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/yellow-dragon" data-monster-tile data-monster-kind="normal" data-monster-locations="MOUNTAIN DUNGEON" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="黄龙 黄龙 Yellow Dragon YellowDragon YellowDragon Disruptive monster.  &lt;Immune to Air damage.&gt;  Reduces your number of actions and drains your starting mana.     Tips: Make sure you can generate mana and have enough actions.  Drains your mana periodically, so spend it as you have it.  Or don't use mana or actions and just kill him with attack cards. You have -1 action
You start with no mana 7-10 级 机制与等级变化 MOUNTAIN DUNGEON 山脉 地牢 特殊机制 等级变化 关联卡牌 DragonsWisdom StormShape DragonsBite LightningBreath LightningBreath DragonsTail DragonScales LightningBreath DragonScales2 DragonScales Player.AddToAttribute add_player_attribute ApplyToPlayer Game.OtherPlayer ApplyToPlayer Player.LoseMaxAction lose_max_actions ApplyToPlayer Game.OtherPlayer ApplyToPlayer Player.SetMana set_mana ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/YellowDragon__83.png" alt="黄龙" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>黄龙</strong>
    <small>Yellow Dragon · 7-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>山脉</em>
<em>地牢</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>You have -1 action You start with no mana</span>
  </span>
</a>
<a class="dq-card-tile dq-card-tile-small dq-monster-tile" href="/monsters/black-dragon" data-monster-tile data-monster-kind="normal" data-monster-locations="DUNGEON FOREST" data-monster-levels="high" data-monster-tags="behavior levelup special-cards" data-monster-search="影龙 影龙 Shadow Dragon BlackDragon BlackDragon Invisible monster.  &lt;Immune to Earth damage.&gt;  Does enormous poison damage and attacks when you are unprepared.      Tips: Don't explore unless you need to or are ready for him.  Kill him as quickly as possible if you can't negate his poison damage. Surprisingly sneaky for something so large 8-10 级 机制与等级变化 DUNGEON FOREST 地牢 森林 特殊机制 等级变化 关联卡牌 Infect3 Infect3 Infect3 Infect3 Infect3 Infect3 AcidBreath AcidBreath AcidBreath DragonScales DragonsRoar DragonsRoar DragonsRoar AcidBreath DragonScales2 DragonScales Player.AddToAttribute add_player_attribute ApplyToPlayer">
  <span class="dq-monster-thumb"><img src="/assets/extracted/textures/by_container/resources/BlackDragon__674.png" alt="影龙" loading="lazy"></span>
  <span class="dq-card-copy">
    <strong>影龙</strong>
    <small>Shadow Dragon · 8-10 级 · 普通 · 机制与等级变化</small>
    <span class="dq-mini-tag-row"><em>地牢</em>
<em>森林</em><em>特殊机制</em>
<em>等级变化</em></span>
    <span>Surprisingly sneaky for something so large</span>
  </span>
</a>
<p class="dq-card-empty" data-monster-empty hidden>没有符合条件的怪物。</p>
</section>
