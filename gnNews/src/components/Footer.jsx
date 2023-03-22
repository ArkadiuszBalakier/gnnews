import { DateTime } from "./DateTime";
import { useSelector } from "react-redux";

export const Footer = () => {
  const newsCount = useSelector((state) => {
    return state.news.news.length;
  });

  return (
    <footer>
      <span>NEWS: {newsCount}</span>
      <DateTime />
    </footer>
  );
};
