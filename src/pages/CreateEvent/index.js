import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import { Button } from "@mui/material";
import axios from "axios";

import { FormField, TopBar, LocationFormField } from "../../components";

export const CreateEvent = () => {
  const navigate = useNavigate();
  
  const handleEventSubmit = async (e) => {
    e.preventDefault()

    console.log(e);

    let req = {
      title:e.target[0].value,
      descr:e.target[2].value,
      time:e.target[5].value,
      activity:e.target[7].value,
      location:e.value[11].value,
      spaces:e.value[13].value,
    }

    console.log(req);

    let resp = await axios.post('https://budfit.herokuapp.com/events', req)
    console.log(resp);
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
        onSubmit={handleEventSubmit}
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
