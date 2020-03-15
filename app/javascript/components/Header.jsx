import React from 'react';
import CMACLogo1 from '../../assets/images/CMAC-logo-1.png';
import CMACLogo2 from '../../assets/images/CMAC-logo-2.png';
import { store } from '../packs/redux/store';
import showNavMenu from '../packs/redux/actions';

function HeaderComponent() {
  return (
    <>
      <div className="nav-menu-control-container">
        <button
          type="button"
          aria-label="open-menu"
          onClick={() => { store.dispatch(showNavMenu(true)); }}
        >
          <i className="fas fa-bars" />
        </button>
      </div>
      <div className="inner-header">
        <div className="cmac-logo-container">
          <img alt="logo-1" src={CMACLogo1} />
        </div>
        <div className="header-title-container">
          <h1>Classical Martial Arts Center</h1>
        </div>
        <div className="cmac-logo-container">
          <img alt="logo-1" src={CMACLogo2} />
        </div>
      </div>
      <div className="nav-menu-control-container">
        <button type="button" aria-label="open-menu"><i className="fas fa-sign-in-alt" /></button>
      </div>
    </>
  );
}

export default HeaderComponent;
