import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Button, Container, CssBaseline, Typography } from "@mui/material";
import { BackButton, LocationFormField } from "../../components";

import { changeCurrentUser } from "../../redux/action";
import "./style.css";
import { purple, grey, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
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
        {
          props: { variant: "logout" },
          style: {
            textTransform: "none",
            color: grey[100],
            fontSize: "1.1rem",
            backgroundColor: red[400],
            "&:hover": {
              backgroundColor: red[600],
            },
            border: `2px none ${red[500]}`,
          },
        },
      ],
    },
  },
});

export const AccountSetup = () => {
  const dispatch = useDispatch();
  let currentUser = useSelector((state) => state.currentUser);

  const navigate = useNavigate();

  //Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateObj = {
      preferences: e.target[2].value,
    };
    if (updateObj.preferences == "") {
      return;
    } else {
      const { data } = await axios.get(
        `https://budfit.herokuapp.com/users/${currentUser.username}/`
      );

      await updateUser(data[0].user_id, updateObj);

      dispatch(changeCurrentUser({ ...currentUser, user_id: data[0].user_id }));

      navigate("/searching");
    }
  };

  async function updateUser(id, obj) {
    try {
      let payload = {
        name: currentUser.name,
        username: currentUser.username,
        email: currentUser.email,
        dob: 18,
        preferences: obj.preferences,
        picture: "",
      };

      fetch(`https://budfit.herokuapp.com/users/${id}/`, {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      dispatch(
        changeCurrentUser({ ...currentUser, preferences: obj.preferences })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="account-setup-container">
          <div className="account-top">
            <BackButton />

            <Typography variant="h6">Account Setup</Typography>
          </div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="setup-title">
              <Typography variant="h5">
                Where are you looking for events?
              </Typography>
            </div>

            <div>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className="reg-form"
                aria-label="form"
              >
                <div className="input-container">
                  <LocationFormField />
                </div>
                <Button
                  aria-label="Edit button"
                  variant="login"
                  className="edit-button"
                  type="submit"
                  size="medium"
                  fullWidth
                >
                  Save
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};
