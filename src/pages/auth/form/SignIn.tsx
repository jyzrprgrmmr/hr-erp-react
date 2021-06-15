import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import LockFilled from '@ant-design/icons/LockFilled';
import MailFilled from '@ant-design/icons/MailFilled';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useMutation } from 'react-query';
import { notification } from 'src/components/notification';
import { HttpError } from 'src/services/http-service';
import { AuthAPI, SignInDTO } from '../api/auth';

const SignIn: React.FC = () => {
  const login = useMutation(AuthAPI.login, {
    onSuccess: (data) => console.log(data),
    onError: (_: HttpError) =>
      notification({
        icon: <ExclamationCircleOutlined className='text-danger' />,
        message: '401 Unauthorized',
        description: 'Hoy wala kang karapatan!',
      }),
  });

  return (
    <Form
      className='my-5'
      name='sign-in-form'
      onFinish={async (values: SignInDTO) => {
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
          type='primary'
          htmlType='submit'
        >
          LOGIN
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
