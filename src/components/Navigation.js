import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <h2>
        <img src="./assets/logo.svg" alt="logo" />
      </h2>
      <ul>
        <NavLink to="/home" className="nav-hover" activeClassName="nav-active">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className="nav-hover" activeClassName="nav-active">
          <li>A propos</li>
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
