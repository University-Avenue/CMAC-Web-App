import React from 'react';
import useLoginStatus from '../../hooks/useLoginStatus';

export default function ProfilePage() {
  const isLoggedIn = useLoginStatus();

  return (
    <div>
      <h1>
        The user is
        {' '}
        <b>
          {' '}
          {isLoggedIn ? 'currently' : 'not'}
          {' '}
        </b>
        {' '}
        logged in.
      </h1>
    </div>
  );
}
