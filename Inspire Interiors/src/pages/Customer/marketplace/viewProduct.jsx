import React , { useEffect, useState }from 'react';
import * as Icon from 'react-bootstrap-icons';
import './../../../styles/customer/viewProduct.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactStars from "react-rating-stars-component";
import { Carousel }  from 'react-responsive-carousel';
import axios from 'axios';

import Chair1 from './../../../assets/img/customer/chair1.png';
import Chair2 from './../../../assets/img/customer/chair2.png';
import Chair3 from './../../../assets/img/customer/chair3.png';
import Chair4 from './../../../assets/img/customer/chair4.png';
import Chair5 from './../../../assets/img/customer/chair5.png';
import Chair6 from './../../../assets/img/customer/chair6.png';
import QRPopup from '../../../components/customer/popup/ARPopup';

const stardata = {
    data:"4.5"
}

const ViewProduct = () => {

    const apiBaseURL = 'http://localhost:8080';

    const [productData, setProductData] = useState([]);
    const [reviewData, setReviewData] = useState([]);

    // Create an Axios instance with the base URL
    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    // Get the current URL
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const id = decodeURIComponent(splitURL[6]);


    // Function to fetch and store the product data
    async function fetchAndStoreProductData(id) {
        try {
            const response = await axiosInstance.get(`/product/${id}`);
            setProductData(response.data);
            console.log('Product Data:', productData);
        } catch (error) {
            console.error('Error fetching products by Type:', error);
        }
    }
    
    // Call the function to fetch and store the product data
    useEffect(() => {
    fetchAndStoreProductData(id);
    }, []);

    const [averageRating, setAverageRating] = useState(0.0);

    async function fetchAndStoreReviewData(id) {
        try {
          const response = await axiosInstance.get(`/rating/${id}`);
          setReviewData(response.data);
          
          // Set the average rating from the response to the state
          setAverageRating(response.data.averageRating);
        } catch (error) {
          console.error('Error fetching review data:', error);
        }
      }
      useEffect(() => {
        fetchAndStoreReviewData(id);
      }, [id]);

    // const rate = averageRating.toFixed(1)
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

    return (
        <>
            <div className="product-container view-product p-4 bg-white rounded-3 mb-4 me-3">
                <div className="d-flex flex-row gap-4 justify-content-between me-5">
                    <div className='d-flex flex-row gap-4'>
                    <p className="fs-3 fw-bold Cabin-text">Marketplace</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-3 fw-bold Cabin-text">{productData.type}</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{productData.product_name}</p>
                    </div>
                    <QRPopup />
                </div>
                <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row'>
                    <div className='d-flex flex-column side-div'>
                        <p className='fs-4 fw-semibold Cabin-text mt-3'>{productData.product_name}</p>
                        <div className='d-flex flex-row w-50 justify-content-between my-2'>
                            <div className='fs-4 fw-normal Cabin-text'>${productData.entry_price}</div>
                            <div className="d-flex flex-row gap-3">
                            <div className='d-flex align-items-center'>{generateStars(averageRating.toFixed(1))}</div>
                                <div className="d-flex flex-row gap-1 float-end align-items-center">
                                    <div className="fs-6 fw-bold Cabin-text">{averageRating.toFixed(1)}/5.0</div>
                                    <div className="fs-6 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>({reviewData.totalVotes})</div>
                                </div>
                            </div>
                        </div>
                        <p className='fs-6 fw-normal Cabin-text w-50 mt-2'>{productData.product_description}</p>
                        <div className='d-flex flex-row gap-4 mt-4'>
                            <Icon.CircleFill size={25} color='#C1BDB3' />
                            <Icon.CircleFill size={25} color='#58737D' />
                            <Icon.CircleFill size={25} color='#545454' />
                            <Icon.CircleFill size={25} color='#CBA5A5' />
                        </div>
                        <div className='d-flex flex-row w-50 mt-5'>
                            <div class="mb-3">
                                <input style={{ backgroundColor: "#F1F1F1" }} type="number" class="form-control w-50" id="exampleFormControlInput1" placeholder="1" />
                            </div>
                            <button className='add-btn w-75'><Icon.BagDashFill className='mx-2' size={20} color="white" />Add to Cart</button>
                        </div>
                        <div className='d-flex flex-row w-50 justify-content-between mt-4'>
                            <p className='fs-6 fw-normal Cabin-text'>Free 3-5 day shipping</p>
                            <p className='fs-6 fw-normal Cabin-text'>Tool-free assembly</p>
                            <p className='fs-6 fw-normal Cabin-text'>30-day trial</p>
                        </div>
                        <div className='d-flex flex-row gap-4 mt-4'>
                            <Icon.Heart size={25} color='#035C94' />
                            <p className='fs-6 fw-semibold cabin-text' style={{ color: "#035C94" }}>Add to Wishlist</p>
                        </div>
                    </div>
                    <div className='w-50 vieworder-carousal-div'>
                        <Carousel>
                            <div>
                                <img className='img-fluid' src={Chair1} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img className='img-fluid' src={Chair2} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img className='img-fluid' src={Chair3} />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img className='img-fluid' src={Chair4} />
                                <p className="legend">Legend 4</p>
                            </div>
                            <div>
                                <img className='img-fluid' src={Chair5} />
                                <p className="legend">Legend 5</p>
                            </div>
                            <div>
                                <img className='img-fluid' src={Chair6} />
                                <p className="legend">Legend 6</p>
                            </div>
                        </Carousel>
                    </div>

                </div>
                <div>
                    
                </div>
            </div>

        </>
    );
}

export default ViewProduct;