import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>Knock! Knock! Who is there?</h1>
            <h1>{user? user.displayName : 'NoBody of my won'}</h1>
        </div>
    );
};

export default Products;