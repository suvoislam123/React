import React from 'react';
import { useData } from '../../hooks/useData';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

const DashBoard = () => {
    const [data,setData] = useData();
    return (
        <div className='mt-32 w-1/2 md:mx-auto'>
            <Chart1 data={data}></Chart1>
            <Chart2 data={data}></Chart2>
            <Chart3 data={data}></Chart3>
            
        </div>
    );
};

export default DashBoard;