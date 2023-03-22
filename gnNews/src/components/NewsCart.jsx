import { useSelector } from "react-redux";

export const NewsCart = () => {
  const newsList = useSelector((state) => {
    return state.news.news;
  });

  console.log(newsList);
  return (
    <ul className="card">
      {newsList &&
        newsList.map((news) => {
          // <CardItem key={news.id} news={news} />;
          <li>
            <img src={news.urlToImage} alt="news image" />
            <div>
              <h1 gutterBottom variant="h5" component="div">
                {news.author}
              </h1>
              <span variant="body2" color="text.secondary">
                {news.title}
              </span>
              <span variant="body2" color="text.secondary">
                {news.publishedAt}
              </span>
            </div>
          </li>;
        })}
    </ul>
  );
};
