import {
  BellIcon,
  GearIcon,
  HomeIcon,
  PeopleIcon,
  PersonIcon,
  ThreeBarsIcon,
  TriangleDownIcon,
} from '@primer/octicons-react';
import { Layout as AntLayout, Menu } from 'antd';
import { Location } from 'history';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './layout.css';
import { IActivePage } from './PageTitle';
const { Header, Sider, Content } = AntLayout;

const menuList = [
  {
    icon: <HomeIcon />,
    link: '/dashboard',
    title: 'Dashboard',
  },
  {
    icon: <PeopleIcon />,
    link: '/employees',
    title: 'Employees',
  },
  {
    icon: <GearIcon />,
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
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className='shadow-lg'
      >
        <div className='grid bg-white w-full h-16 text-xl font-bold text-primary place-items-center border-success'>
          LOGO
        </div>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={[pathLocation(location)]}
          defaultSelectedKeys={[pathLocation(location)]}
        >
          {menuList.map((item: IActivePage) => (
            <Menu.Item className='p-0 m-0' key={item.link} title={item.title}>
              <NavLink
                to={item.link}
                className='flex items-center gap-x-2 h-full'
              >
                {item.icon}
                <span className={`${collapsed && 'hidden'}`}>{item.title}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <AntLayout>
        <Header className='flex items-center justify-between px-4 bg-white'>
          <div className='flex w-5/12 gap-x-10'>
            <div
              className='cursor-pointer trigger flex items-center'
              onClick={() => setCollapsed(!collapsed)}
            >
              <ThreeBarsIcon />
            </div>
          </div>
          <div className='flex gap-x-4 items-center'>
            <div className='flex items-center hover:text-gray-500 cursor-pointer'>
              <BellIcon />
            </div>
            <div className='flex items-center gap-x-1 hover:text-gray-500 cursor-pointer'>
              <PersonIcon />
              <div className='flex items-center'>
                <>John Doe</>
                <TriangleDownIcon />
              </div>
            </div>
          </div>
        </Header>
        <Content className='overflow-y-auto'>{children}</Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
