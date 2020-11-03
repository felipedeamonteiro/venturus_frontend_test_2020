import axios, { AxiosInstance } from 'axios';

export type Methods =
  | 'get'
  | 'put'
  | 'post'
  | 'head'
  | 'delete'
  | 'patch'
  | 'options';

interface FetchOptions {
  method?: Methods;
  data?: any;
  params?: Record<string, any>;
}

const venturusFetch: AxiosInstance = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '05dc654aaaf29dd835b5ede3139641d3',
  },
});

const defaultOptions: FetchOptions = { method: 'get' };

const api = (url: string, { method, data, params } = defaultOptions): any =>
  venturusFetch({
    method,
    data,
    url,
    params,
  }).catch((err: Error) => {
    throw err;
  });

export default api;
