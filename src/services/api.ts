import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '05dc654aaaf29dd835b5ede3139641d3',
  },
});

export default api;
