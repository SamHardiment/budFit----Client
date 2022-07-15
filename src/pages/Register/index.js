import React from "react";
import { RegForm } from "../../components";
import { SearchBtns } from "../../components";
import { BackButton } from "../../components";
import "./index.css";
export const Register = () => {
  return (
    <div className="form-container">
      <h1>Register</h1>
      <RegForm />
    </div>
  );
};
