// ./Components/Media/Media.jsx
import React from "react";
import "./Media.css";

function Media() {
  return (
    <div className="media-container">
      <h1 className="media-title">Media Gallery</h1>
      <div className="media-grid">
        {/* Existing Media Items */}
        <div className="media-card">
          <img src="/assets/expo2024.jpg" alt="Expo 2024 Highlights" />
          <h3>Expo 2024 Highlights</h3>
        </div>

        <div className="media-card">
          <img src="/assets/projects.jpg" alt="Students Showcasing Projects" />
          <h3>Students Showcasing Projects</h3>
        </div>

        <div className="media-card">
          <video controls>
            <source src="/assets/event.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Event Recap</h3>
        </div>

        {/* New Media Images */}
        <div className="media-card">
          <img src="/assets/workshop.jpg" alt="Workshops & Talks" />
          <h3>Workshops & Expert Talks</h3>
        </div>

        <div className="media-card">
          <img src="/assets/awards.jpg" alt="Award Ceremony" />
          <h3>Award Ceremony Highlights</h3>
        </div>
      </div>
    </div>
  );
}

export default Media;
