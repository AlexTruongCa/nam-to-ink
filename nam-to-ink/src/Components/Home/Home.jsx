import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home" id="section-home">
      <div className="home-text">
        <h1>{t("homeSlogan")}</h1>
        <p>{t("homeText")}</p>
        <button className="btn">
          <Link to="contact-me" smooth={true} offset={0} duration={500}>
            {t("homeBtn")}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
