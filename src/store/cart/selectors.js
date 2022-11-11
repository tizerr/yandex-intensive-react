export const selectCartModule = (state) => state.cart;

export const selectCartBooksIds = (state) => Object.keys(selectCartModule(state));

export const selectBookCount = (state, id) =>
    selectCartModule(state)[id];
