// ./pages/About/About.jsx

import React from 'react';
import AboutFlyer from '../../components/AboutFlyer/AboutFlyer.jsx';
import AboutResearchExpo from '../../components/AboutResearchExpo/AboutResearchExpo.jsx';
import ContentBrochure from '../../components/ContentBrochure/ContentBrochure.jsx';
import Outcomes from '../../components/Outcomes/Outcomes.jsx';
import LandingPageTimeLine from '../../components/LandingPageTimeLine/LandingPageTimeLine.jsx';
import AboutICEES from '../../components/AboutICEES/AboutICEES.jsx';
import AboutIRD from '../../components/AboutIRD/AboutIRD.jsx';
import AboutVEDA from '../../components/AboutVEDA/AboutVEDA.jsx';

import Ribbon from '../../components/Ribbon/Ribbon.jsx';

import './About.css';

function About() {
  return (
    <div className="about-page">

      <section id="about-flyer">
        <AboutFlyer />
      </section>

      <Ribbon />

      <section id="about-research-expo">
        <AboutResearchExpo />
      </section>

      <Ribbon />

      {/* <section id="content-brochure">
        <ContentBrochure />
      </section> */}

      <section id="outcomes">
        <Outcomes />
      </section>

      <Ribbon ribbon="2" />

      <section id="timeline">
        <LandingPageTimeLine />
      </section>

      <Ribbon text="International Conference on Energy, Environment, and Sustainability" ribbon="8" />

      <section id="icees">
        <AboutICEES />
      </section>

      <Ribbon ribbon='2' />

      <section id="AboutIRD">
        <AboutIRD />
      </section>
      
      <Ribbon ribbon='2' />

      <section id="AboutVEDA">
        <AboutVEDA />
      </section>

    </div>
  );
}

export default About;
