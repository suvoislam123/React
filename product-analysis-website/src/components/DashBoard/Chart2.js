import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart2(props) {
  const data = props.data;

  return (
    <>
      <ResponsiveContainer width={500} height={500}>
        <BarChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
          <Bar dataKey="revenue" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
