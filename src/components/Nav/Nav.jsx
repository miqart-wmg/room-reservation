import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.styles.css'

const Nav = () => {

  return (
    <div className="header">
      <ul className="nav-links">
        <NavLink activeClassName="activeRoute" className="nav-link" to="/rooms">
          <li>Rooms</li>
        </NavLink>
        <NavLink activeClassName="activeRoute" className="nav-link" to="/bookings">
          <li>Bookings</li>
        </NavLink>
        <NavLink activeClassName="activeRoute" className="nav-link" to="/visitors">
          <li>Visitors</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav;
