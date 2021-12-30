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
            Local EP mtb riders looking to build our community through promoting racing events. 
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=5IyClicTIoI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to RIP
        </a>
      </header>
      
    </div>
  );
}

export default App;
