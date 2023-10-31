import React, {useState,useEffect} from 'react';
import '../../styles/customerSupport/customerSupportdashboard.css';


import Money from './../../assets/img/vendor/money.svg';

import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { PieChart, Pie, Sector, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MDBDataTableV5, MDBTable } from 'mdbreact';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Columns = [
    {
      label: 'CUSTOMER NAME',
      field: 'customer',
      sort: 'asc',
      width: 150
    },
    {
      label: 'INQUIRY DATE',
      field: 'inquiry',
      sort: 'asc',
      width: 200
    },
];

const Rows = [
    {
        customer: 'John Doe',
        inquiry: 'LKR 14,751.00',
    },
    {
        customer: 'John Doe',
        inquiry: 'LKR 14,751.00',
    },
    {
        customer: 'John Doe',
        inquiry: 'LKR 14,751.00',
    },
    {
        customer: 'John Doe',
        inquiry: 'LKR 14,751.00',
    }
];

const CustomerSupportDashboard = () =>{

    const [quotationData, setQuotationData] = useState([]);
    const [refundData, setRefundData] = useState([]);
    const [complaintData, setComplaintData] = useState([]);

    const apiBaseURL = 'http://localhost:8080';

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
    // Make an Axios GET request to your Spring Boot API endpoint
    axiosInstance.get('/inquiry-count-quotation')
      .then((response) => {
        // Handle the successful response here
        setQuotationData(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
      });

      axiosInstance.get('/inquiry-count-refund')
      .then((response) => {
        // Handle the successful response here
        setRefundData(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
      });

      axiosInstance.get('/inquiry-count-complaint')
      .then((response) => {
        // Handle the successful response here
        setComplaintData(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts


    const barChartData = (quotationData, refundData, complaintData) => {
        const mergedData = quotationData.map((quotationItem) => {

            const matchingRefund = refundData.find(
                (refundItem) => refundItem.dayName === quotationItem.dayName
            );

            const matchingComplaint = complaintData.find(
                (complaintItem) => complaintItem.dayName === quotationItem.dayName
            );
            
            if (matchingRefund ) {
                return {
                    ...quotationItem,
                    ...matchingRefund,
                    ...matchingComplaint,
                };
                
            }
            else {
                return {
                    ...quotationItem,
                    refund_count: 0,
                };
            }   
            
        });
        return mergedData;
    };

    const mergedData = barChartData(quotationData, refundData, complaintData);
    

return (
    <>
        <div className='dashboard-container support-dashboard me-5'>
            <div className='d-flex flex-column gap-3'>
                <div className='d-flex flex-column flex-lg-row flex-md-row gap-3'>
                    <div className='col-lg-9 d-flex bg-white shadow rounded-3 flex-row gap-1'>
                        <div className=' d-flex flex-column '>
                            <p className='fs-5 fw-bold Cabin-text p-3' style={{ color: "#035C94" }}>Inquiries Received</p>
                            <p className='fs-6 fw-normal Cabin-text px-3 ' style={{ color: "#035C94" }}>This Week</p>
                            <BarChart
                                width = {910}
                                height={300}
                                data={mergedData}
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
                                <Bar dataKey="Quotations" fill="orange" radius={[3, 3, 0, 0]} background={{ fill: '#fff' }} />
                                <Bar dataKey="Refund" fill="brown" radius={[3, 3, 0, 0]} background={{ fill: '#fff' }} />
                                <Bar dataKey="Other Complaints" fill="#025C90" radius={[3, 3, 0, 0]} background={{ fill: '#fff' }} />
                            </BarChart>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='d-flex flex-column gap-2 justify-content-between h-100'>
                            <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                                <div className='d-flex flex-row gap-5'>
                                    <img className='img-fluid' src={Money} />
                                    <div className='d-flex flex-column align-content-center'>
                                    <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>In Stock Price</p>
                                    <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR 14,751.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                                <div className='d-flex flex-row gap-5'>
                                    <img className='img-fluid' src={Money} />
                                    <div className='d-flex flex-column align-content-center'>
                                    <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>profit</p>
                                    <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR 14,751.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                                <div className='d-flex flex-row gap-5'>
                                    <img className='img-fluid' src={Money} />
                                    <div className='d-flex flex-column align-content-center'>
                                    <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>profit</p>
                                    <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR 14,751.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                                <div className='d-flex flex-row gap-5'>
                                    <img className='img-fluid' src={Money} />
                                    <div className='d-flex flex-column align-content-center'>
                                    <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>Expenses</p>
                                    <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR 14,751.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='col-12'>
                    <div className='d-flex flex-column flex-lg-row flex-md-row gap-3'>
                        <div className='col-lg-8 bg-white rounded-3 shadow p-3'>
                        <div className="d-flex flex-row gap-4 mt-4">
                            <p className="fs-5 fw-bold Cabin-text">Pending Refund Requests</p>
                            <p className="mt-1 fs-6 fw-semibold Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1"/></p>
                        </div>
                        <div className='p-4'>
                            <MDBDataTableV5 responsive
                            striped
                            bordered
                            small
                            columns={Columns}
                            rows={Rows}
                            sortable={false}
                            exportToCSV={true}
                            searching={false}
                            paging={false} />
                        </div>
                        </div>
                        <div className='col-lg-4 bg-white rounded-3 shadow p-4'>
                            <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
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
            </div>

        </div>

    </>
)};

export default CustomerSupportDashboard;