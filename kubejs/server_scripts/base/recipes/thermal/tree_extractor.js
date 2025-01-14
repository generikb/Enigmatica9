ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/tree_extractor/';

    const recipes = [
        {
            trunk: 'minecraft:jungle_log',
            leaves: 'minecraft:jungle_leaves',
            result: { fluid: 'industrialforegoing:latex', amount: 25 },
            id: 'thermal:devices/tree_extractor/tree_extractor_jungle'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:tree_extractor';
        event.custom(recipe).id(recipe.id);
    });
});
