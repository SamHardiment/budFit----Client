import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Fab } from "@mui/material";
import { Add, Warning } from "@mui/icons-material";
import { Typography, Box, Container, Card } from "@material-ui/core";
import { BackButton, EventPreview } from "../../components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
const theme = createTheme({
  palette: {
    background: {
      paper: "#fffcf9",
    },
    text: {
      primary: "#ab47bc",
      secondary: "#ce93d8",
    },
    action: {
      active: "#4caf50",
    },
  },
});
export const UserEvents = () => {
  const currentUser = useSelector((state) => state.currentUser);

  const navigate = useNavigate();

  const [totalEvents, setTotalEvents] = useState(0);
  const [events, setEvents] = useState([]);

  // Get user events
  useEffect(() => {
    getMatches();
  }, []);

  async function getUserEvents() {
    try {
      const { data } = await axios.get(`https://budfit.herokuapp.com/matches`);

      let matches = data.filter((m) => m.match_id == currentUser.user_id);

      let filterEvents = [];

      for (let i = 0; i < matches.length; i++) {
        let event = matches[i];
        const { data } = await axios.get(
          `https://budfit.herokuapp.com/events/${event.event_id}/`
        );
      }
      setEvents(data);
      setTotalEvents(events.length);
    } catch (err) {
      console.log(err);
    }
  }

  async function getMatches() {
    const { data } = await axios.get(`https://budfit.herokuapp.com/matches`);
    let events = data.filter(function (el) {
      return el.user_id == currentUser.user_id;
    });

    for (let i = 0; i < events.length; i++) {
      let event = events[i];
      const { data } = await axios.get(
        `https://budfit.herokuapp.com/events/${event.event_id}/`
      );
      events[i] = data[0];
    }

    events.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    if (events.length) {
      setEvents(events);
      setTotalEvents(events.length);
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
    <div className="user-event-container">
      <div className="account-top">
        <BackButton />

        <Typography variant="h6">Your Events</Typography>
      </div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "8px",
          }}
        >
          <Typography variant="h5">Upcoming Events: {totalEvents}</Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Click events for more details
          </Typography>
        </Box>
      </Container>
      {events.length == 0 ? (
        <>
          <div className="noevents">
            <Typography variant="h6">You have no events coming up!</Typography>
            <div className="noevents-text">
              <Typography variant="body2">
                It is time to find a new Bud and start swiping to find events
                near you
              </Typography>
            </div>
          </div>
          <div id="chatsPageContainer">
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
          </div>{" "}
        </>
      ) : (
        <div id="chatsPageContainer">
          <div id="chatsContainer">
            <ThemeProvider theme={theme}>
              {events.map((event) => (
                <Card sx={{ bgcolor: "#ab47bc" }}>
                  <EventPreview
                    key={Math.random()}
                    event_id={event.event_id}
                    dateTime={event.date}
                    title={event.title}
                    activity={event.activity}

                    // lastMessage={event.lastMessage}
                  />
                </Card>
              ))}
            </ThemeProvider>
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
      )}
    </div>
  );
};
