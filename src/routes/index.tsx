import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MyTeamsDashboard from '../pages/MyTeamsDashboard';
import CreateTeam from '../pages/CreateTeam';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" component={MyTeamsDashboard} />
    <Route path="/create_team" component={CreateTeam} />

    {/* <Route path="/" component={SignIn} /> */}
  </Switch>
);

export default Routes;
