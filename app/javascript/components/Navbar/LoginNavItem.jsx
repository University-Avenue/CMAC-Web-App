import React from 'react';
import PropTypes from 'prop-types';

export default function LoginNavItem({ mobileNav }) {
  return (
    <li className={`nav-item login ${mobileNav ? 'link-container' : ''}`}>
      <a className={mobileNav ? 'mobile-nav-link' : 'nav-link'} href="/login">
        <i className="fas fa-sign-in-alt" />
      </a>
    </li>
  );
}

LoginNavItem.propTypes = {
  mobileNav: PropTypes.bool.isRequired,
}
