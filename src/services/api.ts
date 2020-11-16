import axios from 'axios';

/**
 * Here I let my x-rapidapi-key so anyone can use without creating an account,
 * But I know that the best to do is to store this kind of value in an Enviroment
 * Variable
 */

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '05dc654aaaf29dd835b5ede3139641d3',
  },
});

export default api;
