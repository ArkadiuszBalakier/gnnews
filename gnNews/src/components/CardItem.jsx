import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CardItem = ({ news }) => {
  const { author, publishedAt, urlToImage, title } = news;
  return (
    <li sx={{ maxWidth: 345 }}>
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
