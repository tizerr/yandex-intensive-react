import { categorySlice } from "./index";
import { selectCategories } from "./selectors";
import {prepareData} from "../utils";

export const loadCinemasIfNotExist = (dispatch, getState) => {
    if (selectCategories(getState())?.length > 0) {
        return;
    }

    dispatch(categorySlice.actions.startLoading());
    fetch("http://localhost:3001/api/categories")
        .then((response) => response.json())
        .then((categories) => {
            dispatch(categorySlice.actions.successLoading(prepareData(categories)));
        })
        .catch(() => {
            dispatch(categorySlice.actions.failLoading());
        });
};
