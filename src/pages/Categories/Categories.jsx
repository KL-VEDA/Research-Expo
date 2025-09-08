// ./Components/Categories/Categories.jsx
import React from "react";
import "./Categories.css";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Artificial Intelligence & Machine Learning",
      description: "Innovations in AI, Deep Learning, and Data Science.",
    },
    {
      id: 2,
      name: "Biotechnology",
      description: "Exploring life sciences, genetics, and medical research.",
    },
    {
      id: 3,
      name: "Sustainable Energy",
      description: "Clean energy solutions for a greener future.",
    },
    {
      id: 4,
      name: "Robotics & Automation",
      description: "Intelligent machines and automated systems.",
    },
    {
      id: 5,
      name: "Cybersecurity",
      description: "Securing data and networks against threats.",
    },
    {
      id: 6,
      name: "Space & Aerospace",
      description: "Advancements in satellites, rockets, and space exploration.",
    },
  ];

  return (
    <div className="categories-container">
      <h1 className="categories-title">📚 Research Categories</h1>
      <p className="categories-subtitle">
        Explore diverse fields of innovation and discovery.
      </p>

      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <h2 className="category-name">{category.name}</h2>
            <p className="category-description">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
