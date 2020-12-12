import React from "react";
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

  const handleCartPress = () => {
    console.log(products);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <img
              src=""
              alt="Illegal Pe$os"
              height="25px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="show car items" color="inherit">
              <Badge
                badgeContent={totalItems}
                color="primary"
                onClick={() => handleCartPress()}
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
