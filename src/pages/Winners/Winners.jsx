// ./Components/Winners/Winners.jsx
import React from 'react';
import './Winners.css';

function Winners() {
  const winners = [
    { id: 1, name: "Team Innovators", category: "AI & ML", prize: "1st Place" },
    { id: 2, name: "BioTech Pioneers", category: "Biotechnology", prize: "2nd Place" },
    { id: 3, name: "Eco Warriors", category: "Sustainable Energy", prize: "3rd Place" },
  ];

  return (
    <div className="winners-container">
      <h1 className="winners-title">🏆 Research Expo 2025 Winners</h1>
      <p className="winners-subtitle">
        Celebrating the brightest minds and groundbreaking research.
      </p>

      <div className="winners-grid">
        {winners.map((winner) => (
          <div key={winner.id} className="winner-card">
            <h2 className="winner-name">{winner.name}</h2>
            <p className="winner-category">
              <strong>Category:</strong> {winner.category}
            </p>
            <span className="winner-prize">{winner.prize}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Winners;
