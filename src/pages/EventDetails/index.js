import React, { useState, useEffect } from "react";
import axios from "axios";

import { TopBar, EventView, BackButton } from "../../components";
import { Button, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

  const handleUnmatch = () => {
    console.log("unmatch");
  };

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
