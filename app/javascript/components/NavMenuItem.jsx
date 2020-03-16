import React from 'react';
import PropTypes from 'prop-types';
import AnchorWithIcon from './AnchorWithIcon';

const NavMenuItem = (props) => {
  const { icon, title, href } = props;
  return (
    <>
      <li className="nav-menu-item">
        <AnchorWithIcon icon={icon} iconSize="sm" href={href} title={title} />
      </li>
    </>
  );
};

NavMenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavMenuItem;
