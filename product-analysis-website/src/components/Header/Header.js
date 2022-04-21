import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Header = () => {
    const [open,setOpen] = useState(false);
    return (
        <div>
            <nav className='bg-orange-700'>
                <div className="flex justify-between"><div onClick={()=>{setOpen(!open)}} className='w-8 h-8 md:hidden'>{open? <XIcon></XIcon>:<MenuIcon></MenuIcon>}</div><div className='mr-16 font-extrabold  text-white px-8 rounded-lg md:hidden'><p>Yamaha</p></div></div>
                
                 <ul className={`py-5 md:flex justify-center bg-opacity-60 bg-indigo-200 w-full absolute md:static duration-500 ${open ? 'top-8' :'top-[-160px]' }`} >
                    {/* active-link class design is kept into index.css */}
                    <li className='mx-6 md:font-bold'><NavLink className={({isActive})=> isActive ? 'active-link':''} to='/'>HOME</NavLink></li>
                    <li className='mx-6 md:font-bold'><NavLink className={({isActive})=> isActive ? 'active-link':''} to='/reviews'>REVIEWS</NavLink></li>
                    <li className='mx-6 md:font-bold'><NavLink className={({isActive})=> isActive ? 'active-link':''} to='/dashboard'>DASHBOARD</NavLink></li>
                    <li className='mx-6 md:font-bold'><NavLink className={({isActive})=> isActive ? 'active-link':''} to='/blogs'>BLOGS</NavLink></li>
                    <li className='mx-6 md:font-bold'><NavLink className={({isActive})=> isActive ? 'active-link':''} to='/about'>ABOUT</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;