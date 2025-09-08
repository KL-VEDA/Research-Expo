import React from 'react';
import { Link } from 'react-router-dom';
import kllogo from '../../assets/kllogo.png';  
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={kllogo} alt="KL Logo" className="navbar-logo-image" />
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/categories" className="navbar-link">Categories</Link>
        <Link to="/rules" className="navbar-link">Rules</Link>
        <Link to="/winners" className="navbar-link">Winners</Link>
        <Link to="/register" className="navbar-link">Registration</Link>
        <Link to="/media" className="navbar-link">Media</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
