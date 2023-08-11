import React from 'react';
import Sofa from '../../assets/img/vendor/sofa.png';

import '../../styles/vendor/customizedOrders.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';

const newRequestData = {
    columns: [
        {
            label: 'CUSTOMER NAME',
            field: 'customer',
            sort: 'asc',
            width: 200
        },
        {
            label: 'PRODUCT',
            field: 'product',
            sort: 'asc',
            width: 270
        },
        
        {
            label: 'Quantity',
            field: 'quantity',
            sort: 'asc',
            width: 200
        },
        {
            label: 'COLOR AND MATERIAL',
            field: 'color',
            sort: 'asc',
            width: 200 
        },
        {
            label: '',
            field: 'status',
            sort: 'asc',
            width: 100
        },

    ],
    rows:[
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'philosopher Mattress, ebony Wood Lavender Cover',
            status: <div className='d-flex flex-row gap-3'><Link to="/vendor/order"><button className='reject-btn'>Reject</button></Link><button className='accept-btn'>Accept</button><Link to="/vendor/order/customrequest"><button className='view-btn'>View</button></Link></div>
        },    
    ]
}

const acceptedOrderData = {
    columns: [
        {
            label: 'CUSTOMER NAME',
            field: 'customer',
            sort: 'asc',
            width: 200
        },
        {
            label: 'PRODUCT',
            field: 'product',
            sort: 'asc',
            width: 270
        },
        
        {
            label: 'Quantity',
            field: 'quantity',
            sort: 'asc',
            width: 200
        },
        {
            label: 'COLOR',
            field: 'color',
            sort: 'asc',
            width: 150
        },
        {
            label: 'MATERIAL',
            field: 'material',
            sort: 'asc',
            width: 100
        },
        {
            label: '',
            field: 'status',
            sort: 'asc',
            width: 100
        },
    ],
    rows: [
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
        {
            customer: 'Justin Septimus',
            product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <div className="d-flex flex-column">
                <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                <p className="fs-6 fw-normal">Bed Room</p>
                </div>
            </div>,
            quantity: '30000',
            color: 'Red',
            material: 'Cotton',
            status: <div className='d-flex flex-row gap-4'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div><Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
        },
    ]
}

const CustomizeOrders = () => {
    return (
        <>
            <div className="customized-container background-total accordion bg-white rounded-3 mb-4 me-3 p-2">
                <div>
                    <Tabs
                        defaultActiveKey="new"
                        id="uncontrolled-tab-example"
                        className="mb-3 bg-white tab"
                    >
                        <Tab eventKey="new" title="New Requests">
                            <div className='p-4'>

                                <MDBDataTableV5 responsive
                                    striped
                                    bordered
                                    small
                                    data={newRequestData}
                                    sortable={true}
                                    exportToCSV={true}
                                    paging={true}
                                    searching={true} />
                            </div>
                        </Tab>
                        <Tab eventKey="accepted" title="Accepted Orders">
                            <div className='p-4'>

                                <MDBDataTableV5 responsive
                                    striped
                                    bordered
                                    small
                                    data={acceptedOrderData}
                                    sortable={true}
                                    exportToCSV={true}
                                    paging={true}
                                    searching={true} />
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </div>


        </>
    );
}

export default CustomizeOrders;