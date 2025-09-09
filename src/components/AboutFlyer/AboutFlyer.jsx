// ./components/AboutFlyer/AboutFlyer.jsx

import React from 'react';
import './AboutFlyer.css';
import AboutImage from '../../assets/flyers/About.png';

function AboutFlyer() {
  return (
    <div className="about-flyer">
      <img src={AboutImage} alt="About Research Expo Flyer" className="about-flyer-image" />
    </div>
  );
}

export default AboutFlyer;
