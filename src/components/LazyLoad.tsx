import SyncOutlined from '@ant-design/icons/SyncOutlined';
import classnames from 'classnames';
import React from 'react';

export interface LazyLoadProps {
  fullHeight?: boolean;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ fullHeight }) => {
  const lazyLoaderClassNames = classnames('flex items-center justify-center', {
    'h-full': fullHeight,
  });

  return (
    <div className={lazyLoaderClassNames}>
      <SyncOutlined spin />
    </div>
  );
};

export default LazyLoad;
