// ./Components/Registration/Registration.jsx
import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [formData, setFormData] = useState({
    teamName: "",
    email: "",
    phone: "",
    category: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted successfully!");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
        <h1 className="registration-title" style={{textAlign: 'center', marginTop: '24vh', height: '30vh'}}>
          Registrations are not open at the moment. Please check back later.
          <br />
        <button className="back-home-button" onClick={handleGoHome} aria-label="Go back to home page">
          Go Back Home
        </button>
        </h1>
    </>
  )

  return (
    <div className="registration-container">
      <h1 className="registration-title">📝 Registration</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input type="text" name="teamName" placeholder="Team Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Mobile Number" onChange={handleChange} required />
        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="Biotech">Biotechnology</option>
          <option value="Sustainability">Sustainability</option>
          <option value="IoT">IoT & Smart Systems</option>
        </select>
        <button type="submit" className="register-btn">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
