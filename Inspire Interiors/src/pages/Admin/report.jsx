import React from "react";
import "./../../styles/admin/report.css";
import Card from "react-bootstrap/Card";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import Linechart from "./../../components/admin/linechart";
import Barchart from "./../../components/admin/barchart";
import Areachart from "./../../components/admin/areachart";
import { useState, useEffect } from "react";

// import Piechart from './../../components/admin/piechart';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

  

const Linedata1 = [
  {
    name: "2018",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2019",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2020",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2021",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2022",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2023",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const Linedata2 = [
  {
    name: "JAN",
    product: 1000,
    design: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    product: 3000,
    design: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    product: 5000,
    design: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    product: 2780,
    design: 3908,
    amt: 2000,
  },
  {
    name: "JUN",
    product: 1890,
    design: 1000,
    amt: 2181,
  },
  {
    name: "JUL",
    product: 2390,
    design: 6500,
    amt: 2500,
  },
  {
    name: "AUG",
   product: 4000,
    design: 2400,
    amt: 2400,
  },
  {
    name: "SEP",
    product: 3000,
    design: 1398,
    amt: 2210,
  },
  {
    name: "OCT",
    product: 2000,
    design: 9800,
    amt: 2290,
  },
  {
    name: "NOV",
    product: 2780,
    design: 3908,
    amt: 2000,
  },
  {
    name: "DEC",
    product: 1890,
    design: 4800,
    amt: 2181,
  },
];

const bardata = [
  {
    name: "JAN",
    completed: 40,
    progress: 24,
    pending: 21,
    amt: 24,
  },
  {
    name: "FEB",
    completed: 30,
    progress: 14,
    pending: 21,
    amt: 22,
  },
  {
    name: "MAR",
    completed: 20,
    progress: 48,
    pending: 21,
    amt: 23,
  },
  {
    name: "APR",
    completed: 28,
    progress: 40,
    pending: 21,
    amt: 20,
  },
  {
    name: "MAY",
    completed: 19,
    progress: 48,
    pending: 21,
    amt: 21,
  },
  {
    name: "JUN",
    completed: 23,
    progress: 38,
    pending: 21,
    amt: 25,
  },
];

const areadata = [
  {
    name: "JAN",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function report() {

  const [usertypeCount, setUsertypeCount] = useState([]);
  // const [userType, setUserType] = useState('designer'); // Set the user type you want to fetch here
  

  const apiBaseURL = 'http://localhost:8080';

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
    // Make an Axios GET request to your Spring Boot API endpoint
    axiosInstance.get('/usercountType')
      .then((response) => {
        // Handle the successful response here
        console.log(response.data)
        setUsertypeCount(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const [userCount, setUserCount] = useState(null);

  const data = usertypeCount.map(item => ({
    name: item[0],
    value: item[1],
  }));


  useEffect(() => {
    // Make a GET request to the Spring Boot backend
    fetch("http://localhost:8080/usercount")
      .then((response) => response.json())
      .then((data) => {
        setUserCount(data);
      })
      .catch((error) => {
        console.error("Error fetching user count:", error);
      });
  }, []);

  const [orderCount, setOrderCount] = useState(null);

  useEffect(() => {
    // Make a GET request to the Spring Boot backend
    fetch("http://localhost:8080/ordercount")
      .then((response2) => response2.json())
      .then((data2) => {
        setOrderCount(data2);
      })
      .catch((error2) => {
        console.error("Error fetching order count:", error2);
      });
  }, []);

  const [commissionsum, setcommissionsum] = useState(null);

  useEffect(() => {
    // Make a GET request to the Spring Boot backend
    fetch("http://localhost:8080/commissionsum")
      .then((response1) => response1.json())
      .then((data1) => {
        setcommissionsum(data1);
      })
      .catch((error1) => {
        console.error("Error fetching com count:", error1);
      });
  }, []);

  

  return (
    <div className="d-flex flex-column background-report mb-4">
      <p className="fs-5 fw-bold p-3">Report</p>
      <div className="d-flex flex-column gap-3">

        <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
          <div className="col-lg-12 bg-white rounded-3 p-4">
            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#023047" }}>
              Summary
            </p>
            <div className="col-lg-12 d-flex flex-row gap-2">
              <div
                className="col-lg-4 rounded-3 my-2 shadow p-4"
                style={{ backgroundColor: "#035C94" }}
              >
                <div className="d-flex flex-row justify-content-evenly">
                  <p
                    className="m-0 fs-3 fw-normal Cabin-text"
                    style={{ color: "#FFC00C" }}
                  >
                   {userCount !== null ? userCount : "Loading..."}
                  </p><tab/>
                  <p className="m-0 fs-3 fw-normal Cabin-text text-white">
                    Users
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 rounded-3 my-2 shadow p-4"
                style={{ backgroundColor: "#096C86" }}
              >
                <div className="d-flex flex-row justify-content-evenly">
                  <p
                    className="m-0 fs-3 fw-normal Cabin-text"
                    style={{ color: "#FFC00C" }}
                  >
                    {commissionsum !== null ? commissionsum : "Loading..."}
                  </p><tab/>
                  <p className="m-0 fs-3 fw-normal Cabin-text text-white">
                    Commission
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 rounded-3 my-2 shadow p-4"
                style={{ backgroundColor: "#FFC829" }}
              >
                <div className="d-flex flex-row justify-content-evenly">
                  <p
                    className="m-0 fs-3 fw-normal Cabin-text"
                    style={{ color: "#035C94" }}
                  >
                   {orderCount !== null ? orderCount : "Loading..."}
                  </p><tab/>
                  <p className="m-0 fs-3 fw-normal Cabin-text text-white">
                    Orders
                  </p>
                </div>
              </div>
              {/* <div className='col-lg-12 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#FFC00C"}}>
              <div className='d-flex flex-row justify-content-evenly'>
                <p className='m-0 fs-3 fw-normal Cabin-text' style={{ color: "#035C94" }}>200,000</p>
                <p className='m-0 fs-3 fw-normal Cabin-text text-white'>Revenue</p>
              </div>
            </div> */}
            </div>
          </div>
          {/* <div className="col-lg-9 bg-white rounded-3 p-4">
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
          <div className='col-lg-6 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#FFC00C"}}>
            <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-normal Cabin-text' style={{ color: "#035C94" }}>Top selling Product</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Of the Year</option>
                <option value="3 Months">Of the Month</option>
              </select>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-evenly ">
              <img className="img-fluid" src={Img2} style={{objectFit:"cover"}}/>
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
              <div className="d-flex flex-column">
                <img className="img-fluid" src={Img3} style={{objectFit:"cover"}}/>
                <span className="fs-6 text-white fw-semibold m-0">Rank 1</span>
              </div>
              <div className="d-flex flex-column">
                <img className="img-fluid" src={Img3} style={{objectFit:"cover"}}/>
                <span className="fs-6 text-white fw-semibold m-0">Rank 2</span>
              </div>
              <div className="d-flex flex-column">
                <img className="img-fluid" src={Img3} style={{objectFit:"cover"}}/>
                <span className="fs-6 text-white fw-semibold m-0">Rank 3</span>
              </div>
            </div>
          </div>
          <div className='col-lg-6 rounded-3 my-2 shadow p-4' style={{backgroundColor:"#FFC829"}}>
            <div className='d-flex flex-row justify-content-between'>
              <p className='m-0 fs-5 fw-normal Cabin-text' style={{ color: "#035C94" }}>Highest Grossing Vendor</p>
              <select class="form-select w-25" aria-label="Default select example">
                <option selected>Of the Year</option>
                <option value="3 Months">Of the Month</option>
              </select>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between mt-2">
              <div className="d-flex flex-column">
                <img className="img-fluid" src={Img3} style={{objectFit:"cover"}}/>
                <span className="fs-6  fw-semibold m-0">Rank 1</span>
              </div>
              <div className="d-flex flex-column">
                <img className="img-fluid" src={Img3} style={{objectFit:"cover"}}/>
                <span className="fs-6  fw-semibold m-0">Rank 2</span>
              </div>
              <div className="d-flex flex-column">
                <img className="img-fluid" src={Img3} style={{objectFit:"cover"}}/>
                <span className="fs-6  fw-semibold m-0">Rank 3</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div> */}
        </div>

        <div className="col-12 d-flex flex-column flex-lg-row  flex-md-row flex-sm-row gap-3">
          <div className="col-lg-6 d-flex bg-white rounded-3 p-4 gap-2 ">
            {/* <div className="col-lg-6">
              <div className="d-flex flex-row justify-content-between">
                <p className="m-0 fs-5 fw-bold Cabin-text">Usermatric</p>
                {/* <select class="form-select w-25" aria-label="Default select example">
                <option selected>Yearly</option>
                <option value="3 Months">Monthly</option>
              </select> 
              </div>
              * <ResponsiveContainer width="90%" height="90%">
                <LineChart
                  width={500}
                  height={300}
                  data={Linedata1}
                  // data2={Linedata2}
                  // margin={{
                  //   top: 5,
                  //   right: 5,
                  //   left: 5,
                  //   bottom: 5,
                  // }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#FFC00C"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer> 
            </div> */}

            <div className="col-lg-12">
              <div className="d-flex flex-row justify-content-between">
                <p className="m-0 fs-5 fw-bold Cabin-text">Users</p>
                <select
                  class="form-select w-25"
                  aria-label="Default select example"
                >
                  <option selected>Yearly</option>
                  <option value="3 Months">Monthly</option>
                </select>
              </div>
              <ResponsiveContainer  width="90%" height="90%">
        <BarChart
          layout="vertical" // Set the layout to horizontal
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, left: 60, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#FFC00C" />
        </BarChart>
      </ResponsiveContainer>
            </div>
          </div>

          <div className="col-lg-6 bg-white rounded-3 p-4">
            <div className="d-flex flex-row justify-content-between">
              <p className="m-0 fs-5 fw-bold Cabin-text">Order</p>
              <select
                class="form-select w-25"
                aria-label="Default select example"
              >
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
                <Bar
                  dataKey="pending"
                  stackId="a"
                  fill="#035C94"
                  barSize={20}
                />
                <Bar
                  dataKey="completed"
                  stackId="a"
                  fill="#518EB5"
                  barSize={20}
                />
                {/* <Bar dataKey="pending" stackId="a" fill="#B8E3FF" barSize={20} /> */}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
          {/* <p className="fs-5 fw-bold px-3">Metric Breakdown</p> */}
          <div className="col-lg-8 bg-white rounded-3 p-4 me-2">
            <div className="d-flex flex-row justify-content-between">
              <p className="m-0 fs-5 fw-bold Cabin-text">Revenue Source</p>
              <select
                class="form-select w-25"
                aria-label="Default select example"
              >
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
                <Line
                  type="monotone"
                  dataKey="design"
                  stroke="#FFC00C"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="product"
                  stroke="#096C86"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col-lg-4 bg-white rounded-3 p-4 me-2">
            <div className="d-flex flex-row justify-content-between">
              <p className="m-0 fs-5 fw-bold Cabin-text">Earnings</p>
              <select
                class="form-select w-25"
                aria-label="Default select example"
              >
                <option selected>Yearly</option>
                <option value="3 Months">Monthly</option>
              </select>
            </div>
            <div>
              <div className="d-flex flex-column gap-3 align-items-center">
                <div
                  className="col-lg-10 rounded-3 my-2 shadow p-4"
                  style={{ backgroundColor: "#035C94" }}
                >
                  <div className="d-flex flex-row justify-content-evenly">
                    <p className="m-0 fs-3 fw-normal Cabin-text text-white">
                      Vendors
                    </p>
                    <p
                      className="m-0 fs-3 fw-normal Cabin-text"
                      style={{ color: "#FFC00C" }}
                    >
                      236
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-10 rounded-3 my-2 shadow p-4"
                  style={{ backgroundColor: "#096C86" }}
                >
                  <div className="d-flex flex-row justify-content-evenly">
                    <p className="m-0 fs-3 fw-normal Cabin-text text-white">
                      Designers
                    </p>
                    <p
                      className="m-0 fs-3 fw-normal Cabin-text"
                      style={{ color: "#FFC00C" }}
                    >
                      10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
