import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import ContactUs from './ContactUs.js';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Donate from './Donate.js';
import Races from './Races.js';
import NotFound from './NotFound.js';
import Race from './Race.js';




ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/races" element={<Races />} />
      <Route path="/monks_2021" element={<Race />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<NotFound />} />
      
    
    
    </Routes>
    <Footer />
  
  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
