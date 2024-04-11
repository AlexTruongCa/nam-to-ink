import React from "react";
import "./Portfolio.css";
import InstagramIcon from "@mui/icons-material/Instagram";

const Portfolio = ({ children }) => {
  return (
    <div className="portfolio" id="section-portfolio">
      <div className="gallery">{children}</div>
    </div>
  );
};

export default Portfolio;
