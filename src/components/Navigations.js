import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-grey">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        Space X
      </NavLink>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
