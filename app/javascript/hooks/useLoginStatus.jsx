import axios from 'axios';

export default function useLoginStatus(setIsLoggedIn) {
  axios.get('http://localhost:3000/logged_in', { withCredentials: true })
    .then((response) => {
      setIsLoggedIn(response.data.logged_in);
    })
    .catch(setIsLoggedIn(false));
}
