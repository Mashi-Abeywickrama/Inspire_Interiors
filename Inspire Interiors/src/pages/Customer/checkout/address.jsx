import { Breadcrumb } from "react-bootstrap";
import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaBookmark } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../../../styles/customer/checkout.css';

const Address = () => {
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
                                    <Breadcrumb.Item style={{ color: '#17183B !important' }}>
                                        Address
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
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
                                <div className="">
                                    <div className='d-flex gap-4 align-items-center justify-content-between '>
                                        <div className='d-flex justify-content-start gap-3 align-items-center'>
                                            <div class="mb-2 mt-2  address-radio-form">
                                                <Form.Check
                                                    type="radio"
                                                    id="option1"
                                                    checked={selectedOption === 'option1'}
                                                    onChange={handleRadioChange}
                                                    label={'Huzefa Bagwala'}
                                                    defaultChecked
                                                />
                                            </div>
                                            <p className="address-tag m-0 p-1 fs-6 Cabin-text">HOME</p>
                                        </div>

                                        <div d-flex >
                                            <button className="edit-address Cabin-text">Edit</button>

                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>

                                    </div>
                                    <p className='m-0 address-sub-para'>1131 Dusty Townline, Jacksonville, TX 40322</p>
                                    <p className='m-0 address-sub-para mb-4'>Contact - (936) 361-0310</p>
                                </div>
                                <div>
                                    <div className='d-flex gap-4 align-items-center justify-content-between '>
                                        <div className='d-flex justify-content-start gap-3 align-items-center'>
                                            <div class="mb-2 mt-2  address-radio-form">
                                                <Form.Check
                                                    type="radio"
                                                    id="option2"
                                                    checked={selectedOption === 'option2'}
                                                    onChange={handleRadioChange}
                                                    label={'IndiaTech'}
                                                    defaultChecked

                                                />
                                            </div>
                                            <p className="address-tag m-0 p-1 fs-6 Cabin-text">OFFICE</p>
                                        </div>

                                        <div d-flex >
                                            <button className="edit-address Cabin-text">Edit</button>

                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>


                                    </div>
                                    <p className='m-0 address-sub-para'>1219 Harvest Path, Jacksonville, TX 40326</p>
                                    <p className='m-0 address-sub-para mb-4'>Contact - (936) 361-0310</p>
                                </div>

                                <hr />
                                <div className='d-flex gap-1'>
                                    <Icon.Plus color={'#035C94'} size={22} />
                                    <p className='blue-colour-para'>Add New Address</p>
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
                                    <div className="d-flex justify-content-end w-100 mb-2">
                                        <button className="btn btn-color w-100">Continue to Shipping</button>
                                    </div>
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
export default Address;