import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// import "./../../styles/vendor/viewOrder.css";
import * as Icon from "react-bootstrap-icons";
import Chair from './../../../assets/img/vendor/chair.png';
import { Link } from 'react-router-dom';

const ViewOrder = () => {
    return (
        <>
            <div className="order-container-customer ps-3 bg-white rounded mb-4 me-3 justify-content-center">
                <div className='row d-flex align-items-center'>
                    <div className="col-md-4 col-sm-12 col-12 fs-5">
                        <Breadcrumb className="fw-bold">
                            <Breadcrumb.Item>
                                My Orders
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                                View Order
                            </Breadcrumb.Item>

                        </Breadcrumb>
                    </div>
                </div>
                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="fs-6 fw-bold text-decoration-underline Cabin-text">Order ID - #76565722</p>
                        <div className="badge fw-semibold rounded Cabin-text mx-5" style={{ height: "1.5rem", background: "#BFE5FD", color: "#000000" }}>
                            <Icon.CircleFill size={7} className="mx-1" />
                            Ongoing
                        </div>
                    </div>
                    <div className=" divider" />
                </div>


                <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3 w-97">
                    <div className="d-flex flex-column col-lg-8 gap-3 f-color-summary">
                        <div className="col-lg-12 bg-white rounded p-4 shadow">
                        <p className="fs-5 fw-bold" style={{ color: "#023047" }}>Product Details</p>
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
                        <div className="col-lg-12 bg-white rounded p-4 shadow f-color-summary">
                        <p className="fs-5 fw-bold">Order Status</p>
                            <div className="d-flex flex-column fs-6">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="d-flex flex-row">
                                        <p className="fw-semibold px-5 Cabin-text">Vender Confirmation:</p>
                                        <p className="fw-normal Cabin-text">Confirmed By Damro</p>
                                    </div>
                                    <p className="fw-semibold px-4 Cabin-text">01 Feb, 2023</p>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fw-semibold px-5 Cabin-text">Package Preparation:</p>
                                    <div className="badge fw-semibold rounded mx-5 Cabin-text" style={{ height: "1.5rem", background: "#BFE5FD", color: "#000000" }}><Icon.CircleFill size={7} className="mx-1" />Ongoing</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fw-semibold px-5 Cabin-text">Shipping:</p>
                                    <div className="badge fw-semibold rounded mx-5 Cabin-text" style={{ height: "1.5rem", background: "#E6E6E6", color: "#979797" }}><Icon.CircleFill size={7} className="mx-1" />Pending</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fw-semibold px-5 Cabin-text">Delivery:</p>
                                    <div className="badge fw-semibold rounded mx-5 Cabin-text" style={{ height: "1.5rem", background: "#E6E6E6", color: "#979797" }}><Icon.CircleFill size={7} className="mx-1" />Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-white rounded p-4 f-color-summary fs-6 fw shadow">
                        <p className="fs-3 fw-bold">Order Summary</p>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between">
                                <p >Product</p>
                                <p >Customizable Armchair</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p >Price</p>
                                <p >Rs 4000</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p >Quantity</p>
                                <p >2</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p >Shipping</p>
                                <p >Rs 1000</p>
                            </div>
                            <hr />
                            <div className="d-flex flex-row justify-content-between">
                                <p >TOTAL</p>
                                <p >Rs 8000</p>
                            </div>

                            <hr />
                            <p className="fs-6 fw-bold my-1 Cabin-text">Delivery Address</p>
                            <div className="d-flex flex-row justify-content-between">
                                <p >Lane No</p>
                                <p >Philosophy Home, Legends' Lane</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p >Town/City</p>
                                <p >Philosophy Town</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p >District</p>
                                <p >Philosophy North</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p >Postal Code</p>
                                <p >82100</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p >Country</p>
                                <p >SriLanka</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <Link to="/customer/orders">
                    <button className="my-2 rounded Cabin-text bg-transparent"
                    style={{ color: "#FF5C60", border: "1px solid #FF5C60" }}>
                        Cancel Order
                    </button>
                </Link>

            </div>
        </>

    );
}

export default ViewOrder;