import * as Icon from 'react-bootstrap-icons';
import { Carousel } from 'react-bootstrap';
import Adv1 from './../../../assets/img/adv/adv1.jpg';
import LivinRoom from './../../../assets/img/customer/livinroom.jpg';
import Chair from './../../../assets/img/customer/Chair.png';
import Desk from './../../../assets/img/customer/Desks.png';
import Sofa from './../../../assets/img/customer/Sofa.png';
import DefaultImage from './../../../assets/img/customer/livinroom.jpg';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../styles/customer/marketplace.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

const MarketPlace = () => {
    const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000, // You can adjust the timeout value as needed
    });

    // Function to fetch room type from the backend
    const fetchRoomType = () => {

        axiosInstance.get('/room-types')
            .then(response => {
                setRoomType(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching room type:', error);
            });
    };
    // Create a mapping
    const roomTypeImages = {
        'Living Room': 'https://damro.lk/wp-content/uploads/2019/11/venus.jpg',
        'Bedroom': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJWzKyYDGZem8-78vIlg9h7qxyF1dcahCb5w&usqp=CAU',
        'Dining Room': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJlcN0_avnxR_cWNX-DfNVz4Bx-gUdYNo2w&usqp=CAU'
    };

    // Call the fetchRoomType function when the component mounts
    useEffect(() => {
        fetchRoomType();
    }, []);

    // State variables
    const [roomType, setRoomType] = useState([]);

    const imageURL = roomTypeImages[roomType] || DefaultImage;

    return (
        <>

            <div className="background-grey p-3 rounded-3">
                <div className='row'>
                    <p className='heading h4 mb-3'>Best Deals</p>
                </div>
                <div className="row first-design">
                    <div className="w-100">
                        <Carousel style={{ width: "100%", height: "max-content", objectFit: "cover", borderRadius: "20px" }}>

                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src={Adv1}
                                    alt="First slide" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Adv1}
                                    alt="Second slide" />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Adv1}
                                    alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
                <div>
                </div>

                <div className='row d-flex flex-row gap-1 mb-3 mt-4 align-items-center align-contents-center'>
                    <p className='heading h4  w-auto m-0 ' >Categories</p>
                    <div className='d-flex flex-row gap-2 w-auto  align-items-center justify-content-start'>
                        <p className=' w-auto m-0 p-0 '>See all</p>
                        <Icon.ArrowRight />
                    </div>
                </div>
                <div className="row">
                    <div className="w-100">
                        <Link to='categoryview'>
                            <Carousel style={{ width: "100%" }}>

                                <Carousel.Item>
                                    <div style={{ height: 'auto', width: '100%' }} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2 image-fluid' >

                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Chair} alt="" />

                                        </div>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2' >
                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Sofa} alt="" />
                                        </div>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2' >
                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Desk} alt="" />
                                        </div>
                                    </div>

                                </Carousel.Item>

                                <Carousel.Item>
                                    <div style={{ height: 'auto', width: '100%' }} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2' >

                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Chair} alt="" />

                                        </div>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2' >
                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Sofa} alt="" />
                                        </div>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2' >
                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Desk} alt="" />
                                        </div>
                                    </div>

                                </Carousel.Item>

                                <Carousel.Item>
                                    <div style={{ height: 'auto', width: '100%' }} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2' >
                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Chair} alt="" />
                                        </div>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2' >
                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Sofa} alt="" />
                                        </div>
                                        <div style={{ height: '200px' }} className='w-lg-25 w-100 rounded-2' >
                                            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src={Desk} alt="" />
                                        </div>
                                    </div>

                                </Carousel.Item>

                            </Carousel>
                        </Link>
                    </div>
                </div>

                <div className='row d-flex flex-row gap-1 mb-3 mt-4 align-items-center align-contents-center'>
                    <p className='heading h4  w-auto m-0 ' >Popular</p>
                    <div className='d-flex flex-row gap-2 w-auto  align-items-center justify-content-start'>
                        <p className=' w-auto m-0 p-0 '>See all</p>
                        <Icon.ArrowRight />
                    </div>
                </div>
                <div className="row">
                    <div className="w-100">
                        <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-3">
                            <div class="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 ">
                                <Link to='viewproduct'>
                                    <img style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }} className="img-fluid" src={Adv1} class="card-img-top" alt="whitesofa" />
                                </Link>
                                <div class="card-body m-0 p-0 mt-3">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                        <div className="d-flex flex-column">
                                            <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696" }}>SOFA</p>
                                            <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                            <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                        </div>
                                        <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                    </div>
                                </div>
                            </div>
                            <div class="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 ">
                                <Link to='viewproduct'>
                                    <img style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }} className="img-fluid" src={Adv1} class="card-img-top" alt="whitesofa" />
                                </Link>
                                <div class="card-body m-0 p-0 mt-3">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                        <div className="d-flex flex-column">
                                            <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696" }}>SOFA</p>
                                            <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                            <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                        </div>
                                        <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                    </div>
                                </div>
                            </div>
                            <div class="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 ">
                                <Link to='viewproduct'>
                                    <img style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }} className="img-fluid" src={Adv1} class="card-img-top" alt="whitesofa" />
                                </Link>
                                <div class="card-body m-0 p-0 mt-3">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                        <div className="d-flex flex-column">
                                            <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696" }}>SOFA</p>
                                            <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                            <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                        </div>
                                        <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                    </div>
                                </div>
                            </div>
                            <div class="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 ">
                                <Link to='viewproduct'>
                                    <img style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }} className="img-fluid" src={Adv1} class="card-img-top" alt="whitesofa" />
                                </Link>
                                <div class="card-body m-0 p-0 mt-3">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                        <div className="d-flex flex-column">
                                            <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696" }}>SOFA</p>
                                            <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                            <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                        </div>
                                        <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="w-100">
                        <Carousel style={{ width: "100%" }}>

                            <Carousel.Item>
                                <div style={{ height: 'auto', width: '100%' }} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                                    <div style={{ height: '200px' }} className='w-lg-50 w-md-50 w-100 rounded-2' >

                                        <img style={{ objectFit: "cover", width: '100%', height: '100%', borderRadius: '5px' }} src={Adv1} alt="" />

                                    </div>
                                    <div style={{ height: '200px' }} className='w-lg-50 w-md-50 w-100 rounded-2' >

                                        <img style={{ objectFit: "cover", width: '100%', height: '100%', borderRadius: '5px' }} src={Adv1} alt="" />

                                    </div>
                                </div>

                            </Carousel.Item>

                            <Carousel.Item>
                                <div style={{ height: 'auto', width: '100%' }} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                                    <div style={{ height: '200px' }} className='w-lg-50 w-md-50 w-100 rounded-2' >

                                        <img style={{ objectFit: "cover", width: '100%', height: '100%', borderRadius: '5px' }} src={Adv1} alt="" />

                                    </div>
                                    <div style={{ height: '200px' }} className='w-lg-50 w-md-50 w-100 rounded-2' >

                                        <img style={{ objectFit: "cover", width: '100%', height: '100%', borderRadius: '5px' }} src={Adv1} alt="" />

                                    </div>
                                </div>

                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>

                <div className='row d-flex flex-column gap-1 mb-3 mt-4 align-items-start align-contents-center'>
                    <p className='heading h4  w-auto m-0 ' >Rooms</p>
                    <div className='d-flex flex-row gap-2 w-auto  align-items-center justify-content-start'>
                        <p className=' w-auto m-0 p-0 '>Furniture for every corners in your home</p>

                    </div>
                </div>
                <div className="row">
                    <div className="w-100">
                        <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-4">
                            {roomType.map((roomType, index) => (

                                <div
                                    key={index} // Use the index as the key
                                    style={{ backgroundImage: `url(${roomTypeImages[roomType] || DefaultImage})`, height: "332px" }}
                                    className="mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 p-3"
                                >
                                    <Link to={`categoryview/${roomType}`}>
                                        <p className='h5'>{roomType}</p>
                                    </Link>
                                </div>
                            ))}



                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}


export default MarketPlace;
