import React, { useState,useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function MarkAsCompleted() {


    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [selected, setSelected] = useState(splitLocation[5]);

    
    const [showPopup, setShowModel] = useState(false);
    const [additionalRemarks, setAdditionalRemarks] = useState(''); // Add state for additionalRemarks

    // Function to close the modal
    const closeModel = () => {
        setShowModel(false);
    };

    // Function to handle the form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const apiBaseURL = 'http://localhost:8080';
        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 5000,
        });

        // Create an object with the updated data
        const updatedData = {
            additional_remarks: additionalRemarks,
        };

        axiosInstance
            .put(`/mark-as-completed/${selected}`, updatedData)
            .then(response => {
                console.log('Inquiry Completed:', response.data);
                closeModel();
            })
            .catch(error => {
                console.error('Error updating inquiry:', error);
            });
    };

    return (
        <div>
            <button
            onClick={() => setShowModel(true)}
            className="my-2 mx-5 Cabin-text "
            style={{ color: "#007F00", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #007F00" }}>
                Mark as Completed
            </button>

            <Modal show={showPopup} onHide={closeModel}>

                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#007F00" }}>
                        Mark as Completed
                    </Modal.Title>
                </Modal.Header>

                <Form className='p-4' method='POST' onSubmit={handleFormSubmit}>

                    <Modal.Body className='py-2 px-3'>
                        <Row className='g-4'>
                            <Col md>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='sub-heading Cabin-text'>
                                        Additional Remarks
                                    </Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows={3}
                                        name='additionalRemarks'
                                        placeholder='Enter the Reason'
                                        style={{ backgroundColor: '#F2FAFF' }}
                                        value={additionalRemarks} // Bind the value to the state
                                        onChange={(e) => setAdditionalRemarks(e.target.value)} // Update the state when the user types
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer className='d-flex justify-content-between'>
                        <Button
                        className="Cabin-text"
                        style={{ color: "#83859C", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #83859C" }}
                        onClick={closeModel}>
                            Discard
                        </Button>

                        <Button
                        type="submit"
                        style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }} >
                            Save
                        </Button>
                    </Modal.Footer>

                </Form>
            </Modal>
        </div>
    );
}

export default MarkAsCompleted;