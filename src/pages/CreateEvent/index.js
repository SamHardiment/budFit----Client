import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { FormField, TopBar, LocationFormField } from "../../components";
import { purple, grey, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BackButton } from "../../components";
import "./style.css";
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
const Categories = [
  { name: "Running" },
  { name: "Cycling" },
  { name: "Football" },
  { name: "Cricket" },
  { name: "Gym" },
  { name: "Golf" },
  { name: "Hiking" },
  { name: "Basketball" },
];

export const CreateEvent = () => {
  const navigate = useNavigate();

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    let req = {
      title: e.target[0].value,
      descr: e.target[2].value,
      date: e.target[5].value,
      activity: e.target[7].value,
      location: e.target[11].value,
      spaces: e.target[13].value,
    };

    await axios.post("https://budfit.herokuapp.com/events", req);
    navigate("/success");
  };

  return (
    <div className="create-event-container">
      <div className="account-top">
        <BackButton />

        <Typography variant="h6">New Event</Typography>
      </div>
      <div className="create-event-text-container">
        <Typography variant="h4">Create a new event</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Make a listing to find some budd's!
        </Typography>
      </div>
      <form role="form" id="createEventForm" onSubmit={handleEventSubmit}>
        <div className="create-scroll">
          <FormField label="Event Title" />
          <FormField label="Description" myFieldType="multiline" />
          <FormField label="Start Time" myFieldType="date" />
          <FormField
            label="Category"
            myFieldType="dropdown"
            options={Categories}
          />
          <LocationFormField />
          <FormField label="Spaces" myFieldType="number" />
        </div>
        <Box mt={6}>
          <ThemeProvider theme={theme}>
            <Button
              aria-label="Create event button"
              variant="login"
              className="edit-button"
              type="submit"
              data-testid="postBtn"
              size="medium"
              fullWidth
            >
              Post Event
            </Button>
          </ThemeProvider>
        </Box>
      </form>
    </div>
  );
};
