import { createSlice, nanoid } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
  },
  reducers: {
    newsData(state, action) {
      state.news = action.payload;
      state.news.map((item) => (item.id = nanoid()));
    },
  },
});

export const { newsData } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
