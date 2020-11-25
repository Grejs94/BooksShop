import React from "react";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StoreIcon from "@material-ui/icons/Store";
import { Link } from "react-router-dom";

import { selectBooks } from "features/books/booksSlice";

import { useStyles } from "./styles";

const Menu = ({ title }) => {
  const books = useSelector(selectBooks);
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
            <IconButton aria-label="shop" color="inherit">
              <Link to="/" style={{ color: "white" }}>
                <StoreIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="basket" color="inherit">
              <Badge badgeContent={books.basketValue} color="secondary">
                <Link to="/basketPage" style={{ color: "white" }}>
                  <ShoppingBasketIcon />
                </Link>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.margin} />
    </React.Fragment>
  );
};

export default Menu;
