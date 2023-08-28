import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import LineChart from './../../components/admin/linechart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';



import './../../styles/admin/commission.css'

export default function commisssion() {
    const data = {
        columns: [
          {
            label: 'User',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'PRODUCT/DESIGN',
            field: 'type',
            sort: 'asc',
            width: 150
          },
          {
            label: 'PRICE',
            field: 'ammount',
            sort: 'asc',
            width: 270
          },
          {
            label: 'COMMISSION',
            field: 'number',
            sort: 'asc',
            width: 200
          },
         
          {
            label: '  ',
            field: 'action',
            sort: 'NONE',
            width: 100
          }
        ],
        rows: [
            {
              name: 'Tiger Nixon',
              type: 'Design',
              ammount: '4000 Rs',
              number: '300 Rs',
              age: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
              ,
              action: <Link to="/admin/commision/commissionView"><div className='d-flex gap-2 align-items-center text-dark'><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
             },
             {
              name: 'Tiger Nixon',
              type: 'Design',
              ammount: '4000 Rs',
              number: '300 Rs',
              age: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
              ,
              action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
             },
             {
              name: 'Tiger Nixon',
              type: 'Design',
              ammount: '4000 Rs',
              number: '300 Rs',
              age: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
              ,
              action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>View More</p> <Icon.ArrowRight/></div>
             }
            ]
        };
  return (
    <Container fluid>

    <div >

        
          <div className="d-flex flex-col fs-2">Commission </div> 
       
      <div className='d-flex flex-column col-12 gap-3 '>
        <div className=' bg-white'> 
        
        <div className='d-flex flex-column gap-3 m-2'>
          <div className='d-flex flex-row gap-3 ' >
          <div className='d-flex flex-column gap-2' >
          <span className='heading fs-3'>Total Revenue</span>

          <div className='earned d-flex flex-row gap-2 h-100'>
            <div className='d-flex flex-column justify-content-center p-2'>
              <span className='d-flex fs-3 '>Commission Earned  </span>
            </div>
            <span className='fs-4 p-3'>230.3M </span>
          </div>
          <div className='pending2 d-flex flex-row gap-2 h-100 '>
            <div className='d-flex flex-column justify-content-center p-2'>
              <span className='d-flex fs-3'>Commission Earned  </span>
            </div>
            <span className='fs-4 p-3'>230.3M </span>
          </div>
        </div>
              <div className='line-v d-flex'></div>

              <div>
                <span  className='heading fs-3 align-items-center'>Sales</span>
                <LineChart/>
                

              </div>
            </div>
           
        </div>
        </div>
        
        <div className='d-flex flex-row gap-3 p-2 shadow'>
             <div className='bg-white p-3 justify-content-center col-8'> 
             <div>
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
                  data={data}
                  sortable={true}
                  exportToCSV={true}
                  
                />
                </div>
              </Tab>
              
              <Tab eventKey="Designers" title="Designers">
                Designers
              </Tab>
              <Tab eventKey="Vendor" title="Vendor">
                Vendors
              </Tab>
            </Tabs>
          </div>

             </div>
             </div>

            <div className=' d-flex bg-white flex-column gap-3 p-2 col-4 flex-fill '> 
            <span  className='heading fs-3'>Commission Rate</span>
             <div className='product d-flex p-2 shadow flex-column h-100 '>
              <div className='com-earned d-flex fs-4'>Product</div>
              <div className='d-flex flex-row gap-5 justify-content-center'>
                <span>Price range</span>
                <span>Rate</span>
              </div>
              <div className='line d-flex '></div>
              <div className='d-flex flex-row gap-3 justify-content-center'>
                <span>00  5000</span>
                <div class="progress">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"  ></div>
                </div>
                <span>18%</span>
              </div>
              <div className='d-flex flex-row gap-3 justify-content-center '>
                <span>5,000  10,000</span>
                <div class="progress">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"  ></div>
                </div>  
                <span>18%</span>
              </div>
              <div className='d-flex flex-row gap-3 justify-content-center'>
                <span>10,000  20,000</span>
                <div class="progress">
                  <div class="progress-barbg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"  ></div>
                </div>  
                <span>18%</span>
              </div>
             </div>
              
             <div className='product d-flex p-2 shadow flex-column h-100 flex-fill'>
              <div className='com-earned d-flex fs-4'>Design</div>
              <div className='d-flex flex-row gap-5'>
                <span>Price range</span>
                <span>Rate</span>
              </div>
              <div className='line d-flex w-100'></div>
              <div className='d-flex flex-row gap-3 justify-content-center'>
                <span>00  5000</span>
                <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"  ></div>
                </div>  
                <span>18%</span>
              </div>
              <div className='d-flex flex-row gap-3 justify-content-center'>
                <span>5,000  10,000</span>
                <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"  ></div>
                </div>  
                <span>18%</span>
              </div>
              <div className='d-flex flex-row gap-3 '>
                <span className='d-flex ' >10,000  20,000</span>
                <div class="progress">
                <div class="progress-barbg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"  ></div>
                </div>  
                <span className='d-flex'>18%</span>
              </div>
             </div>
            </div>
           
            
             </div>

      </div>
    </div></Container>
  )
}
