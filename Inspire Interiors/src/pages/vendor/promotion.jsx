import React, { useState, useEffect } from "react";

import '../../styles/vendor/promotionRequest.css';
import * as Icon from "react-bootstrap-icons";
import BlackSofa from "../../assets/img/vendor/blacksofa.png";
import YellowSofa from "../../assets/img/vendor/yellowsofa.png";
import Customer from '../../assets/img/vendor/customer.png';
import Sofa from "../../assets/img/vendor/sofa.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import axios from "axios";
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import useAlert from "../../components/useAlert";
import {useSession} from "../../constants/SessionContext";
 


const receivedData = {
    columns: [
        {
          label: '',
          field: 'product',
          sort: 'asc',
          width: 250
        },
        {
          field: 'status',
          sort: 'asc',
          width: 270
        },
    ],
    rows: [
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/promotion/promotionrequest"><img style={{ backgroundColor: "#FEE4CB", objectFit: "cover", width:"80px" }} className="img-fluid p-0 rounded-4 border" src={Customer} /></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Interior Designer</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/promotion/Promotionrequest"><img style={{ backgroundColor: "#FEE4CB", objectFit: "cover", width:"80px" }} className="img-fluid p-0 rounded-4 border" src={Customer} /></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Interior Designer</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/promotion/Promotionrequest"><img style={{ backgroundColor: "#FEE4CB", objectFit: "cover", width:"80px" }} className="img-fluid p-0 rounded-4 border" src={Customer} /></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Interior Designer</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/promotion/Promotionrequest"><img style={{ backgroundColor: "#FEE4CB", objectFit: "cover", width:"80px" }} className="img-fluid p-0 rounded-4 border" src={Customer} /></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Interior Designer</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
    ]
}

const largeTableData = {
    columns: [
        {
          label: 'PRODUCT',
          field: 'product',
          sort: 'asc',
          width: 150
        },
        {
          label: 'DESIGNER',
          field: 'designer',
          sort: 'asc',
          width: 270
        },
        {
          label: 'DATE',
          field: 'date',
          sort: 'asc',
          width: 200
        },
        {
          label: 'PRODUCT PRICE',
          field: 'price',
          sort: 'asc',
          width: 150
        },
        {
           label: 'COMMISION RATE',
           field: 'rate',
           sort: 'asc',
           width: 100
        },
        {
          label: 'SOLD',
          field: 'sold',
          sort: 'asc',
          width: 100
        },
        {
          label: 'PAYMENT STATUS',
          field: 'status',
          sort: 'asc',
          width: 100
        }
    ],
    rows: [
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='delayed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Overdue</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
        },
    ]
}

const Promotion = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const { setAlert } = useAlert();


    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const[statusData, setStatusData] = useState([]);

    const [offerData, setOfferData] = useState({
        offeroverview: '',
        offerdescription: '',
        zerotothousand: '',
        thousandtofivethousand: '',
        fivethousandtotenthousand: '',
        tenthousandtofiftythousand: '',
        fiftythousandtohundredthousand: '',
        morethanhundredthousand: '',
        designerid: '',
        vendorid: userId
    });

    console.log(userId);
    
    const inputOfferData = (field, value) => {
        setOfferData((prevDetails) => ({
            ...prevDetails,
            [field]: value,
        }));
    };

    const offerID = urlParams.get('id');

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    const handleAddition = async (e) => {
        e.preventDefault();
        try{
            const response = await axiosInstance.post("/addpromotion", {
                offeroverview: offerData.offeroverview,
                offerdescription: offerData.offerdescription,
                zerotothousand: offerData.zerotothousand,
                thousandtofivethousand: offerData.thousandtofivethousand,
                fivethousandtotenthousand: offerData.fivethousandtotenthousand,
                tenthousandtofiftythousand: offerData.tenthousandtofiftythousand,
                fiftythousandtohundredthousand: offerData.fiftythousandtohundredthousand,
                morethanhundredthousand: offerData.morethanhundredthousand,
                designerid: offerData.designerid,
                vendorid: offerData.vendorid
            });
            if(response.status === 200){
                setShow(false);
                console.log("Creation Succesfully");
                window.location.reload();
            }
        } catch (error) {
            console.error('Addition Fail');
            setAlert('Something Happenned Wrong', 'error');
        }
    };

    useEffect(() => {
        // Fetch data from your backend API
        axiosInstance
          .get('/promotion')
          .then((response) => {
            setStatusData(response.data);
            // console.log(response.data);
          })
          .catch((error) => {
            console.log('Error fetching data:', error);
        });
    }, []);

    const Columns = [
        {
            label: 'OFFER OVERVIEW',
            field: 'overview',
            sort: 'asc',
            width: 300
        },
        {
            label:'STATUS',
            field: 'status',
            sort: 'asc',
            width: 250
        },

    ]

    const Rows = statusData.map(vendoroffer=>({
        overview: <Link to={`/vendor/promotion/Promotionrequest?id=${vendoroffer.offerid}`}><p className='align-items-center text-dark text-uppercase fs-6 fw-semibold mt-3 m-0'>{vendoroffer.offeroverview}</p></Link>,
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>{vendoroffer.offerstatus }</p></div>

    }))

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <div className="promotion-container background-promotion accordion rounded-3 mb-4 me-5">
                <div className="col-12 d-flex flex-column">
                    <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between p-3">
                        <div className='d-flex flex-row gap-4 p-3'>
                            <p className="text-dark fs-5 fw-bold Cabin-text ">Promotion</p>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Overview</p>
                        </div>
                        <div>
                            <button type="button" onClick={handleShow} className='add-btn m-4'><Icon.PlusLg color="white" size={20} />New Offer</button> 
                            
                            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>New Promotion Offer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form method="POST" onSubmit={handleAddition}>
                                        <div className="d-flex flex-column mx-4 gap-3">
                                            <div className='mb-1'>
                                                <label>Offer Overview</label>
                                                <input type='text' name="offeroverview" autoFocus className='form-control Cabin-text' placeholder='Enter offer overview' value={offerData.offeroverview}  onChange={(e) => {inputOfferData(e.target.name, e.target.value)}}  style={{backgroundColor: "#F2FAFF"}}></input>
                                            </div>
                                            <div className='mb-1'>
                                                <label>Offer Description</label>
                                                <input type='text' name="offerdescription" rows={3} className='form-control Cabin-text' placeholder='Enter offer description' value={offerData.offerdescription} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}} style={{backgroundColor: "#F2FAFF"}}></input>
                                            </div>
                                            <div className="d-flex flex-row gap-5">
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 0 - 1000)</label>
                                                    <input type='number' name="zerotothousand" className='form-control Cabin-text h-50' placeholder='Enter offer commission' value={offerData.zerotothousand} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 1K - 5K)</label>
                                                    <input type='number' name="thousandtofivethousand" className='form-control Cabin-text h-50' placeholder='Enter offer commission' value={offerData.thousandtofivethousand} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 5K - 10K)</label>
                                                    <input type='number' name="fivethousandtotenthousand" className='form-control Cabin-text h-50' placeholder='Enter offer commission' value={offerData.fivethousandtotenthousand} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row gap-5">
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 10K - 50K)</label>
                                                    <input type='number' name="tenthousandtofiftythousand" className='form-control Cabin-text h-50' placeholder='Enter offer commission' value={offerData.tenthousandtofiftythousand} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 50K - 100K)</label>
                                                    <input type='number' name="fiftythousandtohundredthousand" className='form-control Cabin-text h-50' placeholder='Enter offer commission' value={offerData.fiftythousandtohundredthousand} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range more than 100K)</label>
                                                    <input type='number' name="morethanhundredthousand" className='form-control Cabin-text h-50' placeholder='Enter offer commission' value={offerData.morethanhundredthousand} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                            </div>
                                            <div className='mb-1 w-25'>
                                                <label for="designerid">Select Designer:</label>
                                                <select class="form-control" id="designerid" name="designerid" value={offerData.designerid} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}}>
                                                    <option value="1">Designer 1</option>
                                                    <option value="2">Designer 2</option>
                                                    <option value="3">Designer 3</option>
                                                    <option value="4">Designer 4</option>
                                                </select>
                                                {/* <input type='number' className='form-control Cabin-text' placeholder='Enter designer id'  onChange={(e) => setDesignerID(e.target.value)}  style={{backgroundColor: "#F2FAFF"}}></input> */}
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row justify-content-between'>
                                            <button type="button" className='withdraw-btn m-4' onClick={handleClose}><Icon.PlusLg color="white" size={20} />Cancel Offer</button>
                                            <button type="submit" className='accept-btn m-4'><Icon.PlusLg color="white" size={20} />Send Offer</button>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                    <div className=" col-12 d-flex flex-column flex-lg-row flex-md-row gap-3">
                        <div className="col-lg-8 bg-white rounded-3 mb-2 shadow" style={{ height: "10%" }}>
                            <div className="d-flex flex-row gap-3 p-3">
                                <p className="fs-5 fw-bold Cabin-text">Partnered Designers</p>
                                <Link to="/vendor/promotion/mynetwork"><p className="fs-6 fw-semibold mt-1 Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1" /></p></Link>
                            </div>
                            <div className="d-flex flex-column">
                                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="row row-cols-1 row-cols-md-3 g-4 my-4 mx-4">
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
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
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                                    <div class="col">
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
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
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
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                        <div class="carousel-item">
                                        <div class="row row-cols-1 row-cols-md-3 g-4 my-4 mx-4">
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
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
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
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
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
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
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                        <div class="carousel-item">
                                        <div class="row row-cols-1 row-cols-md-3 g-4 my-4 mx-4">
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
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
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
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
                                                <div className="d-flex flex-column gap-5">
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
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
                                                    <div class="col">
                                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow mt-2">
                                                            <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="blacksofa" />
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
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border bg-white rounded-3 mb-2 shadow p-3">
                            <div className="d-flex flex-row gap-3 p-3">
                                <p className="fs-5 fw-bold Cabin-text">My Network</p>
                                <Link to="/vendor/promotion/mynetwork"><p className="fs-6 fw-semibold mt-1 Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1" /></p></Link>
                            </div>
                            <div className="d-flex flex-column my-2">
                                <Tabs
                                    defaultActiveKey="Sent"
                                    id="uncontrolled-tab-example"
                                    className="mb-3 bg-white tab"
                                >
                                    <Tab eventKey="Sent" title="Sent">
                                        <div className='my-2'>

                                            <MDBDataTableV5 responsive
                                                striped
                                                bordered
                                                small
                                                columns={Columns}
                                                rows={Rows}
                                                sortable={false}
                                                exportToCSV={true}
                                                paging={false}
                                                searching={false} />

                                        </div>
                                    </Tab>
                                    <Tab eventKey="Accepted" title="Accepted">
                                        <div className=''>

                                            <MDBDataTableV5 responsive
                                                striped
                                                bordered
                                                small
                                                data={receivedData}
                                                sortable={false}
                                                exportToCSV={true}
                                                paging={false}
                                                searching={false} />

                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-12 container-fluid border bg-white rounded-3 my-2 shadow">
                        <div className="d-flex flex-row gap-3 p-3">
                            <p className="fs-5 fw-bold Cabin-text">Sales From Paid Promotions</p>
                            <Link to="/vendor/promotion/expenses"><p className="fs-6 fw-semibold mt-1 Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1" /></p></Link>
                        </div>

                        <div className='p-3'>

                            <MDBDataTableV5 responsive
                                striped
                                bordered
                                small
                                data={largeTableData}
                                sortable={false}
                                exportToCSV={true}
                                paging={false}
                                searching={false} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Promotion;