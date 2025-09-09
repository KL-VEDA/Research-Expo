// ./components/AboutICEES/AboutICEES.jsx

import React from 'react';
import './AboutICEES.css';

function AboutICEES() {
  return (
    <section className="about-icees" aria-labelledby="icees-title">
      <div className="icees-content">
        <h2 id="icees-title" className="icees-title">
          International Conference on Energy, Environment, and Sustainability (ICEES 2025)
        </h2>

        <p className="icees-description">
          <strong>ICEES 2025</strong> is a prestigious international conference organized as part of the Research Expo 2025. It aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of <em>Energy, Environment, and Sustainability</em>.
        </p>

        <p className="icees-description">
          The conference provides an interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, concerns, and practical challenges encountered in these fields.
        </p>

      </div>
    </section>
  );
}

export default AboutICEES;
