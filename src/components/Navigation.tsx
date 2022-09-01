import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/apple-touch-icon.png';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/home" className="nav-hover" activeClassName="nav-active">
        <h2>
          <img src={logo} alt="logo" />
        </h2>
      </NavLink>
      <ul>
        <NavLink to="/home" className="nav-hover" activeClassName="nav-active">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className="nav-hover" activeClassName="nav-active">
          <li>À propos</li>
        </NavLink>
        <NavLink
          to="/products"
          className="nav-hover"
          activeClassName="nav-active"
        >
          <li>les Sofas</li>
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-hover"
          activeClassName="nav-active"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
