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
      <Typography variant="body1" color="textSecondary">
        Location: {location}
      </Typography>
      <div className="sub-event-details">
        <div className="sub-event-desc">
          <Typography variant="h6">Event description</Typography>

          <Typography variant="body1">{description}</Typography>
        </div>
      </div>

      <div className="sub-event-spaces">
        <Typography variant="h6">Attending</Typography>
        <Typography variant="body1">
          Spaces filled: {attendees.length}/{spaces}
        </Typography>

        <ul>
          {attendees.map((user) => (
            <div className="account-details">
              <div className="detail-container">
                <div className="detail-box">
                  <Typography variant="subTitle2">Name:</Typography>
                  <div
                    className="event-detail-account"
                    key={user.username}
                    onClick={() => handleUsernameClickInEventView(user.user_id)}
                  >
                    <Typography variant="body1">{user.username}</Typography>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventView;
