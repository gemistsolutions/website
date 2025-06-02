import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // replace with your logo file

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Gemist Compliance Logo" />
        <span>Gemist Compliance</span>
      </Link>
      <div className="navbar-links">
        <NavLink to="/" end style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
          Home
        </NavLink>
        <NavLink to="/services" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
          Services
        </NavLink>
        <NavLink to="/pricing" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
          Pricing
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
