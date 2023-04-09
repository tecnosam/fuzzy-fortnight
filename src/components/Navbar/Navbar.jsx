import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar" >
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-link">About BUCC</Link>
          <Link to="/faqs" className="navbar-link">FAQs</Link>
          <Link to="/contact" className="navbar-link">Contact Us</Link>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="navbar-linkr">Login</Link>
          <Link to="/register" className="navbar-button">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;