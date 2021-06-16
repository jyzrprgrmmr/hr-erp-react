import { MailFilled, TeamOutlined } from '@ant-design/icons';
import { Card, Divider } from 'antd';
import React from 'react';
import { Text } from 'src/components/Text';
import './auth.css';
import SignIn from './form/SignIn';

const Login: React.FC = () => {
  return (
    <div className='relative grid w-screen h-screen grid-cols-12 overflow-hidden bg-primary'>
      <div className='relative flex flex-col items-center col-span-4 p-10 mt-20 shadow-xl bg-primary gap-y-5'>
        <div className='flex flex-col items-center justify-center w-full'>
          <Text className='font-bold text-white text-7xl'>LOGO</Text>
          <Text className='text-3xl font-semibold text-white'>
            COMPANY NAME
          </Text>
        </div>
        <Divider className='my-2 bg-warning' />
        <Text className='mt-12 text-xl font-medium text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
        <div className='absolute bottom-0 flex items-center justify-between w-full p-10 gap-x-5'>
          <Text className='flex items-center text-white text-md'>
            <TeamOutlined className='flex items-center justify-center h-7 w-7' />{' '}
            123456789
          </Text>
          <Text className='flex items-center text-white text-md'>
            <MailFilled className='flex items-center justify-center h-7 w-7' />{' '}
            name@mail.com
          </Text>
        </div>
      </div>
      <div className='relative grid col-span-8 login-bg place-items-center'>
        <Card className='w-5/12'>
          <div className='flex flex-col text-center'>
            <Text className='text-4xl font-bold text-primary'>LOGIN HERE</Text>
            <Text>Enter your credentials here...</Text>
          </div>
          <SignIn />
        </Card>
      </div>
    </div>
  );
};

export default Login;
