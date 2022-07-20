import React from "react";
import { Box, Container, Typography } from "@mui/material";
function EventView(props) {
  const { activity, dateTime, title, event_id, location, description, spaces } =
    props;
  //   let x = Date.parse(`${dateTime}`).toString().slice(0, 15);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="p" color="textSecondary">
          {activity}
        </Typography>
        <Typography variant="p" color="textSecondary">
          {dateTime}
        </Typography>
        <Typography variant="p" color="textSecondary">
          {location}
        </Typography>
        <Typography variant="p" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="p" color="textSecondary">
          {spaces}
        </Typography>
      </Box>
    </Container>
  );
}

export default EventView;
