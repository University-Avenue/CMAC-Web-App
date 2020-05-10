import axios from 'axios';

export default function useLoginStatus() {
  axios.get('http://localhost:3000/logged_in', { withCredentials: true })
    .then((response) => {
      console.log(response.data.logged_in);
      return response.data.logged_in;
    })
    .catch((error) => console.log(error));
}
