import React, { useState, useEffect } from 'react';
import Img1 from './../../assets/img/admin/profile.png';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './../../styles/admin/profile.css';

import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Profile() {
  const {userid}=useParams()
  const apiBaseURL = `http://localhost:8080/getuser/${userid}`;
  
  useEffect(()=>{
    getUserbyId();
  },[])

  const [userData, setUserData] = useState({
    name: '',
    type: '',
    username: '',
    email: '',
    dob: '',
    contact_no: '',
  });

  const { name , type , username , email, dob, contact_no, address, status} = userData;

  const onInputChange = e =>{
    setUserData ({...userData,[e.target.name]:e.target.value})
  }

  const FormHandle = e =>{
    
    e.preventDefault();
    updateData(userData)      
}



const getUserbyId= async e =>{
  const userInfo = await axios.get(apiBaseURL);
   userInfo.data.dob = new Date(userInfo.data.dob).toLocaleDateString();
   
  setUserData(userInfo.data);       
}
const updateData=(data) =>{
  axios.put(apiBaseURL,data).then(
     (response)=>{
             alert("Updated Successfully");
      },(error)=>{
              alert("Update failed");
              console.log(userData);
      }
  );
}; 
  

  return (

    <div className="container-fluid">

      <form onSubmit={(e)=>FormHandle(e)} >
     
      <h2 className="fs-2">Profile</h2>

      <div className='d-flex flex-column gap-2'>

        <div className='d-flex flex-row gap-2'>
          <div className="bg-white rounded-4 shadow p-4 flex-fill col-md-12 col-lg-4">
            <h3 className="fs-3">Basic Information</h3>
            <div className="d-flex">
              <div className="col-md-2 col-lg-3 justify-content-center">
                <img className="img1" src={Img1} alt="Profile" />
              </div>
              <div className='col-md-4 p-4 justify-content-center'>
                 <div className="form-group">
                  <label className="fs-5">Username</label>
                  <input className="form-control" type="text" defaultValue={username} onChange={(e) =>onInputChange(e)} />
                </div>
                <div className="form-group">
  <label className="fs-5">Status</label>
  <div className="input-group">
    <input
      className="form-control"
      type="text"
      defaultValue={status}
      onChange={(e) => onInputChange(e)}
    />
    <div className="input-group-append">
    <button className="btn btn-custom  text-danger fw-bold" type="button"  onClick={() => handleDeactivate()}>  Deactivate</button>
    </div>
  </div>
</div>

              </div>
              <div className='col-md-4 p-4 justify-content-center'>
                 <div className="form-group">
                  <label className="fs-5">Usertype</label>
                  <input className="form-control" type="text" defaultValue={type} onChange={(e) =>onInputChange(e)} />
                </div>
                <div className='d-flex flex-column'>
                  <label className="fs-5">Reset Password</label>
                  <button className="btn-profile btn-primary">Reset Password</button>
                </div>
              </div>   
            </div>
          </div>
        

        {/* <div className="d-flex flex-row gap-2 col-md-12 col-lg-4">
          {/* <div className="bg-white rounded-4 shadow p-4 flex-fill">
            <h3 className="fs-3">Login Activity</h3>
            <div className="form-group">
              <label className="fs-5">First Login</label>
              <input className="form-control" type="text" placeholder/>
            </div>
            <div className="form-group">
              <label className="fs-5">Last Login</label>
              <input className="form-control" type="text" placeholder />
            </div>
          </div> 
        </div>  */}
        </div>

        <div className='rd-flex flex-column'>
        <div className="col-md-12 col-lg-12">
          <div className="bg-white rounded-4 shadow p-4">
            <h3 className="fs-3">Personal Information</h3>
            <div className="d-flex gap-3 p-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="fs-5">First name</label>
                  <input className="form-control" type="text"  defaultValue={name} onChange={(e) =>onInputChange(e)} />
                </div>
                <div className="form-group">
                  <label className="fs-5">Date of birth</label>
                  <input className="form-control" type="text" defaultValue={dob} onChange={(e) =>onInputChange(e)} />
                </div>
                <div className="form-group">
                  <label className="fs-5">Email address</label>
                  <input className="form-control" type="text" defaultValue={email} onChange={(e) =>onInputChange(e)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="fs-5">User ID</label>
                  <input className="form-control" type="text" Value={userid} onChange={(e) =>onInputChange(e)} />
                </div>
                <div className="form-group">
                  <label className="fs-5">Contact Number</label>
                  <input className="form-control" type="text" defaultValue={contact_no} onChange={(e) =>onInputChange(e)} />
                </div>
                <div className="form-group">
                  <label className="fs-5">Shipping Address</label>
                  <input className="form-control" type="text"defaultValue={address} onChange={(e) =>onInputChange(e)} />
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
 
    {/* <div className='d-flex gap-2'>
    <div className="d-flex flex-row gap-2 col-md-12 col-lg-6">
          <div className="bg-white rounded-4 shadow p-4 flex-fill">
            <h3 className="fs-3">User Engagement</h3>
            <div className="form-group">
              <label className="fs-5">Last Purchase</label>
              <input className="form-control" type="text" placeholder />
            </div>
            <div className="form-group">
              <label className="fs-5">Last Delivery Confirmation</label>
              <input className="form-control" type="text" placeholder />
            </div>
          </div>
        </div>
         
        

        <div className="d-flex flex-row gap-2 col-md-12 col-lg-6">
          <div className="bg-white rounded-4 shadow p-4 flex-fill">
            <h3 className="fs-3">Review and Feedback</h3>
            <div className="form-group">
              <label className="fs-5">First Login</label>
              <input className="form-control" type="text" placeholder />
            </div>
            <div className="form-group">
              <label className="fs-5">Last Login</label>
              <input className="form-control" type="text" placeholder />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row gap-2 col-md-12 col-lg-4">
          <div className="bg-white rounded-4 shadow p-4 flex-fill">
            <h3 className="fs-3">Login Activity</h3>
            <div className="form-group">
              <label className="fs-5">First Login</label>
              <input className="form-control" type="text" placeholder="Jane" />
            </div>
            <div className="form-group">
              <label className="fs-5">Last Login</label>
              <input className="form-control" type="text" placeholder="Jane" />
            </div>
          </div>
        </div>
        </div>  */}
       <div> <Modal.Footer className='gap-2'>
              <button><Link variant='secondary' to={'/admin/user'}>
                Close
              </Link></button>
              <Button type='submit' variant='primary'>
                Save User 
              </Button>
            </Modal.Footer></div>

    </div></form>
    </div>
  );
}
