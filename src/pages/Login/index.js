import React from "react";
import { Typography } from "@mui/material";
import { LogForm } from "../../components";
import { BackButton } from "../../components";
import "./style.css";
export const Login = () => {
  return (
    <div className="log-container">
      <div className="log-topbar">
        <BackButton />
      </div>
      <div className="log-text-container">
        <Typography variant="h4" gutterBottom>
          Welcome back!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Please login in below
        </Typography>
      </div>
      <LogForm />
    </div>
  );
};
