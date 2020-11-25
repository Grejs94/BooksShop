import React from "react";
import { default as CardMaterial } from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

const Card = ({ picture, title, author, pages, handleClick }) => {
  const classes = useStyles();

  return (
    <CardMaterial className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Autor: ${author}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Liczba stron: ${pages}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          DODAJ DO KOSZYKA
        </Button>
      </CardActions>
    </CardMaterial>
  );
};

export default Card;
