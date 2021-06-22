import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pages from './pages';
import Login from './pages/auth';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/auth/login' component={Login} />
      <Route path='/' component={Pages} />
    </Switch>
  );
};

export default App;
