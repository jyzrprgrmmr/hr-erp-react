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
<<<<<<< HEAD
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
=======
        if (false) {
          return (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: { from: props.location },
              }}
            />
          );
        }
>>>>>>> 58dce223419c128e3f6dc2679f87f400c3454260
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
