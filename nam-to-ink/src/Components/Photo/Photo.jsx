import React from "react";

const Photo = ({ className, src }) => {
  return (
    <div className={className}>
      <img src={src} alt="alt" />
    </div>
  );
};

export default Photo;
