import React from 'react';

export interface IActivePage {
  icon: JSX.Element;
  link: string;
  title: string;
}

interface PageTitleProps {
  pageInfo: Partial<IActivePage>;
  extra?: JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageInfo, extra }) => {
  return (
    <div className='flex items-center justify-between h-12 p-2 px-4 shadow-md bg-primary bg-opacity-10'>
      <div className='flex gap-x-2'>
        <div>{pageInfo.icon}</div>
        <div className='font-semibold'>{pageInfo.title}</div>
      </div>
      <div>{extra}</div>
    </div>
  );
};

export default PageTitle;
