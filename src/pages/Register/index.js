import React from "react";
import { Typography } from "@mui/material";
import { RegForm } from "../../components";
import { BackButton } from "../../components";
import "./index.css";
export const Register = () => {
  return (
    <div className="reg-container">
      <div className="reg-topbar">
        <BackButton />
      </div>
      <div class="reg-text-container">
        <Typography variant="h4" gutterBottom>
          Register your account
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Please fill in your details below
        </Typography>
      </div>
      <RegForm />
    </div>
  );
};
