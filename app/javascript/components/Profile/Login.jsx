import React, { useState } from 'react';
import axios from 'axios';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    const {
      email,
      password,
    } = credentials;

    axios.post('http://localhost:3000/login', {
      user: {
        email,
        password,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log('login response', response);
    }).catch((error) => {
      console.log('login error', error);
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="profile-container">
      <div className="profile-heading">
        <h1> Login </h1>
      </div>
      <form onSubmit={handleSubmit} id="login-form">
        <EmailInput onChangeHandler={handleChange} email={credentials.email} />
        <PasswordInput password={credentials.password} onChangeHandler={handleChange} />
        <button type="submit">Login</button>
      </form>
      <div className="sign-up-container">
        <h4> Not a member? </h4>
        <a href="/profile/sign-up"> Sign up! </a>
      </div>
    </div>
  );
}
