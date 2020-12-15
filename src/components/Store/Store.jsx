import React from "react";
import Grid from "@material-ui/core/Grid";
import StoreItems from "./StoreItems.jsx";
import useStyles from "./styles";

const Store = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className="storeContent">
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={1}>
                {products.map((product) => {
                    return (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
                            <StoreItems product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    );
                })}
            </Grid>
        </main>
    );
};

export default Store;
