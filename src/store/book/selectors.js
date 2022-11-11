import { Statuses } from "../../constants/statuses";

export const selectBookModule = (state) => state.book;

export const selectBooks = (state) =>
    Object.values(selectBookModule(state).entities);

export const selectBookById = (state, id) =>
    selectBookModule(state).entities[id];

export const selectBookReviews = (state, id) =>
    selectBookModule(state).entities[id];

// export const selectIsFilmsLoading = (state) =>
//   selectFilmModule(state).status === Statuses.inProgress;
