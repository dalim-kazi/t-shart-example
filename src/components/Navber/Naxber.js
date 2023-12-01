import React from 'react';
import { NavLink } from 'react-router-dom';
const Naxber = ({ route }) => {
    const {name,path}=route
    return (
        <div className='mr-10 text-white'>
            <NavLink to={path}>{ name}</NavLink> 
        </div>
    );
};

export default Naxber;