import React from 'react'
import './Races.css'

import 'react-awesome-slider/dist/styles.css';

import results_image from './pics/mountain_image_edited.jpg';






export default function Races() {
    
    const data = [
        { race: 'Roughrider Canyon | TBD', link: "/rider_2021" },
        { race: 'Franklin Mountains | 12/18/2021 ', link: "/franklin_2021" },
        { race: 'Lost Dog Enduro | 11/21/2021 ', link: "/lost_dog_2021"},
        { race: 'Monks Mayhem | 10/23/2021', link: "/monks_2021" },
        
      ];

    const image_paths = ['./pics/max_slider.jpg', './pics/jump_slider.jpg', './pics/podium_mo_slider.jpg', './pics/podium_steezy.jpg']

    const images =  image_paths.map((image) =><div data-src={image} />  );
      
    
      const race_links = data.map((item) =>
            <li className="list-group-item">  
                <a
                className="App-link"
                href={item.link}
              
                rel="noopener noreferrer">
                    {item.race}
                </a>
            </li>
     
     );
    
    return (
    
   
        
     <div className='race_list'> 

        <img id="results-image" src={results_image} alt="ep mountain results"></img>
        
        <div id="race-list" className='container'>
          

        <h1 className='results_season'>2021 Season</h1>
        <ul id="race-list-test" className="list-group test">
            {race_links}
                      
        </ul>


    
            
        </div>

       
    
        
        
    
    
    
    
    
    
    </div>  


    )
}
