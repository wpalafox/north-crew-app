import React from 'react'
import './Races.css'

export default function Races() {
    
    const data = [
        { race: 'Franklin Mountains | 12/18/2021 ', link: "/franklin_mountains_2021" },
        { race: 'Lost Dog | 11/21/2021 ', link: "/lost_dog_2021"},
        { race: 'Monks | 10/23/2021', link: "/monks_2021" },
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
