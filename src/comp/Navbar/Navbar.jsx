// ./components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import kllogo from '../../assets/kllogo.png';  // Ensure this is the correct path to the logo
import './Navbar.css'; // Styles for Navbar

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={kllogo} alt="KL Logo" className="navbar-logo-image" />
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/register" className="navbar-link">Register</Link>
        {/* <Link to="/contact" className="navbar-link">Contact</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
