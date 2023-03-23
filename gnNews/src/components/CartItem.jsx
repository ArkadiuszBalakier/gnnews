import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import noImage from "../assets/images/noimage.png";
import { CardActionArea } from "@mui/material";

export const CartItem = ({ news }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ padding: "1px" }}
          image={news.urlToImage ? news.urlToImage : noImage}
          title={news.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {news.publishedAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
