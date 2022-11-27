import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
