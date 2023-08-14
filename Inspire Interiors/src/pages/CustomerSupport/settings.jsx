import {React,useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';




import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../styles/customer/setting.css';
import './../../styles/admin/setting.css'

import Profile from './../../assets/img/customer/profile.jpg';



const SupportSettings = () => {
    const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };
    return (
        <>


            <div className="background-setting p-3 rounded-3 d-flex  ">

                <div className='d-flex flex-column flex-md-row flex-lg-row w-100 gap-4'>
                    <Tabs
                        defaultActiveKey="account"
                        id="uncontrolled-tab-example"
                        className="setting-tab mb-3 bg-white tab flex-column "
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
                                <div className='d-flex flex-column gap-5'>
                                     <div>
                                   <div className="d-flex flex-column gap-0">
                                    <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-3 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">First name:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="Little" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>
                                        <div class="mb-2 mt-3 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Last name:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="Robertson" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>

                                    </div>

                                    <div className='d-flex gap-4'>
                                        <div class="mb-3 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Email:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="jane.robertson@example.com" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>
                                        <div class="mb-3 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Phone number:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="(217) 555-0113" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>

                                    </div> 
                                </div>
                                
                                    {/* <p className='fs-6 fw-semibold Cabin-text mt-3'>Address</p>
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

                                    </div>*/}
                                    

                                </div>
                              
                                <div>
                                    <hr />
                                    <div className='d-flex gap-1 justify-content-between'>
                                        <button className="deactivate-btn-password Cabin-text">Deactivate Account</button>
                                        <div className='d-flex gap-2'>
                                           
                                            <button className="update-psw-btn Cabin-text">Update Profile</button>
                                        </div>
                                    </div>
                                </div>
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
                            <div className='account-setting-session d-flex flex-column  '>
                                <p className='bold-cabin m-0 mb-2'>Change Password</p>
                                <div className='d-flex flex-column gap-3'>
                                    <div class="mb-2 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Current password:</label>
                                            <input type="password" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" placeholder="Enter Password" style={{ backgroundColor: "#F2FAFF" }}  />
                                    </div>
                                </div>

                                <div className='d-flex gap-4'>
                                        <div class="mb-2 mt-3 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">New password:</label>
                                            <input type="password" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" placeholder="Enter New Password" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>
                                        <div class="mb-2 mt-3 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">New password:</label>
                                            <input type="password" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" placeholder="Again Enter New Password" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>

                                    </div>  

                                <div>
                                    <hr />
                                    <div className='d-flex gap-1 justify-content-between'>
                                        <button className="deactivate-btn-password Cabin-text">Deactivate Account</button>
                                        <div className='d-flex gap-2'>
                                            <button className="discard-changes-btn Cabin-text">Discard Changes</button>
                                            <button className="update-psw-btn Cabin-text">Update Password</button>
                                        </div>
                                    </div>
                                </div>

                                
                                



                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </div>



        </>

    );
}


export default SupportSettings;
