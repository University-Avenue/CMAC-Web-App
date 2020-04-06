import React, { useState, useEffect } from 'react';
import CMACLogo2 from '../../assets/images/CMAC-logo-2.png';

function Navbar() {
  const [scrolled, setScrolled] = useState('');

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = winScroll / height;

    if (scrollPercent > 0.025) {
      setScrolled('navbar-scrolled');
    } else {
      setScrolled('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled}`} id="desktopNav">
        <a className="navbar-brand" href="/">
          <img
            src={CMACLogo2}
            height={50}
            width={50}
            alt="CMAC Logo"
            className="navbar-logo"
          />
          CMAC
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/train">Train</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/schedule">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact_us">Contact us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <i className="fas fa-user" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mobile-container">
        <a className="navbar-brand" href="/">
          <img
            src={CMACLogo2}
            height={50}
            width={50}
            alt="CMAC Logo"
            className="navbar-logo"
          />
        </a>
        <button id="open-mobile-nav">
          <span className="burger" />
          <span className="burger-text">Menu</span>
        </button>
        <nav className="mobile-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Train</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
