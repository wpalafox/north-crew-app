import React, { Component }  from 'react';

import './App.css';
import NavBar from './NavBar.js'
import ep_logo from './ep_enduro_logo.svg';


function App() {
  return (
    <div className="App">
   
      <header className="App-header">
        <img src={ep_logo} className="App-logo pulse" alt="logo" />
        <p>
        An Organization founded and supported by Local MTB riders.
        </p>
        <p>
        We promote and organize MTB Enduro style race events, and trail maintenance activities.
        </p>
      
     
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=wWH_BSRiX0U"
          target="_blank"
          rel="noopener noreferrer"
        >
          What Is Enduro Racing?
        </a>
      </header>
      
    </div>
  );
}

export default App;
