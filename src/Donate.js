import React from 'react';
import './Donate.css';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ep_logo from './ep_enduro_logo.svg';

export default function Donate() {
    return (
        
    <div className="Donate">
      <NavBar />
      <header className="Donate-header">
        <img src={ep_logo} className="App-logo pulse" alt="logo" />
        <p>
            Local EP MTB riders building our community through promoting racing events and trail maintenance
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to RIP
        </a>
      </header>
      
    </div>
    )
}
