ServerEvents.tags('entity_type', (event) => {
    const entities = ['#enigmatica:mob_spawner_blacklist'];
    event.get('ars_nouveau:drygmy_blacklist').removeAll().add(entities);
});
