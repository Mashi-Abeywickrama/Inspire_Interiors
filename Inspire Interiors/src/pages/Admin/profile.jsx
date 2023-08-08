import React from 'react';
import Img1 from './../../assets/img/admin/profile.png';
import './../../styles/admin/profile.css';

export default function Profile() {
  return (
    <div className="container-fluid">
      <h2 className="fs-2">Profile</h2>

      <div className='d-flex flex-column gap-2'>

        <div className='d-flex flex-row gap-2'>
          <div className="bg-white rounded-4 shadow p-4 flex-fill col-md-12 col-lg-4">
            <h3 className="fs-3">Basic Information</h3>
            <div className="d-flex">
              <div className="col-md-2 justify-content-center">
                <img className="img1" src={Img1} alt="Profile" />
              </div>
              <div className='col-md-4 p-4 justify-content-center'>
                 <div className="form-group">
                  <label className="fs-5">Username</label>
                  <input className="form-control" type="text" placeholder="#Jane001" />
                </div>
                <div className="form-group">
                  <label className="fs-5">Status</label>
                  <input className="form-control" type="text" placeholder="Active" />
                </div>
              </div>
              <div className='col-md-4 p-4 justify-content-center'>
                 <div className="form-group">
                  <label className="fs-5">Usertype</label>
                  <input className="form-control" type="text" placeholder="customer" />
                </div>
                <div className='d-flex flex-column'>
                  <label className="fs-5">Reset Password</label>
                  <button className="btn btn-primary">Reset Password</button>
                </div>
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
        </div>

        <div className='rd-flex flex-column'>
        <div className="col-md-12 col-lg-12">
          <div className="bg-white rounded-4 shadow p-4">
            <h3 className="fs-3">Personal Information</h3>
            <div className="d-flex gap-3 p-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="fs-5">First name</label>
                  <input className="form-control" type="text" placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label className="fs-5">Date of birth</label>
                  <input className="form-control" type="text" placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label className="fs-5">Email address</label>
                  <input className="form-control" type="text" placeholder="Jane" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="fs-5">Last name</label>
                  <input className="form-control" type="text" placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label className="fs-5">Contact Number</label>
                  <input className="form-control" type="text" placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label className="fs-5">Shipping Address</label>
                  <input className="form-control" type="text" placeholder="Jane" />
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>

    <div className='d-flex gap-2'>
    <div className="d-flex flex-row gap-2 col-md-12 col-lg-4">
          <div className="bg-white rounded-4 shadow p-4 flex-fill">
            <h3 className="fs-3">User Engagement</h3>
            <div className="form-group">
              <label className="fs-5">Last Purchase</label>
              <input className="form-control" type="text" placeholder="Jane" />
            </div>
            <div className="form-group">
              <label className="fs-5">Last Delivery Confirmation</label>
              <input className="form-control" type="text" placeholder="Jane" />
            </div>
          </div>
        </div>
         
        

        <div className="d-flex flex-row gap-2 col-md-12 col-lg-4">
          <div className="bg-white rounded-4 shadow p-4 flex-fill">
            <h3 className="fs-3">Review and Feedback</h3>
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
        </div>


    </div>
    </div>
  );
}
