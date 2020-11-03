import api from './api';

export const fetchTeamsService = (params: any): any =>
  api(`teams?${params.name}`, params);
