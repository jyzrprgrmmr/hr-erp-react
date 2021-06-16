import { TeamOutlined } from '@ant-design/icons';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { Button } from 'antd';
import React from 'react';
import PageTitle from 'src/components/layout/PageTitle';

const Employees: React.FC = () => {
  return (
    <>
      <PageTitle
        pageInfo={{ icon: <TeamOutlined />, title: 'Employees' }}
        extra={
          <Button
            className='text-xs'
            icon={<PlusOutlined />}
            type='dashed'
            size='small'
          >
            Add Employee
          </Button>
        }
      />
      <div className='m-4'>Employee List</div>
    </>
  );
};

export default Employees;
