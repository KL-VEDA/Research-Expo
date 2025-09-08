

// ./Components/Contact/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">📩 Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
        <textarea name="query" placeholder="Your Query" rows="5" onChange={handleChange} required />
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
