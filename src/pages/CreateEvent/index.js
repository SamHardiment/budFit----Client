import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import { Button } from "@mui/material";

import { FormField, TopBar, LocationFormField } from "../../components";

export const CreateEvent = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    // post it

    // navigate("/success");
  }

  const Categories = [
    { name: 'Running' },
    { name: 'Cycling' },
    { name: 'Football' },
    { name: 'Cricket' },
    { name: 'Gym' },
    { name: 'Golf' },
    { name: 'Hiking' },
    { name: 'Basketball' }
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
        <FormField label='Description' myFieldType='multiline' />
        <FormField label='Start Time' myFieldType='date' />
        <FormField label='Category' myFieldType='dropdown' options={Categories} />
        <LocationFormField />
        <FormField label='Spaces' myFieldType='number'/>
        <Box mt={3}>
          <Button variant="contained" type="submit" data-testid="postBtn">
            Post Event
          </Button>
        </Box>
      </form>
    </>
  );
};
