import React, { useState, useEffect } from "react";
import axios from "axios";

import { TopBar, EventView, BackButton } from "../../components";
import { Button, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
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
  const [loading, setLoading] = useState(true);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const currentURL = window.location.href;
      const eventID = currentURL.substring(currentURL.indexOf("#") + 1);
      const url = `https://budfit.herokuapp.com/events/${eventID}/`;
      async function getEventDetails() {
        try {
          const { data } = await axios.get(`${url}`);
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
      const currentURL = window.location.href;
      const eventID = currentURL.substring(currentURL.indexOf("#") + 1);
      const url = `https://budfit.herokuapp.com/events/${eventID}/`;
      const { data } = await axios.get(`${url}`);
      console.log(data);
      let matchData = await axios.get(`https://budfit.herokuapp.com/matches`);
      matchData = matchData.data;
      // All the matches the currrent user is matched with

      matchData = matchData.filter((m) => m.match_id == currentUser.user_id);
      for (let i = 0; i < matchData.length; i++) {
        let event = matchData[i];
        console.log(event);
        let eventToDelete = matchData.filter(
          (m) => m.event_id == event.event_id
        );
        const deleteID = eventToDelete[0].event_id;
        const { response } = await axios.delete(
          `https://budfit.herokuapp.com/matches/${deleteID}/`
        );
        console.log(response);
      }
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
