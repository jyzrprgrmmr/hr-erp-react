import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import UnorderedListOutlined from '@ant-design/icons/UnorderedListOutlined';
import {
  DesktopDownloadIcon,
  DeviceMobileIcon,
  MentionIcon,
  PeopleIcon,
  PersonAddIcon,
  PersonIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
  WorkflowIcon,
} from '@primer/octicons-react';
import { Avatar, Button, Card, Divider, Input, Select } from 'antd';
import React from 'react';
import PageTitle from 'src/components/layout/PageTitle';
import './employees.css';
const { Option } = Select;

const Employees: React.FC = () => {
  const buttons = (
    <div className='flex gap-x-2'>
      <Button
        className='flex items-center gap-x-1'
        icon={<PersonAddIcon />}
        type='dashed'
      >
        Add Employee
      </Button>
      <Button
        className='flex items-center gap-x-1'
        icon={<DesktopDownloadIcon />}
        type='primary'
      >
        Export
      </Button>
      <Button
        className='flex items-center gap-x-1'
        icon={<WorkflowIcon />}
        type='primary'
      >
        Org. Chart
      </Button>
    </div>
  );

  const employeeCard = (
    <Card
      className='shadow-md overflow-hidden'
      hoverable
      bodyStyle={{ padding: 0 }}
    >
      <div className='rounded-t-sm relative z-10 bg-primary employee-card'>
        <div className='flex items-center gap-x-2 p-4'>
          <Avatar
            className='w-10 h-10 flex items-center justify-center'
            icon={<PersonIcon className='text-primary' />}
          />
          <div className='flex-1 border-l pl-2 border-success'>
            <h3 className='text-md font-semibold text-white'>Joezer Cenabre</h3>
            <div className='text-xs text-white'>Business Analyst</div>
          </div>
        </div>
      </div>

      <ul className='grid gap-y-2 p-4'>
        <li className='flex items-center gap-x-3'>
          <PeopleIcon className='text-success' /> Jane Doe
        </li>
        <li className='flex items-center gap-x-3'>
          <DeviceMobileIcon className='text-success' /> 09123456789
        </li>
        <li className='flex items-center gap-x-3'>
          <MentionIcon className='text-success' /> mail@mail.com
        </li>
      </ul>
    </Card>
  );

  return (
    <div className='relative'>
      <PageTitle
        pageInfo={{ icon: <PeopleIcon />, title: 'Employees' }}
        extra={buttons}
      />

      <div className='m-4'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-x-2'>
            <Select placeholder='Company'>
              <Option value='1'>Company 1</Option>
              <Option value='2'>Company 2</Option>
              <Option value='3'>Company 3</Option>
            </Select>

            <Select placeholder='Department'>
              <Option value='1'>Department 1</Option>
              <Option value='2'>Department 2</Option>
              <Option value='3'>Department 3</Option>
            </Select>

            <Select placeholder='Sort by'>
              <Option value='1'>Sort by 1</Option>
              <Option value='2'>Sort by 2</Option>
            </Select>
          </div>
          <div>
            <Input
              placeholder='Search employee...'
              suffix={<SearchOutlined className='text-gray-400' />}
            />
          </div>
        </div>
        <Divider className='my-4 bg-success' />

        <div className='flex items-center justify-between'>
          <div className='flex gap-x-2'>
            <Button type='primary' icon={<AppstoreOutlined />} />
            <Button type='default' icon={<UnorderedListOutlined />} />
          </div>
          <div className='flex gap-x-2'>
            <Button
              type='default'
              className='flex items-center justify-center'
              icon={<TriangleLeftIcon />}
            />
            <Button
              type='primary'
              className='flex items-center justify-center'
              icon={<TriangleRightIcon />}
            />
          </div>
        </div>

        <div className='grid grid-cols-4 gap-4 my-4'>
          {employeeCard}
          {employeeCard}
          {employeeCard}
          {employeeCard}
          {employeeCard}
          {employeeCard}
          {employeeCard}
          {employeeCard}
        </div>
      </div>
    </div>
  );
};

export default Employees;
