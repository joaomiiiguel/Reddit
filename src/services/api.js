import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.reddit.com/r/pics',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
