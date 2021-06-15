import React from 'react';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <div className='relative grid w-screen h-screen grid-cols-12 overflow-hidden bg-primary'>
      {children}
    </div>
  );
};

export default AuthLayout;
