import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: Statuses.idle,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      console.log('success loading')
      state.status = Statuses.success;
      state.entities = { ...state.entities, ...action.payload.entities };
      state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
    },
    failLoading: (state) => {
      console.log('fail')
      state.status = Statuses.failed;
    },
  },
});
