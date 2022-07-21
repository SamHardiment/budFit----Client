import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { BackButton, EventPreview } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { purple, grey, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Typography,
  CssBaseline,
  Container,
  Box,
  Avatar,
  Card,
} from "@mui/material";
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "login" },
          style: {
            textTransform: "none",
            color: grey[100],
            fontSize: "1.1rem",
            backgroundColor: purple[400],
            "&:hover": {
              backgroundColor: purple[600],
            },
            border: `2px none ${purple[500]}`,
          },
        },
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
function UserDetails() {
  const [props, setProps] = useState();
  const [attending, setAttending] = useState([
    {
      activity: "invalid",
      date: new Date(),
      descr: "",
      event_id: 0,
      location: "",
      spaces: "",
      title: "User has not yet joined any events",
    },
  ]);

  let { id } = useParams();

  async function getUserData(id) {
    const { data } = await axios.get(
      `https://budfit.herokuapp.com/users/${id}/`
    );
    setProps(data[0]);
  }
  async function getMatches(id) {
    const { data } = await axios.get(`https://budfit.herokuapp.com/matches`);
    let events = data.filter(function (el) {
      return el.user_id == id;
    });

    for (let i = 0; i < events.length; i++) {
      let event = events[i];
      const { data } = await axios.get(
        `https://budfit.herokuapp.com/events/${event.event_id}/`
      );
      events[i] = data[0];
    }
    events.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    if (events.length) {
      setAttending(events);
    }
  }

  useEffect(() => {
    getUserData(id);
    getMatches(id);
  }, []);

  while (!props || !attending) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="forgein-account">
      <ThemeProvider theme={theme}>
        <div className="account-container">
          <div className="account-top">
            <BackButton />

            <Typography variant="h6">{props.username} Account</Typography>
          </div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  fs: 3,
                  p: 4,
                  m: 1,
                  bgcolor: purple[500],
                  width: 48,
                  height: 48,
                }}
              ></Avatar>
              <Typography variant="h5">
                {props.name} || {props.username}
              </Typography>
            </Box>

            <div className="account-details">
              <div className="detail-container">
                <div className="detail-box">
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  <Typography variant="subTitle2">Based in:</Typography>
                  <div className="account-detail-text">
                    <Typography variant="subTitle2">
                      {props.preferences}
                    </Typography>
                  </div>
                </div>
                <div className="account-detail-events">
                  <Typography variant="subTitle2">
                    Events {props.name} is into:
                  </Typography>
                  <div className="forgien-account-detail-text">
                    {attending.map((event) => (
                      <Card>
                        <EventPreview
                          key={event.id || Math.random()}
                          activity={event.activity}
                          dateTime={event.date}
                          title={event.title}
                          event_id={event.event_id}
                        />
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default UserDetails;
