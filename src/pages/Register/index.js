import React from "react";
import { Typography, TextField, Box, CssBaseline } from "@mui/material";
import { RegForm } from "../../components";
import { BackButton } from "../../components";
import "./index.css";
import TopBar from "../../components/TopBar";
export const Register = () => {
  return (
    <div className="reg-container">
      <div className="reg-topbar">
        <BackButton />
      </div>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TopBar />
        {/* <Avatar sx={{ p: 4, m: 1, bgcolor: "purple" }}>
          <img src={image} alt="logo" />
        </Avatar> */}
        <Typography
          sx={{
            marginTop: 3,
          }}
          variant="h5"
        >
          Register an account
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Please fill in your details below
        </Typography>
      </Box>

      <RegForm />
    </div>
  );
};
