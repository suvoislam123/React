import React, { useContext } from 'react';
import { Mycontext } from '../../App';
import Box4 from './Box4';

const Box3 = () => {
    const [count,setCount] = useContext(Mycontext);
    return (
        <div className='box'>
            <h1>Box3</h1>
            <h1>Value: {count}</h1>
            <Box4></Box4>
            
        </div>
    );
};

export default Box3;