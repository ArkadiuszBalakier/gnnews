export const CardItem = ({ news }) => {
  const { author, publishedAt, urlToImage, title } = news;
  console.log(author);
  return (
    <li>
      <img src={urlToImage} alt="news image" />
      <div>
        <h1 gutterBottom variant="h5" component="div">
          {author}
        </h1>
        <span variant="body2" color="text.secondary">
          {title}
        </span>
        <span variant="body2" color="text.secondary">
          {publishedAt}
        </span>
      </div>
    </li>
  );
};
