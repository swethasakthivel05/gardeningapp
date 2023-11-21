import React from "react";
import { Link } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
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

const LoginPage = () => {
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
              Login Page
            </Typography>
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
              id="outlined-basic"
              variant="standard"
              autoComplete="new-password"
              placeholder="Enter password"
            >
              Email Id &emsp;&emsp;
            </TextField>
            <br></br>
            <Checkbox color="primary" /> Remember me
            <br></br>
            <br></br>
            <Link to="/home">
              <Button variant="contained">Login</Button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <Link
              to="/signup"
              style={{
                color: "darkblue",
                textDecoration: "none",
              }}
            >
              {"Don't have an account?"}
            </Link>
            &emsp;&emsp;&emsp;
            <Link
              href="#"
              underline="hover"
              style={{
                color: "darkblue",
                textDecoration: "none",
              }}
            >
              {"forgot password?"}
            </Link>
          </center>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;
