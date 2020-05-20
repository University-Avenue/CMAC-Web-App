import React, { useState } from 'react';
import axios from 'axios';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ErrorMessage from './ErrorMessage';

export default function Login() {
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
      console.log(error.response.data.message);
      setCredentials({ ...credentials, errorMessage: error.response.data.message });
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="login-container">
      <ErrorMessage message={credentials.errorMessage} />
      <div className="login-heading">
        <h1> Login </h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} id="login-form">
          <EmailInput onChangeHandler={handleChange} email={credentials.email} />
          <PasswordInput password={credentials.password} onChangeHandler={handleChange} />
          <button type="submit" className="cmac-button">Login</button>
        </form>
        <a className="forgot-password-link cmac-link" href="/password_resets/new">Forgot Password?</a>
        <div className="sign-up-container">
          <h5 className="sign-up-item"> Not a member? </h5>
          <h6 className="sign-up-item">
            Visit our gym to become a member!
            <span>
              Don't know where we are? Check out
              <a href="\contact_us" className="cmac-link"> contact us</a>
            </span>
            .
          </h6>
        </div>
      </div>
    </div>
  );
}
