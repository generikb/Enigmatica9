ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/crucible/';

    const recipes = [
        {
            input: 'create:experience_nugget',
            output: {
                fluid: 'sophisticatedcore:xp_still',
                amount: 60
            },
            energy: 5000,
            id: `${id_prefix}experience_nugget_to_liquid`
        },
        {
            input: 'ars_nouveau:experience_gem',
            output: {
                fluid: 'sophisticatedcore:xp_still',
                amount: 60
            },
            energy: 5000,
            id: `${id_prefix}experience_gem_to_liquid`
        },
        {
            input: 'ars_nouveau:greater_experience_gem',
            output: {
                fluid: 'sophisticatedcore:xp_still',
                amount: 240
            },
            energy: 5000,
            id: `${id_prefix}greater_experience_gem_to_liquid`
        },
        {
            input: 'minecraft:honey_block',
            output: {
                fluid: 'the_bumblezone:honey_fluid_still',
                amount: 1000
            },
            energy: 2000,
            id: `thermal:machines/crucible/crucible_honey_block_to_honey`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crucible';
        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = [];
        recipe.result.push(recipe.output);
        event.custom(recipe).id(recipe.id);
    });
});
