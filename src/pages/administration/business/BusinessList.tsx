import { EditOutlined } from '@ant-design/icons';
import ProjectOutlined from '@ant-design/icons/ProjectOutlined';
import { Avatar, List } from 'antd';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import React from 'react';
import { Text } from '../../../components/Text';

interface BusinessListProps{
    setActiveBusinessConfig: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const BusinessList: React.FC<BusinessListProps> = ({setActiveBusinessConfig}) => {

    const list = [
        {businessName: 'Business1'},
        {businessName: 'Business2'},
        {businessName: 'Business2'},
        {businessName: 'Business3'},
    ]

    return (
         <Card 
        className="col-span-10" 
        title={
          <Text className="font-semibold text-primary">
            <ProjectOutlined/> BUSINESS LIST
          </Text>
        }>
          <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item,i) => (
            <List.Item
                actions={[<Button type="primary" onClick={()=>setActiveBusinessConfig(i+1)} icon={<EditOutlined/>}>Configure</Button>]}
            >
                <List.Item.Meta
                    avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<Text className="font-semibold">{item.businessName}</Text>}
                    description="Business Type"
                />
            </List.Item>
            )}
        />
        </Card>
    );
}

export default BusinessList;