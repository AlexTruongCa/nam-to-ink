import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Portfolio.css";

const Portfolio = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    if (slideNumber === 0) return setSlideNumber(galleryImages.length - 1);
    return setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    if (slideNumber === galleryImages.length - 1) return setSlideNumber(0);
    return setSlideNumber(slideNumber + 1);
  };

  // if (!galleryImages || galleryImages.length === 0) {
  //   return <div>Loading image...</div>;
  // }

  return (
    <>
      {openModal && (
        <div className="modalWrap">
          <div className="clearIcon" onClick={handleCloseModal}>
            <ClearIcon />
          </div>
          <div className="sliderContainer">
            <div
              style={{
                display: "flex",
                boxShadow: "0px 0px 25px -8px rgba(0,0,0,0.75)",
              }}
            >
              <div className="sliderWrap">
                <button
                  onClick={prevSlide}
                  className="slider-btn"
                  style={{ left: "0" }}
                >
                  <ArrowBackIosNewIcon />
                </button>
                <button
                  onClick={nextSlide}
                  className="slider-btn"
                  style={{ right: "0" }}
                >
                  <ArrowForwardIosIcon />
                </button>
                <img
                  src={galleryImages[slideNumber].media_url}
                  alt=""
                  className="slider-img"
                />
                <div>
                  {galleryImages.map((slide, index) => {
                    return <button>{index}</button>;
                  })}
                </div>
              </div>
              <div className="InfoWrap">
                <div className="userInfo">
                  <div>
                    <a
                      href={galleryImages[slideNumber].permalink}
                      target="_blank"
                      style={{ textDecoration: "none", color: "#c4864b" }}
                    >
                      <InstagramIcon style={{ display: "block" }} />
                    </a>
                  </div>
                  <div style={{ paddingLeft: "5px" }}>
                    <a
                      href={galleryImages[slideNumber].permalink}
                      target="_blank"
                      style={{ textDecoration: "none", color: "#c4864b" }}
                    >
                      {galleryImages[slideNumber].username}
                    </a>
                  </div>
                </div>
                <div className="caption">
                  {galleryImages[slideNumber].caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="portfolio" id="section-portfolio">
        <div className="gallery">
          {galleryImages &&
            galleryImages.map((slide, index) => {
              let className;
              if (index === 3) {
                className = "photo-big-1";
              } else if (index === 4) {
                className = "photo-big-2";
              } else className = "photo";
              return (
                <div
                  className={`${className}`}
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img src={slide.media_url} alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
