import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import { Button } from "@mui/material";

import { FormField, TopBar, LocationFormField } from "../../components";

export const CreateEvent = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()

    // post it

    navigate("/success");
  }

  const Categories = [
    { name: 'Running' },
    { name: 'Cycling' },
    { name: 'Football' },
    { name: 'Cricket' }
  ]

  return (
    <>
    <TopBar />
      <form
        role="form"
        id="createEventForm"
        onSubmit={handleSubmit}
        >
        <h1>New Event</h1>
        <FormField label='Event Title' />
        <FormField label='Event Description' myFieldType='multiline' />
        <FormField label='Event Description' myFieldType='date' />
        <FormField label='Event Category' myFieldType='dropdown' options={Categories} />
        <LocationFormField />
        <FormField label='Spaces' myFieldType='number'/>
        <Box mt={3}>
          <Button variant="contained" type="submit">
            Post Event
          </Button>
        </Box>
      </form>
    </>
  );
};
