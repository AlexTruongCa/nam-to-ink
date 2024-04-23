import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./Portfolio.css";

const PortfolioSkeleton = () => {
  return (
    <div>
      <div className="portfolio" id="section-portfolio">
        <div className="gallery">
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo" />
          <Skeleton className="photo-big-1" />
          <Skeleton className="photo-big-2" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkeleton;
