import React from 'react';
import Layout from 'src/components/layout';
import { AuthProvider } from 'src/context/authContext';
import Routes from './Routes';

// Entry point

const Pages: React.FC = () => {
  return (
    <AuthProvider>
      <Layout>
        <Routes />
      </Layout>
    </AuthProvider>
  );
};

export default Pages;
