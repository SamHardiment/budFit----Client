import React, { useState } from "react";
import { TextField } from "@mui/material";
function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordconfirmation: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          variant="filled"
          value={formData.name}
          onChange={onInputChange}
          required
        />
        <TextField
          id="username"
          label="Username"
          variant="filled"
          value={formData.username}
          onChange={onInputChange}
          required
        />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          value={formData.email}
          onChange={onInputChange}
          required
        />
        <TextField
          id="password"
          label="Password"
          variant="filled"
          value={formData.password}
          onChange={onInputChange}
          required
        />
        <TextField
          id="passwordconfirmation"
          label="Confirm Your Password"
          variant="filled"
          value={formData.passwordconfirmation}
          onChange={onInputChange}
          required
        />
        <input type="submit" value="Update!" />
      </form>
    </div>
  );
}

export default RegForm;
