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
import Administration from '../../pages/administration';
import Dashboard from '../../pages/Dashboard';
import Employees from '../../pages/employees';
import './layout.css';
import { IActivePage } from './PageTitle';

const { Header, Sider, Content } = AntLayout;

const PageLayout: React.FC = ({ children }) => {
  const [collapsed,setCollapsed] = useState<boolean>(false);
  const toggleSider = ():void =>{
    setCollapsed(!collapsed)
  }

  const menuConfig = [
    {
    icon: <HomeOutlined />,
    title: 'Dashboard'
    },
    {
    icon: <TeamOutlined />,
    title: 'Employees'
    },
    {
    icon: <SettingOutlined />,
    title: 'Administration'
    },
  ];
  
  const [activePage,setActivePage]= useState<IActivePage>(menuConfig[0]);


  const handleMenuItemClicked = (key:number)=>{
    setActivePage(menuConfig[key]);
  }
  
  return (
    <AntLayout className="h-screen w-screen fixed">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="text-primary font-bold text-xl grid place-items-center h-16 w-full bg-white border-b-4 border-success">
            LOGO
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menuConfig.map((item:IActivePage,i:number)=>
              <Menu.Item key={i+1} icon={item.icon} className="p-0 m-0" onClick={()=>handleMenuItemClicked(i)}>
                {item.title}
              </Menu.Item>
            )}
          </Menu>
        </Sider>
        <AntLayout>
          <Header className="bg-white px-4 border-b-4 border-success flex justify-between items-center">
            <div className="flex gap-x-10 w-5/12">
              <div className="trigger cursor-pointer" onClick={toggleSider}>
                {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }
              </div>
              <div className="flex-1" >
                <Input placeholder="Enter keyword" suffix={<SearchOutlined/>}/>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Avatar icon={<BellFilled className="text-primary cursor-pointer hover:text-white transition-all"/>}/>
              <Avatar icon={<UserOutlined className="text-primary cursor-pointer hover:text-white transition-all"/>}/>
            </div>
          </Header>
          <Content className="overflow-y-scroll">
            {activePage.title === "Dashboard" && <Dashboard/>}
            {activePage.title === "Employees" && <Employees/>}
            {activePage.title === "Administration" && <Administration/>}
          </Content>
        </AntLayout>
      </AntLayout>
  );
};

export default PageLayout;
