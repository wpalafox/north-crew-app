import React from 'react'
import './Races.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import max_photo from './pics/max_slider.jpg';
import jump_photo from './pics/jump_slider.jpg';
import podium_mo from './pics/podium_mo_slider.jpg';
import genesis_slider from './pics/genesis_slider.jpg';
import steezy_slide from './pics/podium_steezy.jpg';
import luis_podium from './pics/podium_luis.jpg';
import female_podium from './pics/a_podium.jpg';
import mosco_ride from './pics/mosco_enduro.jpg';
import arnold_podium from './pics/arnold_podium.jpg';
import pablo_hustle from './pics/pablo_hustling.jpg';





export default function Races() {
    
    const data = [
        { race: 'Roughrider Canyon | TBA', link: "/asdf" },
        { race: 'Franklin Mountains | 12/18/2021 ', link: "/franklin_mountains_2021" },
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
        
        <div className='container'>
            <h1 className='victory'>Races</h1>

       
        <ul className="list-group">
            {race_links}
                      
        </ul>


    
            
        </div>

        <AwesomeSlider className="awesome-slider" animation='cubeAnimation'>
            <div className="image-item" data-src={podium_mo} />
            <div className="image-item" data-src={max_photo} />
            <div className="image-item" data-src={female_podium} />
            <div className="image-item" data-src={steezy_slide} />
          
           
            <div className="image-item" data-src={arnold_podium} />
            <div className="image-item" data-src={genesis_slider} />
            <div className="image-item" data-src={mosco_ride} />
          
            <div className="image-item" data-src={luis_podium} />
          
        </AwesomeSlider>
    
        
        
    
    
    
    
    
    
    </div>  


    )
}
