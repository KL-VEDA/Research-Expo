import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'; // Import the Navbar
import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/About.jsx';  // Import About page

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />  {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />  {/* Add route for About page */}
      </Routes>
    </Router>
  );
}

export default App;
