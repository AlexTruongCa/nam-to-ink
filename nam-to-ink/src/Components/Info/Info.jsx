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
    </div>
  );
};

export default Info;
