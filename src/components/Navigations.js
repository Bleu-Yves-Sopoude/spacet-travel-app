import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () =>  (
    <nav className="navigation row">
      <h1 className="Text-Style-3">Space X</h1>
      <ul className="row">
        <li>
          <NavLink className="link Text-Style-6" to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink className="link Text-Style-6" to="/missions">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink className="link Text-Style-6" to="/profile">
            myProfile
          </NavLink>
        </li>
      </ul>
    </nav>
  );


export default Navigations;
