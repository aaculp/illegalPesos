import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  // CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
import img from "../../../assets/airpods.jpg";

const CartItem = ({ item, onHandleUpdateCartNum, onHandleRemoveCartItem }) => {
  const classes = useStyles();
  return (
    <Card>
      <img src={img} style={{ width: "100%", margin: "1em 0" }} alt="img" />
      <CardContent className={classes.CardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => onHandleUpdateCartNum(item.id, item.quantity - 1 )}> - </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => onHandleUpdateCartNum(item.id, item.quantity + 1 )}> + </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => onHandleRemoveCartItem(item.id)}> Remove </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
