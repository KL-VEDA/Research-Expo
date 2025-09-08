// ./Components/Hero/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing
import './Hero.css'; // Import the CSS file for styling
import kllogo from '../../assets/kllogo.png'; // Adjust the path to the logo

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <img src={kllogo} alt="KL Logo" className="hero-logo" />
      </div>
      <div className="hero-right">
        <h1 className="hero-title">RESEARCH EXPO 2025</h1>
        <p className="hero-subtitle">Join the leading minds in research.</p>
        <div className="hero-details">
          <p><strong>Date:</strong> 27/09/2025</p>
          <p><strong>Location:</strong> KL University, Vijayawada, Andhra Pradesh</p>
        </div>
        <Link to="/about" className="hero-button">Know More</Link>
      </div>
    </div>
  );
}

export default Hero;
