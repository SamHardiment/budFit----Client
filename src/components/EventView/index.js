import React from "react";

function EventView(props) {
  const { activity, dateTime, title, event_id } = props;
  //   let x = Date.parse(`${dateTime}`).toString().slice(0, 15);

  return <h1>{activity}</h1>;
}

export default EventView;
