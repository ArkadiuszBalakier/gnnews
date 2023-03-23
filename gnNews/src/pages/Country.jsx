import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsData } from "../store";
import { useParams } from "react-router";
import { NewsList } from "../components/NewsList";
import { NewsCart } from "../components/NewsCart";

export const Country = () => {
  const countryCode = useParams();

  const dispatch = useDispatch();
  const cardTrigger = useSelector((state) => {
    return state.cardToggle.trigger;
  });

  const dataNews = useSelector((state) => {
    return state.news.news;
  });
  console.log(dataNews);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${countryCode.name}&apiKey=d524ca6f928c4e8ca72973f4d6c03379`
      )
      .then((res) => {
        const data = res.data;
        dispatch(newsData(data.articles));
      });
  }, [countryCode]);

  return <>{cardTrigger ? <NewsCart /> : <NewsList />}</>;
};
