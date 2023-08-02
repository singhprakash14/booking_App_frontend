import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
   <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Booking App
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Dashboard
        </Button>
        <Button component={Link} to="/booking-list" color="inherit">
          Booking List
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
