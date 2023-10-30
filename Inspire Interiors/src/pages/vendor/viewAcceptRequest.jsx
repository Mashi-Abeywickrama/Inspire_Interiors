import React,{useEffect,useState} from "react";
import '../../styles/vendor/viewCustomRequest.css';
import * as Icon from 'react-bootstrap-icons';
import Navigationbar from '../../components/navigationbar';
import VendorSidebar from './sidebar';

import Hall from '../../assets/img/vendor/visiting room.png';
import Chair from './../../assets/img/vendor/chair.png';
import Customer from '../../assets/img/vendor/customer.png';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ViewAcceptRequest = () => {
    const urlparams = new URLSearchParams(window.location.search);
    const customizeID = urlparams.get('id');

    const [customizeData, setCustomizedData] = useState([]);
    const [customer, setCustomer] = useState([]);

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
        axiosInstance
            .get(`/customizedorder/c/${customizeID}`)
            .then((response) => {
                setCustomizedData(response.data);
                console.log(response.data);
            })      
            .catch((error) => console.log(error));
    }, []);

    const customerID = customizeData.customerid;
    console.log(customerID);

    useEffect(() => {
        axiosInstance
        .get(`/getuser/${customerID}`)
        .then((response) => {
            setCustomer(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log("Error fetching customer Data",error);
        })
    }, [customerID]);

    

    return (
        <>

            <div className="custom-container rounded-3 mb-4 ">
                <div className="col-12 d-flex flex-column flex-md-row flex-lg-row gap-4">
                    <div className="col-lg-8 bg-white rounded-3 shadow p-4">
                        <div className="d-flex flex-row gap-4">
                            <Link to="/vendor/order"><p className="text-dark fs-5 fw-bold Cabin-text">Orders</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <Link to="/vendor/order/customizeorders"><p className="text-dark fs-5 fw-bold Cabin-text">Customized Order</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Accepted Requests</p>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{customer.username}</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Product Description</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>{customizeData.productdescription}</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Product Specifications</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>{customizeData.productspecification}</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Reference Images</p>
                            <div className="d-flex flex-row gap-3">
                                <img className="img-fluid" src={Hall} alt="hall" />
                                <img className="img-fluid" src={Hall} alt="hall" />
                                <img className="img-fluid" src={Hall} alt="hall" />
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text mt-3" style={{ color: "#545563"}}>Budget</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>{customizeData.budget} /=</p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row gap-3">
                                <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563"}}>Additional Notes</p>
                                <Icon.PencilFill color="#035C94" />
                            </div>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>{customizeData.additionalnotes}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-column gap-2">
                            <div className="col-lg-12 bg-white rounded-3 shadow p-4">
                                <div className="d-flex flex-column">
                                    <p className="fs-5 fw-bold Cabin-text">About Customer {customer.username}</p>
                                </div>
                                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4">
                                    <img style={{ objectFit:"cover" }} className="img-fluid p-3 rounded-4 w-50 h-50" src={`../../../../src/assets/img/profilePic/${customer.profile_pic}.jpg`} />
                                    <div className="d-flex flex-column">
                                        <p className="fs-6 fw-bold" style={{ color: "#3D3D3D"}}>{customer.username}</p>
                                        <p className="fs-6 fw-bold Cabin-text" style={{ color: "#023047"}}>{customer.type}</p>
                                        <div className="d-flex flex-row gap-2">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#023047"}}>Contact:</p>
                                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047"}}>{customer.contact_no}</p>
                                        </div>
                                        <div className="d-flex flex-row gap-2">
                                            <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#023047"}}>Email:</p>
                                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#023047"}}>{customer.email}</p>
                                        </div>
                                        <button className="contact-btn float-end Cabin-text">Contact Customer</button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-12 bg-white rounded-3 shadow p-4">
                                <p className="fs-5 fw-bold Cabin-text">3D Modal</p>
                                <img className="img-fluid px-5" src={Chair} />
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default ViewAcceptRequest;