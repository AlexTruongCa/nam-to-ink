import React from "react";
import "./Contact.css";
import location_icon from "../../assets/location_icon.png";
import phone_icon from "../../assets/phone_icon.png";

const Contact = () => {
  return (
    <div className="contact-me">
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
      <div className="contact-column">
        <h3>To start the booking process, please fill in this form</h3>
        <form action="">
          <label>Your Name</label>
          <input
            className="your-name"
            type="text"
            name="name"
            placeholder="enter your name"
            required
          />
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="enter your e-mail address"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="enter your mobile phone number"
            required
          />
          <label>Tattoo Design Description</label>
          <input type="text" name="name" placeholder="select an option" />
          <label>Placement</label>
          <input type="text" name="name" placeholder="select an option" />
          <label>Leave me a message</label>
          <textarea
            name="message"
            rows="10"
            placeholder="give me more details of your idea"
          ></textarea>
          <input type="file" />
          <button className="btn-dark">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
