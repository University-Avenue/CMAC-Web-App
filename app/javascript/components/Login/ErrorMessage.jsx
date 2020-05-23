import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage({ message }) {
  const errorMessage = message;
  let visibilityState = 'hidden';

  if (errorMessage) {
    visibilityState = 'visible';
  }
  return (
    <div className={`alert alert-danger alert-dismissible alert-${visibilityState}`} role="alert">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span
          aria-hidden="true"
        >
          &times;
        </span>
      </button>
      {errorMessage}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
