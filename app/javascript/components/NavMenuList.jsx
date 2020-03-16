import React from 'react';
import PropTypes from 'prop-types';
import NavMenuItem from './NavMenuItem';

const NavMenuListComponent = (props) => {
  const { iconsList } = props;
  return (
    <>
      <ul className="nav-menu-list">
        { iconsList.map(([icon, title, href]) => (
          <NavMenuItem key={icon} icon={icon} title={title} href={href} />
        ))}
      </ul>
    </>
  );
};

NavMenuListComponent.propTypes = {
  iconsList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default NavMenuListComponent;
