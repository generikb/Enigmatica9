ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { mod: 'computercraft' },
        { mod: 'superiorshields' },
        { mod: 'mininggadgets' },
        { mod: 'enigmaticunity' },
        { mod: 'compactmachines' },

        { output: /pneumaticcraft:.*_upgrade/ },
        { output: /powah:player_transmitter.*/ },
        { output: 'ae2:silicon' },
        { output: 'ae2:formation_plane' },
        { output: 'ae2:annihilation_plane' },
        { output: 'ars_nouveau:ritual_wilden_summon' },
        { output: 'create:andesite_alloy' },
        { output: 'minecraft:blast_furnace' },
        { output: 'minecraft:furnace' },
        { output: 'minecraft:fire_charge' },
        { output: 'thermal:ice_charge' },
        { output: 'thermal:lightning_charge' },
        { output: 'thermal:earth_charge' },
        { output: 'twilightforest:raw_ironwood' },

        { type: 'thermal:smelter_recycle' },
        { type: 'ae2:charger' },
        { type: 'occultism:crushing' },
        { type: 'mekanism:energy_conversion' },
        { type: 'mekanism:separating' },
        { type: 'mekanism:compressing' },
        { type: 'mekanism:crushing' },
        { type: 'mekanism:sawing' },
        { type: 'mekanism:centrifuging' },
        { type: 'mekanism:activating' },

        { id: /ae2:inscriber/ },
        { id: 'ae2:network/blocks/crystal_processing_charger' },
        { id: 'ae2:network/blocks/energy_dense_energy_cell' },
        { id: 'ae2:network/blocks/quantum_link' },
        { id: 'ae2:network/blocks/controller' },
        { id: `ae2:network/crafting/cpu_crafting_unit` },
        { id: 'ae2:network/parts/quartz_fiber_part' },
        { id: 'ae2:network/wireless_terminal' },
        { id: 'ae2:network/upgrade_wireless_crafting_terminal' },
        { id: 'ae2:network/blocks/io_condenser' },
        { id: 'ae2:transform/fluix_crystals' },
        { id: 'ae2:transform/entangled_singularity' },
        { id: 'ae2:transform/entangled_singularity_from_pearl' },
        { id: 'ae2:misc/fluixpearl' },

        { id: /ars_scalaes:.*_broom_from_mixing_cauldron/ },
        { id: /ars_scalaes:.*_brush_from_mixing_cauldron/ },

        { id: 'constructionwand:stone_wand' },
        { id: 'constructionwand:iron_wand' },

        { id: /create:pressing\/.*_ingot/ },
        { id: /create:brass_(ladder|scaffolding|bars)_from_ingots_brass_stonecutting/ },
        { id: /create:copycat_.*_from_ingots_zinc_stonecutting/ },
        { id: 'create:crafting/kinetics/white_sail' },
        { id: 'create:crafting/kinetics/empty_blaze_burner' },
        { id: 'create:crafting/kinetics/mechanical_crafter' },
        { id: 'create:crafting/kinetics/brass_hand' },
        { id: 'create:mixing/brass_ingot' },
        { id: 'create:mixing/andesite_alloy_from_zinc' },
        { id: 'create:mixing/andesite_alloy' },
        { id: 'create:mechanical_crafting/wand_of_symmetry' },
        { id: 'create:mechanical_crafting/extendo_grip' },
        { id: 'create:item_application/brass_casing_from_wood' },
        { id: 'create:item_application/brass_casing_from_log' },
        { id: 'create:conversion_0' },
        { id: 'create:compat/ae2/milling/fluix_crystal' },
        { id: 'create:compat/ae2/milling/certus_quartz' },
        { id: 'create:compat/ae2/milling/ender_pearl' },
        { id: 'create:crushing/prismarine_crystals' },
        { id: 'create:sequenced_assembly/track' },

        { id: /createaddition:pressing\/.*_ingot/ },
        { id: /createaddition:crafting\/capacitor/ },
        { id: 'createaddition:crafting/portable_energy_interface' },
        { id: 'createaddition:crafting/digital_adapter' },
        { id: 'createaddition:compat/immersiveengineering/crushing/steel_ingot' },
        { id: 'createaddition:compat/immersiveengineering/constantan' },
        { id: 'createaddition:compat/immersiveengineering/electrum' },
        { id: 'createaddition:crushing/diamond' },

        { id: /emendatusenigmatica:plate\/from_ingot/ },
        { id: /emendatusenigmatica:rod\/from_ingot/ },
        { id: /emendatusenigmatica:gear\/from_ingot/ },
        { id: /emendatusenigmatica:dust\/from_gem/ },

        { id: `enigmaticunity:dim_source_producer` },

        { id: 'farmersdelight:integration/immersiveengineering/metalpress/pumpkin' },

        { id: 'farmingforblockheads:feeding_trough' },

        { id: 'functionalstorage:diamond_upgrade' },

        { id: /hexerei:.*_broom_from_mixing_cauldron/ },
        { id: /hexerei:.*_brush_from_mixing_cauldron/ },
        { id: 'hexerei:pestle_and_mortar_from_mixing_cauldron' },
        { id: 'hexerei:blood_sigil_from_mixing_cauldron' },
        { id: 'hexerei:herb_jar_from_mixing_cauldron' },
        { id: 'hexerei:mixing_cauldron' },

        { id: /immersiveengineering:blastfurnace\/fuel_/ },
        { id: /immersiveengineering:crafting\/.*_mix/ },
        { id: /immersiveengineering:crafting\/toolupgrade_powerpack_/ },
        { id: /immersiveengineering:crafting\/wirecoil_/ },
        { id: /immersiveengineering:crafting\/wire_/ },
        { id: /immersiveengineering:.*\/component_iron/ },
        { id: /immersiveengineering:.*\/component_steel/ },
        { id: /immersiveengineering:blueprint\/bullet_/ },
        { id: /immersiveengineering:metalpress\/bullet_/ },
        { id: 'immersiveengineering:crafting/treated_wood_horizontal' },
        { id: 'immersiveengineering:blastfurnace/steel' },
        { id: 'immersiveengineering:blastfurnace/steel_block' },
        { id: 'immersiveengineering:crafting/blastbrick' },
        { id: 'immersiveengineering:crafting/toolupgrade_drill_lube' },
        { id: 'immersiveengineering:crafting/tesla_coil' },
        { id: 'immersiveengineering:crafting/generator' },
        { id: 'immersiveengineering:crafting/floodlight' },
        { id: 'immersiveengineering:crafting/survey_tools' },
        { id: 'immersiveengineering:crafting/charging_station' },
        { id: 'immersiveengineering:crafting/powerpack' },
        { id: 'immersiveengineering:crafting/current_transformer' },
        { id: 'immersiveengineering:crafting/redstone_breaker' },
        { id: 'immersiveengineering:crafting/breaker_switch' },
        { id: `immersiveengineering:crafting/cloche` },
        { id: 'immersiveengineering:blueprint/electron_tube' },
        { id: 'immersiveengineering:blueprint/component_electronic' },
        { id: 'immersiveengineering:blueprint/light_bulb' },
        { id: 'immersiveengineering:blueprint/mold_unpacking' },
        { id: 'immersiveengineering:blueprint/mold_bullet_casing' },
        { id: 'immersiveengineering:blueprint/mold_unpacking_4' },
        { id: 'immersiveengineering:blueprint/mold_unpacking_9' },
        { id: 'immersiveengineering:blueprint/mold_packing_4' },
        { id: 'immersiveengineering:blueprint/mold_packing_9' },
        { id: 'immersiveengineering:blueprint/mold_plate' },
        { id: 'immersiveengineering:blueprint/mold_wire' },
        { id: 'immersiveengineering:blueprint/mold_rod' },
        { id: 'immersiveengineering:blueprint/mold_gear' },
        { id: 'immersiveengineering:blueprint/circuit_board' },
        { id: 'immersiveengineering:blueprint/component_electronic_adv' },
        { id: 'immersiveengineering:metalpress/melon' },
        { id: /empty_shell/, mod: 'immersiveengineering' },
        { id: /empty_casing/, mod: 'immersiveengineering' },
        { id: /immersiveengineering:crusher\/coal/ },
        { id: /immersiveengineering:crusher\/coke/ },

        { id: /industrialforegoing:laser_drill_ore/ },
        { id: /industrialforegoing:.*black_hole/ },
        { id: /industrialforegoing:dissolution_chamber\/range_addon/ },
        { id: /industrialforegoing:dissolution_chamber\/laser_lens/ },
        { id: 'industrialforegoing:dissolution_chamber/infinity_launcher' },
        { id: 'industrialforegoing:dissolution_chamber/infinity_backpack' },
        { id: 'industrialforegoing:dissolution_chamber/mechanical_dirt' },
        { id: 'industrialforegoing:crusher/sand_silicon' },
        { id: 'industrialforegoing:machine_frame_pity' },
        { id: 'industrialforegoing:washing_factory' },
        { id: 'industrialforegoing:fermentation_station' },
        { id: 'industrialforegoing:fluid_sieving_machine' },
        { id: 'industrialforegoing:ore_laser_base' },
        { id: 'industrialforegoing:fluid_laser_base' },
        { id: `industrialforegoing:dryrubber` },
        { id: 'industrialforegoing:latex_processing_unit' },
        { id: 'industrialforegoing:mob_duplicator' },
        { id: 'industrialforegoing:bioreactor' },
        { id: 'industrialforegoing:enchantment_extractor' },
        { id: 'industrialforegoing:enchantment_sorter' },
        { id: 'industrialforegoing:mob_crusher' },
        { id: 'industrialforegoing:fluid_extractor' },
        { id: 'industrialforegoing:enchantment_factory' },
        { id: 'industrialforegoing:water_condensator' },
        { id: 'industrialforegoing:wither_builder' },
        { id: 'industrialforegoing:enchantment_applicator' },
        { id: 'industrialforegoing:fluid_collector' },
        { id: 'industrialforegoing:block_breaker' },
        { id: 'industrialforegoing:block_placer' },
        { id: 'industrialforegoing:fluid_placer' },
        { id: 'industrialforegoing:mob_imprisonment_tool' },
        { id: 'industrialforegoing:animal_feeder' },
        { id: 'industrialforegoing:spores_recreator' },
        { id: 'industrialforegoing:mob_slaughter_factory' },
        { id: 'industrialforegoing:resourceful_furnace' },

        { id: 'littlelogistics:steam_locomotive' },
        { id: 'littlelogistics:tug' },

        { id: /mekanism:transmitter\/.*/ },
        { id: /mekanism:processing\/steel/ },
        { id: /mekanism:processing\/netherite/ },
        { id: /mekanism:processing\/.*\/to_dust/ },
        { id: /mekanism:reaction\/wood_gasification/ },
        { id: /mekanism:hazmat/ },
        { id: /mekanism:scuba/ },
        { id: /mekanism:fluid_tank/ },
        { id: /mekanism:chemical_tank/ },
        { id: /mekanism:factory\// },
        { id: /mekanism:tier_installer/ },
        { id: 'mekanism:crushing/charcoal_dust' },
        { id: 'mekanism:compat/ae2/fluix_crystal_to_dust' },
        { id: 'mekanism:compat/ae2/certus_crystal_to_dust' },
        { id: 'mekanism:gas_conversion/flint_to_oxygen' },
        { id: 'mekanism:processing/uranium/reprocessing/to_fuel' },
        { id: 'mekanism:processing/lategame/polonium_pellet/from_reaction' },
        { id: 'mekanism:reaction/substrate/water_hydrogen' },
        { id: 'mekanism:reaction/substrate/water_ethene' },
        { id: 'mekanism:reaction/substrate/ethene_oxygen' },
        { id: 'mekanism:nucleosynthesizing/heart_of_the_sea' },
        { id: 'mekanism:logistical_sorter' },
        { id: 'mekanism:upgrade/anchor' },
        { id: 'mekanism:sps_casing' },
        { id: 'mekanism:laser' },
        { id: 'mekanism:supercharged_coil' },
        { id: 'mekanism:structural_glass' },
        { id: 'mekanism:teleportation_core' },
        { id: 'mekanism:energy_tablet' },
        { id: 'mekanism:seismic_reader' },
        { id: 'mekanism:seismic_vibrator' },
        { id: 'mekanism:jetpack' },
        { id: 'mekanism:jetpack_armored' },
        { id: 'mekanism:free_runners' },
        { id: 'mekanism:free_runners_armored' },
        { id: 'mekanism:atomic_disassembler' },
        { id: 'mekanism:electric_bow' },
        { id: 'mekanism:flamethrower' },
        { id: 'mekanism:dictionary' },
        { id: 'mekanism:crafting_formula' },
        { id: 'mekanism:formulaic_assemblicator' },
        { id: 'mekanism:geiger_counter' },
        { id: 'mekanism:dosimeter' },
        { id: 'mekanism:oredictionificator' },
        { id: 'mekanism:metallurgic_infuser' },
        { id: 'mekanism:solar_neutron_activator' },
        { id: 'mekanism:dimensional_stabilizer' },
        { id: 'mekanism:fuelwood_heater' },
        { id: 'mekanism:electrolytic_separator' },
        { id: 'mekanism:energized_smelter' },
        { id: 'mekanism:purification_chamber' },
        { id: 'mekanism:digital_miner' },
        { id: 'mekanism:osmium_compressor' },
        { id: 'mekanism:personal_chest' },
        { id: 'mekanism:personal_barrel' },
        { id: 'mekanism:solar_neutron_activator' },
        { id: 'mekanism:isotopic_centrifuge' },
        { id: 'mekanism:robit' },
        { id: 'mekanism:thermal_evaporation_block' },
        { id: 'mekanism:thermal_evaporation_valve' },
        { id: 'mekanism:thermal_evaporation_controller' },
        { id: 'mekanism:boiler_casing' },
        { id: 'mekanism:boiler_valve' },
        { id: 'mekanism:pressure_disperser' },
        { id: 'mekanism:superheating_element' },
        { id: 'mekanism:meka_tool' },
        { id: 'mekanism:mekasuit_helmet' },
        { id: 'mekanism:mekasuit_bodyarmor' },
        { id: 'mekanism:mekasuit_pants' },
        { id: 'mekanism:mekasuit_boots' },
        { id: 'mekanism:module_radiation_shielding_unit' },
        { id: 'mekanism:module_geiger_unit' },
        { id: 'mekanism:module_dosimeter_unit' },
        { id: 'mekanism:module_inhalation_purification_unit' },
        { id: 'mekanism:electrolytic_core' },

        { id: 'minecraft:netherite_ingot' },
        { id: 'minecraft:lodestone' },
        { id: /minecraft:diamond_(helmet|chestplate|leggings|boots)/ },
        { id: /minecraft:diamond_(sword|pickaxe|axe|shovel|hoe)/ },

        { id: 'modularrouters:sender_module_1_alt' },
        { id: 'modularrouters:sender_module_2_x4' },
        { id: 'modularrouters:puller_module_2_x4' },
        { id: 'modularrouters:fluid_module_2_x4' },

        { id: 'naturesaura:offering/sky_ingot' },
        { id: 'naturesaura:altar/tainted_gold_block' },

        { id: 'occultism:ritual/craft_dimensional_matrix' },
        { id: 'occultism:ritual/craft_storage_controller_base' },
        { id: 'occultism:ritual/craft_stable_wormhole' },
        { id: 'occultism:ritual/craft_soul_gem' },
        { id: 'occultism:ritual/craft_familiar_ring' },
        { id: 'occultism:spirit_fire/spirit_attuned_gem' },

        { id: /pneumaticcraft:.*_compressor/ },
        { id: /pneumaticcraft:thermo_plant\/.*_drill_bit/ },
        { id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot' },
        { id: 'pneumaticcraft:explosion_crafting/compressed_iron_block' },
        { id: 'pneumaticcraft:pressure_chamber/compressed_stone' },
        { id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot' },
        { id: 'pneumaticcraft:pressure_chamber/compressed_iron_block' },
        { id: 'pneumaticcraft:pressure_chamber/solar_wafer' },
        { id: 'pneumaticcraft:pressure_chamber/empty_pcb' },
        { id: 'pneumaticcraft:thermo_plant/reinforced_pressure_tube' },
        { id: 'pneumaticcraft:assembly/unassembled_pcb' },
        { id: 'pneumaticcraft:assembly/red_dye' },
        { id: 'pneumaticcraft:assembly/solar_cell' },
        { id: 'pneumaticcraft:assembly/netherite_drill_bit' },
        { id: 'pneumaticcraft:pressure_chamber_valve' },
        { id: 'pneumaticcraft:pressure_chamber_glass' },
        { id: 'pneumaticcraft:logistics_core' },
        { id: 'pneumaticcraft:spawner_agitator' },
        { id: 'pneumaticcraft:module_expansion_card' },
        { id: 'pneumaticcraft:compressed_iron_gear' },
        { id: 'pneumaticcraft:pneumatic_helmet' },
        { id: 'pneumaticcraft:pneumatic_chestplate' },
        { id: 'pneumaticcraft:pneumatic_leggings' },
        { id: 'pneumaticcraft:pneumatic_boots' },
        { id: 'pneumaticcraft:etching_tank' },
        { id: 'pneumaticcraft:uv_light_box' },
        { id: 'pneumaticcraft:empty_pcb_from_failed_pcb' },
        { id: 'pneumaticcraft:spawner_extractor' },
        { id: 'pneumaticcraft:spawner_core_shell' },

        { id: 'powah:crafting/dielectric_rod_h' },
        { id: 'powah:crafting/dielectric_paste' },
        { id: 'powah:crafting/dielectric_paste_2' },
        { id: 'powah:crafting/dielectric_casing' },
        { id: 'powah:crafting/binding_card' },
        { id: 'powah:crafting/aerial_pearl' },
        { id: 'powah:crafting/energizing_rod_basic' },
        { id: 'powah:energizing/ender_core' },
        { id: 'powah:energizing/blazing_crystal' },
        { id: `powah:energizing/spirited_crystal` },
        { id: `powah:energizing/niotic_crystal` },
        { id: `powah:energizing/energized_steel` },
        { id: `powah:energizing/nitro_crystal` },

        {
            id: /powah:crafting\/(thermo_generator|solar_panel|furnator|magmator|reactor|energy|cable|battery|ender)/
        },
        { id: /powah:crafting\/(energizing_rod_|player_transmitter_|capacitor_)(blazing|hardened)/ },

        { id: /quark:.*rainbow_rune/ },

        { id: 'rftoolsbase:dimensionalshard' },
        { id: 'rftoolsbase:infused_diamond' },
        { id: 'rftoolsbase:infused_enderpearl' },

        { id: 'sophisticatedbackpacks:battery_upgrade' },

        { id: /sophisticatedstorage:limited_/ },
        { id: /sophisticatedstorage:tier_upgrade_/ },
        { id: 'sophisticatedstorage:storage_link_from_controller' },
        { id: 'sophisticatedstorage:gold_to_diamond_tier_upgrade' },
        { id: 'sophisticatedstorage:stack_upgrade_tier_4' },

        { id: `spirit:soul_engulfing/soul_powder` },
        { id: `spirit:soul_engulfing/soul_powder_block` },
        { id: `spirit:soul_engulfing/soul_slate` },
        { id: `spirit:soul_engulfing/soul_steel` },
        { id: `spirit:soul_engulfing/soul_steel_block` },
        { id: `spirit:soul_engulfing/crude_soul_crystal` },
        { id: `spirit:soul_engulfing/soul_crystal_shard` },
        { id: `spirit:soul_engulfing/soul_crystal` },

        { id: 'starbunclemania:fluid_jar' },
        { id: 'starbunclemania:fluid_sourcelink' },
        { id: 'starbunclemania:star_battery' },
        { id: 'starbunclemania:star_bucket' },
        { id: 'starbunclemania:star_bin' },

        { id: 'supplementaries:jar' },
        { id: 'supplementaries:soap' },

        { id: 'the_bumblezone:honey_compass' },

        { id: /thermal:machines\/pulverizer\/pulverizer_.*_to_dust/ },
        { id: /thermal:augments/ },
        { id: /thermal:.*_mushroom_spores/ },
        { id: /thermal:parts\/.*_gear/ },
        { id: /thermal:earth_charge/ },
        { id: 'thermal:enderium_dust_2' },
        { id: 'thermal:lumium_dust_4' },
        { id: 'thermal:signalum_dust_4' },
        { id: 'thermal:invar_dust_3' },
        { id: 'thermal:bronze_dust_4' },
        { id: 'thermal:jar_4' },
        { id: 'thermal:beekeeper_fabric' },
        { id: 'thermal:diving_fabric' },
        { id: 'thermal:hazmat_fabric' },
        { id: 'thermal:flux_saw' },
        { id: 'thermal:flux_drill' },
        { id: 'thermal:drill_head' },
        { id: 'thermal:saw_blade' },
        { id: 'thermal:energy_cell' },
        { id: 'thermal:flux_capacitor' },
        { id: 'thermal:aquachow_4' },
        { id: 'thermal:deep_aquachow_4' },
        { id: 'thermal:device_potion_diffuser' },
        { id: 'thermal:energy_limiter_attachment_2' },
        { id: 'thermal:energy_duct_4' },
        { id: 'thermal:tools/rf_potato' },
        { id: 'thermal:machines/pulverizer/pulverizer_lapis' },
        { id: 'thermal:machines/pulverizer/pulverizer_ender_pearl' },
        { id: 'thermal:machines/pulverizer/pulverizer_quartz' },
        { id: 'thermal:machines/pulverizer/pulverizer_emerald' },
        { id: 'thermal:machines/pulverizer/pulverizer_diamond' },

        { id: 'toomanyglyphs:glyph_chaining' },

        { id: 'twilightforest:equipment/fiery_ingot_crafting' },
        { id: /twilightforest:equipment\/fiery_fiery_/ },
        { id: /twilightforest:equipment\/fiery_iron_/ },
        { id: /twilightforest:material\/fiery_iron_/ },

        { id: /xnet:netcable_/ },
        { id: /xnet:connector_/ },
        { id: /xnet:advanced_connector_/ },
        { id: 'xnet:wireless_router' },
        { id: 'xnet:antenna' },
        { id: 'xnet:antenna_dish' },
        { id: 'xnet:antenna_base' },
        { id: 'xnet:controller' },
        { id: 'xnet:router' },
        { id: 'xnet:redstone_proxy' },

        { id: /chalk/, mod: 'occultism' },
        { id: /rune_from_corundum/, mod: 'quark' },
        { id: /_machine_frame/, mod: 'industrialforegoing' },

        // Disable Power Generation
        { mod: 'mekanismgenerators' },

        { id: 'ae2:network/blocks/energy_vibration_chamber' },

        { id: 'createaddition:crafting/modular_accumulator' },

        { id: 'immersiveengineering:crafting/electric_lantern' },
        { id: 'immersiveengineering:crafting/transformer' },
        { id: 'immersiveengineering:crafting/thermoelectric_generator' },
        { id: 'immersiveengineering:crafting/dynamo' },

        { mod: 'mekanismgenerators' },

        { id: 'pneumaticcraft:pneumatic_dynamo' },

        { mod: 'immersiveengineering', id: /capacitor/ },
        { mod: 'immersiveengineering', id: /_lv/ },
        { mod: 'immersiveengineering', id: /_mv/ },
        { mod: 'immersiveengineering', id: /_hv/ },
        { mod: 'industrialforegoing', id: /mycelial/ },
        { mod: 'industrialforegoing', id: /generator/ },
        { mod: 'mekanism', id: /induction/ },
        { mod: 'mekanism', id: /energy_cube/ },
        { mod: 'mekanismgenerators', id: /generator\/(?!gas_burning$)/ },
        { mod: 'mekanismgenerators', id: /turbine/ },
        { mod: 'mekanismgenerators', id: /fission/ },
        { mod: 'mekanismgenerators', id: /reactor/ },
        { mod: 'powah', id: /solar_panel/ },
        { mod: 'powah', id: /thermo_generator/ },
        { mod: 'powah', id: /magmator/ },
        { mod: 'powah', id: /furnator/ },
        { mod: 'thermal', id: /dynamo/ },

        // Disable Ore Processing

        { id: /emendatusenigmatica:.*from_ore/ },
        { id: /emendatusenigmatica:.*from_raw/ },
        { id: /emendatusenigmatica:.*from_raw_block/ },
        { id: /emendatusenigmatica:.*from_slurry/ },
        { id: /emendatusenigmatica:.*from_crystal/ },
        { id: /emendatusenigmatica:.*from_shard/ },
        { id: /emendatusenigmatica:.*from_clump/ },
        { id: /emendatusenigmatica:.*from_dirty/ },
        { id: /emendatusenigmatica:.*from_ingot/ },
        { id: /emendatusenigmatica:.*from_gem/ },
        { id: /emendatusenigmatica:slurry\/clean/ },

        { type: 'minecraft:smelting', output: '#forge:nuggets' },
        { type: 'minecraft:smelting', output: '#forge:ingots' },
        { type: 'minecraft:smelting', output: '#forge:gems' },
        { type: 'minecraft:smelting', output: '#forge:dusts' },
        { type: 'minecraft:smelting', output: /ingot_from_crushed/ },
        { output: 'minecraft:netherite_scrap' },

        // { type: 'minecraft:blasting', input: '#forge:ores' },
        // { type: 'minecraft:blasting', input: '#forge:raw_materials' },

        { type: 'minecraft:blasting', output: '#forge:nuggets' },
        { type: 'minecraft:blasting', output: '#forge:ingots' },
        { type: 'minecraft:blasting', output: '#forge:gems' },
        { type: 'minecraft:blasting', output: '#forge:dusts' },
        { type: 'minecraft:blasting', output: /ingot_from_crushed/ },

        { type: 'immersiveengineering:arc_furnace' },
        { type: 'immersiveengineering:crusher', id: /ingot_/ },

        { type: 'thermal:smelter' },
        { type: 'thermal:centrifuge', id: /centrifuge_.*_dust/ },
        { type: 'thermal:pulverizer', id: /ingot_to_dust/ },

        { type: 'occultism:crushing', id: /dust/ },

        { id: 'create:crushing/crimsite' },
        { id: 'create:crushing/asurine' },
        { id: 'create:crushing/ochrum' },
        { id: 'create:crushing/veridium' },
        { id: 'create:crushing/tuff' },
        { id: 'create:crushing/calcite' },
        { id: 'create:crushing/dripstone_block' },
        { id: 'create:crushing/diorite' },
        { id: 'create:splashing/gravel' },
        { id: 'create:splashing/soul_sand' },
        { id: 'create:splashing/red_sand' },

        { id: /block_blast/, mod: 'quark' },

        { id: /mekanism:processing\/.*\/crystal/ },
        { id: /mekanism:processing\/.*\/shard/ },
        { id: /mekanism:processing\/.*\/clump/ },
        { id: /mekanism:processing\/.*\/dirty_dust/ },
        { id: /mekanism:processing\/.*\/dust/ },

        { id: /thermal:fire_charge/ },
        { id: 'thermal:compat/create/pulverizer_create_crimsite' },
        { id: 'thermal:compat/create/pulverizer_create_asurine' },
        { id: 'thermal:compat/create/pulverizer_create_ochrum' },
        { id: 'thermal:compat/create/pulverizer_create_veridium' },
        { id: 'thermal:machines/pulverizer/pulverizer_diorite' },
        { id: 'thermal:machines/pulverizer/pulverizer_granite' },
        { id: 'thermal:machines/pulverizer/pulverizer_andesite' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
