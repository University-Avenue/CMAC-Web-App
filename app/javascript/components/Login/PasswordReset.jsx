import React, { useState } from 'react';
import axios from 'axios';
import EmailInput from './EmailInput';

export default function PasswordReset() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    axios.post('/password_resets', { email })
      .then(() => { console.log('Email sent'); })
      .catch((error) => { console.log(error); });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <EmailInput onChangeHandler={handleChange} email={email} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
