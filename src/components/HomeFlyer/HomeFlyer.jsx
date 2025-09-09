import { useEffect, useRef, useState } from "react";
import "./HomeFlyer.css";

import CoverImage from "./../../assets/flyers/Cover.png";
import ICEESImage from "./../../assets/flyers/ICEES2025.png";
import ResearchathonImage from "./../../assets/flyers/Researchthons.png";

const flyers = [CoverImage, ICEESImage, ResearchathonImage];

function HomeFlyer() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % flyers.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + flyers.length) % flyers.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(nextSlide, 2000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [current, isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    clearTimeout(timeoutRef.current); // Clear timeout when manually toggling
  };

  return (
    <div className="flyer-container">
      <div className="flyer-wrapper" style={{ transform: `translateX(-${current * 100}%)` }}>
        {flyers.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Flyer ${index}`}
            className="flyer-image"
          />
        ))}
      </div>

      <div className="nav-panel left" onClick={prevSlide}>&#10094;</div>
      <div className="nav-panel right" onClick={nextSlide}>&#10095;</div>

      <div className="dots">
        {flyers.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

      <div className="pause-play">
        <button onClick={togglePlay}>
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
}

export default HomeFlyer;
