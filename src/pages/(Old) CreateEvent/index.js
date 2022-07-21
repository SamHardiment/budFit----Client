import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import axios from "axios";

import { FormField, TopBar, LocationFormField } from "../../components";

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
      title: "Title",
      descr: "Description",
      date: "Sat, 23 Jul 2022 00:00:00 GMT",
      activity: "Football",
      location: "Antrim",
      spaces: 6,
    };

    await axios.post("https://budfit.herokuapp.com/events", req);
    navigate("/success");
  };

  return (
    <>
      <TopBar />
      <form role="form" id="createEventForm" onSubmit={handleEventSubmit}>
        <h1>New Event</h1>
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
        <Box mt={3}>
          <Button variant="contained" type="submit" data-testid="postBtn">
            Post Event
          </Button>
        </Box>
      </form>
    </>
  );
};
