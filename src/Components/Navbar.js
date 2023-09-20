// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">ALEKHYAA</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/GenerateVideo">Generate Video</a>
      </div>
      <button className="signin-button">Sign In</button>
    </div>
  );
};

export default Navbar;
