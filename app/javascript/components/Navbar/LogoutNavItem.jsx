import React from 'react';
import PropTypes from 'prop-types';
import LogoutButton from '../Auth/LogoutButton';

export default function LogoutNavItem({ mobileNav }) {
  return (
    <li className={`nav-item ${mobileNav ? 'link-container' : ''}`}>
      <div className="logout-container">
        <a className={mobileNav ? 'mobile-nav-link' : 'nav-link'} href="/profile">
          {mobileNav ? <i className="fas fa-user-circle" /> : 'Profile' }
        </a>
        <LogoutButton />
      </div>
    </li>
  );
}

LogoutNavItem.propTypes = {
  mobileNav: PropTypes.bool.isRequired,
};
