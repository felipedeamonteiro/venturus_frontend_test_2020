import React from 'react';
import GlobalStyle from './styles/global';

import MyTeamsDashboard from './pages/MyTeamsDashboard';
import CreateTeam from './pages/CreateTeam';

const App: React.FC = () => (
  <>
    <CreateTeam />
    <GlobalStyle />
  </>
);

export default App;
