import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">ALEKHYAA</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/GenerateVideo">Generate Video</Link>
      </div>
      <button className="signin-button">Sign In</button>
    </div>
  );
};

export default Navbar;
