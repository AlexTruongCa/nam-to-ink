import React from "react";

const Photo = ({ className, src, openModal }) => {
  const handleClick = () => {
    openModal(true);
  };
  return (
    <div className={className}>
      <img id="image" src={src} alt="alt" onClick={handleClick} />
    </div>
  );
};

export default Photo;
