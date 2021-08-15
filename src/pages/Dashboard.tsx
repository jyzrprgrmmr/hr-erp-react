import { HomeIcon } from '@primer/octicons-react';
import React from 'react';
import PageTitle from 'src/components/layout/PageTitle';

const Dashboard: React.FC = () => {
  console.log('Dashboard');

  return (
    <div className='relative'>
      <PageTitle pageInfo={{ icon: <HomeIcon />, title: 'Dashboard' }} />
      <div className='m-4'>Dashboard</div>
    </div>
  );
};

export default Dashboard;
