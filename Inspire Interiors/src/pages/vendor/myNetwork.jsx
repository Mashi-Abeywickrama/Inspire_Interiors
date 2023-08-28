import React from 'react';
import Sofa from './../../assets/img/vendor/sofa.png';

import '../../styles/vendor/viewStocks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';

const tabledata = {
    columns: [
      {
        label: 'DESIGNER NAME',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TOTAL DESIGNS',
        field: 'total',
        sort: 'asc',
        width: 270
      },
      {
        label: 'REVIEW',
        field: 'review',
        sort: 'asc',
        width: 200
      },
      {
        label: 'PROMOTION INITIALISED DATE',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'PRODUCT SOLD',
        field: 'product',
        sort: 'asc',
        width: 150
      },
      {
        label: 'EARNINGS',
        field: 'earnings',
        sort: 'asc',
        width: 100
      },
      {
        label: 'STATUS',
        field: 'status',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='withdraw d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Withdraw</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='withdraw d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Withdraw</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='withdraw d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Withdraw</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='withdraw d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Withdraw</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Victor Avacado',
        total: '100',
        review: '4.5',
        date: '2023/07/20',
        product: '60',
        earnings: '4000Rs',
        status: <div className='withdraw d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Withdraw</p></div>,
        action: <Link to="/vendor/promotion/mynetwork"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
    ]
};

const MyNetwork = () => (
    <>

        <div className="network-container background-total accordion bg-white rounded-3 mb-4 me-3">
            <div className='d-flex flex-row gap-4 p-3 '>
                <Link to="/vendor/promotion"><p className="text-dark fs-5 fw-bold Cabin-text text-dark">Promotion</p></Link>
                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>My Network</p>
            </div>
            <div>
                <div className='p-4 Cabin-text'>

                    <MDBDataTableV5 responsive
                        striped
                        bordered
                        small
                        data={tabledata}
                        sortable={true}
                        exportToCSV={true}
                        paging={true}
                        searching={true} />
                </div>
            </div>
        </div>


    </>
)

export default MyNetwork;