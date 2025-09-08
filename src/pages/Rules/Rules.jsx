// ./Components/Rules/Rules.jsx
import React from "react";
import "./Rules.css";

function Rules() {
  const rules = [
    "All participants must register online before the deadline.",
    "Projects must be original and based on authentic research.",
    "Team size: Minimum 1, Maximum 4 participants.",
    "All entries must follow ethical research practices.",
    "Shortlisted teams must present live at the event.",
    "The decision of the jury will be final and binding.",
  ];

  return (
    <div className="rules-container">
      <h1 className="rules-title">📜 Rules & Guidelines</h1>
      <ul className="rules-list">
        {rules.map((rule, index) => (
          <li key={index} className="rule-item">{rule}</li>
        ))}
      </ul>
    </div>
  );
}

export default Rules;
