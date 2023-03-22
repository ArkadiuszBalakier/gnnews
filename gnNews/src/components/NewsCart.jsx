import { useSelector } from "react-redux";
import { CardItem } from "./CardItem";

export const NewsCart = () => {
  const newsList = useSelector((state) => {
    return state.news.news;
  });

  return (
    <ul className="card">
      {newsList.map((news) => {
        <CardItem key={news.id} news={news} />;
      })}
    </ul>
  );
};
