import React from 'react'
import './Races.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import max_photo from './pics/max_slider.jpg';
import jump_photo from './pics/jump_slider.jpg';
import podium_mo from './pics/podium_mo_slider.jpg';
import genesis_slider from './pics/genesis_slider.jpg'

export default function Races() {
    
    const data = [
        { race: 'Roughrider Canyon | TBA', link: "/asdf" },
        { race: 'Franklin Mountains | 12/18/2021 ', link: "/franklin_mountains_2021" },
        { race: 'Lost Dog Enduro | 11/21/2021 ', link: "/lost_dog_2021"},
        { race: 'Monks Mayhem | 10/23/2021', link: "/monks_2021" },
        
      ];

    const image_paths = ['./pics/max_slider.jpg', './pics/jump_slider.jpg', './pics/podium_mo_slider.jpg']

    const images =  image_paths.map((image) =><div data-src={image} />  );
      
    
      const race_links = data.map((item) =>
            <li className="list-group-item">  
                <a
                className="App-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer">
                    {item.race}
                </a>
            </li>
     
     );
    
    return (
    
   
        
     <div className='race_list'> 
        
        <div className='container'>
            <h1 className='victory'>Races</h1>

       
        <ul className="list-group">
            {race_links}
                      
        </ul>


        <AwesomeSlider className="awesome-slider" animation='cubeAnimation'>
            <div className="image-item" data-src={podium_mo} />
            <div className="image-item" data-src={max_photo} />
            <div className="image-item" data-src={jump_photo} />
            <div className="image-item" data-src={genesis_slider} />
          
        </AwesomeSlider>
            
        </div>
    
        
        
    
    
    
    
    
    
    </div>  


    )
}
