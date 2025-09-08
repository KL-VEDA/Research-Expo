// ./Components/Hero/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import kllogo from '../../assets/kllogo.png';

function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--ivory-white)',
        color: 'var(--charcoal-text)',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <div className="hero-left" style={{ flex: '1', textAlign: 'center' }}>
        <img
          src={kllogo}
          alt="KL Logo"
          className="hero-logo"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>

      <div className="hero-right" style={{ flex: '2', paddingLeft: '2rem' }}>
        <h1
          className="hero-title"
          style={{
            color: 'var(--academic-maroon)',
            fontSize: '2.5rem',
            marginBottom: '1rem',
          }}
        >
          RESEARCH EXPO 2025
        </h1>
        <p
          className="hero-subtitle"
          style={{
            fontSize: '1.2rem',
            color: 'var(--muted-brick)',
            marginBottom: '1rem',
          }}
        >
          Join the leading minds in research.
        </p>

        <div
          className="hero-details"
          style={{
            backgroundColor: 'var(--warm-beige)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
          }}
        >
          <p>
            <strong>Date:</strong> 27/09/2025
          </p>
          <p>
            <strong>Location:</strong> KL University, Vijayawada, Andhra Pradesh
          </p>
        </div>

        <Link
          to="/about"
          className="hero-button"
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--clay-rust)',
            color: 'var(--pure-white)',
            textDecoration: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--light-maroon)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--clay-rust)')}
        >
          Know More
        </Link>
      </div>
    </div>
  );
}

export default Hero;
