import { React, useState, useEffect } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import SendQuotationBtn from '../../components/customer/popup/sendQuotation';
import MarkAsCanceledBtn from '../../components/customer/popup/markAsCanceled';
import RejectRefund from '../../components/customer/popup/rejectRefund';

const DetailedView = () => {

    const currentURL = window.location.href;
    // Split the URL by "/"
    const splitURL = currentURL.split("/");
    const inquiry_type = decodeURIComponent(splitURL[6]);
    const id = splitURL[7];
    // console.log("ID: ", id)

    const [inquiryData, setInquiryData] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiBaseURL = 'http://localhost:8080';
    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
        axiosInstance
            .get(`/inquiry-details/${id}`)
            .then((response) => {
                const data = response.data;
                setInquiryData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error from backend:', error);
                setLoading(false);
            });
    }, [axiosInstance]);

    // console.log(inquiryData)
    // Captitalize first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getStatusComponent = (status) => {
        // Define the mapping of status to CSS classes and text
        const statusMap = {
            Completed: {
                className: 'completed d-flex gap-2 align-items-center',
                text: 'Completed',
            },
            Ongoing: {
                className: 'ongoing d-flex gap-2 align-items-center',
                text: 'Ongoing',
            },
            Delayed: {
                className: 'delayed d-flex gap-2 align-items-center',
                text: 'Delayed',
            },
            Canceled: {
                className: 'outstock d-flex gap-2 align-items-center',
                text: 'Canceled',
            },
            Refunded: {
                className: 'completed d-flex gap-2 align-items-center',
                text: 'Refunded',
            },
        };
        if (statusMap.hasOwnProperty(status)) {
            const { className, text } = statusMap[status];
            return (
                <div className={className}>
                    <i className="bi bi-circle-fill tag-icon"></i>
                    <p className="m-0">{text}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <>
            <div className="inquiry-container h-100 p-4 bg-white rounded-3 mb-4 me-3">

                <div className='top-bar rounded'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5 w-100'>
                                <Breadcrumb className="fw-bold">
                                    <Breadcrumb.Item href='/customersupport/inquiry'>
                                        Inquiries
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active >
                                        <FontAwesomeIcon icon={faAngleRight} className="me-2 ms-2" />
                                        View More
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                                        {inquiryData.inquiry_reference}
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text">{capitalizeFirstLetter(inquiry_type)} Request</p>
                        {/* <div className="badge d-flex fw-semibold rounded-3 Cabin-text mx-5 align-items-center" style={{ height: "1.7rem", background: "#F6E3AC", color: "#6B4605" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div> */}
                        <div>{getStatusComponent(inquiryData.inquiry_status)}</div>
                    </div>
                    <div className=" divider" />
                </div>

                <div className='py-2 px-3 h-details'>
                    <Row className='g-4'>
                        <Col md>
                            <Form.Group className='mb-3'>
                                <Form.Label className='sub-heading Cabin-text'>
                                    Customer (Username) :
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    value={inquiryData.username}
                                    style={{ backgroundColor: '#F2FAFF' }}
                                    readOnly
                                />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className='mb-3'>
                                <Form.Label className='sub-heading Cabin-text'>
                                    Inquiry Date :
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    value={inquiryData.inquiry_date}
                                    style={{ backgroundColor: '#F2FAFF' }}
                                    readOnly
                                />
                            </Form.Group>
                        </Col>
                        {inquiryData.inquiry_status === 'Cancelled' && (
                            <Col md>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='sub-heading Cabin-text'>
                                        Cancelled Date :
                                    </Form.Label>
                                    <Form.Control
                                        type='text'
                                        value={inquiryData.completion_date}
                                        style={{ backgroundColor: '#F2FAFF' }}
                                        readOnly
                                    />
                                </Form.Group>
                            </Col>
                        )}
                        {inquiryData.inquiry_status === 'Completed' && (
                            <Col md>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='sub-heading Cabin-text'>
                                        Completion Date :
                                    </Form.Label>
                                    <Form.Control
                                        type='text'
                                        value={inquiryData.completion_date}
                                        style={{ backgroundColor: '#F2FAFF' }}
                                        readOnly
                                    />
                                </Form.Group>
                            </Col>
                        )}
                    </Row>

                    {inquiry_type === 'quotations' && (
                        <>
                        <Row className='g-4'>
                            <Col md>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='sub-heading Cabin-text'>
                                        Remarks:
                                    </Form.Label>
                                    <Form.Control
                                        type='textarea'
                                        value={inquiryData.remarks}
                                        style={{ backgroundColor: '#F2FAFF' }}
                                        readOnly
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        {inquiryData.inquiry_status === 'Canceled' && (
                            <Row className='g-4'>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Additional Remarks:
                                        </Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            name='additionalRemarks'
                                            value={inquiryData.remarks}
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        )}
                        </>
                    )}

                    {inquiry_type === 'refund' && (
                        <>
                            <Row className='g-4'>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Order No:
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={inquiryData.order_no}
                                            name='orderNo'
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Order Date:
                                        </Form.Label>
                                        <Form.Control
                                            type='date'
                                            value={inquiryData.order_date}
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className='g-4'>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Reason:
                                        </Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            name='reason'
                                            value={inquiryData.reason}
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {inquiryData.inquiry_status === 'Canceled' && (
                            <Row className='g-4'>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Reason to Reject:
                                        </Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            name='additionalRemarks'
                                            value={inquiryData.additional_remarks}
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        )}

                            <Row className='g-4'>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Evidence :
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={inquiryData.evidence}
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </>
                    )}

                    {inquiry_type === 'orderComplaints' && (
                        <>
                            <Row className='g-4'>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Order No:
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={inquiryData.order_no}
                                            name='orderNo'
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Order Date:
                                        </Form.Label>
                                        <Form.Control
                                            type='date'
                                            value={inquiryData.order_date}
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='g-4'>
                                <Col md>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='sub-heading Cabin-text'>
                                            Remarks:
                                        </Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            name='remarks'
                                            value={inquiryData.remark}
                                            style={{ backgroundColor: '#F2FAFF' }}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </>
                    )}

                </div>
                {inquiry_type != 'refund' && inquiryData.inquiry_status != 'Canceled' &&  (
                    <>
                        <div className="divider " />
                        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
                        <MarkAsCanceledBtn ID={inquiryData}/>
                            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-1">
                            <SendQuotationBtn ID={inquiryData}/>
                            </div>
                        </div>
                    </>
                )}
                {inquiry_type === 'refund' && inquiryData.inquiry_status != 'Canceled' &&  (
                    <>
                        <div className="divider " />
                        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
                        <RejectRefund ID={inquiryData}/>
                            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-1">
                            <SendQuotationBtn/>
                            </div>
                        </div>
                    </>
                )}

                {/* <div className="divider " />
                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
                    <button className="my-2 mx-5 Cabin-text " style={{ color: "#FF5C60", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #FF5C60" }}>Mark as Canceled</button>
                    <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-1">
                        <button className="my-2 mx-5 Cabin-text" style={{ color: "#83859C", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #83859C" }}>Discard Changes</button>
                        <button className="my-2 mx-5 Cabin-text" style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>Complete Inquiry</button>
                    </div>
                </div> */}


            </div>
        </>
    );
}

export default DetailedView;