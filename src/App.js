import React, { Component }  from 'react';



import './App.css';

import ep_logo from './ep_enduro_logo.svg';
import hero_image from './pics/home_image_stoked.jpg';
import background_ep from './pics/ep_enduro_background.jpg';
import mountain_header_hero from './pics/mountain_header_ependuro.jpg';
import rocky_mountain_hero from './pics/El_Paso_Franklin_Mountains_and_Scenic_Drive_aerial.jpg'



function App() {
  return (
    <div className="App">

    
            <img id="hero-image" src={rocky_mountain_hero} alt="ep mountain"></img>
        
      
       
        
        
        
        <header className="App-header">
          <div className='container'>
        
          
          <img src={ep_logo} className="App-logo pulse" alt="logo" />
          
              <p className='introduction'>
              The EP Enduro series features a variety of Enduro style mountain bike racing in El Paso, Texas. 
              We cater our race categories to everyone from beginners to experts. Additionally, we organize trail
              maintenance events to prepare for the races.
    
              </p>
              <a
                  className="App-link"
                  href="https://www.youtube.com/watch?v=wWH_BSRiX0U"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                What Is Enduro MTB Racing?
              </a>

              <div className='seriesPanel'>
                    <p className='seriesheader'>
                    Series 1:
                    </p>
                  <ul className='AtAGlance'>
                      <li>Monks Mayhem 10/23/2021 </li> 
                      <li>Lost Dog Enduro 11/21/2021  </li>
                     
                      <li>Franklin Mountains 12/18/2021 </li>
                      
                      <li>Rough Rider Championship TBA </li>

                  </ul>
               
             

              </div> 
              
              
        
      
         
          </div>
        </header>
        <img id="home-image" src={background_ep} alt="ep mountain" />

  
        
        
           
      
    </div>
  );
}

export default App;
