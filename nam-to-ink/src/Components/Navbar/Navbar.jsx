import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_color.png";
import { BrowserRouter, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import ScrollToAnchor from "./ScrollToAnchor";

const languages = [
  { code: "vn", lang: "VN" },
  { code: "en", lang: "EN" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const menuRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
    const menuClickAway = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMobileMenu(false);
        // console.log(modalRef.current);
      }
    };
    document.addEventListener("mousedown", menuClickAway);
    return () => {
      document.removeEventListener("mousedown", menuClickAway);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <BrowserRouter>
      <ScrollToAnchor offset={-200} />
      {/* ScrollToAnchor listens for location changes and determines if there is a hash (or element ID) that this app should scroll to */}
      <nav className={`container ${sticky ? "dark-nav" : ""}`} ref={menuRef}>
        <img src={logo} alt="" className="logo" />
        <ul className={`${mobileMenu ? "open-menu" : "hide-menu-btn"}`}>
          <li>
            <Link className="link" to="/#section-home" smooth="true">
              {t("navHome")}
            </Link>
          </li>
          <li>
            <Link className="link" to="/#section-about" smooth="true">
              {t("navAbout")}
            </Link>
          </li>
          <li>
            <Link className="link" to="/#section-portfolio" smooth="true">
              {t("navWork")}
            </Link>
          </li>
          <li>
            <Link className="link" to="/#section-contact" smooth="true">
              {t("navContact")}
            </Link>
          </li>
        </ul>
        <div className="lng-btn-container">
          {languages.map((lng) => {
            return (
              <button
                className={lng.code === i18n.language ? "selected" : ""}
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
              >
                {lng.lang}
              </button>
            );
          })}
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          <MenuIcon style={{ fontSize: "40px" }} />
        </button>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
