// ./pages/LandingPage/LandingPage.jsx
import React from 'react';
import HomeFlyer from '../../components/HomeFlyer/HomeFlyer.jsx';
import Hero from '../../components/Hero/Hero';
import HomeVideo from '../../components/HomeVideo/HomeVideo.jsx';

import Ribbon from '../../components/Ribbon/Ribbon.jsx'; // Importing the Ribbon component

import './LandingPage.css'; // Importing the LandingPage CSS

function LandingPage() {
  return (
    <div className="landing-page">
        <section id="home-flyer">
          <HomeFlyer />
        </section>
        <Ribbon />
        <section id="hero">
          <Hero />
        </section>
        <Ribbon text="EXPERIENCE THE RESEARCH EXPO" ribbon="5" />
        <section id="home-video">
          <HomeVideo />
        </section>
    </div>
  );
}

export default LandingPage;
