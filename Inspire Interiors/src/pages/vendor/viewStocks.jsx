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

const tabledata = {
    columns: [
      {
        label: 'PRODUCT',
        field: 'product',
        sort: 'asc',
        width: 150
      },
      {
        label: 'AMOUNT',
        field: 'amount',
        sort: 'asc',
        width: 270
      },
      {
        label: 'ENTRY PRICE',
        field: 'entry',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DISCOUNT',
        field: 'discount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'PRICE',
        field: 'price',
        sort: 'asc',
        width: 150
      },
      {
        label: 'SOLD',
        field: 'sold',
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
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'7',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'12',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'22',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      }, 
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: 'Arpico',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
      },
    ]
  };

const ViewStocks = () => (
    <>

        <div className="stock-container background-total accordion bg-white rounded-3 mb-4 me-3">
            <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
              <div className='d-flex flex-row gap-4 p-3 '>
                <p className="text-dark fs-3 fw-bold Cabin-text ">Inventory</p>
                <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Stock</p>
              </div>
              <div>
                <button className='add-btn m-4'><Icon.PlusLg color="white" size={20}/>Add New</button>
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
                  data={tabledata}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                  
                />
                </div>
              </Tab>
              <Tab eventKey="Instock" title="In Stock">
                In Stock
              </Tab>
              <Tab eventKey="Lowstock" title="Low Stock">
                Low Stock
              </Tab>
              <Tab eventKey="Outstock" title="Out of Stock">
                Out of Stock
              </Tab>
            </Tabs>
          </div>
        </div>


    </>
)

export default ViewStocks;