import React from "react";
import "./Portfolio.css";
import photo_1 from "../../assets/photo_1.png";
import photo_2 from "../../assets/photo_2.png";
import photo_3 from "../../assets/photo_3.png";
import photo_4 from "../../assets/photo_4.png";
import photo_5 from "../../assets/photo_5.png";
import photo_6 from "../../assets/photo_6.png";
import photo_7 from "../../assets/photo_7.png";
import photo_8 from "../../assets/photo_8.png";
import photo_9 from "../../assets/photo_9.png";
import photo_10 from "../../assets/photo_10.png";
import photo_11 from "../../assets/photo_11.png";
import photo_12 from "../../assets/photo_12.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>MY WORK</h2>
      <div className="gallery">
        <div className="photo">
          <img src={photo_1} alt="" />
        </div>
        <div className="photo">
          <img src={photo_2} alt="" />
        </div>
        <div className="photo">
          <img src={photo_3} alt="" />
        </div>
        <div className="photo-big-1">
          <img src={photo_4} alt="" />
        </div>
        <div className="photo-big-2">
          <img src={photo_5} alt="" />
        </div>
        <div className="photo">
          <img src={photo_6} alt="" />
        </div>
        <div className="photo">
          <img src={photo_7} alt="" />
        </div>
        <div className="photo">
          <img src={photo_8} alt="" />
        </div>
        <div className="photo">
          <img src={photo_9} alt="" />
        </div>
        <div className="photo">
          <img src={photo_10} alt="" />
        </div>
        <div className="photo">
          <img src={photo_11} alt="" />
        </div>
        <div className="photo">
          <img src={photo_12} alt="" />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Portfolio;
