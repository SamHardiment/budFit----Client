import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { TopBar, EventView, BackButton } from "../../components";
import "./style.css";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "logout" },
          style: {
            textTransform: "none",
            color: grey[100],
            fontSize: "1.1rem",
            backgroundColor: red[400],
            "&:hover": {
              backgroundColor: red[600],
            },
            border: `2px none ${red[500]}`,
          },
        },
      ],
    },
  },
});

function EventDetails() {
  const [myAttendees, setMyAttendees] = useState([]);
  const [event, setEvent] = useState([{
    "activity": "Football",
    "date": "Sat, 23 Jul 2022 00:00:00 GMT",
    "descr": "Big event!! Need 11 people to join for a football match this Saturday,  Waterloo Road, Wolverhampton",
    "event_id": 1,
    "location": "West Midlands",
    "spaces": "3",
    "title": "11 A-side Football Match"
    },
    {
    "activity": "Golf",
    "date": "Sat, 23 Jul 2022 00:00:00 GMT",
    "descr": "Wolverhampton Adventure Golf, maximum of 15 spaces, first come first serve basis",
    "event_id": 2,
    "location": "West Midlands",
    "spaces": "2",
    "title": "Golf "
    },
    {
    "activity": "Running",
    "date": "Sun, 24 Jul 2022 00:00:00 GMT",
    "descr": "Charity event, Running for Cancer Research, spaces unlimited Wolverhampton park",
    "event_id": 3,
    "location": "West Midlands",
    "spaces": "N/A",
    "title": "Charity running event"
    }]);

  const eventID = 1;

  async function getAttendees() {
    let matches = await axios.get(`https://budfit.herokuapp.com/matches`);
    matches = {data:[
      {
      "event_id": 1,
      "match_id": 1,
      "user_id": 1
      }
      ]}
    matches = matches.data

    let attendees = matches.filter(function (el) {
      return el.event_id == eventID;
    });

    for (let i = 0; i < attendees.length; i++) {
      let attendee = attendees[i];
      let { data } = await axios.get(`https://budfit.herokuapp.com/users/1/`);
      data = [
        {
        "dob": 92.05,
        "email": "john@john.com",
        "name": "John doe",
        "password_digest": "password",
        "picture": "",
        "preferences": "Gym",
        "user_id": 1,
        "username": "John"
        }
        ]
      attendees[i] = data[0]
    }
    setMyAttendees(attendees);
  }

  useEffect(() => {
    getAttendees()
  }, [])
  

  useEffect(() => {
    setTimeout(() => {
      const url = `https://budfit.herokuapp.com/events/1/`;
      async function getEventDetails() {
        try {
          let { data } = await axios.get(`${url}`);
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
          setEvent(data);

        } catch (err) {
          console.log(err);
        }
      }
      getEventDetails();
    }, 1000);
  }, []);

  const handleUnmatch = () => {
    deleteEvent();
  };

  async function deleteEvent() {
      console.log("Deleting event");
  }
  return (
    <>
        <div className="eventPage">
          <div className="account-top">
            <BackButton />
            <Typography variant="h6">Event Details</Typography>
          </div>
          <div className="event-container">
            <div className="event-details">
              {event.map((event) => (
                <EventView
                  key={Math.random()}
                  dateTime={event.date}
                  title={event.title}
                  activity={event.activity}
                  description={event.descr}
                  location={event.location}
                  spaces={event.spaces}
                  attendees={myAttendees}
                />
              ))}
            </div>
            <div className="register-form-buttons">
              <ThemeProvider theme={theme}>
                <Button
                  aria-label="Leave button"
                  variant="logout"
                  className="leave-button"
                  onClick={handleUnmatch}
                  size="medium"
                  fullWidth
                  data-testid="leaveBtn"
                >
                  Leave Event
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
    </>
  );
}

export default EventDetails;
