import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default function EventCreationFrom(props) {
  const { info, handleClose } = props;
  console.log(info);
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */
    <div className="event-creation-form-overlay" role="button" onClick={handleClose}>
      <div className="event-creation-form">
        
      </div>
    </div>
  );
}

EventCreationFrom.propTypes = {
  info: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
