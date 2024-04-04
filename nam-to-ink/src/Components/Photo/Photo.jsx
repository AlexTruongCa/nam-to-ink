import React from "react";
import photo_1 from "../../assets/photo_1.png";

const Photo = ({ className, src }) => {
  return (
    <div className={className}>
      <img src={src} alt="" />
    </div>
  );
};

export default Photo;
