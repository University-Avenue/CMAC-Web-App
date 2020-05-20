import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage({ message }) {
  const errorMessage = message;
  if (!errorMessage) {
    return null;
  }
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
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
