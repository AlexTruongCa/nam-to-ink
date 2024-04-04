import React from "react";

const Form = () => {
  return (
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
  );
};

export default Form;
