
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
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jNHsL6h9XdhCxmESytaUcomceE02xP_AOH-JaUCC01bGc5a2axS5puueeubRA1J2DDk&usqp=CAU")',
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
          elevation={10}
          style={{
            width: "35%",
            height: "500px",
          }}
        >
          <center>
            <Typography variant="h1" style={{ fontSize: "50px" }}>
              Sign Up
            </Typography>
            <br></br>
            <br></br>
            <TextField
              id="outlined-basic"
              label="Firstname"
              type="text"
              variant="outlined"
              placeholder="Enter firstname"
            />
            &emsp;&emsp;&emsp;
            <TextField
              id="outlined-basic"
              label="Lastname"
              type="text"
              variant="outlined"
              placeholder="Enter lastname"
            />
            <br></br>
            <br></br>
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter email"
            />
            <br></br>
            <br></br>
            <TextField
              label="Password"
              type="password"
              id="outlined-basic-password"
              variant="outlined"
              autoComplete="new-password"
              placeholder="Enter password"
            />
            <br></br>
            <br></br>
            <Link to="/home">
              <Button variant="contained">Sign Up</Button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/" underline="hover">
              {"Already have an account?"}
            </Link>
          </center>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default Signup;
