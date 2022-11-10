import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { CategorySlice } from "./category";

export const store = configureStore({
    reducer: combineReducers({
        cinema: CategorySlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});