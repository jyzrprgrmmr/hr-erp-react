import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import ProjectOutlined from '@ant-design/icons/ProjectOutlined';
import SafetyOutlined from '@ant-design/icons/SafetyOutlined';
import SendOutlined from '@ant-design/icons/SendOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Tabs from 'antd/lib/tabs';
import Upload from 'antd/lib/upload';
import React from 'react';
import { Text } from 'src/components/Text';

interface BusinessConfigProps {
  setActiveBusinessConfig: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}

const { Option } = Select;
const { TabPane } = Tabs;

const BusinessConfig: React.FC<BusinessConfigProps> = ({
  setActiveBusinessConfig,
}) => {
  return (
    <Card
      className='col-span-10'
      bodyStyle={{ padding: 0 }}
      title={
        <div className='flex items-center justify-between'>
          <Text className='font-semibold text-primary'>
            <ProjectOutlined /> BUSINESS NAME CONFIG
          </Text>
          <Button
            type='link'
            size='small'
            onClick={() => setActiveBusinessConfig(undefined)}
            icon={<ArrowLeftOutlined />}
          >
            Go back to business list
          </Button>
        </div>
      }
    >
      <div className='grid grid-cols-12'>
        <div className='col-span-3 border-r border-success'>
          <div className='p-3 font-semibold bg-primary'>
            <Text className='text-white'>Business Information</Text>
          </div>
          <Form layout='vertical' className='p-4'>
            <Form.Item
              label={<Text className='font-medium'>Company Logo:</Text>}
            >
              <Upload
                name='avatar'
                className='business-logo-upload'
                listType='picture-card'
                showUploadList={false}
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              >
                <div className='flex flex-col items-center'>
                  <PlusOutlined className='text-3xl' />
                  <Text>Upload</Text>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item
              label={<Text className='font-medium'>Company Name:</Text>}
            >
              <Input placeholder='Company Name' />
            </Form.Item>

            <Form.Item
              label={<Text className='font-medium'>Business Type:</Text>}
            >
              <Select placeholder='Business Type'>
                <Option value='Option 1'>Option 1</Option>
              </Select>
            </Form.Item>

            <Button className='w-full' type='primary' icon={<SendOutlined />}>
              Save
            </Button>
          </Form>
        </div>

        <div className='col-span-9'>
          <Tabs defaultActiveKey='1'>
            <TabPane
              className='px-4'
              tab={
                <div className='flex items-center px-2 gap-x-2'>
                  <SafetyOutlined />
                  Business Contracts
                </div>
              }
              key='1'
            >
              Business Contracts Fields
            </TabPane>
            <TabPane
              className='px-4'
              tab={
                <div className='flex items-center px-2 gap-x-2'>
                  <CalendarOutlined />
                  Business Schedules
                </div>
              }
              key='2'
            >
              Business Schedules Fields
            </TabPane>
            <TabPane
              className='px-4'
              tab={
                <div className='flex items-center px-2 gap-x-2'>
                  <TeamOutlined />
                  Departments
                </div>
              }
              key='3'
            >
              Departments Fields
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Card>
  );
};

export default BusinessConfig;
