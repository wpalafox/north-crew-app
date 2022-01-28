import React from 'react';
import './News.css';
import news_header from './pics/news_header.jpg';


export default function News() {


    const data = [
        { news: 'Shuttle all day this coming weekend ', link: "https://www.instagram.com/p/CZKf0iPP87I", caption: 'Shuttle all day this coming weekend at ROUGHRIDER CANYON. Come dig with us! Get your spot for stop 🛑 4 of EP ENDURO series. Evil waffle almost full! Get your number 🤘🏻🤘🏻' },
        { news: 'You can go check the raffle bike at The Shock Lab spots are still available 🎟 ', link: "https://www.instagram.com/p/CYq-xGlDq6m/" , caption: 'Come get your riding skills to the next level Friday February 18 & Saturday 19 - pre-ride, re ride and free ride. Practice and get to know the trails and jumplines we have out there. We will have food and shuttle. Sunday 20 we race! Go register to https://www.bikereg.com/rrbash $10 camping, $5 parking in benefit to Mountain Action Sports El Paso'},
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
  
  return <div className='background-news'>

        
    <img src={news_header} className="news-header" alt="news pic" />
      <div className='container'>

       

         <ul id="news-list" className="list-group test">
            {news_links}
                      
       
       
        </ul>




        </div>




  </div>;
}
