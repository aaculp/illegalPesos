import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import img from "../../assets/airpods.jpg";

const StoreItems = ({ product, onAddToCart }) => {
  return (
    <Card>
      <img src={img} style={{ width: "100%", margin: "1em 0" }} />
      <CardContent>
        <div>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          style={{ textAlign: "center", justifyContent: 'center' }}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default StoreItems;
