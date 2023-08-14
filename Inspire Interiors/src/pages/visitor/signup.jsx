import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, Dropdown } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import * as yup from 'yup';

import './../../styles/login.css';
import { Form } from 'react-bootstrap';
import useAlert from '../../components/useAlert';

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    dob: yup.date().nullable().required('Date of Birth is required'),
    laneno: yup.string().required('Lane No is required'),
    city: yup.string().required('City is required'),
    district: yup.string().required('District is required'),
    province: yup.string().required('Province is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    userType: yup.string().oneOf(['Customer', 'Designer', 'Vendor'], 'Select a valid user type').required('User Type is required'),
});



const SignUp = () => {

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
        validateField(field);
    };

    

    


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

    const { setAlert } = useAlert();

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const validateField = async (field) => {
        try {
            await validationSchema.validateAt(field, {
                [field]: stateValues[field],
            });

            setErrors({ ...errors, [field]: undefined });
        } catch (validationError) {
            setErrors({ ...errors, [field]: validationError.message });
        }
    };

    const stateValues = {
        name,
        email,
        dob,
        laneno,
        city,
        district,
        province,
        username,
        password,
        userType: selectedRole,
    };

    const handleSignup = async (e) => {
        setAlert('Successful Signup!', 'success');
        e.preventDefault();

        

        try {
            // Validate each field individually before making the API call
           const validationPromises = Object.keys(stateValues).map((field) =>
                validateField(field)
            );
            await Promise.all(validationPromises);

            const isValid = !Object.values(errors).some((error) => error);
            console.log(errors);
            
            if (isValid === false) {
                
               console.log(isValid );
            }
            else if (isValid) {
            const response = await axiosInstance.post('/register', {
                username: username,
                email: email,
                dob: dob,
                name: name,
                password: password,
                laneNo: laneno,
                city: city,
                district: district,
                province: province,
                userType: selectedRole
            });
            if (response.status === 200) {
                setAlert('Successful Signup!', 'success');
                console.log('Successful Signup!');
                setTimeout(() => {
                    // navigate('/login');
                }, 3000);

                
            }
            else{
                console.log('Signup failed');
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
                                    <Dropdown.Menu className="fw-400 bg-white f-color-signup">
                                        <Dropdown.Item className="f-color-signup" onClick={() => handleRoleSelect("Customer")}>Customer</Dropdown.Item>
                                        <Dropdown.Item className="f-color-signup" onClick={() => handleRoleSelect("Designer")}>Designer</Dropdown.Item>
                                        <Dropdown.Item className="f-color-signup" onClick={() => handleRoleSelect("Vendor")}>Vendor</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            {/* login form */}
                            <Form className='d-flex row w-92 gap-2 f-color-signup' onSubmit={handleSignup}>

                                <Form.Group  >
                                    <Form.Control touched="true"
                                        type="text"
                                        required    
                                        placeholder="Name"
                                        size='lg'
                                        className='mb-2 bg-transparent border-0 rounded-0 border-bottom'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} 
                                        onBlur={() => handleBlur('name')}
                                         />
                                        {touched.name && errors.name && <div className="text-danger">{errors.name}</div>}
                                </Form.Group>
                                {/* DOB and Email */}
                                <div className="d-flex mb-2 w-100">
                                    <Form.Group controlId="formEmail" className='w-75'>
                                        <Form.Control
                                            type="text"
                                            required
                                            placeholder="Email"
                                            size='lg'
                                            className=' w-75 bg-transparent border-0 rounded-0 border-bottom'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                             onBlur={() => handleBlur('email')}
                                              />
                                                {touched.email && errors.email && <div className="text-danger">{errors.email}</div>}
                                    </Form.Group>
                                    <Form.Group controlId="formDOB" className='w-25'>
                                        <DatePicker
                                            selected={dob}
                                            onChange={date => setDOB(date)}
                                            placeholderText="DOB"
                                            className='w-100 bg-transparent border-0 rounded-0 border-bottom'
                                            dateFormat="MM/dd/yyyy"
                                            size='lg'
                                            onBlur={() => handleBlur('dob')}
                                        />
                                        {touched.dob && errors.dob && <div className="text-danger">{errors.dob}</div>}
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
                                            onChange={(e) => setLane(e.target.value)}
                                            onBlur={() => handleBlur('laneno')}
                                             />
                                                {touched.laneno && errors.laneno && <div className="text-danger">{errors.laneno}</div>}
                                    </Form.Group>
                                    <Form.Group controlId="formCity" className='w-50 d-flex justify-content-end'>
                                        <Form.Control
                                            type="text"
                                            placeholder="City"
                                            size='lg'
                                            className=' w-92 bg-transparent border-0 rounded-0 border-bottom'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)} 
                                            onBlur={() => handleBlur('city')}
                                            />
                                                {touched.city && errors.city && <div className="text-danger">{errors.city}</div>}
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
                                            onChange={(e) => setDistrict(e.target.value)}
                                            onBlur={() => handleBlur('district')}
                                             />
                                                {touched.district && errors.district && <div className="text-danger">{errors.district}</div>}
                                    </Form.Group>
                                    <Form.Group controlId="formProvince" className='w-50 d-flex justify-content-end'>
                                        <Form.Control
                                            type="text"
                                            placeholder="Province"
                                            size='lg'
                                            className='w-92 bg-transparent border-0 rounded-0 border-bottom'
                                            value={province}
                                            onChange={(e) => setProvince(e.target.value)}
                                            onBlur={() => handleBlur('province')}
                                             />
                                                {touched.province && errors.province && <div className="text-danger">{errors.province}</div>}
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
                                        onChange={(e) => setUsername(e.target.value)}
                                        onBlur={() => handleBlur('username')}
                                         />
                                            {touched.username && errors.username && <div className="text-danger">{errors.username}</div>}
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Control
                                        type="password"
                                        className='mb-2 bg-transparent border-0 rounded-0 border-bottom'
                                        placeholder="Password"
                                        size='lg'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onBlur={() => handleBlur('password')}
                                         />
                                            {touched.password && errors.password && <div className="text-danger">{errors.password}</div>}

                                </Form.Group>
                                {/* Submit Button */}
                                <Button
                                    type="submit"
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