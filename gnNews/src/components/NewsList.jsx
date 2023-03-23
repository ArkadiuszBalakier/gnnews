import { useSelector, useDispatch } from "react-redux";
import { newsPopupTrigger } from "../store/slices/newsPopupSlice";
import "./NewsList.css";

export const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => {
    return state.news.news;
  });

  const handleClick = () => {
    dispatch(newsPopupTrigger());
  };

  return (
    <ul>
      {newsList &&
        newsList.map((news) => (
          <li
            key={news.id}
            onClick={() => {
              handleClick();
            }}
          >
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
