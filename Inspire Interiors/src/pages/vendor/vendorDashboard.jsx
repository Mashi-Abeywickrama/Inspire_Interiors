import React,{useEffect, useState} from 'react';
import '../../styles/vendor/vendorDashboard.css';
import * as Icon from 'react-bootstrap-icons';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useSession} from '../../constants/SessionContext';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// const linedata = [
//     {
//       name: 'JAN',
//       Ongoing: 70,
//       Completed: 90,
//     },
//     {
//       name: 'FEB',
//       Ongoing: 20,
//       Completed: 40,
//     },
//     {
//       name: 'MAR',
//       Ongoing: 100,
//       Completed: 80,
//     },
//     {
//       name: 'APR',
//       Ongoing: 30,
//       Completed: 50,
//     },
//     {
//       name: 'MAY',
//       Ongoing: 100,
//       Completed: 80,
//     },
//     {
//       name: 'JUN',
//       Ongoing: 20,
//       Completed: 40,
//     }
// ];

const generateStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars >= 0.5;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Icon.StarFill key={i} color='#FFC00C' size={25} />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<Icon.StarHalf key={i} color='#FFC00C' size={25} />);
      } else {
        stars.push(<Icon.Star key={i} color='#FFC00C' size={25} />);
      }
    }
    return stars;
};

const currentDate = new Date();
const oneWeekAgo = new Date(currentDate);
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

const getDayOfWeek = (date) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getDay()];
};

const getTotalPrice = (orders, status) => {
    return orders
      .filter((order) => order.status === status)
      .reduce((total, order) => total + order.price, 0);
};

const VendorDashboard = () => {
    const [orderData, setOrderData] = useState([]);
    const [variationData, setVariationData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [newOrderCount, setNewOrderCount] = useState(null);
    const [CompletedOrderCount, setCompletedOrderCount] = useState(null);
    const [OngoingOrderCount, setOngoingOrderCount] = useState(null);
    const [CanceledOrderCount, setCanceledOrderCount] = useState(null);

    const [linedata, setLinedata] = useState([]);
    const [bardata, setBardata] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);

    const [soldproductCount, setSoldproductCount] = useState(0);

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
        axiosInstance
            .get(`/getorder/vendor/${userId}`)
            .then((response) => {
                setOrderData(response.data);
                console.log(response.data);

                const quantityArray = response.data.map((order) => order.quantity);
                const totalproductQuantity = quantityArray.reduce((acc, quantity) => acc + quantity, 0);

                setSoldproductCount(totalproductQuantity);

                const lastWeek = [];

                let totalRevenue = 0;

                for (let i = 0; i < 7; i++) {
                    const day = new Date(oneWeekAgo);
                    day.setDate(day.getDate() + i);
                    const dayName = getDayOfWeek(day).slice(0, 3);

                    const dataForDay = response.data.filter((order) => {
                        const orderDate = new Date(order.date);
                        return orderDate.toDateString() === day.toDateString();
                    });

                    const OngoingTotal = dataForDay.reduce((total, order) => {
                        return total + (order.status !== 'Completed' && order.status !== 'Canceled' ? order.price : 0);
                    }, 0);

                    const CompletedTotal = dataForDay.reduce((total, order) => {
                        return total + (order.status === 'Completed' ? order.price : 0);
                    }, 0);

                    totalRevenue += OngoingTotal + CompletedTotal;

                    lastWeek.push({
                        name: dayName,
                        Ongoing: OngoingTotal,
                        Completed: CompletedTotal,
                    });
                }

                setTotalRevenue(totalRevenue);
                setLinedata(lastWeek);

                const newOrders = response.data.filter((order) => order.status === "New");
                setNewOrderCount(newOrders.length);

                const completedOrders = response.data.filter((order) => order.status === "Completed");
                setCompletedOrderCount(completedOrders.length);

                const OngoingOrders = response.data.filter((order) => order.status !== "Completed" && order.status !== "New" && order.status !== "Canceled" );
                setOngoingOrderCount(OngoingOrders.length);

                const canceledOrders = response.data.filter((order) => order.status === "Canceled");
                setCanceledOrderCount(canceledOrders.length);

                const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

                const BarDataArray = weekdays.map((day) => ({
                    name: day,
                    Total: 0,  
                }));


                response.data.forEach((order) => {
                    const orderDate = new Date(order.date);
                    if (orderDate >= oneWeekAgo && orderDate <= currentDate) {
                        const dayOfWeek = getDayOfWeek(orderDate);
                        const index = weekdays.indexOf(dayOfWeek);
                        if (index !== -1) {
                            BarDataArray[index].Total++;
                        }
                    }
                });

                setBardata(BarDataArray);
                console.log(BarDataArray);

            }).catch((error) => {
                console.log("Fetching error", error);
        });
    }, []);

    useEffect(() => {
        axiosInstance
            .get(`/viewvariations`)
            .then((response) => {
                setVariationData(response.data);
                console.log(response.data);
            }).catch((error) => {
                console.log("Fetching error", error);
        });
    }, []);

    useEffect(() => {  
        axiosInstance
            .get(`/viewproducts/vendor/${userId}`)
            .then((response) => {
                setProductData(response.data);
                console.log(response.data);
            }).catch((error) => {
                console.log("Fetching error", error);
        });
    }, []);

    const mergeData = (variationData, productData) => {
        const mergedData = productData.map(
            (productItem) => {
                const matchingVariation = variationData.find(
                    (variation) => variation.product_id === productItem.product_id);

                if(matchingVariation) {
                    return {
                        ...productItem,
                        ...matchingVariation,
                    };
                } else {
                    return productItem;
                }
            });
            const totalQuantity = mergedData.reduce((acc, item) => acc + item.quantity, 0);   
            return {mergedData, totalQuantity};
    };

    const mergedproductVariation = mergeData(variationData, productData);
    console.log("merged Data", mergedproductVariation);

    const TotalInstockProduct = mergedproductVariation.totalQuantity;
    console.log("Total Instock Product", TotalInstockProduct);
    
    const barchartdata = bardata.map((data) => ({
        name: data.name.slice(0, 3), // Take the first three characters for abbreviated day name
        uv: data.Total , // Sum of Ongoing and Completed
    }));

    return (
        <>
            <div className='dashboard-container vendor-dashboard mb-4 me-5'>
                <div className='col-12 d-flex flex-column gap-3 '>
                    <div className='col-12 d-flex flex-column flex-lg-row flex-md-row gap-3'>
                        <div className='col-lg-8 bg-white rounded-3 shadow p-4'>
                            <Link to="/vendor/inventory"> <p className='fs-5 fw-bold Cabin-text ' style={{ color: "#035C94" }}>Revenue Made</p></Link>
                            <div className='d-flex flex-row justify-content-evenly'>
                                <div className='d-flex flex-row gap-3'>
                                    <p className='fs-6 fw-semibold' style={{ color: "#035C94" }}>Total Revenue from Last Week:</p>
                                    <p className='fs-6 fw-semibold' style={{ color: "#023247" }}>LKR {totalRevenue}</p>
                                </div>
                            </div>
                            <ResponsiveContainer width="80%" height="80%">
                            <LineChart data={linedata} className='mt-3'>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="Ongoing" stroke="#FFC00C" strokeWidth={2} />
                                <Line type="monotone" dataKey="Completed" stroke="#035C94" strokeWidth={2} />
                            </LineChart>
                            </ResponsiveContainer>

                        </div>
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <p className='fs-5 fw-semibold' style={{ color: "#035C94" }}>Average Rating</p>
                            <div className='d-flex flex-column gap-3 p-4 avg-div justify-content-center align-items-center rounded-5' style={{width:"90%"}}>
                                <p className=' fw-bold m-0' style={{ color: "white", fontSize:"4rem" }}>4.5</p>
                                <div className="d-flex flex-row gap-1 mb-2">{generateStars(4.5)}</div>
                                    
                                <p className='fs-6 fw-semibold m-0' style={{ color: "white" }}>19 Ratings</p>
                            </div>
                            <div className='d-flex flex-column mt-5'>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>5</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={75} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>6</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>4</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={50} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>5</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>3</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={35} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>4</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>2</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={20} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>3</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <p className='fw-normal fs-6'>1</p>
                                    <Icon.StarFill color='#FFC00C' size={20} />
                                    <ProgressBar now={10} className='mt-1 mx-1' />
                                    <p className='fs-6 fw-normal'>2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-flex flex-column flex-lg-row flex-md-row gap-3'>
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <div className='d-flex flex-row justify-content-between'>
                                <Link to="/vendor/inventory"><p className='fs-5 fw-semibold' style={{ color: "#035C94" }}>Product Sold</p></Link>
                            </div>
                            <RadialBarChart
                                width={400}
                                height={300}
                                cx={150}
                                cy={150}
                                innerRadius={60}
                                outerRadius={140}
                                barSize={20}
                                data = {[
                                    {
                                      name: "Sold",
                                      productCount: soldproductCount,
                                      fill: "#035C94",
                                    },
                                    {
                                      name: "In stock",
                                      productCount: 48,
                                      fill: "#FFC00C",
                                    },
                                  ]}
                            >
                                <RadialBar
                                    minAngle={15}
                                    label={{ fill: '#FFFFFF', position: 'insideStart' }}
                                    background
                                    clockWise
                                    dataKey="productCount" />
                                <Legend
                                    iconSize={10}
                                    width={100}
                                    height={40}
                                    layout="horizonal"
                                    horizonalAlign="middle" />
                                <Tooltip/>
                            </RadialBarChart>
                        </div>
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <div className='d-flex flex-row justify-content-between'>
                                <Link to="/vendor/order"><p className='fs-5 fw-semibold' style={{ color: "#035C94" }}>Order Activity</p></Link>
                            </div>
                            <ResponsiveContainer width="100%" height="85%">
                                <BarChart width={150} height={50} data={barchartdata}>
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
                            <Link to="/vendor/order"><p className='fs-5 fw-semibold' style={{ color: "#FFFFFF" }}>Order Stats</p></Link>
                            <div className='d-flex flex-column gap-4'>
                                <div className='d-flex flex-row gap-4'>
                                    <div className='background-box rounded-4 p-3'>
                                        <Icon.PersonFillAdd color='#FFC00C' size={40} />
                                        <p className='fw-bold fs-4 m-0' style={{ color: "#FFC00C" }}>{newOrderCount}</p>
                                        <p className='fw-semibold fs-6 m-0' style={{ color: "#FFFFFF", opacity: "0.5" }}>New Orders</p>
                                    </div>
                                    <div className='background-box rounded-4 p-3'>
                                        <Icon.PersonFillCheck color='#FFC00C' size={40} />
                                        <p className='fw-bold fs-4 m-0' style={{ color: "#FFC00C" }}>{CompletedOrderCount}</p>
                                        <p className='fw-semibold fs-6 m-0' style={{ color: "#FFFFFF", opacity: "0.5" }}>Completed Orders</p>
                                    </div>
                                </div>
                                <div className='d-flex flex-row gap-4'>
                                    <div className='background-box rounded-4 p-3'>
                                        <Icon.PersonFillExclamation color='#FFC00C' size={40} />
                                        <p className='fw-bold fs-4 m-0' style={{ color: "#FFC00C" }}>{OngoingOrderCount}</p>
                                        <p className='fw-semibold fs-6 m-0' style={{ color: "#FFFFFF", opacity: "0.5" }}>Ongoing Orders</p>
                                    </div>
                                    <div className='background-box rounded-4 p-3'>
                                        <Icon.PersonFillX color='#FFC00C' size={40} />
                                        <p className='fw-bold fs-4 m-0' style={{ color: "#FFC00C" }}>{CanceledOrderCount}</p>
                                        <p className='fw-semibold fs-6 m-0' style={{ color: "#FFFFFF", opacity: "0.5" }}>Canceled Orders</p>
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