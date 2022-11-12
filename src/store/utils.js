export const prepareData = (items) => {
    console.log(items);
    return {
        entities: items.reduce((acc, entity) => {
            acc[entity.id] = entity;
            return acc;
        }, {}),
        ids: items.map(({id}) => id),
    };
};
