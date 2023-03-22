import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsData } from "../store";

export const Home = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => {
    return state.news.news;
  });

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=pl&apiKey=d524ca6f928c4e8ca72973f4d6c03379"
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        dispatch(newsData(data.articles));
      });
  }, []);

  console.log(newsList);

  return <section>Home</section>;
};
