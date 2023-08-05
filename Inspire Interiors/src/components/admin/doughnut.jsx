import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const DonutChart = () => {
  const data = [
    // { name: 'Category A', value: 400 },
    { name: '', value: 300 },
    { name: '', value: 200 },
    { name: '', value: 100 },
  ];

  const COLORS = ['#035C94', '#C4C4C4', '#FFBB28'];

  return (
    <ResponsiveContainer  height={150}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={50} // Adjust the inner radius for the donut effect
          outerRadius={70}
          fill="#8884d8"
          // paddingAngle={5} // Space between sectors
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Legend layout="horizontal" align="center" verticalAlign="bottom" /> */}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
