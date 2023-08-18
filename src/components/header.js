import React from 'react';
import './header.css';
import headerLogo from '../assets/images/headerLogo.png';
import NavLink from './NavLink';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="">
        <img src={headerLogo} alt="" />
      </div>
      <h1 className="site-title">Space Traveler&apos;s Hub</h1>

      <div className="">
        <nav>
          <ul>
            <li>
              <NavLink path="/" content="Rocket" />
            </li>

            <li>
              <NavLink path="/missions" content="Missions" />
            </li>

            <li>
              <div className="separater"> | </div>
            </li>

            <li>
              <NavLink path="/profile" content="My Profile" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
