// ./pages/About/About.jsx
import React from 'react';
import './About.css'; // Optional: Add styles for the About component

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Research Expo 2025</h2>
      <p className="about-description">
        The Research Expo 2025 is a prestigious event where researchers, innovators, and scholars come together to showcase their groundbreaking work. Whether you’re a student, a professor, or an industry expert, the Expo provides an excellent platform to share your research with a global audience. The event will feature exciting poster and paper presentations, as well as numerous workshops and networking opportunities.
      </p>
      <p className="about-details">
        Research topics are open to all fields of study, including but not limited to:
      </p>
      <ul className="about-list">
        <li>Engineering and Technology</li>
        <li>Science and Medicine</li>
        <li>Social Innovation</li>
        <li>Interdisciplinary Studies</li>
        <li>Environmental and Sustainability Research</li>
      </ul>
      <p className="about-more-info">
        We are excited to bring together brilliant minds from across India and beyond, providing them with the resources and platform to foster future collaborations and innovations.
      </p>
    </div>
  );
}

export default About;
