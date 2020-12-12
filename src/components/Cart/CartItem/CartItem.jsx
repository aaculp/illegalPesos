import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
import img from "../../../assets/airpods.jpg";

const CartItem = ({ item, products }) => {
  console.log(products);
  const classes = useStyles();
  return (
    <Card>
      <img src={img} style={{ width: "100%", margin: "1em 0" }} />
      <CardContent className={classes.CardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick="">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick="">
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;