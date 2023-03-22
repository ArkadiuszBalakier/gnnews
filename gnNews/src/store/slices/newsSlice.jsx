import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [{}],
  },
  reducers: {
    newsData(state, action) {
      state.news = action.payload;
    },
  },
});

export const { newsData } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
