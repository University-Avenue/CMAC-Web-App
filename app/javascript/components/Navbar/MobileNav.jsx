import React from 'react';
import logo from '../../../assets/images/CMAC-logo-2.png';

function MobileNav() {
  return (
    <ul className="mobile-container">
      <li>
        <a href="/">
          <img src={logo} alt="cmac-logo" className="nav-logo" />
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-heartbeat" />
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-calendar-day" />
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-envelope" />
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-user-circle" />
        </a>
      </li>
    </ul>
  );
}

export default MobileNav;
