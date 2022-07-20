import React, { useState, useEffect } from "react";
import axios from "axios";

import { TopBar } from "../../components";

function EventDetails() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const currentURL = window.location.href;
      const eventID = currentURL.substring(currentURL.indexOf("#") + 1);
      const url = `https://budfit.herokuapp.com/events/${eventID}/`;
      async function getEventDetails() {
        try {
          const { data } = await axios.get(`${url}`);
          console.log(data);
          setEvent(data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      getEventDetails();
    }, 1000);
  }, []);

  return (
    <>
      <TopBar />
      {loading ? (
        <div className="rays" />
      ) : (
        <div key={Math.random()}>
          {event.forEach((e) => (
            <h2>{e.location}</h2>
          ))}
        </div>
      )}

      {/* <p>{props.description}</p>
      <p>Where? {props.location}</p>
      <p>When? {props.time}</p>
      <p>
        Spaces: {thisEvent.attending.length()}/{thisEvent.spaces}
      </p>
      <p>Attendees:</p>
      <ul>
        {props.attending.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul> */}
    </>
  );
}

export default EventDetails;
