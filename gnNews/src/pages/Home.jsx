import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newsData } from "../store";

import { NewsList } from "../components/NewsList";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=pl&apiKey=d524ca6f928c4e8ca72973f4d6c03379"
      )
      .then((res) => {
        const data = res.data;
          dispatch(newsData(data.articles));
      });
  }, []);

  return (
    <section>
      <NewsList />
    </section>
  );
};
