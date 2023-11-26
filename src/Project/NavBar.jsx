import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import leaf from "./leaf.jpg";

const pages = [];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "lightgreen" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar id="avatar" src={leaf} alt="FloraFiesta" sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "initial",
              fontWeight: 800,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FloraFiesta
          </Typography>
          {isLoggedIn ? (
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "initial",
                fontWeight: 500,
                color: "inherit",
              }}
            >
              Welcome, {userName}
            </Typography>
          ) : null}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "cursive",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FloraFiesta
          </Typography>
          <Box
            sx={{
              fontWeight: 500,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "inherit",
                  fontFamily: "cursive",
                  fontWeight: 500,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            HOME &emsp;
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            ABOUT &emsp;
          </Link>
          {isLoggedIn ? (
            <Button
              variant="contained"
              onClick={handleLogout}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: 500,
              }}
            >
              Logout
            </Button>
          ) : (
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: 500,
                }}
              >
                Logout
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
