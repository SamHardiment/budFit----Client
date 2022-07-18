import React from "react";
import { useState, useEffect } from "react";

import { TopBar, EventPreview } from "../../components";
import './index.css';

export const UserEvents = () => {
  const [totalEvents, setTotalEvents] = useState(0);
  const [events, setEvents] = useState([{activity:"Football", descr:"Some football"}, {activity:"Golf", descr:"Some golf"}]);

  return (
    <>
      <TopBar />
      <div id="chatsPageContainer" >
        Joined Events: {totalEvents}

        <div id="chatsContainer">
        {events.map((event) => (
          <EventPreview key={Math.random()} activity={event.activity} descr={event.descr}/>
        ))}
        </div>
      </div>
    </>
  );
};
