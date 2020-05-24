import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/CMAC-logo-2.png';
import LogoutNavItem from './LogoutNavItem';
import LoginNavItem from './LoginNavItem';

export default function MobileNav({ isLoggedIn }) {
  return (
    <ul className="mobile-container">
      <li className="link-container">
        <a className="mobile-nav-link" href="/">
          <img src={logo} alt="cmac-logo" className="nav-logo" />
        </a>
      </li>
      <li className="link-container">
        <a className="mobile-nav-link" href="/train">
          <i className="fas fa-heartbeat" />
        </a>
      </li>
      <li className="link-container">
        <a className="mobile-nav-link" href="/schedule">
          <i className="fas fa-calendar-day" />
        </a>
      </li>
      <li className="link-container">
        <a className="mobile-nav-link" href="/contact_us">
          <i className="fas fa-envelope" />
        </a>
      </li>
      {isLoggedIn ? <LogoutNavItem mobileNav /> : <LoginNavItem mobileNav />}
    </ul>
  );
}

MobileNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
