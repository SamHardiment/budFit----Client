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
      <RegForm />
    </div>
  );
};
