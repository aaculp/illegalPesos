import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import StoreItems from "./StoreItems.jsx";
import useStyles from "./styles";

const Store = ({ products, onAddToCart }) => {
    const classes = useStyles();
    const [productQuantity, setProductQuantity] = useState();

    // useEffect(() => {
    //     mapProducts()
    // }, []);

    const mapProducts = products.map((product) => {
        if (product.quantity > 0) {
            return (
                <Grid key={product.id} item xs={10} sm={6} md={4} lg={4}>
                    <StoreItems product={product} onAddToCart={onAddToCart} />
                </Grid>
            );
        }
    })

    return (
        <main className="storeContent">
            <Grid container justify="center" spacing={1}>
                {mapProducts}
            </Grid>
        </main>
    );
};

export default Store;
