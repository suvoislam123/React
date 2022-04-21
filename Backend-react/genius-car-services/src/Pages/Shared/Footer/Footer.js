import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div>
            <footer>
                <p className='text-center'><small>Copy right {year} </small></p>
            </footer>
        </div>
    );
};

export default Footer;