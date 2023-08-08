import {React,useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';




import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/customer/setting.css';

import Profile from './../../assets/img/customer/profile.jpg';



const CusSetting = () => {
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
                                        <div class="mb-2 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Email:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="jane.robertson@example.com" style={{ backgroundColor: "#F2FAFF" }} disabled />
                                        </div>
                                        <div class="mb-5 mt-2 w-50">
                                            <label for="exampleFormControlInput1" className="sub-heading form-label Cabin-text ">Phone number:</label>
                                            <input type="text" className="form-control w-100 Cabin-text disabled-setting-view" id="exampleFormControlInput1" value="(217) 555-0113" style={{ backgroundColor: "#F2FAFF" }} disabled />
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
                                <div className='d-flex gap-1'>
                                    <Icon.Plus color={'#035C94'} size={22}/>
                                    <p className='blue-colour-para'>Add New Address</p>
                                </div>

                                
                                



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
                                <div className='d-flex gap-1'>
                                    <Icon.Plus color={'#035C94'} size={22}/>
                                    <p className='blue-colour-para'>Add New Card</p>
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


export default CusSetting;
