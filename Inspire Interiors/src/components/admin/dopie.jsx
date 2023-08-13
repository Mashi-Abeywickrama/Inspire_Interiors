// import "./styles.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#096C86"
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#035C94"
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#FFBA42"
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#A2A3B1"
  },
 
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default function App() {
  return (
    <RadialBarChart
      width={300}
      height={300}
      cx={150}
      cy={150}
      innerRadius={30}
      outerRadius={140}
      barSize={20}
      data={data}
    >
      <RadialBar
        minAngle={15}
        // label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
      fontSize={60}
      
        // iconSize={10}
        // width={120}
        // height={140}
        // layout="vertical"
        // verticalAlign="middle"
        // wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
