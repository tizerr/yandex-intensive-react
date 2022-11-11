import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { categorySlice } from "./category";
import { bookSlice } from "./book";

export const store = configureStore({
    reducer: combineReducers({
        category: categorySlice.reducer,
        book: bookSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});