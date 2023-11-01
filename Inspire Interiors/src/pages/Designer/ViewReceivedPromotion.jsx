import React, {useState, useEffect} from "react";
import useAlert from "../../components/useAlert";
import '../../styles/vendor/promotionRequest.css';

import * as Icon from 'react-bootstrap-icons';
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import Customer from '../../assets/img/vendor/customer.png';
import BlackSofa from "../../assets/img/vendor/blacksofa.png";

import Modal from 'react-bootstrap/Modal';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Link} from 'react-router-dom';

import axios from 'axios';

const tabledata2 = {
    columns: [
      {
        label: 'PRICE RANGE',
        field: 'price',
        sort: 'asc',
        width: 200
      },
      {
        label: 'RATE OF COMMISION',
        field: 'commision',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
        {
            price: '0 - 1000',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: '1000 - 5K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: '5K - 10K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: '10K - 50K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: '50K - 100K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: 'More than 100K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
          
    ],
};

const generateStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars >= 0.5;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Icon.StarFill key={i} color='#FFC00C' />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<Icon.StarHalf key={i} color='#FFC00C' />);
      } else {
        stars.push(<Icon.Star key={i} color='#FFC00C' />);
      }
    }
    return stars;
};


const ViewReceivedPromotion = () => {
    const [offerData, setOfferData] = useState({
        offeroverview: '',
        offerdescription: '',
        zerotothousand: '',
        thousandtofivethousand: '',
        fivethousandtotenthousand: '',
        tenthousandtofiftythousand: '',
        fiftythousandtohundredthousand: '',
        morethanhundredthousand: '',
        offerstatus: '',
        designer: ''
    });

    const [isEditing, setIsEditing] = useState(false);
    const [vendorData, setVendorData] = useState([]);
    const [vendor, setVendor] = useState([]);

    const urlParams = new URLSearchParams(window.location.search);
    const offerID = urlParams.get('id');

    const Commission = [offerData.zerotothousand, offerData.thousandtofivethousand, offerData.fivethousandtotenthousand, offerData.tenthousandtofiftythousand, offerData.fiftythousandtohundredthousand, offerData.morethanhundredthousand];

    const tabledata = {
        columns: [
        {
            label: 'PRICE RANGE',
            field: 'price',
            sort: 'asc',
            width: 200
        },
        {
            label: 'RATE OF COMMISION (%)',
            field: 'commision',
            sort: 'asc',
            width: 200
        },
        ],
        rows: [
            {
                price: '0 - 1000',
                commision: Commission[0],
            },
            {
                price: '1000 - 5K',
                commision: Commission[1],
            },
            {
                price: '5K - 10K',
                commision: Commission[2],
            },
            {
                price: '10K - 50K',
                commision: Commission[3],
            },
            {
                price: '50K - 100K',
                commision: Commission[4],
            },
            {
                price: 'More than 100K',
                commision: Commission[5],
            },
            
        ],
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { setAlert } = useAlert();

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });


    useEffect(() => {
        // Fetch data from your backend API
        axiosInstance
          .get(`/promotion/${offerID}`)
          .then((response) => {
            setOfferData(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log('Error fetching data', error);
        });
    }, []);

    useEffect(() => {
        axiosInstance
            .get(`/getuser/${offerData.vendorid}`)
            .then((response) => {
                setVendorData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            });
    }, [offerData.vendorid]);

    const vendorID = vendorData.userid;
    console.log(vendorID);

    useEffect(() => {
        axiosInstance
        .get(`/vendor/${vendorID}`)
        .then((response) => {
            setVendor(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log('Error fetching data', error);
        });
    }, [vendorID]);

    

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
          const response = await axiosInstance.put(`/promotion/accept/${offerID}`);
          if (response.status === 200) {
            console.log("Status Edit Succesfully");
            window.location.href="/designer/promotion";
          }
        } catch (error) {
          console.error("Edit Fail", error);
        }
    };

    
    return(
    <>
        <div className="request-container">
            <div className="col-12 d-flex flex-column flex-lg-row flex-md-row gap-3">
                    <div className='col-lg-7 bg-white rounded-3 shadow p-4 mb-3'>
                        <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">
                            <div className="d-flex gap-4">
                                <Link to="/vendor/promotion"><p className="text-dark fs-5 fw-bold Cabin-text ">Promotion</p></Link>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <Link to="/vendor/promotion"><p className="fs-5 fw-bold Cabin-text text-dark">My Network</p></Link>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <Link to="/vendor/promotion"><p className="fs-5 fw-bold Cabin-text text-dark">Received</p></Link>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{offerData.offeroverview}</p>
                            </div>
                            
                        </div>          
                        <div  className="d-flex flex-column mt-2">
                        <div>
                            <p className="fs-6 fw-bold Cabin-text my-2" style={{ color: "#545563" }}>Offer Overview</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>{offerData.offeroverview}</p>
                        </div>
                        <div>
                            <p className="fs-6 fw-bold Cabin-text my-2" style={{ color: "#545563" }}>Offer Description</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>{offerData.offerdescription}</p>
                        </div>
                        <div>
                            <p className="fs-6 fw-bold Cabin-text my-3" style={{ color: "#545563" }}>Offer Details</p>   
                        </div>
                        </div>
                                
                        <div className='p-4'>
                            <MDBDataTableV5 responsive
                                striped
                                bordered
                                small
                                data={tabledata}
                                sortable={false}
                                exportToCSV={true}
                                paging={false}
                                searching={false} />
                        </div>
                        <button className="add-btn float-end Cabin-text mt-2" onClick={handleEdit}>Accept Request</button>
                </div>
                <div className="col-lg-5 mb-3">
                    <div className='col-lg-12 h-100 bg-white rounded-3 shadow p-4 '>
                        <p className="fs-5 fw-bold Cabin-text">About Vendor {vendorData.name}</p>
                        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4">
                            <img style={{ objectFit: "cover" }} className="img-fluid p-2 rounded-4 w-50 h-50" src={`../../../../src/assets/img/profilePic/${vendorData.profile_pic}`} />
                            <div className="d-flex flex-column">
                                <p className="fs-6 fw-bold Cabin-text mt-4">{vendorData.name}</p>
                                <div className="d-flex flex-column gap-2">
                                    <p className="fs-6 fw-semibold Cabin-text">{vendorData.type}</p>
                                    <div className="d-flex align-items-center gap-3">
                                            <div className='d-flex flex-row gap-1'>
                                                {generateStars(4.6)}
                                            </div>
                                            <div className="d-flex flex-row gap-1 float-end">
                                                <div className="fs-6 fw-bold Cabin-text">4.6/5.0</div>
                                            </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-4 my-2">
                            <p className="fs-5 fw-bold Cabin-text">Top Selling Products</p>
                            <Link to={`/vendor/promotion/promoteproduct?d_id=${offerData.designer}`}><p className="fs-6 fw-semibold Cabin-text mt-1" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1" /></p></Link>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 g-4 mx-4">
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ViewReceivedPromotion;