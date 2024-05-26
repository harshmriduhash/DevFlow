// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">DevFlow Automator</div>
      <nav>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tasks">Tasks</a></li>
          <li><a href="#cicd">CI/CD</a></li>
          <li><a href="#docs">Docs</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
