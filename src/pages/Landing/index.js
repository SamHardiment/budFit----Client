import React from "react";
import './index.css'
import bgVideo1 from '../../assets/bgvideos/video.mp4'

export const Landing = () => {
  return (
    <>
      <div className="bg-container">
        <video loop autoPlay>
          <source 
          src={bgVideo1} 
          type="video/mp4"
          />
        </video>

  
      <h1>budFit</h1>
      </div>
    </>
  );
};
