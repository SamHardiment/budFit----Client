import React from "react";
import "./index.css";
import { HomeBtns } from "../../components";
import image from "../../assets/images/bgbball.jpg";

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
        <div className="btn-container">
          <HomeBtns />
        </div>
      </div>
    </>
  );
};
