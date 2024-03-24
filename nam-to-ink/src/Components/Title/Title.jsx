import React from "react";
import "./Title.css";

const Title = ({ title, titleBackground }) => {
  //set props "title" & "titleBackground"
  const titleStyle = {
    background: titleBackground,
    // Dynamically set background color based on "titleBackground" prop
  };
  return (
    <div className="title" style={titleStyle}>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
