// LandingPage.js
import React from 'react';
import './Frontend.css'; 
import logo from './Praha.png';
const Frontend = ({ onEnterClick }) => {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" /> {/* Replace with your logo path */}
     
        
        <div className="button-container">
          <button className="button" onClick={onEnterClick}>
            Let's Start
          </button>
        </div>
      </div>
   
  );
};

export default Frontend;
