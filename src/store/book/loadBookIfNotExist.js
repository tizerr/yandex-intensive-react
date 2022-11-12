import { bookSlice } from "./index";
import { prepareData } from "../utils";

export const loadBookIfNotExist = (bookId) => (dispatch, getState) => {

    dispatch(bookSlice.actions.startLoading());
    fetch(`http://localhost:3001/api/books/${bookId}`)
    .then((response) => response.json())
    .then((book) => {
      console.log('load', book, prepareData(book));
      dispatch(bookSlice.actions.successLoading(prepareData(book)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
