import React from "react";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";

import { selectBooks, addItemToBasket } from "features/books/booksSlice";
import { checkSingleStatus } from "utils/checkSingleStatus";

import { Card } from "./components";
import { useStyles } from "./styles";

export default function SpacingGrid() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const classes = useStyles();

  const data = checkSingleStatus(books.dataStatus);

  const handleclick = (item) => {
    dispatch(addItemToBasket(item));
  };

  if (data.isError) {
    return "Fetching data error...";
  }

  if (data.isLoading) {
    return "";
  }

  if (!data.isLoaded) {
    return null;
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {books.data.map((item) => (
            <Grid key={item.id} item>
              <Card
                picture={item.cover_url}
                title={item.title}
                author={item.author}
                pages={item.pages}
                handleClick={() => handleclick(item)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
