import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>This is Home</h1>
            <h1>User : {user?.displayName ? user.displayName:'Nobody'}</h1>
        </div>
    );
};

export default Home;