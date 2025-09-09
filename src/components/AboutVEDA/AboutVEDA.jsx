// ./components/AboutVEDA/AboutVEDA.jsx

import React from 'react';
import './AboutVEDA.css';

function AboutVEDA() {
  return (
<section className="veda-section" aria-labelledby="veda-title">
  <div className="veda-content">
    <h2 id="veda-title" className="veda-title">
      VEDA — Student Governance Body of IRD
    </h2>

    <div className="veda-description-row">
      <p className="veda-description">
        <strong>VEDA</strong>, the official Student Governance Body of the Integrated Research and Discovery (IRD) department, aims to foster academic excellence, research innovation, and leadership development among students.
      </p>

      <p className="veda-description">
        By providing a structured platform for collaboration, VEDA seeks to empower students to contribute significantly to their academic community.
      </p>
    </div>

    <h3 className="veda-subtitle">Goals and Initiatives</h3>
    <ul className="veda-list">
      <li>Host department-specific fests, workshops, and seminars to showcase student talents and innovations.</li>
      <li>Encourage student-led research and interdisciplinary collaboration.</li>
      <li>Bridge the gap between students and faculty through regular interactions and feedback.</li>
    </ul>
  </div>
</section>
  );
}

export default AboutVEDA;
