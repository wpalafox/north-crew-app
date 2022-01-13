import React from 'react';
import './Donate.css';
import donate_header from './pics/donate_header.jpg';

export default function Donate() {
    return (
        <div>
            <img className="donate-image" src={donate_header} alt="donate header"></img>
            <div className='Donate'>
                 
                <div className='container'>
   
               
                    
                    <p>
                    
                    Help us Organize more Races and Ensure the Longevity and Sustainability of our Trail Systems.
                    </p>
                    
                
                
                    <a
                    
                    href="https://www.paypal.com/paypalme/ependuro"
                    
                   
                    >
                    <i className="fab fa-cc-paypal fa-7x"></i>
                    </a>
            </div>
        </div>
        </div>
    
    )
}
