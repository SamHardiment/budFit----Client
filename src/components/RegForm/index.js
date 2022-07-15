import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import AddIcon from "@mui/icons-material/Add";
function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
        console.log(formData);
      }
    }
    console.log("end of submit");
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
          required
        />
        <TextField
          name="username"
          id="username"
          label="Username"
          variant="filled"
          value={formData.username}
          onChange={onInputChange}
          required
        />
        <TextField
          name="email"
          id="email"
          label="Email"
          variant="filled"
          value={formData.email}
          onChange={onInputChange}
          required
        />
        <TextField
          name="password"
          id="password"
          label="Password"
          variant="filled"
          value={formData.password}
          onChange={onInputChange}
          required
        />
        <TextField
          name="passwordconfirmation"
          id="passwordconfirmation"
          label="Confirm Your Password"
          variant="filled"
          value={formData.passwordconfirmation}
          onChange={onPassConfirmationChange}
          required
        />
        <Button variant="contained" type="submit">
          <FontAwesomeIcon icon="fa-solid fa-plus" />
          Create
        </Button>
      </form>
    </div>
  );
}

export default RegForm;
