import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'A', value: 450 },
  // { name: 'B', value: 30 },
  // { name: 'C', value: 310 },
  // { name: 'D', value: 230 },
];
const data02 = [
  { name: 'A1', value: 170 },
  // { name: 'A2', value: 340 },
  // { name: 'B1', value: 120 },
  // { name: 'B2', value: 80 },
  // { name: 'B3', value: 45 },
  // { name: 'B4', value: 35 },
  // { name: 'B5', value: 50 },
  // { name: 'C1', value: 130 },
  // { name: 'C2', value: 200 },
  // { name: 'D1', value: 150 },
  // { name: 'D2', value: 50 },
];
const data03=[
  { name: 'B05', value: 50 },
  // { name: 'C01', value: 100 },
  // { name: 'C02', value: 200 },
  // { name: 'D01', value: 150 },
  // { name: 'D02', value: 50 },
];
const data04=[
  { name: 'B005', value: 40 },
  // { name: 'C001', value: 30 },
  // { name: 'C020', value: 200 },
  // { name: 'D010', value: 250 },
  // { name: 'D020', value: 10 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
          {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */} 
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={10} outerRadius={30} fill="#044C70"  />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#035C94" />
          <Pie data={data03} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#FFBA42"  />
          <Pie data={data04} dataKey="value" cx="50%" cy="50%" innerRadius={100} outerRadius={120} fill="#A2A3B1"  />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
