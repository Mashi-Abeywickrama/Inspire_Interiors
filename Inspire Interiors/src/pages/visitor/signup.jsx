import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, Dropdown } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './../../styles/login.css';
import { Form } from 'react-bootstrap';


const SignUp = () => {

    const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000, // You can adjust the timeout value as needed
        // You can also set other default config options if required
        // For example, you might want to set headers for authorization or other request-specific headers
    });

    const navigate = useNavigate(); // Initialize useNavigate
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [laneno, setLane] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');

    const [selectedRole, setSelectedRole] = useState("Select Role");

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/login', {
                username: username,
                password: password
            });
            if (response.status === 200) {
                const userType = response.data.userType;

                if (userType === 'admin') {
                    navigate('/admin');
                } else if (userType === 'customer') {
                    navigate('/customer');
                }
            }
        } catch (error) {
            console.error('Authentication failed');
        }
    };

    return (
        <>
            <div>
                <div className='row'>

                    <div className='col-md-6 align-self-start banner-login'>
                        {/* slider with 3 images */}
                        <Carousel className="login-carousel w-100">
                            <Carousel.Item className='carousel-img'>
                                <img
                                    className="d-block w-100 h-100 img-fluid"
                                    src="https://i.pinimg.com/originals/99/0c/3b/990c3bd1c3d59ba694a430bb780d78c8.jpg"
                                    alt="Slide 1"
                                />
                            </Carousel.Item>

                            <Carousel.Item className='carousel-img'>
                                <img
                                    className="d-block w-100 h-100 img-fluid"
                                    src="https://havenly.com/blog/wp-content/uploads/2022/07/render-final-2232106-38554-8220-106864de852c.jpeg"
                                    alt="Slide 2"
                                    style={{ objectFit: 'cover' }}
                                />
                            </Carousel.Item>

                            <Carousel.Item className='carousel-img'>
                                <img
                                    className="d-block w-100 h-100 img-fluid"
                                    src="https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg"
                                    alt="Slide 3"
                                    style={{ objectFit: 'cover' }}
                                />
                            </Carousel.Item>

                        </Carousel>

                    </div>

                    <div className='col-md-6 align-self-start justify-content-center content-login cabin-text'>
                        <div className="d-flex row justify-content-center w-100 login-form">

                            <h2 className='heading-txt mt-5 fw-400'>
                                Sign up with
                            </h2>

                            <h2 className='heading-txt fw-600'>
                                Inspire Interiors
                            </h2>
                            <div className="d-flex heading-txt align-items-center justify-content-start f-color-signup">
                                <h2 className=" mb-4 fw-400 " >
                                    <span>as</span>
                                </h2>
                                <Dropdown className="fw-400 bg-transparent f-color-signup">
                                    <Dropdown.Toggle
                                        variant="outline-secondary"
                                        id="dropdown-role"
                                        className="bg-transparent border-0 border-bottom fw-400 f-color-signup"
                                    >
                                        {selectedRole}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="fw-400 bg-transparent f-color-signup">
                                        <Dropdown.Item className="fw-400 f-color-signup" onClick={() => handleRoleSelect("Customer")}>Customer</Dropdown.Item>
                                        <Dropdown.Item className="fw-400 f-color-signup" onClick={() => handleRoleSelect("Designer")}>Designer</Dropdown.Item>
                                        <Dropdown.Item className="fw-400 f-color-signup" onClick={() => handleRoleSelect("Vendor")}>Vendor</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            {/* login form */}
                            <Form className='d-flex row w-92 gap-2 f-color-signup' onSubmit={handleLogin}>

                                <Form.Group controlId="formName" >
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        size='lg'
                                        className='mb-2 bg-transparent border-0 rounded-0 border-bottom'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                {/* DOB and Email */}
                                <div className="d-flex mb-2 w-100">
                                    <Form.Group controlId="formEmail" className='w-75'>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            size='lg'
                                            className=' w-75 bg-transparent border-0 rounded-0 border-bottom'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formDOB" className='w-25'>
                                        <DatePicker
                                            selected={dob}
                                            onChange={date => setDOB(date)}
                                            placeholderText="DOB"
                                            className='w-100 bg-transparent border-0 rounded-0 border-bottom'
                                            dateFormat="MM/dd/yyyy"
                                            size='lg'
                                        />
                                    </Form.Group>
                                </div>
                                {/* Home address */}
                                <div className="d-flex mb-2 w-100">
                                    <Form.Group controlId="formLane" className='w-50'>
                                        <Form.Control
                                            type="text"
                                            placeholder="Lane No"
                                            size='lg'
                                            className=' w-92 bg-transparent border-0 rounded-0 border-bottom'
                                            value={laneno}
                                            onChange={(e) => setLane(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formCity" className='w-50 d-flex justify-content-end'>
                                        <Form.Control
                                            type="text"
                                            placeholder="City"
                                            size='lg'
                                            className=' w-92 bg-transparent border-0 rounded-0 border-bottom'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)} />
                                    </Form.Group>
                                </div>

                                <div className="d-flex mb-2 w-100">
                                    <Form.Group controlId="formDistrict" className='w-50'>
                                        <Form.Control
                                            type="text"
                                            placeholder="District"
                                            size='lg'
                                            className=' w-92 bg-transparent border-0 rounded-0 border-bottom'
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formProvince" className='w-50 d-flex justify-content-end'>
                                        <Form.Control
                                            type="text"
                                            placeholder="Province"
                                            size='lg'
                                            className='w-92 bg-transparent border-0 rounded-0 border-bottom'
                                            value={province}
                                            onChange={(e) => setProvince(e.target.value)} />
                                    </Form.Group>
                                </div>
                                {/* User Name and Password */}
                                <Form.Group controlId="formuName" >
                                    <Form.Control
                                        type="text"
                                        placeholder="User Name"
                                        size='lg'
                                        className='mb-2 bg-transparent border-0 rounded-0 border-bottom'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Control
                                        type="password"
                                        className='mb-2 bg-transparent border-0 rounded-0 border-bottom'
                                        placeholder="Password"
                                        size='lg'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                {/* Submit Button */}
                                <Button
                                    onClick={handleLogin}
                                    className='d-flex justify-content-center align-self-center mb-3'
                                    size='lg'
                                    variant="primary"
                                    style={{ backgroundColor: '#035C94', color: '#FFFFFF' }}
                                >
                                    Sign Up
                                </Button>

                            </Form>

                            <h6 className='text-center fw-400'>
                                Already have an Account?
                            </h6>

                            <h6 className='text-center f-color-signup'>
                                Login
                            </h6>

                        </div>

                    </div>


                </div>

            </div>
        </>
    );
};

export default SignUp;