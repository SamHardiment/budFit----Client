import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import { purple, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BackButton } from "../../components";
import { CreateButton } from "../../components";
import testimage from "../../assets/images/bgbball.jpg";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      ],
    },
  },
});
export const Account = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    dob: "",
    preference: "",
    picture: "",
  });

  // handle form open and close
  const handleFormOpen = () => {
    setOpen(true);
  };

  const handleFormClose = () => {
    setOpen(false);
  };

  // Fetch User data
  useEffect(() => {
    async function fetchUserDetails(user_id) {
      user_id ||= "1";
      try {
        setError("");
        const URL = `https://budfit.herokuapp.com/users/${user_id}/`;
        const { data } = await axios.get(URL);
        setUser(data[0]);
        setLoading(true);
      } catch (err) {
        setError(err);
        setLoading(true);
      }
    }
    fetchUserDetails("1");
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
    console.log(user);
  }, [user]);

  // Form logic
  // Form data input change
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
  };
  // Handle Patch request
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (formData.name == "" || formData.username == "",
      formData.email == "",
      formData.dob == "",
      formData.preference == "",
      formData.picture == "")
    ) {
      setInputErr(false);
      return;
    } else {
      setInputErr(false);
      setOpen(false);
    }
  };

  return (
    <>
      {loading ? (
        <div>
          {error ? (
            ""
          ) : (
            <div className="account-container">
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 className="heading4" id="searchingH4">
                    Loading Account
                  </h4>

                  <div className="rays" />
                </Box>
              </Container>
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
                  {user.name} || {user.username}
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
                    <div className="scrollable-form">
                      <div className="input-container">
                        <TextField
                          aria-label="name textfield"
                          name="name"
                          id="name"
                          label="Name"
                          variant="filled"
                          value={formData.name}
                          onChange={onInputChange}
                          error={inputErr}
                          helperText={inputErr ? "All fields are required" : ""}
                          fullWidth
                        />
                      </div>
                      <div className="input-container">
                        <TextField
                          aria-label="textfield"
                          name="username"
                          id="username"
                          label="Username"
                          variant="filled"
                          value={formData.username}
                          onChange={onInputChange}
                          // error={usernameError}
                          // helperText={
                          //   usernameError ? "Please enter a username" : ""
                          // }
                          fullWidth
                        />
                      </div>
                      <div className="input-container">
                        <TextField
                          aria-label="textfield"
                          name="email"
                          id="email"
                          label="Email"
                          variant="filled"
                          value={formData.email}
                          onChange={onInputChange}
                          type="email"
                          // error={emailError}
                          // helperText={
                          //   emailError ? "Please enter a valid email" : ""
                          // }
                          fullWidth
                        />
                      </div>
                      <div className="input-container">
                        <TextField
                          aria-label="textfield"
                          name="dob"
                          id="dob"
                          label="Date of Birth"
                          variant="filled"
                          value={formData.dob}
                          onChange={onInputChange}
                          // error={passError}
                          // helperText={
                          //   passError
                          //     ? "Your password must be atleast 6 characters long"
                          //     : ""
                          // }
                          fullWidth
                        />
                      </div>
                      <div className="input-container">
                        <TextField
                          aria-label="textfield"
                          name="preferences"
                          id="preferences"
                          label="Location"
                          variant="filled"
                          value={formData.preferences}
                          onChange={onInputChange}
                          // error={passError}
                          // helperText={
                          //   passError
                          //     ? "Your password must be atleast 6 characters long"
                          //     : ""
                          // }
                          fullWidth
                        />
                      </div>
                      <div className="input-container">
                        <TextField
                          aria-label="textfield"
                          name="picture"
                          id="picture"
                          label="Picture"
                          variant="filled"
                          value={formData.picture}
                          onChange={onInputChange}
                          // error={passError}
                          // helperText={
                          //   passError
                          //     ? "Your password must be atleast 6 characters long"
                          //     : ""
                          // }
                          fullWidth
                        />
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
                      <Typography variant="subTitle2">{user.name}</Typography>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-dice-d6" />
                      <Typography variant="subTitle2">Username:</Typography>
                      <Typography variant="subTitle2">
                        {user.username}
                      </Typography>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-envelope" />
                      <Typography variant="subTitle2">
                        Email Address:
                      </Typography>
                      <Typography variant="subTitle2">{user.email}</Typography>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-list-ol" />
                      <Typography variant="subTitle2">Age:</Typography>
                      <Typography variant="subTitle2">{user.dob}</Typography>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                      <Typography variant="subTitle2">Location:</Typography>
                      <Typography variant="subTitle2">
                        {user.preferences}
                      </Typography>
                    </div>
                    <div className="detail-box">
                      <FontAwesomeIcon icon="fa-solid fa-image" />

                      <Typography variant="subTitle2">
                        Profile Picture:
                      </Typography>
                      <Typography variant="subTitle2">
                        {user.picture}
                      </Typography>
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
