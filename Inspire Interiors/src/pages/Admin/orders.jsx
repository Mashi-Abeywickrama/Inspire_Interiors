import React from 'react';
import { Button, InputGroup, Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBDataTableV5, MDBTable } from 'mdbreact';



import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../styles/customer/myOrders.css';
import './../../styles/admin/table.css';


const Order = () => {
  const data = {
    columns: [
      {
        label: "PRODUCT/DESIGN",
        field: "office",
        sort: "asc",
        width: 150,
      },
      {
        label: "VENDOR/DESIGNER",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "QUANTITY",
        field: "QTY",
        sort: "asc",
        width: 200,
      },
      {
        label: "COMMISSION",
        field: "salary",
        sort: "asc",
        width: 100,
      },
      {
        label: "REFERENCE NO",
        field: "number",
        sort: "asc",
        width: 150,
      },
      {
        label: "CUSTOMER",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: "STATUS",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "  ",
        field: "action",
        sort: "NONE",
        width: 100,
      },
    ],
    rows: [
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="pending d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Pending</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="pending d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Pending</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        Qty: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
    ],
  };

  return (
    <>  
    {/* <div className="d-flex  flex-column gap-3 full">
      <Navigationbar />
      <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
          <SidebarDashboard /> */}

        <div className="background-total p-3 rounded-3">
          <div className='row'>
            <p className='heading'>Orders</p>
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
                  data={data}
                  sortable={true}
                  exportToCSV={true}
                  
                />
                </div>
              </Tab>
              <Tab eventKey="Completed" title="Completed">
                Completed
              </Tab>
              <Tab eventKey="Ongoing" title="Ongoing">
                Ongoing
              </Tab>
              <Tab eventKey="Delayed" title="Delayed">
                Delayed
              </Tab>
              <Tab eventKey="Canceled" title="Canceled">
                Canceled
              </Tab>
            </Tabs>
          </div>
        </div>


      {/* </div> */}
   {/* </div> */}
  </>
    
  );
}


export default Order;
