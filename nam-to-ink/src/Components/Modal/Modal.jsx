import React from "react";
// import ReactDom from "react-dom";
import "./Modal.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import InstagramIcon from "@mui/icons-material/Instagram";

const Modal = ({ openModal, src, caption, username, userLink }) => {
  const handleClick = () => {
    openModal(false);
  };
  return (
    <div className="modalContainer">
      <ClearIcon
        onClick={handleClick}
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
            <a
              href={userLink}
              target="_blank"
              style={{ textDecoration: "none", color: "#c4864b" }}
            >
              <InstagramIcon style={{ fontSize: "30" }} />
            </a>
            <a
              href={userLink}
              target="_blank"
              style={{ textDecoration: "none", color: "#c4864b" }}
            >
              <p className="userName">{username}</p>
            </a>
          </div>
          <div className="photoCaption">{caption}</div>
        </div>
      </div>
      <ArrowForwardIosIcon style={{ fontSize: "40" }} />
    </div>

    // <div className="modalBackground">
    // </div>
    // document.getElementById("portal")
  );
};

export default Modal;
