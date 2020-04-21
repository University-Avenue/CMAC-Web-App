import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Navbar() {
  const window = useWindowDimensions();
  const xsWindowWidth = 576;

  if (window.width > xsWindowWidth) {
    return <DesktopNav />;
  }
  return <MobileNav />;
}

export default Navbar;
