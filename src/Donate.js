import React from 'react';
import './Donate.css';
import donate_header from './pics/donate_header.jpg';

export default function Donate() {
    return (
        <div>
            <img className="donate-image" src={donate_header} alt="donate header"></img>
            <div className='Donate'>
                 
                <div id= "blackbox" className='container'>
   
               
                    
                    <h2>
                    
                    Help us organize more enduro races! And ensure the longevity and sustainability of our trail systems.
                    </h2>
                    
                
                
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
