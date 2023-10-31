import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// import "./../../styles/vendor/viewOrder.css";
import * as Icon from "react-bootstrap-icons";
import Chair from './../../../assets/img/vendor/chair.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSession } from '../../../constants/SessionContext';
import { useState, useEffect } from 'react';

const ViewOrder = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const orderID = decodeURIComponent(splitURL[6]);


        const [orderData, setOrderData] = useState([]);
        const [productData, setProductData] = useState([]);
        const [variationData, setVariationData] = useState([]);

        const apiBaseURL = "http://localhost:8080";

        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 5000,
        });

        useEffect(() => {
            axiosInstance
            .get(`/getorder/${orderID}`)
            .then((response) => {
                console.log(response.data);
                setOrderData(response.data);
            })
            .catch((error) => {
                console.log("fetching Error", error);
            });
        }, []);

        useEffect(() => {
            axiosInstance
                .get(`/viewproducts/${orderData.product}`)
                .then((response2) => {
                    console.log("Response data:", response2.data);
                    setProductData(response2.data);
                })
                .catch((error) => {
                    if (error.response) {
                        // The server responded with a status code other than 2xx.
                        console.log("Server responded with status code:", error.response.status);
                        console.log("Error message from server:", error.response.data);
                    } else {
                        // The request was not made, possibly due to a network error.
                        console.log("Network error:", error.message);
                    }
                });
        }, [orderData.product]);
        

        useEffect(() => {
            axiosInstance
            .get(`/viewvariations/${orderData.variation_id}`)
            .then((response3) => {
                console.log(response3.data);
                setVariationData(response3.data);
            })
            .catch((error) => {
                if (error.response) {
                    console.log("Server responded with status code:", error.response.status);
                    console.log("Error message from server:", error.response.data);
                } else {
                    console.log("Network error:", error.message);
                }
            });
        }, [orderData.variation_id]);

        const getOrderStatus = (status) => {
            const statusDetails = {
            New: {
                className: 'new d-flex gap-2 align-items-center',
                text: 'New',
            }, 
            Completed: {
                className: 'completed d-flex gap-2 align-items-center',
                text: 'Completed',
            },
            Confirmed: {
                className: 'ongoing d-flex gap-2 align-items-center',
                text: 'Confirmed',
            },

            Prepared: {
                className: 'ongoing d-flex gap-2 align-items-center',
                text: 'Prepared',
            },

            Shipped: {
                className: 'ongoing d-flex gap-2 align-items-center',
                text: 'Shipped',
            },

            Delivered: {
                className: 'ongoing d-flex gap-2 align-items-center',
                text: 'Delivered',
            },
            Ongoing: {
                className: 'ongoing d-flex gap-2 align-items-center',
                text: 'Ongoing',
            },
            Recieved: {
                className: 'ongoing d-flex gap-2 align-items-center',
                text: 'Recieved',
            },
            Delayed: {
                className: 'delayed d-flex gap-2 align-items-center',
                text: 'Delayed',
            },
            Cancelled: {
                className: 'outstock d-flex gap-2 align-items-center',
                text: 'Canceled',
            },
            };

            
            if (statusDetails.hasOwnProperty(status)) {
            const { className, text } = statusDetails[status];
            return (
                <div className={className}>
                <i className="bi bi-circle-fill tag-icon"></i>
                <p className="m-0">{text}</p>
                </div>
            );
            }
            return null;
        };

        const getOrderStatusClass = (status) => {
            const statusDetails = {
            New:  'new d-flex gap-2 align-items-center',
            
            Completed: 'completed d-flex gap-2 align-items-center',

            Confirmed: 'ongoing d-flex gap-2 align-items-center',

            Prepared: 'ongoing d-flex gap-2 align-items-center',
                
            Shipped: 'ongoing d-flex gap-2 align-items-center',

            Recieved: 'ongoing d-flex gap-2 align-items-center',
            
            Delayed: 'delayed d-flex gap-2 align-items-center',
                
            Cancelled:  'outstock d-flex gap-2 align-items-center',
                
            };

            
            if (statusDetails.hasOwnProperty(status)) {
            return (
                statusDetails[status]
            );
            }
            return null;
        };

        console.log(orderData.product);
        console.log(orderData.variation_id);

        const discountedPrice = productData.entry_price - (productData.entry_price * productData.discount / 100);

        const updateOrderStatus = (newStatus) => {
    axiosInstance
        .put(`/update-status/${orderID}`, { newStatus })
        .then((response) => {
        // Handle success, e.g., show a success message or update the order status in your state.
        setOrderData((prevData) => ({
            ...prevData,
            status: newStatus,
        }));
        })
        .catch((error) => {
        // Handle errors, e.g., show an error message.
        console.error("Error updating order status", error);
        });
    };


        return (
            <>
                <div className="order-container w-100 rounded-3 mb-4 me-5 p-3">
                    <div className="d-flex flex-row gap-4">
                        <Link to="/customer/orders"><p className="text-dark fs-5 fw-bold Cabin-text">Orders</p></Link>
                        <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                        <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{orderData.status}</p>
                        <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                        <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{orderData.orderid}</p>
                    </div>
                    <div className="col-12 d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between">
                            <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text">Order Details - #{orderData.ref_no}</p>
                            <div className="badge fw-semibold rounded-3 mx-5 Cabin-text"> {getOrderStatus(orderData.status)}</div>
                        </div>

                    </div>
                    <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
                        <div className="d-flex flex-column col-lg-8 gap-3">
                            <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                            <p className="fs-5 fw-bold px-3 py-2 Cabin-text" style={{ color: "#023047" }}>Product Details</p>
                                <div className="d-flex flex-column flex-lg-row justify-content-evenly">
                                    <img className="img-fluid w-30 h-20" src={(`../../../../src/assets/img/variation/${variationData.variationImg}`)} alt={productData.product_name} />
                                    <div className="d-flex flex-column px-4 mt-4">
                                        <p className="fs-5 fw-semibold Cabin-text text-dark">{productData.product_name} - {variationData.color} {variationData.material}</p>
                                        <div className="d-flex flex-row">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Type:</p>
                                            <p className="px-3 fs-6 fw-semibold Cabin-text text-dark">{productData.type}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Price:</p>
                                            <div className="fs-6 fw-semibold Cabin-text">
                                                <div className="d-flex align-items-center">
                                                <span className="fw-semibold Cabin-text px-2" style={{ textDecoration: 'line-through' }}>Rs.{productData.entry_price}</span>
                                                <span className="fw-semibold text-danger">{productData.discount}%</span>
                                                <span className="fw-semibold px-2 Cabin-text text-dark">Rs.{discountedPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Material:</p>
                                            <p className="px-3 fs-6 fw-semibold Cabin-text text-dark">{variationData.material}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Color:</p>
                                            <Icon.CircleFill size={20} color={variationData.color} className="mx-3" />
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#A2A3B1" }}>Quantity:</p>
                                            <p className="px-3 fs-6 fw-semibold Cabin-text">{variationData.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                            <p className="fs-5 fw-bold px-3 py-2 Cabin-text">Order Status</p>
                                <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-6 fw-semibold px-5 Cabin-text">Vender Confirmation:</p>
                                    
                                        <button
                                            className="badge fw-semibold rounded-3 mx-5 Cabin-text"
                                            style={{
                                                height: "1.5rem",
                                                background: orderData.status === 'Cancelled' ? "red" : "#007F00",
                                                color: "white"
                                            }}
                                            disabled
                                        >
                                            <Icon.CircleFill size={7} className="mx-1"
                                            color={orderData.status === 'Cancelled' ? '#979797' : '#fff'}
                                        />
                                            {orderData.status === 'Cancelled' ? "Cancelled" : "Confirmed"}
                                        </button>
                                    
                                </div>
                                    <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-5 Cabin-text">Package Preparation:</p>
                                    <button
                                        className="badge fw-semibold rounded-3 mx-5 Cabin-text"
                                        style={{
                                            height: "1.5rem",
                                            background: (orderData.status === 'Completed') ? "#007F00" :   orderData.status === 'New' || orderData.status === 'Cancelled' ? "#E6E6E6" : "#bfe5fd",
                                            color: (orderData.status === 'Completed') ? "#fff" : orderData.status === 'New' || orderData.status === 'Cancelled' ? "#979797" : "#023047"
                                        }}
                                        disabled={orderData.status === 'New' || orderData.status === 'Cancelled'}
                                    >
                                        <Icon.CircleFill size={7} className="mx-1"
                                            color={(orderData.status === 'Completed') ? "#fff" : orderData.status === 'New' || orderData.status === 'Cancelled' ? '#979797' : '#023047'}
                                        />
                                        {orderData.status === 'Completed' ? 'Completed' :  orderData.status === 'New' || orderData.status === 'Cancelled' ? 'Pending' :
                                            orderData.status === 'Confirmed' ? 'Mark as Prepared' : 'Prepared'}


                                    </button>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-5 Cabin-text">Shipping:</p>
                                    <button
                                        className="badge fw-semibold rounded-3 mx-5 Cabin-text"
                                        style={{
                                            height: "1.5rem",
                                            background: (orderData.status === 'Completed') ? "#007F00" : (orderData.status === 'Shipped' || orderData.status === 'Delivered' || orderData.status === 'Recieved') ? "#bfe5fd" : "#E6E6E6",
                                            color: (orderData.status === 'Completed') ? "#fff" : (orderData.status === 'Shipped' || orderData.status === 'Delivered' || orderData.status === 'Recieved') ? "#023047" : "#979797"
                                        }}
                                        disabled={orderData.status === 'Shipped' || orderData.status === 'Delivered' || orderData.status === 'Completed'}
                                    >
                                        <Icon.CircleFill
                                            size={7}
                                            className="mx-1"
                                            color={(orderData.status === 'Completed') ? "#fff" : (orderData.status === 'Shipped' || orderData.status === 'Delivered' || orderData.status === 'Recieved') ? '#023047' : '#979797'}
                                        />
                                        {orderData.status === 'Shipped' || orderData.status === 'Delivered' || orderData.status === 'Recieved' ? 'Shipped' : orderData.status === 'Completed' ? 'Completed' : 'Pending'}
                                    </button>

                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-5 Cabin-text">Delivery:</p>
                                    <button
                                    
                                        className="badge fw-semibold rounded-3 mx-5 Cabin-text"
                                        style={{
                                            height: "1.5rem",
                                            background: orderData.status === 'New' || orderData.status === 'Cancelled'|| orderData.status==='Confirmed'|| orderData.status==='Prepared'  ? "#E6E6E6" : "#bfe5fd",
                                            color: orderData.status === 'New' || orderData.status === 'Cancelled' || orderData.status==='Confirmed'|| orderData.status==='Prepared' ? "#979797" : "#023047"
                                        }}
                                        disabled={orderData.status === 'New' || orderData.status === 'Cancelled' || orderData.status==='Confirmed' || orderData.status==='Prepared'}
                                    >
                                        <Icon.CircleFill size={7} className="mx-1"
                                         color={orderData.status === 'New' || orderData.status === 'Cancelled' || orderData.status==='Confirmed' || orderData.status==='Prepared' ? '#979797' : '#023047'}
                                          />
                                         {orderData.status === 'Shipped' || orderData.status === 'Delivered' ? 'Delivered' : orderData.status === 'Completed' ? 'Completed' : 'Pending'}
                                    </button>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-semibold px-5 Cabin-text">Recieved:</p>
                                    <button
                                        onClick={() => updateOrderStatus('Recieved')}
                                        className="badge fw-semibold rounded-3 mx-5 Cabin-text"
                                        style={{
                                            height: "1.5rem",
                                            background: orderData.status === 'New' || orderData.status === 'Cancelled'|| orderData.status==='Confirmed'|| orderData.status==='Prepared'  ? "#E6E6E6" : "#bfe5fd",
                                            color: orderData.status === 'New' || orderData.status === 'Cancelled' || orderData.status==='Confirmed'|| orderData.status==='Prepared' ? "#979797" : "#023047"
                                        }}
                                        disabled={orderData.status === 'New' || orderData.status === 'Cancelled' || orderData.status==='Confirmed' || orderData.status==='Prepared'}
                                    >
                                        <Icon.CircleFill size={7} className="mx-1"
                                         color={orderData.status === 'New' || orderData.status === 'Cancelled' || orderData.status==='Confirmed' || orderData.status==='Prepared' ? '#979797' : '#023047'}
                                          />
                                         {orderData.status === 'New' || orderData.status === 'Cancelled' || orderData.status==='Confirmed'  || orderData.status==='Prepared'  ? 'Pending' : 
                                         orderData.status === 'Delivered' ? 'Mark as Recieved' : 'Recieved'}
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 bg-white rounded-3 p-4 shadow">
                            <p className="fs-5 fw-bold px-3 py-2 Cabin-text">Order Summary</p>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Product</p>
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{productData.product_name}</p>

                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Entry Price</p>
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{productData.entry_price}</p>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Discount (%)</p>
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{productData.discount}%</p>

                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Price</p>
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{discountedPrice}</p>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Quantity</p>
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{orderData.quantity}</p>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Shipping</p>
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{productData.shipping_fee}</p>
                                </div>
                                <div className="divider" />
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">TOTAL</p>
                                    <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{(discountedPrice * orderData.quantity) + productData.shipping_fee }</p>
                                </div>

                                <div className="divider" />
                                <p className="fs-6 fw-bold px-3 my-1 Cabin-text">Delivery Address</p>
                                <div className="d-flex flex-row justify-content-between">
                                    
                                    <p className="fs-5 fw-normal px-3 py-2 Cabin-text">{orderData.shipping_address}</p>
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