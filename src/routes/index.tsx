import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import MyTeamsDashboard from '../pages/MyTeamsDashboard';
import CreateTeam from '../pages/CreateTeam';
import EditTeam from '../pages/EditTeam';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/create_team" component={CreateTeam} isPrivate />
    <Route path="/edit_team" component={EditTeam} isPrivate />
    <Route path="/dashboard" component={MyTeamsDashboard} isPrivate />
  </Switch>
);

export default Routes;
