// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Button, InputGroup, Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBDataTableV5, MDBTable } from 'mdbreact';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../styles/customer/myOrders.css';
import './../../styles/admin/table.css';
import './../../styles/admin/user.css'
import { Link } from 'react-router-dom';




const User = () => {

  
  const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  const fetchUserData = async () => {
    try {
      const response = await axios.get(apiBaseURL + '/getuser');
      const userData = response.data;
      setUserData(userData); // Update the state with fetched user data
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);

  

  const data = {
    columns: [
      {
        label: 'USERID',
        field: 'userid',
        sort: 'asc',
        width: 150
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 270
      },
      {
        label: 'EMAIL',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'USERNAME',
        field: 'username',
        sort: 'asc',
        width: 50
      },
      {
        label: 'TYPE',
        field: 'type',
        sort: 'asc',
        width: 50
      },
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],

    rows: userData.map((user) => ({
      userid: user.userid,
      dob: user.dob,
      email: user.email,
      username: user.username,
      type: user.type,
      
      // other fields...
    })),
  };
   
  

  return (
    <>  
    {/* <div className="d-flex  flex-column gap-3 full">
      <Navigationbar />
      <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
          <SidebarDashboard /> */}

        <div className="background-total p-3 rounded-3">
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row align-items-center gap-2'>
            <div className="fs-5">User</div> 
            <div className='text-secondary '> <Icon.ChevronRight size={20} /> </div>
            <div className="text-secondary fs-5"> All</div>
            </div>
           <button class='px-2 py-1 fs-6 ' style={{backgroundColor:"#023047"}}>+ Add New</button>
          </div>

          <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={data}
                  sortable={true}
                  exportToCSV={true}
                  
                />
        </div>


      {/* </div> */}
   {/* </div> */}
  </>
    
  );


};
export default User;
