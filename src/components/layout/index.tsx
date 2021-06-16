import BellFilled from '@ant-design/icons/BellFilled';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import { Avatar, Input, Layout as AntLayout, Menu } from 'antd';
import React, { useState } from 'react';
import Administration from 'src/pages/administration';
import Dashboard from 'src/pages/Dashboard';
import Employees from 'src/pages/employees';
import './layout.css';
import { IActivePage } from './PageTitle';

const { Header, Sider, Content } = AntLayout;

const Layout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleSider = (): void => {
    setCollapsed(!collapsed);
  };

  const menuConfig = [
    {
      icon: <HomeOutlined />,
      title: 'Dashboard',
    },
    {
      icon: <TeamOutlined />,
      title: 'Employees',
    },
    {
      icon: <SettingOutlined />,
      title: 'Administration',
    },
  ];

  const [activePage, setActivePage] = useState<IActivePage>(menuConfig[0]);

  const handleMenuItemClicked = (key: number) => {
    setActivePage(menuConfig[key]);
  };

  return (
    <AntLayout className='w-screen h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='grid w-full h-16 text-xl font-bold bg-white border-b-4 text-primary place-items-center border-success'>
          LOGO
        </div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          {menuConfig.map((item: IActivePage, i: number) => (
            <Menu.Item
              key={i + 1}
              icon={item.icon}
              className='p-0 m-0'
              onClick={() => handleMenuItemClicked(i)}
            >
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <AntLayout>
        <Header className='flex items-center justify-between px-4 bg-white border-b-4 border-success'>
          <div className='flex w-5/12 gap-x-10'>
            <div className='cursor-pointer trigger' onClick={toggleSider}>
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
        <Content>
          {activePage.title === 'Dashboard' && <Dashboard />}
          {activePage.title === 'Employees' && <Employees />}
          {activePage.title === 'Administration' && <Administration />}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
