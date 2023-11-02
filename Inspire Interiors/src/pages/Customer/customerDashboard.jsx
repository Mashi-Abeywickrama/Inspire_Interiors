import React, { useState, useEffect } from 'react';
import '../../styles/customer/customerDashboard.css';
import * as Icon from 'react-bootstrap-icons';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';

import Profile1 from '../../assets/img/customer/profile1.png';
import Chair from '../../assets/img/customer/chair1.png';
import { PieChart, Pie, Sector, Cell, BarChart, Bar, XAxis, YAxis, LineChart, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import { useSession } from '../../constants/SessionContext';
import { set } from 'date-fns';

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
        orderCount: 60,
        Earned: 90,
    },
    {
        name: 'FEB',
        orderCount: 15,
        Earned: 40,
    },
    {
        name: 'MAR',
        orderCount: 100,
        Earned: 80,
    },
    {
        name: 'APR',
        orderCount: 30,
        Earned: 50,
    },
    {
        name: 'MAY',
        orderCount: 110,
        Earned: 80,
    },
    {
        name: 'JUN',
        orderCount: 50,
        Earned: 40,
    }
];


const CustomerDashboard = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [designerData, setDesignerData] = useState([]);
    const [allCountsNumber, setAllCountsNumber] = useState([]);
    const [newData, setNewData] = useState('');
    const [confirmedData, setConfirmedData] = useState('');
    const [preparedData, setPreparedData] = useState('');
    const [shippedData, setShippedData] = useState('');
    const [deliveredData, setDeliveredData] = useState('');
    const [completedData, setCompletedData] = useState('');
    const [canceledData, setCanceledData] = useState('');
    const [graphData, setGraphData] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);

    const Id = urlParams.get('id');

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
        axiosInstance
            .get(`/topdesigners`)
            .then((response) => {
                setDesignerData(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            });
    }, []);

    useEffect(() => {
        axiosInstance
            .get(`/users`)
            .then((response) => {
                setAllUsers(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            });
    }, [Id]);

     useEffect(() => {
        axiosInstance
            .get(`/ordercountseven`)
            .then((response) => {
                setGraphData(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            });
    }, [Id]);

    useEffect(() => {
        axiosInstance
            .get(`/getordercounttypes/${userId}`)
            .then((response) => {
                setAllCountsNumber(response.data);
                const newDataHere = response.data.filter((item) => item[0] === "New");
                setNewData(newDataHere[0][1])

                const confirmedDataHere = response.data.filter((item) => item[0] === "Confirmed");
                const preparedDataHere = response.data.filter((item) => item[0] === "Prepared");
                const shippedDataHere = response.data.filter((item) => item[0] === "Shipped");
                const deliveredDataHere = response.data.filter((item) => item[0] === "Delivered");
                const completedDataHere = response.data.filter((item) => item[0] === "Completed");
                const canceledDataHere = response.data.filter((item) => item[0] === "Canceled");

                setConfirmedData(confirmedDataHere[0][1]);
                setPreparedData(preparedDataHere[0][1]);
                setShippedData(shippedDataHere[0][1]);
                setDeliveredData(deliveredDataHere[0][1]);
                setCompletedData(completedDataHere[0][1]);
                setCanceledData(canceledDataHere[0][1]);

                console.log(newData);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            });
    }, [userId]);

    const mergeData = (designerData, userData) => {
        const mergedData = designerData.map(
            (designerItem) => {
                const matchingUser = userData.find(
                    (userItem) => userItem.userid === designerItem.designer_id
                );

                if (matchingUser) {
                    // Merge the data from both sources
                    return {
                        ...designerItem,
                        ...matchingUser

                    };
                } else {
                    return {
                        ...designerItem
                    };
                }
            });

        return mergedData;
    };

    const mergedDesigner = mergeData(designerData, allUsers);
    console.log("merged Data Top Designer", mergedDesigner);

    const generateStars = (rate) => {
        const fullStars = Math.floor(rate);
        const halfStar = rate - fullStars >= 0.5;

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<Icon.StarFill key={i} color='#f39c12' />);
            } else if (i === fullStars + 1 && halfStar) {
                stars.push(<Icon.StarHalf key={i} color='#f39c12' />);
            } else {
                stars.push(<Icon.Star key={i} color='#f39c12' />);
            }
        }

        return stars;
    };

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
                            {/* <p className='fs-6 Cabin-text'>Apr 2023</p> */}
                            
                                {/* <div className='d-flex flex-column gap-3'>
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
                                </div> */}
                                <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4'>
                                {mergedDesigner.map((card, index) => (
                                    <div key={index} className='d-flex flex-column gap-3'>
                                    <Link to={`/customer/designs/viewdesigner?id=${card.designer_id}`}>
                                        <img style={{ backgroundColor: "#DBF6FD" }} src={`../../../../src/assets/img/profilePic/${card.profile_pic}`} className='img-fluid rounded-4 rounded-3 '/>
                                    </Link>
                                    <p className='fs-6 Cabin-text fw-bold text-center'>{generateStars(card.averagereview)}<br></br>{card.name}</p>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                        <div className='col-lg-3 bg-white rounded-3 p-4'>
                            <p className="fs-3 fw-bold Cabin-text">Order Statistics</p>
                            <div className='d-flex flex-column gap-3'>
                                <div className='d-flex flex-column gap-1 bar-1'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>No. of New Orders</p>
                                        <p className='fs-6 Cabin-text'>{newData || 0}</p>
                                    </div>
                                  
                                </div>
                                <div className='d-flex flex-column gap-1 bar-2'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>No. of Confirmed Orders</p>
                                        <p className='fs-6 Cabin-text'>{confirmedData || 0}</p>
                                    </div>
                                    
                                </div>
                                <div className='d-flex flex-column gap-1 bar-3'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>No. of Prepared Orders</p>
                                        <p className='fs-6 Cabin-text'>{preparedData || 0}</p>
                                    </div>
                                    
                                </div>
                                <div className='d-flex flex-column gap-1 bar-1'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>No. of Shipped Orders</p>
                                        <p className='fs-6 Cabin-text'>{shippedData || 0}</p>
                                    </div>
                                  
                                </div>
                                <div className='d-flex flex-column gap-1 bar-2'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>No. of Delivered Orders</p>
                                        <p className='fs-6 Cabin-text'>{deliveredData || 0}</p>
                                    </div>
                                    
                                </div>
                                <div className='d-flex flex-column gap-1 bar-3'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>No. of Completed Orders</p>
                                        <p className='fs-6 Cabin-text'>{completedData || 0}</p>
                                    </div>
                                    
                                </div>
                                <div className='d-flex flex-column gap-1 bar-3'>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='fs-6 Cabin-text'>No. of Canceled Orders</p>
                                        <p className='fs-6 Cabin-text'>{canceledData || 0}</p>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3'>
                        <div className='d-flex col-lg-12 flex-column gap-3'>
                            
                            <div className='col-lg-12 bg-white rounded-3 p-4 mb-3'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <p className="fs-3 fw-bold Cabin-text">Purchase History (Last Week)</p>
                                   
                                </div>
                         
                                <ResponsiveContainer width="95%" height="85%">
                                    <BarChart
                                width = {910}
                                height={300}
                                data={graphData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 5,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="dayName" scale="point" padding={{ left: 30, right: 30 }} />
                                <YAxis scale="linear" tickCount={3} />
                                <Tooltip />
                                <Legend  />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="OrderCount" fill="orange" radius={[3, 3, 0, 0]} background={{ fill: '#fff' }} />
                                
                            </BarChart>
                                </ResponsiveContainer>


                            </div>
                        </div>
                        
                    </div>


                </div>

            </div>
        </>
    );
}

export default CustomerDashboard;