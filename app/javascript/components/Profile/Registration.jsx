import React, { useState } from 'react';
import axios from 'axios';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import PasswordConfirmationInput from './PasswordConfirmation';

export default function Registration() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (event) => {
    const {
      email,
      password,
      passwordConfirmation,
    } = credentials;

    axios.post('http://localhost:3000/registrations', {
      user: {
        email,
        password,
        passwordConfirmation,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log('registration response', response);
    }).catch((error) => {
      console.log('registration error', error);
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="login-container">
      <div className="login-heading">
        <h1> Sign up! </h1>
      </div>
      <form onSubmit={handleSubmit} id="registration-form">
        <EmailInput onChangeHandler={handleChange} email={credentials.email} />
        <PasswordInput password={credentials.password} onChangeHandler={handleChange} />
        <PasswordConfirmationInput
          onChangeHandler={handleChange}
          passwordConfirmation={credentials.password_confirmation}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
