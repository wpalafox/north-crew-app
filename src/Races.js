import React from 'react'
import './Races.css'

import 'react-awesome-slider/dist/styles.css';

import results_image from './pics/results_shocklab.jpg';

import Franklin_2022 from './results_folder/franklin_2022.js'




export default function Races() {
    
    const data = [
        { race: 'Roughrider Canyon | 2/20/2022', link: "/rider_2021" },
        { race: 'Franklin Mountains | 12/18/2021 ', link: "/franklin_2021" },
        { race: 'Lost Dog Enduro | 11/21/2021 ', link: "/lost_dog_2021"},
        { race: 'Monks Mayhem | 10/23/2021', link: "/monks_2021" }
        
      ];

      const data1 = [
        { race: 'Lost Dog Enduro | 11/20/2022', link: "/lost_dog_2022" },
        { race: 'Franklin Mtns | 10/2/2022', link: "/franklin_2022" },
        { race: 'Darkduro | 9/4/2022', link: "/lost_dog_night_2022" }
        
        

       
        
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

     const race_links1 = data1.map((item) =>
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
   
    
        //<img id="results-image" src={results_image} alt="ep mountain bike race results"></img>
            <div className='race_list'> 
         
                    
        
                    <div id="race-list" className='container'>
                    
                    <h1 className='results_season'>2022 Season</h1>
                        <ul id="race-list-test" className="list-group test">
                            {race_links1}
                                    
                        </ul>


                    <h1 className='results_season'>2021 Season</h1>
                    <ul id="race-list-test" className="list-group test">
                        {race_links}
                                
                    </ul>


    
            
            </div>

       
    
        
        
    
    
    
    
    
    
    </div>  
  

    )
}
