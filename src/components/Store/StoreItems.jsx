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
// import img from "../../assets/airpods.jpg";
import useStyles from "./styles";

const StoreItems = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card>
            {/* <img src={img} style={{ width: "100%", margin: "1em 0" }} /> */}
            <CardMedia className={classes.media} image={product.media.source} title={product.name} style={{marginTop: "5px"}} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant="body2"
                    color="textSecondary"
                    style={{ textAlign: "center", justifyContent: "center" }}
                />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default StoreItems;
