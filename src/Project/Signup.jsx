import React from "react";
import { Link } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
const Signup = () => {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Paper
          elevation={100}
          style={{
            width: "35%",
            height: "500px",
            marginTop: "25px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "20px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <br></br>
          <center>
            <Typography style={{ fontSize: "50px", fontFamily: "initial" }}>
              Sign Up
            </Typography>
            <br></br>
            <br></br>
            <TextField
              id="outlined-basic"
              label="Firstname"
              type="text"
              variant="standard"
              placeholder="Enter firstname"
            />
            &emsp;&emsp;&emsp;
            <TextField
              id="outlined-basic"
              label="Lastname"
              type="text"
              variant="standard"
              placeholder="Enter lastname"
            />
            <br></br>
            <br></br>
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="standard"
              placeholder="Enter email"
            />
            <br></br>
            <br></br>
            <TextField
              label="Password"
              type="password"
              id="outlined-basic-password"
              variant="standard"
              autoComplete="new-password"
              placeholder="Enter password"
            />
            <br></br>
            <br></br>
            <Link to="/">
              <Button variant="contained">Sign Up</Button>
            </Link>
            <br></br>
            <br></br>
            <Link
              to="/"
              style={{
                color: "darkblue",
                textDecoration: "none",
              }}
            >
              {"Already have an account?"}
            </Link>
          </center>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default Signup;
