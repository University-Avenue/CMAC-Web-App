import React from 'react';
import PropTypes from 'prop-types';

export default function PasswordInput({ password, onChangeHandler }) {
  return (
    <div className="input-wrapper">
      <input
        className="input-text"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onChangeHandler}
        required
      />
      <span className="focus-input" />
    </div>
  );
}

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
