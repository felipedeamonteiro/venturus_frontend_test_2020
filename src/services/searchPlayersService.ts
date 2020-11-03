import api from './api';

export const fetchPlayersService = (params: any): any => api('players', params);
