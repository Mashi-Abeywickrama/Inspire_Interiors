import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SendQuotationButton({ ID }) {
    const [showSendQuotationPopup, setShowSendQuotationPopup] = useState(false);

    // Function to close the modal
    const closeSendQuotationModel = () => {
        setShowSendQuotationPopup(false);
    };

    const handleSendQuotation = () => {
        const apiBaseURL = 'http://localhost:8080';

        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 5000,
        });

        axiosInstance
            // .delete(`/delete_address/${addressID}`) 
            .then(response => {
                console.log('Address deleted successfully:', response.data);
                closeSendQuotationModel();
            })
            .catch(error => {

                console.error('Error deleting address:', error);
            });
    };

    return (
        <div>
            <button 
            onClick={() => setShowSendQuotationPopup(true)}
            className="my-2 mx-5 Cabin-text"
            style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>
                Send Quotation
            </button>

            <Modal show={showSendQuotationPopup} onHide={closeSendQuotationModel}>

                <Modal.Header closeButton>
                    <Modal.Title>
                        Send Quotation
                    </Modal.Title>
                </Modal.Header>

                <Form className='p-4' >

                    <Modal.Body className='py-2 px-3'>

                        <Row className='g-4'>
                            <Col md>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='sub-heading Cabin-text'>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='email'
                                        placeholder='Enter the Email'
                                        style={{ backgroundColor: '#F2FAFF' }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='g-4'>
                            <Col md>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='sub-heading Cabin-text'>
                                        Evidence (File Upload):
                                    </Form.Label>
                                    <Form.Control
                                        type='file'
                                        name='evidence'
                                        style={{ backgroundColor: '#F2FAFF' }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Modal.Body>

                    <Modal.Footer className='d-flex justify-content-between'>
                        <Button
                        className="Cabin-text"
                        style={{ color: "#83859C", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #83859C" }}
                        onClick={closeSendQuotationModel}>
                            Discard
                        </Button>

                        <Button
                        type="submit"
                        style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default SendQuotationButton;