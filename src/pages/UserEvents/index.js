import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Fab } from "@mui/material";
import { Add, Warning } from "@mui/icons-material";

import { TopBar, EventPreview } from "../../components";
import "./index.css";

export const UserEvents = () => {
  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalEvents, setTotalEvents] = useState(0);
  const [events, setEvents] = useState([]);

  // Get user events
  useEffect(() => {
    getUserEvents();
  }, []);

  async function getUserEvents() {
    try {
      const { data } = await axios.get(`https://budfit.herokuapp.com/matches`);
      let matches = data.filter((m) => m.match_id == currentUser.user_id);
      for (let i = 0; i < matches.length; i++) {
        let event = matches[i];
        const { data } = await axios.get(
          `https://budfit.herokuapp.com/events/${event.event_id}/`
        );
        console.log(data);

        setEvents(data);
        setTotalEvents(events.length);
      }
    } catch (err) {
      console.log(err);
    }
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
              event_id={event.event_id}
              dateTime={event.date}
              title={event.title}
              activity={event.activity}

              // lastMessage={event.lastMessage}
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
