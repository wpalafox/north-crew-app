import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import header_contactus from './pics/new_contact_us.jpg';
import Popup from './components/Popup';


export const ContactUs = () => {
  
  
  //Pop notification
  const [button0Popup, setButton0Popup] = useState(false);
  
  
  function successFulSend(){
  
    setButton0Popup(true);


}


function closePopUp(){
    setButton0Popup(false);
}
  
  
  
  
  
  
  
  //Contact Form Business Logic
  
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qagm5a2', 'template_e3px2j7', form.current, 'user_CWdJOLLP4bbWJ6XGnW9ZG')
      .then((result) => {
          console.log(result.text);
          successFulSend();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  
    <div className='center'>
    
    <img className="contact-us-image" id="contact-us-pic" src={header_contactus} alt="contact us header"></img>


    <Popup trigger={button0Popup} setTrigger={setButton0Popup}>
              
            
            <button onClick={closePopUp}>Close</button> 
                    
            
    </Popup>

    
    <form ref={form} onSubmit={sendEmail}>
        <div className='container'>
        
        
        
        
        <div className='form-group row'>
            <div class="col-2">
               <a target="_blank" href="https://www.facebook.com/epduro/">
                <i class="fab fa-facebook"  ></i>
                </a> 
            </div>

            <div class="col-2">
            <a target="_blank" href="https://www.instagram.com/ependuro/">  
                <i class="fab fa-instagram" target="_blank" href="https://www.instagram.com/ependuro/"></i>
            </a>
            </div>


        </div>
        

      



        <div className="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"><b>Email</b></label>
            <div class="col-sm-3">
                <input type="email" name="user_email" placeholder='john@shredsalot.com'  />
            </div>

        </div>

        <div className="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"><b>Name</b></label>
            <div class="col-sm-3">
                <input type="text" name="user_name" placeholder='John Doe'  />
            </div>

        </div>

        <div className="form-group row" id="message-row">
            <label for="staticMessage" class="col-sm-3 col-form-label"><b>Message</b></label>
            <div class="col-sm-3">
                <textarea name="message" placeholder='I have questions about my recent registration/How can my company sponsor the series?/How could I volunteer for the next event?'   />
            </div>

        </div>

        <div className="form-group row">
        <div class="col-sm-3" id="send-button">
            <input type="submit" value="Send It!" />
        </div>
        </div>
        </div>
    </form>
    </div>
  );
};

export default ContactUs;


