import React, { useState } from "react";
import "./ImageSlider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPreviousImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };
  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  const ImgSlider = () => {
    return (
      <>
        <img
          key={imageUrls[imageIndex].id}
          src={imageUrls[imageIndex].media_url}
          className={"img-slider-img"}
        />
        <button
          onClick={showPreviousImage}
          className="img-slider-btn"
          style={{ left: "0" }}
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: "0" }}
        >
          <ArrowForwardIosIcon />
        </button>
      </>
    );
  };
  return (
    <div
      style={{
        maxWidth: "300px",
        width: "100%",
        aspectRatio: " 1 / 1",
        margin: "0 auto",
      }}
    >
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div style={{ width: "100%", height: "100%" }}>{ImgSlider()}</div>
      </div>
    </div>
  );
};

export default ImageSlider;
