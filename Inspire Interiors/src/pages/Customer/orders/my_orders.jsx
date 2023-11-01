import React from 'react';
import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { HiFilter } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MDBDataTableV5, MDBTable } from 'mdbreact';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../styles/customer/myOrders.css';
import './../../../styles/customer/table.css';
import axios from 'axios';
import { useSession } from '../../../constants/SessionContext';

const MyOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [userDate, setUserDate] = useState([]);
  const [selectedTab, setSelectedTab] = useState('All');
  const [loading, setLoading] = useState(true);


  const sessionItems = useSession();
  const userId = sessionItems.sessionData.userid;


  const apiURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiURL,
    timeout: 5000,
  });

  useEffect(() => {
    axiosInstance
      .get(`/getorder/customer/${userId}`)
      .then((response) => {

        setOrderData(response.data);
        setLoading(false);

        console.log("or",response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);

        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/viewproducts`)
      .then((response) => {

        setProductData(response.data);
        setLoading(false);

        console.log("pd",response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);

        setLoading(false);
      });
  }, []);


  useEffect(() => {
    axiosInstance
      .get(`/users`)
      .then((response) => {

        setUserDate(response.data);
        setLoading(false);

        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);

        setLoading(false);
      });
  }, []);

  const mergedOrderUser = (orderData, userDate ,productData) => {
    const mergedOutput = orderData.map(
      (orderItem) => {
      const matchingUser = userDate.find(
        (userItem) =>  userItem.userid == orderItem.vendor
        
      );
      const matchingProduct = productData.find(
        (productItem) => productItem.product_id == orderItem.product
      );

  
      if (matchingUser && matchingProduct) {
        // Merge the data from both sources
        return {
          
          ...matchingUser,
          ...orderItem,
          ...matchingProduct,
         
        };
      } else {
        return orderItem;
      }
    });
  
    return mergedOutput;
  };

  const mergedUserVendor = mergedOrderUser(orderData, userDate,productData);
  console.log("mergeData_fair", mergedUserVendor);


  

  const getOrderStatus = (status) => {
    const statusDetails = {
      New: {
        className: 'new d-flex gap-2 align-items-center',
        text: 'New',
      },
      Completed: {
        className: 'completed d-flex gap-2 align-items-center',
        text: 'Completed',
      },
      Ongoing: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Ongoing',
      },

      Prepared: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Prepared',
      },

      Shipped: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Shipped',
      },
      Recieved: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Recieved',
    },
      Delivered: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Delivered',
      },

       Confirmed: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Confirmed',
      },

      Delayed: {
        className: 'delayed d-flex gap-2 align-items-center',
        text: 'Delayed',
      },
      Canceled: {
        className: 'outstock d-flex gap-2 align-items-center',
        text: 'Canceled',
      },
    };
    if (statusDetails.hasOwnProperty(status)) {
      const { className, text } = statusDetails[status];
      return (
        <div className={className}>
          <i className="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">{text}</p>
        </div>
      );
    }
    return null;
  };

  const filteredData = (status) =>
    mergedUserVendor.filter((item) => item.status == status);


    


  // const data = {
  //   columns: [
  //     {
  //       label: 'PRODUCT',
  //       field: 'name',
  //       sort: 'asc',
  //       width: 150
  //     },
  //     {
  //       label: 'VENDOR',
  //       field: 'position',
  //       sort: 'asc',
  //       width: 270
  //     },
  //     {
  //       label: 'QUANTITY',
  //       field: 'office',
  //       sort: 'asc',
  //       width: 200
  //     },
  //     {
  //       label: 'PRICE PAID',
  //       field: 'age',
  //       sort: 'asc',
  //       width: 100
  //     },
  //     {
  //       label: 'REFERENCE NO',
  //       field: 'date',
  //       sort: 'asc',
  //       width: 150
  //     },
  //     {
  //       label: 'DATE',
  //       field: 'salary',
  //       sort: 'asc',
  //       width: 100
  //     },
  //     {
  //       label: 'STATUS',
  //       field: 'salary',
  //       sort: 'asc',
  //       width: 100
  //     }
  //     ,
  //     {
  //       label: '  ',
  //       field: 'action',
  //       sort: 'NONE',
  //       width: 100
  //     }
  //   ],
  //   rows: [
  //     {
  //       name: 'Tiger Nixon',
  //       position: 'System Architect',
  //       office: 'Edinburgh',
  //       age: '61',
  //       date: '2011/04/25',
  //       salary: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
  //       ,
  //       action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
  //     },
  //     {
  //       name: 'Garrett Winters',
  //       position: 'Accountant',
  //       office: 'Tokyo',
  //       age: '63',
  //       date: '2011/07/25',
  //       salary: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
  //     },
  //     {
  //       name: 'Ashton Cox',
  //       position: 'Junior Technical Author',
  //       office: 'San Francisco',
  //       age: '66',
  //       date: '2009/01/12',
  //       salary: '$86'
  //     },
  //     {
  //       name: 'Cedric Kelly',
  //       position: 'Senior Javascript Developer',
  //       office: 'Edinburgh',
  //       age: '22',
  //       date: '2012/03/29',
  //       salary: '$433'
  //     },
  //     {
  //       name: 'Airi Satou',
  //       position: 'Accountant',
  //       office: 'Tokyo',
  //       age: '33',
  //       date: '2008/11/28',
  //       salary: '$162'
  //     },
  //     {
  //       name: 'Brielle Williamson',
  //       position: 'Integration Specialist',
  //       office: 'New York',
  //       age: '61',
  //       date: '2012/12/02',
  //       salary: '$372'
  //     },
  //     {
  //       name: 'Herrod Chandler',
  //       position: 'Sales Assistant',
  //       office: 'San Francisco',
  //       age: '59',
  //       date: '2012/08/06',
  //       salary: '$137'
  //     },
  //     {
  //       name: 'Rhona Davidson',
  //       position: 'Integration Specialist',
  //       office: 'Tokyo',
  //       age: '55',
  //       date: '2010/10/14',
  //       salary: '$327'
  //     },
  //     {
  //       name: 'Colleen Hurst',
  //       position: 'Javascript Developer',
  //       office: 'San Francisco',
  //       age: '39',
  //       date: '2009/09/15',
  //       salary: '$205'
  //     },
  //     {
  //       name: 'Sonya Frost',
  //       position: 'Software Engineer',
  //       office: 'Edinburgh',
  //       age: '23',
  //       date: '2008/12/13',
  //       salary: '$103'
  //     },
  //     {
  //       name: 'Jena Gaines',
  //       position: 'Office Manager',
  //       office: 'London',
  //       age: '30',
  //       date: '2008/12/19',
  //       salary: '$90'
  //     },
  //     {
  //       name: 'Quinn Flynn',
  //       position: 'Support Lead',
  //       office: 'Edinburgh',
  //       age: '22',
  //       date: '2013/03/03',
  //       salary: '$342'
  //     },
  //     {
  //       name: 'Charde Marshall',
  //       position: 'Regional Director',
  //       office: 'San Francisco',
  //       age: '36',
  //       date: '2008/10/16',
  //       salary: '$470'
  //     },
  //     {
  //       name: 'Haley Kennedy',
  //       position: 'Senior Marketing Designer',
  //       office: 'London',
  //       age: '43',
  //       date: '2012/12/18',
  //       salary: '$313'
  //     },
  //     {
  //       name: 'Tatyana Fitzpatrick',
  //       position: 'Regional Director',
  //       office: 'London',
  //       age: '19',
  //       date: '2010/03/17',
  //       salary: '$385'
  //     },
  //     {
  //       name: 'Michael Silva',
  //       position: 'Marketing Designer',
  //       office: 'London',
  //       age: '66',
  //       date: '2012/11/27',
  //       salary: '$198'
  //     },
  //     {
  //       name: 'Paul Byrd',
  //       position: 'Chief Financial Officer (CFO)',
  //       office: 'New York',
  //       age: '64',
  //       date: '2010/06/09',
  //       salary: '$725'
  //     },
  //     {
  //       name: 'Gloria Little',
  //       position: 'Systems Administrator',
  //       office: 'New York',
  //       age: '59',
  //       date: '2009/04/10',
  //       salary: '$237'
  //     },
  //     {
  //       name: 'Bradley Greer',
  //       position: 'Software Engineer',
  //       office: 'London',
  //       age: '41',
  //       date: '2012/10/13',
  //       salary: '$132'
  //     },
  //     {
  //       name: 'Dai Rios',
  //       position: 'Personnel Lead',
  //       office: 'Edinburgh',
  //       age: '35',
  //       date: '2012/09/26',
  //       salary: '$217'
  //     },
  //     {
  //       name: 'Jenette Caldwell',
  //       position: 'Development Lead',
  //       office: 'New York',
  //       age: '30',
  //       date: '2011/09/03',
  //       salary: '$345'
  //     },
  //     {
  //       name: 'Yuri Berry',
  //       position: 'Chief Marketing Officer (CMO)',
  //       office: 'New York',
  //       age: '40',
  //       date: '2009/06/25',
  //       salary: '$675'
  //     },
  //     {
  //       name: 'Caesar Vance',
  //       position: 'Pre-Sales Support',
  //       office: 'New York',
  //       age: '21',
  //       date: '2011/12/12',
  //       salary: '$106'
  //     },
  //     {
  //       name: 'Doris Wilder',
  //       position: 'Sales Assistant',
  //       office: 'Sidney',
  //       age: '23',
  //       date: '2010/09/20',
  //       salary: '$85'
  //     },
  //     {
  //       name: 'Angelica Ramos',
  //       position: 'Chief Executive Officer (CEO)',
  //       office: 'London',
  //       age: '47',
  //       date: '2009/10/09',
  //       salary: '$1'
  //     },
  //     {
  //       name: 'Gavin Joyce',
  //       position: 'Developer',
  //       office: 'Edinburgh',
  //       age: '42',
  //       date: '2010/12/22',
  //       salary: '$92'
  //     },
  //     {
  //       name: 'Jennifer Chang',
  //       position: 'Regional Director',
  //       office: 'Singapore',
  //       age: '28',
  //       date: '2010/11/14',
  //       salary: '$357'
  //     },
  //     {
  //       name: 'Brenden Wagner',
  //       position: 'Software Engineer',
  //       office: 'San Francisco',
  //       age: '28',
  //       date: '2011/06/07',
  //       salary: '$206'
  //     },
  //     {
  //       name: 'Fiona Green',
  //       position: 'Chief Operating Officer (COO)',
  //       office: 'San Francisco',
  //       age: '48',
  //       date: '2010/03/11',
  //       salary: '$850'
  //     },
  //     {
  //       name: 'Shou Itou',
  //       position: 'Regional Marketing',
  //       office: 'Tokyo',
  //       age: '20',
  //       date: '2011/08/14',
  //       salary: '$163'
  //     },
  //     {
  //       name: 'Michelle House',
  //       position: 'Integration Specialist',
  //       office: 'Sidney',
  //       age: '37',
  //       date: '2011/06/02',
  //       salary: '$95'
  //     },
  //     {
  //       name: 'Suki Burks',
  //       position: 'Developer',
  //       office: 'London',
  //       age: '53',
  //       date: '2009/10/22',
  //       salary: '$114'
  //     },
  //     {
  //       name: 'Prescott Bartlett',
  //       position: 'Technical Author',
  //       office: 'London',
  //       age: '27',
  //       date: '2011/05/07',
  //       salary: '$145'
  //     },
  //     {
  //       name: 'Gavin Cortez',
  //       position: 'Team Leader',
  //       office: 'San Francisco',
  //       age: '22',
  //       date: '2008/10/26',
  //       salary: '$235'
  //     },
  //     {
  //       name: 'Martena Mccray',
  //       position: 'Post-Sales support',
  //       office: 'Edinburgh',
  //       age: '46',
  //       date: '2011/03/09',
  //       salary: '$324'
  //     },
  //     {
  //       name: 'Unity Butler',
  //       position: 'Marketing Designer',
  //       office: 'San Francisco',
  //       age: '47',
  //       date: '2009/12/09',
  //       salary: '$85'
  //     },
  //     {
  //       name: 'Howard Hatfield',
  //       position: 'Office Manager',
  //       office: 'San Francisco',
  //       age: '51',
  //       date: '2008/12/16',
  //       salary: '$164'
  //     },
  //     {
  //       name: 'Hope Fuentes',
  //       position: 'Secretary',
  //       office: 'San Francisco',
  //       age: '41',
  //       date: '2010/02/12',
  //       salary: '$109'
  //     },
  //     {
  //       name: 'Vivian Harrell',
  //       position: 'Financial Controller',
  //       office: 'San Francisco',
  //       age: '62',
  //       date: '2009/02/14',
  //       salary: '$452'
  //     },
  //     {
  //       name: 'Timothy Mooney',
  //       position: 'Office Manager',
  //       office: 'London',
  //       age: '37',
  //       date: '2008/12/11',
  //       salary: '$136'
  //     },
  //     {
  //       name: 'Jackson Bradshaw',
  //       position: 'Director',
  //       office: 'New York',
  //       age: '65',
  //       date: '2008/09/26',
  //       salary: '$645'
  //     },
  //     {
  //       name: 'Olivia Liang',
  //       position: 'Support Engineer',
  //       office: 'Singapore',
  //       age: '64',
  //       date: '2011/02/03',
  //       salary: '$234'
  //     },
  //     {
  //       name: 'Bruno Nash',
  //       position: 'Software Engineer',
  //       office: 'London',
  //       age: '38',
  //       date: '2011/05/03',
  //       salary: '$163'
  //     },
  //     {
  //       name: 'Sakura Yamamoto',
  //       position: 'Support Engineer',
  //       office: 'Tokyo',
  //       age: '37',
  //       date: '2009/08/19',
  //       salary: '$139'
  //     },
  //     {
  //       name: 'Thor Walton',
  //       position: 'Developer',
  //       office: 'New York',
  //       age: '61',
  //       date: '2013/08/11',
  //       salary: '$98'
  //     },
  //     {
  //       name: 'Finn Camacho',
  //       position: 'Support Engineer',
  //       office: 'San Francisco',
  //       age: '47',
  //       date: '2009/07/07',
  //       salary: '$87'
  //     },
  //     {
  //       name: 'Serge Baldwin',
  //       position: 'Data Coordinator',
  //       office: 'Singapore',
  //       age: '64',
  //       date: '2012/04/09',
  //       salary: '$138'
  //     },
  //     {
  //       name: 'Zenaida Frank',
  //       position: 'Software Engineer',
  //       office: 'New York',
  //       age: '63',
  //       date: '2010/01/04',
  //       salary: '$125'
  //     },
  //     {
  //       name: 'Zorita Serrano',
  //       position: 'Software Engineer',
  //       office: 'San Francisco',
  //       age: '56',
  //       date: '2012/06/01',
  //       salary: '$115'
  //     },
  //     {
  //       name: 'Jennifer Acosta',
  //       position: 'Junior Javascript Developer',
  //       office: 'Edinburgh',
  //       age: '43',
  //       date: '2013/02/01',
  //       salary: '$75'
  //     },
  //     {
  //       name: 'Cara Stevens',
  //       position: 'Sales Assistant',
  //       office: 'New York',
  //       age: '46',
  //       date: '2011/12/06',
  //       salary: '$145'
  //     },
  //     {
  //       name: 'Hermione Butler',
  //       position: 'Regional Director',
  //       office: 'London',
  //       age: '47',
  //       date: '2011/03/21',
  //       salary: '$356'
  //     },
  //     {
  //       name: 'Lael Greer',
  //       position: 'Systems Administrator',
  //       office: 'London',
  //       age: '21',
  //       date: '2009/02/27',
  //       salary: '$103'
  //     },
  //     {
  //       name: 'Jonas Alexander',
  //       position: 'Developer',
  //       office: 'San Francisco',
  //       age: '30',
  //       date: '2010/07/14',
  //       salary: '$86'
  //     },
  //     {
  //       name: 'Shad Decker',
  //       position: 'Regional Director',
  //       office: 'Edinburgh',
  //       age: '51',
  //       date: '2008/11/13',
  //       salary: '$183'
  //     },
  //     {
  //       name: 'Michael Bruce',
  //       position: 'Javascript Developer',
  //       office: 'Singapore',
  //       age: '29',
  //       date: '2011/06/27',
  //       salary: '$183'
  //     },
  //     {
  //       name: 'Donna Snider',
  //       position: 'Customer Support',
  //       office: 'New York',
  //       age: '27',
  //       date: '2011/01/25',
  //       salary: '$112'
  //     }
  //   ]
  // };

  return (
    <>
      {/* <div className="d-flex  flex-column gap-3 full">
      <Navigationbar />
      <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
          <SidebarDashboard /> */}

      <div className="background-total p-3 rounded-3">
        <div className='row'>
          <p className='heading'>My Orders</p>
        </div>

        <div>
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="mb-3 bg-white tab"
          >
            <Tab eventKey="all" title="All">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'PRODUCT NAME',
                        field: 'pname',
                        sort: 'asc',
                        width: 150
                      },{
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: mergedUserVendor.map((item) => ({
                      name: item.name,
                      pname: item.product_name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date ,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
              
            </Tab>
            <Tab eventKey="New" title="New">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'PRODUCT NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },{
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: filteredData("New").map((item) => ({
                      name: item.name,
                      pname: item.product_name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
              
            </Tab>
            <Tab eventKey="Ongoing" title="Ongoing">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'PRODUCT NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },{
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: filteredData("Prepared"||"Shipped"||"Delivered"||"Recieved").map((item) => ({
                      name: item.name,
                      pname: item.product_name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                    
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
              Confirmed
            </Tab>
            <Tab eventKey="Canceled" title="Canceled">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'PRODUCT NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },{
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: filteredData("Canceled").map((item) => ({
                      name: item.name,
                      pname: item.product_name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
            </Tab>
            <Tab eventKey="Completed" title="Completed">
             <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'PRODUCT NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },{
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: filteredData("Completed").map((item) => ({
                      name: item.name,
                      pname: item.product_name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
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


export default MyOrder;
