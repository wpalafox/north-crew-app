import React from 'react'
import './Footer.css';
import podium_logo from './pics/Podium_Finish_Logo.png';
import airrosti_logo from './pics/airrosti_whiteback.png';
import crazy_logo from './pics/crazycat.svg';
import dog_logo from './pics/dogspeed_white.png';
import drip_logo from './pics/Drip_Drive_whiteback.png';
import hunt_logo from './pics/Hunt_logo.png';
import kogel_logo from './pics/Kogel_White_Logo.svg';
import masEP_logo from './pics/MasEP.svg';
import pollo_logo from './pics/POLLO_LOGO_ORIGINAL.svg';
import bmba_logo from './pics/sponsor-bmba.png';
import handske_logo from './pics/sponsor-handske.png';
import merol_logo from  './pics/sponsor-merol.svg';
import shock_logo from './pics/The_shock_lab_black_logo.svg';
import merol_racing from './pics/merolracing.svg';




export default function Footer() {
    return (
    <div className="footer-enduro">
        <div className="container">
           

            

            <div className="row">
                <div className="col-4">
                        <a href="https://www.huntcompanies.com/"  target="_blank"> <img src={hunt_logo} className="logo-image" alt="Logo" /></a>
                </div>
                <div className="col-4">
                    <a href="https://www.theshocklab.com/"  target="_blank"><img src={shock_logo} className="logo-image" alt="Logo" /></a>
                </div>
                <div className="col-4">
                    <a href="http://www.bmbaelpaso.org/"  target="_blank"><img src={bmba_logo} className="logo-image" alt="Logo" /></a>
                </div>
            </div>
           
           
           
           
           
           
           
            <div className="row">
                <div className="col-4">
                    <a href="https://www.handskegloves.com/"  target="_blank"><img src={handske_logo} className="logo-image" alt="Logo" /></a>
                </div>
                <div className="col-4">
                    <a href="https://www.merolracing.com/"  target="_blank"><img src={merol_logo} className="logo-image" alt="Logo" /></a>
                </div>
                <div className="col-4">
                    <a href="https://www.dogspeedco.com/"  target="_blank"><img src={dog_logo} className="logo-image" alt="Logo" /></a>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <a href="https://www.airrosti.com/location/Texas/SUMM/"  target="_blank"><img src={airrosti_logo} className="logo-image" alt="Logo" /></a>
                </div>
                <div className="col-4">
                    <a href="https://pollofelizjrz.com/"  target="_blank"><img src={pollo_logo} className="logo-image" alt="Logo" /></a>
                </div>
                <div className="col-4">
                    <a href="https://podiumfinishsportcafe.com/"  target="_blank"><img src={podium_logo} className="logo-image" alt="Logo" /></a>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                        <a href="https://crazycatcyclery.com/"  target="_blank"> <img src={crazy_logo} className="logo-image" alt="Logo" /></a>
                </div>
                <div className="col-4">
                    <a href="https://www.dripdriveiv.com/"  target="_blank">  <img src={drip_logo} className="logo-image" alt="Logo" /></a>
                </div>
                <div className="col-4">
                    <a href="https://www.facebook.com/maselpaso"  target="_blank">   <img src={masEP_logo} className="logo-image" alt="Logo" /></a>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <a href="https://www.kogel.cc/"  target="_blank"> <img src={kogel_logo} className="logo-image" alt="Logo" /></a>
                </div>
                
            </div>

            <div className="row">
                <div className="col-3">
                        <img src={merol_racing} className="merol-racing" alt="logo" /> |
                </div>
                
                
                <div className="col-3">
                    <p id='copyright'>Copyright © 2022 MEROL RACING LLC. All rights reserved.</p>
                </div>

                
                
            </div>

            
        
        
        
        
         </div>
    </div>
    )
}
