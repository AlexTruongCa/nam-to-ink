import React from "react";

const Photobig = ({ className, src }) => {
  return (
    <div className={className}>
      <img src={src} alt="alt" />
    </div>
  );
};

export default Photobig;
