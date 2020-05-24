import React from 'react';
import PropTypes from 'prop-types';

export default function PasswordConfirmationInput({ passwordConfirmation, onChangeHandler }) {
  return (
    <div className="input-wrapper">
      <input
        className="input-text"
        type="password"
        name="passwordConfirmation"
        placeholder="Password confirmation"
        value={passwordConfirmation}
        onChange={onChangeHandler}
        required
      />
      <span className="focus-input" />
    </div>
  );
}

PasswordConfirmationInput.propTypes = {
  passwordConfirmation: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
