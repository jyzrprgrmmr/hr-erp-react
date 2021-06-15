import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import PageTitle from 'src/components/layout/PageTitle';

interface indexProps{

}

const index: React.FC<indexProps> = () => {
    return (
    <>
        <PageTitle pageInfo={{icon: <SettingOutlined/> , title: 'Administration'}}/>
        <div className="m-4">
            Administration
        </div></>
    );
}

export default index;