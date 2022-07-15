import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";

import { CreateButton, BackButton } from "../";

// import AddIcon from "@mui/icons-material/Add";
function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    name: false,
    username: false,
    email: false,
    password: false,
    passwordConfirmation: false,
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
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
    if (formData.password == passwordConfirmation) {
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
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          name="name"
          id="name"
          label="Name"
          variant="filled"
          value={formData.name}
          onChange={onInputChange}
          error={formError.name}
          fullWidth
          required
        />
        <TextField
          name="username"
          id="username"
          label="Username"
          variant="filled"
          value={formData.username}
          onChange={onInputChange}
          error={formError.username}
          fullWidth
          required
        />
        <TextField
          name="email"
          id="email"
          label="Email"
          variant="filled"
          value={formData.email}
          onChange={onInputChange}
          error={formError.email}
          fullWidth
          required
        />
        <TextField
          name="password"
          id="password"
          label="Password"
          variant="filled"
          value={formData.password}
          onChange={onInputChange}
          error={formError.password}
          fullWidth
          required
        />
        <TextField
          name="passwordconfirmation"
          id="passwordconfirmation"
          label="Confirm Your Password"
          variant="filled"
          value={passwordConfirmation}
          onChange={onPassConfirmationChange}
          error={formError.passwordConfirmation}
          fullWidth
          required
        />
        <div>
          <BackButton />
          <CreateButton />
        </div>
      </form>
    </div>
  );
}

export default RegForm;
