import React, { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import LivingRoom from '../../assets/img/customer/livinroom.jpg'
import Customer from '../../assets/img/vendor/customer.png';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import useAlert from "../../components/useAlert";
import {useSession} from "../../constants/SessionContext";
import axios from "axios";


const generateStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars >= 0.5;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars.push(<Icon.StarFill key={i} color='#f39c12' />);
        } else if (i === fullStars + 1 && halfStar) {
            stars.push(<Icon.StarHalf key={i} color='#f39c12' />);
        } else {
            stars.push(<Icon.Star key={i} color='#f39c12' />);
        }
    }

    return stars;
};

const ViewVendor = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const { setAlert } = useAlert();

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const [user, setUser] = useState([]);
    const [vendorData, setVendorData] = useState([]);

    const [allVendors, setAllVendors] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const Id = urlParams.get('id');

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });


    useEffect(() => {
        axiosInstance
        .get(`/getuser/${Id}`)
        .then((response) => {
            setUser(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log('Error fetching data', error);
        });
    }, [Id]);

    useEffect(() => {
        axiosInstance
        .get(`/users`)
        .then((response) => {
            setAllUsers(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log('Error fetching data', error);
        });
    }, [Id]);

    const vendorID = user.userid;
    console.log(vendorID);

    useEffect(() => {
        axiosInstance
        .get(`/vendor/${vendorID}`)
        .then((response) => {
            setVendorData(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log('Error fetching data', error);
        });
    }, [vendorID]);

    useEffect(() => {
        axiosInstance
        .get(`/vendors`)
        .then((response) => {
            setAllVendors(response.data);
            console.log(response.data);
            })
            .catch((error) => {
            console.log('Error fetching data', error);
        });
    }, []);

    
    const mergeData = (vendorData, userData) => {
        const mergedData = vendorData.map(
          (vendorItem) => {
          const matchingUser = userData.find(
            (userItem) =>  userItem.userid === vendorItem.vendor_id
          );
    
         
      
          if (matchingUser ) {
            // Merge the data from both sources
            return {
              ...vendorItem,
              ...matchingUser
            
            };
          } else {
            return {
                ...vendorItem
            };
        }});
      
        return mergedData;
    };
    
    const mergedVendor = mergeData(allVendors, allUsers);
    console.log("merged Data", mergedVendor);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="background d-flex flex-column justify-content-between w-100 rounded Cabin-text gap-3 ">
                {/* Topic */}
                <div className='top-div bg-light shadow rounded py-3'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center justify-content-start'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5'>
                            <div className='d-flex flex-row gap-4 p-3 '>
                                <Link to="/vendor/promotion"><p className="text-dark fs-5 fw-bold Cabin-text text-dark">Promotion</p></Link>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{user.type}</p>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{user.name}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className=" d-flex w-100 justify-content-center m-0 col-md-4 col-lg-2 col-sm-8">
                        <div className="col px-4 ">
                            <div className="d-flex flex-column flex-lg-row flex-md-row gap-4">
                                <img className="img-fluid p-3 rounded-4 w-50 h-50 " src={`../../../../src/assets/img/profilePic/${user.profile_pic}`} />
                                <div className="d-flex flex-column gap-2">
                                    <p className="fs-2 fw-bold Cabin-text mt-4">{user.name}</p>
                                        <div className="d-flex fs-4 fw-semibold Cabin-text f-color-grey align-items-center">{user.type}</div>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className='d-flex flex-row gap-1'>
                                                {generateStars(vendorData.averagereview)}
                                            </div>
                                            <div className="d-flex flex-row gap-1 float-end">
                                                <div className="fs-6 fw-bold Cabin-text">{vendorData.averagereview}/5.0</div>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            
                        </div>

                        <div className="col flex-lg-row mx-2">
                            <div className=' fs-5 fw-bold'>
                                Top Selling Products <span className="badge fs-6 see-all">See All <Icon.ArrowRight /></span>
                            </div>
                            <div className="d-flex mt-3 flex-wrap">
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-2">
                                    <img src={LivingRoom} alt="Design 1" className="img-fluid h-100 rounded" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-2">
                                    <img src={LivingRoom} alt="Design 2" className="img-fluid h-100 rounded" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 mb-3 px-2">
                                    <img src={LivingRoom} alt="Design 3" className="img-fluid rounded h-100" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 mb-3 px-2">
                                    <img src={LivingRoom} alt="Design 4" className="img-fluid rounded h-100" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 mb-3 px-2">
                                    <img src={LivingRoom} alt="Design 5" className="img-fluid rounded h-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ViewVendor;