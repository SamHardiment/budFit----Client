import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { BackButton } from "../../components";
import { purple, grey } from "@mui/material/colors";
import "./style.css";
export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            textTransform: "none",
            color: purple[500],
            fontSize: "1.1rem",
            border: `2px none ${purple[500]}`,

            "&:hover": {
              border: `2px solid ${purple[300]}`,
              color: purple[300],
            },
          },
        },
      ],
    },
  },
});
function CreateEventSuccess() {
  const navigate = useNavigate();

  function goToEvents() {
    navigate("/events");
  }

  function goToSearch() {
    navigate("/searching");
  }

  function goToAccount() {
    navigate("/account");
  }

  return (
    <div className="success-container">
      <div className="success-top">
        <BackButton />
        <Typography variant="h6">Create an event</Typography>
      </div>
      <div className="event-success">
        <Typography variant="h5">Event successfully created!</Typography>
        <CssBaseline />

        <div className="navigate-buttons">
          <Typography variant="subtitle1">
            What would you like to do next?
          </Typography>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Button
              variant="text"
              className="register"
              onClick={goToEvents}
              name="register"
            >
              Create another event
            </Button>
            <Button
              variant="text"
              className="register"
              onClick={goToSearch}
              name="register"
            >
              Search for events to join
            </Button>
            <Button
              variant="text"
              className="register"
              onClick={goToAccount}
              name="register"
            >
              View your account
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default CreateEventSuccess;
