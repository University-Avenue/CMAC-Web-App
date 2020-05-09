import React, { useState } from 'react';
import axios from 'axios';

export default function Registration(props) {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={credentials.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
