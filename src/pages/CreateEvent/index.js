import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import axios from "axios";

import { FormField, TopBar, LocationFormField } from "../../components";

export const CreateEvent = () => {
  const navigate = useNavigate();

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    console.log(e);
    console.log(e.target[12]);
    console.log(e.target);
    console.log(e.target[11]);
    console.log(e.target[13]);

    let req = {
      title: e.target[0].value,
      descr: e.target[2].value,
      time: e.target[5].value,
      activity: e.target[7].value,
      location: e.target[11].value,
      spaces: e.target[13].value,
    };

    // console.log(req);
    // const options = {
    //   headers: {
    //     "Access-Control-Allow-Headers": "*",
    //     "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token")
    //       ? localStorage.getItem("token")
    //       : null,
    //   },
    // };

    // try {
    //   const options = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       // "Access-Control-Allow-Headers": "*",
    //       // "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    //     },
    //   };

    //   const { data } = await axios.post(
    //     `https://budfit.herokuapp.com/events`,
    //     req,
    //     options
    //   );
    //   if (data.err) {
    //     throw Error(data.err);
    //   }
    // } catch (err) {
    //   return err.message;
    // }

    // let resp = await axios.post(
    // "https://budfit.herokuapp.com/events",
    //   req,
    //   options
    // );
    // console.log(resp);
    // navigate("/success");
  };

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
