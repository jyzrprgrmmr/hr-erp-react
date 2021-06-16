import React, { useState } from 'react';
import './business.css';
import BusinessConfig from './BusinessConfig';
import BusinessList from './BusinessList';

const Business: React.FC = () => {
    const [activeBusinessConfig,setActiveBusinessConfig]=useState<number>();

    return (
        <>
            {!activeBusinessConfig ?
                <BusinessList setActiveBusinessConfig={setActiveBusinessConfig}/> 
                : 
                <BusinessConfig setActiveBusinessConfig={setActiveBusinessConfig}/>
            }
        </>
    );
}

export default Business;