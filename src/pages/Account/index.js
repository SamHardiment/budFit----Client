import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useAuthContext } from "../../auth/index";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";

import { BackButton, LocationFormField, FormField } from "../../components";

import { changeCurrentUser } from "../../redux/action";
import testimage from "../../assets/images/bgbball.jpg";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
export const Account = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [inputErr, setInputErr] = useState(false);

  // handle form open and close
  const handleFormOpen = () => {
    setOpen(true);
  };

  const handleFormClose = () => {
    setOpen(false);
  };

  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const getUserData = async () => {
    const { data } = await axios.get(
      `https://budfit.herokuapp.com/users/${currentUser.user_id}/`
    );
    dispatch(changeCurrentUser(data[0]));
  };

  useEffect(() => {
    getUserData();
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }, []);

  //Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const updateObj = {
      name: e.target[0].value,
      username: e.target[2].value,
      email: e.target[4].value,
      dob: e.target[6].value,
      preferences: e.target[10].value,
      picture: "test",
    };
    if (
      (updateObj.name == "" || updateObj.username == "",
      updateObj.email == "",
      updateObj.dob == "",
      updateObj.preferences == "")
    ) {
      setInputErr(false);
      return;
    } else {
      updateUser(currentUser.user_id, updateObj);
      setInputErr(false);
    }
  };

  async function updateUser(id, obj) {
    try {
      fetch(`https://budfit.herokuapp.com/users/${id}/`, {
        method: "PATCH",
        body: JSON.stringify({
          name: obj.name,
          username: obj.username,
          email: obj.email,
          dob: 18,
          preferences: obj.preferences,
          picture: obj.picture,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      navigate("/searching");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {loading ? (
        <div>
          {error ? (
            ""
          ) : (
            <div className="loading-account-container">
              <Typography variant="h5">Loading Account</Typography>

              <div className="rays" />
            </div>
          )}
        </div>
      ) : (
        <ThemeProvider theme={theme}>
          <div className="account-container">
            <div className="account-top">
              <BackButton />

              <Typography variant="h6">Account</Typography>
            </div>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    fs: 3,
                    p: 4,
                    m: 1,
                    bgcolor: purple[500],
                    width: 48,
                    height: 48,
                  }}
                >
                  <img className="avatar" src={testimage} alt="logo" />
                </Avatar>
                <Typography variant="h5">
                  {currentUser.name} || {currentUser.username}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  Review or adjust your details
                </Typography>
              </Box>
              {open ? (
                <div>
                  <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="reg-form"
                    aria-label="form"
                  >
                    <div className="scrollable-form-account">
                      <div className="input-container">
                        <FormField label="Name" />
                      </div>
                      <div className="input-container">
                        <FormField label="Username" />
                      </div>
                      <div className="input-container">
                        <FormField label="Email" />
                      </div>
                      <div className="input-container">
                        <FormField label="Date of Birth" myFieldType="date" />
                      </div>

                      <div className="input-container">
                        <LocationFormField />
                      </div>
                      <div className="input-container">
                        <FormField label="Picture" />
                      </div>
                    </div>
                    <div className="register-form-buttons">
                      <Button
                        aria-label="Edit button"
                        variant="login"
                        className="edit-button"
                        type="submit"
                        size="medium"
                        fullWidth
                      >
                        Update
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="account-details">
                  <div className="detail-container">
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-signature" />
                      <Typography variant="subTitle2">Name:</Typography>
                      <div className="account-detail-text">
                        <Typography variant="subTitle2">
                          {currentUser.name}
                        </Typography>
                      </div>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-dice-d6" />
                      <Typography variant="subTitle2">Username:</Typography>
                      <div className="account-detail-text">
                        <Typography variant="subTitle2">
                          {currentUser.username}
                        </Typography>
                      </div>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-envelope" />
                      <Typography variant="subTitle2">Email:</Typography>
                      <div className="account-detail-text">
                        <Typography variant="subTitle2">
                          {currentUser.email}
                        </Typography>
                      </div>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-list-ol" />
                      <Typography variant="subTitle2">Age:</Typography>
                      <div className="account-detail-text">
                        <Typography variant="subTitle2">
                          {currentUser.dob}
                        </Typography>
                      </div>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                      <Typography variant="subTitle2">Location:</Typography>
                      <div className="account-detail-text">
                        <Typography variant="subTitle2">
                          {currentUser.preferences}
                        </Typography>
                      </div>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-image" />

                      <Typography variant="subTitle2">
                        Profile Picture:
                      </Typography>
                      <div className="account-detail-text">
                        <Typography variant="subTitle2">
                          {currentUser.picture}
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-container">
                    <Button
                      aria-label="Edit button"
                      variant="login"
                      className="edit-button"
                      onClick={handleFormOpen}
                      size="medium"
                      fullWidth
                    >
                      Edit Details
                    </Button>
                    <Button
                      variant="logout"
                      className="edit-button"
                      type="submit"
                      onClick={handleLogout}
                      value="Logout"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </Container>
          </div>
        </ThemeProvider>
      )}
    </>
  );
};
