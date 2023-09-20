import { React, useEffect, useState } from 'react';

import '../../styles/customerSupport/refund.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import { useSession } from '../../constants/SessionContext';

import { Link } from 'react-router-dom';

import { MDBDataTableV5, MDBTable } from 'mdbreact';

const Refund = () => {
    const apiBaseURL = 'http://localhost:8080';
    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });
    
    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const [inquiryData, setInquiryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState('All'); // State to hold the selected tab title

    useEffect(() => {
        axiosInstance
            .get('/refund-inquiry')
            .then((response) => {
                const data = response.data;
                setInquiryData(data);
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
            Canceled: {
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

    // Filter data based on status
    const filteredData = (status) =>
        inquiryData.filter((item) => item.inquiry_status === status);

    return (
        <>

            <div className="refund-container background-total accordion bg-white rounded-3 mb-4 me-3">
                <div className="col-12 d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row gap-4 p-3 '>
                        <p className="text-dark fs-5 fw-bold Cabin-text ">Refund Requests</p>
                        <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                        <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{inquiryData.inquiry_status}</p>
                    </div>
                    <div>
                        <button className='add-btn m-4'><Icon.PlusLg color="white" size={20} />Add New</button>
                    </div>
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
                                                    label: 'INQUIRY DATE',
                                                    field: 'date',
                                                    sort: 'asc',
                                                    width: 100,
                                                },
                                                {
                                                    label: 'STATUS',
                                                    field: 'status',
                                                    sort: 'none',
                                                    width: 150,
                                                },
                                                {
                                                    label: '  ',
                                                    field: 'action',
                                                    sort: 'NONE',
                                                    width: 100,
                                                },
                                            ],
                                            rows: inquiryData.map((item) => ({
                                                customer: item.username,
                                                reference: item.inquiry_reference,
                                                date: item.inquiry_date,
                                                status: getStatusComponent(item.inquiry_status),
                                                action: (
                                                    <Link to={`/customersupport/inquiry/view/${item.inquiry_type}/${item.inquiry_id}`}>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="m-0 text-black">View More</p>{' '}
                                                            <Icon.ArrowRight color="#000" />
                                                        </div>
                                                    </Link>
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
                                            rows: filteredData('Ongoing').map((item) => ({
                                                customer: item.username,
                                                reference: item.inquiry_reference,
                                                status: getStatusComponent(item.inquiry_status),
                                                action: (
                                                    <Link to={`/customersupport/inquiry/view/${item.inquiry_type}/${item.inquiry_id}`}>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="m-0 text-black">View More</p>{' '}
                                                            <Icon.ArrowRight color="#000" />
                                                        </div>
                                                    </Link>
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
                                            rows: filteredData('Completed').map((item) => ({
                                                customer: item.username,
                                                reference: item.inquiry_reference,
                                                status: getStatusComponent(item.inquiry_status),
                                                action: (
                                                    <Link to={`/customersupport/inquiry/view/${item.inquiry_type}/${item.inquiry_id}`}>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="m-0 text-black">View More</p>{' '}
                                                            <Icon.ArrowRight color="#000" />
                                                        </div>
                                                    </Link>
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
                                            rows: filteredData('Delayed').map((item) => ({
                                                customer: item.username,
                                                reference: item.inquiry_reference,
                                                status: getStatusComponent(item.inquiry_status),
                                                action: (
                                                    <Link to={`/customersupport/inquiry/view/${item.inquiry_type}/${item.inquiry_id}`}>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="m-0 text-black">View More</p>{' '}
                                                            <Icon.ArrowRight color="#000" />
                                                        </div>
                                                    </Link>
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

                        <Tab eventKey="Canceled" title="Canceled">
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
                                            rows: filteredData('Canceled').map((item) => ({
                                                customer: item.username,
                                                reference: item.inquiry_reference,
                                                status: getStatusComponent(item.inquiry_status),
                                                action: (
                                                    <Link to={`/customersupport/inquiry/view/${item.inquiry_type}/${item.inquiry_id}`}>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="m-0 text-black">View More</p>{' '}
                                                            <Icon.ArrowRight color="#000" />
                                                        </div>
                                                    </Link>
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
    )
}

export default Refund;
