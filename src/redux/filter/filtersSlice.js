import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const filterReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
