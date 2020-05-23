import React from 'react';
import LogoutButton from '../Auth/LogoutButton';

export default function LogoutNavItem() {
  return (
    <li className="nav-item">
      <div className="logout-container">
        <a className="nav-link" href="/profile">
          Profile
        </a>
        <LogoutButton />
      </div>
    </li>
  );
}
