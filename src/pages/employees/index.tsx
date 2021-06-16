import { ApartmentOutlined, ExportOutlined, LeftOutlined, MailOutlined, PhoneOutlined, PlusCircleOutlined, RightOutlined, SearchOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Input, Select } from 'antd';
import React from 'react';
import PageTitle from 'src/components/layout/PageTitle';

interface indexProps{

}

const {Option} = Select;

const Index: React.FC<indexProps> = () => {

    const buttons = 
    <div className="flex gap-x-2">
        <Button type="default" className="bg-warning text-white border-warning"><ExportOutlined/> Export</Button>
        <Button type="default" className="bg-success text-white border-success"><PlusCircleOutlined/> Add</Button>
        <Button type="primary"><ApartmentOutlined/> Org. Chart</Button>
    </div>;

    const employeeCard = 
    <Card className="shadow-md" bodyStyle={{paddingLeft: '14px',paddingRight: '14px'}}>
        <div className="flex gap-x-2 items-center">
            <Avatar className="bg-primary h-10 w-10" icon={<UserOutlined className="h-10 w-10 grid text-2xl place-items-center"/>}/>
            <div>
                <h3 className="font-semibold text-primary text-lg">Joezer Cenabre</h3>
                <h3 className="text-primary text-sm">Pangalso</h3>
            </div>
        </div>

        <Divider className="bg-success my-2"/>

        <ul className="grid gap-y-2">
            <li className="flex items-center gap-x-3"><TeamOutlined /> Jane Doe</li>
            <li className="flex items-center gap-x-3"><PhoneOutlined /> 09123456789</li>
            <li className="flex items-center gap-x-3"><MailOutlined /> mail@mail.com</li>
        </ul>
    </Card>

    return (
    <>
        <PageTitle pageInfo={{icon: <TeamOutlined/> , title: 'Employees'}} extra={buttons}/>

        <div className="m-4"> 
            <div className="flex justify-between items-center">
                <div className="flex gap-x-2">
                    <Select placeholder="Company">
                        <Option value="1">Company 1</Option>
                        <Option value="2">Company 2</Option>
                        <Option value="3">Company 3</Option>
                    </Select>

                    <Select placeholder="Department">
                        <Option value="1">Department 1</Option>
                        <Option value="2">Department 2</Option>
                        <Option value="3">Department 3</Option>
                    </Select>

                    <Select placeholder="Sort by">
                        <Option value="1">Sort by 1</Option>
                        <Option value="2">Sort by 2</Option>
                    </Select>
                </div>
                <div>
                    <Input placeholder="Search employee..." suffix={<SearchOutlined className="text-gray-400"/>}/>
                </div>
            </div>
            <Divider className="bg-success my-4"/>

            <div className="flex items-center justify-between">
                <div className="flex gap-x-2">
                    {/* <Button type="primary" icon={<AppstoreOutlined/>}/>
                    <Button type="default" icon={<UnorderedListOutlined/>}/> */}
                </div>
                <div className="flex gap-x-2">
                    <Button type="default" icon={<LeftOutlined/>}/>
                    <Button type="primary" icon={<RightOutlined/>}/>
                </div>
            </div>

            <div className="my-4 grid grid-cols-4 gap-4">
                {employeeCard}
                {employeeCard}
                {employeeCard}
                {employeeCard}
                {employeeCard}
                {employeeCard}
                {employeeCard}
                {employeeCard}
            </div>
        </div>
    </>);
}

export default Index;