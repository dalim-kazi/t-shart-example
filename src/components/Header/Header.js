import React, { useState } from 'react';
import Naxber from '../Navber/Naxber';
import logo from '../../images/Logo.svg'
import {Bars4Icon,XMarkIcon} from '@heroicons/react/24/solid'
const routes = [
    { id: 1, name: 'Home', path: "/" },
    { id: 1, name: 'Orders', path: "/orders" },
    { id: 1, name: 'About', path: "/about" }
 ]
const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <nav className='bg-black'>
            <div onClick={()=>setOpen(!open)} className="h-9 w-9 text-blue-500 md:hidden">
                {
                    open ?<XMarkIcon></XMarkIcon>:<Bars4Icon></Bars4Icon>
                }
             </div>
            <ul className={`p-3 md:flex md:justify-between w-full bg-black items-center absolute duration-500 ease-out md:static 
        ${open?'top-9' : 'top-[-180px]'}`}>
                <img src={logo} alt="" />
            <div className='md:flex md:mr-6'>
            {
                routes.map(route => <Naxber key={route.id}
                route={route}
                ></Naxber>)
            }
            </div>
            </ul>
         </nav>
    );
};

export default Header;