import React from 'react';

import "../../styles/vendor/overview.css";
import * as Icon from 'react-bootstrap-icons';
import Navigationbar from '../../components/navigationbar';
import VendorSidebar from './sidebar';

import Money from './../../assets/img/vendor/money.svg';

import {Doughnut, Bar} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export const data = {
    labels: ['Round table', 'Sofa', 'Bed', 'Cupboard', 'Chair', 'Painting'],
    datasets: [
        {
            label: 'Revenue',
            data: [12000, 19000, 3000, 5000, 2000, 3000],
            backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            ],
            borderWidth:0,
        },
    ],
};

export const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            label: 'Selling',
            data: [200, 300, 150, 220, 250, 50],
            backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            ],
            borderWidth:0,
        },
    ],
};

const OverView = () => {
    return(
        <>
            <div className='col-12 d-flex flex-column gap-4' style={{backgroundColor:"#F1F1F1" , height:"100%"}}>
                <Navigationbar />
                <div className='w-auto'>
                    <div className='d-flex gap-3 w-100'>
                        <VendorSidebar />
                        <div className='overview-container rounded-3 mb-4'>
                            <div className="d-flex flex-row gap-2 px-4">
                                <p className="text-dark fs-3 fw-bold Cabin-text">Inventory</p>
                                <Icon.ChevronRight color="#A2A3B1" size={25}className="mt-2" />
                                <p className="fs-3 fw-bold Cabin-text" style={{color:"#A2A3B1"}}>Overview</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='d-flex flex-column flex-lg-row flex-md-row gap-4 justify-content-around'>
                                    <div className="col-lg-4 bg-white rounded-3 my-2 shadow px-3 py-2">
                                        <p style={{color:"#023047", fontSize:"28px", fontWeight:"700"}}>Best Sellers</p>
                                        <Doughnut data={data} />
                                    </div>
                                    <div className="col-lg-4 bg-white rounded-3 my-2 shadow px-3 py-2">
                                        <p style={{color:"#023047", fontSize:"28px", fontWeight:"700"}}>Sell History</p>
                                        <Bar className='py-3' data={barData} />
                                    </div>
                                    <div className="col-lg-3">
                                        <div className='d-flex flex-column gap-2 justify-content-between h-100'>
                                            <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                                                <div className='d-flex flex-row gap-5'>
                                                    <img className='img-fluid' src={Money} />
                                                    <div className='d-flex flex-column align-content-center'>
                                                        <p className='m-0' style={{color:"#4F6068", fontSize:"14px", fontWeight:"400"}}>In Stock Price</p>
                                                        <p className='m-0' style={{color:"#023047", fontSize:"20px", fontWeight:"600"}}>LKR 14,751.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                                                <div className='d-flex flex-row gap-5'>
                                                        <img className='img-fluid' src={Money} />
                                                        <div className='d-flex flex-column align-content-center'>
                                                            <p className='m-0' style={{color:"#4F6068", fontSize:"14px", fontWeight:"400"}}>profit</p>
                                                            <p className='m-0' style={{color:"#023047", fontSize:"20px", fontWeight:"600"}}>LKR 14,751.00</p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                                                <div className='d-flex flex-row gap-5'>
                                                        <img className='img-fluid' src={Money} />
                                                        <div className='d-flex flex-column align-content-center'>
                                                            <p className='m-0' style={{color:"#4F6068", fontSize:"14px", fontWeight:"400"}}>Expenses</p>
                                                            <p className='m-0' style={{color:"#023047", fontSize:"20px", fontWeight:"600"}}>LKR 14,751.00</p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 rounded-3 my-2 shadow low-box p-4'>
                                                <div className='d-flex flex-row gap-5'>
                                                        <img className='img-fluid' src={Money} />
                                                        <div className='d-flex flex-column align-content-center'>
                                                            <p className='m-0' style={{color:"#4F6068", fontSize:"14px", fontWeight:"400"}}>Low Stock Items</p>
                                                            <p className='justify-content-center m-0' style={{color:"#023047", fontSize:"20px", fontWeight:"600"}}>2</p>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="col-lg-12 bg-white rounded-3 my-2 shadow">
                                    <div className='d-flex flex-row gap-3'>
                                        <p style={{color:"#023047", fontSize:"28px", fontWeight:"700"}}>Stock</p>
                                        <p className='mt-2' style={{color:"#035C94", fontWeight:"400"}}>See all<Icon.ArrowRight color="#035C94"/></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OverView;