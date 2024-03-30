import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-me">
      <div className="contact-column">
        <h3>Get in touch</h3>
        <ul>
          <li>Cao Ba Nha, Nguyen Cu Trinh Ward, District 1, HCMC</li>
          <li>089-661-3869</li>
        </ul>
      </div>
      <div className="booking-column">
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
