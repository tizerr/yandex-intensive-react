export const selectCategoryModule = (state) => state.category;

export const selectCategories = (state) => Object.values(selectCategoryModule(state).entities);