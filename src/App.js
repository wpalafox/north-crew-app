import React, { Component }  from 'react';


import ReactPlayer from 'react-player'

import './App.css';

import ep_logo from './ep_enduro_logo.svg';
import hero_image from './pics/home_image_stoked.jpg';
import background_ep from './pics/ep_enduro_background.jpg';
import mountain_header_hero from './pics/mountain_header_ependuro.jpg';
import rocky_mountain_hero from './pics/El_Paso_Franklin_Mountains_and_Scenic_Drive_aerial333.png'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Donate from './Donate.js';



//firebase imports
import {useState, useEffect} from "react";
import {storage} from "./firebase";
import {ref, listAll, getDownloadURL } from 'firebase/storage';



function App() {
  const [imageList, setImageList] = useState([]);
  
  const imageListRef = ref(storage, "images/")
  

  useEffect(() => {
      listAll(imageListRef).then((response) => {
        console.log(response);
        response.items.forEach((item) =>{
          getDownloadURL(item).then((url) => {
            
            setImageList((prev) => [...prev, url]);

          });
        });
      });
    }, []);
    
    
    return (
      <div className="background_black"> 
      <div className="App">

            <a target="_blank" title="Dicklyon, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:El_Paso_Franklin_Mountains_and_Scenic_Drive_aerial.jpg"><img id="hero-image" src={rocky_mountain_hero} alt="ep mountain" ></img></a>
          
          
      
          
                
          
           
             
                
        
          
          
          
          <header className="App-header">
              <div className='black-box'>
                  <ReactPlayer id="player" className="video-player" url='https://www.youtube.com/watch?v=ZDM3sETGeMU' />
              </div>
            <div id='home-page' className='container'>
              
            
              
          
          
          
            <img src={ep_logo} className="App-logo pulse" alt="logo" />
            
                <p className='introduction'>
                The EP Enduro series features a variety of Enduro style mountain bike racing in El Paso, Texas. 
                We design our race categories for everyone (e.g. gender, age, skill level, etc.). Additionally, we organize trail
                maintenance events to prepare for the races.  <a
                    className="App-link"
                    href="https://www.youtube.com/watch?v=wWH_BSRiX0U"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  What Is Enduro MTB Racing?
                </a>
      
                </p>
              

                <div className='seriesPanel'>
                <p className='seriesheader'>
                      2022 Season:
                      </p>
                    <ul className='AtAGlance'>
                        <li className="rockbiter-race">LOST DOG AT NIGHT | 9/4/2022  </li>
                        <li className='results-line'><a href="/lost_dog_night_2022"  class="btn btn-info" role="button"><b>RESULTS</b></a> </li>   
                      
                        <li className="rockbiter-race">FRANKLIN MOUNTAINS | 10/2/2022   </li>
                        <li className='results-line'><a href="/franklin_2022"  class="btn btn-info" role="button"><b>RESULTS</b></a>    </li>
                        
                      
                        <li className="rockbiter-race">LOST DOG | 11/20/2022  </li>
                        <li className='results-line'><a href="/lost_dog_2022" class="btn btn-info" role="button"><b>RESULTS</b></a>    </li>
                        

                        <li className="rockbiter-race">MONKS | 12/18/2022  </li>
                        <li className='results-line'><a href="/monks_2022" class="btn btn-info" role="button"><b>RESULTS</b></a>    </li>

                        
                    
                        
                    </ul>
                    
                    
                    
                    
                    <p className='seriesheader'>
                    2021 Season:
                    </p>
                    <ul className='AtAGlance'>
                        <li className="rockbiter-race">Monks Mayhem | 10/23/2021    </li> 
                        <li className='results-line'><a href="/monks_2021"  class="btn btn-info" role="button"><b>RESULTS</b></a>   </li> 
                        <li className="rockbiter-race">Lost Dog Enduro | 11/21/2021    </li>
                        <li className='results-line'><a href="/lost_dog_2021"   class="btn btn-info" role="button"><b>RESULTS</b></a>   </li> 
                      
                        <li className="rockbiter-race">Franklin Mountains | 12/18/2021   </li>
                        <li className='results-line'><a href="/franklin_2021"   class="btn btn-info" role="button"><b>RESULTS</b></a>   </li>
                        
                        <li className="rockbiter-race" id="register">Roughrider Canyon | 2/20/2022  <a
                            className="App-link"
                            href="https://www.youtube.com/watch?v=MTFvMXJq280"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          Check out the Canyon
                        </a> </li>
                        
                        <li className='results-line'><a href="/rider_2021"  target="_blank" class="btn btn-info" role="button"><b>RESULTS</b></a></li>
                        
                    </ul>
                
              

                </div> 
                
                
          
        
          
            </div>
          </header>

          <div className='awesome-slider-div'>
          <h1 className="rockbiter-race news">Some Pics  </h1> 
            <div className='container'> 
              <div className='black-box'>
              
              {imageList.map((url) => {
                    return <img className="image-item" src={url} />
                  })} 

              </div>
            </div>
     
          </div>
          <h1 className="rockbiter-race news">Donate  </h1> 
          <Donate />







      
          
        

    
          
          
            
        
      </div>
      </div>
    );
  }

  export default App;

  /* 
  The pulse logo
  <img src={ep_logo} className="App-logo pulse" alt="logo" />
  
       <AwesomeSlider className="awesome-slider" animation='cubeAnimation'>

         
              
              
            
           
              <div className="image-item" data-src={rr_2} /> 
              <div className="image-item" data-src={rr_3} />
              <div className="image-item" data-src={podium_mo} />
              <div className="image-item" data-src={max_photo} />
              <div className="image-item" data-src={female_podium} />
              <div className="image-item" data-src={steezy_slide} />
            
            
              <div className="image-item" data-src={arnold_podium} />
              <div className="image-item" data-src={genesis_slider} />
              <div className="image-item" data-src={mosco_ride} />
            
              <div className="image-item" data-src={luis_podium} />
            
          </AwesomeSlider>
  
  
  */