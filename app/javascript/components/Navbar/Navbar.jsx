import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import useWindowDimensions from './useWindowDimensions';

function Navbar() {
  const window = useWindowDimensions();

  if (window.width > 576) {
    return <DesktopNav />;
  }
  return <MobileNav />;
}

export default Navbar;
