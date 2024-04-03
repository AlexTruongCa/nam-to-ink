import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_color.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>MY WORK</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
