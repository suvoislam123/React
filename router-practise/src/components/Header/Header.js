import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <nav className='bg-indigo-300'>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> :<MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-200 w-full absolute md:static duration-500 ${open ? 'top-6' :'top-[-120px]' }`}>
                {/* <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link> */}
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                
            </ul>
        </nav>
    );
};
///Hamburger Icon for navbar
export default Navbar;
