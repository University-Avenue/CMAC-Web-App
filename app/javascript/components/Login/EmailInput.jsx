import React from 'react';
import PropTypes from 'prop-types';

export default function EmailInput({ email, onChangeHandler }) {
  return (
    <div className="input-wrapper">
      <input
        className="input-text"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChangeHandler}
        required
      />
      <span className="focus-input" />
    </div>
  );
}

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
