import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav">
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
          Home
          </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/rockets"
        >
          Rockets
          </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/launches"
        >
          Launches
          </NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
