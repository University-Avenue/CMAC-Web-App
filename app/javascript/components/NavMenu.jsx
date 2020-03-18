import React from 'react';
import NavMenuList from './NavMenuList';

function NavMenu() {
  const iconsList = [
    ['fas fa-home', 'Home', '/'],
    ['fas fa-fist-raised', 'Programs', '/programs'],
    ['fas fa-user', 'Instructors', '/instructors'],
    ['fas fa-calendar-alt', 'Schedule', '/schedule'],
    ['fas fa-photo-video', 'Gallery', '/gallery'],
    ['fas fa-paper-plane', 'Contact Us', '/contact_us'],
  ];

  return (
    <>
      <NavMenuList iconsList={iconsList} />
    </>
  );
}

export default NavMenu;
