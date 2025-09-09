// ./components/ContentBrochure/ContentBrochure.jsx

import React from 'react';
import './ContentBrochure.css';

function ContentBrochure() {
  return (
    <div className="content-brochure">
      <h2 className="brochure-title">Content Brochure</h2>
      <p className="brochure-description">
        Get a comprehensive overview of the Research Expo 2025 – event highlights, schedules,
        guidelines for participants, and more. Our brochure contains everything you need to know.
      </p>

      <div className="brochure-actions">
        {/* You can link to your actual brochure PDF here */}
        <a
          href="/path-to-brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="brochure-download-button"
        >
          Download Brochure
        </a>
      </div>
    </div>
  );
}

export default ContentBrochure;
