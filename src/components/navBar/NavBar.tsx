import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="today" className="nav-link" aria-current="page">
              Today
            </Link>
          </li>
          <li className="nav-item">
            <Link to="fiveDays" className="nav-link">
              5-day forecast
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
