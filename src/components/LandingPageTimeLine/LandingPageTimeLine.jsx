// ./components/LandingPageTimeLine/LandingPageTimeLine.jsx
import React from 'react';
import './LandingPageTimeLine.css';

const timelineEvents = [
  {
    date: 'September 10, 2025',
    title: 'Call for Abstracts Opens',
    description: 'Participants can start submitting abstracts for poster and paper presentations.',
  },
  {
    date: 'September 20, 2025',
    title: 'Abstract Submission Deadline',
    description: 'All abstracts must be submitted by 11:59 PM IST.',
  },
  {
    date: 'September 21, 2025',
    title: 'Acceptance Notification',
    description: 'Selected abstracts will be notified via email.',
  },
  {
    date: 'September 27, 2025',
    title: 'RESEARCH EXPO 2025',
    description: 'Event day with presentations, judging, and awards ceremony.',
  },
];

function LandingPageTimeLine() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Research Expo 2025 Timeline</h2>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{event.date}</span>
              <h3 className="timeline-event">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPageTimeLine;
