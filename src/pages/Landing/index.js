import React, { useEffect } from "react";
import "./index.css";
import { HomeBtns, TopBar } from "../../components";
import image from "../../assets/images/bgbball.jpg";
import axios from "axios";

export const Landing = () => {
  // const updateObj = {
  //   name: "works",
  //   username: "maybe",
  //   email: "sam@sam.com",
  //   dob: "string",
  //   preferences: "london",
  //   picture: "test",
  // };

  // useEffect(() => {
  //   console.log("useeEffect");

  //   async function newEvent() {
  //     console.log("before axios");

  //     let resp = await axios.post("https://budfit.herokuapp.com/events", {
  //       title: "e.target[0].value",
  //       descr: "e.target[2].value",
  //       date: "e.target[5].value",
  //       activity: "e.target[7].value",
  //       location: "e.target[11].value",
  //       spaces: "e.target[13].value",
  //     });
  //   }
  //   newEvent();
  // }, []);

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
