// ./components/AboutFlyer/AboutFlyer.jsx

import React from 'react';
import './AboutFlyer.css';
import AboutImage from '../../assets/flyers/About.png';

function AboutFlyer() {
  return (
    <section className="about-flyer" aria-labelledby="about-flyer-heading">
      <div className="about-flyer-content">
        <img 
          src={AboutImage} 
          alt="Flyer describing the Research Expo event" 
          className="about-flyer-image" 
        />
      </div>
    </section>
  );
}

export default AboutFlyer;
