import React, { useState,useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SendQuotationButton({ ID }) {


const [userData, setUserData] = useState(''); // State to store email
 const apiBaseURL = 'http://localhost:8080';

        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 50000,
        });
const fetchemail = async () => {
    try {
      const response = await axiosInstance.get(`/getuserbyname/${ID.username}`);
      const data = response.data;
      setUserData(data);
      setEmail(data.email)
      console.log('Data has been received!', data);
    } catch (error) {
       console.error('Error from backend:', error);
    }
  };
 useEffect(() => {
    fetchemail();
  }, []);

    const [showSendQuotationPopup, setShowSendQuotationPopup] = useState(false);

    const [emailr, setEmail] = useState(''); // State to store email
    const [filer, setFile] = useState(null); // State to store the selected file 

    // Function to close the modal
    const closeSendQuotationModel = () => {
        setShowSendQuotationPopup(false);
    };

    const handleSendQuotation =async (e)  => {
        e.preventDefault();
        const apiBaseURL = 'http://localhost:8080';

        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 50000,
        });

        const first = {recipient: emailr}
    
       
        const formData = new FormData();
        formData.append('details', JSON.stringify(first));
        formData.append('file', filer); // Make sure 'filer' is correctly set from the state, not redeclared as 'file'

        console.log(formData);

        axiosInstance
            .post(`/sendMailWithAttachment`, formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }) 
            .then(response => {
                axiosInstance
                    .put(`/mark-as-completed/${ID.inquiry_id}`, {})
                    .then(response => {
                        console.log('Inquiry updated successfully:', response.data);
                     
                    })
                    .catch(error => {
                        console.error('Error updating inquiry:', error);
                    });
                console.log('Mail Sent:', response.data);
                closeSendQuotationModel();
            })
            .catch(error => {

                console.error('Error Sending Mail:', error);
            });
    };

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log('Selected File:', selectedFile);
    setFile(selectedFile);
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

                <Form className='p-4' onSubmit={handleSendQuotation} >

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
                                        value={emailr}
                                        placeholder='Enter the Email'
                                        style={{ backgroundColor: '#F2FAFF' }}
                                        onChange={(e) => {
                                        const emailValue = e.target.value;
                                        console.log('Email Value:', emailValue);
                                        setEmail(emailValue);
                                    }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='g-4'>
                            <Col md>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='sub-heading Cabin-text'>
                                        Quotation (File Upload):
                                    </Form.Label>
                                    <Form.Control
                                        type='file'
                                        name='evidence'
                                        style={{ backgroundColor: '#F2FAFF' }}
                                        onChange={handleFileChange} // Handle file input change
                                        
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