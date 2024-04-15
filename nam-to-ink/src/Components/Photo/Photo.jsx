import React from "react";

const Photo = ({ className, src, expandModal }) => {
  return (
    <div className={className}>
      <img
        id="image"
        src={src}
        alt="alt"
        onClick={() => {
          expandModal(true);
        }}
      />
    </div>
  );
};

export default Photo;
