import React from "react";
import { MDBDataTableV5, MDBTable } from "mdbreact";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

import { GrFormNextLink } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import "../../styles/Designer/table.css";
function DesignerEarn() {
  const data = {
    columns: [
      {
        label: "PRODUCT",
        field: "product",
        sort: "asc",
        width: 150,
      },
      {
        label: "Customer",
        field: "customer",
        sort: "asc",
        width: 270,
      },

      {
        label: "DATE",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "EARNINGS",
        field: "earnings",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        product: "Bedroom Low Budget Design",
        customer: "John Wick",
        date: "13.06.2023",
        earnings: "400 Rs",
      },
      {
        product: "Bedroom Low Budget Design",
        customer: "John Wick",
        date: "13.06.2023",
        earnings: "400 Rs",
      },
      {
        product: "Bedroom Low Budget Design",
        customer: "John Wick",
        date: "13.06.2023",
        earnings: "400 Rs",
      },
      {
        product: "Bedroom Low Budget Design",
        customer: "John Wick",
        date: "13.06.2023",
        earnings: "400 Rs",
      },
    ],
  };
  const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="background-total p-3 rounded-3 d-flex gap-4 flex-wrap">
      <div className="p-4 rounded-3 shadow bg-light flex-grow-1">
        <div className="d-flex gap-3">
          <p className="text-dark fs-5 fw-bold">Recent Earnings</p>
          <NavLink to="../earningsall">
            <p className="text-primary fs-6 align-items-center d-flex">
              See All <GrFormNextLink color="blue" size="1.5em" />
            </p>
          </NavLink>
        </div>

        <div className="">
          <MDBDataTableV5
            responsive
            striped
            bordered
            small
            data={data}
            exportToCSV={true}
          />
        </div>
      </div>

      <div className="p-4 bg-light rounded-3 shadow px-5">
        <p className="primary fs-5 text-primary">
          <b>Summery View</b>
        </p>
        <br></br>
        <div
          className="fs-4 text-center p-3 rounded-2 px-5 "
          style={{ background: "#035C94", color: "#ffff" }}
        >
          <b>50</b> Designs
        </div>
        <br></br>
        <div
          className="fs-4 text-center p-3 rounded-2 px-5"
          style={{ background: "#096C86", color: "#ffff" }}
        >
          <b>12</b> Partnerships
        </div>
        <br></br>
        <div
          className="fs-4 text-center p-3 rounded-2 px-5"
          style={{ background: "#FFC00C", color: "#ffff" }}
        >
          <b>1000</b> Earned
        </div>
        <br></br>
      </div>

      <div className="p-4 rounded-3 shadow bg-light flex-grow-1">
        <LineChart
          width={700}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}

export default DesignerEarn;
