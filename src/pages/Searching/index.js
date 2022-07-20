import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Button } from "@mui/material";

import { changeSearchResults } from "../../redux/action";
import './index.css'

const images = [
  { name: "basketball", src: "https://i.imgur.com/60iRW40.jpg" },
  { name: "cricket", src: "https://i.imgur.com/YrkUBgI.jpg" },
  { name: "cycling", src: "https://i.imgur.com/wXaNEcL.jpg" },
  { name: "football", src: "https://i.imgur.com/Dja9nd4.jpg" },
  { name: "golf", src: "https://i.imgur.com/OcSGk3p.jpg" },
  { name: "gym", src: "https://i.imgur.com/FMvDpl4.jpg" },
  { name: "hiking", src: "https://i.imgur.com/QZmbEVA.jpg" },
  { name: "running", src: "https://i.imgur.com/xCab1Aw.jpg" },
];

function Searching() {
  const [users, setUsers] = React.useState([]);

  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`https://budfit.herokuapp.com/events`);

      console.log(data);

      let events = data.filter(v => v.location == currentUser.preferences);

      console.log(events);

      events.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      for (let i = 0; i < events.length; i++) {
        let event = events[i];
        const { data } = await axios.get(`https://budfit.herokuapp.com/matches`);

        let attendees = data.filter(v => v.event_id == event.event_id);
        let attending = attendees.map((e)=>e.user_id)

        console.log(event.activity);

        let source = images.filter(image => image.name.toLowerCase() == event.activity.toLowerCase());

        events[i] = {...events[i], attending: attending, img: source[0].src}
      }

      console.log(events);
      setUsers(events);

    } catch (error) {
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={fetchUsers()}>
            Retry
          </Button>
        }
      >
        {error}
      </Alert>;
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    dispatch(changeSearchResults(users));
    setTimeout(function () {
      navigate("/search");
    }, 3000);
  }, [users]);

  return (
    <>
      <h4 id="searchingH4">Pulling search results.</h4>
      <div className="rays" />
    </>
  );
}

export default Searching;
