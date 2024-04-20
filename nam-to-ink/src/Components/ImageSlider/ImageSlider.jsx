import React, { useState } from "react";
import "./ImageSlider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InstagramIcon from "@mui/icons-material/Instagram";

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

  if (!imageUrls || imageUrls.length === 0) {
    return <div>Loading image...</div>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        className="B"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "block",
        }}
      >
        <div style={{ width: "100%", aspectRatio: "1 / 1" }}>{ImgSlider()}</div>
      </div>
      <div
        className="A"
        style={{
          backgroundColor: "lightgrey",
          width: "50%",
          aspectRatio: " 1 / 1",
        }}
      >
        <div
          style={{
            // backgroundColor: "red",
            display: "flex",
            padding: "10px 10px 0 10px",
          }}
        >
          <div>
            <a
              href={imageUrls[imageIndex].permalink}
              target="_blank"
              style={{ textDecoration: "none", color: "#c4864b" }}
            >
              <InstagramIcon />
            </a>
          </div>
          <div style={{ paddingLeft: "10px", fontWeight: "bold" }}>
            <a
              href={imageUrls[imageIndex].permalink}
              target="_blank"
              style={{ textDecoration: "none", color: "#c4864b" }}
            >
              {imageUrls[imageIndex].username}
            </a>
          </div>
        </div>

        <div
          style={{
            // backgroundColor: "yellow",
            display: "flex",
            padding: "10px",
            fontStyle: "italic",
            fontSize: "12px",
            lineHeight: "20px",
          }}
        >
          {imageUrls[imageIndex].caption}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
