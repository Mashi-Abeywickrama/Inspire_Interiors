import React, { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, Breadcrumb, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './../../../styles/customer/designs.css';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import LivingRoom from '../../../assets/img/customer/livinroom.jpg'

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
    // Cards data for the similar designers section...
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

    const [user, setUser] = useState([]);
    const [designerData, setDesignerData] = useState([]);
    const [designCount, setDesignCount] = useState(0);

    const [allDesigners, setAllDesigners] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const Id = urlParams.get('id');
    console.log(Id)

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
                    (userItem) => userItem.userid === designerItem.designer_id
                );

                if (matchingUser) {
                    // Merge the data from both sources
                    return {
                        ...designerItem,
                        ...matchingUser

                    };
                } else {
                    return {
                        ...designerItem
                    };
                }
            });

        return mergedData;
    };

    const mergedDesigner = mergeData(allDesigners, allUsers);
    console.log("merged Data", mergedDesigner);

    const filteredData = (specialities) => mergedDesigner.filter((item) => item.specialities === specialities && item.userid !== designerData.designer_id);
    console.log(filteredData(designerData.specialities));

    const [customizedorderData, setCustomizedOrderData] = useState({
        designdescription: '',
        designspecification: '',
        budget: '',
        additionalnotes: '',
        dimentionimage: '',
        customerid: '',
        designerID: '',
        status: "New",
        roomtype: ''
    });


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
                                <Breadcrumb className="fw-bold">
                                    <Breadcrumb.Item href='/customer/designs'>
                                        Designs
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className='me-2' />
                                        Designer
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className='me-2' />
                                        {user.name}
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>

                    {/* Designer profile and Projects */}
                    <div className=" d-flex w-100 justify-content-center m-0 col-md-4 col-lg-2 col-sm-8">
                        {/* Designer profile image and details */}
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
                                <div className="d-flex w-auto three-box rounded align-items-center justify-content-center gap-2 p-2">
                                    <div className=" fw-bold fs-4 d-flex align-items-center f-color-y p-2">
                                        {designCount}
                                    </div>
                                    <div className=" fs-5 d-flex align-items-center f-color-f1">
                                        Total Designs
                                    </div>
                                </div>
                                <div className="d-flex w-auto three-box rounded align-items-center justify-content-center gap-2 p-2">
                                    <div className="w-25 fw-bold fs-4 d-flex align-items-center f-color-y p-2">
                                        30
                                    </div>
                                    <div className=" fs-5 d-flex align-items-center f-color-f1">
                                        Sold Designs
                                    </div>
                                </div>

                            </div>
                            {/* Bio */}
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
                                    <i className="fas fa-plus mr-1"></i> Request New Design
                                </div>

                                {/* popup for requesting a new design */}
                                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>New Design Request</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form method="POST">
                                            <div className="d-flex flex-column mx-4 gap-3">
                                                <div className='mb-1'>
                                                    <label>Room type</label>
                                                    <input type='text'
                                                        name="roomtype"
                                                        className='form-control Cabin-text'
                                                        value={customizedorderData.roomtype}
                                                        onChange={(e) => updateOfferData(e.target.name, e.target.value)}
                                                        style={{ backgroundColor: "#F2FAFF" }}>
                                                    </input>
                                                </div>
                                                <div className='mb-1'>
                                                    <label>Design Description</label>
                                                    <textarea type='text'
                                                        name="designdescription" autoFocus
                                                        className='form-control Cabin-text'
                                                        value={customizedorderData.designdescription}
                                                        onChange={(e) => updateOfferData(e.target.name, e.target.value)}
                                                        style={{ backgroundColor: "#F2FAFF" }}>
                                                    </textarea>
                                                </div>
                                                <div className='mb-1'>
                                                    <label>Design Specification</label>
                                                    <textarea type='text'
                                                        name="designspecification"
                                                        className='form-control Cabin-text'
                                                        value={customizedorderData.designspecification}
                                                        onChange={(e) => updateOfferData(e.target.name, e.target.value)}
                                                        style={{ backgroundColor: "#F2FAFF" }}>
                                                    </textarea>
                                                </div>
                                                <div className='mb-1'>
                                                    <label>Design Budget</label>
                                                    <input type='text'
                                                        name="budget"
                                                        className='form-control Cabin-text'
                                                        value={customizedorderData.budget}
                                                        onChange={(e) => updateOfferData(e.target.name, e.target.value)}
                                                        style={{ backgroundColor: "#F2FAFF" }}>
                                                    </input>
                                                </div>
                                                <div className='mb-1'>
                                                    <label>Additional Notes</label>
                                                    <textarea type='textarea'
                                                        name="additionalnotes"
                                                        className='form-control Cabin-text'
                                                        value={customizedorderData.additionalnotes}
                                                        onChange={(e) => updateOfferData(e.target.name, e.target.value)}
                                                        style={{ backgroundColor: "#F2FAFF" }}>
                                                    </textarea>
                                                </div>
                                                <div className='mb-1'>
                                                    <label>dimension Images</label>
                                                    <input type='file'
                                                        name="dimentionimage"
                                                        className='form-control Cabin-text'
                                                        value={customizedorderData.dimentionimage}
                                                        onChange={(e) => updateOfferData(e.target.name, e.target.value)}
                                                        style={{ backgroundColor: "#F2FAFF" }}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row justify-content-between'>
                                                <button type="button" className='withdraw-btn m-4 ' onClick={handleClose}><Icon.PlusLg color="white" size={20} />Cancel</button>
                                                <button type="submit" className='accept-btn m-4'><Icon.PlusLg color="white" size={20} />Send Request</button>
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>


                            </div>

                        </div>

                        <div className="col flex-lg-row mx-2">
                            <div className=' fs-5 fw-bold'>
                                Top Selling Designs<Link to={`/vendor/promotion/promoteproduct?d_id=${designerID}`}><span className="badge fs-6 see-all">See All <Icon.ArrowRight /></span></Link>
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

                {/* Similar Designers */}
                <div className='top-div bg-light shadow rounded mb-3'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center justify-content-start mt-1'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5 fw-bold'>
                                Similar Designers
                            </div>
                        </div>
                    </div>
                    <div className='bg-light image-bar row w-100 flex-row m-0 p-0 mt-2 '>
                        {filteredData(designerData.specialities).map((designers, index) => (
                            <div key={index} className='d-flex col-5 col-md-4 col-lg-2 col-sm-8 mb-3'>
                                 <Link to={`/customer/designs/viewdesigner?id=${designers.designer_id}`}>
                                    <Card className='h-100 border-0 rounded' style={{ color: '#7C828B' }}>
                                        <Card.Img
                                            variant='top'
                                            src={`../../../../src/assets/img/profilePic/${designers.profile_pic}`}
                                            className='p-2 rounded-3 ' />
                                        <Card.Body className='flex-row justify-content-center'>
                                            <Card.Text className='d-flex m-0 lead fs-6 justify-content-center' >
                                                {designers.name}
                                            </Card.Text>
                                            <Card.Text className='d-flex flex-row justify-content-center gap-1'>
                                                {generateStars(designers.averagereview)}
                                            </Card.Text >
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewDesigner;