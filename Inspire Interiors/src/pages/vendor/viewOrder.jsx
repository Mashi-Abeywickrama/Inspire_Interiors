import React from "react";

import "./../../styles/vendor/viewOrder.css";
import * as Icon from "react-bootstrap-icons";
import Chair from './../../assets/img/vendor/chair.png';
import VendorSidebar from "./sidebar";
import Navigationbar from "../../components/navigationbar";
import {Link} from 'react-router-dom';

const ViewOrder = () => {
    return (
        <>
            <div className="order-container w-100 rounded-3 mb-4 me-5 p-3">
                <div className="d-flex flex-row gap-4">
                    <Link to="/vendor/order"><p className="text-dark fs-5 fw-bold Cabin-text">Orders</p></Link>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Delayed</p>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>25786</p>
                </div>
                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text">Order Details - #25786</p>
                        <div className="badge fw-semibold rounded-3 Cabin-text mx-5" style={{ height: "1.5rem", background: "#F6E3AC", color: "#6B4605" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div>
                    </div>

                </div>
                <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
                    <div className="d-flex flex-column col-lg-8 gap-3">
                        <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                        <p className="fs-5 fw-bold px-3 py-2 Cabin-text" style={{ color: "#023047" }}>Product Details</p>
                            <div className="d-flex flex-column flex-lg-row justify-content-evenly">
                                <img className="img-fluid" src={Chair} alt="Chair" />
                                <div className="d-flex flex-column px-4 mt-4">
                                    <p className="fs-5 fw-semibold Cabin-text">Customizable Armchair</p>
                                    <div className="d-flex flex-row">
                                        <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Type:</p>
                                        <p className="px-3 fs-6 fw-semibold Cabin-text">Chair</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Color:</p>
                                        <Icon.CircleFill size={20} color="#C1BDB3" className="mx-3" />
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
                        <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                        <p className="fs-5 fw-bold px-3 py-2 Cabin-text">Order Status</p>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="d-flex flex-row gap-5">
                                        <p className="fs-6 fw-semibold px-5 Cabin-text">Vender Confirmation:</p>
                                        <p className="fs-6 fw-normal Cabin-text">Confirmed By Damro</p>
                                    </div>
                                    <p className="fs-6 fw-semibold px-4 Cabin-text">01 Feb, 2023</p>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-5 Cabin-text">Package Preparation:</p>
                                    <div className="badge fw-semibold rounded-3 mx-5 Cabin-text" style={{ height: "1.5rem", background: "#BFE5FD", color: "#000000" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-5 Cabin-text">Shipping:</p>
                                    <div className="badge fw-semibold rounded-3 mx-5 Cabin-text" style={{ height: "1.5rem", background: "#E6E6E6", color: "#979797" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-5 Cabin-text">Delivery:</p>
                                    <div className="badge fw-semibold rounded-3 mx-5 Cabin-text" style={{ height: "1.5rem", background: "#E6E6E6", color: "#979797" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-white rounded-3 p-4 shadow">
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
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs 8000</p>
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
}

export default ViewOrder;