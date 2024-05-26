// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Automate Your Development Workflow and Boost Productivity</h1>
      <p>DevFlow Automator helps you streamline your coding process, maintain code quality, and manage CI/CD pipelines with ease.</p>
      <button className="cta-button">Get Started</button>
      <button className="cta-button">Learn More</button>
    </section>
  );
};

export default HeroSection;
