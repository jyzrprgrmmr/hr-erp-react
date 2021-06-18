import { notification as AntNotification } from 'antd';
import { ReactNode } from 'react';

export const notification = (data: {
  icon: ReactNode;
  message: string;
  description: string;
}) => {
  const { icon, message, description } = data;

  AntNotification.open({
    icon,
    message,
    description,
  });
};
