import React, { useState } from "react";
import axios from "axios";
import { TextField, FormHelperText } from "@mui/material";

import { CreateButton } from "../";
import "./style.css";
function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  //   const [formError, setFormError] = useState({
  //     name: false,
  //     username: false,
  //     email: false,
  //     password: false,
  //     passwordConfirmation: false,
  //   });
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [passConError, setPassConError] = useState(false);
  const [error, setError] = useState("");

  // Form data input change
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // To not include passconfirmation in formdata
  const onPassConfirmationChange = (e) =>
    setPasswordConfirmation(e.target.value);

  // Send form submition to database
  const handleSubmit = (e) => {
    e.preventDefault();
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
    if (passwordConfirmation == "" || formData.password.length < 6) {
      setPassConError(true);
    } else {
      setPassConError(false);
    }
    // for (const key in formData) {
    //   if (formData[key] == "") {
    //     setFormError({ ...formData, [[key]]: true });
    //   } else {
    //     setFormError({ ...formData, [[key]]: false });
    //   }
    // }

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
    console.log("end of submit");
  };

  //   Post newUser
  const addNewUser = async (newUser) => {
    try {
      let response = await axios.post(
        "https://budfit.herokuapp.com/auth/register",
        newUser
      );
      console.log(response);
    } catch (err) {
      console.log("error block");
      setError(err);
    }
  };
  return (
    <div className="regform-container">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="reg-form"
      >
        <div>
          <div className="input-container">
            <TextField
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
            />
          </div>
          <div className="input-container">
            <TextField
              name="passwordconfirmation"
              id="passwordconfirmation"
              label="Confirm Your Password"
              variant="filled"
              value={passwordConfirmation}
              onChange={onPassConfirmationChange}
              error={passConError}
              helperText={
                passConError
                  ? "Your passwords must match and be atleast 6 characters long"
                  : ""
              }
              fullWidth
              required
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
