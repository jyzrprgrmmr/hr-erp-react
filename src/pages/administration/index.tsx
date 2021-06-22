import ProjectOutlined from '@ant-design/icons/ProjectOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import TagOutlined from '@ant-design/icons/TagOutlined';
import Card from 'antd/lib/card';
import React, { useState } from 'react';
import PageTitle from 'src/components/layout/PageTitle';
import { Text } from 'src/components/Text';
import Business from './business';

const configurationTabs = [
  {
    icon: <ProjectOutlined />,
    title: 'Business',
  },
  {
    icon: <TagOutlined />,
    title: 'Payroll',
  },
  {
    icon: <SettingOutlined />,
    title: 'Preferences',
  },
];

const Administration: React.FC = () => {
  const [activeConfigTab, setActiveConfigTab] = useState<string>('Business');

  return (
    <>
      <PageTitle
        pageInfo={{ icon: <SettingOutlined />, title: 'Administration' }}
      />
      <div className='relative grid grid-cols-12 m-4 gap-x-4'>
        <Card
          className='sticky top-0 col-span-2 h-52'
          bodyStyle={{ padding: 0 }}
          title={<Text className='font-semibold text-primary'>CONFIGS</Text>}
          headStyle={{ borderBottom: '1px solid #33c175' }}
        >
          {configurationTabs.map((tab) => (
            <div
              className={`
                w-full p-3 border-primary text-primary hover:bg-success hover:bg-opacity-30 cursor-pointer
                transition-colors
                ${
                  activeConfigTab === tab.title &&
                  'font-semibold border-r-2 bg-success bg-opacity-30'
                }`}
              onClick={() => setActiveConfigTab(tab.title)}
            >
              {tab.icon} {tab.title}
            </div>
          ))}
        </Card>

        {activeConfigTab === 'Business' && <Business />}
      </div>
    </>
  );
};

export default Administration;
