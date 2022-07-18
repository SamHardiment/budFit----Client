import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { purple, grey } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            textTransform: "none",
            color: grey[200],
            fontSize: "1.1rem",
            border: `2px none ${purple[500]}`,
            "&:hover": {
              border: `2px solid ${purple[300]}`,
              color: purple[300],
            },
          },
        },
        {
          props: { variant: "login" },
          style: {
            textTransform: "none",
            color: grey[100],
            fontSize: "1.1rem",
            backgroundColor: purple[400],
            "&:hover": {
              backgroundColor: purple[600],
            },
            border: `2px none ${purple[500]}`,
          },
        },
      ],
    },
  },
});

function HomeBtns() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    //navigate to /login
    navigate("/login");
  };

  const navigateRegister = () => {
    //navigate to /register
    navigate("/register");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="login-button">
        <Button
          variant="login"
          className="login"
          onClick={navigateLogin}
          name="login"
        >
          Login
        </Button>
      </div>

      <div className="register-button">
        <Button
          variant="text"
          className="register"
          onClick={navigateRegister}
          name="register"
        >
          Register an account
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default HomeBtns;
