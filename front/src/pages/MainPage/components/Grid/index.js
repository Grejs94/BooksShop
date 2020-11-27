import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToBasket,
  selectBooksFetchStatus,
  selectBooksData,
} from "features/books/booksSlice";

import { Card } from "./components";
import { useStyles } from "./styles";

export default function SpacingGrid() {
  const dispatch = useDispatch();
  const status = useSelector(selectBooksFetchStatus);
  const classes = useStyles();

  const data = useSelector(selectBooksData);

  const handleclick = (item) => {
    dispatch(addItemToBasket(item));
  };

  if (status === "failed") {
    return "Fetching data error...";
  }

  if (status === "inProgress") {
    return <CircularProgress />;
  }

  if (!data) {
    return null;
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {data.map((book) => (
            <Grid key={book.id} item>
              <Card book={book} handleClick={() => handleclick(book)} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
