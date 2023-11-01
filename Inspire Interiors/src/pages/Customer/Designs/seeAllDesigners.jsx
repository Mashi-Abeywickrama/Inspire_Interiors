import React, {useEffect, useState} from 'react';

import '../../../styles/vendor/browseDesigner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/customer/myOrders.css';
import '../../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import { Breadcrumb } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ViewAllDesigners = () => {
  const [designerData, setDesignerData] = useState([]);

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  useEffect(() => {
    axiosInstance
      .get("/filtertype/designer")
      .then((response) => {
        console.log(response.data);
        setDesignerData(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
    });
  }, []);

  return(
    <>
      <div className="designer-container background-total accordion bg-white rounded-3 mb-4 me-3">
      <div className='bg-light top-bar rounded py-3'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5'>
                                <Breadcrumb  className="fw-bold">
                                    <Breadcrumb.Item  href='/customer/designs'>
                                        Designs
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active >
                                        <FontAwesomeIcon icon={faAngleRight} className="me-2 ms-2" />
                                        Browse Designers
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                                        All
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <div className='col-md-4 col-sm-6 col-6 text-center'>
                            </div>
                            
                        </div>
                    </div>
                </div>
          <div>
              <div className='p-4 Cabin-text'>

                  <MDBDataTableV5 responsive
                    striped
                    bordered
                    small
                    data = {{
                      columns: [
                        {
                          label: 'DESIGNER NAME',
                          field: 'name',
                          sort: 'asc',
                          width: 150
                        },
                        {
                          label: 'DESIGNER EMAIL',
                          field: 'email',
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
                          label: 'SOLD DESIGNS',
                          field: 'sold',
                          sort: 'asc',
                          width: 200
                        },
                        {
                          label: ' ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100
                        }
                      ],
                      rows: designerData.map(designer=>({
                        name: designer.name,
                        email: designer.email,
                        total: 50,
                        sold: 30,
                        action: <Link to={`/customer/designs/viewdesigner?id=${designer.userid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
                      }))
                    }}
                    sortable={true}
                    exportToCSV={true}
                    paging={true}
                    searching={true} 
                  />
              </div>
          </div>
      </div>
    </>
  )
};

export default ViewAllDesigners;