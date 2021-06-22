import BellFilled from '@ant-design/icons/BellFilled';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import { Avatar, Input, Layout as AntLayout, Menu } from 'antd';
import { Location } from 'history';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './layout.css';
import { IActivePage } from './PageTitle';

const { Header, Sider, Content } = AntLayout;

const menuList = [
  {
    icon: <HomeOutlined />,
    link: '/dashboard',
    title: 'Dashboard',
  },
  {
    icon: <TeamOutlined />,
    link: '/employees',
    title: 'Employees',
  },
  {
    icon: <SettingOutlined />,
    link: '/administration',
    title: 'Administration',
  },
];

export const pathLocation = (location: Location<unknown>) => {
  const pathLocation = location.pathname
    .split('/')
    .filter((path) => path !== '');

  return `/${pathLocation[0]}`;
};

const Layout: React.FC = ({ children }) => {
  const { location } = useHistory();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <AntLayout className='fixed w-screen h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='grid w-full h-16 text-xl font-bold bg-white border-b-4 text-primary place-items-center border-success'>
          LOGO
        </div>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={[pathLocation(location)]}
          defaultSelectedKeys={[pathLocation(location)]}
        >
          {menuList.map((item: IActivePage) => (
            <Menu.Item className='p-0 m-0' key={item.link} icon={item.icon}>
              <NavLink to={item.link} />
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <AntLayout>
        <Header className='flex items-center justify-between px-4 bg-white border-b-4 border-success'>
          <div className='flex w-5/12 gap-x-10'>
            <div
              className='cursor-pointer trigger'
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <MenuUnfoldOutlined className='text-base' />
              ) : (
                <MenuFoldOutlined className='text-base' />
              )}
            </div>
            <div className='flex-1'>
              <Input placeholder='Enter keyword' prefix={<SearchOutlined />} />
            </div>
          </div>
          <div className='flex gap-x-4'>
            <Avatar
              icon={
                <BellFilled className='transition-all cursor-pointer text-primary hover:text-white' />
              }
            />
            <Avatar
              icon={
                <UserOutlined className='transition-all cursor-pointer text-primary hover:text-white' />
              }
            />
          </div>
        </Header>
        <Content className='overflow-y-auto'>{children}</Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
