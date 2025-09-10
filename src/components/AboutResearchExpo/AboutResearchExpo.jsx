// ./components/AboutResearchExpo/AboutResearchExpo.jsx

import React from 'react';
import './AboutResearchExpo.css';
import expoImage from './../../assets/media/ICEES/Image_27.jpg';

function AboutResearchExpo() {
  return (
    <section className="about-research-expo" aria-labelledby="expo-heading">
      <div className="expo-left">
        <img 
          src={expoImage} 
          alt="Students and faculty engaging at the Research Expo 2025" 
          className="expo-image" 
        />
      </div>

      <div className="expo-right">
        <h2 id="expo-heading" className="expo-title">About Research Expo 2025</h2>
        <p className="expo-description">
          The <strong>Research Expo 2025</strong> is your chance to shine as a researcher. Compete with the brightest minds through poster and paper presentations, and showcase your groundbreaking ideas.
        </p>
        <p className="expo-description">
          This year’s Expo emphasizes interdisciplinary research, technological innovation, and academic collaboration. Participants will experience:
        </p>
        <ul className="expo-highlights">
          <li>Poster and paper presentations</li>
          <li>Interactive research discussions</li>
          <li>Networking opportunities</li>
          <li>Showcase of innovative technologies</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutResearchExpo;
