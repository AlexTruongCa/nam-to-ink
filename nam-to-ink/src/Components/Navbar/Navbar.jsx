import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_color.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className="logo" />
        <ul>
          <li>
            <Link className="link" to="/#section-home" smooth>
              HOME
            </Link>
          </li>
          <li>
            <Link className="link" to="/#section-about" smooth>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link className="link" to="/#section-portfolio" smooth>
              MY WORK
            </Link>
          </li>
          <li>
            <Link className="link" to="/#section-contact" smooth>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
// import "./Navbar.css";
// import logo from "../../assets/logo_color.png";

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       window.scrollY > 200 ? setSticky(true) : setSticky(false);
//     });
//   }, []);

//   return (
//     <nav className={`container ${sticky ? "dark-nav" : ""}`}>
//       <img src={logo} alt="" className="logo" />
//       <ul>
//         <li>
//           <Link to="home" smooth={true} offset={0} duration={500}>
//             HOME
//           </Link>
//         </li>
//         <li>
//           <Link to="about" smooth={true} offset={-150} duration={500}>
//             ABOUT ME
//           </Link>
//         </li>
//         <li>
//           <Link to="portfolio" smooth={true} offset={-245} duration={500}>
//             MY WORK
//           </Link>
//         </li>
//         <li>
//           <Link to="contact-me" smooth={true} offset={-245} duration={500}>
//             CONTACT
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
