import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";
// import "./styles.css";

const data = [
  {
    name: "Jan",
    uv: 1000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    uv: 2000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    uv: 1500,
    pv: 9800,
    amt: 2290
  },
  {
    name: "apr",
    uv: 2500,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500
  }
];
const cardinal = curveCardinal.tension(0.2);

export default function App() {
  return (
    <AreaChart
      width={500}
      height={270}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      /> */}
      <Area
        type={cardinal}
        dataKey="uv"
        stroke="#FFC00C"
        fill="#FFC00C"
        fillOpacity={0.5}
      />
    </AreaChart>
  );
}
