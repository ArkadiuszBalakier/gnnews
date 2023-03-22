import { configureStore } from "@reduxjs/toolkit";
import { changeTrigger, popupReducer } from "./slices/popupSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export { store, changeTrigger };
