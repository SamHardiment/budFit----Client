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
  console.log("currentUser:");
  console.log(currentUser);
  const navigate = useNavigate();

  const [totalEvents, setTotalEvents] = useState(0);
  console.log("totalEvents:");
  console.log(totalEvents);
  const [events, setEvents] = useState([]);
  console.log("events:")
  console.log(events)
  // Get user events
  useEffect(() => {
    let { data } = axios.get(`https://budfit.herokuapp.com/matches`);
    data = [
      {
      "event_id": 1,
      "match_id": 1,
      "user_id": 1
      },
      {
      "event_id": 10,
      "match_id": 2,
      "user_id": 4
      }
      ]
    let events = data.filter(function (el) {
      return el.user_id == currentUser.user_id;
    });
  
    for (let i = 0; i < events.length; i++) {
      let event = events[i];
      let { data } = axios.get(`https://budfit.herokuapp.com/events/1/`);
      data = [
        {
        "activity": "Football",
        "date": "Sat, 23 Jul 2022 00:00:00 GMT",
        "descr": "Big event!! Need 11 people to join for a football match this Saturday,  Waterloo Road, Wolverhampton",
        "event_id": 1,
        "location": "West Midlands",
        "spaces": "3",
        "title": "11 A-side Football Match"
        }
        ]
      events[i] = data[0]
    }
  
    events.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  
    if (events.length) {
      setEvents(events);
      setTotalEvents(events.length);
    }
  }, []);

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
