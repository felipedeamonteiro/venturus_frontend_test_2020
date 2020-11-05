import React from 'react';

import { AuthProvider } from './auth';
import { PlayerProvider } from './players';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PlayerProvider>{children}</PlayerProvider>
  </AuthProvider>
);

export default AppProvider;
