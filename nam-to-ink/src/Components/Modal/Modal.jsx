import React from "react";
// import ReactDom from "react-dom";
import "./Modal.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import Photo1 from "../../assets/photo_1.png";
import Photo2 from "../../assets/photo_4.png";

const Modal = ({ openModal, src }) => {
  return (
    <div className="modalContainer">
      <ClearIcon
        onClick={() => {
          openModal(false);
        }}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          cursor: "pointer",
          fontSize: "40",
        }}
      />
      <ArrowBackIosNewIcon style={{ fontSize: "40" }} />
      <div className="modalWrapper">
        <div className="modalLeft">
          <img src={src} alt="" />
        </div>

        <div className="modalRight">
          <div className="userInfo">
            <img className="profilePhoto" src={Photo2} alt="" />
            <p className="userName">13ink.tattoo</p>
          </div>
          <div className="photoCaption">
            This is the description of the photo which is also the description
            on user's Instagram account.
          </div>
        </div>
      </div>
      <ArrowForwardIosIcon style={{ fontSize: "40" }} />
    </div>
    // document.getElementById("portal")
  );
};

export default Modal;
