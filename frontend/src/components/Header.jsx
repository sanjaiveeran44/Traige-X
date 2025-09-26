import React from 'react';
import './Header.css';
// Header Component
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <span className="logo-tx">Tx</span>
            <span className="logo-text">Triage X</span>
          </div>
        </div>
        <div className="header-right">
          <nav className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </div>
    </header>
  );
};