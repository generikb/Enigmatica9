ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/press/';

    const recipes = [
        {
            inputs: ['powah:photoelectric_pane', 'powah:ender_core'],
            outputs: [{ item: 'powah:lens_of_ender' }],
            energy: 50000,
            id: `${id_prefix}lens_of_ender`
        },
        {
            inputs: ['powah:aerial_pearl', 'powah:ender_core'],
            outputs: [{ item: 'powah:player_aerial_pearl' }],
            energy: 100000,
            id: `${id_prefix}player_aerial_pearl`
        },
        {
            inputs: ['powah:binding_card', 'powah:ender_core'],
            outputs: [{ item: 'powah:binding_card_dim' }],
            energy: 150000,
            id: `${id_prefix}binding_card_dim`
        },
        {
            inputs: ['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press'],
            outputs: [{ item: 'ae2:printed_calculation_processor' }],
            energy: 12000,
            id: `${id_prefix}printed_calculation_processor`
        },
        {
            inputs: ['#forge:gems/diamond', 'ae2:engineering_processor_press'],
            outputs: [{ item: 'ae2:printed_engineering_processor' }],
            energy: 12000,
            id: `${id_prefix}printed_engineering_processor`
        },
        {
            inputs: ['#forge:ingots/gold', 'ae2:logic_processor_press'],
            outputs: [{ item: 'ae2:printed_logic_processor' }],
            energy: 12000,
            id: `${id_prefix}printed_logic_processor`
        },
        {
            inputs: ['#forge:silicon', 'ae2:silicon_press'],
            outputs: [{ item: 'ae2:printed_silicon' }],
            energy: 4000,
            id: `${id_prefix}printed_silicon`
        },
        {
            inputs: ['#forge:storage_blocks/iron', 'ae2:calculation_processor_press'],
            outputs: [{ item: 'ae2:calculation_processor_press' }],
            energy: 12000,
            id: `${id_prefix}calculation_processor_press`
        },
        {
            inputs: ['#forge:storage_blocks/iron', 'ae2:engineering_processor_press'],
            outputs: [{ item: 'ae2:engineering_processor_press' }],
            energy: 12000,
            id: `${id_prefix}engineering_processor_press`
        },
        {
            inputs: ['#forge:storage_blocks/iron', 'ae2:logic_processor_press'],
            outputs: [{ item: 'ae2:logic_processor_press' }],
            energy: 12000,
            id: `${id_prefix}logic_processor_press`
        },
        {
            inputs: ['#forge:storage_blocks/iron', 'ae2:silicon_press'],
            outputs: [{ item: 'ae2:silicon_press' }],
            energy: 4000,
            id: `${id_prefix}silicon_press`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
