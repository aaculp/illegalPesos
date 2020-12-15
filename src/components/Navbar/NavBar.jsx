import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typeography,
  Typography,
} from "@material-ui/core";

import { AddShoppingCart, ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const NavBar = ({ products, totalItems }) => {
  const classes = useStyles();

  const location = useLocation();

  const handleCartPress = () => {
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="secondary">
        <Toolbar>
          <Typography component={Link} to='/' variant="h6" color="inherit" className={classes.title}>
            <img
              src=""
              alt="Illegal Pe$os"
              height="25px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
            <IconButton component={Link} to='/cart' aria-label="show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
