import React, { useEffect } from 'react';
import $ from 'jquery';
import CMACLogo1 from '../../assets/images/CMAC-logo-1.png';

function HeaderComponent() {
  useEffect(() => {
    console.log('useEffect()');
  }, []);
  return (
    // <!-- Navigation-->
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <img
            src={CMACLogo1}
            height={50}
            width={50}
            alt="CMAC Logo"
            className="navbar-logo"
          />
          Classical Martial Arts Centre
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#Train">Train</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#Schedule">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contractus">Contact us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#profile">
                <i className="fas fa-user" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
