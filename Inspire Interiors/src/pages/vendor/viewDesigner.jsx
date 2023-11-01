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

const designerCards = [
    {
        name: 'Mashi',
        image: 'https://img.freepik.com/premium-vector/avatar-icon001_750950-50.jpg?w=360',
    },
    {
        name: 'Shinthu',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
    {
        name: 'Zulfa',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
    {
        name: 'Hari',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
    {
        name: 'Ghostie',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
    {
        name: 'Rujhan',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
];

const ViewDesigner = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const { setAlert } = useAlert();

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const [user, setUser] = useState([]);
    const [designerData, setDesignerData] = useState([]);
    const [designCount, setDesignCount] = useState(0);

    const [allDesigners, setAllDesigners] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const Id = urlParams.get('id');

    const [offerData, setOfferData] = useState({
        offeroverview: '',
        offerdescription: '',
        zerotothousand: '',
        thousandtofivethousand: '',
        fivethousandtotenthousand: '',
        tenthousandtofiftythousand: '',
        fiftythousandtohundredthousand: '',
        morethanhundredthousand: '',
        offerstatus: 0,
        designerid: Id,
        vendorid: userId
    });

    const inputOfferData = (field, value) => {
        setOfferData((prevDetails) => ({
            ...prevDetails,
            [field]: value,
        }));
    };

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    const handleAddition = async (e) => {
        e.preventDefault();
        try {
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
                window.location.href="/vendor/promotion";
            }
        } catch (error) {
            console.error('Addition Fail');
            setAlert('Something Happenned Wrong', 'error');
        }
    };

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

    const designerID = user.userid;
    console.log(designerID);

    useEffect(() => {
        axiosInstance
        .get(`/designer/${designerID}`)
        .then((response) => {
            setDesignerData(response.data);
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

    useEffect(() => {
        axiosInstance
        .get(`/designer/d`)
        .then((response) => {
            setAllDesigners(response.data);
            console.log(response.data);
            })
            .catch((error) => {
            console.log('Error fetching data', error);
        });
    }, []);

    
    const mergeData = (designerData, userData) => {
        const mergedData = designerData.map(
          (designerItem) => {
          const matchingUser = userData.find(
            (userItem) =>  userItem.userid === designerItem.designer_id
          );
    
         
      
          if (matchingUser ) {
            // Merge the data from both sources
            return {
              ...designerItem,
              ...matchingUser
            
            };
          } else {
            return {
                ...designerItem
            };
        }});
      
        return mergedData;
    };
    
    const mergedDesigner = mergeData(allDesigners, allUsers);
    console.log("merged Data", mergedDesigner);

    const filteredData = (specialities) => mergedDesigner.filter((item) => item.specialities === specialities && item.userid !== designerData.designer_id);
    console.log(filteredData(designerData.specialities));
    



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
                                <Link to="/vendor/promotion"><p className="text-dark fs-5 fw-bold Cabin-text text-dark">{user.type}</p></Link>
                                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                                <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{user.name}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className=" d-flex w-100 justify-content-center m-0 col-md-4 col-lg-2 col-sm-8">
                        <div className="col px-4 ">
                            <div className="d-flex flex-column flex-lg-row flex-md-row gap-4">
                                <img className="img-fluid p-3 rounded-4 w-25 h-25 " src={`../../../../src/assets/img/profilePic/${user.profile_pic}`} />
                                <div className="d-flex flex-column gap-2">
                                    <p className="fs-3 fw-bold Cabin-text mt-4">{user.name}</p>
                                        <div className="d-flex fs-6 fw-semibold Cabin-text f-color-grey align-items-center">Interior Designer</div>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className='d-flex flex-row gap-1'>
                                                {generateStars(designerData.averagereview)}
                                            </div>
                                            <div className="d-flex flex-row gap-1 float-end">
                                                <div className="fs-6 fw-bold Cabin-text">{designerData.averagereview}/5.0</div>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            
                            <div className="d-flex align-items-center justify-content-evenly py-2 my-4 mx-2">
                                <div className="d-flex w-25 three-box rounded align-items-center justify-content-center gap-2 p-2">
                                    <div className="w-25 fw-bold fs-4 d-flex align-items-center f-color-y p-2">
                                        {designCount}
                                    </div>
                                    <div className=" fs-5 d-flex align-items-center f-color-f1">
                                        Total Designs
                                    </div>
                                </div>
                                <div className="d-flex w-25 three-box rounded align-items-center justify-content-center gap-2 p-2">
                                    <div className="w-25 fw-bold fs-4 d-flex align-items-center f-color-y p-2">
                                        30
                                    </div>
                                    <div className=" fs-5 d-flex align-items-center f-color-f1">
                                        Sold Designs
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='fs-6 fw-bold f-color-grey my-2'>
                                    Bio
                                </div>
                                <p>
                                    {designerData.bio}
                                </p>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <div>
                                    <div className='fs-6 fw-bold f-color-grey'>
                                        Speciality
                                    </div>
                                    <div className="badge Cabin-text px-3 py-2" style={{ color: "#000000", backgroundColor: "#CCF8FE" }}>
                                        {designerData.specialities}
                                    </div>
                                </div>
                                <div type='button' onClick={handleShow} className='see-all justify-content-center align-items-center btn btn-link custom-btn fw-bold'>
                                    <i className="fas fa-plus mr-1"></i> Request New Promotion
                                </div>
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
                                                <textarea type='text' name="offerdescription" rows={3} className='form-control Cabin-text' placeholder='Enter offer description' value={offerData.offerdescription} onChange={(e) => {inputOfferData(e.target.name, e.target.value)}} style={{backgroundColor: "#F2FAFF"}}></textarea>
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
                                        </div>
                                        <div className='d-flex flex-row justify-content-between'>
                                            <button type="button" className='withdraw-btn m-4' onClick={handleClose}><Icon.PlusLg color="white" size={20} />Cancel</button>
                                            <button type="submit" className='accept-btn m-4'><Icon.PlusLg color="white" size={20} />Send Offer</button>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                                
                            </div>
                        </div>

                        <div className="col flex-lg-row mx-2">
                            <div className=' fs-5 fw-bold'>
                                Top Selling Designs <Link to={`/vendor/promotion/promoteproduct?d_id=${designerID}`}><span className="badge fs-6 see-all">See All <Icon.ArrowRight /></span></Link>
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

                <div className='top-div bg-light shadow rounded mb-3 p-2'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center justify-content-start'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5 fw-bold'>
                                Similar Designers
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div class="row row-cols-1 row-cols-md-3 g-4 my-4 mx-4">
                            {filteredData(designerData.specialities).map((designers) => (
                                <div class="col">
                                    <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                        <img className="img-fluid" src={`../../../../src/assets/img/profilePic/${designers.profile_pic}`} class="card-img-top" alt="blacksofa" />
                                        <div class="card-body m-0 p-0 mt-3">
                                            <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                <div className="d-flex flex-column">
                                                    <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>{designers.username}</p>
                                                    
                                                    <div className='d-flex flex-row gap-1'>
                                                {generateStars(designers.averagereview)}
                                            </div>
                                           
                                                </div>
                                                
                                                <Link to={`/vendor/promotion/viewdesigners?id=${designers.userid}`}><Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            ))}  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewDesigner;