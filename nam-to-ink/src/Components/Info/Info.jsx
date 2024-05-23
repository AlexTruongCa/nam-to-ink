import React from "react";
import "./Info.css";
import location_icon from "../../assets/location_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-column">
      <h3>{t("contactSubtitle2")}</h3>
      <ul>
        <li>
          <img src={location_icon} alt="" />
          {t("contactAddress")}
        </li>
        <li>
          <img src={phone_icon} alt="" />
          {t("contactPhone")}
        </li>
      </ul>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6351066231628!2d106.68735537583838!3d10.762579759447373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f17337267eb%3A0xdd5fe48319a84ad3!2zxJAuIENhbyBCw6EgTmjhuqEsIE5ndXnhu4VuIEPGsCBUcmluaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sca!4v1716429130498!5m2!1sen!2sca"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Info;
