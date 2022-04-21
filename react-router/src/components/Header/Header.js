import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav>
                {/* <Link to='/'>Home</Link>
                <Link to='/users'>User</Link>
                <Link to='/contract'>Contract</Link>
                <Link to='/shop'>Shop</Link> */}
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/users'>User</CustomLink>
                <CustomLink to='/contract'>Contract</CustomLink>
                <CustomLink to='/posts'>Posts</CustomLink>
                <CustomLink to='/shop'>Shop</CustomLink>

            </nav>
        </div>
    );
};

export default Header;