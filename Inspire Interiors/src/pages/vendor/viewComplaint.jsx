import React,{useEffect, useState} from "react";

import "./../../styles/vendor/viewOrder.css";
import * as Icon from "react-bootstrap-icons";
import Customer from '../../assets/img/vendor/customer.png';
import {Link} from 'react-router-dom';
import axios from "axios";


const ViewComplaint = () => {
    const [complaintData, setComplaintData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [userData, setUserData] = useState([]);

    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 5000,
    });

    const urlParams = new URLSearchParams(window.location.search);
    const complaintId = urlParams.get('id');

    useEffect(() => {
        axiosInstance.get(`/inquiry/${complaintId}`)
            .then((response) => {
                console.log(response.data);
                setComplaintData(response.data);
                axiosInstance.get(`/getorderbyref/${response.data.order_no}`)
                .then((response2) => {
                    console.log(response2.data);
                    setOrderData(response2.data);
                    axiosInstance.get(`/viewproducts/${response2.data.product}`)
                    .then((response3) => {
                        console.log(response3.data);
                        setProductData(response3.data);
                        axiosInstance.get(`/getuser/${response2.data.customer}`)
                        .then((response4) => {
                            console.log(response4.data);
                            setUserData(response4.data);
                            
                        })
                        
                        .catch((error) => {
                            console.log(error);
                        });
                    })
                    
                    .catch((error) => {
                        console.log(error);
                    });
                })

                .catch((error) => {
                    console.log(error);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [complaintId]);
    console.log(complaintData);
    return (
        <>
            <div className="complaints-container w-100 rounded-3 mb-4 me-5 p-3">
                <div className="d-flex flex-row gap-4">
                    <Link to="/vendor/complaints"><p className="text-dark fs-5 fw-bold Cabin-text text-dark">Complaints</p></Link>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>View</p>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{complaintId}</p>
                </div>
                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text mt-2">Complaint Details - #{complaintData.inquiry_reference}</p>
                        <div className="badge fw-semibold rounded-3 Cabin-text mx-5" style={{ height: "1.5rem", background: "#F6E3AC", color: "#6B4605" }}><Icon.CircleFill size={7} className="mx-1" />{complaintData.inquiry_status}</div>
                    </div>

                </div>
                <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3">
                    <div className="d-flex flex-column col-lg-8 gap-3">
                        <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                            <p className="fs-5 fw-semibold Cabin-text">Complaint Details</p>
                            <div className="d-flex flex-column">
                                <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Complaint Type</p>
                                <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>{complaintData.inquiry_type}</p>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Complaint</p>
                                <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>{complaintData.remarks}</p>
                            </div>
                            <div className="d-flex flex-column">
                                
                                <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>{complaintData.additional_remarks}</p>
                            </div>
                        </div>
                        <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column">
                                    <p className="fs-5 fw-bold Cabin-text">About Customer {complaintData.username}</p>
                                </div>
                                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-evenly">
                                    <img style={{  objectFit:"cover" }} className="img-fluid p-3 w-25 rounded-4 border" src={`../../../../src/assets/img/profilePic/${userData.profile_pic}`} />
                                    <div className="d-flex flex-column">
                                        <p className="fs-6 fw-bold" style={{ color: "#3D3D3D" }}>{userData.name}</p>
                                        <div className="d-flex flex-row gap-2">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#023047" }}>Contact:</p>
                                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047" }}>{userData.contact_no}</p>
                                        </div>
                                        <div className="d-flex flex-row gap-2">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#023047" }}>Email:</p>
                                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047" }}>{userData.email}</p>
                                        </div>
                                        <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047", fontSize: "16px", fontWeight: "400" }}>{orderData.shipping_address}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-white rounded-3 p-3 shadow">
                        <p className="fs-5 fw-bold px-3 py-2 Cabin-text">Order Summary - Ref #{orderData.ref_no}</p>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Product</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{productData.product_name}</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Price per item</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs.{productData.entry_price}</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Discount per item</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs.{productData.discount*productData.entry_price*0.01}</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Quantity</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">{orderData.quantity}</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Shipping</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs.{productData.shipping_fee}</p>
                            </div>
                            <div className="divider" />
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">TOTAL</p>
                                <p className="fs-6 fw-normal px-3 py-2 Cabin-text">Rs.{((productData.entry_price - (productData.discount*productData.entry_price*0.01)) *orderData.quantity )+productData.shipping_fee}</p>
                            </div>

                            <div className="divider" />
                            <p className="fs-6 fw-bold px-3 my-1 Cabin-text">Delivery Address</p>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-4 fw-normal px-3 py-2 Cabin-text">{orderData.shipping_address}</p>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewComplaint;