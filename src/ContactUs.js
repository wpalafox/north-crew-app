import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qagm5a2', 'template_e3px2j7', form.current, 'user_CWdJOLLP4bbWJ6XGnW9ZG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <>
 
    
    <form ref={form} onSubmit={sendEmail}>
        
        
        <h2>Hit up our socials or send an email!</h2>
        
        <div className='form-group row'>
            <div class="col-sm-2">
               <a target="_blank" href="https://www.facebook.com/epduro/">
                <i class="fab fa-facebook"  ></i>
                </a> 
            </div>

            <div class="col-sm-2">
            <a target="_blank" href="https://www.instagram.com/ependuro/">  
                <i class="fab fa-instagram" target="_blank" href="https://www.instagram.com/ependuro/"></i>
            </a>
            </div>


        </div>
        

      



        <div className="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label">Contact Email</label>
            <div class="col-sm-3">
                <input type="email" name="user_email" placeholder='john@shredsalot.com'  />
            </div>

        </div>

        <div className="form-group row" id="message-row">
            <label for="staticMessage" class="col-sm-3 col-form-label">Message</label>
            <div class="col-sm-3">
                <textarea name="message" placeholder='How can I help out with the upcoming races?'   />
            </div>

        </div>

        <div className="form-group row">
        <div class="col-sm-2">
            <input type="submit" value="Send It!" />
        </div>
        </div>
    </form></>
  );
};

export default ContactUs;


