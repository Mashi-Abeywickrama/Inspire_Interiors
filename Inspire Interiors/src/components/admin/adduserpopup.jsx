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
          <Icon.PlusLg color='white' size={20} />
          Add User
        </button>
      </div>

      <div>
        <Modal show={showEditPopup} onHide={closeAddUserModel}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>

          <Form className='p-4' onSubmit={onSubmit}>
            <Modal.Body className='py-2 px-3'>
              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      Name:
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Name'
                      name='name'
                      onChange={(e) => handleInputChange(e, 'name')}
                      value={userData.name}
                      style={{ backgroundColor: '#F2FAFF' }}
                      required 
                    />
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      User Type
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='User type'
                      name='type'
                      onChange={(e) => handleInputChange(e, 'type')}
                      value={userData.type}
                      style={{ backgroundColor: '#F2FAFF' }}
                      required 
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      User Name:
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Username'
                      name='username'
                      onChange={(e) => handleInputChange(e, 'username')}
                      value={userData.username}
                      style={{ backgroundColor: '#F2FAFF' }}
                      required 
                    />
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      Email:
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Email'
                      name='email'
                      onChange={(e) => handleInputChange(e, 'email')}
                      value={userData.email}
                      style={{ backgroundColor: '#F2FAFF' }}
                      required 
                      pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      Date of Birth:
                    </Form.Label>
                    <Form.Control
                      type='date'
                      name='dob'
                      onChange={(e) => handleInputChange(e, 'dob')}
                      value={userData.dob}
                      style={{ backgroundColor: '#F2FAFF' }}
                      required 
                    />
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      Contact No:
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='076 xxxxxxx'
                      name='contact_no'
                      onChange={(e) => handleInputChange(e, 'contact_no')}
                      value={userData.contact_no}
                      style={{ backgroundColor: '#F2FAFF' }}
                      required 
                      pattern="^\d{10}$"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary' onClick={closeAddUserModel}>
                Close
              </Button>
              <Button type='submit' variant='primary'>
                Add User
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default AddNewUser;
