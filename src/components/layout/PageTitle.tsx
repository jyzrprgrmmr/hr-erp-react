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
    <div className='sticky top-0 z-50 flex items-center justify-between bg-gray-200 h-11 py-2 px-4 shadow-md border-t border-b  border-success mb-8'>
      <div className='flex gap-x-2 items-center'>
        {pageInfo.icon}
        <div className='font-semibold'>{pageInfo.title}</div>
      </div>
      <div>{extra}</div>
    </div>
  );
};

export default PageTitle;
