// ./Components/Registration/Registration.jsx
import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    teamName: "",
    email: "",
    phone: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted successfully!");
  };

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
