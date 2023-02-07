ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            filter: { output: 'minecraft:hopper' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:plates/tin'
        },
        {
            filter: { output: 'minecraft:bucket' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:plates/tin'
        },
        {
            filter: { mod: 'create' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'createaddition' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'littlecontraptions' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'create' },
            to_replace: 'minecraft:dried_kelp',
            replace_with: '#forge:leather'
        },
        {
            filter: { id: 'twilightforest:carminite_reactor' },
            to_replace: '#forge:ores/redstone',
            replace_with: '#forge:storage_blocks/source'
        },
        {
            filter: { mod: 'pneumaticcraft' },
            to_replace: '#c:glass_blocks',
            replace_with: 'ae2:quartz_glass'
        },
        {
            filter: { mod: 'pneumaticcraft', id: /wall_lamp/ },
            to_replace: '#forge:ingots/compressed_iron',
            replace_with: 'pneumaticcraft:compressed_brick_tile'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
