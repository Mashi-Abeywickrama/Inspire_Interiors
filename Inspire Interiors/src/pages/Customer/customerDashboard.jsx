import React, { useState } from 'react';
import '../../styles/customer/customerDashboard.css';
import * as Icon from 'react-bootstrap-icons';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';

import Profile1 from '../../assets/img/customer/profile1.png';
import Chair from '../../assets/img/customer/chair1.png';
import { PieChart, Pie, Sector, Cell, BarChart, Bar, XAxis, YAxis, LineChart, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import { Calendar } from "react-modern-calendar-datepicker";

const COLORS = ['#035C94', '#F8F8F9', '#FFC00C'];
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }
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


const CustomerDashboard = () => {
  
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className='dashboard-container customer-dashboard me-5'>
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3'>
                        <div className='col-lg-9 bg-white rounded-3 p-4'>
                            <div className="d-flex flex-row gap-4">
                                <p className="fs-3 fw-bold Cabin-text">Best Rated Designers</p>
                                <p className="fs-5 fw-semibold Cabin-text mt-2" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="" /></p>
                            </div>
                            <p className='fs-6 Cabin-text'>Apr 2023</p>
                            <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4 image-div'>
                                <div className='d-flex flex-column gap-3'>
                                    <Link to='/customer/designs/viewdesigner'>
                                        <img style={{ backgroundColor: "#FEE4CB" }} className='ig-fluid p-3 rounded-4' src={Profile1} />
                                    </Link>
                                    <p className='fs-6 Cabin-text text-center'>Annette B.</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Link to='/customer/designs/viewdesigner'>
                                        <img style={{ backgroundColor: "#E9E7FD" }} className='ig-fluid p-3 rounded-4' src={Profile1} />
                                    </Link>
                                    <p className='fs-6 Cabin-text text-center'>Cody F.</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Link to='/customer/designs/viewdesigner'>
                                        <img style={{ backgroundColor: "#FFD3E2" }} className='ig-fluid p-3 rounded-4' src={Profile1} />
                                    </Link>
                                    <p className='fs-6 Cabin-text text-center'>Guy H.</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Link to='/customer/designs/viewdesigner'>
                                        <img style={{ backgroundColor: "#C8F7DC" }} className='ig-fluid p-3 rounded-4' src={Profile1} />
                                    </Link>
                                    <p className='fs-6 Cabin-text text-center'>Kathryn M.</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Link to='/customer/designs/viewdesigner'>
                                        <img style={{ backgroundColor: "#D5DEFF" }} className='ig-fluid p-3 rounded-4' src={Profile1} />
                                    </Link>
                                    <p className='fs-6 Cabin-text text-center'>Albert F.</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Link to='/customer/designs/viewdesigner'>
                                        <img style={{ backgroundColor: "#DBF6FD" }} className='ig-fluid p-3 rounded-4' src={Profile1} />
                                    </Link>
                                    <p className='fs-6 Cabin-text text-center'>Darrell S.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 bg-white rounded-3 p-4'>
                            <p className="fs-3 fw-bold Cabin-text">Order Statistics</p>
                            <div className='d-flex flex-column gap-3'>
                                <div className='d-flex flex-column gap-1 bar-1'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>Bedroom Interiors</p>
                                        <p className='fs-6 Cabin-text'>60%</p>
                                    </div>
                                    <ProgressBar now={60} />
                                </div>
                                <div className='d-flex flex-column gap-1 bar-2'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>4 Element Wall Art</p>
                                        <p className='fs-6 Cabin-text'>50%</p>
                                    </div>
                                    <ProgressBar now={50} />
                                </div>
                                <div className='d-flex flex-column gap-1 bar-3'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>Ball Chair - Blue Cushion</p>
                                        <p className='fs-6 Cabin-text'>35%</p>
                                    </div>
                                    <ProgressBar now={35} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3'>
                        <div className='d-flex col-lg-9 flex-column gap-3'>
                            <div className='d-flex col-lg-11 flex-column flex-lg-row flex-md-row flex-sm-row gap-2'>
                                <div className='col-lg-9 bg-white rounded-3 p-4'>
                                    <p className="fs-3 fw-bold Cabin-text">Wish List</p>
                                    <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row'>
                                        <div className='d-flex flex-row mt-3 justify-content-between' style={{ height: "110px", width: "100%" }}>
                                            <div className='d-flex'>
                                                <img src={Chair} className='img-fluid' style={{ width: "80%", height: "80%" }} />
                                                <div className='d-flex flex-column'>
                                                    <p className='fs-6 fw-semibold Cabin-text'>Customize Chair</p>
                                                    <div className='d-flex flex-row gap-3'>
                                                        <p className='fs-6 Cabin-text m-0'>Arpico</p>
                                                        <Icon.CircleFill size={5} className='mt-2' />
                                                        <p className='fs-6 Cabin-text m-0'>furniture</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='fs-6 Cabin-text'>3000 LKR</p>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row'>
                                        <div className='d-flex flex-row mt-3 justify-content-between' style={{ height: "110px", width: "100%" }}>
                                            <div className='d-flex'>
                                                <img src={Chair} className='img-fluid' style={{ width: "80%", height: "80%" }} />
                                                <div className='d-flex flex-column'>
                                                    <p className='fs-6 fw-semibold Cabin-text'>Customize Chair</p>
                                                    <div className='d-flex flex-row gap-3'>
                                                        <p className='fs-6 Cabin-text m-0'>Arpico</p>
                                                        <Icon.CircleFill size={5} className='mt-2' />
                                                        <p className='fs-6 Cabin-text m-0'>furniture</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='fs-6 Cabin-text'>3000 LKR</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 bg-white rounded-3 p-4'>
                                    <p className="fs-3 fw-bold Cabin-text">Delivery Status</p>
                                    <PieChart width={220} height={250}>
                                        <Pie
                                            data={data}
                                            cx={120}
                                            cy={110}
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </div>
                            </div>
                            <div className='col-lg-12 bg-white rounded-3 p-4 mb-3'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <p className="fs-3 fw-bold Cabin-text">Purchase</p>
                                    <select class="form-select w-25" aria-label="Default select example">
                                        <option selected>Monthly</option>
                                        <option value="Last Month">Weekly</option>
                                    </select>
                                </div>
                                <p className='fs-6 Cabin-text'>Apr 2023</p>
                                <ResponsiveContainer width="80%" height="75%">
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
                        </div>
                        <div className='col-lg-3 bg-white rounded-3 p-4 mb-3'>
                            <p className="fs-3 fw-bold Cabin-text">Updates</p>
                            <div className='dashboard-calender'><Calendar  onChange={setDate} value={date} formatMonthYear={(locale, date) => {
                                    // Get the month's abbreviated name and full year
                                    const options = { month: 'short', year: 'numeric' };
                                    return new Intl.DateTimeFormat(locale, options).format(date);}
                                }/>
                            </div>
                            <p className='fs-6 Cabin-text mt-4 m-0'>08 am</p>
                            <div className='col-lg-11 border justify-content-end rounded-3 p-3 my-2' style={{ backgroundColor: "#035C94" }}>
                                <div className='d-flex flex-column'>
                                    <p className='fs-5 fw-semibold Cabin-text text-white'>Bedroom Interiors</p>
                                    <p className='fs-6 Cabin-text text-white m-0'>Half way done in your customized bedroom design.</p>
                                </div>
                            </div>
                            <p className='fs-6 Cabin-text mt-4 m-0'>10 am</p>
                            <div className='col-lg-11 border justify-content-end rounded-3 p-3 my-2' style={{ backgroundColor: "#096C86" }}>
                                <div className='d-flex flex-column'>
                                    <p className='fs-5 fw-semibold Cabin-text text-white'>4 Element Wall Art</p>
                                    <p className='fs-6 Cabin-text text-white m-0'>Your package is now ready for shipping. </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default CustomerDashboard;