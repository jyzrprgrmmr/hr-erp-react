import React from 'react';
import { Route } from 'react-router-dom';

export interface ProtectedRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (true) {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: '/auth/login',
        //         state: { from: props.location },
        //       }}
        //     />
        //   );
        // }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
