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
   <>
    
    
    <form ref={form} onSubmit={sendEmail}>
        <p>Hit up our socials or send an email!</p>
        
        <div className='form-group row'>
            <div class="col-sm-1">
               <a target="_blank" href="https://www.facebook.com/epduro/">
                <i class="fab fa-facebook"  ></i>
                </a> 
            </div>

            <div class="col-sm-1">
            <a target="_blank" href="https://www.instagram.com/ependuro/">  
                <i class="fab fa-instagram" target="_blank" href="https://www.instagram.com/ependuro/"></i>
            </a>
            </div>


        </div>
        

      



        <div className="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Your Email</label>
            <div class="col-sm-10">
                <input type="email" name="user_email"  />
            </div>

        </div>

        <div className="form-group row">
            <label for="staticMessage" class="col-sm-2 col-form-label">Message</label>
            <div class="col-sm-10">
                <textarea name="message"  />
            </div>

        </div>

        <div className="form-group row">
        <div class="col-sm-15">
            <input type="submit" value="Send It!" />
        </div>
        </div>
    </form></>
  );
};

export default ContactUs;


