import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";


function EventView(props) {
  const navigate = useNavigate();
  const { activity, dateTime, title, attendees, location, description, spaces } = props;

  let x = Date.parse(`${dateTime}`).toString().slice(0, 15);
  
  const handleUsernameClickInEventView = (id) => {
    navigate(`/u/${id}`)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="p" color="textSecondary">
          {activity}
        </Typography>
        <Typography variant="p" color="textSecondary">
          {x}
        </Typography>
        <Typography variant="p" color="textSecondary">
          {location}
        </Typography>
        <Typography variant="p" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="p" color="textSecondary">
          Spaces filled: {attendees.length}/{spaces}
        </Typography>
        <Typography variant="p" color="textSecondary">
          Users attending:
        </Typography>
        <ul>
        {attendees.map((user) => (
          <li key={user.username} onClick={()=>handleUsernameClickInEventView(user.user_id)}>
            <Typography variant="p" color="textSecondary">
              {user.username}
            </Typography>
          </li>
        ))}
        </ul>
      </Box>
    </Container>
  );
}

export default EventView;
