import { notification as AntNotification } from 'antd';
import React from 'react';

export const notification = (data: {
  icon: React.ReactNode;
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
