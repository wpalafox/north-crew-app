import React, { Component }  from 'react';

import './App.css';

import ep_logo from './ep_enduro_logo.svg';
import background_ep from './pics/ep_enduro_background.jpg';



function App() {
  return (
    <div className="App">
   
      <header className="App-header">
        <div className='container'>
        <img src={ep_logo} className="App-logo pulse" alt="logo" />
        
        <p>
        An Organization Founded and Supported by Local Mountain Bike Riders.
        </p>
        <p>
        We Promote and Organize MTB Enduro Style Race Events, and Trail Maintenance Activities.
        </p>
      
     
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=wWH_BSRiX0U"
          target="_blank"
          rel="noopener noreferrer"
        >
          What Is Enduro MTB Racing?
        </a>
        </div>
      </header>
      <img id="home-image" src={background_ep} alt="ep mountain" />

  
      
    </div>
  );
}

export default App;
