import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newsPopupTrigger } from "../store/slices/newsPopupSlice";
import { NewsPopup } from "./newsPopup";
import "./NewsList.css";

export const NewsList = () => {
  const [newsToPopup, setNewsToPopup] = useState();
  const dispatch = useDispatch();
  const newsList = useSelector((state) => {
    return state.news.news;
  });

  const handlePopupClick = (news) => {
    dispatch(newsPopupTrigger());
    setNewsToPopup(news);
  };

  return (
    <>
      <ul>
        {newsList &&
          newsList.map((news) => (
            <li
              key={news.id}
              onClick={() => {
                handlePopupClick(news);
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
      <NewsPopup newsToPopup={newsToPopup} />
    </>
  );
};
