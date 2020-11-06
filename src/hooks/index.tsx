import React from 'react';

import { AuthProvider } from './auth';
import { PlayerProvider } from './players';
import { TeamsProvider } from './teams';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <TeamsProvider>
      <PlayerProvider>{children}</PlayerProvider>
    </TeamsProvider>
  </AuthProvider>
);

export default AppProvider;
