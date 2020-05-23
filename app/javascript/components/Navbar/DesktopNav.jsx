import React, { useEffect, useState } from 'react';
import CMACLogo2 from '../../../assets/images/CMAC-logo-2.png';
import useLoginStatus from '../../hooks/useLoginStatus';
import LogoutNavItem from './LogoutNavItem';
import LoginNavItem from './LoginNavItem';

function DesktopNav() {
  const [scrolled, setScrolled] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isHomePage = window.location.pathname === '/' ? 'navbar-home-page' : '';

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
    if (isHomePage) {
      window.addEventListener('scroll', listenToScroll);
    }
    useLoginStatus(setIsLoggedIn);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);


  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled} ${isHomePage}`}>
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
        {isLoggedIn ? <LogoutNavItem /> : <LoginNavItem />}
      </ul>
    </nav>
  );
}

export default DesktopNav;
