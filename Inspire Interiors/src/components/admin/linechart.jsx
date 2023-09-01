import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComponent = () => {
  const data = [
    { name: 'Jan', value1: 400, value2: 500 },
    { name: 'Feb', value1: 300, value2: 200 },
    { name: 'Mar', value1: 500, value2: 700 },
    { name: 'Apr', value1: 100, value2: 200 },
    { name: 'May', value1: 300, value2: 600 },
    { name: 'Jun', value1: 700, value2: 400 },
    { name: 'Jul', value1: 100, value2: 200 },
  ];

  return (
    <LineChart width={850} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line dataKey="value1" type="monotone"  stroke="#035C94" name="Product" activeDot={{ r: 8 }} />
      <Line dataKey="value2" type="monotone"  stroke="#FFC00C" name="Design" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default ChartComponent;
