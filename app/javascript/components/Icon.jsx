import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { icon, size } = props;

  let actualIconSize;

  switch (size) {
    case 'xs':
      actualIconSize = 'fa-sm';
      break;
    case 'sm':
      actualIconSize = 'fa-lg';
      break;
    default:
    case 'md':
      actualIconSize = 'fa-2x';
      break;
    case 'lg':
      actualIconSize = 'fa-3x';
      break;
  }

  return (
    <>
      <i className={`${icon} ${actualIconSize}`} />
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: '',
};

export default Icon;
