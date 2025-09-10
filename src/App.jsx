import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from "./components/Footer/Footer.jsx";

import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/About.jsx';
import Winners from './pages/Winners/Winners.jsx';
import Categories from './pages/Categories/Categories.jsx';
import Rules from './pages/Rules/Rules.jsx';
import Registration from './pages/Registration/Registration.jsx';
import Media from './pages/Media/Media.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Login from './pages/Login/Login.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx'; // Admin dashboard page
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'; // JWT check wrapper


import "./App.css";
  
function App() {
  return (
    <Router>
      <Navbar /> {/* Global Navbar */}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
