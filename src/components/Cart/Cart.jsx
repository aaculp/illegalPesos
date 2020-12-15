import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({ cart, handleUpdateCartNum, handleRemoveCartItem, handleEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      <Link to='/' className={classes.link}>Hey, add something to your cart!</Link>
    </Typography>
  );

  if (!cart.line_items) return "Loading...";

  const FilledCart = () => (
    <>
      <Grid container spacing={4}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem 
              item={item} 
              onHandleUpdateCartNum={handleUpdateCartNum} 
              onHandleRemoveCartItem={handleRemoveCartItem}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol} </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" variant="contained" color="secondary" onClick={handleEmptyCart}> Empty Cart </Button>
          <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" variant="contained" color="primary"> Checkout </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
