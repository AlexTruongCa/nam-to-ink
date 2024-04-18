// import React, { useState } from "react";
// import "./Modal.css";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ClearIcon from "@mui/icons-material/Clear";
// import InstagramIcon from "@mui/icons-material/Instagram";

// const Modal = ({ openModal, src, caption, username, userLink, photoArray }) => {
//   const handleClick = () => {
//     openModal(false);
//   };
//   const IMAGES = photoArray;
//   console.log(IMAGES);

//   const [imageIndex, setImageIndex] = useState(0);

//   return (
//     <div className="modalContainer">
//       <ClearIcon
//         onClick={handleClick}
//         style={{
//           position: "fixed",
//           top: "0",
//           right: "0",
//           cursor: "pointer",
//           fontSize: "40",
//           color: "white",
//         }}
//       />

//       <div className="modalWrapper">
//         <div>
//           <img src="" />
//         </div>
//         <div className="image-slider" style={{ position: "relative" }}>
//           <img src={src} alt="" />
//           <button className="img-slider-btn" style={{ left: 0 }}>
//             <ArrowBackIosNewIcon style={{ fontSize: "40", color: "white" }} />
//           </button>
//           <button className="img-slider-btn" style={{ right: 0 }}>
//             <ArrowForwardIosIcon style={{ fontSize: "40", color: "white" }} />
//           </button>
//         </div>

//         <div className="modalRight">
//           <div className="userInfo">
//             <a
//               href={userLink}
//               target="_blank"
//               style={{ textDecoration: "none", color: "#c4864b" }}
//             >
//               <InstagramIcon style={{ fontSize: "30" }} />
//             </a>
//             <a
//               href={userLink}
//               target="_blank"
//               style={{ textDecoration: "none", color: "#c4864b" }}
//             >
//               <p className="userName">{username}</p>
//             </a>
//           </div>
//           <div className="photoCaption">{caption}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
