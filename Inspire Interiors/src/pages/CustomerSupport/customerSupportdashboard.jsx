import React from 'react';
import '../../styles/customerSupport/customerSupportdashboard.css';
import { Rerousel } from "rerousel";

import Brand1 from "./../../assets/img/customerSupport/brand-1.svg";
import Brand2 from "./../../assets/img/customerSupport/brand-2.svg";
import Brand3 from "./../../assets/img/customerSupport/brand-3.svg";
import Brand4 from "./../../assets/img/customerSupport/brand-4.png";
import Brand5 from "./../../assets/img/customerSupport/brand-5.png";
import Brand6 from "./../../assets/img/customerSupport/brand-6.png";
import Profile1 from "./../../assets/img/customerSupport/profile-1.png";
import Profile2 from "./../../assets/img/customerSupport/profile-2.png";
import Profile3 from "./../../assets/img/customerSupport/profile-3.png";
import Profile4 from "./../../assets/img/customerSupport/profile-4.png";

import * as Icon from 'react-bootstrap-icons';
import ReactStars from "react-rating-stars-component";
import { ProgressBar } from 'react-bootstrap';
import Needlepie from "./../../components/admin/needlepie";

import 'bootstrap/dist/css/bootstrap.min.css';

import { PieChart, Pie, Sector, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;
const needledata = [
  { name: 'A', value: 60, color: '#035C94' },
  { name: 'B', value: 60, color: '#F28739' },
  { name: 'C', value: 60, color: '#F8F8F9' },
];
const cx = 150;
const cy = 150;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 4;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

const generateStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars >= 0.5;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Icon.StarFill key={i} color='#FFC00C' size={20} />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<Icon.StarHalf key={i} color='#FFC00C' size={20} />);
      } else {
        stars.push(<Icon.Star key={i} color='#FFC00C' size={20} />);
      }
    }
    return stars;
};

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }
];

const stardata = {
    data:"3"
}

export const bardata = [
    {
      name: 'Mon',
      chat_count: 250,
    },
    {
      name: 'Tue',
      chat_count: 300,
    },
    {
      name: 'Wed',
      chat_count: 180,
    },
    {
      name: 'Thu',
      chat_count: 150,
    },
    {
      name: 'Fri',
      chat_count: 250,
    },
    {
      name: 'sat',
      chat_count: 200,
    },
    {
        name: 'sun',
        chat_count: 80,
    },
];

const COLORS = ['#035C94', '#F8F8F9', '#FFC00C'];

const CustomerSupportDashboard = () => (
    <>
        <div className='dashboard-container support-dashboard me-3'>
            <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4'>
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex flex-row gap-1'>
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <div className='d-flex flex-column'>
                                <p className='fs-5 fw-bold Cabin-text' style={{ color: "#035C94" }}>Chat Queue</p>
                                <p className='fs-6 fw-normal Cabin-text' style={{ color: "#035C94" }}>Today</p>
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
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <div className='d-flex flex-column'>
                                <p className='fs-5 fw-bold Cabin-text' style={{ color: "#035C94" }}>Missed Chats</p>
                                <p className='fs-6 fw-normal Cabin-text' style={{ color: "#035C94" }}>Today</p>
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
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <div className='d-flex flex-column'>
                                <p className='fs-5 fw-bold Cabin-text' style={{ color: "#035C94" }}>Av. Wait Time</p>
                                <p className='fs-6 fw-normal Cabin-text' style={{ color: "#035C94" }}>Today</p>
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
                    </div>
                    <div className='col-lg-12 bg-white rounded-3 shadow p-4'>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column '>
                                <p className='fs-5 fw-bold Cabin-text' style={{ color: "#035C94" }}>Chat Volume</p>
                                <p className='fs-6 fw-normal Cabin-text' style={{ color: "#035C94" }}>This Week</p>
                                <BarChart
                                    width={420}
                                    height={300}
                                    data={bardata}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 5,
                                        bottom: 5,
                                    }}
                                    barSize={20}
                                >
                                    <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 30 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Bar dataKey="chat_count" fill="#035C94" radius={[10, 10, 0, 0]} background={{ fill: '#fff' }} />
                                </BarChart>
                            </div>
                            <div className='vl mx-5'></div>
                            <div className='d-flex flex-column '>
                                <p className='fs-5 fw-bold Cabin-text' style={{ color: "#035C94" }}>Satisfaction</p>
                                <p className='fs-6 fw-normal Cabin-text' style={{ color: "#035C94" }}>Today</p>
                                <div className="d-flex justify-content-center"><Needlepie /></div>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-12 bg-white rounded-3 shadow p-4 mb-3'>
                        <div className='d-flex flex-column gap-3'>
                            <p className='fs-5 fw-bold Cabin-text' style={{ color: "#035C94" }}>Contact Vendors</p>
                            <div className="slider">
                                <Rerousel interval="100" stop="no">
                                    <img
                                        className="slide img-fluid"
                                        src={Brand1}
                                    ></img>
                                    <img
                                        className="slide img-fluid"
                                        src={Brand2}
                                    ></img>
                                    <img
                                        className="slide img-fluid"
                                        src={Brand3}
                                    ></img>
                                    <img
                                        className="slide img-fluid"
                                        src={Brand4}
                                    ></img>
                                    <img
                                        className="slide img-fluid"
                                        src={Brand5}
                                    ></img>
                                    <img
                                        className="slide img-fluid"
                                        src={Brand6}
                                    ></img>
                                </Rerousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 bg-white rounded-3 shadow p-4 mb-3'>
                    <div className='d-flex flex-column'>
                        <p className='fs-5 fw-bold Cabin-text' style={{ color: "#035C94" }}>Customer Feedback</p>
                        <div className='d-flex flex-column gap-3 p-3 avg-div justify-content-center align-items-center rounded-5' style={{width:"90%"}}>
                                <p className=' fw-bold m-0' style={{ color: "white", fontSize:"3rem" }}>4.5</p>
                                <div className="d-flex flex-row gap-1 mb-2">{generateStars(4.5)}</div>
                                    
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
                        <div className=" divider mt-5" />
                        <div className='d-flex flex-column gap-5 mt-2'>
                            <div className='d-flex flex-row justify-content-between mt-5'>
                                <img className='img-fluid' src={Profile1} style={{ width: "25%", height: "25%" }} />
                                <div className='d-flex flex-column'>
                                    <p className='fs-6 fw-semibold m-0'>Danny Corwin</p>
                                    <p className='fs-6 fw-normal m-0'>5 months Ago</p>
                                    <p className='fs-6 fw-semibold m-0'>Thanks Guys!</p>
                                </div>
                                <Icon.HandThumbsUpFill className='mt-3 rounded-circle' color='white' size={25} style={{ backgroundColor: "black", alignItems: "center" }} />
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <img className='img-fluid' src={Profile2} style={{ width: "25%", height: "25%" }} />
                                <div className='d-flex flex-column'>
                                    <p className='fs-6 fw-semibold m-0'>Danny Corwin</p>
                                    <p className='fs-6 fw-normal m-0'>1 months Ago</p>
                                    <p className='fs-6 fw-semibold m-0'>Great as always!</p>
                                </div>
                                <Icon.HandThumbsUpFill className='mt-3 rounded-circle' color='white' size={25} style={{ backgroundColor: "black", alignItems: "center" }} />
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <img className='img-fluid' src={Profile3} style={{ width: "25%", height: "25%" }} />
                                <div className='d-flex flex-column'>
                                    <p className='fs-6 fw-semibold m-0'>Danny Corwin</p>
                                    <p className='fs-6 fw-normal m-0'>7 months Ago</p>
                                    <p className='fs-6 fw-semibold m-0'>All sorted!</p>
                                </div>
                                <Icon.HandThumbsUpFill className='mt-3 rounded-circle' color='white' size={25} style={{ backgroundColor: "black", alignItems: "center" }} />
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <img className='img-fluid' src={Profile4} style={{ width: "25%", height: "25%" }} />
                                <div className='d-flex flex-column'>
                                    <p className='fs-6 fw-semibold m-0'>Danny Corwin</p>
                                    <p className='fs-6 fw-normal m-0'>4 months Ago</p>
                                    <p className='fs-6 fw-semibold m-0'>Thanks Guys!</p>
                                </div>
                                <Icon.HandThumbsUpFill className='mt-3 rounded-circle' color='white' size={25} style={{ backgroundColor: "black", alignItems: "center" }} />
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <img className='img-fluid' src={Profile3} style={{ width: "25%", height: "25%" }} />
                                <div className='d-flex flex-column'>
                                    <p className='fs-6 fw-semibold m-0'>Danny Corwin</p>
                                    <p className='fs-6 fw-normal m-0'>7 months Ago</p>
                                    <p className='fs-6 fw-semibold m-0'>All sorted!</p>
                                </div>
                                <Icon.HandThumbsUpFill className='mt-3 rounded-circle' color='white' size={25} style={{ backgroundColor: "black", alignItems: "center" }} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </>
)

export default CustomerSupportDashboard;