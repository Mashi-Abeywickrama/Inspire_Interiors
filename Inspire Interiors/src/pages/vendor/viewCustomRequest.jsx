import React from "react";
import '../../styles/vendor/viewCustomRequest.css';
import * as Icon from 'react-bootstrap-icons';
import Navigationbar from '../../components/navigationbar';
import VendorSidebar from './sidebar';

import Hall from '../../assets/img/vendor/visiting room.png';
import Chair from './../../assets/img/vendor/chair.png';
import Customer from '../../assets/img/vendor/customer.png';
import {Link} from 'react-router-dom';

const ViewCustomRequest = () => {
    return (
        <>

            <div className="custom-container rounded-3 mb-4 ">
                <div className="col-12 d-flex flex-column flex-md-row flex-lg-row gap-4">
                    <div className="col-lg-8 bg-white rounded-3 shadow p-4">
                        <div className="d-flex flex-row gap-4">
                            <Link to="/vendor/order"><p className="text-dark fs-5 fw-bold Cabin-text">Orders</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <Link to="/vendor/order/customizeorders"><p className="text-dark fs-5 fw-bold Cabin-text">Custom Product</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Requests</p>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Customer Avocado</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Product Description</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>I trust you're doing well. I am reaching out because I am in need of your expertise for an upcoming interior design project. Having seen the remarkable work you've showcased on your website and social media, I am truly impressed by your creative vision and attention to detail.</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Product Specifications</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>I am currently in the process of interior e.g., renovating my living room, designing a new office space, etc, and I am seeking professional guidance to bring my vision to life. I value mention any specific design elements or styles you admire from their portfolio and believe that your approach aligns perfectly with my aesthetic preferences.</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Reference Images</p>
                            <div className="d-flex flex-row gap-3">
                                <img className="img-fluid" src={Hall} alt="hall" />
                                <img className="img-fluid" src={Hall} alt="hall" />
                                <img className="img-fluid" src={Hall} alt="hall" />
                            </div>
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#A2A3B1"}}>+ 3 more</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Budget</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>Around 10000 - 20000 Rs</p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row gap-3">
                                <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Additional Notes</p>
                                <Icon.PencilFill color="#035C94" />
                            </div>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>If any additional specifications add here.</p>
                        </div>
                        <div className="d-flex flex-row gap-3 justify-content-end">
                            <Link to="/vendor/order/customizeorders"><button className="dlt-btn Cabin-text">Decline Order</button></Link>
                            <Link to="/vendor/order/customizeorders"><button className="acpt-btn Cabin-text">Accept Order</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-column gap-2">
                            <div className="col-lg-12 bg-white rounded-3 shadow p-4">
                                <div className="d-flex flex-column">
                                    <p className="fs-5 fw-bold Cabin-text">About Customer Avocado</p>
                                </div>
                                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4">
                                    <img style={{ backgroundColor: "#FEE4CB", objectFit:"cover" }} className="img-fluid p-3 rounded-4 border" src={Customer} />
                                    <div className="d-flex flex-column">
                                        <p className="fs-6 fw-bold" style={{ color: "#3D3D3D"}}>Victor Avocado</p>
                                        <div className="d-flex flex-row gap-2">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#023047"}}>Contact:</p>
                                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047"}}>(936) 361-0310</p>
                                        </div>
                                        <p className="fs-6 fw-bold Cabin-text" style={{ color: "#023047"}}>Huzefa Bagwala</p>
                                        <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047", fontSize: "16px", fontWeight: "400" }}>1131 Dusty Townline, Jacksonville, TX 40322</p>
                                        <button className="contact-btn float-end Cabin-text w-75">Contact Customer</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 bg-white rounded-3 shadow p-4">
                                <p className="fs-5 fw-bold Cabin-text">3D Modal</p>
                                <img className="img-fluid px-5" src={Chair} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default ViewCustomRequest;