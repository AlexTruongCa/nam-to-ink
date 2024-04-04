import React from "react";
import photo_4 from "../../assets/photo_4.png";
import photo_5 from "../../assets/photo_5.png";

const Photobig = ({ className, src }) => {
  return (
    <div className={className}>
      <img src={src} alt="" />
    </div>
  );
};

export default Photobig;
