import React from "react";
import "./Portfolio.css";

const Portfolio = ({ children }) => {
  return (
    <div className="portfolio" id="section-portfolio">
      <div className="gallery">{children}</div>
    </div>
  );
};

export default Portfolio;
