import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Form = () => {
  // const { handleSubmit, setValue } = useForm();

  // const onHCaptchaChange = (token) => {
  //   setValue("h-captcha-response", token);
  // };

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
        {/* <input type="file" />
        <br /> */}
        {/* <HCaptcha
          sitekey="10000000-ffff-ffff-ffff-000000000001" //this site key is for testing only. Use this key on prod 50b2fe65-b00b-4b9e-ad62-3ba471098be2
          onVerify={onHCaptchaChange}
        /> */}
        <button className="btn-dark" type="submit" style={{ marginBottom: 15 }}>
          SUBMIT
        </button>
      </form>
      <label style={{ fontStyle: "italic" }}>{result}</label>
    </div>
  );
};

export default Form;
