import React from 'react';
import PropTypes from 'prop-types';

export default function PasswordInput({ password, onChangeHandler }) {
  return (
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={password}
      onChange={onChangeHandler}
      required
    />
  );
}

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
