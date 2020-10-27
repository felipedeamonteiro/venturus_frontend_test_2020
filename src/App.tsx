import React from 'react';
import GlobalStyle from './styles/global';

import MyTeamsDashboard from './pages/MyTeamsDashboard';

const App: React.FC = () => (
  <>
    <MyTeamsDashboard />
    <GlobalStyle />
  </>
);

export default App;
