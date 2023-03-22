import { configureStore } from "@reduxjs/toolkit";
import { newsReducer, newsData } from "./slices/newsSlice";
import { changeTrigger, popupReducer } from "./slices/popupSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    news: newsReducer,
  },
});

export { store, changeTrigger, newsData };
