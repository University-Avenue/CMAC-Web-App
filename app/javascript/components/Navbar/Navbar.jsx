import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useLoginStatus from '../../hooks/useLoginStatus';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const window = useWindowDimensions();
  const xsWindowWidth = 576;

  useEffect(() => { useLoginStatus(setIsLoggedIn); }, []);

  if (window.width > xsWindowWidth) {
    return <DesktopNav isLoggedIn={isLoggedIn} />;
  }
  return <MobileNav isLoggedIn={isLoggedIn} />;
}

export default Navbar;
