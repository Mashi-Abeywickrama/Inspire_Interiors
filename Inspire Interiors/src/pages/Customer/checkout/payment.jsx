import { Breadcrumb } from "react-bootstrap";
import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaBookmark } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../../../styles/customer/checkout.css';

import { Link } from 'react-router-dom';

const PaymentMethod = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.id);
    };

    return (
        <>
            <div className="background d-flex flex-column justify-content-between w-100 rounded Cabin-text">
                <div className='bg-white w-98 top-bar rounded py-3 shadow h-80'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5'>
                                <Breadcrumb className="fw-bold">
                                    <Breadcrumb.Item href='/customer/checkout/address' aria-disabled>
                                        Address
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" href='/customer/checkout/shipping' aria-disabled>
                                        <FontAwesomeIcon icon={faAngleRight} className="me-2"/>
                                        Shipping
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className="me-2"/>
                                        Payment
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex gap-2">

                        <div className="d-flex m-0 p-2 w-100 h-100 justify-content-between">
                            <div className='account-setting-session w-75 d-flex flex-column mt-2 px-2 f-color-summary'>

                                <p className='bold-cabin m-0 mb-4 mt-2 fst-italic'>Payment Method</p>
                                <div className='d-flex align-items-center gap-3 justify-content-between px-4 card-container-div'>
                                    <div className='d-flex align-items-center gap-4'>
                                    <div class="mb-2 mt-2  address-radio-form">
                                            <Form.Check
                                                type="radio"
                                                id="option2"
                                                checked={selectedOption === 'option2'}
                                                onChange={handleRadioChange}
                                                
                                                defaultChecked
                                                
                                            />
                                        </div>
                                        <i class="fab fa-cc-visa"></i>
                                        <p className='m-0'>•••• 6754</p>
                                        <p className='m-0 grey-colour-para'>Expires 06/2021</p>
                                        </div>
                                        <div d-flex >
                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>
                                    
                                </div>

                                <div className='d-flex align-items-center gap-3 justify-content-between px-4 card-container-div'>
                                    <div className='d-flex align-items-center gap-4'>
                                    <div class="mb-2 mt-2  address-radio-form">
                                            <Form.Check
                                                type="radio"
                                                id="option2"
                                                checked={selectedOption === 'option2'}
                                                onChange={handleRadioChange}
                                                
                                                defaultChecked
                                                
                                            />
                                        </div>
                                        <i class="fa-brands fa-cc-mastercard"></i>
                                        <p className='m-0'>•••• 5643</p>
                                        <p className='m-0 grey-colour-para'>Expires 11/2025</p>
                                        </div>
                                        <div d-flex >
                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>
                                    
                                </div>
                                <hr />
                                <div className='d-flex gap-1'>
                                    <Icon.Plus color={'#035C94'} size={22}/>
                                    <p className='blue-colour-para'>Add New Card</p>
                                </div>
                            </div>

                            {/* Summery */}
                        <div className="d-flex w-30 h-custom me-3">
                            <div className=" border rounded p-1 w-98 h-100 f-color-summary">
                                <div className="m-2">
                                    <p className="fs-4 fw-bold ">
                                        Order Summary
                                    </p>
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Price :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Discount :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div><div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Shipping :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div><div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Coupon Applied :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <hr />
                                    </div>
                                    {/* total */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            TOTAL :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Estimated Delivery By :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div>

                                    {/* coupon input */}
                                    <div className="mb-2 d-flex align-items-center">
                                        <input
                                            type="text"
                                            className="form-control rounded border-transparent"
                                            placeholder="Coupon Code"
                                        />
                                        <FaBookmark className="ms-2" /> {/* Bookmark icon */}
                                    </div>
                                    {/* checkout btn */}
                                        <Link to='/customer/orders/vieworder'>
                                    <div className="d-flex justify-content-end w-100 mb-2">
                                        <button className="btn-checkout w-100">Place Your Order and Pay</button>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PaymentMethod;