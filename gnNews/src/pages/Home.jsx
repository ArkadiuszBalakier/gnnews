import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsData } from "../store";

import { NewsList } from "../components/NewsList";
import { NewsCart } from "../components/NewsCart";

export const Home = () => {
  const dispatch = useDispatch();
  const cardTrigger = useSelector((state) => {
    return state.cardToggle.trigger;
  });

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

  console.log(cardTrigger);
  return <>{cardTrigger ? <NewsCart /> : <NewsList />}</>;
};
