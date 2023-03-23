import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { newsPopupTrigger } from "../store";
import "./NewsPopup.css";

export const NewsPopup = ({ newsToPopup }) => {
  const { author, description, url } = newsToPopup || {};
  const trigger = useSelector((state) => {
    return state.newsPopup.trigger;
  });
  const dispatch = useDispatch();

  return trigger ? (
    <div
      className="news-popup"
      onClick={() => {
        dispatch(newsPopupTrigger());
      }}
    >
      <div className="news-popup-inner">
        <h1 className="author">{author}</h1>
        <p className="news">"News"</p>
        <p className="description">{description}</p>
        <span>do you want to know more?</span>
        <Link className="link" to={url}>
          {url}
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
};
