ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/refinery/';
    const recipes = [
        {
            result: { amount: 10, fluid: 'hexerei:quicksilver_fluid' },
            input0: { amount: 10, tag: 'forge:magicite' },
            catalyst: { tag: 'forge:dusts/moon_dust' },
            energy: 500,

            id: `${id_prefix}quicksilver_fluid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
