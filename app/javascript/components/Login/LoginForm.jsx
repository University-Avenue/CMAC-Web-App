import React, { useState } from 'react';
import axios from 'axios';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ErrorMessage from './ErrorMessage';

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    errorMessage: '',
  });

  const handleSubmit = (event) => {
    const {
      email,
      password,
    } = credentials;

    axios.post('http://localhost:3000/login_user', {
      user: {
        email,
        password,
      },
    },
    { withCredentials: true }).then(() => {
      window.location.href = '/';
    }).catch((error) => {
      setCredentials({ ...credentials, errorMessage: error.response.data.message });
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="login-form-container">
      <ErrorMessage message={credentials.errorMessage} />
      <div className="login-heading">
        <h1>Login</h1>
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} id="login-form">
          <EmailInput onChangeHandler={handleChange} email={credentials.email} />
          <PasswordInput password={credentials.password} onChangeHandler={handleChange} />
          <div className="form-options">
            <label htmlFor="remember-me">
              <input type="checkbox" name="remember-me" id="remember-me" />
              Remember Me
            </label>
            <a className="forgot-password-link cmac-link" href="/password_resets/new">Forgot Password?</a>
          </div>
          <button type="submit" className="cmac-button login-button">Login</button>
        </form>
        <div className="sign-up-container">
          <h5 className="sign-up-item"> Not a member? </h5>
          <h6 className="sign-up-item" id="sign-up-container-heading">
            Visit our gym to become a member!
            <span>
              Don't know where we are? Check out
              <a href="\contact_us" className="cmac-link"> contact us</a>
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}
