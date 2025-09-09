// ./components/Outcomes/Outcomes.jsx

import React from 'react';
import './Outcomes.css';

function Outcomes() {
  return (
    <div className="outcomes-container">
      <div className="outcomes-inner">

        <div className="outcome-box">
          <h3 className="outcome-title">500+ Participants</h3>
          <p className="outcome-desc">
            Researchers from various disciplines across India and abroad will participate.
          </p>
        </div>

        <div className="outcome-box">
          <h3 className="outcome-title">100+ Presentations</h3>
          <p className="outcome-desc">
            Posters and papers presenting cutting-edge research and innovation.
          </p>
        </div>

        <div className="outcome-box">
          <h3 className="outcome-title">Real-World Impact</h3>
          <p className="outcome-desc">
            Projects with potential for real-life applications and interdisciplinary impact.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Outcomes;
