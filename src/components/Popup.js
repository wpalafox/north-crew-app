import React from 'react'
import './Popup.css'

function Popup(props) {
  // <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
  return (props.trigger) ? (
    <div className="popup">
        <div className='popup-inner'>
           
            <h2>Your Message has been SENT!</h2>
                    {props.children}
         
        </div>
    </div>
  ) : "";
}

export default Popup