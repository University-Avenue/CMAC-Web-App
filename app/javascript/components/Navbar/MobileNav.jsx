import React from 'react';

function MobileNav() {
  return (
    <ul className="mobile-container">
      <li>
        <a href="/">
          <i className="fas fa-home" />
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
          <i className="fas fa-phone" />
        </a>
      </li>
    </ul>
  );
}

export default MobileNav;
