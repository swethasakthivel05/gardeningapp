import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

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
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const { user, dispatch } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .get(`http://localhost:4000/users?name=${name}`)
        .then((response) => {
          const resp = response.data;
          console.log(resp);
          const user = resp.find((user) => user.name === name);
          console.log(user);
          if (!user) {
            toast.error("Enter valid username");
          } else {
            const validUser = resp.find((user) => user.password === password);
            if (validUser) {
              toast.success("Login successful");
              sessionStorage.setItem("name", name);
              navigate("/Home");
            } else {
              toast.error("Invalid credentials");
            }
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (name === "" || name === null) {
      result = false;
      toast.warning("Enter your username");
    }

    if (password === "" || password === null) {
      result = false;
      toast.warning("Password cannot be empty");
    }
    return result;
  };

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
          elevation={10}
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
              id="standard-textarea-username"
              label="Username"
              variant="standard"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              id="outlined-basic"
              variant="standard"
              autoComplete="new-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            >
              Name &emsp;&emsp;
            </TextField>
            <br></br>
            <Checkbox color="primary" /> Remember me
            <br></br>
            <br></br>
            <Button variant="contained" onClick={(e) => ProceedLogin(e)}>
              Login
            </Button>
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
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Paper>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
