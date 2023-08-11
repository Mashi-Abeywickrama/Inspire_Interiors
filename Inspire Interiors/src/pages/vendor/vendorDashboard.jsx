import React from 'react';
import '../../styles/vendor/vendorDashboard.css';
import * as Icon from 'react-bootstrap-icons';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import ReactStars from "react-rating-stars-component";

export const bardata = [
    {
      name: 'Mon',
      uv: 250,
    },
    {
      name: 'Tue',
      uv: 300,
    },
    {
      name: 'Wed',
      uv: 180,
    },
    {
      name: 'Thu',
      uv: 150,
    },
    {
      name: 'Fri',
      uv: 250,
    },
    {
      name: 'sat',
      uv: 200,
    },
    {
        name: 'sun',
        uv: 80,
    },
];

const radarData = [
    {
        name: "Sold",
        uv: 100,
        fill: "#035C94"
    },
    {
        name: "In stock",
        uv: 70,
        fill: "#FFC00C"
    },
    
];

const linedata = [
    {
      name: 'JAN',
      Ongoing: 60,
      Earned: 90,
    },
    {
      name: 'FEB',
      Ongoing: 15,
      Earned: 40,
    },
    {
      name: 'MAR',
      Ongoing: 100,
      Earned: 80,
    },
    {
      name: 'APR',
      Ongoing: 30,
      Earned: 50,
    },
    {
      name: 'MAY',
      Ongoing: 110,
      Earned: 80,
    },
    {
      name: 'JUN',
      Ongoing: 50,
      Earned: 40,
    }
];

const stardata = {
    data:"3"
}

const VendorDashboard = () => {
    return (
        <>
            <div className='dashboard-container vendor-dashboard mb-4 me-5'>
                <div className='col-12 d-flex flex-column gap-3 '>
                    <div className='col-12 d-flex flex-column flex-lg-row flex-md-row gap-3'>
                        <div className='col-lg-8 bg-white rounded-3 shadow p-4'>
                            <Link to="/vendor/inventory"> <p className='fs-3 fw-bold Cabin-text '  style={{ color: "#035C94" }}>Revenue Made</p></Link>
                            <div className='d-flex flex-row justify-content-evenly'>
                                <div className='d-flex flex-row gap-3'>
                                    <p className='fs-6 fw-semibold' style={{ color: "#035C94" }}>Total Revenue</p>
                                    <p className='fs-5 fw-semibold' style={{ color: "#023247" }}>LKR 100K</p>
                                </div>
                                <select class="form-select w-25" aria-label="Default select example">
                                    <option selected>6 Months</option>
                                    <option value="3 Months">3 Months</option>
                                    <option value="Last Month">Last Month</option>
                                    <option value="Last Week">Last Week</option>
                                </select>
                            </div>
                            <ResponsiveContainer width="80%" height="80%">
                                <LineChart
                                    data={linedata}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="Ongoing" stroke="#FFC00C" />
                                    <Line type="monotone" dataKey="Earned" stroke="#035C94" />
                                </LineChart>
                            </ResponsiveContainer>

                        </div>
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <p className='fs-3 fw-semibold' style={{ color: "#035C94" }}>Average Rating</p>
                            <div className='d-flex flex-column p-4 avg-div justify-content-center align-items-center rounded-5' style={{width:"85%"}}>
                                <p className='fs-1 fw-bold m-0' style={{ color: "white" }}>4.5</p>
                                <ReactStars
                                    count={5}
                                    onChange={stardata}
                                    size={40}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700" />
                                <p className='fs-6 fw-semibold m-0' style={{ color: "white" }}>1,580 Ratings</p>
                            </div>
                            <div className='d-flex flex-column mt-5'>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>5</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={75} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>1180</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>4</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={50} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>200</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>3</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={35} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>100</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>2</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={20} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>80</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>1</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={10} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-flex flex-column flex-lg-row flex-md-row gap-3'>
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <div className='d-flex flex-row justify-content-between'>
                                <Link to="/vendor/inventory"><p className='fs-3 fw-semibold' style={{ color: "#035C94" }}>Product Sold</p></Link>
                                <select class="form-select w-25" aria-label="Default select example">
                                    <option selected>This Month</option>
                                    <option value="3 Months">Last Month</option>
                                    <option value="Last Month">Last 3 Months</option>
                                </select>
                            </div>
                            <RadialBarChart
                                width={400}
                                height={300}
                                cx={150}
                                cy={150}
                                innerRadius={60}
                                outerRadius={140}
                                barSize={20}
                                data={radarData}
                            >
                                <RadialBar
                                    minAngle={15}
                                    background
                                    clockWise
                                    dataKey="uv" />
                                <Legend
                                    iconSize={10}
                                    width={100}
                                    height={40}
                                    layout="horizonal"
                                    horizonalAlign="middle" />
                            </RadialBarChart>
                        </div>
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <div className='d-flex flex-row justify-content-between'>
                                <Link to="/vendor/order"><p className='fs-3 fw-semibold' style={{ color: "#035C94" }}>Order Activity</p></Link>
                                <select class="form-select w-25" aria-label="Default select example">
                                    <option selected>This Month</option>
                                    <option value="3 Months">Last Month</option>
                                    <option value="Last Month">Last 3 Months</option>
                                </select>
                            </div>
                            <ResponsiveContainer width="100%" height="85%">
                                <BarChart width={150} height={50} data={bardata}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="50%" stopColor="#035C94" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#B0DAF5" stopOpacity={1} />
                                        </linearGradient>
                                    </defs>

                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Bar dataKey="uv" fill="url(#colorUv)" radius={[5, 5, 0, 0]} />
                                </BarChart>

                            </ResponsiveContainer>
                        </div>
                        <div className='col-lg-4 rounded-3 shadow p-4 order-div'>
                            <Link to="/vendor/order"><p className='fs-3 fw-semibold' style={{ color: "#FFFFFF" }}>Order Stats</p></Link>
                            <div className='d-flex flex-column gap-4'>
                                <div className='d-flex flex-row gap-4'>
                                    <div className='background-box rounded-4 p-3'>
                                        <Icon.PersonFillAdd color='#FFC00C' size={40} />
                                        <p className='fw-bold fs-4 m-0' style={{ color: "#FFC00C" }}>200</p>
                                        <p className='fw-semibold fs-6 m-0' style={{ color: "#FFFFFF", opacity: "0.5" }}>New Orders</p>
                                    </div>
                                    <div className='background-box rounded-4 p-3'>
                                        <Icon.PersonFillCheck color='#FFC00C' size={40} />
                                        <p className='fw-bold fs-4 m-0' style={{ color: "#FFC00C" }}>100</p>
                                        <p className='fw-semibold fs-6 m-0' style={{ color: "#FFFFFF", opacity: "0.5" }}>Completed Orders</p>
                                    </div>
                                </div>
                                <div className='d-flex flex-row gap-4'>
                                    <div className='background-box rounded-4 p-3'>
                                        <Icon.PersonFillExclamation color='#FFC00C' size={40} />
                                        <p className='fw-bold fs-4 m-0' style={{ color: "#FFC00C" }}>10</p>
                                        <p className='fw-semibold fs-6 m-0' style={{ color: "#FFFFFF", opacity: "0.5" }}>Delayed Orders</p>
                                    </div>
                                    <div className='background-box rounded-4 p-3'>
                                        <Icon.PersonFillX color='#FFC00C' size={40} />
                                        <p className='fw-bold fs-4 m-0' style={{ color: "#FFC00C" }}>100</p>
                                        <p className='fw-semibold fs-6 m-0' style={{ color: "#FFFFFF", opacity: "0.5" }}>Cancelled Orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default VendorDashboard;