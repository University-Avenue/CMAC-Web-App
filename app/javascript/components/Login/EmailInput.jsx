import React from 'react';
import PropTypes from 'prop-types';

export default function EmailInput({ email, onChangeHandler }) {
  return (
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={email}
      onChange={onChangeHandler}
      required
    />
  );
}

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
