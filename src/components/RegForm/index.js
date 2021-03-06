import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useAuthContext } from "../../auth/index.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeCurrentUser } from "../../redux/action";
import { CreateButton } from "../";
import "./style.css";

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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form data input change
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();
    if (
      formData.name == "" ||
      formData.username == "" ||
      formData.email == "" ||
      formData.password == "" ||
      formData.password.length < 6
    ) {
      console.log("errors");
    } else {
      const regResult = await register(formData);
      if (regResult === "Registration successful") {
        console.log("it worked");
        setFormData({ name: "", username: "", email: "", password: "" });
        navigate("/setup");
      } else {
        throw new Error("Unsuccessful registration");
      }
    }
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

    dispatch(changeCurrentUser(formData));
  };

  return (
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
              type="email"
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
  );
}

export default RegForm;
