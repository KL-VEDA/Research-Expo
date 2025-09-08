import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx'; // Import the Navbar
import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/About.jsx';  // Import About page
import Winners from './pages/Winners/Winners.jsx';
import Categories from './pages/Categories/Categories.jsx'

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />  {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />  
        <Route path="/winners" element={<Winners/>}/>
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
    </Router>
  );
}

export default App;
