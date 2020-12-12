import React from "react";
import Grid from "@material-ui/core/Grid";
import StoreItems from "./StoreItems.jsx";
import useStyles from "./styles";
import img from "../../assets/airpods.jpg";

const Store = ({ products, onAddToCart }) => {
  const classes = useStyles();
  console.log(products)
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} className="productContainer">
              <StoreItems
                product={product}
                onAddToCart={onAddToCart}
                key={product.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Store;
