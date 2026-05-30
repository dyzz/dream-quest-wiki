# Dream Quest Remaster Roadmap

这份路线图把当前解析结果转成可执行 remaster 工程顺序。它不是完成声明；当前 `remaster_completion_audit.json` 仍为 `achieved=false`。

更细的 TypeScript runtime port 队列见 `docs/mechanics/runtime-implementation-backlog.md`。该 backlog 把当前 false-flag/audit blockers 映射到 content/state、RNG、rules、actions/combat、dungeon/profile、profession/talent 和 prototype swap 的验收门禁。

## 现有基线

- 内容目录：`docs/original-analysis.md`
- 卡牌目录：`extracted/structured/cards.json`
- 怪物目录：`extracted/structured/monster_catalog.json`
- 职业/技能目录：`extracted/structured/profession_skills.json`
- 职业/技能原版准确性缺口：`extracted/structured/profession_skill_runtime_accuracy_gaps.json`
- 职业/技能原版准确性 false flag 索引：`extracted/structured/profession_skill_original_accuracy_flag_index.json`
- 职业/技能 RNG/random-reward recovery：`extracted/structured/profession_skill_rng_recovery.json`
- 职业/技能 recorded replay：`extracted/structured/profession_skill_recorded_replay.json`
- 职业/技能 targeting/UI bridge：`extracted/structured/profession_skill_targeting_ui_bridge.json`
- 职业/技能 read/context dependency index：`extracted/structured/profession_skill_context_dependency_index.json`
- 职业/技能 computed/receiver value-flow index：`extracted/structured/profession_skill_effect_value_flow_index.json`
- 职业/技能 scheduler matrix：`extracted/structured/profession_skill_scheduler_matrix.json`
- 职业/技能调度恢复：`extracted/structured/profession_skill_scheduler_recovery.json`
- TalentBase learning UI recovery：`extracted/structured/talent_learning_ui_recovery.json`
- TalentBase reachability 边界：`extracted/structured/talentbase_reachability.json`
- Texture2D PNG 导出：`extracted/textures/`
- Texture/resource path 映射：`extracted/structured/texture_export_manifest.json`
- Remaster asset catalog：`extracted/structured/remaster_asset_catalog.json`
- 地牢生成规则：`extracted/structured/dungeon_generation.json`
- 地牢生成原版准确性缺口：`extracted/structured/dungeon_generation_accuracy_gaps.json`
- 地牢原版准确性 false flag 索引：`extracted/structured/dungeon_original_accuracy_flag_index.json`
- 地牢 seed sweep：`extracted/structured/dungeon_seed_sweep.json`
- 地牢 AddRewards bridge：`extracted/structured/dungeon_add_rewards_bridge.json`
- 地牢 RNG/list-order replay 缺口：`extracted/structured/dungeon_rng_replay_gaps.json`
- Utility.Shuffle recovery：`extracted/structured/utility_shuffle_recovery.json`
- 地牢 shuffle helper recovery：`extracted/structured/dungeon_shuffle_helper_recovery.json`
- 地牢 PathBetween smoke：`extracted/structured/dungeon_path_between_smoke.json`
- 地牢 Unity physical construction 缺口：`extracted/structured/dungeon_physical_construction_gaps.json`
- Depth-2 MimicChest seed fixture：`extracted/structured/remaster_dungeon_mimic_seed.json`
- MimicChest open smoke：`extracted/structured/mimic_chest_open_smoke.json`
- Shop generation smoke：`extracted/structured/dungeon_shop_generation_smoke.json`
- Shop inventory/UI smoke：`extracted/structured/shop_inventory_ui_smoke.json`
- Shop item generation recovery：`extracted/structured/shop_item_generation_recovery.json`
- Current-user/save/CardFinder smoke：`extracted/structured/current_user_save_cardfinder_smoke.json`
- Seed current-user reward smoke：`extracted/structured/dungeon_seed_current_user_postprocessing_smoke.json`
- 真实 save 样本 inventory：`extracted/structured/real_save_sample_inventory.json`
- 首个 prototype fixture：`extracted/structured/remaster_starter_slice.json`
- 首个 prototype 素材包：`extracted/structured/remaster_starter_asset_pack.json`
- 静态托管 starter browser prototype：`prototype/starter/index.html`
- normalized rule 质量门禁：`extracted/structured/runtime_rule_quality.json`
- runtime 实现 backlog：`extracted/structured/runtime_rule_backlog.json`
- priority runtime smoke：`extracted/structured/priority_runtime_smoke.json`
- 卡牌原版准确性缺口：`extracted/structured/card_runtime_accuracy_gaps.json`
- 卡牌原版准确性 false flag 索引：`extracted/structured/card_original_accuracy_flag_index.json`
- 卡牌 read/context dependency index：`extracted/structured/card_context_dependency_index.json`
- 卡牌 computed/receiver value-flow index：`extracted/structured/card_effect_value_flow_index.json`
- 卡牌 RNG/shuffle recovery：`extracted/structured/card_rng_recovery.json`
- 卡牌手工控制流 replay：`extracted/structured/card_manual_control_flow_replay.json`
- 卡牌 recorded state/object replay：`extracted/structured/card_recorded_step_replay.json`
- 卡牌 lifecycle replay：`extracted/structured/card_lifecycle_replay.json`
- 卡牌 equipment lifecycle matrix：`extracted/structured/card_equipment_lifecycle_matrix.json`
- 卡牌 zone/action replay：`extracted/structured/card_zone_replay.json`
- 卡牌 payment/counter replay：`extracted/structured/card_payment_replay.json`
- 卡牌 play/side-effect replay：`extracted/structured/card_play_replay.json`
- 卡牌 AI value recovery：`extracted/structured/card_ai_value_recovery.json`
- 卡牌 AI value matrix smoke：`extracted/structured/card_ai_value_matrix_smoke.json`
- 卡牌 ActionPlay priority matrix smoke：`extracted/structured/card_ai_priority_matrix_smoke.json`
- 卡牌 ActionPlay bridge matrix smoke：`extracted/structured/card_actionplay_bridge_matrix_smoke.json`
- Card.GetAIValue scenario adjustment recovery：`extracted/structured/card_get_ai_value_adjustment_recovery.json`
- AI value runtime smoke：`extracted/structured/ai_value_runtime_smoke.json`
- Creature AI weight recovery：`extracted/structured/creature_ai_weight_recovery.json`
- 怪物 source-method runtime matrix：`extracted/structured/monster_runtime_matrix_smoke.json`
- 怪物 deck behavior bridge：`extracted/structured/monster_deck_behavior_bridge.json`
- 怪物原版准确性缺口：`extracted/structured/monster_runtime_accuracy_gaps.json`
- 怪物原版准确性 false flag 索引：`extracted/structured/monster_original_accuracy_flag_index.json`
- 怪物 read/context dependency index：`extracted/structured/monster_context_dependency_index.json`
- 怪物 computed/receiver value-flow index：`extracted/structured/monster_effect_value_flow_index.json`
- 怪物控制流/state-write replay：`extracted/structured/monster_control_flow_replay.json`
- 怪物 RNG recovery：`extracted/structured/monster_rng_recovery.json`
- AI policy recovery 缺口：`extracted/structured/ai_policy_recovery_gaps.json`
- AI policy virtual slot xrefs：`extracted/structured/ai_policy_virtual_slot_xrefs.json`
- AI virtual dispatch recovery plan：`extracted/structured/ai_virtual_dispatch_plan.json`
- AI action priority recovery：`extracted/structured/ai_action_priority_recovery.json`
- AI highest-priority selection recovery：`extracted/structured/ai_highest_priority_selection.json`
- AI action candidate recovery：`extracted/structured/ai_action_candidate_recovery.json`
- AI action candidate replay：`extracted/structured/ai_action_candidate_replay.json`
- AI target legality recovery：`extracted/structured/ai_target_legality_recovery.json`
- AI target legality replay：`extracted/structured/ai_target_legality_replay.json`
- Target wrapper identity recovery：`extracted/structured/target_wrapper_identity_recovery.json`
- AI RNG/list-order recovery：`extracted/structured/ai_rng_list_order_recovery.json`
- AI turn policy recovery：`extracted/structured/ai_turn_policy_recovery.json`
- AI turn policy replay：`extracted/structured/ai_turn_policy_replay.json`
- Action execution recovery：`extracted/structured/action_execution_recovery.json`
- Action execution replay：`extracted/structured/action_execution_replay.json`
- Action runtime accuracy gaps：`extracted/structured/action_runtime_accuracy_gaps.json`
- Reaction/SBE cleanup recovery：`extracted/structured/reaction_sbe_cleanup_recovery.json`
- Visual stack/coroutine recovery：`extracted/structured/visual_stack_coroutine_recovery.json`
- Player payment recovery：`extracted/structured/player_payment_recovery.json`
- Pass/end-turn recovery：`extracted/structured/pass_end_turn_recovery.json`
- Card play pipeline recovery：`extracted/structured/card_play_pipeline_recovery.json`
- 完成度审计：`extracted/structured/remaster_completion_audit.json`

当前关键计数：

- 卡牌：370 张；`runtime_rule` 未解析操作 0；`simple_tailcall=97`、`structured_trace=273`；剩余 context/no-rule 0。`card_access_rules.json` 已把 234 条 `CardData` 的 access gate 分成 118 条 `base_unlocked`、39 条 requirement-gated、77 条 `never`；`card_access_rules_smoke.json` 17/17 通过。`card_metadata_recovery.json` 20/20 通过，解码 23 条 CardData bias entry、8 个 bias id 均能链接到职业 bias，确认 21 张非零 elemental affinity 卡，确认 colors/subtypes 访问器形态，排除 3 个静态/全局 offset collision，并用 slot 98/123 虚槽扫描确认 Card 子类 `PythonInitialize` 初始化命中为 0；per-card colors/subtypes 仍无安全静态填值。`card_runtime_smoke.json` 45/45 通过，覆盖代表性 simple tailcall、structured effect、manual control-flow、state_write、construct 和 recorded card action request；`card_runtime_matrix_smoke.json` 15/15 通过，覆盖 599 个全卡 source-method case、633 个 effect event 和 60 个 recorded event；`card_manual_control_flow_replay.json` 35/35 通过，把 5 张手工反汇编恢复卡的 10 个 control-flow step 细化为 19 个正向/跳过 branch fixture，但 original replay 仍为 false；`card_recorded_step_replay.json` 16/16 通过，把 52 张卡的 60 个 recorded state/object step 细化为 56 个 source-method fixture，但 typed object lifecycle replay 仍为 false；`card_lifecycle_replay.json` 14/14 通过，把 6 个 recovered lifecycle case 固定为 deterministic state fixture，但 original Unity lifecycle replay 仍为 false；`card_equipment_lifecycle_matrix.json` 18/18 通过，覆盖 42 张 Equipment 卡的 74 个 recovered source-method fixture、92 个 effect event、27 个 lifecycle/state-write recorded event 和 6 个 CheckCounters case，但 original equipment timing/object identity replay 仍为 false；`card_zone_replay.json` 14/14 通过，把 6 个 recovered Exile/Die/Discard/MoveToGraveyard/GetAction case 固定为 deterministic zone/action fixture，但 original Unity zone replay 仍为 false；`card_payment_replay.json` 17/17 通过，把 9 个 recovered ResourcesOff/CanAfford/PayFor/WillBeCountered case 固定为 deterministic payment/counter fixture，但 original Unity payment replay 仍为 false；`card_play_replay.json` 17/17 通过，把 9 个 recovered PlayMe/Player.PlaySideEffects case 固定为 deterministic play/side-effect fixture，但 original Unity play replay 仍为 false。`creature_ai_weight_recovery.json` 37/37 通过，恢复 `Creature.AIWeight` 公式但 combat-state replay 仍为 false；`card_get_ai_value_adjustment_recovery.json` 33/33 通过，把 `Card.GetAIValue` slot 105 解析为 `Game.scenario -> ScenarioBase.ChangeValue`，且基类 `ChangeValue` 为 identity/no-op；`ai_value_runtime_smoke.json` 18/18 通过，用 `tools/remaster_runtime.py` 执行 `Card.AIWeight`、`Card.GetAIValue` scenario identity、`Creature.AIWeight` 和 real-hero bonus fixture；`card_ai_value_matrix_smoke.json` 14/14 通过，用同一 runtime 执行 370 个 `Card.AIWeight` case 和 370 个 base `Card.GetAIValue` identity case，scenario identity mismatch 为 0；`card_ai_priority_matrix_smoke.json` 20/20 通过，用同一 runtime 执行 370 个未反制 ActionPlay priority case、370 个反制 priority case 和 740 个 AIUseValue case，273 张卡在两条 priority 分支间会变化；`card_actionplay_bridge_matrix_smoke.json` 42/42 通过，用同一 runtime 打包 370 个 normal ActionPlay candidate case，验证 370 个 full-hand filtered candidate 保持顺序，并包装 370 个 synthetic action+target pair，null action、payload mismatch、cost mismatch、slot mismatch、candidate order mismatch 和 pair order mismatch 均为 0；`card_ai_value_recovery.json` 45/45 通过，恢复 `Card.AIWeight=max(action_cost,1)+mana_cost`、`Card.GetAIValue` 形态、基类 `AIPlayValue/AIFlatValue/AIMultValue=0`，并纳入 scenario adjustment、runtime fixture、全卡 matrix fixture 和 Creature formula，完整 AI value replay 仍为 false。`card_runtime_accuracy_gaps.json` 169/169 通过，并消费 `card_original_accuracy_flag_index.json` 的 13/13 false-flag index 检查；`card_original_accuracy_flag_index.json` 记录 362 个唯一 false flag entry、8,052 次 occurrence 和 9 个工作队列且 uncategorized=0，确认 370/370 张卡仍为 `executable_rule_complete=false`，并把 5 张 manual control-flow、52 张 recorded-step、6 个 lifecycle fixture、6 个 zone/action fixture、9 个 payment/counter fixture、9 个 play/side-effect fixture、214 张 read/context（`card_context_dependency_index.json` 14/14 通过，722 个 dependency step 已分入 11 个 owner 队列且 uncategorized=0）、115 张 computed-value（`card_effect_value_flow_index.json` 20/20 通过，179 个 step 已分入 8 个 argument-flow 队列且 unclassified=0）、23 张 RNG/shuffle、74 张 UI/choice/visual、46 张 equipment lifecycle 候选和 AI/colors/subtypes 缺口拆成队列；Blur/Incorporeal/StormShape/VaporForm 已从 `EffectPlayerAttribute..ctor` tailcall 反汇编恢复为 att=24 physical resistance / att=102 manaShield storm-shape / att=23 physical immunity 的 binary effect；Anticipate/Enthrall 已确认构造 `ActionAnticipate` 并由 `ActionAnticipate.DiscardPerform` 取得对手手牌，Bewitch 构造 `ActionBewitch` 并调用 `Card.Exile`，Charm 构造 `ActionCharm` 并调用 `Card.Die`，四者均由 `TriggerOnce` 包装；Scimitars 已确认 `ActionScimitars.OnTrigger` 保存 played-card payload 并调用 `Player.HandleEmergency`，`ActionScimitars.PerformAction` 再调用 `Player.DrawExNihil(slot 244)` 和 `Card.Temporary(slot 240)`；InfernalContract 已确认 `PlayEffect` 用对手手牌 `VirtualObject.ChildCount(slot 24)` 决定 `Deck.AddCardToDeck(Curse)` 次数，随后 `Deck.Shuffle(slot 93)` 与 `Player.DiscardAll(slot 257)`；SoulCrush 已确认 `PlayEffect` 检查物防/盾/反射/临时 ward/dodge/物抗/物免/无敌 gate 后调用 `Card.DealDamage(10)` 和 `Card.ForceDiscard(2)`；剩余 rules-text assisted runtime card count 为 0；`card_rng_recovery.json` 27/27 通过，把 23 张 RNG/shuffle 候选收窄为 25 个静态 helper/list-order step，恢复 InGameRandomRange/Float、Player.RandomExile、Card.ForceRandomDiscard、Deck.RandomCardName、Deck.Shuffle、CardFinder.RandomAvailableNonEquipmentCard，并二进制确认 Stone 的 Curse 插入、Deck.Shuffle 和 ForceDiscard 形态，且补充 InfernalContract 的 Curse+Deck.Shuffle+DiscardAll 形态；original RNG stream、shuffle/index stream 与 live AI value combat-state replay 仍为 false；这些都仍不代表原版准确 timing/RNG/UI/equipment lifecycle/AI。
- 怪物：73 个；行为/升级未解析操作 0；`behavior_runtime_rule` 与 `level_up_rule` 均已 73/73 结构化；剩余 behavior/level-up normalized gap 0。`monster_runtime_smoke.json` 38/38 通过，使用共享 runtime 执行全部 73 个 recovered behavior rule、247 个升级等级组合、137 个 behavior event 和 1001 个 level-up event。`monster_runtime_matrix_smoke.json` 18/18 通过，按 source method 执行全部 87 个 recovered behavior case，覆盖 137 个 effect event、10 个 recorded state-write event 和 3 个 Sphinx predicate fixture event。`monster_deck_behavior_bridge.json` 19/19 通过，把 25 个 deck-encoded 怪物 loadout 和 105 张引用行为卡连接到 recovered card runtime/ActionPlay bridge evidence，缺失卡、缺失 runtime rule、缺失 ActionPlay bridge 和 loadout mismatch 均为 0。`monster_context_dependency_index.json` 18/18 通过，把 20 个怪物的 54 个 read/context dependency step 分入 8 个 owner 队列且 uncategorized=0，但 original value-flow 与 turn/target replay 仍为 false。`monster_effect_value_flow_index.json` 19/19 通过，把 26 个怪物的 43 个 effect-without-immediate-args step 分成 16 个 zero-parameter receiver effect 与 27 个 parameter-value-required step，7 个 argument-flow 队列均无 unclassified，matrix missing event=0，但 original parameter-value 与 receiver-identity replay 仍为 false。`monster_control_flow_replay.json` 34/34 通过，把 Demon/Mage/Sphinx 三个手工行为分支、Hydra/Sphinx/Treant 三个升级生命值分支、7 个 state-write 怪物和 10 个 raw Monster field write 收窄为 focused fixture replay。`monster_rng_recovery.json` 14/14 通过，恢复 GoblinMechanist 随机装备/爆炸、9 个装备候选、Revenant add-Scream-then-shuffle、Deck.Shuffle remaining-deck Fisher-Yates 和 inclusive `InGameRandomRange` 静态形态，但原版 RNG stream 与 shuffle index stream replay 仍为 false。`monster_runtime_accuracy_gaps.json` 115/115 通过，并消费 `monster_original_accuracy_flag_index.json` 的 13/13 false-flag index 检查；`monster_original_accuracy_flag_index.json` 记录 283 个唯一 false flag entry、735 次 occurrence 和 9 个工作队列且 uncategorized=0，确认 73/73 个怪物仍为 `executable_rule_complete=false`，并把 25 个 deck-encoded behavior、247 个 level-up threshold case、3 个 manual behavior control-flow、15 个 turn timing、45 个 target/player context、20 个 read/context、26 个 computed/receiver value-flow、7 个 state-write、2 个 RNG/shuffle、2 个 UI/visual、1 个 restriction predicate 和 73 个 AI policy 原版 replay 缺口拆成队列；AI candidate、target legality、AI turn policy 和 action execution deterministic fixture 均已接入，但 original Unity candidate/target/turn/action、read/context value-flow、parameter-value/receiver-identity 和 turn/target replay 仍为 false。这些仍不代表原版准确 AI/targeting/turn timing/RNG/UI side effects 或 typed state semantics。
- AI/action policy：`ai_policy_recovery_gaps.json` 当前 54/54 通过；`ai_policy_recovery_gaps.json`、`ai_*_recovery/replay.json`、`target_wrapper_identity_recovery.json`、`ai_rng_list_order_recovery.json`、`action_execution_recovery.json` 和 `action_runtime_accuracy_gaps.json` 已把 AI candidate、target legality/target-set、target wrapper/target-set identity、AI RNG/list-order、turn/pass/invocation、ActionBase.Perform/Resolve、ActionPlay bridge、reaction/SBE cleanup、visual-stack coroutine、Player payment、pass/end-turn 和 card play pipeline 全部纳入执行层队列。`action_runtime_accuracy_gaps.json` 当前 76/76 通过，汇总 640 个上游检查和 11 类 blocking gap；deterministic action runtime、AI-to-action、card pipeline 与 starter fixture coverage 均为 true，static reaction/SBE、visual-stack coroutine、Player.PayFor/payment UI bridge、pass/end-turn、target wrapper/target-set identity、target-set ordering、RNG inclusive boundary 和 AI RNG/list-order 形态也已恢复，但 original action runtime、reaction/SBE replay、visual-stack replay、player payment/UI replay、pass/end-turn replay、card payment/play/zone/lifecycle replay、AI turn/action/candidate/target replay、AI RNG stream/list ownership 和 original TargetWrapper/target-set identity replay 仍全部为 false。关键 `AIPlayer` / `AIPlayerRandom` / `Card.GetAIValue` 仍包含间接 dispatch，卡牌已有 AI scalar/base-value、全卡 ActionPlay priority fixture evidence 与全卡 ActionPlay bridge/hand-enumeration/action-target-pair fixture evidence，但行为级 AI step 仍为 0，怪物 73/73 仍在 AI policy 原版 replay 队列中。
- Action execution replay：`action_execution_replay.json` 19/19 通过，把 11 个 recovered `ActionBase.Perform/Resolve`、`ActionPlay`、`ActionPass`、special action、`AIPhysical.GetStackInput` 和 `GamePhysical.AddToVisualStack*` case 固定为 deterministic fixture；original Unity action execution、reaction/SBE、target wrapper type identity、coroutine/yield 和 UI object graph replay 仍为 false。
- Action runtime accuracy gaps：`action_runtime_accuracy_gaps.json` 76/76 通过，把 deterministic action/visual-stack、AI candidate/target/turn/pass、target wrapper identity、AI RNG/list-order、reaction/SBE cleanup、visual-stack coroutine、Player payment、pass/end-turn、card payment/play/zone/lifecycle 和 starter harness coverage 整理为 11 类原版执行层队列；static reaction/SBE、visual-stack coroutine、Player.PayFor/payment UI bridge、pass/end-turn、target wrapper/target-set identity、target-set ordering、RNG inclusive boundary 和 AI RNG/list-order 形态已恢复，但 original ActionBase.Perform/Resolve timing、visual-stack coroutine replay、reaction/SBE cleanup replay、payment UI replay、pass/end-turn replay、Card.PlayMe timing、typed zone identity、TargetWrapper/target-set identity、AI RNG stream/list ownership 和 equipment trigger timing 仍未 replay。
- Target wrapper identity recovery：`target_wrapper_identity_recovery.json` 42/42 通过，恢复 `TargetFinderParameters` / `TargetTypes` / `TargetFinderBase` / `TargetFinderMulti` metadata、target result/cache layout、target wrapper payload read、target-set list mutation、`Game.RandomRange(a,b)` inclusive upper bound、AI target sampling tail-swap removal 和 random-order target-set shuffle 静态形态；original `TargetWrapper` object identity、target UI ownership、target-set list ownership/order 和 RNG stream replay 仍为 false。
- AI RNG/list-order recovery：`ai_rng_list_order_recovery.json` 22/22 通过，恢复 inclusive `Game.RandomRange`、highest-priority tie RNG、AIPlayerRandom candidate selection/tail-swap removal、provider target-set RNG、target tail-swap sampling、target-set Fisher-Yates shuffle 和 `PerformRandomAction` RNG 静态形态；original System.Random/Unity RNG stream、cross-call interleaving、candidate/target list ownership 和 full AI turn replay 仍为 false。
- Reaction/SBE cleanup recovery：`reaction_sbe_cleanup_recovery.json` 29/29 通过，把 ActionBase.TriggerCleanUp/ShouldCheckSBEs、Game.CheckStateBasedEffects/Check*Reactions、ReactionCard、Counterspell、ActionDelayedReaction 和 ActionAddCounter 形态固定为静态证据；original reaction/SBE replay 和 prototype runtime readiness 仍为 false。
- Visual stack/coroutine recovery：`visual_stack_coroutine_recovery.json` 42/42 通过，把 `GamePhysical.AddToVisualStack*` enqueue/dirty flag、NoYield scope、Suppress/UnSuppress queue transfer、VisualStackCount/Pop、HandleVisualStack/VisualStackSpin coroutine entry、VirtualWait/Waiter bridge 和 EndGame coroutine yield state 固定为静态证据；original visual-stack replay 和 prototype runtime readiness 仍为 false。
- Player payment recovery：`player_payment_recovery.json` 45/45 通过，把 `Card.PayFor -> Player.PayFor/GainMana/UpdateMana/UnOneFreeSpell`、action cost、ManaOff theft discount、mana clamp、UpdateMana text/UI bridge 和 one-free-spell consumption 固定为静态证据；original player payment replay、Unity payment UI replay 和 prototype runtime readiness 仍为 false。
- Pass/end-turn recovery：`pass_end_turn_recovery.json` 92/92 通过，把 `ActionPass.Perform -> AIPlayer.DoAIPass -> Player.Pass/EndTurn`、`Player.Pass/NetPass/CanEndTurn/StartTurn/EndTurnEffects`、`Game.EndTurn/StartTurn/BasicStartTurn/StartTurnAfterDraw` 和 turn trigger queue 形态固定为静态证据；original pass/end-turn replay 和 prototype runtime readiness 仍为 false。
- 职业/技能：16 职业、37 combat ability、33 dungeon action、43 dungeon talent；runtime 未解析操作 0；职业、combat ability、dungeon action runtime 均已全量 `structured_trace`。`profession_starting_profile_smoke.json` 70/70 通过，覆盖全部职业起始 stats/deck/bias、157 个起始牌引用和 22 个唯一起始牌，缺失起始牌引用 0。
- profession/skill runtime smoke：65/65 通过，使用共享 runtime 覆盖 6 个职业 loadout fixture、10 个 combat ability cooldown、7 个 dungeon action cooldown、16 个 scheduler fixture checks、12 个 WinFight/ready-message scheduler event、代表性职业/技能/地城动作执行，以及 43 条 DungeonTalent 的 60 个 handler effect。`profession_skill_runtime_matrix_smoke.json` 19/19 通过，覆盖 16 个职业、37 个 combat ability、33 个 dungeon action、43 个 dungeon talent、154 个 source-method case、266 个 effect event、38 个 recorded event 和 60 个 talent handler event；`profession_skill_scheduler_matrix.json` 24/24 通过，覆盖全部 60 个 cooldown initializer、445 个 deterministic scheduler case（143 combat state、90 dungeon state、46 OnClick、166 ready-message），但 original scheduler / targeting / UI replay 仍为 false；`profession_skill_recorded_replay.json` 39/39 通过，覆盖 4 个 hand-recovered control-flow/lifecycle entry、6 个 manual step、38 个 state-write recorded event 和 43 个 DungeonTalent handler case 的 60 个 handler event，但 original cooldown/target/UI/TalentBase replay 仍为 false；`profession_skill_targeting_ui_bridge.json` 19/19 通过，覆盖 34 个 UI/selection entry、21 个 target/legality entry、37 个 targeting/UI union entry、85 个 focused source-method case、179 个 effect event 和 37 个 recorded event，但 original targeting/UI action-object replay 仍为 false；`profession_skill_context_dependency_index.json` 31/31 通过，覆盖 67 个 read/context dependency entry、449 个 dependency step 和 13 个 owner queue，uncategorized=0，但 original value-flow replay 仍为 false；`profession_skill_effect_value_flow_index.json` 23/23 通过，覆盖 69 个 no-immediate-arg effect entry、196 个 effect step、108 个 zero-parameter receiver effect 和 88 个 parameter-value-required step，9 个 argument-flow queue 均无 unclassified，但 original parameter-value 与 receiver-identity replay 仍为 false；`profession_skill_original_accuracy_flag_index.json` 13/13 通过，记录 105 个唯一 false flag entry、2,548 次 occurrence 和 8 个工作队列且 uncategorized=0；`profession_skill_runtime_accuracy_gaps.json` 132/132 通过，确认 129/129 条 profession/skill/action/talent 规则仍为 `executable_rule_complete=false`，并把 60 个 cooldown initializer、17 个 validation、67 个 read/context、69 个 parameter/receiver value-flow、13 个 state-write、4 个 manual-control、3 个 RNG/shuffle runtime、34 个 UI/selection、21 个 target/legality、2 个 random talent handler、9 个 action-style talent handler、scheduler recovery、read/context value-flow 和 TalentBase reachability / learning UI 缺口拆成队列；`profession_skill_rng_recovery.json` 20/20 通过，恢复 DesperatePrayer、FindMonster、FindTreasure、Charismatic 和 Hoard 的静态 RNG/random-reward 形态，并确认原版 RNG stream 与 shuffle/index stream replay 仍为 false；`profession_skill_scheduler_recovery.json` 68/68 通过，固定 CombatAbility/DungeonAction 的 cooldown/currentCooldown 字段、ReduceCooldown/ZeroCooldown/IsValid/MaxCooldown/CooldownPercent、CombatAbility.Use、ActionCombatAbilityBasic.PerformAction、DungeonAction.OnClick direct path、ClearMind cooldown modifier、`Dungeon.WinFight` 外层顺序、`Dungeon -> DungeonPlayer.WinFight` 调用点、DungeonPlayer.WinFight cooldown tick 顺序、DungeonPlayer.CoolingDownAbilities ready-message 条件、`GamePhysical.EndGame` coroutine 中的 `DungeonPlayer.CoolingDownAbilities(level)` 调用点、ready-message-before-WinFight yield ordering 和 `Dungeon.EndFight` slot-152 非 player receiver 边界，并已接入主缺口检查；`CoolingDownAbilities` 直接 xref 为 0，raw slot 152 扫描仍有同槽位歧义，但 coroutine receiver chain 已证明真实调用点；`talent_learning_ui_recovery.json` 53/53 通过，恢复 LevelUpReward/DungeonPlayer/SDB/ShopDialogueTalentViewer/CardBack/TalentBase 静态 viewer/pay-and-learn 链路；`talentbase_reachability.json` 35/35 通过，确认 DungeonTalent 选择/handler 路径已结构化，TalentBase 学习方法 trace 和静态 UI 链已结构化，且 type model 中无 TalentBase direct child type；`talent_learning_source_call_xrefs.json` 扫描 24,879 个 method pointer，只发现 2 条 `DungeonPlayer -> SDB.TalentViewer` 直接调用，在扫描的 TalentBase/gain/TalentPhysical/UI endpoint 中没有非 UI 直接命中，状态仍为 `unverified_dynamic_or_legacy_path`。这些仍不代表原版准确 alternate coroutine branch replay、targeting/UI action-object replay、read/context value-flow replay、parameter-value/receiver-identity replay 或 live TalentBase learning UI replay。
- runtime backlog：0 条；priority backlog 已清空，但 `runtime_rules_complete=false`，因为 normalized rule handler 仍需升级为原版准确 runtime engine 并接入 prototype。
- priority runtime smoke：420/420 通过，`shared_runtime_engine_check_count=420`，覆盖全部 25 个 `behavior_encoded_in_deck` 怪物、全部 73 个 monster level-up rules、怪物属性/状态/记录型行为、卡牌高频与剩余记录型 effect、combat ability、profession hook、32 个 dungeon action recovered-effect fixture，以及 `BootsOfSpeed`、`Scimitars`、`PrayerOfViolence`、`GaussHourglass`、`Curse`、`PenaltyCurses`、`PenaltyCursesFinal`、`Demon`、`GiantSquid`、`Hydra`、`ProfessionSamurai`、`CombatAbilityStudy`、`CombatAbilityTutor`、`DungeonActionUberTeleport`。
- runtime engine coverage：共享 interpreter 支持 1442/1442 个 normalized effect/handler steps，标签覆盖率 100%；cards 633/633、monster behavior 137/137、monster level-up 346/346、profession 57/57、combat ability 61/61、dungeon action 148/148、dungeon talent handler 60/60 均已覆盖。
- dungeon reward post-processing smoke：21/21 通过，覆盖 `GenerateRewards` 的 Grizzly/Kitten/Velociraptor 难度奖励后处理、`DRAGON1`/`STEPS1` 当前用户属性奖励增量、合成 `DAMAGE2`/`WINCHAOS` player.hpl 不触发地牢后处理的回归，以及 synthetic PlayerPrefs/current-user save loading 到 `DRAGON1`/`STEPS1` 后处理的 fixture；独立 seed-level current-user reward smoke 23/23 通过，验证这些 loaded attributes 会让 floor seed 奖励和放置计数从 12 增到 14。
- starter smoke：12/12 通过。
- starter asset pack：21 个条目、25 个 PNG 引用、5/5 检查通过；覆盖 10 张 starter card、3 个 starter monster 的 big/tile 图、Warrior big/little 图和 7 个 floor 1 视觉资源，所有引用文件均存在。
- starter browser prototype：`prototype/starter/` 已能从本地 HTTP server 直接加载 starter/full catalog JSON 和 PNG，提供 Overview/Cards/Professions/Monsters/Dungeon/Remaster/Combat/Play 八个视图。Cards 视图可在 starter 子集和全量 370 张 recovered cards 间切换，展示卡图、类型、费用、availability、bias、effect 和 runtime status；Monsters 视图可在 starter 子集和全量 73 个 recovered monsters 间切换，展示 big/tile 图、boss 标记、等级、地点、环境权重、基础牌组、preferred cards、装备、倍率、behavior status 和 level-up status；Dungeon 视图现在展示 floor-1 seed snapshot，并从 `dungeon_generation.json` / `dungeon_generation_accuracy_gaps.json` 摘要展示 board/RNG、maze/pathing、monster placement、rewards/gold、boss/feature 和原版准确性缺口；Remaster 视图从 `remaster_manifest.json`、`remaster_completion_audit.json` 和 `runtime_engine_coverage.json` 展示当前 completion decision、阻塞项、artifact/view 覆盖、runtime boundary、area checklist 和下一步工程队列；Professions 视图可浏览 16 个职业、37 个 combat ability、33 个 dungeon action、43 个 DungeonTalent、职业起始牌组、职业关联技能和 recovered art；Play 视图可跑简化地牢移动、starter card combat、敌方回合、胜利清格、奖励和 reset，并在同一视图展示 `remaster_starter_combat.json` 的 runtime snapshot、fixture event counts 和 replay log；Playwright 已检查桌面与 390px 移动端布局、截图、控制台和一场首战胜利回到地牢。它仍不是原版准确 runtime。
- starter combat：3 场 deterministic 简化夹具可运行，卡牌效果已通过 `tools/remaster_runtime.py` 执行，starter combat checks 88/88 通过，normal-path `Card.ResourcesOff` / `CanAfford` cost modifier catalog / `Card.PayFor` branch catalog / `Card.WillBeCountered -> Enemy.WillCounter` priority boundary / `Card.PlayMe` order / `Game.PlayingCard(c)` boundary / delayed reaction/decay/doubleSpell boundary / inactive reaction+alternate-branch catalog / `Player.PlaySideEffects` branch boundary/catalog / zone lifecycle+GetAction catalog / discard-to-Die boundary / Die graveyard boundary / DestroyDie/Bounce/Flick/Destroy/WipeClean static lifecycle catalog / deterministic lifecycle fixture / Sword equipment lifecycle boundary / Sword.CheckCounters equipment trigger boundary / Sword trigger gate boundary fixture、normal-path `ActionPlay` priority / highest-priority selection fixture、normal-path `GetAllActions` / `GetAllActionsPlusTargets` candidate/action+target fixture、normal-path `AIIsValidPlusTargets` / `AIGetTargets` target-legality fixture、normal-path target-set construction fixture、normal-path `AIPhysical.GetStackInput` / `ActionBase.Perform` order / action-counter snapshot boundary / `ActionBase.Resolve` current-action lifecycle boundary / `ActionPlay.PayCosts/PerformAction` card bridge / `ActionPass.Perform` payload dispatch / `GamePhysical.AddToVisualStack*` shape fixture、`AIPlayerRandom.AmIDone` / random candidate mutation / `AIPerformAction` / `AIPass` packaging fixture、27 个 card-play pipeline event、27 个 card-cost event、27 个 Card.ResourcesOff cost modifier catalog event、27 个 Card.PayFor branch catalog event、27 个 AI WillBeCountered boundary event、27 个 Card.PlayMe order event、27 个 Game.PlayingCard boundary event、27 个 delayed reaction/decay/doubleSpell boundary event、27 个 Card.PlayMe reaction catalog event、27 个 Player.PlaySideEffects branch boundary event、27 个 Player.PlaySideEffects catalog event、27 个 zone lifecycle catalog event、27 个 DestroyDie/Bounce/Flick/Destroy/WipeClean static lifecycle catalog event、27 个 deterministic lifecycle fixture event、24 个 discard-to-Die boundary event、24 个 Die graveyard boundary event、3 个 Sword equipment lifecycle boundary event、2 个 Sword.CheckCounters equipment trigger boundary event、7 个 Sword trigger gate boundary event、27 个 AI selection event、27 个 AI candidate pipeline event、43 个 AI target-legality event、27 个 AI target-set construction event、27 个 action execution event、27 个 AIPhysical stack-input event、27 个 action execution order event、27 个 action-counter boundary event、27 个 current-action lifecycle event、27 个 visual-stack boundary event、42 个 AI turn policy event、42 个 AI AmIDone boundary event、27 个 AI random candidate mutation boundary event、15 个 pass event、15 个 ActionPass override event 和 15 个 pass payload dispatch event 已接入，但仍不是完整原版准确 AI、active counter reaction replay、full target legality、target-set replay、full action execution、reaction/SBE、UI、visual stack、pass side effects、完整 zone/Die/Exile/DestroyDie/Bounce/Flick/Destroy/WipeClean/equipment lifecycle 或完整 timing。
- starter monster runtime smoke：16/16 通过，使用共享 runtime 覆盖 Pixie/Skeleton/Wyvern 的 7 个 level-up case 和 3 个 behavior case；仍不代表完整怪物 AI、回合时机或限制谓词。
- monster control-flow replay：34/34 通过，使用共享 runtime 覆盖 Demon/Mage/Sphinx 手工行为分支、Hydra/Sphinx/Treant 手工升级生命值分支、17 个正向/跳过 branch fixture 和 10 个 raw Monster state-write event；仍不代表原版 combat timing、typed state semantics 或 Unity lifecycle。
- Sphinx restriction smoke：13/13 通过，使用共享 runtime 覆盖 `Sphinx.ForbidPlay` 禁牌类型谓词和 `StartTurn` 禁用类型选择 fixture；仍不 replay Unity UI message、随机选择或完整 AI 回合。
- dungeon seed：floor 1 snapshot 可运行，depth-2 seed 5 MimicChest seed fixture 也可运行并在 `remaster_dungeon_mimic_seed.json` 记录 1 个 MimicChest tile；`dungeon_seed_sweep.json` 16/16 通过，覆盖 180 个 compact case（10 个 seed、depth 1/2/3、Grizzly Bear/Kitten/Velociraptor、无属性/DRAGON1+STEPS1），确认 180/180 连通、奖励全放置、无 feature collision、depth 1 无 MimicChest、depth > 1 有 6 个 MimicChest case、physical boundary sweep union 6/6；`dungeon_generate_monster_levels_recovery.json` 20/20 通过，确认 recovered GenerateMonsterLevels bucket walk 已被 harness 按 `raw_counts` 重放；`dungeon_monster_level_target_boundary.json` 18/18 通过，确认 54 个 monster level sum exact、126 个 over-target、0 个 under-target、最大 over-target 24，因此 seed sweep 的 126 个非 exact case 是 floor-boundary overshoot。seed 输出 `GetToPlayerThreats` / `GetThreatComponents` 网格 fixture、sorted-ThreatComponent boss 选点、`DungeonFeature.AtTile -> VirtualObject.SetParent` 证据、`TreasureChest`/`MimicChest` 特殊副作用注释、结构化 `CardFinder` 宝箱候选过滤/权重注释、`MimicChest.Open` 生成/显示链路注释、fixture 级 feature registry 和 6 条 physical construction boundary catalog；GenerateRewards 难度/用户属性后处理已纳入 seed 奖励序列，并由独立 smoke 验证规则。`dungeon_add_rewards_bridge.json` 28/28 通过，覆盖同一 180 个 compact case 的 2,658 个 placed reward、2,582 个 non-fallback ThreatComponent pick、648 个 Shop gold sample、0 个 gold schedule mismatch、0 个 feature registry count mismatch 和 6/6 physical boundary id。`dungeon_rng_replay_gaps.json` 40/40 通过，记录 20 类 RNG/list-order 消费者、129 个已记录标量 fixture、0 个可推断但未记录标量消费者、17 次 shuffle 调用、17 条 shuffle order boundary 和 349 个 fixture-derived shuffle index draw，全部仍非原版 replay。`dungeon_path_between_smoke.json` 21/21 通过，覆盖 `PathBetween` wrapper retry、try-number predicate、destination `MoveNextTo` 例外和 11 条 neighbor shuffle boundary。`utility_shuffle_recovery.json` 39/39 通过，恢复 8 个 `Utility.Shuffle` 泛型实例的 6 个直接 index-loop 和 2 个 wrapper 形态；`dungeon_shuffle_helper_recovery.json` 36/36 通过，目录化 6 条 shuffle helper 路径，其中 5 条 `Utility.Shuffle`/delegated 路径已接入 index-loop 形态，1 条 TreasureChest `0x1001cb21c` helper 已由 smoke 验证交换语义；当前 seed 覆盖 4 类路径、17 条 order boundary 和 349 个 fixture-derived index draw，PathBetween 由独立 smoke 覆盖 11 条 boundary，但原版 index stream replay 仍为 false。`mimic_chest_open_smoke.json` 30/30 通过，验证 MimicChest.SetLevel/Open 的高层 spawn/display 链，但 `DisplayInMini`/`RefreshNoWipe` Unity internals 仍未 replay。`dungeon_shop_generation_smoke.json` 28/28 通过，验证 GenerateShop negative early return、Shop feature creation 和 gold/budget setter，seed Shop budget 为 `[9, 7, 5, 5]`；`shop_inventory_ui_smoke.json` 54/54 通过，验证 Shop field offsets、items/counters、MasterThief purchase 和 dialogue-object construction fixture；`shop_item_generation_recovery.json` 40/40 通过，验证 Shop.GenerateItems 的 `[1,3,5]` tier、CardFinder.ChooseReward、重复检测重选和 Utility.Shuffle 调用形态，但 ShopDialogueObject/Unity UI internals、原版 RNG stream 和连续 CardFinder 状态仍未 replay。`current_user_save_cardfinder_smoke.json` 33/33 通过，验证 synthetic PlayerPrefs currentUser、synthetic `player.hpl` 解析和 CardFinder unlock pool 串联 fixture。`dungeon_seed_current_user_postprocessing_smoke.json` 23/23 通过，验证 loaded current-user attributes 会让 floor seed reward/placement count 从 12 增到 14。`dungeon_physical_construction_gaps.json` 48/48 通过，记录 20 个 floor-1 registry feature、19 个 DungeonFeature-like child、0 个 collision、6 类 Unity physical construction 缺口和 6 条边界目录，其中 floor-1 seed 5 条 covered、any-seed fixture 6/6 covered。`dungeon_original_accuracy_flag_index.json` 12/12 通过，归档 262 个 false flag entry、2,020 次 occurrence、6 个队列且 uncategorized=0。`dungeon_generation_accuracy_gaps.json` 171/171 通过，汇总 396 个地牢相关 smoke check、16 个 seed sweep check、20 个 GenerateMonsterLevels recovery check、18 个 monster level boundary check、28 个 AddRewards bridge check，且 failed=0，并纳入 40 个 RNG replay gap check、36 个 shuffle helper recovery check、39 个 Utility.Shuffle recovery check、21 个 PathBetween smoke check、40 个 Shop item generation recovery check、12 个 false-flag index check 和 6/6 any-seed physical boundary coverage；但仍确认 4 个 seed 原版准确性 false 规则（包括 `unity_physical_replay_complete=false`）、真实 `player.hpl`/原版 PlayerPrefs 集成缺口、当前工作区真实 save/PlayerPrefs 候选样本数为 0，以及 18 个 `prototype_runtime_ready=false` artifact；byte-accurate Unity physical 构造、RNG/list 顺序、shuffle/index stream、exact 原版 monster level-list replay、CardFinder 精确列表/RNG replay、真实 `player.hpl` round-trip、下游 Unity visual side effects 和完整 reward RNG stream 仍未完整。
- CardFinder reward analysis：`cardfinder_reward_analysis.json` 已把 floor 1 Warrior TreasureChest 的 base-unlocked 候选池具体化为 31 张、总权重 75、概率和为 1.0，并按原 `CardList.GetCardList()` 顺序输出 `RandomRange(1,75)` roll band；requirement-gated 候选另列 7 张，其中 6 张已 join 到 achievement 解锁文案。`cardfinder_unlock_state_smoke.json` 跑 22/22 个检查，用 `DAMAGE2` fixture 验证 `Execute` 会进入 current-user 候选池，使候选数变 32、总权重变 85，并确认 requirement `103/never` 仍不可解锁。全卡 requirement join 只剩 `WINCHAOS` / `WINCHAOS2` 两个 enum-only gate 需要运行时成就状态确认；current-user lifecycle 已结构化，但这仍不等同于真实 `player.hpl` round-trip 或完整 RNG/list replay。
- Current-user loading：`current_user_loading.json` 已结构化 `GameManager.GetCurrentUser` / `LoadCurrentUser` / `SetCurrentUser`、PlayerPrefs key `currentUser`、`profiles/<user>/player.hpl` / `player.hpl.bkp`、`DungeonUser.attributes` offset `0x80`、`(\d+): (\d+)\D*` 属性 pair 解析和 missing-file -> `CreateUser` fallback；`current_user_loading_smoke.json` 19/19 通过。`dungeon_user_save_codec_smoke.json` 用合成 save text 验证属性 pair、seen-list、history round-trip 和 parsed UserAttribute -> CardFinder unlock，20/20 通过。`current_user_save_cardfinder_smoke.json` 把 synthetic PlayerPrefs currentUser、synthetic `profiles/<user>/player.hpl` 解析和 CardFinder 候选池扩展串成 33/33 通过的 integration fixture。`real_save_sample_inventory.json` 4/4 通过，但 `candidate_file_count=0`、`exact_player_hpl_sample_count=0`、`playerprefs_candidate_count=0`。剩余缺口是真实 save 文件导入/round-trip、原版 Unity PlayerPrefs 存储和 runtime harness 接入。
- CardFinder reward smoke：`cardfinder_reward_smoke.json` 对该候选池的扣权重 selector 跑 96/96 个边界检查；它验证 roll band 选择机制，不验证 Unity RNG 状态、CardList 构造副作用或连续奖励的 `Dungeon.SpawnCard` mutation 序列。
- CardFinder spawn sequence smoke：`cardfinder_spawn_sequence_smoke.json` 跑 16/16 个检查，用 `StormSlash1 -> StormSlash2` 的目标 roll 序列验证 `SpawnCard` base-name mutation 后候选池会从 31/75 变为 29/61，并移除共享 `StormSlash` 计数的候选；它仍不是完整 chest loot / RNG replay。
- Dungeon spawn tracking：`dungeon_spawn_tracking.json` 已结构化 `Dungeon.SpawnCard` / `SpawnCount` 的 `0x108`、`0x110` 两个计数字典、`0x120/0x121/0x122` 三个 flag byte、`Card.BaseName` 去数字段 key 归一化和 `BuildBoard` 生成/结束阶段切换；`dungeon_spawn_tracking_smoke.json` 跑 10/10 个 fixture check，验证等级变体共享计数和 flag-directed map 读写。
- TreasureChest loot smoke：`treasure_chest_loot_smoke.json` 跑 24/24 个检查，覆盖 `GenerateLoot()` 的 1/2/3 件阈值、`GenerateLoot(itemCount)` 第一件必卡、后续 `0.45` 金币分支、卡牌分支、SpawnCard 抑制，以及 `0x1001cb21c` 的最终 loot shuffle helper 交换语义；仍不 replay Unity RNG stream、shuffle index 来源或完整 reward placement。

## 推荐技术路线

优先推荐数据驱动重写，而不是尝试升级旧 Unity 工程：

- 逻辑层：TypeScript 或 Python 先实现纯规则模拟器，方便 snapshot 和 fixture 测试。
- UI 层：Web/TypeScript 或 Godot 2D。原游戏是卡牌 + tile dungeon，不需要 3D。
- Unity 仅在目标平台、商店发布或团队经验强绑定 Unity 时再考虑；不要把原 IL2CPP 包当作可升级源码。

## 实现阶段

### 1. Runtime Rule Core

目标：把 normalized traces 变成可执行规则，不接 UI。

输入：

- `cards.json`
- `card_runtime_smoke.json`
- `card_runtime_matrix_smoke.json`
- `card_metadata_recovery.json`
- `card_runtime_accuracy_gaps.json`
- `card_original_accuracy_flag_index.json`
- `card_context_dependency_index.json`
- `card_effect_value_flow_index.json`
- `card_rng_recovery.json`
- `card_manual_control_flow_replay.json`
- `card_recorded_step_replay.json`
- `card_lifecycle_replay.json`
- `card_zone_replay.json`
- `card_payment_replay.json`
- `card_play_replay.json`
- `card_ai_value_recovery.json`
- `card_ai_value_matrix_smoke.json`
- `card_ai_priority_matrix_smoke.json`
- `card_actionplay_bridge_matrix_smoke.json`
- `ai_value_runtime_smoke.json`
- `creature_ai_weight_recovery.json`
- `ai_policy_recovery_gaps.json`
- `ai_policy_virtual_slot_xrefs.json`
- `ai_virtual_dispatch_plan.json`
- `ai_action_priority_recovery.json`
- `ai_highest_priority_selection.json`
- `ai_action_candidate_recovery.json`
- `ai_action_candidate_replay.json`
- `ai_target_legality_recovery.json`
- `ai_target_legality_replay.json`
- `target_wrapper_identity_recovery.json`
- `ai_rng_list_order_recovery.json`
- `ai_turn_policy_recovery.json`
- `ai_turn_policy_replay.json`
- `action_execution_recovery.json`
- `action_execution_replay.json`
- `action_runtime_accuracy_gaps.json`
- `reaction_sbe_cleanup_recovery.json`
- `visual_stack_coroutine_recovery.json`
- `player_payment_recovery.json`
- `pass_end_turn_recovery.json`
- `card_play_pipeline_recovery.json`
- `monster_catalog.json`
- `monster_runtime_smoke.json`
- `monster_runtime_matrix_smoke.json`
- `monster_runtime_accuracy_gaps.json`
- `monster_original_accuracy_flag_index.json`
- `monster_context_dependency_index.json`
- `monster_effect_value_flow_index.json`
- `profession_skills.json`
- `profession_starting_profile_smoke.json`
- `profession_skill_runtime_smoke.json`
- `profession_skill_runtime_matrix_smoke.json`
- `profession_skill_scheduler_matrix.json`
- `profession_skill_runtime_accuracy_gaps.json`
- `profession_skill_original_accuracy_flag_index.json`
- `profession_skill_rng_recovery.json`
- `profession_skill_recorded_replay.json`
- `profession_skill_targeting_ui_bridge.json`
- `profession_skill_context_dependency_index.json`
- `profession_skill_effect_value_flow_index.json`
- `profession_skill_scheduler_recovery.json`
- `talent_learning_ui_recovery.json`
- `talentbase_reachability.json`
- `dungeon_reward_postprocessing_smoke.json`
- `dungeon_seed_current_user_postprocessing_smoke.json`
- `dungeon_seed_sweep.json`
- `dungeon_monster_level_target_boundary.json`
- `dungeon_rng_replay_gaps.json`
- `utility_shuffle_recovery.json`
- `dungeon_shuffle_helper_recovery.json`
- `dungeon_path_between_smoke.json`
- `dungeon_add_rewards_bridge.json`
- `dungeon_physical_construction_gaps.json`
- `remaster_dungeon_mimic_seed.json`
- `mimic_chest_open_smoke.json`
- `dungeon_shop_generation_smoke.json`
- `shop_inventory_ui_smoke.json`
- `current_user_save_cardfinder_smoke.json`
- `dungeon_generation_accuracy_gaps.json`
- `dungeon_original_accuracy_flag_index.json`
- `real_save_sample_inventory.json`
- `runtime_rule_backlog.json`

最低验收：

- 每个 `structured_trace` 有对应 runtime handler 或显式 unsupported marker。
- `runtime_rule_backlog.json` 当前没有剩余 normalized context/no-rule 条目；`PenaltyCurses*`、`Study`、`Tutor`、`UberTeleport`、25 个 deck-encoded 怪物、全部 73 个 monster level-up rules、combat ability、profession hook、dungeon action recovered effects 和 DungeonTalent handler effects 已进入 `tools/remaster_runtime.py` smoke。
- 已有文本和 trace 足够支撑的高优先级条目应保留在 `priority_runtime_smoke.json`；当前 420 个 check 已通过 `tools/remaster_runtime.py` 的共享 interpreter 执行，但仍需并入完整 runtime engine。
- `runtime_engine_coverage.json` 当前没有 unsupported effect 标签；下一批工作应按风险把记录型 handler 升级成原版准确的控制流、时机、RNG、选择器和对象生命周期实现。
- `runtime_rule_quality.json` 仍保持 unresolved operation 总数与 remaining runtime-rule count 为 0。
- 不能把 `executable_rule_complete` 改为 true，除非该条目有覆盖它的测试。

### 2. Combat Simulator

目标：复刻回合、牌库、状态、装备、reaction 和怪物 hook。

输入：

- 卡牌 runtime rules
- 怪物 base deck / level_up_rule / behavior_runtime_rule
- 职业 starting deck / combat ability runtime_rule

最低验收：

- starter slice 不再依赖手写假设；`Sword`、Warrior deck、Pixie/Skeleton/Wyvern 用同一规则引擎运行。
- Deck/hand/discard/exile/equipment、discard reshuffle、mana/action、shield/poison/damage type 都有 snapshot。
- 每个 priority runtime smoke 项都有同一规则引擎下的回归测试。

### 3. Dungeon Generator

目标：把 `dungeon_generation.json` 变成可复现的 seed replay。

输入：

- `dungeon_generation.json`
- `remaster_dungeon_seed.json`
- `remaster_dungeon_mimic_seed.json`
- `current_user_loading.json`
- `dungeon_user_save_codec_smoke.json`
- `current_user_save_cardfinder_smoke.json`
- `real_save_sample_inventory.json`
- `dungeon_rng_replay_gaps.json`
- `utility_shuffle_recovery.json`
- `dungeon_shuffle_helper_recovery.json`
- `dungeon_path_between_smoke.json`
- `dungeon_physical_construction_gaps.json`
- DungeonBoard/Tile/ThreatComponent 反汇编证据

最低验收：

- `AddMonsters`、reward generation、boss selection、shop gold、trap no-op 已可执行。
- `GetThreatComponents` / `GetToPlayerThreats` 的 fixture assumption 被替换为原版准确的 `Tile.GetThreat` 来源、队列/RNG 顺序和剩余对象副作用。
- `CreateFeature` / `VirtualObject` child registration side effects 至少有 fixture 级 feature registry 和 collision test；byte-accurate Unity 对象构造仍需补。
- `profiles/<user>/player.hpl` 有真实样本导入、属性 round-trip 和 PlayerPrefs current-user 选择测试。
- `prototype_runtime_ready` 只在原版关键路径被测试覆盖后改为 true。

### 4. Profession, Skills, Talents

目标：补齐职业动作、combat ability、dungeon action 和 dungeon talent handler。

输入：

- `profession_skills.json`
- `runtime_rule_quality.json`
- Talent/DungeonPlayer handler traces

最低验收：

- starting stats/deck/class biases 有测试。
- combat ability cooldown / validity / failure text 有测试。
- dungeon action targeting、card selection、tile selection 有测试。
- dungeon talent requirements 和 handler effects 有测试。
- `TalentBase` card-back path 不能只靠缺失证据实现为 playable；`talent_learning_ui_recovery.json` 已恢复静态 UI/学习链，但若后续仍找不到动态/遗留/存档构造路径和 live UI replay，需要继续保留 `talentbase_reachability.json` 这类显式边界证据。

### 5. Asset And Legal Boundary

目标：把素材使用和发布边界分开。

最低验收：

- Texture2D 已导出为 PNG，并保留 ResourceManager/resource path 到文件名映射；当前 1115/1117 个 Texture2D 成功导出，核心图像资源路径全部有唯一 PNG 映射，2 个 0x0 Font Texture 无图像数据。
- `remaster_asset_catalog.json` 已把卡牌、地牢 actor、职业、combat ability 和 dungeon talent icon 接到 PNG，5/5 覆盖检查通过；同时保留 resource-only / structured-only 标记，供原型和素材替换流程使用。
- `remaster_starter_asset_pack.json` 已把第一版 prototype 的 10 张卡、3 个怪物、Warrior 和 floor 1 视觉资源收敛到 25 个存在的 PNG 文件引用；这方便原型加载，不改变发布授权边界。
- 发布版若无授权，使用新素材、新文本和新商标；解析 artifact 只作为研究资料。
- 原名称、规则文本、图像、音频是否可用必须有授权判断。

### 6. Playable Prototype

目标：在规则通过测试后再接 UI。

当前已有 `prototype/starter/` 静态托管 browser prototype，可作为 UI shell、素材加载验证和第一版可交互 slice。它满足“数据可驱动一个小型 combat/dungeon loop”的验证目标，但不满足原版准确 runtime 验收，因为 combat/dungeon 仍使用简化规则。

建议第一版范围：

- Warrior
- starter 10 cards
- Pixie / Skeleton / Wyvern
- floor 1 constants
- `remaster_starter_asset_pack.json` PNG references for those cards, monsters, Warrior, and floor 1 visuals
- deterministic seed

最低验收：

- 所有逻辑仍可在无 UI 的测试里跑。
- UI 不绕过规则引擎。
- manifest 和 completion audit 能明确区分 playable prototype 与 original-accurate runtime。

## 当前下一步

`runtime_rule_backlog.json` 的 normalized context/no-rule 队列已清空。下一阶段不要继续按旧 priority 2/3 缺口排队，而应从已结构化的规则中选一条可执行纵切：

- 把 `tools/remaster_runtime.py` 中保守记录型 handler 升级为正式 runtime handlers，尤其是完整牌库循环、ActionBase.Perform/Resolve、Card.PayFor/Card.PlayMe、AI、状态结算、回合时机、combat ability cooldown/validity、dungeon action targeting/card selection/tile selection 和 dungeon talent UI/learning flow。
- 继续收敛 `run_remaster_starter_combat.py`、`card_runtime_smoke.py`、`card_runtime_matrix_smoke.py`、`card_manual_control_flow_replay.json`、`card_recorded_step_replay.json`、`card_lifecycle_replay.json`、`card_zone_replay.json`、`card_payment_replay.json`、`card_play_replay.json`、`card_runtime_accuracy_gaps.json`、`card_original_accuracy_flag_index.json`、`card_context_dependency_index.json`、`card_effect_value_flow_index.json`、`card_rng_recovery.json`、`card_ai_value_recovery.json`、`card_ai_value_matrix_smoke.json`、`card_ai_priority_matrix_smoke.json`、`card_actionplay_bridge_matrix_smoke.json`、`card_get_ai_value_adjustment_recovery.json`、`ai_value_runtime_smoke.json`、`creature_ai_weight_recovery.json`、`ai_policy_recovery_gaps.json`、`ai_action_candidate_recovery.json`、`ai_action_candidate_replay.json`、`ai_target_legality_recovery.json`、`ai_target_legality_replay.json`、`target_wrapper_identity_recovery.json`、`ai_turn_policy_recovery.json`、`ai_turn_policy_replay.json`、`action_execution_recovery.json`、`action_execution_replay.json`、`action_runtime_accuracy_gaps.json`、`reaction_sbe_cleanup_recovery.json`、`pass_end_turn_recovery.json`、`card_play_pipeline_recovery.json`、`monster_runtime_smoke.py`、`monster_runtime_matrix_smoke.py`、`monster_deck_behavior_bridge.json`、`monster_context_dependency_index.json`、`monster_effect_value_flow_index.json`、`monster_runtime_accuracy_gaps.json`、`monster_original_accuracy_flag_index.json`、`monster_control_flow_replay.json`、`monster_rng_recovery.json`、`starter_monster_runtime_smoke.py`、`sphinx_restriction_smoke.py`、`profession_starting_profile_smoke.py`、`profession_skill_runtime_smoke.py`、`profession_skill_runtime_matrix_smoke.py`、`profession_skill_scheduler_matrix.json`、`profession_skill_recorded_replay.json`、`profession_skill_targeting_ui_bridge.json`、`profession_skill_context_dependency_index.json`、`profession_skill_effect_value_flow_index.json`、`profession_skill_runtime_accuracy_gaps.json`、`profession_skill_original_accuracy_flag_index.json`、`profession_skill_rng_recovery.json`、`profession_skill_scheduler_recovery.json`、`talent_learning_ui_recovery.json`、`talentbase_reachability.json`、`dungeon_reward_postprocessing_smoke.py`、`dungeon_seed_current_user_postprocessing_smoke.py`、`dungeon_shop_generation_smoke.py`、`shop_inventory_ui_smoke.py`、`shop_item_generation_recovery.json`、`current_user_save_cardfinder_smoke.json`、`real_save_sample_inventory.json`、`dungeon_rng_replay_gaps.json`、`utility_shuffle_recovery.json`、`dungeon_shuffle_helper_recovery.json`、`mimic_chest_open_smoke.json`、`dungeon_physical_construction_gaps.json`、`dungeon_add_rewards_bridge.json`、`dungeon_original_accuracy_flag_index.json` 和 `dungeon_generation_accuracy_gaps.json` 的简化假设：卡牌效果、基础牌区、discard reshuffle、manual card control-flow branch fixture、recorded state/object fixture、card zone/action fixture、card payment/counter fixture、card play/side-effect fixture、卡牌 RNG/helper/list-order 静态形态、AI action candidate/action-target fixture、AI target legality/target-set deterministic fixture、target wrapper/target-set identity 静态形态、AI turn/pass/invocation deterministic fixture、action execution/visual-stack fixture、action runtime 原版准确性队列、reaction/SBE cleanup 静态形态、pass/end-turn 静态形态、Card.AIWeight/GetAIValue/scenario adjustment runtime fixture、全卡 AI value matrix fixture、全卡 ActionPlay priority matrix fixture、全卡 ActionPlay bridge/hand-enumeration/action-target-pair matrix fixture、Creature.AIWeight formula/combat-state replay、normal-path Card.ResourcesOff/CanAfford cost modifier catalog/Card.PayFor branch catalog/WillBeCountered Enemy.WillCounter priority boundary/Card.PlayMe order/Game.PlayingCard boundary/delayed reaction-decay-doubleSpell boundary/inactive reaction catalog/Player.PlaySideEffects branch boundary/catalog/zone lifecycle+GetAction/discard-to-Die/Die graveyard/DestroyDie-Bounce-Flick-Destroy-WipeClean static lifecycle catalog/deterministic lifecycle fixture/Sword equipment lifecycle/Sword.CheckCounters equipment trigger/Sword trigger gate boundary fixture、normal-path ActionPlay priority/highest-priority selection fixture、normal-path GetAllActions/GetAllActionsPlusTargets candidate/action+target fixture、normal-path AIIsValidPlusTargets/AIGetTargets target-legality fixture、normal-path target-set construction fixture、normal-path AIPhysical.GetStackInput/ActionBase.Perform order/action-counter snapshot/Resolve current-action lifecycle/ActionPlay PayCosts/PerformAction card bridge/ActionPass.Perform payload dispatch/GamePhysical.AddToVisualStack* shape fixture、AIPlayerRandom AmIDone/random candidate mutation/AIPerformAction/AIPass packaging fixture、`Sword.CheckCounters`、全卡 source-method interpreter matrix、卡牌原版准确性队列、卡牌 false flag 索引、卡牌 computed/receiver argument 队列、AIPlayer/action/card/object AI policy 队列、virtual-slot 派发边、dispatch recovery plan、首条 action-priority 公式、最高优先级选择形态、候选 action 构造形态、action+target pair 包装形态、target legality/target-set construction 形态、TargetFinder metadata、target wrapper payload、target-set list mutation、inclusive RandomRange、tail-swap target sampling 和 random-order target-set shuffle 形态、Random AI turn/pass/action execution 形态、ActionBase.Perform/Resolve、ActionPlay Card.PlayMe bridge、ActionBase/Game reaction/SBE cleanup、Counterspell/ReactionCard/add-counter/delayed-reaction 形态、Card.PayFor/Card.WillBeCountered/Card.PlayMe 下层支付/反制边界/出牌/牌区形态、visual-stack dispatch 形态、全怪物 recovered behavior/level-up 阈值、全怪物 source-method interpreter matrix、怪物 read/context owner 队列、怪物 computed/receiver argument 队列、怪物手工控制流/state-write fixture、怪物 RNG/list-order 静态形态、怪物原版准确性队列、怪物 false flag 索引、Pixie/Skeleton/Wyvern starter monster hooks、Sphinx 禁牌谓词、全职业起始 profile、职业 loadout/cooldown fixture、全职业/技能/地城动作 source-method interpreter matrix、全职业/技能 cooldown scheduler matrix、职业/技能 manual/state-write/talent-handler recorded replay、职业/技能 read/context owner 队列、职业/技能 computed/receiver argument 队列、职业/技能原版准确性队列、职业/技能 false flag 索引、职业/技能 RNG/random-reward 静态形态、职业/技能 cooldown/use/OnClick/ClearMind、`Dungeon.WinFight` 外层顺序、`Dungeon -> DungeonPlayer.WinFight` 调用点、WinFight tick/ready-message 调度形态、`GamePhysical.EndGame` coroutine 中的 `DungeonPlayer.CoolingDownAbilities(level)` 调用点、ready-message-before-WinFight yield ordering、`Dungeon.EndFight` slot-152 非 player receiver 边界、DungeonTalent handler effects、TalentBase static UI/pay-and-learn 链路、TalentBase reachability 边界、GenerateRewards 后处理、synthetic PlayerPrefs/save/CardFinder fixture、synthetic current-user save reward post-processing、seed-level synthetic current-user reward placement、Shop gold/budget setter fixture、Shop inventory/dialogue fixture、Shop item generation CardFinder/duplicate/shuffle 调用形态、真实 save 样本缺口、地牢 RNG/list-order 队列、Utility.Shuffle index-loop 形态 fixture、shuffle helper recovery 队列、MimicChest.Open 高层 spawn/display fixture、AddRewards ThreatComponent/gold/feature-registry bridge、Unity physical construction 队列、地牢 false flag 索引和地牢生成原版准确性队列已迁到共享 interpreter/fixture/审计规则，下一步是替换 RNG stream、shuffle/index stream、read/context value-flow、parameter-value/receiver-identity replay、full original AI candidate replay、full original target legality、full original target-set replay、full original TargetWrapper/target-set identity replay、full original AI turn replay、full original action execution replay、full original reaction/SBE cleanup replay、full pass/end-turn replay、full card payment/play/zone/Die/Exile/DestroyDie/Bounce/Flick/Destroy/WipeClean/equipment lifecycle replay、original visual-stack replay、AI value combat-state replay、状态结算、typed object lifecycle、回合时机、alternate coroutine branch replay、targeting/UI flow、TalentBase live UI/callback/payment replay、TalentBase 动态/遗留/存档构造路径、完整 reward RNG stream、Unity physical construction、real save/PlayerPrefs 和更广的限制/特殊 hook。
- `visual_stack_coroutine_recovery.json` 已把 visual-stack queue/no-yield/suppression/count/pop 与 coroutine/yield 静态形态纳入审计；下一步仍是把这些静态证据替换成 original visual-stack replay 和 Unity coroutine timing 回归。
- `player_payment_recovery.json` 已把 Player.PayFor/payment UI bridge 静态形态纳入审计；下一步仍是把这些静态证据替换成 original player payment replay、Unity payment UI replay 和 full card payment timing 回归。
- `pass_end_turn_recovery.json` 已把 pass/end-turn 与 Game turn lifecycle 静态形态纳入审计；下一步仍是把这些静态证据替换成 original pass/end-turn replay、trigger queue object identity 和 turn timing 回归。
- `target_wrapper_identity_recovery.json` 已把 TargetFinder metadata、target result/cache、target wrapper payload、target-set list mutation、inclusive RandomRange、tail-swap target sampling 和 random-order target-set shuffle 静态形态纳入审计；下一步仍是 original TargetWrapper/target-set identity、target UI ownership、list ownership/order 和 RNG stream replay。
- `ai_rng_list_order_recovery.json` 已把 inclusive RandomRange、priority tie-break、candidate tail-swap removal、provider target-set RNG、target tail-swap sampling、target-set Fisher-Yates 和 PerformRandomAction RNG 静态形态纳入审计；下一步仍是 original System.Random/Unity stream、cross-call interleaving、candidate/target list ownership 和 full AI turn replay。
- 扩展到完整牌库循环、ActionBase.Perform/Resolve、Card.PayFor/Card.PlayMe、AI、状态结算、回合时机、monster hooks、combat ability cooldown/validity 和 dungeon action targeting。
