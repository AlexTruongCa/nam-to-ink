import React from "react";
import location_icon from "../../assets/location_icon.png";
import phone_icon from "../../assets/phone_icon.png";

const Info = () => {
  return (
    <div className="contact-column">
      <h3>Get in touch</h3>
      <ul>
        <li>
          <img src={location_icon} alt="" />
          Cao Ba Nha, Nguyen Cu Trinh Ward, District 1, HCMC
        </li>
        <li>
          <img src={phone_icon} alt="" /> 089-661-3869
        </li>
      </ul>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1648.0050417627795!2d106.69040655088357!3d10.762307846996272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1712797126329!5m2!1sen!2sca"
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
