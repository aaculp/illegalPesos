import React from "react";
import { Link, useLocation } from "react-router-dom";
import MusicSlider from '../Music/MusicSlider'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();

  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="secondary" style={{backgroundColor: '#216C2A', color: '#292A33'}}>
        <Toolbar className="navBarContainer">
          <Typography component={Link} to='/' variant="h6" color="inherit" className={classes.title}>
            <img
              src=""
              alt="Illegal Pe$os"
              height="25px"
              className={classes.image}
            />
          </Typography>
          <MusicSlider id="dtNav" />
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
