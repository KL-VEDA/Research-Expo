import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Ribbon from "./../Ribbon/Ribbon";

import kllogo from '../../assets/kllogo.png';
import vedaLogo from '../../assets/images/VEDA.png';
import irdLogo from '../../assets/images/IRD.png';

import './Navbar.css';

import { SERVER } from "./../../connectivity/routes";

function Navbar() {
  const [status, setStatus] = useState('yellow');

  async function checkServerStatus() {
    setStatus('yellow');
    try {
      const result = await SERVER.checkServerStatus();
      if (result.status === true) {
        setStatus('green');
      } else {
        setStatus('red');
      }
    } catch (err) {
      setStatus('red');
    }
  }

  useEffect(() => {
    checkServerStatus();
    const interval = setInterval(checkServerStatus, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="navbar-wrapper">
      {/* Top: Logos */}
      <div className="navbar-top">
        <div className="navbar-top-inner">
          <img draggable={false} src={kllogo} alt="KL Logo" className="top-logo" />
          <img draggable={false} src={irdLogo} alt="IRD Logo" className="top-logo" style={{scale: "2", transform: "translateX(-40%)"}} />
          <img draggable={false} src={vedaLogo} alt="VEDA Logo" className="top-logo" style={{scale: "1.7", transform: "translateX(-50%)"}} />
        </div>
      </div>

      <Ribbon ribbon='5'/>

      {/* Bottom: Navigation Links */}
      <nav className="navbar-container">
        <div className="navbar-links-left">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>

          <div className="navbar-dropdown" style={{display: 'none'}}>
            <span className="navbar-link">Compete ▾</span>
            <div className="dropdown-content">
              <Link to="/categories" className="dropdown-link">Categories</Link>
              <Link to="/rules" className="dropdown-link">Rules</Link>
              <Link to="/winners" className="dropdown-link">Winners</Link>
            </div>
          </div>

          <Link to="/register" className="navbar-link"  style={{display: 'none'}}>Registration</Link>

          <div className="navbar-dropdown"  style={{display: 'none'}}>
            <span className="navbar-link">Media ▾</span>
            <div className="dropdown-content">
              <Link to="/media/researcathon" className="dropdown-link">Researcathon</Link>
              <Link to="/media/icees" className="dropdown-link">ICEES</Link>
              <Link to="/media/events" className="dropdown-link">Events</Link>
            </div>
          </div>

          <Link to="/contact" className="navbar-link"  style={{display: 'none'}}>Contact</Link>
        </div>

        {/* Right: Status Dot */}
        <div className="navbar-status">
          <div className={`status-dot ${status}`}></div>
        </div>
      </nav>
      <Ribbon ribbon='3'/>
    </header>
  );
}

export default Navbar;
