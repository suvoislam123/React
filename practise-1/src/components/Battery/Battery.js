import React from 'react';
import { useState } from 'react';

const Battery = () => {
    const [count,setCount] = useState(100)
    const batteryDown=()=>{
        const newCount = count-10;
        if(newCount !=-10) setCount(newCount);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={batteryDown}>Battery Down</button>
        </div>
    );
};

export default Battery;