import React, { useContext } from 'react';
import { Mycontext } from '../../App';

const Box5 = () => {
    const [count,setCount] = useContext(Mycontext);
    return (
        <div className='box'>
            <h1>Box5 </h1>
            <br />
            <br />
            <button onClick={()=>setCount(count+1)}>Change value</button>
        </div>
    );
};

export default Box5;