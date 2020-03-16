import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const AnchorWithIcon = (props) => {
  const {
    icon,
    iconSize,
    href,
    title,
  } = props;

  return (
    <>
      <a className="anchor-with-icon" href={href}>
        <Icon icon={icon} size={iconSize} />
        <h5>{title}</h5>
      </a>
    </>
  );
};

AnchorWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
};

AnchorWithIcon.defaultProps = {
  iconSize: '',
};

export default AnchorWithIcon;
