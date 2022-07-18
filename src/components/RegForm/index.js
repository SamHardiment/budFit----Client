import React, { useState, useContext } from "react";
import axios from "axios";

import { TextField, FormHelperText } from "@mui/material";
import { useAuthContext } from "../../auth/index.js";

import jwt_decode from "jwt-decode";

// import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CreateButton } from "../";
import "./style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
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
function RegForm() {
  const { register, login } = useAuthContext();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [passConError, setPassConError] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Form data input change
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();
    const regResult = await register(formData);
    if (formData.name == "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (formData.username == "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (formData.email == "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (formData.password == "" || formData.password.length < 6) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    if (
      formData.password.length >= 6 &&
      formData.password == passwordConfirmation
    ) {
      if (
        formData.name &&
        formData.username &&
        formData.email &&
        formData.password
      ) {
        const newUser = { ...formData };
        console.log(newUser);
        addNewUser(newUser);
        setPasswordConfirmation("");
        setFormData({ name: "", username: "", email: "", password: "" });
      }
    } else {
      setPassConError(true);
    }
    if (regResult === "Registration successful") {
      console.log("it worked");
    } else {
      throw new Error("Unsuccessful registration");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="regform-container">
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmitt}
          className="reg-form"
          aria-label="form"
        >
          <div>
            <div className="input-container">
              <TextField
                aria-label="textfield1"
                name="name"
                id="name"
                label="Name"
                variant="filled"
                value={formData.name}
                onChange={onInputChange}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
                required
              />
            </div>
            <div className="input-container">
              <TextField
                aria-label="textfield"
                name="username"
                id="username"
                label="Username"
                variant="filled"
                value={formData.username}
                onChange={onInputChange}
                error={usernameError}
                helperText={usernameError ? "Please enter a username" : ""}
                fullWidth
                required
              />
            </div>
            <div className="input-container">
              <TextField
                aria-label="textfield"
                name="email"
                id="email"
                label="Email"
                variant="filled"
                value={formData.email}
                onChange={onInputChange}
                error={emailError}
                helperText={emailError ? "Please enter a valid email" : ""}
                fullWidth
                required
              />
            </div>
            <div className="input-container">
              <TextField
                aria-label="textfield"
                name="password"
                id="password"
                label="Password"
                variant="filled"
                value={formData.password}
                onChange={onInputChange}
                error={passError}
                helperText={
                  passError
                    ? "Your password must be atleast 6 characters long"
                    : ""
                }
                fullWidth
                required
                type="password"
              />
            </div>
          </div>
          <div className="register-form-buttons">
            <CreateButton />
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default RegForm;
