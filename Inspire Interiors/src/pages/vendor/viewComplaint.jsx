import React from "react";

import "./../../styles/vendor/viewOrder.css";
import * as Icon from "react-bootstrap-icons";
import Customer from '../../assets/img/vendor/customer.png';
import {Link} from 'react-router-dom';

const ViewComplaint = () => {
    return (
        <>
            <div className="complaints-container w-100 rounded-3 mb-4 me-5 p-3">
                <div className="d-flex flex-row gap-4">
                    <Link to="/vendor/complaints"><p className="text-dark fs-5 fw-bold Cabin-text text-dark">Complaints</p></Link>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>View</p>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>25786</p>
                </div>
                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text mt-2">Complaint Details - #25786</p>
                        <div className="badge fw-semibold rounded-3 Cabin-text mx-5" style={{ height: "1.5rem", background: "#F6E3AC", color: "#6B4605" }}><Icon.CircleFill size={7} className="mx-1" />Ongoing</div>
                    </div>

                </div>
                <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
                    <div className="d-flex flex-column col-lg-8 gap-3">
                        <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                            <p className="fs-5 fw-semibold Cabin-text">Complaint Details</p>
                            <div className="d-flex flex-column">
                                <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Complaint Type</p>
                                <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>Refund</p>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Complaint</p>
                                <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>I entered this project with high hopes after seeing your impressive portfolio and hearing positive feedback from others. However, the experience I have had thus far has not lived up to my expectations. I understand that challenges can arise in any project, but I am hopeful that you can address these issues promptly and work towards a solution that meets my expectations. </p>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row gap-3">
                                    <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Additional Notes</p>
                                    <Icon.PencilFill color="#035C94" />
                                </div>
                                <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>If any additional specifications add here.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column">
                                    <p className="fs-5 fw-bold Cabin-text">About Customer Avocado</p>
                                </div>
                                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-evenly">
                                    <img style={{ backgroundColor: "#FEE4CB", objectFit:"cover" }} className="img-fluid p-3 w-25 rounded-4 border" src={Customer} />
                                    <div className="d-flex flex-column">
                                        <p className="fs-6 fw-bold" style={{ color: "#3D3D3D" }}>Victor Avocado</p>
                                        <div className="d-flex flex-row gap-2">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#023047" }}>Contact:</p>
                                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047" }}>(936) 361-0310</p>
                                        </div>
                                        <p className="fs-6 fw-bold Cabin-text" style={{ color: "#023047" }}>Huzefa Bagwala</p>
                                        <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047", fontSize: "16px", fontWeight: "400" }}>1131 Dusty Townline, Jacksonville, TX 40322</p>
                                        <button className="contact-btn float-end Cabin-text w-75">Contact Customer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-white rounded-3 p-3 shadow">
                        <p className="fs-5 fw-bold px-3 py-2 Cabin-text">Order Summary</p>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Product</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Customizable Armchair</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Price</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs 4000</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Quantity</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">2</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Shipping</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs 1000</p>
                            </div>
                            <div className="divider" />
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">TOTAL</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs 9000</p>
                            </div>

                            <div className="divider" />
                            <p className="fs-6 fw-bold px-3 my-1 Cabin-text">Delivery Address</p>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Lane No</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Philosophy Home, Legends' Lane</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Town/City</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Philosophy Town</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">District</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Philosophy North</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Postal Code</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">82100</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Country</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">SriLanka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewComplaint;