// ./pages/About/About.jsx

import React from 'react';
import AboutFlyer from '../../components/AboutFlyer/AboutFlyer.jsx';
import AboutResearchExpo from '../../components/AboutResearchExpo/AboutResearchExpo.jsx';
import ContentBrochure from '../../components/ContentBrochure/ContentBrochure.jsx';
import Outcomes from '../../components/Outcomes/Outcomes.jsx';
import LandingPageTimeLine from '../../components/LandingPageTimeLine/LandingPageTimeLine.jsx';
import AboutICEES from '../../components/AboutICEES/AboutICEES.jsx';
import IRD from '../../components/IRD/IRD.jsx';
import VEDA from '../../components/VEDA/VEDA.jsx';

import './About.css';

function About() {
  return (
    <div className="about-page">

      <section id="about-flyer">
        <AboutFlyer />
      </section>

      <section id="about-research-expo">
        <AboutResearchExpo />
      </section>

      <section id="content-brochure">
        <ContentBrochure />
      </section>

      <section id="outcomes">
        <Outcomes />
      </section>

      <section id="timeline">
        <LandingPageTimeLine />
      </section>

      <section id="icees">
        <AboutICEES />
      </section>

      <section id="ird">
        <IRD />
      </section>

      <section id="veda">
        <VEDA />
      </section>

    </div>
  );
}

export default About;
