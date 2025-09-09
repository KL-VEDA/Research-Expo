import { useEffect, useRef, useState } from "react";
import "./HomeVideo.css";
import expoVideo from "../../assets/videos/expo-promo.mp4";

function HomeVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && videoElement) {
          try {
            await videoElement.play();
          } catch (err) {
            console.error("Autoplay failed:", err);
          }
        } else {
          videoElement?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="home-video-section">
      {/* <h2 className="video-title">Experience the Research Expo</h2> */}
      <p className="video-description" style={{fontSize: "1rem"}}>
        Discover innovative ideas, groundbreaking research, and the future of technology at Research Expo 2025.
      </p>

      <div className="home-video-container">
        <video
          ref={videoRef}
          src={expoVideo}
          className="home-video"
          muted
          controls
          playsInline
        />
      </div>
    </div>
  );
}

export default HomeVideo;
