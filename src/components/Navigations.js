import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => (
  <nav className="header">
    <div className="header-container">
      <NavLink className="navbar-brand" to="/">
        Space X
      </NavLink>
      <div className="">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeClassName="active">
              Rockets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/missions" activeClassName="active">
              Missions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile" activeClassName="active">
              myProfile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigations;

