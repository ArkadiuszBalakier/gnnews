import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    trigger: false,
  },
  reducers: {
    changeTrigger(state) {
      state.trigger = !state.trigger;
    },
  },
});

export const { changeTrigger } = popupSlice.actions;
export const popupReducer = popupSlice.reducer;
