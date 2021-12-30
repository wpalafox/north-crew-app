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


ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contactus" element={<ContactUs />} />
    
    </Routes>
    <Footer />
  
  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
