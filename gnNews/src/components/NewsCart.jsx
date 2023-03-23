import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { Grid, Card } from "@mui/material";

export const NewsCart = () => {
  const newsList = useSelector((state) => {
    return state.news.news;
  });

  return (
    <Grid container spacing={2} alignItems="stretch">
      {newsList &&
        newsList.map((news) => (
          <Grid item xs={4} key={news.id}>
            <CartItem news={news} />
          </Grid>
        ))}
    </Grid>
  );
};
