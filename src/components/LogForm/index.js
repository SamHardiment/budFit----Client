import React, { useState } from "react";
import { axios } from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

import { LoginButton } from "../";
import "./style.css";
function LogForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPassError] = useState(false);

  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://budfit.herokuapp.com/auth/login`, {
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        navigate("/");
      });
    // checkUser(userData); // Post request to check if user exists
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="logform-container">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="log-form"
        aria-label="form"
      >
        <div>
          <div className="input-container">
            <TextField
              aria-label="textfield"
              name="username"
              id="username"
              label="Username"
              variant="filled"
              value={user.username}
              onChange={onInputChange}
              error={usernameError}
              helperText={usernameError ? "Please enter your username" : ""}
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              aria-label="textfield"
              name="name"
              id="name"
              label="Name"
              variant="filled"
              value={user.password}
              onChange={onInputChange}
              error={passwordError}
              helperText={
                passwordError
                  ? "Your password was incorrect, please try again"
                  : ""
              }
              fullWidth
            />
          </div>
        </div>
        <div className="log-form-buttons">
          <LoginButton />
        </div>
      </form>
    </div>
  );
}

export default LogForm;
