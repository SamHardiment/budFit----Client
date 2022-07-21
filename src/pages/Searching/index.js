import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { changeSearchResults } from "../../redux/action";
import "./index.css";

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

  useEffect(() => {
    try {
      let { data } = axios.get(`https://budfit.herokuapp.com/events`);
      data = [
        {
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
        }
      ]
      let events = data.filter((v) => v.location == "West Midlands");

      let matches = axios.get(`https://budfit.herokuapp.com/matches`);
      matches = [
        {
          "event_id": 1,
          "match_id": 1,
          "user_id": 1
        },
        {
          "event_id": 10,
          "match_id": 2,
          "user_id": 4
        }
      ]
      matches = matches.filter((v) => v.user_id == 1);
      matches = matches.map((e) => e.event_id);

      events = events.filter((v) => !matches.includes(v.event_id));

      events.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      for (let i = 0; i < events.length; i++) {
        let event = events[i];

        let attendees = matches.filter((v) => v.event_id == event.event_id);
        let attending = attendees.map((e) => e.user_id);

        let source = images.filter(
          (image) => image.name.toLowerCase() == event.activity.toLowerCase()
        );

        events[i] = { ...events[i], attending: attending, img: source[0].src };
      }

      setUsers(events);
    } catch (error) {
      console.log(error);
    }
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
