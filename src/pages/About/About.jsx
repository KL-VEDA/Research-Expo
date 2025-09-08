// ./pages/About/About.jsx
import React from 'react';
import './About.css';  // Import the About page CSS

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Research Expo 2025</h1>
      <p className="about-description">
        The **Research Expo 2025** is an event where the brightest minds come together to showcase their research and innovative ideas.
      </p>
      <p className="about-details">
        This year’s Expo will focus on various fields including technology, engineering, social sciences, and interdisciplinary studies.
      </p>
      <h2 className="about-heading">What to Expect</h2>
      <ul className="about-list">
        <li>Poster and paper presentations</li>
        <li>Interactive research discussions</li>
        <li>Networking opportunities</li>
        <li>Showcase of innovative technologies</li>
      </ul>
      <p className="about-contact">
        For more details or inquiries, please <a href="mailto:info@researchexpo.com">contact us</a>.
      </p>
    </div>
  );
}

export default About;
