import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function DeleteAddressButton({ addressID }) {
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    // Function to close the modal
    const closeDeleteAddressModal = () => {
        setShowDeletePopup(false);
    };

    const handleDeleteAddress = () => {
        const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 5000,
        });

        // Send a DELETE request to your backend to delete the address using axios or your preferred HTTP library
        axiosInstance
            .delete(`/delete_address/${addressID}`) // Replace with your actual DELETE API endpoint
            .then(response => {
                // Handle success response if needed
                console.log('Address deleted successfully:', response.data);
                // Close the modal or perform any other necessary actions
                closeDeleteAddressModal();
            })
            .catch(error => {
                // Handle error response if needed
                console.error('Error deleting address:', error);
            });
    };

    return (
        <div>
            <button onClick={() => setShowDeletePopup(true)} className="remove-address Cabin-text">Remove</button>

            <Modal show={showDeletePopup} onHide={closeDeleteAddressModal}>

                <Modal.Header closeButton />

                <Modal.Body className='d-flex justify-content-center align-items-center fs-2'>
                    Confirm Deletion
                </Modal.Body>

                <Modal.Footer className='d-flex justify-content-center'>
                    <Button variant="secondary" onClick={closeDeleteAddressModal}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDeleteAddress}>
                        Remove
                    </Button>
                </Modal.Footer>
                
            </Modal>
        </div>
    );
}

export default DeleteAddressButton;
