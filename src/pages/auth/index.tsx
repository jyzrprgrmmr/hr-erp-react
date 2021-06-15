import { Button, Card, Divider, Input } from 'antd';
import React from 'react';
import { LockFilled, MailFilled, TeamOutlined} from '@ant-design/icons';
<<<<<<< HEAD
import './Login.css';
=======
>>>>>>> 4460ffae7fb718f5216b7d040d81960761983a74

const Login: React.FC = () => {
    return (
        <div className="w-screen h-screen relative overflow-hidden grid grid-cols-12 bg-primary">
            <div className="col-span-4 flex mt-20 items-center bg-primary p-10 flex-col gap-y-5 shadow-xl relative">
                <div className="w-full flex justify-center flex-col items-center">     
                    <div className="text-7xl font-bold text-white">LOGO</div>
                    <div className="text-3xl font-semibold text-white">COMPANY NAME</div>
                </div>
                <Divider className="my-2 bg-warning"/>
                <p className="text-white text-xl font-medium mt-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>

                <div className="absolute w-full p-10 bottom-0 flex items-center gap-x-5 justify-between">
                    <div className="flex items-center text-md text-white">
                        <TeamOutlined className="h-7 w-7 flex items-center justify-center"/> 123456789
                    </div>

                    <div className="flex items-center text-md text-white">
                        <MailFilled className="h-7 w-7 flex items-center justify-center" /> name@mail.com
                    </div>
                </div>
            </div>
            <div className="col-span-8 login-bg relative grid place-items-center">
                <Card className="w-5/12 text-center">
                    <div className="text-4xl font-bold text-primary">LOGIN HERE</div>
                    <div>Enter your credentials here...</div>
                    
                    <div className="my-5 flex gap-y-4 flex-col">
                        <Input size="large" placeholder="Username or Email" prefix={<MailFilled className="text-gray-300"/>} />
                        <Input.Password size="large" placeholder="Password" prefix={<LockFilled className="text-gray-300"/>} />
                    </div>

                    <Button type="primary" className="bg-warning w-full h-10 font-semibold text-xl">
                        LOGIN
                    </Button>
                </Card>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 4460ffae7fb718f5216b7d040d81960761983a74
