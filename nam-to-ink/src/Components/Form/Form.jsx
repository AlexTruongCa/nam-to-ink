import React from "react";
import { useState } from "react";

const Form = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfae2fef-9f89-4e47-8422-fb2388d533c0");

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
  };

  return (
    <div className="contact-column">
      <h3>To start the booking process, please fill in this form</h3>
      <form onSubmit={onSubmit}>
        <label>Your Name *</label>
        <input
          className="your-name"
          type="text"
          name="name"
          placeholder="enter your name"
          required
        />
        <label>Email Address *</label>
        <input
          type="email"
          name="email"
          placeholder="enter your e-mail address"
          required
        />
        <label>Phone Number *</label>
        <input
          type="tel"
          name="phone"
          placeholder="enter your mobile phone number"
          required
        />
        <label>Tattoo Design Description</label>
        <div className="option-field">
          <select name="Design Description">
            <option value="0">select an option</option>
            <option value="Black & White | Smaller than 5cm">
              Black & White | Smaller than 5cm
            </option>
            <option value="Black & White | From 5cm to 10cm">
              Black & White | From 5cm to 10cm
            </option>
            <option value="Black & White | Greater than 10cm">
              Black & White | Greater than 10cm
            </option>
            <option value="Color - Small">Color - Small</option>
            <option value="Color | Medium - 5cm to 10cm">
              Color | Medium - 5cm to 10cm
            </option>
            <option value="Color | Greater than 10cm">
              Color | Greater than 10cm
            </option>
          </select>
        </div>
        <label>Leave me a message</label>
        <textarea
          name="message"
          rows="10"
          placeholder="give us more details of your idea i.e. where is the tattoo placement? Do you have your artwork ready or you need us to create a new one? etc."
        ></textarea>
        <button className="btn-dark" type="submit" style={{ marginBottom: 15 }}>
          SUBMIT
        </button>
      </form>
      <label style={{ fontStyle: "italic" }}>{result}</label>
    </div>
  );
};

export default Form;
