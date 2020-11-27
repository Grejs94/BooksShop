import React from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
  Badge,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StoreIcon from "@material-ui/icons/Store";
import { Link } from "react-router-dom";

import { selectBooksBasketValue } from "features/books/booksSlice";

import { useStyles } from "./styles";

const Menu = ({ title }) => {
  const basketValue = useSelector(selectBooksBasketValue);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          <div className={classes.grow} />
          <div>
            <Link to="/" style={{ color: "white" }}>
              <IconButton aria-label="shop" color="inherit">
                <StoreIcon />
              </IconButton>
            </Link>
            <Link to="/basketPage" style={{ color: "white" }}>
              <IconButton aria-label="basket" color="inherit">
                <Badge badgeContent={basketValue} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.margin} />
    </React.Fragment>
  );
};

export default Menu;
