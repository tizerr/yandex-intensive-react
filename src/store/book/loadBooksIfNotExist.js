import { bookSlice } from "./index";
import { prepareData } from "../utils";

export const loadBooksIfNotExist = (categoryId) => (dispatch, getState) => {

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/categories/${categoryId}`)
    .then((response) => response.json())
    .then((cinemas) => {
      dispatch(bookSlice.actions.successLoading(prepareData(cinemas)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
