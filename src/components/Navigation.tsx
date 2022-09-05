import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/apple-touch-icon.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="nav">
      <NavLink to="/home" className="nav-hover" activeClassName="nav-active">
        <img src={logo} alt="logo" className="nav-logo" />
      </NavLink>

      {isOpen ? (
        <ul className="nav-list">
          <CloseIcon onClick={() => setIsOpen(false)} />
          <NavLink
            to="/home"
            className="nav-hover"
            activeClassName="nav-active"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className="nav-hover"
            activeClassName="nav-active"
          >
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
      ) : (
        <MenuIcon
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}
    </nav>
  );
};

export default Navigation;
