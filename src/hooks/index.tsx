import React from 'react';

import { AuthProvider } from './auth';
import { PlayerProvider } from './players';
import { TeamsProvider } from './teams';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PlayerProvider>
      <TeamsProvider>{children}</TeamsProvider>
    </PlayerProvider>
  </AuthProvider>
);

export default AppProvider;
