import React from 'react';
import { Link } from 'react-router-dom';
import './nav.styles.css'

const Nav = () => {

  return (
    <div className="header">
      <ul className="nav-links">
        <Link className="nav-link" to="/rooms">
          <li>Rooms</li>
        </Link>
        <Link className="nav-link" to="/bookings">
          <li>Bookings</li>
        </Link>
        <Link className="nav-link" to="/visitors">
          <li>Visitors</li>
        </Link>
      </ul>
    </div>
  )
}

export default Nav;
