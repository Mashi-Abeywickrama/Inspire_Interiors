import React ,  { useEffect, useState }from 'react';

import '../../styles/customerSupport/delivery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { MDBDataTableV5, MDBTable } from 'mdbreact';

// const tabledata = {
//     columns: [
//     {
//         label: 'CUSTOMER NAME',
//         field: 'customer',
//         sort: 'asc',
//         width: 150
//     },
//     {
//         label: 'REFERENCE NO',
//         field: 'reference',
//         sort: 'asc',
//         width: 200
//     },
//     {
//         label: 'VENDOR CODE',
//         field: 'vendor',
//         sort: 'asc',
//         width: 270
//     },
//     {
//         label: 'STATUS',
//         field: 'status',
//         sort: 'asc',
//         width: 100
//     },
//     {
//         label: '  ',
//         field: 'action',
//         sort: 'NONE',
//         width: 100
//     }
//     ],
//     rows: [
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='ongoing d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Pending</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },    
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='outstock d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>canceled</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='outstock d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>canceled</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='ongoing d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Pending</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='outstock d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>canceled</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='ongoing d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Pending</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },
//     {
//         customer: 'Justin Septimus',
//         reference: '14689',
//         vendor: '30000',
//         status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
//         ,
//         action:<Link to="view"> <div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div></Link>
//     },

// ]
// };

const Delivery = () => {

    const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend
  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  const [deliveryData, setDeliveryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('All'); // State to hold the selected tab title

  useEffect(() => {
    axiosInstance
      .get('/getorder')
      .then((response) => {
        const data = response.data;
        setDeliveryData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error from backend:', error);
        setLoading(false);
      });
  }, [axiosInstance]);

  const getStatusComponent = (status) => {
    // Define the mapping of status to CSS classes and text
    const statusMap = {
      Completed: {
        className: 'completed d-flex gap-2 align-items-center',
        text: 'Completed',
      },
      Ongoing: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Ongoing',
      },
      Delayed: {
        className: 'delayed d-flex gap-2 align-items-center',
        text: 'Delayed',
      },
      Dispute: {
        className: 'outstock d-flex gap-2 align-items-center',
        text: 'Canceled',
      },
    };
    if (statusMap.hasOwnProperty(status)) {
      const { className, text } = statusMap[status];
      return (
        <div className={className}>
          <i className="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">{text}</p>
        </div>
      );
    }

    return null;
  };


    return (
    <>

        <div className="delivery-container background-total accordion bg-white rounded-3 mb-4 me-3">
            <div className="col-12 d-flex flex-row justify-content-between">
                <div className='d-flex flex-row gap-4 p-3 '>
                    <p className="text-dark fs-5 fw-bold Cabin-text ">Delivery</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>All</p>
                </div>
                {/* <div>
                    <button className='add-btn m-4'><Icon.PlusLg color="white" size={20} />Add New</button>
                </div> */}
            </div>
            <div>
            <Tabs
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            className="mb-3 bg-white tab"
            onSelect={(selectedKey) => setSelectedTab(selectedKey)}
          >
            <Tab eventKey="All" title="All">
              <div className="p-4">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: 'CUSTOMER NAME',
                          field: 'customer',
                          sort: 'asc',
                          width: 150,
                        },
                                                {
                          label: 'REFERENCE NO',
                          field: 'reference',
                          sort: 'asc',
                          width: 200,
                        },
                        {
                            label: 'VENDOR CODE',
                            field: 'inquiry',
                            sort: 'asc',
                            width: 150,
                        },
                        {
                          label: 'STATUS',
                          field: 'status',
                          sort: 'asc',
                          width: 100,
                        },
                        {
                          label: '  ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100,
                        },
                      ],
                      rows: deliveryData.map((item) => ({
                        customer: item.customer,
                        vendor: item.vendor,
                        reference: item.ref_no,
                        status: getStatusComponent(item.status),
                        action: (
                            <Link to={`/manager/delivery/view/${item.orderid}`}>
                            <div className="d-flex gap-2 align-items-center">
                              <p className="m-0 text-black">View More</p>{' '}
                              <Icon.ArrowRight color="#000" />
                            </div>
                        //   </Link>
                        ),
                      })),
                    }}
                    sortable={true}
                    exportToCSV={true}
                    paging={true}
                    searching={true}
                  />
                )}
              </div>
            </Tab>
            <Tab eventKey="Ongoing" title="Ongoing">
              <div className="p-4">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: 'CUSTOMER NAME',
                          field: 'customer',
                          sort: 'asc',
                          width: 150,
                        },
                                                {
                          label: 'REFERENCE NO',
                          field: 'reference',
                          sort: 'asc',
                          width: 200,
                        },
                        {
                            label: 'VENDOR CODE',
                            field: 'inquiry',
                            sort: 'asc',
                            width: 150,
                        },
                        {
                          label: 'STATUS',
                          field: 'status',
                          sort: 'asc',
                          width: 100,
                        },
                        {
                          label: '  ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100,
                        },
                      ],
                      rows: deliveryData.map((item) => ({
                        customer: item.customer,
                        vendor: item.vendor,
                        reference: item.ref_no,
                        status: getStatusComponent(item.status),
                        action: (
                            <Link to={`/manager/delivery/view/${item.orderid}`}>
                            <div className="d-flex gap-2 align-items-center">
                              <p className="m-0 text-black">View More</p>{' '}
                              <Icon.ArrowRight color="#000" />
                            </div>
                        //   </Link>
                        ),
                      })),
                    }}
                    sortable={true}
                    exportToCSV={true}
                    paging={true}
                    searching={true}
                  />
                )}
              </div>
            </Tab>

            <Tab eventKey="Completed" title="Completed">
              <div className="p-4">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: 'CUSTOMER NAME',
                          field: 'customer',
                          sort: 'asc',
                          width: 150,
                        },
                                                {
                          label: 'REFERENCE NO',
                          field: 'reference',
                          sort: 'asc',
                          width: 200,
                        },
                        {
                            label: 'VENDOR CODE',
                            field: 'inquiry',
                            sort: 'asc',
                            width: 150,
                        },
                        {
                          label: 'STATUS',
                          field: 'status',
                          sort: 'asc',
                          width: 100,
                        },
                        {
                          label: '  ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100,
                        },
                      ],
                      rows: deliveryData.map((item) => ({
                        customer: item.customer,
                        vendor: item.vendor,
                        reference: item.ref_no,
                        status: getStatusComponent(item.status),
                        action: (
                            <Link to={`/manager/delivery/view/${item.orderid}`}>
                            <div className="d-flex gap-2 align-items-center">
                              <p className="m-0 text-black">View More</p>{' '}
                              <Icon.ArrowRight color="#000" />
                            </div>
                        //   </Link>
                        ),
                      })),
                    }}
                    sortable={true}
                    exportToCSV={true}
                    paging={true}
                    searching={true}
                  />
                )}
              </div>
            </Tab>

                    <Tab eventKey="Delayed" title="Delayed">
              <div className="p-4">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: 'CUSTOMER NAME',
                          field: 'customer',
                          sort: 'asc',
                          width: 150,
                        },
                                                {
                          label: 'REFERENCE NO',
                          field: 'reference',
                          sort: 'asc',
                          width: 200,
                        },
                        {
                            label: 'VENDOR CODE',
                            field: 'inquiry',
                            sort: 'asc',
                            width: 150,
                        },
                        {
                          label: 'STATUS',
                          field: 'status',
                          sort: 'asc',
                          width: 100,
                        },
                        {
                          label: '  ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100,
                        },
                      ],
                      rows: deliveryData.map((item) => ({
                        customer: item.customer,
                        vendor: item.vendor,
                        reference: item.ref_no,
                        status: getStatusComponent(item.status),
                        action: (
                            <Link to={`/manager/delivery/view/${item.orderid}`}>
                            <div className="d-flex gap-2 align-items-center">
                              <p className="m-0 text-black">View More</p>{' '}
                              <Icon.ArrowRight color="#000" />
                            </div>
                        //   </Link>
                        ),
                      })),
                    }}
                    sortable={true}
                    exportToCSV={true}
                    paging={true}
                    searching={true}
                  />
                )}
              </div>
            </Tab>

            <Tab eventKey="Dispute" title="Dispute">
              <div className="p-4">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: 'CUSTOMER NAME',
                          field: 'customer',
                          sort: 'asc',
                          width: 150,
                        },
                                                {
                          label: 'REFERENCE NO',
                          field: 'reference',
                          sort: 'asc',
                          width: 200,
                        },
                        {
                            label: 'VENDOR CODE',
                            field: 'inquiry',
                            sort: 'asc',
                            width: 150,
                        },
                        {
                          label: 'STATUS',
                          field: 'status',
                          sort: 'asc',
                          width: 100,
                        },
                        {
                          label: '  ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100,
                        },
                      ],
                      rows: deliveryData.map((item) => ({
                        customer: item.customer,
                        vendor: item.vendor,
                        reference: item.ref_no,
                        status: getStatusComponent(item.status),
                        action: (
                          <Link to={`/manager/delivery/view/${item.orderid}`}>
                            <div className="d-flex gap-2 align-items-center">
                              <p className="m-0 text-black">View More</p>{' '}
                              <Icon.ArrowRight color="#000" />
                            </div>
                        //   </Link>
                        ),
                      })),
                    }}
                    sortable={true}
                    exportToCSV={true}
                    paging={true}
                    searching={true}
                  />
                )}
              </div>
            </Tab>

                </Tabs>
            </div>
        </div>


    </>
    );
}

export default Delivery;
