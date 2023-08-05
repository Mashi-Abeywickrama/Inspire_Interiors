// ChartComponent.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComponent = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 100 },
    { name: 'May', value: 300 },
    { name: 'Jun', value: 700 },
    { name: 'Jul', value: 100 },
  ];

  return (
    <LineChart width={900} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#035C94" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default ChartComponent;
