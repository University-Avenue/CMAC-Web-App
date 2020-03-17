import React from 'react';
import NavMenuList from './NavMenuList';

function NavMenu() {
  const iconsList = [
    ['fas fa-home', 'Home', '/'],
    ['fas fa-fist-raised', 'Programs', '/programs/index'],
    ['fas fa-user', 'Instructors', '/instructors/index'],
    ['fas fa-calendar-alt', 'Schedule', '/schedule/index'],
    ['fas fa-photo-video', 'Gallery', '/gallery/index'],
    ['fas fa-paper-plane', 'Contact Us', '/contact/index'],
  ];

  return (
    <>
      <NavMenuList iconsList={iconsList} />
    </>
  );
}

export default NavMenu;
