import React from 'react';
import Login from './Login';
import Registration from './Registration';
import PasswordReset from './PasswordReset';

export default function LoginPage() {
  return (
    <div>
      <Login />
      <Registration />
      <PasswordReset />
    </div>
  );
}
