import { useState } from 'react';
import axios from 'axios';

export default function useLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  axios.get('http://localhost:3000/logged_in', { withCredentials: true })
    .then((response) => {
      console.log(response.data.logged_in);
      setIsLoggedIn(response.data.logged_in);
    })
    .catch((error) => console.log(error));

  return isLoggedIn;
}
