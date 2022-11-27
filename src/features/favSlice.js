import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    favAdd: (state, action) => {
      state.fav.push({
        id: action.payload.id,
        img: action.payload.img,
        title: action.payload.title,
        rate: action.payload.rate,
        type: action.payload.type,
      });
    },

    favRemove: (state, action) => {
      const itemId = action.payload;
      state.fav = state.fav.filter((itme) => itme.id !== itemId)
    },
  },
});

export const { favAdd, favRemove } = favSlice.actions;

export default favSlice.reducer;
