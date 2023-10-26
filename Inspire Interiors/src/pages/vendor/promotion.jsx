import React, { useState, useEffect } from "react";

import '../../styles/vendor/promotionRequest.css';
import * as Icon from "react-bootstrap-icons";
import BlackSofa from "../../assets/img/vendor/blacksofa.png";
import YellowSofa from "../../assets/img/vendor/yellowsofa.png";
import Customer from '../../assets/img/vendor/customer.png';
import Sofa from "../../assets/img/vendor/sofa.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import axios from "axios";
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import {useSession} from "../../constants/SessionContext";
 


const receivedData = {
    columns: [
        {
          label: '',
          field: 'product',
          sort: 'asc',
          width: 250
        },
        {
          field: 'status',
          sort: 'asc',
          width: 270
        },
    ],
    rows: [
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/promotion/promotionrequest"><img style={{ backgroundColor: "#FEE4CB", objectFit: "cover", width:"80px" }} className="img-fluid p-0 rounded-4 border" src={Customer} /></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Interior Designer</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/promotion/Promotionrequest"><img style={{ backgroundColor: "#FEE4CB", objectFit: "cover", width:"80px" }} className="img-fluid p-0 rounded-4 border" src={Customer} /></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Interior Designer</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/promotion/Promotionrequest"><img style={{ backgroundColor: "#FEE4CB", objectFit: "cover", width:"80px" }} className="img-fluid p-0 rounded-4 border" src={Customer} /></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Interior Designer</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/promotion/Promotionrequest"><img style={{ backgroundColor: "#FEE4CB", objectFit: "cover", width:"80px" }} className="img-fluid p-0 rounded-4 border" src={Customer} /></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Interior Designer</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
    ]
}

const largeTableData = {
    columns: [
        {
          label: 'PRODUCT',
          field: 'product',
          sort: 'asc',
          width: 150
        },
        {
          label: 'DESIGNER',
          field: 'designer',
          sort: 'asc',
          width: 270
        },
        {
          label: 'DATE',
          field: 'date',
          sort: 'asc',
          width: 200
        },
        {
          label: 'PRODUCT PRICE',
          field: 'price',
          sort: 'asc',
          width: 150
        },
        {
           label: 'COMMISION RATE',
           field: 'rate',
           sort: 'asc',
           width: 100
        },
        {
          label: 'SOLD',
          field: 'sold',
          sort: 'asc',
          width: 100
        },
        {
          label: 'PAYMENT STATUS',
          field: 'status',
          sort: 'asc',
          width: 100
        }
    ],
    rows: [
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='delayed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Overdue</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
        },
    ]
}

const Promotion = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const[statusData, setStatusData] = useState([]);
    console.log(statusData)

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
        // Fetch data from your backend API
        axiosInstance
          .get(`/promotion/vendor/${userId}`)
          .then((response) => {
            setStatusData(response.data);
            // console.log(response.data);
          })
          .catch((error) => {
            console.log('Error fetching data:', error);
        });
    }, []);

    const Columns = [
        {
            label: 'OFFER OVERVIEW',
            field: 'overview',
            sort: 'asc',
            width: 300
        },
        {
            label:'STATUS',
            field: 'status',
            sort: 'asc',
            width: 250
        },

    ];

    const findStatus = (status) => {
        if(status == 0){
            return "Pending";
        } else if(status == 1){
            return "Accepted";
        }
    };

    const AcceptedData = statusData.filter(vendoroffer => vendoroffer.offerstatus == 1);
    console.log(AcceptedData);

    const PendingData = statusData.filter(vendoroffer => vendoroffer.offerstatus == 0);

    const Rows1 = AcceptedData.map(vendoroffer=>({
        overview: <Link to={`/vendor/promotion/Promotionrequest?id=${vendoroffer.offerid}`}><p className='align-items-center text-dark text-uppercase fs-6 fw-semibold mt-3 m-0'>{vendoroffer.offeroverview}</p></Link>,
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>{findStatus(vendoroffer.offerstatus)}</p></div>
    }));

    const Rows = PendingData.map(vendoroffer=>({
        overview: <Link to={`/vendor/promotion/Promotionrequest?id=${vendoroffer.offerid}`}><p className='align-items-center text-dark text-uppercase fs-6 fw-semibold mt-3 m-0'>{vendoroffer.offeroverview}</p></Link>,
        status: <div className='ongoing d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>{findStatus(vendoroffer.offerstatus)}</p></div>

    }));

    return (
        <>

            <div className="promotion-container background-promotion accordion rounded-3 mb-4 me-5">
                <div className="col-12 d-flex flex-column">
                    <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between p-3">
                        <div className='d-flex flex-row gap-4'>
                            <p className="text-dark fs-5 fw-bold Cabin-text ">Promotion</p>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Overview</p>
                        </div>
                        <Link to='/vendor/promotion/browsedesigner'><p className="fs-5 text-dark Cabin-text fw-bold">Browse Designers<Icon.ArrowRight className='mx-2' color='black' size={20}/></p></Link>
                    </div>
                    <div className=" col-12 d-flex flex-column flex-lg-row flex-md-row gap-3">
                        <div className="col-lg-8 bg-white rounded-3 mb-2 shadow" style={{ height: "10%" }}>
                            <div className="d-flex flex-row gap-3 p-3">
                                <p className="fs-5 fw-bold Cabin-text">Partnered Designers</p>
                                <Link to="/vendor/promotion/mynetwork"><p className="fs-6 fw-semibold mt-1 Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1" /></p></Link>
                            </div>
                            <div className="d-flex flex-column">
                                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="row row-cols-1 row-cols-md-3 g-4 my-4 mx-4">
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                        <div class="row row-cols-1 row-cols-md-3 g-4 my-4 mx-4">
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                        <div class="row row-cols-1 row-cols-md-3 g-4 my-4 mx-4">
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
                                                            <div class="card-body m-0 p-0 mt-3">
                                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                                    <div className="d-flex flex-column">
                                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                                    </div>
                                                                    <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border bg-white rounded-3 mb-2 shadow p-3">
                            <div className="d-flex flex-row gap-3 p-3">
                                <p className="fs-5 fw-bold Cabin-text">My Network</p>
                                <Link to="/vendor/promotion/mynetwork"><p className="fs-6 fw-semibold mt-1 Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1" /></p></Link>
                            </div>
                            <div className="d-flex flex-column my-2">
                                <Tabs
                                    defaultActiveKey="Sent"
                                    id="uncontrolled-tab-example"
                                    className="mb-3 bg-white tab"
                                >
                                    <Tab eventKey="Sent" title="Sent">
                                        <div className='my-2'>

                                            <MDBDataTableV5 responsive
                                                striped
                                                bordered
                                                small
                                                columns={Columns}
                                                rows={Rows}
                                                sortable={false}
                                                exportToCSV={true}
                                                paging={false}
                                                searching={false} />

                                        </div>
                                    </Tab>
                                    <Tab eventKey="Accepted" title="Accepted">
                                        <div className=''>

                                            <MDBDataTableV5 responsive
                                                striped
                                                bordered
                                                small
                                                columns={Columns}
                                                rows={Rows1}
                                                sortable={false}
                                                exportToCSV={true}
                                                paging={false}
                                                searching={false} />

                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-12 container-fluid border bg-white rounded-3 my-2 shadow">
                        <div className="d-flex flex-row gap-3 p-3">
                            <p className="fs-5 fw-bold Cabin-text">Sales From Paid Promotions</p>
                            <Link to="/vendor/promotion/expenses"><p className="fs-6 fw-semibold mt-1 Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1" /></p></Link>
                        </div>

                        <div className='p-3'>

                            <MDBDataTableV5 responsive
                                striped
                                bordered
                                small
                                data={largeTableData}
                                sortable={false}
                                exportToCSV={true}
                                paging={false}
                                searching={false} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Promotion;