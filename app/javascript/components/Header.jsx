import React from 'react';
import CMACLogo1 from '../../assets/images/CMAC-logo-1.png';
import CMACLogo2 from '../../assets/images/CMAC-logo-2.png';
import IconButton from './IconButton';

function HeaderComponent() {
  return (
    <>
      <div className="nav-menu-control-container">
        <IconButton
          id="nav-control"
          label="Open Menu"
          icon="fas fa-bars"
          iconSize="sm"
        />
      </div>
      <div className="inner-header">
        <div className="cmac-logo-container">
          <img alt="logo-1" src={CMACLogo1} />
        </div>
        <div className="header-title-container">
          <h2>Classical Martial Arts Center</h2>
        </div>
        <div className="cmac-logo-container">
          <img alt="logo-1" src={CMACLogo2} />
        </div>
      </div>
      <div className="nav-menu-control-container">
        <IconButton
          label="Sign In"
          icon="fas fa-sign-in-alt"
          iconSize="sm"
        />
      </div>
    </>
  );
}

export default HeaderComponent;
