// src/components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    { title: "Smart Code Completion", description: "Automate and enhance code writing with AI-powered suggestions." },
    { title: "Automated Code Quality Checks", description: "Ensure high-quality code with integrated linting and formatting tools." },
    { title: "CI/CD Pipelines", description: "Simplify and automate your continuous integration and deployment processes." },
    { title: "Real-Time Collaboration", description: "Collaborate with your team in real time on projects and tasks." },
    { title: "Environment Management", description: "Easily manage and deploy development environments on demand." },
    { title: "Documentation Automation", description: "Generate and maintain project documentation effortlessly." },
  ];

  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
