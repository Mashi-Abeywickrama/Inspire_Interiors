import React from "react";
import "./../../styles/admin/report.css";
import Card from "react-bootstrap/Card";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Linechart from "./../../components/admin/linechart";
import Barchart from "./../../components/admin/barchart";
import Areachart from "./../../components/admin/areachart";
// import Piechart from './../../components/admin/piechart';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Img1 from "./../../assets/img/admin/project.png";
import Img2 from "./../../assets/img/admin/product.png";
import Img3 from "./../../assets/img/admin/designer.png";
import Img4 from "./../../assets/img/admin/Img4.png";

const Linedata1 = [
  {
    name: '2018',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2019',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2020',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2021',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2022',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2023',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const Linedata2 = [
  {
    name: 'JAN',
    subscription: 1000,
    commission: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    subscription: 3000,
    commission: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    subscription: 5000,
    commission: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    subscription: 2780,
    commission: 3908,
    amt: 2000,
  },
  {
    name: 'JUN',
    subscription: 1890,
    commission: 1000,
    amt: 2181,
  },
  {
    name: 'JUL',
    subscription: 2390,
    commission: 6500,
    amt: 2500,
  },
  {
    name: 'AUG',
    subscription: 4000,
    commission: 2400,
    amt: 2400,
  },
  {
    name: 'SEP',
    subscription: 3000,
    commission: 1398,
    amt: 2210,
  },
  {
    name: 'OCT',
    subscription: 2000,
    commission: 9800,
    amt: 2290,
  },
  {
    name: 'NOV',
    subscription: 2780,
    commission: 3908,
    amt: 2000,
  },
  {
    name: 'DEC',
    subscription: 1890,
    commission: 4800,
    amt: 2181,
  }
];

const bardata = [
  {
    name: 'JAN',
    completed: 40,
    progress: 24,
    pending: 21,
    amt: 24,
  },
  {
    name: 'FEB',
    completed: 30,
    progress: 14,
    pending: 21,
    amt: 22,
  },
  {
    name: 'MAR',
    completed: 20,
    progress: 48,
    pending: 21,
    amt: 23,
  },
  {
    name: 'APR',
    completed: 28,
    progress: 40,
    pending: 21,
    amt: 20,
  },
  {
    name: 'MAY',
    completed: 19,
    progress: 48,
    pending: 21,
    amt: 21,
  },
  {
    name: 'JUN',
    completed: 23,
    progress: 38,
    pending: 21,
    amt: 25,
  }
];

const areadata = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function report() {
  return (
    <div className="d-flex flex-column background-report mb-4">
      <p className="fs-5 fw-bold p-3">Report</p>
      <div className="d-flex flex-column gap-3">
      <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
        <div className="col-lg-3 bg-white rounded-3 p-4">
          <p className='fs-5 fw-bold Cabin-text' style={{ color: "#023047" }}>Summary</p>
          <div className='d-flex flex-column gap-3'>
            <div className='col-lg-12 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#035C94"}}>
              <div className='d-flex flex-row justify-content-evenly'>
                <p className='m-0 fs-3 fw-normal Cabin-text' style={{ color: "#FFC00C" }}>236</p>
                <p className='m-0 fs-3 fw-normal Cabin-text text-white'>Users</p>
              </div>
            </div>
            <div className='col-lg-12 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#096C86"}}>
              <div className='d-flex flex-row justify-content-evenly'>
                <p className='m-0 fs-3 fw-normal Cabin-text' style={{ color: "#FFC00C" }}>10</p>
                <p className='m-0 fs-3 fw-normal Cabin-text text-white'>Projects</p>
              </div>
            </div>
            <div className='col-lg-12 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#035C94"}}>
              <div className='d-flex flex-row justify-content-evenly'>
                <p className='m-0 fs-3 fw-normal Cabin-text' style={{ color: "#FFC00C" }}>100</p>
                <p className='m-0 fs-3 fw-normal Cabin-text text-white'>Transactions</p>
              </div>
            </div>
            <div className='col-lg-12 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#096C86"}}>
              <div className='d-flex flex-row justify-content-evenly'>
                <p className='m-0 fs-3 fw-normal Cabin-text' style={{ color: "#FFC00C" }}>200,000</p>
                <p className='m-0 fs-3 fw-normal Cabin-text text-white'>Revenue</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 bg-white rounded-3 p-4">
        <p className='fs-5 fw-bold Cabin-text' style={{ color: "#023047" }}>Top Performance</p>
        <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
          <div className='col-lg-6 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#096C86"}}>
            <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-normal Cabin-text' style={{ color: "#FFC00C" }}>Best Projects</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Of the Year</option>
                <option value="3 Months">Of the Month</option>
              </select>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-evenly ">
              <img className="img-fluid" src={Img1} style={{objectFit:"cover"}}/>
              <div className="d-flex flex-column mt-2">
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Designer:</p>
                <p className="fs-6 text-white fw-normal m-0">Thomson</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Earning:</p>
                <p className="fs-6 text-white fw-normal m-0">Rs.230,000</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Date:</p>
                <p className="fs-6 text-white fw-normal m-0">12/08/2023</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Customer:</p>
                <p className="fs-6 text-white fw-normal m-0">Allison</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Duration:</p>
                <p className="fs-6 text-white fw-normal m-0">2 Weeks</p>
              </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#035C94"}}>
            <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-normal Cabin-text' style={{ color: "#FFC00C" }}>Top selling Product</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Of the Year</option>
                <option value="3 Months">Of the Month</option>
              </select>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-evenly ">
              <img className="img-fluid" src={Img1} style={{objectFit:"cover"}}/>
              <div className="d-flex flex-column mt-3">
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Vendor:</p>
                <p className="fs-6 text-white fw-normal m-0">Arpico</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Commission:</p>
                <p className="fs-6 text-white fw-normal m-0">Rs.3000</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Sold Units:</p>
                <p className="fs-6 text-white fw-normal m-0">115</p>
              </div>
              {/* <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Customer:</p>
                <p className="fs-6 text-white fw-normal m-0">Allison</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <p className="fs-6 text-white fw-semibold m-0">Duration:</p>
                <p className="fs-6 text-white fw-normal m-0">2 Weeks</p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
          <div className='col-lg-6 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#035C94"}}>
            <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-normal Cabin-text' style={{ color: "#FFC00C" }}>Active Designer</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Of the Year</option>
                <option value="3 Months">Of the Month</option>
              </select>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between mt-2">
              <img className="img-fluid" src={Img1} style={{objectFit:"cover"}}/>
              <img className="img-fluid" src={Img1} style={{objectFit:"cover"}}/>
              <img className="img-fluid" src={Img1} style={{objectFit:"cover"}}/>
            </div>
          </div>
          <div className='col-lg-6 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#096C86"}}>
            <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-normal Cabin-text' style={{ color: "#FFC00C" }}>Highest Grossing Vendor</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Of the Year</option>
                <option value="3 Months">Of the Month</option>
              </select>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between mt-2">
              <img className="img-fluid" src={Img1} style={{objectFit:"cover"}}/>
              <img className="img-fluid" src={Img1} style={{objectFit:"cover"}}/>
              <img className="img-fluid" src={Img1} style={{objectFit:"cover"}}/>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      <p className="fs-5 fw-bold px-3">Trend Analysis</p>
      <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-2">
      <div className="col-lg-4 bg-white rounded-3 p-4">
      <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-bold Cabin-text'>Best Projects</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Yearly</option>
                <option value="3 Months">Monthly</option>
              </select>
            </div>
            <ResponsiveContainer width="90%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={Linedata1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#FFC00C" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className="col-lg-4 bg-white rounded-3 p-4">
      <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-bold Cabin-text'>Project completion rate</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Yearly</option>
                <option value="3 Months">Monthly</option>
              </select>
            </div>
            <ResponsiveContainer width="90%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={bardata}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="progress" stackId="a" fill="#035C94" barSize={20} />
          <Bar dataKey="completed" stackId="a" fill="#518EB5" barSize={20} />
          <Bar dataKey="pending" stackId="a" fill="#B8E3FF" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      <div className="col-lg-4 bg-white revenue-box rounded-3 p-4">
      <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-bold Cabin-text'>Revenue Trends</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Yearly</option>
                <option value="3 Months">Monthly</option>
              </select>
            </div>
            <ResponsiveContainer width="90%" height="90%">
        <AreaChart
          width={400}
          height={400}
          data={areadata}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#035C94" fill="#096C86" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      </div>
      <p className="fs-5 fw-bold px-3">Metric Breakdown</p>
      <div className="col-lg-12 bg-white rounded-3 p-4 me-2">
      <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-bold Cabin-text'>Revenue Source</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Yearly</option>
                <option value="3 Months">Monthly</option>
              </select>
            </div>
            <ResponsiveContainer width="90%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={Linedata2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="commission" stroke="#FFC00C" strokeWidth={2} />
          <Line type="monotone" dataKey="subscription" stroke="#096C86" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
}
