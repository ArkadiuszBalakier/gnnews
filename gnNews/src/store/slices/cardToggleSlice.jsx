import { createSlice } from "@reduxjs/toolkit";

const cardToggleSlice = createSlice({
  name: "cardToggle",
  initialState: {
    trigger: false,
  },
  reducers: {
    handleToggle(state) {
      state.trigger = !state.trigger;
    },
  },
});

export const { handleToggle } = cardToggleSlice.actions;
export const cardToggleReducer = cardToggleSlice.reducer;
