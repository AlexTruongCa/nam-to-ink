import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_color.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "vn", lang: "VN" },
  { code: "en", lang: "EN" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const scrollWithOffSet = (a) => {
    const yCordinate = a.getBoundingClientRect().top + scrollY;
    //getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    //scrollY property returns the pixels a document has scrolled from the upper left corner of the window.
    const yOffset = -200;
    window.scrollTo({
      top: yCordinate + yOffset,
      behavior: "smooth",
    });
  };

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <BrowserRouter>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className="logo" />
        <ul className={`${mobileMenu ? "open-menu" : "hide-menu-btn"}`}>
          <li>
            <Link className="link" to="/#section-home" smooth>
              {t("navHome")}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/#section-about"
              scroll={scrollWithOffSet}
            >
              {t("navAbout")}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/#section-portfolio"
              scroll={scrollWithOffSet}
            >
              {t("navWork")}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/#section-contact"
              scroll={scrollWithOffSet}
            >
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
