export const selectCartModule = (state) => state.cart;

export const selectBookCount = (state, id) =>
    selectCartModule(state)[id];
