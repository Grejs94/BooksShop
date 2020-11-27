import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Menu } from "components";
import { fetchBooks } from "features/books/booksSlice";

import { Grid } from "./components";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(1));
  }, []);

  return (
    <>
      <Menu title="Lista książek" />
      <Grid />
    </>
  );
};

export default MainPage;
