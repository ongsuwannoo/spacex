import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import '../styles/Navbar.css';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className={`nav ${pathname === '/' && 'nav--home'}`}>
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-header">
          <NavLink
            to="/"
            className="nav-title"
            style={{ textDecoration: "none" }}
          >SPACEX</NavLink>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/rockets"
          >
            ROCKETS
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/launches"
          >
            LAUNCHES
          </NavLink>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
