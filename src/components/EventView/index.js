import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

function EventView(props) {
  const navigate = useNavigate();
  const {
    activity,
    dateTime,
    title,
    attendees,
    location,
    description,
    spaces,
  } = props;

  let x = Date.parse(`${dateTime}`).toString().slice(0, 15);

  const handleUsernameClickInEventView = (id) => {
    navigate(`/u/${id}`);
  };

  return (
    <div className="inv-event-detail">
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h6" color="textSecondary">
        {activity}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {x}
      </Typography>
      <div className="sub-event-details">
        <div className="sub-event-desc">
          <Typography variant="body1">{description}</Typography>
        </div>
        <Typography variant="body1">
          This event is taking place in: {location}
        </Typography>
      </div>

      <div className="sub-event-spaces">
        <Typography variant="body1">
          Spaces filled: {attendees.length}/{spaces}
        </Typography>
        <Typography variant="body1">Users attending:</Typography>
        <ul>
          {attendees.map((user) => (
            <li
              key={user.username}
              onClick={() => handleUsernameClickInEventView(user.user_id)}
            >
              <Typography variant="body1">{user.username}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventView;
