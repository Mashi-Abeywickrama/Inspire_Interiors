// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Jan",
    Customer: 4000,
    Designer: 2400,
    Vendor: 5000,
    amt: 2400
  },
  {
    name: "Feb",
    Customer: 3000,
    Designer: 1398,
    Vendor: 2000,
    amt: 2210
  },
  {
    name: "Mar",
    Customer: 2000,
    Designer: 9800,
    Vendor: 4600,
    amt: 2290
  },
  {
    name: "Apr",
    Customer: 2780,
    Designer: 3908,
    Vendor: 2900,
    amt: 2000
  },
  {
    name: "May",
    Customer: 1890,
    Designer: 4800,
    Vendor: 4000,
    amt: 2181
  },
  {
    name: "Jun",
    Customer: 2390,
    Designer: 3800,
    Vendor: 7500,
    amt: 2500
  },
  {
    name: "Jul",
    Customer: 3490,
    Designer: 4300,
    Vendor: 4000,
    amt: 2100
  }
];

export default function App() {
  return (
    
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Designer" fill="#C4C4C4"  />
      <Bar dataKey="Customer" fill="#FFC00C" />
      <Bar dataKey="Vendor" fill="#035C94" />
    </BarChart>

  );
}
