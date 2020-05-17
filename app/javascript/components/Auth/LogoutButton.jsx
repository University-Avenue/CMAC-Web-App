import React from 'react';
import axios from 'axios';

export default function LogoutButton() {
  const logout = () => {
    axios.delete('http://localhost:3000/logout', { withCredentials: true })
      .then((response) => { console.log(response); })
      .catch((error) => { console.log(error); });
  };
  return (
    <button type="submit" className="logout-button" onClick={logout}>Log Out</button>
  );
}
