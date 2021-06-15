import { LockFilled, MailFilled, TeamOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Form, Input } from 'antd';
import React from 'react';
import './auth.css';

const Login: React.FC = () => {
  return (
    <div className='relative grid w-screen h-screen grid-cols-12 overflow-hidden bg-primary'>
      <div className='relative flex flex-col items-center col-span-4 p-10 mt-20 shadow-xl bg-primary gap-y-5'>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='font-bold text-white text-7xl'>LOGO</div>
          <div className='text-3xl font-semibold text-white'>COMPANY NAME</div>
        </div>
        <Divider className='my-2 bg-warning' />
        <p className='mt-12 text-xl font-medium text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <div className='absolute bottom-0 flex items-center justify-between w-full p-10 gap-x-5'>
          <div className='flex items-center text-white text-md'>
            <TeamOutlined className='flex items-center justify-center h-7 w-7' />{' '}
            123456789
          </div>

          <div className='flex items-center text-white text-md'>
            <MailFilled className='flex items-center justify-center h-7 w-7' />{' '}
            name@mail.com
          </div>
        </div>
      </div>
      <div className='relative grid col-span-8 login-bg place-items-center'>
        <Card className='w-5/12 text-center'>
          <div className='text-4xl font-bold text-primary'>LOGIN HERE</div>
          <div>Enter your credentials here...</div>

          <Form>
          <div className='flex flex-col my-5 gap-y-4 text-left'>
            <Input
              size='large'
              placeholder='Username or Email'
              prefix={<MailFilled className='text-gray-300' />}
            />
            
            <Input.Password
              size='large'
              placeholder='Password'
              prefix={<LockFilled className='text-gray-300' />}
            />
          </div>

          <Button htmlType="submit" type='primary' className='w-full h-10 text-xl font-semibold'>
            LOGIN
          </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
