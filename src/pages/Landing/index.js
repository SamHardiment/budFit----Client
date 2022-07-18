import React from "react";
import "./index.css";
import { HomeBtns, TopBar } from "../../components";
import image from "../../assets/images/bgbball.jpg";

export const Landing = () => {
  return (
    <>
      <div
        className="bg-container"
        style={{
          // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8, url(${image}))`,
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
