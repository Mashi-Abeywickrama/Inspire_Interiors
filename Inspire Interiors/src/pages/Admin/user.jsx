// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Button, InputGroup, Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBDataTableV5, MDBTable } from 'mdbreact';

import Adduser from './../../components/admin/adduserpopup.jsx';
import Profile from './profile.jsx';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../styles/customer/myOrders.css';
import './../../styles/admin/table.css';
import './../../styles/admin/user.css'
import { Link } from 'react-router-dom';




const User = () => {

  
  const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

  const [userData, setUserData] = useState([]);
  const [userType, setUserType] = useState(null);
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
    fetchUserData('all');
  }, []);

  const handleTabSelect = (type) => {
    fetchUserData(type); // Fetch orders based on the selected tab status
  };

  const filteredData = (type) =>
  userData.filter((item) => item.type === type);


  const data = {
    columns: [
      {
        label: 'USERNAME',
        field: 'username',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TYPE',
        field: 'type',
        sort: 'asc',
        width: 50
      },
      {
        label: 'EMAIL',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 270
      },
      {
        label: 'CONTACT_NO',
        field: 'contact_no',
        sort: 'asc',
        width: 270
      },
      
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],

    rows: userData.map((user) => ({
      username: user.username,
      type: user.type,
      email: user.email,
      dob: new Date(user.dob).toLocaleDateString(),
      contact_no: user.contact_no,
      action: 
          <Link to={`/admin/user/profile/${user.userid}`} className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 ">View More</p> <Icon.ArrowRight />
         </Link>
      
      
      // other fields...
    })),
  };
  const data1 = {
    columns: [
      {
        label: 'USERNAME',
        field: 'username',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TYPE',
        field: 'type',
        sort: 'asc',
        width: 50
      },
      {
        label: 'EMAIL',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 270
      },
      {
        label: 'CONTACT_NO',
        field: 'contact_no',
        sort: 'asc',
        width: 270
      },
      
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],

    rows: filteredData('designer').map((user) => ({
      username: user.username,
      type: user.type,
      email: user.email,
      dob: new Date(user.dob).toLocaleDateString(),
      contact_no: user.contact_no,
      action: 
          <Link to={`/admin/user/profile/${user.userid}`} className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 ">View More</p> <Icon.ArrowRight />
         </Link>
      
      
      // other fields...
    })),
  };
  const data2 = {
    columns: [
      {
        label: 'USERNAME',
        field: 'username',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TYPE',
        field: 'type',
        sort: 'asc',
        width: 50
      },
      {
        label: 'EMAIL',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 270
      },
      {
        label: 'CONTACT_NO',
        field: 'contact_no',
        sort: 'asc',
        width: 270
      },
      
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],

    rows: filteredData('vendor').map((user) => ({
      username: user.username,
      type: user.type,
      email: user.email,
      dob: new Date(user.dob).toLocaleDateString(),
      contact_no: user.contact_no,
      action: 
          <Link to={`/admin/user/profile/${user.userid}`} className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 ">View More</p> <Icon.ArrowRight />
         </Link>
      
      
      // other fields...
    })),
  };
  const data3 = {
    columns: [
      {
        label: 'USERNAME',
        field: 'username',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TYPE',
        field: 'type',
        sort: 'asc',
        width: 50
      },
      {
        label: 'EMAIL',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 270
      },
      {
        label: 'CONTACT_NO',
        field: 'contact_no',
        sort: 'asc',
        width: 270
      },
      
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],

    rows: filteredData('customer').map((user) => ({
      username: user.username,
      type: user.type,
      email: user.email,
      dob: new Date(user.dob).toLocaleDateString(),
      contact_no: user.contact_no,
      action: 
          <Link to={`/admin/user/profile/${user.userid}`} className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 ">View More</p> <Icon.ArrowRight />
         </Link>
      
      
      // other fields...
    })),
  };
  const data4 = {
    columns: [
      {
        label: 'USERNAME',
        field: 'username',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TYPE',
        field: 'type',
        sort: 'asc',
        width: 50
      },
      {
        label: 'EMAIL',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 270
      },
      {
        label: 'CONTACT_NO',
        field: 'contact_no',
        sort: 'asc',
        width: 270
      },
      
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],

    rows: filteredData('admin').map((user) => ({
      username: user.username,
      type: user.type,
      email: user.email,
      dob: new Date(user.dob).toLocaleDateString(),
      contact_no: user.contact_no,
      action: 
          <Link to={`/admin/user/profile/${user.userid}`} className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 ">View More</p> <Icon.ArrowRight />
         </Link>
      
      
      // other fields...
    })),
  };
  const data5 = {
    columns: [
      {
        label: 'USERNAME',
        field: 'username',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TYPE',
        field: 'type',
        sort: 'asc',
        width: 50
      },
      {
        label: 'EMAIL',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 270
      },
      {
        label: 'CONTACT_NO',
        field: 'contact_no',
        sort: 'asc',
        width: 270
      },
      
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],

    rows: filteredData('CustomerSupport').map((user) => ({
      username: user.username,
      type: user.type,
      email: user.email,
      dob: new Date(user.dob).toLocaleDateString(),
      contact_no: user.contact_no,
      action: 
          <Link to={`/admin/user/profile/${user.userid}`} className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 ">View More</p> <Icon.ArrowRight />
         </Link>
      
      
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
           {/* <button class='px-2 py-1 fs-6 ' style={{backgroundColor:"#023047"}}>+ Add New</button> */}
           <Adduser/>
          </div>
          <div>
                  <Tabs
                    defaultActiveKey="all"
                    id="uncontrolled-tab-example"
                    className="mb-3 bg-white tab"
                    onSelect={handleTabSelect}
                  >
                    <Tab eventKey="all" title="All">
                      <div className="">
                        <MDBDataTableV5
                          responsive
                          striped
                          bordered
                          small
                          data={data}
                          sortable={true}
                          exportToCSV={true}
                        />
                      </div>
                    </Tab>
                    <Tab eventKey="designer" title="Designers"  >
                    <div className="">
                        <MDBDataTableV5
                          responsive
                          striped
                          bordered
                          small
                          data={data1}
                          sortable={true}
                          exportToCSV={true}
                        />
                      </div>
                    </Tab>
                    <Tab eventKey="vendor" title="Vendors">
                    <div className="">
                        <MDBDataTableV5
                          responsive
                          striped
                          bordered
                          small
                          data={data2}
                          sortable={true}
                          exportToCSV={true}
                        />
                      </div>
                    </Tab>
                    <Tab eventKey="customer" title="Customer">
                    <div className="">
                        <MDBDataTableV5
                          responsive
                          striped
                          bordered
                          small
                          data={data3}
                          sortable={true}
                          exportToCSV={true}
                        />
                      </div>
                    </Tab>
                    <Tab eventKey="admin" title="Admin">
                    <div className="">
                        <MDBDataTableV5
                          responsive
                          striped
                          bordered
                          small
                          data={data4}
                          sortable={true}
                          exportToCSV={true}
                        />
                      </div>
                    </Tab>
                    <Tab eventKey="customerSupport" title="CustomerSupport">
                    <div className="">
                        <MDBDataTableV5
                          responsive
                          striped
                          bordered
                          small
                          data={data5}
                          sortable={true}
                          exportToCSV={true}
                        />
                      </div>
                    </Tab>
                  </Tabs>
                </div>

          {/* <MDBDataTableV5
                 responsive
                  striped
                  bordered
                  small
                  data={data}
                  sortable={true}
                  exportToCSV={true}
                /> */}
        </div>


      {/* </div> */}
   {/* </div> */}
  </>
    
  );


};
export default User;
