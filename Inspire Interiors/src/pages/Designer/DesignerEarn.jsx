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
import "../../styles/Designer/DesignerEarn.css";
import { useSession } from "../../constants/SessionContext";
function DesignerEarn() {
  //get designer id from session
  const session = useSession();
  // console.log(session.sessionData.userid);
  const designerId = session.sessionData.userid;
  console.log("Designer id is " + designerId);

  const data = {
    columns: [
      {
        label: "REQUEST/PARTNERSHIP",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Customer/Vendor",
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
        name: "Bedroom Low Budget Design",
        customer: "John Wick",
        date: "13.06.2023",
        earnings: "400 Rs",
      },
      {
        name: "Bedroom Low Budget Design",
        customer: "John Wick",
        date: "13.06.2023",
        earnings: "400 Rs",
      },
      {
        name: "Bedroom Low Budget Design",
        customer: "John Wick",
        date: "13.06.2023",
        earnings: "400 Rs",
      },
      {
        name: "Bedroom Low Budget Design",
        customer: "John Wick",
        date: "13.06.2023",
        earnings: "400 Rs",
      },
    ],
  };
  // const data2 = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  const data2 = [
    {
      name: "Jan",

      Requests: 2400,
      Partnership: 2400,
    },
    {
      name: "Feb",

      Requests: 1398,
      Partnership: 2210,
    },
    {
      name: "Mar",

      Requests: 9800,
      Partnership: 2290,
    },
    {
      name: "April",

      Requests: 3908,
      Partnership: 2000,
    },
    {
      name: "May",

      Requests: 4800,
      Partnership: 2181,
    },
    {
      name: "June",

      Requests: 3800,
      Partnership: 2500,
    },
    {
      name: "July",

      Requests: 4300,
      Partnership: 2100,
    },
  ];
  return (
    <div className=" col-12 background-earning p-3 rounded-3 gap-4 d-flex flex-column me-5">
      <div className="p-4 rounded-3    flex-column d-flex flex-lg-row flex-md-row gap-3">
        <div className="p-4 bg-light rounded-3 shadow px-5 col-lg-7">
          <div className="d-flex flex-row gap-3">
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
        <div className="p-4 bg-light rounded-3 shadow px-5 col-lg-4">
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
            <b>1000</b> Requests
          </div>
          <br></br>
        </div>
      </div>
      <div className="p-4 rounded-3 shadow bg-light col-lg-11">
        <p className="primary fs-6 text-primary">
          <b>Total Revenue</b>
        </p>
        <p className="primary fs-5 text-primary">
          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LKR 10.5 K</b>
        </p>
        <LineChart
          width={1000}
          height={400}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Line
            type="monotone"
            dataKey="Requests"
            stroke="#FFC00C"
            activeDot={{ r: 8 }}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Partnership"
            stroke="#096C86"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default DesignerEarn;
