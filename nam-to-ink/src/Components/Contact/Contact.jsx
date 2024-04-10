import React from "react";
import "./Contact.css";

const Contact = ({ children }) => {
  return (
    <div className="contact-me" id="section-contact">
      {children}
    </div>
  );
};

export default Contact;
