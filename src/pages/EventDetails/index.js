import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { TopBar, EventView, BackButton } from "../../components";
import "./style.css";

import { Navigate, useNavigate } from "react-router-dom";
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
  const [event, setEvent] = useState({});
  const [myAttendees, setMyAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);

  const eventID = useParams().id;

  async function getAttendees() {
    let matches = await axios.get(`https://budfit.herokuapp.com/matches`);
    matches = matches.data;

    let attendees = matches.filter(function (el) {
      return el.event_id == eventID;
    });

    for (let i = 0; i < attendees.length; i++) {
      let attendee = attendees[i];
      const { data } = await axios.get(
        `https://budfit.herokuapp.com/users/${attendee.user_id}/`
      );
      attendees[i] = data[0];
    }
    setMyAttendees(attendees);
  }

  useEffect(() => {
    getAttendees();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const url = `https://budfit.herokuapp.com/events/${eventID}/`;
      async function getEventDetails() {
        try {
          let { data } = await axios.get(`${url}`);

          setEvent(data);

          setLoading(false);
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
    try {
      const url = `https://budfit.herokuapp.com/events/${eventID}/`;
      const { data } = await axios.get(`${url}`);
      let matchData = await axios.get(`https://budfit.herokuapp.com/matches`);
      matchData = matchData.data;
      // All the matches the currrent user is matched with

      matchData = matchData.filter((m) => m.match_id == currentUser.user_id);
      for (let i = 0; i < matchData.length; i++) {
        let event = matchData[i];
        let eventToDelete = matchData.filter(
          (m) => m.event_id == event.event_id
        );
        const deleteID = eventToDelete[0].event_id;
        const { response } = await axios.delete(
          `https://budfit.herokuapp.com/matches/${deleteID}/`
        );
      }
      navigate("/Events");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {loading ? (
        <>
          <TopBar />
          <div className="rays" />
        </>
      ) : (
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
                >
                  Leave Event
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventDetails;
