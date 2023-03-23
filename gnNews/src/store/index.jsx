import { configureStore } from "@reduxjs/toolkit";
import { newsReducer, newsData } from "./slices/newsSlice";
import { changeTrigger, popupReducer } from "./slices/popupSlice";
import { cardToggleReducer, handleToggle } from "./slices/cardToggleSlice";
import { newsPopupReducer, newsPopupTrigger } from "./slices/newsPopupSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    news: newsReducer,
    cardToggle: cardToggleReducer,
    newsPopup: newsPopupReducer,
  },
});

export { store, changeTrigger, newsData, handleToggle, newsPopupTrigger };
