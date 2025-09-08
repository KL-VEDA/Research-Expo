// ./Components/Winners/Winners.jsx
import React from "react";
import "./Winners.css";

function Winners() {
  const prizes = [
    {
      id: 1,
      prize: "1st Prize",
      reward: "₹1,00,000 Cash Award + Trophy + Certificate of Excellence",
      recognition: "The highest honor for groundbreaking innovation and leadership in research.",
      projectFocus: "Pioneering solutions in Artificial Intelligence, Biotechnology, and Renewable Energy.",
      opportunities: "Special recognition on stage, feature in university research magazine, and direct mentorship from industry experts.",
    },
    {
      id: 2,
      prize: "2nd Prize",
      reward: "₹50,000 Cash Award + Trophy + Certificate of Merit",
      recognition: "Celebrating impactful and promising research contributions.",
      projectFocus: "Innovations in sustainable practices, healthcare technologies, and IoT solutions.",
      opportunities: "Exclusive access to workshops, innovation labs, and research publication support.",
    },
    {
      id: 3,
      prize: "3rd Prize",
      reward: "₹25,000 Cash Award + Medal + Certificate of Appreciation",
      recognition: "Honoring creativity, dedication, and impactful project outcomes.",
      projectFocus: "Creative approaches in software solutions, green energy, and digital education tools.",
      opportunities: "Networking with academic leaders and participation in upcoming innovation expos.",
    },
  ];

  return (
    <div className="winners-container">
      <h1 className="winners-title">🏆 Research Expo 2025 Winners</h1>
      <p className="winners-subtitle">
        Recognizing the best projects that shaped innovation and discovery.
      </p>

      <div className="winners-grid">
        {prizes.map((item) => (
          <div key={item.id} className="winner-card">
            <span className={`winner-badge prize-${item.id}`}>
              {item.prize}
            </span>
            <p className="winner-reward">{item.reward}</p>
            <p className="winner-recognition">{item.recognition}</p>
            <p className="winner-focus"><strong>Project Focus:</strong> {item.projectFocus}</p>
            <p className="winner-opportunities"><strong>Opportunities:</strong> {item.opportunities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Winners;
