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


const PromotionRequest = () => {
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
    const [designerData, setDesignerData] = useState([]);
    const [designer, setDesigner] = useState([]);
    const [designCount, setDesignCount] = useState(0);

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

    const updateOfferData = (field, value) => {
        setOfferData((prevDetails) => ({
            ...prevDetails,
            [field]: value !== undefined ? value : prevDetails[field],
        }));
        setIsEditing(true);
    };

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
            .get(`/getuser/${offerData.designer}`)
            .then((response) => {
                setDesignerData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            });
    }, [offerData.designer]);

    const designerID = designerData.userid;
    console.log(designerID);

    useEffect(() => {
        axiosInstance
        .get(`/designer/${designerID}`)
        .then((response) => {
            setDesigner(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log('Error fetching data', error);
        });
    }, [designerID]);

    useEffect(() => {
        axiosInstance
        .get(`/designer/mydesigns/d/${designerID}`)
        .then((response) => {
            setDesignCount(response.data.length);
            console.log(response.data.length);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
        });
    }, [designerID]);

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            const response = await axiosInstance.put(`/updatepromotion/${offerID}`, {
                offeroverview: offerData.offeroverview,
                offerdescription: offerData.offerdescription,
                zerotothousand: offerData.zerotothousand,
                thousandtofivethousand: offerData.thousandtofivethousand,
                fivethousandtotenthousand: offerData.fivethousandtotenthousand,
                tenthousandtofiftythousand: offerData.tenthousandtofiftythousand,
                fiftythousandtohundredthousand: offerData.fiftythousandtohundredthousand,
                morethanhundredthousand: offerData.morethanhundredthousand,
                designer: offerData.designer
            });
            if(response.status === 200){
                setShow(false);
                // console.log("Offer Edit Succesfully");
                window.location.reload();
            }
        } catch (error) {
            console.error('Edit Fail');
            setAlert('Something Happenned Wrong', 'error');
        }
    };

    

    const handleDelete = async (e) => {
        e.preventDefault();
        try{
            const response = await axiosInstance.delete(`/deletepromotion/${offerID}`);
            if(response.status === 200){
                // console.log("Offer delete Succesfully");
                window.location.href='/vendor/promotion';      
            }
        } catch (error) {
            console.error('Delete Fail');
            setAlert('Something Happenned Wrong', 'error');
        }
    };
    
    return(
    <>
        <div className="request-container">
            <div className="col-12 d-flex flex-column flex-lg-row flex-md-row gap-3">
                    <div className='col-lg-7 bg-white rounded-3 shadow p-4 mb-3'>
                        <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">
                            <div className="d-flex gap-4">
                                <Link to="/vendor/promotion"><p className="fs-5 fw-bold Cabin-text " style={{ color: "#A2A3B1" }}>Promotion</p></Link>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <Link to="/vendor/promotion"><p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>My Network</p></Link>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <Link to="/vendor/promotion"><p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Sent</p></Link>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <p className="fs-5 fw-bold Cabin-text text-dark">{offerData.offeroverview}</p>
                            </div>
                            <button type="button" className='add-btn' onClick={handleShow}><Icon.PencilFill className="mx-2" color="white" size={16} />Edit</button>

                            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Promotion Offer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form onSubmit={handleEdit}>
                                        <input type="hidden" name="promotionid" value={offerID} />
                                        <div className="d-flex flex-column mx-4 gap-3">
                                            <div className='mb-1'>
                                                <label>Offer Overview</label>
                                                <input type='text' name="offeroverview" autoFocus className='form-control Cabin-text' value={offerData.offeroverview} onChange={(e) => updateOfferData(e.target.name, e.target.value)}  style={{backgroundColor: "#F2FAFF"}}></input>
                                            </div>
                                            <div className='mb-1'>
                                                <label>Offer Description</label>
                                                <input type='text' name="offerdescription" className='form-control Cabin-text' value={offerData.offerdescription} onChange={(e) => updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                            </div>
                                            <div className="d-flex flex-row gap-5">
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 0 - 1000)</label>
                                                    <input type='number' name="zerotothousand" className='form-control Cabin-text h-50' value={offerData.zerotothousand} onChange={(e) => updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 1K - 5K)</label>
                                                    <input type='number' name="thousandtofivethousand" className='form-control Cabin-text h-50' value={offerData.thousandtofivethousand} onChange={(e) => updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 5K - 10K)</label>
                                                    <input type='number' name="fivethousandtotenthousand" className='form-control Cabin-text h-50' value={offerData.fivethousandtotenthousand} onChange={(e) => updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row gap-5">
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 10K - 50K)</label>
                                                    <input type='number' name="tenthousandtofiftythousand" className='form-control Cabin-text h-50' value={offerData.tenthousandtofiftythousand} onChange={(e) => updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range 50K - 100K)</label>
                                                    <input type='number' name="fiftythousandtohundredthousand" className='form-control Cabin-text h-50' value={offerData.fiftythousandtohundredthousand} onChange={(e) => updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                                <div className='my-2'>
                                                    <label>Commission Percentage (Price Range more than 100K)</label>
                                                    <input type='number' name="morethanhundredthousand" className='form-control Cabin-text h-50' value={offerData.morethanhundredthousand} onChange={(e) => updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row gap-5">
                                                <div className='my-2'>
                                                    <label>Designer</label>
                                                    <input type='number' name="designer" className='form-control Cabin-text h-50' value={offerData.designer} onChange={(e) => updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row justify-content-between'>
                                            <button type="button" className='withdraw-btn m-4' onClick={handleClose}><Icon.PlusLg color="white" size={20} />Discard Changes</button>
                                            <button type="submit" className='accept-btn m-4'><Icon.PlusLg color="white" size={20} />Save Changes</button>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
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
                        <button className="withdraw-btn float-end Cabin-text mt-2" onClick={handleDelete}>Withdraw Request</button>
                </div>
                <div className="col-lg-5 mb-3">
                    <div className='col-lg-12 h-100 bg-white rounded-3 shadow p-4 '>
                        <p className="fs-5 fw-bold Cabin-text">About Designer {designerData.name}</p>
                        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4">
                            <img style={{ objectFit: "cover" }} className="img-fluid p-2 rounded-4 w-25 h-25" src={`../../../../src/assets/img/profilePic/${designerData.profile_pic}`} />
                            <div className="d-flex flex-column">
                                <p className="fs-6 fw-bold Cabin-text mt-2">{designerData.name}</p>
                                <div className="d-flex flex-column gap-2">
                                    <p className="fs-6 fw-semibold Cabin-text">{designerData.type}</p>
                                    <div className="d-flex align-items-center gap-3">
                                            <div className='d-flex flex-row gap-1'>
                                                {generateStars(designer.averagereview)}
                                            </div>
                                            <div className="d-flex flex-row gap-1 float-end">
                                                <div className="fs-6 fw-bold Cabin-text">{designer.averagereview}/5.0</div>
                                            </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-evenly mt-4">
                            <div className="d-flex flex-column">
                                <p className="fs-1 fw-semibold Cabin-text text-center m-0" style={{ color: "#FFC00C" }}>{designCount}</p>
                                <p className="fs-6 fw-bold Cabin-text text-center m-0">Designs</p>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="fs-1 fw-semibold Cabin-text text-center m-0" style={{ color: "#FFC00C" }}>30</p>
                                <p className="fs-6 fw-bold Cabin-text text-center m-0">Custom designs sold</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column my-1">
                            <p className="fs-6 fw-bold Cabin-text mt-1" style={{ color: "#545563" }}>Bio</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>{designer.bio}</p>
                        </div>
                        <div className="d-flex flex-column my-1">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Specialities</p>
                            <div className="badge w-25 Cabin-text" style={{ color: "#000000", backgroundColor: "#CCF8FE" }}>{designer.specialities}</div>
                        </div>
                        <div className="d-flex flex-row gap-4 my-2">
                            <p className="fs-5 fw-bold Cabin-text">Top Selling Designs</p>
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

export default PromotionRequest;