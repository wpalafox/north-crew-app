import React from 'react'
import './Races.css'

export default function Races() {
    
    const data = [
        { race: 'Franklin Mountains | Stop #3', link: "/franklin_mountains_2021" },
        { race: 'Lost Dog | Stop #2', link: "/lost_dog_2021"},
        { race: 'Monks | Stop #1', link: "/monks_2021" },
      ];
    
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
            
        </div>
    </div>  


    )
}
