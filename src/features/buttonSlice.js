import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  button: [],
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.button = action.payload;
    },
  },
});

export const { toggleMenu } = buttonSlice.actions;

export default buttonSlice.reducer;
