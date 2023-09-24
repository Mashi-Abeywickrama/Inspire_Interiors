import {React,useState,useEffect} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

import useAlert from '../../components/useAlert';
import { useSession } from '../../constants/SessionContext';
import { Alert, Snackbar } from '@mui/material';
import { Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/customer/setting.css';

import Profile from './../../assets/img/customer/profile.jpg';
import axios from 'axios';


const VendorSetting = () => {
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    const showAlert = (message, severity) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
        setAlertOpen(true);
    };


    const [selectedTab, setSelectedTab] = useState(
        localStorage.getItem('selectedTab') || 'account'
    );

    
    useEffect(() => {
        localStorage.setItem('selectedTab', selectedTab);
    }, [selectedTab]);


    const sessionItems = useSession();

    const apiBaseURL = "http://localhost:8080"

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    const [userData, setUserData] = useState({});
    console.log(userData.contact_no);
    if (userData.contact_no === undefined || userData.contact_no === '') {
        userData.contact_no = 'No Numbers Yet';

    }
    const [error, setError] = useState(null);

    const userId = sessionItems.sessionData.userid;
    const username = sessionItems.sessionData.username;

    useEffect(() => {
        // Define the data you want to send in the request body
        const requestData = {
            userId: userId,
        };
        console.log(requestData);

        axiosInstance.post('/profile', requestData)
            .then(response => {
                setUserData(response.data);
                console.log('Response from backend:', response.data);
            })
            .catch(error => {
                setError(error);
                console.error('Error from backend:', error);
            });
    }, []);

    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.id);
    };

    const handlePasswordUpdate = async (event) => {
        event.preventDefault();

        const currentPassword = event.target.currentPassword.value;
        const newPassword = event.target.newPassword.value;
        const confirmNewPassword = event.target.confirmNewPassword.value;


        if (newPassword !== confirmNewPassword) {
            showAlert('Passwords are not matching!', 'error');
        }
        else {

            try {
                const response = await axiosInstance.put('/update-password', {
                    userId: sessionItems.sessionData.userid,
                    currentPassword,
                    newPassword,

                });


                if (response.status === 200) {
                    console.log(response);
                    showAlert('Password updated successfully!', 'success');

                } else {
                    console.log(response);
                    showAlert('Provided password is wrong!', 'error');
                }
            } catch (error) {
                showAlert('Provided password is wrong!', 'error');
            }
        }

    };

    const [editingField, setEditingField] = useState(null);

    const handleDoubleClick = (field) => {
        setEditingField(field);
    };

    const handleFieldChange = (event, field) => {
        const { value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleUpdate = () => {
        setEditingField(null); // Disable editing mode

        // Prepare the updated data to send to the server
        const updatedData = {
            userId: sessionItems.sessionData.userid,
            // Include only the fields that you want to update
            username: userData.username,
            name: userData.name,
            email: userData.email,
            contact_no: userData.contact_no,
        };

        // Send the updated data to the server using Axios or your preferred HTTP library
        axiosInstance
            .put('/update-account', updatedData)
            .then((response) => {
                if (response.status === 200) {
                    showAlert('Profile updated successfully!', 'success');
                } else {
                    showAlert('Failed to update profile!', 'error');
                }
            })
            .catch((error) => {
                showAlert('Failed to update profile!', 'error');
            });
    };

    return (
        <>


            <div className="background-setting p-3 rounded-3 d-flex  ">

                <div className='d-flex flex-column flex-md-row flex-lg-row w-100 gap-4'>
                    <Tabs
                        defaultActiveKey="account"
                        id="uncontrolled-tab-example"
                        className="setting-tab mb-3 bg-white tab flex-column "
                        activeKey={selectedTab}
                        onSelect={(key) => setSelectedTab(key)}
                    >
                        <Tab eventKey="account" title={<div className='d-flex gap-2 p-1'>
                            <div className='icon-cover d-flex align-items-center '>
                                <Icon.Person size={24} />
                            </div>
                            <div className='d-flex flex-column m-0 align-items-start gap-0'>
                                <p className='m-0 text-left setting-nav-main'>Account</p>
                                <p className='m-0 text-left setting-nav-sub'>Personal Information</p>
                            </div>

                        </div>}>
                            <div className='account-setting-session d-flex flex-column '>
                                <p className='bold-cabin m-0 mb-2'>Personal Information</p>

                                <p className='sub-heading'>Avatar</p>
                                <div className='d-flex align-items-center gap-4 '>
                                    <img className='setting-profile-img' src={Profile} alt="" />
                                    <button className="change-profilepic Cabin-text">Change</button>
                                    <button className="remove-profilepic Cabin-text">Remove</button>

                                </div>
                                <div className="d-flex flex-column gap-0">
                                <p className='m-0 mt-2 text-danger'>*Double tap on input fields to edit the fields</p>
                                    <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-3 w-50">

                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">User name:</label>
                                            {editingField === 'username' ? (
                                            <input 
                                                type="text" 
                                                className="form-control w-100 Cabin-text disabled-setting-view" 
                                                id="exampleFormControlInput1" 
                                                value={userData.username}
                                                onChange={(e) => handleFieldChange(e, 'username')}
                                                onBlur={handleUpdate}
                                            />
                                            ) : (
                                                <div onDoubleClick={() => handleDoubleClick('username')}>
                                                    <input
                                                        type="text"
                                                        className="form-control w-100 Cabin-text disabled-setting-view"
                                                        value={userData.username}
                                                        disabled
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div class="mb-2 mt-3 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Full name:</label>
                                            {editingField === 'name' ? (
                                            <input 
                                                type="text" 
                                                className="form-control w-100 Cabin-text disabled-setting-view" 
                                                id="exampleFormControlInput1" 
                                                value={userData.name}
                                                onChange={(e) => handleFieldChange(e, 'name')}
                                                onBlur={handleUpdate}
                                            />
                                            ) : (
                                                <div onDoubleClick={() => handleDoubleClick('name')}>
                                                    <input
                                                        type="text"
                                                        className="form-control w-100 Cabin-text disabled-setting-view"
                                                        value={userData.name}
                                                        disabled
                                                    />
                                                </div>
                                            )}
                                        </div>

                                    </div>

                                    <div className='d-flex gap-4'>
                                        <div class="mb-3 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Email:</label>
                                            {editingField === 'email' ? (
                                            <input 
                                                type="text" 
                                                className="form-control w-100 Cabin-text disabled-setting-view" 
                                                id="exampleFormControlInput1" 
                                                value={userData.email}
                                                onChange={(e) => handleFieldChange(e, 'email')}
                                                onBlur={handleUpdate}
                                            />
                                            ) : (
                                                <div onDoubleClick={() => handleDoubleClick('email')}>
                                                    <input
                                                        type="text"
                                                        className="form-control w-100 Cabin-text disabled-setting-view"
                                                        value={userData.email}
                                                        disabled
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div class="mb-3 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Phone number:</label>
                                            {editingField === 'contact_no' ? (
                                            <input 
                                                type="text" 
                                                className="form-control w-100 Cabin-text disabled-setting-view" 
                                                id="exampleFormControlInput1" 
                                                value={userData.contact_no}
                                                onChange={(e) => handleFieldChange(e, 'contact_no')}
                                                onBlur={handleUpdate}
                                            />
                                            ) : (
                                                <div onDoubleClick={() => handleDoubleClick('contact_no')}>
                                                    <input
                                                        type="text"
                                                        className="form-control w-100 Cabin-text disabled-setting-view"
                                                        value={userData.contact_no}
                                                        disabled
                                                    />
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                    <p className='fs-6 fw-semibold Cabin-text mt-3'>Address</p>
                                    <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Lane No:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="No.13, Pussels Lane, Wellawatte" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>
                                        <div class="mb-2 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">City:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="Colombo" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>

                                    </div>
                                    <div className='d-flex gap-4'>
                                        <div class="mb-5 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">District:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="Colombo" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>
                                        <div class="mb-5 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Province:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="Western" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>

                                    </div>
                                    

                                </div>

                                <p className='bold-cabin m-0 mb-2'>Email notifications</p>
                                <div className='d-flex flex-column gap-0'>
                                    <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-2 w-50">
                                            <Form.Check
                                                type="checkbox"
                                                id="custom-checkbox"
                                                label={'New promotions'}
                                                // checked={isChecked}
                                                // onChange={onChange}
                                            />
                                        </div>
                                        <div class="mb-2 mt-2 w-50">
                                            <Form.Check
                                                type="checkbox"
                                                id="custom-checkbox"
                                                label={'Password changes'}
                                                // checked={isChecked}
                                                // onChange={onChange}
                                            />
                                        </div>
                                    </div>

                                     <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-2 w-50">
                                            <Form.Check
                                                type="checkbox"
                                                id="custom-checkbox"
                                                label={'Order statuses'}
                                                // checked={isChecked}
                                                // onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </Tab>
                        <Tab eventKey="Address" title={<div className='d-flex gap-2 p-1'>
                            <div className='icon-cover d-flex align-items-center '>
                                <Icon.Bank size={24} />
                            </div>
                            <div className='d-flex flex-column m-0 align-items-start gap-0'>
                                <p className='m-0 text-left setting-nav-main'>Bank</p>
                                <p className='m-0 text-left setting-nav-sub'>Bank Account Details</p>
                            </div>

                        </div>}>
                            <div className='account-setting-session d-flex flex-column '>
                                <p className='bold-cabin m-0 mb-2'>Bank Account Details</p>
                                <div>
                                <div className='d-flex gap-4 align-items-center justify-content-between '>
                                    <div className='d-flex justify-content-start gap-3 align-items-center'>
                                        <div class="mb-2 mt-2  address-radio-form">
                                            <Form.Check
                                                type="radio"
                                                id="option1"
                                                checked={selectedOption === 'option1'}
                                                onChange={handleRadioChange}
                                                label={'Peoples Bank PLC (7135)'}
                                                defaultChecked
                                                
                                            />
                                        </div>
                                        <p className="address-tag m-0 p-1 Cabin-text">PESRONAL</p>
                                    </div>
                                        
                                        <div d-flex >
                                            <button className="edit-address Cabin-text">Edit</button>
                                            
                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>
                                    

                                </div>
                                <div className='d-flex flex-column'>
                                <div className='d-flex flex-row'>
                                <p className='m-0 address-sub-para mb-2'>Branch: Wellawatte</p>
                                <p className='m-0 address-sub-para mb-2'>Branch Code: 124</p>
                                </div>
                                <div className='d-flex flex-row'>
                                <p className='m-0 address-sub-para mb-4'>Full Name: Anoka Perera</p>
                                <p className='m-0 address-sub-para mb-4'>Account No: 8743633474638</p>
                                </div>
                                </div>
                                </div>
                                <div>
                                <div className='d-flex gap-4 align-items-center justify-content-between '>
                                    <div className='d-flex justify-content-start gap-3 align-items-center'>
                                        <div class="mb-2 mt-2 address-radio-form">
                                            <Form.Check
                                                type="radio"
                                                id="option2"
                                                checked={selectedOption === 'option2'}
                                                onChange={handleRadioChange}
                                                label={'Bank of Ceylon'}
                                                defaultChecked
                                                
                                            />
                                        </div>
                                        <p className="address-tag m-0 p-1 Cabin-text">JOINT</p>
                                    </div>
                                        
                                        <div d-flex >
                                            <button className="edit-address Cabin-text">Edit</button>
                                            
                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>


                                </div>
                                <div className='d-flex flex-column'>
                                <div className='d-flex flex-row'>
                                <p className='m-0 address-sub-para mb-2'>Branch: Wellawatte</p>
                                <p className='m-0 address-sub-para mb-2'>Branch Code: 124</p>
                                </div>
                                <div className='d-flex flex-row'>
                                <p className='m-0 address-sub-para mb-4'>Full Name: Anoka Perera</p>
                                <p className='m-0 address-sub-para mb-4'>Account No: 8743633474638</p>
                                </div>
                                </div>
                                
                                
                                </div>

                                <hr />
                                <div className='d-flex gap-1'>
                                    <div className='d-flex' type='button' onClick={handleShow}>
                                        <Icon.Plus color={'#035C94'} size={22} />
                                        <p  className='blue-colour-para'>Add New Account</p>
                                    </div>

                                    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Add New Bank Account</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form>
                                                <div className='d-flex flex-column gap-3'>
                                                    <div className='d-flex gap-5 justify-content-between'>
                                                        <div class="mb-2 mt-2 w-50">
                                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Bank Name:</label>
                                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" placeholder="Enter Bank Name" />
                                                        </div>
                                                        <div class="mb-2 mt-2 w-50">
                                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Branch:</label>
                                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" placeholder="Enter Branch" />
                                                        </div>
                                                    </div>
                                                    <div className='d-flex gap-5 justify-content-between'>
                                                        <div class="mb-2 mt-2 w-50">
                                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Branch Code:</label>
                                                            <input type="number" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" placeholder="Enter Branch Code" />
                                                        </div>
                                                        <div class="mb-2 mt-2 w-50">
                                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Account No:</label>
                                                            <input type="number" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" placeholder="Enter Account No" />
                                                        </div>
                                                    </div>   
                                                </div>
                                            </form>
                                        </Modal.Body>
                                        <div className='d-flex flex-column flex-lg-row flex-md-row justify-content-between'>
                                            <button type='button' className="Cabin-text my-3 mx-5" onClick={handleClose} style={{color: "#FF5C60", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #FF5C60"}}>Cancel</button>
                                            <button type='submit' className="add-btn Cabin-text my-3 mx-5">Add Account</button>
                                        </div>
                                    </Modal>
                                </div>

                                
                                



                            </div>
                        </Tab>

                        
                        <Tab eventKey="security" title={<div className='d-flex gap-2 p-1'>
                            <div className='icon-cover d-flex align-items-center '>
                                <Icon.ShieldLock size={24} />
                            </div>
                            <div className='d-flex flex-column m-0 align-items-start gap-0'>
                                <p className='m-0 text-left setting-nav-main'>Security</p>
                                <p className='m-0 text-left setting-nav-sub'>Password</p>
                            </div>

                        </div>}>
                            <form onSubmit={handlePasswordUpdate}>
                            <div className='account-setting-session d-flex flex-column  '>
                                <p className='bold-cabin m-0 mb-2'>Change Password</p>
                                <div className='d-flex flex-column gap-3'>
                                    <div class="mb-2 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Current password:</label>
                                            <input 
                                                type="password" 
                                                className="form-control w-100 Cabin-text disabled-setting-view" 
                                                id="exampleFormControlInput1" 
                                                placeholder="Enter Password" 
                                                required
                                            />
                                    </div>
                                </div>

                                <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-3 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">New password:</label>
                                            <input 
                                                type="password" 
                                                className="form-control w-100 Cabin-text disabled-setting-view" 
                                                id="exampleFormControlInput1" 
                                                placeholder="Enter New Password" 
                                                required 
                                            />
                                        </div>
                                        <div class="mb-2 mt-3 w-50">
                                            <label htmlFor="confirmNewPassword" className="sub-heading form-label Cabin-text">Confirm new password:</label>
                                            <input
                                                type="password"
                                                className="form-control w-100 Cabin-text"
                                                id="confirmNewPassword"
                                                name="confirmNewPassword"
                                                placeholder="Confirm New Password"
                                                required
                                            />
                                        </div>

                                    </div>  

                                <div>
                                    <hr />
                                    <div className='d-flex gap-1 justify-content-between'>
                                        <button className="deactivate-btn-password Cabin-text">Deactivate Account</button>
                                        <div className='d-flex gap-2'>
                                            <button type='reset' className="discard-changes-btn Cabin-text">Discard Changes</button>
                                            <button type='submit' className="update-psw-btn Cabin-text">Update Password</button>
                                        </div>
                                    </div>
                                </div>

                                
                                



                            </div>
                        </form>

                        <Snackbar
                                open={alertOpen}
                                autoHideDuration={3000} // Adjust this duration as needed
                                onClose={handleAlertClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            >
                                <Alert onClose={handleAlertClose} severity={alertSeverity}>
                                    {alertMessage}
                                </Alert>
                            </Snackbar>
                        </Tab>

                    </Tabs>
                </div>
            </div>



        </>

    );
}


export default VendorSetting;
