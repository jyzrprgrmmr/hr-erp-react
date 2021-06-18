import React, { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import LazyLoad from 'src/components/LazyLoad';
import ProtectedRoute from 'src/components/ProtectedRoute';

const Dashboard = lazy(() => import('./Dashboard'));
const Employees = lazy(() => import('./employees'));
const Administration = lazy(() => import('./administration'));
const Result = lazy(() => import('src/components/Result'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<LazyLoad fullHeight />}>
      <Switch>
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/employees' component={Employees} />
        <ProtectedRoute path='/administration' component={Administration} />
        <ProtectedRoute
          path='/not-found'
          component={() => (
            <Result
              status='404'
              title='Not Found'
              subTitle='Page does not exists!'
              heightScreen
            />
          )}
        />
        <Redirect from='/' exact to='/dashboard' />
        <Redirect to='/not-found' />
      </Switch>
    </Suspense>
  );
};

export default Routes;
