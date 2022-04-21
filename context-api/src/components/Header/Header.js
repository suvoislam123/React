import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to TShort menia</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/orderreview'>Order review</Link>
                <Link to='/about'>About</Link>

            </nav>
        </div>
    );
};

export default Header;