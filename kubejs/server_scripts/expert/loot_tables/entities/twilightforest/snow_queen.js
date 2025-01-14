ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/snow_queen', (table) => {
        table.addPool((pool) => {
            pool.rolls = [4, 4];
            pool.addItem(Item.of('ars_nouveau:stable_warp_scroll'), 1);
        });
    });

    event.modify('twilightforest:entities/snow_queen', (table) => {
        table.addPool((pool) => {
            pool.rolls = [10, 24];
            pool.addItem(Item.of('byg:subzero_crystal_shard'), 1);
        });
    });
});
