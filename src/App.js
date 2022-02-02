import React, { Component }  from 'react';



import './App.css';

import ep_logo from './ep_enduro_logo.svg';
import hero_image from './pics/home_image_stoked.jpg';
import background_ep from './pics/ep_enduro_background.jpg';
import mountain_header_hero from './pics/mountain_header_ependuro.jpg';
import rocky_mountain_hero from './pics/El_Paso_Franklin_Mountains_and_Scenic_Drive_aerial.jpg'
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



function App() {
  
  const data = [
    { news: 'Check this run', link: "https://www.facebook.com/epduro/videos/4952165258181682/", caption: 'Check this run on part of one of the stages for ROUGHRIDER BASH, EP ENDURO 4 🤘🏻🤘🏻 Getting closer!! Go to bike reg and grab your spot 🤙🏻🤙🏻 Video Courtesy of Mad Max little shredder 👊🏻' },
    { news: 'Get ready to take your riding to the next level!', link: "https://www.instagram.com/p/CZbBCDIloa_/", caption: 'Register for stop 4 🛑 roughrider bash Feb 18-19-20, full weekend of shredding 🤘🏻🤘🏻 $10 camping and $5 parking to benefit Mountain Action Sports El Paso 🤙🏻🤙🏻' },
    { news: 'Congratulations to all the participants and the winners', link: "https://www.facebook.com/epduro/posts/677340323636093", caption: 'Winners are 72. Ricky Rod - merol Racing Hat 11. Julio Terrazas - free basic tune up at Podium 16.Norma Rivera. Evil Insurgent LB bike 🤘🏻🤘🏻' },
    { news: 'Roughrider vibes!  ', link: "https://www.instagram.com/p/CZVF911vXRn/", caption: 'Come join us tomorrow! All trails have been worked on! Jumps running smooth 🤘🏻🤘🏻 see you Sunday 🤙🏻🤙🏻 ' },
    { news: 'RAFFLE HAS SOLD OUT ', link: "https://www.facebook.com/epduro/posts/676267967076662", caption: 'EP ENDURO FAM! You rock! We have sold out the Evil Bike raffle 🤘🏻🤘🏻 we will do the Facebook live Sunday around noon, make sure you tune in. If not we will post the results shortly after 🎟🎟 thanks for your support 🤙🏻🤙🏻Bike is serviced and ready to go!! ' },
    { news: 'Shuttle all day this coming weekend ', link: "https://www.instagram.com/p/CZKf0iPP87I", caption: 'Shuttle all day this coming weekend at ROUGHRIDER CANYON. Come dig with us! Get your spot for stop 🛑 4 of EP ENDURO series. Evil mountainbike raffle almost full! Get your number 🤘🏻🤘🏻' },
    { news: '⚠️⚠️We are back⚠️⚠️ And ready for the final stop of the EP Enduro series at Rough Rider Canyon BASH 🤘🏻🤘🏻', link: "https://www.instagram.com/p/CZBQwaQIciq/" , caption: 'Come get your riding skills to the next level Friday February 18 & Saturday 19 - pre-ride, re ride and free ride. Practice and get to know the trails and jumplines we have out there. We will have food and shuttle. Sunday 20 we race! Go register to https://www.bikereg.com/rrbash $10 camping, $5 parking in benefit to Mountain Action Sports El Paso'},
    { news: 'You can go check the raffle bike at The Shock Lab spots are still available ', link: "https://www.instagram.com/p/CYq-xGlDq6m/", caption: 'You can go check the raffle bike at The Shock Lab spots are still available 🎟 help us get some funds for Mountain Action Sports El Paso. Check pinned post on FB for numbers, share it with your friends 🤘🏻🤘🏻'},

    
  ];



const news_links = data.map((item) =>
        
        
        <li className="list-group-item">  
            
            <a
            className="App-link"
            href={item.link}
            target="_blank"
          
            rel="noopener noreferrer">
                {item.news}
            </a>
            <p>{item.caption}</p>

        </li>
 
 );
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="background_black"> 
    <div className="App">


    
            <a target="_blank" title="Dicklyon, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:El_Paso_Franklin_Mountains_and_Scenic_Drive_aerial.jpg"><img id="hero-image" src={rocky_mountain_hero} alt="ep mountain" ></img></a>
        
      
       
        
        
        
        <header className="App-header">
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
                    2021 Season:
                    </p>
                  <ul className='AtAGlance'>
                      <li className="rockbiter-race">Monks Mayhem | 10/23/2021   </li> 
                      <li className='results-line'><a href="/monks_2021"  class="btn btn-info" role="button"><b>RESULTS</b></a>   </li> 
                      <li className="rockbiter-race">Lost Dog Enduro | 11/21/2021    </li>
                      <li className='results-line'><a href="/lost_dog_2021"   class="btn btn-info" role="button"><b>RESULTS</b></a>   </li> 
                     
                      <li className="rockbiter-race">Franklin Mountains | 12/18/2021   </li>
                      <li className='results-line'><a href="/franklin_2021"   class="btn btn-info" role="button"><b>RESULTS</b></a>   </li>
                      
                      <li className="rockbiter-race" id="register">Roughrider Canyon | 2/20/2022 | <a
                          className="App-link"
                          href="https://www.youtube.com/watch?v=MTFvMXJq280"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        Check out the Canyon
                      </a> </li>
                      
                      <li className='results-line'><a href="https://www.bikereg.com/rrbash?fbclid=IwAR15ysZOzmGVdrfuewZBzFYutW9Kc1Pe2enTdEnDtvfsEMuHeTtqkbpEUHc"  target="_blank" class="btn btn-danger" role="button"><b>REGISTER</b></a></li>
                      
                  </ul>
               
             

              </div> 
              
              
        
      
         
          </div>
        </header>
        <div className='awesome-slider-div'>
        <h1 className="rockbiter-race news">Pics  </h1> 
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
        
        <div className='background-news'>

        <h1 className="rockbiter-race news">News </h1> 
    
      <div className='container'>



         <ul id="news-list" className="list-group test">
            {news_links}
                      
       
       
        </ul>




        </div>




  </div>;
      

  
        
        
           
      
    </div>
    </div>
  );
}

export default App;

/* 
The pulse logo
<img src={ep_logo} className="App-logo pulse" alt="logo" /> */