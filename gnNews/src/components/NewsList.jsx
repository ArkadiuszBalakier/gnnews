import { useSelector } from "react-redux";
import "./NewsList.css";

export const NewsList = () => {
  const newsList = useSelector((state) => {
    return state.news.news;
  });

  return (
    <ul>
      {newsList &&
        newsList.map((news) => (
          <li key={news.id}>
            <span className="title">{news.title}</span>
            <div className="informations">
              <span>{news.source.name}</span>
              <span>{news.publishedAt}</span>
            </div>
          </li>
        ))}
    </ul>
  );
};
