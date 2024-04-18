import React from "react";

const Photo = ({ className, src, openModal }) => {
  const handleClick = () => {
    openModal(true);
  };
  return (
    <div className={className}>
      <img id="image" src={src} alt="alt" />
    </div>
    // onClick={handleClick}
  );
};

export default Photo;
