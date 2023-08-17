import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const navLink = ({ content, path }) => (
  <NavLink
    path={path}
    className={(status) => (status.isActive ? 'activeNav' : '')}
    to={path}
  >
    {content}
  </NavLink>
);

export default navLink;
