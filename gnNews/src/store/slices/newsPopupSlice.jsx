import { createSlice } from "@reduxjs/toolkit";

const newsPopupSlice = createSlice({
  name: "newsPopup",
  initialState: {
    trigger: false,
  },
  reducers: {
    newsPopupTrigger(state) {
      state.trigger = !state.trigger;
    },
  },
});

export const { newsPopupTrigger } = newsPopupSlice.actions;
export const newsPopupReducer = newsPopupSlice.reducer;
