import React from "react";
import "./LanguageSelector.css";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "vn", lang: "VN" },
  { code: "en", lang: "EN" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lng-btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""} //to change the style of the selected language button
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
