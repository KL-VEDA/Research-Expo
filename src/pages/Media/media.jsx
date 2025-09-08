// ./Components/Media/Media.jsx
import React from "react";
import "./Media.css";

function Media() {
  const mediaItems = [
    { id: 1, type: "image", src: "https://via.placeholder.com/400x250", caption: "Expo 2024 Highlights" },
    { id: 2, type: "image", src: "https://via.placeholder.com/400x250", caption: "Students Showcasing Projects" },
    { id: 3, type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Event Recap" },
  ];

  return (
    <div className="media-container">
      <h1 className="media-title">🎥 Media Gallery</h1>
      <div className="media-grid">
        {mediaItems.map((item) => (
          <div key={item.id} className="media-card">
            {item.type === "image" ? (
              <img src={item.src} alt={item.caption} />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
            <p className="media-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
