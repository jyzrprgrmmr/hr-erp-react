import { notification as AntNotification } from 'antd';
import { ReactNode } from 'react';

export const notification = (data: {
  key?: string;
  icon: ReactNode;
  message: string;
  description: string;
}) => {
  const { key, icon, message, description } = data;

  AntNotification.open({
    key: key || 'updatable',
    icon,
    message,
    description,
  });
};
