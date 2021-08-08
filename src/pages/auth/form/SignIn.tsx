import LockFilled from '@ant-design/icons/LockFilled';
import MailFilled from '@ant-design/icons/MailFilled';
import { Button, Form, Input } from 'antd';
import React, { Fragment, useState } from 'react';
import { useMutation } from 'react-query';
import Notification from 'src/components/tailwindui/notification';
import { HttpError } from 'src/services/http-service';
import { AuthAPI } from '../api/auth';
import { LoginDTO } from '../interface/login-dto';

const SignIn: React.FC = () => {
  const [show, setShow] = useState(false);

  const login = useMutation(AuthAPI.login, {
    onSuccess: (data) => console.log(data),
    onError: (error: HttpError) => setShow(true),
  });

  return (
    <Fragment>
      <Notification show={show} setShow={setShow} />
      <Form<LoginDTO>
        className='my-5'
        name='sign-in-form'
        onFinish={async (values) => {
          await login.mutateAsync(values);
        }}
        layout='vertical'
      >
        <Form.Item
          name='userName'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            placeholder='Username or Email'
            prefix={<MailFilled className='text-gray-300' />}
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            placeholder='Password'
            prefix={<LockFilled className='text-gray-300' />}
          />
        </Form.Item>
        <Form.Item className='mt-4'>
          <Button
            className='w-full font-semibold'
            loading={login.isLoading}
            type='primary'
            htmlType='submit'
          >
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default SignIn;
