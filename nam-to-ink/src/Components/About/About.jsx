import React from "react";
import "./About.css";
import about_photo from "../../assets/about_photo.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const { line1, line2 } = t("aboutText");
  return (
    <div className="about" id="section-about">
      <div className="about-left">
        <img src={about_photo} alt="" className="about-photo" />
      </div>
      <div className="about-right">
        <h2>{t("aboutTitle")}</h2>
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </div>
  );
};

export default About;
