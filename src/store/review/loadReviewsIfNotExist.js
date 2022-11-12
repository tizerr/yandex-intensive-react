import { reviewSlice } from "./index";
import { prepareData } from "../utils";

export const loadReviewsIfNotExist = (bookId) => (dispatch, getState) => {

    dispatch(reviewSlice.actions.startLoading());
    fetch(`http://localhost:3001/api/books/${bookId}/reviews`)
    .then((response) => response.json())
    .then((reviews) => {
      dispatch(reviewSlice.actions.successLoading(prepareData(reviews)));
    })
    .catch(() => {
      dispatch(reviewSlice.actions.failLoading());
    });
};
