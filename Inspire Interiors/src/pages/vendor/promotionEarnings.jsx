import React from 'react';
import Sofa from './../../assets/img/vendor/sofa.png';

import '../../styles/vendor/promotionEarnings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';

const tableData = {
    columns: [
        {
          label: 'PRODUCT',
          field: 'product',
          sort: 'asc',
          width: 150
        },
        {
          label: 'DESIGNER',
          field: 'designer',
          sort: 'asc',
          width: 270
        },
        {
          label: 'DATE',
          field: 'date',
          sort: 'asc',
          width: 200
        },
        {
          label: 'PRODUCT PRICE',
          field: 'price',
          sort: 'asc',
          width: 150
        },
        {
           label: 'COMMISION RATE',
           field: 'rate',
           sort: 'asc',
           width: 100
        },
        {
          label: 'SOLD',
          field: 'sold',
          sort: 'asc',
          width: 100
        },
        {
          label: 'PAYMENT STATUS',
          field: 'status',
          sort: 'asc',
          width: 100
        }
    ],
    rows: [
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
    ]
}

const PromotionEarnings = () => (
    <>

        <div className="stock-container background-total accordion bg-white rounded-3 mb-4 me-3">
            <div className="col-12 d-flex flex-column flex-lg-row flex-md-row gap-4 p-3 justify-content-between">
                <p className="text-dark fs-3 fw-bold Cabin-text ">Earnings From Paid Promotions</p>
                <div className='d-flex flex-row gap-3 mt-3'>
                    <Icon.Bank size={25} color='#035C94' />
                    <Link to="/vendor/setting"><p className='fs-5 fw-semibold' style={{color:"#035C94"}}>Bank Details</p></Link>
                </div>
                
            </div>
            <div>
            <Tabs
              defaultActiveKey="all"
              id="uncontrolled-tab-example"
              className="mb-3 bg-white tab"
            >
              <Tab eventKey="all" title="All">
                <div className='p-4'>
             
                  <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={tableData}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                  
                />
                </div>
              </Tab>
              <Tab eventKey="Paid" title="Paid">
                Paid
              </Tab>
              <Tab eventKey="Unpaid" title="Unpaid">
                Unpaid
              </Tab>
              <Tab eventKey="Overdue" title="Overdue">
                Overdue
              </Tab>
            </Tabs>
          </div>
        </div>


    </>
)

export default PromotionEarnings;