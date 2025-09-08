// ./pages/LandingPage/LandingPage.jsx
import React from 'react';
import Hero from './../../Components/Hero/Hero';  // Importing Hero component

import './LandingPage.css'; // Importing the LandingPage CSS

function LandingPage() {
  return (
    <div className="landing-page">
        <section id="hero">
          <Hero />
        </section>
    </div>
  );
}

export default LandingPage;
