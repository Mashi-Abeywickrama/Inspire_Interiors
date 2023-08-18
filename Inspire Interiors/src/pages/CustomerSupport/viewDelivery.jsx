import React from "react";

import "./../../styles/vendor/viewOrder.css";
import * as Icon from "react-bootstrap-icons";
import Chair from './../../assets/img/vendor/chair.png';
import VendorSidebar from "./sidebar";
import Navigationbar from "../../components/navigationbar";

const ViewDelivery = () => {
    return (
        <>
            <div className="delivery-container p-4 bg-white rounded-3 mb-4 me-3">
                <div className="col-12 d-flex flex-row gap-4">
                    <p className="text-dark fs-5 fw-bold Cabin-text">Delivery</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>View</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>2564</p>
                </div>
                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text">Delivery Status</p>
                        <div className="badge fw-semibold rounded-3 Cabin-text mx-5" style={{ height: "1.5rem", background: "#F6E3AC", color: "#6B4605" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div>
                    </div>
                    <div className=" divider" />
                </div>


                <div className="d-flex flex-column flex-lg-row">
                    <div className="d-flex col-lg-6 col-12 col-6 flex-column">
                        <div className="col-lg-12 border rounded-3 my-2 shadow">
                            <p className="fs-5 fw-bold px-3 py-2 Cabin-text" style={{ color: "#023047" }}>Product Details</p>
                            <div className="d-flex flex-column flex-lg-row justify-content-start">
                                <img className="img-fluid" src={Chair} alt="Chair" />
                                <div className="d-flex flex-column px-3">
                                    <p className="fs-5 fw-semibold Cabin-text">Customizable Armchair</p>
                                    <div className="d-flex flex-row">
                                        <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Type:</p>
                                        <p className="px-3 fs-6 fw-semibold Cabin-text">Chair</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Color:</p>
                                        <Icon.CircleFill size={30} color="#C1BDB3" className="mx-3" />
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Quantity:</p>
                                        <p className="px-3 fs-6 fw-semibold Cabin-text">2</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Price:</p>
                                        <p className="px-3 fs-6 fw-semibold Cabin-text">Rs 4000 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid col-lg-12 border rounded-3 my-4 shadow">
                            <p className="fs-5 fw-bold px-3 py-2 Cabin-text">Customer Details</p>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-3 Cabin-text">Customer Name:</p>
                                    <p className="fs-6 fw-semibold px-3 Cabin-text">Philosopher Baba</p>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-3 Cabin-text">Shipping Address:</p>
                                    <p className="fs-6 fw-semibold px-3 Cabin-text">123, Philisophy Home, Somewhere</p>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-3 Cabin-text">Contact Number:</p>
                                    <div className="d-flex flex-column">
                                        <p className="fs-6 fw-semibold px-3 Cabin-text float-end">0712456729</p>
                                        <button className="my-3 Cabin-text" style={{ color: "#F5B640", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #F5B640" }}>Contact Customer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid col-lg-5 border rounded-3 p-3 shadow">
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
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs 8000</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Order Date</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">28 Jan, 2023</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Estimated Delivery by</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">01 Feb, 2023</p>
                            </div>
                            <div className="divider" />
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Vendor Confirmation</p>
                                <p className="fs-6 fw-semibold mx-2 py-2 Cabin-text" style={{ color: "#0075E2" }}>Delivered  </p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Customer Confirmation</p>
                                <div className="badge fw-semibold rounded-3 Cabin-text mx-2" style={{ height: "1.5rem", background: "#F6E3AC", color: "#6B4605" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div>
                            </div>
                            <div className="divider" />
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Sold by</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Damro</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider my-2" />
                <div className="d-flex flex-row justify-content-between">
                    <button className="my-2 mx-5 Cabin-text" style={{ color: "#FF5C60", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #FF5C60" }}>Open Dispute</button>
                    <button className="my-2 mx-5 Cabin-text" style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>Mark as Completed</button>
                </div>

            </div>
        </>

    );
}

export default ViewDelivery;