import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import NavBar from './NavBar.js';
import './ContactUs.css';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rehh9ot', 'template_k32hyuk', form.current, 'user_Ht2OpjaH11GYVqzeUTs6d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <><React.Fragment>
      <NavBar />
    </React.Fragment>
    
    
    <form ref={form} onSubmit={sendEmail}>
        <p>Now that you have learned the true and full purpose of the current
          study and know about the actual manipulations that took place as part of this study,
          do you wish to have your data to be included in this research project?</p>

        <p>Please fill out the form below and change the message content if
          you DO NOT want your data included in this study. Press the Send button when complete.
        </p>
        <label>Participant Name </label>
        <input type="text" name="user_name" />
        <br></br>
        <label>Participant Email </label>
        <input type="email" name="user_email" />
        <br></br>
        <label>Response </label>
        <textarea name="message" value="Yes, I DO want my data included in this study " />
        <input type="submit" value="Send" />
      </form></>
  );
};

export default ContactUs;


