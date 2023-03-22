import { configureStore } from "@reduxjs/toolkit";
import { newsReducer, newsData } from "./slices/newsSlice";
import { changeTrigger, popupReducer } from "./slices/popupSlice";
import { cardToggleReducer, handleToggle } from "./slices/cardToggleSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    news: newsReducer,
    cardToggle: cardToggleReducer,
  },
});

export { store, changeTrigger, newsData, handleToggle };
