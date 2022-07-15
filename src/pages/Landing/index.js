import React from "react";
import './index.css';
import { HomeBtns } from '../../components'
// import bgVideo1 from '../../assets/bgvideos/video.mp4'

export const Landing = () => {
  return (
    <>
      <div className="bg-container">
        {/* <video loop autoPlay>
          <source 
          src={bgVideo1} 
          type="video/mp4"
          />
        </video> */}
        
        
        <div className="btn-container">
          <HomeBtns />
        </div>
      
      </div>
    </>
  );
};
