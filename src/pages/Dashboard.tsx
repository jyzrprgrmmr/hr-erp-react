import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import PageTitle from 'src/components/layout/PageTitle';

const Dashboard: React.FC = () => {
  console.log('Dashboard');

  return (
    <>
      <PageTitle pageInfo={{ icon: <HomeOutlined />, title: 'Dashboard' }} />
      <div className='m-4'>Dashboard</div>
    </>
  );
};

export default Dashboard;
