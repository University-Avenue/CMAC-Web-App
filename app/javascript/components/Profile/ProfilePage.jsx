import React from 'react';
import useLoginStatus from '../../hooks/useLoginStatus';
import LogoutButton from '../Auth/LogoutButton';
import Registration from './Registration';
import Login from './Login';

export default function ProfilePage() {
  const isLoggedIn = useLoginStatus();
  console.log("isLoggedIn", isLoggedIn);

  return (
    <div>
      <Registration />
      <Login />
    </div>
  );
}
