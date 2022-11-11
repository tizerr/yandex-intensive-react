export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];
