import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { categorySlice } from "./category";

export const store = configureStore({
    reducer: combineReducers({
        cinema: categorySlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});