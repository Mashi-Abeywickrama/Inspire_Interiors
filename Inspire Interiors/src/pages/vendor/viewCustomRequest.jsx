import React from "react";
import '../../styles/vendor/viewCustomRequest.css';
import * as Icon from 'react-bootstrap-icons';
import Navigationbar from '../../components/navigationbar';
import VendorSidebar from './sidebar';

import Hall from '../../assets/img/vendor/visiting room.png';
import Chair from './../../assets/img/vendor/chair.png';
import Customer from '../../assets/img/vendor/customer.png';

const ViewCustomRequest = () => (
    <>
        <div className="col-12 d-flex flex-column gap-4" style={{ backgroundColor: "#F1F1F1", height: "100%" }}>
            <Navigationbar />
            <div className="w-auto">
                <div className="d-flex gap-3 w-100 ">
                    <VendorSidebar />
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
                                    <p style={{ color: "#545563", fontSize: "14px", fontWeight: "600" }}>Product Description</p>
                                    <p style={{ color: "#17183B", fontSize: "16px", fontWeight: "400" }}>I need a design for my bedroom where no one is going to sleep. Main purpose of this bedroom is we need it comfortably lay there and we have to do figma then SRS then coding which we even dont know how we are going to do. Make sure we have AC as the brains are already gonna blow up. Never EXPECT MONEY from us. We are poor.</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p style={{ color: "#545563", fontSize: "14px", fontWeight: "600" }}>Product Specifications</p>
                                    <p style={{ color: "#17183B", fontSize: "16px", fontWeight: "400" }}>I need a design for my bedroom where no one is going to sleep. Main purpose of this bedroom is we need it comfortably lay there and we have to do figma then SRS then coding which we even dont know how we are going to do. Make sure we have AC as the brains are already gonna blow up. Never EXPECT MONEY from us. We are poor.</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p style={{ color: "#545563", fontSize: "14px", fontWeight: "600" }}>Reference Images</p>
                                    <div className="d-flex flex-row gap-3">
                                        <img className="img-fluid" src={Hall} alt="hall" />
                                        <img className="img-fluid" src={Hall} alt="hall" />
                                        <img className="img-fluid" src={Hall} alt="hall" />
                                    </div>
                                    <p className="" style={{ color: "#A2A3B1", fontSize: "16px", fontWeight: "700" }}>+ 3 more</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p style={{ color: "#545563", fontSize: "14px", fontWeight: "600" }}>Budget</p>
                                    <p style={{ color: "#17183B", fontSize: "16px", fontWeight: "400" }}>Around 10000 - 20000 Rs</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row gap-3">
                                        <p style={{ color: "#545563", fontSize: "14px", fontWeight: "600" }}>Additional Notes</p>
                                        <Icon.PencilFill color="#035C94" />
                                    </div>
                                    <p style={{ color: "#17183B", fontSize: "16px", fontWeight: "400" }}>If any additional specifications add here.</p>
                                </div>
                                <div className="d-flex flex-row gap-3 justify-content-end">
                                    <button className="dlt-btn">Decline Order</button>
                                    <button className="acpt-btn">Accept Order</button>
                                </div>
                            </div>
                            <div className="col-lg-4 me">
                                <div className="d-flex flex-column gap-2">
                                    <div className="col-lg-12 bg-white rounded-3 shadow px-3 py-2">
                                        <div className="d-flex flex-column">
                                            <p style={{ fontSize: "20px", fontWeight: "600" }}>About Customer Avocado</p>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row flex-md-row gap-4">
                                            <img style={{ backgroundColor: "#FEE4CB" }} className="img-fluid p-3 rounded-4 border" src={Customer} />
                                            <div className="d-flex flex-column">
                                                <p style={{ color: "#3D3D3D", fontSize: "36px", fontWeight: "500" }}>Victor Avocado</p>
                                                <div className="d-flex flex-row gap-2">
                                                    <p style={{ color: "#023047", fontSize: "16px", fontWeight: "600" }}>Contact:</p>
                                                    <p style={{ color: "#023047", fontSize: "16px", fontWeight: "400" }}>(936) 361-0310</p>
                                                </div>
                                                <p style={{ color: "#023047", fontSize: "22px", fontWeight: "600" }}>Huzefa Bagwala</p>
                                                <p style={{ color: "#023047", fontSize: "16px", fontWeight: "400" }}>1131 Dusty Townline, Jacksonville, TX 40322</p>
                                                <button className="contact-btn">Contact Customer</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 bg-white rounded-3 shadow px-3 py-2">
                                        <p style={{fontSize: "20px", fontWeight: "600" }}>3D Modal</p>
                                        <img className="img-fluid px-5" src={Chair}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default ViewCustomRequest;