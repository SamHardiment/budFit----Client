import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

import { TopBar, EventPreview } from "../../components";
import './index.css';

export const UserEvents = () => {
  const navigate = useNavigate();

  const [totalEvents, setTotalEvents] = useState(0);
  const [events, setEvents] = useState([{ activity: "Football", time: "1997-07-16T19:20:15", lastMessage: "This is the football message" }, { activity: "Golf", time: "1997-07-16T19:20:15", lastMessage: "This is the golf message" }]);

  const handleClick = () =>{
    navigate('/create')
  }

  return (
    <>
      <TopBar />
      <div id="chatsPageContainer" >
        Joined Events: {totalEvents}

        <div id="chatsContainer">
          {events.map((event) => (
            <EventPreview key={Math.random()} activity={event.activity} dateTime={event.time} lastMessage={event.lastMessage} />
          ))}
        </div>
        <Fab aria-label="newEvent" onClick={handleClick}>
          <Add />
        </Fab>
      </div>
    </>
  );
};
