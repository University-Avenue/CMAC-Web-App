import React from 'react';
import axios from 'axios';

export default function LogoutButton() {
  const logout = () => {
    axios.delete('http://localhost:3000/logout', { withCredentials: true })
      .then((response) => { console.log(response); })
      .catch((error) => { console.log(error); });
  };
  return (

    <a className="nav-link" href="/" onSubmit={logout}>
      <i className="fas fa-sign-in-alt" />
    </a>
  );
}
