import React from 'react';
import useLoginStatus from '../../hooks/useLoginStatus';
import LogoutButton from '../Auth/LogoutButton';
import Registration from '../Auth/Registration';

export default function ProfilePage() {
  const isLoggedIn = useLoginStatus();
  return (
    <div>
      { isLoggedIn ? <LogoutButton /> : <Registration />}
    </div>
  );
}
