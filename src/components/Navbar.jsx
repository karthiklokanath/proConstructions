import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Pro Constructions</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
           <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
