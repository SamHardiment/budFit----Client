import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import {
  Typography,
  Button,
  TextField,
  Box,
  CssBaseline,
  Avatar,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import axios from "axios";

import { useAuthContext } from "../../auth/index.js";
import { changeCurrentUser } from "../../redux/action";
import { BackButton } from "../../components";
import { TopBar } from "../../components";
import image from "../../components/TopBar/logo-cropped.svg";
import "./style.css";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "newacc" },
          style: {
            textTransform: "none",
            color: purple[600],
            fontSize: "0.9rem",
          },
        },

        {
          props: { variant: "input" },
          style: {
            textTransform: "none",
            color: purple[800],
            fontSize: "0.9rem",
          },
        },
        {
          props: { variant: "login" },
          style: {
            textTransform: "none",
            color: grey[100],
            fontSize: "1.1rem",
            backgroundColor: purple[400],
            "&:hover": {
              backgroundColor: purple[600],
            },
            border: `2px none ${purple[500]}`,
          },
        },
      ],
    },
  },
});
export const Login = () => {
  const dispatch = useDispatch();

  const { login } = useAuthContext();
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setError();
    const value = e.target.value;
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const navigateRegister = () => {
    //navigate to /register
    navigate("/register");
  };
  const formIncomplete = () => {
    Object.values(formData).some((value) => !value);
  };

  const getUserData = async () => {
    const { data } = await axios.get(`https://budfit.herokuapp.com/users/${formData.username}/`);
    dispatch(changeCurrentUser(data[0]));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      getUserData();
      const loginResult = await login(formData);
      if (loginResult === "Login successful") {
        navigate("/searching");
      } else {
        throw new Error(loginResult);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="log-container">
        <div className="log-topbar">
          <BackButton />
        </div>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TopBar />
          {/* <Avatar sx={{ p: 4, m: 1, bgcolor: "purple" }}>
          <img src={image} alt="logo" />
        </Avatar> */}
          <Typography
            sx={{
              marginTop: 3,
            }}
            variant="h5"
          >
            Welcome back!
          </Typography>
        </Box>

        <form
          aria-label="login-form"
          id="login_form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          className="log-form"
        >
          <div>
            <div className="input-container">
              <TextField
                id="username"
                className="password-field"
                aria-label="username-field"
                name="username"
                value={formData.username}
                onChange={handleInput}
                label="Username"
                variant="filled"
                error={error}
                helperText={error ? "Please enter your username" : ""}
                fullWidth
              />
            </div>
            <div className="input-container">
              <TextField
                id="password"
                aria-label="password-field"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInput}
                label="Password"
                variant="filled"
                error={error}
                helperText={
                  error ? "Your password was incorrect, please try again" : ""
                }
                fullWidth
              />
            </div>
          </div>
          <div className="log-form-buttons">
            <Button
              aria-label="login-button"
              variant="login"
              className="login"
              type="submit"
              color="success"
              size="medium"
              fullWidth
            >
              Login
            </Button>
          </div>
        </form>
        <div className="register-button">
          <Button
            variant="newacc"
            className="register"
            onClick={navigateRegister}
            name="register"
          >
            Don't have an account? Register here!
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

{
  /* <>
      <form aria-label="login-form" id="login_form" onSubmit={handleSubmit}>
        <h1 id="login-title"> Login Sheet</h1>

        <label htmlFor="username">Username:</label>
        <input
          id="username"
          className="password-field"
          aria-label="username-field"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="username"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          aria-label="password-field"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="password"
          required
        />

        <input
          id="submit_btn"
          type="submit"
          disabled={formIncomplete()}
          value="Login"
        />
      </form>
    </> */
}
