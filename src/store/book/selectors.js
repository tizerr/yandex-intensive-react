export const selectBookModule = (state) => state.book;

export const selectBooks = (state) =>
    Object.values(selectBookModule(state).entities);

export const selectBookById = (state, id) =>
    selectBookModule(state).entities[id] || {};

export const selectBookReviews = (state, id) => selectBookById(state, id)?.reviews || [];
