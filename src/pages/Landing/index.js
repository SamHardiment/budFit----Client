import React, { useEffect } from "react";
import "./index.css";
import { HomeBtns, TopBar } from "../../components";
import image from "../../assets/images/bgbball.jpg";
import axios from "axios";

export const Landing = () => {

  useEffect(() => {
    console.log("useeEffect");
    async function newEvent() {
      console.log("before axios");
      let resp = await axios.post("http://localhost:5000/events", {
        title: "e.target[0].value",
        descr: "e.target[2].value",
        date: "Sat, 23 Jul 2022 00:00:00 GMT",
        activity: "e.target[7].value",
        location: "e.target[11].value",
        spaces: 6,
      });
      console.log(resp);
    }
    newEvent();
  }, []);

  return (
    <>
      <div
        className="bg-container"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay">
          <div className="logo-container">
            <TopBar />
          </div>
          <div className="btn-container">
            <HomeBtns />
          </div>
        </div>
      </div>
    </>
  );
};
