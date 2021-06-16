import SettingOutlined from '@ant-design/icons/SettingOutlined';
import React from 'react';
import PageTitle from 'src/components/layout/PageTitle';

const Administration: React.FC = () => {
  return (
    <>
      <PageTitle
        pageInfo={{ icon: <SettingOutlined />, title: 'Administration' }}
      />
      <div className='m-4'>Administration</div>
    </>
  );
};

export default Administration;
