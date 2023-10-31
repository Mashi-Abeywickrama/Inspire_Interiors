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

    // Function to fetch type from the backend
    const fetchProducrType = () => {

        axiosInstance.get('/type')
            .then(response => {
                setProductType(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching room type:', error);
            });
    };
    useEffect(() => {
        fetchProducrType();
    }, []);

    // Create a mapping
    const productTypeImages = {
        'Sofa': 'https://damro.lk/wp-content/uploads/2019/11/venus.jpg',
        'Wall Art': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnR23Ctzf6_1JIy9vkEuWxIiU_uR1DIzYNQ&usqp=CAU',
        'Lamp': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4biUquepwplWIXrhwFI8pVXtRdF0jT-fotqofReKe0VHeP5wBg5FpJmg9X6Nb1M8Oqt4&usqp=CAU'
    };

    // State variables
    const [roomType, setRoomType] = useState([]);
    const [productType, setProductType] = useState([]);

    const [allProducts, setAllProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    const fetchAlPopularProducts = () => {

        axiosInstance.get('/popular-items')
            .then(response => {
                setPopularProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching popular products:', error);
            });
    };
    useEffect(() => {
        fetchAlPopularProducts();
    }, []);

    const fetchAllProducts = () => {

        axiosInstance.get('/viewproducts')
            .then(response => {
                setAllProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching  products:', error);
            });
    };
    useEffect(() => {
        fetchAllProducts();
    }, []);

    const popularProductDetails = (popularProducts, allProducts) => {
        const mergedData = popularProducts.map(
            (popularItem) => {
                const matchingProduct = allProducts.find(
                    (productItem) => productItem.product_id === popularItem[0]
                );



                if (matchingProduct) {
                    // Merge the data from both sources
                    return {
                        ...popularItem,
                        ...matchingProduct,

                    };
                } else {
                    return popularItem;
                }
            });

        return mergedData;
    };

    const mergedPopularProducts = popularProductDetails(popularProducts, allProducts);
    console.log("mergeData shits", mergedPopularProducts);

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

    const imageURL = roomTypeImages[roomType] || DefaultImage;

    return (
        <>

            <div className="background-grey p-3 rounded-3">
                {/* <div className='row'>
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
                </div> */}
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
                        {/* <Link to='categoryview'>
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
                        </Link> */}
                        <div className="row">
                            <div className="w-100">
                                <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-4">
                                    {productType.map((productType, index) => (

                                        <div
                                            key={index} // Use the index as the key
                                            style={{ backgroundImage: `url(${productTypeImages[productType] || DefaultImage})`, height: "332px" }}
                                            className="mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 p-3"
                                        >
                                            <Link to={`category/${productType}`}>
                                                <p className='h5'>{productType}</p>
                                            </Link>
                                        </div>
                                    ))}



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row d-flex flex-row gap-1 mb-3 mt-4 align-items-center align-contents-center'>
                    <p className='heading h4  w-auto m-0 ' >Popular</p>
                    <div className='d-flex flex-row gap-2 w-auto  align-items-center justify-content-start f-color-signup'>
                        <Link to ={`/customer/marketplace/popularItems`}>
                            <p className=' w-auto m-0 p-0 f-color-signup'>See all</p></Link>
                        <Icon.ArrowRight className='f-color-signup'/>
                        
                    </div>
                </div>
                {/* <div className="row"> */}
                <div className="row gap-2">
                    <div className="w-100">
                        <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-3 flex-wrap gap-4">
                            {mergedPopularProducts.map((data, index) => (
                                <div key={index} className="card h-100 mb-2 rounded-3 border-0 shadow w-20 w-lg-25 w-md-25 ">
                                    <Link to={`/customer/marketplace/viewproduct/${data.product_id}`}>
                                        <img
                                            style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
                                            className="img-fluid"
                                            src={(`../../../../src/assets/img/product/${data.productImg}`)}

                                        />
                                    </Link>
                                    <div className="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696" }}>{data.product_name}</p>
                                                <p className="card-title fs-6 fw-bold m-0 Cabin-text">{data.type}</p>
                                                <p className="card-title fs-6 fw-bold m-0 Cabin-text">{generateStars(data[1])}</p>
                                                <p className="card-text fs-6 fw-bolder m-0 Cabin-text">{data.entry_price}</p>
                                            </div>
                                            <div onClick={() => handleCartAddition(data.product_id)}>
                                                <Icon.Bag className="align-items-center text-white" size={35} style={{ backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>

                {/* </div> */}

                {/* <div className="row mt-5">
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
                </div> */}

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
