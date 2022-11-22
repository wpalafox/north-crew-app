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

import Monks from './results_folder/Monks_Mayhem.js'
import Dog from './results_folder/lost_enduro.js'
import Franklin from './results_folder/franklin.js'
import Rider from './results_folder/rough_rider.js'
import Darkduro from './results_folder/ld_night.js'
import Franklin_2022 from './results_folder/franklin_2022.js'
import LostD_2022 from './results_folder/lost_dog_2022.js'

import News from './News.js'



ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/races" element={<Races />} />
      <Route path="/news" element={<News />} />

      <Route path="/monks_2021" element={<Monks />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/lost_dog_2021" element={<Dog />} />
      <Route path="/franklin_2021" element={<Franklin />} />
      <Route path="/rider_2021" element={<Rider />} />
      <Route path="/lost_dog_night_2022" element={<Darkduro />} />
      <Route path="/franklin_2022" element={<Franklin_2022 />} />
      <Route path="/lost_dog_2022" element={<LostD_2022 />} />
      
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
