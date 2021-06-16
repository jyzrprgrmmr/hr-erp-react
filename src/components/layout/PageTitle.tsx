import React from 'react';
 
export interface IActivePage{
    icon: JSX.Element;
    title: string;
}

interface PageTitleProps{
 pageInfo: IActivePage;
 extra?:JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({pageInfo,extra}) => {
    return (
        <div className="flex justify-between px-4 p-2 bg-primary bg-opacity-10 shadow-md items-center">
            <div className="flex gap-x-2">
                <div>{pageInfo.icon}</div>
                <div className="font-semibold">{pageInfo.title}</div>
            </div>
            <div>
                {extra}
            </div>
        </div>
        
    );
}

export default PageTitle;