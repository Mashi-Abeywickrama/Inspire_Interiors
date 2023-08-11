import React from "react";
import '../../styles/vendor/viewCustomRequest.css';
import * as Icon from 'react-bootstrap-icons';
import Navigationbar from '../../components/navigationbar';
import VendorSidebar from './sidebar';

import Hall from '../../assets/img/vendor/visiting room.png';
import Chair from './../../assets/img/vendor/chair.png';
import Customer from '../../assets/img/vendor/customer.png';

const ViewCustomRequest = () => {
    return (
        <>

            <div className="custom-container rounded-3 mb-4 ">
                <div className="col-12 d-flex flex-column flex-md-row flex-lg-row gap-4">
                    <div className="col-lg-8 bg-white rounded-3 shadow py-3 px-4">
                        <div className="d-flex flex-row gap-4">
                            <p className="text-dark fs-3 fw-bold Cabin-text">Custom Product</p>
                            <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                            <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Requests</p>
                            <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                            <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Customer Avocado</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Product Description</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>I need a design for my bedroom where no one is going to sleep. Main purpose of this bedroom is we need it comfortably lay there and we have to do figma then SRS then coding which we even dont know how we are going to do. Make sure we have AC as the brains are already gonna blow up. Never EXPECT MONEY from us. We are poor.</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Product Specifications</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>I need a design for my bedroom where no one is going to sleep. Main purpose of this bedroom is we need it comfortably lay there and we have to do figma then SRS then coding which we even dont know how we are going to do. Make sure we have AC as the brains are already gonna blow up. Never EXPECT MONEY from us. We are poor.</p>
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
                            <button className="dlt-btn Cabin-text">Decline Order</button>
                            <button className="acpt-btn Cabin-text">Accept Order</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-column gap-2">
                            <div className="col-lg-12 bg-white rounded-3 shadow px-3 py-2">
                                <div className="d-flex flex-column">
                                    <p className="fs-3 fw-bold Cabin-text">About Customer Avocado</p>
                                </div>
                                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4">
                                    <img style={{ backgroundColor: "#FEE4CB" }} className="img-fluid p-2 rounded-4 border" src={Customer} />
                                    <div className="d-flex flex-column">
                                        <p className="fs-4 fw-bold" style={{ color: "#3D3D3D"}}>Victor Avocado</p>
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
                            <div className="col-lg-12 bg-white rounded-3 shadow px-3 py-2">
                                <p className="fs-3 fw-bold Cabin-text">3D Modal</p>
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