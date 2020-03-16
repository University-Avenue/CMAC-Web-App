import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const IconButton = (props) => {
  const {
    icon,
    iconSize,
    id,
    label,
  } = props;

  return (
    <>
      <button
        className="icon-button"
        id={id}
        type="button"
        aria-label={label}
      >
        <Icon icon={icon} size={iconSize} />
      </button>
    </>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
};

IconButton.defaultProps = {
  id: '',
  iconSize: '',
};

export default IconButton;
