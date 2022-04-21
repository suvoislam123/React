import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';



export default function Chart3({data}){
  
    return (
      <>
      <ResponsiveContainer width={400} height={400}>
        <ComposedChart
          layout="vertical"
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="month" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="investment" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      </>
    );
  
}
