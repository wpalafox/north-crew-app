import React from 'react';
import './Donate.css';
import donate_header from './pics/donate_header.jpg';

  //<img className="donate-image" src={donate_header} alt="donate header"></img>

export default function Donate() {
    return (
        <div>
          
            <div className='Donate'>
                 
                <div id= "blackbox" className='container'>
   
               
                    
                    <h1>
                    
                    Yo, if you can afford to donate: help us organize more enduro races! And ensure the longevity and sustainability of our trail systems.
                    </h1>
                    
                
                
                    <a
                    
                    href="https://www.paypal.com/paypalme/ependuro"  target="_blank"
                    
                   
                    >
                    <i className="fab fa-cc-paypal fa-7x"></i>
                    </a>
            </div>
        </div>
        </div>
    
    )
}
