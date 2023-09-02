import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

import AddNewAddressButton from "../../components/customer/popup/AddNewAddressButton";


import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/customer/setting.css';

import Profile from './../../assets/img/customer/profile.jpg';
import useAlert from '../../components/useAlert';
import { useSession } from '../../constants/SessionContext';
import { Alert, Snackbar } from '@mui/material';




const CusSetting = () => {

    const [isUsernameEditable, setIsUsernameEditable] = useState(false);
    const [isFullNameEditable, setIsFullNameEditable] = useState(false);
    const [isEmailEditable, setIsEmailEditable] = useState(false);
    const [isPhoneNumberEditable, setIsPhoneNumberEditable] = useState(false);

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

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

    const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

    const axiosInstance = axios.create({
      baseURL: apiBaseURL,
      timeout: 5000, // You can adjust the timeout value as needed
      // You can also set other default config options if required
      // For example, you might want to set headers for authorization or other request-specific headers
    });

    const [userData, setUserData] = useState({});
    console.log(userData.contact_no);
    if (userData.contact_no === undefined || userData.contact_no === '') {
        userData.contact_no = 'No Numbers Yet';
        
    }
    const [error, setError] = useState(null);

    const userId = sessionItems.sessionData.userid;
    

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

    const { setAlert } = useAlert();
  const handlePasswordUpdate = async (event) => {
    event.preventDefault();

    const currentPassword = event.target.currentPassword.value;
    const newPassword = event.target.newPassword.value;
    const confirmNewPassword = event.target.confirmNewPassword.value;
    

    if (newPassword !== confirmNewPassword) {
         showAlert('Passwords are not matching!', 'error');
    }
    else{

    try {
        const response = await axiosInstance.put('/update-password', {
            userId : sessionItems.sessionData.userid,
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
            showAlert('Provided password is wrong   !', 'error');
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
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Username:</label>
                                             {editingField === 'username' ? (
                                            <input
                                                type="text"
                                                className="form-control w-100 Cabin-text disabled-setting-view"
                                                value={userData.username}
                                                onChange={(e) => handleFieldChange(e, 'username')}
                                                onBlur={handleUpdate}
                                            />
                                            ) : (
                                            <div   onDoubleClick={() => handleDoubleClick('username')}>
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
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Full Name:</label>
                                            {editingField === 'name' ? (
                                                <input
                                                    type="text"
                                                    className="form-control w-100 Cabin-text"
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
                                    <div className="mb-2 mt-2 w-50">
                                        <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Email:</label>
                                        {editingField === 'email' ? (
                                            <input
                                                type="text"
                                                className="form-control w-100 Cabin-text"
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
                                    <div className="mb-5 mt-2 w-50">
                                         <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Phone number:</label>
                                        {editingField === 'contact_no' ? (
                                            <input
                                                type="text"
                                                className="form-control w-100 Cabin-text"
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


                                </div>

                                <p className='bold-cabin m-0 mb-2'>Email notifications</p>
                                <div className='d-flex flex-column gap-0'>
                                    <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-2 w-50">
                                            <Form.Check
                                                type="checkbox"
                                                id="custom-checkbox"
                                                label={'New deals'}
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
                                        <div class="mb-2 mt-2 w-50">
                                            <Form.Check
                                                type="checkbox"
                                                id="custom-checkbox"
                                                label={'Special offers'}
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
                                <Icon.Map size={24} />
                            </div>
                            <div className='d-flex flex-column m-0 align-items-start gap-0'>
                                <p className='m-0 text-left setting-nav-main'>Address</p>
                                <p className='m-0 text-left setting-nav-sub'>Shipping addresses</p>
                            </div>

                        </div>}>
                            <div className='account-setting-session d-flex flex-column '>
                                <p className='bold-cabin m-0 mb-2'>Shipping Addresses</p>
                                <div>
                                <div className='d-flex gap-4 align-items-center justify-content-between '>
                                    <div className='d-flex justify-content-start gap-3 align-items-center'>
                                        <div class="mb-2 mt-2  address-radio-form">
                                            <Form.Check
                                                type="radio"
                                                id="option1"
                                                checked={selectedOption === 'option1'}
                                                onChange={handleRadioChange}
                                                label={'Huzefa Bagwala'}
                                                defaultChecked
                                                
                                            />
                                        </div>
                                        <p className="address-tag m-0 p-1 Cabin-text">HOME</p>
                                    </div>
                                        
                                        <div d-flex >
                                            <button className="edit-address Cabin-text">Edit</button>
                                            
                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>


                                </div>
                                <p className='m-0 address-sub-para'>1131 Dusty Townline, Jacksonville, TX 40322</p>
                                <p className='m-0 address-sub-para mb-4'>Contact - (936) 361-0310</p>
                                </div>
                                <div>
                                <div className='d-flex gap-4 align-items-center justify-content-between '>
                                    <div className='d-flex justify-content-start gap-3 align-items-center'>
                                        <div class="mb-2 mt-2  address-radio-form">
                                            <Form.Check
                                                type="radio"
                                                id="option2"
                                                checked={selectedOption === 'option2'}
                                                onChange={handleRadioChange}
                                                label={'IndiaTech'}
                                                defaultChecked
                                                
                                            />
                                        </div>
                                        <p className="address-tag m-0 p-1 Cabin-text">OFFICE</p>
                                    </div>
                                        
                                        <div d-flex >
                                            <button className="edit-address Cabin-text">Edit</button>
                                            
                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>


                                </div>
                                <p className='m-0 address-sub-para'>1219 Harvest Path, Jacksonville, TX 40326</p>
                                <p className='m-0 address-sub-para mb-4'>Contact - (936) 361-0310</p>
                                </div>

                                <hr />
                                
                                <AddNewAddressButton />

                                
                                



                            </div>
                        </Tab>

                        <Tab eventKey="payment" title={<div className='d-flex gap-2 p-1'>
                            <div className='icon-cover d-flex align-items-center '>
                                <Icon.CardText size={24} />
                            </div>
                            <div className='d-flex flex-column m-0 align-items-start gap-0'>
                                <p className='m-0 text-left setting-nav-main'>Payment Method</p>
                                <p className='m-0 text-left setting-nav-sub'>Connected credit cards</p>
                            </div>

                        </div>}>
                           <div className='account-setting-session d-flex flex-column '>
                                <p className='bold-cabin m-0 mb-2'>Connected Cards</p>
                                <div className='d-flex align-items-center gap-3 justify-content-between px-4 card-container-div'>
                                    <div className='d-flex align-items-center gap-4'>
                                    <div class="mb-2 mt-2  address-radio-form">
                                            <Form.Check
                                                type="radio"
                                                id="option2"
                                                checked={selectedOption === 'option2'}
                                                onChange={handleRadioChange}
                                                
                                                defaultChecked
                                                
                                            />
                                        </div>
                                        <i class="fab fa-cc-visa"></i>
                                        <p className='m-0'>•••• 6754</p>
                                        <p className='m-0 grey-colour-para'>Expires 06/2021</p>
                                        </div>
                                        <div d-flex >
                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>
                                    
                                </div>

                                <div className='d-flex align-items-center gap-3 justify-content-between px-4 card-container-div'>
                                    <div className='d-flex align-items-center gap-4'>
                                    <div class="mb-2 mt-2  address-radio-form">
                                            <Form.Check
                                                type="radio"
                                                id="option2"
                                                checked={selectedOption === 'option2'}
                                                onChange={handleRadioChange}
                                                
                                                defaultChecked
                                                
                                            />
                                        </div>
                                        <i class="fa-brands fa-cc-mastercard"></i>
                                        <p className='m-0'>•••• 5643</p>
                                        <p className='m-0 grey-colour-para'>Expires 11/2025</p>
                                        </div>
                                        <div d-flex >
                                            <button className="remove-address Cabin-text">Remove</button>
                                        </div>
                                    
                                </div>
                                
                              


                                <hr />
                                <AddNewAddressButton/>


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
                                            <label htmlFor="currentPassword" className="sub-heading form-label Cabin-text">Current password:</label>
                                            <input
                                                type="password"
                                                className="form-control w-100 Cabin-text"
                                                id="currentPassword"
                                                name="currentPassword"
                                                placeholder="Enter Current Password"
                                                required
                                            />
                                    </div>
                                </div>

                                <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-3 w-50">
                                             <label htmlFor="newPassword" className="sub-heading form-label Cabin-text">New password:</label>
                                            <input
                                                type="password"
                                                className="form-control w-100 Cabin-text"
                                                id="newPassword"
                                                name="newPassword"
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


export default CusSetting;
