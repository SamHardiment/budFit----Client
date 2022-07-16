import React, { useState } from "react";
import axios from "axios";
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

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { ...user };
    console.log(userData);

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
