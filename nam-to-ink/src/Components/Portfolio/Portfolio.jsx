import React, { useEffect, useState, useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Portfolio.css";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const Portfolio = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function Modal({ handleClose }) {
    useLockBodyScroll();

    let modalRef = useRef(null);

    useEffect(() => {
      let modalclickAway = (e) => {
        if (!modalRef.current.contains(e.target)) {
          setOpenModal(false);
          // console.log(modalRef.current);
        }
      };
      document.addEventListener("mousedown", modalclickAway);

      return () => {
        document.removeEventListener("mousedown", modalclickAway);
      };
    }, []);

    return (
      <div className="modalWrap">
        <div className="clearIcon" onClick={handleClose}>
          <ClearIcon />
        </div>
        <div className="sliderContainer">
          <div className="wrap" ref={modalRef}>
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
              <div className="slider-dot-btn-wrap">
                {galleryImages.map((slide, index) => {
                  return (
                    <button
                      className="slider-dot-btn"
                      key={index}
                      onClick={() => setSlideNumber(index)}
                    >
                      {index === slideNumber ? (
                        <RadioButtonCheckedIcon
                          style={{ fontSize: "medium" }}
                        />
                      ) : (
                        <RadioButtonUncheckedIcon
                          style={{ fontSize: "medium" }}
                        />
                      )}
                    </button>
                  );
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
    );
  }

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const prevSlide = () => {
    if (slideNumber === 0) return setSlideNumber(galleryImages.length - 1);
    return setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    if (slideNumber === galleryImages.length - 1) return setSlideNumber(0);
    return setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      {openModal && <Modal handleClose={() => setOpenModal(false)} />}
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
