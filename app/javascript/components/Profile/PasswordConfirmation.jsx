import React from 'react';
import PropTypes from 'prop-types';

export default function PasswordConfirmationInput({ passwordConfirmation, onChangeHandler }) {
  return (
    <input
      type="password"
      name="password_confirmation"
      placeholder="Password confirmation"
      value={passwordConfirmation}
      onChange={onChangeHandler}
      required
    />
  );
}

PasswordConfirmationInput.propTypes = {
  passwordConfirmation: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
