import { TeamOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import PageTitle from 'src/components/layout/PageTitle';

interface indexProps{

}

const Index: React.FC<indexProps> = () => {

    const buttons = 
    <>
    <Button type="primary">Add</Button>
    </>

    return (
    <>
        <PageTitle pageInfo={{icon: <TeamOutlined/> , title: 'Employees'}} extra={buttons}/>
        <div className="m-4">
            Employee List
        </div>
    </>);
}

export default Index;