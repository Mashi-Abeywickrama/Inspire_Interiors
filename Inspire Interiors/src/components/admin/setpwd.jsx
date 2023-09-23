import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';

function AddNewUser({ addressData }) {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    type: '',
    username: '',
    email: '',
    dob: '',
    contact_no: '',
  });

  const apiBaseURL = 'http://localhost:8080'; // Replace with your backend URL

  const closeAddUserModel = () => {
    setShowEditPopup(false);
  };

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setUserData({ ...userData, [field]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiBaseURL}/adduser`, userData);
      // Handle success,
      console.log('User added successfully');
      setUserData({
        name: '',
        type: '',
        username: '',
        email: '',
        dob: '',
        contact_no: '',
      });
      // Close the modal
      closeAddUserModel();
    } catch (error) {
      // Handle errors,
      console.error('Error adding user', error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setShowEditPopup(true)} className='add-btn m-4'>
          Reset Password
        </button>
      </div>

      <div>
        <Modal show={showEditPopup} onHide={closeAddUserModel}>
          <Modal.Header closeButton>
            <Modal.Title>Reset Password</Modal.Title>
          </Modal.Header>

          <Form className='p-4' onSubmit={onSubmit}>
            <Modal.Body className='py-2 px-3'>
              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      New Password
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='new password'
                      name='newpwd'
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
               
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      Conform Password
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Conform Password'
                      name='comformpwd'
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

             

             
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary' onClick={closeAddUserModel}>
                Cancel
              </Button>
              <Button type='submit' variant='primary'>
                Conform
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default AddNewUser;
