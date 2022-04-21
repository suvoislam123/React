import React, { useEffect, useState } from "react";
// import Chart1 from './Chart1';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from "recharts";
import { useData } from "../../hooks/useData";
const Chart1 = ({data}) => {

  
  return (
    <>
      <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="investment" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip></Tooltip>
    </LineChart>
    </>
  );
};

export default Chart1;
