
import React from 'react';
import {Link} from 'react-router-dom'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
const handleSignOut = () =>{
    signOut(auth);
}
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    

    return (
        <div>
            <nav>
                <ul className='menu-links'>
                    <Link to='/home'>Home</Link>
                    <Link to='/home'>About</Link>
                    <Link to='/home'>Contact</Link>
                    <Link to='/home'>Products</Link>
                    <Link to='/signup'>Sign Up</Link>
                    {user?<span onClick={handleSignOut}>Sign Out</span>:<Link to='/login'>Login</Link>}
                </ul>
            </nav>
        </div>
    );
};

export default Header;