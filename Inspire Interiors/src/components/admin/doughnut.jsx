import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DonutChart = () => {
  const data = [
    // { name: 'Category A', value: 400 },
    { name: '', value: 300 },
    { name: '', value: 200 },
    { name: '', value: 100 },
  ];

  const COLORS = ['#035C94', '#C4C4C4', '#FFBB28'];

  const cx = '50%';
  const cy = '50%';
  const innerRadius = 50;
  const outerRadius = 70;

  const label = (
    <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#035C94">
      20%
    </text>
  );

  return (
    <ResponsiveContainer height={150}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {label}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;