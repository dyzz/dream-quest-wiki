# 职业与技能全量目录

来源：[professions.json](../../extracted/structured/professions.json)、[profession_skills.json](../../extracted/structured/profession_skills.json)、[profession_skill_runtime_accuracy_gaps.json](../../extracted/structured/profession_skill_runtime_accuracy_gaps.json)。

当前共有 16 个职业、37 个 combat ability、33 个 dungeon action、43 个 DungeonTalent。所有条目都保留 source method 或 handler 证据，但 cooldown、targeting、TalentBase 学习 UI 和 original replay 仍有独立队列。

## 职业

### Assassin

<img src="../../extracted/textures/by_container/resources/ProfessionAssassin__873.png" alt="Assassin" width="72">

- 内部类：`ProfessionAssassin`
- 能力：Channel:  Whenever the assassin plays an action card, she gains 2 mana.
- 初始属性：health 15, mana 1, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Slice, Slice, Blur
- 英雄名：Tanya, the Vicious, Rachel, the Subtle, Ona, the Sly
- 相关 ID：CombatAbilityVanish, StormSlash, FrostSlash, FlameSlash, CorrosiveSlash

Cursed from birth with unnatural sorcery, assassins are often exiled in childhood.  Forced to the streets to fend for themselves, they develop a unique fighting style that blends grace with magic unburdened by morality.  Now grown, they serve as the great equalizers, plying their deadly trade without regard for station or standing.

### Bard

<img src="../../extracted/textures/by_container/resources/ProfessionBard__392.png" alt="Bard" width="72">

- 内部类：`ProfessionBard`
- 能力：Sing: The bard learns songs, each of which may be used every three combats and has a temporary effect.
- 初始属性：health 15, mana 2, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, JasrasJarringJolt, Slash, Mana1, Slice, PrayerOfViolence
- 英雄名：Meredith, the Melodious, Sophia, the Siren, Christine, the Clarion
- 相关 ID：CombatAbilityDistract

Once upon a time, bards were wandering musicians, minstrels playing for an evening meal.  But no longer.  Bards are wizards with swords, fighters with spells.  Bards can master every trick, learn every move, and do it all with grace and style.  Quick, clever, strong, and still a wild hit at parties, today's bard is the ultimate adventurer.

### Chaos Mage

<img src="../../extracted/textures/by_container/resources/ProfessionChaosMage__858.png" alt="Chaos Mage" width="72">

- 内部类：`ProfessionChaosMage`
- 能力：Wild Shape:  Every three combats, the Chaos Mage can randomly replace a monster.
- 初始属性：health 15, mana 2, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, JasrasJarringJolt, Mana1, Mana1, WildStrike1
- 英雄名：Dean, the Dynamic, Malcom, the Mad, Wolfric, the Wild
- 相关 ID：CombatAbilityWildPower, CombatAbilityTotalFocus

There once was a young man who learned a very simple spell.  He would conjure a little light and it would keep him warm and safe.  Then one day his little spell summoned a dragon instead who promptly devoured him.  Life as a chaos mage is unpredictable and short, but never, ever boring.

### Dragon

<img src="../../extracted/textures/by_container/resources/ProfessionDragon__827.png" alt="Dragon" width="72">

- 内部类：`ProfessionDragon`
- 能力：Devour: Every three combats the dragon may devour a non-boss creature, gaining experience as well as other benefits. &lt;br&gt; Hoard: The dragon may spend gold to increase the size of its hoard, gaining draconic abilities in the process.
- 初始属性：health 15, mana 0, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, DragonsClaw1, DragonsClaw1, DragonsBite
- 英雄名：Archaex, Salazaar, Pygmalion
- 相关 ID：DragonsClaw

Merciless.  Beautiful.  Wise.  Cruel.  Ancient beyond human imagining, dragons care little for the lesser races.  Driven by unfathomable goals, these timeless champions swiftly deal with any opposition.

### Druid

<img src="../../extracted/textures/by_container/resources/ProfessionDruid__901.png" alt="Druid" width="72">

- 内部类：`ProfessionDruid`
- 能力：Shapeshifting: After each combat, the druid alternates forms between human and wolf.  In human form, her deck has no attack cards while as a wolf she has neither mana nor spell cards.
- 初始属性：health 15, mana 2, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Rake, Attack1, Mana1, Mana1, Mana1, SummonCompanions, SummonCompanions
- 英雄名：Nala, the Wild, Sarah Stormborn, Ferala
- 相关 ID：CombatAbilitySummonAllies, CombatAbilitySummonBear

An avatar of nature, the druid wields a mercurial magic.  She can summon raging tempests, command feral hordes, and rend even the stoutest armor with her own claws.  But such great power carries an equal cost: frequent, bloody accidents leave druids outcast from civilized society.

### Monk

<img src="../../extracted/textures/by_container/resources/ProfessionMonk__394.png" alt="Monk" width="72">

- 内部类：`ProfessionMonk`
- 能力：Meditate:  Every four combats the monk may enter a deep trance which allows him to forget one of his cards.
- 初始属性：health 15, mana 0, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Slice, Mana1, Heal
- 英雄名：Phillip, the Pure, Gregory, the Glorious, Allen, the Anointed
- 相关 ID：

Followers of a secret order, monks devote their lives to mastering their bodies.  Through perfect control of the physical, they seek communion with the divine.  While their combat abilities and healing spells make them fantastic allies in combat, many adventurers secretly prefer monk companions for their vow of poverty.

### Necromancer

<img src="../../extracted/textures/by_container/resources/ProfessionNecromancer__950.png" alt="Necromancer" width="72">

- 内部类：`ProfessionNecromancer`
- 能力：Portal: Every three combats, the necromancer may open a gate at a monster's location, swapping places with it.
- 初始属性：health 15, mana 2, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Mana1, Mana1, SiphonLife, SoulSiphon
- 英雄名：Jeremy, Lord of Death, Robert, the Cursed, Daniel, the Dark
- 相关 ID：CombatAbilityBoneShield, CombatAbilityLifeTap, SiphonLife3

Masters of life and death, necromancers epitomize magical study.  By fusing the divine and the arcane, these practitioners have developed mastery over their own mortality.  No longer destined to die, they live out their long existences in solitude, the vampirism that feeds their eternal life making them unwelcome in civilized society.  Well, either the vampirism or the everpresent carrion odor.

### Paladin

<img src="../../extracted/textures/by_container/resources/ProfessionPaladin__149.png" alt="Paladin" width="72">

- 内部类：`ProfessionPaladin`
- 能力：Holy War: Every two combats, the paladin automatically upgrades an attack card in her deck.
- 初始属性：health 15, mana 0, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, HolyStrike1, PrayerOfLife
- 英雄名：Lily, the Righteous, Sabina, the Defiant, Avril, the Triumphant
- 相关 ID：CombatAbilityClingingLight, CombatAbilityWholeBody, Salve3

Crusaders and champions of justice, paladins combine an affinity for swordplay with potent healing spells.  Welcome allies on the battlefield, these warriors of the light never stay still.  Some suggest it is their desire to purge evil; most believe their constant moral criticism prevent them from finding a home.

### Priest

<img src="../../extracted/textures/by_container/resources/ProfessionPriest__153.png" alt="Priest" width="72">

- 内部类：`ProfessionPriest`
- 能力：Oracle:  Every two combats the priest can use his magic to reveal a tile and the eight squares around it.
- 初始属性：health 15, mana 2, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Mana1, Orison, PrayerOfViolence
- 英雄名：Bennedict, the Cruel, Maximus, the Pious, Anthony, the Annointed
- 相关 ID：CombatAbilityBurningLight, CombatAbilityDesperatePrayer, CombatAbilityStudy

Spiritual guides.  Teachers.  Scholars.  Priests are the heart of the adventuring party.  Versatile spellcasters equally comfortable with healing the sick, protecting the weak, and burning the heretical, priests are not to be trifled with.

### Professor

<img src="../../extracted/textures/by_container/resources/ProfessionProfessor__195.png" alt="Professor" width="72">

- 内部类：`ProfessionProfessor`
- 能力：Research:  In combat the professor may search his opponent's deck for a card to place in his hand and permanently add to his deck.
- 初始属性：health 15, mana 0, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1
- 英雄名：Christopher, the Curious, Patrick, the Profound, Kevin, the Clever
- 相关 ID：CombatAbilityTutor

Some come to the dungeon in search of power.  Some in search of fame.  Most in search of wealth.  The professor's motivations are equally simple: he comes to study the wildlife.  A fascination with nature in all its bizarre forms has led him to forsake hearth and home to explore this dangerous frontier.

### Random

<img src="../../extracted/textures/by_container/resources/ProfessionRandom__468.png" alt="Random" width="72">

- 内部类：`ProfessionRandom`
- 能力：Your adventurer will be from a class chosen at random from among your unlocked professions that can earn achievements.
- 初始属性：health 15, mana 2, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Mana1, Orison, PrayerOfViolence
- 英雄名：
- 相关 ID：

Not all adventurers are decisive.  Some are as fickle and capricious as the gods, their passions shifting with the tides.  These wild souls inexorably find themselves drawn here, gleefully pledging their lives to the whims of Fate.

### Ranger

<img src="../../extracted/textures/by_container/resources/ProfessionRanger__101.png" alt="Ranger" width="72">

- 内部类：`ProfessionRanger`
- 能力：Invisibility: Every four combats, the ranger may turn invisible, passing unnoticed through monsters until he interacts with the dungeon.
- 初始属性：health 15, mana 0, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Slice, Slice, Circle
- 英雄名：Matthew, the Merciful, Jack, Beastslayer, Albert, the Adventurous
- 相关 ID：CombatAbilityForesight, CombatAbilityCriticalShot

Far from civilization lurk mighty monsters: lizards as large as buildings, birds that breathe fire, and motes of light that will steal your soul.  But one creature is greater still: strong as the oak, graceful as the wind, and cunning as the fox, rangers are the most fearsome beasts in the wild.

### Samurai

<img src="../../extracted/textures/by_container/resources/ProfessionSamurai__157.png" alt="Samurai" width="72">

- 内部类：`ProfessionSamurai`
- 能力：Bushido: Whenever the samurai defeats an opponent of his level or higher, he heals completely.
- 初始属性：health 15, mana 0, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, SorcerousStrike1, SorcerousStrike1
- 英雄名：Erik, the Exuberant, Andrew, the Artful, Alexander, the Avaricious
- 相关 ID：CombatAbilityKaiStrike, SorcerousStrike

Peerless warriors focused on honing body and mind into perfect weapons.  Masters of swordplay and magic, they effortless weave both disciplines into a seamless dance.  Some see this split focus as unnecessary and even self-defeating, but those who say so publicly rarely have the opportunity to repeat themselves.

### Thief

<img src="../../extracted/textures/by_container/resources/ProfessionThief__972.png" alt="Thief" width="72">

- 内部类：`ProfessionThief`
- 能力：Find Treasure:  Every four combats the thief can use his sixth sense to uncover a treasure that no one else would find.
- 初始属性：health 15, mana 0, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Slice, Slice, Backstab
- 英雄名：Coran, the Larcenous, Steven, the Silent, Alex, the Sneaky, Jacob, the Quick
- 相关 ID：CombatAbilityAvoidance, CombatAbilitySurge

Rogues, scoundrels, and ne'er-do-wells, the path of the thief is rarely anyone's first choice.  But a harsh life has prepared them well for adventuring: their legendary speed alongside a variety of tricks makes thieves excellent additions to any adventuring party.  At least until it's time to divide the gold.

### Warrior

<img src="../../extracted/textures/by_container/resources/ProfessionWarrior__830.png" alt="Warrior" width="72">

- 内部类：`ProfessionWarrior`
- 能力：Smash:  After every two combats the warrior can use her rage to destroy a wall in the dungeon.
- 初始属性：health 15, mana 0, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Attack1, Sword
- 英雄名：Krista, the Bold, Sara, the Violent, Katie, the Mighty, Samantha, the Strong
- 相关 ID：CombatAbilityDoubleStrike, CombatAbilityAdrenalineRush

Warriors revel in combat.  The rush of blood, the surge of adrenaline: these are the warrior's passions.  What they lack in subtlety warriors make up for with pure power and resilience.

### Wizard

<img src="../../extracted/textures/by_container/resources/ProfessionWizard__581.png" alt="Wizard" width="72">

- 内部类：`ProfessionWizard`
- 能力：Teleport:  After each combat the wizard can use his magic to teleport himself anywhere on the map, even otherwise undiscovered locations.
- 初始属性：health 15, mana 2, cards 2, actions 1, gold 0, equip slots 0
- 起始牌组：Attack1, Attack1, Attack1, Attack1, Attack1, Mana1, Mana1, Mana1, JasrasJarringJolt, JasrasJarringJolt
- 英雄名：Thomas Brighteyes, Aaron Firecaller, Uther, the Uncontrolled
- 相关 ID：CombatAbilityManaFont, CombatAbilityDevastate

Masters of magic, wizards make up for a lack of power with extreme versatility.  Able to conjure meteors, stop time, and disappear from view, there is little an experienced and prepared mage can't do.  Except find his glasses.

## Combat Ability

| 图 | 名称 | cooldown | 职业引用 | 效果 | runtime 状态 |
| --- | --- | ---: | --- | --- | --- |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityAdrenalineRush__731.png" alt="Adrenaline Rush" width="48"> | Adrenaline Rush | 3 | Warrior | Draw 3 cards | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityAvoidance__449.png" alt="Avoidance" width="48"> | Avoidance | 2 | Thief | Prevent all damage until your next turn | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityBoneShield__946.png" alt="BoneShield" width="48"> | BoneShield | 2 | Necromancer | Prevent the next 10 damage dealt to you | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityBurningLight__313.png" alt="Burning Light" width="48"> | Burning Light | 3 | Priest | Deal 10 fire damage | structured_trace |
|  | No actions left | 0 |  | Spend one action to gain   mana | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityCharm__367.png" alt="Charm" width="48"> | Charm | 3 |  | Your opponent discards their hand.  Draw that many cards. | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityClingingLight__952.png" alt="Clinging Light" width="48"> | Clinging Light | 3 | Paladin | Your opponent takes 2 additional damage from physical attacks this turn | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityCriticalShot__839.png" alt="Critical Strike" width="48"> | Critical Strike | 2 | Ranger | Your next source of damage this turn is doubled and piercing | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityDesperatePrayer__405.png" alt="Armored!" width="48"> | Armored! | 3 | Priest | Something good will happen... Desperate Prayer Death! Speed! | structured_trace |
|  | Devastate | 4 | Wizard |  | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityDistract__664.png" alt="Distract" width="48"> | Distract | 3 | Bard | Take an extra turn | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityDivineFavor__682.png" alt="Divine Favor" width="48"> | Divine Favor | 5 |  | Gain full health and 10 mana.  Your opponent discards their hand and all equipment cards in play | structured_trace |
|  | Weapon Master | 5 |  | Create a temporary copy of each equipment you control. | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityDoubleStrike__805.png" alt="Double Strike" width="48"> | Double Strike | 2 | Warrior | Draw a temporary copy of the next card you play | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityFlee__519.png" alt="Flee" width="48"> | Flee | 1 |  | Escape from combat | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityFlurry__138.png" alt="Flurry" width="48"> | Flurry | 2 |  | Gain 10 actions | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityForesight__410.png" alt="Arm" width="48"> | Arm | 2 | Ranger | Put a Sword and a Greatbow into play | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityKaiStrike__227.png" alt="Kai Strike" width="48"> | Kai Strike | 3 | Samurai | Spend all your mana to deal that much piercing damage | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityLifeTap__870.png" alt="Not enough health" width="48"> | Not enough health | 0 | Necromancer | Pay 5 health to draw a card Life Tap | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityManaFont__1073.png" alt="Mana Font" width="48"> | Mana Font | 2 | Wizard | Gain 10 mana | structured_trace |
|  | Shadow Step | 3 |  | Draw cards and gain actions equal to your maximum | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityRecall__1076.png" alt="Recall" width="48"> | Recall | 2 |  | Draw the next spell card in your deck | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityRend__388.png" alt="Rend" width="48"> | Rend | 3 |  | Your opponent takes 3 additional damage from physical attacks this turn | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityScrounge__735.png" alt="Scrounge" width="48"> | Scrounge | 1 |  | Put your opponent's deck into their discard pile | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilitySerpentStrike__383.png" alt="Refocus" width="48"> | Refocus | 2 |  | Draw 5 cards, then discard 2 | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilitySoulLeech__924.png" alt="Research" width="48"> | Research | 3 |  | Deal 10 piercing damage and heal 10 health.  If this kills your opponent, gain 3 health permanently Soul Leech Draw all spell cards in your deck Spell Fury Search your opponent's deck for a card and add it to your hand | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilitySpellFury__672.png" alt="Devastate" width="48"> | Devastate | 5 |  | Your opponent becomes vulnerable to air, earth, fire, and water until your next turn | structured_trace |
|  | Study | 1 | Priest, Professor |  | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilitySummonAllies__43.png" alt="Summon Allies" width="48"> | Summon Allies | 3 | Druid | Summon three animals for the rest of the fight | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilitySummonBear__45.png" alt="Summon Bear" width="48"> | Summon Bear | 3 | Druid | Summon a bear for the rest of the fight | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilitySurge__919.png" alt="Surge" width="48"> | Surge | 2 | Thief | Draw 2 cards and gain 2 actions | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityTotalFocus__717.png" alt="Total Focus" width="48"> | Total Focus | 2 | ChaosMage | This turn, your spells and actions are free | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityTutor__729.png" alt="Development" width="48"> | Development | 2 | Professor | Search your deck for a card and add it to your hand | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityVanish__570.png" alt="Vanish" width="48"> | Vanish | 3 | Assassin | Escape from combat.  Your opponent will remain damaged and poisoned. | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityVenom__1068.png" alt="Pure Poison" width="48"> | Pure Poison | 3 |  | Poison your opponent for 3.  For the remainder of the fight your poison damage is non-elemental and bypasses most defenses | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityWholeBody__1037.png" alt="Holy Surge" width="48"> | Holy Surge | 4 | Paladin | Heal completely | structured_trace |
| <img src="../../extracted/textures/by_container/resources/CombatAbilityWildPower__293.png" alt="Wild Power" width="48"> | Wild Power | 2 | ChaosMage | Draw 3 random cards | structured_trace |

## Dungeon Action

| 名称 | cooldown | 职业引用 | 关键 literal | runtime 状态 |
| --- | ---: | --- | --- | --- |
| Alchemy | 1 |  | Alchemy | structured_trace |
| CopySacrifice |  |  | Dark Pact (, ), Choose a card to copy | structured_trace |
| DeckTargetted | 5 |  | This is a String!, Confirm | structured_trace |
| Devour | 3 | Dragon | Devour | structured_trace |
| Dream | 5 |  | Dream, Add a card to your deck, Learn | structured_trace |
| DynamicDeckTargetted |  |  |  | structured_trace |
| FindMonster | 4 |  | Make Camp | structured_trace |
| FindTreasure | 4 | Thief | Find Treasure | structured_trace |
| Heal | 5 |  | Heal | structured_trace |
| Hoard |  | Dragon | Hoard (,  Gold) | structured_trace |
| Invisibility | 3 | Ranger | Invisibility | structured_trace |
| LevelUp |  |  | Level Up | structured_trace |
| LevelUpDeckTargetted |  |  |  | structured_trace |
| Meditate | 4 | Monk | Meditate, Choose a card to permanently delete, Delete | structured_trace |
| Murder | 4 |  | Murder | structured_trace |
| Oracle | 2 | Priest, Random | Oracle | structured_trace |
| OracleOld | 3 |  | Oracle | structured_trace |
| Polymorph | 5 |  | Polymorph | structured_trace |
| Portent |  |  | Portent, You close your eyes and your mind wanders.  Sweeping out over the dream world, you behold many strange and wonderful sights.  Among them,&lt;br&gt;, 	 | structured_trace |
| Preparation | 5 |  | Preparation | structured_trace |
| Sacrifice |  |  | Sacrifice | structured_trace |
| Save |  |  | Save | structured_trace |
| Sing | 3 |  |  | structured_trace |
| Smash | 2 | Warrior | Smash | structured_trace |
| Study | 2 |  | Study | structured_trace |
| Swap |  |  | Swap | structured_trace |
| SwapLocation | 3 | Necromancer | Portal | structured_trace |
| TalentDeckTargetted | 5 |  | You may choose up to ,  cards.  Are you sure you want to only choose , ? | structured_trace |
| Teleport | 1 | Wizard | Teleport | structured_trace |
| TileTargetted | 5 |  |  | structured_trace |
| UberTeleport |  |  |  | structured_trace |
| Upgrade | 3 |  | Bushido, Choose a card to upgrade, Upgrade | structured_trace |
| WildShape | 3 | ChaosMage | Wild Shape | structured_trace |

## DungeonTalent

| 名称 | tier | repeatable | 需求 | 效果 | handler |
| --- | ---: | --- | --- | --- | --- |
| Sixth Sense | 1 | False | DEATH3 | All monsters are revealed on all floors | ApplyTo |
| Cowardly | 1 | False | DEATH2 | Gain the Flee Ability allowing you to run away from combat | ApplyTo |
| Crumble | 1 | False | DELETE1 | All the walls on this dungeon floor are removed | ApplyTo |
| Heal | 1 | False | WINPRIEST | Gain the Heal dungeon ability (cooldown 5) | ApplyTo |
| Healthy | 1 | True |  | Gain 5 health | ApplyTo |
| Magical | 1 | True |  | Gain 2 mana | ApplyTo |
| Portent | 1 | False | WINPROFESSOR | Gain the Portent dungeon ability (no cooldown) | ApplyTo |
| Preparation | 1 | False | WINTHIEF | Gain the ability to reset the cooldown on your other dungeon abilities (cooldown 5) | ApplyTo |
| Smash | 1 | False | WINWARRIOR | Gain the Smash dungeon ability (cooldown 2) | ApplyTo |
| Teleport | 1 | False | WINWIZARD | Gain the Teleport dungeon ability (cooldown 1) | ApplyTo |
| Training | 1 | True |  | Choose a card from your deck that can be leveled up and level it | ApplyTo |
| Quick | 2 | True |  | Gain 1 action | ApplyTo |
| Clear Mind | 2 | False | WINBARD | Reduce the cooldown of your dungeon abilities by 1 | ApplyTo |
| Copy | 2 | True | CARDSPERTURN1 | Choose a card from your deck and gain another copy of it | ApplyTo |
| Equipped | 2 | True |  | Gain one equipment slot | ApplyTo |
| Ding! | 2 | True | LEVELUP | Level up (max level 10) | ApplyTo |
| Pious | 2 | False | WINPRIEST2 | Add the Wisdom, Ward, and Prayer of Wrath cards to your deck | ApplyTo |
| Polymorph | 2 | False | DEATH4 | Learn the Polymorph dungeon ability which replaces a monster (cooldown 5) | ApplyTo |
| Rich | 2 | True |  | Gain 30 gold | ApplyTo |
| Sneaky | 2 | False | WINTHIEF2 | Add the Backstab, Jab, and Alacrity cards to your deck | ApplyTo |
| Sorcerous | 2 | False | WINWIZARD2 | Add the Mana Surge, Fireball, and Charm cards to your deck | ApplyTo |
| Warlike | 2 | False | WINWARRIOR2 | Add the Slash, Shield, and Crush cards to your deck | ApplyTo |
| Charismatic | 3 | False | MERCY | 5 additional beneficial objects appear on this dungeon floor | ApplyTo |
| Cruel | 3 | False |  | Your opponents take an additional point of damage from each of your physical sources | ApplyTo, ApplyToPlayer |
| Desperate | 3 | False | ALTAR | When you have 15 or less life, draw three additional cards each turn | ApplyTo, ApplyToPlayer |
| Immortal | 3 | False |  | The next time you would die, your health is instead set to its maximum and you are invulnerable until your next turn | ApplyTo |
| Fiery | 3 | False | WINSAMURAI | At the start of each turn, draw a temporary Fireball | ApplyTo, ApplyToPlayer |
| Fluid | 3 | False | WINMONK | The first time you play an action card each turn, draw a card | ApplyTo, ApplyToPlayer |
| Hoard | 3 | False | WINDRAGON | Start each fight with a random equipment | ApplyTo, ApplyToPlayer |
| Invisible | 3 | False | WINRANGER | You have a 30% chance to prevent opponent's action or spell cards from having an effect | ApplyTo, ApplyToPlayer |
| Sublime | 3 | False | NOCARDS | All your damage is piercing | ApplyTo, ApplyToPlayer |
| Purity | 3 | False |  | Choose up to three cards from your deck and delete them | ApplyTo |
| Heroic | 3 | False | WINPALADIN2 | Upgrade each card in your deck that can be upgraded to its maximum level | ApplyTo |
| Archmage | 4 | False | CLARITY | Your spells no longer cost mana | ApplyTo, ApplyToPlayer |
| Ascendance | 4 | False |  | Gain 20 health, 5 mana, and an action | ApplyTo |
| Smart | 4 | False |  | Draw one additional card each turn | ApplyTo |
| Well-Armed | 4 | False | WINPALADIN | Start each combat with a sword, shield, and armor in play | ApplyTo, ApplyToPlayer |
| Impervious | 4 | False | MUSHROOM | You take half damage (rounded down) from all elements | ApplyTo, ApplyToPlayer |
| Master Thief | 4 | False | FINALBOSS2 | Items in shops are free | ApplyTo |
| Poisonous | 4 | False | WINASSASSIN | At the beginning of your turn, poison your opponent 3 | ApplyTo, ApplyToPlayer |
| Terror | 4 | False |  | Your opponents' hand sizes are reduced by 1 | ApplyTo, ApplyToPlayer |
| Tiltowait | 4 | False | RICH | Add the action card Tiltowait to your deck which deals 20 piercing damage | ApplyTo |
| Vampiric | 4 | False | WINNECROMANCER | For every three points of physical damage you deal each turn, gain 1 life | ApplyTo, ApplyToPlayer |
