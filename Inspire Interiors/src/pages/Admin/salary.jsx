// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Button, InputGroup, Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBDataTableV5, MDBTable } from 'mdbreact';

import axios from 'axios';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../styles/customer/myOrders.css';
import './../../styles/admin/table.css';
import './../../styles/admin/user.css'


const Salary = () => {

  const apiBaseURL = 'http://localhost:8080';

  const [salaryData, setSalaryData]=useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout:5000,
  });

  const fetchSalaryData = async (type)=>{
    try{
    const response = await axios.get(apiBaseURL + '/getsalary');
    const salaryData = response.data;
    setSalaryData(salaryData);
    setLoading(false);
    }
   catch (error) {
    console.error(`Error fetching salary data: ${type}`, error);
  }
  }
  useEffect(() => {
    fetchSalaryData('all');
  }, []);

  const handleTabSelect = (type) => {
    fetchSalaryData(type); // Fetch orders based on the selected tab status
  };

  const filteredData = (type) =>
  salaryData.filter((item) => item.type === type);
  
  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get(apiBaseURL + '/getuser');
        const userData = response.data;
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const getUserNameByUserId = (userId) => {
    const user = users.find((user) => user.userid === userId);
    return user ? user.name : 'N/A';
  };


  const data = {
    columns: [
      {
        label: 'USERNAME',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TOTALSALES',
        field: 'total_sale',
        sort: 'asc',
        width: 270
      },
      {
        label: 'COMMISSION',
        field: 'commission',
        sort: 'asc',
        width: 200
      },
      {
        label: 'EARNING',
        field: 'earning',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: 'DATE',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],
    rows:salaryData.map((salary) => ({
      name: getUserNameByUserId(salary.userid),
     total_sale:salary.total_sale,
     commission:salary.commission,
     earning:salary.earnings,
      status: salary.status,
      date:salary.year+'-'+salary.month,
        action:<Link to={`/admin/salary/invoice/${salary.salary_id}`}><div className="d-flex gap-2 align-items-center text-dark">
        <p className="m-0 ">send invoice</p> <Icon.ArrowRight />
      </div></Link>
      
      
      // other fields...
    })),
  };

  const data1 = {
    columns: [
      {
        label: 'USERNAME',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TOTALSALES',
        field: 'total_sale',
        sort: 'asc',
        width: 270
      },
      {
        label: 'COMMISSION',
        field: 'commission',
        sort: 'asc',
        width: 200
      },
      {
        label: 'EARNING',
        field: 'earning',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: 'DATE',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],
    rows:filteredData('designer').map((salary) => ({
     name:salary.userid,
     total_sale:salary.total_sale,
     commission:salary.commission,
     earning:salary.earnings,
      status: salary.status,
      date:salary.year+'-'+salary.month,
        action:"send invoice->" ,
      //      <Link to="/admin/orders/invoice"><div className="d-flex gap-2 align-items-center text-dark">
      //        <p className="m-0 ">send invoice</p> <Icon.ArrowRight />
      //      </div></Link>
      
      
      // other fields...
    })),
  };

  const data2 = {
    columns: [
      {
        label: 'USERNAME',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TOTALSALES',
        field: 'total_sale',
        sort: 'asc',
        width: 270
      },
      {
        label: 'COMMISSION',
        field: 'commission',
        sort: 'asc',
        width: 200
      },
      {
        label: 'EARNING',
        field: 'earning',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: 'DATE',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],
    rows:filteredData('vendor').map((salary) => ({
     name:salary.userid,
     total_sale:salary.total_sale,
     commission:salary.commission,
     earning:salary.earnings,
      status: salary.status,
      date:salary.year+'-'+salary.month,
        action:"send invoice->" ,
      //      <Link to="/admin/orders/invoice"><div className="d-flex gap-2 align-items-center text-dark">
      //        <p className="m-0 ">send invoice</p> <Icon.ArrowRight />
      //      </div></Link>
      
      
      // other fields...
    })),
  };

  return (
    <>  
    {/* <div className="d-flex  flex-column gap-3 full">
      <Navigationbar />
      <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
          <SidebarDashboard /> */}

        <div className="background-total p-3 rounded-3 ">
          <div className='d-flex flex-row align-items-center justify-content-between'>
            <div className='d-flex gap-2 align-items-center'>
          <div className="fs-5">Earnings</div> 
          {/* <div className='text-secondary '> <Icon.ChevronRight size={18} /> </div>
          <div className="text-secondary fs-5">Salary</div> */}
          </div>
           {/* <button class='py-1 px-2 fs-6' style={{backgroundColor:"#023047"}}>+ Add New</button> */}
          
          </div>

          

          <div>
            <Tabs
              defaultActiveKey="all"
              id="uncontrolled-tab-example"
              className="mb-3 bg-white tab"
              onSelect={handleTabSelect}
            >
              <Tab eventKey="all" title="All">
                <div className=''>
             
                  <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={data}
                  sortable={true}
                  exportToCSV={true}
                  
                />
                </div>
              </Tab>
            
              <Tab eventKey="Designer" title="Designer">
              <div className=''>
             
                  <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={data1}
                  sortable={true}
                  exportToCSV={true}
                  
                />
                </div>
              </Tab>
              <Tab eventKey="Vendor" title="Vendor">
              <div className="">
             
             <MDBDataTableV5 responsive
             striped
             bordered
             small
             data={data2}
             sortable={true}
             exportToCSV={true}
             
           />
           </div>
              </Tab>
            </Tabs>
          </div>
        </div>


      {/* </div> */}
   {/* </div> */}
  </>
    
  );
}


export default Salary;
