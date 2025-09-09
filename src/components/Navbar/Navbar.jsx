import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import kllogo from '../../assets/kllogo.png';  
import './Navbar.css';
import { SERVER } from "./../../connectivity/routes";

function Navbar() {
  const [status, setStatus] = useState('yellow'); // start with yellow (connecting)

  // Call backend API
  async function checkServerStatus() {
    setStatus('yellow'); // show yellow while fetching
    try {
      const result = await SERVER.checkServerStatus();
      if (result.status === true) {
        setStatus('green');   // server healthy
      } else {
        setStatus('red');     // server reachable but not healthy
      }
    } catch (err) {
      setStatus('red');       // server unreachable
    }
  }

  useEffect(() => {
    checkServerStatus(); // run once on mount
    const interval = setInterval(checkServerStatus, 5000); // check every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={kllogo} alt="KL Logo" className="navbar-logo-image" />
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        {/* <Link to="/about" className="navbar-link">About</Link> */}
        {/* <Link to="/categories" className="navbar-link">Categories</Link> */}
        {/* <Link to="/rules" className="navbar-link">Rules</Link> */}
        {/* <Link to="/winners" className="navbar-link">Winners</Link> */}
        {/* <Link to="/register" className="navbar-link">Registration</Link> */}
        {/* <Link to="/media" className="navbar-link">Media</Link> */}
        {/* <Link to="/contact" className="navbar-link">Contact</Link> */}

        {/* Status Dot */}
        <div className={`status-dot ${status}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
