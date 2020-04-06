import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import useWindowDimensions from './useWindowDimensions';

function Navbar() {
  const { height, width } = useWindowDimensions();

  if (width > 992) {
    return <DesktopNav />;
  }
  return <MobileNav />;
}

export default Navbar;
