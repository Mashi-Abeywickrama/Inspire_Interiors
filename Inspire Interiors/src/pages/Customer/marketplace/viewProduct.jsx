import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './../../../styles/customer/viewProduct.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactStars from "react-rating-stars-component";
import { Carousel }  from 'react-responsive-carousel';

import Chair1 from './../../../assets/img/customer/chair1.png';
import Chair2 from './../../../assets/img/customer/chair2.png';
import Chair3 from './../../../assets/img/customer/chair3.png';
import Chair4 from './../../../assets/img/customer/chair4.png';
import Chair5 from './../../../assets/img/customer/chair5.png';
import Chair6 from './../../../assets/img/customer/chair6.png';

const stardata = {
    data:"4.5"
}

const ViewProduct = () => {
    return (
        <>
            <div className="product-container p-4 bg-white rounded-3 mb-4 me-3">
                <div className="d-flex flex-row gap-4">
                    <p className="fs-3 fw-bold Cabin-text">Marketplace</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-3 fw-bold Cabin-text">Chair</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Meryl Lounge Chair</p>
                </div>
                <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row'>
                    <div className='d-flex flex-column side-div'>
                        <p className='fs-4 fw-semibold Cabin-text mt-3'>Meryl Lounge Chair</p>
                        <div className='d-flex flex-row w-50 justify-content-between '>
                            <p className='fs-6 fw-normal Cabin-text mt-2'>$149.99</p>
                            <div className="d-flex flex-row gap-3">
                                <ReactStars
                                    count={5}
                                    onChange={stardata}
                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700" />
                                <div className="d-flex flex-row gap-1 float-end mt-2">
                                    <p className="fs-6 fw-bold Cabin-text">4.6/5.0</p>
                                    <p className="fs-6 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>(556)</p>
                                </div>
                            </div>
                        </div>
                        <p className='fs-6 fw-normal Cabin-text w-50'>The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there's a tilt and height-adjusting mechanism that's built to outlast years of ups and downs.</p>
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
            </div>

        </>
    );
}

export default ViewProduct;