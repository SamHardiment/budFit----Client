import React, { useEffect } from "react";
import "./index.css";
import { HomeBtns, TopBar } from "../../components";
import image from "../../assets/images/bgbball.jpg";
import axios from "axios";

export const Landing = () => {
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
