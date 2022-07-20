import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Fab } from "@mui/material";
import { Add, Warning } from "@mui/icons-material";

import { TopBar, EventPreview } from "../../components";
import "./index.css";

export const UserEvents = () => {
  const navigate = useNavigate();

  const [totalEvents, setTotalEvents] = useState(0);
  const [events, setEvents] = useState([
    {
      activity: "Football",
      time: "1997-07-16T19:20:15",
      lastMessage: "This is the football message",
    },
    {
      activity: "Golf",
      time: "1997-07-16T19:20:15",
      lastMessage: "This is the golf message",
    },
  ]);

  // Get user events
  useEffect(() => {
    getUserEvents("2");
  }, []);

  async function getUserEvents(id) {
    const data = axios.get(`https://budfit.herokuapp.com/events/${id}/`);
    console.log(data);
  }
  // Handle naviagtion

  const handleCreateClick = () => {
    navigate("/create");
  };

  const handleSafetyClick = () => {
    navigate("/safety");
  };

  return (
    <>
      <TopBar />
      <div id="chatsPageContainer">
        <h4>Joined Events: {totalEvents}</h4>

        <div id="chatsContainer">
          {events.map((event) => (
            <EventPreview
              key={Math.random()}
              activity={event.activity}
              dateTime={event.time}
              lastMessage={event.lastMessage}
            />
          ))}
        </div>
        <Fab
          color="secondary"
          aria-label="newEvent"
          onClick={handleCreateClick}
        >
          <Add data-testid="newBtn" />
        </Fab>
        <Fab
          color="warning"
          aria-label="safetyAdvice"
          onClick={handleSafetyClick}
        >
          <Warning data-testid="warnBtn" />
        </Fab>
      </div>
    </>
  );
};
