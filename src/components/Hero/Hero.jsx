// ./Components/Hero/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import expoImage from '../../assets/expo.png'; // ✅ New expo image

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div> {/* subtle overlay effect */}

      <div className="hero-left">
        <img src={expoImage} alt="Research Expo 2025" className="hero-expo-image" />
      </div>

      <div className="hero-right">
        <h1 className="hero-title">RESEARCH EXPO 2025</h1>
        <p className="hero-subtitle">Join the leading minds in research.</p>

        <div className="hero-details">
          <p><strong>Date:</strong> 27/09/2025</p>
          <p><strong>Location:</strong> KL University, Vijayawada, Andhra Pradesh</p>
        </div>

        {/* <Link to="/about" className="hero-button">Know More</Link> */}
      </div>
    </div>
  );
}

export default Hero;
