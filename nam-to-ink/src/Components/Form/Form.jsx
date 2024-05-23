import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [result, setResult] = useState("");
  const { t } = useTranslation();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (responseData.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", responseData);
      setResult("Unable to submit form. Please contact us at 089-661-3869");
    }
    // console.log(import.meta.env.VITE_WEB3FORMS_KEY);
  };

  return (
    <div className="contact-column">
      <h3>{t("contactSubtitle1")}</h3>
      <form onSubmit={onSubmit}>
        <label>{t("formName")}</label>
        <input
          className="your-name"
          type="text"
          name="name"
          placeholder={t("formNamePH")}
          required
        />
        <label>{t("formEmail")}</label>
        <input
          type="email"
          name="email"
          placeholder={t("formEmailPH")}
          required
        />
        <label>{t("formPhone")}</label>
        <input
          type="tel"
          name="phone"
          placeholder={t("formPhonePH")}
          required
        />
        <label>{t("formDesignDesc")}</label>
        <div className="option-field">
          <select name="Design Description">
            <option value="-">{t("formDesignOption1")}</option>
            <option value={t("formDesignOption2")}>
              {t("formDesignOption2")}
            </option>
            <option value={t("formDesignOption3")}>
              {t("formDesignOption3")}
            </option>
            <option value={t("formDesignOption4")}>
              {t("formDesignOption4")}
            </option>
            <option value={t("formDesignOption5")}>
              {t("formDesignOption5")}
            </option>
            <option value={t("formDesignOption6")}>
              {t("formDesignOption6")}
            </option>
            <option value={t("formDesignOption7")}>
              {t("formDesignOption7")}
            </option>
          </select>
        </div>
        <label>{t("formMessage")}</label>
        <textarea
          name="message"
          rows="10"
          placeholder={t("formMessagePH")}
        ></textarea>
        <button className="btn-dark" type="submit" style={{ marginBottom: 15 }}>
          {t("formBtn")}
        </button>
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
      </form>
      <label style={{ fontStyle: "italic" }}>{result}</label>
    </div>
  );
};

export default Form;
